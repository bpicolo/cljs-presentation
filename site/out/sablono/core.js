// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__37825__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37822 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37823 = cljs.core.seq.call(null,vec__37822);
var first__37824 = cljs.core.first.call(null,seq__37823);
var seq__37823__$1 = cljs.core.next.call(null,seq__37823);
var tag = first__37824;
var body = seq__37823__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37825 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37826__i = 0, G__37826__a = new Array(arguments.length -  0);
while (G__37826__i < G__37826__a.length) {G__37826__a[G__37826__i] = arguments[G__37826__i + 0]; ++G__37826__i;}
  args = new cljs.core.IndexedSeq(G__37826__a,0);
} 
return G__37825__delegate.call(this,args);};
G__37825.cljs$lang$maxFixedArity = 0;
G__37825.cljs$lang$applyTo = (function (arglist__37827){
var args = cljs.core.seq(arglist__37827);
return G__37825__delegate(args);
});
G__37825.cljs$core$IFn$_invoke$arity$variadic = G__37825__delegate;
return G__37825;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25831__auto__ = (function sablono$core$update_arglists_$_iter__37832(s__37833){
return (new cljs.core.LazySeq(null,(function (){
var s__37833__$1 = s__37833;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37833__$1);
if(temp__4657__auto__){
var s__37833__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37833__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__37833__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__37835 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__37834 = (0);
while(true){
if((i__37834 < size__25830__auto__)){
var args = cljs.core._nth.call(null,c__25829__auto__,i__37834);
cljs.core.chunk_append.call(null,b__37835,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37836 = (i__37834 + (1));
i__37834 = G__37836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37835),sablono$core$update_arglists_$_iter__37832.call(null,cljs.core.chunk_rest.call(null,s__37833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37835),null);
}
} else {
var args = cljs.core.first.call(null,s__37833__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37832.call(null,cljs.core.rest.call(null,s__37833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25831__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37842 = arguments.length;
var i__26127__auto___37843 = (0);
while(true){
if((i__26127__auto___37843 < len__26126__auto___37842)){
args__26133__auto__.push((arguments[i__26127__auto___37843]));

var G__37844 = (i__26127__auto___37843 + (1));
i__26127__auto___37843 = G__37844;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25831__auto__ = (function sablono$core$iter__37838(s__37839){
return (new cljs.core.LazySeq(null,(function (){
var s__37839__$1 = s__37839;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37839__$1);
if(temp__4657__auto__){
var s__37839__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37839__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__37839__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__37841 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__37840 = (0);
while(true){
if((i__37840 < size__25830__auto__)){
var style = cljs.core._nth.call(null,c__25829__auto__,i__37840);
cljs.core.chunk_append.call(null,b__37841,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37845 = (i__37840 + (1));
i__37840 = G__37845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37841),sablono$core$iter__37838.call(null,cljs.core.chunk_rest.call(null,s__37839__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37841),null);
}
} else {
var style = cljs.core.first.call(null,s__37839__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37838.call(null,cljs.core.rest.call(null,s__37839__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25831__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq37837){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37837));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to37846 = (function sablono$core$link_to37846(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37849 = arguments.length;
var i__26127__auto___37850 = (0);
while(true){
if((i__26127__auto___37850 < len__26126__auto___37849)){
args__26133__auto__.push((arguments[i__26127__auto___37850]));

var G__37851 = (i__26127__auto___37850 + (1));
i__26127__auto___37850 = G__37851;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37846.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

sablono.core.link_to37846.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37846.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37846.cljs$lang$applyTo = (function (seq37847){
var G__37848 = cljs.core.first.call(null,seq37847);
var seq37847__$1 = cljs.core.next.call(null,seq37847);
return sablono.core.link_to37846.cljs$core$IFn$_invoke$arity$variadic(G__37848,seq37847__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37846);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37852 = (function sablono$core$mail_to37852(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37859 = arguments.length;
var i__26127__auto___37860 = (0);
while(true){
if((i__26127__auto___37860 < len__26126__auto___37859)){
args__26133__auto__.push((arguments[i__26127__auto___37860]));

var G__37861 = (i__26127__auto___37860 + (1));
i__26127__auto___37860 = G__37861;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37852.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

sablono.core.mail_to37852.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37855){
var vec__37856 = p__37855;
var content = cljs.core.nth.call(null,vec__37856,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__25051__auto__ = content;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37852.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37852.cljs$lang$applyTo = (function (seq37853){
var G__37854 = cljs.core.first.call(null,seq37853);
var seq37853__$1 = cljs.core.next.call(null,seq37853);
return sablono.core.mail_to37852.cljs$core$IFn$_invoke$arity$variadic(G__37854,seq37853__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37852);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37862 = (function sablono$core$unordered_list37862(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25831__auto__ = (function sablono$core$unordered_list37862_$_iter__37867(s__37868){
return (new cljs.core.LazySeq(null,(function (){
var s__37868__$1 = s__37868;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37868__$1);
if(temp__4657__auto__){
var s__37868__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37868__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__37868__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__37870 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__37869 = (0);
while(true){
if((i__37869 < size__25830__auto__)){
var x = cljs.core._nth.call(null,c__25829__auto__,i__37869);
cljs.core.chunk_append.call(null,b__37870,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37871 = (i__37869 + (1));
i__37869 = G__37871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37870),sablono$core$unordered_list37862_$_iter__37867.call(null,cljs.core.chunk_rest.call(null,s__37868__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37870),null);
}
} else {
var x = cljs.core.first.call(null,s__37868__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37862_$_iter__37867.call(null,cljs.core.rest.call(null,s__37868__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25831__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37862);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37872 = (function sablono$core$ordered_list37872(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25831__auto__ = (function sablono$core$ordered_list37872_$_iter__37877(s__37878){
return (new cljs.core.LazySeq(null,(function (){
var s__37878__$1 = s__37878;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37878__$1);
if(temp__4657__auto__){
var s__37878__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37878__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__37878__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__37880 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__37879 = (0);
while(true){
if((i__37879 < size__25830__auto__)){
var x = cljs.core._nth.call(null,c__25829__auto__,i__37879);
cljs.core.chunk_append.call(null,b__37880,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37881 = (i__37879 + (1));
i__37879 = G__37881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37880),sablono$core$ordered_list37872_$_iter__37877.call(null,cljs.core.chunk_rest.call(null,s__37878__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37880),null);
}
} else {
var x = cljs.core.first.call(null,s__37878__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37872_$_iter__37877.call(null,cljs.core.rest.call(null,s__37878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25831__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37872);
/**
 * Create an image element.
 */
sablono.core.image37882 = (function sablono$core$image37882(var_args){
var args37883 = [];
var len__26126__auto___37886 = arguments.length;
var i__26127__auto___37887 = (0);
while(true){
if((i__26127__auto___37887 < len__26126__auto___37886)){
args37883.push((arguments[i__26127__auto___37887]));

var G__37888 = (i__26127__auto___37887 + (1));
i__26127__auto___37887 = G__37888;
continue;
} else {
}
break;
}

var G__37885 = args37883.length;
switch (G__37885) {
case 1:
return sablono.core.image37882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37883.length)].join('')));

}
});

sablono.core.image37882.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37882.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37882.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37882);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37890_SHARP_,p2__37891_SHARP_){
return [cljs.core.str(p1__37890_SHARP_),cljs.core.str("["),cljs.core.str(p2__37891_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37892_SHARP_,p2__37893_SHARP_){
return [cljs.core.str(p1__37892_SHARP_),cljs.core.str("-"),cljs.core.str(p2__37893_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field37894 = (function sablono$core$color_field37894(var_args){
var args37895 = [];
var len__26126__auto___37962 = arguments.length;
var i__26127__auto___37963 = (0);
while(true){
if((i__26127__auto___37963 < len__26126__auto___37962)){
args37895.push((arguments[i__26127__auto___37963]));

var G__37964 = (i__26127__auto___37963 + (1));
i__26127__auto___37963 = G__37964;
continue;
} else {
}
break;
}

var G__37897 = args37895.length;
switch (G__37897) {
case 1:
return sablono.core.color_field37894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37895.length)].join('')));

}
});

sablono.core.color_field37894.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.color_field37894.call(null,name__37809__auto__,null);
});

sablono.core.color_field37894.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.color_field37894.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37894);

/**
 * Creates a date input field.
 */
sablono.core.date_field37898 = (function sablono$core$date_field37898(var_args){
var args37899 = [];
var len__26126__auto___37966 = arguments.length;
var i__26127__auto___37967 = (0);
while(true){
if((i__26127__auto___37967 < len__26126__auto___37966)){
args37899.push((arguments[i__26127__auto___37967]));

var G__37968 = (i__26127__auto___37967 + (1));
i__26127__auto___37967 = G__37968;
continue;
} else {
}
break;
}

var G__37901 = args37899.length;
switch (G__37901) {
case 1:
return sablono.core.date_field37898.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37898.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37899.length)].join('')));

}
});

sablono.core.date_field37898.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.date_field37898.call(null,name__37809__auto__,null);
});

sablono.core.date_field37898.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.date_field37898.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37898);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37902 = (function sablono$core$datetime_field37902(var_args){
var args37903 = [];
var len__26126__auto___37970 = arguments.length;
var i__26127__auto___37971 = (0);
while(true){
if((i__26127__auto___37971 < len__26126__auto___37970)){
args37903.push((arguments[i__26127__auto___37971]));

var G__37972 = (i__26127__auto___37971 + (1));
i__26127__auto___37971 = G__37972;
continue;
} else {
}
break;
}

var G__37905 = args37903.length;
switch (G__37905) {
case 1:
return sablono.core.datetime_field37902.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37902.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37903.length)].join('')));

}
});

sablono.core.datetime_field37902.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.datetime_field37902.call(null,name__37809__auto__,null);
});

sablono.core.datetime_field37902.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.datetime_field37902.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37902);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37906 = (function sablono$core$datetime_local_field37906(var_args){
var args37907 = [];
var len__26126__auto___37974 = arguments.length;
var i__26127__auto___37975 = (0);
while(true){
if((i__26127__auto___37975 < len__26126__auto___37974)){
args37907.push((arguments[i__26127__auto___37975]));

var G__37976 = (i__26127__auto___37975 + (1));
i__26127__auto___37975 = G__37976;
continue;
} else {
}
break;
}

var G__37909 = args37907.length;
switch (G__37909) {
case 1:
return sablono.core.datetime_local_field37906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37907.length)].join('')));

}
});

sablono.core.datetime_local_field37906.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.datetime_local_field37906.call(null,name__37809__auto__,null);
});

sablono.core.datetime_local_field37906.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.datetime_local_field37906.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37906);

/**
 * Creates a email input field.
 */
sablono.core.email_field37910 = (function sablono$core$email_field37910(var_args){
var args37911 = [];
var len__26126__auto___37978 = arguments.length;
var i__26127__auto___37979 = (0);
while(true){
if((i__26127__auto___37979 < len__26126__auto___37978)){
args37911.push((arguments[i__26127__auto___37979]));

var G__37980 = (i__26127__auto___37979 + (1));
i__26127__auto___37979 = G__37980;
continue;
} else {
}
break;
}

var G__37913 = args37911.length;
switch (G__37913) {
case 1:
return sablono.core.email_field37910.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37910.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37911.length)].join('')));

}
});

sablono.core.email_field37910.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.email_field37910.call(null,name__37809__auto__,null);
});

sablono.core.email_field37910.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.email_field37910.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37910);

/**
 * Creates a file input field.
 */
sablono.core.file_field37914 = (function sablono$core$file_field37914(var_args){
var args37915 = [];
var len__26126__auto___37982 = arguments.length;
var i__26127__auto___37983 = (0);
while(true){
if((i__26127__auto___37983 < len__26126__auto___37982)){
args37915.push((arguments[i__26127__auto___37983]));

var G__37984 = (i__26127__auto___37983 + (1));
i__26127__auto___37983 = G__37984;
continue;
} else {
}
break;
}

var G__37917 = args37915.length;
switch (G__37917) {
case 1:
return sablono.core.file_field37914.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37914.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37915.length)].join('')));

}
});

sablono.core.file_field37914.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.file_field37914.call(null,name__37809__auto__,null);
});

sablono.core.file_field37914.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.file_field37914.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37914);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37918 = (function sablono$core$hidden_field37918(var_args){
var args37919 = [];
var len__26126__auto___37986 = arguments.length;
var i__26127__auto___37987 = (0);
while(true){
if((i__26127__auto___37987 < len__26126__auto___37986)){
args37919.push((arguments[i__26127__auto___37987]));

var G__37988 = (i__26127__auto___37987 + (1));
i__26127__auto___37987 = G__37988;
continue;
} else {
}
break;
}

var G__37921 = args37919.length;
switch (G__37921) {
case 1:
return sablono.core.hidden_field37918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37919.length)].join('')));

}
});

sablono.core.hidden_field37918.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.hidden_field37918.call(null,name__37809__auto__,null);
});

sablono.core.hidden_field37918.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.hidden_field37918.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37918);

/**
 * Creates a month input field.
 */
sablono.core.month_field37922 = (function sablono$core$month_field37922(var_args){
var args37923 = [];
var len__26126__auto___37990 = arguments.length;
var i__26127__auto___37991 = (0);
while(true){
if((i__26127__auto___37991 < len__26126__auto___37990)){
args37923.push((arguments[i__26127__auto___37991]));

var G__37992 = (i__26127__auto___37991 + (1));
i__26127__auto___37991 = G__37992;
continue;
} else {
}
break;
}

var G__37925 = args37923.length;
switch (G__37925) {
case 1:
return sablono.core.month_field37922.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37922.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37923.length)].join('')));

}
});

sablono.core.month_field37922.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.month_field37922.call(null,name__37809__auto__,null);
});

