(ns ^:figwheel-hooks dep.core
  "dep steht für Dozenteneinsatzplanung.
  Figwheel compiliert in die Datei target/public/cljs-out/dev-main.js.
  Diese muss in index.html aktiviert werden:
  <script src='cljs-out/dev-main.js' ..."
  
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]   
   [dep.state :refer [WELT]]
   [dep.components.side-nav-bar :as bar]
   ))

(defn dozenteneinsatzplanung 
  "Hauptkomponente der Dozenteneinsatzplanung."
  [welt] 
  [:div#wrapper {:class "d-flex"}
   [bar/sidebar welt] ;; Sidebar-Menükomponente
   [:div {:id "page-content-wrapper"}
    [:nav  {:class "navbar navbar-expand-lg navbar-light bg-light border-bottom"}
     [bar/menu-toggle ]
     [bar/geschaeftjahr-quartal-form welt]] ;;Top-Navigantionsleiste
    [:div (bar/menu-actions welt) ;; Sidebar-Menüauswahl
     ]]])

(defn get-app-element 
  "Liefert den body der Html-Seite (index.html).
   Es muss ein div-Element mit der id app existieren:
   <div id='app'> </div> "
  []
  (gdom/getElement "app"))

(defn mount-app-element [] 
  (when-let [el (get-app-element)]
    (r/render [dozenteneinsatzplanung WELT] el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload [] 
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! WELT update-in [:__figwheel_counter] inc)
  )
