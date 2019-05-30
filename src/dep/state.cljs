(ns dep.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent :refer [atom]]
            [dep.model.manipel  :refer [->Manipel]]
            [dep.model.modul  :refer [->Modul]]
            [dep.model.quartal :refer [quartale-fuer-jahr ->Quartal]]
            [dep.model.dozent  :refer [erzeuge-dozenten ]]            
            [dep.helpers.manipelaussixx :refer [manipel-aus-datei]]
            [dep.helpers.moduleaussixx :refer [module-aus-datei module-aus-sixx]] 
            [cljs.core.async :as a :refer [<! chan timeout]]))

(defn erzeuge-studienrichtungen [] 
  {:WirtschaftsinformatikBachelor
   {:name "Wirtschaftsinformatik" :abschluss "Bachelor"}
   :WirtschaftsingenieurwesenBachelor
   {:name "Wirtschaftsingenieurwesen" :abschluss "Bachelor"}
   :BetriebswirtschaftslehreBachelor
   {:name "Betriebswirtschaftslehre" :abschluss "Bachelor"}
   :AngewandteInformatikBachelor
   {:name "Angewandte Informatik" :abschluss "Bachelor"}})

(def WELT (atom {:module []
                 :manipels []
                 :studienrichtungen (erzeuge-studienrichtungen)
                 :dozenten (erzeuge-dozenten)
                 :geschaeftsjahr 2016
                 :quartal (->Quartal 4 2015)
                 :jahre [2016 2017 2018 2019]
                 :lven {}
                 :aktualisiere-plan-fn nil 
                 }))

;; Einlesen von provisorischen Testdaten
(def moduls (atom []))

(go (let [result
          (<! (module-aus-datei "module.db" moduls))]
      (swap! WELT assoc :module @moduls)))

(def mpls (atom []))

(go (let [result
          (<! (manipel-aus-datei "m.db" mpls))]
      (swap! WELT assoc :manipels @mpls)))




