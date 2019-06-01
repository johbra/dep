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
goog.require('cljs.core.async');
dep.state.erzeuge_studienrichtungen = (function dep$state$erzeuge_studienrichtungen(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"WirtschaftsinformatikBachelor","WirtschaftsinformatikBachelor",-1188865524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wirtschaftsinformatik",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null),new cljs.core.Keyword(null,"WirtschaftsingenieurwesenBachelor","WirtschaftsingenieurwesenBachelor",366583327),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Wirtschaftsingenieurwesen",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null),new cljs.core.Keyword(null,"BetriebswirtschaftslehreBachelor","BetriebswirtschaftslehreBachelor",24961541),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Betriebswirtschaftslehre",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null),new cljs.core.Keyword(null,"AngewandteInformatikBachelor","AngewandteInformatikBachelor",16737598),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Angewandte Informatik",new cljs.core.Keyword(null,"abschluss","abschluss",-1728018657),"Bachelor"], null)], null);
});
dep.state.WELT = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"jahre","jahre",2053865477),new cljs.core.Keyword(null,"aktualisiere-plan-fn","aktualisiere-plan-fn",1929445285),new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),new cljs.core.Keyword(null,"dozenten","dozenten",688305194),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),new cljs.core.Keyword(null,"quartal","quartal",-467113586),new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.Keyword(null,"manipels","manipels",626202456),new cljs.core.Keyword(null,"lven","lven",294854909)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2016),(2017),(2018),(2019)], null),null,(2016),dep.model.dozent.erzeuge_dozenten.call(null),dep.state.erzeuge_studienrichtungen.call(null),dep.model.quartal.__GT_Quartal.call(null,(4),(2015)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
dep.state.moduls = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__16170__auto___20478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___20478){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___20478){
return (function (state_20471){
var state_val_20472 = (state_20471[(1)]);
if((state_val_20472 === (1))){
var inst_20465 = dep.helpers.moduleaussixx.module_aus_datei.call(null,"module.db",dep.state.moduls);
var state_20471__$1 = state_20471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20471__$1,(2),inst_20465);
} else {
if((state_val_20472 === (2))){
var inst_20467 = (state_20471[(2)]);
var inst_20468 = cljs.core.deref.call(null,dep.state.moduls);
var inst_20469 = cljs.core.swap_BANG_.call(null,dep.state.WELT,cljs.core.assoc,new cljs.core.Keyword(null,"module","module",1424618191),inst_20468);
var state_20471__$1 = (function (){var statearr_20473 = state_20471;
(statearr_20473[(7)] = inst_20467);

return statearr_20473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20471__$1,inst_20469);
} else {
return null;
}
}
});})(c__16170__auto___20478))
;
return ((function (switch__16079__auto__,c__16170__auto___20478){
return (function() {
var dep$state$state_machine__16080__auto__ = null;
var dep$state$state_machine__16080__auto____0 = (function (){
var statearr_20474 = [null,null,null,null,null,null,null,null];
(statearr_20474[(0)] = dep$state$state_machine__16080__auto__);

(statearr_20474[(1)] = (1));

return statearr_20474;
});
var dep$state$state_machine__16080__auto____1 = (function (state_20471){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_20471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e20475){if((e20475 instanceof Object)){
var ex__16083__auto__ = e20475;
var statearr_20476_20479 = state_20471;
(statearr_20476_20479[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20480 = state_20471;
state_20471 = G__20480;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
dep$state$state_machine__16080__auto__ = function(state_20471){
switch(arguments.length){
case 0:
return dep$state$state_machine__16080__auto____0.call(this);
case 1:
return dep$state$state_machine__16080__auto____1.call(this,state_20471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$state$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = dep$state$state_machine__16080__auto____0;
dep$state$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = dep$state$state_machine__16080__auto____1;
return dep$state$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___20478))
})();
var state__16172__auto__ = (function (){var statearr_20477 = f__16171__auto__.call(null);
(statearr_20477[(6)] = c__16170__auto___20478);

return statearr_20477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___20478))
);

dep.state.mpls = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__16170__auto___20494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___20494){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___20494){
return (function (state_20487){
var state_val_20488 = (state_20487[(1)]);
if((state_val_20488 === (1))){
var inst_20481 = dep.helpers.manipelaussixx.manipel_aus_datei.call(null,"m.db",dep.state.mpls);
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20487__$1,(2),inst_20481);
} else {
if((state_val_20488 === (2))){
var inst_20483 = (state_20487[(2)]);
var inst_20484 = cljs.core.deref.call(null,dep.state.mpls);
var inst_20485 = cljs.core.swap_BANG_.call(null,dep.state.WELT,cljs.core.assoc,new cljs.core.Keyword(null,"manipels","manipels",626202456),inst_20484);
var state_20487__$1 = (function (){var statearr_20489 = state_20487;
(statearr_20489[(7)] = inst_20483);

return statearr_20489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20487__$1,inst_20485);
} else {
return null;
}
}
});})(c__16170__auto___20494))
;
return ((function (switch__16079__auto__,c__16170__auto___20494){
return (function() {
var dep$state$state_machine__16080__auto__ = null;
var dep$state$state_machine__16080__auto____0 = (function (){
var statearr_20490 = [null,null,null,null,null,null,null,null];
(statearr_20490[(0)] = dep$state$state_machine__16080__auto__);

(statearr_20490[(1)] = (1));

return statearr_20490;
});
var dep$state$state_machine__16080__auto____1 = (function (state_20487){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_20487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e20491){if((e20491 instanceof Object)){
var ex__16083__auto__ = e20491;
var statearr_20492_20495 = state_20487;
(statearr_20492_20495[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20496 = state_20487;
state_20487 = G__20496;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
dep$state$state_machine__16080__auto__ = function(state_20487){
switch(arguments.length){
case 0:
return dep$state$state_machine__16080__auto____0.call(this);
case 1:
return dep$state$state_machine__16080__auto____1.call(this,state_20487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$state$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = dep$state$state_machine__16080__auto____0;
dep$state$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = dep$state$state_machine__16080__auto____1;
return dep$state$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___20494))
})();
var state__16172__auto__ = (function (){var statearr_20493 = f__16171__auto__.call(null);
(statearr_20493[(6)] = c__16170__auto___20494);

return statearr_20493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___20494))
);


//# sourceMappingURL=state.js.map
