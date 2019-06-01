// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c = cljs.core.async.chan.call(null);
var c__16170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto__,c){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto__,c){
return (function (state_18457){
var state_val_18458 = (state_18457[(1)]);
if((state_val_18458 === (1))){
var inst_18442 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_18443 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_18444 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_18445 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_18442,"text/plain; charset=utf-8"];
var inst_18446 = cljs.core.PersistentHashMap.fromArrays(inst_18444,inst_18445);
var inst_18447 = [false,inst_18446];
var inst_18448 = cljs.core.PersistentHashMap.fromArrays(inst_18443,inst_18447);
var inst_18449 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_18448);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18457__$1,(2),inst_18449);
} else {
if((state_val_18458 === (2))){
var inst_18451 = (state_18457[(2)]);
var inst_18452 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_18451);
var inst_18453 = f.call(null,inst_18452);
var inst_18454 = cljs.core.vec.call(null,inst_18453);
var inst_18455 = cljs.core.reset_BANG_.call(null,w,inst_18454);
var state_18457__$1 = state_18457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18457__$1,inst_18455);
} else {
return null;
}
}
});})(c__16170__auto__,c))
;
return ((function (switch__16079__auto__,c__16170__auto__,c){
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto____0 = (function (){
var statearr_18459 = [null,null,null,null,null,null,null];
(statearr_18459[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto__);

(statearr_18459[(1)] = (1));

return statearr_18459;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto____1 = (function (state_18457){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_18457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e18460){if((e18460 instanceof Object)){
var ex__16083__auto__ = e18460;
var statearr_18461_18463 = state_18457;
(statearr_18461_18463[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18464 = state_18457;
state_18457 = G__18464;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto__ = function(state_18457){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto____1.call(this,state_18457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto__,c))
})();
var state__16172__auto__ = (function (){var statearr_18462 = f__16171__auto__.call(null);
(statearr_18462[(6)] = c__16170__auto__);

return statearr_18462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto__,c))
);

return c__16170__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
