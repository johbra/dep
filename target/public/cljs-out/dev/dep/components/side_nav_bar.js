// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.side_nav_bar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('dep.components.datamanagement');
goog.require('dep.model.manipel');
goog.require('dep.model.dozent');
goog.require('dep.model.studienrichtung');
goog.require('dep.model.modul');
goog.require('dep.model.quartal');
goog.require('dep.components.datensicherung');
goog.require('dep.components.planung');
dep.components.side_nav_bar.default_buttons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save","save",1850079149),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null);
/**
 * Setzt das WELT-Attribut id auf value.
 */
dep.components.side_nav_bar.set_value_BANG_ = (function dep$components$side_nav_bar$set_value_BANG_(welt,id,value){
return cljs.core.swap_BANG_.call(null,welt,cljs.core.assoc,id,value);
});
/**
 * Komponente für das Menü am linken Rand.
 */
dep.components.side_nav_bar.sidebar = (function dep$components$side_nav_bar$sidebar(welt){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sidebar-wrapper","div#sidebar-wrapper",1043226224),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-light border-right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-heading","div.sidebar-heading",-432548857),"Dozenteneinsatzplanung"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group list-group-flush"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action.bg-light","a.list-group-item.list-group-item-action.bg-light",-1642356586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578));
})], null),"Planung"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action.bg-light","a.list-group-item.list-group-item-action.bg-light",-1642356586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"dozenten","dozenten",688305194));
})], null),"Dozenten"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action.bg-light","a.list-group-item.list-group-item-action.bg-light",-1642356586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"module","module",1424618191));
})], null),"Module"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action.bg-light","a.list-group-item.list-group-item-action.bg-light",-1642356586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"manipel","manipel",1067015228));
})], null),"Manipel"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action.bg-light","a.list-group-item.list-group-item-action.bg-light",-1642356586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886));
})], null),"Studienrichtungen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item.list-group-item-action.bg-light","a.list-group-item.list-group-item-action.bg-light",-1642356586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"datensicherung","datensicherung",308712383));
})], null),"Datensicherung"], null)], null)], null);
});
/**
 * Das in der Sidebar platzierte Menü.
 */
dep.components.side_nav_bar.menu_actions = (function dep$components$side_nav_bar$menu_actions(welt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)))){
return new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)).call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"manipel","manipel",1067015228),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.model.manipel.manipel_verwaltung.call(null,dep.components.side_nav_bar.default_buttons)], null),new cljs.core.Keyword(null,"module","module",1424618191),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.model.modul.module_verwaltung.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"label","label",1718410804),"schlie\u00DFen"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184),new cljs.core.Keyword(null,"label","label",1718410804),"duplizieren"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"save-per-id","save-per-id",-1461095979),new cljs.core.Keyword(null,"label","label",1718410804),"speichern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"entfernen"], null)], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))))], null),new cljs.core.Keyword(null,"dozenten","dozenten",688305194),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.model.dozent.dozenten_verwaltung.call(null,dep.components.side_nav_bar.default_buttons)], null),new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datamanagement.data_management,welt,dep.model.studienrichtung.studienrichtungen_verwaltung.call(null,dep.components.side_nav_bar.default_buttons)], null),new cljs.core.Keyword(null,"datensicherung","datensicherung",308712383),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.datensicherung.datensicherung,welt], null),new cljs.core.Keyword(null,"hauptseite","hauptseite",-227667578),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.planung.planung,welt], null)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.planung.planung,welt], null);
}
});
dep.components.side_nav_bar.menu_toggle_render = (function dep$components$side_nav_bar$menu_toggle_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#menu-toggle","button#menu-toggle",1007362136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn.btn-default"], null),"Toggle Menu"], null);
});
dep.components.side_nav_bar.menu_toggle_did_mount = (function dep$components$side_nav_bar$menu_toggle_did_mount(this$){
return $(reagent.core.dom_node.call(null,this$)).click((function (e){
e.preventDefault();

return $("#wrapper").toggleClass("toggled");
}));
});
dep.components.side_nav_bar.menu_toggle = (function dep$components$side_nav_bar$menu_toggle(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),dep.components.side_nav_bar.menu_toggle_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),dep.components.side_nav_bar.menu_toggle_did_mount], null));
});
/**
 * Erzeugt zwei HTML-Eingabeformen.
 */
