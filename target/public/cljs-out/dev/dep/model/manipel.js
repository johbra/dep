// Compiled by ClojureScript 1.10.339 {}
goog.provide('dep.model.manipel');
goog.require('cljs.core');
goog.require('dep.model.quartal');
/**
 * Erzeugt ein Manipel-'Objekt' (hash-map)
 */
dep.model.manipel.__GT_Manipel = (function dep$model$manipel$__GT_Manipel(studienrichtung,name,studienbeginn,anzahlGruppen,jahrSemesterZuordnung){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756),studienrichtung,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852),studienbeginn,new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965),anzahlGruppen,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010),jahrSemesterZuordnung], null);
});
/**
 * Prüft, ob für ein Manipel im angegebenen Quartal Lehrveranstaltungen
 *   anzubieten sind.
 */
dep.model.manipel.wirdUnterrichtetIn_QMARK_ = (function dep$model$manipel$wirdUnterrichtetIn_QMARK_(manipel,quartal){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(manipel),dep.model.quartal.minus.call(null,quartal,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(manipel)));
});
/**
 * Liefert die Teilmenge (sequence) aus manipels, die in quartal
 *   zu unterrichten sind.
 */
dep.model.manipel.zu_unterrichtende_manipels_quartal = (function dep$model$manipel$zu_unterrichtende_manipels_quartal(manipels,quartal){
return cljs.core.filter.call(null,(function (p1__18475_SHARP_){
return dep.model.manipel.wirdUnterrichtetIn_QMARK_.call(null,p1__18475_SHARP_,quartal);
}),manipels);
});
/**
 * Bestimmt das Semester, in dem sich das Manipel im angegebenen Quartal befindet.
 *   Liefert 0, falls das Manipel im angegebenen Quartal nicht unterrichtet wird.
 */
dep.model.manipel.semesterInQuartal = (function dep$model$manipel$semesterInQuartal(manipel,quartal){
var sem = new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(manipel).call(null,dep.model.quartal.minus.call(null,quartal,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(manipel)));
if(cljs.core.truth_(sem)){
return sem;
} else {
return (0);
}
});
/**
 * Liefert das Manipel mit dem Namen string aus der Liste manipels.
 */
dep.model.manipel.manipel_mit_namen = (function dep$model$manipel$manipel_mit_namen(manipels,string){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__18476_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18476_SHARP_),string);
}),manipels));
});
/**
 * Die Spaltenüberschriften der Manipeltabelle.
 */
