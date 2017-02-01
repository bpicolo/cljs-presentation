// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.collections');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('presentation.utils');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"a-list","a-list",1018815940)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a-list",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lists are the basic elements in any Lisp, ClojureScript no exception. All the source code is just lists, recall.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40243 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40243 = (function (meta40244){
this.meta40244 = meta40244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40245,meta40244__$1){
var self__ = this;
var _40245__$1 = this;
return (new presentation.collections.t_presentation$collections40243(meta40244__$1));
});

presentation.collections.t_presentation$collections40243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40245){
var self__ = this;
var _40245__$1 = this;
return self__.meta40244;
});

presentation.collections.t_presentation$collections40243.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40243.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40244","meta40244",1931096369,null)], null);
});

presentation.collections.t_presentation$collections40243.cljs$lang$type = true;

presentation.collections.t_presentation$collections40243.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40243";

presentation.collections.t_presentation$collections40243.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40243");
});

presentation.collections.__GT_t_presentation$collections40243 = (function presentation$collections$__GT_t_presentation$collections40243(meta40244){
return (new presentation.collections.t_presentation$collections40243(meta40244));
});

}

return (new presentation.collections.t_presentation$collections40243(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"'(1 3 2)  ; The ' is necessary, because otherwise this would try to call a function \"1\" with args 3 and 2",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"a-list-2","a-list-2",-1918209330)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"a-list-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40246 = (function (meta40247){
this.meta40247 = meta40247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40248,meta40247__$1){
var self__ = this;
var _40248__$1 = this;
return (new presentation.collections.t_presentation$collections40246(meta40247__$1));
});

presentation.collections.t_presentation$collections40246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40248){
var self__ = this;
var _40248__$1 = this;
return self__.meta40247;
});

presentation.collections.t_presentation$collections40246.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40246.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40247","meta40247",72515937,null)], null);
});

presentation.collections.t_presentation$collections40246.cljs$lang$type = true;

presentation.collections.t_presentation$collections40246.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40246";

presentation.collections.t_presentation$collections40246.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40246");
});

presentation.collections.__GT_t_presentation$collections40246 = (function presentation$collections$__GT_t_presentation$collections40246(meta40247){
return (new presentation.collections.t_presentation$collections40246(meta40247));
});

}

return (new presentation.collections.t_presentation$collections40246(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(list 1 3 \"better\")  ; For single-quote haters like me",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"constructor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Vectors are lists, but indexable (you'll rarely use lists over vectors)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40249 = (function (meta40250){
this.meta40250 = meta40250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40251,meta40250__$1){
var self__ = this;
var _40251__$1 = this;
return (new presentation.collections.t_presentation$collections40249(meta40250__$1));
});

presentation.collections.t_presentation$collections40249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40251){
var self__ = this;
var _40251__$1 = this;
return self__.meta40250;
});

presentation.collections.t_presentation$collections40249.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40249.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40250","meta40250",2054099143,null)], null);
});

presentation.collections.t_presentation$collections40249.cljs$lang$type = true;

presentation.collections.t_presentation$collections40249.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40249";

presentation.collections.t_presentation$collections40249.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40249");
});

presentation.collections.__GT_t_presentation$collections40249 = (function presentation$collections$__GT_t_presentation$collections40249(meta40250){
return (new presentation.collections.t_presentation$collections40249(meta40250));
});

}

return (new presentation.collections.t_presentation$collections40249(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"[1 2 3]",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"get","get",1683182755)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"get",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Accessing elements in a vector",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40252 = (function (meta40253){
this.meta40253 = meta40253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40254,meta40253__$1){
var self__ = this;
var _40254__$1 = this;
return (new presentation.collections.t_presentation$collections40252(meta40253__$1));
});

presentation.collections.t_presentation$collections40252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40254){
var self__ = this;
var _40254__$1 = this;
return self__.meta40253;
});

presentation.collections.t_presentation$collections40252.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40252.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40253","meta40253",361811818,null)], null);
});

presentation.collections.t_presentation$collections40252.cljs$lang$type = true;

presentation.collections.t_presentation$collections40252.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40252";

presentation.collections.t_presentation$collections40252.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40252");
});

presentation.collections.__GT_t_presentation$collections40252 = (function presentation$collections$__GT_t_presentation$collections40252(meta40253){
return (new presentation.collections.t_presentation$collections40252(meta40253));
});

}

