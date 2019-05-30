// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c = cljs.core.async.chan.call(null);
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__,c){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__,c){
return (function (state_17720){
var state_val_17721 = (state_17720[(1)]);
if((state_val_17721 === (1))){
var inst_17705 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_17706 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_17707 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_17708 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_17705,"text/plain; charset=utf-8"];
var inst_17709 = cljs.core.PersistentHashMap.fromArrays(inst_17707,inst_17708);
var inst_17710 = [false,inst_17709];
var inst_17711 = cljs.core.PersistentHashMap.fromArrays(inst_17706,inst_17710);
var inst_17712 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_17711);
var state_17720__$1 = state_17720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17720__$1,(2),inst_17712);
} else {
if((state_val_17721 === (2))){
var inst_17714 = (state_17720[(2)]);
var inst_17715 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_17714);
var inst_17716 = f.call(null,inst_17715);
var inst_17717 = cljs.core.vec.call(null,inst_17716);
var inst_17718 = cljs.core.reset_BANG_.call(null,w,inst_17717);
var state_17720__$1 = state_17720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17720__$1,inst_17718);
} else {
return null;
}
}
});})(c__15321__auto__,c))
;
return ((function (switch__15298__auto__,c__15321__auto__,c){
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0 = (function (){
var statearr_17722 = [null,null,null,null,null,null,null];
(statearr_17722[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__);

(statearr_17722[(1)] = (1));

return statearr_17722;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1 = (function (state_17720){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_17720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e17723){if((e17723 instanceof Object)){
var ex__15302__auto__ = e17723;
var statearr_17724_17726 = state_17720;
(statearr_17724_17726[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17727 = state_17720;
state_17720 = G__17727;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__ = function(state_17720){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1.call(this,state_17720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__,c))
})();
var state__15323__auto__ = (function (){var statearr_17725 = f__15322__auto__.call(null);
(statearr_17725[(6)] = c__15321__auto__);

return statearr_17725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__,c))
);

return c__15321__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
