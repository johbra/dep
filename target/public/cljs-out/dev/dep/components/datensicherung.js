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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20268_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20268_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.components.datensicherung.loesche_datei = (function dep$components$datensicherung$loesche_datei(d){
var c__15863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15863__auto__){
return (function (){
var f__15864__auto__ = (function (){var switch__15840__auto__ = ((function (c__15863__auto__){
return (function (state_20275){
var state_val_20276 = (state_20275[(1)]);
if((state_val_20276 === (1))){
var inst_20269 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_20270 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_20269);
var state_20275__$1 = state_20275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20275__$1,(2),inst_20270);
} else {
if((state_val_20276 === (2))){
var inst_20272 = (state_20275[(2)]);
var inst_20273 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_20275__$1 = (function (){var statearr_20277 = state_20275;
(statearr_20277[(7)] = inst_20272);

return statearr_20277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20275__$1,inst_20273);
} else {
return null;
}
}
});})(c__15863__auto__))
;
return ((function (switch__15840__auto__,c__15863__auto__){
return (function() {
var dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto__ = null;
var dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto____0 = (function (){
var statearr_20278 = [null,null,null,null,null,null,null,null];
(statearr_20278[(0)] = dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto__);

(statearr_20278[(1)] = (1));

return statearr_20278;
});
var dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto____1 = (function (state_20275){
while(true){
var ret_value__15842__auto__ = (function (){try{while(true){
var result__15843__auto__ = switch__15840__auto__.call(null,state_20275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15843__auto__;
}
break;
}
}catch (e20279){if((e20279 instanceof Object)){
var ex__15844__auto__ = e20279;
var statearr_20280_20282 = state_20275;
(statearr_20280_20282[(5)] = ex__15844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20283 = state_20275;
state_20275 = G__20283;
continue;
} else {
return ret_value__15842__auto__;
}
break;
}
});
dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto__ = function(state_20275){
switch(arguments.length){
case 0:
return dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto____0.call(this);
case 1:
return dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto____1.call(this,state_20275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto____0;
dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto____1;
return dep$components$datensicherung$loesche_datei_$_state_machine__15841__auto__;
})()
;})(switch__15840__auto__,c__15863__auto__))
})();
var state__15865__auto__ = (function (){var statearr_20281 = f__15864__auto__.call(null);
(statearr_20281[(6)] = c__15863__auto__);

return statearr_20281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15865__auto__);
});})(c__15863__auto__))
);

return c__15863__auto__;
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.components.datensicherung.lade_welt_aus_datei = (function dep$components$datensicherung$lade_welt_aus_datei(d,welt){
var c__15863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15863__auto__){
return (function (){
var f__15864__auto__ = (function (){var switch__15840__auto__ = ((function (c__15863__auto__){
return (function (state_20291){
var state_val_20292 = (state_20291[(1)]);
if((state_val_20292 === (1))){
var inst_20284 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_20285 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_20284);
var state_20291__$1 = state_20291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20291__$1,(2),inst_20285);
} else {
if((state_val_20292 === (2))){
var inst_20287 = (state_20291[(2)]);
var inst_20288 = cljs.core.reset_BANG_.call(null,welt,inst_20287);
var inst_20289 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578));
var state_20291__$1 = (function (){var statearr_20293 = state_20291;
(statearr_20293[(7)] = inst_20288);

return statearr_20293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20291__$1,inst_20289);
} else {
return null;
}
}
});})(c__15863__auto__))
;
return ((function (switch__15840__auto__,c__15863__auto__){
return (function() {
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto__ = null;
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto____0 = (function (){
var statearr_20294 = [null,null,null,null,null,null,null,null];
(statearr_20294[(0)] = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto__);

(statearr_20294[(1)] = (1));

return statearr_20294;
});
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto____1 = (function (state_20291){
while(true){
var ret_value__15842__auto__ = (function (){try{while(true){
var result__15843__auto__ = switch__15840__auto__.call(null,state_20291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15843__auto__;
}
break;
}
}catch (e20295){if((e20295 instanceof Object)){
var ex__15844__auto__ = e20295;
var statearr_20296_20298 = state_20291;
(statearr_20296_20298[(5)] = ex__15844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20299 = state_20291;
state_20291 = G__20299;
continue;
} else {
return ret_value__15842__auto__;
}
break;
}
});
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto__ = function(state_20291){
switch(arguments.length){
case 0:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto____0.call(this);
case 1:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto____1.call(this,state_20291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto____0;
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto____1;
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15841__auto__;
})()
;})(switch__15840__auto__,c__15863__auto__))
})();
var state__15865__auto__ = (function (){var statearr_20297 = f__15864__auto__.call(null);
(statearr_20297[(6)] = c__15863__auto__);

return statearr_20297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15865__auto__);
});})(c__15863__auto__))
);

return c__15863__auto__;
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
var c__15863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15863__auto__){
return (function (){
var f__15864__auto__ = (function (){var switch__15840__auto__ = ((function (c__15863__auto__){
return (function (state_20305){
var state_val_20306 = (state_20305[(1)]);
if((state_val_20306 === (1))){
var inst_20300 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_20305__$1 = state_20305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20305__$1,(2),inst_20300);
} else {
if((state_val_20306 === (2))){
var inst_20302 = (state_20305[(2)]);
var inst_20303 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_20305__$1 = (function (){var statearr_20307 = state_20305;
(statearr_20307[(7)] = inst_20302);

return statearr_20307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20305__$1,inst_20303);
} else {
return null;
}
}
});})(c__15863__auto__))
;
return ((function (switch__15840__auto__,c__15863__auto__){
return (function() {
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto__ = null;
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto____0 = (function (){
var statearr_20308 = [null,null,null,null,null,null,null,null];
(statearr_20308[(0)] = dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto__);

(statearr_20308[(1)] = (1));

return statearr_20308;
});
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto____1 = (function (state_20305){
while(true){
var ret_value__15842__auto__ = (function (){try{while(true){
var result__15843__auto__ = switch__15840__auto__.call(null,state_20305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15843__auto__;
}
break;
}
}catch (e20309){if((e20309 instanceof Object)){
var ex__15844__auto__ = e20309;
var statearr_20310_20312 = state_20305;
(statearr_20310_20312[(5)] = ex__15844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20313 = state_20305;
state_20305 = G__20313;
continue;
} else {
return ret_value__15842__auto__;
}
break;
}
});
dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto__ = function(state_20305){
switch(arguments.length){
case 0:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto____0.call(this);
case 1:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto____1.call(this,state_20305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto____0;
dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto____1;
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15841__auto__;
})()
;})(switch__15840__auto__,c__15863__auto__))
})();
var state__15865__auto__ = (function (){var statearr_20311 = f__15864__auto__.call(null);
(statearr_20311[(6)] = c__15863__auto__);

return statearr_20311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15865__auto__);
});})(c__15863__auto__))
);

return c__15863__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.components.datensicherung.dateien__GT_table = (function dep$components$datensicherung$dateien__GT_table(welt,dateien){
return cljs.core.mapv.call(null,(function (p1__20314_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20314_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__20314_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.loesche_datei.call(null,p1__20314_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.lade_welt_aus_datei.call(null,p1__20314_SHARP_,welt);
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
var _ = (function (){var c__15863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15863__auto__,buttons,s,dateien){
return (function (){
var f__15864__auto__ = (function (){var switch__15840__auto__ = ((function (c__15863__auto__,buttons,s,dateien){
return (function (state_20321){
var state_val_20322 = (state_20321[(1)]);
if((state_val_20322 === (1))){
var inst_20316 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20321__$1,(2),inst_20316);
} else {
if((state_val_20322 === (2))){
var inst_20318 = (state_20321[(2)]);
var inst_20319 = cljs.core.reset_BANG_.call(null,dateien,inst_20318);
var state_20321__$1 = state_20321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20321__$1,inst_20319);
} else {
return null;
}
}
});})(c__15863__auto__,buttons,s,dateien))
;
return ((function (switch__15840__auto__,c__15863__auto__,buttons,s,dateien){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____0 = (function (){
var statearr_20323 = [null,null,null,null,null,null,null];
(statearr_20323[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__);

(statearr_20323[(1)] = (1));

return statearr_20323;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____1 = (function (state_20321){
while(true){
var ret_value__15842__auto__ = (function (){try{while(true){
var result__15843__auto__ = switch__15840__auto__.call(null,state_20321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15843__auto__;
}
break;
}
}catch (e20324){if((e20324 instanceof Object)){
var ex__15844__auto__ = e20324;
var statearr_20325_20345 = state_20321;
(statearr_20325_20345[(5)] = ex__15844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20346 = state_20321;
state_20321 = G__20346;
continue;
} else {
return ret_value__15842__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__ = function(state_20321){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____1.call(this,state_20321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__;
})()
;})(switch__15840__auto__,c__15863__auto__,buttons,s,dateien))
})();
var state__15865__auto__ = (function (){var statearr_20326 = f__15864__auto__.call(null);
(statearr_20326[(6)] = c__15863__auto__);

return statearr_20326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15865__auto__);
});})(c__15863__auto__,buttons,s,dateien))
);

return c__15863__auto__;
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group.form-inline","div.row.form-group.form-inline",-361636882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-md-5","label.col-md-5",-1504317970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"datei"], null),"Daten in Datei mit dem Namen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.col-md-4","input.form-control.col-md-4",1555518695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"pldaten.edn",new cljs.core.Keyword(null,"id","id",-1388402092),"datei",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (buttons,s,dateien,_){
return (function (p1__20315_SHARP_){
return cljs.core.reset_BANG_.call(null,s,p1__20315_SHARP_.target.value);
});})(buttons,s,dateien,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-default.col-md-3","button.btn-default.col-md-3",-1949324283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buttons,s,dateien,_){
return (function (){
var c__15863__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15863__auto__,buttons,s,dateien,_){
return (function (){
var f__15864__auto__ = (function (){var switch__15840__auto__ = ((function (c__15863__auto__,buttons,s,dateien,_){
return (function (state_20338){
var state_val_20339 = (state_20338[(1)]);
if((state_val_20339 === (1))){
var inst_20327 = cljs.core.deref.call(null,welt__$1);
var inst_20328 = cljs.core.prn_str.call(null,inst_20327);
var inst_20329 = cljs.core.deref.call(null,s);
var inst_20330 = dep.helpers.drop_file_stream.write_text.call(null,inst_20328,inst_20329);
var state_20338__$1 = state_20338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20338__$1,(2),inst_20330);
} else {
if((state_val_20339 === (2))){
var inst_20332 = (state_20338[(2)]);
var inst_20333 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_20338__$1 = (function (){var statearr_20340 = state_20338;
(statearr_20340[(7)] = inst_20332);

return statearr_20340;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20338__$1,(3),inst_20333);
} else {
if((state_val_20339 === (3))){
var inst_20335 = (state_20338[(2)]);
var inst_20336 = cljs.core.reset_BANG_.call(null,dateien,inst_20335);
var state_20338__$1 = state_20338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20338__$1,inst_20336);
} else {
return null;
}
}
}
});})(c__15863__auto__,buttons,s,dateien,_))
;
return ((function (switch__15840__auto__,c__15863__auto__,buttons,s,dateien,_){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____0 = (function (){
var statearr_20341 = [null,null,null,null,null,null,null,null];
(statearr_20341[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__);

(statearr_20341[(1)] = (1));

return statearr_20341;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____1 = (function (state_20338){
while(true){
var ret_value__15842__auto__ = (function (){try{while(true){
var result__15843__auto__ = switch__15840__auto__.call(null,state_20338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15843__auto__;
}
break;
}
}catch (e20342){if((e20342 instanceof Object)){
var ex__15844__auto__ = e20342;
var statearr_20343_20347 = state_20338;
(statearr_20343_20347[(5)] = ex__15844__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15842__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20348 = state_20338;
state_20338 = G__20348;
continue;
} else {
return ret_value__15842__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__ = function(state_20338){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____1.call(this,state_20338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15841__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15841__auto__;
})()
;})(switch__15840__auto__,c__15863__auto__,buttons,s,dateien,_))
})();
var state__15865__auto__ = (function (){var statearr_20344 = f__15864__auto__.call(null);
(statearr_20344[(6)] = c__15863__auto__);

return statearr_20344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15865__auto__);
});})(c__15863__auto__,buttons,s,dateien,_))
);

return c__15863__auto__;
});})(buttons,s,dateien,_))
], null),"sichern"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.datei_management,dateien,dep.components.datensicherung.datei_verwaltung.call(null,buttons,dateien,welt__$1)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
