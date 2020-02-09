// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.dozentenauslastung');
goog.require('cljs.core');
goog.require('dep.model.dozent');
goog.require('dep.model.lehrveranstaltung');
goog.require('dep.model.quartal');
goog.require('dep.components.datamanagement');
/**
 * Die Spaltenüberschriften der Dozenttabelle.
 */
dep.components.dozentenauslastung.doz_auslstngn_spalten = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Q4","Q4",77117001),new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Summe","Summe",1283013789)], null);
/**
 * Wandelt die dozenten für die Darstellung ihrer Auslastung als Tabelle um.
 */
dep.components.dozentenauslastung.doz_auslstngn__GT_table = (function dep$components$dozentenauslastung$doz_auslstngn__GT_table(welt,dozenten){
var geschaeftsjahr = new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt));
return cljs.core.mapv.call(null,((function (geschaeftsjahr){
return (function (p1__21065_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Q4","Q4",77117001),new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Summe","Summe",1283013789)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21065_SHARP_),dep.model.dozent.stundenInQ4.call(null,p1__21065_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ1.call(null,p1__21065_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ2.call(null,p1__21065_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ3.call(null,p1__21065_SHARP_,geschaeftsjahr),dep.model.dozent.stunden_in_geschaeftsjahr.call(null,p1__21065_SHARP_,geschaeftsjahr)]);
});})(geschaeftsjahr))
,dozenten);
});
/**
 * Liefert die Hashmap mit den Informationen für die Anzeige der Dozentenauslastung.
 *   Diese werden von der datamanagement-Komponente verwendet.
 */
dep.components.dozentenauslastung.dozenten_anzeige = (function dep$components$dozentenauslastung$dozenten_anzeige(welt){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.dozent.dozent_mit_namen,cljs.core.partial.call(null,dep.components.dozentenauslastung.doz_auslstngn__GT_table,welt),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity,"Dozentenauslastung",null,dep.components.dozentenauslastung.doz_auslstngn_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.PersistentArrayMap.EMPTY,(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null);
})]);
});
/**
 * Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung.
 */
dep.components.dozentenauslastung.lvStunden = (function dep$components$dozentenauslastung$lvStunden(lv){
return (((dep.model.lehrveranstaltung.semesterWochenstunden.call(null,lv) * (10)) * new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940).cljs$core$IFn$_invoke$arity$1(lv)) * new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(lv));
});
/**
 * Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
 *   Liste von Lehrveranstaltungen lven.
 */
dep.components.dozentenauslastung.lvstunden_dozent = (function dep$components$dozentenauslastung$lvstunden_dozent(lven,doz_nam){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (lv){
return dep.components.dozentenauslastung.lvStunden.call(null,lv);
}),cljs.core.filter.call(null,(function (p1__21066_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dozent","dozent",1571095254).cljs$core$IFn$_invoke$arity$1(p1__21066_SHARP_),doz_nam);
}),lven)));
});
/**
 * Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
 *   Lehrveranstaltungen in lvn
 */
dep.components.dozentenauslastung.dozentenstunden = (function dep$components$dozentenauslastung$dozentenstunden(lvn,dozenten,quartal){
return cljs.core.mapv.call(null,(function (p1__21067_SHARP_){
return dep.model.dozent.schreiben_stunden_auf_quartal.call(null,p1__21067_SHARP_,dep.components.dozentenauslastung.lvstunden_dozent.call(null,cljs.core.filter.call(null,(function (lv){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),quartal);
}),lvn),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21067_SHARP_)),quartal);
}),dozenten);
});
/**
 * Ermittelt alle Lehrveranstaltungen des aktuellen Geschäftsjahrs
 */
dep.components.dozentenauslastung.lven_fuer_aktuelles_geschaeftsjahr = (function dep$components$dozentenauslastung$lven_fuer_aktuelles_geschaeftsjahr(lvn,jahr){
var quartale = dep.model.quartal.quartale_fuer_jahr.call(null,jahr);
var lven = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,((function (quartale){
return (function (q){
return cljs.core.filter.call(null,((function (quartale){
return (function (p1__21068_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(p1__21068_SHARP_),q);
});})(quartale))
,lvn);
});})(quartale))
,quartale)));
return lven;
});
/**
 * Nach Änderungen an der Lv-Planung wird die Dozentenauslastung neu berechnet.
 */
dep.components.dozentenauslastung.aktualisiere_plan = (function dep$components$dozentenauslastung$aktualisiere_plan(welt){
var dzntn = dep.components.dozentenauslastung.dozentenstunden.call(null,dep.components.dozentenauslastung.lven_fuer_aktuelles_geschaeftsjahr.call(null,new cljs.core.Keyword(null,"lven","lven",294854909).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))),new cljs.core.Keyword(null,"dozenten","dozenten",688305194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dozenten","dozenten",688305194),dzntn);
});
dep.components.dozentenauslastung.dozentenauslastung = (function dep$components$dozentenauslastung$dozentenauslastung(welt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.components.dozentenauslastung.dozenten_anzeige.call(null,welt)], null)], null);
});

//# sourceMappingURL=dozentenauslastung.js.map
