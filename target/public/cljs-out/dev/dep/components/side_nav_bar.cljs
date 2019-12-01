(ns dep.components.side-nav-bar
  (:require 
   [reagent.core :as r]
   [dep.components.datamanagement :refer [data-management]]
   [dep.model.manipel :refer [manipel-verwaltung]]
   [dep.model.dozent :refer [dozenten-verwaltung]]
   [dep.model.studienrichtung :refer [studienrichtungen-verwaltung]]
   [dep.model.modul :refer  [module-verwaltung]]
   [dep.model.quartal :refer [quartale-fuer-jahr quartal->string string->quartal]]
   [dep.components.datensicherung :refer [datensicherung]]
   [dep.components.planung :refer [planung plane-quartal neuesGeschaeftjahr]]))

(def default-buttons ;; für die Datenmanagement-Komponenten
  [{:action nil :label "schließen"}
   {:action :save :label "speichern"}
   {:action :delete :label "entfernen"}])

(defn set-value!
  "Setzt das WELT-Attribut id auf value."
  [welt id value] 
  (swap! welt assoc id value))

(defn sidebar
  "Komponente für das Menü am linken Rand."
  [welt] 
  [:div#sidebar-wrapper {:class "bg-light border-right"}
   [:div.sidebar-heading "Dozenteneinsatzplanung"] 
   [:div {:class "list-group list-group-flush"}
    [:a.list-group-item.list-group-item-action.bg-light
     {:on-click #(set-value! welt :selected :hauptseite)} "Planung"]
    [:a.list-group-item.list-group-item-action.bg-light
     {:on-click #(set-value! welt :selected :dozenten)} "Dozenten"] 
    [:a.list-group-item.list-group-item-action.bg-light
     {:on-click #(set-value! welt :selected :module)} "Module"]
    [:a.list-group-item.list-group-item-action.bg-light
     {:on-click #(set-value! welt :selected :manipel)} "Manipel"]
    [:a.list-group-item.list-group-item-action.bg-light
     {:on-click #(set-value! welt :selected :studienrichtungen)} "Studienrichtungen"]
    [:a.list-group-item.list-group-item-action.bg-light
     {:on-click #(set-value! welt :selected :datensicherung)} "Datensicherung"]
    ]])

(defn menu-actions
  "Das in der Sidebar platzierte Menü."
  [welt]
  (if (:selected @welt)
    ((:selected @welt)  
     {:manipel [data-management welt (manipel-verwaltung
                                      default-buttons
                                      (map :name (:studienrichtungen @welt)))] 
      :module [data-management welt (module-verwaltung
                                     [{:action nil :label "schließen"}
                                      {:action :duplicate :label "duplizieren"}
                                      {:action :save-per-id :label "speichern"}
                                      {:action :delete :label "entfernen"}]
                                     (map :name (:studienrichtungen @welt)))]
      :dozenten [data-management welt (dozenten-verwaltung default-buttons)]
      :studienrichtungen [data-management welt
                          (studienrichtungen-verwaltung default-buttons)]
      :datensicherung [datensicherung welt]
      :hauptseite [planung welt]})
    [planung welt]))


;; Die drei folgenden Funktionen erzeugen eine "menu toggle" Schaltfläche
;; zum Aus-/Einblenden der Sidebar. Vgl.
;; github.com/reagent-project/reagent-cookbook/tree/master/recipes/simple-sidebar

(defn menu-toggle-render [] 
  [:button#menu-toggle.col-lg-1 {:class "btn.btn-default"} "Toggle Menu"]
  )

(defn menu-toggle-did-mount [this]
  (.click (js/$ (r/dom-node this))
          (fn [e]
            (.preventDefault e)
            (.toggleClass (js/$ "#wrapper") "toggled") ;#wrapper will be the id of
                                        ;a div in our home component
            )))

(defn menu-toggle []
  (r/create-class {:reagent-render menu-toggle-render
                   :component-did-mount menu-toggle-did-mount}))


(defn input
  "Erzeugt  HTML-Eingabeform."
  [label input] 
  [:div.form-group {:class "col-lg-3"}
   [:label  label]
   input])

(defn geschaeftjahr-quartal-form 
  "Die Auswahlboxen für Geschäftsjahr und Quartal und die Planungsschaltfläche."
  [welt]
  [:div.row.col-lg-11
                                        ;[:div.form-inline
   (input
    "Geschäftsjahr:"
    [:select {:on-change
              #(do
                 (set-value! welt :geschaeftsjahr (js/parseInt(-> % .-target .-value)))
                 (set-value! welt :quartal
                             (first (quartale-fuer-jahr (:geschaeftsjahr @welt)))))}
     (for [j (:jahre @welt)] 
       [:option {:key j} j])])
   (input 
    "Quartal: "
    [:select
     {:on-change #(set-value! welt :quartal
                              (string->quartal (-> % .-target .-value)))}
     (for [q (quartale-fuer-jahr (:geschaeftsjahr @welt))] 
       [:option {:key (quartal->string q)} (quartal->string q)])]
    )
   [:button.btn-primary.col-lg-2 {:on-click #(plane-quartal welt)}
    "Plane Quartal"]
   [:div.col-lg-1 "  "]
   [:button.btn-primary.col-lg-2 {:on-click #(neuesGeschaeftjahr welt)}
    "neues G-Jahr anlegen"]
   [:div.col-lg-1 "  "]
   ])
