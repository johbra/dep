(ns dep.components.planung
  (:require [reagent.core :as r]
            [dep.components.dozentenauslastung :refer [dozentenauslastung]] 
            [dep.model.lehrveranstaltung
             :refer [lehrveranstaltungen-fuer-quartal dozentenstunden
                     lven-verwaltung]] 
            [dep.model.dozent :refer [initialisiereAuslastungenIn]]
            [dep.components.datamanagement :refer [data-management]]))

(defn plane-quartal
  "Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
  Vorherige Planungen dieses Quartals werden überschrieben."
  [welt] 
  (let [lvn {(:quartal @welt)
             (lehrveranstaltungen-fuer-quartal
              (:quartal @welt)
              (:manipels @welt)
              (:module @welt))} 
        dzntn (dozentenstunden lvn
                               (:dozenten @welt)
                               (:quartal  @welt))]
    (swap! welt assoc :dozenten dzntn)
    (swap! welt update-in
           [:lven (:geschaeftsjahr @welt)] merge lvn)))

(defn initialisiere-auslastung-fuer-geschaeftsjahre
  "Initialisiert die Dozentenauslastung für alle existierenden Geschaeftsjahre.
  In dieser Form vorläufig."
  [welt]
  (let [dn (:dozenten @welt)
        f (fn [d] (initialisiereAuslastungenIn d (:jahre @welt)))
        dni (mapv f dn)]
    (swap! welt assoc :dozenten dni)))

(defn initialisiere-planung
  "Setzt die gesamte Planung zurück."
  [welt]
  (do (initialisiere-auslastung-fuer-geschaeftsjahre welt)
      (swap! welt
             assoc :lven
             (apply merge (map #(hash-map %  {}) (:jahre @welt))))))

(defn aktualisiere-plan
  "Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet."
  [welt] 
  (let [dzntn (dozentenstunden 
               ((:lven @welt) (:geschaeftsjahr @welt))
               (:dozenten @welt)
               (:quartal  @welt))] 
    (swap! welt assoc :dozenten dzntn)
    )) 

(defn lehrveranstaltungen
  "Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines Quartals."
  [welt]
  (fn [welt]
    (let [_ (aktualisiere-plan welt)] 
      [:div.container
       [data-management welt (lven-verwaltung [{:action nil :label "schließen"}
                                               {:action :duplicate :label "duplizieren"}
                                               {:action :save-lv :label "speichern"}
                                               {:action :delete :label "entfernen"}]
                                              )]])))

(defn planung
  "Die zentrale Planungskomponente."
  [welt]  
  [:div.row 
   [:div.col-md-8 
    [lehrveranstaltungen welt]]
   [:div.col-md-4 
    [dozentenauslastung welt]]])

