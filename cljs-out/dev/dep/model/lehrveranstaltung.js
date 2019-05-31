// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.lehrveranstaltung');
goog.require('cljs.core');
goog.require('dep.model.dozent');
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
 * Berechnet die Anzahl der Unterrichtstunden einer Lehrveranstaltung.
 */
dep.model.lehrveranstaltung.lvStunden = (function dep$model$lehrveranstaltung$lvStunden(lv){
return (((dep.model.lehrveranstaltung.semesterWochenstunden.call(null,lv) * (10)) * new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940).cljs$core$IFn$_invoke$arity$1(lv)) * new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(lv));
});
/**
 * Berechnet die Unterrichtstunden für einen Dozenten namens doz-nam für eine
 *   Liste von Lehrveranstaltungen lven.
 */
dep.model.lehrveranstaltung.lvstunden_dozent = (function dep$model$lehrveranstaltung$lvstunden_dozent(lven,doz_nam){
return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,(function (lv){
return dep.model.lehrveranstaltung.lvStunden.call(null,lv);
}),cljs.core.filter.call(null,(function (p1__20499_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dozent","dozent",1571095254).cljs$core$IFn$_invoke$arity$1(p1__20499_SHARP_),doz_nam);
}),lven)));
});
/**
 * Ermittelt eine Hashmap mit je einem Manipel als key und einer Liste von Modulen
 *   als value der Module, die in einem quartal angeboten werden müssen.
 */
dep.model.lehrveranstaltung.manipel_modullisten_map_fuer_quartal = (function dep$model$lehrveranstaltung$manipel_modullisten_map_fuer_quartal(manipels,module,quartal){
var modulliste = cljs.core.second;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (modulliste){
return (function (p1__20500_SHARP_){
return !(cljs.core.empty_QMARK_.call(null,modulliste.call(null,p1__20500_SHARP_)));
});})(modulliste))
,cljs.core.map.call(null,((function (modulliste){
return (function (mpl){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mpl,cljs.core.filter.call(null,((function (modulliste){
return (function (p1__20501_SHARP_){
return dep.model.modul.mussModulUnterrichtetWerdenFuer_inQuartal_QMARK_.call(null,p1__20501_SHARP_,mpl,quartal);
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
return cljs.core.map.call(null,(function (p1__20502_SHARP_){
return dep.model.lehrveranstaltung.__GT_Lehrveranstaltung.call(null,p1__20502_SHARP_,quartal,"NN",(1),cljs.core.key.call(null,ml));
}),cljs.core.val.call(null,ml));
}),lv_map));
});
/**
 * Erzeugt einen Vektor mit den Lehrveranstaltungen, die für die manipels und module
 *   in einem quartal geplant werden müssen.
 */
dep.model.lehrveranstaltung.lehrveranstaltungen_fuer_quartal = (function dep$model$lehrveranstaltung$lehrveranstaltungen_fuer_quartal(quartal,manipels,module){
return dep.model.lehrveranstaltung.lven_vector.call(null,dep.model.lehrveranstaltung.manipel_modullisten_map_fuer_quartal.call(null,dep.model.manipel.zu_unterrichtende_manipels_quartal.call(null,manipels,quartal),module,quartal),quartal);
});
/**
 * Ermittelt die Unterrichtstunden für jeden Dozenten aus dozenten für die
 *   Lehrveranstaltungen in lvn
 */
dep.model.lehrveranstaltung.dozentenstunden = (function dep$model$lehrveranstaltung$dozentenstunden(lvn,dozenten,quartal){
return cljs.core.mapv.call(null,(function (p1__20503_SHARP_){
return dep.model.dozent.schreiben_stunden_auf_quartal.call(null,p1__20503_SHARP_,dep.model.lehrveranstaltung.lvstunden_dozent.call(null,cljs.core.get.call(null,lvn,quartal),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20503_SHARP_)),quartal);
}),dozenten);
});
/**
 * Liefert die Lehrveranstaltung mit der gegebenen id.
 */
dep.model.lehrveranstaltung.lv_mit_id = (function dep$model$lehrveranstaltung$lv_mit_id(lven,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20504_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20504_SHARP_),id);
}),lven));
});
/**
 * Erzeugt eine neue Lehrveranstaltung aus den in aenderungen gegebenen Daten.
 */