sablono.core.month_field37922.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.month_field37922.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37922);

/**
 * Creates a number input field.
 */
sablono.core.number_field37926 = (function sablono$core$number_field37926(var_args){
var args37927 = [];
var len__26126__auto___37994 = arguments.length;
var i__26127__auto___37995 = (0);
while(true){
if((i__26127__auto___37995 < len__26126__auto___37994)){
args37927.push((arguments[i__26127__auto___37995]));

var G__37996 = (i__26127__auto___37995 + (1));
i__26127__auto___37995 = G__37996;
continue;
} else {
}
break;
}

var G__37929 = args37927.length;
switch (G__37929) {
case 1:
return sablono.core.number_field37926.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37926.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37927.length)].join('')));

}
});

sablono.core.number_field37926.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.number_field37926.call(null,name__37809__auto__,null);
});

sablono.core.number_field37926.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.number_field37926.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37926);

/**
 * Creates a password input field.
 */
sablono.core.password_field37930 = (function sablono$core$password_field37930(var_args){
var args37931 = [];
var len__26126__auto___37998 = arguments.length;
var i__26127__auto___37999 = (0);
while(true){
if((i__26127__auto___37999 < len__26126__auto___37998)){
args37931.push((arguments[i__26127__auto___37999]));

var G__38000 = (i__26127__auto___37999 + (1));
i__26127__auto___37999 = G__38000;
continue;
} else {
}
break;
}

var G__37933 = args37931.length;
switch (G__37933) {
case 1:
return sablono.core.password_field37930.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37930.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37931.length)].join('')));

}
});

