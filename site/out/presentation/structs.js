// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.structs');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('presentation.utils');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.structs","presentation.structs",-1018333200),new cljs.core.Keyword(null,"records","records",1326822832)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"records",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Records are essentially Clojure's structs.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.structs.t_presentation$structs44427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.structs.t_presentation$structs44427 = (function (meta44428){
this.meta44428 = meta44428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.structs.t_presentation$structs44427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44429,meta44428__$1){
var self__ = this;
var _44429__$1 = this;
return (new presentation.structs.t_presentation$structs44427(meta44428__$1));
});

presentation.structs.t_presentation$structs44427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44429){
var self__ = this;
var _44429__$1 = this;
return self__.meta44428;
});

presentation.structs.t_presentation$structs44427.prototype.devcards$core$IDevcardOptions$ = true;

presentation.structs.t_presentation$structs44427.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.structs.t_presentation$structs44427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44428","meta44428",1263235167,null)], null);
});

presentation.structs.t_presentation$structs44427.cljs$lang$type = true;

presentation.structs.t_presentation$structs44427.cljs$lang$ctorStr = "presentation.structs/t_presentation$structs44427";

presentation.structs.t_presentation$structs44427.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.structs/t_presentation$structs44427");
});

presentation.structs.__GT_t_presentation$structs44427 = (function presentation$structs$__GT_t_presentation$structs44427(meta44428){
return (new presentation.structs.t_presentation$structs44427(meta44428));
});

}

return (new presentation.structs.t_presentation$structs44427(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(defrecord Cat [name ear_count])\n\n(def piper (Cat. \"Piper\"  0))\n(def mittens (Cat. \"Mittens\" 2))\n\n(:name piper)\n",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.structs","presentation.structs",-1018333200),new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"protocols",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Protocols are the Clojure version of interfaces, used for polymorphic dispath",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.structs.t_presentation$structs44430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.structs.t_presentation$structs44430 = (function (meta44431){
this.meta44431 = meta44431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.structs.t_presentation$structs44430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44432,meta44431__$1){
var self__ = this;
var _44432__$1 = this;
return (new presentation.structs.t_presentation$structs44430(meta44431__$1));
});

presentation.structs.t_presentation$structs44430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44432){
var self__ = this;
var _44432__$1 = this;
return self__.meta44431;
});

presentation.structs.t_presentation$structs44430.prototype.devcards$core$IDevcardOptions$ = true;

presentation.structs.t_presentation$structs44430.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
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

presentation.structs.t_presentation$structs44430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44431","meta44431",-1549458842,null)], null);
});

presentation.structs.t_presentation$structs44430.cljs$lang$type = true;

presentation.structs.t_presentation$structs44430.cljs$lang$ctorStr = "presentation.structs/t_presentation$structs44430";

presentation.structs.t_presentation$structs44430.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.structs/t_presentation$structs44430");
});

presentation.structs.__GT_t_presentation$structs44430 = (function presentation$structs$__GT_t_presentation$structs44430(meta44431){
return (new presentation.structs.t_presentation$structs44430(meta44431));
});

}

return (new presentation.structs.t_presentation$structs44430(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),"(defprotocol AnimalProtocol\n    (make-noise [this]))\n\n(defrecord Cat [name ear_count]\n  AnimalProtocol\n    (make-noise [this] (str \"meow\")))\n\n(defrecord Dog [name ear_count]\n  AnimalProtocol\n    (make-noise [this] (str \"woof\")))\n\n(def piper (Cat. \"Piper\" 0))\n(def milo (Dog. \"Milo\" 2))\n\n(make-noise piper)",new cljs.core.Keyword(null,"output","output",-1105869043),null], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
