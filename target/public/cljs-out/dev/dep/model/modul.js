// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.modul');
goog.require('cljs.core');
goog.require('dep.model.quartal');
goog.require('dep.model.manipel');
/**
 * Erzeugt ein Modul-'Objekt' (hash-map)
 */
dep.model.modul.__GT_Modul = (function dep$model$modul$__GT_Modul(nummer,name,semesterWochenstunden,studienrichtung,gueltigAb,gueltigBis){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"nummer","nummer",1652450962),nummer,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707),semesterWochenstunden,new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756),studienrichtung,new cljs.core.Keyword(null,"gueltigAb","gueltigAb",-1592672781),gueltigAb,new cljs.core.Keyword(null,"gueltigBis","gueltigBis",-999485251),gueltigBis], null);
});
/**
 * Bestimmt die Anzahl der Wochenstunden von modul im semester.
 */
dep.model.modul.wochenStundenInSemester = (function dep$model$modul$wochenStundenInSemester(modul,semester){
var n = modul.call(null,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707)).call(null,semester);
if(cljs.core.truth_(n)){
return n;
} else {
return (0);
}
});
/**
 * Bestimmt, ob Lehrveranstaltung für modul im quartal für manipel geplant werden
 *   muss.
 */
dep.model.modul.mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_ = (function dep$model$modul$mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_(modul,manipel,quartal){
var and__3938__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(modul),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(manipel));
if(and__3938__auto__){
var semester = dep.model.manipel.semesterInQuartal.call(null,manipel,quartal);
var and__3938__auto____$1 = cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707).cljs$core$IFn$_invoke$arity$1(modul),semester);
if(and__3938__auto____$1){
var and__3938__auto____$2 = (new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707).cljs$core$IFn$_invoke$arity$1(modul).call(null,semester) > (0));
if(and__3938__auto____$2){
return dep.model.quartal.liegt_zwischen.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(manipel),new cljs.core.Keyword(null,"gueltigAb","gueltigAb",-1592672781).cljs$core$IFn$_invoke$arity$1(modul),new cljs.core.Keyword(null,"gueltigBis","gueltigBis",-999485251).cljs$core$IFn$_invoke$arity$1(modul));
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
/**
 * Macht aus den in sws angegebenen Semesterwochenstunden eine Hash-map mit den
 *   Semesterwochenstunden für alle 7 Semester.
 *   Die keys der Hash-map sind die Strings 'S1' bis 'S7'.
 */
dep.model.modul.sws__GT_alle_semester = (function dep$model$modul$sws__GT_alle_semester(sws){
var sems = cljs.core.range.call(null,(1),(8));
return cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (sems){
return (function (p1__19569_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19569_SHARP_)].join(''));
});})(sems))
,sems),cljs.core.map.call(null,((function (sems){
return (function (p1__19570_SHARP_){
if(cljs.core.truth_(sws.call(null,p1__19570_SHARP_))){
return sws.call(null,p1__19570_SHARP_);
} else {
return (0);
}
});})(sems))
,sems));
});
/**
 * Liefert das Modul mit der Nummer symbol aus der Liste module.
 */
dep.model.modul.modul_mit_nummer = (function dep$model$modul$modul_mit_nummer(module,symbol){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19571_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19571_SHARP_),symbol);
}),module));
});
/**
 * Die Spaltenüberschriften für die 7 Semester
 */
dep.model.modul.sem_tabellen_koepfe = cljs.core.map.call(null,(function (p1__19572_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19572_SHARP_)].join(''));
}),cljs.core.range.call(null,(1),(8)));
/**
 * liefert {:S1 1, :S2 2, :S3 3, :S4 4, :S5 5, :S6 6, :S7 7}
 */
dep.model.modul.semester = cljs.core.zipmap.call(null,dep.model.modul.sem_tabellen_koepfe,cljs.core.range.call(null,(1),(8)));
/**
 * Formt aus den aenderungen des Eingabeformulars eine Hash-map mit den
 *   Semesterwochenstunden.
 */
