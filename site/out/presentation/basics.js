// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.basics');
goog.require('cljs.core');
goog.require('presentation.utils');
goog.require('reagent.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"intro",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"This part of the presentation is designed to be live and interactive. If presentation history tells us anything, everything will go wrong.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40293 = (function (meta40294){
this.meta40294 = meta40294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40295,meta40294__$1){
var self__ = this;
var _40295__$1 = this;
return (new presentation.basics.t_presentation$basics40293(meta40294__$1));
});

presentation.basics.t_presentation$basics40293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40295){
var self__ = this;
var _40295__$1 = this;
return self__.meta40294;
});

presentation.basics.t_presentation$basics40293.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40293.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40294","meta40294",820257881,null)], null);
});

presentation.basics.t_presentation$basics40293.cljs$lang$type = true;

presentation.basics.t_presentation$basics40293.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40293";

presentation.basics.t_presentation$basics40293.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40293");
});

presentation.basics.__GT_t_presentation$basics40293 = (function presentation$basics$__GT_t_presentation$basics40293(meta40294){
return (new presentation.basics.t_presentation$basics40293(meta40294));
});

}

return (new presentation.basics.t_presentation$basics40293(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),"(str \"Feel \" \"free to ask \" \"what would happen if we do <this thing>\")",new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"rows","rows",850049680),(12)], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"constructor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Calling a function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40296 = (function (meta40297){
this.meta40297 = meta40297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40298,meta40297__$1){
var self__ = this;
var _40298__$1 = this;
return (new presentation.basics.t_presentation$basics40296(meta40297__$1));
});

presentation.basics.t_presentation$basics40296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40298){
var self__ = this;
var _40298__$1 = this;
return self__.meta40297;
});

presentation.basics.t_presentation$basics40296.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40296.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40297","meta40297",-114150960,null)], null);
});

presentation.basics.t_presentation$basics40296.cljs$lang$type = true;

presentation.basics.t_presentation$basics40296.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40296";

presentation.basics.t_presentation$basics40296.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40296");
});

presentation.basics.__GT_t_presentation$basics40296 = (function presentation$basics$__GT_t_presentation$basics40296(meta40297){
return (new presentation.basics.t_presentation$basics40296(meta40297));
});

}

return (new presentation.basics.t_presentation$basics40296(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(odd? 1)  ; Question marks are allowed in names! By convention, this means it should return a boolean.",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"math","math",-2026912803)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"math",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lisps use prefix notation for mathematical operators. This does take a little getting used to!",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40299 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40299 = (function (meta40300){
this.meta40300 = meta40300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40301,meta40300__$1){
var self__ = this;
var _40301__$1 = this;
return (new presentation.basics.t_presentation$basics40299(meta40300__$1));
});

presentation.basics.t_presentation$basics40299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40301){
var self__ = this;
var _40301__$1 = this;
return self__.meta40300;
});

presentation.basics.t_presentation$basics40299.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40299.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40300","meta40300",690764964,null)], null);
});

presentation.basics.t_presentation$basics40299.cljs$lang$type = true;

presentation.basics.t_presentation$basics40299.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40299";

presentation.basics.t_presentation$basics40299.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40299");
});

presentation.basics.__GT_t_presentation$basics40299 = (function presentation$basics$__GT_t_presentation$basics40299(meta40300){
return (new presentation.basics.t_presentation$basics40299(meta40300));
});

}

return (new presentation.basics.t_presentation$basics40299(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 1 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"math-why?","math-why?",-812485934)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"math-why?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Why ruin a good thing like infix notation?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40302 = (function (meta40303){
this.meta40303 = meta40303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40304,meta40303__$1){
var self__ = this;
var _40304__$1 = this;
return (new presentation.basics.t_presentation$basics40302(meta40303__$1));
});

presentation.basics.t_presentation$basics40302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40304){
var self__ = this;
var _40304__$1 = this;
return self__.meta40303;
});

presentation.basics.t_presentation$basics40302.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40302.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40303","meta40303",-710692019,null)], null);
});

presentation.basics.t_presentation$basics40302.cljs$lang$type = true;

