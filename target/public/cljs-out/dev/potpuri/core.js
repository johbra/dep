// Compiled by ClojureScript 1.10.339 {}
goog.provide('potpuri.core');
goog.require('cljs.core');
var ret__4565__auto___8965 = (function (){
/**
 * Creates a function that threads on input with `some->`
 */
potpuri.core.fn__GT_ = (function potpuri$core$fn__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8966 = arguments.length;
var i__4532__auto___8967 = (0);
while(true){
if((i__4532__auto___8967 < len__4531__auto___8966)){
args__4534__auto__.push((arguments[i__4532__auto___8967]));

var G__8968 = (i__4532__auto___8967 + (1));
i__4532__auto___8967 = G__8968;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return potpuri.core.fn__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

potpuri.core.fn__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8961__auto__","x__8961__auto__",173225712,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->","cljs.core/some->",-67411995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8961__auto__","x__8961__auto__",173225712,null),null,(1),null)),body))),null,(1),null)))));
});

potpuri.core.fn__GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
potpuri.core.fn__GT_.cljs$lang$applyTo = (function (seq8962){
var G__8963 = cljs.core.first.call(null,seq8962);
var seq8962__$1 = cljs.core.next.call(null,seq8962);
var G__8964 = cljs.core.first.call(null,seq8962__$1);
var seq8962__$2 = cljs.core.next.call(null,seq8962__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8963,G__8964,seq8962__$2);
});

return null;
})()
;
potpuri.core.fn__GT_.cljs$lang$macro = true;

var ret__4565__auto___8973 = (function (){
/**
 * Creates a function that threads on input with `some->>`
 */
potpuri.core.fn__GT__GT_ = (function potpuri$core$fn__GT__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8974 = arguments.length;
var i__4532__auto___8975 = (0);
while(true){
if((i__4532__auto___8975 < len__4531__auto___8974)){
args__4534__auto__.push((arguments[i__4532__auto___8975]));

var G__8976 = (i__4532__auto___8975 + (1));
i__4532__auto___8975 = G__8976;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return potpuri.core.fn__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

potpuri.core.fn__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8969__auto__","x__8969__auto__",-1819428565,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some->>","cljs.core/some->>",-244881963,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__8969__auto__","x__8969__auto__",-1819428565,null),null,(1),null)),body))),null,(1),null)))));
});

potpuri.core.fn__GT__GT_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
potpuri.core.fn__GT__GT_.cljs$lang$applyTo = (function (seq8970){
var G__8971 = cljs.core.first.call(null,seq8970);
var seq8970__$1 = cljs.core.next.call(null,seq8970);
var G__8972 = cljs.core.first.call(null,seq8970__$1);
var seq8970__$2 = cljs.core.next.call(null,seq8970__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8971,G__8972,seq8970__$2);
});

return null;
})()
;
potpuri.core.fn__GT__GT_.cljs$lang$macro = true;

var ret__4565__auto___8986 = (function (){
/**
 * A mixture of cond-> and as-> allowing more flexibility in the test and step forms
 */
potpuri.core.condas__GT_ = (function potpuri$core$condas__GT_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___8987 = arguments.length;
var i__4532__auto___8988 = (0);
while(true){
if((i__4532__auto___8988 < len__4531__auto___8987)){
args__4534__auto__.push((arguments[i__4532__auto___8988]));

var G__8989 = (i__4532__auto___8988 + (1));
i__4532__auto___8988 = G__8989;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return potpuri.core.condas__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

potpuri.core.condas__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var pstep = (function (p__8982){
var vec__8983 = p__8982;
var test = cljs.core.nth.call(null,vec__8983,(0),null);
var step = cljs.core.nth.call(null,vec__8983,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),(new cljs.core.List(null,step,null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))));
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses))))))),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))));
});

potpuri.core.condas__GT_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
potpuri.core.condas__GT_.cljs$lang$applyTo = (function (seq8977){
var G__8978 = cljs.core.first.call(null,seq8977);
var seq8977__$1 = cljs.core.next.call(null,seq8977);
var G__8979 = cljs.core.first.call(null,seq8977__$1);
var seq8977__$2 = cljs.core.next.call(null,seq8977__$1);
var G__8980 = cljs.core.first.call(null,seq8977__$2);
var seq8977__$3 = cljs.core.next.call(null,seq8977__$2);
var G__8981 = cljs.core.first.call(null,seq8977__$3);
var seq8977__$4 = cljs.core.next.call(null,seq8977__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8978,G__8979,G__8980,G__8981,seq8977__$4);
});

