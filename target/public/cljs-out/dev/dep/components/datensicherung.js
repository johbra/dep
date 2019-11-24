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
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__19763_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19763_SHARP_),string);
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
return (function (state_19770){
var state_val_19771 = (state_19770[(1)]);
if((state_val_19771 === (1))){
var inst_19764 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_19765 = dep.helpers.drop_file_stream.delete_file_named.call(null,inst_19764);
var state_19770__$1 = state_19770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19770__$1,(2),inst_19765);
} else {
if((state_val_19771 === (2))){
var inst_19767 = (state_19770[(2)]);
var inst_19768 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_19770__$1 = (function (){var statearr_19772 = state_19770;
(statearr_19772[(7)] = inst_19767);

return statearr_19772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19770__$1,inst_19768);
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
var statearr_19773 = [null,null,null,null,null,null,null,null];
(statearr_19773[(0)] = dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__);

(statearr_19773[(1)] = (1));

return statearr_19773;
});
var dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____1 = (function (state_19770){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_19770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e19774){if((e19774 instanceof Object)){
var ex__15503__auto__ = e19774;
var statearr_19775_19777 = state_19770;
(statearr_19775_19777[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19778 = state_19770;
state_19770 = G__19778;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__ = function(state_19770){
switch(arguments.length){
case 0:
return dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____1.call(this,state_19770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____0;
dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto____1;
return dep$components$datensicherung$loesche_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_19776 = f__15523__auto__.call(null);
(statearr_19776[(6)] = c__15522__auto__);

return statearr_19776;
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
return (function (state_19785){
var state_val_19786 = (state_19785[(1)]);
if((state_val_19786 === (1))){
var inst_19779 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(d);
var inst_19780 = dep.helpers.drop_file_stream.read_edn_file.call(null,inst_19779);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19785__$1,(2),inst_19780);
} else {
if((state_val_19786 === (2))){
var inst_19782 = (state_19785[(2)]);
var inst_19783 = cljs.core.reset_BANG_.call(null,welt,inst_19782);
var state_19785__$1 = state_19785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19785__$1,inst_19783);
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
var statearr_19787 = [null,null,null,null,null,null,null];
(statearr_19787[(0)] = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__);

(statearr_19787[(1)] = (1));

return statearr_19787;
});
var dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____1 = (function (state_19785){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_19785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e19788){if((e19788 instanceof Object)){
var ex__15503__auto__ = e19788;
var statearr_19789_19791 = state_19785;
(statearr_19789_19791[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19792 = state_19785;
state_19785 = G__19792;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__ = function(state_19785){
switch(arguments.length){
case 0:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____1.call(this,state_19785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____0;
dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto____1;
return dep$components$datensicherung$lade_welt_aus_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_19790 = f__15523__auto__.call(null);
(statearr_19790[(6)] = c__15522__auto__);

return statearr_19790;
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
return (function (state_19798){
var state_val_19799 = (state_19798[(1)]);
if((state_val_19799 === (1))){
var inst_19793 = dep.helpers.drop_file_stream.rename_file.call(null,alter_name,neuer_name);
var state_19798__$1 = state_19798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19798__$1,(2),inst_19793);
} else {
if((state_val_19799 === (2))){
var inst_19795 = (state_19798[(2)]);
var inst_19796 = cljs.core.swap_BANG_.call(null,dep.components.datensicherung.forcer,cljs.core.inc);
var state_19798__$1 = (function (){var statearr_19800 = state_19798;
(statearr_19800[(7)] = inst_19795);

return statearr_19800;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19798__$1,inst_19796);
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
var statearr_19801 = [null,null,null,null,null,null,null,null];
(statearr_19801[(0)] = dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__);

(statearr_19801[(1)] = (1));

return statearr_19801;
});
var dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____1 = (function (state_19798){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_19798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e19802){if((e19802 instanceof Object)){
var ex__15503__auto__ = e19802;
var statearr_19803_19805 = state_19798;
(statearr_19803_19805[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19806 = state_19798;
state_19798 = G__19806;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__ = function(state_19798){
switch(arguments.length){
case 0:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____1.call(this,state_19798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____0;
dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto____1;
return dep$components$datensicherung$umbenenne_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_19804 = f__15523__auto__.call(null);
(statearr_19804[(6)] = c__15522__auto__);

return statearr_19804;
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
return cljs.core.mapv.call(null,(function (p1__19807_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Zeitstempel","Zeitstempel",-1709900299),new cljs.core.Keyword(null,"Aktion1","Aktion1",-408347499),new cljs.core.Keyword(null,"Aktion2","Aktion2",-818336572)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19807_SHARP_),new cljs.core.Keyword(null,"client_modified","client_modified",980354116).cljs$core$IFn$_invoke$arity$1(p1__19807_SHARP_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.loesche_datei.call(null,p1__19807_SHARP_);
})], null),"entfernen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.datensicherung.lade_welt_aus_datei.call(null,p1__19807_SHARP_,welt);
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
return (function (state_19814){
var state_val_19815 = (state_19814[(1)]);
if((state_val_19815 === (1))){
var inst_19809 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19814__$1,(2),inst_19809);
} else {
if((state_val_19815 === (2))){
var inst_19811 = (state_19814[(2)]);
var inst_19812 = cljs.core.reset_BANG_.call(null,dateien,inst_19811);
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19814__$1,inst_19812);
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
var statearr_19816 = [null,null,null,null,null,null,null];
(statearr_19816[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__);

(statearr_19816[(1)] = (1));

return statearr_19816;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1 = (function (state_19814){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_19814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e19817){if((e19817 instanceof Object)){
var ex__15503__auto__ = e19817;
var statearr_19818_19838 = state_19814;
(statearr_19818_19838[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19839 = state_19814;
state_19814 = G__19839;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__ = function(state_19814){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1.call(this,state_19814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__,buttons,s,dateien))
})();
var state__15524__auto__ = (function (){var statearr_19819 = f__15523__auto__.call(null);
(statearr_19819[(6)] = c__15522__auto__);

return statearr_19819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__,buttons,s,dateien))
);

return c__15522__auto__;
})();
cljs.core.deref.call(null,dep.components.datensicherung.forcer);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Planungsdaten in Datei speichern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.form-group.form-inline","div.row.form-group.form-inline",-361636882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.col-md-5","label.col-md-5",-1504317970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"datei"], null),"Daten in Datei mit dem Namen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.col-md-4","input.form-control.col-md-4",1555518695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),"pldaten.edn",new cljs.core.Keyword(null,"id","id",-1388402092),"datei",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (buttons,s,dateien,_){
return (function (p1__19808_SHARP_){
return cljs.core.reset_BANG_.call(null,s,p1__19808_SHARP_.target.value);
});})(buttons,s,dateien,_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-default.col-md-3","button.btn-default.col-md-3",-1949324283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (buttons,s,dateien,_){
return (function (){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__,buttons,s,dateien,_){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__,buttons,s,dateien,_){
return (function (state_19831){
var state_val_19832 = (state_19831[(1)]);
if((state_val_19832 === (1))){
var inst_19820 = cljs.core.deref.call(null,welt__$1);
var inst_19821 = cljs.core.prn_str.call(null,inst_19820);
var inst_19822 = cljs.core.deref.call(null,s);
var inst_19823 = dep.helpers.drop_file_stream.write_text.call(null,inst_19821,inst_19822);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19831__$1,(2),inst_19823);
} else {
if((state_val_19832 === (2))){
var inst_19825 = (state_19831[(2)]);
var inst_19826 = dep.helpers.drop_file_stream.list_folder.call(null);
var state_19831__$1 = (function (){var statearr_19833 = state_19831;
(statearr_19833[(7)] = inst_19825);

return statearr_19833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19831__$1,(3),inst_19826);
} else {
if((state_val_19832 === (3))){
var inst_19828 = (state_19831[(2)]);
var inst_19829 = cljs.core.reset_BANG_.call(null,dateien,inst_19828);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19831__$1,inst_19829);
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
var statearr_19834 = [null,null,null,null,null,null,null,null];
(statearr_19834[(0)] = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__);

(statearr_19834[(1)] = (1));

return statearr_19834;
});
var dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1 = (function (state_19831){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_19831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e19835){if((e19835 instanceof Object)){
var ex__15503__auto__ = e19835;
var statearr_19836_19840 = state_19831;
(statearr_19836_19840[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19841 = state_19831;
state_19831 = G__19841;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__ = function(state_19831){
switch(arguments.length){
case 0:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1.call(this,state_19831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____0;
dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$components$datensicherung$datensicherung_$_state_machine__15500__auto____1;
return dep$components$datensicherung$datensicherung_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__,buttons,s,dateien,_))
})();
var state__15524__auto__ = (function (){var statearr_19837 = f__15523__auto__.call(null);
(statearr_19837[(6)] = c__15522__auto__);

return statearr_19837;
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
