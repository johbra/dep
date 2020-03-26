// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.dozent');
goog.require('cljs.core');
goog.require('dep.model.quartal');
goog.require('dep.helpers.helpers');
/**
 * Erzeugt ein Dozent-'Objekt' (hash-map).
 */
dep.model.dozent.__GT_Dozent = (function dep$model$dozent$__GT_Dozent(name,vorname,auslastungen,insMenue,sollStunden){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"vorname","vorname",-451998086),vorname,new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),auslastungen,new cljs.core.Keyword(null,"insMenue","insMenue",723765954),insMenue,new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891),sollStunden], null);
});
/**
 * Initialisiert die Auslastungen für dozent in den geschaeftsjahren.
 */
dep.model.dozent.initialisiereAuslastungenIn = (function dep$model$dozent$initialisiereAuslastungenIn(dozent,geschaeftsjahre){
return cljs.core.assoc.call(null,dozent,new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__18422_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__18422_SHARP_],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)]);
}),geschaeftsjahre)));
});
/**
 * Ermittelt die für dozent in geschaeftsjahr und quartal (Nr.) geplanten Stunden.
 */
dep.model.dozent.stunden_in_quartal = (function dep$model$dozent$stunden_in_quartal(dozent,geschaeftsjahr,quartal){
var agj = new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324).cljs$core$IFn$_invoke$arity$1(dozent).call(null,geschaeftsjahr);
if(cljs.core.truth_(agj)){
return agj.call(null,quartal);
} else {
return (0);
}
});
dep.model.dozent.stundenInQ1 = (function dep$model$dozent$stundenInQ1(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(1));
});
dep.model.dozent.stundenInQ2 = (function dep$model$dozent$stundenInQ2(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(2));
});
dep.model.dozent.stundenInQ3 = (function dep$model$dozent$stundenInQ3(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(3));
});
dep.model.dozent.stundenInQ4 = (function dep$model$dozent$stundenInQ4(dozent,geschaeftsjahr){
return dep.model.dozent.stunden_in_quartal.call(null,dozent,geschaeftsjahr,(0));
});
/**
 * Ermittelt geplante Stunden für dozent im geschaeftsjahr.
 */
dep.model.dozent.stunden_in_geschaeftsjahr = (function dep$model$dozent$stunden_in_geschaeftsjahr(dozent,geschaeftsjahr){
return dep.helpers.helpers.round1.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324).cljs$core$IFn$_invoke$arity$1(dozent).call(null,geschaeftsjahr)));
});
/**
 * Schreibt die stunden für dozent auf das quartal (Quartal keine Nr) gut.
 */
dep.model.dozent.schreiben_stunden_auf_quartal = (function dep$model$dozent$schreiben_stunden_auf_quartal(dozent,stunden,quartal){
var auslastungen_in_quartal = new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324).cljs$core$IFn$_invoke$arity$1(dozent).call(null,dep.model.quartal.geschaeftsjahreszahl.call(null,quartal));
var index = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(quartal),(4)))?(0):new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(quartal));
if(cljs.core.truth_(auslastungen_in_quartal)){
return cljs.core.assoc_in.call(null,dozent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),dep.model.quartal.geschaeftsjahreszahl.call(null,quartal)], null),cljs.core.assoc.call(null,auslastungen_in_quartal,index,dep.helpers.helpers.round1.call(null,stunden)));
} else {
throw (new Error(["Gesch\u00E4ftsjahr existiert nicht: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dep.model.quartal.geschaeftsjahreszahl.call(null,quartal))].join('')));
}
});
/**
 * Liefert den Dozenten mit dem Namen string aus der Liste dozenten.
 */
dep.model.dozent.dozent_mit_namen = (function dep$model$dozent$dozent_mit_namen(dozenten,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18423_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18423_SHARP_),string);
}),dozenten));
});
dep.model.dozent.erzeuge_dozenten = (function dep$model$dozent$erzeuge_dozenten(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.model.dozent.__GT_Dozent.call(null,"Gans","Gustav",cljs.core.PersistentArrayMap.EMPTY,true,(600)),dep.model.dozent.__GT_Dozent.call(null,"Duck","Donald",cljs.core.PersistentArrayMap.EMPTY,true,(500)),dep.model.dozent.__GT_Dozent.call(null,"D\u00FCsentrieb","Daniel",cljs.core.PersistentArrayMap.EMPTY,true,(600)),dep.model.dozent.__GT_Dozent.call(null,"NN","NN",cljs.core.PersistentArrayMap.EMPTY,false,(0))], null);
});

//# sourceMappingURL=dozent.js.map
