(ns dep.components.datamanagement
  (:require [reagent.core :as r]
            [reagent-modals.modals :as reagent-modals]
            [dep.helpers.sortable-csstable
             :refer [table-ui modal-form remove-dataset
                     save-dataset process-form]]))

(defn data-management
  "Erzeugt eine Datenanzeige und -verwaltungskomponente für einen Teil der Welt.
  Zu den management-data gehören Dozenten, Module, Manipel und Lehrveranstaltungen."
  [world management-data]
  (let [;; interner Zustand der Komponente
        table-state (r/atom {:sort-val :Name,
                             :ascending true
                             :clicked-row nil})
        click-action #(swap! table-state assoc :clicked-row %)]
    (fn [world management-data] 
      [:div
       [:h4 (:title management-data)]
       [:div 
        [reagent-modals/modal-window] ; Komponente für modale Dialoge
        [table-ui ; Komponente für die CSS-Tabelle
         (:table-column-titles management-data) 
         ((:table-row-fn management-data)                  ;; Umwandlung der Welt-Daten
          (get-in @world ((:data management-data) world))) ;; in Tabellenform
         (:table-key-column management-data)               ;; Schlüsselspalte
         table-state
         (partial modal-form                         ;; Funktion für den modalen
                  (:edit-component management-data)  ;; Bearbeitungsdialog
                  (:title-buttons management-data)) 
         click-action (:width management-data)]
        (when (:action @table-state)
          ;; falls der Benutzer im modalen Formular eine Schaltfläche betätigt hat:
          (do (process-form (:action @table-state)  ; die Schaltfläche
                            (:new-val @table-state) ; der Formular-Inhalt
                            world
                            (:data management-data)
                            (:table-key-column management-data)
                            (:data-id management-data)
                            ((:id-fn management-data) (:clicked-row  @table-state))
                            (:dataset-exists-fn management-data)
                            (:update-fn management-data))
              ((:aktualisiere-plan-fn @world))
              (swap! table-state assoc :action nil)))]])))
