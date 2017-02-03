// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__41958__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__41955 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__41956 = cljs.core.seq.call(null,vec__41955);
var first__41957 = cljs.core.first.call(null,seq__41956);
var seq__41956__$1 = cljs.core.next.call(null,seq__41956);
var tag = first__41957;
var body = seq__41956__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__41958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41959__i = 0, G__41959__a = new Array(arguments.length -  0);
while (G__41959__i < G__41959__a.length) {G__41959__a[G__41959__i] = arguments[G__41959__i + 0]; ++G__41959__i;}
  args = new cljs.core.IndexedSeq(G__41959__a,0);
} 
return G__41958__delegate.call(this,args);};
G__41958.cljs$lang$maxFixedArity = 0;
G__41958.cljs$lang$applyTo = (function (arglist__41960){
var args = cljs.core.seq(arglist__41960);
return G__41958__delegate(args);
});
G__41958.cljs$core$IFn$_invoke$arity$variadic = G__41958__delegate;
return G__41958;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25831__auto__ = (function sablono$core$update_arglists_$_iter__41965(s__41966){
return (new cljs.core.LazySeq(null,(function (){
var s__41966__$1 = s__41966;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41966__$1);
if(temp__4657__auto__){
var s__41966__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41966__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__41966__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__41968 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__41967 = (0);
while(true){
if((i__41967 < size__25830__auto__)){
var args = cljs.core._nth.call(null,c__25829__auto__,i__41967);
cljs.core.chunk_append.call(null,b__41968,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__41969 = (i__41967 + (1));
i__41967 = G__41969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41968),sablono$core$update_arglists_$_iter__41965.call(null,cljs.core.chunk_rest.call(null,s__41966__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41968),null);
}
} else {
var args = cljs.core.first.call(null,s__41966__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41965.call(null,cljs.core.rest.call(null,s__41966__$2)));
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
var len__26126__auto___41975 = arguments.length;
var i__26127__auto___41976 = (0);
while(true){
if((i__26127__auto___41976 < len__26126__auto___41975)){
args__26133__auto__.push((arguments[i__26127__auto___41976]));

var G__41977 = (i__26127__auto___41976 + (1));
i__26127__auto___41976 = G__41977;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25831__auto__ = (function sablono$core$iter__41971(s__41972){
return (new cljs.core.LazySeq(null,(function (){
var s__41972__$1 = s__41972;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41972__$1);
if(temp__4657__auto__){
var s__41972__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41972__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__41972__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__41974 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__41973 = (0);
while(true){
if((i__41973 < size__25830__auto__)){
var style = cljs.core._nth.call(null,c__25829__auto__,i__41973);
cljs.core.chunk_append.call(null,b__41974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__41978 = (i__41973 + (1));
i__41973 = G__41978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41974),sablono$core$iter__41971.call(null,cljs.core.chunk_rest.call(null,s__41972__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41974),null);
}
} else {
var style = cljs.core.first.call(null,s__41972__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41971.call(null,cljs.core.rest.call(null,s__41972__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq41970){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41970));
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
sablono.core.link_to41979 = (function sablono$core$link_to41979(var_args){
var args__26133__auto__ = [];
var len__26126__auto___41982 = arguments.length;
var i__26127__auto___41983 = (0);
while(true){
if((i__26127__auto___41983 < len__26126__auto___41982)){
args__26133__auto__.push((arguments[i__26127__auto___41983]));

var G__41984 = (i__26127__auto___41983 + (1));
i__26127__auto___41983 = G__41984;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41979.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

sablono.core.link_to41979.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to41979.cljs$lang$maxFixedArity = (1);

sablono.core.link_to41979.cljs$lang$applyTo = (function (seq41980){
var G__41981 = cljs.core.first.call(null,seq41980);
var seq41980__$1 = cljs.core.next.call(null,seq41980);
return sablono.core.link_to41979.cljs$core$IFn$_invoke$arity$variadic(G__41981,seq41980__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to41979);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41985 = (function sablono$core$mail_to41985(var_args){
var args__26133__auto__ = [];
var len__26126__auto___41992 = arguments.length;
var i__26127__auto___41993 = (0);
while(true){
if((i__26127__auto___41993 < len__26126__auto___41992)){
args__26133__auto__.push((arguments[i__26127__auto___41993]));

var G__41994 = (i__26127__auto___41993 + (1));
i__26127__auto___41993 = G__41994;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41985.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

sablono.core.mail_to41985.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41988){
var vec__41989 = p__41988;
var content = cljs.core.nth.call(null,vec__41989,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__25051__auto__ = content;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to41985.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to41985.cljs$lang$applyTo = (function (seq41986){
var G__41987 = cljs.core.first.call(null,seq41986);
var seq41986__$1 = cljs.core.next.call(null,seq41986);
return sablono.core.mail_to41985.cljs$core$IFn$_invoke$arity$variadic(G__41987,seq41986__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to41985);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41995 = (function sablono$core$unordered_list41995(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25831__auto__ = (function sablono$core$unordered_list41995_$_iter__42000(s__42001){
return (new cljs.core.LazySeq(null,(function (){
var s__42001__$1 = s__42001;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42001__$1);
if(temp__4657__auto__){
var s__42001__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42001__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__42001__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__42003 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__42002 = (0);
while(true){
if((i__42002 < size__25830__auto__)){
var x = cljs.core._nth.call(null,c__25829__auto__,i__42002);
cljs.core.chunk_append.call(null,b__42003,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42004 = (i__42002 + (1));
i__42002 = G__42004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42003),sablono$core$unordered_list41995_$_iter__42000.call(null,cljs.core.chunk_rest.call(null,s__42001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42003),null);
}
} else {
var x = cljs.core.first.call(null,s__42001__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41995_$_iter__42000.call(null,cljs.core.rest.call(null,s__42001__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list41995);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list42005 = (function sablono$core$ordered_list42005(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25831__auto__ = (function sablono$core$ordered_list42005_$_iter__42010(s__42011){
return (new cljs.core.LazySeq(null,(function (){
var s__42011__$1 = s__42011;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42011__$1);
if(temp__4657__auto__){
var s__42011__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42011__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__42011__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__42013 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__42012 = (0);
while(true){
if((i__42012 < size__25830__auto__)){
var x = cljs.core._nth.call(null,c__25829__auto__,i__42012);
cljs.core.chunk_append.call(null,b__42013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42014 = (i__42012 + (1));
i__42012 = G__42014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42013),sablono$core$ordered_list42005_$_iter__42010.call(null,cljs.core.chunk_rest.call(null,s__42011__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42013),null);
}
} else {
var x = cljs.core.first.call(null,s__42011__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list42005_$_iter__42010.call(null,cljs.core.rest.call(null,s__42011__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list42005);
/**
 * Create an image element.
 */
sablono.core.image42015 = (function sablono$core$image42015(var_args){
var args42016 = [];
var len__26126__auto___42019 = arguments.length;
var i__26127__auto___42020 = (0);
while(true){
if((i__26127__auto___42020 < len__26126__auto___42019)){
args42016.push((arguments[i__26127__auto___42020]));

var G__42021 = (i__26127__auto___42020 + (1));
i__26127__auto___42020 = G__42021;
continue;
} else {
}
break;
}

var G__42018 = args42016.length;
switch (G__42018) {
case 1:
return sablono.core.image42015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image42015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42016.length)].join('')));

}
});

sablono.core.image42015.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image42015.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image42015.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image42015);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__42023_SHARP_,p2__42024_SHARP_){
return [cljs.core.str(p1__42023_SHARP_),cljs.core.str("["),cljs.core.str(p2__42024_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__42025_SHARP_,p2__42026_SHARP_){
return [cljs.core.str(p1__42025_SHARP_),cljs.core.str("-"),cljs.core.str(p2__42026_SHARP_)].join('');
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
sablono.core.color_field42027 = (function sablono$core$color_field42027(var_args){
var args42028 = [];
var len__26126__auto___42095 = arguments.length;
var i__26127__auto___42096 = (0);
while(true){
if((i__26127__auto___42096 < len__26126__auto___42095)){
args42028.push((arguments[i__26127__auto___42096]));

var G__42097 = (i__26127__auto___42096 + (1));
i__26127__auto___42096 = G__42097;
continue;
} else {
}
break;
}

var G__42030 = args42028.length;
switch (G__42030) {
case 1:
return sablono.core.color_field42027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field42027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42028.length)].join('')));

}
});

sablono.core.color_field42027.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.color_field42027.call(null,name__41942__auto__,null);
});

sablono.core.color_field42027.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.color_field42027.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field42027);

/**
 * Creates a date input field.
 */
sablono.core.date_field42031 = (function sablono$core$date_field42031(var_args){
var args42032 = [];
var len__26126__auto___42099 = arguments.length;
var i__26127__auto___42100 = (0);
while(true){
if((i__26127__auto___42100 < len__26126__auto___42099)){
args42032.push((arguments[i__26127__auto___42100]));

var G__42101 = (i__26127__auto___42100 + (1));
i__26127__auto___42100 = G__42101;
continue;
} else {
}
break;
}

var G__42034 = args42032.length;
switch (G__42034) {
case 1:
return sablono.core.date_field42031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field42031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42032.length)].join('')));

}
});

sablono.core.date_field42031.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.date_field42031.call(null,name__41942__auto__,null);
});

sablono.core.date_field42031.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.date_field42031.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field42031);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field42035 = (function sablono$core$datetime_field42035(var_args){
var args42036 = [];
var len__26126__auto___42103 = arguments.length;
var i__26127__auto___42104 = (0);
while(true){
if((i__26127__auto___42104 < len__26126__auto___42103)){
args42036.push((arguments[i__26127__auto___42104]));

var G__42105 = (i__26127__auto___42104 + (1));
i__26127__auto___42104 = G__42105;
continue;
} else {
}
break;
}

var G__42038 = args42036.length;
switch (G__42038) {
case 1:
return sablono.core.datetime_field42035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field42035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42036.length)].join('')));

}
});

sablono.core.datetime_field42035.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.datetime_field42035.call(null,name__41942__auto__,null);
});

sablono.core.datetime_field42035.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.datetime_field42035.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field42035);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field42039 = (function sablono$core$datetime_local_field42039(var_args){
var args42040 = [];
var len__26126__auto___42107 = arguments.length;
var i__26127__auto___42108 = (0);
while(true){
if((i__26127__auto___42108 < len__26126__auto___42107)){
args42040.push((arguments[i__26127__auto___42108]));

var G__42109 = (i__26127__auto___42108 + (1));
i__26127__auto___42108 = G__42109;
continue;
} else {
}
break;
}

var G__42042 = args42040.length;
switch (G__42042) {
case 1:
return sablono.core.datetime_local_field42039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field42039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42040.length)].join('')));

}
});

sablono.core.datetime_local_field42039.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.datetime_local_field42039.call(null,name__41942__auto__,null);
});

sablono.core.datetime_local_field42039.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.datetime_local_field42039.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field42039);

/**
 * Creates a email input field.
 */
sablono.core.email_field42043 = (function sablono$core$email_field42043(var_args){
var args42044 = [];
var len__26126__auto___42111 = arguments.length;
var i__26127__auto___42112 = (0);
while(true){
if((i__26127__auto___42112 < len__26126__auto___42111)){
args42044.push((arguments[i__26127__auto___42112]));

var G__42113 = (i__26127__auto___42112 + (1));
i__26127__auto___42112 = G__42113;
continue;
} else {
}
break;
}

var G__42046 = args42044.length;
switch (G__42046) {
case 1:
return sablono.core.email_field42043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field42043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42044.length)].join('')));

}
});

sablono.core.email_field42043.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.email_field42043.call(null,name__41942__auto__,null);
});

sablono.core.email_field42043.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.email_field42043.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field42043);

/**
 * Creates a file input field.
 */
sablono.core.file_field42047 = (function sablono$core$file_field42047(var_args){
var args42048 = [];
var len__26126__auto___42115 = arguments.length;
var i__26127__auto___42116 = (0);
while(true){
if((i__26127__auto___42116 < len__26126__auto___42115)){
args42048.push((arguments[i__26127__auto___42116]));

var G__42117 = (i__26127__auto___42116 + (1));
i__26127__auto___42116 = G__42117;
continue;
} else {
}
break;
}

var G__42050 = args42048.length;
switch (G__42050) {
case 1:
return sablono.core.file_field42047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field42047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42048.length)].join('')));

}
});

sablono.core.file_field42047.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.file_field42047.call(null,name__41942__auto__,null);
});

sablono.core.file_field42047.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.file_field42047.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field42047);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42051 = (function sablono$core$hidden_field42051(var_args){
var args42052 = [];
var len__26126__auto___42119 = arguments.length;
var i__26127__auto___42120 = (0);
while(true){
if((i__26127__auto___42120 < len__26126__auto___42119)){
args42052.push((arguments[i__26127__auto___42120]));

var G__42121 = (i__26127__auto___42120 + (1));
i__26127__auto___42120 = G__42121;
continue;
} else {
}
break;
}

var G__42054 = args42052.length;
switch (G__42054) {
case 1:
return sablono.core.hidden_field42051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42052.length)].join('')));

}
});

sablono.core.hidden_field42051.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.hidden_field42051.call(null,name__41942__auto__,null);
});

sablono.core.hidden_field42051.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.hidden_field42051.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field42051);

