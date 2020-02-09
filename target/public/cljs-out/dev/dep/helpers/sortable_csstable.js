// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.helpers.sortable_csstable');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_modals.modals');
goog.require('reagent_forms.core');
/**
 * Komponente für die Anzeige eines modalen Formulars form.
 */
dep.helpers.sortable_csstable.modalmessage = (function dep$helpers$sortable_csstable$modalmessage(form){
return reagent_modals.modals.modal_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null));
});
/**
 * Erzeugt eine modale Form aus einer Schablone form-template.
 *   title-buttons ist eine Hashmap bestehend aus der Überschrift und den bereit zu
 *   stellenden Schaltflächen, data-set ist der anzuzeigende Datensatz. table-state ist
 *   ein Atom für die Speicherung des geänderten Datensatzes und der betätigten Schalt-
 *   fläche.
 */
dep.helpers.sortable_csstable.modal_form = (function dep$helpers$sortable_csstable$modal_form(form_template,title_buttons,data_set,table_state){
var s = reagent.core.atom.call(null,data_set);
return ((function (s){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-header"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.modal-title","h4.modal-title",-572415885),new cljs.core.Keyword(null,"modal-title","modal-title",-709050582).cljs$core$IFn$_invoke$arity$1(title_buttons)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"close",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal"], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,form_template,s], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),(function (){var iter__4324__auto__ = ((function (s){
return (function dep$helpers$sortable_csstable$modal_form_$_iter__16742(s__16743){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__16743__$1 = s__16743;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16743__$1);
if(temp__5457__auto__){
var s__16743__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16743__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16743__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16745 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16744 = (0);
while(true){
if((i__16744 < size__4323__auto__)){
var btn = cljs.core._nth.call(null,c__4322__auto__,i__16744);
cljs.core.chunk_append.call(null,b__16745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(btn),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16744,btn,c__4322__auto__,size__4323__auto__,b__16745,s__16743__$2,temp__5457__auto__,s){
return (function (){
return cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc,new cljs.core.Keyword(null,"new-val","new-val",-738158599),cljs.core.deref.call(null,s),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(btn));
});})(i__16744,btn,c__4322__auto__,size__4323__auto__,b__16745,s__16743__$2,temp__5457__auto__,s))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(btn)], null));

var G__16746 = (i__16744 + (1));
i__16744 = G__16746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16745),dep$helpers$sortable_csstable$modal_form_$_iter__16742.call(null,cljs.core.chunk_rest.call(null,s__16743__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16745),null);
}
} else {
var btn = cljs.core.first.call(null,s__16743__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(btn),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-dismiss","data-dismiss",-2004576016),"modal",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (btn,s__16743__$2,temp__5457__auto__,s){
return (function (){
return cljs.core.swap_BANG_.call(null,table_state,cljs.core.assoc,new cljs.core.Keyword(null,"new-val","new-val",-738158599),cljs.core.deref.call(null,s),new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(btn));
});})(btn,s__16743__$2,temp__5457__auto__,s))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(btn)], null),dep$helpers$sortable_csstable$modal_form_$_iter__16742.call(null,cljs.core.rest.call(null,s__16743__$2)));
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4324__auto__.call(null,new cljs.core.Keyword(null,"buttons","buttons",-1953831197).cljs$core$IFn$_invoke$arity$1(title_buttons));
})()], null)], null);
});
;})(s))
});
/**
 * Enfernt aus dem Welt-Attribut world-key den Datensatz, dessen key gleich value ist.
 */
dep.helpers.sortable_csstable.remove_dataset = (function dep$helpers$sortable_csstable$remove_dataset(world,world_key,key,value){
var acc_vec = world_key.call(null,world);
return cljs.core.swap_BANG_.call(null,world,cljs.core.assoc_in,acc_vec,cljs.core.vec.call(null,cljs.core.remove.call(null,((function (acc_vec){
return (function (p1__16747_SHARP_){
return cljs.core._EQ_.call(null,key.call(null,p1__16747_SHARP_),value);
});})(acc_vec))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,world),acc_vec))));
});
/**
 * Speichert einen geänderten Datensatz im Welt-Attribut world-key.
 *   Falls der Schlüssel des Datensatzes im Formular (form-key) geändert wurde, wird
 *   ein neuer Datensatz hinzugefügt, andernfalls der geänderte gespeichert.
 */
