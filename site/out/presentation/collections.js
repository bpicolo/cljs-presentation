// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.collections');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('presentation.utils');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"a-list","a-list",1018815940)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lists are the basic elements in any Lisp, ClojureScript no exception. All the source code is just lists, recall.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44377 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44377 = (function (meta44378){
this.meta44378 = meta44378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44379,meta44378__$1){
var self__ = this;
var _44379__$1 = this;
return (new presentation.collections.t_presentation$collections44377(meta44378__$1));
});

presentation.collections.t_presentation$collections44377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44379){
var self__ = this;
var _44379__$1 = this;
return self__.meta44378;
});

presentation.collections.t_presentation$collections44377.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44377.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44378","meta44378",-1556244102,null)], null);
});

presentation.collections.t_presentation$collections44377.cljs$lang$type = true;

presentation.collections.t_presentation$collections44377.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44377";

presentation.collections.t_presentation$collections44377.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44377");
});

presentation.collections.__GT_t_presentation$collections44377 = (function presentation$collections$__GT_t_presentation$collections44377(meta44378){
return (new presentation.collections.t_presentation$collections44377(meta44378));
});

}

return (new presentation.collections.t_presentation$collections44377(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"'(1 3 2)  ; The ' is necessary, because otherwise this would\n          ; try to call a function \"1\" with args 3 and 2",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"a-list-2","a-list-2",-1918209330)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a-list-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44380 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44380 = (function (meta44381){
this.meta44381 = meta44381;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44382,meta44381__$1){
var self__ = this;
var _44382__$1 = this;
return (new presentation.collections.t_presentation$collections44380(meta44381__$1));
});

presentation.collections.t_presentation$collections44380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44382){
var self__ = this;
var _44382__$1 = this;
return self__.meta44381;
});

presentation.collections.t_presentation$collections44380.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44380.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44380.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44381","meta44381",-1895346988,null)], null);
});

presentation.collections.t_presentation$collections44380.cljs$lang$type = true;

presentation.collections.t_presentation$collections44380.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44380";

presentation.collections.t_presentation$collections44380.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44380");
});

presentation.collections.__GT_t_presentation$collections44380 = (function presentation$collections$__GT_t_presentation$collections44380(meta44381){
return (new presentation.collections.t_presentation$collections44380(meta44381));
});

}

return (new presentation.collections.t_presentation$collections44380(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(list 1 3 \"better\")  ; For single-quote haters like me",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"constructor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Vectors are lists, but indexable (you'll rarely use lists over vectors)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44383 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44383 = (function (meta44384){
this.meta44384 = meta44384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44385,meta44384__$1){
var self__ = this;
var _44385__$1 = this;
return (new presentation.collections.t_presentation$collections44383(meta44384__$1));
});

presentation.collections.t_presentation$collections44383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44385){
var self__ = this;
var _44385__$1 = this;
return self__.meta44384;
});

presentation.collections.t_presentation$collections44383.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44383.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44384","meta44384",998829532,null)], null);
});

presentation.collections.t_presentation$collections44383.cljs$lang$type = true;

presentation.collections.t_presentation$collections44383.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44383";

presentation.collections.t_presentation$collections44383.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44383");
});

presentation.collections.__GT_t_presentation$collections44383 = (function presentation$collections$__GT_t_presentation$collections44383(meta44384){
return (new presentation.collections.t_presentation$collections44383(meta44384));
});

}

return (new presentation.collections.t_presentation$collections44383(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"[1 2 3]",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"get","get",1683182755)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"get",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Accessing elements in a vector",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44386 = (function (meta44387){
this.meta44387 = meta44387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44388,meta44387__$1){
var self__ = this;
var _44388__$1 = this;
return (new presentation.collections.t_presentation$collections44386(meta44387__$1));
});

presentation.collections.t_presentation$collections44386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44388){
var self__ = this;
var _44388__$1 = this;
return self__.meta44387;
});

presentation.collections.t_presentation$collections44386.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44386.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44387","meta44387",1708912969,null)], null);
});

presentation.collections.t_presentation$collections44386.cljs$lang$type = true;

presentation.collections.t_presentation$collections44386.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44386";

presentation.collections.t_presentation$collections44386.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44386");
});