/**
 * Creates a month input field.
 */
sablono.core.month_field42055 = (function sablono$core$month_field42055(var_args){
var args42056 = [];
var len__26126__auto___42123 = arguments.length;
var i__26127__auto___42124 = (0);
while(true){
if((i__26127__auto___42124 < len__26126__auto___42123)){
args42056.push((arguments[i__26127__auto___42124]));

var G__42125 = (i__26127__auto___42124 + (1));
i__26127__auto___42124 = G__42125;
continue;
} else {
}
break;
}

var G__42058 = args42056.length;
switch (G__42058) {
case 1:
return sablono.core.month_field42055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42056.length)].join('')));

}
});

sablono.core.month_field42055.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.month_field42055.call(null,name__41942__auto__,null);
});

sablono.core.month_field42055.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.month_field42055.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field42055);

/**
 * Creates a number input field.
 */
sablono.core.number_field42059 = (function sablono$core$number_field42059(var_args){
var args42060 = [];
var len__26126__auto___42127 = arguments.length;
var i__26127__auto___42128 = (0);
while(true){
if((i__26127__auto___42128 < len__26126__auto___42127)){
args42060.push((arguments[i__26127__auto___42128]));

var G__42129 = (i__26127__auto___42128 + (1));
i__26127__auto___42128 = G__42129;
continue;
} else {
}
break;
}

var G__42062 = args42060.length;
switch (G__42062) {
case 1:
return sablono.core.number_field42059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42060.length)].join('')));

}
});