dep.components.side_nav_bar.inputs = (function dep$components$side_nav_bar$inputs(label1,input1,label2,input2){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label1], null),input1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label2], null),input2], null)], null);
});
/**
 * Die Auswahlboxen für Geschäftsjahr und Quartal und die Planungsschaltfläche.
 */
dep.components.side_nav_bar.geschaeftjahr_quartal_form = (function dep$components$side_nav_bar$geschaeftjahr_quartal_form(welt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-inline","div.form-inline",-557536095),dep.components.side_nav_bar.inputs.call(null,"Gesch\u00E4ftsjahr: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15794_SHARP_){
dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286),parseInt(p1__15794_SHARP_.target.value));

return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"quartal","quartal",-467113586),cljs.core.first.call(null,dep.model.quartal.quartale_fuer_jahr.call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)))));
})], null),(function (){var iter__4324__auto__ = (function dep$components$side_nav_bar$geschaeftjahr_quartal_form_$_iter__15796(s__15797){
return (new cljs.core.LazySeq(null,(function (){
var s__15797__$1 = s__15797;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15797__$1);
if(temp__5457__auto__){
var s__15797__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15797__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15797__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15799 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15798 = (0);
while(true){
if((i__15798 < size__4323__auto__)){
var j = cljs.core._nth.call(null,c__4322__auto__,i__15798);
cljs.core.chunk_append.call(null,b__15799,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null),j], null));

var G__15804 = (i__15798 + (1));
i__15798 = G__15804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15799),dep$components$side_nav_bar$geschaeftjahr_quartal_form_$_iter__15796.call(null,cljs.core.chunk_rest.call(null,s__15797__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15799),null);
}
} else {
var j = cljs.core.first.call(null,s__15797__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null),j], null),dep$components$side_nav_bar$geschaeftjahr_quartal_form_$_iter__15796.call(null,cljs.core.rest.call(null,s__15797__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"jahre","jahre",2053865477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt)));
})()], null),"Quartal: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15795_SHARP_){
return dep.components.side_nav_bar.set_value_BANG_.call(null,welt,new cljs.core.Keyword(null,"quartal","quartal",-467113586),dep.model.quartal.string__GT_quartal.call(null,p1__15795_SHARP_.target.value));
})], null),(function (){var iter__4324__auto__ = (function dep$components$side_nav_bar$geschaeftjahr_quartal_form_$_iter__15800(s__15801){
return (new cljs.core.LazySeq(null,(function (){
var s__15801__$1 = s__15801;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15801__$1);
if(temp__5457__auto__){
var s__15801__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15801__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15801__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15803 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15802 = (0);
while(true){
if((i__15802 < size__4323__auto__)){
var q = cljs.core._nth.call(null,c__4322__auto__,i__15802);
cljs.core.chunk_append.call(null,b__15803,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dep.model.quartal.quartal__GT_string.call(null,q)], null),dep.model.quartal.quartal__GT_string.call(null,q)], null));

var G__15805 = (i__15802 + (1));
i__15802 = G__15805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15803),dep$components$side_nav_bar$geschaeftjahr_quartal_form_$_iter__15800.call(null,cljs.core.chunk_rest.call(null,s__15801__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15803),null);
}
} else {
var q = cljs.core.first.call(null,s__15801__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dep.model.quartal.quartal__GT_string.call(null,q)], null),dep.model.quartal.quartal__GT_string.call(null,q)], null),dep$components$side_nav_bar$geschaeftjahr_quartal_form_$_iter__15800.call(null,cljs.core.rest.call(null,s__15801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,dep.model.quartal.quartale_fuer_jahr.call(null,new cljs.core.Keyword(null,"geschaeftsjahr","geschaeftsjahr",1407893286).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,welt))));
})()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-primary","button.btn-primary",462664968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return dep.components.planung.plane_quartal.call(null,welt);
})], null),"Plane Quartal"], null)], null);
});

//# sourceMappingURL=side_nav_bar.js.map
