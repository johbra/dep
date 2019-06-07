(ns dep.helpers.drop-file-stream
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require  [cljs-http.client :as http]
             [cljs.core.async :as a :refer [<! chan timeout]]
             [reagent.core :as r]))

;; Hilfsfunktion für das Lesen einer Datei aus der Dropbox
;; Provisorium für die Bereitstellung von alten Modul- und Manipel-Daten
(defn lies-datei
  [f-name w f]  
  (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
            response
            (<! (http/post
                 "https://content.dropboxapi.com/2/files/download" 
                 {:with-credentials? false
                  :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"
                            "Dropbox-API-Arg" pfad
                            "Content-Type" "text/plain; charset=utf-8"}         
                  }))]
        (reset! w (vec (f (:body response)))))));

(defn write-text
  "Schreibt den text in eine Datei mit dem Namen f-name."
  [text f-name] 
  (go (let [pfad (str "{\"path\":\"/" f-name \" "," "\"mode\":{\".tag\":\"overwrite\"}}")]
        (<! (http/post "https://content.dropboxapi.com/2/files/upload" 
                       {:with-credentials? false
                        :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"
                                  "Dropbox-API-Arg" pfad
                                  "Content-Type" "application/octet-stream"}
                        :body text} 
                       )))))

(defn list-folder
  "Liefert die Liste der Dateien im Basisverzeichnis."
  []
  (go (let [pfad  (str "{\"path\":\"\"}")
            response
            (<! (http/post "https://api.dropboxapi.com/2/files/list_folder"
                           {:with-credentials? false
                            :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-" 
                                      "Content-Type" "application/json"                
                                      }
                            :json-params {:path ""}} 
                           ))] 
        (:entries (:body response)))))

(defn delete-file-named
  "Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis."
  [f-name]
  (go (let [pfad (str "/" f-name)]
        (<! (http/post "https://api.dropboxapi.com/2/files/delete_v2" 
                       {:with-credentials? false
                        :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"}
                        :json-params {:path pfad}}
                       )))))

(defn read-edn-file
  "Liefert den Inhalt der EDN-Datei mit dem Namen f-name."
  [f-name] 
  (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
            response
            (<! (http/post
                 "https://content.dropboxapi.com/2/files/download" 
                 {:with-credentials? false
                  :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"
                            "Dropbox-API-Arg" pfad
                            "Content-Type" "text/plain; charset=utf-8"}         
                  }))]
        (cljs.reader/read-string (:body response)))))

(defn rename-file
  "Benennt die Datei mit dem Namen f-name-old in f-name-new um."
  [f-name-old f-name-new]
  (go (let [path-old (str "/" f-name-old)
            path-new (str "/" f-name-new)]
        (<! (http/post "https://api.dropboxapi.com/2/files/move_v2" 
                       {:with-credentials? false
                        :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"}
                        :json-params {:from_path path-old
                                      :to_path path-new}}
                       )))))