sablono.core.number_field42059.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.number_field42059.call(null,name__41942__auto__,null);
});

sablono.core.number_field42059.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.number_field42059.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field42059);

/**
 * Creates a password input field.
 */
sablono.core.password_field42063 = (function sablono$core$password_field42063(var_args){
var args42064 = [];
var len__26126__auto___42131 = arguments.length;
var i__26127__auto___42132 = (0);
while(true){
if((i__26127__auto___42132 < len__26126__auto___42131)){
args42064.push((arguments[i__26127__auto___42132]));

var G__42133 = (i__26127__auto___42132 + (1));
i__26127__auto___42132 = G__42133;
continue;
} else {
}
break;
}

var G__42066 = args42064.length;
switch (G__42066) {
case 1:
return sablono.core.password_field42063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42064.length)].join('')));

}
});

sablono.core.password_field42063.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.password_field42063.call(null,name__41942__auto__,null);
});

sablono.core.password_field42063.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.password_field42063.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field42063);

/**
 * Creates a range input field.
 */
sablono.core.range_field42067 = (function sablono$core$range_field42067(var_args){
var args42068 = [];
var len__26126__auto___42135 = arguments.length;
var i__26127__auto___42136 = (0);
while(true){
if((i__26127__auto___42136 < len__26126__auto___42135)){
args42068.push((arguments[i__26127__auto___42136]));

var G__42137 = (i__26127__auto___42136 + (1));
i__26127__auto___42136 = G__42137;
continue;
} else {
}
break;
}

var G__42070 = args42068.length;
switch (G__42070) {
case 1:
return sablono.core.range_field42067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42068.length)].join('')));

}
});

