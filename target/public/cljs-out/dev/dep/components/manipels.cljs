(ns dep.components.manipels
  (:require [reagent.core :refer [atom]]
            [potpuri.core :as p]
            [dep.model.manipel :refer [->Manipel manipel-mit-namen]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.model.quartal
             :refer [quartal->string string->quartal sieben-semester->quartstrng
                     parse-int]]
            [dep.components.planung :refer [umplane-lven]]
            [dep.helpers.helpers :refer [input-frmctrl]]))

(def sem-tabellen-koepfe
  "Die Spaltenüberschriften für die 7 Semester"
  (map #(keyword (str "S" %)) (range 1 8)))

(def semestermanipel-mit-namen
  "liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}"
  (zipmap sem-tabellen-koepfe (range 1 8)))

(def manipel-spalten
  "Die Spaltenüberschriften der Manipeltabelle."
  (concat [:Name :Studienrichtung :An-Gr :Beginn]
          (vec (for [sem (range 1 8)]
                 (keyword (str "Sem-" sem))))))

(defn formular-daten->jahr-semester-zuordung
  "erzeugt aus den Strings des Formulars eine jahrsemesterzuordnung"
  [formulardaten]
  (let
      [jsz (select-keys formulardaten (for [i (range 1 8)] (keyword (str "Sem-" i))))]
    (->> jsz
         (p/map-vals string->quartal)
         (clojure.set/map-invert) 
         (p/map-vals #(parse-int (last (clojure.string/split (str %) #"-")))) 
         (p/map-keys
          #(assoc % :jahr
                  (- (:jahr %)
                     (:jahr (string->quartal(:Beginn formulardaten)))))))))

(defn aender-manipel 
  "Erzeugt ein neues Manipel aus den in aenderungen gegebenen Daten."
  [welt manipel aenderungen]
  (let [jsz (formular-daten->jahr-semester-zuordung aenderungen)
        neues-manipel
        (->Manipel (:Studienrichtung aenderungen)
                   (symbol (:Name aenderungen))
                   (string->quartal (:Beginn aenderungen))
                   (:An-Gr aenderungen)
                   jsz)
        _ (umplane-lven manipel neues-manipel welt)]
    neues-manipel))

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

(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular." 
  [:div.row
   [:label.col-sm-3 label]
   [:div.col-sm-9 input]])

(defn manipel-form-template
  "Komponente für das Bearbeitungsformular."
  [studienrichtungen]
  [:form.form-horizontal
   (row "Name"            (input-frmctrl false :text :Name))
   (row "Studienrichtung" [:select.form-control {:field :text :id :Studienrichtung}
                           (for [s studienrichtungen]
                             [:option {:key (keyword (:name s))} (:name s)])])
   (row "Anzahlgruppen"   (input-frmctrl false :numeric :An-Gr))
   (row "Studienbeginn"   (input-frmctrl false :text :Beginn))
   (row "Semester 1"      (input-frmctrl false :text :Sem-1))
   (row "Semester 2"      (input-frmctrl false :text :Sem-2))
   (row "Semester 3"      (input-frmctrl false :text :Sem-3))
   (row "Semester 4"      (input-frmctrl false :text :Sem-4))
   (row "Semester 5"      (input-frmctrl false :text :Sem-5))
   (row "Semester 6"      (input-frmctrl false :text :Sem-6))
   (row "Semester 7"      (input-frmctrl false :text :Sem-7))])

(defn manipel-verwaltung
  "Liefert die Infos für die Manipeltabelle und das Bearbeitungsformular."
  [buttons welt]
  {:data (fn [s] [:manipels])
   :title "Manipel"
   :table-column-titles manipel-spalten
   :table-row-fn manipels->table
   :table-key-column :Name
   :edit-component (manipel-form-template (:studienrichtungen @welt))
   :title-buttons {:modal-title "Manipel" :buttons buttons}
   :data-id :name
   :id-fn symbol
   :dataset-exists-fn manipel-mit-namen
   :update-fn (partial aender-manipel welt)})

(defn manipels
  "Komponente für die Anzeige und Bearbeitung der Manipel."
  [welt]
  [data-management welt (manipel-verwaltung
                         [{:action nil :label "schließen"}
                          {:action :save :label "speichern"}
                          {:action :delete :label "entfernen"}]
                         welt)])


