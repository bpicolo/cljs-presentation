// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.utils');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
presentation.utils.img = (function presentation$utils$img(url){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),url], null)], null);
});
presentation.utils.editor_did_mount = (function presentation$utils$editor_did_mount(state){
return (function (this$){
var cm = CodeMirror.fromTextArea(reagent.core.dom_node.call(null,this$),({"mode": "clojure", "lineNumbers": true}));
return cm.on("change",((function (cm){
return (function (e){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),e.getValue());
});})(cm))
);
});
});
presentation.utils.editor = (function presentation$utils$editor(state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),presentation.utils.editor_did_mount.call(null,state)], null));
});
presentation.utils.eval_str = (function presentation$utils$eval_str(s){
try{return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,[cljs.core.str("(let []"),cljs.core.str(s),cljs.core.str("\n)")].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
return result;
}));
}catch (e44189){if((e44189 instanceof Error)){
var e = e44189;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e44189;

}
}});
presentation.utils.eval_component = (function presentation$utils$eval_component(s){
try{return cljs.js.eval.call(null,cljs.js.empty_state.call(null),cljs.tools.reader.read_string.call(null,[cljs.core.str("(let []"),cljs.core.str(s),cljs.core.str("\n)")].join('')),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),(function (result){
return result;
}));
}catch (e44191){if((e44191 instanceof Error)){
var e = e44191;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
} else {
throw e44191;

}
}});
presentation.utils.code_block = (function presentation$utils$code_block(state){
return (function (state__$1){
var output = presentation.utils.eval_str.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state__$1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-block","div.code-block",808320626),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.editor,state__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Result"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(output))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null)], null),[cljs.core.str(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(output))].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(output))].join('')], null))], null)], null)], null);
});
});
presentation.utils.component_editor_did_mount = (function presentation$utils$component_editor_did_mount(state){
return (function (this$){
var cm = CodeMirror.fromTextArea(reagent.core.dom_node.call(null,this$),({"mode": "clojure", "lineNumbers": true, "tabSize": (2), "theme": "base16-dark"}));
cm.setSize("100%","740px");

return cm.on("change",((function (cm){
return (function (e){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"input","input",556931961),e.getValue());
});})(cm))
);
});
});
presentation.utils.component_editor = (function presentation$utils$component_editor(state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),presentation.utils.component_editor_did_mount.call(null,state)], null));
});
presentation.utils.component_block = (function presentation$utils$component_block(state){
return (function (state__$1){
var output = presentation.utils.eval_component.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state__$1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-block","div.code-block",808320626),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [presentation.utils.component_editor,state__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Result"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"30px"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(output))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null)], null),[cljs.core.str(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(output))].join('')], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(output).call(null,new cljs.core.Keyword(null,"component-state","component-state",-402683974).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state__$1)))], null))], null)], null)], null);
});
});
