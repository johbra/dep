// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.module');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.model.modul');
goog.require('dep.components.datamanagement');
goog.require('dep.model.quartal');
goog.require('dep.helpers.helpers');
/**
 * Die Spaltenüberschriften für die 7 Semester
 */
dep.components.module.sem_tabellen_koepfe = cljs.core.map.call(null,(function (p1__20214_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20214_SHARP_)].join(''));
}),cljs.core.range.call(null,(1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.components.module.semester = cljs.core.zipmap.call(null,dep.components.module.sem_tabellen_koepfe,cljs.core.range.call(null,(1),(8)));
/**
 * Formt aus den aenderungen des Eingabeformulars eine Hash-map mit den
 *   Semesterwochenstunden.
 */
dep.components.module.aender_sws = (function dep$components$module$aender_sws(aenderungen){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__20215_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.val.call(null,p1__20215_SHARP_),(0));
}),clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,aenderungen,dep.components.module.sem_tabellen_koepfe),dep.components.module.semester)));
});
/**
 * Die Spaltenüberschriften der Modulltabelle.
 */
dep.components.module.modul_spalten = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null),cljs.core.keys.call(null,dep.components.module.semester),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925)], null));
dep.components.module.aender_modul = (function dep$components$module$aender_modul(modul,aenderungen){

return dep.model.modul.__GT_Modul.call(null,cljs.core.symbol.call(null,new cljs.core.Keyword(null,"Nr","Nr",-700839286).cljs$core$IFn$_invoke$arity$1(aenderungen)),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(aenderungen),dep.components.module.aender_sws.call(null,aenderungen),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(aenderungen),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411).cljs$core$IFn$_invoke$arity$1(aenderungen)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925).cljs$core$IFn$_invoke$arity$1(aenderungen)));
});
/**
 * Wandelt die module für die Darstellung als Tabelle um.
 */
dep.components.module.module__GT_table = (function dep$components$module$module__GT_table(module){
return cljs.core.mapv.call(null,(function (p1__20216_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)],[new cljs.core.Keyword(null,"nummer","nummer",1652450962).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_)]),dep.model.modul.sws__GT_alle_semester.call(null,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925),new cljs.core.Keyword(null,"Id","Id",-2148601)],[dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"gueltigAb","gueltigAb",-1592672781).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_)),dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"gueltigBis","gueltigBis",-999485251).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20216_SHARP_)]));
}),module);
});
dep.components.module.row = (function dep$components$module$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.module.modul_form_template = (function dep$components$module$modul_form_template(studienrichtungen){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.components.module.row.call(null,"Nr",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Nr","Nr",-700839286))),dep.components.module.row.call(null,"Name",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Name","Name",-131211369))),dep.components.module.row.call(null,"Studienrichtung",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null),(function (){var iter__4324__auto__ = (function dep$components$module$modul_form_template_$_iter__20217(s__20218){
return (new cljs.core.LazySeq(null,(function (){
var s__20218__$1 = s__20218;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20218__$1);
if(temp__5457__auto__){
var s__20218__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20218__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__20218__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__20220 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__20219 = (0);
while(true){
if((i__20219 < size__4323__auto__)){
var s = cljs.core._nth.call(null,c__4322__auto__,i__20219);
cljs.core.chunk_append.call(null,b__20220,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,s)], null),s], null));

var G__20221 = (i__20219 + (1));
i__20219 = G__20221;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20220),dep$components$module$modul_form_template_$_iter__20217.call(null,cljs.core.chunk_rest.call(null,s__20218__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20220),null);
}
} else {
var s = cljs.core.first.call(null,s__20218__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,s)], null),s], null),dep$components$module$modul_form_template_$_iter__20217.call(null,cljs.core.rest.call(null,s__20218__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,studienrichtungen);
})()], null)),dep.components.module.row.call(null,"Semester 1",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S1","S1",-627529157))),dep.components.module.row.call(null,"Semester 2",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S2","S2",-205831480))),dep.components.module.row.call(null,"Semester 3",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S3","S3",278995801))),dep.components.module.row.call(null,"Semester 4",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S4","S4",2100354912))),dep.components.module.row.call(null,"Semester 5",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S5","S5",1544429492))),dep.components.module.row.call(null,"Semester 6",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S6","S6",-1586051680))),dep.components.module.row.call(null,"Semester 7",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"S7","S7",647180085))),dep.components.module.row.call(null,"ab Studienbeginn",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411))),dep.components.module.row.call(null,"bis Studienbeginn",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925)))], null);
});
/**
 * Liefert die Infos für die Modultabelle und das Bearbeitungsformular.
 */
dep.components.module.module_verwaltung = (function dep$components$module$module_verwaltung(buttons,studienrichtungen){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.modul.modul_mit_nummer,dep.components.module.module__GT_table,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.symbol,"Module",dep.components.module.aender_modul,dep.components.module.modul_spalten,new cljs.core.Keyword(null,"Nr","Nr",-700839286),dep.components.module.modul_form_template.call(null,studienrichtungen),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Modul",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"module","module",1424618191)], null);
})]);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Module.
 */
dep.components.module.module = (function dep$components$module$module(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.components.module.module_verwaltung.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184),new cljs.core.Keyword(null,"label","label",1718410804),"duplizieren"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save-per-id","save-per-id",-1461095979),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))))], null);
});

//# sourceMappingURL=module.js.map
