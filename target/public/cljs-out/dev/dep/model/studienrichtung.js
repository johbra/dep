// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.studienrichtung');
goog.require('cljs.core');
/**
 * Erzeugt ein Studienrichtungs-'Objekt' (hash-map).
 */
dep.model.studienrichtung.__GT_Studienrichtung = (function dep$model$studienrichtung$__GT_Studienrichtung(name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
});
/**
 * Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen.
 */
dep.model.studienrichtung.studienrichtung_mit_namen = (function dep$model$studienrichtung$studienrichtung_mit_namen(studienrichtungen,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16721_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16721_SHARP_),string);
}),studienrichtungen));
});
dep.model.studienrichtung.row = (function dep$model$studienrichtung$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.model.studienrichtung.studienrichtung_form_template = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.model.studienrichtung.row.call(null,"Bezeichnung",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null)], null))], null);
/**
 * Zuordnung von Spaltenüberschriften zu Studienrichtung-Attributen.
 */
dep.model.studienrichtung.studienrichtung_spalten_attribute = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820),new cljs.core.Keyword(null,"name","name",1843675177)], null);
/**
 * Die Spaltenüberschriften der Studienrichtungstabelle.
 */
dep.model.studienrichtung.studienrichtung_spalten = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null);
/**
 * Wandelt die studienrichtungen für die Darstellung als Tabelle um. 
 */
dep.model.studienrichtung.studienrichtungen__GT_table = (function dep$model$studienrichtung$studienrichtungen__GT_table(studienrichtungen){
return cljs.core.mapv.call(null,(function (p1__16722_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16722_SHARP_)]);
}),studienrichtungen);
});
/**
 * Erzeugt einen neuen Dozenten aus den in aenderungen gegebenen Daten.
 */
dep.model.studienrichtung.aender_studienrichtung = (function dep$model$studienrichtung$aender_studienrichtung(studienrichtung,aenderungen){
return cljs.core.merge.call(null,studienrichtung,clojure.set.rename_keys.call(null,aenderungen,dep.model.studienrichtung.studienrichtung_spalten_attribute));
});
/**
 * Liefert die Infos für die Studienrichtungstabelle und das Bearbeitungsformular.
 */
dep.model.studienrichtung.studienrichtungen_verwaltung = (function dep$model$studienrichtung$studienrichtungen_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.studienrichtung.studienrichtung_mit_namen,dep.model.studienrichtung.studienrichtungen__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),"100%",cljs.core.identity,"Studienrichtungen",dep.model.studienrichtung.aender_studienrichtung,dep.model.studienrichtung.studienrichtung_spalten,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820),dep.model.studienrichtung.studienrichtung_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Studienrichtung",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null);
})]);
});
dep.model.studienrichtung.erzeuge_studienrichtungen = (function dep$model$studienrichtung$erzeuge_studienrichtungen(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.model.studienrichtung.__GT_Studienrichtung.call(null,"Wirtschaftsinformatik-Bachelor"),dep.model.studienrichtung.__GT_Studienrichtung.call(null,"Angewandte-Informatik-Bachelor"),dep.model.studienrichtung.__GT_Studienrichtung.call(null,"Wirtschaftsingenieurwesen-Bachelor"),dep.model.studienrichtung.__GT_Studienrichtung.call(null,"Betriebswirtschaftslehre-Bachelor")], null);
});

//# sourceMappingURL=studienrichtung.js.map
