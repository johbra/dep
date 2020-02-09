(ns dep.model.studienrichtung) 


;; Konstruktor
(defn ->Studienrichtung
  "Erzeugt ein Studienrichtungs-'Objekt' (hash-map)."
  [name quartal-semester-zuordnung]
  {:name name :quartal-semester-zuordnung quartal-semester-zuordnung})

(defn studienrichtung-mit-namen
  "Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen."
  [studienrichtungen string]
  (first (filter #(= (:name %) string) studienrichtungen)))

;; Erzeugen von Beispieldaten
;; (defn erzeuge-studienrichtungen
;;   []
;;   [(->Studienrichtung "Wirtschaftsinformatik-Bachelor")
;;    (->Studienrichtung "Angewandte-Informatik-Bachelor")
;;    (->Studienrichtung "Wirtschaftsingenieurwesen-Bachelor")
;;    (->Studienrichtung "Betriebswirtschaftslehre-Bachelor")])