dep.model.manipel.manipel_spalten = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),new cljs.core.Keyword(null,"Beginn","Beginn",589107550)], null),cljs.core.vec.call(null,(function (){var iter__4324__auto__ = (function dep$model$manipel$iter__18477(s__18478){
return (new cljs.core.LazySeq(null,(function (){
var s__18478__$1 = s__18478;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18478__$1);
if(temp__5457__auto__){
var s__18478__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18478__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__18478__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__18480 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__18479 = (0);
while(true){
if((i__18479 < size__4323__auto__)){
var sem = cljs.core._nth.call(null,c__4322__auto__,i__18479);
cljs.core.chunk_append.call(null,b__18480,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')));

var G__18481 = (i__18479 + (1));
i__18479 = G__18481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18480),dep$model$manipel$iter__18477.call(null,cljs.core.chunk_rest.call(null,s__18478__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18480),null);
}
} else {
var sem = cljs.core.first.call(null,s__18478__$2);
return cljs.core.cons.call(null,cljs.core.keyword.call(null,["Sem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sem)].join('')),dep$model$manipel$iter__18477.call(null,cljs.core.rest.call(null,s__18478__$2)));
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
 * Wandelt die manipels für die Darstellung als Tabelle um.
 */
dep.model.manipel.manipels__GT_table = (function dep$model$manipel$manipels__GT_table(manipels){
return cljs.core.mapv.call(null,(function (p1__18482_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Name","Name",-131211369),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518),new cljs.core.Keyword(null,"Beginn","Beginn",589107550)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_),new cljs.core.Keyword(null,"studienrichtung","studienrichtung",-290576756).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_),new cljs.core.Keyword(null,"anzahlGruppen","anzahlGruppen",317177965).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_),dep.model.quartal.quartal__GT_string.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_))]),dep.model.quartal.sieben_semester__GT_quartstrng.call(null,new cljs.core.Keyword(null,"studienbeginn","studienbeginn",1757161852).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(p1__18482_SHARP_)));
}),manipels);
});
dep.model.manipel.aender_manipel = (function dep$model$manipel$aender_manipel(manipel,aenderungen){

return dep.model.manipel.__GT_Manipel.call(null,new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848).cljs$core$IFn$_invoke$arity$1(aenderungen),cljs.core.symbol.call(null,new cljs.core.Keyword(null,"Name","Name",-131211369).cljs$core$IFn$_invoke$arity$1(aenderungen)),dep.model.quartal.string__GT_quartal.call(null,new cljs.core.Keyword(null,"Beginn","Beginn",589107550).cljs$core$IFn$_invoke$arity$1(aenderungen)),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518).cljs$core$IFn$_invoke$arity$1(aenderungen),new cljs.core.Keyword(null,"jahrSemesterZuordnung","jahrSemesterZuordnung",332963010).cljs$core$IFn$_invoke$arity$1(manipel));
});
dep.model.manipel.row = (function dep$model$manipel$row(label,input){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),input], null)], null);
});
/**
 * Komponente für das Bearbeitungsformular.
 */
dep.model.manipel.manipel_form_template = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),dep.model.manipel.row.call(null,"Name",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Name","Name",-131211369)], null)], null)),dep.model.manipel.row.call(null,"Studienrichtung",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Studienrichtung","Studienrichtung",2009895848)], null)], null)),dep.model.manipel.row.call(null,"Anzahlgruppen",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"An-Gr","An-Gr",-573881518)], null)], null)),dep.model.manipel.row.call(null,"Studienbeginn",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Beginn","Beginn",589107550)], null)], null)),dep.model.manipel.row.call(null,"Semester 1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-1","Sem-1",1701521289)], null)], null)),dep.model.manipel.row.call(null,"Semester 2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-2","Sem-2",-296574083)], null)], null)),dep.model.manipel.row.call(null,"Semester 3",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-3","Sem-3",1888976619)], null)], null)),dep.model.manipel.row.call(null,"Semester 4",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-4","Sem-4",331149550)], null)], null)),dep.model.manipel.row.call(null,"Semester 5",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-5","Sem-5",-1347053144)], null)], null)),dep.model.manipel.row.call(null,"Semester 6",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-6","Sem-6",-134351187)], null)], null)),dep.model.manipel.row.call(null,"Semester 7",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),"readOnly",new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"Sem-7","Sem-7",305908823)], null)], null))], null);
/**
 * Liefert die Infos für die Manipeltabelle und das Bearbeitungsformular.
 */
dep.model.manipel.manipel_verwaltung = (function dep$model$manipel$manipel_verwaltung(buttons){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"dataset-exists-fn","dataset-exists-fn",-1256962206),new cljs.core.Keyword(null,"table-row-fn","table-row-fn",-1788519931),new cljs.core.Keyword(null,"data-id","data-id",1023855591),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"update-fn","update-fn",711087313),new cljs.core.Keyword(null,"table-column-titles","table-column-titles",964633397),new cljs.core.Keyword(null,"table-key-column","table-key-column",-176523081),new cljs.core.Keyword(null,"edit-component","edit-component",1500156666),new cljs.core.Keyword(null,"title-buttons","title-buttons",-1716755622),new cljs.core.Keyword(null,"data","data",-232669377)],[dep.model.manipel.manipel_mit_namen,dep.model.manipel.manipels__GT_table,new cljs.core.Keyword(null,"name","name",1843675177),"100%",cljs.core.symbol,"Manipel",dep.model.manipel.aender_manipel,dep.model.manipel.manipel_spalten,new cljs.core.Keyword(null,"Name","Name",-131211369),dep.model.manipel.manipel_form_template,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Manipel",new cljs.core.Keyword(null,"buttons","buttons",-1953831197),buttons], null),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"manipels","manipels",626202456)], null);
})]);
});
dep.model.manipel.__GT_Manipel.call(null,"Wirtschaftsinformatik-Bachelor",new cljs.core.Symbol(null,"I17","I17",-880935249,null),dep.model.quartal.__GT_Quartal.call(null,(4),(2017)),(4),cljs.core.PersistentArrayMap.createAsIfByAssoc([dep.model.quartal.__GT_Quartal.call(null,(1),(1)),(1),dep.model.quartal.__GT_Quartal.call(null,(3),(1)),(2),dep.model.quartal.__GT_Quartal.call(null,(1),(2)),(3),dep.model.quartal.__GT_Quartal.call(null,(2),(2)),(4),dep.model.quartal.__GT_Quartal.call(null,(4),(2)),(5),dep.model.quartal.__GT_Quartal.call(null,(3),(3)),(6),dep.model.quartal.__GT_Quartal.call(null,(4),(3)),(7)]));
cljs.core._EQ_.call(null,dep.model.manipel.wirdUnterrichtetIn_QMARK_.call(null,dep.model.manipel.__GT_Manipel.call(null,"Wirtschaftsinformatik-Bachelor",new cljs.core.Symbol(null,"I17","I17",-880935249,null),dep.model.quartal.__GT_Quartal.call(null,(4),(2017)),(4),cljs.core.PersistentArrayMap.createAsIfByAssoc([dep.model.quartal.__GT_Quartal.call(null,(1),(1)),(1),dep.model.quartal.__GT_Quartal.call(null,(3),(1)),(2),dep.model.quartal.__GT_Quartal.call(null,(1),(2)),(3),dep.model.quartal.__GT_Quartal.call(null,(2),(2)),(4),dep.model.quartal.__GT_Quartal.call(null,(4),(2)),(5),dep.model.quartal.__GT_Quartal.call(null,(3),(3)),(6),dep.model.quartal.__GT_Quartal.call(null,(4),(3)),(7)])),dep.model.quartal.__GT_Quartal.call(null,(2),(2018))),false);
cljs.core._EQ_.call(null,dep.model.manipel.wirdUnterrichtetIn_QMARK_.call(null,dep.model.manipel.__GT_Manipel.call(null,"Wirtschaftsinformatik-Bachelor",new cljs.core.Symbol(null,"I17","I17",-880935249,null),dep.model.quartal.__GT_Quartal.call(null,(4),(2017)),(4),cljs.core.PersistentArrayMap.createAsIfByAssoc([dep.model.quartal.__GT_Quartal.call(null,(1),(1)),(1),dep.model.quartal.__GT_Quartal.call(null,(3),(1)),(2),dep.model.quartal.__GT_Quartal.call(null,(1),(2)),(3),dep.model.quartal.__GT_Quartal.call(null,(2),(2)),(4),dep.model.quartal.__GT_Quartal.call(null,(4),(2)),(5),dep.model.quartal.__GT_Quartal.call(null,(3),(3)),(6),dep.model.quartal.__GT_Quartal.call(null,(4),(3)),(7)])),dep.model.quartal.__GT_Quartal.call(null,(1),(2019))),true);
dep.model.manipel.semesterInQuartal.call(null,dep.model.manipel.__GT_Manipel.call(null,"Wirtschaftsinformatik-Bachelor",new cljs.core.Symbol(null,"I17","I17",-880935249,null),dep.model.quartal.__GT_Quartal.call(null,(4),(2017)),(4),cljs.core.PersistentArrayMap.createAsIfByAssoc([dep.model.quartal.__GT_Quartal.call(null,(1),(1)),(1),dep.model.quartal.__GT_Quartal.call(null,(3),(1)),(2),dep.model.quartal.__GT_Quartal.call(null,(1),(2)),(3),dep.model.quartal.__GT_Quartal.call(null,(2),(2)),(4),dep.model.quartal.__GT_Quartal.call(null,(4),(2)),(5),dep.model.quartal.__GT_Quartal.call(null,(3),(3)),(6),dep.model.quartal.__GT_Quartal.call(null,(4),(3)),(7)])),dep.model.quartal.__GT_Quartal.call(null,(3),(2018)));

//# sourceMappingURL=manipel.js.map
