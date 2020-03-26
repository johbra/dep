(ns dep.model.modul
  (:require [dep.model.quartal :refer [liegt-zwischen]]
            [dep.model.manipel :refer [semesterInQuartal]]))


;; Konstruktor
(defn ->Modul
  "Erzeugt ein Modul-'Objekt' (hash-map)"  
  [nummer name semesterWochenstunden studienrichtung gueltigAb gueltigBis]
  {:id (gensym) :nummer nummer :name name
   :semesterWochenstunden semesterWochenstunden
   :studienrichtung studienrichtung :gueltigAb gueltigAb :gueltigBis gueltigBis})

;; Planung
(defn wochenStundenInSemester
  "Bestimmt die Anzahl der Wochenstunden von modul im semester."
  [modul semester]
  (let [n ((modul :semesterWochenstunden) semester)]
    (if n n 0)))

(defn mussModulUnterrichtetWerdenFuer-inQuartal?
  "Bestimmt, ob Lehrveranstaltung für modul im quartal für manipel geplant werden
  muss."
  [modul manipel quartal]
  (and
   (= (:studienrichtung modul) (:studienrichtung manipel))
   (let [semester (semesterInQuartal manipel quartal)]
     (and (contains? (:semesterWochenstunden modul) semester)
          (> ((:semesterWochenstunden modul) semester) 0)
          (liegt-zwischen (:studienbeginn manipel)
                          (:gueltigAb modul)
                          (:gueltigBis modul))))))

(defn sws->alle-semester
  "Macht aus den in sws angegebenen Semesterwochenstunden eine Hash-map mit den
  Semesterwochenstunden für alle 7 Semester.
  Die keys der Hash-map sind die Strings 'S1' bis 'S7'."
  [sws]
  (let [sems (range 1 8)]
    (zipmap (map #(keyword (str "S" %)) sems) (map #(if (sws %) (sws %) 0) sems))))

(defn modul-mit-nummer
  "Liefert das Modul mit der Nummer symbol aus der Liste module."
  [module symbol]
  (first (filter #(= (:id %) symbol) module)))




