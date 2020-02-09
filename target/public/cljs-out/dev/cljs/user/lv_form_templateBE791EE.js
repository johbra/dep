// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.user.lv_form_templateBE791EE');
goog.require('cljs.core');
cljs.user.lv_form_template = (function cljs$user$lv_form_template(dozenten){

var sel = cljs.core.atom.call(null,"none");
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.user.row.call(null,"Modul",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Modul","Modul",-499019270)], null)], null)),cljs.user.row.call(null,"Manipel",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Mnpl","Mnpl",953604339)], null)], null)),cljs.user.row.call(null,"Semester",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Smstr","Smstr",1193714432)], null)], null)),cljs.user.row.call(null,"SWS",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"SWS","SWS",1550316894)], null)], null)),cljs.user.row.call(null,"Wiederholungsfaktor",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"WdhFkt","WdhFkt",-471348027)], null)], null)),cljs.user.row.call(null,"Gruppen",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Grpn","Grpn",-1254012610)], null)], null)),cljs.user.row.call(null,"Dozent",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Dozent","Dozent",-1144807975),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,sel),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (sel){
return (function (p1__16188_SHARP_){
return cljs.core.reset_BANG_.call(null,sel,p1__16188_SHARP_.target.value);
});})(sel))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"none",new cljs.core.Keyword(null,"key","key",-1516042587),"None",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"W\u00E4hle!"], null),(function (){var iter__4324__auto__ = ((function (sel){
return (function cljs$user$lv_form_template_$_iter__16189(s__16190){
return (new cljs.core.LazySeq(null,((function (sel){
return (function (){
var s__16190__$1 = s__16190;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16190__$1);
if(temp__5457__auto__){
var s__16190__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16190__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16190__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16192 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16191 = (0);
while(true){
if((i__16191 < size__4323__auto__)){
var d = cljs.core._nth.call(null,c__4322__auto__,i__16191);
cljs.core.chunk_append.call(null,b__16192,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),d], null),d], null));

var G__16195 = (i__16191 + (1));
i__16191 = G__16195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16192),cljs$user$lv_form_template_$_iter__16189.call(null,cljs.core.chunk_rest.call(null,s__16190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16192),null);
}
} else {
var d = cljs.core.first.call(null,s__16190__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),d], null),d], null),cljs$user$lv_form_template_$_iter__16189.call(null,cljs.core.rest.call(null,s__16190__$2)));
}
} else {
return null;
}
break;
}
});})(sel))
,null,null));
});})(sel))
;
return iter__4324__auto__.call(null,dozenten);
})()], null))], null);
});

//# sourceMappingURL=lv_form_templateBE791EE.js.map