dep.helpers.sortable_csstable.save_dataset = (function dep$helpers$sortable_csstable$save_dataset(world,world_key,form_dataset,form_key,key,value,dataset_exists,change_dataset){
var value_of_form_key = form_key.call(null,form_dataset);
var acc_vec = world_key.call(null,world);
var data = cljs.core.get_in.call(null,cljs.core.deref.call(null,world),acc_vec);
if(cljs.core.truth_(dataset_exists.call(null,data,value_of_form_key))){
return cljs.core.swap_BANG_.call(null,world,cljs.core.assoc_in,acc_vec,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.remove.call(null,((function (value_of_form_key,acc_vec,data){
return (function (p1__16748_SHARP_){
return cljs.core._EQ_.call(null,key.call(null,p1__16748_SHARP_),value_of_form_key);
});})(value_of_form_key,acc_vec,data))
,data)),change_dataset.call(null,dataset_exists.call(null,data,value_of_form_key),form_dataset)));
} else {
return cljs.core.swap_BANG_.call(null,world,cljs.core.assoc_in,acc_vec,cljs.core.conj.call(null,data,change_dataset.call(null,dataset_exists.call(null,data,value),form_dataset)));
}
});
/**
 * Funktion zur Speicherung der Änderung eines Datensatzes im Welt-Attribut
 *   world-key. Identifizierung des Datensatzes erfolgt über die im Formular-
 *   Datensatz gespeichere :Id.
 */
dep.helpers.sortable_csstable.save_per_id = (function dep$helpers$sortable_csstable$save_per_id(world,world_key,form_dataset,dataset_exists,change_dataset){
var acc_vec = world_key.call(null,world);
var data = cljs.core.get_in.call(null,cljs.core.deref.call(null,world),acc_vec);
var dataset = dataset_exists.call(null,data,new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(form_dataset));
return cljs.core.swap_BANG_.call(null,world,cljs.core.assoc_in,acc_vec,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.remove.call(null,((function (acc_vec,data,dataset){
return (function (p1__16749_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__16749_SHARP_),new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(form_dataset));
});})(acc_vec,data,dataset))
,data)),change_dataset.call(null,dataset,form_dataset,world)));
});
/**
 * Dupliziert den durch id identifizierten Datensatz im Welt-Attribut world-key.
 */
dep.helpers.sortable_csstable.duplicate_dataset = (function dep$helpers$sortable_csstable$duplicate_dataset(world,world_key,id,dataset_exists){
var acc_vec = world_key.call(null,world);
var data = cljs.core.get_in.call(null,cljs.core.deref.call(null,world),acc_vec);
var dataset = dataset_exists.call(null,data,id);
var lven = cljs.core.conj.call(null,data,cljs.core.assoc.call(null,dataset,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.gensym.call(null)));
return cljs.core.swap_BANG_.call(null,world,cljs.core.assoc_in,acc_vec,lven);
});
/**
 * Funktion ... .
 */
dep.helpers.sortable_csstable.rename_file = (function dep$helpers$sortable_csstable$rename_file(world,form_dataset,form_key,filename,change_filename){
var form_filename = form_key.call(null,form_dataset);
return change_filename.call(null,filename,form_filename,world);
});
/**
 * Funktion zur Ausführung der in einem modalen Formular ausgewählten action.
 */