return null;
})()
;
potpuri.core.condas__GT_.cljs$lang$macro = true;

var ret__4565__auto___8992 = (function (){
/**
 * `bindings => [binding-form test, binding-form test ...]`
 * 
 *   If all tests are `true`, evaluates then with binding-forms bound to the values of
 *   tests, if not, yields `else.`
 */
potpuri.core.if_all_let = (function potpuri$core$if_all_let(var_args){
var G__8991 = arguments.length;
switch (G__8991) {
case 4:
return potpuri.core.if_all_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return potpuri.core.if_all_let.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

potpuri.core.if_all_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("potpuri.core","if-all-let","potpuri.core/if-all-let",1618504224,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
});

potpuri.core.if_all_let.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$){
return cljs.core.reduce.call(null,(function (subform,binding){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,binding)))),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null)))));
}),then,cljs.core.reverse.call(null,cljs.core.partition.call(null,(2),bindings)));
});

potpuri.core.if_all_let.cljs$lang$maxFixedArity = 5;

return null;
})()
;
potpuri.core.if_all_let.cljs$lang$macro = true;

/**
 * Returns vector of tuples containing path vector to the value and the value.
 */
potpuri.core.path_vals = (function potpuri$core$path_vals(m){
var pvals = (function potpuri$core$path_vals_$_pvals(l,p,m__$1){
return cljs.core.reduce.call(null,(function (l__$1,p__8998){
var vec__8999 = p__8998;
var k = cljs.core.nth.call(null,vec__8999,(0),null);
var v = cljs.core.nth.call(null,vec__8999,(1),null);
if(cljs.core.map_QMARK_.call(null,v)){
return potpuri$core$path_vals_$_pvals.call(null,l__$1,cljs.core.conj.call(null,p,k),v);
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,p,k),v], null),l__$1);
}
}),l,m__$1);
});
return pvals.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Re-created a map from it's path-vals extracted with (path-vals).
 */
potpuri.core.assoc_in_path_vals = (function potpuri$core$assoc_in_path_vals(c){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.assoc_in),cljs.core.PersistentArrayMap.EMPTY,c);
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. `keys` is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
potpuri.core.dissoc_in = (function potpuri$core$dissoc_in(m,p__9002){
var vec__9003 = p__9002;
var seq__9004 = cljs.core.seq.call(null,vec__9003);
var first__9005 = cljs.core.first.call(null,seq__9004);
var seq__9004__$1 = cljs.core.next.call(null,seq__9004);
var k = first__9005;
var ks = seq__9004__$1;
var keys = vec__9003;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = potpuri.core.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
var ret__4565__auto___9009 = (function (){
/**
 * Creates map with symbol names as keywords as keys and
 * symbol values as values.
 */
potpuri.core.map_of = (function potpuri$core$map_of(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9010 = arguments.length;
var i__4532__auto___9011 = (0);
while(true){
if((i__4532__auto___9011 < len__4531__auto___9010)){
args__4534__auto__.push((arguments[i__4532__auto___9011]));

var G__9012 = (i__4532__auto___9011 + (1));
i__4532__auto___9011 = G__9012;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return potpuri.core.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

potpuri.core.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,syms)),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,syms),null,(1),null)))));
});

potpuri.core.map_of.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
potpuri.core.map_of.cljs$lang$applyTo = (function (seq9006){
var G__9007 = cljs.core.first.call(null,seq9006);
var seq9006__$1 = cljs.core.next.call(null,seq9006);
var G__9008 = cljs.core.first.call(null,seq9006__$1);
var seq9006__$2 = cljs.core.next.call(null,seq9006__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9007,G__9008,seq9006__$2);
});

return null;
})()
;
potpuri.core.map_of.cljs$lang$macro = true;

/**
 * Recursively merges maps.
 * 
 * If the first parameter is a keyword it tells the strategy to
 * use when merging non-map collections. Options are
 * 
 * - `:replace`, the default, the last value is used
 * - `:into`, if the value in every map is a collection they are concatenated
 *   using into. Thus the type of (first) value is maintained.
 * 
 * Examples:
 * 
 *     (deep-merge {:a {:c 2}} {:a {:b 1}}) => {:a {:b 1 :c 2}}
 *     (deep-merge :replace {:a [1]} {:a [2]}) => {:a [2]}
 *     (deep-merge :into {:a [1]} {:a [2]}) => {:a [1 2]}
 *     (deep-merge {:a 1} nil) => nil
 * 
 * See also: [meta-merge](https://github.com/weavejester/meta-merge).
 */
