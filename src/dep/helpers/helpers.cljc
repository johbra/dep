(ns dep.helpers.helpers
  (:require 
   [reagent.core :as r]
   ))

;; Hilfsfunktionen
(defn round1
  [x] (/ (Math/ceil (* 10 x)) 10))

(defn input-frmctrl [readonly type id]
  [:input.form-control {:read-only readonly :field type :id id}])
