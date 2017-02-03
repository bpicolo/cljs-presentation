// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.collections');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('presentation.utils');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"a-list","a-list",1018815940)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lists are the basic elements in any Lisp, ClojureScript no exception. All the source code is just lists, recall.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44376 = (function (meta44377){
this.meta44377 = meta44377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44378,meta44377__$1){
var self__ = this;
var _44378__$1 = this;
return (new presentation.collections.t_presentation$collections44376(meta44377__$1));
});

presentation.collections.t_presentation$collections44376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44378){
var self__ = this;
var _44378__$1 = this;
return self__.meta44377;
});

presentation.collections.t_presentation$collections44376.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44376.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44377","meta44377",189152843,null)], null);
});

presentation.collections.t_presentation$collections44376.cljs$lang$type = true;

presentation.collections.t_presentation$collections44376.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44376";

presentation.collections.t_presentation$collections44376.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44376");
});

presentation.collections.__GT_t_presentation$collections44376 = (function presentation$collections$__GT_t_presentation$collections44376(meta44377){
return (new presentation.collections.t_presentation$collections44376(meta44377));
});

}

return (new presentation.collections.t_presentation$collections44376(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"'(1 3 2)  ; The ' is necessary, because otherwise this would try to call a function \"1\" with args 3 and 2",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"a-list-2","a-list-2",-1918209330)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a-list-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44379 = (function (meta44380){
this.meta44380 = meta44380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44381,meta44380__$1){
var self__ = this;
var _44381__$1 = this;
return (new presentation.collections.t_presentation$collections44379(meta44380__$1));
});

presentation.collections.t_presentation$collections44379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44381){
var self__ = this;
var _44381__$1 = this;
return self__.meta44380;
});

presentation.collections.t_presentation$collections44379.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44379.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44380","meta44380",-1438110962,null)], null);
});

presentation.collections.t_presentation$collections44379.cljs$lang$type = true;

presentation.collections.t_presentation$collections44379.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44379";

presentation.collections.t_presentation$collections44379.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44379");
});

presentation.collections.__GT_t_presentation$collections44379 = (function presentation$collections$__GT_t_presentation$collections44379(meta44380){
return (new presentation.collections.t_presentation$collections44379(meta44380));
});

}

return (new presentation.collections.t_presentation$collections44379(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(list 1 3 \"better\")  ; For single-quote haters like me",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"constructor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Vectors are lists, but indexable (you'll rarely use lists over vectors)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44382 = (function (meta44383){
this.meta44383 = meta44383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44384,meta44383__$1){
var self__ = this;
var _44384__$1 = this;
return (new presentation.collections.t_presentation$collections44382(meta44383__$1));
});

presentation.collections.t_presentation$collections44382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44384){
var self__ = this;
var _44384__$1 = this;
return self__.meta44383;
});

presentation.collections.t_presentation$collections44382.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44382.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44383","meta44383",755349692,null)], null);
});

presentation.collections.t_presentation$collections44382.cljs$lang$type = true;

presentation.collections.t_presentation$collections44382.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44382";

presentation.collections.t_presentation$collections44382.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44382");
});

presentation.collections.__GT_t_presentation$collections44382 = (function presentation$collections$__GT_t_presentation$collections44382(meta44383){
return (new presentation.collections.t_presentation$collections44382(meta44383));
});

}

return (new presentation.collections.t_presentation$collections44382(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"[1 2 3]",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"get","get",1683182755)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"get",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Accessing elements in a vector",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44385 = (function (meta44386){
this.meta44386 = meta44386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44387,meta44386__$1){
var self__ = this;
var _44387__$1 = this;
return (new presentation.collections.t_presentation$collections44385(meta44386__$1));
});

presentation.collections.t_presentation$collections44385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44387){
var self__ = this;
var _44387__$1 = this;
return self__.meta44386;
});

presentation.collections.t_presentation$collections44385.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44385.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44386","meta44386",465198379,null)], null);
});

presentation.collections.t_presentation$collections44385.cljs$lang$type = true;

presentation.collections.t_presentation$collections44385.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44385";

presentation.collections.t_presentation$collections44385.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44385");
});

presentation.collections.__GT_t_presentation$collections44385 = (function presentation$collections$__GT_t_presentation$collections44385(meta44386){
return (new presentation.collections.t_presentation$collections44385(meta44386));
});

}

