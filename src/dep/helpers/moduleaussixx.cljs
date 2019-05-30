(ns dep.helpers.moduleaussixx
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [dep.model.quartal :refer [->Quartal ]]
            [dep.model.modul :refer [->Modul ]]
            [dep.helpers.drop-file-stream :refer [lies-datei]]
            [tubax.core :refer [xml->clj]]
            [clojure.zip :as zip]
            [cljs.reader :refer [read-string]] 
            [cljs.core.async :refer [<! timeout]]
            ))

;; Hilfsfunktion für das Lesen von Modul-Daten aus einer aus der Pharo-Version
;; genrierten SIXX-Datei (XML-Format)

(defn module-aus-sixx
  [datei]
  (let [module (:content datei)]
    (map
     (fn [mdl]
       (let [nummer (symbol (get-in mdl [:content 0 :content 0]))
             name (get-in mdl [:content 1 :content 0])
             sws (get-in mdl [:content 2 :content])
             semesterWochenstunden
             (zipmap (map #(read-string (first (:content (first (:content %)))))
                          sws)
                     (map #(read-string (first (:content (second (:content %)))))
                          sws)) 
             studienrichtung 
             (keyword
              (str (first (:content (first (get-in mdl [:content 3 :content]))))
                   "-"
                   (first (:content (second (get-in mdl [:content 3 :content])))))) 
             gbis
             (->Quartal
              (read-string
               (first (:content (first (get-in mdl [:content 4 :content])))))
              (read-string
               (first (:content (second (get-in mdl [:content 4 :content])))))) 
             gab
             (->Quartal
              (read-string
               (first (:content (first (get-in mdl [:content 5 :content])))))
              (read-string
               (first (:content (second (get-in mdl [:content 5 :content]))))))
             ]
         (->Modul nummer name semesterWochenstunden studienrichtung gab gbis)))
     module)))

(defn module-aus-datei
  [datei state]
  (lies-datei datei state #(module-aus-sixx (xml->clj %))))

