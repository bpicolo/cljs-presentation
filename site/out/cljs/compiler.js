// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__33336 = s;
var map__33336__$1 = ((((!((map__33336 == null)))?((((map__33336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33336):map__33336);
var name = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33339 = info;
var map__33340 = G__33339;
var map__33340__$1 = ((((!((map__33340 == null)))?((((map__33340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33340):map__33340);
var shadow = cljs.core.get.call(null,map__33340__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33339__$1 = G__33339;
while(true){
var d__$2 = d__$1;
var map__33342 = G__33339__$1;
var map__33342__$1 = ((((!((map__33342 == null)))?((((map__33342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33342):map__33342);
var shadow__$1 = cljs.core.get.call(null,map__33342__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__33344 = (d__$2 + (1));
var G__33345 = shadow__$1;
d__$1 = G__33344;
G__33339__$1 = G__33345;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33346){
var map__33351 = p__33346;
var map__33351__$1 = ((((!((map__33351 == null)))?((((map__33351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33351):map__33351);
var name_var = map__33351__$1;
var name = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__33351__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__33353 = info;
var map__33353__$1 = ((((!((map__33353 == null)))?((((map__33353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33353):map__33353);
var ns = cljs.core.get.call(null,map__33353__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__33353__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args33355 = [];
var len__26126__auto___33358 = arguments.length;
var i__26127__auto___33359 = (0);
while(true){
if((i__26127__auto___33359 < len__26126__auto___33358)){
args33355.push((arguments[i__26127__auto___33359]));

var G__33360 = (i__26127__auto___33359 + (1));
i__26127__auto___33359 = G__33360;
continue;
} else {
}
break;
}

var G__33357 = args33355.length;
switch (G__33357) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33355.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__33363 = cp;
switch (G__33363) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__33369_33373 = cljs.core.seq.call(null,s);
var chunk__33370_33374 = null;
var count__33371_33375 = (0);
var i__33372_33376 = (0);
while(true){
if((i__33372_33376 < count__33371_33375)){
var c_33377 = cljs.core._nth.call(null,chunk__33370_33374,i__33372_33376);
sb.append(cljs.compiler.escape_char.call(null,c_33377));

var G__33378 = seq__33369_33373;
var G__33379 = chunk__33370_33374;
var G__33380 = count__33371_33375;
var G__33381 = (i__33372_33376 + (1));
seq__33369_33373 = G__33378;
chunk__33370_33374 = G__33379;
count__33371_33375 = G__33380;
i__33372_33376 = G__33381;
continue;
} else {
var temp__4657__auto___33382 = cljs.core.seq.call(null,seq__33369_33373);
if(temp__4657__auto___33382){
var seq__33369_33383__$1 = temp__4657__auto___33382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33369_33383__$1)){
var c__25862__auto___33384 = cljs.core.chunk_first.call(null,seq__33369_33383__$1);
var G__33385 = cljs.core.chunk_rest.call(null,seq__33369_33383__$1);
var G__33386 = c__25862__auto___33384;
var G__33387 = cljs.core.count.call(null,c__25862__auto___33384);
var G__33388 = (0);
seq__33369_33373 = G__33385;
chunk__33370_33374 = G__33386;
count__33371_33375 = G__33387;
i__33372_33376 = G__33388;
continue;
} else {
var c_33389 = cljs.core.first.call(null,seq__33369_33383__$1);
sb.append(cljs.compiler.escape_char.call(null,c_33389));

var G__33390 = cljs.core.next.call(null,seq__33369_33383__$1);
var G__33391 = null;
var G__33392 = (0);
var G__33393 = (0);
seq__33369_33373 = G__33390;
chunk__33370_33374 = G__33391;
count__33371_33375 = G__33392;
i__33372_33376 = G__33393;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__25976__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25980__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25980__auto__,method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__31485__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__31485__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__33399_33404 = ast;
var map__33399_33405__$1 = ((((!((map__33399_33404 == null)))?((((map__33399_33404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33399_33404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33399_33404):map__33399_33404);
var env_33406 = cljs.core.get.call(null,map__33399_33405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33406))){
var map__33401_33407 = env_33406;
var map__33401_33408__$1 = ((((!((map__33401_33407 == null)))?((((map__33401_33407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33401_33407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33401_33407):map__33401_33407);
var line_33409 = cljs.core.get.call(null,map__33401_33408__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33410 = cljs.core.get.call(null,map__33401_33408__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__33401_33407,map__33401_33408__$1,line_33409,column_33410,map__33399_33404,map__33399_33405__$1,env_33406,val__31485__auto__){
return (function (m){
var minfo = (function (){var G__33403 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__33403,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__33403;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33409 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__33401_33407,map__33401_33408__$1,line_33409,column_33410,map__33399_33404,map__33399_33405__$1,env_33406,val__31485__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33410)?(column_33410 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__33401_33407,map__33401_33408__$1,line_33409,column_33410,map__33399_33404,map__33399_33405__$1,env_33406,val__31485__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__33401_33407,map__33401_33408__$1,line_33409,column_33410,map__33399_33404,map__33399_33405__$1,env_33406,val__31485__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__33401_33407,map__33401_33408__$1,line_33409,column_33410,map__33399_33404,map__33399_33405__$1,env_33406,val__31485__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__33401_33407,map__33401_33408__$1,line_33409,column_33410,map__33399_33404,map__33399_33405__$1,env_33406,val__31485__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__31485__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33417 = arguments.length;
var i__26127__auto___33418 = (0);
while(true){
if((i__26127__auto___33418 < len__26126__auto___33417)){
args__26133__auto__.push((arguments[i__26127__auto___33418]));

var G__33419 = (i__26127__auto___33418 + (1));
i__26127__auto___33418 = G__33419;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__33413_33420 = cljs.core.seq.call(null,xs);
var chunk__33414_33421 = null;
var count__33415_33422 = (0);
var i__33416_33423 = (0);
while(true){
if((i__33416_33423 < count__33415_33422)){
var x_33424 = cljs.core._nth.call(null,chunk__33414_33421,i__33416_33423);
if((x_33424 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_33424)){
cljs.compiler.emit.call(null,x_33424);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_33424)){
cljs.core.apply.call(null,cljs.compiler.emits,x_33424);
} else {
if(goog.isFunction(x_33424)){
x_33424.call(null);
} else {
var s_33425 = cljs.core.print_str.call(null,x_33424);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__33413_33420,chunk__33414_33421,count__33415_33422,i__33416_33423,s_33425,x_33424){
return (function (p1__33411_SHARP_){
return (p1__33411_SHARP_ + cljs.core.count.call(null,s_33425));
});})(seq__33413_33420,chunk__33414_33421,count__33415_33422,i__33416_33423,s_33425,x_33424))
);
}

cljs.core.print.call(null,s_33425);

}
}
}
}

var G__33426 = seq__33413_33420;
var G__33427 = chunk__33414_33421;
var G__33428 = count__33415_33422;
var G__33429 = (i__33416_33423 + (1));
seq__33413_33420 = G__33426;
chunk__33414_33421 = G__33427;
count__33415_33422 = G__33428;
i__33416_33423 = G__33429;
continue;
} else {
var temp__4657__auto___33430 = cljs.core.seq.call(null,seq__33413_33420);
if(temp__4657__auto___33430){
var seq__33413_33431__$1 = temp__4657__auto___33430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33413_33431__$1)){
var c__25862__auto___33432 = cljs.core.chunk_first.call(null,seq__33413_33431__$1);
var G__33433 = cljs.core.chunk_rest.call(null,seq__33413_33431__$1);
var G__33434 = c__25862__auto___33432;
var G__33435 = cljs.core.count.call(null,c__25862__auto___33432);
var G__33436 = (0);
seq__33413_33420 = G__33433;
chunk__33414_33421 = G__33434;
count__33415_33422 = G__33435;
i__33416_33423 = G__33436;
continue;
} else {
var x_33437 = cljs.core.first.call(null,seq__33413_33431__$1);
if((x_33437 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_33437)){
cljs.compiler.emit.call(null,x_33437);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_33437)){
cljs.core.apply.call(null,cljs.compiler.emits,x_33437);
} else {
if(goog.isFunction(x_33437)){
x_33437.call(null);
} else {
var s_33438 = cljs.core.print_str.call(null,x_33437);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__33413_33420,chunk__33414_33421,count__33415_33422,i__33416_33423,s_33438,x_33437,seq__33413_33431__$1,temp__4657__auto___33430){
return (function (p1__33411_SHARP_){
return (p1__33411_SHARP_ + cljs.core.count.call(null,s_33438));
});})(seq__33413_33420,chunk__33414_33421,count__33415_33422,i__33416_33423,s_33438,x_33437,seq__33413_33431__$1,temp__4657__auto___33430))
);
}

cljs.core.print.call(null,s_33438);

}
}
}
}

var G__33439 = cljs.core.next.call(null,seq__33413_33431__$1);
var G__33440 = null;
var G__33441 = (0);
var G__33442 = (0);
seq__33413_33420 = G__33439;
chunk__33414_33421 = G__33440;
count__33415_33422 = G__33441;
i__33416_33423 = G__33442;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq33412){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33412));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33447 = arguments.length;
var i__26127__auto___33448 = (0);
while(true){
if((i__26127__auto___33448 < len__26126__auto___33447)){
args__26133__auto__.push((arguments[i__26127__auto___33448]));

var G__33449 = (i__26127__auto___33448 + (1));
i__26127__auto___33448 = G__33449;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__33444){
var map__33445 = p__33444;
var map__33445__$1 = ((((!((map__33445 == null)))?((((map__33445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33445):map__33445);
var m = map__33445__$1;
var gen_line = cljs.core.get.call(null,map__33445__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33443){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33443));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__26037__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_33452_33454 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33453_33455 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_33452_33454,_STAR_print_fn_STAR_33453_33455,sb__26037__auto__){
return (function (x__26038__auto__){
return sb__26037__auto__.append(x__26038__auto__);
});})(_STAR_print_newline_STAR_33452_33454,_STAR_print_fn_STAR_33453_33455,sb__26037__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33453_33455;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33452_33454;
}
return [cljs.core.str(sb__26037__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__25976__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25980__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25980__auto__,method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,"(",x,")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__33456 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__33456,(0),null);
var flags = cljs.core.nth.call(null,vec__33456,(1),null);
var pattern = cljs.core.nth.call(null,vec__33456,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__33460){
var map__33461 = p__33460;
var map__33461__$1 = ((((!((map__33461 == null)))?((((map__33461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33461):map__33461);
var arg = map__33461__$1;
var info = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__33461__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__25051__auto__ = js_module_name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__33463 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__33463);
} else {
return G__33463;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__33464){
var map__33465 = p__33464;
var map__33465__$1 = ((((!((map__33465 == null)))?((((map__33465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33465):map__33465);
var arg = map__33465__$1;
var env = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__33465__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33467 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33467__$1 = ((((!((map__33467 == null)))?((((map__33467.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33467.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33467):map__33467);
var name = cljs.core.get.call(null,map__33467__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__33469){
var map__33470 = p__33469;
var map__33470__$1 = ((((!((map__33470 == null)))?((((map__33470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33470):map__33470);
var expr = cljs.core.get.call(null,map__33470__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__33470__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__33470__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__33472_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33472_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33473){
var map__33474 = p__33473;
var map__33474__$1 = ((((!((map__33474 == null)))?((((map__33474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33474):map__33474);
var env = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__33474__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__33476){
var map__33477 = p__33476;
var map__33477__$1 = ((((!((map__33477 == null)))?((((map__33477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33477):map__33477);
var items = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33477__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33479){
var map__33480 = p__33479;
var map__33480__$1 = ((((!((map__33480 == null)))?((((map__33480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33480):map__33480);
var items = cljs.core.get.call(null,map__33480__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33480__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_33482 = cljs.core.count.call(null,items);
if((cnt_33482 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_33482,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__33483_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33483_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33484){
var map__33485 = p__33484;
var map__33485__$1 = ((((!((map__33485 == null)))?((((map__33485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33485):map__33485);
var items = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__33487){
var map__33488 = p__33487;
var map__33488__$1 = ((((!((map__33488 == null)))?((((map__33488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33488):map__33488);
var items = cljs.core.get.call(null,map__33488__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__33488__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__33488__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___33506 = cljs.core.seq.call(null,items);
if(temp__4657__auto___33506){
var items_33507__$1 = temp__4657__auto___33506;
var vec__33490_33508 = items_33507__$1;
var seq__33491_33509 = cljs.core.seq.call(null,vec__33490_33508);
var first__33492_33510 = cljs.core.first.call(null,seq__33491_33509);
var seq__33491_33511__$1 = cljs.core.next.call(null,seq__33491_33509);
var vec__33493_33512 = first__33492_33510;
var k_33513 = cljs.core.nth.call(null,vec__33493_33512,(0),null);
var v_33514 = cljs.core.nth.call(null,vec__33493_33512,(1),null);
var r_33515 = seq__33491_33511__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_33513),"\": ",v_33514);

var seq__33496_33516 = cljs.core.seq.call(null,r_33515);
var chunk__33497_33517 = null;
var count__33498_33518 = (0);
var i__33499_33519 = (0);
while(true){
if((i__33499_33519 < count__33498_33518)){
var vec__33500_33520 = cljs.core._nth.call(null,chunk__33497_33517,i__33499_33519);
var k_33521__$1 = cljs.core.nth.call(null,vec__33500_33520,(0),null);
var v_33522__$1 = cljs.core.nth.call(null,vec__33500_33520,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33521__$1),"\": ",v_33522__$1);

var G__33523 = seq__33496_33516;
var G__33524 = chunk__33497_33517;
var G__33525 = count__33498_33518;
var G__33526 = (i__33499_33519 + (1));
seq__33496_33516 = G__33523;
chunk__33497_33517 = G__33524;
count__33498_33518 = G__33525;
i__33499_33519 = G__33526;
continue;
} else {
var temp__4657__auto___33527__$1 = cljs.core.seq.call(null,seq__33496_33516);
if(temp__4657__auto___33527__$1){
var seq__33496_33528__$1 = temp__4657__auto___33527__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33496_33528__$1)){
var c__25862__auto___33529 = cljs.core.chunk_first.call(null,seq__33496_33528__$1);
var G__33530 = cljs.core.chunk_rest.call(null,seq__33496_33528__$1);
var G__33531 = c__25862__auto___33529;
var G__33532 = cljs.core.count.call(null,c__25862__auto___33529);
var G__33533 = (0);
seq__33496_33516 = G__33530;
chunk__33497_33517 = G__33531;
count__33498_33518 = G__33532;
i__33499_33519 = G__33533;
continue;
} else {
var vec__33503_33534 = cljs.core.first.call(null,seq__33496_33528__$1);
var k_33535__$1 = cljs.core.nth.call(null,vec__33503_33534,(0),null);
var v_33536__$1 = cljs.core.nth.call(null,vec__33503_33534,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_33535__$1),"\": ",v_33536__$1);

var G__33537 = cljs.core.next.call(null,seq__33496_33528__$1);
var G__33538 = null;
var G__33539 = (0);
var G__33540 = (0);
seq__33496_33516 = G__33537;
chunk__33497_33517 = G__33538;
count__33498_33518 = G__33539;
i__33499_33519 = G__33540;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__33541){
var map__33542 = p__33541;
var map__33542__$1 = ((((!((map__33542 == null)))?((((map__33542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33542):map__33542);
var form = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__33544){
var map__33547 = p__33544;
var map__33547__$1 = ((((!((map__33547 == null)))?((((map__33547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33547):map__33547);
var op = cljs.core.get.call(null,map__33547__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33547__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__25039__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__25039__auto__){
var and__25039__auto____$1 = form;
if(cljs.core.truth_(and__25039__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__33549){
var map__33552 = p__33549;
var map__33552__$1 = ((((!((map__33552 == null)))?((((map__33552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33552):map__33552);
var op = cljs.core.get.call(null,map__33552__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__33552__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__25051__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33554){
var map__33555 = p__33554;
var map__33555__$1 = ((((!((map__33555 == null)))?((((map__33555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33555):map__33555);
var test = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__25051__auto__ = unchecked;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__33557){
var map__33558 = p__33557;
var map__33558__$1 = ((((!((map__33558 == null)))?((((map__33558.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33558.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33558):map__33558);
var v = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__33558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__33560_33578 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__33561_33579 = null;
var count__33562_33580 = (0);
var i__33563_33581 = (0);
while(true){
if((i__33563_33581 < count__33562_33580)){
var vec__33564_33582 = cljs.core._nth.call(null,chunk__33561_33579,i__33563_33581);
var ts_33583 = cljs.core.nth.call(null,vec__33564_33582,(0),null);
var then_33584 = cljs.core.nth.call(null,vec__33564_33582,(1),null);
var seq__33567_33585 = cljs.core.seq.call(null,ts_33583);
var chunk__33568_33586 = null;
var count__33569_33587 = (0);
var i__33570_33588 = (0);
while(true){
if((i__33570_33588 < count__33569_33587)){
var test_33589 = cljs.core._nth.call(null,chunk__33568_33586,i__33570_33588);
cljs.compiler.emitln.call(null,"case ",test_33589,":");

var G__33590 = seq__33567_33585;
var G__33591 = chunk__33568_33586;
var G__33592 = count__33569_33587;
var G__33593 = (i__33570_33588 + (1));
seq__33567_33585 = G__33590;
chunk__33568_33586 = G__33591;
count__33569_33587 = G__33592;
i__33570_33588 = G__33593;
continue;
} else {
var temp__4657__auto___33594 = cljs.core.seq.call(null,seq__33567_33585);
if(temp__4657__auto___33594){
var seq__33567_33595__$1 = temp__4657__auto___33594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33567_33595__$1)){
var c__25862__auto___33596 = cljs.core.chunk_first.call(null,seq__33567_33595__$1);
var G__33597 = cljs.core.chunk_rest.call(null,seq__33567_33595__$1);
var G__33598 = c__25862__auto___33596;
var G__33599 = cljs.core.count.call(null,c__25862__auto___33596);
var G__33600 = (0);
seq__33567_33585 = G__33597;
chunk__33568_33586 = G__33598;
count__33569_33587 = G__33599;
i__33570_33588 = G__33600;
continue;
} else {
var test_33601 = cljs.core.first.call(null,seq__33567_33595__$1);
cljs.compiler.emitln.call(null,"case ",test_33601,":");

var G__33602 = cljs.core.next.call(null,seq__33567_33595__$1);
var G__33603 = null;
var G__33604 = (0);
var G__33605 = (0);
seq__33567_33585 = G__33602;
chunk__33568_33586 = G__33603;
count__33569_33587 = G__33604;
i__33570_33588 = G__33605;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33584);
} else {
cljs.compiler.emitln.call(null,then_33584);
}

cljs.compiler.emitln.call(null,"break;");

var G__33606 = seq__33560_33578;
var G__33607 = chunk__33561_33579;
var G__33608 = count__33562_33580;
var G__33609 = (i__33563_33581 + (1));
seq__33560_33578 = G__33606;
chunk__33561_33579 = G__33607;
count__33562_33580 = G__33608;
i__33563_33581 = G__33609;
continue;
} else {
var temp__4657__auto___33610 = cljs.core.seq.call(null,seq__33560_33578);
if(temp__4657__auto___33610){
var seq__33560_33611__$1 = temp__4657__auto___33610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33560_33611__$1)){
var c__25862__auto___33612 = cljs.core.chunk_first.call(null,seq__33560_33611__$1);
var G__33613 = cljs.core.chunk_rest.call(null,seq__33560_33611__$1);
var G__33614 = c__25862__auto___33612;
var G__33615 = cljs.core.count.call(null,c__25862__auto___33612);
var G__33616 = (0);
seq__33560_33578 = G__33613;
chunk__33561_33579 = G__33614;
count__33562_33580 = G__33615;
i__33563_33581 = G__33616;
continue;
} else {
var vec__33571_33617 = cljs.core.first.call(null,seq__33560_33611__$1);
var ts_33618 = cljs.core.nth.call(null,vec__33571_33617,(0),null);
var then_33619 = cljs.core.nth.call(null,vec__33571_33617,(1),null);
var seq__33574_33620 = cljs.core.seq.call(null,ts_33618);
var chunk__33575_33621 = null;
var count__33576_33622 = (0);
var i__33577_33623 = (0);
while(true){
if((i__33577_33623 < count__33576_33622)){
var test_33624 = cljs.core._nth.call(null,chunk__33575_33621,i__33577_33623);
cljs.compiler.emitln.call(null,"case ",test_33624,":");

var G__33625 = seq__33574_33620;
var G__33626 = chunk__33575_33621;
var G__33627 = count__33576_33622;
var G__33628 = (i__33577_33623 + (1));
seq__33574_33620 = G__33625;
chunk__33575_33621 = G__33626;
count__33576_33622 = G__33627;
i__33577_33623 = G__33628;
continue;
} else {
var temp__4657__auto___33629__$1 = cljs.core.seq.call(null,seq__33574_33620);
if(temp__4657__auto___33629__$1){
var seq__33574_33630__$1 = temp__4657__auto___33629__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33574_33630__$1)){
var c__25862__auto___33631 = cljs.core.chunk_first.call(null,seq__33574_33630__$1);
var G__33632 = cljs.core.chunk_rest.call(null,seq__33574_33630__$1);
var G__33633 = c__25862__auto___33631;
var G__33634 = cljs.core.count.call(null,c__25862__auto___33631);
var G__33635 = (0);
seq__33574_33620 = G__33632;
chunk__33575_33621 = G__33633;
count__33576_33622 = G__33634;
i__33577_33623 = G__33635;
continue;
} else {
var test_33636 = cljs.core.first.call(null,seq__33574_33630__$1);
cljs.compiler.emitln.call(null,"case ",test_33636,":");

var G__33637 = cljs.core.next.call(null,seq__33574_33630__$1);
var G__33638 = null;
var G__33639 = (0);
var G__33640 = (0);
seq__33574_33620 = G__33637;
chunk__33575_33621 = G__33638;
count__33576_33622 = G__33639;
i__33577_33623 = G__33640;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_33619);
} else {
cljs.compiler.emitln.call(null,then_33619);
}

cljs.compiler.emitln.call(null,"break;");

var G__33641 = cljs.core.next.call(null,seq__33560_33611__$1);
var G__33642 = null;
var G__33643 = (0);
var G__33644 = (0);
seq__33560_33578 = G__33641;
chunk__33561_33579 = G__33642;
count__33562_33580 = G__33643;
i__33563_33581 = G__33644;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33645){
var map__33646 = p__33645;
var map__33646__$1 = ((((!((map__33646 == null)))?((((map__33646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33646):map__33646);
var throw$ = cljs.core.get.call(null,map__33646__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__33646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33653 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__33653,(0),null);
var rstr = cljs.core.nth.call(null,vec__33653,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__33653,fstr,rstr,ret_t,axstr){
return (function (p1__33648_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__33648_SHARP_);
});})(idx,vec__33653,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__33656 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__33656),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__33656;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__33657_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__33657_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__33664 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33665 = cljs.core.seq.call(null,vec__33664);
var first__33666 = cljs.core.first.call(null,seq__33665);
var seq__33665__$1 = cljs.core.next.call(null,seq__33665);
var p = first__33666;
var first__33666__$1 = cljs.core.first.call(null,seq__33665__$1);
var seq__33665__$2 = cljs.core.next.call(null,seq__33665__$1);
var ts = first__33666__$1;
var first__33666__$2 = cljs.core.first.call(null,seq__33665__$2);
var seq__33665__$3 = cljs.core.next.call(null,seq__33665__$2);
var n = first__33666__$2;
var xs = seq__33665__$3;
if(cljs.core.truth_((function (){var and__25039__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__25039__auto__){
var and__25039__auto____$1 = ts;
if(cljs.core.truth_(and__25039__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__33667 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__33668 = cljs.core.seq.call(null,vec__33667);
var first__33669 = cljs.core.first.call(null,seq__33668);
var seq__33668__$1 = cljs.core.next.call(null,seq__33668);
var p = first__33669;
var first__33669__$1 = cljs.core.first.call(null,seq__33668__$1);
var seq__33668__$2 = cljs.core.next.call(null,seq__33668__$1);
var ts = first__33669__$1;
var xs = seq__33668__$2;
if(cljs.core.truth_((function (){var and__25039__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__25039__auto__){
var and__25039__auto____$1 = ts;
if(cljs.core.truth_(and__25039__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args33671 = [];
var len__26126__auto___33706 = arguments.length;
var i__26127__auto___33707 = (0);
while(true){
if((i__26127__auto___33707 < len__26126__auto___33706)){
args33671.push((arguments[i__26127__auto___33707]));

var G__33708 = (i__26127__auto___33707 + (1));
i__26127__auto___33707 = G__33708;
continue;
} else {
}
break;
}

var G__33673 = args33671.length;
switch (G__33673) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33671.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__33695 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__33670_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__33670_SHARP_);
} else {
return p1__33670_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__33696 = cljs.core.seq.call(null,vec__33695);
var first__33697 = cljs.core.first.call(null,seq__33696);
var seq__33696__$1 = cljs.core.next.call(null,seq__33696);
var x = first__33697;
var ys = seq__33696__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__33698 = cljs.core.seq.call(null,ys);
var chunk__33699 = null;
var count__33700 = (0);
var i__33701 = (0);
while(true){
if((i__33701 < count__33700)){
var next_line = cljs.core._nth.call(null,chunk__33699,i__33701);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33710 = seq__33698;
var G__33711 = chunk__33699;
var G__33712 = count__33700;
var G__33713 = (i__33701 + (1));
seq__33698 = G__33710;
chunk__33699 = G__33711;
count__33700 = G__33712;
i__33701 = G__33713;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33698);
if(temp__4657__auto__){
var seq__33698__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33698__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__33698__$1);
var G__33714 = cljs.core.chunk_rest.call(null,seq__33698__$1);
var G__33715 = c__25862__auto__;
var G__33716 = cljs.core.count.call(null,c__25862__auto__);
var G__33717 = (0);
seq__33698 = G__33714;
chunk__33699 = G__33715;
count__33700 = G__33716;
i__33701 = G__33717;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__33698__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__33718 = cljs.core.next.call(null,seq__33698__$1);
var G__33719 = null;
var G__33720 = (0);
var G__33721 = (0);
seq__33698 = G__33718;
chunk__33699 = G__33719;
count__33700 = G__33720;
i__33701 = G__33721;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__33702_33722 = cljs.core.seq.call(null,docs__$2);
var chunk__33703_33723 = null;
var count__33704_33724 = (0);
var i__33705_33725 = (0);
while(true){
if((i__33705_33725 < count__33704_33724)){
var e_33726 = cljs.core._nth.call(null,chunk__33703_33723,i__33705_33725);
if(cljs.core.truth_(e_33726)){
print_comment_lines.call(null,e_33726);
} else {
}

var G__33727 = seq__33702_33722;
var G__33728 = chunk__33703_33723;
var G__33729 = count__33704_33724;
var G__33730 = (i__33705_33725 + (1));
seq__33702_33722 = G__33727;
chunk__33703_33723 = G__33728;
count__33704_33724 = G__33729;
i__33705_33725 = G__33730;
continue;
} else {
var temp__4657__auto___33731 = cljs.core.seq.call(null,seq__33702_33722);
if(temp__4657__auto___33731){
var seq__33702_33732__$1 = temp__4657__auto___33731;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33702_33732__$1)){
var c__25862__auto___33733 = cljs.core.chunk_first.call(null,seq__33702_33732__$1);
var G__33734 = cljs.core.chunk_rest.call(null,seq__33702_33732__$1);
var G__33735 = c__25862__auto___33733;
var G__33736 = cljs.core.count.call(null,c__25862__auto___33733);
var G__33737 = (0);
seq__33702_33722 = G__33734;
chunk__33703_33723 = G__33735;
count__33704_33724 = G__33736;
i__33705_33725 = G__33737;
continue;
} else {
var e_33738 = cljs.core.first.call(null,seq__33702_33732__$1);
if(cljs.core.truth_(e_33738)){
print_comment_lines.call(null,e_33738);
} else {
}

var G__33739 = cljs.core.next.call(null,seq__33702_33732__$1);
var G__33740 = null;
var G__33741 = (0);
var G__33742 = (0);
seq__33702_33722 = G__33739;
chunk__33703_33723 = G__33740;
count__33704_33724 = G__33741;
i__33705_33725 = G__33742;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__25039__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__33744_SHARP_){
return goog.string.startsWith(p1__33744_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = opts;
if(cljs.core.truth_(and__25039__auto____$1)){
var and__25039__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__25039__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__25039__auto____$2;
}
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33745){
var map__33746 = p__33745;
var map__33746__$1 = ((((!((map__33746 == null)))?((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var name = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__25051__auto__ = init;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4655__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4655__auto__)){
var define = temp__4655__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__25039__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__25039__auto__)){
return test;
} else {
return and__25039__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33748){
var map__33769 = p__33748;
var map__33769__$1 = ((((!((map__33769 == null)))?((((map__33769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33769):map__33769);
var name = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__33769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__33771_33789 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__33772_33790 = null;
var count__33773_33791 = (0);
var i__33774_33792 = (0);
while(true){
if((i__33774_33792 < count__33773_33791)){
var vec__33775_33793 = cljs.core._nth.call(null,chunk__33772_33790,i__33774_33792);
var i_33794 = cljs.core.nth.call(null,vec__33775_33793,(0),null);
var param_33795 = cljs.core.nth.call(null,vec__33775_33793,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33795);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__33796 = seq__33771_33789;
var G__33797 = chunk__33772_33790;
var G__33798 = count__33773_33791;
var G__33799 = (i__33774_33792 + (1));
seq__33771_33789 = G__33796;
chunk__33772_33790 = G__33797;
count__33773_33791 = G__33798;
i__33774_33792 = G__33799;
continue;
} else {
var temp__4657__auto___33800 = cljs.core.seq.call(null,seq__33771_33789);
if(temp__4657__auto___33800){
var seq__33771_33801__$1 = temp__4657__auto___33800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33771_33801__$1)){
var c__25862__auto___33802 = cljs.core.chunk_first.call(null,seq__33771_33801__$1);
var G__33803 = cljs.core.chunk_rest.call(null,seq__33771_33801__$1);
var G__33804 = c__25862__auto___33802;
var G__33805 = cljs.core.count.call(null,c__25862__auto___33802);
var G__33806 = (0);
seq__33771_33789 = G__33803;
chunk__33772_33790 = G__33804;
count__33773_33791 = G__33805;
i__33774_33792 = G__33806;
continue;
} else {
var vec__33778_33807 = cljs.core.first.call(null,seq__33771_33801__$1);
var i_33808 = cljs.core.nth.call(null,vec__33778_33807,(0),null);
var param_33809 = cljs.core.nth.call(null,vec__33778_33807,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_33809);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__33810 = cljs.core.next.call(null,seq__33771_33801__$1);
var G__33811 = null;
var G__33812 = (0);
var G__33813 = (0);
seq__33771_33789 = G__33810;
chunk__33772_33790 = G__33811;
count__33773_33791 = G__33812;
i__33774_33792 = G__33813;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__33781_33814 = cljs.core.seq.call(null,params);
var chunk__33782_33815 = null;
var count__33783_33816 = (0);
var i__33784_33817 = (0);
while(true){
if((i__33784_33817 < count__33783_33816)){
var param_33818 = cljs.core._nth.call(null,chunk__33782_33815,i__33784_33817);
cljs.compiler.emit.call(null,param_33818);

if(cljs.core._EQ_.call(null,param_33818,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33819 = seq__33781_33814;
var G__33820 = chunk__33782_33815;
var G__33821 = count__33783_33816;
var G__33822 = (i__33784_33817 + (1));
seq__33781_33814 = G__33819;
chunk__33782_33815 = G__33820;
count__33783_33816 = G__33821;
i__33784_33817 = G__33822;
continue;
} else {
var temp__4657__auto___33823 = cljs.core.seq.call(null,seq__33781_33814);
if(temp__4657__auto___33823){
var seq__33781_33824__$1 = temp__4657__auto___33823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33781_33824__$1)){
var c__25862__auto___33825 = cljs.core.chunk_first.call(null,seq__33781_33824__$1);
var G__33826 = cljs.core.chunk_rest.call(null,seq__33781_33824__$1);
var G__33827 = c__25862__auto___33825;
var G__33828 = cljs.core.count.call(null,c__25862__auto___33825);
var G__33829 = (0);
seq__33781_33814 = G__33826;
chunk__33782_33815 = G__33827;
count__33783_33816 = G__33828;
i__33784_33817 = G__33829;
continue;
} else {
var param_33830 = cljs.core.first.call(null,seq__33781_33824__$1);
cljs.compiler.emit.call(null,param_33830);

if(cljs.core._EQ_.call(null,param_33830,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33831 = cljs.core.next.call(null,seq__33781_33824__$1);
var G__33832 = null;
var G__33833 = (0);
var G__33834 = (0);
seq__33781_33814 = G__33831;
chunk__33782_33815 = G__33832;
count__33783_33816 = G__33833;
i__33784_33817 = G__33834;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__33785_33835 = cljs.core.seq.call(null,params);
var chunk__33786_33836 = null;
var count__33787_33837 = (0);
var i__33788_33838 = (0);
while(true){
if((i__33788_33838 < count__33787_33837)){
var param_33839 = cljs.core._nth.call(null,chunk__33786_33836,i__33788_33838);
cljs.compiler.emit.call(null,param_33839);

if(cljs.core._EQ_.call(null,param_33839,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33840 = seq__33785_33835;
var G__33841 = chunk__33786_33836;
var G__33842 = count__33787_33837;
var G__33843 = (i__33788_33838 + (1));
seq__33785_33835 = G__33840;
chunk__33786_33836 = G__33841;
count__33787_33837 = G__33842;
i__33788_33838 = G__33843;
continue;
} else {
var temp__4657__auto___33844 = cljs.core.seq.call(null,seq__33785_33835);
if(temp__4657__auto___33844){
var seq__33785_33845__$1 = temp__4657__auto___33844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33785_33845__$1)){
var c__25862__auto___33846 = cljs.core.chunk_first.call(null,seq__33785_33845__$1);
var G__33847 = cljs.core.chunk_rest.call(null,seq__33785_33845__$1);
var G__33848 = c__25862__auto___33846;
var G__33849 = cljs.core.count.call(null,c__25862__auto___33846);
var G__33850 = (0);
seq__33785_33835 = G__33847;
chunk__33786_33836 = G__33848;
count__33787_33837 = G__33849;
i__33788_33838 = G__33850;
continue;
} else {
var param_33851 = cljs.core.first.call(null,seq__33785_33845__$1);
cljs.compiler.emit.call(null,param_33851);

if(cljs.core._EQ_.call(null,param_33851,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33852 = cljs.core.next.call(null,seq__33785_33845__$1);
var G__33853 = null;
var G__33854 = (0);
var G__33855 = (0);
seq__33785_33835 = G__33852;
chunk__33786_33836 = G__33853;
count__33787_33837 = G__33854;
i__33788_33838 = G__33855;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__33860 = cljs.core.seq.call(null,params);
var chunk__33861 = null;
var count__33862 = (0);
var i__33863 = (0);
while(true){
if((i__33863 < count__33862)){
var param = cljs.core._nth.call(null,chunk__33861,i__33863);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33864 = seq__33860;
var G__33865 = chunk__33861;
var G__33866 = count__33862;
var G__33867 = (i__33863 + (1));
seq__33860 = G__33864;
chunk__33861 = G__33865;
count__33862 = G__33866;
i__33863 = G__33867;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33860);
if(temp__4657__auto__){
var seq__33860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33860__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__33860__$1);
var G__33868 = cljs.core.chunk_rest.call(null,seq__33860__$1);
var G__33869 = c__25862__auto__;
var G__33870 = cljs.core.count.call(null,c__25862__auto__);
var G__33871 = (0);
seq__33860 = G__33868;
chunk__33861 = G__33869;
count__33862 = G__33870;
i__33863 = G__33871;
continue;
} else {
var param = cljs.core.first.call(null,seq__33860__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33872 = cljs.core.next.call(null,seq__33860__$1);
var G__33873 = null;
var G__33874 = (0);
var G__33875 = (0);
seq__33860 = G__33872;
chunk__33861 = G__33873;
count__33862 = G__33874;
i__33863 = G__33875;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33876){
var map__33879 = p__33876;
var map__33879__$1 = ((((!((map__33879 == null)))?((((map__33879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33879):map__33879);
var type = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__33879__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33881){
var map__33892 = p__33881;
var map__33892__$1 = ((((!((map__33892 == null)))?((((map__33892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33892):map__33892);
var f = map__33892__$1;
var type = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__33892__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_33902__$1 = (function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33903 = cljs.compiler.munge.call(null,name_33902__$1);
var delegate_name_33904 = [cljs.core.str(mname_33903),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_33904," = function (");

var seq__33894_33905 = cljs.core.seq.call(null,params);
var chunk__33895_33906 = null;
var count__33896_33907 = (0);
var i__33897_33908 = (0);
while(true){
if((i__33897_33908 < count__33896_33907)){
var param_33909 = cljs.core._nth.call(null,chunk__33895_33906,i__33897_33908);
cljs.compiler.emit.call(null,param_33909);

if(cljs.core._EQ_.call(null,param_33909,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33910 = seq__33894_33905;
var G__33911 = chunk__33895_33906;
var G__33912 = count__33896_33907;
var G__33913 = (i__33897_33908 + (1));
seq__33894_33905 = G__33910;
chunk__33895_33906 = G__33911;
count__33896_33907 = G__33912;
i__33897_33908 = G__33913;
continue;
} else {
var temp__4657__auto___33914 = cljs.core.seq.call(null,seq__33894_33905);
if(temp__4657__auto___33914){
var seq__33894_33915__$1 = temp__4657__auto___33914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33894_33915__$1)){
var c__25862__auto___33916 = cljs.core.chunk_first.call(null,seq__33894_33915__$1);
var G__33917 = cljs.core.chunk_rest.call(null,seq__33894_33915__$1);
var G__33918 = c__25862__auto___33916;
var G__33919 = cljs.core.count.call(null,c__25862__auto___33916);
var G__33920 = (0);
seq__33894_33905 = G__33917;
chunk__33895_33906 = G__33918;
count__33896_33907 = G__33919;
i__33897_33908 = G__33920;
continue;
} else {
var param_33921 = cljs.core.first.call(null,seq__33894_33915__$1);
cljs.compiler.emit.call(null,param_33921);

if(cljs.core._EQ_.call(null,param_33921,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33922 = cljs.core.next.call(null,seq__33894_33915__$1);
var G__33923 = null;
var G__33924 = (0);
var G__33925 = (0);
seq__33894_33905 = G__33922;
chunk__33895_33906 = G__33923;
count__33896_33907 = G__33924;
i__33897_33908 = G__33925;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_33903," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_33926 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_33926,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_33904,".call(this,");

var seq__33898_33927 = cljs.core.seq.call(null,params);
var chunk__33899_33928 = null;
var count__33900_33929 = (0);
var i__33901_33930 = (0);
while(true){
if((i__33901_33930 < count__33900_33929)){
var param_33931 = cljs.core._nth.call(null,chunk__33899_33928,i__33901_33930);
cljs.compiler.emit.call(null,param_33931);

if(cljs.core._EQ_.call(null,param_33931,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33932 = seq__33898_33927;
var G__33933 = chunk__33899_33928;
var G__33934 = count__33900_33929;
var G__33935 = (i__33901_33930 + (1));
seq__33898_33927 = G__33932;
chunk__33899_33928 = G__33933;
count__33900_33929 = G__33934;
i__33901_33930 = G__33935;
continue;
} else {
var temp__4657__auto___33936 = cljs.core.seq.call(null,seq__33898_33927);
if(temp__4657__auto___33936){
var seq__33898_33937__$1 = temp__4657__auto___33936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33898_33937__$1)){
var c__25862__auto___33938 = cljs.core.chunk_first.call(null,seq__33898_33937__$1);
var G__33939 = cljs.core.chunk_rest.call(null,seq__33898_33937__$1);
var G__33940 = c__25862__auto___33938;
var G__33941 = cljs.core.count.call(null,c__25862__auto___33938);
var G__33942 = (0);
seq__33898_33927 = G__33939;
chunk__33899_33928 = G__33940;
count__33900_33929 = G__33941;
i__33901_33930 = G__33942;
continue;
} else {
var param_33943 = cljs.core.first.call(null,seq__33898_33937__$1);
cljs.compiler.emit.call(null,param_33943);

if(cljs.core._EQ_.call(null,param_33943,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__33944 = cljs.core.next.call(null,seq__33898_33937__$1);
var G__33945 = null;
var G__33946 = (0);
var G__33947 = (0);
seq__33898_33927 = G__33944;
chunk__33899_33928 = G__33945;
count__33900_33929 = G__33946;
i__33901_33930 = G__33947;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_33903,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_33903,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_33902__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_33903,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_33904,";");

cljs.compiler.emitln.call(null,"return ",mname_33903,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33951){
var map__33952 = p__33951;
var map__33952__$1 = ((((!((map__33952 == null)))?((((map__33952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33952):map__33952);
var name = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__33952__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33948_SHARP_){
var and__25039__auto__ = p1__33948_SHARP_;
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33948_SHARP_));
} else {
return and__25039__auto__;
}
});})(map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_33987__$1 = (function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_33988 = cljs.compiler.munge.call(null,name_33987__$1);
var maxparams_33989 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_33990 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_33987__$1,mname_33988,maxparams_33989,loop_locals,map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_33988),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_33987__$1,mname_33988,maxparams_33989,loop_locals,map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_33991 = cljs.core.sort_by.call(null,((function (name_33987__$1,mname_33988,maxparams_33989,mmap_33990,loop_locals,map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33949_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33949_SHARP_)));
});})(name_33987__$1,mname_33988,maxparams_33989,mmap_33990,loop_locals,map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_33990));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_33988," = null;");

var seq__33954_33992 = cljs.core.seq.call(null,ms_33991);
var chunk__33955_33993 = null;
var count__33956_33994 = (0);
var i__33957_33995 = (0);
while(true){
if((i__33957_33995 < count__33956_33994)){
var vec__33958_33996 = cljs.core._nth.call(null,chunk__33955_33993,i__33957_33995);
var n_33997 = cljs.core.nth.call(null,vec__33958_33996,(0),null);
var meth_33998 = cljs.core.nth.call(null,vec__33958_33996,(1),null);
cljs.compiler.emits.call(null,"var ",n_33997," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_33998))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_33998);
} else {
cljs.compiler.emit_fn_method.call(null,meth_33998);
}

cljs.compiler.emitln.call(null,";");

var G__33999 = seq__33954_33992;
var G__34000 = chunk__33955_33993;
var G__34001 = count__33956_33994;
var G__34002 = (i__33957_33995 + (1));
seq__33954_33992 = G__33999;
chunk__33955_33993 = G__34000;
count__33956_33994 = G__34001;
i__33957_33995 = G__34002;
continue;
} else {
var temp__4657__auto___34003 = cljs.core.seq.call(null,seq__33954_33992);
if(temp__4657__auto___34003){
var seq__33954_34004__$1 = temp__4657__auto___34003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33954_34004__$1)){
var c__25862__auto___34005 = cljs.core.chunk_first.call(null,seq__33954_34004__$1);
var G__34006 = cljs.core.chunk_rest.call(null,seq__33954_34004__$1);
var G__34007 = c__25862__auto___34005;
var G__34008 = cljs.core.count.call(null,c__25862__auto___34005);
var G__34009 = (0);
seq__33954_33992 = G__34006;
chunk__33955_33993 = G__34007;
count__33956_33994 = G__34008;
i__33957_33995 = G__34009;
continue;
} else {
var vec__33961_34010 = cljs.core.first.call(null,seq__33954_34004__$1);
var n_34011 = cljs.core.nth.call(null,vec__33961_34010,(0),null);
var meth_34012 = cljs.core.nth.call(null,vec__33961_34010,(1),null);
cljs.compiler.emits.call(null,"var ",n_34011," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34012))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_34012);
} else {
cljs.compiler.emit_fn_method.call(null,meth_34012);
}

cljs.compiler.emitln.call(null,";");

var G__34013 = cljs.core.next.call(null,seq__33954_34004__$1);
var G__34014 = null;
var G__34015 = (0);
var G__34016 = (0);
seq__33954_33992 = G__34013;
chunk__33955_33993 = G__34014;
count__33956_33994 = G__34015;
i__33957_33995 = G__34016;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_33988," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_33989),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_33989)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_33989));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__33964_34017 = cljs.core.seq.call(null,ms_33991);
var chunk__33965_34018 = null;
var count__33966_34019 = (0);
var i__33967_34020 = (0);
while(true){
if((i__33967_34020 < count__33966_34019)){
var vec__33968_34021 = cljs.core._nth.call(null,chunk__33965_34018,i__33967_34020);
var n_34022 = cljs.core.nth.call(null,vec__33968_34021,(0),null);
var meth_34023 = cljs.core.nth.call(null,vec__33968_34021,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34023))){
cljs.compiler.emitln.call(null,"default:");

var restarg_34024 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_34024," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_34025 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_34024," = new cljs.core.IndexedSeq(",a_34025,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_34022,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33989)),(((cljs.core.count.call(null,maxparams_33989) > (1)))?", ":null),restarg_34024,");");
} else {
var pcnt_34026 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34023));
cljs.compiler.emitln.call(null,"case ",pcnt_34026,":");

cljs.compiler.emitln.call(null,"return ",n_34022,".call(this",(((pcnt_34026 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_34026,maxparams_33989));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),",")),");");
}

var G__34027 = seq__33964_34017;
var G__34028 = chunk__33965_34018;
var G__34029 = count__33966_34019;
var G__34030 = (i__33967_34020 + (1));
seq__33964_34017 = G__34027;
chunk__33965_34018 = G__34028;
count__33966_34019 = G__34029;
i__33967_34020 = G__34030;
continue;
} else {
var temp__4657__auto___34031 = cljs.core.seq.call(null,seq__33964_34017);
if(temp__4657__auto___34031){
var seq__33964_34032__$1 = temp__4657__auto___34031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33964_34032__$1)){
var c__25862__auto___34033 = cljs.core.chunk_first.call(null,seq__33964_34032__$1);
var G__34034 = cljs.core.chunk_rest.call(null,seq__33964_34032__$1);
var G__34035 = c__25862__auto___34033;
var G__34036 = cljs.core.count.call(null,c__25862__auto___34033);
var G__34037 = (0);
seq__33964_34017 = G__34034;
chunk__33965_34018 = G__34035;
count__33966_34019 = G__34036;
i__33967_34020 = G__34037;
continue;
} else {
var vec__33971_34038 = cljs.core.first.call(null,seq__33964_34032__$1);
var n_34039 = cljs.core.nth.call(null,vec__33971_34038,(0),null);
var meth_34040 = cljs.core.nth.call(null,vec__33971_34038,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34040))){
cljs.compiler.emitln.call(null,"default:");

var restarg_34041 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_34041," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_34042 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_34041," = new cljs.core.IndexedSeq(",a_34042,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_34039,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_33989)),(((cljs.core.count.call(null,maxparams_33989) > (1)))?", ":null),restarg_34041,");");
} else {
var pcnt_34043 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34040));
cljs.compiler.emitln.call(null,"case ",pcnt_34043,":");

cljs.compiler.emitln.call(null,"return ",n_34039,".call(this",(((pcnt_34043 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_34043,maxparams_33989));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),",")),");");
}

var G__34044 = cljs.core.next.call(null,seq__33964_34032__$1);
var G__34045 = null;
var G__34046 = (0);
var G__34047 = (0);
seq__33964_34017 = G__34044;
chunk__33965_34018 = G__34045;
count__33966_34019 = G__34046;
i__33967_34020 = G__34047;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_33988,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_33988,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_33987__$1,mname_33988,maxparams_33989,mmap_33990,ms_33991,loop_locals,map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__33950_SHARP_){
var vec__33974 = p1__33950_SHARP_;
var n = cljs.core.nth.call(null,vec__33974,(0),null);
var m = cljs.core.nth.call(null,vec__33974,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_33987__$1,mname_33988,maxparams_33989,mmap_33990,ms_33991,loop_locals,map__33952,map__33952__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_33991),".cljs$lang$applyTo;");
} else {
}

var seq__33977_34048 = cljs.core.seq.call(null,ms_33991);
var chunk__33978_34049 = null;
var count__33979_34050 = (0);
var i__33980_34051 = (0);
while(true){
if((i__33980_34051 < count__33979_34050)){
var vec__33981_34052 = cljs.core._nth.call(null,chunk__33978_34049,i__33980_34051);
var n_34053 = cljs.core.nth.call(null,vec__33981_34052,(0),null);
var meth_34054 = cljs.core.nth.call(null,vec__33981_34052,(1),null);
var c_34055 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34054));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34054))){
cljs.compiler.emitln.call(null,mname_33988,".cljs$core$IFn$_invoke$arity$variadic = ",n_34053,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33988,".cljs$core$IFn$_invoke$arity$",c_34055," = ",n_34053,";");
}

var G__34056 = seq__33977_34048;
var G__34057 = chunk__33978_34049;
var G__34058 = count__33979_34050;
var G__34059 = (i__33980_34051 + (1));
seq__33977_34048 = G__34056;
chunk__33978_34049 = G__34057;
count__33979_34050 = G__34058;
i__33980_34051 = G__34059;
continue;
} else {
var temp__4657__auto___34060 = cljs.core.seq.call(null,seq__33977_34048);
if(temp__4657__auto___34060){
var seq__33977_34061__$1 = temp__4657__auto___34060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33977_34061__$1)){
var c__25862__auto___34062 = cljs.core.chunk_first.call(null,seq__33977_34061__$1);
var G__34063 = cljs.core.chunk_rest.call(null,seq__33977_34061__$1);
var G__34064 = c__25862__auto___34062;
var G__34065 = cljs.core.count.call(null,c__25862__auto___34062);
var G__34066 = (0);
seq__33977_34048 = G__34063;
chunk__33978_34049 = G__34064;
count__33979_34050 = G__34065;
i__33980_34051 = G__34066;
continue;
} else {
var vec__33984_34067 = cljs.core.first.call(null,seq__33977_34061__$1);
var n_34068 = cljs.core.nth.call(null,vec__33984_34067,(0),null);
var meth_34069 = cljs.core.nth.call(null,vec__33984_34067,(1),null);
var c_34070 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34069));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_34069))){
cljs.compiler.emitln.call(null,mname_33988,".cljs$core$IFn$_invoke$arity$variadic = ",n_34068,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_33988,".cljs$core$IFn$_invoke$arity$",c_34070," = ",n_34068,";");
}

var G__34071 = cljs.core.next.call(null,seq__33977_34061__$1);
var G__34072 = null;
var G__34073 = (0);
var G__34074 = (0);
seq__33977_34048 = G__34071;
chunk__33978_34049 = G__34072;
count__33979_34050 = G__34073;
i__33980_34051 = G__34074;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_33988,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__34075){
var map__34076 = p__34075;
var map__34076__$1 = ((((!((map__34076 == null)))?((((map__34076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34076):map__34076);
var statements = cljs.core.get.call(null,map__34076__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__34076__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__34076__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__25039__auto__ = statements;
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__25039__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__34078_34082 = cljs.core.seq.call(null,statements);
var chunk__34079_34083 = null;
var count__34080_34084 = (0);
var i__34081_34085 = (0);
while(true){
if((i__34081_34085 < count__34080_34084)){
var s_34086 = cljs.core._nth.call(null,chunk__34079_34083,i__34081_34085);
cljs.compiler.emitln.call(null,s_34086);

var G__34087 = seq__34078_34082;
var G__34088 = chunk__34079_34083;
var G__34089 = count__34080_34084;
var G__34090 = (i__34081_34085 + (1));
seq__34078_34082 = G__34087;
chunk__34079_34083 = G__34088;
count__34080_34084 = G__34089;
i__34081_34085 = G__34090;
continue;
} else {
var temp__4657__auto___34091 = cljs.core.seq.call(null,seq__34078_34082);
if(temp__4657__auto___34091){
var seq__34078_34092__$1 = temp__4657__auto___34091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34078_34092__$1)){
var c__25862__auto___34093 = cljs.core.chunk_first.call(null,seq__34078_34092__$1);
var G__34094 = cljs.core.chunk_rest.call(null,seq__34078_34092__$1);
var G__34095 = c__25862__auto___34093;
var G__34096 = cljs.core.count.call(null,c__25862__auto___34093);
var G__34097 = (0);
seq__34078_34082 = G__34094;
chunk__34079_34083 = G__34095;
count__34080_34084 = G__34096;
i__34081_34085 = G__34097;
continue;
} else {
var s_34098 = cljs.core.first.call(null,seq__34078_34092__$1);
cljs.compiler.emitln.call(null,s_34098);

var G__34099 = cljs.core.next.call(null,seq__34078_34092__$1);
var G__34100 = null;
var G__34101 = (0);
var G__34102 = (0);
seq__34078_34082 = G__34099;
chunk__34079_34083 = G__34100;
count__34080_34084 = G__34101;
i__34081_34085 = G__34102;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__25039__auto__ = statements;
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__25039__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__34103){
var map__34104 = p__34103;
var map__34104__$1 = ((((!((map__34104 == null)))?((((map__34104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34104):map__34104);
var env = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__34104__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__34106,is_loop){
var map__34118 = p__34106;
var map__34118__$1 = ((((!((map__34118 == null)))?((((map__34118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34118):map__34118);
var bindings = cljs.core.get.call(null,map__34118__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__34118__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__34118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_34120_34129 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_34120_34129,context,map__34118,map__34118__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_34120_34129,context,map__34118,map__34118__$1,bindings,expr,env))
,bindings):null));

try{var seq__34121_34130 = cljs.core.seq.call(null,bindings);
var chunk__34122_34131 = null;
var count__34123_34132 = (0);
var i__34124_34133 = (0);
while(true){
if((i__34124_34133 < count__34123_34132)){
var map__34125_34134 = cljs.core._nth.call(null,chunk__34122_34131,i__34124_34133);
var map__34125_34135__$1 = ((((!((map__34125_34134 == null)))?((((map__34125_34134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34125_34134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34125_34134):map__34125_34134);
var binding_34136 = map__34125_34135__$1;
var init_34137 = cljs.core.get.call(null,map__34125_34135__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_34136);

cljs.compiler.emitln.call(null," = ",init_34137,";");

var G__34138 = seq__34121_34130;
var G__34139 = chunk__34122_34131;
var G__34140 = count__34123_34132;
var G__34141 = (i__34124_34133 + (1));
seq__34121_34130 = G__34138;
chunk__34122_34131 = G__34139;
count__34123_34132 = G__34140;
i__34124_34133 = G__34141;
continue;
} else {
var temp__4657__auto___34142 = cljs.core.seq.call(null,seq__34121_34130);
if(temp__4657__auto___34142){
var seq__34121_34143__$1 = temp__4657__auto___34142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34121_34143__$1)){
var c__25862__auto___34144 = cljs.core.chunk_first.call(null,seq__34121_34143__$1);
var G__34145 = cljs.core.chunk_rest.call(null,seq__34121_34143__$1);
var G__34146 = c__25862__auto___34144;
var G__34147 = cljs.core.count.call(null,c__25862__auto___34144);
var G__34148 = (0);
seq__34121_34130 = G__34145;
chunk__34122_34131 = G__34146;
count__34123_34132 = G__34147;
i__34124_34133 = G__34148;
continue;
} else {
var map__34127_34149 = cljs.core.first.call(null,seq__34121_34143__$1);
var map__34127_34150__$1 = ((((!((map__34127_34149 == null)))?((((map__34127_34149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34127_34149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34127_34149):map__34127_34149);
var binding_34151 = map__34127_34150__$1;
var init_34152 = cljs.core.get.call(null,map__34127_34150__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_34151);

cljs.compiler.emitln.call(null," = ",init_34152,";");

var G__34153 = cljs.core.next.call(null,seq__34121_34143__$1);
var G__34154 = null;
var G__34155 = (0);
var G__34156 = (0);
seq__34121_34130 = G__34153;
chunk__34122_34131 = G__34154;
count__34123_34132 = G__34155;
i__34124_34133 = G__34156;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_34120_34129;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__34157){
var map__34158 = p__34157;
var map__34158__$1 = ((((!((map__34158 == null)))?((((map__34158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34158):map__34158);
var frame = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25966__auto___34160 = cljs.core.count.call(null,exprs);
var i_34161 = (0);
while(true){
if((i_34161 < n__25966__auto___34160)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_34161)," = ",exprs.call(null,i_34161),";");

var G__34162 = (i_34161 + (1));
i_34161 = G__34162;
continue;
} else {
}
break;
}

var n__25966__auto___34163 = cljs.core.count.call(null,exprs);
var i_34164 = (0);
while(true){
if((i_34164 < n__25966__auto___34163)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_34164))," = ",temps.call(null,i_34164),";");

var G__34165 = (i_34164 + (1));
i_34164 = G__34165;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__34166){
var map__34167 = p__34166;
var map__34167__$1 = ((((!((map__34167 == null)))?((((map__34167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34167):map__34167);
var bindings = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__34167__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__34169_34177 = cljs.core.seq.call(null,bindings);
var chunk__34170_34178 = null;
var count__34171_34179 = (0);
var i__34172_34180 = (0);
while(true){
if((i__34172_34180 < count__34171_34179)){
var map__34173_34181 = cljs.core._nth.call(null,chunk__34170_34178,i__34172_34180);
var map__34173_34182__$1 = ((((!((map__34173_34181 == null)))?((((map__34173_34181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34173_34181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34173_34181):map__34173_34181);
var binding_34183 = map__34173_34182__$1;
var init_34184 = cljs.core.get.call(null,map__34173_34182__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_34183)," = ",init_34184,";");

var G__34185 = seq__34169_34177;
var G__34186 = chunk__34170_34178;
var G__34187 = count__34171_34179;
var G__34188 = (i__34172_34180 + (1));
seq__34169_34177 = G__34185;
chunk__34170_34178 = G__34186;
count__34171_34179 = G__34187;
i__34172_34180 = G__34188;
continue;
} else {
var temp__4657__auto___34189 = cljs.core.seq.call(null,seq__34169_34177);
if(temp__4657__auto___34189){
var seq__34169_34190__$1 = temp__4657__auto___34189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34169_34190__$1)){
var c__25862__auto___34191 = cljs.core.chunk_first.call(null,seq__34169_34190__$1);
var G__34192 = cljs.core.chunk_rest.call(null,seq__34169_34190__$1);
var G__34193 = c__25862__auto___34191;
var G__34194 = cljs.core.count.call(null,c__25862__auto___34191);
var G__34195 = (0);
seq__34169_34177 = G__34192;
chunk__34170_34178 = G__34193;
count__34171_34179 = G__34194;
i__34172_34180 = G__34195;
continue;
} else {
var map__34175_34196 = cljs.core.first.call(null,seq__34169_34190__$1);
var map__34175_34197__$1 = ((((!((map__34175_34196 == null)))?((((map__34175_34196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34175_34196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34175_34196):map__34175_34196);
var binding_34198 = map__34175_34197__$1;
var init_34199 = cljs.core.get.call(null,map__34175_34197__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_34198)," = ",init_34199,";");

var G__34200 = cljs.core.next.call(null,seq__34169_34190__$1);
var G__34201 = null;
var G__34202 = (0);
var G__34203 = (0);
seq__34169_34177 = G__34200;
chunk__34170_34178 = G__34201;
count__34171_34179 = G__34202;
i__34172_34180 = G__34203;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__34206){
var map__34207 = p__34206;
var map__34207__$1 = ((((!((map__34207 == null)))?((((map__34207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34207):map__34207);
var expr = map__34207__$1;
var f = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34207__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__25039__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__25039__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__25039__auto__ = protocol;
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = tag;
if(cljs.core.truth_(and__25039__auto____$1)){
var or__25051__auto__ = (function (){var and__25039__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__25039__auto____$2)){
var and__25039__auto____$3 = protocol;
if(cljs.core.truth_(and__25039__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__25039__auto____$3;
}
} else {
return and__25039__auto____$2;
}
})();
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
var and__25039__auto____$2 = (function (){var or__25051__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__25051__auto____$1)){
return or__25051__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__25039__auto____$2)){
var or__25051__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__25051__auto____$1){
return or__25051__auto____$1;
} else {
var and__25039__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__25039__auto____$3){
var and__25039__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__25039__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__25039__auto____$4;
}
} else {
return and__25039__auto____$3;
}
}
} else {
return and__25039__auto____$2;
}
}
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__25051__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__25051__auto__){
return or__25051__auto__;
} else {
var temp__4657__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4657__auto__)){
var ns_str = temp__4657__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__34209 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__25039__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__25039__auto__)){
return (arity > mfa);
} else {
return and__25039__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env){
return (function (p1__34204_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__34204_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env){
return (function (p1__34205_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__34205_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__34207,map__34207__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__34209,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__34209,(1),null);
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_34212 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_34212,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34213 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_34213,args)),(((mfa_34213 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_34213,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__25051__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
var or__25051__auto____$1 = js_QMARK_;
if(or__25051__auto____$1){
return or__25051__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__25039__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__25039__auto__;
}
})())){
var fprop_34214 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_34214," ? ",f__$1,fprop_34214,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__34215){
var map__34216 = p__34215;
var map__34216__$1 = ((((!((map__34216 == null)))?((((map__34216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34216):map__34216);
var ctor = cljs.core.get.call(null,map__34216__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__34216__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34216__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__34218){
var map__34219 = p__34218;
var map__34219__$1 = ((((!((map__34219 == null)))?((((map__34219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34219):map__34219);
var target = cljs.core.get.call(null,map__34219__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__34219__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__34219__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__34225_34229 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__34226_34230 = null;
var count__34227_34231 = (0);
var i__34228_34232 = (0);
while(true){
if((i__34228_34232 < count__34227_34231)){
var lib_34233 = cljs.core._nth.call(null,chunk__34226_34230,i__34228_34232);
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34233),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34233),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34233),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34233),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34233),"');");

}
}

var G__34234 = seq__34225_34229;
var G__34235 = chunk__34226_34230;
var G__34236 = count__34227_34231;
var G__34237 = (i__34228_34232 + (1));
seq__34225_34229 = G__34234;
chunk__34226_34230 = G__34235;
count__34227_34231 = G__34236;
i__34228_34232 = G__34237;
continue;
} else {
var temp__4657__auto___34238 = cljs.core.seq.call(null,seq__34225_34229);
if(temp__4657__auto___34238){
var seq__34225_34239__$1 = temp__4657__auto___34238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34225_34239__$1)){
var c__25862__auto___34240 = cljs.core.chunk_first.call(null,seq__34225_34239__$1);
var G__34241 = cljs.core.chunk_rest.call(null,seq__34225_34239__$1);
var G__34242 = c__25862__auto___34240;
var G__34243 = cljs.core.count.call(null,c__25862__auto___34240);
var G__34244 = (0);
seq__34225_34229 = G__34241;
chunk__34226_34230 = G__34242;
count__34227_34231 = G__34243;
i__34228_34232 = G__34244;
continue;
} else {
var lib_34245 = cljs.core.first.call(null,seq__34225_34239__$1);
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34245),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34245),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_34245),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34245),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_34245),"');");

}
}

var G__34246 = cljs.core.next.call(null,seq__34225_34239__$1);
var G__34247 = null;
var G__34248 = (0);
var G__34249 = (0);
seq__34225_34229 = G__34246;
chunk__34226_34230 = G__34247;
count__34227_34231 = G__34248;
i__34228_34232 = G__34249;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__34250){
var map__34251 = p__34250;
var map__34251__$1 = ((((!((map__34251 == null)))?((((map__34251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34251):map__34251);
var name = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__34251__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__34253){
var map__34254 = p__34253;
var map__34254__$1 = ((((!((map__34254 == null)))?((((map__34254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34254):map__34254);
var t = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34256_34274 = cljs.core.seq.call(null,protocols);
var chunk__34257_34275 = null;
var count__34258_34276 = (0);
var i__34259_34277 = (0);
while(true){
if((i__34259_34277 < count__34258_34276)){
var protocol_34278 = cljs.core._nth.call(null,chunk__34257_34275,i__34259_34277);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_34278)].join('')),"}");

var G__34279 = seq__34256_34274;
var G__34280 = chunk__34257_34275;
var G__34281 = count__34258_34276;
var G__34282 = (i__34259_34277 + (1));
seq__34256_34274 = G__34279;
chunk__34257_34275 = G__34280;
count__34258_34276 = G__34281;
i__34259_34277 = G__34282;
continue;
} else {
var temp__4657__auto___34283 = cljs.core.seq.call(null,seq__34256_34274);
if(temp__4657__auto___34283){
var seq__34256_34284__$1 = temp__4657__auto___34283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34256_34284__$1)){
var c__25862__auto___34285 = cljs.core.chunk_first.call(null,seq__34256_34284__$1);
var G__34286 = cljs.core.chunk_rest.call(null,seq__34256_34284__$1);
var G__34287 = c__25862__auto___34285;
var G__34288 = cljs.core.count.call(null,c__25862__auto___34285);
var G__34289 = (0);
seq__34256_34274 = G__34286;
chunk__34257_34275 = G__34287;
count__34258_34276 = G__34288;
i__34259_34277 = G__34289;
continue;
} else {
var protocol_34290 = cljs.core.first.call(null,seq__34256_34284__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_34290)].join('')),"}");

var G__34291 = cljs.core.next.call(null,seq__34256_34284__$1);
var G__34292 = null;
var G__34293 = (0);
var G__34294 = (0);
seq__34256_34274 = G__34291;
chunk__34257_34275 = G__34292;
count__34258_34276 = G__34293;
i__34259_34277 = G__34294;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34260_34295 = cljs.core.seq.call(null,fields__$1);
var chunk__34261_34296 = null;
var count__34262_34297 = (0);
var i__34263_34298 = (0);
while(true){
if((i__34263_34298 < count__34262_34297)){
var fld_34299 = cljs.core._nth.call(null,chunk__34261_34296,i__34263_34298);
cljs.compiler.emitln.call(null,"this.",fld_34299," = ",fld_34299,";");

var G__34300 = seq__34260_34295;
var G__34301 = chunk__34261_34296;
var G__34302 = count__34262_34297;
var G__34303 = (i__34263_34298 + (1));
seq__34260_34295 = G__34300;
chunk__34261_34296 = G__34301;
count__34262_34297 = G__34302;
i__34263_34298 = G__34303;
continue;
} else {
var temp__4657__auto___34304 = cljs.core.seq.call(null,seq__34260_34295);
if(temp__4657__auto___34304){
var seq__34260_34305__$1 = temp__4657__auto___34304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34260_34305__$1)){
var c__25862__auto___34306 = cljs.core.chunk_first.call(null,seq__34260_34305__$1);
var G__34307 = cljs.core.chunk_rest.call(null,seq__34260_34305__$1);
var G__34308 = c__25862__auto___34306;
var G__34309 = cljs.core.count.call(null,c__25862__auto___34306);
var G__34310 = (0);
seq__34260_34295 = G__34307;
chunk__34261_34296 = G__34308;
count__34262_34297 = G__34309;
i__34263_34298 = G__34310;
continue;
} else {
var fld_34311 = cljs.core.first.call(null,seq__34260_34305__$1);
cljs.compiler.emitln.call(null,"this.",fld_34311," = ",fld_34311,";");

var G__34312 = cljs.core.next.call(null,seq__34260_34305__$1);
var G__34313 = null;
var G__34314 = (0);
var G__34315 = (0);
seq__34260_34295 = G__34312;
chunk__34261_34296 = G__34313;
count__34262_34297 = G__34314;
i__34263_34298 = G__34315;
continue;
}
} else {
}
}
break;
}

var seq__34264_34316 = cljs.core.seq.call(null,pmasks);
var chunk__34265_34317 = null;
var count__34266_34318 = (0);
var i__34267_34319 = (0);
while(true){
if((i__34267_34319 < count__34266_34318)){
var vec__34268_34320 = cljs.core._nth.call(null,chunk__34265_34317,i__34267_34319);
var pno_34321 = cljs.core.nth.call(null,vec__34268_34320,(0),null);
var pmask_34322 = cljs.core.nth.call(null,vec__34268_34320,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34321,"$ = ",pmask_34322,";");

var G__34323 = seq__34264_34316;
var G__34324 = chunk__34265_34317;
var G__34325 = count__34266_34318;
var G__34326 = (i__34267_34319 + (1));
seq__34264_34316 = G__34323;
chunk__34265_34317 = G__34324;
count__34266_34318 = G__34325;
i__34267_34319 = G__34326;
continue;
} else {
var temp__4657__auto___34327 = cljs.core.seq.call(null,seq__34264_34316);
if(temp__4657__auto___34327){
var seq__34264_34328__$1 = temp__4657__auto___34327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34264_34328__$1)){
var c__25862__auto___34329 = cljs.core.chunk_first.call(null,seq__34264_34328__$1);
var G__34330 = cljs.core.chunk_rest.call(null,seq__34264_34328__$1);
var G__34331 = c__25862__auto___34329;
var G__34332 = cljs.core.count.call(null,c__25862__auto___34329);
var G__34333 = (0);
seq__34264_34316 = G__34330;
chunk__34265_34317 = G__34331;
count__34266_34318 = G__34332;
i__34267_34319 = G__34333;
continue;
} else {
var vec__34271_34334 = cljs.core.first.call(null,seq__34264_34328__$1);
var pno_34335 = cljs.core.nth.call(null,vec__34271_34334,(0),null);
var pmask_34336 = cljs.core.nth.call(null,vec__34271_34334,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34335,"$ = ",pmask_34336,";");

var G__34337 = cljs.core.next.call(null,seq__34264_34328__$1);
var G__34338 = null;
var G__34339 = (0);
var G__34340 = (0);
seq__34264_34316 = G__34337;
chunk__34265_34317 = G__34338;
count__34266_34318 = G__34339;
i__34267_34319 = G__34340;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__34341){
var map__34342 = p__34341;
var map__34342__$1 = ((((!((map__34342 == null)))?((((map__34342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34342):map__34342);
var t = cljs.core.get.call(null,map__34342__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__34342__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__34342__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__34342__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__34342__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__34344_34362 = cljs.core.seq.call(null,protocols);
var chunk__34345_34363 = null;
var count__34346_34364 = (0);
var i__34347_34365 = (0);
while(true){
if((i__34347_34365 < count__34346_34364)){
var protocol_34366 = cljs.core._nth.call(null,chunk__34345_34363,i__34347_34365);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_34366)].join('')),"}");

var G__34367 = seq__34344_34362;
var G__34368 = chunk__34345_34363;
var G__34369 = count__34346_34364;
var G__34370 = (i__34347_34365 + (1));
seq__34344_34362 = G__34367;
chunk__34345_34363 = G__34368;
count__34346_34364 = G__34369;
i__34347_34365 = G__34370;
continue;
} else {
var temp__4657__auto___34371 = cljs.core.seq.call(null,seq__34344_34362);
if(temp__4657__auto___34371){
var seq__34344_34372__$1 = temp__4657__auto___34371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34344_34372__$1)){
var c__25862__auto___34373 = cljs.core.chunk_first.call(null,seq__34344_34372__$1);
var G__34374 = cljs.core.chunk_rest.call(null,seq__34344_34372__$1);
var G__34375 = c__25862__auto___34373;
var G__34376 = cljs.core.count.call(null,c__25862__auto___34373);
var G__34377 = (0);
seq__34344_34362 = G__34374;
chunk__34345_34363 = G__34375;
count__34346_34364 = G__34376;
i__34347_34365 = G__34377;
continue;
} else {
var protocol_34378 = cljs.core.first.call(null,seq__34344_34372__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_34378)].join('')),"}");

var G__34379 = cljs.core.next.call(null,seq__34344_34372__$1);
var G__34380 = null;
var G__34381 = (0);
var G__34382 = (0);
seq__34344_34362 = G__34379;
chunk__34345_34363 = G__34380;
count__34346_34364 = G__34381;
i__34347_34365 = G__34382;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__34348_34383 = cljs.core.seq.call(null,fields__$1);
var chunk__34349_34384 = null;
var count__34350_34385 = (0);
var i__34351_34386 = (0);
while(true){
if((i__34351_34386 < count__34350_34385)){
var fld_34387 = cljs.core._nth.call(null,chunk__34349_34384,i__34351_34386);
cljs.compiler.emitln.call(null,"this.",fld_34387," = ",fld_34387,";");

var G__34388 = seq__34348_34383;
var G__34389 = chunk__34349_34384;
var G__34390 = count__34350_34385;
var G__34391 = (i__34351_34386 + (1));
seq__34348_34383 = G__34388;
chunk__34349_34384 = G__34389;
count__34350_34385 = G__34390;
i__34351_34386 = G__34391;
continue;
} else {
var temp__4657__auto___34392 = cljs.core.seq.call(null,seq__34348_34383);
if(temp__4657__auto___34392){
var seq__34348_34393__$1 = temp__4657__auto___34392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34348_34393__$1)){
var c__25862__auto___34394 = cljs.core.chunk_first.call(null,seq__34348_34393__$1);
var G__34395 = cljs.core.chunk_rest.call(null,seq__34348_34393__$1);
var G__34396 = c__25862__auto___34394;
var G__34397 = cljs.core.count.call(null,c__25862__auto___34394);
var G__34398 = (0);
seq__34348_34383 = G__34395;
chunk__34349_34384 = G__34396;
count__34350_34385 = G__34397;
i__34351_34386 = G__34398;
continue;
} else {
var fld_34399 = cljs.core.first.call(null,seq__34348_34393__$1);
cljs.compiler.emitln.call(null,"this.",fld_34399," = ",fld_34399,";");

var G__34400 = cljs.core.next.call(null,seq__34348_34393__$1);
var G__34401 = null;
var G__34402 = (0);
var G__34403 = (0);
seq__34348_34383 = G__34400;
chunk__34349_34384 = G__34401;
count__34350_34385 = G__34402;
i__34351_34386 = G__34403;
continue;
}
} else {
}
}
break;
}

var seq__34352_34404 = cljs.core.seq.call(null,pmasks);
var chunk__34353_34405 = null;
var count__34354_34406 = (0);
var i__34355_34407 = (0);
while(true){
if((i__34355_34407 < count__34354_34406)){
var vec__34356_34408 = cljs.core._nth.call(null,chunk__34353_34405,i__34355_34407);
var pno_34409 = cljs.core.nth.call(null,vec__34356_34408,(0),null);
var pmask_34410 = cljs.core.nth.call(null,vec__34356_34408,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34409,"$ = ",pmask_34410,";");

var G__34411 = seq__34352_34404;
var G__34412 = chunk__34353_34405;
var G__34413 = count__34354_34406;
var G__34414 = (i__34355_34407 + (1));
seq__34352_34404 = G__34411;
chunk__34353_34405 = G__34412;
count__34354_34406 = G__34413;
i__34355_34407 = G__34414;
continue;
} else {
var temp__4657__auto___34415 = cljs.core.seq.call(null,seq__34352_34404);
if(temp__4657__auto___34415){
var seq__34352_34416__$1 = temp__4657__auto___34415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34352_34416__$1)){
var c__25862__auto___34417 = cljs.core.chunk_first.call(null,seq__34352_34416__$1);
var G__34418 = cljs.core.chunk_rest.call(null,seq__34352_34416__$1);
var G__34419 = c__25862__auto___34417;
var G__34420 = cljs.core.count.call(null,c__25862__auto___34417);
var G__34421 = (0);
seq__34352_34404 = G__34418;
chunk__34353_34405 = G__34419;
count__34354_34406 = G__34420;
i__34355_34407 = G__34421;
continue;
} else {
var vec__34359_34422 = cljs.core.first.call(null,seq__34352_34416__$1);
var pno_34423 = cljs.core.nth.call(null,vec__34359_34422,(0),null);
var pmask_34424 = cljs.core.nth.call(null,vec__34359_34422,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_34423,"$ = ",pmask_34424,";");

var G__34425 = cljs.core.next.call(null,seq__34352_34416__$1);
var G__34426 = null;
var G__34427 = (0);
var G__34428 = (0);
seq__34352_34404 = G__34425;
chunk__34353_34405 = G__34426;
count__34354_34406 = G__34427;
i__34355_34407 = G__34428;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__34429){
var map__34430 = p__34429;
var map__34430__$1 = ((((!((map__34430 == null)))?((((map__34430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34430):map__34430);
var target = cljs.core.get.call(null,map__34430__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__34430__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__34430__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__34430__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__34430__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__34432){
var map__34433 = p__34432;
var map__34433__$1 = ((((!((map__34433 == null)))?((((map__34433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34433):map__34433);
var op = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__34433__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__25039__auto__ = code;
if(cljs.core.truth_(and__25039__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__25039__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__33320__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33320__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__34447 = cljs.core.seq.call(null,table);
var chunk__34448 = null;
var count__34449 = (0);
var i__34450 = (0);
while(true){
if((i__34450 < count__34449)){
var vec__34451 = cljs.core._nth.call(null,chunk__34448,i__34450);
var sym = cljs.core.nth.call(null,vec__34451,(0),null);
var value = cljs.core.nth.call(null,vec__34451,(1),null);
var ns_34457 = cljs.core.namespace.call(null,sym);
var name_34458 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__34459 = seq__34447;
var G__34460 = chunk__34448;
var G__34461 = count__34449;
var G__34462 = (i__34450 + (1));
seq__34447 = G__34459;
chunk__34448 = G__34460;
count__34449 = G__34461;
i__34450 = G__34462;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34447);
if(temp__4657__auto__){
var seq__34447__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34447__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__34447__$1);
var G__34463 = cljs.core.chunk_rest.call(null,seq__34447__$1);
var G__34464 = c__25862__auto__;
var G__34465 = cljs.core.count.call(null,c__25862__auto__);
var G__34466 = (0);
seq__34447 = G__34463;
chunk__34448 = G__34464;
count__34449 = G__34465;
i__34450 = G__34466;
continue;
} else {
var vec__34454 = cljs.core.first.call(null,seq__34447__$1);
var sym = cljs.core.nth.call(null,vec__34454,(0),null);
var value = cljs.core.nth.call(null,vec__34454,(1),null);
var ns_34467 = cljs.core.namespace.call(null,sym);
var name_34468 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__34469 = cljs.core.next.call(null,seq__34447__$1);
var G__34470 = null;
var G__34471 = (0);
var G__34472 = (0);
seq__34447 = G__34469;
chunk__34448 = G__34470;
count__34449 = G__34471;
i__34450 = G__34472;
continue;
}
} else {
return null;
}
}
break;
}
});