dep.model.lehrveranstaltung.aender_lv = (function dep$model$lehrveranstaltung$aender_lv(lv,aenderungen,state){
return cljs.core.assoc.call(null,dep.model.lehrveranstaltung.__GT_Lehrveranstaltung.call(null,new cljs.core.Keyword(null,"modul","modul",-1113395939).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975).cljs$core$IFn$_invoke$arity$1(aenderungen),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027).cljs$core$IFn$_invoke$arity$1(aenderungen),new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(lv)),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610).cljs$core$IFn$_invoke$arity$1(aenderungen));
});
dep.model.lehrveranstaltung.row = (function dep$model$lehrveranstaltung$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.model.lehrveranstaltung.lv_form_template = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.model.lehrveranstaltung.row.call(null,"Modul",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Modul","Modul",-499019270)], null)], null)),dep.model.lehrveranstaltung.row.call(null,"Manipel",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339)], null)], null)),dep.model.lehrveranstaltung.row.call(null,"Semester",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432)], null)], null)),dep.model.lehrveranstaltung.row.call(null,"SWS",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"SWS","SWS",1550316894)], null)], null)),dep.model.lehrveranstaltung.row.call(null,"Wiederholungsfaktor",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027)], null)], null)),dep.model.lehrveranstaltung.row.call(null,"Gruppen",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610)], null)], null)),dep.model.lehrveranstaltung.row.call(null,"Dozent",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)], null)], null))], null);
/**
 * Die Spaltenüberschriften der Lv-Tabelle.
 */
dep.model.lehrveranstaltung.lv_spalten = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975)], null);
/**
 * Bestimmt das Semester des Manipels im Quartal der Lehrveranstaltung (Lv).
 */
dep.model.lehrveranstaltung.semester = (function dep$model$lehrveranstaltung$semester(lv){
return dep.model.manipel.semesterInQuartal.call(null,new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(lv),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(lv));
});
/**
 * Wandelt die Lehrveranstaltungen (lvn) für die Darstellung als Tabelle um. 
 */
dep.model.lehrveranstaltung.lvn__GT_table = (function dep$model$lehrveranstaltung$lvn__GT_table(lvn){
return cljs.core.mapv.call(null,(function (p1__20505_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Modul","Modul",-499019270),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432),new cljs.core.Keyword(null,"SWS","SWS",1550316894),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"Id","Id",-2148601)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modul","modul",-1113395939).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"manipel","manipel",1067015228).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_)),dep.model.lehrveranstaltung.semester.call(null,p1__20505_SHARP_),dep.model.lehrveranstaltung.semesterWochenstunden.call(null,p1__20505_SHARP_),new cljs.core.Keyword(null,"wiederholungsFaktor","wiederholungsFaktor",1064907940).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_),new cljs.core.Keyword(null,"dozent","dozent",1571095254).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__20505_SHARP_)]);
}),lvn);
});
/**
 * Liefert die Infos für die Lv-Tabelle und das Bearbeitungsformular.
 */
dep.model.lehrveranstaltung.lven_verwaltung = (function dep$model$lehrveranstaltung$lven_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.lehrveranstaltung.lv_mit_id,dep.model.lehrveranstaltung.lvn__GT_table,new cljs.core.Keyword(null,"id","id",-1388402092),"100%",cljs.core.identity,"Lehrveranstaltungen",dep.model.lehrveranstaltung.aender_lv,dep.model.lehrveranstaltung.lv_spalten,new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),dep.model.lehrveranstaltung.lv_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Lehrveranstaltung",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lven","lven",294854909),new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s)),new cljs.core.Keyword(null,"quartal","quartal",-467113586).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,s))], null);
})]);
});

//# sourceMappingURL=lehrveranstaltung.js.map
