// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.drop_file_stream');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('reagent.core');
dep.helpers.drop_file_stream.lies_datei = (function dep$helpers$drop_file_stream$lies_datei(f_name,w,f){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_16142){
var state_val_16143 = (state_16142[(1)]);
if((state_val_16143 === (1))){
var inst_16127 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_16128 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_16129 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_16130 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_16127,"text/plain; charset=utf-8"];
var inst_16131 = cljs.core.PersistentHashMap.fromArrays(inst_16129,inst_16130);
var inst_16132 = [false,inst_16131];
var inst_16133 = cljs.core.PersistentHashMap.fromArrays(inst_16128,inst_16132);
var inst_16134 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_16133);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16142__$1,(2),inst_16134);
} else {
if((state_val_16143 === (2))){
var inst_16136 = (state_16142[(2)]);
var inst_16137 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16136);
var inst_16138 = f.call(null,inst_16137);
var inst_16139 = cljs.core.vec.call(null,inst_16138);
var inst_16140 = cljs.core.reset_BANG_.call(null,w,inst_16139);
var state_16142__$1 = state_16142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16142__$1,inst_16140);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto__ = null;
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto____0 = (function (){
var statearr_16144 = [null,null,null,null,null,null,null];
(statearr_16144[(0)] = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto__);

(statearr_16144[(1)] = (1));

return statearr_16144;
});
var dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto____1 = (function (state_16142){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_16142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e16145){if((e16145 instanceof Object)){
var ex__15503__auto__ = e16145;
var statearr_16146_16148 = state_16142;
(statearr_16146_16148[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16149 = state_16142;
state_16142 = G__16149;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto__ = function(state_16142){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto____1.call(this,state_16142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto____0;
dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto____1;
return dep$helpers$drop_file_stream$lies_datei_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_16147 = f__15523__auto__.call(null);
(statearr_16147[(6)] = c__15522__auto__);

return statearr_16147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Schreibt den text in eine Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.write_text = (function dep$helpers$drop_file_stream$write_text(text,f_name){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_16161){
var state_val_16162 = (state_16161[(1)]);
if((state_val_16162 === (1))){
var inst_16150 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),",","\"mode\":{\".tag\":\"overwrite\"}}"].join('');
var inst_16151 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_16152 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_16153 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_16150,"application/octet-stream"];
var inst_16154 = cljs.core.PersistentHashMap.fromArrays(inst_16152,inst_16153);
var inst_16155 = [false,inst_16154,text];
var inst_16156 = cljs.core.PersistentHashMap.fromArrays(inst_16151,inst_16155);
var inst_16157 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/upload",inst_16156);
var state_16161__$1 = state_16161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16161__$1,(2),inst_16157);
} else {
if((state_val_16162 === (2))){
var inst_16159 = (state_16161[(2)]);
var state_16161__$1 = state_16161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16161__$1,inst_16159);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto__ = null;
var dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto____0 = (function (){
var statearr_16163 = [null,null,null,null,null,null,null];
(statearr_16163[(0)] = dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto__);

(statearr_16163[(1)] = (1));

return statearr_16163;
});
var dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto____1 = (function (state_16161){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_16161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e16164){if((e16164 instanceof Object)){
var ex__15503__auto__ = e16164;
var statearr_16165_16167 = state_16161;
(statearr_16165_16167[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16168 = state_16161;
state_16161 = G__16168;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto__ = function(state_16161){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto____1.call(this,state_16161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto____0;
dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto____1;
return dep$helpers$drop_file_stream$write_text_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_16166 = f__15523__auto__.call(null);
(statearr_16166[(6)] = c__15522__auto__);

return statearr_16166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Liefert die Liste der Dateien im Basisverzeichnis.
 */
dep.helpers.drop_file_stream.list_folder = (function dep$helpers$drop_file_stream$list_folder(){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_16185){
var state_val_16186 = (state_16185[(1)]);
if((state_val_16186 === (1))){
var inst_16169 = ["{\"path\":\"\"}"].join('');
var inst_16170 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_16171 = ["Authorization","Content-Type"];
var inst_16172 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-","application/json"];
var inst_16173 = cljs.core.PersistentHashMap.fromArrays(inst_16171,inst_16172);
var inst_16174 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_16175 = [""];
var inst_16176 = cljs.core.PersistentHashMap.fromArrays(inst_16174,inst_16175);
var inst_16177 = [false,inst_16173,inst_16176];
var inst_16178 = cljs.core.PersistentHashMap.fromArrays(inst_16170,inst_16177);
var inst_16179 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/list_folder",inst_16178);
var state_16185__$1 = (function (){var statearr_16187 = state_16185;
(statearr_16187[(7)] = inst_16169);

return statearr_16187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16185__$1,(2),inst_16179);
} else {
if((state_val_16186 === (2))){
var inst_16181 = (state_16185[(2)]);
var inst_16182 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16181);
var inst_16183 = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(inst_16182);
var state_16185__$1 = state_16185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16185__$1,inst_16183);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto__ = null;
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto____0 = (function (){
var statearr_16188 = [null,null,null,null,null,null,null,null];
(statearr_16188[(0)] = dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto__);

(statearr_16188[(1)] = (1));

return statearr_16188;
});
var dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto____1 = (function (state_16185){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_16185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e16189){if((e16189 instanceof Object)){
var ex__15503__auto__ = e16189;
var statearr_16190_16192 = state_16185;
(statearr_16190_16192[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16193 = state_16185;
state_16185 = G__16193;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto__ = function(state_16185){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto____1.call(this,state_16185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto____0;
dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto____1;
return dep$helpers$drop_file_stream$list_folder_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_16191 = f__15523__auto__.call(null);
(statearr_16191[(6)] = c__15522__auto__);

return statearr_16191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Löscht die Datei mit dem Namen f-name aus dem Basisverzeichnis.
 */
dep.helpers.drop_file_stream.delete_file_named = (function dep$helpers$drop_file_stream$delete_file_named(f_name){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_16208){
var state_val_16209 = (state_16208[(1)]);
if((state_val_16209 === (1))){
var inst_16194 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name)].join('');
var inst_16195 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_16196 = ["Authorization"];
var inst_16197 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_16198 = cljs.core.PersistentHashMap.fromArrays(inst_16196,inst_16197);
var inst_16199 = [new cljs.core.Keyword(null,"path","path",-188191168)];
var inst_16200 = [inst_16194];
var inst_16201 = cljs.core.PersistentHashMap.fromArrays(inst_16199,inst_16200);
var inst_16202 = [false,inst_16198,inst_16201];
var inst_16203 = cljs.core.PersistentHashMap.fromArrays(inst_16195,inst_16202);
var inst_16204 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/delete_v2",inst_16203);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16208__$1,(2),inst_16204);
} else {
if((state_val_16209 === (2))){
var inst_16206 = (state_16208[(2)]);
var state_16208__$1 = state_16208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16208__$1,inst_16206);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto__ = null;
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto____0 = (function (){
var statearr_16210 = [null,null,null,null,null,null,null];
(statearr_16210[(0)] = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto__);

(statearr_16210[(1)] = (1));

return statearr_16210;
});
var dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto____1 = (function (state_16208){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_16208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e16211){if((e16211 instanceof Object)){
var ex__15503__auto__ = e16211;
var statearr_16212_16214 = state_16208;
(statearr_16212_16214[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16215 = state_16208;
state_16208 = G__16215;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto__ = function(state_16208){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto____1.call(this,state_16208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto____0;
dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto____1;
return dep$helpers$drop_file_stream$delete_file_named_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_16213 = f__15523__auto__.call(null);
(statearr_16213[(6)] = c__15522__auto__);

return statearr_16213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Liefert den Inhalt der EDN-Datei mit dem Namen f-name.
 */
dep.helpers.drop_file_stream.read_edn_file = (function dep$helpers$drop_file_stream$read_edn_file(f_name){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_16229){
var state_val_16230 = (state_16229[(1)]);
if((state_val_16230 === (1))){
var inst_16216 = ["{\"path\":\"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name),"\"}"].join('');
var inst_16217 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_16218 = ["Authorization","Dropbox-API-Arg","Content-Type"];
var inst_16219 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-",inst_16216,"text/plain; charset=utf-8"];
var inst_16220 = cljs.core.PersistentHashMap.fromArrays(inst_16218,inst_16219);
var inst_16221 = [false,inst_16220];
var inst_16222 = cljs.core.PersistentHashMap.fromArrays(inst_16217,inst_16221);
var inst_16223 = cljs_http.client.post.call(null,"https://content.dropboxapi.com/2/files/download",inst_16222);
var state_16229__$1 = state_16229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16229__$1,(2),inst_16223);
} else {
if((state_val_16230 === (2))){
var inst_16225 = (state_16229[(2)]);
var inst_16226 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_16225);
var inst_16227 = cljs.reader.read_string.call(null,inst_16226);
var state_16229__$1 = state_16229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16229__$1,inst_16227);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto__ = null;
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto____0 = (function (){
var statearr_16231 = [null,null,null,null,null,null,null];
(statearr_16231[(0)] = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto__);

(statearr_16231[(1)] = (1));

return statearr_16231;
});
var dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto____1 = (function (state_16229){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_16229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e16232){if((e16232 instanceof Object)){
var ex__15503__auto__ = e16232;
var statearr_16233_16235 = state_16229;
(statearr_16233_16235[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16236 = state_16229;
state_16229 = G__16236;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto__ = function(state_16229){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto____1.call(this,state_16229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto____0;
dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto____1;
return dep$helpers$drop_file_stream$read_edn_file_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_16234 = f__15523__auto__.call(null);
(statearr_16234[(6)] = c__15522__auto__);

return statearr_16234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});
/**
 * Benennt die Datei mit dem Namen f-name-old in f-name-new um.
 */
dep.helpers.drop_file_stream.rename_file = (function dep$helpers$drop_file_stream$rename_file(f_name_old,f_name_new){
var c__15522__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15522__auto__){
return (function (){
var f__15523__auto__ = (function (){var switch__15499__auto__ = ((function (c__15522__auto__){
return (function (state_16252){
var state_val_16253 = (state_16252[(1)]);
if((state_val_16253 === (1))){
var inst_16237 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_old)].join('');
var inst_16238 = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f_name_new)].join('');
var inst_16239 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_16240 = ["Authorization"];
var inst_16241 = ["Bearer QfCCKhxI-HwAAAAAAAAHBzmH6xSzQwGNTWKR1Wk53LGz7lzksYn_jOa-SXCgTTZ-"];
var inst_16242 = cljs.core.PersistentHashMap.fromArrays(inst_16240,inst_16241);
var inst_16243 = [new cljs.core.Keyword(null,"from_path","from_path",-1479414992),new cljs.core.Keyword(null,"to_path","to_path",343919595)];
var inst_16244 = [inst_16237,inst_16238];
var inst_16245 = cljs.core.PersistentHashMap.fromArrays(inst_16243,inst_16244);
var inst_16246 = [false,inst_16242,inst_16245];
var inst_16247 = cljs.core.PersistentHashMap.fromArrays(inst_16239,inst_16246);
var inst_16248 = cljs_http.client.post.call(null,"https://api.dropboxapi.com/2/files/move_v2",inst_16247);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16252__$1,(2),inst_16248);
} else {
if((state_val_16253 === (2))){
var inst_16250 = (state_16252[(2)]);
var state_16252__$1 = state_16252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16252__$1,inst_16250);
} else {
return null;
}
}
});})(c__15522__auto__))
;
return ((function (switch__15499__auto__,c__15522__auto__){
return (function() {
var dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto__ = null;
var dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto____0 = (function (){
var statearr_16254 = [null,null,null,null,null,null,null];
(statearr_16254[(0)] = dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto__);

(statearr_16254[(1)] = (1));

return statearr_16254;
});
var dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto____1 = (function (state_16252){
while(true){
var ret_value__15501__auto__ = (function (){try{while(true){
var result__15502__auto__ = switch__15499__auto__.call(null,state_16252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15502__auto__;
}
break;
}
}catch (e16255){if((e16255 instanceof Object)){
var ex__15503__auto__ = e16255;
var statearr_16256_16258 = state_16252;
(statearr_16256_16258[(5)] = ex__15503__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15501__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16259 = state_16252;
state_16252 = G__16259;
continue;
} else {
return ret_value__15501__auto__;
}
break;
}
});
dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto__ = function(state_16252){
switch(arguments.length){
case 0:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto____0.call(this);
case 1:
return dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto____1.call(this,state_16252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$0 = dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto____0;
dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto__.cljs$core$IFn$_invoke$arity$1 = dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto____1;
return dep$helpers$drop_file_stream$rename_file_$_state_machine__15500__auto__;
})()
;})(switch__15499__auto__,c__15522__auto__))
})();
var state__15524__auto__ = (function (){var statearr_16257 = f__15523__auto__.call(null);
(statearr_16257[(6)] = c__15522__auto__);

return statearr_16257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15524__auto__);
});})(c__15522__auto__))
);

return c__15522__auto__;
});

//# sourceMappingURL=drop_file_stream.js.map
