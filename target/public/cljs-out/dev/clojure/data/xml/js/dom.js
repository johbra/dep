// Compiled by ClojureScript 1.10.339 {}
goog.provide('clojure.data.xml.js.dom');
goog.require('cljs.core');
goog.require('clojure.data.xml.name');
goog.require('clojure.data.xml.node');
clojure.data.xml.js.dom.doc = (new DOMParser()).parseFromString("<d />","text/xml");
/**
 * Create a Text node
 */
clojure.data.xml.js.dom.text_node = (function clojure$data$xml$js$dom$text_node(s){
return clojure.data.xml.js.dom.doc.createTextNode(s);
});
/**
 * Create an xml element from a content collection and optional metadata
 */
clojure.data.xml.js.dom.element_STAR_ = (function clojure$data$xml$js$dom$element_STAR_(var_args){
var G__14395 = arguments.length;
switch (G__14395) {
case 4:
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (tag,attrs,content,meta){
var el = clojure.data.xml.js.dom.element_STAR_.call(null,tag,attrs,content);
var x14396_14399 = el;
x14396_14399.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x14396_14399.cljs$core$IMeta$_meta$arity$1 = ((function (x14396_14399,el){
return (function (_){
var ___$1 = this;
return meta;
});})(x14396_14399,el))
;

x14396_14399.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL;

x14396_14399.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x14396_14399,el){
return (function (_,meta__$1){
var ___$1 = this;
var x14397 = cljs.core.clone.call(null,el);
x14397.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x14397.cljs$core$IMeta$_meta$arity$1 = ((function (x14397,___$1,x14396_14399,el){
return (function (___$2){
var ___$3 = this;
return meta__$1;
});})(x14397,___$1,x14396_14399,el))
;

x14397.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL;

x14397.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x14397,___$1,x14396_14399,el){
return (function (___$2,meta__$2){
var ___$3 = this;
return cljs.core._with_meta.call(null,el,meta__$2);
});})(x14397,___$1,x14396_14399,el))
;

return x14397;
});})(x14396_14399,el))
;


return el;
});

clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
var el = clojure.data.xml.js.dom.doc.createElementNS(clojure.data.xml.name.qname_uri.call(null,tag),clojure.data.xml.name.qname_local.call(null,tag));
cljs.core.reduce_kv.call(null,((function (el){
return (function (_,k,v){
var uri = clojure.data.xml.name.qname_uri.call(null,k);
if(cljs.core._EQ_.call(null,uri,"http://www.w3.org/2000/xmlns/")){
return el.setAttribute(["xmlns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.name.qname_local.call(null,k))].join(''),v);
} else {
return el.setAttributeNS(uri,clojure.data.xml.name.qname_local.call(null,k),v);
}
});})(el))
,null,attrs);

cljs.core.reduce.call(null,((function (el){
return (function (_,n){
return el.appendChild(((typeof n === 'string')?clojure.data.xml.js.dom.text_node.call(null,n):n));
});})(el))
,null,content);

return el;
});

clojure.data.xml.js.dom.element_STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.js.dom.element = (function clojure$data$xml$js$dom$element(var_args){
var G__14404 = arguments.length;
switch (G__14404) {
case 1:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14406 = arguments.length;
var i__4532__auto___14407 = (0);
while(true){
if((i__4532__auto___14407 < len__4531__auto___14406)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14407]));

var G__14408 = (i__4532__auto___14407 + (1));
i__4532__auto___14407 = G__14408;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.js.dom.element_STAR_.call(null,tag,null,null);
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.js.dom.element_STAR_.call(null,tag,attrs,null);
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.js.dom.element_STAR_.call(null,tag,attrs,content);
});

/** @this {Function} */
clojure.data.xml.js.dom.element.cljs$lang$applyTo = (function (seq14401){
var G__14402 = cljs.core.first.call(null,seq14401);
var seq14401__$1 = cljs.core.next.call(null,seq14401);
var G__14403 = cljs.core.first.call(null,seq14401__$1);
var seq14401__$2 = cljs.core.next.call(null,seq14401__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14402,G__14403,seq14401__$2);
});

