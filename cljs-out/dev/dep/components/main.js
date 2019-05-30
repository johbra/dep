// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.main');
goog.require('cljs.core');
goog.require('dep.state');
goog.require('dep.components.dozentenauslastung');
goog.require('dep.components.lehrveranstaltungen');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.model.dozent');
dep.components.main.plane_quartal = (function dep$components$main$plane_quartal(){
var lvn = dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)),new cljs.core.Keyword(null,"manipels","manipels",626202456).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)),new cljs.core.Keyword(null,"module","module",1424618191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)));
var dzntn = dep.model.lehrveranstaltung.berechne_auslastungen_fuer_quartal.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)),lvn,new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)));
return cljs.core.swap_BANG_.call(null,dep.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),lvn,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);
});
dep.components.main.initialisiere_auslastung_fuer_geschaeftsjahre = (function dep$components$main$initialisiere_auslastung_fuer_geschaeftsjahre(){
var dn = new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state));
var f = ((function (dn){
return (function (d){
return dep.model.dozent.initialisiereAuslastungenIn.call(null,d,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)));
});})(dn))
;
var dni = cljs.core.mapv.call(null,f,dn);
return cljs.core.swap_BANG_.call(null,dep.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dni);
});
dep.components.main.aktualisierung_anzeige = (function dep$components$main$aktualisierung_anzeige(){
cljs.core.println.call(null,"aktual");

var dzntn = dep.model.lehrveranstaltung.berechne_auslastungen_fuer_quartal.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)),new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)),new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,dep.state.app_state)));
return cljs.core.swap_BANG_.call(null,dep.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);
});
dep.components.main.planung = (function dep$components$main$planung(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.lehrveranstaltungen.lehrveranstaltungen], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.dozentenauslastung.dozentenauslastung], null)], null)], null);
});

//# sourceMappingURL=main.js.map