presentation.basics.t_presentation$basics40302.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40302";

presentation.basics.t_presentation$basics40302.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40302");
});

presentation.basics.__GT_t_presentation$basics40302 = (function presentation$basics$__GT_t_presentation$basics40302(meta40303){
return (new presentation.basics.t_presentation$basics40302(meta40303));
});

}

return (new presentation.basics.t_presentation$basics40302(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 1 4 5 6)  ; Oh daaaaaang",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables","variables",1563680814)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"How about defining variables",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40305 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40305 = (function (meta40306){
this.meta40306 = meta40306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40307,meta40306__$1){
var self__ = this;
var _40307__$1 = this;
return (new presentation.basics.t_presentation$basics40305(meta40306__$1));
});

presentation.basics.t_presentation$basics40305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40307){
var self__ = this;
var _40307__$1 = this;
return self__.meta40306;
});

presentation.basics.t_presentation$basics40305.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40305.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40306","meta40306",-780399324,null)], null);
});

presentation.basics.t_presentation$basics40305.cljs$lang$type = true;

presentation.basics.t_presentation$basics40305.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40305";

presentation.basics.t_presentation$basics40305.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40305");
});

presentation.basics.__GT_t_presentation$basics40305 = (function presentation$basics$__GT_t_presentation$basics40305(meta40306){
return (new presentation.basics.t_presentation$basics40305(meta40306));
});

}

return (new presentation.basics.t_presentation$basics40305(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def globally-scoped 4)\n(* globally-scoped 2)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-lex","variables-lex",1700344136)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-lex",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lexically-scoped variables?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40308 = (function (meta40309){
this.meta40309 = meta40309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40310,meta40309__$1){
var self__ = this;
var _40310__$1 = this;
return (new presentation.basics.t_presentation$basics40308(meta40309__$1));
});

presentation.basics.t_presentation$basics40308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40310){
var self__ = this;
var _40310__$1 = this;
return self__.meta40309;
});

presentation.basics.t_presentation$basics40308.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40308.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40309","meta40309",-478871678,null)], null);
});

presentation.basics.t_presentation$basics40308.cljs$lang$type = true;

presentation.basics.t_presentation$basics40308.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40308";

presentation.basics.t_presentation$basics40308.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40308");
});

presentation.basics.__GT_t_presentation$basics40308 = (function presentation$basics$__GT_t_presentation$basics40308(meta40309){
return (new presentation.basics.t_presentation$basics40308(meta40309));
});

}

return (new presentation.basics.t_presentation$basics40308(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(let [lexical 6]\n    (* lexical 3))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-lex2","variables-lex2",-1602767430)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-lex2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Are we sure?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40311 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40311 = (function (meta40312){
this.meta40312 = meta40312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40313,meta40312__$1){
var self__ = this;
var _40313__$1 = this;
return (new presentation.basics.t_presentation$basics40311(meta40312__$1));
});

presentation.basics.t_presentation$basics40311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40313){
var self__ = this;
var _40313__$1 = this;
return self__.meta40312;
});

presentation.basics.t_presentation$basics40311.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40311.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40312","meta40312",-835796533,null)], null);
});

presentation.basics.t_presentation$basics40311.cljs$lang$type = true;

presentation.basics.t_presentation$basics40311.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40311";

presentation.basics.t_presentation$basics40311.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40311");
});

presentation.basics.__GT_t_presentation$basics40311 = (function presentation$basics$__GT_t_presentation$basics40311(meta40312){
return (new presentation.basics.t_presentation$basics40311(meta40312));
});

}

return (new presentation.basics.t_presentation$basics40311(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(let [lexical 6])\n(* lexical 3)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-function","variables-function",-1613251227)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-function",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Defining a function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40314 = (function (meta40315){
this.meta40315 = meta40315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40316,meta40315__$1){
var self__ = this;
var _40316__$1 = this;
return (new presentation.basics.t_presentation$basics40314(meta40315__$1));
});

presentation.basics.t_presentation$basics40314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40316){
var self__ = this;
var _40316__$1 = this;
return self__.meta40315;
});

