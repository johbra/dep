// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.scroll_to = (function reagent_forms$core$scroll_to(element,idx){
var list_elem = element.target.parentNode.getElementsByTagName("ul").item((0));
var idx__$1 = (((idx < (0)))?(0):idx);
var item_elem = list_elem.children.item(idx__$1);
var vec__20213 = (cljs.core.truth_(item_elem)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_elem.scrollHeight,item_elem.offsetTop], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var item_height = cljs.core.nth.call(null,vec__20213,(0),null);
var offset_top = cljs.core.nth.call(null,vec__20213,(1),null);
return list_elem.scrollTop = (offset_top - ((2) * item_height));
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),(1)),/\./);
return cljs.core.mapv.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.cursor_for_id = cljs.core.memoize.call(null,(function (doc,id){
return reagent.core.cursor.call(null,doc,reagent_forms.core.id__GT_path.call(null,id));
}));
reagent_forms.core.run_events = (function reagent_forms$core$run_events(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__20217_SHARP_,p2__20216_SHARP_){
var or__3949__auto__ = p2__20216_SHARP_.call(null,id,path,value,p1__20217_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return p1__20217_SHARP_;
}
});})(path))
,doc,events);
});
reagent_forms.core.mk_update_fn = (function reagent_forms$core$mk_update_fn(doc,events){
return (function (id,update_fn,value){
var result = cljs.core.swap_BANG_.call(null,reagent_forms.core.cursor_for_id.call(null,doc,id),(function (current_value){
return update_fn.call(null,current_value,value);
}));
if(cljs.core.empty_QMARK_.call(null,events)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.run_events,id,result,events);
}
});
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
cljs.core.reset_BANG_.call(null,reagent_forms.core.cursor_for_id.call(null,doc,id),value);

if(cljs.core.empty_QMARK_.call(null,events)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.run_events,id,value,events);
}
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_update_fn = (function reagent_forms$core$wrap_update_fn(update_BANG_,wrapper){
return (function (id,update_fn,value){
return update_BANG_.call(null,id,update_fn,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(p__20218,node){
var map__20219 = p__20218;
var map__20219__$1 = ((((!((map__20219 == null)))?(((((map__20219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20219):map__20219);
var doc = cljs.core.get.call(null,map__20219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20219__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20219__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.call(null,map__20219__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__5455__auto__)){
var in_fn = temp__5455__auto__;
return reagent_forms.core.wrap_get_fn.call(null,get,in_fn);
} else {
return get;
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__5455__auto__)){
var out_fn = temp__5455__auto__;
return reagent_forms.core.wrap_save_fn.call(null,save_BANG_,out_fn);
} else {
return save_BANG_;
}
})(),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (){var temp__5455__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__5455__auto__)){
var out_fn = temp__5455__auto__;
return reagent_forms.core.wrap_update_fn.call(null,update_BANG_,out_fn);
} else {
return update_BANG_;
}
})()], null);
});
reagent_forms.core.set_disabled = (function reagent_forms$core$set_disabled(attrs,update_disabled_QMARK_){
if(cljs.core.truth_((function (){var and__3938__auto__ = update_disabled_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return !((new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.update.call(null,attrs,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (p1__20221_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__20221_SHARP_)){
return p1__20221_SHARP_.call(null);
} else {
return p1__20221_SHARP_;
}
}));
} else {
return attrs;
}
});
reagent_forms.core.call_attr = (function reagent_forms$core$call_attr(doc,attr){
var doc__$1 = ((cljs.core.fn_QMARK_.call(null,doc))?doc.call(null):cljs.core.deref.call(null,doc));
if(cljs.core.fn_QMARK_.call(null,attr)){
return attr.call(null,doc__$1);
} else {
return cljs.core.get_in.call(null,doc__$1,reagent_forms.core.id__GT_path.call(null,attr));
}
});
reagent_forms.core.update_class = (function reagent_forms$core$update_class(attrs,classes){
if(cljs.core.truth_(cljs.core.not_empty.call(null,classes))){
return cljs.core.update.call(null,attrs,new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__20222_SHARP_){
return clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.into.call(null,((typeof p1__20222_SHARP_ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20222_SHARP_], null):p1__20222_SHARP_),classes)));
}));
} else {
return attrs;
}
});
reagent_forms.core.update_attrs = (function reagent_forms$core$update_attrs(p__20223,doc){
var map__20224 = p__20223;
var map__20224__$1 = ((((!((map__20224 == null)))?(((((map__20224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20224):map__20224);
var attrs = map__20224__$1;
var set_attributes = cljs.core.get.call(null,map__20224__$1,new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473));
var or__3949__auto__ = (cljs.core.truth_(set_attributes)?set_attributes.call(null,((cljs.core.fn_QMARK_.call(null,doc))?doc.call(null):cljs.core.deref.call(null,doc)),attrs):null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return attrs;
}
});
reagent_forms.core.set_validation_class = (function reagent_forms$core$set_validation_class(attrs,doc){
var temp__5455__auto__ = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var valid = temp__5455__auto__;
return reagent_forms.core.update_class.call(null,attrs,reagent_forms.core.call_attr.call(null,doc,valid));
} else {
return attrs;
}
});
reagent_forms.core.clean_attrs = (function reagent_forms$core$clean_attrs(attrs){
return cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"fmt","fmt",332300772),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694),new cljs.core.Keyword(null,"out-fn","out-fn",747295447),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"save-fn","save-fn",383840986),new cljs.core.Keyword(null,"preamble","preamble",1641040241),new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"postamble","postamble",-500033366),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"date-format","date-format",-557196721),new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568),new cljs.core.Keyword(null,"set-attributes","set-attributes",1727919473));
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.format_type !== 'undefined')){
} else {
reagent_forms.core.format_type = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (field_type,_){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"range","range",1639692286),null], null), null).call(null,field_type))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__3938__auto__){
return fmt;
} else {
return and__3938__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind !== 'undefined')){
} else {
reagent_forms.core.bind = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (p__20226,_){
var map__20227 = p__20226;
var map__20227__$1 = ((((!((map__20227 == null)))?(((((map__20227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20227):map__20227);
var field = cljs.core.get.call(null,map__20227__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,field))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__20230,p__20231){
var map__20232 = p__20230;
var map__20232__$1 = ((((!((map__20232 == null)))?(((((map__20232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20232):map__20232);
var field = cljs.core.get.call(null,map__20232__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__20232__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__20232__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__20233 = p__20231;
var map__20233__$1 = ((((!((map__20233 == null)))?(((((map__20233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20233):map__20233);
var get = cljs.core.get.call(null,map__20233__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20233__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3949__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20232,map__20232__$1,field,id,fmt,map__20233,map__20233__$1,get,save_BANG_){
return (function (p1__20229_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__20229_SHARP_)));
});})(map__20232,map__20232__$1,field,id,fmt,map__20233,map__20233__$1,get,save_BANG_))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__20236,p__20237){
var map__20238 = p__20236;
var map__20238__$1 = ((((!((map__20238 == null)))?(((((map__20238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20238):map__20238);
var id = cljs.core.get.call(null,map__20238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__20239 = p__20237;
var map__20239__$1 = ((((!((map__20239 == null)))?(((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20239):map__20239);
var get = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,get.call(null,id)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__20238,map__20238__$1,id,map__20239,map__20239__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__20238,map__20238__$1,id,map__20239,map__20239__$1,get,save_BANG_))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20253 = arguments.length;
var i__4532__auto___20254 = (0);
while(true){
if((i__4532__auto___20254 < len__4531__auto___20253)){
args__4534__auto__.push((arguments[i__4532__auto___20254]));

var G__20255 = (i__4532__auto___20254 + (1));
i__4532__auto___20254 = G__20255;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__20245,opts,p__20246){
var vec__20247 = p__20245;
var seq__20248 = cljs.core.seq.call(null,vec__20247);
var first__20249 = cljs.core.first.call(null,seq__20248);
var seq__20248__$1 = cljs.core.next.call(null,seq__20248);
var type = first__20249;
var first__20249__$1 = cljs.core.first.call(null,seq__20248__$1);
var seq__20248__$2 = cljs.core.next.call(null,seq__20248__$1);
var attrs = first__20249__$1;
var body = seq__20248__$2;
var vec__20250 = p__20246;
var default_attrs = cljs.core.nth.call(null,vec__20250,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)))], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq20242){
var G__20243 = cljs.core.first.call(null,seq20242);
var seq20242__$1 = cljs.core.next.call(null,seq20242);
var G__20244 = cljs.core.first.call(null,seq20242__$1);
var seq20242__$2 = cljs.core.next.call(null,seq20242__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20243,G__20244,seq20242__$2);
});

if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.init_field !== 'undefined')){
} else {
reagent_forms.core.init_field = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (p__20256,_){
var vec__20257 = p__20256;
var ___$1 = cljs.core.nth.call(null,vec__20257,(0),null);
var map__20260 = cljs.core.nth.call(null,vec__20257,(1),null);
var map__20260__$1 = ((((!((map__20260 == null)))?(((((map__20260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20260):map__20260);
var field = cljs.core.get.call(null,map__20260__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"tel","tel",224138159),null,new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"range","range",1639692286),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,field__$1))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__20262,p__20263){
var vec__20264 = p__20262;
var seq__20265 = cljs.core.seq.call(null,vec__20264);
var first__20266 = cljs.core.first.call(null,seq__20265);
var seq__20265__$1 = cljs.core.next.call(null,seq__20265);
var type = first__20266;
var first__20266__$1 = cljs.core.first.call(null,seq__20265__$1);
var seq__20265__$2 = cljs.core.next.call(null,seq__20265__$1);
var attrs = first__20266__$1;
var body = seq__20265__$2;
var map__20267 = p__20263;
var map__20267__$1 = ((((!((map__20267 == null)))?(((((map__20267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20267):map__20267);
var doc = cljs.core.get.call(null,map__20267__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20264,seq__20265,first__20266,seq__20265__$1,type,first__20266__$1,seq__20265__$2,attrs,body,map__20267,map__20267__$1,doc){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20264,seq__20265,first__20266,seq__20265__$1,type,first__20266__$1,seq__20265__$2,attrs,body,map__20267,map__20267__$1,doc){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20264,seq__20265,first__20266,seq__20265__$1,type,first__20266__$1,seq__20265__$2,attrs,body,map__20267,map__20267__$1,doc))
,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20264,seq__20265,first__20266,seq__20265__$1,type,first__20266__$1,seq__20265__$2,attrs,body,map__20267,map__20267__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__20269,p__20270){
var vec__20271 = p__20269;
var _ = cljs.core.nth.call(null,vec__20271,(0),null);
var map__20274 = cljs.core.nth.call(null,vec__20271,(1),null);
var map__20274__$1 = ((((!((map__20274 == null)))?(((((map__20274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20274):map__20274);
var attrs = map__20274__$1;
var field = cljs.core.get.call(null,map__20274__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__20271;
var map__20275 = p__20270;
var map__20275__$1 = ((((!((map__20275 == null)))?(((((map__20275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20275):map__20275);
var opts = map__20275__$1;
var doc = cljs.core.get.call(null,map__20275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20271,_,map__20274,map__20274__$1,attrs,field,component,map__20275,map__20275__$1,opts,doc){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20271,_,map__20274,map__20274__$1,attrs,field,component,map__20275,map__20275__$1,opts,doc){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20271,_,map__20274,map__20274__$1,attrs,field,component,map__20275,map__20275__$1,opts,doc))
,reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20271,_,map__20274,map__20274__$1,attrs,field,component,map__20275,map__20275__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__20280,p__20281){
var vec__20282 = p__20280;
var type = cljs.core.nth.call(null,vec__20282,(0),null);
var map__20285 = cljs.core.nth.call(null,vec__20282,(1),null);
var map__20285__$1 = ((((!((map__20285 == null)))?(((((map__20285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20285):map__20285);
var attrs = map__20285__$1;
var id = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__20285__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__20286 = p__20281;
var map__20286__$1 = ((((!((map__20286 == null)))?(((((map__20286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20286):map__20286);
var get = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__20286__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (update_disabled_QMARK___20202__auto__,input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc){
return (function (p1__20278_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__20278_SHARP_));
});})(update_disabled_QMARK___20202__auto__,input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (update_disabled_QMARK___20202__auto__,input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc){
return (function (p1__20279_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__20279_SHARP_))));
});})(update_disabled_QMARK___20202__auto__,input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc))
], null),attrs)], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(input_value,vec__20282,type,map__20285,map__20285__$1,attrs,id,fmt,map__20286,map__20286__$1,get,save_BANG_,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__20292,p__20293){
var vec__20294 = p__20292;
var _ = cljs.core.nth.call(null,vec__20294,(0),null);
var map__20297 = cljs.core.nth.call(null,vec__20294,(1),null);
var map__20297__$1 = ((((!((map__20297 == null)))?(((((map__20297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20297):map__20297);
var attrs = map__20297__$1;
var id = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var disabled = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var lang = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"en-US","en-US",1221407245));
var save_fn = cljs.core.get.call(null,map__20297__$1,new cljs.core.Keyword(null,"save-fn","save-fn",383840986));
var map__20298 = p__20293;
var map__20298__$1 = ((((!((map__20298 == null)))?(((((map__20298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20298):map__20298);
var doc = cljs.core.get.call(null,map__20298__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20298__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20298__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var update_BANG_ = cljs.core.get.call(null,map__20298__$1,new cljs.core.Keyword(null,"update!","update!",-1453508586));
var fmt = ((cljs.core.fn_QMARK_.call(null,date_format))?date_format:((function (vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__20289_SHARP_){
return reagent_forms.datepicker.format_date.call(null,p1__20289_SHARP_,reagent_forms.datepicker.parse_format.call(null,date_format));
});})(vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
);
var selected_date = get.call(null,id);
var selected_month = (((new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) > (0)))?(new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date) - (1)):new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(selected_date));
var today = (new Date());
var year = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return today.getFullYear();
}
})();
var month = (function (){var or__3949__auto__ = selected_month;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return today.getMonth();
}
})();
var day = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(selected_date);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return today.getDate();
}
})();
var expanded_QMARK_ = reagent.core.atom.call(null,false);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var dom_node = reagent.core.atom.call(null,null);
var save_value = (cljs.core.truth_(save_fn)?((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__20290_SHARP_){
return update_BANG_.call(null,id,save_fn,p1__20290_SHARP_);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
:((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (p1__20291_SHARP_){
return save_BANG_.call(null,id,p1__20291_SHARP_);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (this$){
return cljs.core.reset_BANG_.call(null,dom_node,reagent.core.dom_node.call(null,this$).firstChild.firstChild);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (this$){
return cljs.core.reset_BANG_.call(null,dom_node,reagent.core.dom_node.call(null,this$).firstChild.firstChild);
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);
}
});})(update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_.call(null,disabled))?disabled.call(null):disabled))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
}
});})(update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__5455__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__5455__auto__)){
var date = temp__5455__auto__;
return fmt.call(null,date);
} else {
return "";
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (e){
e.preventDefault();

if(cljs.core.truth_(((cljs.core.fn_QMARK_.call(null,disabled))?disabled.call(null):disabled))){
return null;
} else {
cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);

return cljs.core.deref.call(null,dom_node).focus();
}
});})(update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,year,month,day,dom_node,mouse_on_list_QMARK_,expanded_QMARK_,auto_close_QMARK_,((function (update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_){
return (function (){
return get.call(null,id);
});})(update_disabled_QMARK___20202__auto__,fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
,save_value,inline,lang], null)], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});})(fmt,selected_date,selected_month,today,year,month,day,expanded_QMARK_,mouse_on_list_QMARK_,dom_node,save_value,vec__20294,_,map__20297,map__20297__$1,attrs,id,date_format,inline,auto_close_QMARK_,disabled,lang,save_fn,map__20298,map__20298__$1,doc,get,save_BANG_,update_BANG_))
], null));
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__20301,p__20302){
var vec__20303 = p__20301;
var _ = cljs.core.nth.call(null,vec__20303,(0),null);
var map__20306 = cljs.core.nth.call(null,vec__20303,(1),null);
var map__20306__$1 = ((((!((map__20306 == null)))?(((((map__20306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20306):map__20306);
var attrs = map__20306__$1;
var id = cljs.core.get.call(null,map__20306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__20306__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__20306__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__20306__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__20303;
var map__20307 = p__20302;
var map__20307__$1 = ((((!((map__20307 == null)))?(((((map__20307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20307):map__20307);
var opts = map__20307__$1;
var doc = cljs.core.get.call(null,map__20307__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__20307__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__3949__auto__ = checked;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__20303,_,map__20306,map__20306__$1,attrs,id,field,checked,default_checked,component,map__20307,map__20307__$1,opts,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)))]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20303,_,map__20306,map__20306__$1,attrs,id,field,checked,default_checked,component,map__20307,map__20307__$1,opts,doc,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20303,_,map__20306,map__20306__$1,attrs,id,field,checked,default_checked,component,map__20307,map__20307__$1,opts,doc,save_BANG_))
,reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null)));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)));
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20303,_,map__20306,map__20306__$1,attrs,id,field,checked,default_checked,component,map__20307,map__20307__$1,opts,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__20310,p__20311){
var vec__20312 = p__20310;
var type = cljs.core.nth.call(null,vec__20312,(0),null);
var map__20315 = cljs.core.nth.call(null,vec__20312,(1),null);
var map__20315__$1 = ((((!((map__20315 == null)))?(((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);
var attrs = map__20315__$1;
var id = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var fmt = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__20316 = p__20311;
var map__20316__$1 = ((((!((map__20316 == null)))?(((((map__20316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20316):map__20316);
var doc = cljs.core.get.call(null,map__20316__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20316__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__20312,type,map__20315,map__20315__$1,attrs,id,preamble,postamble,placeholder,fmt,map__20316,map__20316__$1,doc,get){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20312,type,map__20315,map__20315__$1,attrs,id,preamble,postamble,placeholder,fmt,map__20316,map__20316__$1,doc,get){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20312,type,map__20315,map__20315__$1,attrs,id,preamble,postamble,placeholder,fmt,map__20316,map__20316__$1,doc,get))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var value = get.call(null,id);
if(cljs.core.truth_(fmt)){
return fmt.call(null,value);
} else {
if(cljs.core.truth_(value)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble)].join('');
} else {
return placeholder;
}
}
})()], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20312,type,map__20315,map__20315__$1,attrs,id,preamble,postamble,placeholder,fmt,map__20316,map__20316__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__20319,p__20320){
var vec__20321 = p__20319;
var seq__20322 = cljs.core.seq.call(null,vec__20321);
var first__20323 = cljs.core.first.call(null,seq__20322);
var seq__20322__$1 = cljs.core.next.call(null,seq__20322);
var type = first__20323;
var first__20323__$1 = cljs.core.first.call(null,seq__20322__$1);
var seq__20322__$2 = cljs.core.next.call(null,seq__20322__$1);
var map__20324 = first__20323__$1;
var map__20324__$1 = ((((!((map__20324 == null)))?(((((map__20324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20324):map__20324);
var attrs = map__20324__$1;
var id = cljs.core.get.call(null,map__20324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__20324__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__20324__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var closeable_QMARK_ = cljs.core.get.call(null,map__20324__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = seq__20322__$2;
var map__20325 = p__20320;
var map__20325__$1 = ((((!((map__20325 == null)))?(((((map__20325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20325):map__20325);
var doc = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20325__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__20321,seq__20322,first__20323,seq__20322__$1,type,first__20323__$1,seq__20322__$2,map__20324,map__20324__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20325,map__20325__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20321,seq__20322,first__20323,seq__20322__$1,type,first__20323__$1,seq__20322__$2,map__20324,map__20324__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20325,map__20325__$1,doc,get,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20321,seq__20322,first__20323,seq__20322__$1,type,first__20323__$1,seq__20322__$2,map__20324,map__20324__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20325,map__20325__$1,doc,get,save_BANG_))
,(cljs.core.truth_(event)?(cljs.core.truth_(event.call(null,get.call(null,id)))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),body):null):(function (){var temp__5455__auto__ = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__5455__auto__)){
var message = temp__5455__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3949__auto__ = touch_event;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__5455__auto__,update_disabled_QMARK___20202__auto__,vec__20321,seq__20322,first__20323,seq__20322__$1,type,first__20323__$1,seq__20322__$2,map__20324,map__20324__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20325,map__20325__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__5455__auto__,update_disabled_QMARK___20202__auto__,vec__20321,seq__20322,first__20323,seq__20322__$1,type,first__20323__$1,seq__20322__$2,map__20324,map__20324__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20325,map__20325__$1,doc,get,save_BANG_))
]),"X"], null):null),message], null);
} else {
return null;
}
})()));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20321,seq__20322,first__20323,seq__20322__$1,type,first__20323__$1,seq__20322__$2,map__20324,map__20324__$1,attrs,id,event,touch_event,closeable_QMARK_,body,map__20325,map__20325__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__20328,p__20329){
var vec__20330 = p__20328;
var seq__20331 = cljs.core.seq.call(null,vec__20330);
var first__20332 = cljs.core.first.call(null,seq__20331);
var seq__20331__$1 = cljs.core.next.call(null,seq__20331);
var type = first__20332;
var first__20332__$1 = cljs.core.first.call(null,seq__20331__$1);
var seq__20331__$2 = cljs.core.next.call(null,seq__20331__$1);
var map__20333 = first__20332__$1;
var map__20333__$1 = ((((!((map__20333 == null)))?(((((map__20333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20333):map__20333);
var attrs = map__20333__$1;
var name = cljs.core.get.call(null,map__20333__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__20333__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__20333__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__20333__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = seq__20331__$2;
var map__20334 = p__20329;
var map__20334__$1 = ((((!((map__20334 == null)))?(((((map__20334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20334):map__20334);
var doc = cljs.core.get.call(null,map__20334__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20334__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20334__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__3949__auto__ = checked;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__20330,seq__20331,first__20332,seq__20331__$1,type,first__20332__$1,seq__20331__$2,map__20333,map__20333__$1,attrs,name,value,checked,default_checked,body,map__20334,map__20334__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20330,seq__20331,first__20332,seq__20331__$1,type,first__20332__$1,seq__20331__$2,map__20333,map__20333__$1,attrs,name,value,checked,default_checked,body,map__20334,map__20334__$1,doc,get,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20330,seq__20331,first__20332,seq__20331__$1,type,first__20332__$1,seq__20331__$2,map__20333,map__20333__$1,attrs,name,value,checked,default_checked,body,map__20334,map__20334__$1,doc,get,save_BANG_))
,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.dissoc.call(null,attrs,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (update_disabled_QMARK___20202__auto__,vec__20330,seq__20331,first__20332,seq__20331__$1,type,first__20332__$1,seq__20331__$2,map__20333,map__20333__$1,attrs,name,value,checked,default_checked,body,map__20334,map__20334__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(update_disabled_QMARK___20202__auto__,vec__20330,seq__20331,first__20332,seq__20331__$1,type,first__20332__$1,seq__20331__$2,map__20333,map__20333__$1,attrs,name,value,checked,default_checked,body,map__20334,map__20334__$1,doc,get,save_BANG_))
], null))], null),body));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20330,seq__20331,first__20332,seq__20331__$1,type,first__20332__$1,seq__20331__$2,map__20333,map__20333__$1,attrs,name,value,checked,default_checked,body,map__20334,map__20334__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__20341,p__20342){
var vec__20343 = p__20341;
var type = cljs.core.nth.call(null,vec__20343,(0),null);
var map__20346 = cljs.core.nth.call(null,vec__20343,(1),null);
var map__20346__$1 = ((((!((map__20346 == null)))?(((((map__20346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20346):map__20346);
var attrs = map__20346__$1;
var result_fn = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var selections = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var highlight_class = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var get_index = cljs.core.get.call(null,map__20346__$1,new cljs.core.Keyword(null,"get-index","get-index",440051606));
var map__20347 = p__20342;
var map__20347__$1 = ((((!((map__20347 == null)))?(((((map__20347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20347):map__20347);
var doc = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections__$1 = (function (){var or__3949__auto__ = selections;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
})();
var get_index__$1 = (function (){var or__3949__auto__ = get_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.constantly.call(null,(-1));
}
})();
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections__$1));
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__3938__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections__$1),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[input_placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attrs),((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,(function (){var v = get.call(null,id);
if(!(cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"text","text",-1790561697),input_class,((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (p1__20337_SHARP_){
var temp__5457__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__20337_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var value = temp__5457__auto__;
cljs.core.reset_BANG_.call(null,selections__$1,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__20337_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,selections__$1))))?(0):(-1)));
} else {
return null;
}
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (p1__20338_SHARP_){
var G__20350 = p1__20338_SHARP_.which;
switch (G__20350) {
case (38):
p1__20338_SHARP_.preventDefault();

if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.deref.call(null,typeahead_hidden_QMARK_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (cljs.core.deref.call(null,selected_index) <= (0));
}
})())){
return null;
} else {
cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);

return reagent_forms.core.scroll_to.call(null,p1__20338_SHARP_,cljs.core.deref.call(null,selected_index));
}

break;
case (40):
p1__20338_SHARP_.preventDefault();

if(cljs.core.truth_(cljs.core.deref.call(null,typeahead_hidden_QMARK_))){
cljs.core.reset_BANG_.call(null,selections__$1,data_source.call(null,new cljs.core.Keyword(null,"all","all",892129742)));

cljs.core.reset_BANG_.call(null,selected_index,get_index__$1.call(null,clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__20338_SHARP_)),cljs.core.deref.call(null,selections__$1)));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return reagent_forms.core.scroll_to.call(null,p1__20338_SHARP_,cljs.core.deref.call(null,selected_index));
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections__$1)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__20338_SHARP_));

cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);

return reagent_forms.core.scroll_to.call(null,p1__20338_SHARP_,cljs.core.deref.call(null,selected_index));
}
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
p1__20338_SHARP_.preventDefault();

return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));

break;
default:
return "default";

}
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections__$1));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (p1__20339_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__20339_SHARP_.target.getAttribute("tabIndex")));
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_){
return (function (p1__20340_SHARP_){
p1__20340_SHARP_.preventDefault();

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(update_disabled_QMARK___20202__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections__$1)))], null)], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections__$1,get_index__$1,choose_selected,vec__20343,type,map__20346,map__20346__$1,attrs,result_fn,item_class,input_placeholder,selections,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,get_index,map__20347,map__20347__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"file","file",-1269645878),(function (p__20353,p__20354){
var vec__20355 = p__20353;
var type = cljs.core.nth.call(null,vec__20355,(0),null);
var map__20358 = cljs.core.nth.call(null,vec__20355,(1),null);
var map__20358__$1 = ((((!((map__20358 == null)))?(((((map__20358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20358):map__20358);
var attrs = map__20358__$1;
var id = cljs.core.get.call(null,map__20358__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__20359 = p__20354;
var map__20359__$1 = ((((!((map__20359 == null)))?(((((map__20359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20359):map__20359);
var doc = cljs.core.get.call(null,map__20359__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__20359__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__20355,type,map__20358,map__20358__$1,attrs,id,map__20359,map__20359__$1,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20355,type,map__20358,map__20358__$1,attrs,id,map__20359,map__20359__$1,doc,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20355,type,map__20358,map__20358__$1,attrs,id,map__20359,map__20359__$1,doc,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (update_disabled_QMARK___20202__auto__,vec__20355,type,map__20358,map__20358__$1,attrs,id,map__20359,map__20359__$1,doc,save_BANG_){
return (function (p1__20352_SHARP_){
return save_BANG_.call(null,id,cljs.core.first.call(null,cljs.core.array_seq.call(null,p1__20352_SHARP_.target.files)));
});})(update_disabled_QMARK___20202__auto__,vec__20355,type,map__20358,map__20358__$1,attrs,id,map__20359,map__20359__$1,doc,save_BANG_))
], null),attrs)], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20355,type,map__20358,map__20358__$1,attrs,id,map__20359,map__20359__$1,doc,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"files","files",-472457450),(function (p__20363,p__20364){
var vec__20365 = p__20363;
var type = cljs.core.nth.call(null,vec__20365,(0),null);
var map__20368 = cljs.core.nth.call(null,vec__20365,(1),null);
var map__20368__$1 = ((((!((map__20368 == null)))?(((((map__20368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20368):map__20368);
var attrs = map__20368__$1;
var id = cljs.core.get.call(null,map__20368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__20369 = p__20364;
var map__20369__$1 = ((((!((map__20369 == null)))?(((((map__20369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20369):map__20369);
var doc = cljs.core.get.call(null,map__20369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__20369__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__20365,type,map__20368,map__20368__$1,attrs,id,map__20369,map__20369__$1,doc,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20365,type,map__20368,map__20368__$1,attrs,id,map__20369,map__20369__$1,doc,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20365,type,map__20368,map__20368__$1,attrs,id,map__20369,map__20369__$1,doc,save_BANG_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (update_disabled_QMARK___20202__auto__,vec__20365,type,map__20368,map__20368__$1,attrs,id,map__20369,map__20369__$1,doc,save_BANG_){
return (function (p1__20362_SHARP_){
return save_BANG_.call(null,id,p1__20362_SHARP_.target.files);
});})(update_disabled_QMARK___20202__auto__,vec__20365,type,map__20368,map__20368__$1,attrs,id,map__20369,map__20369__$1,doc,save_BANG_))
], null),attrs)], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20365,type,map__20368,map__20368__$1,attrs,id,map__20369,map__20369__$1,doc,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__20372,p__20373,selections,field,id){
var vec__20374 = p__20372;
var seq__20375 = cljs.core.seq.call(null,vec__20374);
var first__20376 = cljs.core.first.call(null,seq__20375);
var seq__20375__$1 = cljs.core.next.call(null,seq__20375);
var type = first__20376;
var first__20376__$1 = cljs.core.first.call(null,seq__20375__$1);
var seq__20375__$2 = cljs.core.next.call(null,seq__20375__$1);
var map__20377 = first__20376__$1;
var map__20377__$1 = ((((!((map__20377 == null)))?(((((map__20377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20377):map__20377);
var attrs = map__20377__$1;
var key = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var disabled = cljs.core.get.call(null,map__20377__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var body = seq__20375__$2;
var map__20378 = p__20373;
var map__20378__$1 = ((((!((map__20378 == null)))?(((((map__20378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20378):map__20378);
var save_BANG_ = cljs.core.get.call(null,map__20378__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__20378__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__20374,seq__20375,first__20376,seq__20375__$1,type,first__20376__$1,seq__20375__$2,map__20377,map__20377__$1,attrs,key,touch_event,disabled,body,map__20378,map__20378__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.not.call(null,value)]));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__20374,seq__20375,first__20376,seq__20375__$1,type,first__20376__$1,seq__20375__$2,map__20377,map__20377__$1,attrs,key,touch_event,disabled,body,map__20378,map__20378__$1,save_BANG_,multi_select))
;
return ((function (vec__20374,seq__20375,first__20376,seq__20375__$1,type,first__20376__$1,seq__20375__$2,map__20377,map__20377__$1,attrs,key,touch_event,disabled,body,map__20378,map__20378__$1,save_BANG_,multi_select){
return (function (){
var disabled_QMARK_ = ((cljs.core.fn_QMARK_.call(null,disabled))?disabled.call(null):disabled);
var active_QMARK_ = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
var button_or_input_QMARK_ = (function (){var t = cljs.core.subs.call(null,cljs.core.name.call(null,type),(0),(5));
return ((cljs.core._EQ_.call(null,t,"butto")) || (cljs.core._EQ_.call(null,t,"input")));
})();
var class$ = clojure.string.join.call(null," ",cljs.core.remove.call(null,clojure.string.blank_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(active_QMARK_)?"active":null),(cljs.core.truth_((function (){var and__3938__auto__ = disabled_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return !(button_or_input_QMARK_);
} else {
return and__3938__auto__;
}
})())?"disabled":null)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"class","class",-2030961996),class$,(function (){var or__3949__auto__ = touch_event;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),(cljs.core.truth_(disabled_QMARK_)?null:handle_click_BANG_)]),reagent_forms.core.clean_attrs.call(null,attrs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null)),((button_or_input_QMARK_)?null:new cljs.core.Keyword(null,"disabled","disabled",-1529784218))),body], null);
});
;})(vec__20374,seq__20375,first__20376,seq__20375__$1,type,first__20376__$1,seq__20375__$2,map__20377,map__20377__$1,attrs,key,touch_event,disabled,body,map__20378,map__20378__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__20381){
var map__20382 = p__20381;
var map__20382__$1 = ((((!((map__20382 == null)))?(((((map__20382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20382):map__20382);
var ks = map__20382__$1;
var get = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__20382__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__20382,map__20382__$1,ks,get,multi_select){
return (function (m,p__20384){
var vec__20385 = p__20384;
var _ = cljs.core.nth.call(null,vec__20385,(0),null);
var map__20388 = cljs.core.nth.call(null,vec__20385,(1),null);
var map__20388__$1 = ((((!((map__20388 == null)))?(((((map__20388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20388):map__20388);
var key = cljs.core.get.call(null,map__20388__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key]),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__20382,map__20382__$1,ks,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__20392,p__20393){
var vec__20394 = p__20392;
var seq__20395 = cljs.core.seq.call(null,vec__20394);
var first__20396 = cljs.core.first.call(null,seq__20395);
var seq__20395__$1 = cljs.core.next.call(null,seq__20395);
var type = first__20396;
var first__20396__$1 = cljs.core.first.call(null,seq__20395__$1);
var seq__20395__$2 = cljs.core.next.call(null,seq__20395__$1);
var map__20397 = first__20396__$1;
var map__20397__$1 = ((((!((map__20397 == null)))?(((((map__20397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20397):map__20397);
var attrs = map__20397__$1;
var field = cljs.core.get.call(null,map__20397__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__20397__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = seq__20395__$2;
var map__20398 = p__20393;
var map__20398__$1 = ((((!((map__20398 == null)))?(((((map__20398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20398):map__20398);
var opts = map__20398__$1;
var get = cljs.core.get.call(null,map__20398__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__20398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc){
return (function (p1__20390_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc){
return (function (p__20401){
var vec__20402 = p__20401;
var k = cljs.core.nth.call(null,vec__20402,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc))
,p1__20390_SHARP_));
});})(selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,reagent_forms.core.clean_attrs.call(null,attrs)], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc){
return (function (p1__20391_SHARP_){
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__20391_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var visible_QMARK_ = temp__5455__auto__;
return reagent_forms.core.call_attr.call(null,doc,visible_QMARK_);
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__20394,seq__20395,first__20396,seq__20395__$1,type,first__20396__$1,seq__20395__$2,map__20397,map__20397__$1,attrs,field,id,selection_items,map__20398,map__20398__$1,opts,get,doc))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__20405,p__20406){
var vec__20407 = p__20405;
var _ = cljs.core.nth.call(null,vec__20407,(0),null);
var attrs = cljs.core.nth.call(null,vec__20407,(1),null);
var field = vec__20407;
var map__20410 = p__20406;
var map__20410__$1 = ((((!((map__20410 == null)))?(((((map__20410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20410):map__20410);
var opts = map__20410__$1;
var doc = cljs.core.get.call(null,map__20410__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20407,_,attrs,field,map__20410,map__20410__$1,opts,doc){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20407,_,attrs,field,map__20410,map__20410__$1,opts,doc){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20407,_,attrs,field,map__20410,map__20410__$1,opts,doc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20407,_,attrs,field,map__20410,map__20410__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__20412,p__20413){
var vec__20414 = p__20412;
var _ = cljs.core.nth.call(null,vec__20414,(0),null);
var attrs = cljs.core.nth.call(null,vec__20414,(1),null);
var field = vec__20414;
var map__20417 = p__20413;
var map__20417__$1 = ((((!((map__20417 == null)))?(((((map__20417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20417):map__20417);
var opts = map__20417__$1;
var doc = cljs.core.get.call(null,map__20417__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__20414,_,attrs,field,map__20417,map__20417__$1,opts,doc){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,vec__20414,_,attrs,field,map__20417,map__20417__$1,opts,doc){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,vec__20414,_,attrs,field,map__20417,map__20417__$1,opts,doc))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(vec__20414,_,attrs,field,map__20417,map__20417__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4324__auto__ = (function reagent_forms$core$map_options_$_iter__20419(s__20420){
return (new cljs.core.LazySeq(null,(function (){
var s__20420__$1 = s__20420;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20420__$1);
if(temp__5457__auto__){
var s__20420__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20420__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__20420__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__20422 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__20421 = (0);
while(true){
if((i__20421 < size__4323__auto__)){
var vec__20423 = cljs.core._nth.call(null,c__4322__auto__,i__20421);
var _ = cljs.core.nth.call(null,vec__20423,(0),null);
var map__20426 = cljs.core.nth.call(null,vec__20423,(1),null);
var map__20426__$1 = ((((!((map__20426 == null)))?(((((map__20426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20426):map__20426);
var key = cljs.core.get.call(null,map__20426__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__20423,(2),null);
cljs.core.chunk_append.call(null,b__20422,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null));

var G__20433 = (i__20421 + (1));
i__20421 = G__20433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20422),reagent_forms$core$map_options_$_iter__20419.call(null,cljs.core.chunk_rest.call(null,s__20420__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20422),null);
}
} else {
var vec__20428 = cljs.core.first.call(null,s__20420__$2);
var _ = cljs.core.nth.call(null,vec__20428,(0),null);
var map__20431 = cljs.core.nth.call(null,vec__20428,(1),null);
var map__20431__$1 = ((((!((map__20431 == null)))?(((((map__20431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20431):map__20431);
var key = cljs.core.get.call(null,map__20431__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__20428,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__20419.call(null,cljs.core.rest.call(null,s__20420__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__20434_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__20434_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__20437,p__20438){
var vec__20439 = p__20437;
var seq__20440 = cljs.core.seq.call(null,vec__20439);
var first__20441 = cljs.core.first.call(null,seq__20440);
var seq__20440__$1 = cljs.core.next.call(null,seq__20440);
var type = first__20441;
var first__20441__$1 = cljs.core.first.call(null,seq__20440__$1);
var seq__20440__$2 = cljs.core.next.call(null,seq__20440__$1);
var map__20442 = first__20441__$1;
var map__20442__$1 = ((((!((map__20442 == null)))?(((((map__20442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20442):map__20442);
var attrs = map__20442__$1;
var id = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = seq__20440__$2;
var map__20443 = p__20438;
var map__20443__$1 = ((((!((map__20443 == null)))?(((((map__20443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20443):map__20443);
var doc = cljs.core.get.call(null,map__20443__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__20443__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__20443__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__3949__auto__ = get.call(null,id);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_){
return (function (){
var update_disabled_QMARK___20202__auto__ = cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(attrs)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),new cljs.core.Keyword(null,"single-select","single-select",1327691774)], null)));
var body__20203__auto__ = clojure.walk.postwalk.call(null,((function (update_disabled_QMARK___20202__auto__,options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_){
return (function (c__20204__auto__){
if(cljs.core.map_QMARK_.call(null,c__20204__auto__)){
return reagent_forms.core.clean_attrs.call(null,reagent_forms.core.set_disabled.call(null,reagent_forms.core.update_attrs.call(null,reagent_forms.core.set_validation_class.call(null,c__20204__auto__,doc),doc),update_disabled_QMARK___20202__auto__));
} else {
return c__20204__auto__;
}
});})(update_disabled_QMARK___20202__auto__,options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (update_disabled_QMARK___20202__auto__,options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_){
return (function (p1__20435_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__20435_SHARP_)));
});})(update_disabled_QMARK___20202__auto__,options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (update_disabled_QMARK___20202__auto__,options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_){
return (function (p1__20436_SHARP_){
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20436_SHARP_));
if(cljs.core.truth_(temp__5455__auto__)){
var visible = temp__5455__auto__;
return reagent_forms.core.call_attr.call(null,doc,visible);
} else {
return true;
}
});})(update_disabled_QMARK___20202__auto__,options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_))
,options__$1))], null));
var temp__5455__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__5455__auto__)){
var visible__20205__auto__ = temp__5455__auto__;
if(cljs.core.truth_(reagent_forms.core.call_attr.call(null,doc,visible__20205__auto__))){
return body__20203__auto__;
} else {
return null;
}
} else {
return body__20203__auto__;
}
});
;})(options__$1,options_lookup,selection,vec__20439,seq__20440,first__20441,seq__20440__$1,type,first__20441__$1,seq__20440__$2,map__20442,map__20442__$1,attrs,id,options,map__20443,map__20443__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return ((cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500))));
});
reagent_forms.core.make_form = (function reagent_forms$core$make_form(form,opts){
return clojure.walk.postwalk.call(null,(function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
}),form);
});
if((typeof reagent_forms !== 'undefined') && (typeof reagent_forms.core !== 'undefined') && (typeof reagent_forms.core.bind_fields !== 'undefined')){
} else {
/**
 * Creates data bindings between the form fields and the supplied atom or calls
 *         the supplied functions (when `doc` is a map) on events triggered by fields.
 *         form - the form template with the fields
 *         doc - the document that the fields will be bound to
 *         events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind-fields"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function() { 
var G__20446__delegate = function (_,doc,___$1){
return cljs.core.type.call(null,doc);
};
var G__20446 = function (_,doc,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__20447__i = 0, G__20447__a = new Array(arguments.length -  2);
while (G__20447__i < G__20447__a.length) {G__20447__a[G__20447__i] = arguments[G__20447__i + 2]; ++G__20447__i;}
  ___$1 = new cljs.core.IndexedSeq(G__20447__a,0,null);
} 
return G__20446__delegate.call(this,_,doc,___$1);};
G__20446.cljs$lang$maxFixedArity = 2;
G__20446.cljs$lang$applyTo = (function (arglist__20448){
var _ = cljs.core.first(arglist__20448);
arglist__20448 = cljs.core.next(arglist__20448);
var doc = cljs.core.first(arglist__20448);
var ___$1 = cljs.core.rest(arglist__20448);
return G__20446__delegate(_,doc,___$1);
});
G__20446.cljs$core$IFn$_invoke$arity$variadic = G__20446__delegate;
return G__20446;
})()
;})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind_fields,cljs.core.PersistentArrayMap,(function (form,opts){
var form__$1 = reagent_forms.core.make_form.call(null,form,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts,new cljs.core.Keyword(null,"get","get",1683182755),(function (get){
return (function (id){
return get.call(null,reagent_forms.core.id__GT_path.call(null,id));
});
})),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (save_BANG_){
return (function (id,value){
return save_BANG_.call(null,reagent_forms.core.id__GT_path.call(null,id),value);
});
})),new cljs.core.Keyword(null,"update!","update!",-1453508586),(function (update_BANG_){
return (function (id,save_fn,value){
return update_BANG_.call(null,reagent_forms.core.id__GT_path.call(null,id),save_fn,value);
});
})));
return ((function (form__$1){
return (function (){
return form__$1;
});
;})(form__$1))
}));
cljs.core._add_method.call(null,reagent_forms.core.bind_fields,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__20450__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__20449_SHARP_){
return cljs.core.deref.call(null,reagent_forms.core.cursor_for_id.call(null,doc,p1__20449_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events),new cljs.core.Keyword(null,"update!","update!",-1453508586),reagent_forms.core.mk_update_fn.call(null,doc,events)], null);
var form__$1 = reagent_forms.core.make_form.call(null,form,opts);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var G__20450 = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__20451__i = 0, G__20451__a = new Array(arguments.length -  2);
while (G__20451__i < G__20451__a.length) {G__20451__a[G__20451__i] = arguments[G__20451__i + 2]; ++G__20451__i;}
  events = new cljs.core.IndexedSeq(G__20451__a,0,null);
} 
return G__20450__delegate.call(this,form,doc,events);};
G__20450.cljs$lang$maxFixedArity = 2;
G__20450.cljs$lang$applyTo = (function (arglist__20452){
var form = cljs.core.first(arglist__20452);
arglist__20452 = cljs.core.next(arglist__20452);
var doc = cljs.core.first(arglist__20452);
var events = cljs.core.rest(arglist__20452);
return G__20450__delegate(form,doc,events);
});
G__20450.cljs$core$IFn$_invoke$arity$variadic = G__20450__delegate;
return G__20450;
})()
);

//# sourceMappingURL=core.js.map