sablono.core.password_field37930.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.password_field37930.call(null,name__37809__auto__,null);
});

sablono.core.password_field37930.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.password_field37930.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37930);

/**
 * Creates a range input field.
 */
sablono.core.range_field37934 = (function sablono$core$range_field37934(var_args){
var args37935 = [];
var len__26126__auto___38002 = arguments.length;
var i__26127__auto___38003 = (0);
while(true){
if((i__26127__auto___38003 < len__26126__auto___38002)){
args37935.push((arguments[i__26127__auto___38003]));

var G__38004 = (i__26127__auto___38003 + (1));
i__26127__auto___38003 = G__38004;
continue;
} else {
}
break;
}

var G__37937 = args37935.length;
switch (G__37937) {
case 1:
return sablono.core.range_field37934.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37934.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37935.length)].join('')));

}
});

sablono.core.range_field37934.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.range_field37934.call(null,name__37809__auto__,null);
});

sablono.core.range_field37934.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.range_field37934.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37934);

/**
 * Creates a search input field.
 */
sablono.core.search_field37938 = (function sablono$core$search_field37938(var_args){
var args37939 = [];
var len__26126__auto___38006 = arguments.length;
var i__26127__auto___38007 = (0);
while(true){
if((i__26127__auto___38007 < len__26126__auto___38006)){
args37939.push((arguments[i__26127__auto___38007]));

var G__38008 = (i__26127__auto___38007 + (1));
i__26127__auto___38007 = G__38008;
continue;
} else {
}
break;
}

var G__37941 = args37939.length;
switch (G__37941) {
case 1:
return sablono.core.search_field37938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37939.length)].join('')));

}
});

