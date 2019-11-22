(ns dep.model.studienrichtung)


;; Konstruktor
(defn ->Studienrichtung
  "Erzeugt ein Studienrichtungs-'Objekt' (hash-map)."
  [name]
  {:name name})

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
   (row "Bezeichnung" [:input {:field :text :id :Bezeichnung}])])

(def studienrichtung-spalten-attribute
  "Zuordnung von Spaltenüberschriften zu Studienrichtung-Attributen."
  {:Bezeichnung :name})

(def studienrichtung-spalten
  "Die Spaltenüberschriften der Studienrichtungstabelle."
  [:Bezeichnung])

(defn studienrichtungen->table
  "Wandelt die studienrichtungen für die Darstellung als Tabelle um. "
  [studienrichtungen]
  (mapv #(hash-map :Bezeichnung (:name %))
        studienrichtungen))

(defn aender-studienrichtung 
  "Erzeugt einen neuen Dozenten aus den in aenderungen gegebenen Daten."
  [studienrichtung aenderungen]
  (merge studienrichtung
         (clojure.set/rename-keys aenderungen studienrichtung-spalten-attribute)))

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
(defn erzeuge-studienrichtungen
  []
  [(->Studienrichtung "Wirtschaftsinformatik-Bachelor")
   (->Studienrichtung "Angewandte-Informatik-Bachelor")
   (->Studienrichtung "Wirtschaftsingenieurwesen-Bachelor")
   (->Studienrichtung "Betriebswirtschaftslehre-Bachelor")])