return (new presentation.collections.t_presentation$collections40252(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(get [1 2 3] 1)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"conj","conj",1527141827)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"conj",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Pushing things onto the vector.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40255 = (function (meta40256){
this.meta40256 = meta40256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40257,meta40256__$1){
var self__ = this;
var _40257__$1 = this;
return (new presentation.collections.t_presentation$collections40255(meta40256__$1));
});

presentation.collections.t_presentation$collections40255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40257){
var self__ = this;
var _40257__$1 = this;
return self__.meta40256;
});

presentation.collections.t_presentation$collections40255.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40255.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40256","meta40256",2044171070,null)], null);
});

presentation.collections.t_presentation$collections40255.cljs$lang$type = true;

presentation.collections.t_presentation$collections40255.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40255";

presentation.collections.t_presentation$collections40255.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40255");
});

presentation.collections.__GT_t_presentation$collections40255 = (function presentation$collections$__GT_t_presentation$collections40255(meta40256){
return (new presentation.collections.t_presentation$collections40255(meta40256));
});

}

return (new presentation.collections.t_presentation$collections40255(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(conj [1 2 3] 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"wat","wat",1561347706)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"wat",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40258 = (function (meta40259){
this.meta40259 = meta40259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40260,meta40259__$1){
var self__ = this;
var _40260__$1 = this;
return (new presentation.collections.t_presentation$collections40258(meta40259__$1));
});

presentation.collections.t_presentation$collections40258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40260){
var self__ = this;
var _40260__$1 = this;
return self__.meta40259;
});

presentation.collections.t_presentation$collections40258.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40258.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Ben, what the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"heck"], null)," is 'conj'? Seems like a load of nonsense."], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40258.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40259","meta40259",-1249373713,null)], null);
});

presentation.collections.t_presentation$collections40258.cljs$lang$type = true;

presentation.collections.t_presentation$collections40258.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40258";

presentation.collections.t_presentation$collections40258.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40258");
});

presentation.collections.__GT_t_presentation$collections40258 = (function presentation$collections$__GT_t_presentation$collections40258(meta40259){
return (new presentation.collections.t_presentation$collections40258(meta40259));
});

}

return (new presentation.collections.t_presentation$collections40258(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"cons","cons",-885083073)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cons",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Put something onto the front",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40261 = (function (meta40262){
this.meta40262 = meta40262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40263,meta40262__$1){
var self__ = this;
var _40263__$1 = this;
return (new presentation.collections.t_presentation$collections40261(meta40262__$1));
});

presentation.collections.t_presentation$collections40261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40263){
var self__ = this;
var _40263__$1 = this;
return self__.meta40262;
});

presentation.collections.t_presentation$collections40261.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40261.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40262","meta40262",1625978318,null)], null);
});

presentation.collections.t_presentation$collections40261.cljs$lang$type = true;

presentation.collections.t_presentation$collections40261.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40261";

presentation.collections.t_presentation$collections40261.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40261");
});

presentation.collections.__GT_t_presentation$collections40261 = (function presentation$collections$__GT_t_presentation$collections40261(meta40262){
return (new presentation.collections.t_presentation$collections40261(meta40262));
});

}

return (new presentation.collections.t_presentation$collections40261(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(cons 4 [1 2 3])",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"sorting","sorting",622249690)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sorting",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"We can do all the standard collections things.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40264 = (function (meta40265){
this.meta40265 = meta40265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40266,meta40265__$1){
var self__ = this;
var _40266__$1 = this;
return (new presentation.collections.t_presentation$collections40264(meta40265__$1));
});

presentation.collections.t_presentation$collections40264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40266){
var self__ = this;
var _40266__$1 = this;
return self__.meta40265;
});

presentation.collections.t_presentation$collections40264.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40264.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40265","meta40265",1040196079,null)], null);
});

presentation.collections.t_presentation$collections40264.cljs$lang$type = true;

presentation.collections.t_presentation$collections40264.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40264";

presentation.collections.t_presentation$collections40264.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40264");
});

presentation.collections.__GT_t_presentation$collections40264 = (function presentation$collections$__GT_t_presentation$collections40264(meta40265){
return (new presentation.collections.t_presentation$collections40264(meta40265));
});

}

return (new presentation.collections.t_presentation$collections40264(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(sort [3 2 7])",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"getting-back-the-vector","getting-back-the-vector",296172934)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"getting-back-the-vector",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You may have to translate back to your original data structure",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40267 = (function (meta40268){
this.meta40268 = meta40268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40269,meta40268__$1){
var self__ = this;
var _40269__$1 = this;
return (new presentation.collections.t_presentation$collections40267(meta40268__$1));
});

presentation.collections.t_presentation$collections40267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40269){
var self__ = this;
var _40269__$1 = this;
return self__.meta40268;
});