dep.helpers.sortable_csstable.process_form = (function dep$helpers$sortable_csstable$process_form(action,form_dataset,world,world_key,form_key,key,id_clicked_dataset,dataset_exists,change_dataset){
var id_form_dataset = (cljs.core.truth_(new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(form_dataset))?new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(form_dataset):form_key.call(null,form_dataset));
var G__16750 = action;
var G__16750__$1 = (((G__16750 instanceof cljs.core.Keyword))?G__16750.fqn:null);
switch (G__16750__$1) {
case "save":
return dep.helpers.sortable_csstable.save_dataset.call(null,world,world_key,form_dataset,form_key,key,id_clicked_dataset,dataset_exists,change_dataset);

break;
case "delete":
return dep.helpers.sortable_csstable.remove_dataset.call(null,world,world_key,key,id_form_dataset);

break;
case "duplicate":
return dep.helpers.sortable_csstable.duplicate_dataset.call(null,world,world_key,new cljs.core.Keyword(null,"Id","Id",-2148601).cljs$core$IFn$_invoke$arity$1(form_dataset),dataset_exists);

break;
case "save-per-id":
return dep.helpers.sortable_csstable.save_per_id.call(null,world,world_key,form_dataset,dataset_exists,change_dataset);

break;
case "rename-file":
return dep.helpers.sortable_csstable.rename_file.call(null,world,form_dataset,form_key,id_clicked_dataset,change_dataset);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16750__$1)].join('')));

}
});
/**
 * Funktion zur Ausführung der in einem modalen Formular ausgewählten action.
 */
dep.helpers.sortable_csstable.process_simple_form = (function dep$helpers$sortable_csstable$process_simple_form(action,form_dataset,data,form_key,id_clicked_dataset,change_dataset){
var G__16752 = action;
var G__16752__$1 = (((G__16752 instanceof cljs.core.Keyword))?G__16752.fqn:null);
switch (G__16752__$1) {
case "rename-file":
return dep.helpers.sortable_csstable.rename_file.call(null,data,form_dataset,form_key,id_clicked_dataset,change_dataset);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16752__$1)].join('')));

}
});
/**
 * Aktualisiert die Sortierrichtung einer Tabelle.
 */
dep.helpers.sortable_csstable.update_sort_value = (function dep$helpers$sortable_csstable$update_sort_value(new_val,sort_state){
if(cljs.core._EQ_.call(null,new_val,new cljs.core.Keyword(null,"sort-val","sort-val",603863657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sort_state)))){
cljs.core.swap_BANG_.call(null,sort_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascending","ascending",-988350486)], null),cljs.core.not);
} else {
cljs.core.swap_BANG_.call(null,sort_state,cljs.core.assoc,new cljs.core.Keyword(null,"ascending","ascending",-988350486),true);
}

return cljs.core.swap_BANG_.call(null,sort_state,cljs.core.assoc,new cljs.core.Keyword(null,"sort-val","sort-val",603863657),new_val);
});
/**
 * Sortiert eine Tabelle table gemäß der in table-state gespeicherten Richtung.
 */
dep.helpers.sortable_csstable.sorted_contents = (function dep$helpers$sortable_csstable$sorted_contents(table_state,table){
var sorted_contents = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort-val","sort-val",603863657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)),table);
if(cljs.core.truth_(new cljs.core.Keyword(null,"ascending","ascending",-988350486).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,table_state)))){
return sorted_contents;
} else {
return cljs.core.rseq.call(null,sorted_contents);
}
});
/**
 * Koponente für die Darstellung einer Tabellenzeile.
 */
