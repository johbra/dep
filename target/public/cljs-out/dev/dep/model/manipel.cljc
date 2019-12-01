(ns dep.model.manipel
  (:require 
   [dep.model.quartal :refer [quartal->string sieben-semester->quartstrng minus
                              ->Quartal string->quartal]]
   [dep.model.studienrichtung :refer [studienrichtung-mit-namen]]))


;; Konstruktor
(defn ->Manipel
  "Erzeugt ein Manipel-'Objekt' (hash-map)"
  [studienrichtung name studienbeginn
   anzahlGruppen jahrSemesterZuordnung]
  {:studienrichtung studienrichtung :name name :studienbeginn studienbeginn
   :anzahlGruppen anzahlGruppen :jahrSemesterZuordnung jahrSemesterZuordnung})

;; Planung
(defn wirdUnterrichtetIn?
  "Prüft, ob für ein Manipel im angegebenen Quartal Lehrveranstaltungen
  anzubieten sind."
  [manipel quartal]
  (contains? (:jahrSemesterZuordnung manipel)
             (minus quartal (:studienbeginn manipel))))

(defn zu-unterrichtende-manipels-quartal
  "Liefert die Teilmenge (sequence) aus manipels, die in quartal
  zu unterrichten sind."
  [manipels quartal]
  (filter #(wirdUnterrichtetIn? % quartal) manipels))

(defn semesterInQuartal
  "Bestimmt das Semester, in dem sich das Manipel im angegebenen Quartal befindet.
  Liefert 0, falls das Manipel im angegebenen Quartal nicht unterrichtet wird."
  [manipel quartal]
  (let [sem ((:jahrSemesterZuordnung manipel)
             (minus quartal (:studienbeginn manipel)))]
    (if sem sem 0)))

(defn manipel-mit-namen
  "Liefert das Manipel mit dem Namen string aus der Liste manipels."
  [manipels string]
  (first (filter #(= (:name %) string) manipels)))

;; View
(def manipel-spalten
  "Die Spaltenüberschriften der Manipeltabelle."
  (concat [:Name :Studienrichtung :An-Gr :Beginn]
          (vec (for [sem (range 1 8)]
                 (keyword (str "Sem-" sem))))))

(defn manipels->table
  "Wandelt die manipels für die Darstellung als Tabelle um."
  [manipels] 
  (mapv #(merge (hash-map :Name (:name %)
                          :Studienrichtung (:studienrichtung %)
                          :An-Gr (:anzahlGruppen %)
                          :Beginn (quartal->string (:studienbeginn %))
                          )
                (sieben-semester->quartstrng (:studienbeginn %)
                                             (:jahrSemesterZuordnung %)))
        manipels))

(defn aender-manipel [studienrichtungen-namen manipel aenderungen]
  "Erzeugt ein neues Manipel aus den in aenderungen gegebenen Daten.
  ACHTUNG: Die Änderung der Semesterzuordnung fehlt noch."
  (->Manipel (:Studienrichtung aenderungen)
             (symbol (:Name aenderungen))
             (string->quartal (:Beginn aenderungen))
             (:An-Gr aenderungen)
             (:quartal-Semester-Zuordnung
              (studienrichtung-mit-namen
               studienrichtungen-namen (:Studienrichtung aenderungen)))))

(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular."
  [:div.row
   [:div.col-md-3 [:label label]]
   [:div.col-md-8 input]])

(def manipel-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Name" [:input {:field :text :id :Name}])
   (row "Studienrichtung" [:input {:field :text :id :Studienrichtung}])
   (row "Anzahlgruppen" [:input {:field :numeric :id :An-Gr}]) 
   (row "Studienbeginn" [:input {:field :text :id :Beginn}])
   (row "Semester 1" [:input {:read-only "readOnly" :field :text :id :Sem-1}])
   (row "Semester 2" [:input {:read-only "readOnly" :field :text :id :Sem-2}])
   (row "Semester 3" [:input {:read-only "readOnly" :field :text :id :Sem-3}])
   (row "Semester 4" [:input {:read-only "readOnly" :field :text :id :Sem-4}])
   (row "Semester 5" [:input {:read-only "readOnly" :field :text :id :Sem-5}])
   (row "Semester 6" [:input {:read-only "readOnly" :field :text :id :Sem-6}])
   (row "Semester 7" [:input {:read-only "readOnly" :field :text :id :Sem-7}])])

(defn manipel-verwaltung
  "Liefert die Infos für die Manipeltabelle und das Bearbeitungsformular."
  [buttons studienrichtungen-namen]
  {:data (fn [s] [:manipels])
   :title "Manipel"
   :table-column-titles manipel-spalten
   :table-row-fn manipels->table
   :table-key-column :Name
   :edit-component manipel-form-template
   :title-buttons {:modal-title "Manipel" :buttons buttons}
   :width "100%"
   :data-id :name
   :id-fn symbol
   :dataset-exists-fn (partial aender-manipel studienrichtungen-namen)
   :update-fn aender-manipel}) 

;; Examples
(->Manipel "Wirtschaftsinformatik-Bachelor" 'I17 (->Quartal 4 2017)
           4 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
              (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
              (->Quartal 4 3) 7} )

(= (wirdUnterrichtetIn?
    (->Manipel "Wirtschaftsinformatik-Bachelor" 'I17 (->Quartal 4 2017)
               4 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
                  (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
                  (->Quartal 4 3) 7})
    (->Quartal 2 2018)) false)

(= (wirdUnterrichtetIn?
    (->Manipel "Wirtschaftsinformatik-Bachelor" 'I17 (->Quartal 4 2017)
               4 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
                  (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
                  (->Quartal 4 3) 7})
    (->Quartal 1 2019)) true)

(semesterInQuartal
 (->Manipel "Wirtschaftsinformatik-Bachelor" 'I17 (->Quartal 4 2017)
            4 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
               (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
               (->Quartal 4 3) 7})
 (->Quartal 3 2018))

(sieben-semester->quartstrng (->Quartal 4 0)
                             {{:nr 1, :jahr 1} 1, {:nr 3, :jahr 1} 2, {:nr 1, :jahr 2} 3, {:nr 2, :jahr 2} 4, {:nr 4, :jahr 2} 5, {:nr 3, :jahr 3} 6, {:nr 4, :jahr 3} 7})