presentation.collections.__GT_t_presentation$collections44386 = (function presentation$collections$__GT_t_presentation$collections44386(meta44387){
return (new presentation.collections.t_presentation$collections44386(meta44387));
});

}

return (new presentation.collections.t_presentation$collections44386(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(get [1 2 3] 1)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"conj","conj",1527141827)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"conj",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Pushing things onto the vector.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44389 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44389 = (function (meta44390){
this.meta44390 = meta44390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44391,meta44390__$1){
var self__ = this;
var _44391__$1 = this;
return (new presentation.collections.t_presentation$collections44389(meta44390__$1));
});

presentation.collections.t_presentation$collections44389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44391){
var self__ = this;
var _44391__$1 = this;
return self__.meta44390;
});

presentation.collections.t_presentation$collections44389.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44389.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44389.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44390","meta44390",718321465,null)], null);
});

presentation.collections.t_presentation$collections44389.cljs$lang$type = true;

presentation.collections.t_presentation$collections44389.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44389";

presentation.collections.t_presentation$collections44389.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44389");
});

presentation.collections.__GT_t_presentation$collections44389 = (function presentation$collections$__GT_t_presentation$collections44389(meta44390){
return (new presentation.collections.t_presentation$collections44389(meta44390));
});

}

return (new presentation.collections.t_presentation$collections44389(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(conj [1 2 3] 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"why-conj?","why-conj?",-789061042)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"why-conj?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44392 = (function (meta44393){
this.meta44393 = meta44393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44394,meta44393__$1){
var self__ = this;
var _44394__$1 = this;
return (new presentation.collections.t_presentation$collections44392(meta44393__$1));
});

presentation.collections.t_presentation$collections44392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44394){
var self__ = this;
var _44394__$1 = this;
return self__.meta44393;
});

presentation.collections.t_presentation$collections44392.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44392.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.img,"/img/what.gif"], null);
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

presentation.collections.t_presentation$collections44392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44393","meta44393",681903319,null)], null);
});

presentation.collections.t_presentation$collections44392.cljs$lang$type = true;

presentation.collections.t_presentation$collections44392.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44392";

presentation.collections.t_presentation$collections44392.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44392");
});

presentation.collections.__GT_t_presentation$collections44392 = (function presentation$collections$__GT_t_presentation$collections44392(meta44393){
return (new presentation.collections.t_presentation$collections44392(meta44393));
});

}

return (new presentation.collections.t_presentation$collections44392(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"cons","cons",-885083073)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cons",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Put something onto the front",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44395 = (function (meta44396){
this.meta44396 = meta44396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44397,meta44396__$1){
var self__ = this;
var _44397__$1 = this;
return (new presentation.collections.t_presentation$collections44395(meta44396__$1));
});

presentation.collections.t_presentation$collections44395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44397){
var self__ = this;
var _44397__$1 = this;
return self__.meta44396;
});

presentation.collections.t_presentation$collections44395.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44395.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44396","meta44396",2120672862,null)], null);
});

presentation.collections.t_presentation$collections44395.cljs$lang$type = true;

presentation.collections.t_presentation$collections44395.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44395";

presentation.collections.t_presentation$collections44395.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44395");
});

presentation.collections.__GT_t_presentation$collections44395 = (function presentation$collections$__GT_t_presentation$collections44395(meta44396){
return (new presentation.collections.t_presentation$collections44395(meta44396));
});

}

return (new presentation.collections.t_presentation$collections44395(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(cons 4 [1 2 3])",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"sorting","sorting",622249690)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sorting",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"We can do all the standard collections things.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44398 = (function (meta44399){
this.meta44399 = meta44399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44400,meta44399__$1){
var self__ = this;
var _44400__$1 = this;
return (new presentation.collections.t_presentation$collections44398(meta44399__$1));
});

presentation.collections.t_presentation$collections44398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44400){
var self__ = this;
var _44400__$1 = this;
return self__.meta44399;
});

presentation.collections.t_presentation$collections44398.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44398.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44399","meta44399",-1583075915,null)], null);
});

presentation.collections.t_presentation$collections44398.cljs$lang$type = true;

presentation.collections.t_presentation$collections44398.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44398";

presentation.collections.t_presentation$collections44398.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44398");
});

presentation.collections.__GT_t_presentation$collections44398 = (function presentation$collections$__GT_t_presentation$collections44398(meta44399){
return (new presentation.collections.t_presentation$collections44398(meta44399));
});

}

