// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23068){
var map__23069 = p__23068;
var map__23069__$1 = ((((!((map__23069 == null)))?(((((map__23069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23069):map__23069);
var m = map__23069__$1;
var n = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23071_23093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23072_23094 = null;
var count__23073_23095 = (0);
var i__23074_23096 = (0);
while(true){
if((i__23074_23096 < count__23073_23095)){
var f_23097 = cljs.core._nth.call(null,chunk__23072_23094,i__23074_23096);
cljs.core.println.call(null,"  ",f_23097);


var G__23098 = seq__23071_23093;
var G__23099 = chunk__23072_23094;
var G__23100 = count__23073_23095;
var G__23101 = (i__23074_23096 + (1));
seq__23071_23093 = G__23098;
chunk__23072_23094 = G__23099;
count__23073_23095 = G__23100;
i__23074_23096 = G__23101;
continue;
} else {
var temp__5457__auto___23102 = cljs.core.seq.call(null,seq__23071_23093);
if(temp__5457__auto___23102){
var seq__23071_23103__$1 = temp__5457__auto___23102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23071_23103__$1)){
var c__4351__auto___23104 = cljs.core.chunk_first.call(null,seq__23071_23103__$1);
var G__23105 = cljs.core.chunk_rest.call(null,seq__23071_23103__$1);
var G__23106 = c__4351__auto___23104;
var G__23107 = cljs.core.count.call(null,c__4351__auto___23104);
var G__23108 = (0);
seq__23071_23093 = G__23105;
chunk__23072_23094 = G__23106;
count__23073_23095 = G__23107;
i__23074_23096 = G__23108;
continue;
} else {
var f_23109 = cljs.core.first.call(null,seq__23071_23103__$1);
cljs.core.println.call(null,"  ",f_23109);


var G__23110 = cljs.core.next.call(null,seq__23071_23103__$1);
var G__23111 = null;
var G__23112 = (0);
var G__23113 = (0);
seq__23071_23093 = G__23110;
chunk__23072_23094 = G__23111;
count__23073_23095 = G__23112;
i__23074_23096 = G__23113;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23114 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23114);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23114)))?cljs.core.second.call(null,arglists_23114):arglists_23114));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23075_23115 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23076_23116 = null;
var count__23077_23117 = (0);
var i__23078_23118 = (0);
while(true){
if((i__23078_23118 < count__23077_23117)){
var vec__23079_23119 = cljs.core._nth.call(null,chunk__23076_23116,i__23078_23118);
var name_23120 = cljs.core.nth.call(null,vec__23079_23119,(0),null);
var map__23082_23121 = cljs.core.nth.call(null,vec__23079_23119,(1),null);
var map__23082_23122__$1 = ((((!((map__23082_23121 == null)))?(((((map__23082_23121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23082_23121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23082_23121):map__23082_23121);
var doc_23123 = cljs.core.get.call(null,map__23082_23122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23124 = cljs.core.get.call(null,map__23082_23122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23120);

cljs.core.println.call(null," ",arglists_23124);

if(cljs.core.truth_(doc_23123)){
cljs.core.println.call(null," ",doc_23123);
} else {
}


var G__23125 = seq__23075_23115;
var G__23126 = chunk__23076_23116;
var G__23127 = count__23077_23117;
var G__23128 = (i__23078_23118 + (1));
seq__23075_23115 = G__23125;
chunk__23076_23116 = G__23126;
count__23077_23117 = G__23127;
i__23078_23118 = G__23128;
continue;
} else {
var temp__5457__auto___23129 = cljs.core.seq.call(null,seq__23075_23115);
if(temp__5457__auto___23129){
var seq__23075_23130__$1 = temp__5457__auto___23129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23075_23130__$1)){
var c__4351__auto___23131 = cljs.core.chunk_first.call(null,seq__23075_23130__$1);
var G__23132 = cljs.core.chunk_rest.call(null,seq__23075_23130__$1);
var G__23133 = c__4351__auto___23131;
var G__23134 = cljs.core.count.call(null,c__4351__auto___23131);
var G__23135 = (0);
seq__23075_23115 = G__23132;
chunk__23076_23116 = G__23133;
count__23077_23117 = G__23134;
i__23078_23118 = G__23135;
continue;
} else {
var vec__23084_23136 = cljs.core.first.call(null,seq__23075_23130__$1);
var name_23137 = cljs.core.nth.call(null,vec__23084_23136,(0),null);
var map__23087_23138 = cljs.core.nth.call(null,vec__23084_23136,(1),null);
var map__23087_23139__$1 = ((((!((map__23087_23138 == null)))?(((((map__23087_23138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23087_23138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23087_23138):map__23087_23138);
var doc_23140 = cljs.core.get.call(null,map__23087_23139__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23141 = cljs.core.get.call(null,map__23087_23139__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23137);

cljs.core.println.call(null," ",arglists_23141);

if(cljs.core.truth_(doc_23140)){
cljs.core.println.call(null," ",doc_23140);
} else {
}


var G__23142 = cljs.core.next.call(null,seq__23075_23130__$1);
var G__23143 = null;
var G__23144 = (0);
var G__23145 = (0);
seq__23075_23115 = G__23142;
chunk__23076_23116 = G__23143;
count__23077_23117 = G__23144;
i__23078_23118 = G__23145;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__23089 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23090 = null;
var count__23091 = (0);
var i__23092 = (0);
while(true){
if((i__23092 < count__23091)){
var role = cljs.core._nth.call(null,chunk__23090,i__23092);
var temp__5457__auto___23146__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23146__$1)){
var spec_23147 = temp__5457__auto___23146__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23147));
} else {
}


var G__23148 = seq__23089;
var G__23149 = chunk__23090;
var G__23150 = count__23091;
var G__23151 = (i__23092 + (1));
seq__23089 = G__23148;
chunk__23090 = G__23149;
count__23091 = G__23150;
i__23092 = G__23151;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__23089);
if(temp__5457__auto____$1){
var seq__23089__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23089__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23089__$1);
var G__23152 = cljs.core.chunk_rest.call(null,seq__23089__$1);
var G__23153 = c__4351__auto__;
var G__23154 = cljs.core.count.call(null,c__4351__auto__);
var G__23155 = (0);
seq__23089 = G__23152;
chunk__23090 = G__23153;
count__23091 = G__23154;
i__23092 = G__23155;
continue;
} else {
var role = cljs.core.first.call(null,seq__23089__$1);
var temp__5457__auto___23156__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23156__$2)){
var spec_23157 = temp__5457__auto___23156__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23157));
} else {
}


var G__23158 = cljs.core.next.call(null,seq__23089__$1);
var G__23159 = null;
var G__23160 = (0);
var G__23161 = (0);
seq__23089 = G__23158;
chunk__23090 = G__23159;
count__23091 = G__23160;
i__23092 = G__23161;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