return (new presentation.collections.t_presentation$collections44385(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(get [1 2 3] 1)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"conj","conj",1527141827)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"conj",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Pushing things onto the vector.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44388 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44388 = (function (meta44389){
this.meta44389 = meta44389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44390,meta44389__$1){
var self__ = this;
var _44390__$1 = this;
return (new presentation.collections.t_presentation$collections44388(meta44389__$1));
});

presentation.collections.t_presentation$collections44388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44390){
var self__ = this;
var _44390__$1 = this;
return self__.meta44389;
});

presentation.collections.t_presentation$collections44388.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44388.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44389","meta44389",186271890,null)], null);
});

presentation.collections.t_presentation$collections44388.cljs$lang$type = true;

presentation.collections.t_presentation$collections44388.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44388";

presentation.collections.t_presentation$collections44388.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44388");
});

presentation.collections.__GT_t_presentation$collections44388 = (function presentation$collections$__GT_t_presentation$collections44388(meta44389){
return (new presentation.collections.t_presentation$collections44388(meta44389));
});

}

return (new presentation.collections.t_presentation$collections44388(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(conj [1 2 3] 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"wat","wat",1561347706)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"wat",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44391 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44391 = (function (meta44392){
this.meta44392 = meta44392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44393,meta44392__$1){
var self__ = this;
var _44393__$1 = this;
return (new presentation.collections.t_presentation$collections44391(meta44392__$1));
});

presentation.collections.t_presentation$collections44391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44393){
var self__ = this;
var _44393__$1 = this;
return self__.meta44392;
});

presentation.collections.t_presentation$collections44391.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44391.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Ben, what the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"heck"], null)," is 'conj'? Seems like a load of nonsense."], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44392","meta44392",-2117555950,null)], null);
});

presentation.collections.t_presentation$collections44391.cljs$lang$type = true;

presentation.collections.t_presentation$collections44391.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44391";

presentation.collections.t_presentation$collections44391.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44391");
});

presentation.collections.__GT_t_presentation$collections44391 = (function presentation$collections$__GT_t_presentation$collections44391(meta44392){
return (new presentation.collections.t_presentation$collections44391(meta44392));
});

}

return (new presentation.collections.t_presentation$collections44391(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"cons","cons",-885083073)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cons",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Put something onto the front",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44394 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44394 = (function (meta44395){
this.meta44395 = meta44395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44396,meta44395__$1){
var self__ = this;
var _44396__$1 = this;
return (new presentation.collections.t_presentation$collections44394(meta44395__$1));
});

presentation.collections.t_presentation$collections44394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44396){
var self__ = this;
var _44396__$1 = this;
return self__.meta44395;
});

presentation.collections.t_presentation$collections44394.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44394.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44395","meta44395",373211283,null)], null);
});

presentation.collections.t_presentation$collections44394.cljs$lang$type = true;

presentation.collections.t_presentation$collections44394.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44394";

presentation.collections.t_presentation$collections44394.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44394");
});

presentation.collections.__GT_t_presentation$collections44394 = (function presentation$collections$__GT_t_presentation$collections44394(meta44395){
return (new presentation.collections.t_presentation$collections44394(meta44395));
});

}

return (new presentation.collections.t_presentation$collections44394(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(cons 4 [1 2 3])",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"sorting","sorting",622249690)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sorting",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"We can do all the standard collections things.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44397 = (function (meta44398){
this.meta44398 = meta44398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44399,meta44398__$1){
var self__ = this;
var _44399__$1 = this;
return (new presentation.collections.t_presentation$collections44397(meta44398__$1));
});

presentation.collections.t_presentation$collections44397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44399){
var self__ = this;
var _44399__$1 = this;
return self__.meta44398;
});

presentation.collections.t_presentation$collections44397.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44397.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44398","meta44398",-2129412179,null)], null);
});

presentation.collections.t_presentation$collections44397.cljs$lang$type = true;

presentation.collections.t_presentation$collections44397.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44397";

presentation.collections.t_presentation$collections44397.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44397");
});

presentation.collections.__GT_t_presentation$collections44397 = (function presentation$collections$__GT_t_presentation$collections44397(meta44398){
return (new presentation.collections.t_presentation$collections44397(meta44398));
});

}

