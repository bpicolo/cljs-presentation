// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.basics');
goog.require('cljs.core');
goog.require('presentation.utils');
goog.require('reagent.core');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"intro","intro",-886090599)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"intro",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A ClojureScript crash course.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44435 = (function (meta44436){
this.meta44436 = meta44436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44437,meta44436__$1){
var self__ = this;
var _44437__$1 = this;
return (new presentation.basics.t_presentation$basics44435(meta44436__$1));
});

presentation.basics.t_presentation$basics44435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44437){
var self__ = this;
var _44437__$1 = this;
return self__.meta44436;
});

presentation.basics.t_presentation$basics44435.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44435.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44436","meta44436",2046398976,null)], null);
});

presentation.basics.t_presentation$basics44435.cljs$lang$type = true;

presentation.basics.t_presentation$basics44435.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44435";

presentation.basics.t_presentation$basics44435.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44435");
});

presentation.basics.__GT_t_presentation$basics44435 = (function presentation$basics$__GT_t_presentation$basics44435(meta44436){
return (new presentation.basics.t_presentation$basics44435(meta44436));
});

}

return (new presentation.basics.t_presentation$basics44435(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),"(str \"which is interactive\")",new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"rows","rows",850049680),(12)], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"constructor","constructor",-1953928811)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"constructor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Calling a function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44438 = (function (meta44439){
this.meta44439 = meta44439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44440,meta44439__$1){
var self__ = this;
var _44440__$1 = this;
return (new presentation.basics.t_presentation$basics44438(meta44439__$1));
});

presentation.basics.t_presentation$basics44438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44440){
var self__ = this;
var _44440__$1 = this;
return self__.meta44439;
});

presentation.basics.t_presentation$basics44438.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44438.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44439","meta44439",-1187770426,null)], null);
});

presentation.basics.t_presentation$basics44438.cljs$lang$type = true;

presentation.basics.t_presentation$basics44438.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44438";

presentation.basics.t_presentation$basics44438.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44438");
});

presentation.basics.__GT_t_presentation$basics44438 = (function presentation$basics$__GT_t_presentation$basics44438(meta44439){
return (new presentation.basics.t_presentation$basics44438(meta44439));
});

}

return (new presentation.basics.t_presentation$basics44438(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(odd? 1)  ; Question marks are allowed in names! By convention,\n           ; this means it should return a boolean.",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"math","math",-2026912803)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"math",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lisps use prefix notation for mathematical operators. This does take a little getting used to!",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44441 = (function (meta44442){
this.meta44442 = meta44442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44443,meta44442__$1){
var self__ = this;
var _44443__$1 = this;
return (new presentation.basics.t_presentation$basics44441(meta44442__$1));
});

presentation.basics.t_presentation$basics44441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44443){
var self__ = this;
var _44443__$1 = this;
return self__.meta44442;
});

presentation.basics.t_presentation$basics44441.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44441.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44442","meta44442",-129471050,null)], null);
});

presentation.basics.t_presentation$basics44441.cljs$lang$type = true;

presentation.basics.t_presentation$basics44441.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44441";

presentation.basics.t_presentation$basics44441.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44441");
});

presentation.basics.__GT_t_presentation$basics44441 = (function presentation$basics$__GT_t_presentation$basics44441(meta44442){
return (new presentation.basics.t_presentation$basics44441(meta44442));
});

}

return (new presentation.basics.t_presentation$basics44441(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 1 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"math-why?","math-why?",-812485934)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"math-why?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Why ruin a good thing like infix notation?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44444 = (function (meta44445){
this.meta44445 = meta44445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44446,meta44445__$1){
var self__ = this;
var _44446__$1 = this;
return (new presentation.basics.t_presentation$basics44444(meta44445__$1));
});

presentation.basics.t_presentation$basics44444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44446){
var self__ = this;
var _44446__$1 = this;
return self__.meta44445;
});

presentation.basics.t_presentation$basics44444.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44444.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44445","meta44445",1552495723,null)], null);
});

presentation.basics.t_presentation$basics44444.cljs$lang$type = true;

presentation.basics.t_presentation$basics44444.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44444";

presentation.basics.t_presentation$basics44444.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44444");
});

presentation.basics.__GT_t_presentation$basics44444 = (function presentation$basics$__GT_t_presentation$basics44444(meta44445){
return (new presentation.basics.t_presentation$basics44444(meta44445));
});

}

return (new presentation.basics.t_presentation$basics44444(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 1 4 5 6)  ; Oh daaaaaang.",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables","variables",1563680814)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"How about defining variables",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44447 = (function (meta44448){
this.meta44448 = meta44448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44449,meta44448__$1){
var self__ = this;
var _44449__$1 = this;
return (new presentation.basics.t_presentation$basics44447(meta44448__$1));
});

presentation.basics.t_presentation$basics44447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44449){
var self__ = this;
var _44449__$1 = this;
return self__.meta44448;
});