return (new presentation.collections.t_presentation$collections44398(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(sort [3 2 7])",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"getting-back-the-vector","getting-back-the-vector",296172934)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"getting-back-the-vector",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You may have to translate back to your original data structure",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44401 = (function (meta44402){
this.meta44402 = meta44402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44403,meta44402__$1){
var self__ = this;
var _44403__$1 = this;
return (new presentation.collections.t_presentation$collections44401(meta44402__$1));
});

presentation.collections.t_presentation$collections44401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44403){
var self__ = this;
var _44403__$1 = this;
return self__.meta44402;
});

presentation.collections.t_presentation$collections44401.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44401.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44402","meta44402",385926972,null)], null);
});

presentation.collections.t_presentation$collections44401.cljs$lang$type = true;

presentation.collections.t_presentation$collections44401.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44401";

presentation.collections.t_presentation$collections44401.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44401");
});

presentation.collections.__GT_t_presentation$collections44401 = (function presentation$collections$__GT_t_presentation$collections44401(meta44402){
return (new presentation.collections.t_presentation$collections44401(meta44402));
});

}

return (new presentation.collections.t_presentation$collections44401(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(vec (sort [3 2 7]))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"last-but-not-least","last-but-not-least",-889288148)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"last-but-not-least",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Mapping types (what you'll use most)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44404 = (function (meta44405){
this.meta44405 = meta44405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44406,meta44405__$1){
var self__ = this;
var _44406__$1 = this;
return (new presentation.collections.t_presentation$collections44404(meta44405__$1));
});

presentation.collections.t_presentation$collections44404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44406){
var self__ = this;
var _44406__$1 = this;
return self__.meta44405;
});

presentation.collections.t_presentation$collections44404.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44404.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44405","meta44405",324939799,null)], null);
});

presentation.collections.t_presentation$collections44404.cljs$lang$type = true;

presentation.collections.t_presentation$collections44404.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44404";

presentation.collections.t_presentation$collections44404.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44404");
});

presentation.collections.__GT_t_presentation$collections44404 = (function presentation$collections$__GT_t_presentation$collections44404(meta44405){
return (new presentation.collections.t_presentation$collections44404(meta44405));
});

}

return (new presentation.collections.t_presentation$collections44404(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"{1 \"Hi!\", 2 \"There\"}",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Introducing keywords",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44407 = (function (meta44408){
this.meta44408 = meta44408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44409,meta44408__$1){
var self__ = this;
var _44409__$1 = this;
return (new presentation.collections.t_presentation$collections44407(meta44408__$1));
});

presentation.collections.t_presentation$collections44407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44409){
var self__ = this;
var _44409__$1 = this;
return self__.meta44408;
});

presentation.collections.t_presentation$collections44407.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44407.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44408","meta44408",-319585130,null)], null);
});

presentation.collections.t_presentation$collections44407.cljs$lang$type = true;

presentation.collections.t_presentation$collections44407.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44407";

presentation.collections.t_presentation$collections44407.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44407");
});

presentation.collections.__GT_t_presentation$collections44407 = (function presentation$collections$__GT_t_presentation$collections44407(meta44408){
return (new presentation.collections.t_presentation$collections44407(meta44408));
});

}

return (new presentation.collections.t_presentation$collections44407(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),":i-am-a-keyword",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44410 = (function (meta44411){
this.meta44411 = meta44411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44412,meta44411__$1){
var self__ = this;
var _44412__$1 = this;
return (new presentation.collections.t_presentation$collections44410(meta44411__$1));
});

presentation.collections.t_presentation$collections44410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44412){
var self__ = this;
var _44412__$1 = this;
return self__.meta44411;
});

presentation.collections.t_presentation$collections44410.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44410.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44411","meta44411",-2136428690,null)], null);
});

presentation.collections.t_presentation$collections44410.cljs$lang$type = true;

presentation.collections.t_presentation$collections44410.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44410";

presentation.collections.t_presentation$collections44410.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44410");
});

presentation.collections.__GT_t_presentation$collections44410 = (function presentation$collections$__GT_t_presentation$collections44410(meta44411){
return (new presentation.collections.t_presentation$collections44410(meta44411));
});

}

