(ns dep.model.lehrveranstaltung
  (:require 
   [dep.model.manipel
    :refer [semesterInQuartal zu-unterrichtende-manipels-quartal]]
   [dep.model.modul :refer [mussModulUnterrichtetWerdenFuer-inQuartal?
                            wochenStundenInSemester]]))

;; Konstruktor

(defn ->Lehrveranstaltung
  "Erzeugt ein Lehrveranstaltungsexemplar."
  [modul quartal dozent wiederholungsFaktor manipel]
  {:id (gensym) :modul modul :quartal quartal :dozent dozent
   :wiederholungsFaktor wiederholungsFaktor :manipel manipel
   :anzahlGruppen (:anzahlGruppen manipel)})

;; Planung
(defn semesterWochenstunden
  "Berechnet die Semesterwochenstunden einer Lehrveranstaltung lv."
  [lv]
  (wochenStundenInSemester (:modul lv)
                           (semesterInQuartal (:manipel lv) (:quartal lv))))


(defn manipel-modullisten-map-fuer-quartal
  "Ermittelt eine Hashmap mit je einem Manipel als key und einer Liste von Modulen
  als value der Module, die in einem quartal angeboten werden müssen."
  [manipels module quartal]
  (let [modulliste second]
    (into
     {} (filter
         #(not (empty? (modulliste %)))
         (map (fn [mpl] 
                [mpl (filter
                      #(mussModulUnterrichtetWerdenFuer-inQuartal?
                        % mpl quartal)
                      module)]) manipels)))))

(defn lven-vector
  "Erzeugt aus einer Manipel-Modullisten-Map einen Vektor aus Lehrveranstaltungen für
  ein quartal."
  [lv-map quartal]
  (into []
        (mapcat (fn [ml]
                  (map #(->Lehrveranstaltung  % quartal "NN" 1 (key ml)) (val ml)))
                lv-map)))

(defn lehrveranstaltungen-fuer-quartal
  "Erzeugt einen Vektor mit den Lehrveranstaltungen, die für die manipels und module
  in einem quartal geplant werden müssen."
  [quartal manipels module]
  (-> manipels
      (zu-unterrichtende-manipels-quartal quartal)
      (manipel-modullisten-map-fuer-quartal module quartal)
      (lven-vector quartal))) 

(defn lv-mit-id
  "Liefert die Lehrveranstaltung mit der gegebenen id."
  [lven id]
  (first (filter #(= (:id %) id) lven)))

(defn semester 
  "Bestimmt das Semester des Manipels im Quartal der Lehrveranstaltung (Lv)."
  [lv]
  (semesterInQuartal (:manipel lv) (:quartal lv)))


;; Examples
;; (def l1 
;;   (->Lehrveranstaltung
;;    (->Modul 'A107 "PP" {5 5 6 4} "AI" (->Quartal 4 2000) (->Quartal 3 2099))
;;    (->Quartal 4 2019)
;;    (->Dozent "Gans" "Gustav" {} true 600)
;;    1
;;    (->Manipel "AI" 'I17 (->Quartal 4 2017)
;;               2 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
;;                  (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
;;                  (->Quartal 4 3) 7})))
;; (semesterWochenstunden l1)
;; (lvStunden l1)

