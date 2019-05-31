// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.planung');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.components.dozentenauslastung');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.model.dozent');
goog.require('dep.components.datamanagement');
/**
 * Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
 *   Vorherige Planungen dieses Quartals werden überschrieben.
 */
dep.components.planung.plane_quartal = (function dep$components$planung$plane_quartal(welt){
var lvn = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"manipels","manipels",626202456).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"module","module",1424618191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)))]);
var dzntn = dep.model.lehrveranstaltung.dozentenstunden.call(null,lvn,new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);

return cljs.core.swap_BANG_.call(null,welt,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909),new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))], null),cljs.core.merge,lvn);
});
/**
 * Initialisiert die Dozentenauslastung für alle existierenden Geschaeftsjahre.
 *   In dieser Form vorläufig.
 */
dep.components.planung.initialisiere_auslastung_fuer_geschaeftsjahre = (function dep$components$planung$initialisiere_auslastung_fuer_geschaeftsjahre(welt){
var dn = new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt));
var f = ((function (dn){
return (function (d){
return dep.model.dozent.initialisiereAuslastungenIn.call(null,d,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
});})(dn))
;
var dni = cljs.core.mapv.call(null,f,dn);
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dni);
});
/**
 * Setzt die gesamte Planung zurück.
 */
dep.components.planung.initialisiere_planung = (function dep$components$planung$initialisiere_planung(welt){
dep.components.planung.initialisiere_auslastung_fuer_geschaeftsjahre.call(null,welt);

return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__20536_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__20536_SHARP_],[cljs.core.PersistentArrayMap.EMPTY]);
}),new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)))));
});
/**
 * Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet.
 */
dep.components.planung.aktualisiere_plan = (function dep$components$planung$aktualisiere_plan(welt){
var dzntn = dep.model.lehrveranstaltung.dozentenstunden.call(null,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)).call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))),new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);
});
/**
 * Komponente für die Anzeige und Bearbeitung der Lehrveranstaltungen eines Quartals.
 */
dep.components.planung.lehrveranstaltungen = (function dep$components$planung$lehrveranstaltungen(welt){
console.log("bar-component is rendering");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.model.lehrveranstaltung.lven_verwaltung.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184),new cljs.core.Keyword(null,"label","label",1718410804),"duplizieren"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save-lv","save-lv",-1653535631),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null))], null)], null);
});
/**
 * Die zentrale Planungskomponente.
 */
dep.components.planung.planung = (function dep$components$planung$planung(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.planung.lehrveranstaltungen,welt], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.dozentenauslastung.dozentenauslastung,welt], null)], null)], null);
});

//# sourceMappingURL=planung.js.map
