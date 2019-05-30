(ns dep.components.lehrveranstaltungen
  (:require [reagent-forms.core :refer [bind-fields]]
            [reagent.core :as r] 
            [dep.model.quartal
             :refer [quartal->string]]
            [dep.model.lehrveranstaltung
             :refer [->Lehrveranstaltung lv-spalten lvn->table lv-form-template
                     lv-mit-id aender-lv]] 
            [dep.state :as state]))



