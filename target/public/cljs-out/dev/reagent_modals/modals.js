// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent_modals.modals');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
reagent_modals.modals.modal_id = "reagent-modal";
if((typeof reagent_modals !== 'undefined') && (typeof reagent_modals.modals !== 'undefined') && (typeof reagent_modals.modals.modal_content !== 'undefined')){
} else {
reagent_modals.modals.modal_content = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"shown","shown",-1564457683),null,new cljs.core.Keyword(null,"size","size",1098693007),null], null));
}
reagent_modals.modals.get_modal = (function reagent_modals$modals$get_modal(){
return goog.dom.getElement(reagent_modals.modals.modal_id);
});
reagent_modals.modals.with_opts = (function reagent_modals$modals$with_opts(opts){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
(m["modal"]).call(m,opts);

(m["modal"]).call(m,"show");

return m;
});
if((typeof reagent_modals !== 'undefined') && (typeof reagent_modals.modals !== 'undefined') && (typeof reagent_modals.modals.show_modal_BANG_ !== 'undefined')){
} else {
reagent_modals.modals.show_modal_BANG_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-modals.modals","show-modal!"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (args){
return cljs.core.map_QMARK_.call(null,args);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,reagent_modals.modals.show_modal_BANG_,true,(function (p__13428){
var map__13429 = p__13428;
var map__13429__$1 = ((((!((map__13429 == null)))?(((((map__13429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13429):map__13429);
var keyboard = cljs.core.get.call(null,map__13429__$1,new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),true);
var backdrop = cljs.core.get.call(null,map__13429__$1,new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),true);
return reagent_modals.modals.with_opts.call(null,({"keyboard": keyboard, "backdrop": backdrop}));
}));
cljs.core._add_method.call(null,reagent_modals.modals.show_modal_BANG_,false,(function (keyboard){
return reagent_modals.modals.with_opts.call(null,({"keyboard": keyboard}));
}));
reagent_modals.modals.close_modal_BANG_ = (function reagent_modals$modals$close_modal_BANG_(){
var m = jQuery(reagent_modals.modals.get_modal.call(null));
return (m["modal"]).call(m,"hide");
});
/**
 * A pre-configured close button. Just include it anywhere in the
 * modal to let the user dismiss it.
 */
reagent_modals.modals.close_button = (function reagent_modals$modals$close_button(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-remove","span.glyphicon.glyphicon-remove",-176133890),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Close"], null)], null);
});
reagent_modals.modals.modal_window = (function reagent_modals$modals$modal_window(){
var unmounting_QMARK_ = reagent.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (unmounting_QMARK_){
return (function (e){
var m_13433 = jQuery(reagent_modals.modals.get_modal.call(null));
(m_13433["on"]).call(m_13433,"hidden.bs.modal",((function (m_13433,unmounting_QMARK_){
return (function (){
var temp__5457__auto___13434 = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5457__auto___13434)){
var f_13435 = temp__5457__auto___13434;
f_13435.call(null);
} else {
}

if(cljs.core.truth_(cljs.core.deref.call(null,unmounting_QMARK_))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,reagent_modals.modals.modal_content,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null);
}
});})(m_13433,unmounting_QMARK_))
);

(m_13433["on"]).call(m_13433,"shown.bs.modal",((function (m_13433,unmounting_QMARK_){
return (function (){
var temp__5457__auto__ = new cljs.core.Keyword(null,"shown","shown",-1564457683).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return f.call(null);
} else {
return null;
}
});})(m_13433,unmounting_QMARK_))
);

(m_13433["on"]).call(m_13433,"hide.bs.modal",((function (m_13433,unmounting_QMARK_){
return (function (){
var temp__5457__auto__ = new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_modals.modals.modal_content));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return f.call(null);
} else {
return null;
}
});})(m_13433,unmounting_QMARK_))
);

var mc = cljs.core.deref.call(null,reagent_modals.modals.modal_content);
if(cljs.core.truth_(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(mc))){
return reagent_modals.modals.show_modal_BANG_.call(null,mc);
} else {
return null;
}
});})(unmounting_QMARK_))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (unmounting_QMARK_){
return (function (){
cljs.core.reset_BANG_.call(null,unmounting_QMARK_,true);

return reagent_modals.modals.close_modal_BANG_.call(null);
});})(unmounting_QMARK_))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (unmounting_QMARK_){
return (function (){
var map__13431 = cljs.core.deref.call(null,reagent_modals.modals.modal_content);
var map__13431__$1 = ((((!((map__13431 == null)))?(((((map__13431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13431):map__13431);
var content = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"content","content",15833224));
var size = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var size_class = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lg","lg",-80787836),"modal-lg",new cljs.core.Keyword(null,"sm","sm",-1402575065),"modal-sm"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal.fade","div.modal.fade",-327881909),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reagent_modals.modals.modal_id,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"role","role",-736691072),"dialog"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get.call(null,size_class,size)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),content], null)], null)], null);
});})(unmounting_QMARK_))
], null));
});
/**
 * Update and show the modal window. `reagent-content' is a normal
 * reagent component. `configs' is an optional map of advanced
 * configurations:
 * 
 * - :shown -> a function called once the modal is shown.
 * - :hide -> a function called once the modal is asked to hide.
 * - :hidden -> a function called once the modal is hidden.
 * - :size -> Can be :lg (large) or :sm (small). Everything else defaults to medium.
 * - :keyboard -> if true, `esc' key can dismiss the modal. Default to true.
 * - :backdrop -> true (default): backdrop. 
 *                "static" : backdrop, but doesn't close the model when clicked upon. 
 *                false : no backdrop.
 */
reagent_modals.modals.modal_BANG_ = (function reagent_modals$modals$modal_BANG_(var_args){
var G__13437 = arguments.length;
switch (G__13437) {
case 1:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (reagent_content){
return reagent_modals.modals.modal_BANG_.call(null,reagent_content,null);
});

reagent_modals.modals.modal_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reagent_content,configs){
cljs.core.reset_BANG_.call(null,reagent_modals.modals.modal_content,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),reagent_content], null),configs));

return reagent_modals.modals.show_modal_BANG_.call(null,cljs.core.select_keys.call(null,configs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyboard","keyboard",-617357087),new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381)], null)));
});

reagent_modals.modals.modal_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=modals.js.map
