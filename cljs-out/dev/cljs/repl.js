// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18395){
var map__18396 = p__18395;
var map__18396__$1 = ((((!((map__18396 == null)))?(((((map__18396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18396):map__18396);
var m = map__18396__$1;
var n = cljs.core.get.call(null,map__18396__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18396__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18398_18420 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18399_18421 = null;
var count__18400_18422 = (0);
var i__18401_18423 = (0);
while(true){
if((i__18401_18423 < count__18400_18422)){
var f_18424 = cljs.core._nth.call(null,chunk__18399_18421,i__18401_18423);
cljs.core.println.call(null,"  ",f_18424);


var G__18425 = seq__18398_18420;
var G__18426 = chunk__18399_18421;
var G__18427 = count__18400_18422;
var G__18428 = (i__18401_18423 + (1));
seq__18398_18420 = G__18425;
chunk__18399_18421 = G__18426;
count__18400_18422 = G__18427;
i__18401_18423 = G__18428;
continue;
} else {
var temp__5457__auto___18429 = cljs.core.seq.call(null,seq__18398_18420);
if(temp__5457__auto___18429){
var seq__18398_18430__$1 = temp__5457__auto___18429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18398_18430__$1)){
var c__4351__auto___18431 = cljs.core.chunk_first.call(null,seq__18398_18430__$1);
var G__18432 = cljs.core.chunk_rest.call(null,seq__18398_18430__$1);
var G__18433 = c__4351__auto___18431;
var G__18434 = cljs.core.count.call(null,c__4351__auto___18431);
var G__18435 = (0);
seq__18398_18420 = G__18432;
chunk__18399_18421 = G__18433;
count__18400_18422 = G__18434;
i__18401_18423 = G__18435;
continue;
} else {
var f_18436 = cljs.core.first.call(null,seq__18398_18430__$1);
cljs.core.println.call(null,"  ",f_18436);


var G__18437 = cljs.core.next.call(null,seq__18398_18430__$1);
var G__18438 = null;
var G__18439 = (0);
var G__18440 = (0);
seq__18398_18420 = G__18437;
chunk__18399_18421 = G__18438;
count__18400_18422 = G__18439;
i__18401_18423 = G__18440;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18441 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18441);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18441)))?cljs.core.second.call(null,arglists_18441):arglists_18441));
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
var seq__18402_18442 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18403_18443 = null;
var count__18404_18444 = (0);
var i__18405_18445 = (0);
while(true){
if((i__18405_18445 < count__18404_18444)){
var vec__18406_18446 = cljs.core._nth.call(null,chunk__18403_18443,i__18405_18445);
var name_18447 = cljs.core.nth.call(null,vec__18406_18446,(0),null);
var map__18409_18448 = cljs.core.nth.call(null,vec__18406_18446,(1),null);
var map__18409_18449__$1 = ((((!((map__18409_18448 == null)))?(((((map__18409_18448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18409_18448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18409_18448):map__18409_18448);
var doc_18450 = cljs.core.get.call(null,map__18409_18449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18451 = cljs.core.get.call(null,map__18409_18449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18447);

cljs.core.println.call(null," ",arglists_18451);

if(cljs.core.truth_(doc_18450)){
cljs.core.println.call(null," ",doc_18450);
} else {
}


var G__18452 = seq__18402_18442;
var G__18453 = chunk__18403_18443;
var G__18454 = count__18404_18444;
var G__18455 = (i__18405_18445 + (1));
seq__18402_18442 = G__18452;
chunk__18403_18443 = G__18453;
count__18404_18444 = G__18454;
i__18405_18445 = G__18455;
continue;
} else {
var temp__5457__auto___18456 = cljs.core.seq.call(null,seq__18402_18442);
if(temp__5457__auto___18456){
var seq__18402_18457__$1 = temp__5457__auto___18456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18402_18457__$1)){
var c__4351__auto___18458 = cljs.core.chunk_first.call(null,seq__18402_18457__$1);
var G__18459 = cljs.core.chunk_rest.call(null,seq__18402_18457__$1);
var G__18460 = c__4351__auto___18458;
var G__18461 = cljs.core.count.call(null,c__4351__auto___18458);
var G__18462 = (0);
seq__18402_18442 = G__18459;
chunk__18403_18443 = G__18460;
count__18404_18444 = G__18461;
i__18405_18445 = G__18462;
continue;
} else {
var vec__18411_18463 = cljs.core.first.call(null,seq__18402_18457__$1);
var name_18464 = cljs.core.nth.call(null,vec__18411_18463,(0),null);
var map__18414_18465 = cljs.core.nth.call(null,vec__18411_18463,(1),null);
var map__18414_18466__$1 = ((((!((map__18414_18465 == null)))?(((((map__18414_18465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18414_18465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18414_18465):map__18414_18465);
var doc_18467 = cljs.core.get.call(null,map__18414_18466__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18468 = cljs.core.get.call(null,map__18414_18466__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18464);

cljs.core.println.call(null," ",arglists_18468);

if(cljs.core.truth_(doc_18467)){
cljs.core.println.call(null," ",doc_18467);
} else {
}


var G__18469 = cljs.core.next.call(null,seq__18402_18457__$1);
var G__18470 = null;
var G__18471 = (0);
var G__18472 = (0);
seq__18402_18442 = G__18469;
chunk__18403_18443 = G__18470;
count__18404_18444 = G__18471;
i__18405_18445 = G__18472;
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

var seq__18416 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18417 = null;
var count__18418 = (0);
var i__18419 = (0);
while(true){
if((i__18419 < count__18418)){
var role = cljs.core._nth.call(null,chunk__18417,i__18419);
var temp__5457__auto___18473__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18473__$1)){
var spec_18474 = temp__5457__auto___18473__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18474));
} else {
}


var G__18475 = seq__18416;
var G__18476 = chunk__18417;
var G__18477 = count__18418;
var G__18478 = (i__18419 + (1));
seq__18416 = G__18475;
chunk__18417 = G__18476;
count__18418 = G__18477;
i__18419 = G__18478;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18416);
if(temp__5457__auto____$1){
var seq__18416__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18416__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18416__$1);
var G__18479 = cljs.core.chunk_rest.call(null,seq__18416__$1);
var G__18480 = c__4351__auto__;
var G__18481 = cljs.core.count.call(null,c__4351__auto__);
var G__18482 = (0);
seq__18416 = G__18479;
chunk__18417 = G__18480;
count__18418 = G__18481;
i__18419 = G__18482;
continue;
} else {
var role = cljs.core.first.call(null,seq__18416__$1);
var temp__5457__auto___18483__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18483__$2)){
var spec_18484 = temp__5457__auto___18483__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18484));
} else {
}


var G__18485 = cljs.core.next.call(null,seq__18416__$1);
var G__18486 = null;
var G__18487 = (0);
var G__18488 = (0);
seq__18416 = G__18485;
chunk__18417 = G__18486;
count__18418 = G__18487;
i__18419 = G__18488;
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