sablono.core.search_field37938.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.search_field37938.call(null,name__37809__auto__,null);
});

sablono.core.search_field37938.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.search_field37938.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37938);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37942 = (function sablono$core$tel_field37942(var_args){
var args37943 = [];
var len__26126__auto___38010 = arguments.length;
var i__26127__auto___38011 = (0);
while(true){
if((i__26127__auto___38011 < len__26126__auto___38010)){
args37943.push((arguments[i__26127__auto___38011]));

var G__38012 = (i__26127__auto___38011 + (1));
i__26127__auto___38011 = G__38012;
continue;
} else {
}
break;
}

var G__37945 = args37943.length;
switch (G__37945) {
case 1:
return sablono.core.tel_field37942.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37942.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37943.length)].join('')));

}
});

sablono.core.tel_field37942.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.tel_field37942.call(null,name__37809__auto__,null);
});

sablono.core.tel_field37942.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.tel_field37942.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37942);

/**
 * Creates a text input field.
 */
sablono.core.text_field37946 = (function sablono$core$text_field37946(var_args){
var args37947 = [];
var len__26126__auto___38014 = arguments.length;
var i__26127__auto___38015 = (0);
while(true){
if((i__26127__auto___38015 < len__26126__auto___38014)){
args37947.push((arguments[i__26127__auto___38015]));

var G__38016 = (i__26127__auto___38015 + (1));
i__26127__auto___38015 = G__38016;
continue;
} else {
}
break;
}

var G__37949 = args37947.length;
switch (G__37949) {
case 1:
return sablono.core.text_field37946.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37946.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37947.length)].join('')));

}
});