presentation.basics.t_presentation$basics44447.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44447.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44447.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44448","meta44448",27569243,null)], null);
});

presentation.basics.t_presentation$basics44447.cljs$lang$type = true;

presentation.basics.t_presentation$basics44447.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44447";

presentation.basics.t_presentation$basics44447.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44447");
});

presentation.basics.__GT_t_presentation$basics44447 = (function presentation$basics$__GT_t_presentation$basics44447(meta44448){
return (new presentation.basics.t_presentation$basics44447(meta44448));
});

}

return (new presentation.basics.t_presentation$basics44447(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(def globally-scoped 4)\n(* globally-scoped 2)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-lex","variables-lex",1700344136)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-lex",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Lexically-scoped variables?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44450 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44450 = (function (meta44451){
this.meta44451 = meta44451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44452,meta44451__$1){
var self__ = this;
var _44452__$1 = this;
return (new presentation.basics.t_presentation$basics44450(meta44451__$1));
});

presentation.basics.t_presentation$basics44450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44452){
var self__ = this;
var _44452__$1 = this;
return self__.meta44451;
});

presentation.basics.t_presentation$basics44450.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44450.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44451","meta44451",1679840645,null)], null);
});

presentation.basics.t_presentation$basics44450.cljs$lang$type = true;

presentation.basics.t_presentation$basics44450.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44450";

presentation.basics.t_presentation$basics44450.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44450");
});

presentation.basics.__GT_t_presentation$basics44450 = (function presentation$basics$__GT_t_presentation$basics44450(meta44451){
return (new presentation.basics.t_presentation$basics44450(meta44451));
});

}

return (new presentation.basics.t_presentation$basics44450(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(let [lexical 6]\n    (* lexical 3))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-lex2","variables-lex2",-1602767430)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-lex2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Are we sure?",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44453 = (function (meta44454){
this.meta44454 = meta44454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44455,meta44454__$1){
var self__ = this;
var _44455__$1 = this;
return (new presentation.basics.t_presentation$basics44453(meta44454__$1));
});

presentation.basics.t_presentation$basics44453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44455){
var self__ = this;
var _44455__$1 = this;
return self__.meta44454;
});

presentation.basics.t_presentation$basics44453.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44453.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44454","meta44454",-1801432118,null)], null);
});

presentation.basics.t_presentation$basics44453.cljs$lang$type = true;

presentation.basics.t_presentation$basics44453.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44453";

presentation.basics.t_presentation$basics44453.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44453");
});

presentation.basics.__GT_t_presentation$basics44453 = (function presentation$basics$__GT_t_presentation$basics44453(meta44454){
return (new presentation.basics.t_presentation$basics44453(meta44454));
});

}

return (new presentation.basics.t_presentation$basics44453(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(let [lexical 6])\n(* lexical 3)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-function","variables-function",-1613251227)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-function",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Defining a function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44456 = (function (meta44457){
this.meta44457 = meta44457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44458,meta44457__$1){
var self__ = this;
var _44458__$1 = this;
return (new presentation.basics.t_presentation$basics44456(meta44457__$1));
});

presentation.basics.t_presentation$basics44456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44458){
var self__ = this;
var _44458__$1 = this;
return self__.meta44457;
});

presentation.basics.t_presentation$basics44456.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44456.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44457","meta44457",-1147699616,null)], null);
});

presentation.basics.t_presentation$basics44456.cljs$lang$type = true;

presentation.basics.t_presentation$basics44456.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44456";

presentation.basics.t_presentation$basics44456.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44456");
});

presentation.basics.__GT_t_presentation$basics44456 = (function presentation$basics$__GT_t_presentation$basics44456(meta44457){
return (new presentation.basics.t_presentation$basics44456(meta44457));
});

}

return (new presentation.basics.t_presentation$basics44456(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(defn multiply-by-two [number] (* 2 number))\n(multiply-by-two 17)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"variables-function","variables-function",-1613251227)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"variables-function",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Defining an anonymous function",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44459 = (function (meta44460){
this.meta44460 = meta44460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44461,meta44460__$1){
var self__ = this;
var _44461__$1 = this;
return (new presentation.basics.t_presentation$basics44459(meta44460__$1));
});

presentation.basics.t_presentation$basics44459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44461){
var self__ = this;
var _44461__$1 = this;
return self__.meta44460;
});

presentation.basics.t_presentation$basics44459.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44459.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44460","meta44460",-1392685437,null)], null);
});

presentation.basics.t_presentation$basics44459.cljs$lang$type = true;

presentation.basics.t_presentation$basics44459.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44459";

presentation.basics.t_presentation$basics44459.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44459");
});

presentation.basics.__GT_t_presentation$basics44459 = (function presentation$basics$__GT_t_presentation$basics44459(meta44460){
return (new presentation.basics.t_presentation$basics44459(meta44460));
});

}

