// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.dozentenauslastung');
goog.require('cljs.core');
goog.require('dep.model.dozent');
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
return (function (p1__15725_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Q4","Q4",77117001),new cljs.core.Keyword(null,"Q1","Q1",1497900173),new cljs.core.Keyword(null,"Q2","Q2",997554436),new cljs.core.Keyword(null,"Q3","Q3",-2046925906),new cljs.core.Keyword(null,"Summe","Summe",1283013789)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__15725_SHARP_),dep.model.dozent.stundenInQ4.call(null,p1__15725_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ1.call(null,p1__15725_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ2.call(null,p1__15725_SHARP_,geschaeftsjahr),dep.model.dozent.stundenInQ3.call(null,p1__15725_SHARP_,geschaeftsjahr),dep.model.dozent.stunden_in_geschaeftsjahr.call(null,p1__15725_SHARP_,geschaeftsjahr)]);
});})(geschaeftsjahr))
,dozenten);
});
/**
 * Liefert die Hashmap mit den Informationen für die Anzeige der Dozentenauslastung.
 *   Diese werden von der datamanagement-Komponente verwendet.
 */
dep.components.dozentenauslastung.dozenten_anzeige = (function dep$components$dozentenauslastung$dozenten_anzeige(welt){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.dozent.dozent_mit_namen,cljs.core.partial.call(null,dep.components.dozentenauslastung.doz_auslstngn__GT_table,welt),new cljs.core.Keyword(null,"name","name",1843675177),"100%",cljs.core.identity,"Dozentenauslastung",null,dep.components.dozentenauslastung.doz_auslstngn_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),null,cljs.core.PersistentArrayMap.EMPTY,(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null);
})]);
});
dep.components.dozentenauslastung.dozentenauslastung = (function dep$components$dozentenauslastung$dozentenauslastung(welt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.components.dozentenauslastung.dozenten_anzeige.call(null,welt)], null)], null);
});

//# sourceMappingURL=dozentenauslastung.js.map