dep.helpers.sortable_csstable.row_ui = (function dep$helpers$sortable_csstable$row_ui(cols,row_key,table_state,form,click_action,m){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,row_key.call(null,m))], null),(function (){var iter__4324__auto__ = (function dep$helpers$sortable_csstable$row_ui_$_iter__16754(s__16755){
return (new cljs.core.LazySeq(null,(function (){
var s__16755__$1 = s__16755;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16755__$1);
if(temp__5457__auto__){
var s__16755__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16755__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16755__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16757 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16756 = (0);
while(true){
if((i__16756 < size__4323__auto__)){
var col = cljs.core._nth.call(null,c__4322__auto__,i__16756);
cljs.core.chunk_append.call(null,b__16757,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),((cljs.core._EQ_.call(null,col,row_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16756,col,c__4322__auto__,size__4323__auto__,b__16757,s__16755__$2,temp__5457__auto__){
return (function (){
click_action.call(null,cljs.core.get.call(null,m,col));

return dep.helpers.sortable_csstable.modalmessage.call(null,form.call(null,m,table_state));
});})(i__16756,col,c__4322__auto__,size__4323__auto__,b__16757,s__16755__$2,temp__5457__auto__))
], null),cljs.core.get.call(null,m,col)], null):cljs.core.get.call(null,m,col))], null));

var G__16758 = (i__16756 + (1));
i__16756 = G__16758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16757),dep$helpers$sortable_csstable$row_ui_$_iter__16754.call(null,cljs.core.chunk_rest.call(null,s__16755__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16757),null);
}
} else {
var col = cljs.core.first.call(null,s__16755__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableCell","div.rTableCell",1351110894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),col], null),((cljs.core._EQ_.call(null,col,row_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (col,s__16755__$2,temp__5457__auto__){
return (function (){
click_action.call(null,cljs.core.get.call(null,m,col));

return dep.helpers.sortable_csstable.modalmessage.call(null,form.call(null,m,table_state));
});})(col,s__16755__$2,temp__5457__auto__))
], null),cljs.core.get.call(null,m,col)], null):cljs.core.get.call(null,m,col))], null),dep$helpers$sortable_csstable$row_ui_$_iter__16754.call(null,cljs.core.rest.call(null,s__16755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cols);
})()], null);
});
/**
 * Komponente für die Darstellung einer sortierbaren Tabelle.
 */
dep.helpers.sortable_csstable.table_ui = (function dep$helpers$sortable_csstable$table_ui(cols,table,row_key,table_state,form,click_action){
var rel = dep.helpers.sortable_csstable.sorted_contents.call(null,table_state,table);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTable","div.rTable",-2113231773),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableHeading","div.rTableHeading",-1118922742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableRow","div.rTableRow",605058685),(function (){var iter__4324__auto__ = ((function (rel){
return (function dep$helpers$sortable_csstable$table_ui_$_iter__16759(s__16760){
return (new cljs.core.LazySeq(null,((function (rel){
return (function (){
var s__16760__$1 = s__16760;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16760__$1);
if(temp__5457__auto__){
var s__16760__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16760__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16760__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16762 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16761 = (0);
while(true){
if((i__16761 < size__4323__auto__)){
var col = cljs.core._nth.call(null,c__4322__auto__,i__16761);
cljs.core.chunk_append.call(null,b__16762,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableHead","div.rTableHead",-1453689500),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16761,col,c__4322__auto__,size__4323__auto__,b__16762,s__16760__$2,temp__5457__auto__,rel){
return (function (){
return dep.helpers.sortable_csstable.update_sort_value.call(null,col,table_state);
});})(i__16761,col,c__4322__auto__,size__4323__auto__,b__16762,s__16760__$2,temp__5457__auto__,rel))
], null),cljs.core.name.call(null,col)], null));

var G__16763 = (i__16761 + (1));
i__16761 = G__16763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16762),dep$helpers$sortable_csstable$table_ui_$_iter__16759.call(null,cljs.core.chunk_rest.call(null,s__16760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16762),null);
}
} else {
var col = cljs.core.first.call(null,s__16760__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableHead","div.rTableHead",-1453689500),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),col,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (col,s__16760__$2,temp__5457__auto__,rel){
return (function (){
return dep.helpers.sortable_csstable.update_sort_value.call(null,col,table_state);
});})(col,s__16760__$2,temp__5457__auto__,rel))
], null),cljs.core.name.call(null,col)], null),dep$helpers$sortable_csstable$table_ui_$_iter__16759.call(null,cljs.core.rest.call(null,s__16760__$2)));
}
} else {
return null;
}
break;
}
});})(rel))
,null,null));
});})(rel))
;
return iter__4324__auto__.call(null,cols);
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rTableBody","div.rTableBody",-2114936488),cljs.core.map.call(null,cljs.core.partial.call(null,dep.helpers.sortable_csstable.row_ui,cols,row_key,table_state,form,click_action),rel)], null)], null);
});

//# sourceMappingURL=sortable_csstable.js.map
