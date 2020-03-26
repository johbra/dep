// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.dozenten');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.model.dozent');
goog.require('dep.components.datamanagement');
goog.require('dep.helpers.helpers');
/**
 * Wandelt die dozenten für die Darstellung als Tabelle um. 
 */
dep.components.dozenten.dozenten__GT_table = (function dep$components$dozenten$dozenten__GT_table(dozenten){
return cljs.core.mapv.call(null,(function (p1__18426_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18426_SHARP_),new cljs.core.Keyword(null,"vorname","vorname",-451998086).cljs$core$IFn$_invoke$arity$1(p1__18426_SHARP_),(cljs.core.truth_(new cljs.core.Keyword(null,"insMenue","insMenue",723765954).cljs$core$IFn$_invoke$arity$1(p1__18426_SHARP_))?"ja":"nein"),new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891).cljs$core$IFn$_invoke$arity$1(p1__18426_SHARP_)]);
}),dozenten);
});
/**
 * Die Spaltenüberschriften der Dozenttabelle.
 */
dep.components.dozenten.dozent_spalten = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867)], null);
dep.components.dozenten.row = (function dep$components$dozenten$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.dozenten.dozent_form_template = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.components.dozenten.row.call(null,"Nachname",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Name","Name",-131211369))),dep.components.dozenten.row.call(null,"Vorname",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Vorname","Vorname",327484912))),dep.components.dozenten.row.call(null,"ins Men\u00FC",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"insMenue","insMenue",723765954))),dep.components.dozenten.row.call(null,"Sollstunden",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867)))], null);
/**
 * Zuordnung von Spaltenüberschriften zu Dozent-Attributen.
 */
dep.components.dozenten.dozent_spalten_attribute = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"vorname","vorname",-451998086),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250),new cljs.core.Keyword(null,"insMenue","insMenue",723765954),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867),new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891)], null);
/**
 * Erzeugt einen neuen Dozenten aus den in aenderungen gegebenen Daten.
 */
dep.components.dozenten.aender_dozent = (function dep$components$dozenten$aender_dozent(dozent,aenderungen){
return cljs.core.merge.call(null,dozent,clojure.set.rename_keys.call(null,aenderungen,dep.components.dozenten.dozent_spalten_attribute));
});
/**
 * Liefert die Infos für die Dozententabelle und das Bearbeitungsformular.
 */
dep.components.dozenten.dozenten_verwaltung = (function dep$components$dozenten$dozenten_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.dozent.dozent_mit_namen,dep.components.dozenten.dozenten__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity,"Dozenten",dep.components.dozenten.aender_dozent,dep.components.dozenten.dozent_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.components.dozenten.dozent_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Dozent",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null);
})]);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Dozenten.
 */
dep.components.dozenten.dozenten = (function dep$components$dozenten$dozenten(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.components.dozenten.dozenten_verwaltung.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null))], null);
});

//# sourceMappingURL=dozenten.js.map