return (new presentation.collections.t_presentation$collections44397(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(sort [3 2 7])",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"getting-back-the-vector","getting-back-the-vector",296172934)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"getting-back-the-vector",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You may have to translate back to your original data structure",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44400 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44400 = (function (meta44401){
this.meta44401 = meta44401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44402,meta44401__$1){
var self__ = this;
var _44402__$1 = this;
return (new presentation.collections.t_presentation$collections44400(meta44401__$1));
});

presentation.collections.t_presentation$collections44400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44402){
var self__ = this;
var _44402__$1 = this;
return self__.meta44401;
});

presentation.collections.t_presentation$collections44400.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44400.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44401","meta44401",-1926925282,null)], null);
});

presentation.collections.t_presentation$collections44400.cljs$lang$type = true;

presentation.collections.t_presentation$collections44400.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44400";

presentation.collections.t_presentation$collections44400.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44400");
});

presentation.collections.__GT_t_presentation$collections44400 = (function presentation$collections$__GT_t_presentation$collections44400(meta44401){
return (new presentation.collections.t_presentation$collections44400(meta44401));
});

}

return (new presentation.collections.t_presentation$collections44400(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(vec (sort [3 2 7]))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"last-but-not-least","last-but-not-least",-889288148)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"last-but-not-least",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Mapping types (what you'll use most)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44403 = (function (meta44404){
this.meta44404 = meta44404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44405,meta44404__$1){
var self__ = this;
var _44405__$1 = this;
return (new presentation.collections.t_presentation$collections44403(meta44404__$1));
});

presentation.collections.t_presentation$collections44403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44405){
var self__ = this;
var _44405__$1 = this;
return self__.meta44404;
});

presentation.collections.t_presentation$collections44403.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44403.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44404","meta44404",667452052,null)], null);
});

presentation.collections.t_presentation$collections44403.cljs$lang$type = true;

presentation.collections.t_presentation$collections44403.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44403";

presentation.collections.t_presentation$collections44403.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44403");
});

presentation.collections.__GT_t_presentation$collections44403 = (function presentation$collections$__GT_t_presentation$collections44403(meta44404){
return (new presentation.collections.t_presentation$collections44403(meta44404));
});

}

return (new presentation.collections.t_presentation$collections44403(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"{1 \"Hi!\", 2 \"There\"}",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Introducing keywords",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44406 = (function (meta44407){
this.meta44407 = meta44407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44408,meta44407__$1){
var self__ = this;
var _44408__$1 = this;
return (new presentation.collections.t_presentation$collections44406(meta44407__$1));
});

presentation.collections.t_presentation$collections44406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44408){
var self__ = this;
var _44408__$1 = this;
return self__.meta44407;
});

presentation.collections.t_presentation$collections44406.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44406.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44407","meta44407",1394751909,null)], null);
});

presentation.collections.t_presentation$collections44406.cljs$lang$type = true;

presentation.collections.t_presentation$collections44406.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44406";

presentation.collections.t_presentation$collections44406.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44406");
});

presentation.collections.__GT_t_presentation$collections44406 = (function presentation$collections$__GT_t_presentation$collections44406(meta44407){
return (new presentation.collections.t_presentation$collections44406(meta44407));
});

}

return (new presentation.collections.t_presentation$collections44406(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),":i-am-a-keyword",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44409 = (function (meta44410){
this.meta44410 = meta44410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44411,meta44410__$1){
var self__ = this;
var _44411__$1 = this;
return (new presentation.collections.t_presentation$collections44409(meta44410__$1));
});

presentation.collections.t_presentation$collections44409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44411){
var self__ = this;
var _44411__$1 = this;
return self__.meta44410;
});

presentation.collections.t_presentation$collections44409.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44409.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44410","meta44410",-1567625679,null)], null);
});

presentation.collections.t_presentation$collections44409.cljs$lang$type = true;

presentation.collections.t_presentation$collections44409.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44409";

presentation.collections.t_presentation$collections44409.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44409");
});

presentation.collections.__GT_t_presentation$collections44409 = (function presentation$collections$__GT_t_presentation$collections44409(meta44410){
return (new presentation.collections.t_presentation$collections44409(meta44410));
});

}

return (new presentation.collections.t_presentation$collections44409(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"{:id 1 :name \"Ben Picolo\" :credit-card-number \"Nice Try\"}",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps","using-maps",134082454)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44412 = (function (meta44413){
this.meta44413 = meta44413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44414,meta44413__$1){
var self__ = this;
var _44414__$1 = this;
return (new presentation.collections.t_presentation$collections44412(meta44413__$1));
});