sablono.core.text_field37946.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.text_field37946.call(null,name__37809__auto__,null);
});

sablono.core.text_field37946.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.text_field37946.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37946);

/**
 * Creates a time input field.
 */
sablono.core.time_field37950 = (function sablono$core$time_field37950(var_args){
var args37951 = [];
var len__26126__auto___38018 = arguments.length;
var i__26127__auto___38019 = (0);
while(true){
if((i__26127__auto___38019 < len__26126__auto___38018)){
args37951.push((arguments[i__26127__auto___38019]));

var G__38020 = (i__26127__auto___38019 + (1));
i__26127__auto___38019 = G__38020;
continue;
} else {
}
break;
}

var G__37953 = args37951.length;
switch (G__37953) {
case 1:
return sablono.core.time_field37950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37951.length)].join('')));

}
});

sablono.core.time_field37950.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.time_field37950.call(null,name__37809__auto__,null);
});

sablono.core.time_field37950.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.time_field37950.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37950);

/**
 * Creates a url input field.
 */
sablono.core.url_field37954 = (function sablono$core$url_field37954(var_args){
var args37955 = [];
var len__26126__auto___38022 = arguments.length;
var i__26127__auto___38023 = (0);
while(true){
if((i__26127__auto___38023 < len__26126__auto___38022)){
args37955.push((arguments[i__26127__auto___38023]));

var G__38024 = (i__26127__auto___38023 + (1));
i__26127__auto___38023 = G__38024;
continue;
} else {
}
break;
}

var G__37957 = args37955.length;
switch (G__37957) {
case 1:
return sablono.core.url_field37954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37955.length)].join('')));

}
});

