// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.studienrichtung');
goog.require('cljs.core');
goog.require('potpuri.core');
goog.require('dep.model.quartal');
/**
 * Erzeugt ein Studienrichtungs-'Objekt' (hash-map).
 */
dep.model.studienrichtung.__GT_Studienrichtung = (function dep$model$studienrichtung$__GT_Studienrichtung(name,quartal_Semester_Zuordnung){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"quartal-Semester-Zuordnung","quartal-Semester-Zuordnung",-1075878844),quartal_Semester_Zuordnung], null);
});
/**
 * Liefert die Studienrichtung mit dem Namen string aus der Liste Studienrichtungen.
 */
dep.model.studienrichtung.studienrichtung_mit_namen = (function dep$model$studienrichtung$studienrichtung_mit_namen(studienrichtungen,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__15925_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__15925_SHARP_),string);
}),studienrichtungen));
});
dep.model.studienrichtung.row = (function dep$model$studienrichtung$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-9","div.col-md-9",-1879980145),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.model.studienrichtung.studienrichtung_form_template = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.model.studienrichtung.row.call(null,"Bezeichnung",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-1","Sem-1",1701521289)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-2","Sem-2",-296574083)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-3","Sem-3",1888976619)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 4",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-4","Sem-4",331149550)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 5",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-5","Sem-5",-1347053144)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 6",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-6","Sem-6",-134351187)], null)], null)),dep.model.studienrichtung.row.call(null,"Semester 7",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-7","Sem-7",305908823)], null)], null))], null);
/**
 * Die Spaltenüberschriften der Studienrichtungstabelle.
 */
dep.model.studienrichtung.studienrichtung_spalten = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)], null),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = (function dep$model$studienrichtung$iter__15926(s__15927){
return (new cljs.core.LazySeq(null,(function (){
var s__15927__$1 = s__15927;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__15927__$1);
if(temp__5457__auto__){
var s__15927__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15927__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15927__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15929 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15928 = (0);
while(true){
if((i__15928 < size__4323__auto__)){
var sem = cljs.core._nth.call(null,c__4322__auto__,i__15928);
cljs.core.chunk_append.call(null,b__15929,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')));

var G__15930 = (i__15928 + (1));
i__15928 = G__15930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15929),dep$model$studienrichtung$iter__15926.call(null,cljs.core.chunk_rest.call(null,s__15927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15929),null);
}
} else {
var sem = cljs.core.first.call(null,s__15927__$2);
return cljs.core.cons.call(null,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep$model$studienrichtung$iter__15926.call(null,cljs.core.rest.call(null,s__15927__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,cljs.core.range.call(null,(1),(8)));
})()));
/**
 * Wandelt die studienrichtungen für die Darstellung als Tabelle um. 
 */
dep.model.studienrichtung.studienrichtungen__GT_table = (function dep$model$studienrichtung$studienrichtungen__GT_table(studienrichtungen){
return cljs.core.mapv.call(null,(function (p1__15931_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__15931_SHARP_)]),dep.model.quartal.sieben_semester__GT_quartstrng.call(null,dep.model.quartal.__GT_Quartal.call(null,(4),(0)),new cljs.core.Keyword(null,"quartal-semester-zuordnung","quartal-semester-zuordnung",1647659850).cljs$core$IFn$_invoke$arity$1(p1__15931_SHARP_)));
}),studienrichtungen);
});
/**
 * Erzeugt eine neue Studienrichtung aus den in aenderungen gegebenen Daten.
 */
dep.model.studienrichtung.aender_studienrichtung = (function dep$model$studienrichtung$aender_studienrichtung(studienrichtung,aenderungen){
var qsz = cljs.core.dissoc.call(null,aenderungen,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820));
var qsz__$1 = potpuri.core.map_vals.call(null,dep.model.quartal.string__GT_quartal,qsz);
var qsz__$2 = clojure.set.map_invert.call(null,qsz__$1);
var qsz__$3 = potpuri.core.map_vals.call(null,((function (qsz,qsz__$1,qsz__$2){
return (function (p1__15932_SHARP_){
return dep.model.quartal.parse_int.call(null,cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15932_SHARP_)].join(''),/-/)));
});})(qsz,qsz__$1,qsz__$2))
,qsz__$2);
return cljs.core.assoc.call(null,studienrichtung,new cljs.core.Keyword(null,"quartal-semester-zuordnung","quartal-semester-zuordnung",1647659850),qsz__$3,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820).cljs$core$IFn$_invoke$arity$1(aenderungen));
});
/**
 * Liefert die Infos für die Studienrichtungstabelle und das Bearbeitungsformular.
 */
dep.model.studienrichtung.studienrichtungen_verwaltung = (function dep$model$studienrichtung$studienrichtungen_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.studienrichtung.studienrichtung_mit_namen,dep.model.studienrichtung.studienrichtungen__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),"100%",cljs.core.identity,"Studienrichtungen",dep.model.studienrichtung.aender_studienrichtung,dep.model.studienrichtung.studienrichtung_spalten,new cljs.core.Keyword(null,"Bezeichnung","Bezeichnung",1945244820),dep.model.studienrichtung.studienrichtung_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Studienrichtung",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"studienrichtungen","studienrichtungen",805439886)], null);
})]);
});

//# sourceMappingURL=studienrichtung.js.map
