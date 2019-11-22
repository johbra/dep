(ns dep.model.lehrveranstaltung
  (:require 
   [dep.model.dozent
    :refer [schreiben-stunden-auf-quartal]]
   [dep.model.manipel
    :refer [semesterInQuartal zu-unterrichtende-manipels-quartal]]
   [dep.model.modul :refer [mussModulUnterrichtetWerdenFuer-inQuartal?
                            wochenStundenInSemester]] 
   ))

;; Konstruktor

(defn ->Lehrveranstaltung
  "Erzeugt ein Lehrveranstaltungsexemplar."
  [modul quartal dozent wiederholungsFaktor manipel]
  {:id (gensym) :modul modul :quartal quartal :dozent dozent
   :wiederholungsFaktor wiederholungsFaktor :manipel manipel
   :anzahlGruppen (:anzahlGruppen manipel)})

;; Planung
(defn semesterWochenstunden
  "Berechnet die Semesterwochenstunden einer Lehrveranstaltung lv."
  [lv]
  (wochenStundenInSemester (:modul lv)
                           (semesterInQuartal (:manipel lv) (:quartal lv))))

(defn lvStunden
  "Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung."
  [lv] 
  (* (semesterWochenstunden lv) 10 (:wiederholungsFaktor lv) (:anzahlGruppen lv)))

(defn lvstunden-dozent
  "Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
  Liste von Lehrveranstaltungen lven."
  [lven doz-nam] 
  (reduce
   + 0
   (map (fn [lv] (lvStunden lv))
        (filter #(= (:dozent %) doz-nam) lven))))

(defn manipel-modullisten-map-fuer-quartal
  "Ermittelt eine Hashmap mit je einem Manipel als key und einer Liste von Modulen
  als value der Module, die in einem quartal angeboten werden müssen."
  [manipels module quartal]
  (let [modulliste second]
    (into
     {} (filter
         #(not (empty? (modulliste %)))
         (map (fn [mpl] 
                [mpl (filter
                      #(mussModulUnterrichtetWerdenFuer-inQuartal?
                        % mpl quartal)
                      module)]) manipels)))))

(defn lven-vector
  "Erzeugt aus einer Manipel-Modullisten-Map einen Vektor aus Lehrveranstaltungen für
  ein quartal."
  [lv-map quartal]
  (into []
        (mapcat (fn [ml]
                  (map #(->Lehrveranstaltung  % quartal "NN" 1 (key ml)) (val ml)))
                lv-map)))

(defn lehrveranstaltungen-fuer-quartal
  "Erzeugt einen Vektor mit den Lehrveranstaltungen, die für die manipels und module
  in einem quartal geplant werden müssen."
  [quartal manipels module]
  (-> manipels
      (zu-unterrichtende-manipels-quartal quartal)
      (manipel-modullisten-map-fuer-quartal module quartal)
      (lven-vector quartal))) 

(defn dozentenstunden
  "Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
  Lehrveranstaltungen in lvn"
  [lvn dozenten quartal] 
  (mapv #(schreiben-stunden-auf-quartal
          %
          (lvstunden-dozent (get lvn quartal) (:name %))
          quartal)
        dozenten))

(defn lv-mit-id
  "Liefert die Lehrveranstaltung mit der gegebenen id."
  [lven id]
  (first (filter #(= (:id %) id) lven)))

;; View
(defn aender-lv
  "Erzeugt eine neue Lehrveranstaltung aus den in aenderungen gegebenen Daten."
  [lv aenderungen state] 
  (assoc (->Lehrveranstaltung
          (:modul lv)
          (:quartal lv)
          (:Dozent aenderungen) 
          (:WdhFkt aenderungen)
          (:manipel lv)) :anzahlGruppen (:Grpn aenderungen)))


(defn row [label input]
  "Komponente für eine Zeile im Bearbeitungsformular."
  [:div.row
   [:div.col-md-3 [:label label]]
   [:div.col-md-5 input]])

(defn lv-form-template [dozenten]
  "Komponente für das Bearbeitungsformular." 
  [:div
   (row "Modul"             [:input {:read-only "readOnly" :field :text :id :Modul}])
   (row "Manipel"           [:input {:read-only "readOnly" :field :text :id :Mnpl}])
   (row "Semester"          [:input {:read-only "readOnly" :field :text :id :Smstr}])
   (row "SWS"                 [:input {:read-only "readOnly" :field :text :id :SWS}])
   (row "Wiederholungsfaktor" [:input {:field :numeric :id :WdhFkt}])
   (row "Gruppen"             [:input {:field :numeric :id :Grpn}])
   (row "Dozent"              [:select {:field :text :id :Dozent}
                               (for [d dozenten] [:option  d])])])

(def lv-spalten
  "Die Spaltenüberschriften der Lv-Tabelle."
  [:Modul :Mnpl :Smstr :SWS :WdhFkt :Grpn :Dozent])

(defn semester 
  "Bestimmt das Semester des Manipels im Quartal der Lehrveranstaltung (Lv)."
  [lv]
  (semesterInQuartal (:manipel lv) (:quartal lv)))

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

(defn lven-verwaltung
  "Liefert die Infos für die Lv-Tabelle und das Bearbeitungsformular."
  [buttons dozenten]
  {:data  (fn [s] [:lven (:geschaeftsjahr @s) (:quartal @s)])
   :title "Lehrveranstaltungen"
   :table-column-titles lv-spalten
   :table-row-fn lvn->table
   :table-key-column :Dozent
   :edit-component (lv-form-template dozenten)
   :title-buttons {:modal-title "Lehrveranstaltung" :buttons buttons}
   :width "100%"
   :data-id :id
   :id-fn identity
   :dataset-exists-fn lv-mit-id
   :update-fn aender-lv})

;; Examples
;; (def l1 
;;   (->Lehrveranstaltung
;;    (->Modul 'A107 "PP" {5 5 6 4} "AI" (->Quartal 4 2000) (->Quartal 3 2099))
;;    (->Quartal 4 2019)
;;    (->Dozent "Gans" "Gustav" {} true 600)
;;    1
;;    (->Manipel "AI" 'I17 (->Quartal 4 2017)
;;               2 {(->Quartal 1 1) 1 (->Quartal 3 1) 2 (->Quartal 1 2) 3
;;                  (->Quartal 2 2) 4 (->Quartal 4 2) 5 (->Quartal 3 3) 6
;;                  (->Quartal 4 3) 7})))
;; (semesterWochenstunden l1)
;; (lvStunden l1)

