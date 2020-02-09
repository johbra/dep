// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.studienrichtung');
goog.require('cljs.core');
/**
 * Erzeugt ein Studienrichtungs-'Objekt' (hash-map).
 */
dep.model.studienrichtung.__GT_Studienrichtung = (function dep$model$studienrichtung$__GT_Studienrichtung(name,quartal_semester_zuordnung){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"quartal-semester-zuordnung","quartal-semester-zuordnung",1647659850),quartal_semester_zuordnung], null);
});
/**
 * Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen.
 */
dep.model.studienrichtung.studienrichtung_mit_namen = (function dep$model$studienrichtung$studienrichtung_mit_namen(studienrichtungen,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__17058_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__17058_SHARP_),string);
}),studienrichtungen));
});

//# sourceMappingURL=studienrichtung.js.map
