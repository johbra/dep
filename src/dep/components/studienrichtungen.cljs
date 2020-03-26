(ns dep.components.studienrichtungen
  (:require [reagent.core :refer [atom]]
            [potpuri.core :as p]
            [dep.model.studienrichtung :refer [studienrichtung-mit-namen]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.helpers.helpers :refer [input-frmctrl]]))


(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular." 
  [:div.row
   [:label.col-sm-3 label]
   [:div.col-sm-9 input]])

(def studienrichtung-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Bezeichnung" (input-frmctrl false :text :Bezeichnung))])

(defn aender-studienrichtung 
  "Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten."
  [studienrichtung aenderungen] 
  (assoc studienrichtung :name (:Bezeichnung aenderungen)))

(defn studienrichtungen->table
  "Wandelt die studienrichtungen für die Darstellung als Tabelle um. "
  [studienrichtungen]
  (mapv #(hash-map :Bezeichnung (:name %)) studienrichtungen))

(def studienrichtung-spalten
  "Die Spaltenüberschriften der Studienrichtungstabelle."
  [:Bezeichnung])

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
   :data-id :name
   :id-fn identity
   :dataset-exists-fn studienrichtung-mit-namen
   :update-fn aender-studienrichtung})

(defn studienrichtungen
  "Komponente für die Anzeige und Bearbeitung der Studienrichtungen."
  [welt]
  [data-management welt
   (studienrichtungen-verwaltung [{:action nil :label "schließen"}
                                  {:action :save :label "speichern"}
                                  {:action :delete :label "entfernen"}])])


