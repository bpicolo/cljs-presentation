// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.basics');
goog.require('cljs.core');
goog.require('presentation.utils');
goog.require('reagent.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"intro",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A ClojureScript crash course.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44427 = (function (meta44428){
this.meta44428 = meta44428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44429,meta44428__$1){
var self__ = this;
var _44429__$1 = this;
return (new presentation.basics.t_presentation$basics44427(meta44428__$1));
});

presentation.basics.t_presentation$basics44427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44429){
var self__ = this;
var _44429__$1 = this;
return self__.meta44428;
});

presentation.basics.t_presentation$basics44427.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44427.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44428","meta44428",1263235167,null)], null);
});

presentation.basics.t_presentation$basics44427.cljs$lang$type = true;

presentation.basics.t_presentation$basics44427.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44427";

presentation.basics.t_presentation$basics44427.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44427");
});

presentation.basics.__GT_t_presentation$basics44427 = (function presentation$basics$__GT_t_presentation$basics44427(meta44428){
return (new presentation.basics.t_presentation$basics44427(meta44428));
});

}

return (new presentation.basics.t_presentation$basics44427(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),"(str \"which is interactive\")",new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"rows","rows",850049680),(12)], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"constructor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Calling a function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44430 = (function (meta44431){
this.meta44431 = meta44431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44432,meta44431__$1){
var self__ = this;
var _44432__$1 = this;
return (new presentation.basics.t_presentation$basics44430(meta44431__$1));
});

presentation.basics.t_presentation$basics44430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44432){
var self__ = this;
var _44432__$1 = this;
return self__.meta44431;
});

presentation.basics.t_presentation$basics44430.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44430.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44431","meta44431",-1549458842,null)], null);
});

presentation.basics.t_presentation$basics44430.cljs$lang$type = true;

presentation.basics.t_presentation$basics44430.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44430";

presentation.basics.t_presentation$basics44430.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44430");
});

presentation.basics.__GT_t_presentation$basics44430 = (function presentation$basics$__GT_t_presentation$basics44430(meta44431){
return (new presentation.basics.t_presentation$basics44430(meta44431));
});

}

return (new presentation.basics.t_presentation$basics44430(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(odd? 1)  ; Question marks are allowed in names! By convention,\n           ; this means it should return a boolean.",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"math","math",-2026912803)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"math",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lisps use prefix notation for mathematical functions.\n  This does take a little getting used to!",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44433 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44433 = (function (meta44434){
this.meta44434 = meta44434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44435,meta44434__$1){
var self__ = this;
var _44435__$1 = this;
return (new presentation.basics.t_presentation$basics44433(meta44434__$1));
});

presentation.basics.t_presentation$basics44433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44435){
var self__ = this;
var _44435__$1 = this;
return self__.meta44434;
});

presentation.basics.t_presentation$basics44433.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44433.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44434","meta44434",-1250757555,null)], null);
});

presentation.basics.t_presentation$basics44433.cljs$lang$type = true;

presentation.basics.t_presentation$basics44433.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44433";

presentation.basics.t_presentation$basics44433.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44433");
});

presentation.basics.__GT_t_presentation$basics44433 = (function presentation$basics$__GT_t_presentation$basics44433(meta44434){
return (new presentation.basics.t_presentation$basics44433(meta44434));
});

}

return (new presentation.basics.t_presentation$basics44433(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 1 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables","variables",1563680814)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"How about defining variables",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44436 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44436 = (function (meta44437){
this.meta44437 = meta44437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44438,meta44437__$1){
var self__ = this;
var _44438__$1 = this;
return (new presentation.basics.t_presentation$basics44436(meta44437__$1));
});

presentation.basics.t_presentation$basics44436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44438){
var self__ = this;
var _44438__$1 = this;
return self__.meta44437;
});

presentation.basics.t_presentation$basics44436.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44436.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44437","meta44437",-1738434559,null)], null);
});

presentation.basics.t_presentation$basics44436.cljs$lang$type = true;

presentation.basics.t_presentation$basics44436.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44436";

presentation.basics.t_presentation$basics44436.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44436");
});

presentation.basics.__GT_t_presentation$basics44436 = (function presentation$basics$__GT_t_presentation$basics44436(meta44437){
return (new presentation.basics.t_presentation$basics44436(meta44437));
});

}

