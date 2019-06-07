(ns dep.components.datensicherung
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r] 
            [dep.components.datamanagement :refer [data-management]]
            [dep.helpers.drop-file-stream
             :refer [write-text list-folder delete-file-named read-edn-file
                     rename-file]]))

(defn datei-mit-namen
  "Liefert die Datei mit dem Namen string aus der Liste von dateien."
  [dateien string]
  (first (filter #(= (:name %) string) dateien)))

(defn loesche-datei
  "Enfernt die Datei d aus der welt und vom Datenträger."
  [d welt] 
  (go (<! (delete-file-named (:name d)))
      (swap! welt assoc :dateien
             (vec (remove #(= (:name d) (:name %)) (:dateien @welt))))))

(defn lade-welt-aus-datei
  "Restauriert den Welt-Zustand aus der edn-Datei d."
  [d welt]
  (go (reset! welt (<! (read-edn-file (:name d))))))

(defn umbenenne-datei 
  "Gibt der Datei mit dem Namen alter-name den Namen neuer-name.
  Umbenennung ist nur möglich, falls nicht bereits eine Datei mit dem Namen neuer-name
  existiert."
  [alter-name neuer-name welt] 
  (if (datei-mit-namen (:dateien @welt) neuer-name)
    (js/alert (str "Datei mit Namen " neuer-name " existiert bereits!"))
    (go (<! (rename-file alter-name neuer-name))
        (swap! welt assoc :dateien (<! (list-folder))))))

;; View
(defn dateien->table
  "Wandelt die dateien für die Darstellung als Tabelle um. "
  [welt dateien]
  (mapv #(hash-map :Name (:name %)
                   :Zeitstempel (:client_modified %)
                   :Aktion1 [:a
                             {:on-click (fn [](loesche-datei % welt))} "entfernen"]
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
  [buttons welt]
  {:data (fn [s] [:dateien])
   :title "Dateien"
   :table-column-titles datei-spalten
   :table-row-fn (partial dateien->table welt)
   :table-key-column :Name
   :edit-component datei-form-template
   :title-buttons {:modal-title "Datei" :buttons buttons}
   :width nil
   :data-id :name
   :id-fn identity
   :dataset-exists-fn nil
   :update-fn umbenenne-datei})

(defn datensicherung
  "Komponente für das Laden und Speichern von Planungsdaten."
  [welt]
  (fn [welt]
    (let [buttons [{:action nil :label "schließen"}
                   {:action :rename-file :label "Name ändern"}]
          s (r/atom "pldaten.edn") 
          _ (go (swap! welt assoc :dateien (<! (list-folder))))]
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
                          (swap! welt assoc :dateien (<! (list-folder))))}
          "sichern"]]]
       [:div.col-md-6
        [data-management welt (datei-verwaltung buttons welt)]]])))



