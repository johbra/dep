// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.quartal');
goog.require('cljs.core');
dep.model.quartal.__GT_Quartal = (function dep$model$quartal$__GT_Quartal(nr,jahr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(1),null,(4),null,(3),null,(2),null], null), null),nr)){
} else {
throw (new Error("Assert failed: (contains? #{1 4 3 2} nr)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nr","nr",289850932),nr,new cljs.core.Keyword(null,"jahr","jahr",1260355162),jahr], null);
});
/**
 * Wandelt strng in number.
 */
dep.model.quartal.parse_int = (function dep$model$quartal$parse_int(strng){
return parseInt(strng);
});
/**
 * Liefert das Geschäftsjahr, in dem Quartal liegt.
 */
dep.model.quartal.geschaeftsjahreszahl = (function dep$model$quartal$geschaeftsjahreszahl(quartal){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(quartal),(4))){
return (new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(quartal) + (1));
} else {
return new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(quartal);
}
});
/**
 * Bildet die Differenz zweier Quartale.
 */
dep.model.quartal.minus = (function dep$model$quartal$minus(q1,q2){
return dep.model.quartal.__GT_Quartal.call(null,new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(q1),(new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(q1) - new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(q2)));
});
/**
 * Liefert true, wenn q1 vor q2 liegt.
 */
dep.model.quartal.vor = (function dep$model$quartal$vor(q1,q2){
return (((new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(q1) < new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(q2))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(q1),new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(q2))) && ((new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(q1) <= new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(q2))))));
});
/**
 * Liefert true, wenn q1 zwischen q2 und q3 liegt.
 */
dep.model.quartal.liegt_zwischen = (function dep$model$quartal$liegt_zwischen(q1,q2,q3){
var and__3938__auto__ = dep.model.quartal.vor.call(null,q2,q1);
if(cljs.core.truth_(and__3938__auto__)){
return dep.model.quartal.vor.call(null,q1,q3);
} else {
return and__3938__auto__;
}
});
/**
 * Liefert die Quartale für das Geschäftsjahr jahr.
 */
dep.model.quartal.quartale_fuer_jahr = (function dep$model$quartal$quartale_fuer_jahr(jahr){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.model.quartal.__GT_Quartal.call(null,(4),(jahr - (1))),dep.model.quartal.__GT_Quartal.call(null,(1),jahr),dep.model.quartal.__GT_Quartal.call(null,(2),jahr),dep.model.quartal.__GT_Quartal.call(null,(3),jahr)], null);
});
dep.model.quartal.quartal__GT_string = (function dep$model$quartal$quartal__GT_string(quartal){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(quartal)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(quartal))].join('');
});
dep.model.quartal.string__GT_quartal = (function dep$model$quartal$string__GT_quartal(strng){
var vec__16480 = cljs.core.mapv.call(null,dep.model.quartal.parse_int,clojure.string.split.call(null,strng,/-/));
var jahr = cljs.core.nth.call(null,vec__16480,(0),null);
var quartal = cljs.core.nth.call(null,vec__16480,(1),null);
return dep.model.quartal.__GT_Quartal.call(null,quartal,jahr);
});
/**
 * Ermittelt aus dem Studienbeginn (stb) und der Jahr-Semesterzuordnung (jsz) eines
 *   Manipels das Quartal des Semesters sem.
 */
dep.model.quartal.semester__GT_quartal = (function dep$model$quartal$semester__GT_quartal(sem,stb,jsz){
var sq = cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.key,(function (p1__16483_SHARP_){
return cljs.core.get.call(null,p1__16483_SHARP_,sem);
}).call(null,cljs.core.group_by.call(null,cljs.core.val,jsz))));
return dep.model.quartal.__GT_Quartal.call(null,new cljs.core.Keyword(null,"nr","nr",289850932).cljs$core$IFn$_invoke$arity$1(sq),(new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(stb) + new cljs.core.Keyword(null,"jahr","jahr",1260355162).cljs$core$IFn$_invoke$arity$1(sq)));
});
/**
 * Liefert Quartals-Strings für die 7 Semester eines Manipels.
 */
dep.model.quartal.sieben_semester__GT_quartstrng = (function dep$model$quartal$sieben_semester__GT_quartstrng(stb,jsz){
return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4324__auto__ = (function dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__16484(s__16485){
return (new cljs.core.LazySeq(null,(function (){
var s__16485__$1 = s__16485;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16485__$1);
if(temp__5457__auto__){
var s__16485__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16485__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16485__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16487 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16486 = (0);
while(true){
if((i__16486 < size__4323__auto__)){
var sem = cljs.core._nth.call(null,c__4322__auto__,i__16486);
cljs.core.chunk_append.call(null,b__16487,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep.model.quartal.quartal__GT_string.call(null,dep.model.quartal.semester__GT_quartal.call(null,sem,stb,jsz))]));

var G__16488 = (i__16486 + (1));
i__16486 = G__16488;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16487),dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__16484.call(null,cljs.core.chunk_rest.call(null,s__16485__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16487),null);
}
} else {
var sem = cljs.core.first.call(null,s__16485__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep.model.quartal.quartal__GT_string.call(null,dep.model.quartal.semester__GT_quartal.call(null,sem,stb,jsz))]),dep$model$quartal$sieben_semester__GT_quartstrng_$_iter__16484.call(null,cljs.core.rest.call(null,s__16485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})());
});

//# sourceMappingURL=quartal.js.map