sablono.core.range_field42067.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.range_field42067.call(null,name__41942__auto__,null);
});

sablono.core.range_field42067.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.range_field42067.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field42067);

/**
 * Creates a search input field.
 */
sablono.core.search_field42071 = (function sablono$core$search_field42071(var_args){
var args42072 = [];
var len__26126__auto___42139 = arguments.length;
var i__26127__auto___42140 = (0);
while(true){
if((i__26127__auto___42140 < len__26126__auto___42139)){
args42072.push((arguments[i__26127__auto___42140]));

var G__42141 = (i__26127__auto___42140 + (1));
i__26127__auto___42140 = G__42141;
continue;
} else {
}
break;
}

var G__42074 = args42072.length;
switch (G__42074) {
case 1:
return sablono.core.search_field42071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42072.length)].join('')));

}
});

sablono.core.search_field42071.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.search_field42071.call(null,name__41942__auto__,null);
});

sablono.core.search_field42071.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.search_field42071.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field42071);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42075 = (function sablono$core$tel_field42075(var_args){
var args42076 = [];
var len__26126__auto___42143 = arguments.length;
var i__26127__auto___42144 = (0);
while(true){
if((i__26127__auto___42144 < len__26126__auto___42143)){
args42076.push((arguments[i__26127__auto___42144]));

var G__42145 = (i__26127__auto___42144 + (1));
i__26127__auto___42144 = G__42145;
continue;
} else {
}
break;
}

var G__42078 = args42076.length;
switch (G__42078) {
case 1:
return sablono.core.tel_field42075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42076.length)].join('')));

}
});

