// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.components.datamanagement');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_modals.modals');
goog.require('dep.helpers.sortable_csstable');
/**
 * Erzeugt eine Datenanzeige und -verwaltungskomponente für einen Teil der Welt.
 *   Zu den management-data gehören Dozenten, Module, Manipel und Lehrveranstaltungen.
 */
dep.components.datamanagement.data_management = (function dep$components$datamanagement$data_management(world,management_data){
var table_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sort-val","sort-val",603863657),new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"ascending","ascending",-988350486),true,new cljs.core.Keyword(null,"clicked-row","clicked-row",-1709049351),null], null));
var click_action = ((function (table_state){
return (function (p1__20530_SHARP_){
return cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc,new cljs.core.Keyword(null,"clicked-row","clicked-row",-1709049351),p1__20530_SHARP_);
});})(table_state))
;
return ((function (table_state,click_action){
return (function (world__$1,management_data__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(management_data__$1)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_modals.modals.modal_window], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep.helpers.sortable_csstable.table_ui,new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397).cljs$core$IFn$_invoke$arity$1(management_data__$1),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931).cljs$core$IFn$_invoke$arity$1(management_data__$1).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,world__$1),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(management_data__$1).call(null,world__$1))),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081).cljs$core$IFn$_invoke$arity$1(management_data__$1),table_state,cljs.core.partial.call(null,dep.helpers.sortable_csstable.modal_form,new cljs.core.Keyword(null,"edit-component","edit-component",1500156666).cljs$core$IFn$_invoke$arity$1(management_data__$1),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622).cljs$core$IFn$_invoke$arity$1(management_data__$1)),click_action,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(management_data__$1)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)))?(function (){
dep.helpers.sortable_csstable.process_form.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),world__$1,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(management_data__$1),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081).cljs$core$IFn$_invoke$arity$1(management_data__$1),new cljs.core.Keyword(null,"data-id","data-id",1023855591).cljs$core$IFn$_invoke$arity$1(management_data__$1),new cljs.core.Keyword(null,"id-fn","id-fn",316222798).cljs$core$IFn$_invoke$arity$1(management_data__$1).call(null,new cljs.core.Keyword(null,"clicked-row","clicked-row",-1709049351).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state))),new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206).cljs$core$IFn$_invoke$arity$1(management_data__$1),new cljs.core.Keyword(null,"update-fn","update-fn",711087313).cljs$core$IFn$_invoke$arity$1(management_data__$1));

new cljs.core.Keyword(null,"aktualisiere-plan-fn","aktualisiere-plan-fn",1929445285).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,world__$1)).call(null);

return cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc,new cljs.core.Keyword(null,"action","action",-811238024),null);
})()
:null)], null)], null);
});
;})(table_state,click_action))
});

//# sourceMappingURL=datamanagement.js.map