return (new presentation.basics.t_presentation$basics44459(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"((fn [number] (* 2 number)) 4)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"control-structures","control-structures",376354729)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"control-structures",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Good old if is here for you",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44462 = (function (meta44463){
this.meta44463 = meta44463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44464,meta44463__$1){
var self__ = this;
var _44464__$1 = this;
return (new presentation.basics.t_presentation$basics44462(meta44463__$1));
});

presentation.basics.t_presentation$basics44462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44464){
var self__ = this;
var _44464__$1 = this;
return self__.meta44463;
});

presentation.basics.t_presentation$basics44462.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44462.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44463","meta44463",-64508184,null)], null);
});

presentation.basics.t_presentation$basics44462.cljs$lang$type = true;

presentation.basics.t_presentation$basics44462.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44462";

presentation.basics.t_presentation$basics44462.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44462");
});

presentation.basics.__GT_t_presentation$basics44462 = (function presentation$basics$__GT_t_presentation$basics44462(meta44463){
return (new presentation.basics.t_presentation$basics44462(meta44463));
});

}

return (new presentation.basics.t_presentation$basics44462(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(if (> 0 5)\n     \"Bigger\"\n     \"Smaller\"))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"the-best-operator","the-best-operator",-443489996)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"the-best-operator",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"And don't worry. It is possible to have code run \"in order\"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44465 = (function (meta44466){
this.meta44466 = meta44466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44467,meta44466__$1){
var self__ = this;
var _44467__$1 = this;
return (new presentation.basics.t_presentation$basics44465(meta44466__$1));
});

presentation.basics.t_presentation$basics44465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44467){
var self__ = this;
var _44467__$1 = this;
return self__.meta44466;
});

presentation.basics.t_presentation$basics44465.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44465.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44466","meta44466",1139979236,null)], null);
});

presentation.basics.t_presentation$basics44465.cljs$lang$type = true;

presentation.basics.t_presentation$basics44465.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44465";

presentation.basics.t_presentation$basics44465.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44465");
});

presentation.basics.__GT_t_presentation$basics44465 = (function presentation$basics$__GT_t_presentation$basics44465(meta44466){
return (new presentation.basics.t_presentation$basics44465(meta44466));
});

}

return (new presentation.basics.t_presentation$basics44465(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(-> 2\n    inc\n    inc)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"the-rarely-used-loop","the-rarely-used-loop",-802183931)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"the-rarely-used-loop",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Something different from most languages - Loop constructs",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44468 = (function (meta44469){
this.meta44469 = meta44469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44470,meta44469__$1){
var self__ = this;
var _44470__$1 = this;
return (new presentation.basics.t_presentation$basics44468(meta44469__$1));
});

presentation.basics.t_presentation$basics44468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44470){
var self__ = this;
var _44470__$1 = this;
return self__.meta44469;
});

presentation.basics.t_presentation$basics44468.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44468.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44469","meta44469",-588366480,null)], null);
});

presentation.basics.t_presentation$basics44468.cljs$lang$type = true;

presentation.basics.t_presentation$basics44468.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44468";

presentation.basics.t_presentation$basics44468.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44468");
});

presentation.basics.__GT_t_presentation$basics44468 = (function presentation$basics$__GT_t_presentation$basics44468(meta44469){
return (new presentation.basics.t_presentation$basics44468(meta44469));
});

}

return (new presentation.basics.t_presentation$basics44468(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(loop [n 1]\n  (if (< n 10)\n    (recur (+ n 1))\n    n))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.basics","presentation.basics",-123245419),new cljs.core.Keyword(null,"comprehensions","comprehensions",1977745828)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"comprehensions",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Comprehensions serve as another alternative loop construct.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.basics.t_presentation$basics44471 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.basics.t_presentation$basics44471 = (function (meta44472){
this.meta44472 = meta44472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.basics.t_presentation$basics44471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44473,meta44472__$1){
var self__ = this;
var _44473__$1 = this;
return (new presentation.basics.t_presentation$basics44471(meta44472__$1));
});

presentation.basics.t_presentation$basics44471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44473){
var self__ = this;
var _44473__$1 = this;
return self__.meta44472;
});

presentation.basics.t_presentation$basics44471.prototype.devcards$core$IDevcardOptions$ = true;

presentation.basics.t_presentation$basics44471.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.basics.t_presentation$basics44471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44472","meta44472",-2018941350,null)], null);
});

presentation.basics.t_presentation$basics44471.cljs$lang$type = true;

presentation.basics.t_presentation$basics44471.cljs$lang$ctorStr = "presentation.basics/t_presentation$basics44471";

presentation.basics.t_presentation$basics44471.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.basics/t_presentation$basics44471");
});

presentation.basics.__GT_t_presentation$basics44471 = (function presentation$basics$__GT_t_presentation$basics44471(meta44472){
return (new presentation.basics.t_presentation$basics44471(meta44472));
});

}

return (new presentation.basics.t_presentation$basics44471(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(for [x (range 3 7)]\n  (* x x))",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
