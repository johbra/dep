// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.manipel');
goog.require('cljs.core');
goog.require('dep.model.quartal');
/**
 * Erzeugt ein Manipel-'Objekt' (hash-map)
 */
dep.model.manipel.__GT_Manipel = (function dep$model$manipel$__GT_Manipel(studienrichtung,name,studienbeginn,anzahlGruppen,jahrSemesterZuordnung){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756),studienrichtung,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852),studienbeginn,new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965),anzahlGruppen,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010),jahrSemesterZuordnung], null);
});
/**
 * Prüft, ob für ein Manipel im angegebenen Quartal Lehrveranstaltungen
 *   anzubieten sind.
 */
dep.model.manipel.wirdUnterrichtetIn_QMARK_ = (function dep$model$manipel$wirdUnterrichtetIn_QMARK_(manipel,quartal){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(manipel),dep.model.quartal.minus.call(null,quartal,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(manipel)));
});
/**
 * Liefert die Teilmenge (sequence) aus manipels, die in quartal
 *   zu unterrichten sind.
 */
dep.model.manipel.zu_unterrichtende_manipels_quartal = (function dep$model$manipel$zu_unterrichtende_manipels_quartal(manipels,quartal){
return cljs.core.filter.call(null,(function (p1__19771_SHARP_){
return dep.model.manipel.wirdUnterrichtetIn_QMARK_.call(null,p1__19771_SHARP_,quartal);
}),manipels);
});
/**
 * Bestimmt das Semester, in dem sich das Manipel im angegebenen Quartal befindet.
 *   Liefert 0, falls das Manipel im angegebenen Quartal nicht unterrichtet wird.
 */
dep.model.manipel.semesterInQuartal = (function dep$model$manipel$semesterInQuartal(manipel,quartal){
var sem = new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(manipel).call(null,dep.model.quartal.minus.call(null,quartal,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(manipel)));
if(cljs.core.truth_(sem)){
return sem;
} else {
return (0);
}
});
/**
 * Bestimmt aus der jahrsemesterzuordnung eines Manipels das Quartal eines Semesters
 */
dep.model.manipel.quartal_aus_jsz_fuer_semester = (function dep$model$manipel$quartal_aus_jsz_fuer_semester(jsz,semester){
return cljs.core.key.call(null,cljs.core.first.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__19772_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__19772_SHARP_),semester);
}),jsz))));
});
/**
 * Liefert das Manipel mit dem Namen string aus der Liste manipels.
 */
dep.model.manipel.manipel_mit_namen = (function dep$model$manipel$manipel_mit_namen(manipels,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19773_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19773_SHARP_),string);
}),manipels));
});

//# sourceMappingURL=manipel.js.map