presentation.collections.t_presentation$collections44412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44414){
var self__ = this;
var _44414__$1 = this;
return self__.meta44413;
});

presentation.collections.t_presentation$collections44412.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44412.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44413","meta44413",694108284,null)], null);
});

presentation.collections.t_presentation$collections44412.cljs$lang$type = true;

presentation.collections.t_presentation$collections44412.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44412";

presentation.collections.t_presentation$collections44412.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44412");
});

presentation.collections.__GT_t_presentation$collections44412 = (function presentation$collections$__GT_t_presentation$collections44412(meta44413){
return (new presentation.collections.t_presentation$collections44412(meta44413));
});

}

return (new presentation.collections.t_presentation$collections44412(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(get ben :name)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"hmm","hmm",1817971598)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hmm",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44415 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44415 = (function (meta44416){
this.meta44416 = meta44416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44417,meta44416__$1){
var self__ = this;
var _44417__$1 = this;
return (new presentation.collections.t_presentation$collections44415(meta44416__$1));
});

presentation.collections.t_presentation$collections44415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44417){
var self__ = this;
var _44417__$1 = this;
return self__.meta44416;
});

presentation.collections.t_presentation$collections44415.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44415.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"That seems kind of annoying. Can we do better?"], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44416","meta44416",295617086,null)], null);
});

presentation.collections.t_presentation$collections44415.cljs$lang$type = true;

presentation.collections.t_presentation$collections44415.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44415";

presentation.collections.t_presentation$collections44415.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44415");
});

presentation.collections.__GT_t_presentation$collections44415 = (function presentation$collections$__GT_t_presentation$collections44415(meta44416){
return (new presentation.collections.t_presentation$collections44415(meta44416));
});

}

return (new presentation.collections.t_presentation$collections44415(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps2","using-maps2",-1670537902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44418 = (function (meta44419){
this.meta44419 = meta44419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44420,meta44419__$1){
var self__ = this;
var _44420__$1 = this;
return (new presentation.collections.t_presentation$collections44418(meta44419__$1));
});

presentation.collections.t_presentation$collections44418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44420){
var self__ = this;
var _44420__$1 = this;
return self__.meta44419;
});

presentation.collections.t_presentation$collections44418.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44418.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44419","meta44419",1494354816,null)], null);
});

presentation.collections.t_presentation$collections44418.cljs$lang$type = true;

presentation.collections.t_presentation$collections44418.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44418";

presentation.collections.t_presentation$collections44418.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44418");
});

presentation.collections.__GT_t_presentation$collections44418 = (function presentation$collections$__GT_t_presentation$collections44418(meta44419){
return (new presentation.collections.t_presentation$collections44418(meta44419));
});

}

return (new presentation.collections.t_presentation$collections44418(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(:name ben)  ; Keywords are the secret sauce",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps2","using-maps2",-1670537902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This seems kind of annoying too, though.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44421 = (function (meta44422){
this.meta44422 = meta44422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44423,meta44422__$1){
var self__ = this;
var _44423__$1 = this;
return (new presentation.collections.t_presentation$collections44421(meta44422__$1));
});

presentation.collections.t_presentation$collections44421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44423){
var self__ = this;
var _44423__$1 = this;
return self__.meta44422;
});

presentation.collections.t_presentation$collections44421.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44421.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44274__auto__,devcard_opts__44275__auto__){
var self__ = this;
var this__44274__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44275__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44293__auto__ = ((function (this__44274__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__44274__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__44293__auto__)){
return ((function (v__44293__auto__,this__44274__auto____$1){
return (function (data_atom__44294__auto__,owner__44295__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__44293__auto__,data_atom__44294__auto__,owner__44295__auto__], null));
});
;})(v__44293__auto__,this__44274__auto____$1))
} else {
return reagent.core.as_element.call(null,v__44293__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__44275__auto__))));
});

presentation.collections.t_presentation$collections44421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44422","meta44422",-1750381208,null)], null);
});

presentation.collections.t_presentation$collections44421.cljs$lang$type = true;

presentation.collections.t_presentation$collections44421.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44421";

presentation.collections.t_presentation$collections44421.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44421");
});

presentation.collections.__GT_t_presentation$collections44421 = (function presentation$collections$__GT_t_presentation$collections44421(meta44422){
return (new presentation.collections.t_presentation$collections44421(meta44422));
});

}

return (new presentation.collections.t_presentation$collections44421(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(:city (:address ben))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
