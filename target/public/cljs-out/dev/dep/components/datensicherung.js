// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.datensicherung');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.components.datamanagement');
goog.require('dep.helpers.drop_file_stream');
/**
 * Dummy-Atom zur Erwingung des Rerendering
 */
dep.components.datensicherung.forcer = reagent.core.atom.call(null,(0));
/**
 * Liefert die Datei mit dem Namen string aus der Liste von dateien.
 */
dep.components.datensicherung.datei_mit_namen = (function dep$components$datensicherung$datei_mit_namen(dateien,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20948_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20948_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.components.datensicherung.loesche_datei = (function dep$components$datensicherung$loesche_datei(d){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_20955){
var state_val_20956 = (state_20955[(1)]);
if((state_val_20956 === (1))){
var inst_20949 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_20950 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_20949);
var state_20955__$1 = state_20955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20955__$1,(2),inst_20950);
} else {
if((state_val_20956 === (2))){
var inst_20952 = (state_20955[(2)]);
var inst_20953 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_20955__$1 = (function (){var statearr_20957 = state_20955;
(statearr_20957[(7)] = inst_20952);

return statearr_20957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20955__$1,inst_20953);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__ = null;
var dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____0 = (function (){
var statearr_20958 = [null,null,null,null,null,null,null,null];
(statearr_20958[(0)] = dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__);

(statearr_20958[(1)] = (1));

return statearr_20958;
});
var dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____1 = (function (state_20955){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_20955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e20959){if((e20959 instanceof Object)){
var ex__15503__auto__ = e20959;
var statearr_20960_20962 = state_20955;
(statearr_20960_20962[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20963 = state_20955;
state_20955 = G__20963;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__ = function(state_20955){
switch(arguments.length){
case 0:
return dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____1.call(this,state_20955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____0;
dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____1;
return dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_20961 = f__15523__auto__.call(null);
(statearr_20961[(6)] = c__15522__auto__);

return statearr_20961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.components.datensicherung.lade_welt_aus_datei = (function dep$components$datensicherung$lade_welt_aus_datei(d,welt){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_20971){
var state_val_20972 = (state_20971[(1)]);
if((state_val_20972 === (1))){
var inst_20964 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_20965 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_20964);
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20971__$1,(2),inst_20965);
} else {
if((state_val_20972 === (2))){
var inst_20967 = (state_20971[(2)]);
var inst_20968 = cljs.core.reset_BANG_.call(null,welt,inst_20967);
var inst_20969 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578));
var state_20971__$1 = (function (){var statearr_20973 = state_20971;
(statearr_20973[(7)] = inst_20968);

return statearr_20973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20971__$1,inst_20969);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__ = null;
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____0 = (function (){
var statearr_20974 = [null,null,null,null,null,null,null,null];
(statearr_20974[(0)] = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__);

(statearr_20974[(1)] = (1));

return statearr_20974;
});
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____1 = (function (state_20971){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_20971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e20975){if((e20975 instanceof Object)){
var ex__15503__auto__ = e20975;
var statearr_20976_20978 = state_20971;
(statearr_20976_20978[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20979 = state_20971;
state_20971 = G__20979;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__ = function(state_20971){
switch(arguments.length){
case 0:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____1.call(this,state_20971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____0;
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____1;
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_20977 = f__15523__auto__.call(null);
(statearr_20977[(6)] = c__15522__auto__);

return statearr_20977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Gibt der Datei mit dem Namen alter-name den Namen neuer-name. 
 *   Umbenennung ist nur möglich, falls nicht bereits eine Datei mit dem Namen neuer-name
 *   existiert.
 */
dep.components.datensicherung.umbenenne_datei = (function dep$components$datensicherung$umbenenne_datei(alter_name,neuer_name,dateien){
if(cljs.core.truth_(dep.components.datensicherung.datei_mit_namen.call(null,cljs.core.deref.call(null,dateien),neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_20985){
var state_val_20986 = (state_20985[(1)]);
if((state_val_20986 === (1))){
var inst_20980 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_20985__$1 = state_20985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20985__$1,(2),inst_20980);
} else {
if((state_val_20986 === (2))){
var inst_20982 = (state_20985[(2)]);
var inst_20983 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_20985__$1 = (function (){var statearr_20987 = state_20985;
(statearr_20987[(7)] = inst_20982);

return statearr_20987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20985__$1,inst_20983);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__ = null;
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____0 = (function (){
var statearr_20988 = [null,null,null,null,null,null,null,null];
(statearr_20988[(0)] = dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__);

(statearr_20988[(1)] = (1));

return statearr_20988;
});
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____1 = (function (state_20985){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_20985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e20989){if((e20989 instanceof Object)){
var ex__15503__auto__ = e20989;
var statearr_20990_20992 = state_20985;
(statearr_20990_20992[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20993 = state_20985;
state_20985 = G__20993;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__ = function(state_20985){
switch(arguments.length){
case 0:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____1.call(this,state_20985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____0;
dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____1;
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_20991 = f__15523__auto__.call(null);
(statearr_20991[(6)] = c__15522__auto__);

return statearr_20991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.components.datensicherung.dateien__GT_table = (function dep$components$datensicherung$dateien__GT_table(welt,dateien){
return cljs.core.mapv.call(null,(function (p1__20994_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20994_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__20994_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.loesche_datei.call(null,p1__20994_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.lade_welt_aus_datei.call(null,p1__20994_SHARP_,welt);
})], null),"laden"], null)]);
}),dateien);
});
/**
 * Die Spaltenüberschriften der Dateitabelle.
 */
dep.components.datensicherung.datei_spalten = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)], null);
dep.components.datensicherung.row = (function dep$components$datensicherung$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-5","div.col-md-5",1167007965),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.components.datensicherung.datei_form_template = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.components.datensicherung.row.call(null,"Name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Name","Name",-131211369)], null)], null)),dep.components.datensicherung.row.call(null,"Zeitstempel",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299)], null)], null))], null);
/**
 * Liefert die Infos für die Dateitabelle und das Bearbeitungsformular.
 */
dep.components.datensicherung.datei_verwaltung = (function dep$components$datensicherung$datei_verwaltung(buttons,dateien,welt){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"Dateien",new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),dep.components.datensicherung.datei_spalten,new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),cljs.core.partial.call(null,dep.components.datensicherung.dateien__GT_table,welt),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),dep.components.datensicherung.datei_form_template,new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Datei",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),cljs.core.identity,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),dep.components.datensicherung.umbenenne_datei], null);
});
/**
 * Komponente für das Laden und Speichern von Planungsdaten.
 */
dep.components.datensicherung.datensicherung = (function dep$components$datensicherung$datensicherung(welt){
return (function (welt__$1){
var buttons = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),new cljs.core.Keyword(null,"label","label",1718410804),"Name \u00E4ndern"], null)], null);
var s = reagent.core.atom.call(null,"pldaten.edn");
var dateien = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var _ = (function (){var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__,buttons,s,dateien){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__,buttons,s,dateien){
return (function (state_21001){
var state_val_21002 = (state_21001[(1)]);
if((state_val_21002 === (1))){
var inst_20996 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_21001__$1 = state_21001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21001__$1,(2),inst_20996);
} else {
if((state_val_21002 === (2))){
var inst_20998 = (state_21001[(2)]);
var inst_20999 = cljs.core.reset_BANG_.call(null,dateien,inst_20998);
var state_21001__$1 = state_21001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21001__$1,inst_20999);
} else {
return null;
}
}
});})(c__15522__auto__,buttons,s,dateien))
;
return ((function (switch__15499__auto__,c__15522__auto__,buttons,s,dateien){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0 = (function (){
var statearr_21003 = [null,null,null,null,null,null,null];
(statearr_21003[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__);

(statearr_21003[(1)] = (1));

return statearr_21003;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1 = (function (state_21001){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_21001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e21004){if((e21004 instanceof Object)){
var ex__15503__auto__ = e21004;
var statearr_21005_21025 = state_21001;
(statearr_21005_21025[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21026 = state_21001;
state_21001 = G__21026;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__ = function(state_21001){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1.call(this,state_21001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__,buttons,s,dateien))
})();
var state__15524__auto__ = (function (){var statearr_21006 = f__15523__auto__.call(null);
(statearr_21006[(6)] = c__15522__auto__);

return statearr_21006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__,buttons,s,dateien))
);

return c__15522__auto__;
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group.form-inline","div.row.form-group.form-inline",-361636882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-md-5","label.col-md-5",-1504317970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"datei"], null),"Daten in Datei mit dem Namen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.col-md-4","input.form-control.col-md-4",1555518695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"pldaten.edn",new cljs.core.Keyword(null,"id","id",-1388402092),"datei",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (buttons,s,dateien,_){
return (function (p1__20995_SHARP_){
return cljs.core.reset_BANG_.call(null,s,p1__20995_SHARP_.target.value);
});})(buttons,s,dateien,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-default.col-md-3","button.btn-default.col-md-3",-1949324283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buttons,s,dateien,_){
return (function (){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__,buttons,s,dateien,_){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__,buttons,s,dateien,_){
return (function (state_21018){
var state_val_21019 = (state_21018[(1)]);
if((state_val_21019 === (1))){
var inst_21007 = cljs.core.deref.call(null,welt__$1);
var inst_21008 = cljs.core.prn_str.call(null,inst_21007);
var inst_21009 = cljs.core.deref.call(null,s);
var inst_21010 = dep.helpers.drop_file_stream.write_text.call(null,inst_21008,inst_21009);
var state_21018__$1 = state_21018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21018__$1,(2),inst_21010);
} else {
if((state_val_21019 === (2))){
var inst_21012 = (state_21018[(2)]);
var inst_21013 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_21018__$1 = (function (){var statearr_21020 = state_21018;
(statearr_21020[(7)] = inst_21012);

return statearr_21020;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21018__$1,(3),inst_21013);
} else {
if((state_val_21019 === (3))){
var inst_21015 = (state_21018[(2)]);
var inst_21016 = cljs.core.reset_BANG_.call(null,dateien,inst_21015);
var state_21018__$1 = state_21018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21018__$1,inst_21016);
} else {
return null;
}
}
}
});})(c__15522__auto__,buttons,s,dateien,_))
;
return ((function (switch__15499__auto__,c__15522__auto__,buttons,s,dateien,_){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0 = (function (){
var statearr_21021 = [null,null,null,null,null,null,null,null];
(statearr_21021[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__);

(statearr_21021[(1)] = (1));

return statearr_21021;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1 = (function (state_21018){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_21018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e21022){if((e21022 instanceof Object)){
var ex__15503__auto__ = e21022;
var statearr_21023_21027 = state_21018;
(statearr_21023_21027[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21028 = state_21018;
state_21018 = G__21028;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__ = function(state_21018){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1.call(this,state_21018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__,buttons,s,dateien,_))
})();
var state__15524__auto__ = (function (){var statearr_21024 = f__15523__auto__.call(null);
(statearr_21024[(6)] = c__15522__auto__);

return statearr_21024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__,buttons,s,dateien,_))
);

return c__15522__auto__;
});})(buttons,s,dateien,_))
], null),"sichern"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.datei_management,dateien,dep.components.datensicherung.datei_verwaltung.call(null,buttons,dateien,welt__$1)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
