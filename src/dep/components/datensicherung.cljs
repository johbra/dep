(ns dep.components.datensicherung
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r] 
            [dep.components.datamanagement :refer [datei-management]]
            [dep.helpers.drop-file-stream
             :refer [write-text list-folder delete-file-named read-edn-file
                     rename-file]]))

(def forcer
  "Dummy-Atom zur Erwingung des Rerendering"
  (r/atom 0))

(defn datei-mit-namen
  "Liefert die Datei mit dem Namen string aus der Liste von dateien."
  [dateien string]
  (first (filter #(= (:name %) string) dateien)))

(defn loesche-datei
  "Enfernt die Datei d aus der welt und vom Datenträger."
  [d] 
  (go (<! (delete-file-named (:name d)))
      (swap! forcer inc)) ;erzwinge Rerendering
  )

(defn lade-welt-aus-datei
  "Restauriert den Welt-Zustand aus der edn-Datei d."
  [d welt]
  (go (reset! welt (<! (read-edn-file (:name d))))
      (swap! welt assoc :selected :hauptseite)))

(defn umbenenne-datei 
  "Gibt der Datei mit dem Namen alter-name den Namen neuer-name. 
  Umbenennung ist nur möglich, falls nicht bereits eine Datei mit dem Namen neuer-name
  existiert."
  [alter-name neuer-name dateien] 
  (if (datei-mit-namen @dateien neuer-name)
    (js/alert (str "Datei mit Namen " neuer-name " existiert bereits!"))
    (go (<! (rename-file alter-name neuer-name))
        (swap! forcer inc) ;; Erzwinge Rerendering
        )))

;; View
(defn dateien->table
  "Wandelt die dateien für die Darstellung als Tabelle um. "
  [welt dateien]
  (mapv #(hash-map :Name (:name %)
                   :Zeitstempel (:client_modified %)
                   :Aktion1 [:a
                             {:on-click (fn [](loesche-datei %))} "entfernen"]
                   :Aktion2 [:a
                             {:on-click (fn [](lade-welt-aus-datei % welt))} "laden"])
        dateien))

(def datei-spalten
  "Die Spaltenüberschriften der Dateitabelle."
  [:Name :Zeitstempel :Aktion1 :Aktion2 ])

(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular."
  [:div.row
   [:div.col-md-3 [:label label]]
   [:div.col-md-5 input]])

(def datei-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Name" [:input {:field :text :id :Name}])
   (row "Zeitstempel" [:input {:read-only "readOnly" :field :text :id :Zeitstempel}])
   ])

(defn datei-verwaltung
  "Liefert die Infos für die Dateitabelle und das Bearbeitungsformular."
  [buttons dateien welt]
  { :title "Dateien"
   :table-column-titles datei-spalten
   :table-row-fn (partial dateien->table welt)
   :table-key-column :Name
   :edit-component datei-form-template
   :title-buttons {:modal-title "Datei" :buttons buttons}
   :id-fn identity
   :update-fn umbenenne-datei})

(defn datensicherung
  "Komponente für das Laden und Speichern von Planungsdaten."
  [welt]
  (fn [welt]
    (let [buttons [{:action nil :label "schließen"}
                   {:action :rename-file :label "Name ändern"}]
          s (r/atom "pldaten.edn")
          dateien (r/atom [])
          _ (go (reset! dateien (<! (list-folder))))]
      ;@forcer ; um das Rerendering zu ermöglichen
      [:div.row 
       [:div.col-md-6
        [:h4 "Planungsdaten in Datei speichern"]
        [:div.row.form-group.form-inline
         [:label.col-md-5 {:for "datei"} "Daten in Datei mit dem Namen"]
         [:input.form-control.col-md-4
          {:default-value "pldaten.edn" :id "datei"
           :on-change #(reset! s (-> % .-target .-value))}]
         [:button.btn-default.col-md-3
          {:on-click #(go (<! (write-text (prn-str @welt) @s))
                          (reset! dateien (<! (list-folder))))}
          "sichern"]]]
       [:div.col-md-6
        [datei-management dateien (datei-verwaltung buttons dateien welt)]]])))



