(ns dep.helpers.drop-file-stream
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require  [cljs-http.client :as http]
             [cljs.core.async :as a :refer [<! chan timeout]]))

;; Hilfsfunktion für das Lesen einer Datei aus der Dropbox
(defn lies-datei
  [f-name w f]
  (let [c (chan)]
    (go (let [pfad (str "{\"path\":\"/" f-name "\"}")
              response
              (<! (http/post
                   "https://content.dropboxapi.com/2/files/download" 
                   {:with-credentials? false
                    :headers {"Authorization" "Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"
                              "Dropbox-API-Arg" pfad
                              "Content-Type" "text/plain; charset=utf-8"}         
                    }))]
          (reset! w (vec (f (:body response))))))))


