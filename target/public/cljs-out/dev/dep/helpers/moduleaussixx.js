// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.moduleaussixx');
goog.require('cljs.core');
goog.require('dep.model.quartal');
goog.require('dep.model.modul');
goog.require('dep.helpers.drop_file_stream');
goog.require('tubax.core');
goog.require('clojure.zip');
goog.require('cljs.reader');
goog.require('cljs.core.async');
dep.helpers.moduleaussixx.module_aus_sixx = (function dep$helpers$moduleaussixx$module_aus_sixx(datei){
var module = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(datei);
return cljs.core.map.call(null,((function (module){
return (function (mdl){
var nummer = cljs.core.symbol.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(0),new cljs.core.Keyword(null,"content","content",15833224),(0)], null)));
var name = cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(1),new cljs.core.Keyword(null,"content","content",15833224),(0)], null));
var sws = cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(2),new cljs.core.Keyword(null,"content","content",15833224)], null));
var semesterWochenstunden = cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (nummer,name,sws,module){
return (function (p1__18400_SHARP_){
return cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__18400_SHARP_)))));
});})(nummer,name,sws,module))
,sws),cljs.core.map.call(null,((function (nummer,name,sws,module){
return (function (p1__18401_SHARP_){
return cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__18401_SHARP_)))));
});})(nummer,name,sws,module))
,sws));
var studienrichtung = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(3),new cljs.core.Keyword(null,"content","content",15833224)], null)))))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(3),new cljs.core.Keyword(null,"content","content",15833224)], null))))))].join(''));
var gbis = dep.model.quartal.__GT_Quartal.call(null,cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(4),new cljs.core.Keyword(null,"content","content",15833224)], null)))))),cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(4),new cljs.core.Keyword(null,"content","content",15833224)], null)))))));
var gab = dep.model.quartal.__GT_Quartal.call(null,cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(5),new cljs.core.Keyword(null,"content","content",15833224)], null)))))),cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.get_in.call(null,mdl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),(5),new cljs.core.Keyword(null,"content","content",15833224)], null)))))));
return dep.model.modul.__GT_Modul.call(null,nummer,name,semesterWochenstunden,studienrichtung,gab,gbis);
});})(module))
,module);
});
dep.helpers.moduleaussixx.module_aus_datei = (function dep$helpers$moduleaussixx$module_aus_datei(datei,state){
return dep.helpers.drop_file_stream.lies_datei.call(null,datei,state,(function (p1__18402_SHARP_){
return dep.helpers.moduleaussixx.module_aus_sixx.call(null,tubax.core.xml__GT_clj.call(null,p1__18402_SHARP_));
}));
});

//# sourceMappingURL=moduleaussixx.js.map
