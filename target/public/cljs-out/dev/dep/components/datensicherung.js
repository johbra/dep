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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__22700_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22700_SHARP_),string);
}),dateien));
});
/**
 * Enfernt die Datei d aus der welt und vom Datenträger.
 */
dep.components.datensicherung.loesche_datei = (function dep$components$datensicherung$loesche_datei(d,welt){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22713){
var state_val_22714 = (state_22713[(1)]);
if((state_val_22714 === (1))){
var inst_22702 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_22703 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_22702);
var state_22713__$1 = state_22713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22713__$1,(2),inst_22703);
} else {
if((state_val_22714 === (2))){
var inst_22705 = (state_22713[(2)]);
var inst_22706 = (function (){return ((function (inst_22705,state_val_22714,c__15321__auto__){
return (function (p1__22701_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22701_SHARP_));
});
;})(inst_22705,state_val_22714,c__15321__auto__))
})();
var inst_22707 = cljs.core.deref.call(null,welt);
var inst_22708 = new cljs.core.Keyword(null,"dateien","dateien",64338828).cljs$core$IFn$_invoke$arity$1(inst_22707);
var inst_22709 = cljs.core.remove.call(null,inst_22706,inst_22708);
var inst_22710 = cljs.core.vec.call(null,inst_22709);
var inst_22711 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_22710);
var state_22713__$1 = (function (){var statearr_22715 = state_22713;
(statearr_22715[(7)] = inst_22705);

return statearr_22715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22713__$1,inst_22711);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto__ = null;
var dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto____0 = (function (){
var statearr_22716 = [null,null,null,null,null,null,null,null];
(statearr_22716[(0)] = dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto__);

(statearr_22716[(1)] = (1));

return statearr_22716;
});
var dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto____1 = (function (state_22713){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22717){if((e22717 instanceof Object)){
var ex__15302__auto__ = e22717;
var statearr_22718_22720 = state_22713;
(statearr_22718_22720[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22721 = state_22713;
state_22713 = G__22721;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto__ = function(state_22713){
switch(arguments.length){
case 0:
return dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto____1.call(this,state_22713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto____0;
dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto____1;
return dep$components$datensicherung$loesche_datei_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22719 = f__15322__auto__.call(null);
(statearr_22719[(6)] = c__15321__auto__);

return statearr_22719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
/**
 * Restauriert den Welt-Zustand aus der edn-Datei d.
 */
dep.components.datensicherung.lade_welt_aus_datei = (function dep$components$datensicherung$lade_welt_aus_datei(d,welt){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22728){
var state_val_22729 = (state_22728[(1)]);
if((state_val_22729 === (1))){
var inst_22722 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_22723 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_22722);
var state_22728__$1 = state_22728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22728__$1,(2),inst_22723);
} else {
if((state_val_22729 === (2))){
var inst_22725 = (state_22728[(2)]);
var inst_22726 = cljs.core.reset_BANG_.call(null,welt,inst_22725);
var state_22728__$1 = state_22728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22728__$1,inst_22726);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto__ = null;
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto____0 = (function (){
var statearr_22730 = [null,null,null,null,null,null,null];
(statearr_22730[(0)] = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto__);

(statearr_22730[(1)] = (1));

return statearr_22730;
});
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto____1 = (function (state_22728){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22731){if((e22731 instanceof Object)){
var ex__15302__auto__ = e22731;
var statearr_22732_22734 = state_22728;
(statearr_22732_22734[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22735 = state_22728;
state_22728 = G__22735;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto__ = function(state_22728){
switch(arguments.length){
case 0:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto____1.call(this,state_22728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto____0;
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto____1;
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22733 = f__15322__auto__.call(null);
(statearr_22733[(6)] = c__15321__auto__);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
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
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22744){
var state_val_22745 = (state_22744[(1)]);
if((state_val_22745 === (1))){
var inst_22736 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_22744__$1 = state_22744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22744__$1,(2),inst_22736);
} else {
if((state_val_22745 === (2))){
var inst_22738 = (state_22744[(2)]);
var inst_22739 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_22744__$1 = (function (){var statearr_22746 = state_22744;
(statearr_22746[(7)] = inst_22738);

return statearr_22746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22744__$1,(3),inst_22739);
} else {
if((state_val_22745 === (3))){
var inst_22741 = (state_22744[(2)]);
var inst_22742 = cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_22741);
var state_22744__$1 = state_22744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22744__$1,inst_22742);
} else {
return null;
}
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto__ = null;
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto____0 = (function (){
var statearr_22747 = [null,null,null,null,null,null,null,null];
(statearr_22747[(0)] = dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto__);

(statearr_22747[(1)] = (1));

return statearr_22747;
});
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto____1 = (function (state_22744){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22748){if((e22748 instanceof Object)){
var ex__15302__auto__ = e22748;
var statearr_22749_22751 = state_22744;
(statearr_22749_22751[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22752 = state_22744;
state_22744 = G__22752;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto__ = function(state_22744){
switch(arguments.length){
case 0:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto____1.call(this,state_22744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto____0;
dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto____1;
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22750 = f__15322__auto__.call(null);
(statearr_22750[(6)] = c__15321__auto__);

return statearr_22750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
}
});
/**
 * Wandelt die dateien für die Darstellung als Tabelle um. 
 */
dep.components.datensicherung.dateien__GT_table = (function dep$components$datensicherung$dateien__GT_table(welt,dateien){
return cljs.core.mapv.call(null,(function (p1__22753_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22753_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__22753_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.loesche_datei.call(null,p1__22753_SHARP_,welt);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.lade_welt_aus_datei.call(null,p1__22753_SHARP_,welt);
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
var _ = (function (){var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__,buttons,s){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__,buttons,s){
return (function (state_22760){
var state_val_22761 = (state_22760[(1)]);
if((state_val_22761 === (1))){
var inst_22755 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22760__$1,(2),inst_22755);
} else {
if((state_val_22761 === (2))){
var inst_22757 = (state_22760[(2)]);
var inst_22758 = cljs.core.swap_BANG_.call(null,welt__$1,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_22757);
var state_22760__$1 = state_22760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22760__$1,inst_22758);
} else {
return null;
}
}
});})(c__15321__auto__,buttons,s))
;
return ((function (switch__15298__auto__,c__15321__auto__,buttons,s){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____0 = (function (){
var statearr_22762 = [null,null,null,null,null,null,null];
(statearr_22762[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__);

(statearr_22762[(1)] = (1));

return statearr_22762;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____1 = (function (state_22760){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22763){if((e22763 instanceof Object)){
var ex__15302__auto__ = e22763;
var statearr_22764_22784 = state_22760;
(statearr_22764_22784[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22785 = state_22760;
state_22760 = G__22785;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__ = function(state_22760){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____1.call(this,state_22760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__,buttons,s))
})();
var state__15323__auto__ = (function (){var statearr_22765 = f__15322__auto__.call(null);
(statearr_22765[(6)] = c__15321__auto__);

return statearr_22765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__,buttons,s))
);

return c__15321__auto__;
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group.form-inline","div.row.form-group.form-inline",-361636882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-md-5","label.col-md-5",-1504317970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"datei"], null),"Daten in Datei mit dem Namen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.col-md-4","input.form-control.col-md-4",1555518695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"pldaten.edn",new cljs.core.Keyword(null,"id","id",-1388402092),"datei",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (buttons,s,_){
return (function (p1__22754_SHARP_){
return cljs.core.reset_BANG_.call(null,s,p1__22754_SHARP_.target.value);
});})(buttons,s,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-default.col-md-3","button.btn-default.col-md-3",-1949324283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buttons,s,_){
return (function (){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__,buttons,s,_){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__,buttons,s,_){
return (function (state_22777){
var state_val_22778 = (state_22777[(1)]);
if((state_val_22778 === (1))){
var inst_22766 = cljs.core.deref.call(null,welt__$1);
var inst_22767 = cljs.core.prn_str.call(null,inst_22766);
var inst_22768 = cljs.core.deref.call(null,s);
var inst_22769 = dep.helpers.drop_file_stream.write_text.call(null,inst_22767,inst_22768);
var state_22777__$1 = state_22777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,(2),inst_22769);
} else {
if((state_val_22778 === (2))){
var inst_22771 = (state_22777[(2)]);
var inst_22772 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_22777__$1 = (function (){var statearr_22779 = state_22777;
(statearr_22779[(7)] = inst_22771);

return statearr_22779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,(3),inst_22772);
} else {
if((state_val_22778 === (3))){
var inst_22774 = (state_22777[(2)]);
var inst_22775 = cljs.core.swap_BANG_.call(null,welt__$1,cljs.core.assoc,new cljs.core.Keyword(null,"dateien","dateien",64338828),inst_22774);
var state_22777__$1 = state_22777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22777__$1,inst_22775);
} else {
return null;
}
}
}
});})(c__15321__auto__,buttons,s,_))
;
return ((function (switch__15298__auto__,c__15321__auto__,buttons,s,_){
return (function() {
var dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__ = null;
var dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____0 = (function (){
var statearr_22780 = [null,null,null,null,null,null,null,null];
(statearr_22780[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__);

(statearr_22780[(1)] = (1));

return statearr_22780;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____1 = (function (state_22777){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22781){if((e22781 instanceof Object)){
var ex__15302__auto__ = e22781;
var statearr_22782_22786 = state_22777;
(statearr_22782_22786[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22787 = state_22777;
state_22777 = G__22787;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15299__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__,buttons,s,_))
})();
var state__15323__auto__ = (function (){var statearr_22783 = f__15322__auto__.call(null);
(statearr_22783[(6)] = c__15321__auto__);

return statearr_22783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__,buttons,s,_))
);

return c__15321__auto__;
});})(buttons,s,_))
], null),"sichern"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt__$1,dep.components.datensicherung.datei_verwaltung.call(null,buttons,welt__$1)], null)], null)], null);
});
});

//# sourceMappingURL=datensicherung.js.map
