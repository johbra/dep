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
var c__15321__auto___16785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto___16785){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto___16785){
return (function (state_16778){
var state_val_16779 = (state_16778[(1)]);
if((state_val_16779 === (1))){
var inst_16772 = dep.helpers.moduleaussixx.module_aus_datei.call(null,"module.db",dep.state.moduls);
var state_16778__$1 = state_16778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16778__$1,(2),inst_16772);
} else {
if((state_val_16779 === (2))){
var inst_16774 = (state_16778[(2)]);
var inst_16775 = cljs.core.deref.call(null,dep.state.moduls);
var inst_16776 = cljs.core.swap_BANG_.call(null,dep.state.WELT,cljs.core.assoc,new cljs.core.Keyword(null,"module","module",1424618191),inst_16775);
var state_16778__$1 = (function (){var statearr_16780 = state_16778;
(statearr_16780[(7)] = inst_16774);

return statearr_16780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16778__$1,inst_16776);
} else {
return null;
}
}
});})(c__15321__auto___16785))
;
return ((function (switch__15298__auto__,c__15321__auto___16785){
return (function() {
var dep$state$state_machine__15299__auto__ = null;
var dep$state$state_machine__15299__auto____0 = (function (){
var statearr_16781 = [null,null,null,null,null,null,null,null];
(statearr_16781[(0)] = dep$state$state_machine__15299__auto__);

(statearr_16781[(1)] = (1));

return statearr_16781;
});
var dep$state$state_machine__15299__auto____1 = (function (state_16778){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_16778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e16782){if((e16782 instanceof Object)){
var ex__15302__auto__ = e16782;
var statearr_16783_16786 = state_16778;
(statearr_16783_16786[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16787 = state_16778;
state_16778 = G__16787;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$state$state_machine__15299__auto__ = function(state_16778){
switch(arguments.length){
case 0:
return dep$state$state_machine__15299__auto____0.call(this);
case 1:
return dep$state$state_machine__15299__auto____1.call(this,state_16778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$state$state_machine__15299__auto____0;
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$state$state_machine__15299__auto____1;
return dep$state$state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto___16785))
})();
var state__15323__auto__ = (function (){var statearr_16784 = f__15322__auto__.call(null);
(statearr_16784[(6)] = c__15321__auto___16785);

return statearr_16784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto___16785))
);

dep.state.mpls = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var c__15321__auto___16801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto___16801){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto___16801){
return (function (state_16794){
var state_val_16795 = (state_16794[(1)]);
if((state_val_16795 === (1))){
var inst_16788 = dep.helpers.manipelaussixx.manipel_aus_datei.call(null,"m.db",dep.state.mpls);
var state_16794__$1 = state_16794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16794__$1,(2),inst_16788);
} else {
if((state_val_16795 === (2))){
var inst_16790 = (state_16794[(2)]);
var inst_16791 = cljs.core.deref.call(null,dep.state.mpls);
var inst_16792 = cljs.core.swap_BANG_.call(null,dep.state.WELT,cljs.core.assoc,new cljs.core.Keyword(null,"manipels","manipels",626202456),inst_16791);
var state_16794__$1 = (function (){var statearr_16796 = state_16794;
(statearr_16796[(7)] = inst_16790);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16794__$1,inst_16792);
} else {
return null;
}
}
});})(c__15321__auto___16801))
;
return ((function (switch__15298__auto__,c__15321__auto___16801){
return (function() {
var dep$state$state_machine__15299__auto__ = null;
var dep$state$state_machine__15299__auto____0 = (function (){
var statearr_16797 = [null,null,null,null,null,null,null,null];
(statearr_16797[(0)] = dep$state$state_machine__15299__auto__);

(statearr_16797[(1)] = (1));

return statearr_16797;
});
var dep$state$state_machine__15299__auto____1 = (function (state_16794){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_16794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e16798){if((e16798 instanceof Object)){
var ex__15302__auto__ = e16798;
var statearr_16799_16802 = state_16794;
(statearr_16799_16802[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16803 = state_16794;
state_16794 = G__16803;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$state$state_machine__15299__auto__ = function(state_16794){
switch(arguments.length){
case 0:
return dep$state$state_machine__15299__auto____0.call(this);
case 1:
return dep$state$state_machine__15299__auto____1.call(this,state_16794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$state$state_machine__15299__auto____0;
dep$state$state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$state$state_machine__15299__auto____1;
return dep$state$state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto___16801))
})();
var state__15323__auto__ = (function (){var statearr_16800 = f__15322__auto__.call(null);
(statearr_16800[(6)] = c__15321__auto___16801);

return statearr_16800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto___16801))
);


//# sourceMappingURL=state.js.map
