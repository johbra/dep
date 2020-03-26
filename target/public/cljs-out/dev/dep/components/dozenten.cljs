(ns dep.components.dozenten
  (:require [reagent.core :refer [atom]]
            [dep.model.dozent :refer [dozent-mit-namen]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.helpers.helpers :refer [input-frmctrl]]))

(defn dozenten->table
  "Wandelt die dozenten für die Darstellung als Tabelle um. "
  [dozenten]
  (mapv #(hash-map :Name (:name %)
                   :Vorname (:vorname %)
                   :ins-Menue (if (:insMenue %) "ja" "nein")
                   :Stundensoll (:sollStunden %))
        dozenten))

(def dozent-spalten
  "Die Spaltenüberschriften der Dozenttabelle."
  [:Name :Vorname :ins-Menue :Stundensoll])

(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular." 
  [:div.row
   [:label.col-sm-3 label]
   [:div.col-sm-9 input]])


(def dozent-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Nachname"    (input-frmctrl false :text :Name))
   (row "Vorname"     (input-frmctrl false :text :Vorname))
   (row "ins Menü"    (input-frmctrl false :checkbox :insMenue))
   (row "Sollstunden" (input-frmctrl false :numeric :Stundensoll))])

(def dozent-spalten-attribute
  "Zuordnung von Spaltenüberschriften zu Dozent-Attributen."
  {:Name :name, :Vorname :vorname, :ins-Menue :insMenue, :Stundensoll :sollStunden})

(defn aender-dozent 
  "Erzeugt einen neuen Dozenten aus den in aenderungen gegebenen Daten."
  [dozent aenderungen]
  (merge dozent (clojure.set/rename-keys aenderungen dozent-spalten-attribute)))

(defn dozenten-verwaltung
  "Liefert die Infos für die Dozententabelle und das Bearbeitungsformular."
  [buttons]
  {:data (fn [s] [:dozenten])
   :title "Dozenten"
   :table-column-titles dozent-spalten
   :table-row-fn dozenten->table
   :table-key-column :Name
   :edit-component dozent-form-template
   :title-buttons {:modal-title "Dozent" :buttons buttons}
   :data-id :name
   :id-fn identity
   :dataset-exists-fn dozent-mit-namen
   :update-fn aender-dozent})

(defn dozenten
  "Komponente für die Anzeige und Bearbeitung der Dozenten."
  [welt]
  [data-management welt
   (dozenten-verwaltung [{:action nil :label "schließen"}
                         {:action :save :label "speichern"}
                         {:action :delete :label "entfernen"}])])


