// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__25051__auto__ = (function (){var and__25039__auto__ = typeof Symbol !== 'undefined';
if(and__25039__auto__){
var and__25039__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__25039__auto____$1){
var and__25039__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__25039__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__25039__auto____$2;
}
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})();
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__43080_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__43080_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args43081 = [];
var len__26126__auto___43084 = arguments.length;
var i__26127__auto___43085 = (0);
while(true){
if((i__26127__auto___43085 < len__26126__auto___43084)){
args43081.push((arguments[i__26127__auto___43085]));

var G__43086 = (i__26127__auto___43085 + (1));
i__26127__auto___43085 = G__43086;
continue;
} else {
}
break;
}

var G__43083 = args43081.length;
switch (G__43083) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43081.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__25039__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__25039__auto__){
var map__43094 = c;
var map__43094__$1 = ((((!((map__43094 == null)))?((((map__43094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43094):map__43094);
var path = cljs.core.get.call(null,map__43094__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__43094__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__25039__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__42288__auto___43100 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__25051__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__42288__auto___43100);
}

var seq__43096_43101 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43097_43102 = null;
var count__43098_43103 = (0);
var i__43099_43104 = (0);
while(true){
if((i__43099_43104 < count__43098_43103)){
var property__42289__auto___43105 = cljs.core._nth.call(null,chunk__43097_43102,i__43099_43104);
if(cljs.core.truth_((base__42288__auto___43100[property__42289__auto___43105]))){
(devcards.core.CodeHighlight.prototype[property__42289__auto___43105] = (base__42288__auto___43100[property__42289__auto___43105]));
} else {
}

var G__43106 = seq__43096_43101;
var G__43107 = chunk__43097_43102;
var G__43108 = count__43098_43103;
var G__43109 = (i__43099_43104 + (1));
seq__43096_43101 = G__43106;
chunk__43097_43102 = G__43107;
count__43098_43103 = G__43108;
i__43099_43104 = G__43109;
continue;
} else {
var temp__4657__auto___43110 = cljs.core.seq.call(null,seq__43096_43101);
if(temp__4657__auto___43110){
var seq__43096_43111__$1 = temp__4657__auto___43110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43096_43111__$1)){
var c__25862__auto___43112 = cljs.core.chunk_first.call(null,seq__43096_43111__$1);
var G__43113 = cljs.core.chunk_rest.call(null,seq__43096_43111__$1);
var G__43114 = c__25862__auto___43112;
var G__43115 = cljs.core.count.call(null,c__25862__auto___43112);
var G__43116 = (0);
seq__43096_43101 = G__43113;
chunk__43097_43102 = G__43114;
count__43098_43103 = G__43115;
i__43099_43104 = G__43116;
continue;
} else {
var property__42289__auto___43117 = cljs.core.first.call(null,seq__43096_43111__$1);
if(cljs.core.truth_((base__42288__auto___43100[property__42289__auto___43117]))){
(devcards.core.CodeHighlight.prototype[property__42289__auto___43117] = (base__42288__auto___43100[property__42289__auto___43117]));
} else {
}

var G__43118 = cljs.core.next.call(null,seq__43096_43111__$1);
var G__43119 = null;
var G__43120 = (0);
var G__43121 = (0);
seq__43096_43101 = G__43118;
chunk__43097_43102 = G__43119;
count__43098_43103 = G__43120;
i__43099_43104 = G__43121;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__25976__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25980__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25980__auto__,method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__43122){
var map__43123 = p__43122;
var map__43123__$1 = ((((!((map__43123 == null)))?((((map__43123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43123):map__43123);
var content = cljs.core.get.call(null,map__43123__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__43125){
var map__43126 = p__43125;
var map__43126__$1 = ((((!((map__43126 == null)))?((((map__43126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43126):map__43126);
var block = map__43126__$1;
var content = cljs.core.get.call(null,map__43126__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__26133__auto__ = [];
var len__26126__auto___43129 = arguments.length;
var i__26127__auto___43130 = (0);
while(true){
if((i__26127__auto___43130 < len__26126__auto___43129)){
args__26133__auto__.push((arguments[i__26127__auto___43130]));

var G__43131 = (i__26127__auto___43130 + (1));
i__26127__auto___43130 = G__43131;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq43128){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43128));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__43133 = devcards.system.devcards_rendered_card_class;
var G__43133__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__43133),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__43133);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__43133__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__43133__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args43134 = [];
var len__26126__auto___43142 = arguments.length;
var i__26127__auto___43143 = (0);
while(true){
if((i__26127__auto___43143 < len__26126__auto___43142)){
args43134.push((arguments[i__26127__auto___43143]));

var G__43144 = (i__26127__auto___43143 + (1));
i__26127__auto___43143 = G__43144;
continue;
} else {
}
break;
}

var G__43136 = args43134.length;
switch (G__43136) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43134.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__43137 = card;
var map__43137__$1 = ((((!((map__43137 == null)))?((((map__43137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43137):map__43137);
var path = cljs.core.get.call(null,map__43137__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__43137__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__43137,map__43137__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__43137,map__43137__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs43139 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43139))?sablono.interpreter.attributes.call(null,attrs43139):null),((cljs.core.map_QMARK_.call(null,attrs43139))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43139)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__25714__auto__ = (((this$ == null))?null:this$);
var m__25715__auto__ = (devcards.core._devcard_options[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,this$,devcard_opts);
} else {
var m__25715__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__25714__auto__ = (((this$ == null))?null:this$);
var m__25715__auto__ = (devcards.core._devcard[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,this$,devcard_opts);
} else {
var m__25715__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__42288__auto___43151 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs43146 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43146))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs43146)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs43146))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43146)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__42288__auto___43151);
}

var seq__43147_43152 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43148_43153 = null;
var count__43149_43154 = (0);
var i__43150_43155 = (0);
while(true){
if((i__43150_43155 < count__43149_43154)){
var property__42289__auto___43156 = cljs.core._nth.call(null,chunk__43148_43153,i__43150_43155);
if(cljs.core.truth_((base__42288__auto___43151[property__42289__auto___43156]))){
(devcards.core.DontUpdate.prototype[property__42289__auto___43156] = (base__42288__auto___43151[property__42289__auto___43156]));
} else {
}

var G__43157 = seq__43147_43152;
var G__43158 = chunk__43148_43153;
var G__43159 = count__43149_43154;
var G__43160 = (i__43150_43155 + (1));
seq__43147_43152 = G__43157;
chunk__43148_43153 = G__43158;
count__43149_43154 = G__43159;
i__43150_43155 = G__43160;
continue;
} else {
var temp__4657__auto___43161 = cljs.core.seq.call(null,seq__43147_43152);
if(temp__4657__auto___43161){
var seq__43147_43162__$1 = temp__4657__auto___43161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43147_43162__$1)){
var c__25862__auto___43163 = cljs.core.chunk_first.call(null,seq__43147_43162__$1);
var G__43164 = cljs.core.chunk_rest.call(null,seq__43147_43162__$1);
var G__43165 = c__25862__auto___43163;
var G__43166 = cljs.core.count.call(null,c__25862__auto___43163);
var G__43167 = (0);
seq__43147_43152 = G__43164;
chunk__43148_43153 = G__43165;
count__43149_43154 = G__43166;
i__43150_43155 = G__43167;
continue;
} else {
var property__42289__auto___43168 = cljs.core.first.call(null,seq__43147_43162__$1);
if(cljs.core.truth_((base__42288__auto___43151[property__42289__auto___43168]))){
(devcards.core.DontUpdate.prototype[property__42289__auto___43168] = (base__42288__auto___43151[property__42289__auto___43168]));
} else {
}

var G__43169 = cljs.core.next.call(null,seq__43147_43162__$1);
var G__43170 = null;
var G__43171 = (0);
var G__43172 = (0);
seq__43147_43152 = G__43169;
chunk__43148_43153 = G__43170;
count__43149_43154 = G__43171;
i__43150_43155 = G__43172;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__25051__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__25885__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$3);
})(),x__25885__auto____$2);
})(),x__25885__auto____$1);
})(),x__25885__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__42288__auto___43179 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__25051__auto__ = (function (){var and__25039__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__25039__auto__)){
return this$.state;
} else {
return and__25039__auto__;
}
})();
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__25039__auto__ = data_atom;
if(cljs.core.truth_(and__25039__auto__)){
return id;
} else {
return and__25039__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__42288__auto___43179);
}

var seq__43175_43180 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43176_43181 = null;
var count__43177_43182 = (0);
var i__43178_43183 = (0);
while(true){
if((i__43178_43183 < count__43177_43182)){
var property__42289__auto___43184 = cljs.core._nth.call(null,chunk__43176_43181,i__43178_43183);
if(cljs.core.truth_((base__42288__auto___43179[property__42289__auto___43184]))){
(devcards.core.DevcardBase.prototype[property__42289__auto___43184] = (base__42288__auto___43179[property__42289__auto___43184]));
} else {
}

var G__43185 = seq__43175_43180;
var G__43186 = chunk__43176_43181;
var G__43187 = count__43177_43182;
var G__43188 = (i__43178_43183 + (1));
seq__43175_43180 = G__43185;
chunk__43176_43181 = G__43186;
count__43177_43182 = G__43187;
i__43178_43183 = G__43188;
continue;
} else {
var temp__4657__auto___43189 = cljs.core.seq.call(null,seq__43175_43180);
if(temp__4657__auto___43189){
var seq__43175_43190__$1 = temp__4657__auto___43189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43175_43190__$1)){
var c__25862__auto___43191 = cljs.core.chunk_first.call(null,seq__43175_43190__$1);
var G__43192 = cljs.core.chunk_rest.call(null,seq__43175_43190__$1);
var G__43193 = c__25862__auto___43191;
var G__43194 = cljs.core.count.call(null,c__25862__auto___43191);
var G__43195 = (0);
seq__43175_43180 = G__43192;
chunk__43176_43181 = G__43193;
count__43177_43182 = G__43194;
i__43178_43183 = G__43195;
continue;
} else {
var property__42289__auto___43196 = cljs.core.first.call(null,seq__43175_43190__$1);
if(cljs.core.truth_((base__42288__auto___43179[property__42289__auto___43196]))){
(devcards.core.DevcardBase.prototype[property__42289__auto___43196] = (base__42288__auto___43179[property__42289__auto___43196]));
} else {
}

var G__43197 = cljs.core.next.call(null,seq__43175_43190__$1);
var G__43198 = null;
var G__43199 = (0);
var G__43200 = (0);
seq__43175_43180 = G__43197;
chunk__43176_43181 = G__43198;
count__43177_43182 = G__43199;
i__43178_43183 = G__43200;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__42288__auto___43205 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__25039__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__25039__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__42288__auto___43205);
}

var seq__43201_43206 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43202_43207 = null;
var count__43203_43208 = (0);
var i__43204_43209 = (0);
while(true){
if((i__43204_43209 < count__43203_43208)){
var property__42289__auto___43210 = cljs.core._nth.call(null,chunk__43202_43207,i__43204_43209);
if(cljs.core.truth_((base__42288__auto___43205[property__42289__auto___43210]))){
(devcards.core.DomComponent.prototype[property__42289__auto___43210] = (base__42288__auto___43205[property__42289__auto___43210]));
} else {
}

var G__43211 = seq__43201_43206;
var G__43212 = chunk__43202_43207;
var G__43213 = count__43203_43208;
var G__43214 = (i__43204_43209 + (1));
seq__43201_43206 = G__43211;
chunk__43202_43207 = G__43212;
count__43203_43208 = G__43213;
i__43204_43209 = G__43214;
continue;
} else {
var temp__4657__auto___43215 = cljs.core.seq.call(null,seq__43201_43206);
if(temp__4657__auto___43215){
var seq__43201_43216__$1 = temp__4657__auto___43215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43201_43216__$1)){
var c__25862__auto___43217 = cljs.core.chunk_first.call(null,seq__43201_43216__$1);
var G__43218 = cljs.core.chunk_rest.call(null,seq__43201_43216__$1);
var G__43219 = c__25862__auto___43217;
var G__43220 = cljs.core.count.call(null,c__25862__auto___43217);
var G__43221 = (0);
seq__43201_43206 = G__43218;
chunk__43202_43207 = G__43219;
count__43203_43208 = G__43220;
i__43204_43209 = G__43221;
continue;
} else {
var property__42289__auto___43222 = cljs.core.first.call(null,seq__43201_43216__$1);
if(cljs.core.truth_((base__42288__auto___43205[property__42289__auto___43222]))){
(devcards.core.DomComponent.prototype[property__42289__auto___43222] = (base__42288__auto___43205[property__42289__auto___43222]));
} else {
}

var G__43223 = cljs.core.next.call(null,seq__43201_43216__$1);
var G__43224 = null;
var G__43225 = (0);
var G__43226 = (0);
seq__43201_43206 = G__43223;
chunk__43202_43207 = G__43224;
count__43203_43208 = G__43225;
i__43204_43209 = G__43226;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__25051__auto__ = x === true;
if(or__25051__auto__){
return or__25051__auto__;
} else {
var or__25051__auto____$1 = x === false;
if(or__25051__auto____$1){
return or__25051__auto____$1;
} else {
var or__25051__auto____$2 = (x == null);
if(or__25051__auto____$2){
return or__25051__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__25051__auto__ = typeof x === 'string';
if(or__25051__auto__){
return or__25051__auto__;
} else {
var or__25051__auto____$1 = (x == null);
if(or__25051__auto____$1){
return or__25051__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__25051__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__43227_SHARP_){
return !(p1__43227_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__43236 = opts;
var map__43236__$1 = ((((!((map__43236 == null)))?((((map__43236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43236):map__43236);
var name = cljs.core.get.call(null,map__43236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__43236__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__43236__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__43236__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__25051__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__25051__auto__){
return or__25051__auto__;
} else {
var or__25051__auto____$1 = (options == null);
if(or__25051__auto____$1){
return or__25051__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__25051__auto__ = (initial_data == null);
if(or__25051__auto__){
return or__25051__auto__;
} else {
var or__25051__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__25051__auto____$1){
return or__25051__auto____$1;
} else {
var or__25051__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__25051__auto____$2){
return or__25051__auto____$2;
} else {
var or__25051__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__25051__auto____$3){
return or__25051__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__43236,map__43236__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__43228_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__43228_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__43236,map__43236__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs43244 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43244))?sablono.interpreter.attributes.call(null,attrs43244):null),((cljs.core.map_QMARK_.call(null,attrs43244))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43244)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs43248 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43248))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs43248)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs43248))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43248)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs43249 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43249))?sablono.interpreter.attributes.call(null,attrs43249):null),((cljs.core.map_QMARK_.call(null,attrs43249))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43249)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs43250 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43250))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs43250)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs43250))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43250)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__43251_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__43251_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25673__auto__,k__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
return cljs.core._lookup.call(null,this__25673__auto____$1,k__25674__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25675__auto__,k43253,else__25676__auto__){
var self__ = this;
var this__25675__auto____$1 = this;
var G__43255 = (((k43253 instanceof cljs.core.Keyword))?k43253.fqn:null);
switch (G__43255) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43253,else__25676__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25687__auto__,writer__25688__auto__,opts__25689__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
var pr_pair__25690__auto__ = ((function (this__25687__auto____$1){
return (function (keyval__25691__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25688__auto__,cljs.core.pr_writer,""," ","",opts__25689__auto__,keyval__25691__auto__);
});})(this__25687__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25688__auto__,pr_pair__25690__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__25689__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43252){
var self__ = this;
var G__43252__$1 = this;
return (new cljs.core.RecordIter((0),G__43252__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25671__auto__){
var self__ = this;
var this__25671__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25667__auto__){
var self__ = this;
var this__25667__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25677__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25668__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
var h__25486__auto__ = self__.__hash;
if(!((h__25486__auto__ == null))){
return h__25486__auto__;
} else {
var h__25486__auto____$1 = cljs.core.hash_imap.call(null,this__25668__auto____$1);
self__.__hash = h__25486__auto____$1;

return h__25486__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25669__auto__,other__25670__auto__){
var self__ = this;
var this__25669__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25039__auto__ = other__25670__auto__;
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = (this__25669__auto____$1.constructor === other__25670__auto__.constructor);
if(and__25039__auto____$1){
return cljs.core.equiv_map.call(null,this__25669__auto____$1,other__25670__auto__);
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25682__auto__,k__25683__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25683__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25682__auto____$1),self__.__meta),k__25683__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25683__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25680__auto__,k__25681__auto__,G__43252){
var self__ = this;
var this__25680__auto____$1 = this;
var pred__43256 = cljs.core.keyword_identical_QMARK_;
var expr__43257 = k__25681__auto__;
if(cljs.core.truth_(pred__43256.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43257))){
return (new devcards.core.IdentiyOptions(G__43252,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25681__auto__,G__43252),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25672__auto__,G__43252){
var self__ = this;
var this__25672__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__43252,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25678__auto__,entry__25679__auto__){
var self__ = this;
var this__25678__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25679__auto__)){
return cljs.core._assoc.call(null,this__25678__auto____$1,cljs.core._nth.call(null,entry__25679__auto__,(0)),cljs.core._nth.call(null,entry__25679__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25678__auto____$1,entry__25679__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__25707__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__43254){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43254),null,cljs.core.dissoc.call(null,G__43254,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__43260){
var map__43263 = p__43260;
var map__43263__$1 = ((((!((map__43263 == null)))?((((map__43263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43263):map__43263);
var devcard_opts = map__43263__$1;
var options = cljs.core.get.call(null,map__43263__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__43263,map__43263__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__43263,map__43263__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25673__auto__,k__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
return cljs.core._lookup.call(null,this__25673__auto____$1,k__25674__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25675__auto__,k43266,else__25676__auto__){
var self__ = this;
var this__25675__auto____$1 = this;
var G__43268 = (((k43266 instanceof cljs.core.Keyword))?k43266.fqn:null);
switch (G__43268) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43266,else__25676__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25687__auto__,writer__25688__auto__,opts__25689__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
var pr_pair__25690__auto__ = ((function (this__25687__auto____$1){
return (function (keyval__25691__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25688__auto__,cljs.core.pr_writer,""," ","",opts__25689__auto__,keyval__25691__auto__);
});})(this__25687__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25688__auto__,pr_pair__25690__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__25689__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43265){
var self__ = this;
var G__43265__$1 = this;
return (new cljs.core.RecordIter((0),G__43265__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25671__auto__){
var self__ = this;
var this__25671__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25667__auto__){
var self__ = this;
var this__25667__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25677__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25668__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
var h__25486__auto__ = self__.__hash;
if(!((h__25486__auto__ == null))){
return h__25486__auto__;
} else {
var h__25486__auto____$1 = cljs.core.hash_imap.call(null,this__25668__auto____$1);
self__.__hash = h__25486__auto____$1;

return h__25486__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25669__auto__,other__25670__auto__){
var self__ = this;
var this__25669__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25039__auto__ = other__25670__auto__;
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = (this__25669__auto____$1.constructor === other__25670__auto__.constructor);
if(and__25039__auto____$1){
return cljs.core.equiv_map.call(null,this__25669__auto____$1,other__25670__auto__);
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25682__auto__,k__25683__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25683__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25682__auto____$1),self__.__meta),k__25683__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25683__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25680__auto__,k__25681__auto__,G__43265){
var self__ = this;
var this__25680__auto____$1 = this;
var pred__43269 = cljs.core.keyword_identical_QMARK_;
var expr__43270 = k__25681__auto__;
if(cljs.core.truth_(pred__43269.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43270))){
return (new devcards.core.AtomLikeOptions(G__43265,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25681__auto__,G__43265),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25672__auto__,G__43265){
var self__ = this;
var this__25672__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__43265,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25678__auto__,entry__25679__auto__){
var self__ = this;
var this__25678__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25679__auto__)){
return cljs.core._assoc.call(null,this__25678__auto____$1,cljs.core._nth.call(null,entry__25679__auto__,(0)),cljs.core._nth.call(null,entry__25679__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25678__auto____$1,entry__25679__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__25707__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__43267){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43267),null,cljs.core.dissoc.call(null,G__43267,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__25673__auto__,k__25674__auto__){
var self__ = this;
var this__25673__auto____$1 = this;
return cljs.core._lookup.call(null,this__25673__auto____$1,k__25674__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__25675__auto__,k43276,else__25676__auto__){
var self__ = this;
var this__25675__auto____$1 = this;
var G__43278 = (((k43276 instanceof cljs.core.Keyword))?k43276.fqn:null);
switch (G__43278) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43276,else__25676__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__25687__auto__,writer__25688__auto__,opts__25689__auto__){
var self__ = this;
var this__25687__auto____$1 = this;
var pr_pair__25690__auto__ = ((function (this__25687__auto____$1){
return (function (keyval__25691__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__25688__auto__,cljs.core.pr_writer,""," ","",opts__25689__auto__,keyval__25691__auto__);
});})(this__25687__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__25688__auto__,pr_pair__25690__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__25689__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43275){
var self__ = this;
var G__43275__$1 = this;
return (new cljs.core.RecordIter((0),G__43275__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__25671__auto__){
var self__ = this;
var this__25671__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__25667__auto__){
var self__ = this;
var this__25667__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__25677__auto__){
var self__ = this;
var this__25677__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__25668__auto__){
var self__ = this;
var this__25668__auto____$1 = this;
var h__25486__auto__ = self__.__hash;
if(!((h__25486__auto__ == null))){
return h__25486__auto__;
} else {
var h__25486__auto____$1 = cljs.core.hash_imap.call(null,this__25668__auto____$1);
self__.__hash = h__25486__auto____$1;

return h__25486__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__25669__auto__,other__25670__auto__){
var self__ = this;
var this__25669__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25039__auto__ = other__25670__auto__;
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = (this__25669__auto____$1.constructor === other__25670__auto__.constructor);
if(and__25039__auto____$1){
return cljs.core.equiv_map.call(null,this__25669__auto____$1,other__25670__auto__);
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__25682__auto__,k__25683__auto__){
var self__ = this;
var this__25682__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__25683__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__25682__auto____$1),self__.__meta),k__25683__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__25683__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__25680__auto__,k__25681__auto__,G__43275){
var self__ = this;
var this__25680__auto____$1 = this;
var pred__43279 = cljs.core.keyword_identical_QMARK_;
var expr__43280 = k__25681__auto__;
if(cljs.core.truth_(pred__43279.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__43280))){
return (new devcards.core.EdnLikeOptions(G__43275,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__25681__auto__,G__43275),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__25685__auto__){
var self__ = this;
var this__25685__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__25672__auto__,G__43275){
var self__ = this;
var this__25672__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__43275,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__25678__auto__,entry__25679__auto__){
var self__ = this;
var this__25678__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__25679__auto__)){
return cljs.core._assoc.call(null,this__25678__auto____$1,cljs.core._nth.call(null,entry__25679__auto__,(0)),cljs.core._nth.call(null,entry__25679__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__25678__auto____$1,entry__25679__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__25707__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__25707__auto__,writer__25708__auto__){
return cljs.core._write.call(null,writer__25708__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__43277){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__43277),null,cljs.core.dissoc.call(null,G__43277,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__25039__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__25039__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__25039__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__43294 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__43294 == null))){
if((false) || (G__43294.devcards$core$IDevcard$)){
return true;
} else {
if((!G__43294.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43294);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__43294);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__43297 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__43297__$1 = ((((!((map__43297 == null)))?((((map__43297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43297):map__43297);
var history = cljs.core.get.call(null,map__43297__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43297__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43301 = cljs.core.deref.call(null,history_atom);
var map__43301__$1 = ((((!((map__43301 == null)))?((((map__43301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43301):map__43301);
var history = cljs.core.get.call(null,map__43301__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43301__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43305 = cljs.core.deref.call(null,history_atom);
var map__43305__$1 = ((((!((map__43305 == null)))?((((map__43305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43305):map__43305);
var history = cljs.core.get.call(null,map__43305__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__43305__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__43309 = cljs.core.deref.call(null,history_atom);
var map__43309__$1 = ((((!((map__43309 == null)))?((((map__43309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43309):map__43309);
var history = cljs.core.get.call(null,map__43309__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__25885__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__25039__auto__ = data_atom;
if(cljs.core.truth_(and__25039__auto__)){
return id;
} else {
return and__25039__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__43311){
var map__43312 = p__43311;
var map__43312__$1 = ((((!((map__43312 == null)))?((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43312):map__43312);
var ha = map__43312__$1;
var pointer = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__43312__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__25051__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__25051__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_43327 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_43327;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__25976__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25980__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25980__auto__,method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs43328 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43328))?sablono.interpreter.attributes.call(null,attrs43328):null),((cljs.core.map_QMARK_.call(null,attrs43328))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43328)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__43329,body){
var map__43333 = p__43329;
var map__43333__$1 = ((((!((map__43333 == null)))?((((map__43333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43333):map__43333);
var message = cljs.core.get.call(null,map__43333__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs43335 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs43335))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs43335)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs43335))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43335)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__43336){
var map__43344 = p__43336;
var map__43344__$1 = ((((!((map__43344 == null)))?((((map__43344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43344):map__43344);
var m = map__43344__$1;
var expected = cljs.core.get.call(null,map__43344__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__43344__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__43344__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs43346 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43346))?sablono.interpreter.attributes.call(null,attrs43346):null),((cljs.core.map_QMARK_.call(null,attrs43346))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43346),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs43353 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs43353))?sablono.interpreter.attributes.call(null,attrs43353):null),((cljs.core.map_QMARK_.call(null,attrs43353))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43353)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs43354 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43354))?sablono.interpreter.attributes.call(null,attrs43354):null),((cljs.core.map_QMARK_.call(null,attrs43354))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43354)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__43355){
var map__43356 = p__43355;
var map__43356__$1 = ((((!((map__43356 == null)))?((((map__43356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43356):map__43356);
var testing_contexts = cljs.core.get.call(null,map__43356__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs43358 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__43356,map__43356__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__43356,map__43356__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__25885__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43358))?sablono.interpreter.attributes.call(null,attrs43358):null),((cljs.core.map_QMARK_.call(null,attrs43358))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43358)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs43367 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__43368,p__43369){
var map__43370 = p__43368;
var map__43370__$1 = ((((!((map__43370 == null)))?((((map__43370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43370):map__43370);
var last_context = cljs.core.get.call(null,map__43370__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__43370__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__43371 = p__43369;
var i = cljs.core.nth.call(null,vec__43371,(0),null);
var t = cljs.core.nth.call(null,vec__43371,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__25885__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43367))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs43367)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs43367))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43367)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__43387){
var map__43388 = p__43387;
var map__43388__$1 = ((((!((map__43388 == null)))?((((map__43388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43388):map__43388);
var type = cljs.core.get.call(null,map__43388__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__43386 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__43386__$1 = ((((!((map__43386 == null)))?((((map__43386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43386):map__43386);
var fail = cljs.core.get.call(null,map__43386__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__43386__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__43386__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1){
return (function (p__43391){
var map__43392 = p__43391;
var map__43392__$1 = ((((!((map__43392 == null)))?((((map__43392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43392):map__43392);
var type = cljs.core.get.call(null,map__43392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1){
return (function (p__43394){
var map__43395 = p__43394;
var map__43395__$1 = ((((!((map__43395 == null)))?((((map__43395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43395):map__43395);
var type = cljs.core.get.call(null,map__43395__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__43386,map__43386__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__25051__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__38623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto__){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto__){
return (function (state_43485){
var state_val_43486 = (state_43485[(1)]);
if((state_val_43486 === (7))){
var state_43485__$1 = state_43485;
var statearr_43487_43536 = state_43485__$1;
(statearr_43487_43536[(2)] = false);

(statearr_43487_43536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (20))){
var inst_43424 = (state_43485[(7)]);
var inst_43443 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43424);
var state_43485__$1 = state_43485;
var statearr_43488_43537 = state_43485__$1;
(statearr_43488_43537[(2)] = inst_43443);

(statearr_43488_43537[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (27))){
var inst_43448 = (state_43485[(8)]);
var inst_43460 = (state_43485[(9)]);
var inst_43464 = inst_43448.call(null,inst_43460);
var state_43485__$1 = state_43485;
var statearr_43489_43538 = state_43485__$1;
(statearr_43489_43538[(2)] = inst_43464);

(statearr_43489_43538[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (1))){
var state_43485__$1 = state_43485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43485__$1,(2),devcards.core.test_channel);
} else {
if((state_val_43486 === (24))){
var state_43485__$1 = state_43485;
var statearr_43490_43539 = state_43485__$1;
(statearr_43490_43539[(2)] = null);

(statearr_43490_43539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (4))){
var state_43485__$1 = state_43485;
var statearr_43491_43540 = state_43485__$1;
(statearr_43491_43540[(2)] = false);

(statearr_43491_43540[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (15))){
var state_43485__$1 = state_43485;
var statearr_43492_43541 = state_43485__$1;
(statearr_43492_43541[(2)] = false);

(statearr_43492_43541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (21))){
var inst_43424 = (state_43485[(7)]);
var state_43485__$1 = state_43485;
var statearr_43493_43542 = state_43485__$1;
(statearr_43493_43542[(2)] = inst_43424);

(statearr_43493_43542[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (13))){
var inst_43483 = (state_43485[(2)]);
var state_43485__$1 = state_43485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43485__$1,inst_43483);
} else {
if((state_val_43486 === (22))){
var inst_43447 = (state_43485[(10)]);
var inst_43446 = (state_43485[(2)]);
var inst_43447__$1 = cljs.core.get.call(null,inst_43446,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43448 = cljs.core.get.call(null,inst_43446,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_43485__$1 = (function (){var statearr_43494 = state_43485;
(statearr_43494[(8)] = inst_43448);

(statearr_43494[(10)] = inst_43447__$1);

return statearr_43494;
})();
if(cljs.core.truth_(inst_43447__$1)){
var statearr_43495_43543 = state_43485__$1;
(statearr_43495_43543[(1)] = (23));

} else {
var statearr_43496_43544 = state_43485__$1;
(statearr_43496_43544[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (29))){
var inst_43474 = (state_43485[(2)]);
var inst_43475 = cljs.test.clear_env_BANG_.call(null);
var state_43485__$1 = (function (){var statearr_43497 = state_43485;
(statearr_43497[(11)] = inst_43475);

(statearr_43497[(12)] = inst_43474);

return statearr_43497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43485__$1,(30),devcards.core.test_channel);
} else {
if((state_val_43486 === (6))){
var state_43485__$1 = state_43485;
var statearr_43498_43545 = state_43485__$1;
(statearr_43498_43545[(2)] = true);

(statearr_43498_43545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (28))){
var inst_43448 = (state_43485[(8)]);
var inst_43466 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_43467 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_43468 = cljs.core.PersistentHashMap.fromArrays(inst_43466,inst_43467);
var inst_43469 = devcards.core.collect_test.call(null,inst_43468);
var inst_43470 = cljs.test.get_current_env.call(null);
var inst_43471 = cljs.core.assoc.call(null,inst_43470,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_43472 = inst_43448.call(null,inst_43471);
var state_43485__$1 = (function (){var statearr_43499 = state_43485;
(statearr_43499[(13)] = inst_43469);

return statearr_43499;
})();
var statearr_43500_43546 = state_43485__$1;
(statearr_43500_43546[(2)] = inst_43472);

(statearr_43500_43546[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (25))){
var inst_43481 = (state_43485[(2)]);
var state_43485__$1 = state_43485;
var statearr_43501_43547 = state_43485__$1;
(statearr_43501_43547[(2)] = inst_43481);

(statearr_43501_43547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (17))){
var state_43485__$1 = state_43485;
var statearr_43502_43548 = state_43485__$1;
(statearr_43502_43548[(2)] = true);

(statearr_43502_43548[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (3))){
var inst_43401 = (state_43485[(14)]);
var inst_43406 = inst_43401.cljs$lang$protocol_mask$partition0$;
var inst_43407 = (inst_43406 & (64));
var inst_43408 = inst_43401.cljs$core$ISeq$;
var inst_43409 = (inst_43407) || (inst_43408);
var state_43485__$1 = state_43485;
if(cljs.core.truth_(inst_43409)){
var statearr_43503_43549 = state_43485__$1;
(statearr_43503_43549[(1)] = (6));

} else {
var statearr_43504_43550 = state_43485__$1;
(statearr_43504_43550[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (12))){
var inst_43424 = (state_43485[(7)]);
var inst_43428 = (inst_43424 == null);
var inst_43429 = cljs.core.not.call(null,inst_43428);
var state_43485__$1 = state_43485;
if(inst_43429){
var statearr_43505_43551 = state_43485__$1;
(statearr_43505_43551[(1)] = (14));

} else {
var statearr_43506_43552 = state_43485__$1;
(statearr_43506_43552[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (2))){
var inst_43401 = (state_43485[(14)]);
var inst_43401__$1 = (state_43485[(2)]);
var inst_43403 = (inst_43401__$1 == null);
var inst_43404 = cljs.core.not.call(null,inst_43403);
var state_43485__$1 = (function (){var statearr_43507 = state_43485;
(statearr_43507[(14)] = inst_43401__$1);

return statearr_43507;
})();
if(inst_43404){
var statearr_43508_43553 = state_43485__$1;
(statearr_43508_43553[(1)] = (3));

} else {
var statearr_43509_43554 = state_43485__$1;
(statearr_43509_43554[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (23))){
var inst_43453 = (state_43485[(15)]);
var inst_43447 = (state_43485[(10)]);
var inst_43453__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_43454 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43455 = devcards.core.run_card_tests.call(null,inst_43447);
var inst_43456 = [inst_43455,inst_43453__$1];
var inst_43457 = (new cljs.core.PersistentVector(null,2,(5),inst_43454,inst_43456,null));
var state_43485__$1 = (function (){var statearr_43510 = state_43485;
(statearr_43510[(15)] = inst_43453__$1);

return statearr_43510;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43485__$1,(26),inst_43457);
} else {
if((state_val_43486 === (19))){
var inst_43438 = (state_43485[(2)]);
var state_43485__$1 = state_43485;
var statearr_43511_43555 = state_43485__$1;
(statearr_43511_43555[(2)] = inst_43438);

(statearr_43511_43555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (11))){
var inst_43401 = (state_43485[(14)]);
var inst_43421 = (state_43485[(2)]);
var inst_43422 = cljs.core.get.call(null,inst_43421,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_43423 = cljs.core.get.call(null,inst_43421,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_43424 = inst_43401;
var state_43485__$1 = (function (){var statearr_43512 = state_43485;
(statearr_43512[(16)] = inst_43422);

(statearr_43512[(7)] = inst_43424);

(statearr_43512[(17)] = inst_43423);

return statearr_43512;
})();
var statearr_43513_43556 = state_43485__$1;
(statearr_43513_43556[(2)] = null);

(statearr_43513_43556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (9))){
var inst_43401 = (state_43485[(14)]);
var inst_43418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43401);
var state_43485__$1 = state_43485;
var statearr_43514_43557 = state_43485__$1;
(statearr_43514_43557[(2)] = inst_43418);

(statearr_43514_43557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (5))){
var inst_43416 = (state_43485[(2)]);
var state_43485__$1 = state_43485;
if(cljs.core.truth_(inst_43416)){
var statearr_43515_43558 = state_43485__$1;
(statearr_43515_43558[(1)] = (9));

} else {
var statearr_43516_43559 = state_43485__$1;
(statearr_43516_43559[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (14))){
var inst_43424 = (state_43485[(7)]);
var inst_43431 = inst_43424.cljs$lang$protocol_mask$partition0$;
var inst_43432 = (inst_43431 & (64));
var inst_43433 = inst_43424.cljs$core$ISeq$;
var inst_43434 = (inst_43432) || (inst_43433);
var state_43485__$1 = state_43485;
if(cljs.core.truth_(inst_43434)){
var statearr_43517_43560 = state_43485__$1;
(statearr_43517_43560[(1)] = (17));

} else {
var statearr_43518_43561 = state_43485__$1;
(statearr_43518_43561[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (26))){
var inst_43453 = (state_43485[(15)]);
var inst_43459 = (state_43485[(2)]);
var inst_43460 = cljs.core.nth.call(null,inst_43459,(0),null);
var inst_43461 = cljs.core.nth.call(null,inst_43459,(1),null);
var inst_43462 = cljs.core.not_EQ_.call(null,inst_43461,inst_43453);
var state_43485__$1 = (function (){var statearr_43519 = state_43485;
(statearr_43519[(9)] = inst_43460);

return statearr_43519;
})();
if(inst_43462){
var statearr_43520_43562 = state_43485__$1;
(statearr_43520_43562[(1)] = (27));

} else {
var statearr_43521_43563 = state_43485__$1;
(statearr_43521_43563[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (16))){
var inst_43441 = (state_43485[(2)]);
var state_43485__$1 = state_43485;
if(cljs.core.truth_(inst_43441)){
var statearr_43522_43564 = state_43485__$1;
(statearr_43522_43564[(1)] = (20));

} else {
var statearr_43523_43565 = state_43485__$1;
(statearr_43523_43565[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (30))){
var inst_43477 = (state_43485[(2)]);
var inst_43424 = inst_43477;
var state_43485__$1 = (function (){var statearr_43524 = state_43485;
(statearr_43524[(7)] = inst_43424);

return statearr_43524;
})();
var statearr_43525_43566 = state_43485__$1;
(statearr_43525_43566[(2)] = null);

(statearr_43525_43566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (10))){
var inst_43401 = (state_43485[(14)]);
var state_43485__$1 = state_43485;
var statearr_43526_43567 = state_43485__$1;
(statearr_43526_43567[(2)] = inst_43401);

(statearr_43526_43567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (18))){
var state_43485__$1 = state_43485;
var statearr_43527_43568 = state_43485__$1;
(statearr_43527_43568[(2)] = false);

(statearr_43527_43568[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43486 === (8))){
var inst_43413 = (state_43485[(2)]);
var state_43485__$1 = state_43485;
var statearr_43528_43569 = state_43485__$1;
(statearr_43528_43569[(2)] = inst_43413);

(statearr_43528_43569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38623__auto__))
;
return ((function (switch__38511__auto__,c__38623__auto__){
return (function() {
var devcards$core$state_machine__38512__auto__ = null;
var devcards$core$state_machine__38512__auto____0 = (function (){
var statearr_43532 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43532[(0)] = devcards$core$state_machine__38512__auto__);

(statearr_43532[(1)] = (1));

return statearr_43532;
});
var devcards$core$state_machine__38512__auto____1 = (function (state_43485){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_43485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e43533){if((e43533 instanceof Object)){
var ex__38515__auto__ = e43533;
var statearr_43534_43570 = state_43485;
(statearr_43534_43570[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43571 = state_43485;
state_43485 = G__43571;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
devcards$core$state_machine__38512__auto__ = function(state_43485){
switch(arguments.length){
case 0:
return devcards$core$state_machine__38512__auto____0.call(this);
case 1:
return devcards$core$state_machine__38512__auto____1.call(this,state_43485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__38512__auto____0;
devcards$core$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__38512__auto____1;
return devcards$core$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto__))
})();
var state__38625__auto__ = (function (){var statearr_43535 = f__38624__auto__.call(null);
(statearr_43535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto__);

return statearr_43535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto__))
);

return c__38623__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__42288__auto___43576 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__42288__auto___43576);
}

var seq__43572_43577 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__43573_43578 = null;
var count__43574_43579 = (0);
var i__43575_43580 = (0);
while(true){
if((i__43575_43580 < count__43574_43579)){
var property__42289__auto___43581 = cljs.core._nth.call(null,chunk__43573_43578,i__43575_43580);
if(cljs.core.truth_((base__42288__auto___43576[property__42289__auto___43581]))){
(devcards.core.TestDevcard.prototype[property__42289__auto___43581] = (base__42288__auto___43576[property__42289__auto___43581]));
} else {
}

var G__43582 = seq__43572_43577;
var G__43583 = chunk__43573_43578;
var G__43584 = count__43574_43579;
var G__43585 = (i__43575_43580 + (1));
seq__43572_43577 = G__43582;
chunk__43573_43578 = G__43583;
count__43574_43579 = G__43584;
i__43575_43580 = G__43585;
continue;
} else {
var temp__4657__auto___43586 = cljs.core.seq.call(null,seq__43572_43577);
if(temp__4657__auto___43586){
var seq__43572_43587__$1 = temp__4657__auto___43586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43572_43587__$1)){
var c__25862__auto___43588 = cljs.core.chunk_first.call(null,seq__43572_43587__$1);
var G__43589 = cljs.core.chunk_rest.call(null,seq__43572_43587__$1);
var G__43590 = c__25862__auto___43588;
var G__43591 = cljs.core.count.call(null,c__25862__auto___43588);
var G__43592 = (0);
seq__43572_43577 = G__43589;
chunk__43573_43578 = G__43590;
count__43574_43579 = G__43591;
i__43575_43580 = G__43592;
continue;
} else {
var property__42289__auto___43593 = cljs.core.first.call(null,seq__43572_43587__$1);
if(cljs.core.truth_((base__42288__auto___43576[property__42289__auto___43593]))){
(devcards.core.TestDevcard.prototype[property__42289__auto___43593] = (base__42288__auto___43576[property__42289__auto___43593]));
} else {
}

var G__43594 = cljs.core.next.call(null,seq__43572_43587__$1);
var G__43595 = null;
var G__43596 = (0);
var G__43597 = (0);
seq__43572_43577 = G__43594;
chunk__43573_43578 = G__43595;
count__43574_43579 = G__43596;
i__43575_43580 = G__43597;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__26133__auto__ = [];
var len__26126__auto___43602 = arguments.length;
var i__26127__auto___43603 = (0);
while(true){
if((i__26127__auto___43603 < len__26126__auto___43602)){
args__26133__auto__.push((arguments[i__26127__auto___43603]));

var G__43604 = (i__26127__auto___43603 + (1));
i__26127__auto___43603 = G__43604;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core43599 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core43599 = (function (test_thunks,meta43600){
this.test_thunks = test_thunks;
this.meta43600 = meta43600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core43599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43601,meta43600__$1){
var self__ = this;
var _43601__$1 = this;
return (new devcards.core.t_devcards$core43599(self__.test_thunks,meta43600__$1));
});

devcards.core.t_devcards$core43599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43601){
var self__ = this;
var _43601__$1 = this;
return self__.meta43600;
});

devcards.core.t_devcards$core43599.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core43599.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core43599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta43600","meta43600",626001492,null)], null);
});

devcards.core.t_devcards$core43599.cljs$lang$type = true;

devcards.core.t_devcards$core43599.cljs$lang$ctorStr = "devcards.core/t_devcards$core43599";

devcards.core.t_devcards$core43599.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"devcards.core/t_devcards$core43599");
});

devcards.core.__GT_t_devcards$core43599 = (function devcards$core$__GT_t_devcards$core43599(test_thunks__$1,meta43600){
return (new devcards.core.t_devcards$core43599(test_thunks__$1,meta43600));
});

}

return (new devcards.core.t_devcards$core43599(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq43598){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43598));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs43606 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43606))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs43606)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs43606))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43606)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs43608 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs43608))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs43608)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs43608))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs43608)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__38623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto__){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto__){
return (function (state_43638){
var state_val_43639 = (state_43638[(1)]);
if((state_val_43639 === (1))){
var inst_43629 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_43638__$1 = state_43638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43638__$1,(2),inst_43629);
} else {
if((state_val_43639 === (2))){
var inst_43631 = (state_43638[(2)]);
var inst_43632 = cljs.core.async.timeout.call(null,(100));
var state_43638__$1 = (function (){var statearr_43640 = state_43638;
(statearr_43640[(7)] = inst_43631);

return statearr_43640;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43638__$1,(3),inst_43632);
} else {
if((state_val_43639 === (3))){
var inst_43634 = (state_43638[(2)]);
var inst_43635 = (function (){return ((function (inst_43634,state_val_43639,c__38623__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_43634,state_val_43639,c__38623__auto__))
})();
var inst_43636 = setTimeout(inst_43635,(0));
var state_43638__$1 = (function (){var statearr_43641 = state_43638;
(statearr_43641[(8)] = inst_43634);

return statearr_43641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43638__$1,inst_43636);
} else {
return null;
}
}
}
});})(c__38623__auto__))
;
return ((function (switch__38511__auto__,c__38623__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__38512__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__38512__auto____0 = (function (){
var statearr_43645 = [null,null,null,null,null,null,null,null,null];
(statearr_43645[(0)] = devcards$core$mount_namespace_$_state_machine__38512__auto__);

(statearr_43645[(1)] = (1));

return statearr_43645;
});
var devcards$core$mount_namespace_$_state_machine__38512__auto____1 = (function (state_43638){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_43638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e43646){if((e43646 instanceof Object)){
var ex__38515__auto__ = e43646;
var statearr_43647_43649 = state_43638;
(statearr_43647_43649[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43650 = state_43638;
state_43638 = G__43650;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__38512__auto__ = function(state_43638){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__38512__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__38512__auto____1.call(this,state_43638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__38512__auto____0;
devcards$core$mount_namespace_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__38512__auto____1;
return devcards$core$mount_namespace_$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto__))
})();
var state__38625__auto__ = (function (){var statearr_43648 = f__38624__auto__.call(null);
(statearr_43648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto__);

return statearr_43648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto__))
);

return c__38623__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);