sablono.core.url_field37954.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.url_field37954.call(null,name__37809__auto__,null);
});

sablono.core.url_field37954.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.url_field37954.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37954);

/**
 * Creates a week input field.
 */
sablono.core.week_field37958 = (function sablono$core$week_field37958(var_args){
var args37959 = [];
var len__26126__auto___38026 = arguments.length;
var i__26127__auto___38027 = (0);
while(true){
if((i__26127__auto___38027 < len__26126__auto___38026)){
args37959.push((arguments[i__26127__auto___38027]));

var G__38028 = (i__26127__auto___38027 + (1));
i__26127__auto___38027 = G__38028;
continue;
} else {
}
break;
}

var G__37961 = args37959.length;
switch (G__37961) {
case 1:
return sablono.core.week_field37958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37959.length)].join('')));

}
});

sablono.core.week_field37958.cljs$core$IFn$_invoke$arity$1 = (function (name__37809__auto__){
return sablono.core.week_field37958.call(null,name__37809__auto__,null);
});

sablono.core.week_field37958.cljs$core$IFn$_invoke$arity$2 = (function (name__37809__auto__,value__37810__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37809__auto__,value__37810__auto__);
});

sablono.core.week_field37958.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37958);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38030 = (function sablono$core$check_box38030(var_args){
var args38031 = [];
var len__26126__auto___38034 = arguments.length;
var i__26127__auto___38035 = (0);
while(true){
if((i__26127__auto___38035 < len__26126__auto___38034)){
args38031.push((arguments[i__26127__auto___38035]));

var G__38036 = (i__26127__auto___38035 + (1));
i__26127__auto___38035 = G__38036;
continue;
} else {
}
break;
}

var G__38033 = args38031.length;
switch (G__38033) {
case 1:
return sablono.core.check_box38030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38030.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38031.length)].join('')));

}
});

sablono.core.check_box38030.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38030.call(null,name,null);
});

sablono.core.check_box38030.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38030.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38030.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38030.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38030);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38038 = (function sablono$core$radio_button38038(var_args){
var args38039 = [];
var len__26126__auto___38042 = arguments.length;
var i__26127__auto___38043 = (0);
while(true){
if((i__26127__auto___38043 < len__26126__auto___38042)){
args38039.push((arguments[i__26127__auto___38043]));

var G__38044 = (i__26127__auto___38043 + (1));
i__26127__auto___38043 = G__38044;
continue;
} else {
}
break;
}

var G__38041 = args38039.length;
switch (G__38041) {
case 1:
return sablono.core.radio_button38038.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38038.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38038.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38039.length)].join('')));

}
});

sablono.core.radio_button38038.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38038.call(null,group,null);
});

