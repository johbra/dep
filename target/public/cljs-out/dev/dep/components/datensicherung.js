// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.datensicherung');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.components.datamanagement');
goog.require('dep.helpers.drop_file_stream');
/**
 * Liefert die Datei mit dem Namen string aus der Liste von dateien.
 */
dep.components.datensicherung.datei_mit_namen = (function dep$components$datensicherung$datei_mit_namen(dateien,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20382_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20382_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.components.datensicherung.loesche_datei = (function dep$components$datensicherung$loesche_datei(d,welt){
var c__14578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14578__auto__){
return (function (){
var f__14579__auto__ = (function (){var switch__14533__auto__ = ((function (c__14578__auto__){
return (function (state_20395){
var state_val_20396 = (state_20395[(1)]);
if((state_val_20396 === (1))){
var inst_20384 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_20385 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_20384);
var state_20395__$1 = state_20395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20395__$1,(2),inst_20385);
} else {
if((state_val_20396 === (2))){
var inst_20387 = (state_20395[(2)]);
var inst_20388 = (function (){return ((function (inst_20387,state_val_20396,c__14578__auto__){
return (function (p1__20383_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20383_SHARP_));
});
;})(inst_20387,state_val_20396,c__14578__auto__))
})();
var inst_20389 = cljs.core.deref.call(null,welt);
var inst_20390 = new cljs.core.Keyword(null,"dateien","dateien",64338828).cljs$core$IFn$_invoke$arity$1(inst_20389);
var inst_20391 = cljs.core.remove.call(null,inst_20388,inst_20390);
var inst_20392 = cljs.core.vec.call(null,inst_20391);
var inst_20393 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_20392);
var state_20395__$1 = (function (){var statearr_20397 = state_20395;
(statearr_20397[(7)] = inst_20387);

return statearr_20397;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20395__$1,inst_20393);
} else {
return null;
}
}
});})(c__14578__auto__))
;
return ((function (switch__14533__auto__,c__14578__auto__){
return (function() {
var dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto__ = null;
var dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto____0 = (function (){
var statearr_20398 = [null,null,null,null,null,null,null,null];
(statearr_20398[(0)] = dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto__);

(statearr_20398[(1)] = (1));

return statearr_20398;
});
var dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto____1 = (function (state_20395){
while(true){
var ret_value__14535__auto__ = (function (){try{while(true){
var result__14536__auto__ = switch__14533__auto__.call(null,state_20395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14536__auto__;
}
break;
}
}catch (e20399){if((e20399 instanceof Object)){
var ex__14537__auto__ = e20399;
var statearr_20400_20402 = state_20395;
(statearr_20400_20402[(5)] = ex__14537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20403 = state_20395;
state_20395 = G__20403;
continue;
} else {
return ret_value__14535__auto__;
}
break;
}
});
dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto__ = function(state_20395){
switch(arguments.length){
case 0:
return dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto____0.call(this);
case 1:
return dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto____1.call(this,state_20395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto____0;
dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto____1;
return dep$components$datensicherung$loesche_datei_$_state_machine__14534__auto__;
})()
;})(switch__14533__auto__,c__14578__auto__))
})();
var state__14580__auto__ = (function (){var statearr_20401 = f__14579__auto__.call(null);
(statearr_20401[(6)] = c__14578__auto__);

return statearr_20401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14580__auto__);
});})(c__14578__auto__))
);

return c__14578__auto__;
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.components.datensicherung.lade_welt_aus_datei = (function dep$components$datensicherung$lade_welt_aus_datei(d,welt){
var c__14578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14578__auto__){
return (function (){
var f__14579__auto__ = (function (){var switch__14533__auto__ = ((function (c__14578__auto__){
return (function (state_20410){
var state_val_20411 = (state_20410[(1)]);
if((state_val_20411 === (1))){
var inst_20404 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_20405 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_20404);
var state_20410__$1 = state_20410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20410__$1,(2),inst_20405);
} else {
if((state_val_20411 === (2))){
var inst_20407 = (state_20410[(2)]);
var inst_20408 = cljs.core.reset_BANG_.call(null,welt,inst_20407);
var state_20410__$1 = state_20410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20410__$1,inst_20408);
} else {
return null;
}
}
});})(c__14578__auto__))
;
return ((function (switch__14533__auto__,c__14578__auto__){
return (function() {
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto__ = null;
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto____0 = (function (){
var statearr_20412 = [null,null,null,null,null,null,null];
(statearr_20412[(0)] = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto__);

(statearr_20412[(1)] = (1));

return statearr_20412;
});
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto____1 = (function (state_20410){
while(true){
var ret_value__14535__auto__ = (function (){try{while(true){
var result__14536__auto__ = switch__14533__auto__.call(null,state_20410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14536__auto__;
}
break;
}
}catch (e20413){if((e20413 instanceof Object)){
var ex__14537__auto__ = e20413;
var statearr_20414_20416 = state_20410;
(statearr_20414_20416[(5)] = ex__14537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20417 = state_20410;
state_20410 = G__20417;
continue;
} else {
return ret_value__14535__auto__;
}
break;
}
});
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto__ = function(state_20410){
switch(arguments.length){
case 0:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto____0.call(this);
case 1:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto____1.call(this,state_20410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto____0;
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto____1;
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__14534__auto__;
})()
;})(switch__14533__auto__,c__14578__auto__))
})();
var state__14580__auto__ = (function (){var statearr_20415 = f__14579__auto__.call(null);
(statearr_20415[(6)] = c__14578__auto__);

return statearr_20415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14580__auto__);
});})(c__14578__auto__))
);

return c__14578__auto__;
});
/**
 * Gibt der Datei mit dem Namen alter-name den Namen neuer-name.
 *   Umbenennung ist nur möglich, falls nicht bereits eine Datei mit dem Namen neuer-name
 *   existiert.
 */
dep.components.datensicherung.umbenenne_datei = (function dep$components$datensicherung$umbenenne_datei(alter_name,neuer_name,welt){
if(cljs.core.truth_(dep.components.datensicherung.datei_mit_namen.call(null,new cljs.core.Keyword(null,"dateien","dateien",64338828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)),neuer_name))){
return alert(["Datei mit Namen ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(neuer_name)," existiert bereits!"].join(''));
} else {
var c__14578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14578__auto__){
return (function (){
var f__14579__auto__ = (function (){var switch__14533__auto__ = ((function (c__14578__auto__){
return (function (state_20426){
var state_val_20427 = (state_20426[(1)]);
if((state_val_20427 === (1))){
var inst_20418 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_20426__$1 = state_20426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20426__$1,(2),inst_20418);
} else {
if((state_val_20427 === (2))){
var inst_20420 = (state_20426[(2)]);
var inst_20421 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_20426__$1 = (function (){var statearr_20428 = state_20426;
(statearr_20428[(7)] = inst_20420);

return statearr_20428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20426__$1,(3),inst_20421);
} else {
if((state_val_20427 === (3))){
var inst_20423 = (state_20426[(2)]);
var inst_20424 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_20423);
var state_20426__$1 = state_20426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20426__$1,inst_20424);
} else {
return null;
}
}
}
});})(c__14578__auto__))
;
return ((function (switch__14533__auto__,c__14578__auto__){
return (function() {
var dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto__ = null;
var dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto____0 = (function (){
var statearr_20429 = [null,null,null,null,null,null,null,null];
(statearr_20429[(0)] = dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto__);

(statearr_20429[(1)] = (1));

return statearr_20429;
});
var dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto____1 = (function (state_20426){
while(true){
var ret_value__14535__auto__ = (function (){try{while(true){
var result__14536__auto__ = switch__14533__auto__.call(null,state_20426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14536__auto__;
}
break;
}
}catch (e20430){if((e20430 instanceof Object)){
var ex__14537__auto__ = e20430;
var statearr_20431_20433 = state_20426;
(statearr_20431_20433[(5)] = ex__14537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20434 = state_20426;
state_20426 = G__20434;
continue;
} else {
return ret_value__14535__auto__;
}
break;
}
});
dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto__ = function(state_20426){
switch(arguments.length){
case 0:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto____0.call(this);
case 1:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto____1.call(this,state_20426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto____0;
dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto____1;
return dep$components$datensicherung$umbenenne_datei_$_state_machine__14534__auto__;
})()
;})(switch__14533__auto__,c__14578__auto__))
})();
var state__14580__auto__ = (function (){var statearr_20432 = f__14579__auto__.call(null);
(statearr_20432[(6)] = c__14578__auto__);

return statearr_20432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14580__auto__);
});})(c__14578__auto__))
);

return c__14578__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.components.datensicherung.dateien__GT_table = (function dep$components$datensicherung$dateien__GT_table(welt,dateien){
return cljs.core.mapv.call(null,(function (p1__20435_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__20435_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__20435_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.loesche_datei.call(null,p1__20435_SHARP_,welt);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.lade_welt_aus_datei.call(null,p1__20435_SHARP_,welt);
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
dep.components.datensicherung.datei_verwaltung = (function dep$components$datensicherung$datei_verwaltung(buttons,welt){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[null,cljs.core.partial.call(null,dep.components.datensicherung.dateien__GT_table,welt),new cljs.core.Keyword(null,"name","name",1843675177),null,cljs.core.identity,"Dateien",dep.components.datensicherung.umbenenne_datei,dep.components.datensicherung.datei_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.components.datensicherung.datei_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Datei",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dateien","dateien",64338828)], null);
})]);
});
/**
 * Komponente für das Laden und Speichern von Planungsdaten.
 */
dep.components.datensicherung.datensicherung = (function dep$components$datensicherung$datensicherung(welt){
return (function (welt__$1){
var buttons = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"rename-file","rename-file",-1507579634),new cljs.core.Keyword(null,"label","label",1718410804),"Name \u00E4ndern"], null)], null);
var s = reagent.core.atom.call(null,"pldaten.edn");
var _ = (function (){var c__14578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14578__auto__,buttons,s){
return (function (){
var f__14579__auto__ = (function (){var switch__14533__auto__ = ((function (c__14578__auto__,buttons,s){
return (function (state_20442){
var state_val_20443 = (state_20442[(1)]);
if((state_val_20443 === (1))){
var inst_20437 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20442__$1,(2),inst_20437);
} else {
if((state_val_20443 === (2))){
var inst_20439 = (state_20442[(2)]);
var inst_20440 = cljs.core.swap_BANG_.call(null,welt__$1,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_20439);
var state_20442__$1 = state_20442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20442__$1,inst_20440);
} else {
return null;
}
}
});})(c__14578__auto__,buttons,s))
;
return ((function (switch__14533__auto__,c__14578__auto__,buttons,s){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____0 = (function (){
var statearr_20444 = [null,null,null,null,null,null,null];
(statearr_20444[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__);

(statearr_20444[(1)] = (1));

return statearr_20444;
});
var dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____1 = (function (state_20442){
while(true){
var ret_value__14535__auto__ = (function (){try{while(true){
var result__14536__auto__ = switch__14533__auto__.call(null,state_20442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14536__auto__;
}
break;
}
}catch (e20445){if((e20445 instanceof Object)){
var ex__14537__auto__ = e20445;
var statearr_20446_20466 = state_20442;
(statearr_20446_20466[(5)] = ex__14537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20467 = state_20442;
state_20442 = G__20467;
continue;
} else {
return ret_value__14535__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__ = function(state_20442){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____1.call(this,state_20442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__;
})()
;})(switch__14533__auto__,c__14578__auto__,buttons,s))
})();
var state__14580__auto__ = (function (){var statearr_20447 = f__14579__auto__.call(null);
(statearr_20447[(6)] = c__14578__auto__);

return statearr_20447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14580__auto__);
});})(c__14578__auto__,buttons,s))
);

return c__14578__auto__;
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group.form-inline","div.row.form-group.form-inline",-361636882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-md-5","label.col-md-5",-1504317970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"datei"], null),"Daten in Datei mit dem Namen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.col-md-4","input.form-control.col-md-4",1555518695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"pldaten.edn",new cljs.core.Keyword(null,"id","id",-1388402092),"datei",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (buttons,s,_){
return (function (p1__20436_SHARP_){
return cljs.core.reset_BANG_.call(null,s,p1__20436_SHARP_.target.value);
});})(buttons,s,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-default.col-md-3","button.btn-default.col-md-3",-1949324283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buttons,s,_){
return (function (){
var c__14578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14578__auto__,buttons,s,_){
return (function (){
var f__14579__auto__ = (function (){var switch__14533__auto__ = ((function (c__14578__auto__,buttons,s,_){
return (function (state_20459){
var state_val_20460 = (state_20459[(1)]);
if((state_val_20460 === (1))){
var inst_20448 = cljs.core.deref.call(null,welt__$1);
var inst_20449 = cljs.core.prn_str.call(null,inst_20448);
var inst_20450 = cljs.core.deref.call(null,s);
var inst_20451 = dep.helpers.drop_file_stream.write_text.call(null,inst_20449,inst_20450);
var state_20459__$1 = state_20459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20459__$1,(2),inst_20451);
} else {
if((state_val_20460 === (2))){
var inst_20453 = (state_20459[(2)]);
var inst_20454 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_20459__$1 = (function (){var statearr_20461 = state_20459;
(statearr_20461[(7)] = inst_20453);

return statearr_20461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20459__$1,(3),inst_20454);
} else {
if((state_val_20460 === (3))){
var inst_20456 = (state_20459[(2)]);
var inst_20457 = cljs.core.swap_BANG_.call(null,welt__$1,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_20456);
var state_20459__$1 = state_20459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20459__$1,inst_20457);
} else {
return null;
}
}
}
});})(c__14578__auto__,buttons,s,_))
;
return ((function (switch__14533__auto__,c__14578__auto__,buttons,s,_){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____0 = (function (){
var statearr_20462 = [null,null,null,null,null,null,null,null];
(statearr_20462[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__);

(statearr_20462[(1)] = (1));

return statearr_20462;
});
var dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____1 = (function (state_20459){
while(true){
var ret_value__14535__auto__ = (function (){try{while(true){
var result__14536__auto__ = switch__14533__auto__.call(null,state_20459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14536__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14536__auto__;
}
break;
}
}catch (e20463){if((e20463 instanceof Object)){
var ex__14537__auto__ = e20463;
var statearr_20464_20468 = state_20459;
(statearr_20464_20468[(5)] = ex__14537__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14535__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20469 = state_20459;
state_20459 = G__20469;
continue;
} else {
return ret_value__14535__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__ = function(state_20459){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____1.call(this,state_20459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__14534__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__14534__auto__;
})()
;})(switch__14533__auto__,c__14578__auto__,buttons,s,_))
})();
var state__14580__auto__ = (function (){var statearr_20465 = f__14579__auto__.call(null);
(statearr_20465[(6)] = c__14578__auto__);

return statearr_20465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14580__auto__);
});})(c__14578__auto__,buttons,s,_))
);

return c__14578__auto__;
});})(buttons,s,_))
], null),"sichern"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt__$1,dep.components.datensicherung.datei_verwaltung.call(null,buttons,welt__$1)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