potpuri.core.deep_merge = (function potpuri$core$deep_merge(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9017 = arguments.length;
var i__4532__auto___9018 = (0);
while(true){
if((i__4532__auto___9018 < len__4531__auto___9017)){
args__4534__auto__.push((arguments[i__4532__auto___9018]));

var G__9019 = (i__4532__auto___9018 + (1));
i__4532__auto___9018 = G__9019;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return potpuri.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

potpuri.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (values){
var vec__9014 = (((cljs.core.first.call(null,values) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,values),cljs.core.first.call(null,values)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [values,new cljs.core.Keyword(null,"replace","replace",-786587770)], null));
var values__$1 = cljs.core.nth.call(null,vec__9014,(0),null);
var strategy = cljs.core.nth.call(null,vec__9014,(1),null);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,values__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.partial.call(null,potpuri.core.deep_merge,strategy),values__$1);
} else {
if(((cljs.core._EQ_.call(null,strategy,new cljs.core.Keyword(null,"into","into",-150836029))) && (cljs.core.every_QMARK_.call(null,cljs.core.coll_QMARK_,values__$1)))){
return cljs.core.reduce.call(null,cljs.core.into,values__$1);
} else {
return cljs.core.last.call(null,values__$1);

}
}
});

potpuri.core.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
potpuri.core.deep_merge.cljs$lang$applyTo = (function (seq9013){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9013));
});

/**
 * Wrap non-collection values into given collection.
 * Collections are only put into the collection (non-wrapped).
 * 
 * Examples:
 * 
 *     (wrap-into [] :a) => [:a]
 *     (wrap-into [] [:a]) => [:a]
 *     (wrap-into #{} [:a]) => #{:a}
 */
potpuri.core.wrap_into = (function potpuri$core$wrap_into(coll,v){
return cljs.core.into.call(null,coll,((cljs.core.coll_QMARK_.call(null,v))?v:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null)));
});
/**
 * Assoc key-value pairs with non-nil values into map.
 */