sablono.core.radio_button38038.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38038.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38038.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38038.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38038);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38046 = (function sablono$core$select_options38046(coll){
var iter__25831__auto__ = (function sablono$core$select_options38046_$_iter__38063(s__38064){
return (new cljs.core.LazySeq(null,(function (){
var s__38064__$1 = s__38064;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38064__$1);
if(temp__4657__auto__){
var s__38064__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38064__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__38064__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__38066 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__38065 = (0);
while(true){
if((i__38065 < size__25830__auto__)){
var x = cljs.core._nth.call(null,c__25829__auto__,i__38065);
cljs.core.chunk_append.call(null,b__38066,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38073 = x;
var text = cljs.core.nth.call(null,vec__38073,(0),null);
var val = cljs.core.nth.call(null,vec__38073,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38073,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38046.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38079 = (i__38065 + (1));
i__38065 = G__38079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38066),sablono$core$select_options38046_$_iter__38063.call(null,cljs.core.chunk_rest.call(null,s__38064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38066),null);
}
} else {
var x = cljs.core.first.call(null,s__38064__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38076 = x;
var text = cljs.core.nth.call(null,vec__38076,(0),null);
var val = cljs.core.nth.call(null,vec__38076,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38076,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options38046.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38046_$_iter__38063.call(null,cljs.core.rest.call(null,s__38064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25831__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38046);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38080 = (function sablono$core$drop_down38080(var_args){
var args38081 = [];
var len__26126__auto___38084 = arguments.length;
var i__26127__auto___38085 = (0);
while(true){
if((i__26127__auto___38085 < len__26126__auto___38084)){
args38081.push((arguments[i__26127__auto___38085]));

var G__38086 = (i__26127__auto___38085 + (1));
i__26127__auto___38085 = G__38086;
continue;
} else {
}
break;
}

var G__38083 = args38081.length;
switch (G__38083) {
case 2:
return sablono.core.drop_down38080.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38080.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38081.length)].join('')));

}
});

sablono.core.drop_down38080.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38080.call(null,name,options,null);
});

sablono.core.drop_down38080.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38080.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38080);
/**
 * Creates a text area element.
 */
sablono.core.text_area38088 = (function sablono$core$text_area38088(var_args){
var args38089 = [];
var len__26126__auto___38092 = arguments.length;
var i__26127__auto___38093 = (0);
while(true){
if((i__26127__auto___38093 < len__26126__auto___38092)){
args38089.push((arguments[i__26127__auto___38093]));

var G__38094 = (i__26127__auto___38093 + (1));
i__26127__auto___38093 = G__38094;
continue;
} else {
}
break;
}

var G__38091 = args38089.length;
switch (G__38091) {
case 1:
return sablono.core.text_area38088.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38088.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38089.length)].join('')));

}
});

sablono.core.text_area38088.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38088.call(null,name,null);
});

sablono.core.text_area38088.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area38088.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38088);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38096 = (function sablono$core$label38096(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38096);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38097 = (function sablono$core$submit_button38097(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38097);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38098 = (function sablono$core$reset_button38098(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38098);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38099 = (function sablono$core$form_to38099(var_args){
var args__26133__auto__ = [];
var len__26126__auto___38106 = arguments.length;
var i__26127__auto___38107 = (0);
while(true){
if((i__26127__auto___38107 < len__26126__auto___38106)){
args__26133__auto__.push((arguments[i__26127__auto___38107]));

var G__38108 = (i__26127__auto___38107 + (1));
i__26127__auto___38107 = G__38108;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38099.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

sablono.core.form_to38099.cljs$core$IFn$_invoke$arity$variadic = (function (p__38102,body){
var vec__38103 = p__38102;
var method = cljs.core.nth.call(null,vec__38103,(0),null);
var action = cljs.core.nth.call(null,vec__38103,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38099.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38099.cljs$lang$applyTo = (function (seq38100){
var G__38101 = cljs.core.first.call(null,seq38100);
var seq38100__$1 = cljs.core.next.call(null,seq38100);
return sablono.core.form_to38099.cljs$core$IFn$_invoke$arity$variadic(G__38101,seq38100__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38099);

//# sourceMappingURL=core.js.map