presentation.basics.t_presentation$basics40314.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40314.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40315","meta40315",-1842305108,null)], null);
});

presentation.basics.t_presentation$basics40314.cljs$lang$type = true;

presentation.basics.t_presentation$basics40314.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40314";

presentation.basics.t_presentation$basics40314.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40314");
});

presentation.basics.__GT_t_presentation$basics40314 = (function presentation$basics$__GT_t_presentation$basics40314(meta40315){
return (new presentation.basics.t_presentation$basics40314(meta40315));
});

}

return (new presentation.basics.t_presentation$basics40314(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(defn multiply-by-two [number] (* 2 number))\n(multiply-by-two 17)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-function","variables-function",-1613251227)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-function",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Defining an anonymous function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40317 = (function (meta40318){
this.meta40318 = meta40318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40319,meta40318__$1){
var self__ = this;
var _40319__$1 = this;
return (new presentation.basics.t_presentation$basics40317(meta40318__$1));
});

presentation.basics.t_presentation$basics40317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40319){
var self__ = this;
var _40319__$1 = this;
return self__.meta40318;
});

presentation.basics.t_presentation$basics40317.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40317.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40318","meta40318",824249433,null)], null);
});

presentation.basics.t_presentation$basics40317.cljs$lang$type = true;

presentation.basics.t_presentation$basics40317.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40317";

presentation.basics.t_presentation$basics40317.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40317");
});

presentation.basics.__GT_t_presentation$basics40317 = (function presentation$basics$__GT_t_presentation$basics40317(meta40318){
return (new presentation.basics.t_presentation$basics40317(meta40318));
});

}

return (new presentation.basics.t_presentation$basics40317(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"((fn [number] (* 2 number)) 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"control-structures","control-structures",376354729)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"control-structures",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Good old if is here for you",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40320 = (function (meta40321){
this.meta40321 = meta40321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40322,meta40321__$1){
var self__ = this;
var _40322__$1 = this;
return (new presentation.basics.t_presentation$basics40320(meta40321__$1));
});

presentation.basics.t_presentation$basics40320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40322){
var self__ = this;
var _40322__$1 = this;
return self__.meta40321;
});

presentation.basics.t_presentation$basics40320.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40320.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40321","meta40321",-1031323370,null)], null);
});

presentation.basics.t_presentation$basics40320.cljs$lang$type = true;

presentation.basics.t_presentation$basics40320.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40320";

presentation.basics.t_presentation$basics40320.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40320");
});

presentation.basics.__GT_t_presentation$basics40320 = (function presentation$basics$__GT_t_presentation$basics40320(meta40321){
return (new presentation.basics.t_presentation$basics40320(meta40321));
});

}

return (new presentation.basics.t_presentation$basics40320(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(if (> 0 5)\n     \"Bigger\"\n     \"Smaller\"))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"the-best-operator","the-best-operator",-443489996)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"the-best-operator",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"And don't worry. It is possible to have code run \"in order\"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics40323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics40323 = (function (meta40324){
this.meta40324 = meta40324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics40323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40325,meta40324__$1){
var self__ = this;
var _40325__$1 = this;
return (new presentation.basics.t_presentation$basics40323(meta40324__$1));
});

presentation.basics.t_presentation$basics40323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40325){
var self__ = this;
var _40325__$1 = this;
return self__.meta40324;
});

presentation.basics.t_presentation$basics40323.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics40323.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__40141__auto__,devcard_opts__40142__auto__){
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

presentation.basics.t_presentation$basics40323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40324","meta40324",102579581,null)], null);
});

presentation.basics.t_presentation$basics40323.cljs$lang$type = true;

presentation.basics.t_presentation$basics40323.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics40323";

presentation.basics.t_presentation$basics40323.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics40323");
});

presentation.basics.__GT_t_presentation$basics40323 = (function presentation$basics$__GT_t_presentation$basics40323(meta40324){
return (new presentation.basics.t_presentation$basics40323(meta40324));
});

}

return (new presentation.basics.t_presentation$basics40323(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(-> 2\n    inc\n    inc)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=basics.js.map