return (new presentation.collections.t_presentation$collections44410(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"{:id 1 :name \"Ben Picolo\" :credit-card-number \"Nice Try\"}",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps","using-maps",134082454)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44413 = (function (meta44414){
this.meta44414 = meta44414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44415,meta44414__$1){
var self__ = this;
var _44415__$1 = this;
return (new presentation.collections.t_presentation$collections44413(meta44414__$1));
});

presentation.collections.t_presentation$collections44413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44415){
var self__ = this;
var _44415__$1 = this;
return self__.meta44414;
});

presentation.collections.t_presentation$collections44413.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44413.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44413.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44414","meta44414",665390487,null)], null);
});

presentation.collections.t_presentation$collections44413.cljs$lang$type = true;

presentation.collections.t_presentation$collections44413.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44413";

presentation.collections.t_presentation$collections44413.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44413");
});

presentation.collections.__GT_t_presentation$collections44413 = (function presentation$collections$__GT_t_presentation$collections44413(meta44414){
return (new presentation.collections.t_presentation$collections44413(meta44414));
});

}

return (new presentation.collections.t_presentation$collections44413(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(get ben :name)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"hmm","hmm",1817971598)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hmm",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44416 = (function (meta44417){
this.meta44417 = meta44417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44418,meta44417__$1){
var self__ = this;
var _44418__$1 = this;
return (new presentation.collections.t_presentation$collections44416(meta44417__$1));
});

presentation.collections.t_presentation$collections44416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44418){
var self__ = this;
var _44418__$1 = this;
return self__.meta44417;
});

presentation.collections.t_presentation$collections44416.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44416.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"That seems kind of annoying. Can we do better?"], null);
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

presentation.collections.t_presentation$collections44416.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44417","meta44417",-233242301,null)], null);
});

presentation.collections.t_presentation$collections44416.cljs$lang$type = true;

presentation.collections.t_presentation$collections44416.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44416";

presentation.collections.t_presentation$collections44416.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44416");
});

presentation.collections.__GT_t_presentation$collections44416 = (function presentation$collections$__GT_t_presentation$collections44416(meta44417){
return (new presentation.collections.t_presentation$collections44416(meta44417));
});

}

return (new presentation.collections.t_presentation$collections44416(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps2","using-maps2",-1670537902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44419 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44419 = (function (meta44420){
this.meta44420 = meta44420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44421,meta44420__$1){
var self__ = this;
var _44421__$1 = this;
return (new presentation.collections.t_presentation$collections44419(meta44420__$1));
});

presentation.collections.t_presentation$collections44419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44421){
var self__ = this;
var _44421__$1 = this;
return self__.meta44420;
});

presentation.collections.t_presentation$collections44419.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44419.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44420","meta44420",607681702,null)], null);
});

presentation.collections.t_presentation$collections44419.cljs$lang$type = true;

presentation.collections.t_presentation$collections44419.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44419";

presentation.collections.t_presentation$collections44419.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44419");
});

presentation.collections.__GT_t_presentation$collections44419 = (function presentation$collections$__GT_t_presentation$collections44419(meta44420){
return (new presentation.collections.t_presentation$collections44419(meta44420));
});

}

return (new presentation.collections.t_presentation$collections44419(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(:name ben)  ; Keywords are the secret sauce",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps2","using-maps2",-1670537902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This seems kind of annoying too, though.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections44422 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections44422 = (function (meta44423){
this.meta44423 = meta44423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections44422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44424,meta44423__$1){
var self__ = this;
var _44424__$1 = this;
return (new presentation.collections.t_presentation$collections44422(meta44423__$1));
});

presentation.collections.t_presentation$collections44422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44424){
var self__ = this;
var _44424__$1 = this;
return self__.meta44423;
});

presentation.collections.t_presentation$collections44422.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections44422.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.collections.t_presentation$collections44422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44423","meta44423",346907240,null)], null);
});

presentation.collections.t_presentation$collections44422.cljs$lang$type = true;

presentation.collections.t_presentation$collections44422.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections44422";

presentation.collections.t_presentation$collections44422.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections44422");
});

presentation.collections.__GT_t_presentation$collections44422 = (function presentation$collections$__GT_t_presentation$collections44422(meta44423){
return (new presentation.collections.t_presentation$collections44422(meta44423));
});

}

return (new presentation.collections.t_presentation$collections44422(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(:city (:address ben))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
