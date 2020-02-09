(ns dep.components.studienrichtungen
  (:require [reagent.core :refer [atom]]
            [potpuri.core :as p]
            [dep.model.studienrichtung
             :refer [studienrichtung-mit-namen sieben-semester->quartstrng]]
            [dep.model.quartal
             :refer [quartal->string sieben-semester->quartstrng minus
                     ->Quartal string->quartal parse-int]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.helpers.helpers :refer [input-frmctrl]]))


(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular." 
  [:div.row
   [:label.col-sm-3 label]
   [:div.col-sm-9 input]])

(def studienrichtung-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Bezeichnung" (input-frmctrl false :text :Bezeichnung))
   (row "Semester 1" (input-frmctrl false :text :Sem-1))
   (row "Semester 2" (input-frmctrl false :text :Sem-2))
   (row "Semester 3" (input-frmctrl false :text :Sem-3))
   (row "Semester 4" (input-frmctrl false :text :Sem-4))
   (row "Semester 5" (input-frmctrl false :text :Sem-5))
   (row "Semester 6" (input-frmctrl false :text :Sem-6))
   (row "Semester 7" (input-frmctrl false :text :Sem-7))])

(defn aender-studienrichtung 
  "Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten."
  [studienrichtung aenderungen]
  (let [qsz (dissoc aenderungen :Bezeichnung)
        qsz (p/map-vals string->quartal qsz)
        qsz (clojure.set/map-invert qsz)
        qsz (p/map-vals #(parse-int (last (clojure.string/split (str %) #"-"))) qsz)]
    (assoc studienrichtung :quartal-semester-zuordnung qsz
           :name (:Bezeichnung aenderungen))))

(defn studienrichtungen->table
  "Wandelt die studienrichtungen für die Darstellung als Tabelle um. "
  [studienrichtungen]
  (mapv #(merge (hash-map :Bezeichnung (:name %))
                (sieben-semester->quartstrng (->Quartal 4 0)
                                             (:quartal-semester-zuordnung %)))
        studienrichtungen))

(def studienrichtung-spalten
  "Die Spaltenüberschriften der Studienrichtungstabelle."
  (concat [:Bezeichnung]
          (vec (for [sem (range 1 8)]
                 (keyword (str "Sem-" sem))))))

(defn studienrichtungen-verwaltung
  "Liefert die Infos für die Studienrichtungstabelle und das Bearbeitungsformular."
  [buttons]
  {:data (fn [s] [:studienrichtungen])
   :title "Studienrichtungen"
   :table-column-titles studienrichtung-spalten
   :table-row-fn studienrichtungen->table
   :table-key-column :Bezeichnung
   :edit-component studienrichtung-form-template
   :title-buttons {:modal-title "Studienrichtung" :buttons buttons}
   :data-id :name
   :id-fn identity
   :dataset-exists-fn studienrichtung-mit-namen
   :update-fn aender-studienrichtung})

(defn studienrichtungen
  "Komponente für die Anzeige und Bearbeitung der Studienrichtungen."
  [welt]
  [data-management welt
   (studienrichtungen-verwaltung [{:action nil :label "schließen"}
                                  {:action :save :label "speichern"}
                                  {:action :delete :label "entfernen"}])])


