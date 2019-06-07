// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.model.manipel');
goog.require('dep.model.modul');
goog.require('dep.model.quartal');
goog.require('dep.model.dozent');
goog.require('dep.helpers.manipelaussixx');
goog.require('dep.helpers.moduleaussixx');
goog.require('dep.helpers.drop_file_stream');
goog.require('cljs.core.async');
dep.state.erzeuge_studienrichtungen = (function dep$state$erzeuge_studienrichtungen(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"WirtschaftsinformatikBachelor","WirtschaftsinformatikBachelor",-1188865524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wirtschaftsinformatik",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null),new cljs.core.Keyword(null,"WirtschaftsingenieurwesenBachelor","WirtschaftsingenieurwesenBachelor",366583327),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wirtschaftsingenieurwesen",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null),new cljs.core.Keyword(null,"BetriebswirtschaftslehreBachelor","BetriebswirtschaftslehreBachelor",24961541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Betriebswirtschaftslehre",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null),new cljs.core.Keyword(null,"AngewandteInformatikBachelor","AngewandteInformatikBachelor",16737598),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Angewandte Informatik",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null)], null);
});
dep.state.WELT = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"jahre","jahre",2053865477),new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),new cljs.core.Keyword(null,"dozenten","dozenten",688305194),new cljs.core.Keyword(null,"dateien","dateien",64338828),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),new cljs.core.Keyword(null,"quartal","quartal",-467113586),new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.Keyword(null,"manipels","manipels",626202456),new cljs.core.Keyword(null,"lven","lven",294854909)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2016),(2017),(2018),(2019)], null),(2016),dep.model.dozent.erzeuge_dozenten.call(null),cljs.core.PersistentVector.EMPTY,dep.state.erzeuge_studienrichtungen.call(null),dep.model.quartal.__GT_Quartal.call(null,(4),(2015)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
dep.state.moduls = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__15321__auto___22571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto___22571){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto___22571){
return (function (state_22564){
var state_val_22565 = (state_22564[(1)]);
if((state_val_22565 === (1))){
var inst_22558 = dep.helpers.moduleaussixx.module_aus_datei.call(null,"module.db",dep.state.moduls);
var state_22564__$1 = state_22564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22564__$1,(2),inst_22558);
} else {
if((state_val_22565 === (2))){
var inst_22560 = (state_22564[(2)]);
var inst_22561 = cljs.core.deref.call(null,dep.state.moduls);
var inst_22562 = cljs.core.swap_BANG_.call(null,dep.state.WELT,cljs.core.assoc,new cljs.core.Keyword(null,"module","module",1424618191),inst_22561);
var state_22564__$1 = (function (){var statearr_22566 = state_22564;
(statearr_22566[(7)] = inst_22560);

return statearr_22566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22564__$1,inst_22562);
} else {
return null;
}
}
});})(c__15321__auto___22571))
;
return ((function (switch__15298__auto__,c__15321__auto___22571){
return (function() {
var dep$state$state_machine__15299__auto__ = null;
var dep$state$state_machine__15299__auto____0 = (function (){
var statearr_22567 = [null,null,null,null,null,null,null,null];
(statearr_22567[(0)] = dep$state$state_machine__15299__auto__);

(statearr_22567[(1)] = (1));

return statearr_22567;
});
var dep$state$state_machine__15299__auto____1 = (function (state_22564){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22568){if((e22568 instanceof Object)){
var ex__15302__auto__ = e22568;
var statearr_22569_22572 = state_22564;
(statearr_22569_22572[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22573 = state_22564;
state_22564 = G__22573;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$state$state_machine__15299__auto__ = function(state_22564){
switch(arguments.length){
case 0:
return dep$state$state_machine__15299__auto____0.call(this);
case 1:
return dep$state$state_machine__15299__auto____1.call(this,state_22564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$state$state_machine__15299__auto____0;
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$state$state_machine__15299__auto____1;
return dep$state$state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto___22571))
})();
var state__15323__auto__ = (function (){var statearr_22570 = f__15322__auto__.call(null);
(statearr_22570[(6)] = c__15321__auto___22571);

return statearr_22570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto___22571))
);

dep.state.mpls = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__15321__auto___22587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto___22587){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto___22587){
return (function (state_22580){
var state_val_22581 = (state_22580[(1)]);
if((state_val_22581 === (1))){
var inst_22574 = dep.helpers.manipelaussixx.manipel_aus_datei.call(null,"m.db",dep.state.mpls);
var state_22580__$1 = state_22580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22580__$1,(2),inst_22574);
} else {
if((state_val_22581 === (2))){
var inst_22576 = (state_22580[(2)]);
var inst_22577 = cljs.core.deref.call(null,dep.state.mpls);
var inst_22578 = cljs.core.swap_BANG_.call(null,dep.state.WELT,cljs.core.assoc,new cljs.core.Keyword(null,"manipels","manipels",626202456),inst_22577);
var state_22580__$1 = (function (){var statearr_22582 = state_22580;
(statearr_22582[(7)] = inst_22576);

return statearr_22582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22580__$1,inst_22578);
} else {
return null;
}
}
});})(c__15321__auto___22587))
;
return ((function (switch__15298__auto__,c__15321__auto___22587){
return (function() {
var dep$state$state_machine__15299__auto__ = null;
var dep$state$state_machine__15299__auto____0 = (function (){
var statearr_22583 = [null,null,null,null,null,null,null,null];
(statearr_22583[(0)] = dep$state$state_machine__15299__auto__);

(statearr_22583[(1)] = (1));

return statearr_22583;
});
var dep$state$state_machine__15299__auto____1 = (function (state_22580){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22584){if((e22584 instanceof Object)){
var ex__15302__auto__ = e22584;
var statearr_22585_22588 = state_22580;
(statearr_22585_22588[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22589 = state_22580;
state_22580 = G__22589;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$state$state_machine__15299__auto__ = function(state_22580){
switch(arguments.length){
case 0:
return dep$state$state_machine__15299__auto____0.call(this);
case 1:
return dep$state$state_machine__15299__auto____1.call(this,state_22580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$state$state_machine__15299__auto____0;
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$state$state_machine__15299__auto____1;
return dep$state$state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto___22587))
})();
var state__15323__auto__ = (function (){var statearr_22586 = f__15322__auto__.call(null);
(statearr_22586[(6)] = c__15321__auto___22587);

return statearr_22586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto___22587))
);


//# sourceMappingURL=state.js.map