clojure.data.xml.js.dom.element.cljs$lang$maxFixedArity = (2);

/**
 * Create a CData node
 */
clojure.data.xml.js.dom.cdata = (function clojure$data$xml$js$dom$cdata(content){
return clojure.data.xml.js.dom.doc.createCDATASection(content);
});
/**
 * Create a Comment node
 */
clojure.data.xml.js.dom.xml_comment = (function clojure$data$xml$js$dom$xml_comment(content){
return clojure.data.xml.js.dom.doc.createComment(content);
});
/**
 * Create a NodeList
 */
clojure.data.xml.js.dom.node_list = (function clojure$data$xml$js$dom$node_list(elements){
var f = clojure.data.xml.js.dom.doc.createDocumentFragment();
var seq__14409_14413 = cljs.core.seq.call(null,elements);
var chunk__14410_14414 = null;
var count__14411_14415 = (0);
var i__14412_14416 = (0);
while(true){
if((i__14412_14416 < count__14411_14415)){
var el_14417 = cljs.core._nth.call(null,chunk__14410_14414,i__14412_14416);
f.appendChild(clojure.data.xml.js.dom.element_node.call(null,el_14417));


var G__14418 = seq__14409_14413;
var G__14419 = chunk__14410_14414;
var G__14420 = count__14411_14415;
var G__14421 = (i__14412_14416 + (1));
seq__14409_14413 = G__14418;
chunk__14410_14414 = G__14419;
count__14411_14415 = G__14420;
i__14412_14416 = G__14421;
continue;
} else {
var temp__5457__auto___14422 = cljs.core.seq.call(null,seq__14409_14413);
if(temp__5457__auto___14422){
var seq__14409_14423__$1 = temp__5457__auto___14422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14409_14423__$1)){
var c__4351__auto___14424 = cljs.core.chunk_first.call(null,seq__14409_14423__$1);
var G__14425 = cljs.core.chunk_rest.call(null,seq__14409_14423__$1);
var G__14426 = c__4351__auto___14424;
var G__14427 = cljs.core.count.call(null,c__4351__auto___14424);
var G__14428 = (0);
seq__14409_14413 = G__14425;
chunk__14410_14414 = G__14426;
count__14411_14415 = G__14427;
i__14412_14416 = G__14428;
continue;
} else {
var el_14429 = cljs.core.first.call(null,seq__14409_14423__$1);
f.appendChild(clojure.data.xml.js.dom.element_node.call(null,el_14429));


var G__14430 = cljs.core.next.call(null,seq__14409_14423__$1);
var G__14431 = null;
var G__14432 = (0);
var G__14433 = (0);
seq__14409_14413 = G__14430;
chunk__14410_14414 = G__14431;
count__14411_14415 = G__14432;
i__14412_14416 = G__14433;
continue;
}
} else {
}
}
break;
}

return f.childNodes;
});
clojure.data.xml.js.dom.Text = cljs.core.type.call(null,clojure.data.xml.js.dom.text_node.call(null,""));
clojure.data.xml.js.dom.Element = cljs.core.type.call(null,clojure.data.xml.js.dom.element.call(null,new cljs.core.Keyword(null,"e","e",1381269198)));
clojure.data.xml.js.dom.NamedNodeMap = cljs.core.type.call(null,clojure.data.xml.js.dom.element.call(null,new cljs.core.Keyword(null,"e","e",1381269198)).attributes);
clojure.data.xml.js.dom.NodeList = cljs.core.type.call(null,clojure.data.xml.js.dom.node_list.call(null,cljs.core.PersistentVector.EMPTY));
clojure.data.xml.js.dom.Attr = cljs.core.type.call(null,(clojure.data.xml.js.dom.element.call(null,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"1"], null)).attributes[(0)]));
/**
 * Coerce xml elements to dom nodes
 */
