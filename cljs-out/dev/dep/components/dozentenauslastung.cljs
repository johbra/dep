(ns dep.components.dozentenauslastung
  (:require [dep.model.dozent
             :refer [stundenInQ4 stundenInQ1 stundenInQ2 stundenInQ3
                     stunden-in-geschaeftsjahr dozent-mit-namen]]
            [dep.components.datamanagement :refer [data-management]]))

(def doz-auslstngn-spalten
  "Die Spaltenüberschriften der Dozenttabelle."
  [:Dozent :Q4 :Q1 :Q2 :Q3 :Summe ])

(defn doz-auslstngn->table
  "Wandelt die dozenten für die Darstellung ihrer Auslastung als Tabelle um."
  [welt dozenten]
  (let [geschaeftsjahr (:geschaeftsjahr @welt)]
    (mapv #(hash-map :Dozent (:name %)
                     :Q4 (stundenInQ4 % geschaeftsjahr)
                     :Q1 (stundenInQ1 % geschaeftsjahr)
                     :Q2 (stundenInQ2 % geschaeftsjahr)
                     :Q3 (stundenInQ3 % geschaeftsjahr)
                     :Summe (stunden-in-geschaeftsjahr % geschaeftsjahr))
          dozenten)))

(defn dozenten-anzeige
  "Liefert die Hashmap mit den Informationen für die Anzeige der Dozentenauslastung.
  Diese werden von der datamanagement-Komponente verwendet."
  [welt]
  {:data (fn [s] [:dozenten])
   :title "Dozentenauslastung"
   :table-column-titles doz-auslstngn-spalten
   :table-row-fn (partial doz-auslstngn->table welt)
   :table-key-column :Name
   :edit-component nil
   :title-buttons {}
   :width "100%"
   :data-id :name
   :id-fn identity
   :dataset-exists-fn dozent-mit-namen
   :update-fn nil})

(defn dozentenauslastung
  [welt]
  [:div.container 
   [data-management welt (dozenten-anzeige welt)]])