sablono.core.tel_field42075.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.tel_field42075.call(null,name__41942__auto__,null);
});

sablono.core.tel_field42075.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.tel_field42075.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field42075);

/**
 * Creates a text input field.
 */
sablono.core.text_field42079 = (function sablono$core$text_field42079(var_args){
var args42080 = [];
var len__26126__auto___42147 = arguments.length;
var i__26127__auto___42148 = (0);
while(true){
if((i__26127__auto___42148 < len__26126__auto___42147)){
args42080.push((arguments[i__26127__auto___42148]));

var G__42149 = (i__26127__auto___42148 + (1));
i__26127__auto___42148 = G__42149;
continue;
} else {
}
break;
}

var G__42082 = args42080.length;
switch (G__42082) {
case 1:
return sablono.core.text_field42079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42080.length)].join('')));

}
});

sablono.core.text_field42079.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.text_field42079.call(null,name__41942__auto__,null);
});

sablono.core.text_field42079.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.text_field42079.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field42079);

/**
 * Creates a time input field.
 */
sablono.core.time_field42083 = (function sablono$core$time_field42083(var_args){
var args42084 = [];
var len__26126__auto___42151 = arguments.length;
var i__26127__auto___42152 = (0);
while(true){
if((i__26127__auto___42152 < len__26126__auto___42151)){
args42084.push((arguments[i__26127__auto___42152]));

var G__42153 = (i__26127__auto___42152 + (1));
i__26127__auto___42152 = G__42153;
continue;
} else {
}
break;
}

var G__42086 = args42084.length;
switch (G__42086) {
case 1:
return sablono.core.time_field42083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42084.length)].join('')));

}
});

