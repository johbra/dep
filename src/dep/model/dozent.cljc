(ns dep.model.dozent
  (:require [dep.model.quartal :refer [geschaeftsjahreszahl ->Quartal]]
            [dep.helpers.helpers :refer [round1]]))


;; Konstruktor
(defn ->Dozent
  "Erzeugt ein Dozent-'Objekt' (hash-map)."
  [name vorname auslastungen insMenue sollStunden]
  {:name name :vorname vorname :auslastungen auslastungen
   :insMenue insMenue :sollStunden sollStunden})

;; Planung

(defn initialisiereAuslastungenIn
  "Initialisiert die Auslastungen für dozent in den geschaeftsjahren."
  [dozent geschaeftsjahre]
  (assoc dozent :auslastungen (into {} (map #(hash-map % [0 0 0 0]) geschaeftsjahre))))

(defn stunden-in-quartal
  "Ermittelt die für dozent in geschaeftsjahr und quartal (Nr.) geplanten Stunden."
  [dozent geschaeftsjahr quartal]
  (let [agj ((:auslastungen dozent) geschaeftsjahr)]
    (if agj (agj quartal) 0)))

(defn stundenInQ1
  [dozent geschaeftsjahr]
  (stunden-in-quartal dozent geschaeftsjahr 1))

(defn stundenInQ2
  [dozent geschaeftsjahr]
  (stunden-in-quartal dozent geschaeftsjahr 2))

(defn stundenInQ3
  [dozent geschaeftsjahr]
  (stunden-in-quartal dozent geschaeftsjahr 3))

(defn stundenInQ4
  [dozent geschaeftsjahr] 
  (stunden-in-quartal dozent geschaeftsjahr 0))

(defn stunden-in-geschaeftsjahr
  "Ermittelt geplante Stunden für dozent im geschaeftsjahr."
  [dozent geschaeftsjahr]
  (round1 (reduce + 0 ((:auslastungen dozent) geschaeftsjahr))))

(defn schreiben-stunden-auf-quartal
  "Schreibt die stunden für dozent auf das quartal (Quartal keine Nr) gut."
  [dozent stunden quartal]
  (let [auslastungen-in-quartal
        ((:auslastungen dozent) (geschaeftsjahreszahl quartal))
        index (if (= (:nr quartal) 4) 0 (:nr quartal))]""
       (if auslastungen-in-quartal
         (assoc-in dozent [:auslastungen (geschaeftsjahreszahl quartal)]
                   (assoc auslastungen-in-quartal index (round1 stunden)))
         #?(:clj (throw (Exception. (str "Geschäftsjahr existiert nicht: "
                                         (geschaeftsjahreszahl quartal))))
            :cljs (throw (js/Error. (str "Geschäftsjahr existiert nicht: "
                                         (geschaeftsjahreszahl quartal))))))))

(defn dozent-mit-namen
  "Liefert den Dozenten mit dem Namen string aus der Liste dozenten."
  [dozenten string]
  (first (filter #(= (:name %) string) dozenten)))

;; View
(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular."
  [:div.row
   [:div.col-md-3 [:label label]]
   [:div.col-md-5 input]])

(def dozent-form-template
  "Komponente für das Bearbeitungsformular."
  [:div
   (row "Nachname" [:input {:field :text :id :Name}])
   (row "Vorname" [:input {:field :text :id :Vorname}])
   (row "ins Menü" [:input {:field :checkbox :id :ins-Menue}])
   (row "Sollstunden" [:input {:field :numeric :id :Stundensoll}])])

(def dozent-spalten-attribute
  "Zuordnung von Spaltenüberschriften zu Dozent-Attributen."
  {:Name :name, :Vorname :vorname, :ins-Menue :insMenue, :Stundensoll :sollStunden})

(def dozent-spalten
  "Die Spaltenüberschriften der Dozenttabelle."
  [:Name :Vorname :ins-Menue :Stundensoll])

(defn dozenten->table
  "Wandelt die dozenten für die Darstellung als Tabelle um. "
  [dozenten]
  (mapv #(hash-map :Name (:name %)
                   :Vorname (:vorname %)
                   :ins-Menue (if (:insMenue %) "ja" "nein")
                   :Stundensoll (:sollStunden %))
        dozenten))

(defn aender-dozent 
  "Erzeugt einen neuen Dozenten aus den in aenderungen gegebenen Daten."
  [dozent aenderungen]
  (merge dozent (clojure.set/rename-keys aenderungen dozent-spalten-attribute)))

(defn dozenten-verwaltung
  "Liefert die Infos für die Dozententabelle und das Bearbeitungsformular."
  [buttons]
  {:data (fn [s] [:dozenten])
   :title "Dozenten"
   :table-column-titles dozent-spalten
   :table-row-fn dozenten->table
   :table-key-column :Name
   :edit-component dozent-form-template
   :title-buttons {:modal-title "Dozent" :buttons buttons}
   :width nil
   :data-id :name
   :id-fn identity
   :dataset-exists-fn dozent-mit-namen
   :update-fn aender-dozent})

;; Erzeugen von Beispieldaten
(defn erzeuge-dozenten
  []
  [(->Dozent "Gans" "Gustav" {} true 600)
   (->Dozent "Duck" "Donald" {} true 500)
   (->Dozent "Düsentrieb" "Daniel" {} true 600)
   (->Dozent "NN" "NN" {} false 0)])
