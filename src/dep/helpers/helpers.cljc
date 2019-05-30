(ns dep.helpers.helpers
  (:require 
   [reagent.core :as r]))

;; Hilfsfunktionen
(defn round1
  [x] (/ (Math/ceil (* 10 x)) 10))
