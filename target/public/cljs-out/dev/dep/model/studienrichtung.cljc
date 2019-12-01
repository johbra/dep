(ns dep.model.studienrichtung
  (:require
   [potpuri.core :as p]
   [dep.model.quartal :refer [quartal->string sieben-semester->quartstrng minus
                              ->Quartal string->quartal parse-int]]))


;; Konstruktor
(defn ->Studienrichtung
  "Erzeugt ein Studienrichtungs-'Objekt' (hash-map)."
  [name quartal-Semester-Zuordnung]
  {:name name :quartal-Semester-Zuordnung quartal-Semester-Zuordnung})

;; Planung

(defn studienrichtung-mit-namen
  "Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen."
  [studienrichtungen string]
  (first (filter #(= (:name %) string) studienrichtungen)))

;; View
(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular."
  [:div.row
   [:div.col-md-3 [:label label]]
   [:div.col-md-9 input]])

(def studienrichtung-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Bezeichnung" [:input {:field :text :id :Bezeichnung}])
   (row "Semester 1" [:input {:field :text :id :Sem-1}])
   (row "Semester 2" [:input {:field :text :id :Sem-2}])
   (row "Semester 3" [:input {:field :text :id :Sem-3}])
   (row "Semester 4" [:input {:field :text :id :Sem-4}])
   (row "Semester 5" [:input {:field :text :id :Sem-5}])
   (row "Semester 6" [:input {:field :text :id :Sem-6}])
   (row "Semester 7" [:input {:field :text :id :Sem-7}])])

(def studienrichtung-spalten
  "Die Spaltenüberschriften der Studienrichtungstabelle."
  (concat [:Bezeichnung]
          (vec (for [sem (range 1 8)]
                 (keyword (str "Sem-" sem))))))

(defn studienrichtungen->table
  "Wandelt die studienrichtungen für die Darstellung als Tabelle um. "
  [studienrichtungen]
  (mapv #(merge (hash-map :Bezeichnung (:name %))
                (sieben-semester->quartstrng (->Quartal 4 0)
                                             (:quartal-semester-zuordnung %)))
        studienrichtungen))

(defn aender-studienrichtung 
  "Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten."
  [studienrichtung aenderungen]
  (let [qsz (dissoc aenderungen :Bezeichnung)
        qsz (p/map-vals string->quartal qsz)
        qsz (clojure.set/map-invert qsz)
        qsz (p/map-vals #(parse-int (last (clojure.string/split (str %) #"-"))) qsz)]
    (assoc studienrichtung :quartal-semester-zuordnung qsz
           :name (:Bezeichnung aenderungen))))

(defn studienrichtungen-verwaltung
  "Liefert die Infos für die Studienrichtungstabelle und das Bearbeitungsformular."
  [buttons]
  {:data (fn [s] [:studienrichtungen])
   :title "Studienrichtungen"
   :table-column-titles studienrichtung-spalten
   :table-row-fn studienrichtungen->table
   :table-key-column :Bezeichnung
   :edit-component studienrichtung-form-template
   :title-buttons {:modal-title "Studienrichtung" :buttons buttons}
   :width "100%"
   :data-id :name
   :id-fn identity
   :dataset-exists-fn studienrichtung-mit-namen
   :update-fn aender-studienrichtung}) 

;; Erzeugen von Beispieldaten
;; (defn erzeuge-studienrichtungen
;;   []
;;   [(->Studienrichtung "Wirtschaftsinformatik-Bachelor")
;;    (->Studienrichtung "Angewandte-Informatik-Bachelor")
;;    (->Studienrichtung "Wirtschaftsingenieurwesen-Bachelor")
;;    (->Studienrichtung "Betriebswirtschaftslehre-Bachelor")])

