(ns dep.model.quartal) 

;; Konstruktor
(defn ->Quartal [nr jahr]
  {:pre [(contains? #{1 2 3 4} nr)]}
  {:nr nr :jahr jahr})

(defn parse-int
  "Wandelt strng in number."
  [strng]
  #?(:clj (Integer/parseInt strng)
     :cljs (js/parseInt strng)))

(defn geschaeftsjahreszahl
  "Liefert das Geschäftsjahr, in dem Quartal liegt."
  [quartal] 
  (if (= (:nr quartal) 4) (+ (:jahr quartal) 1) (:jahr quartal)))

(defn minus
  "Bildet die Differenz zweier Quartale."
  [q1 q2]
  (->Quartal (:nr q1) (- (:jahr q1) (:jahr q2))))

(defn vor
  "Liefert true, wenn q1 vor q2 liegt."
  [q1 q2]
  (or (< (:jahr q1) (:jahr q2))
      (and (= (:jahr q1) (:jahr q2))
           (<= (:nr q1) (:nr q2)))))

(defn liegt-zwischen
  "Liefert true, wenn q1 zwischen q2 und q3 liegt."
  [q1 q2 q3]
  (and (vor q2 q1) (vor q1 q3)))

(defn quartale-fuer-jahr
  "Liefert die Quartale für das Geschäftsjahr jahr."
  [jahr]
  [(->Quartal 4 (- jahr 1)) (->Quartal 1 jahr)
   (->Quartal 2 jahr) (->Quartal 3 jahr)])

(defn quartal->string
  [quartal]
  (str (:jahr quartal) "-" (:nr quartal)))

(defn string->quartal
  [strng]
  (let [[jahr quartal] (mapv parse-int (clojure.string/split strng #"-"))]
    (->Quartal quartal jahr)))

(defn semester->quartal
  "Ermittelt aus dem Studienbeginn (stb) und der Jahr-Semesterzuordnung (jsz) eines
  Manipels das Quartal des Semesters sem."
  [sem stb jsz]
  (let [sq (->> jsz
                (group-by val )
                (#(get % sem))
                (map key) (first))]
    (->Quartal (:nr sq) (+ (:jahr stb) (:jahr sq)))))

(defn sieben-semester->quartstrng
  "Liefert Quartals-Strings für die 7 Semester eines Manipels."
  [stb jsz] 
  (apply merge (for [sem (range 1 8)]
                 {(keyword (str "Sem-" sem))
                  (quartal->string (semester->quartal sem stb jsz))})))

;; Examples
;; (geschaeftsjahreszahl (->Quartal 4 2017))
;; (geschaeftsjahreszahl (->Quartal 2 2017))

;; (= (minus (->Quartal 4 2017) (->Quartal 4 2016)) {:nr 4, :jahr 1})

;; (vor (->Quartal 4 2017) (->Quartal 4 2018))
;; (vor (->Quartal 3 2017) (->Quartal 4 2017))
;; (not (vor (->Quartal 3 2017) (->Quartal 1 2017)))
;; (not (vor (->Quartal 3 2017) (->Quartal 1 2016)))

;; (liegt-zwischen (->Quartal 4 2017) (->Quartal 4 2017) (->Quartal 4 2017))
;; (liegt-zwischen (->Quartal 4 2017) (->Quartal 4 2017) (->Quartal 4 2099))
;; (not (liegt-zwischen (->Quartal 4 2017) (->Quartal 4 2015) (->Quartal 3 2017)))
