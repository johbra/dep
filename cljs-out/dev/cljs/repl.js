// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23604){
var map__23605 = p__23604;
var map__23605__$1 = ((((!((map__23605 == null)))?(((((map__23605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23605):map__23605);
var m = map__23605__$1;
var n = cljs.core.get.call(null,map__23605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__23607_23629 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23608_23630 = null;
var count__23609_23631 = (0);
var i__23610_23632 = (0);
while(true){
if((i__23610_23632 < count__23609_23631)){
var f_23633 = cljs.core._nth.call(null,chunk__23608_23630,i__23610_23632);
cljs.core.println.call(null,"  ",f_23633);


var G__23634 = seq__23607_23629;
var G__23635 = chunk__23608_23630;
var G__23636 = count__23609_23631;
var G__23637 = (i__23610_23632 + (1));
seq__23607_23629 = G__23634;
chunk__23608_23630 = G__23635;
count__23609_23631 = G__23636;
i__23610_23632 = G__23637;
continue;
} else {
var temp__5457__auto___23638 = cljs.core.seq.call(null,seq__23607_23629);
if(temp__5457__auto___23638){
var seq__23607_23639__$1 = temp__5457__auto___23638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23607_23639__$1)){
var c__4351__auto___23640 = cljs.core.chunk_first.call(null,seq__23607_23639__$1);
var G__23641 = cljs.core.chunk_rest.call(null,seq__23607_23639__$1);
var G__23642 = c__4351__auto___23640;
var G__23643 = cljs.core.count.call(null,c__4351__auto___23640);
var G__23644 = (0);
seq__23607_23629 = G__23641;
chunk__23608_23630 = G__23642;
count__23609_23631 = G__23643;
i__23610_23632 = G__23644;
continue;
} else {
var f_23645 = cljs.core.first.call(null,seq__23607_23639__$1);
cljs.core.println.call(null,"  ",f_23645);


var G__23646 = cljs.core.next.call(null,seq__23607_23639__$1);
var G__23647 = null;
var G__23648 = (0);
var G__23649 = (0);
seq__23607_23629 = G__23646;
chunk__23608_23630 = G__23647;
count__23609_23631 = G__23648;
i__23610_23632 = G__23649;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23650 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23650);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23650)))?cljs.core.second.call(null,arglists_23650):arglists_23650));
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
var seq__23611_23651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23612_23652 = null;
var count__23613_23653 = (0);
var i__23614_23654 = (0);
while(true){
if((i__23614_23654 < count__23613_23653)){
var vec__23615_23655 = cljs.core._nth.call(null,chunk__23612_23652,i__23614_23654);
var name_23656 = cljs.core.nth.call(null,vec__23615_23655,(0),null);
var map__23618_23657 = cljs.core.nth.call(null,vec__23615_23655,(1),null);
var map__23618_23658__$1 = ((((!((map__23618_23657 == null)))?(((((map__23618_23657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23618_23657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23618_23657):map__23618_23657);
var doc_23659 = cljs.core.get.call(null,map__23618_23658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23660 = cljs.core.get.call(null,map__23618_23658__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23656);

cljs.core.println.call(null," ",arglists_23660);

if(cljs.core.truth_(doc_23659)){
cljs.core.println.call(null," ",doc_23659);
} else {
}


var G__23661 = seq__23611_23651;
var G__23662 = chunk__23612_23652;
var G__23663 = count__23613_23653;
var G__23664 = (i__23614_23654 + (1));
seq__23611_23651 = G__23661;
chunk__23612_23652 = G__23662;
count__23613_23653 = G__23663;
i__23614_23654 = G__23664;
continue;
} else {
var temp__5457__auto___23665 = cljs.core.seq.call(null,seq__23611_23651);
if(temp__5457__auto___23665){
var seq__23611_23666__$1 = temp__5457__auto___23665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23611_23666__$1)){
var c__4351__auto___23667 = cljs.core.chunk_first.call(null,seq__23611_23666__$1);
var G__23668 = cljs.core.chunk_rest.call(null,seq__23611_23666__$1);
var G__23669 = c__4351__auto___23667;
var G__23670 = cljs.core.count.call(null,c__4351__auto___23667);
var G__23671 = (0);
seq__23611_23651 = G__23668;
chunk__23612_23652 = G__23669;
count__23613_23653 = G__23670;
i__23614_23654 = G__23671;
continue;
} else {
var vec__23620_23672 = cljs.core.first.call(null,seq__23611_23666__$1);
var name_23673 = cljs.core.nth.call(null,vec__23620_23672,(0),null);
var map__23623_23674 = cljs.core.nth.call(null,vec__23620_23672,(1),null);
var map__23623_23675__$1 = ((((!((map__23623_23674 == null)))?(((((map__23623_23674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23623_23674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23623_23674):map__23623_23674);
var doc_23676 = cljs.core.get.call(null,map__23623_23675__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23677 = cljs.core.get.call(null,map__23623_23675__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23673);

cljs.core.println.call(null," ",arglists_23677);

if(cljs.core.truth_(doc_23676)){
cljs.core.println.call(null," ",doc_23676);
} else {
}


var G__23678 = cljs.core.next.call(null,seq__23611_23666__$1);
var G__23679 = null;
var G__23680 = (0);
var G__23681 = (0);
seq__23611_23651 = G__23678;
chunk__23612_23652 = G__23679;
count__23613_23653 = G__23680;
i__23614_23654 = G__23681;
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

var seq__23625 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23626 = null;
var count__23627 = (0);
var i__23628 = (0);
while(true){
if((i__23628 < count__23627)){
var role = cljs.core._nth.call(null,chunk__23626,i__23628);
var temp__5457__auto___23682__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23682__$1)){
var spec_23683 = temp__5457__auto___23682__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23683));
} else {
}


var G__23684 = seq__23625;
var G__23685 = chunk__23626;
var G__23686 = count__23627;
var G__23687 = (i__23628 + (1));
seq__23625 = G__23684;
chunk__23626 = G__23685;
count__23627 = G__23686;
i__23628 = G__23687;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__23625);
if(temp__5457__auto____$1){
var seq__23625__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23625__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__23625__$1);
var G__23688 = cljs.core.chunk_rest.call(null,seq__23625__$1);
var G__23689 = c__4351__auto__;
var G__23690 = cljs.core.count.call(null,c__4351__auto__);
var G__23691 = (0);
seq__23625 = G__23688;
chunk__23626 = G__23689;
count__23627 = G__23690;
i__23628 = G__23691;
continue;
} else {
var role = cljs.core.first.call(null,seq__23625__$1);
var temp__5457__auto___23692__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___23692__$2)){
var spec_23693 = temp__5457__auto___23692__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23693));
} else {
}


var G__23694 = cljs.core.next.call(null,seq__23625__$1);
var G__23695 = null;
var G__23696 = (0);
var G__23697 = (0);
seq__23625 = G__23694;
chunk__23626 = G__23695;
count__23627 = G__23696;
i__23628 = G__23697;
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