presentation.collections.t_presentation$collections40267.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40267.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40268","meta40268",682760148,null)], null);
});

presentation.collections.t_presentation$collections40267.cljs$lang$type = true;

presentation.collections.t_presentation$collections40267.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40267";

presentation.collections.t_presentation$collections40267.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40267");
});

presentation.collections.__GT_t_presentation$collections40267 = (function presentation$collections$__GT_t_presentation$collections40267(meta40268){
return (new presentation.collections.t_presentation$collections40267(meta40268));
});

}

return (new presentation.collections.t_presentation$collections40267(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(vec (sort [3 2 7]))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"last-but-not-least","last-but-not-least",-889288148)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"last-but-not-least",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Mapping types (what you'll use most)",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40270 = (function (meta40271){
this.meta40271 = meta40271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40272,meta40271__$1){
var self__ = this;
var _40272__$1 = this;
return (new presentation.collections.t_presentation$collections40270(meta40271__$1));
});

presentation.collections.t_presentation$collections40270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40272){
var self__ = this;
var _40272__$1 = this;
return self__.meta40271;
});

presentation.collections.t_presentation$collections40270.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40270.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40271","meta40271",1327133183,null)], null);
});

presentation.collections.t_presentation$collections40270.cljs$lang$type = true;

presentation.collections.t_presentation$collections40270.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40270";

presentation.collections.t_presentation$collections40270.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40270");
});

presentation.collections.__GT_t_presentation$collections40270 = (function presentation$collections$__GT_t_presentation$collections40270(meta40271){
return (new presentation.collections.t_presentation$collections40270(meta40271));
});

}

return (new presentation.collections.t_presentation$collections40270(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"{1 \"Hi!\", 2 \"There\"}",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Introducing keywords",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40273 = (function (meta40274){
this.meta40274 = meta40274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40275,meta40274__$1){
var self__ = this;
var _40275__$1 = this;
return (new presentation.collections.t_presentation$collections40273(meta40274__$1));
});

presentation.collections.t_presentation$collections40273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40275){
var self__ = this;
var _40275__$1 = this;
return self__.meta40274;
});

presentation.collections.t_presentation$collections40273.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40273.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40274","meta40274",-198910398,null)], null);
});

presentation.collections.t_presentation$collections40273.cljs$lang$type = true;

presentation.collections.t_presentation$collections40273.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40273";

presentation.collections.t_presentation$collections40273.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40273");
});

presentation.collections.__GT_t_presentation$collections40273 = (function presentation$collections$__GT_t_presentation$collections40273(meta40274){
return (new presentation.collections.t_presentation$collections40273(meta40274));
});

}

return (new presentation.collections.t_presentation$collections40273(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),":i-am-a-keyword",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40276 = (function (meta40277){
this.meta40277 = meta40277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40278,meta40277__$1){
var self__ = this;
var _40278__$1 = this;
return (new presentation.collections.t_presentation$collections40276(meta40277__$1));
});

presentation.collections.t_presentation$collections40276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40278){
var self__ = this;
var _40278__$1 = this;
return self__.meta40277;
});

presentation.collections.t_presentation$collections40276.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40276.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40277","meta40277",446553313,null)], null);
});

presentation.collections.t_presentation$collections40276.cljs$lang$type = true;

presentation.collections.t_presentation$collections40276.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40276";

presentation.collections.t_presentation$collections40276.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40276");
});

presentation.collections.__GT_t_presentation$collections40276 = (function presentation$collections$__GT_t_presentation$collections40276(meta40277){
return (new presentation.collections.t_presentation$collections40276(meta40277));
});

}

return (new presentation.collections.t_presentation$collections40276(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"{:id 1 :name \"Ben Picolo\" :credit-card-number \"Nice Try\"}",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps","using-maps",134082454)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40279 = (function (meta40280){
this.meta40280 = meta40280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40281,meta40280__$1){
var self__ = this;
var _40281__$1 = this;
return (new presentation.collections.t_presentation$collections40279(meta40280__$1));
});

presentation.collections.t_presentation$collections40279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40281){
var self__ = this;
var _40281__$1 = this;
return self__.meta40280;
});

presentation.collections.t_presentation$collections40279.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40279.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40280","meta40280",728350829,null)], null);
});

presentation.collections.t_presentation$collections40279.cljs$lang$type = true;

presentation.collections.t_presentation$collections40279.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40279";