potpuri.core.assoc_if = (function potpuri$core$assoc_if(var_args){
var G__9025 = arguments.length;
switch (G__9025) {
case 3:
return potpuri.core.assoc_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___9027 = arguments.length;
var i__4532__auto___9028 = (0);
while(true){
if((i__4532__auto___9028 < len__4531__auto___9027)){
args_arr__4546__auto__.push((arguments[i__4532__auto___9028]));

var G__9029 = (i__4532__auto___9028 + (1));
i__4532__auto___9028 = G__9029;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return potpuri.core.assoc_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

potpuri.core.assoc_if.cljs$core$IFn$_invoke$arity$3 = (function (m,key,val){
if(!((val == null))){
return cljs.core.assoc.call(null,m,key,val);
} else {
return m;
}
});

potpuri.core.assoc_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,key,val,kvs){
while(true){
var ret = potpuri.core.assoc_if.call(null,m,key,val);
if(cljs.core.truth_(kvs)){
if(cljs.core.next.call(null,kvs)){
var G__9030 = ret;
var G__9031 = cljs.core.first.call(null,kvs);
var G__9032 = cljs.core.second.call(null,kvs);
var G__9033 = cljs.core.nnext.call(null,kvs);
m = G__9030;
key = G__9031;
val = G__9032;
kvs = G__9033;
continue;
} else {
throw "assoc expects even number of arguments after map/vector, found odd number";
}
} else {
return ret;
}
break;
}
});

/** @this {Function} */
potpuri.core.assoc_if.cljs$lang$applyTo = (function (seq9021){
var G__9022 = cljs.core.first.call(null,seq9021);
var seq9021__$1 = cljs.core.next.call(null,seq9021);
var G__9023 = cljs.core.first.call(null,seq9021__$1);
var seq9021__$2 = cljs.core.next.call(null,seq9021__$1);
var G__9024 = cljs.core.first.call(null,seq9021__$2);
var seq9021__$3 = cljs.core.next.call(null,seq9021__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9022,G__9023,G__9024,seq9021__$3);
});

potpuri.core.assoc_if.cljs$lang$maxFixedArity = (3);

/**
 * Returns a predicate that accepts a value and performs a check based on `where` argument.
 * 
 *   If `where` is a map, returns a predicate that compares all key/value pairs of `where` to
 *   the key/values of the value given to the predicate, and returns truthy value if all
 *   pairs are found.
 * 
 *   If `where` is a function (either `fn?` or `ifn?`), returns `where`.
 * 
 *   For all other values of `where` returns a predicate that compares the argument of predicate
 *   against `where` using `clojure.core/=`.
 */
potpuri.core.where_fn = (function potpuri$core$where_fn(where){
if(cljs.core.map_QMARK_.call(null,where)){
return (function (v){
return cljs.core.every_QMARK_.call(null,(function (p__9034){
var vec__9035 = p__9034;
var where_k = cljs.core.nth.call(null,vec__9035,(0),null);
var where_v = cljs.core.nth.call(null,vec__9035,(1),null);
return cljs.core._EQ_.call(null,cljs.core.get.call(null,v,where_k),where_v);
}),where);
});
} else {
if(cljs.core.ifn_QMARK_.call(null,where)){
return where;
} else {
return (function (v){
return cljs.core._EQ_.call(null,v,where);
});

}
}
});
/**
 * Find index of vector which matches the `where` parameter.
 * 
 * If `where` parameter is:
 * 
 * - a map, a predicate is created which compares every key/value pair of `where` value to
 *   collection value.
 * - something which implements IFn, e.g. keywords and sets, is used as is
 * - other values, compares the item using using `clojure.core/=`
 * 
 * Examples:
 * 
 *     (find-index [1 2 3] even?) => 1
 *     (find-index [{:id 1} {:id 2}] {:id 2}) => 1
 *     (find-index [{:a 1} {:b 2}] :b) => 1
 *     (find-index [1 2 3] #{3}) => 2
 *     (find-index [1 2 3] 3) => 2
 *     (-> [1 2 3] (find-index odd?)) => 0
 */
potpuri.core.find_index = (function potpuri$core$find_index(coll,where){
var pred = potpuri.core.where_fn.call(null,where);
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,((function (pred){
return (function (p1__9039_SHARP_,p2__9038_SHARP_){
if(cljs.core.truth_(pred.call(null,p2__9038_SHARP_))){
return p1__9039_SHARP_;
} else {
return null;
}
});})(pred))
,coll));
});
/**
 * Find first value from collection which matches the `where` parameter.
 * 
 * If `where` parameter is:
 * 
 * - a map, a predicate is created which compares every key/value pair of `where` value to
 *   collection value.
 * - something which implements IFn, e.g. keywords and sets, is used as is
 * - other values, compares the item using using `clojure.core/=`
 * 
 * Examples:
 * 
 *     (find-first [1 2 3] even?) => 2
 *     (find-first [{:id 1} {:id 2, :foo :bar}] {:id 2}) => {:id 2, :foo :bar}
 *     (find-first [{:a 1} {:b 2, :foo :bar}] :b) => {:b 2, :foo :bar}
 *     (find-first [1 2 3] #{3}) => 3
 *     (find-first [1 2 3] 3) => 3
 *     (-> [1 2 3] (find-first odd?)) => 1
 */
potpuri.core.find_first = (function potpuri$core$find_first(coll,where){
var pred = potpuri.core.where_fn.call(null,where);
return cljs.core.some.call(null,((function (pred){
return (function (p1__9040_SHARP_){
if(cljs.core.truth_(pred.call(null,p1__9040_SHARP_))){
return p1__9040_SHARP_;
} else {
return null;
}
});})(pred))
,coll);
});
/**
 * Finds the first element in collection matching `where` parameter and
 * replaces that with `v.`
 * 
 * Implementation depends on collection type.
 */
potpuri.core.assoc_first = (function potpuri$core$assoc_first(coll,where,v){
var pred = potpuri.core.where_fn.call(null,where);
if(cljs.core.vector_QMARK_.call(null,coll)){
return cljs.core.assoc.call(null,coll,potpuri.core.find_index.call(null,coll,pred),v);
} else {
return cljs.core.map.call(null,((function (pred){
return (function (x){
if(cljs.core.truth_(pred.call(null,x))){
return v;
} else {
return x;
}
});})(pred))
,coll);

}
});
/**
 * Finds the first element in collection matching the `where` parameter
 * and updates that using `f.` `f` is called with current value and
 * rest of update-first params.
 * 
 * Implementation depends on collection type.
 */
potpuri.core.update_first = (function potpuri$core$update_first(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9045 = arguments.length;
var i__4532__auto___9046 = (0);
while(true){
if((i__4532__auto___9046 < len__4531__auto___9045)){
args__4534__auto__.push((arguments[i__4532__auto___9046]));

var G__9047 = (i__4532__auto___9046 + (1));
i__4532__auto___9046 = G__9047;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return potpuri.core.update_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

potpuri.core.update_first.cljs$core$IFn$_invoke$arity$variadic = (function (coll,where,f,args){
var pred = potpuri.core.where_fn.call(null,where);
if(cljs.core.vector_QMARK_.call(null,coll)){
return cljs.core.apply.call(null,cljs.core.update_in,coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [potpuri.core.find_index.call(null,coll,pred)], null),f,args);
} else {
return cljs.core.map.call(null,((function (pred){
return (function (x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.apply.call(null,f,x,args);
} else {
return x;
}
});})(pred))
,coll);

}
});

potpuri.core.update_first.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
potpuri.core.update_first.cljs$lang$applyTo = (function (seq9041){
var G__9042 = cljs.core.first.call(null,seq9041);
var seq9041__$1 = cljs.core.next.call(null,seq9041);
var G__9043 = cljs.core.first.call(null,seq9041__$1);
var seq9041__$2 = cljs.core.next.call(null,seq9041__$1);
var G__9044 = cljs.core.first.call(null,seq9041__$2);
var seq9041__$3 = cljs.core.next.call(null,seq9041__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9042,G__9043,G__9044,seq9041__$3);
});

potpuri.core.conjv_SINGLEQUOTE_ = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
/**
 * Append an element to a collection. If collection is `nil`, creates vector
 * instead of sequence. The appending might happen on different places
 * depending on the type of collection.
 * 
 * Examples:
 * 
 *     (conjv nil 5) => [5]
 *     (conjv [1] 2) => [1 2]
 *     (update-in {} [:a] conjv 5) => {:a [5]}
 *     (-> [] (conjv 5)) => [5]
 */
potpuri.core.conjv = (function potpuri$core$conjv(coll,el){
return potpuri.core.conjv_SINGLEQUOTE_.call(null,coll,el);
});
/**
 * Prepend an element to a collection. Returns a vector.
 * 
 * Examples:
 * 
 *     (consv nil 1) => [1]
 *     (consv [2] 1) => [1 2]
 *     (update-in {:a 2} [:a] consv 1) => {:a [1 2]}
 *     (-> [2] (consv 5)) => [1 2]
 */
potpuri.core.consv = (function potpuri$core$consv(coll,el){
return cljs.core.apply.call(null,cljs.core.vector,el,coll);
});
potpuri.core.editable_QMARK_ = (function potpuri$core$editable_QMARK_(coll){
if(!((coll == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
potpuri.core.reduce_map = (function potpuri$core$reduce_map(f,coll){
if(cljs.core.truth_(potpuri.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Map the keys of given associative collection using function.
 */
potpuri.core.map_keys = (function potpuri$core$map_keys(f,coll){
return potpuri.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Map the values of given associative collection using function.
 */
potpuri.core.map_vals = (function potpuri$core$map_vals(f,coll){
return potpuri.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Map the entries of given associative collection using function.
 */
potpuri.core.map_entries = (function potpuri$core$map_entries(f,coll){
return potpuri.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__9049 = f.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var k__$1 = cljs.core.nth.call(null,vec__9049,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__9049,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Filter given associative collection using function on the keys.
 */
potpuri.core.filter_keys = (function potpuri$core$filter_keys(pred,coll){
return potpuri.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Filter given associative collection using function on the values.
 */
potpuri.core.filter_vals = (function potpuri$core$filter_vals(pred,coll){
return potpuri.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Filter given associative collection using function on the values.
 */
potpuri.core.filter_entries = (function potpuri$core$filter_entries(pred,coll){
return potpuri.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Removes given associative collection using function on the keys.
 */
potpuri.core.remove_keys = (function potpuri$core$remove_keys(pred,coll){
return potpuri.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Removes given associative collection using function on the values.
 */
potpuri.core.remove_vals = (function potpuri$core$remove_vals(pred,coll){
return potpuri.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Removes given associative collection using function on the values.
 */
potpuri.core.remove_entries = (function potpuri$core$remove_entries(pred,coll){
return potpuri.core.filter_entries.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a map of the elements of coll keyed by the result of
 *   f on each element. The value at each key will the last item
 *   for given f result.
 */
potpuri.core.index_by = (function potpuri$core$index_by(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,f,cljs.core.identity),coll));
});
/**
 * Returns a sequence of vectors where the i-th vector contains
 *   the i-th element from each of the argument collections. The returned
 *   sequence is as long as the shortest argument.
 * 
 *   Example:
 * 
 *    (zip [1 2 3] [:a :b :c])  => ([1 :a] [2 :b] [3 :c])
 *    (zip [1] [1 2] [1 2 3])   => ([1 1 1])
 */
potpuri.core.zip = (function potpuri$core$zip(var_args){
var args__4534__auto__ = [];
var len__4531__auto___9053 = arguments.length;
var i__4532__auto___9054 = (0);
while(true){
if((i__4532__auto___9054 < len__4531__auto___9053)){
args__4534__auto__.push((arguments[i__4532__auto___9054]));

var G__9055 = (i__4532__auto___9054 + (1));
i__4532__auto___9054 = G__9055;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return potpuri.core.zip.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

potpuri.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,colls);
});

potpuri.core.zip.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
potpuri.core.zip.cljs$lang$applyTo = (function (seq9052){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9052));
});

potpuri.core.build_tree_SINGLEQUOTE_ = (function potpuri$core$build_tree_SINGLEQUOTE_(p__9056,g,items){
var map__9057 = p__9056;
var map__9057__$1 = ((((!((map__9057 == null)))?(((((map__9057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9057):map__9057);
var opts = map__9057__$1;
var id_fn = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var item_fn = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"item-fn","item-fn",-291245183),cljs.core.identity);
var children_fn = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"children-fn","children-fn",-1407047987),cljs.core.identity);
var assoc_children_fn = cljs.core.get.call(null,map__9057__$1,new cljs.core.Keyword(null,"assoc-children-fn","assoc-children-fn",851777232));
return children_fn.call(null,cljs.core.map.call(null,((function (map__9057,map__9057__$1,opts,id_fn,item_fn,children_fn,assoc_children_fn){
return (function (item){
var children = potpuri.core.build_tree_SINGLEQUOTE_.call(null,opts,g,cljs.core.get.call(null,g,id_fn.call(null,item)));
return item_fn.call(null,((cljs.core.seq.call(null,children))?assoc_children_fn.call(null,item,children):item));
});})(map__9057,map__9057__$1,opts,id_fn,item_fn,children_fn,assoc_children_fn))
,items));
});
/**
 * Builds a tree from given items collections.
 * 
 *   ID is what is used to match parents and children.
 *   Root items are those where parent-fn returns nil.
 * 
 *   Options:
 * 
 *   - :parent-fn (required) Used to create a map from ID => children
 *   - :id-fn (required) Used to get the ID from an item
 *   - :assoc-children-fn (required) Attach the children to an item
 *   - :item-fn (optional) Called for each item, after children has been attached to the item
 *   - :children-fn (optional) Called for each children collection
 * 
 *   Example:
 *  (build-tree {:id-fn :id, :parent-fn :parent, :assoc-children-fn #(assoc %1 :children %2)}
 *              [{:id 1} {:id 2 :parent 1} {:id 3 :parent 1}])
 *  => [{:id 1 :children [{:id 2} {:id 3}]}]
 * 
 *   Check test file for more examples.
 */
potpuri.core.build_tree = (function potpuri$core$build_tree(p__9059,items){
var map__9060 = p__9059;
var map__9060__$1 = ((((!((map__9060 == null)))?(((((map__9060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9060):map__9060);
var opts = map__9060__$1;
var parent_fn = cljs.core.get.call(null,map__9060__$1,new cljs.core.Keyword(null,"parent-fn","parent-fn",-933061273));
var id_fn = cljs.core.get.call(null,map__9060__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798));
var assoc_children_fn = cljs.core.get.call(null,map__9060__$1,new cljs.core.Keyword(null,"assoc-children-fn","assoc-children-fn",851777232));
if(cljs.core.truth_(parent_fn)){
} else {
throw (new Error(["Assert failed: ",":parent-fn option is required.","\n","parent-fn"].join('')));
}

if(cljs.core.truth_(id_fn)){
} else {
throw (new Error(["Assert failed: ",":id-fn option is required.","\n","id-fn"].join('')));
}

if(cljs.core.truth_(assoc_children_fn)){
} else {
throw (new Error(["Assert failed: ",":assoc-children-fn option is required.","\n","assoc-children-fn"].join('')));
}

var g = cljs.core.group_by.call(null,parent_fn,items);
return potpuri.core.build_tree_SINGLEQUOTE_.call(null,opts,g,cljs.core.get.call(null,g,null));
});

//# sourceMappingURL=core.js.map
