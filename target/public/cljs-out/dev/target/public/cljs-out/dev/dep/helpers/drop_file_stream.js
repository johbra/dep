// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c = cljs.core.async.chan.call(null);
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__,c){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__,c){
return (function (state_15594){
var state_val_15595 = (state_15594[(1)]);
if((state_val_15595 === (1))){
var inst_15579 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_15580 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_15581 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_15582 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_15579,"text/plain; charset=utf-8"];
var inst_15583 = cljs.core.PersistentHashMap.fromArrays(inst_15581,inst_15582);
var inst_15584 = [false,inst_15583];
var inst_15585 = cljs.core.PersistentHashMap.fromArrays(inst_15580,inst_15584);
var inst_15586 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_15585);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15594__$1,(2),inst_15586);
} else {
if((state_val_15595 === (2))){
var inst_15588 = (state_15594[(2)]);
var inst_15589 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_15588);
var inst_15590 = f.call(null,inst_15589);
var inst_15591 = cljs.core.vec.call(null,inst_15590);
var inst_15592 = cljs.core.reset_BANG_.call(null,w,inst_15591);
var state_15594__$1 = state_15594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15594__$1,inst_15592);
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
var statearr_15596 = [null,null,null,null,null,null,null];
(statearr_15596[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__);

(statearr_15596[(1)] = (1));

return statearr_15596;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1 = (function (state_15594){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_15594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e15597){if((e15597 instanceof Object)){
var ex__15302__auto__ = e15597;
var statearr_15598_15600 = state_15594;
(statearr_15598_15600[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15601 = state_15594;
state_15594 = G__15601;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__ = function(state_15594){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1.call(this,state_15594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__,c))
})();
var state__15323__auto__ = (function (){var statearr_15599 = f__15322__auto__.call(null);
(statearr_15599[(6)] = c__15321__auto__);

return statearr_15599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__,c))
);

return c__15321__auto__;
});
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_15613){
var state_val_15614 = (state_15613[(1)]);
if((state_val_15614 === (1))){
var inst_15602 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_15603 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_15604 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_15605 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_15602,"application/octet-stream"];
var inst_15606 = cljs.core.PersistentHashMap.fromArrays(inst_15604,inst_15605);
var inst_15607 = [false,inst_15606,text];
var inst_15608 = cljs.core.PersistentHashMap.fromArrays(inst_15603,inst_15607);
var inst_15609 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_15608);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15613__$1,(2),inst_15609);
} else {
if((state_val_15614 === (2))){
var inst_15611 = (state_15613[(2)]);
var state_15613__$1 = state_15613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15613__$1,inst_15611);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____0 = (function (){
var statearr_15615 = [null,null,null,null,null,null,null];
(statearr_15615[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__);

(statearr_15615[(1)] = (1));

return statearr_15615;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____1 = (function (state_15613){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_15613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e15616){if((e15616 instanceof Object)){
var ex__15302__auto__ = e15616;
var statearr_15617_15619 = state_15613;
(statearr_15617_15619[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15620 = state_15613;
state_15613 = G__15620;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__ = function(state_15613){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____1.call(this,state_15613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_15618 = f__15322__auto__.call(null);
(statearr_15618[(6)] = c__15321__auto__);

return statearr_15618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(w){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_15632){
var state_val_15633 = (state_15632[(1)]);
if((state_val_15633 === (1))){
var inst_15621 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_15622 = ["Authorization","Content-Type"];
var inst_15623 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_15624 = cljs.core.PersistentHashMap.fromArrays(inst_15622,inst_15623);
var inst_15625 = [false,inst_15624];
var inst_15626 = cljs.core.PersistentHashMap.fromArrays(inst_15621,inst_15625);
var inst_15627 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_15626);
var state_15632__$1 = state_15632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15632__$1,(2),inst_15627);
} else {
if((state_val_15633 === (2))){
var inst_15629 = (state_15632[(2)]);
var inst_15630 = cljs.core.reset_BANG_.call(null,w,inst_15629);
var state_15632__$1 = state_15632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15632__$1,inst_15630);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____0 = (function (){
var statearr_15634 = [null,null,null,null,null,null,null];
(statearr_15634[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__);

(statearr_15634[(1)] = (1));

return statearr_15634;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____1 = (function (state_15632){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_15632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e15635){if((e15635 instanceof Object)){
var ex__15302__auto__ = e15635;
var statearr_15636_15638 = state_15632;
(statearr_15636_15638[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15639 = state_15632;
state_15632 = G__15639;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__ = function(state_15632){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____1.call(this,state_15632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_15637 = f__15322__auto__.call(null);
(statearr_15637[(6)] = c__15321__auto__);

return statearr_15637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
dep.helpers.drop_file_stream.w = reagent.core.atom.call(null,null);
cljs.core.deref.call(null,dep.helpers.drop_file_stream.w);
dep.helpers.drop_file_stream.list_folder.call(null,dep.helpers.drop_file_stream.w);
dep.helpers.drop_file_stream.write_text.call(null,"xxx","x.text");

//# sourceMappingURL=drop_file_stream.js.map
