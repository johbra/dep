(ns dep.helpers.manipelaussixx
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [dep.model.quartal :refer [->Quartal ]]
            [dep.model.manipel :refer [->Manipel ]]
            [dep.helpers.drop-file-stream :refer [lies-datei]]
            [tubax.core :refer [xml->clj]]
            [clojure.zip :as zip]
            [cljs.reader] 
            [cljs.core.async :refer [<! timeout]]
            ))
;; Hilfsfunktion für das Lesen von Manipel-Daten aus einer aus der Pharo-Version
;; genrierten SIXX-Datei (XML-Format)
(defn manipel-aus-sixx
  [datei]
  (let [manipel (:content datei)] 
    (map 
     (fn [mpl]
       (let [studienrichtung
             (keyword (str
                       (first (:content (first (:content (first (:content mpl))))))
                       "-"
                       (first (:content (second (:content (first (:content mpl))))))))
             name (symbol (first (:content (second (:content mpl))))) 
             studienbeginn
             (->Quartal
              (cljs.reader/read-string
               (first (:content (first (:content (get (:content mpl) 2))))))
              (cljs.reader/read-string
               (first (:content (second (:content (get (:content mpl) 2)))))))
             anzahlGruppen
             (cljs.reader/read-string (first (:content (get (:content mpl) 3))))
             sems (:content (get (:content mpl) 4))
             jahrSemesterZuordnung
             (zipmap (map 
                      #(->Quartal
                        (cljs.reader/read-string
                         (first
                          (:content
                           (first
                            (:content (first (:content %)))))))
                        (cljs.reader/read-string
                         (first
                          (:content
                           (second
                            (:content (first (:content  %)))))))) sems)
                     (map 
                      #(cljs.reader/read-string
                        (first
                         (:content
                          (second (:content %))))) sems))]
         (->Manipel studienrichtung name studienbeginn anzahlGruppen
                    jahrSemesterZuordnung)))
     manipel)))

(defn manipel-aus-datei
  [datei state]
  (lies-datei datei state #(manipel-aus-sixx (xml->clj %)))
  )

