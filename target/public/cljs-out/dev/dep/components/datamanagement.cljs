(ns dep.components.datamanagement
  (:require [reagent.core :as r]
            [reagent-modals.modals :as reagent-modals]
            [dep.helpers.sortable-csstable
             :refer [table-ui modal-form process-form process-simple-form]]))

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
      (let [world-data (if (:filter management-data)
                         ((:filter management-data)
                          (get-in @world ((:data management-data) world)))
                         (get-in @world ((:data management-data) world)))]
        [:div
         [:h4 (:title management-data)]
         [:div 
          [reagent-modals/modal-window] ; Komponente für modale Dialoge
          [table-ui ; Komponente für die CSS-Tabelle
           (:table-column-titles management-data) 
           ((:table-row-fn management-data) world-data) ; Umwandlung der Welt-Daten
                                        ; in Tabellenform
           (:table-key-column management-data)         ; Schlüsselspalte
           table-state
           (partial modal-form                         ; Funktion für den modalen
                    (:edit-component management-data)  ; Bearbeitungsdialog
                    (:title-buttons management-data)) 
           click-action]
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
                (swap! table-state assoc :action nil)))]]))))

(defn datei-management
  "Erzeugt eine Datenanzeige und -verwaltungskomponente für die Planungsdateien."
  [dateien management-data] 
  (let [;; interner Zustand der Komponente
        table-state (r/atom {:sort-val :Name,
                             :ascending true
                             :clicked-row nil})
        click-action #(swap! table-state assoc :clicked-row %)]
    (fn [dateien management-data] 
      [:div
       [:h4 (:title management-data)]
       [:div 
        [reagent-modals/modal-window] ; Komponente für modale Dialoge
        [table-ui ; Komponente für die CSS-Tabelle
         (:table-column-titles management-data) 
         ((:table-row-fn management-data) @dateien) ;; Darstellung der Dateien
         ;; in Tabellenform
         (:table-key-column management-data)               ;; Schlüsselspalte
         table-state
         (partial modal-form                         ;; Funktion für den modalen
                  (:edit-component management-data)  ;; Bearbeitungsdialog
                  (:title-buttons management-data)) 
         click-action]
        (when (:action @table-state)
          ;; falls der Benutzer im modalen Formular eine Schaltfläche betätigt hat:
          (do (process-simple-form
               (:action @table-state)  ; die Schaltfläche
               (:new-val @table-state) ; der Formular-Inhalt
               dateien 
               (:table-key-column management-data)
               ((:id-fn management-data) (:clicked-row  @table-state))
               (:update-fn management-data))
              (swap! table-state assoc :action nil)))]])))
