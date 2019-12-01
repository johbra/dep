// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('dep.state');
goog.require('dep.components.side_nav_bar');
goog.require('dep.components.planung');
/**
 * Hauptkomponente der Dozenteneinsatzplanung.
 */
dep.core.dozenteneinsatzplanung = (function dep$core$dozenteneinsatzplanung(welt){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#wrapper","div#wrapper",220024300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"d-flex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.side_nav_bar.sidebar,welt], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"page-content-wrapper"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"navbar navbar-expand-lg navbar-light bg-light border-bottom"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.side_nav_bar.menu_toggle], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.components.side_nav_bar.geschaeftjahr_quartal_form,welt], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.components.side_nav_bar.menu_actions.call(null,welt)], null)], null)], null);
});
/**
 * Liefert den body der Html-Seite (index.html).
 * Es muss ein div-Element mit der id app existieren:
 * <div id='app'> </div> 
 */
dep.core.get_app_element = (function dep$core$get_app_element(){
return goog.dom.getElement("app");
});
dep.core.mount_app_element = (function dep$core$mount_app_element(){
var temp__5457__auto__ = dep.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
dep.components.planung.initialisiere_planung.call(null,dep.state.WELT);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.core.dozenteneinsatzplanung,dep.state.WELT], null),el);
} else {
return null;
}
});
dep.core.mount_app_element.call(null);
dep.core.on_reload = (function dep$core$on_reload(){
return dep.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
