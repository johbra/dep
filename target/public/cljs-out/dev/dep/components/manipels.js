// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.manipels');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('potpuri.core');
goog.require('dep.model.manipel');
goog.require('dep.components.datamanagement');
goog.require('dep.model.quartal');
goog.require('dep.components.planung');
goog.require('dep.helpers.helpers');
/**
 * Die Spaltenüberschriften für die 7 Semester
 */
dep.components.manipels.sem_tabellen_koepfe = cljs.core.map.call(null,(function (p1__18473_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18473_SHARP_)].join(''));
}),cljs.core.range.call(null,(1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.components.manipels.semestermanipel_mit_namen = cljs.core.zipmap.call(null,dep.components.manipels.sem_tabellen_koepfe,cljs.core.range.call(null,(1),(8)));
/**
 * Die Spaltenüberschriften der Manipeltabelle.
 */
dep.components.manipels.manipel_spalten = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),new cljs.core.Keyword(null,"Beginn","Beginn",589107550)], null),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = (function dep$components$manipels$iter__18474(s__18475){
return (new cljs.core.LazySeq(null,(function (){
var s__18475__$1 = s__18475;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18475__$1);
if(temp__5457__auto__){
var s__18475__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18475__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18475__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18477 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18476 = (0);
while(true){
if((i__18476 < size__4323__auto__)){
var sem = cljs.core._nth.call(null,c__4322__auto__,i__18476);
cljs.core.chunk_append.call(null,b__18477,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')));

var G__18478 = (i__18476 + (1));
i__18476 = G__18478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18477),dep$components$manipels$iter__18474.call(null,cljs.core.chunk_rest.call(null,s__18475__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18477),null);
}
} else {
var sem = cljs.core.first.call(null,s__18475__$2);
return cljs.core.cons.call(null,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep$components$manipels$iter__18474.call(null,cljs.core.rest.call(null,s__18475__$2)));
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
 * erzeugt aus den Strings des Formulars eine jahrsemesterzuordnung
 */
dep.components.manipels.formular_daten__GT_jahr_semester_zuordung = (function dep$components$manipels$formular_daten__GT_jahr_semester_zuordung(formulardaten){
var jsz = cljs.core.select_keys.call(null,formulardaten,(function (){var iter__4324__auto__ = (function dep$components$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__18481(s__18482){
return (new cljs.core.LazySeq(null,(function (){
var s__18482__$1 = s__18482;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18482__$1);
if(temp__5457__auto__){
var s__18482__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18482__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18482__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18484 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18483 = (0);
while(true){
if((i__18483 < size__4323__auto__)){
var i = cljs.core._nth.call(null,c__4322__auto__,i__18483);
cljs.core.chunk_append.call(null,b__18484,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

var G__18485 = (i__18483 + (1));
i__18483 = G__18485;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18484),dep$components$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__18481.call(null,cljs.core.chunk_rest.call(null,s__18482__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18484),null);
}
} else {
var i = cljs.core.first.call(null,s__18482__$2);
return cljs.core.cons.call(null,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')),dep$components$manipels$formular_daten__GT_jahr_semester_zuordung_$_iter__18481.call(null,cljs.core.rest.call(null,s__18482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})());
return potpuri.core.map_keys.call(null,((function (jsz){
return (function (p1__18480_SHARP_){
return cljs.core.assoc.call(null,p1__18480_SHARP_,new cljs.core.Keyword(null,"jahr","jahr",1260355162),(new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(p1__18480_SHARP_) - new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"Beginn","Beginn",589107550).cljs$core$IFn$_invoke$arity$1(formulardaten)))));
});})(jsz))
,potpuri.core.map_vals.call(null,((function (jsz){
return (function (p1__18479_SHARP_){
return dep.model.quartal.parse_int.call(null,cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18479_SHARP_)].join(''),/-/)));
});})(jsz))
,clojure.set.map_invert.call(null,potpuri.core.map_vals.call(null,dep.model.quartal.string__GT_quartal,jsz))));
});
/**
 * Erzeugt ein neues Manipel aus den in aenderungen gegebenen Daten.
 */
dep.components.manipels.aender_manipel = (function dep$components$manipels$aender_manipel(welt,manipel,aenderungen){
var jsz = dep.components.manipels.formular_daten__GT_jahr_semester_zuordung.call(null,aenderungen);
var neues_manipel = dep.model.manipel.__GT_Manipel.call(null,new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(aenderungen),cljs.core.symbol.call(null,new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(aenderungen)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"Beginn","Beginn",589107550).cljs$core$IFn$_invoke$arity$1(aenderungen)),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518).cljs$core$IFn$_invoke$arity$1(aenderungen),jsz);
var _ = dep.components.planung.umplane_lven.call(null,manipel,neues_manipel,welt);
return neues_manipel;
});
/**
 * Wandelt die manipels für die Darstellung als Tabelle um.
 */
dep.components.manipels.manipels__GT_table = (function dep$components$manipels$manipels__GT_table(manipels){
return cljs.core.mapv.call(null,(function (p1__18486_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),new cljs.core.Keyword(null,"Beginn","Beginn",589107550)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18486_SHARP_),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(p1__18486_SHARP_),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(p1__18486_SHARP_),dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(p1__18486_SHARP_))]),dep.model.quartal.sieben_semester__GT_quartstrng.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(p1__18486_SHARP_),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(p1__18486_SHARP_)));
}),manipels);
});
dep.components.manipels.row = (function dep$components$manipels$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-sm-3","label.col-sm-3",-603991254),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-9","div.col-sm-9",359442072),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.manipels.manipel_form_template = (function dep$components$manipels$manipel_form_template(studienrichtungen){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",-1605711052),dep.components.manipels.row.call(null,"Name",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Name","Name",-131211369))),dep.components.manipels.row.call(null,"Studienrichtung",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null),(function (){var iter__4324__auto__ = (function dep$components$manipels$manipel_form_template_$_iter__18487(s__18488){
return (new cljs.core.LazySeq(null,(function (){
var s__18488__$1 = s__18488;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18488__$1);
if(temp__5457__auto__){
var s__18488__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18488__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18488__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18490 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18489 = (0);
while(true){
if((i__18489 < size__4323__auto__)){
var s = cljs.core._nth.call(null,c__4322__auto__,i__18489);
cljs.core.chunk_append.call(null,b__18490,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)], null));

var G__18491 = (i__18489 + (1));
i__18489 = G__18491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18490),dep$components$manipels$manipel_form_template_$_iter__18487.call(null,cljs.core.chunk_rest.call(null,s__18488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18490),null);
}
} else {
var s = cljs.core.first.call(null,s__18488__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)], null),dep$components$manipels$manipel_form_template_$_iter__18487.call(null,cljs.core.rest.call(null,s__18488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,studienrichtungen);
})()], null)),dep.components.manipels.row.call(null,"Anzahlgruppen",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518))),dep.components.manipels.row.call(null,"Studienbeginn",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Beginn","Beginn",589107550))),dep.components.manipels.row.call(null,"Semester 1",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-1","Sem-1",1701521289))),dep.components.manipels.row.call(null,"Semester 2",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-2","Sem-2",-296574083))),dep.components.manipels.row.call(null,"Semester 3",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-3","Sem-3",1888976619))),dep.components.manipels.row.call(null,"Semester 4",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-4","Sem-4",331149550))),dep.components.manipels.row.call(null,"Semester 5",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-5","Sem-5",-1347053144))),dep.components.manipels.row.call(null,"Semester 6",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-6","Sem-6",-134351187))),dep.components.manipels.row.call(null,"Semester 7",dep.helpers.helpers.input_frmctrl.call(null,false,new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"Sem-7","Sem-7",305908823)))], null);
});
/**
 * Liefert die Infos für die Manipeltabelle und das Bearbeitungsformular.
 */
dep.components.manipels.manipel_verwaltung = (function dep$components$manipels$manipel_verwaltung(buttons,welt){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.manipel.manipel_mit_namen,dep.components.manipels.manipels__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol,"Manipel",cljs.core.partial.call(null,dep.components.manipels.aender_manipel,welt),dep.components.manipels.manipel_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.components.manipels.manipel_form_template.call(null,new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Manipel",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manipels","manipels",626202456)], null);
})]);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Manipel.
 */
dep.components.manipels.manipels = (function dep$components$manipels$manipels(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.components.manipels.manipel_verwaltung.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null),welt)], null);
});

//# sourceMappingURL=manipels.js.map
