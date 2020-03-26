(ns dep.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [reagent.core :as reagent :refer [atom]]
   [dep.model.quartal :refer [->Quartal]]
   [dep.helpers.manipelaussixx :refer [manipel-aus-datei]]
   [dep.helpers.moduleaussixx :refer [module-aus-datei]]   
   [cljs.core.async :as a :refer [<! chan timeout]]))


(def WELT (atom {:module []
                 :manipels []
                 :studienrichtungen []
                 :dozenten []
                 :geschaeftsjahr 1
                 :quartal  (->Quartal 4 0)
                 :jahre [1] 
                 :lven [] 
                 }))


;; Einlesen von provisorischen Testdaten
;; (def moduls (atom []))

;; (go (let [result
;;           (<! (module-aus-datei "module.db" moduls))]
;;       (swap! WELT assoc :module @moduls)))

;; (def mpls (atom []))

;; (go (let [result
;;           (<! (manipel-aus-datei "m.db" mpls))]
;;       (swap! WELT assoc :manipels @mpls)))



