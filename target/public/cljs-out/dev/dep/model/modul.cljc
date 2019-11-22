(ns dep.model.modul
  (:require [dep.model.quartal :refer [->Quartal liegt-zwischen quartal->string
                                       string->quartal]]
            [dep.model.manipel :refer [->Manipel semesterInQuartal]]))


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

;; View
(def sem-tabellen-koepfe
  "Die Spaltenüberschriften für die 7 Semester"
  (map #(keyword (str "S" %)) (range 1 8)))

(def semester
  "liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}"
  (zipmap sem-tabellen-koepfe (range 1 8)))

(defn aender-sws
  "Formt aus den aenderungen des Eingabeformulars eine Hash-map mit den
  Semesterwochenstunden."
  [aenderungen]
  (into {} (filter #(not= (val %) 0 )
                   (clojure.set/rename-keys
                    (select-keys aenderungen sem-tabellen-koepfe) semester))))

(def modul-spalten
  "Die Spaltenüberschriften der Modulltabelle."
  (concat [:Nr :Name :Studienrichtung]
          (keys semester)
          [:ab-Stbgnn :bis-Stbgnn]))

(defn aender-modul [modul aenderungen]
  "Erzeugt ein neues Modul aus den in aenderungen gegebenen Daten."
  (->Modul (symbol (:Nr aenderungen))
           (:Name aenderungen)
           (aender-sws aenderungen)
           (:Studienrichtung aenderungen)
           (string->quartal (:ab-Stbgnn aenderungen))
           (string->quartal (:bis-Stbgnn aenderungen))))

(defn module->table
  "Wandelt die module für die Darstellung als Tabelle um."
  [module] 
  (mapv #(merge (hash-map :Nr (:nummer %)
                          :Name (:name %)
                          :Studienrichtung (:studienrichtung %))
                (sws->alle-semester (:semesterWochenstunden %))
                (hash-map :ab-Stbgnn (quartal->string (:gueltigAb %))
                          :bis-Stbgnn (quartal->string (:gueltigBis %))
                          :Id (:id %)))
        module))

(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular."
  [:div.row {:key label}
   [:div.col-md-3 [:label label]]
   [:div.col-md-9 input]])

(defn modul-form-template [studienrichtungen]
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Nr" [:input {:field :text :id :Nr}])
   (row "Name" [:input {:field :text :id :Name}])
   (row "Studienrichtung" [:select {:field :text :id :Studienrichtung}
                           (for [s studienrichtungen] [:option s])])
   (doall (map #(row (str "S" %) [:input {:field :text :id (keyword (str "S" %))}])
               (range 1 8)))
   (row "ab Studienbeginn" [:input {:field :text :id :ab-Stbgnn}])
   (row "bis Studienbeginn" [:input {:field :text :id :bis-Stbgnn}])
   ])

(defn module-verwaltung
  "Liefert die Infos für die Modultabelle und das Bearbeitungsformular."
  [buttons studienrichtungen]
  {:data (fn [s] [:module])
   :title "Module"
   :table-column-titles modul-spalten
   :table-row-fn module->table
   :table-key-column :Nr
   :edit-component (modul-form-template studienrichtungen)
   :title-buttons {:modal-title "Modul" :buttons buttons}
   :width "100%"
   :data-id :id
   :id-fn identity
   :dataset-exists-fn modul-mit-nummer
   :update-fn aender-modul})

;; Examples
(->Modul 'A107 "PP" {5 4 6 4} "AI" (->Quartal 4 2000) (->Quartal 3 2099))

(wochenStundenInSemester
 (->Modul 'A107 "PP" {5 4 6 7} "AI" (->Quartal 4 2000) (->Quartal 3 2099)) 6)

(mussModulUnterrichtetWerdenFuer-inQuartal?
 (->Modul 'A107 "PP" {5 4 6 4} "Wirtschaftsinformatik-Bachelor"
          (->Quartal 4 2000) (->Quartal 3 2099))
 (->Manipel "Wirtschaftsinformatik-Bachelor" 'I17 (->Quartal 4 2017)
            4 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
               (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
               (->Quartal 4 3) 7})
 (->Quartal 4 2019))

(sws->alle-semester (:semesterWochenstunden
                     (->Modul 'A107 "PP" {5 4 6 4} "Wirtschaftsinformatik-Bachelor"
                              (->Quartal 4 2000) (->Quartal 3 2099))))

(module->table (list (->Modul 'A107 "PP" {5 4 6 4} "Wirtschaftsinformatik-Bachelor"
                              (->Quartal 4 2000) (->Quartal 3 2099))))