sablono.core.time_field42083.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.time_field42083.call(null,name__41942__auto__,null);
});

sablono.core.time_field42083.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.time_field42083.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field42083);

/**
 * Creates a url input field.
 */
sablono.core.url_field42087 = (function sablono$core$url_field42087(var_args){
var args42088 = [];
var len__26126__auto___42155 = arguments.length;
var i__26127__auto___42156 = (0);
while(true){
if((i__26127__auto___42156 < len__26126__auto___42155)){
args42088.push((arguments[i__26127__auto___42156]));

var G__42157 = (i__26127__auto___42156 + (1));
i__26127__auto___42156 = G__42157;
continue;
} else {
}
break;
}

var G__42090 = args42088.length;
switch (G__42090) {
case 1:
return sablono.core.url_field42087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42088.length)].join('')));

}
});

sablono.core.url_field42087.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.url_field42087.call(null,name__41942__auto__,null);
});

sablono.core.url_field42087.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.url_field42087.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field42087);

/**
 * Creates a week input field.
 */
sablono.core.week_field42091 = (function sablono$core$week_field42091(var_args){
var args42092 = [];
var len__26126__auto___42159 = arguments.length;
var i__26127__auto___42160 = (0);
while(true){
if((i__26127__auto___42160 < len__26126__auto___42159)){
args42092.push((arguments[i__26127__auto___42160]));

var G__42161 = (i__26127__auto___42160 + (1));
i__26127__auto___42160 = G__42161;
continue;
} else {
}
break;
}

var G__42094 = args42092.length;
switch (G__42094) {
case 1:
return sablono.core.week_field42091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42092.length)].join('')));

}
});

sablono.core.week_field42091.cljs$core$IFn$_invoke$arity$1 = (function (name__41942__auto__){
return sablono.core.week_field42091.call(null,name__41942__auto__,null);
});

sablono.core.week_field42091.cljs$core$IFn$_invoke$arity$2 = (function (name__41942__auto__,value__41943__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__41942__auto__,value__41943__auto__);
});

sablono.core.week_field42091.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field42091);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42163 = (function sablono$core$check_box42163(var_args){
var args42164 = [];
var len__26126__auto___42167 = arguments.length;
var i__26127__auto___42168 = (0);
while(true){
if((i__26127__auto___42168 < len__26126__auto___42167)){
args42164.push((arguments[i__26127__auto___42168]));

var G__42169 = (i__26127__auto___42168 + (1));
i__26127__auto___42168 = G__42169;
continue;
} else {
}
break;
}

var G__42166 = args42164.length;
switch (G__42166) {
case 1:
return sablono.core.check_box42163.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42163.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42163.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42164.length)].join('')));

}
});

sablono.core.check_box42163.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box42163.call(null,name,null);
});

sablono.core.check_box42163.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box42163.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box42163.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box42163.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box42163);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42171 = (function sablono$core$radio_button42171(var_args){
var args42172 = [];
var len__26126__auto___42175 = arguments.length;
var i__26127__auto___42176 = (0);
while(true){
if((i__26127__auto___42176 < len__26126__auto___42175)){
args42172.push((arguments[i__26127__auto___42176]));

var G__42177 = (i__26127__auto___42176 + (1));
i__26127__auto___42176 = G__42177;
continue;
} else {
}
break;
}

var G__42174 = args42172.length;
switch (G__42174) {
case 1:
return sablono.core.radio_button42171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42171.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42172.length)].join('')));

}
});

sablono.core.radio_button42171.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button42171.call(null,group,null);
});

