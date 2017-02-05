// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.zreagent_sandbox');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('presentation.utils');
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"presentation.zreagent_sandbox","presentation.zreagent_sandbox",-553025906),new cljs.core.Keyword(null,"example-component","example-component",-161477056)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"example-component",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Here's a reagent component to toy with.\n Make sure the anonymous function at the ends stays as the last statement in the editor.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470 = (function (meta44471){
this.meta44471 = meta44471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44472,meta44471__$1){
var self__ = this;
var _44472__$1 = this;
return (new presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470(meta44471__$1));
});

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44472){
var self__ = this;
var _44472__$1 = this;
return self__.meta44471;
});

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.prototype.devcards$core$IDevcardOptions$ = true;

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__44275__auto__,devcard_opts__44276__auto__){
var self__ = this;
var this__44275__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__44276__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__44294__auto__ = ((function (this__44275__auto____$1){
return (function (data_atom,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.component_block,data_atom], null);
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

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44471","meta44471",-470272715,null)], null);
});

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.cljs$lang$type = true;

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.cljs$lang$ctorStr = "presentation.zreagent-sandbox/t_presentation$zreagent_sandbox44470";

presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"presentation.zreagent-sandbox/t_presentation$zreagent_sandbox44470");
});

presentation.zreagent_sandbox.__GT_t_presentation$zreagent_sandbox44470 = (function presentation$zreagent_sandbox$__GT_t_presentation$zreagent_sandbox44470(meta44471){
return (new presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470(meta44471));
});

}

return (new presentation.zreagent_sandbox.t_presentation$zreagent_sandbox44470(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),"(defn reset-state [state]\n   (reset! state {:count 0}))\n\n(defn update-count-button [state update-func label]\n [:button.btn.btn-primary\n  {:on-click #(swap! state update :count update-func)} label])\n\n(defn reset-state-button [state]\n [:button.btn.btn-info {:on-click #(reset-state state)} \"Reset\"])\n\n(defn display-count [count]\n    [:h1 \"Count is: \" count])\n\n(fn [state]\n  [:div.container-fluid>div.row\n   [:div {:style {:background-color \"#ccc\"\n                  :border-radius \"4px\"\n                  :padding \"8px\"}}\n      [reset-state-button state]\n      [:div\n       [display-count (str (:count @state))]\n       [update-count-button state inc \"Increment\"]\n       [update-count-button state dec \"Decrement\"]]]])",new cljs.core.Keyword(null,"output","output",-1105869043),null,new cljs.core.Keyword(null,"component-state","component-state",-402683974),reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null)),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classname","classname",777390796),"larger-devcard",new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
