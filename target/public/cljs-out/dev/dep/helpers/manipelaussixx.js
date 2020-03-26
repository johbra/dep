// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.manipelaussixx');
goog.require('cljs.core');
goog.require('dep.model.quartal');
goog.require('dep.model.manipel');
goog.require('dep.helpers.drop_file_stream');
goog.require('tubax.core');
goog.require('clojure.zip');
goog.require('cljs.reader');
goog.require('cljs.core.async');
dep.helpers.manipelaussixx.manipel_aus_sixx = (function dep$helpers$manipelaussixx$manipel_aus_sixx(datei){
var manipel = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(datei);
return cljs.core.map.call(null,((function (manipel){
return (function (mpl){
var studienrichtung = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl))))))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl)))))))].join(''));
var name = cljs.core.symbol.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl)))));
var studienbeginn = dep.model.quartal.__GT_Quartal.call(null,cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl),(2))))))),cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl),(2))))))));
var anzahlGruppen = cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl),(3)))));
var sems = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mpl),(4)));
var jahrSemesterZuordnung = cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (studienrichtung,name,studienbeginn,anzahlGruppen,sems,manipel){
return (function (p1__18405_SHARP_){
return dep.model.quartal.__GT_Quartal.call(null,cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__18405_SHARP_))))))),cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__18405_SHARP_))))))));
});})(studienrichtung,name,studienbeginn,anzahlGruppen,sems,manipel))
,sems),cljs.core.map.call(null,((function (studienrichtung,name,studienbeginn,anzahlGruppen,sems,manipel){
return (function (p1__18406_SHARP_){
return cljs.reader.read_string.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__18406_SHARP_)))));
});})(studienrichtung,name,studienbeginn,anzahlGruppen,sems,manipel))
,sems));
return dep.model.manipel.__GT_Manipel.call(null,studienrichtung,name,studienbeginn,anzahlGruppen,jahrSemesterZuordnung);
});})(manipel))
,manipel);
});
dep.helpers.manipelaussixx.manipel_aus_datei = (function dep$helpers$manipelaussixx$manipel_aus_datei(datei,state){
return dep.helpers.drop_file_stream.lies_datei.call(null,datei,state,(function (p1__18407_SHARP_){
return dep.helpers.manipelaussixx.manipel_aus_sixx.call(null,tubax.core.xml__GT_clj.call(null,p1__18407_SHARP_));
}));
});

//# sourceMappingURL=manipelaussixx.js.map