clojure.data.xml.js.dom.element_node = (function clojure$data$xml$js$dom$element_node(el){
if(typeof el === 'string'){
return clojure.data.xml.js.dom.text_node.call(null,el);
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return el;
} else {
if(!((el.item == null))){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.Text)){
return el;
} else {
if(((!((el == null)))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el))){
return clojure.data.xml.js.dom.element_STAR_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el),cljs.core.map.call(null,clojure.data.xml.js.dom.element_node,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el)));
} else {
if(((!((el == null)))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el))){
return clojure.data.xml.js.dom.node_list.call(null,el);
} else {
throw cljs.core.ex_info.call(null,"Cannot coerce",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),el], null));

}
}
}
}
}
}
});
clojure.data.xml.js.dom.dom_element_tag = (function clojure$data$xml$js$dom$dom_element_tag(el){
return clojure.data.xml.name.qname.call(null,el.namespaceURI,el.localName);
});
clojure.data.xml.js.dom.xmlns_attr_QMARK_ = (function clojure$data$xml$js$dom$xmlns_attr_QMARK_(a){
return (clojure.data.xml.name.xmlns_uri === a.namespaceURI);
});
clojure.data.xml.js.dom.remove_xmlns_attrs_xf = cljs.core.remove.call(null,clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.remove_xmlns_attrs = cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.remove_xmlns_attrs_xf);
clojure.data.xml.js.dom.filter_xmlns_attrs_xf = cljs.core.filter.call(null,clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.filter_xmlns_attrs = cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.filter_xmlns_attrs_xf);
clojure.data.xml.js.dom.dom_element_attrs = (function clojure$data$xml$js$dom$dom_element_attrs(var_args){
var G__14437 = arguments.length;
switch (G__14437) {
case 1:
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1 = (function (el){
return clojure.data.xml.js.dom.dom_element_attrs.call(null,clojure.data.xml.js.dom.remove_xmlns_attrs_xf,el);
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2 = (function (xf,el){
return cljs.core.transduce.call(null,xf,cljs.core.completing.call(null,(function (ta,attr_node){
return cljs.core.assoc_BANG_.call(null,ta,clojure.data.xml.js.dom.dom_element_tag.call(null,attr_node),attr_node.value);
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.array_seq.call(null,el));
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$lang$maxFixedArity = 2;

clojure.data.xml.js.dom.node_list_vec = (function clojure$data$xml$js$dom$node_list_vec(nl){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,clojure.data.xml.js.dom.element_data),cljs.core.array_seq.call(null,nl));
});
clojure.data.xml.js.dom.as_node = (function clojure$data$xml$js$dom$as_node(n){
if((n instanceof clojure.data.xml.js.dom.Text)){
return n.nodeValue;
} else {
return n;
}
});
/**
 * Coerce xml elements to element maps / content vectors
 */
clojure.data.xml.js.dom.element_data = (function clojure$data$xml$js$dom$element_data(el){
if((el instanceof clojure.data.xml.js.dom.Text)){
return el.nodeValue;
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return clojure.data.xml.node.element_STAR_.call(null,clojure.data.xml.js.dom.dom_element_tag.call(null,el),clojure.data.xml.js.dom.dom_element_attrs.call(null,el.attributes),clojure.data.xml.js.dom.node_list_vec.call(null,el.childNodes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),clojure.data.xml.js.dom.dom_element_attrs.call(null,clojure.data.xml.js.dom.filter_xmlns_attrs_xf,el.attributes)], null));
} else {
if(cljs.core.truth_(el.getNamedItemNS)){
return clojure.data.xml.js.dom.dom_element_attrs.call(null,el);
} else {
if((el instanceof clojure.data.xml.js.dom.NodeList)){
return clojure.data.xml.js.dom.node_list_vec.call(null,el);
} else {
if(typeof el === 'string'){
return el;
} else {
if(((!((el == null)))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el))){
return el;
} else {
if(((!((el == null)))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el))){
return el;
} else {
throw cljs.core.ex_info.call(null,"Element cannot be converted to data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),el], null));

}
}
}
}
}
}
}
});