return (new presentation.basics.t_presentation$basics44436(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def globally-scoped 4)\n(* globally-scoped 2)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-lex","variables-lex",1700344136)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-lex",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lexically-scoped variables?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44439 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44439 = (function (meta44440){
this.meta44440 = meta44440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44441,meta44440__$1){
var self__ = this;
var _44441__$1 = this;
return (new presentation.basics.t_presentation$basics44439(meta44440__$1));
});

presentation.basics.t_presentation$basics44439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44441){
var self__ = this;
var _44441__$1 = this;
return self__.meta44440;
});

presentation.basics.t_presentation$basics44439.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44439.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44440","meta44440",462914307,null)], null);
});

presentation.basics.t_presentation$basics44439.cljs$lang$type = true;

presentation.basics.t_presentation$basics44439.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44439";

presentation.basics.t_presentation$basics44439.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44439");
});

presentation.basics.__GT_t_presentation$basics44439 = (function presentation$basics$__GT_t_presentation$basics44439(meta44440){
return (new presentation.basics.t_presentation$basics44439(meta44440));
});

}

return (new presentation.basics.t_presentation$basics44439(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(let [lexical 6]\n    (* lexical 3))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-function","variables-function",-1613251227)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-function",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Defining a function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44442 = (function (meta44443){
this.meta44443 = meta44443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44444,meta44443__$1){
var self__ = this;
var _44444__$1 = this;
return (new presentation.basics.t_presentation$basics44442(meta44443__$1));
});

presentation.basics.t_presentation$basics44442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44444){
var self__ = this;
var _44444__$1 = this;
return self__.meta44443;
});

presentation.basics.t_presentation$basics44442.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44442.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44443","meta44443",-1648066185,null)], null);
});

presentation.basics.t_presentation$basics44442.cljs$lang$type = true;

presentation.basics.t_presentation$basics44442.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44442";

presentation.basics.t_presentation$basics44442.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44442");
});

presentation.basics.__GT_t_presentation$basics44442 = (function presentation$basics$__GT_t_presentation$basics44442(meta44443){
return (new presentation.basics.t_presentation$basics44442(meta44443));
});

}

return (new presentation.basics.t_presentation$basics44442(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(defn multiply-by-two [number]\n   (* 2 number))\n(multiply-by-two 17)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"control-structures","control-structures",376354729)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"control-structures",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Good old if is here for you for control flow",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44445 = (function (meta44446){
this.meta44446 = meta44446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44447,meta44446__$1){
var self__ = this;
var _44447__$1 = this;
return (new presentation.basics.t_presentation$basics44445(meta44446__$1));
});

presentation.basics.t_presentation$basics44445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44447){
var self__ = this;
var _44447__$1 = this;
return self__.meta44446;
});

presentation.basics.t_presentation$basics44445.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44445.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44446","meta44446",-1880808130,null)], null);
});

presentation.basics.t_presentation$basics44445.cljs$lang$type = true;

presentation.basics.t_presentation$basics44445.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44445";

presentation.basics.t_presentation$basics44445.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44445");
});

presentation.basics.__GT_t_presentation$basics44445 = (function presentation$basics$__GT_t_presentation$basics44445(meta44446){
return (new presentation.basics.t_presentation$basics44445(meta44446));
});

}

return (new presentation.basics.t_presentation$basics44445(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(if (> 0 5)\n     \"Bigger\"\n     \"Smaller\"))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"control-structures","control-structures",376354729)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"control-structures",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"As you might have noticed, lisp code is built outward usually, a bit different\n  from other languages",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44448 = (function (meta44449){
this.meta44449 = meta44449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44450,meta44449__$1){
var self__ = this;
var _44450__$1 = this;
return (new presentation.basics.t_presentation$basics44448(meta44449__$1));
});

presentation.basics.t_presentation$basics44448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44450){
var self__ = this;
var _44450__$1 = this;
return self__.meta44449;
});

presentation.basics.t_presentation$basics44448.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44448.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44449","meta44449",464002631,null)], null);
});

presentation.basics.t_presentation$basics44448.cljs$lang$type = true;

