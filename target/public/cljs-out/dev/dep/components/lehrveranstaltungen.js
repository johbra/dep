// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.lehrveranstaltungen');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.components.dozentenauslastung');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.components.datamanagement');
goog.require('dep.helpers.helpers');
/**
 * Erzeugt eine neue Lehrveranstaltung aus den in aenderungen gegebenen Daten.
 */
dep.components.lehrveranstaltungen.aender_lv = (function dep$components$lehrveranstaltungen$aender_lv(lv,aenderungen,state){
return cljs.core.assoc.call(null,dep.model.lehrveranstaltung.__GT_Lehrveranstaltung.call(null,new cljs.core.Keyword(null,"modul","modul",-1113395939).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975).cljs$core$IFn$_invoke$arity$1(aenderungen),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027).cljs$core$IFn$_invoke$arity$1(aenderungen),new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(lv)),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610).cljs$core$IFn$_invoke$arity$1(aenderungen));
});
/**
 * Wandelt die Lehrveranstaltungen (lvn) für die Darstellung als Tabelle um. 
 */
dep.components.lehrveranstaltungen.lvn__GT_table = (function dep$components$lehrveranstaltungen$lvn__GT_table(lvn){
return cljs.core.mapv.call(null,(function (p1__18447_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Id","Id",-2148601)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modul","modul",-1113395939).cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_)),dep.model.lehrveranstaltung.semester.call(null,p1__18447_SHARP_),dep.model.lehrveranstaltung.semesterWochenstunden.call(null,p1__18447_SHARP_),new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940).cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_),new cljs.core.Keyword(null,"dozent","dozent",1571095254).cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18447_SHARP_)]);
}),lvn);
});
dep.components.lehrveranstaltungen.row = (function dep$components$lehrveranstaltungen$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.lehrveranstaltungen.lv_form_template = (function dep$components$lehrveranstaltungen$lv_form_template(dozenten){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",-1605711052),dep.components.lehrveranstaltungen.row.call(null,"Modul",dep.helpers.helpers.input_frmctrl.call(null,true,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Modul","Modul",-499019270))),dep.components.lehrveranstaltungen.row.call(null,"Manipel",dep.helpers.helpers.input_frmctrl.call(null,true,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339))),dep.components.lehrveranstaltungen.row.call(null,"Semester",dep.helpers.helpers.input_frmctrl.call(null,true,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432))),dep.components.lehrveranstaltungen.row.call(null,"SWS",dep.helpers.helpers.input_frmctrl.call(null,true,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"SWS","SWS",1550316894))),dep.components.lehrveranstaltungen.row.call(null,"Wiedrhlngsfktr",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027))),dep.components.lehrveranstaltungen.row.call(null,"Gruppen",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610))),dep.components.lehrveranstaltungen.row.call(null,"Dozent",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)], null),(function (){var iter__4324__auto__ = (function dep$components$lehrveranstaltungen$lv_form_template_$_iter__18448(s__18449){
return (new cljs.core.LazySeq(null,(function (){
var s__18449__$1 = s__18449;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18449__$1);
if(temp__5457__auto__){
var s__18449__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18449__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18449__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18451 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18450 = (0);
while(true){
if((i__18450 < size__4323__auto__)){
var d = cljs.core._nth.call(null,c__4322__auto__,i__18450);
cljs.core.chunk_append.call(null,b__18451,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,d)], null),d], null));

var G__18452 = (i__18450 + (1));
i__18450 = G__18452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18451),dep$components$lehrveranstaltungen$lv_form_template_$_iter__18448.call(null,cljs.core.chunk_rest.call(null,s__18449__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18451),null);
}
} else {
var d = cljs.core.first.call(null,s__18449__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,d)], null),d], null),dep$components$lehrveranstaltungen$lv_form_template_$_iter__18448.call(null,cljs.core.rest.call(null,s__18449__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,dozenten);
})()], null))], null);
});
/**
 * Die Spaltenüberschriften der Lv-Tabelle.
 */
dep.components.lehrveranstaltungen.lv_spalten = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)], null);
/**
 * Liefert die Infos für die Lv-Tabelle und das Bearbeitungsformular.
 */
dep.components.lehrveranstaltungen.lven_verwaltung = (function dep$components$lehrveranstaltungen$lven_verwaltung(buttons,dozenten,filter){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.lehrveranstaltung.lv_mit_id,dep.components.lehrveranstaltungen.lvn__GT_table,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity,"Lehrveranstaltungen",dep.components.lehrveranstaltungen.aender_lv,filter,dep.components.lehrveranstaltungen.lv_spalten,new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),dep.components.lehrveranstaltungen.lv_form_template.call(null,dozenten),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Lehrveranstaltung",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909)], null);
})]);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines
 *   Quartals.
 */
dep.components.lehrveranstaltungen.lehrveranstaltungen = (function dep$components$lehrveranstaltungen$lehrveranstaltungen(welt){
return (function (welt__$1){
var _ = dep.components.dozentenauslastung.aktualisiere_dozentenauslastung.call(null,welt__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt__$1,dep.components.lehrveranstaltungen.lven_verwaltung.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184),new cljs.core.Keyword(null,"label","label",1718410804),"duplizieren"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save-per-id","save-per-id",-1461095979),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt__$1))),cljs.core.partial.call(null,cljs.core.filter,((function (_){
return (function (p1__18453_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__18453_SHARP_),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt__$1)));
});})(_))
))], null)], null);
});
});

//# sourceMappingURL=lehrveranstaltungen.js.map
