(ns dep.components.dozentenauslastung
  (:require [dep.model.dozent
             :refer [stundenInQ4 stundenInQ1 stundenInQ2 stundenInQ3
                     stunden-in-geschaeftsjahr dozent-mit-namen
                     schreiben-stunden-auf-quartal]]
            [dep.model.lehrveranstaltung
             :refer [semesterWochenstunden semester]]
            [dep.model.quartal :refer [quartale-fuer-jahr]]
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
   :data-id :name
   :id-fn identity
   :dataset-exists-fn dozent-mit-namen
   :update-fn nil})

(defn lvStunden
  "Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung."
  [lv] 
  (* (semesterWochenstunden lv) 10 (:wiederholungsFaktor lv) (:anzahlGruppen lv)))

(defn lvstunden-dozent
  "Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
  Liste von Lehrveranstaltungen lven."
  [lven doz-nam] 
  (reduce
   + 0
   (map (fn [lv] (lvStunden lv))
        (filter #(= (:dozent %) doz-nam) lven))))

(defn dozentenstunden
  "Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
  Lehrveranstaltungen in lvn"
  [lvn dozenten quartal] 
  (mapv #(schreiben-stunden-auf-quartal
          %
          (lvstunden-dozent (filter (fn [lv] (= (:quartal lv) quartal)) lvn)
                            (:name %))
          quartal)
        dozenten)) 

(defn lven-fuer-aktuelles-geschaeftsjahr
  "Ermittelt alle Lehrveranstaltungen des aktuellen Geschäftsjahrs"
  [lvn jahr]
  (let [quartale (quartale-fuer-jahr jahr)
        lven (into
              []
              (reduce concat []
                      (mapv (fn [q] (filter #(= (:quartal %) q) lvn)) quartale)))]
    lven))

(defn aktualisiere-plan
  "Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet."
  [welt] 
  (let [dzntn (dozentenstunden 
               (lven-fuer-aktuelles-geschaeftsjahr
                (:lven @welt) (:geschaeftsjahr @welt))
               (:dozenten @welt)
               (:quartal  @welt))] 
    (swap! welt assoc :dozenten dzntn))
  ) 


(defn dozentenauslastung
  [welt] 
  [:div.container 
   [data-management welt (dozenten-anzeige welt)]])