presentation.basics.t_presentation$basics44448.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44448";

presentation.basics.t_presentation$basics44448.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44448");
});

presentation.basics.__GT_t_presentation$basics44448 = (function presentation$basics$__GT_t_presentation$basics44448(meta44449){
return (new presentation.basics.t_presentation$basics44448(meta44449));
});

}

return (new presentation.basics.t_presentation$basics44448(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(inc\n  (inc 2))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"the-best-macro","the-best-macro",-1280642253)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"the-best-macro",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"But it is possible to flip this around with the -> macro",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44451 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44451 = (function (meta44452){
this.meta44452 = meta44452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44453,meta44452__$1){
var self__ = this;
var _44453__$1 = this;
return (new presentation.basics.t_presentation$basics44451(meta44452__$1));
});

presentation.basics.t_presentation$basics44451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44453){
var self__ = this;
var _44453__$1 = this;
return self__.meta44452;
});

presentation.basics.t_presentation$basics44451.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44451.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44452","meta44452",-1657337708,null)], null);
});

presentation.basics.t_presentation$basics44451.cljs$lang$type = true;

presentation.basics.t_presentation$basics44451.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44451";

presentation.basics.t_presentation$basics44451.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44451");
});

presentation.basics.__GT_t_presentation$basics44451 = (function presentation$basics$__GT_t_presentation$basics44451(meta44452){
return (new presentation.basics.t_presentation$basics44451(meta44452));
});

}

return (new presentation.basics.t_presentation$basics44451(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(-> 2\n    inc\n    inc)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"the-rarely-used-loop","the-rarely-used-loop",-802183931)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"the-rarely-used-loop",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Something different from most languages - Loop constructs",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44454 = (function (meta44455){
this.meta44455 = meta44455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44456,meta44455__$1){
var self__ = this;
var _44456__$1 = this;
return (new presentation.basics.t_presentation$basics44454(meta44455__$1));
});

presentation.basics.t_presentation$basics44454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44456){
var self__ = this;
var _44456__$1 = this;
return self__.meta44455;
});

presentation.basics.t_presentation$basics44454.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44454.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44455","meta44455",-1381800988,null)], null);
});

presentation.basics.t_presentation$basics44454.cljs$lang$type = true;

presentation.basics.t_presentation$basics44454.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44454";

presentation.basics.t_presentation$basics44454.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44454");
});

presentation.basics.__GT_t_presentation$basics44454 = (function presentation$basics$__GT_t_presentation$basics44454(meta44455){
return (new presentation.basics.t_presentation$basics44454(meta44455));
});

}

return (new presentation.basics.t_presentation$basics44454(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(loop [n 1]\n  (if (< n 10)\n    (recur (+ n 1))\n    n))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"comprehensions","comprehensions",1977745828)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"comprehensions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Comprehensions serve as another alternative loop construct.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44457 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44457 = (function (meta44458){
this.meta44458 = meta44458;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44459,meta44458__$1){
var self__ = this;
var _44459__$1 = this;
return (new presentation.basics.t_presentation$basics44457(meta44458__$1));
});

presentation.basics.t_presentation$basics44457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44459){
var self__ = this;
var _44459__$1 = this;
return self__.meta44458;
});

presentation.basics.t_presentation$basics44457.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44457.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44275__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44294__auto__)){
return ((function (v__44294__auto__,this__44275__auto____$1){
return (function (data_atom__44295__auto__,owner__44296__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44294__auto__,data_atom__44295__auto__,owner__44296__auto__], null));
});
;})(v__44294__auto__,this__44275__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44294__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44276__auto__))));
});

presentation.basics.t_presentation$basics44457.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44458","meta44458",-2014863973,null)], null);
});

presentation.basics.t_presentation$basics44457.cljs$lang$type = true;

presentation.basics.t_presentation$basics44457.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44457";

presentation.basics.t_presentation$basics44457.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44457");
});

presentation.basics.__GT_t_presentation$basics44457 = (function presentation$basics$__GT_t_presentation$basics44457(meta44458){
return (new presentation.basics.t_presentation$basics44457(meta44458));
});

}

return (new presentation.basics.t_presentation$basics44457(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(for [x (range 3 7)]\n  (* x x))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
