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
return cljs.core.assoc.call(null,dozent,new cljs.core.Keyword(null,"auslastungen","auslastungen",-1035018324),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__16777_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__16777_SHARP_],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)]);
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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16778_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16778_SHARP_),string);
}),dozenten));
});
dep.model.dozent.row = (function dep$model$dozent$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.model.dozent.dozent_form_template = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.model.dozent.row.call(null,"Nachname",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Name","Name",-131211369)], null)], null)),dep.model.dozent.row.call(null,"Vorname",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Vorname","Vorname",327484912)], null)], null)),dep.model.dozent.row.call(null,"ins Men\u00FC",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250)], null)], null)),dep.model.dozent.row.call(null,"Sollstunden",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867)], null)], null))], null);
/**
 * Zuordnung von Spaltenüberschriften zu Dozent-Attributen.
 */
dep.model.dozent.dozent_spalten_attribute = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"vorname","vorname",-451998086),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250),new cljs.core.Keyword(null,"insMenue","insMenue",723765954),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867),new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891)], null);
/**
 * Die Spaltenüberschriften der Dozenttabelle.
 */
dep.model.dozent.dozent_spalten = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867)], null);
/**
 * Wandelt die dozenten für die Darstellung als Tabelle um. 
 */
dep.model.dozent.dozenten__GT_table = (function dep$model$dozent$dozenten__GT_table(dozenten){
return cljs.core.mapv.call(null,(function (p1__16779_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Vorname","Vorname",327484912),new cljs.core.Keyword(null,"ins-Menue","ins-Menue",-1215736250),new cljs.core.Keyword(null,"Stundensoll","Stundensoll",2136971867)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16779_SHARP_),new cljs.core.Keyword(null,"vorname","vorname",-451998086).cljs$core$IFn$_invoke$arity$1(p1__16779_SHARP_),(cljs.core.truth_(new cljs.core.Keyword(null,"insMenue","insMenue",723765954).cljs$core$IFn$_invoke$arity$1(p1__16779_SHARP_))?"ja":"nein"),new cljs.core.Keyword(null,"sollStunden","sollStunden",-1175543891).cljs$core$IFn$_invoke$arity$1(p1__16779_SHARP_)]);
}),dozenten);
});
/**
 * Erzeugt einen neuen Dozenten aus den in aenderungen gegebenen Daten.
 */
dep.model.dozent.aender_dozent = (function dep$model$dozent$aender_dozent(dozent,aenderungen){
return cljs.core.merge.call(null,dozent,clojure.set.rename_keys.call(null,aenderungen,dep.model.dozent.dozent_spalten_attribute));
});
/**
 * Liefert die Infos für die Dozententabelle und das Bearbeitungsformular.
 */
dep.model.dozent.dozenten_verwaltung = (function dep$model$dozent$dozenten_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.dozent.dozent_mit_namen,dep.model.dozent.dozenten__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),null,cljs.core.identity,"Dozenten",dep.model.dozent.aender_dozent,dep.model.dozent.dozent_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.model.dozent.dozent_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Dozent",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dozenten","dozenten",688305194)], null);
})]);
});
dep.model.dozent.erzeuge_dozenten = (function dep$model$dozent$erzeuge_dozenten(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.model.dozent.__GT_Dozent.call(null,"Gans","Gustav",cljs.core.PersistentArrayMap.EMPTY,true,(600)),dep.model.dozent.__GT_Dozent.call(null,"Duck","Donald",cljs.core.PersistentArrayMap.EMPTY,true,(500)),dep.model.dozent.__GT_Dozent.call(null,"D\u00FCsentrieb","Daniel",cljs.core.PersistentArrayMap.EMPTY,true,(600)),dep.model.dozent.__GT_Dozent.call(null,"NN","NN",cljs.core.PersistentArrayMap.EMPTY,false,(0))], null);
});

//# sourceMappingURL=dozent.js.map