dep.model.modul.aender_sws = (function dep$model$modul$aender_sws(aenderungen){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__19573_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.val.call(null,p1__19573_SHARP_),(0));
}),clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,aenderungen,dep.model.modul.sem_tabellen_koepfe),dep.model.modul.semester)));
});
/**
 * Die Spaltenüberschriften der Modulltabelle.
 */
dep.model.modul.modul_spalten = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null),cljs.core.keys.call(null,dep.model.modul.semester),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925)], null));
dep.model.modul.aender_modul = (function dep$model$modul$aender_modul(modul,aenderungen){

return dep.model.modul.__GT_Modul.call(null,cljs.core.symbol.call(null,new cljs.core.Keyword(null,"Nr","Nr",-700839286).cljs$core$IFn$_invoke$arity$1(aenderungen)),new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(aenderungen),dep.model.modul.aender_sws.call(null,aenderungen),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(aenderungen),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411).cljs$core$IFn$_invoke$arity$1(aenderungen)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925).cljs$core$IFn$_invoke$arity$1(aenderungen)));
});
/**
 * Wandelt die module für die Darstellung als Tabelle um.
 */
dep.model.modul.module__GT_table = (function dep$model$modul$module__GT_table(module){
return cljs.core.mapv.call(null,(function (p1__19574_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Nr","Nr",-700839286),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)],[new cljs.core.Keyword(null,"nummer","nummer",1652450962).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_)]),dep.model.modul.sws__GT_alle_semester.call(null,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925),new cljs.core.Keyword(null,"Id","Id",-2148601)],[dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"gueltigAb","gueltigAb",-1592672781).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_)),dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"gueltigBis","gueltigBis",-999485251).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19574_SHARP_)]));
}),module);
});
dep.model.modul.row = (function dep$model$modul$row(label,input){

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),input], null)], null);
});
dep.model.modul.modul_form_template = (function dep$model$modul$modul_form_template(studienrichtungen){

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.model.modul.row.call(null,"Nr",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Nr","Nr",-700839286)], null)], null)),dep.model.modul.row.call(null,"Name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Name","Name",-131211369)], null)], null)),dep.model.modul.row.call(null,"Studienrichtung",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null),(function (){var iter__4324__auto__ = (function dep$model$modul$modul_form_template_$_iter__19576(s__19577){
return (new cljs.core.LazySeq(null,(function (){
var s__19577__$1 = s__19577;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19577__$1);
if(temp__5457__auto__){
var s__19577__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19577__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__19577__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__19579 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__19578 = (0);
while(true){
if((i__19578 < size__4323__auto__)){
var s = cljs.core._nth.call(null,c__4322__auto__,i__19578);
cljs.core.chunk_append.call(null,b__19579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),s], null));

var G__19580 = (i__19578 + (1));
i__19578 = G__19580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19579),dep$model$modul$modul_form_template_$_iter__19576.call(null,cljs.core.chunk_rest.call(null,s__19577__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19579),null);
}
} else {
var s = cljs.core.first.call(null,s__19577__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),s], null),dep$model$modul$modul_form_template_$_iter__19576.call(null,cljs.core.rest.call(null,s__19577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,studienrichtungen);
})()], null)),cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19575_SHARP_){
return dep.model.modul.row.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19575_SHARP_)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19575_SHARP_)].join(''))], null)], null));
}),cljs.core.range.call(null,(1),(8)))),dep.model.modul.row.call(null,"ab Studienbeginn",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ab-Stbgnn","ab-Stbgnn",604950411)], null)], null)),dep.model.modul.row.call(null,"bis Studienbeginn",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"bis-Stbgnn","bis-Stbgnn",275678925)], null)], null))], null);
});
/**
 * Liefert die Infos für die Modultabelle und das Bearbeitungsformular.
 */
