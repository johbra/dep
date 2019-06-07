// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22426){
var state_val_22427 = (state_22426[(1)]);
if((state_val_22427 === (1))){
var inst_22411 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_22412 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_22413 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_22414 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_22411,"text/plain; charset=utf-8"];
var inst_22415 = cljs.core.PersistentHashMap.fromArrays(inst_22413,inst_22414);
var inst_22416 = [false,inst_22415];
var inst_22417 = cljs.core.PersistentHashMap.fromArrays(inst_22412,inst_22416);
var inst_22418 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_22417);
var state_22426__$1 = state_22426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22426__$1,(2),inst_22418);
} else {
if((state_val_22427 === (2))){
var inst_22420 = (state_22426[(2)]);
var inst_22421 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_22420);
var inst_22422 = f.call(null,inst_22421);
var inst_22423 = cljs.core.vec.call(null,inst_22422);
var inst_22424 = cljs.core.reset_BANG_.call(null,w,inst_22423);
var state_22426__$1 = state_22426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22426__$1,inst_22424);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0 = (function (){
var statearr_22428 = [null,null,null,null,null,null,null];
(statearr_22428[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__);

(statearr_22428[(1)] = (1));

return statearr_22428;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1 = (function (state_22426){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22429){if((e22429 instanceof Object)){
var ex__15302__auto__ = e22429;
var statearr_22430_22432 = state_22426;
(statearr_22430_22432[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22433 = state_22426;
state_22426 = G__22433;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__ = function(state_22426){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1.call(this,state_22426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22431 = f__15322__auto__.call(null);
(statearr_22431[(6)] = c__15321__auto__);

return statearr_22431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22445){
var state_val_22446 = (state_22445[(1)]);
if((state_val_22446 === (1))){
var inst_22434 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_22435 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_22436 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_22437 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_22434,"application/octet-stream"];
var inst_22438 = cljs.core.PersistentHashMap.fromArrays(inst_22436,inst_22437);
var inst_22439 = [false,inst_22438,text];
var inst_22440 = cljs.core.PersistentHashMap.fromArrays(inst_22435,inst_22439);
var inst_22441 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_22440);
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22445__$1,(2),inst_22441);
} else {
if((state_val_22446 === (2))){
var inst_22443 = (state_22445[(2)]);
var state_22445__$1 = state_22445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22445__$1,inst_22443);
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
var statearr_22447 = [null,null,null,null,null,null,null];
(statearr_22447[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__);

(statearr_22447[(1)] = (1));

return statearr_22447;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____1 = (function (state_22445){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22448){if((e22448 instanceof Object)){
var ex__15302__auto__ = e22448;
var statearr_22449_22451 = state_22445;
(statearr_22449_22451[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22452 = state_22445;
state_22445 = G__22452;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__ = function(state_22445){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____1.call(this,state_22445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22450 = f__15322__auto__.call(null);
(statearr_22450[(6)] = c__15321__auto__);

return statearr_22450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22469){
var state_val_22470 = (state_22469[(1)]);
if((state_val_22470 === (1))){
var inst_22453 = ["{\"path\":\"\"}"].join('');
var inst_22454 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_22455 = ["Authorization","Content-Type"];
var inst_22456 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_22457 = cljs.core.PersistentHashMap.fromArrays(inst_22455,inst_22456);
var inst_22458 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_22459 = [""];
var inst_22460 = cljs.core.PersistentHashMap.fromArrays(inst_22458,inst_22459);
var inst_22461 = [false,inst_22457,inst_22460];
var inst_22462 = cljs.core.PersistentHashMap.fromArrays(inst_22454,inst_22461);
var inst_22463 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_22462);
var state_22469__$1 = (function (){var statearr_22471 = state_22469;
(statearr_22471[(7)] = inst_22453);

return statearr_22471;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22469__$1,(2),inst_22463);
} else {
if((state_val_22470 === (2))){
var inst_22465 = (state_22469[(2)]);
var inst_22466 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_22465);
var inst_22467 = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(inst_22466);
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22469__$1,inst_22467);
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
var statearr_22472 = [null,null,null,null,null,null,null,null];
(statearr_22472[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__);

(statearr_22472[(1)] = (1));

return statearr_22472;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____1 = (function (state_22469){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22473){if((e22473 instanceof Object)){
var ex__15302__auto__ = e22473;
var statearr_22474_22476 = state_22469;
(statearr_22474_22476[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22477 = state_22469;
state_22469 = G__22477;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__ = function(state_22469){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____1.call(this,state_22469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22475 = f__15322__auto__.call(null);
(statearr_22475[(6)] = c__15321__auto__);

return statearr_22475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22492){
var state_val_22493 = (state_22492[(1)]);
if((state_val_22493 === (1))){
var inst_22478 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_22479 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_22480 = ["Authorization"];
var inst_22481 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_22482 = cljs.core.PersistentHashMap.fromArrays(inst_22480,inst_22481);
var inst_22483 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_22484 = [inst_22478];
var inst_22485 = cljs.core.PersistentHashMap.fromArrays(inst_22483,inst_22484);
var inst_22486 = [false,inst_22482,inst_22485];
var inst_22487 = cljs.core.PersistentHashMap.fromArrays(inst_22479,inst_22486);
var inst_22488 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_22487);
var state_22492__$1 = state_22492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22492__$1,(2),inst_22488);
} else {
if((state_val_22493 === (2))){
var inst_22490 = (state_22492[(2)]);
var state_22492__$1 = state_22492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22492__$1,inst_22490);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto____0 = (function (){
var statearr_22494 = [null,null,null,null,null,null,null];
(statearr_22494[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto__);

(statearr_22494[(1)] = (1));

return statearr_22494;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto____1 = (function (state_22492){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22495){if((e22495 instanceof Object)){
var ex__15302__auto__ = e22495;
var statearr_22496_22498 = state_22492;
(statearr_22496_22498[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22499 = state_22492;
state_22492 = G__22499;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto__ = function(state_22492){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto____1.call(this,state_22492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22497 = f__15322__auto__.call(null);
(statearr_22497[(6)] = c__15321__auto__);

return statearr_22497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22513){
var state_val_22514 = (state_22513[(1)]);
if((state_val_22514 === (1))){
var inst_22500 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_22501 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_22502 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_22503 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_22500,"text/plain; charset=utf-8"];
var inst_22504 = cljs.core.PersistentHashMap.fromArrays(inst_22502,inst_22503);
var inst_22505 = [false,inst_22504];
var inst_22506 = cljs.core.PersistentHashMap.fromArrays(inst_22501,inst_22505);
var inst_22507 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_22506);
var state_22513__$1 = state_22513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22513__$1,(2),inst_22507);
} else {
if((state_val_22514 === (2))){
var inst_22509 = (state_22513[(2)]);
var inst_22510 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_22509);
var inst_22511 = cljs.reader.read_string.call(null,inst_22510);
var state_22513__$1 = state_22513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22513__$1,inst_22511);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto____0 = (function (){
var statearr_22515 = [null,null,null,null,null,null,null];
(statearr_22515[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto__);

(statearr_22515[(1)] = (1));

return statearr_22515;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto____1 = (function (state_22513){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22516){if((e22516 instanceof Object)){
var ex__15302__auto__ = e22516;
var statearr_22517_22519 = state_22513;
(statearr_22517_22519[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22520 = state_22513;
state_22513 = G__22520;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto__ = function(state_22513){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto____1.call(this,state_22513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22518 = f__15322__auto__.call(null);
(statearr_22518[(6)] = c__15321__auto__);

return statearr_22518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__15321__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15321__auto__){
return (function (){
var f__15322__auto__ = (function (){var switch__15298__auto__ = ((function (c__15321__auto__){
return (function (state_22536){
var state_val_22537 = (state_22536[(1)]);
if((state_val_22537 === (1))){
var inst_22521 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_22522 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_22523 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_22524 = ["Authorization"];
var inst_22525 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_22526 = cljs.core.PersistentHashMap.fromArrays(inst_22524,inst_22525);
var inst_22527 = [new cljs.core.Keyword(null,"from_path","from_path",-1479414992),new cljs.core.Keyword(null,"to_path","to_path",343919595)];
var inst_22528 = [inst_22521,inst_22522];
var inst_22529 = cljs.core.PersistentHashMap.fromArrays(inst_22527,inst_22528);
var inst_22530 = [false,inst_22526,inst_22529];
var inst_22531 = cljs.core.PersistentHashMap.fromArrays(inst_22523,inst_22530);
var inst_22532 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/move_v2",inst_22531);
var state_22536__$1 = state_22536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22536__$1,(2),inst_22532);
} else {
if((state_val_22537 === (2))){
var inst_22534 = (state_22536[(2)]);
var state_22536__$1 = state_22536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22536__$1,inst_22534);
} else {
return null;
}
}
});})(c__15321__auto__))
;
return ((function (switch__15298__auto__,c__15321__auto__){
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto____0 = (function (){
var statearr_22538 = [null,null,null,null,null,null,null];
(statearr_22538[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto__);

(statearr_22538[(1)] = (1));

return statearr_22538;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto____1 = (function (state_22536){
while(true){
var ret_value__15300__auto__ = (function (){try{while(true){
var result__15301__auto__ = switch__15298__auto__.call(null,state_22536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15301__auto__;
}
break;
}
}catch (e22539){if((e22539 instanceof Object)){
var ex__15302__auto__ = e22539;
var statearr_22540_22542 = state_22536;
(statearr_22540_22542[(5)] = ex__15302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22543 = state_22536;
state_22536 = G__22543;
continue;
} else {
return ret_value__15300__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto__ = function(state_22536){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto____1.call(this,state_22536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__15299__auto__;
})()
;})(switch__15298__auto__,c__15321__auto__))
})();
var state__15323__auto__ = (function (){var statearr_22541 = f__15322__auto__.call(null);
(statearr_22541[(6)] = c__15321__auto__);

return statearr_22541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15323__auto__);
});})(c__15321__auto__))
);

return c__15321__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
