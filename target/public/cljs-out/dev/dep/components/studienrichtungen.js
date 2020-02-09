// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.studienrichtungen');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('potpuri.core');
goog.require('dep.model.studienrichtung');
goog.require('dep.model.quartal');
goog.require('dep.components.datamanagement');
goog.require('dep.helpers.helpers');
dep.components.studienrichtungen.row = (function dep$components$studienrichtungen$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.studienrichtungen.studienrichtung_form_template = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.components.studienrichtungen.row.call(null,"Bezeichnung",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820))),dep.components.studienrichtungen.row.call(null,"Semester 1",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-1","Sem-1",1701521289))),dep.components.studienrichtungen.row.call(null,"Semester 2",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-2","Sem-2",-296574083))),dep.components.studienrichtungen.row.call(null,"Semester 3",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-3","Sem-3",1888976619))),dep.components.studienrichtungen.row.call(null,"Semester 4",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-4","Sem-4",331149550))),dep.components.studienrichtungen.row.call(null,"Semester 5",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-5","Sem-5",-1347053144))),dep.components.studienrichtungen.row.call(null,"Semester 6",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-6","Sem-6",-134351187))),dep.components.studienrichtungen.row.call(null,"Semester 7",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-7","Sem-7",305908823)))], null);
/**
 * Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten.
 */
dep.components.studienrichtungen.aender_studienrichtung = (function dep$components$studienrichtungen$aender_studienrichtung(studienrichtung,aenderungen){
var qsz = cljs.core.dissoc.call(null,aenderungen,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820));
var qsz__$1 = potpuri.core.map_vals.call(null,dep.model.quartal.string__GT_quartal,qsz);
var qsz__$2 = clojure.set.map_invert.call(null,qsz__$1);
var qsz__$3 = potpuri.core.map_vals.call(null,((function (qsz,qsz__$1,qsz__$2){
return (function (p1__20203_SHARP_){
return dep.model.quartal.parse_int.call(null,cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20203_SHARP_)].join(''),/-/)));
});})(qsz,qsz__$1,qsz__$2))
,qsz__$2);
return cljs.core.assoc.call(null,studienrichtung,new cljs.core.Keyword(null,"quartal-semester-zuordnung","quartal-semester-zuordnung",1647659850),qsz__$3,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820).cljs$core$IFn$_invoke$arity$1(aenderungen));
});
/**
 * Wandelt die studienrichtungen für die Darstellung als Tabelle um. 
 */
dep.components.studienrichtungen.studienrichtungen__GT_table = (function dep$components$studienrichtungen$studienrichtungen__GT_table(studienrichtungen){
return cljs.core.mapv.call(null,(function (p1__20204_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20204_SHARP_)]),dep.model.quartal.sieben_semester__GT_quartstrng.call(null,dep.model.quartal.__GT_Quartal.call(null,(4),(0)),new cljs.core.Keyword(null,"quartal-semester-zuordnung","quartal-semester-zuordnung",1647659850).cljs$core$IFn$_invoke$arity$1(p1__20204_SHARP_)));
}),studienrichtungen);
});
/**
 * Die Spaltenüberschriften der Studienrichtungstabelle.
 */
dep.components.studienrichtungen.studienrichtung_spalten = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = (function dep$components$studienrichtungen$iter__20205(s__20206){
return (new cljs.core.LazySeq(null,(function (){
var s__20206__$1 = s__20206;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20206__$1);
if(temp__5457__auto__){
var s__20206__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20206__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__20206__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__20208 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__20207 = (0);
while(true){
if((i__20207 < size__4323__auto__)){
var sem = cljs.core._nth.call(null,c__4322__auto__,i__20207);
cljs.core.chunk_append.call(null,b__20208,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')));

var G__20209 = (i__20207 + (1));
i__20207 = G__20209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20208),dep$components$studienrichtungen$iter__20205.call(null,cljs.core.chunk_rest.call(null,s__20206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20208),null);
}
} else {
var sem = cljs.core.first.call(null,s__20206__$2);
return cljs.core.cons.call(null,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep$components$studienrichtungen$iter__20205.call(null,cljs.core.rest.call(null,s__20206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})()));
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