dep.model.modul.module_verwaltung = (function dep$model$modul$module_verwaltung(buttons,studienrichtungen){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.modul.modul_mit_nummer,dep.model.modul.module__GT_table,new cljs.core.Keyword(null,"id","id",-1388402092),"100%",cljs.core.identity,"Module",dep.model.modul.aender_modul,dep.model.modul.modul_spalten,new cljs.core.Keyword(null,"Nr","Nr",-700839286),dep.model.modul.modul_form_template.call(null,studienrichtungen),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Modul",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"module","module",1424618191)], null);
})]);
});
dep.model.modul.__GT_Modul.call(null,new cljs.core.Symbol(null,"A107","A107",-1982598651,null),"PP",new cljs.core.PersistentArrayMap(null, 2, [(5),(4),(6),(4)], null),"AI",dep.model.quartal.__GT_Quartal.call(null,(4),(2000)),dep.model.quartal.__GT_Quartal.call(null,(3),(2099)));
dep.model.modul.wochenStundenInSemester.call(null,dep.model.modul.__GT_Modul.call(null,new cljs.core.Symbol(null,"A107","A107",-1982598651,null),"PP",new cljs.core.PersistentArrayMap(null, 2, [(5),(4),(6),(7)], null),"AI",dep.model.quartal.__GT_Quartal.call(null,(4),(2000)),dep.model.quartal.__GT_Quartal.call(null,(3),(2099))),(6));
dep.model.modul.mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_.call(null,dep.model.modul.__GT_Modul.call(null,new cljs.core.Symbol(null,"A107","A107",-1982598651,null),"PP",new cljs.core.PersistentArrayMap(null, 2, [(5),(4),(6),(4)], null),"Wirtschaftsinformatik-Bachelor",dep.model.quartal.__GT_Quartal.call(null,(4),(2000)),dep.model.quartal.__GT_Quartal.call(null,(3),(2099))),dep.model.manipel.__GT_Manipel.call(null,"Wirtschaftsinformatik-Bachelor",new cljs.core.Symbol(null,"I17","I17",-880935249,null),dep.model.quartal.__GT_Quartal.call(null,(4),(2017)),(4),cljs.core.PersistentArrayMap.createAsIfByAssoc([dep.model.quartal.__GT_Quartal.call(null,(1),(1)),(1),dep.model.quartal.__GT_Quartal.call(null,(3),(1)),(2),dep.model.quartal.__GT_Quartal.call(null,(1),(2)),(3),dep.model.quartal.__GT_Quartal.call(null,(2),(2)),(4),dep.model.quartal.__GT_Quartal.call(null,(4),(2)),(5),dep.model.quartal.__GT_Quartal.call(null,(3),(3)),(6),dep.model.quartal.__GT_Quartal.call(null,(4),(3)),(7)])),dep.model.quartal.__GT_Quartal.call(null,(4),(2019)));
dep.model.modul.sws__GT_alle_semester.call(null,new cljs.core.Keyword(null,"semesterWochenstunden","semesterWochenstunden",1725648707).cljs$core$IFn$_invoke$arity$1(dep.model.modul.__GT_Modul.call(null,new cljs.core.Symbol(null,"A107","A107",-1982598651,null),"PP",new cljs.core.PersistentArrayMap(null, 2, [(5),(4),(6),(4)], null),"Wirtschaftsinformatik-Bachelor",dep.model.quartal.__GT_Quartal.call(null,(4),(2000)),dep.model.quartal.__GT_Quartal.call(null,(3),(2099)))));
dep.model.modul.module__GT_table.call(null,(new cljs.core.List(null,dep.model.modul.__GT_Modul.call(null,new cljs.core.Symbol(null,"A107","A107",-1982598651,null),"PP",new cljs.core.PersistentArrayMap(null, 2, [(5),(4),(6),(4)], null),"Wirtschaftsinformatik-Bachelor",dep.model.quartal.__GT_Quartal.call(null,(4),(2000)),dep.model.quartal.__GT_Quartal.call(null,(3),(2099))),null,(1),null)));

//# sourceMappingURL=modul.js.map
