// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.planung');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.components.lehrveranstaltungen');
goog.require('dep.components.dozentenauslastung');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.model.dozent');
goog.require('dep.model.manipel');
goog.require('dep.components.datamanagement');
goog.require('dep.model.quartal');
/**
 * legt neues Geschäftsjahr an
 */
dep.components.planung.neuesGeschaeftjahr = (function dep$components$planung$neuesGeschaeftjahr(welt){
var neuesJahr = (cljs.core.apply.call(null,cljs.core.max,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))) + (1));
var jahre = cljs.core.conj.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),neuesJahr);
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"jahre","jahre",2053865477),jahre);
});
/**
 * Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
 *   Vorherige Planungen dieses Quartals werden überschrieben.
 */
dep.components.planung.plane_quartal = (function dep$components$planung$plane_quartal(welt){
var lvn = dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"manipels","manipels",626202456).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"module","module",1424618191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var dzntn = dep.components.dozentenauslastung.dozentenstunden.call(null,lvn,new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var alle_lvn = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.remove.call(null,((function (lvn,dzntn){
return (function (p1__16090_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__16090_SHARP_),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
});})(lvn,dzntn))
,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))),lvn));
cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);

return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),alle_lvn);
});
/**
 * Nach Änderung an der Jahrsemesterzuordung eines Manipels werden diese
 *   Lehrveranstaltungen von manipel gemäß der Jahrsemesterzuordnung von
 *   neues-manipel umgeplant.
 */
dep.components.planung.umplane_lven = (function dep$components$planung$umplane_lven(manipel,neues_manipel,welt){
var lven_von_manipel = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (l){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(l),manipel);
}),new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))));
var lven_ohne_die_von_manipel = cljs.core.remove.call(null,lven_von_manipel,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var seq__16092 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(manipel));
var chunk__16093 = null;
var count__16094 = (0);
var i__16095 = (0);
while(true){
if((i__16095 < count__16094)){
var vec__16096 = cljs.core._nth.call(null,chunk__16093,i__16095);
var qua = cljs.core.nth.call(null,vec__16096,(0),null);
var sem = cljs.core.nth.call(null,vec__16096,(1),null);
if(!(cljs.core._EQ_.call(null,qua,dep.model.manipel.quartal_aus_jsz_fuer_semester.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neues_manipel),sem)))){
var lven_fuer_neues_manipel_16102 = cljs.core.mapv.call(null,((function (seq__16092,chunk__16093,count__16094,i__16095,vec__16096,qua,sem,lven_von_manipel,lven_ohne_die_von_manipel){
return (function (p1__16091_SHARP_){
return cljs.core.assoc.call(null,p1__16091_SHARP_,new cljs.core.Keyword(null,"manipel","manipel",1067015228),neues_manipel,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.semester__GT_quartal.call(null,sem,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(neues_manipel),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neues_manipel)));
});})(seq__16092,chunk__16093,count__16094,i__16095,vec__16096,qua,sem,lven_von_manipel,lven_ohne_die_von_manipel))
,lven_von_manipel);
cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,lven_fuer_neues_manipel_16102,lven_ohne_die_von_manipel)));
} else {
}


var G__16103 = seq__16092;
var G__16104 = chunk__16093;
var G__16105 = count__16094;
var G__16106 = (i__16095 + (1));
seq__16092 = G__16103;
chunk__16093 = G__16104;
count__16094 = G__16105;
i__16095 = G__16106;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__16092);
if(temp__5457__auto__){
var seq__16092__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16092__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__16092__$1);
var G__16107 = cljs.core.chunk_rest.call(null,seq__16092__$1);
var G__16108 = c__4351__auto__;
var G__16109 = cljs.core.count.call(null,c__4351__auto__);
var G__16110 = (0);
seq__16092 = G__16107;
chunk__16093 = G__16108;
count__16094 = G__16109;
i__16095 = G__16110;
continue;
} else {
var vec__16099 = cljs.core.first.call(null,seq__16092__$1);
var qua = cljs.core.nth.call(null,vec__16099,(0),null);
var sem = cljs.core.nth.call(null,vec__16099,(1),null);
if(!(cljs.core._EQ_.call(null,qua,dep.model.manipel.quartal_aus_jsz_fuer_semester.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neues_manipel),sem)))){
var lven_fuer_neues_manipel_16111 = cljs.core.mapv.call(null,((function (seq__16092,chunk__16093,count__16094,i__16095,vec__16099,qua,sem,seq__16092__$1,temp__5457__auto__,lven_von_manipel,lven_ohne_die_von_manipel){
return (function (p1__16091_SHARP_){
return cljs.core.assoc.call(null,p1__16091_SHARP_,new cljs.core.Keyword(null,"manipel","manipel",1067015228),neues_manipel,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.semester__GT_quartal.call(null,sem,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(neues_manipel),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neues_manipel)));
});})(seq__16092,chunk__16093,count__16094,i__16095,vec__16099,qua,sem,seq__16092__$1,temp__5457__auto__,lven_von_manipel,lven_ohne_die_von_manipel))
,lven_von_manipel);
cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,lven_fuer_neues_manipel_16111,lven_ohne_die_von_manipel)));
} else {
}


var G__16112 = cljs.core.next.call(null,seq__16092__$1);
var G__16113 = null;
var G__16114 = (0);
var G__16115 = (0);
seq__16092 = G__16112;
chunk__16093 = G__16113;
count__16094 = G__16114;
i__16095 = G__16115;
continue;
}
} else {
return null;
}
}
break;
}
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
return null;
});
/**
 * Die zentrale Planungskomponente.
 */
dep.components.planung.planung = (function dep$components$planung$planung(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.lehrveranstaltungen.lehrveranstaltungen,welt], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.dozentenauslastung.dozentenauslastung,welt], null)], null)], null);
});

//# sourceMappingURL=planung.js.map
