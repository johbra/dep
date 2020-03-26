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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__16112_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16112_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.components.datensicherung.loesche_datei = (function dep$components$datensicherung$loesche_datei(d){
var c__15775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15775__auto__){
return (function (){
var f__15776__auto__ = (function (){var switch__15752__auto__ = ((function (c__15775__auto__){
return (function (state_16119){
var state_val_16120 = (state_16119[(1)]);
if((state_val_16120 === (1))){
var inst_16113 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_16114 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_16113);
var state_16119__$1 = state_16119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16119__$1,(2),inst_16114);
} else {
if((state_val_16120 === (2))){
var inst_16116 = (state_16119[(2)]);
var inst_16117 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_16119__$1 = (function (){var statearr_16121 = state_16119;
(statearr_16121[(7)] = inst_16116);

return statearr_16121;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16119__$1,inst_16117);
} else {
return null;
}
}
});})(c__15775__auto__))
;
return ((function (switch__15752__auto__,c__15775__auto__){
return (function() {
var dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto__ = null;
var dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto____0 = (function (){
var statearr_16122 = [null,null,null,null,null,null,null,null];
(statearr_16122[(0)] = dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto__);

(statearr_16122[(1)] = (1));

return statearr_16122;
});
var dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto____1 = (function (state_16119){
while(true){
var ret_value__15754__auto__ = (function (){try{while(true){
var result__15755__auto__ = switch__15752__auto__.call(null,state_16119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15755__auto__;
}
break;
}
}catch (e16123){if((e16123 instanceof Object)){
var ex__15756__auto__ = e16123;
var statearr_16124_16126 = state_16119;
(statearr_16124_16126[(5)] = ex__15756__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16127 = state_16119;
state_16119 = G__16127;
continue;
} else {
return ret_value__15754__auto__;
}
break;
}
});
dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto__ = function(state_16119){
switch(arguments.length){
case 0:
return dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto____0.call(this);
case 1:
return dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto____1.call(this,state_16119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto____0;
dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto____1;
return dep$components$datensicherung$loesche_datei_$_state_machine__15753__auto__;
})()
;})(switch__15752__auto__,c__15775__auto__))
})();
var state__15777__auto__ = (function (){var statearr_16125 = f__15776__auto__.call(null);
(statearr_16125[(6)] = c__15775__auto__);

return statearr_16125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15777__auto__);
});})(c__15775__auto__))
);

return c__15775__auto__;
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.components.datensicherung.lade_welt_aus_datei = (function dep$components$datensicherung$lade_welt_aus_datei(d,welt){
var c__15775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15775__auto__){
return (function (){
var f__15776__auto__ = (function (){var switch__15752__auto__ = ((function (c__15775__auto__){
return (function (state_16135){
var state_val_16136 = (state_16135[(1)]);
if((state_val_16136 === (1))){
var inst_16128 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_16129 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_16128);
var state_16135__$1 = state_16135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16135__$1,(2),inst_16129);
} else {
if((state_val_16136 === (2))){
var inst_16131 = (state_16135[(2)]);
var inst_16132 = cljs.core.reset_BANG_.call(null,welt,inst_16131);
var inst_16133 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578));
var state_16135__$1 = (function (){var statearr_16137 = state_16135;
(statearr_16137[(7)] = inst_16132);

return statearr_16137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16135__$1,inst_16133);
} else {
return null;
}
}
});})(c__15775__auto__))
;
return ((function (switch__15752__auto__,c__15775__auto__){
return (function() {
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto__ = null;
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto____0 = (function (){
var statearr_16138 = [null,null,null,null,null,null,null,null];
(statearr_16138[(0)] = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto__);

(statearr_16138[(1)] = (1));

return statearr_16138;
});
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto____1 = (function (state_16135){
while(true){
var ret_value__15754__auto__ = (function (){try{while(true){
var result__15755__auto__ = switch__15752__auto__.call(null,state_16135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15755__auto__;
}
break;
}
}catch (e16139){if((e16139 instanceof Object)){
var ex__15756__auto__ = e16139;
var statearr_16140_16142 = state_16135;
(statearr_16140_16142[(5)] = ex__15756__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16143 = state_16135;
state_16135 = G__16143;
continue;
} else {
return ret_value__15754__auto__;
}
break;
}
});
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto__ = function(state_16135){
switch(arguments.length){
case 0:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto____0.call(this);
case 1:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto____1.call(this,state_16135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto____0;
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto____1;
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15753__auto__;
})()
;})(switch__15752__auto__,c__15775__auto__))
})();
var state__15777__auto__ = (function (){var statearr_16141 = f__15776__auto__.call(null);
(statearr_16141[(6)] = c__15775__auto__);

return statearr_16141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15777__auto__);
});})(c__15775__auto__))
);

return c__15775__auto__;
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
var c__15775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15775__auto__){
return (function (){
var f__15776__auto__ = (function (){var switch__15752__auto__ = ((function (c__15775__auto__){
return (function (state_16149){
var state_val_16150 = (state_16149[(1)]);
if((state_val_16150 === (1))){
var inst_16144 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_16149__$1 = state_16149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16149__$1,(2),inst_16144);
} else {
if((state_val_16150 === (2))){
var inst_16146 = (state_16149[(2)]);
var inst_16147 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_16149__$1 = (function (){var statearr_16151 = state_16149;
(statearr_16151[(7)] = inst_16146);

return statearr_16151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16149__$1,inst_16147);
} else {
return null;
}
}
});})(c__15775__auto__))
;
return ((function (switch__15752__auto__,c__15775__auto__){
return (function() {
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto__ = null;
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto____0 = (function (){
var statearr_16152 = [null,null,null,null,null,null,null,null];
(statearr_16152[(0)] = dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto__);

(statearr_16152[(1)] = (1));

return statearr_16152;
});
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto____1 = (function (state_16149){
while(true){
var ret_value__15754__auto__ = (function (){try{while(true){
var result__15755__auto__ = switch__15752__auto__.call(null,state_16149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15755__auto__;
}
break;
}
}catch (e16153){if((e16153 instanceof Object)){
var ex__15756__auto__ = e16153;
var statearr_16154_16156 = state_16149;
(statearr_16154_16156[(5)] = ex__15756__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16157 = state_16149;
state_16149 = G__16157;
continue;
} else {
return ret_value__15754__auto__;
}
break;
}
});
dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto__ = function(state_16149){
switch(arguments.length){
case 0:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto____0.call(this);
case 1:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto____1.call(this,state_16149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto____0;
dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto____1;
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15753__auto__;
})()
;})(switch__15752__auto__,c__15775__auto__))
})();
var state__15777__auto__ = (function (){var statearr_16155 = f__15776__auto__.call(null);
(statearr_16155[(6)] = c__15775__auto__);

return statearr_16155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15777__auto__);
});})(c__15775__auto__))
);

return c__15775__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.components.datensicherung.dateien__GT_table = (function dep$components$datensicherung$dateien__GT_table(welt,dateien){
return cljs.core.mapv.call(null,(function (p1__16158_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16158_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__16158_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.loesche_datei.call(null,p1__16158_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.lade_welt_aus_datei.call(null,p1__16158_SHARP_,welt);
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
var _ = (function (){var c__15775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15775__auto__,buttons,s,dateien){
return (function (){
var f__15776__auto__ = (function (){var switch__15752__auto__ = ((function (c__15775__auto__,buttons,s,dateien){
return (function (state_16165){
var state_val_16166 = (state_16165[(1)]);
if((state_val_16166 === (1))){
var inst_16160 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16165__$1,(2),inst_16160);
} else {
if((state_val_16166 === (2))){
var inst_16162 = (state_16165[(2)]);
var inst_16163 = cljs.core.reset_BANG_.call(null,dateien,inst_16162);
var state_16165__$1 = state_16165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16165__$1,inst_16163);
} else {
return null;
}
}
});})(c__15775__auto__,buttons,s,dateien))
;
return ((function (switch__15752__auto__,c__15775__auto__,buttons,s,dateien){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____0 = (function (){
var statearr_16167 = [null,null,null,null,null,null,null];
(statearr_16167[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__);

(statearr_16167[(1)] = (1));

return statearr_16167;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____1 = (function (state_16165){
while(true){
var ret_value__15754__auto__ = (function (){try{while(true){
var result__15755__auto__ = switch__15752__auto__.call(null,state_16165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15755__auto__;
}
break;
}
}catch (e16168){if((e16168 instanceof Object)){
var ex__15756__auto__ = e16168;
var statearr_16169_16189 = state_16165;
(statearr_16169_16189[(5)] = ex__15756__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16190 = state_16165;
state_16165 = G__16190;
continue;
} else {
return ret_value__15754__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__ = function(state_16165){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____1.call(this,state_16165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__;
})()
;})(switch__15752__auto__,c__15775__auto__,buttons,s,dateien))
})();
var state__15777__auto__ = (function (){var statearr_16170 = f__15776__auto__.call(null);
(statearr_16170[(6)] = c__15775__auto__);

return statearr_16170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15777__auto__);
});})(c__15775__auto__,buttons,s,dateien))
);

return c__15775__auto__;
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group.form-inline","div.row.form-group.form-inline",-361636882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-md-5","label.col-md-5",-1504317970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"datei"], null),"Daten in Datei mit dem Namen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.col-md-4","input.form-control.col-md-4",1555518695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"pldaten.edn",new cljs.core.Keyword(null,"id","id",-1388402092),"datei",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (buttons,s,dateien,_){
return (function (p1__16159_SHARP_){
return cljs.core.reset_BANG_.call(null,s,p1__16159_SHARP_.target.value);
});})(buttons,s,dateien,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-default.col-md-3","button.btn-default.col-md-3",-1949324283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buttons,s,dateien,_){
return (function (){
var c__15775__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15775__auto__,buttons,s,dateien,_){
return (function (){
var f__15776__auto__ = (function (){var switch__15752__auto__ = ((function (c__15775__auto__,buttons,s,dateien,_){
return (function (state_16182){
var state_val_16183 = (state_16182[(1)]);
if((state_val_16183 === (1))){
var inst_16171 = cljs.core.deref.call(null,welt__$1);
var inst_16172 = cljs.core.prn_str.call(null,inst_16171);
var inst_16173 = cljs.core.deref.call(null,s);
var inst_16174 = dep.helpers.drop_file_stream.write_text.call(null,inst_16172,inst_16173);
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,(2),inst_16174);
} else {
if((state_val_16183 === (2))){
var inst_16176 = (state_16182[(2)]);
var inst_16177 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_16182__$1 = (function (){var statearr_16184 = state_16182;
(statearr_16184[(7)] = inst_16176);

return statearr_16184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16182__$1,(3),inst_16177);
} else {
if((state_val_16183 === (3))){
var inst_16179 = (state_16182[(2)]);
var inst_16180 = cljs.core.reset_BANG_.call(null,dateien,inst_16179);
var state_16182__$1 = state_16182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16182__$1,inst_16180);
} else {
return null;
}
}
}
});})(c__15775__auto__,buttons,s,dateien,_))
;
return ((function (switch__15752__auto__,c__15775__auto__,buttons,s,dateien,_){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____0 = (function (){
var statearr_16185 = [null,null,null,null,null,null,null,null];
(statearr_16185[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__);

(statearr_16185[(1)] = (1));

return statearr_16185;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____1 = (function (state_16182){
while(true){
var ret_value__15754__auto__ = (function (){try{while(true){
var result__15755__auto__ = switch__15752__auto__.call(null,state_16182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15755__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15755__auto__;
}
break;
}
}catch (e16186){if((e16186 instanceof Object)){
var ex__15756__auto__ = e16186;
var statearr_16187_16191 = state_16182;
(statearr_16187_16191[(5)] = ex__15756__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15754__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16192 = state_16182;
state_16182 = G__16192;
continue;
} else {
return ret_value__15754__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__ = function(state_16182){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____1.call(this,state_16182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15753__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15753__auto__;
})()
;})(switch__15752__auto__,c__15775__auto__,buttons,s,dateien,_))
})();
var state__15777__auto__ = (function (){var statearr_16188 = f__15776__auto__.call(null);
(statearr_16188[(6)] = c__15775__auto__);

return statearr_16188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15777__auto__);
});})(c__15775__auto__,buttons,s,dateien,_))
);

return c__15775__auto__;
});})(buttons,s,dateien,_))
], null),"sichern"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.datei_management,dateien,dep.components.datensicherung.datei_verwaltung.call(null,buttons,dateien,welt__$1)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
