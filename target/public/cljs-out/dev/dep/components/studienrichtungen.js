// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.studienrichtungen');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('potpuri.core');
goog.require('dep.model.studienrichtung');
goog.require('dep.components.datamanagement');
goog.require('dep.helpers.helpers');
dep.components.studienrichtungen.row = (function dep$components$studienrichtungen$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.studienrichtungen.studienrichtung_form_template = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.components.studienrichtungen.row.call(null,"Bezeichnung",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)))], null);
/**
 * Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten.
 */
dep.components.studienrichtungen.aender_studienrichtung = (function dep$components$studienrichtungen$aender_studienrichtung(studienrichtung,aenderungen){
return cljs.core.assoc.call(null,studienrichtung,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820).cljs$core$IFn$_invoke$arity$1(aenderungen));
});
/**
 * Wandelt die studienrichtungen für die Darstellung als Tabelle um. 
 */
dep.components.studienrichtungen.studienrichtungen__GT_table = (function dep$components$studienrichtungen$studienrichtungen__GT_table(studienrichtungen){
return cljs.core.mapv.call(null,(function (p1__18888_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18888_SHARP_)]);
}),studienrichtungen);
});
/**
 * Die Spaltenüberschriften der Studienrichtungstabelle.
 */
dep.components.studienrichtungen.studienrichtung_spalten = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null);
/**
 * Liefert die Infos für die Studienrichtungstabelle und das Bearbeitungsformular.
 */
dep.components.studienrichtungen.studienrichtungen_verwaltung = (function dep$components$studienrichtungen$studienrichtungen_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.studienrichtung.studienrichtung_mit_namen,dep.components.studienrichtungen.studienrichtungen__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity,"Studienrichtungen",dep.components.studienrichtungen.aender_studienrichtung,dep.components.studienrichtungen.studienrichtung_spalten,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820),dep.components.studienrichtungen.studienrichtung_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Studienrichtung",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null);
})]);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Studienrichtungen.
 */
dep.components.studienrichtungen.studienrichtungen = (function dep$components$studienrichtungen$studienrichtungen(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.components.studienrichtungen.studienrichtungen_verwaltung.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null))], null);
});

//# sourceMappingURL=studienrichtungen.js.map