presentation.collections.t_presentation$collections40279.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40279");
});

presentation.collections.__GT_t_presentation$collections40279 = (function presentation$collections$__GT_t_presentation$collections40279(meta40280){
return (new presentation.collections.t_presentation$collections40279(meta40280));
});

}

return (new presentation.collections.t_presentation$collections40279(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(get ben :name)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"hmm","hmm",1817971598)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hmm",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40282 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40282 = (function (meta40283){
this.meta40283 = meta40283;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40284,meta40283__$1){
var self__ = this;
var _40284__$1 = this;
return (new presentation.collections.t_presentation$collections40282(meta40283__$1));
});

presentation.collections.t_presentation$collections40282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40284){
var self__ = this;
var _40284__$1 = this;
return self__.meta40283;
});

presentation.collections.t_presentation$collections40282.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40282.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"That seems kind of annoying. Can we do better?"], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40282.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40283","meta40283",900584789,null)], null);
});

presentation.collections.t_presentation$collections40282.cljs$lang$type = true;

presentation.collections.t_presentation$collections40282.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40282";

presentation.collections.t_presentation$collections40282.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40282");
});

presentation.collections.__GT_t_presentation$collections40282 = (function presentation$collections$__GT_t_presentation$collections40282(meta40283){
return (new presentation.collections.t_presentation$collections40282(meta40283));
});

}

return (new presentation.collections.t_presentation$collections40282(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps2","using-maps2",-1670537902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40285 = (function (meta40286){
this.meta40286 = meta40286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40287,meta40286__$1){
var self__ = this;
var _40287__$1 = this;
return (new presentation.collections.t_presentation$collections40285(meta40286__$1));
});

presentation.collections.t_presentation$collections40285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40287){
var self__ = this;
var _40287__$1 = this;
return self__.meta40286;
});

presentation.collections.t_presentation$collections40285.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40285.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40286","meta40286",1512462680,null)], null);
});

presentation.collections.t_presentation$collections40285.cljs$lang$type = true;

presentation.collections.t_presentation$collections40285.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40285";

presentation.collections.t_presentation$collections40285.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40285");
});

presentation.collections.__GT_t_presentation$collections40285 = (function presentation$collections$__GT_t_presentation$collections40285(meta40286){
return (new presentation.collections.t_presentation$collections40285(meta40286));
});

}

return (new presentation.collections.t_presentation$collections40285(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(:name ben)  ; Keywords are the secret sauce",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.collections","presentation.collections",-1356437406),new cljs.core.Keyword(null,"using-maps2","using-maps2",-1670537902)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"using-maps2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This seems kind of annoying too, though.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.collections.t_presentation$collections40288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.collections.t_presentation$collections40288 = (function (meta40289){
this.meta40289 = meta40289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.collections.t_presentation$collections40288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40290,meta40289__$1){
var self__ = this;
var _40290__$1 = this;
return (new presentation.collections.t_presentation$collections40288(meta40289__$1));
});

presentation.collections.t_presentation$collections40288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40290){
var self__ = this;
var _40290__$1 = this;
return self__.meta40289;
});

presentation.collections.t_presentation$collections40288.prototype.devcards$core$IDevcardOptions$ = true;

presentation.collections.t_presentation$collections40288.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
var self__ = this;
var this__40141__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__40142__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__40160__auto__ = ((function (this__40141__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.code_block,data_atom], null);
});})(this__40141__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__40160__auto__)){
return ((function (v__40160__auto__,this__40141__auto____$1){
return (function (data_atom__40161__auto__,owner__40162__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__40160__auto__,data_atom__40161__auto__,owner__40162__auto__], null));
});
;})(v__40160__auto__,this__40141__auto____$1))
} else {
return reagent.core.as_element.call(null,v__40160__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__40142__auto__))));
});

presentation.collections.t_presentation$collections40288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40289","meta40289",-1364640120,null)], null);
});

presentation.collections.t_presentation$collections40288.cljs$lang$type = true;

presentation.collections.t_presentation$collections40288.cljs$lang$ctorStr = "presentation.collections/t_presentation$collections40288";

presentation.collections.t_presentation$collections40288.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.collections/t_presentation$collections40288");
});

presentation.collections.__GT_t_presentation$collections40288 = (function presentation$collections$__GT_t_presentation$collections40288(meta40289){
return (new presentation.collections.t_presentation$collections40288(meta40289));
});

}

return (new presentation.collections.t_presentation$collections40288(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})\n(:city (:address ben))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=collections.js.map