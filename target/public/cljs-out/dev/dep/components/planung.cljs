(ns dep.components.planung
  (:require [reagent.core :as r]
            [dep.components.lehrveranstaltungen :refer [lehrveranstaltungen]]
            [dep.components.dozentenauslastung
             :refer [dozentenauslastung dozentenstunden aktualisiere-plan]] 
            [dep.model.lehrveranstaltung
             :refer [lehrveranstaltungen-fuer-quartal]] 
            [dep.model.dozent :refer [initialisiereAuslastungenIn]]
            [dep.model.manipel :refer [quartal-aus-jsz-fuer-semester]]
            [dep.components.datamanagement :refer [data-management]]
            [dep.model.quartal :refer [semester->quartal]]))

(defn neuesGeschaeftjahr
  "legt neues Geschäftsjahr an"
  [welt]
  (let [neuesJahr (inc (apply max (:jahre @welt)))
        jahre (conj (:jahre @welt) neuesJahr)]
    (swap! welt assoc :jahre jahre)))

(defn plane-quartal
  "Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
  Vorherige Planungen dieses Quartals werden überschrieben."
  [welt]
  (let [lvn (lehrveranstaltungen-fuer-quartal
             (:quartal @welt)
             (:manipels @welt)
             (:module @welt));}
        dzntn (dozentenstunden lvn
                               (:dozenten @welt)
                               (:quartal  @welt)) 
        alle-lvn (into [] (concat 
                           (remove #(= (:quartal %) (:quartal  @welt))
                                   (:lven @welt))
                           lvn))]
    (swap! welt assoc :dozenten dzntn)
    (swap! welt assoc :lven alle-lvn)))
 
(defn umplane-lven
  "Nach Änderung an der Jahrsemesterzuordung eines Manipels werden diese
  Lehrveranstaltungen von manipel gemäß der Jahrsemesterzuordnung von
  neues-manipel umgeplant."
  [manipel neues-manipel welt]
  (let [lven-von-manipel (into #{} (filter (fn [l] (= (:manipel l) manipel))
                                           (:lven @welt)))
        lven-ohne-die-von-manipel (remove lven-von-manipel (:lven @welt))]
    (doseq [[qua sem] (:jahrSemesterZuordnung manipel)]
      (when (not (= qua (quartal-aus-jsz-fuer-semester
                         (:jahrSemesterZuordnung neues-manipel) sem))) 
        (let [lven-fuer-neues-manipel
              (mapv #(assoc %
                            :manipel neues-manipel
                            :quartal (semester->quartal
                                      sem
                                      (:studienbeginn neues-manipel)
                                      (:jahrSemesterZuordnung neues-manipel)))
                    lven-von-manipel)]
          (swap! welt assoc :lven 
                 (into []
                       (concat lven-fuer-neues-manipel
                               lven-ohne-die-von-manipel))))))))

(defn initialisiere-auslastung-fuer-geschaeftsjahre
  "Initialisiert die Dozentenauslastung für alle existierenden Geschaeftsjahre.
  In dieser Form vorläufig."
  [welt]
  (let [dn (:dozenten @welt)
        f (fn [d] (initialisiereAuslastungenIn d (:jahre @welt)))
        dni (mapv f dn)]
    (swap! welt assoc :dozenten dni)))

(defn initialisiere-planung
  "Setzt die gesamte Planung zurück."
  [welt]
  ;; (do (initialisiere-auslastung-fuer-geschaeftsjahre welt)
  ;;     (swap! welt
  ;;            assoc :lven
  ;;            (apply merge (map #(hash-map %  {}) (:jahre @welt))))
  ;;     )
  )


(defn planung
  "Die zentrale Planungskomponente."
  [welt]
  [:div.row 
   [:div.col-md-8 
    [lehrveranstaltungen welt]]
   [:div.col-md-4 
    [dozentenauslastung welt]]
   ])

