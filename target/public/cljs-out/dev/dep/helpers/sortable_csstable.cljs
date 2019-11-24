(ns dep.helpers.sortable-csstable
  (:require [reagent.core :as r]
            [reagent-modals.modals :as reagent-modals]
            [reagent-forms.core :refer [bind-fields]]
            ))

(defn modalmessage
  "Komponente für die Anzeige eines modalen Formulars form."
  [form] 
  (reagent-modals/modal! [form]))

(defn modal-form
  "Erzeugt eine modale Form aus einer Schablone form-template.
  title-buttons ist eine Hashmap bestehend aus der Überschrift und den bereit zu
  stellenden Schaltflächen, data-set ist der anzuzeigende Datensatz. table-state ist
  ein Atom für die Speicherung des geänderten Datensatzes und der betätigten Schalt-
  fläche."
  [form-template title-buttons data-set table-state]
  (let [s (r/atom data-set)]
    (fn []
      [:div.modal-content
       [:div {:class "modal-header"}  
        [:h4.modal-title (:modal-title title-buttons)]
        [:button {:type "button" :class "close" :data-dismiss "modal"} "×"]]
       [:div.modal-body
        [bind-fields form-template s]]
       [:div.modal-footer
        (for [btn (:buttons  title-buttons)]
          [:button.btn.btn-primary
           {:key (:label btn) :type "button" :data-dismiss "modal"
            :on-click #(swap! table-state assoc :new-val @s :action (:action btn))}
           (:label btn)])
        ]])))

(defn remove-dataset
  "Enfernt aus dem Welt-Attribut world-key den Datensatz, dessen key gleich value ist."
  [world world-key key value]
  (let [acc-vec (world-key world)]
    (swap! world assoc-in acc-vec
           (vec (remove #(= (key %) value) (get-in @world acc-vec))))))

(defn save-dataset
  "Speichert einen geänderten Datensatz im Welt-Attribut world-key.
  Falls der Schlüssel des Datensatzes im Formular (form-key) geändert wurde, wird
  ein neuer Datensatz hinzugefügt, andernfalls der geänderte gespeichert."
  [world world-key form-dataset form-key key value
   dataset-exists change-dataset] 
  (let [value-of-form-key (form-key form-dataset)
        acc-vec (world-key world)
        data (get-in @world acc-vec)] 
    (if (dataset-exists data value-of-form-key) 
      (swap! world assoc-in acc-vec
             (conj (vec (remove #(= (key %) value-of-form-key) data))
                   (change-dataset
                    (dataset-exists data value-of-form-key)
                    form-dataset))) 
      (swap! world assoc-in acc-vec
             (conj data
                   (change-dataset (dataset-exists data value) form-dataset))))))

(defn save-per-id
  "Funktion zur Speicherung der Änderung eines Datensatzes im Welt-Attribut
  world-key. Identifizierung des Datensatzes erfolgt über die im Formular-
  Datensatz gespeichere :Id."
  [world world-key form-dataset dataset-exists change-dataset]
  (let [acc-vec (world-key world)
        data (get-in @world acc-vec)
        dataset (dataset-exists data (:Id form-dataset))]
    (swap! world assoc-in acc-vec
           (conj (vec (remove #(= (:id %) (:Id form-dataset)) data))
                 (change-dataset
                  dataset
                  form-dataset world)))))

(defn duplicate-dataset
  "Dupliziert den durch id identifizierten Datensatz im Welt-Attribut world-key."
  [world world-key id dataset-exists] 
  (let [acc-vec (world-key world)
        data (get-in @world acc-vec)
        dataset (dataset-exists data id)
        lven (conj data (assoc dataset :id (gensym)))] 
    (swap! world assoc-in acc-vec lven )))

(defn rename-file
  "Funktion ... ."
  [world form-dataset form-key filename change-filename]
  (let [form-filename (form-key form-dataset)]
    (change-filename filename form-filename world)))


(defn process-form
  "Funktion zur Ausführung der in einem modalen Formular ausgewählten action."
  [action form-dataset world world-key form-key key id-clicked-dataset
   dataset-exists change-dataset] 
  (let [id-form-dataset  (if (:Id form-dataset) (:Id form-dataset)
                             (form-key form-dataset))]
    (do (case action
          :save (save-dataset world world-key form-dataset
                              form-key key id-clicked-dataset
                              dataset-exists change-dataset)
          :delete (remove-dataset world world-key key id-form-dataset)
          :duplicate (duplicate-dataset world world-key (:Id form-dataset)
                                        dataset-exists)
          :save-per-id (save-per-id world world-key form-dataset
                                    dataset-exists change-dataset)
          :rename-file (rename-file world form-dataset form-key
                                    id-clicked-dataset change-dataset)))))

(defn process-simple-form
  "Funktion zur Ausführung der in einem modalen Formular ausgewählten action."
  [action form-dataset data form-key id-clicked-dataset change-dataset] 
  ;; (let [id-form-dataset  (if (:Id form-dataset) (:Id form-dataset)
  ;;                            (form-key form-dataset))]
  (do (case action
        :rename-file (rename-file data form-dataset form-key
                                  id-clicked-dataset change-dataset))))

(defn update-sort-value
  "Aktualisiert die Sortierrichtung einer Tabelle."
  [new-val sort-state]
  (if (= new-val (:sort-val @sort-state))
    (swap! sort-state update-in [:ascending] not)
    (swap! sort-state assoc :ascending true))
  (swap! sort-state assoc :sort-val new-val))

(defn sorted-contents 
  "Sortiert eine Tabelle table gemäß der in table-state gespeicherten Richtung."
  [table-state table]
  (let [sorted-contents
        (sort-by (:sort-val @table-state) table)]
    (if (:ascending @table-state)
      sorted-contents
      (rseq sorted-contents))))

(defn row-ui
  "Koponente für die Darstellung einer Tabellenzeile."
  [cols row-key table-state form  click-action m] 
  [:div.rTableRow{:key (gensym (row-key m))}
   (for [col cols] [:div.rTableCell
                    {:key col}
                    (if (= col row-key)
                      [:a {:on-click
                           #(do 
                              (click-action (get m col)) 
                              (modalmessage (form m table-state)))}
                       (get m col)]
                      (get m col))])])

(defn table-ui
  "Komponente für die Darstellung einer sortierbaren Tabelle."
  [cols table row-key table-state form click-action width] 
  (let [rel (sorted-contents table-state table)]    
    [:div.rTable {:style (when width {:width width})}
     [:div.rTableHeading
      [:div.rTableRow
       (for [col cols]
         [:div.rTableHead
          {:key col :on-click #(update-sort-value col table-state)}
          (name col)]) ]] 
     [:div.rTableBody
      (map (partial row-ui cols row-key table-state
                    form  click-action) rel)]]))