sablono.core.radio_button42171.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button42171.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button42171.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button42171.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button42171);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42179 = (function sablono$core$select_options42179(coll){
var iter__25831__auto__ = (function sablono$core$select_options42179_$_iter__42196(s__42197){
return (new cljs.core.LazySeq(null,(function (){
var s__42197__$1 = s__42197;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__42197__$1);
if(temp__4657__auto__){
var s__42197__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42197__$2)){
var c__25829__auto__ = cljs.core.chunk_first.call(null,s__42197__$2);
var size__25830__auto__ = cljs.core.count.call(null,c__25829__auto__);
var b__42199 = cljs.core.chunk_buffer.call(null,size__25830__auto__);
if((function (){var i__42198 = (0);
while(true){
if((i__42198 < size__25830__auto__)){
var x = cljs.core._nth.call(null,c__25829__auto__,i__42198);
cljs.core.chunk_append.call(null,b__42199,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__42206 = x;
var text = cljs.core.nth.call(null,vec__42206,(0),null);
var val = cljs.core.nth.call(null,vec__42206,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__42206,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options42179.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42212 = (i__42198 + (1));
i__42198 = G__42212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42199),sablono$core$select_options42179_$_iter__42196.call(null,cljs.core.chunk_rest.call(null,s__42197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42199),null);
}
} else {
var x = cljs.core.first.call(null,s__42197__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__42209 = x;
var text = cljs.core.nth.call(null,vec__42209,(0),null);
var val = cljs.core.nth.call(null,vec__42209,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__42209,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options42179.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42179_$_iter__42196.call(null,cljs.core.rest.call(null,s__42197__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options42179);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42213 = (function sablono$core$drop_down42213(var_args){
var args42214 = [];
var len__26126__auto___42217 = arguments.length;
var i__26127__auto___42218 = (0);
while(true){
if((i__26127__auto___42218 < len__26126__auto___42217)){
args42214.push((arguments[i__26127__auto___42218]));

var G__42219 = (i__26127__auto___42218 + (1));
i__26127__auto___42218 = G__42219;
continue;
} else {
}
break;
}

var G__42216 = args42214.length;
switch (G__42216) {
case 2:
return sablono.core.drop_down42213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42213.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42214.length)].join('')));

}
});

sablono.core.drop_down42213.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42213.call(null,name,options,null);
});

sablono.core.drop_down42213.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down42213.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down42213);
/**
 * Creates a text area element.
 */
sablono.core.text_area42221 = (function sablono$core$text_area42221(var_args){
var args42222 = [];
var len__26126__auto___42225 = arguments.length;
var i__26127__auto___42226 = (0);
while(true){
if((i__26127__auto___42226 < len__26126__auto___42225)){
args42222.push((arguments[i__26127__auto___42226]));

var G__42227 = (i__26127__auto___42226 + (1));
i__26127__auto___42226 = G__42227;
continue;
} else {
}
break;
}

var G__42224 = args42222.length;
switch (G__42224) {
case 1:
return sablono.core.text_area42221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42222.length)].join('')));

}
});

sablono.core.text_area42221.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area42221.call(null,name,null);
});

sablono.core.text_area42221.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__25051__auto__ = value;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area42221.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area42221);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42229 = (function sablono$core$label42229(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label42229);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42230 = (function sablono$core$submit_button42230(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button42230);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42231 = (function sablono$core$reset_button42231(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button42231);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42232 = (function sablono$core$form_to42232(var_args){
var args__26133__auto__ = [];
var len__26126__auto___42239 = arguments.length;
var i__26127__auto___42240 = (0);
while(true){
if((i__26127__auto___42240 < len__26126__auto___42239)){
args__26133__auto__.push((arguments[i__26127__auto___42240]));

var G__42241 = (i__26127__auto___42240 + (1));
i__26127__auto___42240 = G__42241;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42232.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

sablono.core.form_to42232.cljs$core$IFn$_invoke$arity$variadic = (function (p__42235,body){
var vec__42236 = p__42235;
var method = cljs.core.nth.call(null,vec__42236,(0),null);
var action = cljs.core.nth.call(null,vec__42236,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to42232.cljs$lang$maxFixedArity = (1);

sablono.core.form_to42232.cljs$lang$applyTo = (function (seq42233){
var G__42234 = cljs.core.first.call(null,seq42233);
var seq42233__$1 = cljs.core.next.call(null,seq42233);
return sablono.core.form_to42232.cljs$core$IFn$_invoke$arity$variadic(G__42234,seq42233__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to42232);
