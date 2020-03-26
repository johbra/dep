(ns dep.components.planung
  (:require [reagent.core :as r]
            [dep.components.lehrveranstaltungen :refer [lehrveranstaltungen]]
            [dep.components.dozentenauslastung
             :refer [dozentenauslastung dozentenstunden-quartal
                     aktualisiere-dozentenauslastung
                     dozentenstunden-jahr]] 
            [dep.model.lehrveranstaltung
             :refer [lehrveranstaltungen-fuer-quartal]] 
            [dep.model.dozent :refer [initialisiereAuslastungenIn]]
            [dep.model.manipel :refer [quartal-aus-jsz-fuer-semester]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.model.quartal :refer [semester->quartal quartale-fuer-jahr minus]]))

(defn fuege-geschaeftsjahr-hinzu
  "fuegt allen dozenten die Initialauslastung für ein Geschäftsjahr jahr hinzu."
  [dozenten jahr]
  (mapv #(assoc-in % [:auslastungen jahr] [0 0 0 0]) dozenten))

(defn neuesGeschaeftjahr
  "legt neues Geschäftsjahr an."
  [welt]
  (let [neuesJahr (inc (apply max (:jahre @welt)))
        jahre (conj (:jahre @welt) neuesJahr)
        dozenten (fuege-geschaeftsjahr-hinzu (:dozenten @welt) neuesJahr)]
    (swap! welt assoc :jahre jahre :dozenten dozenten)))

(defn plane-quartal
  "Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
  Vorherige Planungen dieses Quartals werden überschrieben."
  [welt]
  (let [lvn (lehrveranstaltungen-fuer-quartal
             (:quartal @welt)
             (:manipels @welt)
             (:module @welt));}
        dzntn (dozentenstunden-quartal lvn (:dozenten @welt)(:quartal  @welt)) 
        alle-lvn (into [] (concat 
                           (remove #(= (:quartal %) (:quartal  @welt))
                                   (:lven @welt))
                           lvn))]
    (swap! welt assoc :dozenten dzntn)
    (swap! welt assoc :lven alle-lvn)))

(defn lehrveranstaltungen-eines-manipels
  "ermittelt alle Lehrveranstaltungen aus lvn für manipel."
  [manipel lvn]
  (into #{} (filter (fn [l] (= (:manipel l) manipel)) lvn)))

(defn geaenderte-semester-quartale
  "ermittelt die sich zwischen alt-manipel und neu-manipel geänderten
  Semesterinquartale."
  [alt-manipel neu-manipel]
  (apply merge (for [[q s] (:jahrSemesterZuordnung alt-manipel)
                     :when (not= q (quartal-aus-jsz-fuer-semester
                                    (:jahrSemesterZuordnung neu-manipel) s))]
                 {q s})))

(defn verschiebe-lven
  "verschiebt die Lehrveranstaltungen lven in neues Quartal auf der Basis einer
  Änderung der Quartal-Semester-Zuordnung zwischen von-manipel und nach-manipel."
  [lven von-manipel nach-manipel]
  (let [sq (geaenderte-semester-quartale von-manipel nach-manipel)]
    (mapv (fn [lv]
            (let [semester (sq (minus (:quartal lv)
                                      (:studienbeginn von-manipel)))]
              (if semester
                (assoc lv
                       :manipel nach-manipel
                       :quartal (semester->quartal
                                 semester
                                 (:studienbeginn nach-manipel)
                                 (:jahrSemesterZuordnung nach-manipel)))
                lv)))
          lven)))

(defn ersetze-lven
  "In lven-alle werden die Lehrveranstaltungen lven-alt durch die in lven-neu ersetzt."
  [lven-alt lven-neu lven-alle]
  (into [] (concat (remove lven-alt lven-alle) lven-neu)))

(defn umplane-lven
  "Die Lehrveranstaltungen von alt-manipel werden auf das neu-manipel umgestellt."
  [alt-manipel neu-manipel welt]
  (let [lven-von-alt-manipel (lehrveranstaltungen-eines-manipels
                              alt-manipel (:lven @welt))
        lven-fuer-neu-manipel (verschiebe-lven lven-von-alt-manipel
                                               alt-manipel neu-manipel)
        lven-gesamt (ersetze-lven lven-von-alt-manipel 
                                  lven-fuer-neu-manipel (:lven @welt))
        dzntn (dozentenstunden-jahr lven-gesamt
                                    (:dozenten @welt)
                                    (:geschaeftsjahr @welt))]
    (swap! welt assoc :lven lven-gesamt :dozenten dzntn)))

(defn initialisiere-auslastung-fuer-geschaeftsjahre
  "Initialisiert die Dozentenauslastung für alle existierenden Geschaeftsjahre.
  In dieser Form vorläufig."
  [welt]
  (let [dn (:dozenten @welt)
        f (fn [d] (initialisiereAuslastungenIn d (:jahre @welt)))
        dni (mapv f dn)]
    (swap! welt assoc :dozenten dni)))

(defn planung
  "Die zentrale Planungskomponente."
  [welt]
  [:div.row 
   [:div.col-md-8 
    [lehrveranstaltungen welt]]
   [:div.col-md-4 
    [dozentenauslastung welt]]
   ])

