(ns dep.components.lehrveranstaltungen
  (:require [reagent.core :refer [atom]]
            [dep.components.dozentenauslastung
             :refer [aktualisiere-dozentenauslastung ]] 
            [dep.model.lehrveranstaltung
             :refer [->Lehrveranstaltung lv-mit-id semesterWochenstunden semester]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.helpers.helpers :refer [input-frmctrl]]))

(defn aender-lv
  "Erzeugt eine neue Lehrveranstaltung aus den in aenderungen gegebenen Daten."
  [lv aenderungen state] 
  (assoc (->Lehrveranstaltung
          (:modul lv)
          (:quartal lv)
          (:Dozent aenderungen)
          (:WdhFkt aenderungen)
          (:manipel lv)) :anzahlGruppen (:Grpn aenderungen)))

(defn lvn->table
  "Wandelt die Lehrveranstaltungen (lvn) für die Darstellung als Tabelle um. "
  [lvn] 
  (mapv #(hash-map :Modul (:name (:modul %))
                   :Mnpl (:name (:manipel %))
                   :Smstr (semester  %)
                   :SWS (semesterWochenstunden %)
                   :WdhFkt (:wiederholungsFaktor %)
                   :Grpn (:anzahlGruppen  %)
                   :Dozent (:dozent %)
                   :Id (:id %))
        lvn))

(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular." 
  [:div.row
   [:label.col-sm-3 label]
   [:div.col-sm-9 input]])

(defn lv-form-template 
  "Komponente für das Bearbeitungsformular."
  [dozenten]
  [:form.form-horizontal
   (row "Modul"          (input-frmctrl true :text :Modul))
   (row "Manipel"        (input-frmctrl true :text :Mnpl))
   (row "Semester"       (input-frmctrl true :text :Smstr))
   (row "SWS"            (input-frmctrl true :text :SWS))
   (row "Wiedrhlngsfktr" (input-frmctrl false :numeric :WdhFkt))
   (row "Gruppen"        (input-frmctrl false :numeric :Grpn))
   (row "Dozent"         [:select.form-control {:field :text :id :Dozent}
                          (for [d dozenten] [:option {:key (keyword d)} d])])])

(def lv-spalten
  "Die Spaltenüberschriften der Lv-Tabelle."
  [:Modul :Mnpl :Smstr :SWS :WdhFkt :Grpn :Dozent])

(defn lven-verwaltung
  "Liefert die Infos für die Lv-Tabelle und das Bearbeitungsformular."
  [buttons dozenten filter]
  {:data  (fn [s] [:lven])
   :filter filter
   :title "Lehrveranstaltungen"
   :table-column-titles lv-spalten
   :table-row-fn lvn->table
   :table-key-column :Dozent
   :edit-component (lv-form-template dozenten)
   :title-buttons {:modal-title "Lehrveranstaltung" :buttons buttons}
   :data-id :id
   :id-fn identity
   :dataset-exists-fn lv-mit-id
   :update-fn aender-lv})

(defn lehrveranstaltungen
  "Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines
  Quartals." 
  [welt]
  (fn [welt]
    (let [_ (aktualisiere-dozentenauslastung welt)] 
      [:div.container
       [data-management welt
        (lven-verwaltung [{:action nil :label "schließen"}
                          {:action :duplicate :label "duplizieren"}
                          {:action :save-per-id :label "speichern"}
                          {:action :delete :label "entfernen"}]
                         (map :name (:dozenten @welt))
                         (partial filter #(= (:quartal %) (:quartal @welt)))
                         )]])))
