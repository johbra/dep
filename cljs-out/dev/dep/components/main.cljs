(ns dep.components.main
  (:require 
   [dep.state :as state]
   [dep.components.dozentenauslastung :refer [dozentenauslastung]]
   [dep.components.lehrveranstaltungen :refer [lehrveranstaltungen]]
   [dep.model.lehrveranstaltung
    :refer [lehrveranstaltungen-fuer-quartal berechne-auslastungen-fuer-quartal]] 
   [dep.model.dozent :refer [initialisiereAuslastungenIn]]))

(defn plane-quartal [] 
  (let [lvn (lehrveranstaltungen-fuer-quartal
             (:quartal @state/app-state)
             (:manipels @state/app-state)
             (:module @state/app-state)) 
        dzntn (berechne-auslastungen-fuer-quartal
               (:quartal @state/app-state) lvn (:dozenten @state/app-state))]
    (swap! state/app-state assoc
           :lven lvn
           :dozenten dzntn)))

(defn initialisiere-auslastung-fuer-geschaeftsjahre
  []   
  (let [dn (:dozenten @state/app-state)
        f (fn [d] (initialisiereAuslastungenIn d (:jahre @state/app-state)))
        dni (mapv f dn)]
    (swap! state/app-state assoc :dozenten dni)))

(defn aktualisierung-anzeige
  []
  (println "aktual")
  (let [dzntn (berechne-auslastungen-fuer-quartal
               (:quartal @state/app-state)
               (:lven @state/app-state)
               (:dozenten @state/app-state))]
    (swap! state/app-state assoc :dozenten dzntn))) 

(defn main
  []  
  [:div.row 
   [:div.col-md-8 
    [lehrveranstaltungen]]
   [:div.col-md-4 
    [dozentenauslastung]]])

