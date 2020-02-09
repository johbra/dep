(ns dep.components.module
  (:require [reagent.core :refer [atom]]
            [dep.model.modul
             :refer [->Modul sws->alle-semester modul-mit-nummer]] 
            [dep.components.datamanagement :refer [data-management]]
            [dep.model.quartal
             :refer [quartal->string string->quartal]]
            [dep.helpers.helpers :refer [input-frmctrl]]))

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
  [:div.row
   [:label.col-sm-3 label]
   [:div.col-sm-9 input]])

(defn modul-form-template 
  "Komponente für das Bearbeitungsformular."
  [studienrichtungen]
  [:div
   (row "Nr"   (input-frmctrl false :text :Nr))
   (row "Name" (input-frmctrl false :text :Name))
   (row "Studienrichtung" [:select.form-control {:field :text :id :Studienrichtung}
                           (for [s studienrichtungen]
                             [:option {:key (keyword s)} s])])
   (row "Semester 1"        (input-frmctrl false :text :S1))
   (row "Semester 2"        (input-frmctrl false :text :S2))
   (row "Semester 3"        (input-frmctrl false :text :S3))
   (row "Semester 4"        (input-frmctrl false :text :S4))
   (row "Semester 5"        (input-frmctrl false :text :S5))
   (row "Semester 6"        (input-frmctrl false :text :S6))
   (row "Semester 7"        (input-frmctrl false :text :S7))
   (row "ab Studienbeginn"  (input-frmctrl false :text :ab-Stbgnn))
   (row "bis Studienbeginn" (input-frmctrl false :text :bis-Stbgnn))])

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
   :data-id :id
   :id-fn symbol
   :dataset-exists-fn modul-mit-nummer
   :update-fn aender-modul})

(defn module
  "Komponente für die Anzeige und Bearbeitung der Module."
  [welt] 
  [data-management welt (module-verwaltung
                         [{:action nil :label "schließen"}
                          {:action :duplicate :label "duplizieren"}
                          {:action :save-per-id :label "speichern"}
                          {:action :delete :label "entfernen"}]
                         (map :name (:studienrichtungen @welt)))])


