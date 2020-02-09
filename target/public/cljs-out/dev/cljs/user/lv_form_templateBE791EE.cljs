(defn lv-form-template [dozenten]
  "Komponente für das Bearbeitungsformular."
  (let [sel (atom "none")]
    [:div
     (row "Modul"             [:input {:read-only "readOnly" :field :text :id :Modul}])
     (row "Manipel"           [:input {:read-only "readOnly" :field :text :id :Mnpl}])
     (row "Semester"          [:input {:read-only "readOnly" :field :text :id :Smstr}])
     (row "SWS"                 [:input {:read-only "readOnly" :field :text :id :SWS}])
     (row "Wiederholungsfaktor" [:input {:field :numeric :id :WdhFkt}])
     (row "Gruppen"             [:input {:field :numeric :id :Grpn}])
     (row "Dozent"              [:select {:field :text :id :Dozent 
                                          :value @sel
                                          :on-change #(reset! sel (-> % .-target .-value))}
                                 [:option {:value "none" :key "None" :disabled true}
                                  "Wähle!"]
                                 (for [d dozenten] [:option {:key d} d])
                                 ])]))
