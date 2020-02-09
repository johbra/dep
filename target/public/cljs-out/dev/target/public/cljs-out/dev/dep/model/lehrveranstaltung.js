// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.lehrveranstaltung');
goog.require('cljs.core');
goog.require('dep.model.manipel');
goog.require('dep.model.modul');
/**
 * Erzeugt ein Lehrveranstaltungsexemplar.
 */
dep.model.lehrveranstaltung.__GT_Lehrveranstaltung = (function dep$model$lehrveranstaltung$__GT_Lehrveranstaltung(modul,quartal,dozent,wiederholungsFaktor,manipel){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null),new cljs.core.Keyword(null,"modul","modul",-1113395939),modul,new cljs.core.Keyword(null,"quartal","quartal",-467113586),quartal,new cljs.core.Keyword(null,"dozent","dozent",1571095254),dozent,new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940),wiederholungsFaktor,new cljs.core.Keyword(null,"manipel","manipel",1067015228),manipel,new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(manipel)], null);
});
/**
 * Berechnet die Semesterwochenstunden einer Lehrveranstaltung lv.
 */
dep.model.lehrveranstaltung.semesterWochenstunden = (function dep$model$lehrveranstaltung$semesterWochenstunden(lv){
return dep.model.modul.wochenStundenInSemester.call(null,new cljs.core.Keyword(null,"modul","modul",-1113395939).cljs$core$IFn$_invoke$arity$1(lv),dep.model.manipel.semesterInQuartal.call(null,new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv)));
});
/**
 * Ermittelt eine Hashmap mit je einem Manipel als key und einer Liste von Modulen
 *   als value der Module, die in einem quartal angeboten werden müssen.
 */
dep.model.lehrveranstaltung.manipel_modullisten_map_fuer_quartal = (function dep$model$lehrveranstaltung$manipel_modullisten_map_fuer_quartal(manipels,module,quartal){
var modulliste = cljs.core.second;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (modulliste){
return (function (p1__16199_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,modulliste.call(null,p1__16199_SHARP_)));
});})(modulliste))
,cljs.core.map.call(null,((function (modulliste){
return (function (mpl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mpl,cljs.core.filter.call(null,((function (modulliste){
return (function (p1__16200_SHARP_){
return dep.model.modul.mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_.call(null,p1__16200_SHARP_,mpl,quartal);
});})(modulliste))
,module)], null);
});})(modulliste))
,manipels)));
});
/**
 * Erzeugt aus einer Manipel-Modullisten-Map einen Vektor aus Lehrveranstaltungen für
 *   ein quartal.
 */
dep.model.lehrveranstaltung.lven_vector = (function dep$model$lehrveranstaltung$lven_vector(lv_map,quartal){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (ml){
return cljs.core.map.call(null,(function (p1__16201_SHARP_){
return dep.model.lehrveranstaltung.__GT_Lehrveranstaltung.call(null,p1__16201_SHARP_,quartal,"NN",(1),cljs.core.key.call(null,ml));
}),cljs.core.val.call(null,ml));
}),lv_map));
});
/**
 * Erzeugt einen Vektor mit den Lehrveranstaltungen, die für die manipels und module
 *   in einem quartal geplant werden müssen.
 */
dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal = (function dep$model$lehrveranstaltung$lehrveranstaltungen_fuer_quartal(quartal,manipels,module){
cljs.core.println.call(null,dep.model.manipel.zu_unterrichtende_manipels_quartal.call(null,manipels,quartal));

return dep.model.lehrveranstaltung.lven_vector.call(null,dep.model.lehrveranstaltung.manipel_modullisten_map_fuer_quartal.call(null,dep.model.manipel.zu_unterrichtende_manipels_quartal.call(null,manipels,quartal),module,quartal),quartal);
});
/**
 * Liefert die Lehrveranstaltung mit der gegebenen id.
 */
dep.model.lehrveranstaltung.lv_mit_id = (function dep$model$lehrveranstaltung$lv_mit_id(lven,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16202_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__16202_SHARP_),id);
}),lven));
});
/**
 * Bestimmt das Semester des Manipels im Quartal der Lehrveranstaltung (Lv).
 */
dep.model.lehrveranstaltung.semester = (function dep$model$lehrveranstaltung$semester(lv){
return dep.model.manipel.semesterInQuartal.call(null,new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv));
});

//# sourceMappingURL=lehrveranstaltung.js.map
