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
return (function (p1__18395_SHARP_){
return cljs.core.keyword.call(null,["S",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18395_SHARP_)].join(''));
});})(sems))
,sems),cljs.core.map.call(null,((function (sems){
return (function (p1__18396_SHARP_){
if(cljs.core.truth_(sws.call(null,p1__18396_SHARP_))){
return sws.call(null,p1__18396_SHARP_);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18397_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18397_SHARP_),symbol);
}),module));
});

//# sourceMappingURL=modul.js.map
