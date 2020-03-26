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
 * fuegt allen dozenten die Initialauslastung für ein Geschäftsjahr jahr hinzu.
 */
dep.components.planung.fuege_geschaeftsjahr_hinzu = (function dep$components$planung$fuege_geschaeftsjahr_hinzu(dozenten,jahr){
return cljs.core.mapv.call(null,(function (p1__18456_SHARP_){
return cljs.core.assoc_in.call(null,p1__18456_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),jahr], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
}),dozenten);
});
/**
 * legt neues Geschäftsjahr an.
 */
dep.components.planung.neuesGeschaeftjahr = (function dep$components$planung$neuesGeschaeftjahr(welt){
var neuesJahr = (cljs.core.apply.call(null,cljs.core.max,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))) + (1));
var jahre = cljs.core.conj.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),neuesJahr);
var dozenten = dep.components.planung.fuege_geschaeftsjahr_hinzu.call(null,new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),neuesJahr);
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"jahre","jahre",2053865477),jahre,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dozenten);
});
/**
 * Erzeugt die initialen Lehrveranstaltungen für das aktuelle Quartal.
 *   Vorherige Planungen dieses Quartals werden überschrieben.
 */
dep.components.planung.plane_quartal = (function dep$components$planung$plane_quartal(welt){
var lvn = dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"manipels","manipels",626202456).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"module","module",1424618191).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var dzntn = dep.components.dozentenauslastung.dozentenstunden_quartal.call(null,lvn,new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var alle_lvn = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.remove.call(null,((function (lvn,dzntn){
return (function (p1__18457_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__18457_SHARP_),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
});})(lvn,dzntn))
,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))),lvn));
cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);

return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),alle_lvn);
});
/**
 * ermittelt alle Lehrveranstaltungen aus lvn für manipel.
 */
dep.components.planung.lehrveranstaltungen_eines_manipels = (function dep$components$planung$lehrveranstaltungen_eines_manipels(manipel,lvn){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,(function (l){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(l),manipel);
}),lvn));
});
/**
 * ermittelt die sich zwischen alt-manipel und neu-manipel geänderten
 *   Semesterinquartale.
 */
dep.components.planung.geaenderte_semester_quartale = (function dep$components$planung$geaenderte_semester_quartale(alt_manipel,neu_manipel){
return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4324__auto__ = (function dep$components$planung$geaenderte_semester_quartale_$_iter__18458(s__18459){
return (new cljs.core.LazySeq(null,(function (){
var s__18459__$1 = s__18459;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18459__$1);
if(temp__5457__auto__){
var s__18459__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18459__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18459__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18461 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18460 = (0);
while(true){
if((i__18460 < size__4323__auto__)){
var vec__18462 = cljs.core._nth.call(null,c__4322__auto__,i__18460);
var q = cljs.core.nth.call(null,vec__18462,(0),null);
var s = cljs.core.nth.call(null,vec__18462,(1),null);
if(cljs.core.not_EQ_.call(null,q,dep.model.manipel.quartal_aus_jsz_fuer_semester.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neu_manipel),s))){
cljs.core.chunk_append.call(null,b__18461,cljs.core.PersistentArrayMap.createAsIfByAssoc([q,s]));

var G__18468 = (i__18460 + (1));
i__18460 = G__18468;
continue;
} else {
var G__18469 = (i__18460 + (1));
i__18460 = G__18469;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18461),dep$components$planung$geaenderte_semester_quartale_$_iter__18458.call(null,cljs.core.chunk_rest.call(null,s__18459__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18461),null);
}
} else {
var vec__18465 = cljs.core.first.call(null,s__18459__$2);
var q = cljs.core.nth.call(null,vec__18465,(0),null);
var s = cljs.core.nth.call(null,vec__18465,(1),null);
if(cljs.core.not_EQ_.call(null,q,dep.model.manipel.quartal_aus_jsz_fuer_semester.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(neu_manipel),s))){
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([q,s]),dep$components$planung$geaenderte_semester_quartale_$_iter__18458.call(null,cljs.core.rest.call(null,s__18459__$2)));
} else {
var G__18470 = cljs.core.rest.call(null,s__18459__$2);
s__18459__$1 = G__18470;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(alt_manipel));
})());
});
/**
 * verschiebt die Lehrveranstaltungen lven in neues Quartal auf der Basis einer
 *   Änderung der Quartal-Semester-Zuordnung zwischen von-manipel und nach-manipel.
 */
dep.components.planung.verschiebe_lven = (function dep$components$planung$verschiebe_lven(lven,von_manipel,nach_manipel){
var sq = dep.components.planung.geaenderte_semester_quartale.call(null,von_manipel,nach_manipel);
return cljs.core.mapv.call(null,((function (sq){
return (function (lv){
var semester = sq.call(null,dep.model.quartal.minus.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(von_manipel)));
if(cljs.core.truth_(semester)){
return cljs.core.assoc.call(null,lv,new cljs.core.Keyword(null,"manipel","manipel",1067015228),nach_manipel,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.semester__GT_quartal.call(null,semester,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(nach_manipel),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(nach_manipel)));
} else {
return lv;
}
});})(sq))
,lven);
});
/**
 * In lven-alle werden die Lehrveranstaltungen lven-alt durch die in lven-neu ersetzt.
 */
dep.components.planung.ersetze_lven = (function dep$components$planung$ersetze_lven(lven_alt,lven_neu,lven_alle){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.remove.call(null,lven_alt,lven_alle),lven_neu));
});
/**
 * Die Lehrveranstaltungen von alt-manipel werden auf das neu-manipel umgestellt.
 */
dep.components.planung.umplane_lven = (function dep$components$planung$umplane_lven(alt_manipel,neu_manipel,welt){
var lven_von_alt_manipel = dep.components.planung.lehrveranstaltungen_eines_manipels.call(null,alt_manipel,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var lven_fuer_neu_manipel = dep.components.planung.verschiebe_lven.call(null,lven_von_alt_manipel,alt_manipel,neu_manipel);
var lven_gesamt = dep.components.planung.ersetze_lven.call(null,lven_von_alt_manipel,lven_fuer_neu_manipel,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
var dzntn = dep.components.dozentenauslastung.dozentenstunden_jahr.call(null,lven_gesamt,new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"lven","lven",294854909),lven_gesamt,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);
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
 * Die zentrale Planungskomponente.
 */
dep.components.planung.planung = (function dep$components$planung$planung(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.lehrveranstaltungen.lehrveranstaltungen,welt], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.dozentenauslastung.dozentenauslastung,welt], null)], null)], null);
});

//# sourceMappingURL=planung.js.map
