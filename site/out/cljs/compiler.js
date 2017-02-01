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
var map__29203 = s;
var map__29203__$1 = ((((!((map__29203 == null)))?((((map__29203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29203):map__29203);
var name = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29203__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__29206 = info;
var map__29207 = G__29206;
var map__29207__$1 = ((((!((map__29207 == null)))?((((map__29207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29207):map__29207);
var shadow = cljs.core.get.call(null,map__29207__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__29206__$1 = G__29206;
while(true){
var d__$2 = d__$1;
var map__29209 = G__29206__$1;
var map__29209__$1 = ((((!((map__29209 == null)))?((((map__29209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209):map__29209);
var shadow__$1 = cljs.core.get.call(null,map__29209__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__29211 = (d__$2 + (1));
var G__29212 = shadow__$1;
d__$1 = G__29211;
G__29206__$1 = G__29212;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__29213){
var map__29218 = p__29213;
var map__29218__$1 = ((((!((map__29218 == null)))?((((map__29218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29218):map__29218);
var name_var = map__29218__$1;
var name = cljs.core.get.call(null,map__29218__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__29218__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__29220 = info;
var map__29220__$1 = ((((!((map__29220 == null)))?((((map__29220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220):map__29220);
var ns = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args29222 = [];
var len__26126__auto___29225 = arguments.length;
var i__26127__auto___29226 = (0);
while(true){
if((i__26127__auto___29226 < len__26126__auto___29225)){
args29222.push((arguments[i__26127__auto___29226]));

var G__29227 = (i__26127__auto___29226 + (1));
i__26127__auto___29226 = G__29227;
continue;
} else {
}
break;
}

var G__29224 = args29222.length;
switch (G__29224) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29222.length)].join('')));

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
var G__29230 = cp;
switch (G__29230) {
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
var seq__29236_29240 = cljs.core.seq.call(null,s);
var chunk__29237_29241 = null;
var count__29238_29242 = (0);
var i__29239_29243 = (0);
while(true){
if((i__29239_29243 < count__29238_29242)){
var c_29244 = cljs.core._nth.call(null,chunk__29237_29241,i__29239_29243);
sb.append(cljs.compiler.escape_char.call(null,c_29244));

var G__29245 = seq__29236_29240;
var G__29246 = chunk__29237_29241;
var G__29247 = count__29238_29242;
var G__29248 = (i__29239_29243 + (1));
seq__29236_29240 = G__29245;
chunk__29237_29241 = G__29246;
count__29238_29242 = G__29247;
i__29239_29243 = G__29248;
continue;
} else {
var temp__4657__auto___29249 = cljs.core.seq.call(null,seq__29236_29240);
if(temp__4657__auto___29249){
var seq__29236_29250__$1 = temp__4657__auto___29249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29236_29250__$1)){
var c__25862__auto___29251 = cljs.core.chunk_first.call(null,seq__29236_29250__$1);
var G__29252 = cljs.core.chunk_rest.call(null,seq__29236_29250__$1);
var G__29253 = c__25862__auto___29251;
var G__29254 = cljs.core.count.call(null,c__25862__auto___29251);
var G__29255 = (0);
seq__29236_29240 = G__29252;
chunk__29237_29241 = G__29253;
count__29238_29242 = G__29254;
i__29239_29243 = G__29255;
continue;
} else {
var c_29256 = cljs.core.first.call(null,seq__29236_29250__$1);
sb.append(cljs.compiler.escape_char.call(null,c_29256));

var G__29257 = cljs.core.next.call(null,seq__29236_29250__$1);
var G__29258 = null;
var G__29259 = (0);
var G__29260 = (0);
seq__29236_29240 = G__29257;
chunk__29237_29241 = G__29258;
count__29238_29242 = G__29259;
i__29239_29243 = G__29260;
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
var val__27352__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__27352__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__29266_29271 = ast;
var map__29266_29272__$1 = ((((!((map__29266_29271 == null)))?((((map__29266_29271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29266_29271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29266_29271):map__29266_29271);
var env_29273 = cljs.core.get.call(null,map__29266_29272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_29273))){
var map__29268_29274 = env_29273;
var map__29268_29275__$1 = ((((!((map__29268_29274 == null)))?((((map__29268_29274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29268_29274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29268_29274):map__29268_29274);
var line_29276 = cljs.core.get.call(null,map__29268_29275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_29277 = cljs.core.get.call(null,map__29268_29275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__29268_29274,map__29268_29275__$1,line_29276,column_29277,map__29266_29271,map__29266_29272__$1,env_29273,val__27352__auto__){
return (function (m){
var minfo = (function (){var G__29270 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__29270,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__29270;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_29276 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__29268_29274,map__29268_29275__$1,line_29276,column_29277,map__29266_29271,map__29266_29272__$1,env_29273,val__27352__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_29277)?(column_29277 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__29268_29274,map__29268_29275__$1,line_29276,column_29277,map__29266_29271,map__29266_29272__$1,env_29273,val__27352__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__29268_29274,map__29268_29275__$1,line_29276,column_29277,map__29266_29271,map__29266_29272__$1,env_29273,val__27352__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__29268_29274,map__29268_29275__$1,line_29276,column_29277,map__29266_29271,map__29266_29272__$1,env_29273,val__27352__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__29268_29274,map__29268_29275__$1,line_29276,column_29277,map__29266_29271,map__29266_29272__$1,env_29273,val__27352__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__27352__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29284 = arguments.length;
var i__26127__auto___29285 = (0);
while(true){
if((i__26127__auto___29285 < len__26126__auto___29284)){
args__26133__auto__.push((arguments[i__26127__auto___29285]));

var G__29286 = (i__26127__auto___29285 + (1));
i__26127__auto___29285 = G__29286;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((0) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__26134__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__29280_29287 = cljs.core.seq.call(null,xs);
var chunk__29281_29288 = null;
var count__29282_29289 = (0);
var i__29283_29290 = (0);
while(true){
if((i__29283_29290 < count__29282_29289)){
var x_29291 = cljs.core._nth.call(null,chunk__29281_29288,i__29283_29290);
if((x_29291 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_29291)){
cljs.compiler.emit.call(null,x_29291);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_29291)){
cljs.core.apply.call(null,cljs.compiler.emits,x_29291);
} else {
if(goog.isFunction(x_29291)){
x_29291.call(null);
} else {
var s_29292 = cljs.core.print_str.call(null,x_29291);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__29280_29287,chunk__29281_29288,count__29282_29289,i__29283_29290,s_29292,x_29291){
return (function (p1__29278_SHARP_){
return (p1__29278_SHARP_ + cljs.core.count.call(null,s_29292));
});})(seq__29280_29287,chunk__29281_29288,count__29282_29289,i__29283_29290,s_29292,x_29291))
);
}

cljs.core.print.call(null,s_29292);

}
}
}
}

var G__29293 = seq__29280_29287;
var G__29294 = chunk__29281_29288;
var G__29295 = count__29282_29289;
var G__29296 = (i__29283_29290 + (1));
seq__29280_29287 = G__29293;
chunk__29281_29288 = G__29294;
count__29282_29289 = G__29295;
i__29283_29290 = G__29296;
continue;
} else {
var temp__4657__auto___29297 = cljs.core.seq.call(null,seq__29280_29287);
if(temp__4657__auto___29297){
var seq__29280_29298__$1 = temp__4657__auto___29297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29280_29298__$1)){
var c__25862__auto___29299 = cljs.core.chunk_first.call(null,seq__29280_29298__$1);
var G__29300 = cljs.core.chunk_rest.call(null,seq__29280_29298__$1);
var G__29301 = c__25862__auto___29299;
var G__29302 = cljs.core.count.call(null,c__25862__auto___29299);
var G__29303 = (0);
seq__29280_29287 = G__29300;
chunk__29281_29288 = G__29301;
count__29282_29289 = G__29302;
i__29283_29290 = G__29303;
continue;
} else {
var x_29304 = cljs.core.first.call(null,seq__29280_29298__$1);
if((x_29304 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_29304)){
cljs.compiler.emit.call(null,x_29304);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_29304)){
cljs.core.apply.call(null,cljs.compiler.emits,x_29304);
} else {
if(goog.isFunction(x_29304)){
x_29304.call(null);
} else {
var s_29305 = cljs.core.print_str.call(null,x_29304);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__29280_29287,chunk__29281_29288,count__29282_29289,i__29283_29290,s_29305,x_29304,seq__29280_29298__$1,temp__4657__auto___29297){
return (function (p1__29278_SHARP_){
return (p1__29278_SHARP_ + cljs.core.count.call(null,s_29305));
});})(seq__29280_29287,chunk__29281_29288,count__29282_29289,i__29283_29290,s_29305,x_29304,seq__29280_29298__$1,temp__4657__auto___29297))
);
}

cljs.core.print.call(null,s_29305);

}
}
}
}

var G__29306 = cljs.core.next.call(null,seq__29280_29298__$1);
var G__29307 = null;
var G__29308 = (0);
var G__29309 = (0);
seq__29280_29287 = G__29306;
chunk__29281_29288 = G__29307;
count__29282_29289 = G__29308;
i__29283_29290 = G__29309;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq29279){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29279));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__26133__auto__ = [];
var len__26126__auto___29314 = arguments.length;
var i__26127__auto___29315 = (0);
while(true){
if((i__26127__auto___29315 < len__26126__auto___29314)){
args__26133__auto__.push((arguments[i__26127__auto___29315]));

var G__29316 = (i__26127__auto___29315 + (1));
i__26127__auto___29315 = G__29316;
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
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__29311){
var map__29312 = p__29311;
var map__29312__$1 = ((((!((map__29312 == null)))?((((map__29312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);
var m = map__29312__$1;
var gen_line = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq29310){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29310));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__26037__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29319_29321 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29320_29322 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29319_29321,_STAR_print_fn_STAR_29320_29322,sb__26037__auto__){
return (function (x__26038__auto__){
return sb__26037__auto__.append(x__26038__auto__);
});})(_STAR_print_newline_STAR_29319_29321,_STAR_print_fn_STAR_29320_29322,sb__26037__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29320_29322;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29319_29321;
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
var vec__29323 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__29323,(0),null);
var flags = cljs.core.nth.call(null,vec__29323,(1),null);
var pattern = cljs.core.nth.call(null,vec__29323,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__29327){
var map__29328 = p__29327;
var map__29328__$1 = ((((!((map__29328 == null)))?((((map__29328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29328):map__29328);
var arg = map__29328__$1;
var info = cljs.core.get.call(null,map__29328__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__29328__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__29328__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__29330 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__29330);
} else {
return G__29330;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__29331){
var map__29332 = p__29331;
var map__29332__$1 = ((((!((map__29332 == null)))?((((map__29332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29332):map__29332);
var arg = map__29332__$1;
var env = cljs.core.get.call(null,map__29332__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__29332__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__29332__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__29332__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__29334 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__29334__$1 = ((((!((map__29334 == null)))?((((map__29334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29334):map__29334);
var name = cljs.core.get.call(null,map__29334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__29336){
var map__29337 = p__29336;
var map__29337__$1 = ((((!((map__29337 == null)))?((((map__29337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29337):map__29337);
var expr = cljs.core.get.call(null,map__29337__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__29337__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__29337__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__29339_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29339_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__29340){
var map__29341 = p__29340;
var map__29341__$1 = ((((!((map__29341 == null)))?((((map__29341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29341):map__29341);
var env = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__29343){
var map__29344 = p__29343;
var map__29344__$1 = ((((!((map__29344 == null)))?((((map__29344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29344):map__29344);
var items = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29344__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__29346){
var map__29347 = p__29346;
var map__29347__$1 = ((((!((map__29347 == null)))?((((map__29347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29347):map__29347);
var items = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29347__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_29349 = cljs.core.count.call(null,items);
if((cnt_29349 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_29349,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__29350_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__29350_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__29351){
var map__29352 = p__29351;
var map__29352__$1 = ((((!((map__29352 == null)))?((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29352):map__29352);
var items = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__29354){
var map__29355 = p__29354;
var map__29355__$1 = ((((!((map__29355 == null)))?((((map__29355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29355):map__29355);
var items = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___29373 = cljs.core.seq.call(null,items);
if(temp__4657__auto___29373){
var items_29374__$1 = temp__4657__auto___29373;
var vec__29357_29375 = items_29374__$1;
var seq__29358_29376 = cljs.core.seq.call(null,vec__29357_29375);
var first__29359_29377 = cljs.core.first.call(null,seq__29358_29376);
var seq__29358_29378__$1 = cljs.core.next.call(null,seq__29358_29376);
var vec__29360_29379 = first__29359_29377;
var k_29380 = cljs.core.nth.call(null,vec__29360_29379,(0),null);
var v_29381 = cljs.core.nth.call(null,vec__29360_29379,(1),null);
var r_29382 = seq__29358_29378__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_29380),"\": ",v_29381);

var seq__29363_29383 = cljs.core.seq.call(null,r_29382);
var chunk__29364_29384 = null;
var count__29365_29385 = (0);
var i__29366_29386 = (0);
while(true){
if((i__29366_29386 < count__29365_29385)){
var vec__29367_29387 = cljs.core._nth.call(null,chunk__29364_29384,i__29366_29386);
var k_29388__$1 = cljs.core.nth.call(null,vec__29367_29387,(0),null);
var v_29389__$1 = cljs.core.nth.call(null,vec__29367_29387,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29388__$1),"\": ",v_29389__$1);

var G__29390 = seq__29363_29383;
var G__29391 = chunk__29364_29384;
var G__29392 = count__29365_29385;
var G__29393 = (i__29366_29386 + (1));
seq__29363_29383 = G__29390;
chunk__29364_29384 = G__29391;
count__29365_29385 = G__29392;
i__29366_29386 = G__29393;
continue;
} else {
var temp__4657__auto___29394__$1 = cljs.core.seq.call(null,seq__29363_29383);
if(temp__4657__auto___29394__$1){
var seq__29363_29395__$1 = temp__4657__auto___29394__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29363_29395__$1)){
var c__25862__auto___29396 = cljs.core.chunk_first.call(null,seq__29363_29395__$1);
var G__29397 = cljs.core.chunk_rest.call(null,seq__29363_29395__$1);
var G__29398 = c__25862__auto___29396;
var G__29399 = cljs.core.count.call(null,c__25862__auto___29396);
var G__29400 = (0);
seq__29363_29383 = G__29397;
chunk__29364_29384 = G__29398;
count__29365_29385 = G__29399;
i__29366_29386 = G__29400;
continue;
} else {
var vec__29370_29401 = cljs.core.first.call(null,seq__29363_29395__$1);
var k_29402__$1 = cljs.core.nth.call(null,vec__29370_29401,(0),null);
var v_29403__$1 = cljs.core.nth.call(null,vec__29370_29401,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_29402__$1),"\": ",v_29403__$1);

var G__29404 = cljs.core.next.call(null,seq__29363_29395__$1);
var G__29405 = null;
var G__29406 = (0);
var G__29407 = (0);
seq__29363_29383 = G__29404;
chunk__29364_29384 = G__29405;
count__29365_29385 = G__29406;
i__29366_29386 = G__29407;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__29408){
var map__29409 = p__29408;
var map__29409__$1 = ((((!((map__29409 == null)))?((((map__29409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29409):map__29409);
var form = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__29409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__29411){
var map__29414 = p__29411;
var map__29414__$1 = ((((!((map__29414 == null)))?((((map__29414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29414):map__29414);
var op = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29414__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__29416){
var map__29419 = p__29416;
var map__29419__$1 = ((((!((map__29419 == null)))?((((map__29419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29419):map__29419);
var op = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__29419__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__29421){
var map__29422 = p__29421;
var map__29422__$1 = ((((!((map__29422 == null)))?((((map__29422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29422):map__29422);
var test = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__29424){
var map__29425 = p__29424;
var map__29425__$1 = ((((!((map__29425 == null)))?((((map__29425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29425):map__29425);
var v = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__29425__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29427_29445 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__29428_29446 = null;
var count__29429_29447 = (0);
var i__29430_29448 = (0);
while(true){
if((i__29430_29448 < count__29429_29447)){
var vec__29431_29449 = cljs.core._nth.call(null,chunk__29428_29446,i__29430_29448);
var ts_29450 = cljs.core.nth.call(null,vec__29431_29449,(0),null);
var then_29451 = cljs.core.nth.call(null,vec__29431_29449,(1),null);
var seq__29434_29452 = cljs.core.seq.call(null,ts_29450);
var chunk__29435_29453 = null;
var count__29436_29454 = (0);
var i__29437_29455 = (0);
while(true){
if((i__29437_29455 < count__29436_29454)){
var test_29456 = cljs.core._nth.call(null,chunk__29435_29453,i__29437_29455);
cljs.compiler.emitln.call(null,"case ",test_29456,":");

var G__29457 = seq__29434_29452;
var G__29458 = chunk__29435_29453;
var G__29459 = count__29436_29454;
var G__29460 = (i__29437_29455 + (1));
seq__29434_29452 = G__29457;
chunk__29435_29453 = G__29458;
count__29436_29454 = G__29459;
i__29437_29455 = G__29460;
continue;
} else {
var temp__4657__auto___29461 = cljs.core.seq.call(null,seq__29434_29452);
if(temp__4657__auto___29461){
var seq__29434_29462__$1 = temp__4657__auto___29461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29434_29462__$1)){
var c__25862__auto___29463 = cljs.core.chunk_first.call(null,seq__29434_29462__$1);
var G__29464 = cljs.core.chunk_rest.call(null,seq__29434_29462__$1);
var G__29465 = c__25862__auto___29463;
var G__29466 = cljs.core.count.call(null,c__25862__auto___29463);
var G__29467 = (0);
seq__29434_29452 = G__29464;
chunk__29435_29453 = G__29465;
count__29436_29454 = G__29466;
i__29437_29455 = G__29467;
continue;
} else {
var test_29468 = cljs.core.first.call(null,seq__29434_29462__$1);
cljs.compiler.emitln.call(null,"case ",test_29468,":");

var G__29469 = cljs.core.next.call(null,seq__29434_29462__$1);
var G__29470 = null;
var G__29471 = (0);
var G__29472 = (0);
seq__29434_29452 = G__29469;
chunk__29435_29453 = G__29470;
count__29436_29454 = G__29471;
i__29437_29455 = G__29472;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29451);
} else {
cljs.compiler.emitln.call(null,then_29451);
}

cljs.compiler.emitln.call(null,"break;");

var G__29473 = seq__29427_29445;
var G__29474 = chunk__29428_29446;
var G__29475 = count__29429_29447;
var G__29476 = (i__29430_29448 + (1));
seq__29427_29445 = G__29473;
chunk__29428_29446 = G__29474;
count__29429_29447 = G__29475;
i__29430_29448 = G__29476;
continue;
} else {
var temp__4657__auto___29477 = cljs.core.seq.call(null,seq__29427_29445);
if(temp__4657__auto___29477){
var seq__29427_29478__$1 = temp__4657__auto___29477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29427_29478__$1)){
var c__25862__auto___29479 = cljs.core.chunk_first.call(null,seq__29427_29478__$1);
var G__29480 = cljs.core.chunk_rest.call(null,seq__29427_29478__$1);
var G__29481 = c__25862__auto___29479;
var G__29482 = cljs.core.count.call(null,c__25862__auto___29479);
var G__29483 = (0);
seq__29427_29445 = G__29480;
chunk__29428_29446 = G__29481;
count__29429_29447 = G__29482;
i__29430_29448 = G__29483;
continue;
} else {
var vec__29438_29484 = cljs.core.first.call(null,seq__29427_29478__$1);
var ts_29485 = cljs.core.nth.call(null,vec__29438_29484,(0),null);
var then_29486 = cljs.core.nth.call(null,vec__29438_29484,(1),null);
var seq__29441_29487 = cljs.core.seq.call(null,ts_29485);
var chunk__29442_29488 = null;
var count__29443_29489 = (0);
var i__29444_29490 = (0);
while(true){
if((i__29444_29490 < count__29443_29489)){
var test_29491 = cljs.core._nth.call(null,chunk__29442_29488,i__29444_29490);
cljs.compiler.emitln.call(null,"case ",test_29491,":");

var G__29492 = seq__29441_29487;
var G__29493 = chunk__29442_29488;
var G__29494 = count__29443_29489;
var G__29495 = (i__29444_29490 + (1));
seq__29441_29487 = G__29492;
chunk__29442_29488 = G__29493;
count__29443_29489 = G__29494;
i__29444_29490 = G__29495;
continue;
} else {
var temp__4657__auto___29496__$1 = cljs.core.seq.call(null,seq__29441_29487);
if(temp__4657__auto___29496__$1){
var seq__29441_29497__$1 = temp__4657__auto___29496__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29441_29497__$1)){
var c__25862__auto___29498 = cljs.core.chunk_first.call(null,seq__29441_29497__$1);
var G__29499 = cljs.core.chunk_rest.call(null,seq__29441_29497__$1);
var G__29500 = c__25862__auto___29498;
var G__29501 = cljs.core.count.call(null,c__25862__auto___29498);
var G__29502 = (0);
seq__29441_29487 = G__29499;
chunk__29442_29488 = G__29500;
count__29443_29489 = G__29501;
i__29444_29490 = G__29502;
continue;
} else {
var test_29503 = cljs.core.first.call(null,seq__29441_29497__$1);
cljs.compiler.emitln.call(null,"case ",test_29503,":");

var G__29504 = cljs.core.next.call(null,seq__29441_29497__$1);
var G__29505 = null;
var G__29506 = (0);
var G__29507 = (0);
seq__29441_29487 = G__29504;
chunk__29442_29488 = G__29505;
count__29443_29489 = G__29506;
i__29444_29490 = G__29507;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_29486);
} else {
cljs.compiler.emitln.call(null,then_29486);
}

cljs.compiler.emitln.call(null,"break;");

var G__29508 = cljs.core.next.call(null,seq__29427_29478__$1);
var G__29509 = null;
var G__29510 = (0);
var G__29511 = (0);
seq__29427_29445 = G__29508;
chunk__29428_29446 = G__29509;
count__29429_29447 = G__29510;
i__29430_29448 = G__29511;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__29512){
var map__29513 = p__29512;
var map__29513__$1 = ((((!((map__29513 == null)))?((((map__29513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513):map__29513);
var throw$ = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__29513__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__29520 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__29520,(0),null);
var rstr = cljs.core.nth.call(null,vec__29520,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__29520,fstr,rstr,ret_t,axstr){
return (function (p1__29515_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__29515_SHARP_);
});})(idx,vec__29520,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__29523 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__29523),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__29523;
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
return (function (p1__29524_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__29524_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__29531 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29532 = cljs.core.seq.call(null,vec__29531);
var first__29533 = cljs.core.first.call(null,seq__29532);
var seq__29532__$1 = cljs.core.next.call(null,seq__29532);
var p = first__29533;
var first__29533__$1 = cljs.core.first.call(null,seq__29532__$1);
var seq__29532__$2 = cljs.core.next.call(null,seq__29532__$1);
var ts = first__29533__$1;
var first__29533__$2 = cljs.core.first.call(null,seq__29532__$2);
var seq__29532__$3 = cljs.core.next.call(null,seq__29532__$2);
var n = first__29533__$2;
var xs = seq__29532__$3;
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
var vec__29534 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__29535 = cljs.core.seq.call(null,vec__29534);
var first__29536 = cljs.core.first.call(null,seq__29535);
var seq__29535__$1 = cljs.core.next.call(null,seq__29535);
var p = first__29536;
var first__29536__$1 = cljs.core.first.call(null,seq__29535__$1);
var seq__29535__$2 = cljs.core.next.call(null,seq__29535__$1);
var ts = first__29536__$1;
var xs = seq__29535__$2;
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
var args29538 = [];
var len__26126__auto___29573 = arguments.length;
var i__26127__auto___29574 = (0);
while(true){
if((i__26127__auto___29574 < len__26126__auto___29573)){
args29538.push((arguments[i__26127__auto___29574]));

var G__29575 = (i__26127__auto___29574 + (1));
i__26127__auto___29574 = G__29575;
continue;
} else {
}
break;
}

var G__29540 = args29538.length;
switch (G__29540) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29538.length)].join('')));

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
var vec__29562 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__29537_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__29537_SHARP_);
} else {
return p1__29537_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__29563 = cljs.core.seq.call(null,vec__29562);
var first__29564 = cljs.core.first.call(null,seq__29563);
var seq__29563__$1 = cljs.core.next.call(null,seq__29563);
var x = first__29564;
var ys = seq__29563__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__29565 = cljs.core.seq.call(null,ys);
var chunk__29566 = null;
var count__29567 = (0);
var i__29568 = (0);
while(true){
if((i__29568 < count__29567)){
var next_line = cljs.core._nth.call(null,chunk__29566,i__29568);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__29577 = seq__29565;
var G__29578 = chunk__29566;
var G__29579 = count__29567;
var G__29580 = (i__29568 + (1));
seq__29565 = G__29577;
chunk__29566 = G__29578;
count__29567 = G__29579;
i__29568 = G__29580;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29565);
if(temp__4657__auto__){
var seq__29565__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29565__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__29565__$1);
var G__29581 = cljs.core.chunk_rest.call(null,seq__29565__$1);
var G__29582 = c__25862__auto__;
var G__29583 = cljs.core.count.call(null,c__25862__auto__);
var G__29584 = (0);
seq__29565 = G__29581;
chunk__29566 = G__29582;
count__29567 = G__29583;
i__29568 = G__29584;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__29565__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__29585 = cljs.core.next.call(null,seq__29565__$1);
var G__29586 = null;
var G__29587 = (0);
var G__29588 = (0);
seq__29565 = G__29585;
chunk__29566 = G__29586;
count__29567 = G__29587;
i__29568 = G__29588;
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

var seq__29569_29589 = cljs.core.seq.call(null,docs__$2);
var chunk__29570_29590 = null;
var count__29571_29591 = (0);
var i__29572_29592 = (0);
while(true){
if((i__29572_29592 < count__29571_29591)){
var e_29593 = cljs.core._nth.call(null,chunk__29570_29590,i__29572_29592);
if(cljs.core.truth_(e_29593)){
print_comment_lines.call(null,e_29593);
} else {
}

var G__29594 = seq__29569_29589;
var G__29595 = chunk__29570_29590;
var G__29596 = count__29571_29591;
var G__29597 = (i__29572_29592 + (1));
seq__29569_29589 = G__29594;
chunk__29570_29590 = G__29595;
count__29571_29591 = G__29596;
i__29572_29592 = G__29597;
continue;
} else {
var temp__4657__auto___29598 = cljs.core.seq.call(null,seq__29569_29589);
if(temp__4657__auto___29598){
var seq__29569_29599__$1 = temp__4657__auto___29598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29569_29599__$1)){
var c__25862__auto___29600 = cljs.core.chunk_first.call(null,seq__29569_29599__$1);
var G__29601 = cljs.core.chunk_rest.call(null,seq__29569_29599__$1);
var G__29602 = c__25862__auto___29600;
var G__29603 = cljs.core.count.call(null,c__25862__auto___29600);
var G__29604 = (0);
seq__29569_29589 = G__29601;
chunk__29570_29590 = G__29602;
count__29571_29591 = G__29603;
i__29572_29592 = G__29604;
continue;
} else {
var e_29605 = cljs.core.first.call(null,seq__29569_29599__$1);
if(cljs.core.truth_(e_29605)){
print_comment_lines.call(null,e_29605);
} else {
}

var G__29606 = cljs.core.next.call(null,seq__29569_29599__$1);
var G__29607 = null;
var G__29608 = (0);
var G__29609 = (0);
seq__29569_29589 = G__29606;
chunk__29570_29590 = G__29607;
count__29571_29591 = G__29608;
i__29572_29592 = G__29609;
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
return (function (p1__29611_SHARP_){
return goog.string.startsWith(p1__29611_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__29612){
var map__29613 = p__29612;
var map__29613__$1 = ((((!((map__29613 == null)))?((((map__29613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29613):map__29613);
var name = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__29613__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__29615){
var map__29636 = p__29615;
var map__29636__$1 = ((((!((map__29636 == null)))?((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);
var name = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__29638_29656 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__29639_29657 = null;
var count__29640_29658 = (0);
var i__29641_29659 = (0);
while(true){
if((i__29641_29659 < count__29640_29658)){
var vec__29642_29660 = cljs.core._nth.call(null,chunk__29639_29657,i__29641_29659);
var i_29661 = cljs.core.nth.call(null,vec__29642_29660,(0),null);
var param_29662 = cljs.core.nth.call(null,vec__29642_29660,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29662);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__29663 = seq__29638_29656;
var G__29664 = chunk__29639_29657;
var G__29665 = count__29640_29658;
var G__29666 = (i__29641_29659 + (1));
seq__29638_29656 = G__29663;
chunk__29639_29657 = G__29664;
count__29640_29658 = G__29665;
i__29641_29659 = G__29666;
continue;
} else {
var temp__4657__auto___29667 = cljs.core.seq.call(null,seq__29638_29656);
if(temp__4657__auto___29667){
var seq__29638_29668__$1 = temp__4657__auto___29667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29638_29668__$1)){
var c__25862__auto___29669 = cljs.core.chunk_first.call(null,seq__29638_29668__$1);
var G__29670 = cljs.core.chunk_rest.call(null,seq__29638_29668__$1);
var G__29671 = c__25862__auto___29669;
var G__29672 = cljs.core.count.call(null,c__25862__auto___29669);
var G__29673 = (0);
seq__29638_29656 = G__29670;
chunk__29639_29657 = G__29671;
count__29640_29658 = G__29672;
i__29641_29659 = G__29673;
continue;
} else {
var vec__29645_29674 = cljs.core.first.call(null,seq__29638_29668__$1);
var i_29675 = cljs.core.nth.call(null,vec__29645_29674,(0),null);
var param_29676 = cljs.core.nth.call(null,vec__29645_29674,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_29676);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__29677 = cljs.core.next.call(null,seq__29638_29668__$1);
var G__29678 = null;
var G__29679 = (0);
var G__29680 = (0);
seq__29638_29656 = G__29677;
chunk__29639_29657 = G__29678;
count__29640_29658 = G__29679;
i__29641_29659 = G__29680;
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

var seq__29648_29681 = cljs.core.seq.call(null,params);
var chunk__29649_29682 = null;
var count__29650_29683 = (0);
var i__29651_29684 = (0);
while(true){
if((i__29651_29684 < count__29650_29683)){
var param_29685 = cljs.core._nth.call(null,chunk__29649_29682,i__29651_29684);
cljs.compiler.emit.call(null,param_29685);

if(cljs.core._EQ_.call(null,param_29685,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29686 = seq__29648_29681;
var G__29687 = chunk__29649_29682;
var G__29688 = count__29650_29683;
var G__29689 = (i__29651_29684 + (1));
seq__29648_29681 = G__29686;
chunk__29649_29682 = G__29687;
count__29650_29683 = G__29688;
i__29651_29684 = G__29689;
continue;
} else {
var temp__4657__auto___29690 = cljs.core.seq.call(null,seq__29648_29681);
if(temp__4657__auto___29690){
var seq__29648_29691__$1 = temp__4657__auto___29690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29648_29691__$1)){
var c__25862__auto___29692 = cljs.core.chunk_first.call(null,seq__29648_29691__$1);
var G__29693 = cljs.core.chunk_rest.call(null,seq__29648_29691__$1);
var G__29694 = c__25862__auto___29692;
var G__29695 = cljs.core.count.call(null,c__25862__auto___29692);
var G__29696 = (0);
seq__29648_29681 = G__29693;
chunk__29649_29682 = G__29694;
count__29650_29683 = G__29695;
i__29651_29684 = G__29696;
continue;
} else {
var param_29697 = cljs.core.first.call(null,seq__29648_29691__$1);
cljs.compiler.emit.call(null,param_29697);

if(cljs.core._EQ_.call(null,param_29697,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29698 = cljs.core.next.call(null,seq__29648_29691__$1);
var G__29699 = null;
var G__29700 = (0);
var G__29701 = (0);
seq__29648_29681 = G__29698;
chunk__29649_29682 = G__29699;
count__29650_29683 = G__29700;
i__29651_29684 = G__29701;
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

var seq__29652_29702 = cljs.core.seq.call(null,params);
var chunk__29653_29703 = null;
var count__29654_29704 = (0);
var i__29655_29705 = (0);
while(true){
if((i__29655_29705 < count__29654_29704)){
var param_29706 = cljs.core._nth.call(null,chunk__29653_29703,i__29655_29705);
cljs.compiler.emit.call(null,param_29706);

if(cljs.core._EQ_.call(null,param_29706,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29707 = seq__29652_29702;
var G__29708 = chunk__29653_29703;
var G__29709 = count__29654_29704;
var G__29710 = (i__29655_29705 + (1));
seq__29652_29702 = G__29707;
chunk__29653_29703 = G__29708;
count__29654_29704 = G__29709;
i__29655_29705 = G__29710;
continue;
} else {
var temp__4657__auto___29711 = cljs.core.seq.call(null,seq__29652_29702);
if(temp__4657__auto___29711){
var seq__29652_29712__$1 = temp__4657__auto___29711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29652_29712__$1)){
var c__25862__auto___29713 = cljs.core.chunk_first.call(null,seq__29652_29712__$1);
var G__29714 = cljs.core.chunk_rest.call(null,seq__29652_29712__$1);
var G__29715 = c__25862__auto___29713;
var G__29716 = cljs.core.count.call(null,c__25862__auto___29713);
var G__29717 = (0);
seq__29652_29702 = G__29714;
chunk__29653_29703 = G__29715;
count__29654_29704 = G__29716;
i__29655_29705 = G__29717;
continue;
} else {
var param_29718 = cljs.core.first.call(null,seq__29652_29712__$1);
cljs.compiler.emit.call(null,param_29718);

if(cljs.core._EQ_.call(null,param_29718,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29719 = cljs.core.next.call(null,seq__29652_29712__$1);
var G__29720 = null;
var G__29721 = (0);
var G__29722 = (0);
seq__29652_29702 = G__29719;
chunk__29653_29703 = G__29720;
count__29654_29704 = G__29721;
i__29655_29705 = G__29722;
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
var seq__29727 = cljs.core.seq.call(null,params);
var chunk__29728 = null;
var count__29729 = (0);
var i__29730 = (0);
while(true){
if((i__29730 < count__29729)){
var param = cljs.core._nth.call(null,chunk__29728,i__29730);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29731 = seq__29727;
var G__29732 = chunk__29728;
var G__29733 = count__29729;
var G__29734 = (i__29730 + (1));
seq__29727 = G__29731;
chunk__29728 = G__29732;
count__29729 = G__29733;
i__29730 = G__29734;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29727);
if(temp__4657__auto__){
var seq__29727__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29727__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__29727__$1);
var G__29735 = cljs.core.chunk_rest.call(null,seq__29727__$1);
var G__29736 = c__25862__auto__;
var G__29737 = cljs.core.count.call(null,c__25862__auto__);
var G__29738 = (0);
seq__29727 = G__29735;
chunk__29728 = G__29736;
count__29729 = G__29737;
i__29730 = G__29738;
continue;
} else {
var param = cljs.core.first.call(null,seq__29727__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29739 = cljs.core.next.call(null,seq__29727__$1);
var G__29740 = null;
var G__29741 = (0);
var G__29742 = (0);
seq__29727 = G__29739;
chunk__29728 = G__29740;
count__29729 = G__29741;
i__29730 = G__29742;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__29743){
var map__29746 = p__29743;
var map__29746__$1 = ((((!((map__29746 == null)))?((((map__29746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29746):map__29746);
var type = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29746__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__29748){
var map__29759 = p__29748;
var map__29759__$1 = ((((!((map__29759 == null)))?((((map__29759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29759):map__29759);
var f = map__29759__$1;
var type = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_29769__$1 = (function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29770 = cljs.compiler.munge.call(null,name_29769__$1);
var delegate_name_29771 = [cljs.core.str(mname_29770),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_29771," = function (");

var seq__29761_29772 = cljs.core.seq.call(null,params);
var chunk__29762_29773 = null;
var count__29763_29774 = (0);
var i__29764_29775 = (0);
while(true){
if((i__29764_29775 < count__29763_29774)){
var param_29776 = cljs.core._nth.call(null,chunk__29762_29773,i__29764_29775);
cljs.compiler.emit.call(null,param_29776);

if(cljs.core._EQ_.call(null,param_29776,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29777 = seq__29761_29772;
var G__29778 = chunk__29762_29773;
var G__29779 = count__29763_29774;
var G__29780 = (i__29764_29775 + (1));
seq__29761_29772 = G__29777;
chunk__29762_29773 = G__29778;
count__29763_29774 = G__29779;
i__29764_29775 = G__29780;
continue;
} else {
var temp__4657__auto___29781 = cljs.core.seq.call(null,seq__29761_29772);
if(temp__4657__auto___29781){
var seq__29761_29782__$1 = temp__4657__auto___29781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29761_29782__$1)){
var c__25862__auto___29783 = cljs.core.chunk_first.call(null,seq__29761_29782__$1);
var G__29784 = cljs.core.chunk_rest.call(null,seq__29761_29782__$1);
var G__29785 = c__25862__auto___29783;
var G__29786 = cljs.core.count.call(null,c__25862__auto___29783);
var G__29787 = (0);
seq__29761_29772 = G__29784;
chunk__29762_29773 = G__29785;
count__29763_29774 = G__29786;
i__29764_29775 = G__29787;
continue;
} else {
var param_29788 = cljs.core.first.call(null,seq__29761_29782__$1);
cljs.compiler.emit.call(null,param_29788);

if(cljs.core._EQ_.call(null,param_29788,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29789 = cljs.core.next.call(null,seq__29761_29782__$1);
var G__29790 = null;
var G__29791 = (0);
var G__29792 = (0);
seq__29761_29772 = G__29789;
chunk__29762_29773 = G__29790;
count__29763_29774 = G__29791;
i__29764_29775 = G__29792;
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

cljs.compiler.emitln.call(null,"var ",mname_29770," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_29793 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_29793,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_29771,".call(this,");

var seq__29765_29794 = cljs.core.seq.call(null,params);
var chunk__29766_29795 = null;
var count__29767_29796 = (0);
var i__29768_29797 = (0);
while(true){
if((i__29768_29797 < count__29767_29796)){
var param_29798 = cljs.core._nth.call(null,chunk__29766_29795,i__29768_29797);
cljs.compiler.emit.call(null,param_29798);

if(cljs.core._EQ_.call(null,param_29798,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29799 = seq__29765_29794;
var G__29800 = chunk__29766_29795;
var G__29801 = count__29767_29796;
var G__29802 = (i__29768_29797 + (1));
seq__29765_29794 = G__29799;
chunk__29766_29795 = G__29800;
count__29767_29796 = G__29801;
i__29768_29797 = G__29802;
continue;
} else {
var temp__4657__auto___29803 = cljs.core.seq.call(null,seq__29765_29794);
if(temp__4657__auto___29803){
var seq__29765_29804__$1 = temp__4657__auto___29803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29765_29804__$1)){
var c__25862__auto___29805 = cljs.core.chunk_first.call(null,seq__29765_29804__$1);
var G__29806 = cljs.core.chunk_rest.call(null,seq__29765_29804__$1);
var G__29807 = c__25862__auto___29805;
var G__29808 = cljs.core.count.call(null,c__25862__auto___29805);
var G__29809 = (0);
seq__29765_29794 = G__29806;
chunk__29766_29795 = G__29807;
count__29767_29796 = G__29808;
i__29768_29797 = G__29809;
continue;
} else {
var param_29810 = cljs.core.first.call(null,seq__29765_29804__$1);
cljs.compiler.emit.call(null,param_29810);

if(cljs.core._EQ_.call(null,param_29810,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__29811 = cljs.core.next.call(null,seq__29765_29804__$1);
var G__29812 = null;
var G__29813 = (0);
var G__29814 = (0);
seq__29765_29794 = G__29811;
chunk__29766_29795 = G__29812;
count__29767_29796 = G__29813;
i__29768_29797 = G__29814;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_29770,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_29770,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_29769__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_29770,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_29771,";");

cljs.compiler.emitln.call(null,"return ",mname_29770,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__29818){
var map__29819 = p__29818;
var map__29819__$1 = ((((!((map__29819 == null)))?((((map__29819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29819):map__29819);
var name = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__29819__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29815_SHARP_){
var and__25039__auto__ = p1__29815_SHARP_;
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__29815_SHARP_));
} else {
return and__25039__auto__;
}
});})(map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_29854__$1 = (function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_29855 = cljs.compiler.munge.call(null,name_29854__$1);
var maxparams_29856 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_29857 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_29854__$1,mname_29855,maxparams_29856,loop_locals,map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_29855),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_29854__$1,mname_29855,maxparams_29856,loop_locals,map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_29858 = cljs.core.sort_by.call(null,((function (name_29854__$1,mname_29855,maxparams_29856,mmap_29857,loop_locals,map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29816_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__29816_SHARP_)));
});})(name_29854__$1,mname_29855,maxparams_29856,mmap_29857,loop_locals,map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_29857));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_29855," = null;");

var seq__29821_29859 = cljs.core.seq.call(null,ms_29858);
var chunk__29822_29860 = null;
var count__29823_29861 = (0);
var i__29824_29862 = (0);
while(true){
if((i__29824_29862 < count__29823_29861)){
var vec__29825_29863 = cljs.core._nth.call(null,chunk__29822_29860,i__29824_29862);
var n_29864 = cljs.core.nth.call(null,vec__29825_29863,(0),null);
var meth_29865 = cljs.core.nth.call(null,vec__29825_29863,(1),null);
cljs.compiler.emits.call(null,"var ",n_29864," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29865))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29865);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29865);
}

cljs.compiler.emitln.call(null,";");

var G__29866 = seq__29821_29859;
var G__29867 = chunk__29822_29860;
var G__29868 = count__29823_29861;
var G__29869 = (i__29824_29862 + (1));
seq__29821_29859 = G__29866;
chunk__29822_29860 = G__29867;
count__29823_29861 = G__29868;
i__29824_29862 = G__29869;
continue;
} else {
var temp__4657__auto___29870 = cljs.core.seq.call(null,seq__29821_29859);
if(temp__4657__auto___29870){
var seq__29821_29871__$1 = temp__4657__auto___29870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29821_29871__$1)){
var c__25862__auto___29872 = cljs.core.chunk_first.call(null,seq__29821_29871__$1);
var G__29873 = cljs.core.chunk_rest.call(null,seq__29821_29871__$1);
var G__29874 = c__25862__auto___29872;
var G__29875 = cljs.core.count.call(null,c__25862__auto___29872);
var G__29876 = (0);
seq__29821_29859 = G__29873;
chunk__29822_29860 = G__29874;
count__29823_29861 = G__29875;
i__29824_29862 = G__29876;
continue;
} else {
var vec__29828_29877 = cljs.core.first.call(null,seq__29821_29871__$1);
var n_29878 = cljs.core.nth.call(null,vec__29828_29877,(0),null);
var meth_29879 = cljs.core.nth.call(null,vec__29828_29877,(1),null);
cljs.compiler.emits.call(null,"var ",n_29878," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29879))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_29879);
} else {
cljs.compiler.emit_fn_method.call(null,meth_29879);
}

cljs.compiler.emitln.call(null,";");

var G__29880 = cljs.core.next.call(null,seq__29821_29871__$1);
var G__29881 = null;
var G__29882 = (0);
var G__29883 = (0);
seq__29821_29859 = G__29880;
chunk__29822_29860 = G__29881;
count__29823_29861 = G__29882;
i__29824_29862 = G__29883;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_29855," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_29856),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_29856)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_29856));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__29831_29884 = cljs.core.seq.call(null,ms_29858);
var chunk__29832_29885 = null;
var count__29833_29886 = (0);
var i__29834_29887 = (0);
while(true){
if((i__29834_29887 < count__29833_29886)){
var vec__29835_29888 = cljs.core._nth.call(null,chunk__29832_29885,i__29834_29887);
var n_29889 = cljs.core.nth.call(null,vec__29835_29888,(0),null);
var meth_29890 = cljs.core.nth.call(null,vec__29835_29888,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29890))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29891 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29891," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29892 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29891," = new cljs.core.IndexedSeq(",a_29892,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29889,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29856)),(((cljs.core.count.call(null,maxparams_29856) > (1)))?", ":null),restarg_29891,");");
} else {
var pcnt_29893 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29890));
cljs.compiler.emitln.call(null,"case ",pcnt_29893,":");

cljs.compiler.emitln.call(null,"return ",n_29889,".call(this",(((pcnt_29893 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29893,maxparams_29856));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),",")),");");
}

var G__29894 = seq__29831_29884;
var G__29895 = chunk__29832_29885;
var G__29896 = count__29833_29886;
var G__29897 = (i__29834_29887 + (1));
seq__29831_29884 = G__29894;
chunk__29832_29885 = G__29895;
count__29833_29886 = G__29896;
i__29834_29887 = G__29897;
continue;
} else {
var temp__4657__auto___29898 = cljs.core.seq.call(null,seq__29831_29884);
if(temp__4657__auto___29898){
var seq__29831_29899__$1 = temp__4657__auto___29898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29831_29899__$1)){
var c__25862__auto___29900 = cljs.core.chunk_first.call(null,seq__29831_29899__$1);
var G__29901 = cljs.core.chunk_rest.call(null,seq__29831_29899__$1);
var G__29902 = c__25862__auto___29900;
var G__29903 = cljs.core.count.call(null,c__25862__auto___29900);
var G__29904 = (0);
seq__29831_29884 = G__29901;
chunk__29832_29885 = G__29902;
count__29833_29886 = G__29903;
i__29834_29887 = G__29904;
continue;
} else {
var vec__29838_29905 = cljs.core.first.call(null,seq__29831_29899__$1);
var n_29906 = cljs.core.nth.call(null,vec__29838_29905,(0),null);
var meth_29907 = cljs.core.nth.call(null,vec__29838_29905,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29907))){
cljs.compiler.emitln.call(null,"default:");

var restarg_29908 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_29908," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_29909 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_29908," = new cljs.core.IndexedSeq(",a_29909,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_29906,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_29856)),(((cljs.core.count.call(null,maxparams_29856) > (1)))?", ":null),restarg_29908,");");
} else {
var pcnt_29910 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29907));
cljs.compiler.emitln.call(null,"case ",pcnt_29910,":");

cljs.compiler.emitln.call(null,"return ",n_29906,".call(this",(((pcnt_29910 === (0)))?null:cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_29910,maxparams_29856));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),",")),");");
}

var G__29911 = cljs.core.next.call(null,seq__29831_29899__$1);
var G__29912 = null;
var G__29913 = (0);
var G__29914 = (0);
seq__29831_29884 = G__29911;
chunk__29832_29885 = G__29912;
count__29833_29886 = G__29913;
i__29834_29887 = G__29914;
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
cljs.compiler.emitln.call(null,mname_29855,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_29855,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_29854__$1,mname_29855,maxparams_29856,mmap_29857,ms_29858,loop_locals,map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__29817_SHARP_){
var vec__29841 = p1__29817_SHARP_;
var n = cljs.core.nth.call(null,vec__29841,(0),null);
var m = cljs.core.nth.call(null,vec__29841,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_29854__$1,mname_29855,maxparams_29856,mmap_29857,ms_29858,loop_locals,map__29819,map__29819__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_29858),".cljs$lang$applyTo;");
} else {
}

var seq__29844_29915 = cljs.core.seq.call(null,ms_29858);
var chunk__29845_29916 = null;
var count__29846_29917 = (0);
var i__29847_29918 = (0);
while(true){
if((i__29847_29918 < count__29846_29917)){
var vec__29848_29919 = cljs.core._nth.call(null,chunk__29845_29916,i__29847_29918);
var n_29920 = cljs.core.nth.call(null,vec__29848_29919,(0),null);
var meth_29921 = cljs.core.nth.call(null,vec__29848_29919,(1),null);
var c_29922 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29921));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29921))){
cljs.compiler.emitln.call(null,mname_29855,".cljs$core$IFn$_invoke$arity$variadic = ",n_29920,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29855,".cljs$core$IFn$_invoke$arity$",c_29922," = ",n_29920,";");
}

var G__29923 = seq__29844_29915;
var G__29924 = chunk__29845_29916;
var G__29925 = count__29846_29917;
var G__29926 = (i__29847_29918 + (1));
seq__29844_29915 = G__29923;
chunk__29845_29916 = G__29924;
count__29846_29917 = G__29925;
i__29847_29918 = G__29926;
continue;
} else {
var temp__4657__auto___29927 = cljs.core.seq.call(null,seq__29844_29915);
if(temp__4657__auto___29927){
var seq__29844_29928__$1 = temp__4657__auto___29927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29844_29928__$1)){
var c__25862__auto___29929 = cljs.core.chunk_first.call(null,seq__29844_29928__$1);
var G__29930 = cljs.core.chunk_rest.call(null,seq__29844_29928__$1);
var G__29931 = c__25862__auto___29929;
var G__29932 = cljs.core.count.call(null,c__25862__auto___29929);
var G__29933 = (0);
seq__29844_29915 = G__29930;
chunk__29845_29916 = G__29931;
count__29846_29917 = G__29932;
i__29847_29918 = G__29933;
continue;
} else {
var vec__29851_29934 = cljs.core.first.call(null,seq__29844_29928__$1);
var n_29935 = cljs.core.nth.call(null,vec__29851_29934,(0),null);
var meth_29936 = cljs.core.nth.call(null,vec__29851_29934,(1),null);
var c_29937 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_29936));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_29936))){
cljs.compiler.emitln.call(null,mname_29855,".cljs$core$IFn$_invoke$arity$variadic = ",n_29935,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_29855,".cljs$core$IFn$_invoke$arity$",c_29937," = ",n_29935,";");
}

var G__29938 = cljs.core.next.call(null,seq__29844_29928__$1);
var G__29939 = null;
var G__29940 = (0);
var G__29941 = (0);
seq__29844_29915 = G__29938;
chunk__29845_29916 = G__29939;
count__29846_29917 = G__29940;
i__29847_29918 = G__29941;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_29855,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__29942){
var map__29943 = p__29942;
var map__29943__$1 = ((((!((map__29943 == null)))?((((map__29943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);
var statements = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__29945_29949 = cljs.core.seq.call(null,statements);
var chunk__29946_29950 = null;
var count__29947_29951 = (0);
var i__29948_29952 = (0);
while(true){
if((i__29948_29952 < count__29947_29951)){
var s_29953 = cljs.core._nth.call(null,chunk__29946_29950,i__29948_29952);
cljs.compiler.emitln.call(null,s_29953);

var G__29954 = seq__29945_29949;
var G__29955 = chunk__29946_29950;
var G__29956 = count__29947_29951;
var G__29957 = (i__29948_29952 + (1));
seq__29945_29949 = G__29954;
chunk__29946_29950 = G__29955;
count__29947_29951 = G__29956;
i__29948_29952 = G__29957;
continue;
} else {
var temp__4657__auto___29958 = cljs.core.seq.call(null,seq__29945_29949);
if(temp__4657__auto___29958){
var seq__29945_29959__$1 = temp__4657__auto___29958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29945_29959__$1)){
var c__25862__auto___29960 = cljs.core.chunk_first.call(null,seq__29945_29959__$1);
var G__29961 = cljs.core.chunk_rest.call(null,seq__29945_29959__$1);
var G__29962 = c__25862__auto___29960;
var G__29963 = cljs.core.count.call(null,c__25862__auto___29960);
var G__29964 = (0);
seq__29945_29949 = G__29961;
chunk__29946_29950 = G__29962;
count__29947_29951 = G__29963;
i__29948_29952 = G__29964;
continue;
} else {
var s_29965 = cljs.core.first.call(null,seq__29945_29959__$1);
cljs.compiler.emitln.call(null,s_29965);

var G__29966 = cljs.core.next.call(null,seq__29945_29959__$1);
var G__29967 = null;
var G__29968 = (0);
var G__29969 = (0);
seq__29945_29949 = G__29966;
chunk__29946_29950 = G__29967;
count__29947_29951 = G__29968;
i__29948_29952 = G__29969;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__29970){
var map__29971 = p__29970;
var map__29971__$1 = ((((!((map__29971 == null)))?((((map__29971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29971):map__29971);
var env = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__29971__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__29973,is_loop){
var map__29985 = p__29973;
var map__29985__$1 = ((((!((map__29985 == null)))?((((map__29985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29985):map__29985);
var bindings = cljs.core.get.call(null,map__29985__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__29985__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__29985__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_29987_29996 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_29987_29996,context,map__29985,map__29985__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_29987_29996,context,map__29985,map__29985__$1,bindings,expr,env))
,bindings):null));

try{var seq__29988_29997 = cljs.core.seq.call(null,bindings);
var chunk__29989_29998 = null;
var count__29990_29999 = (0);
var i__29991_30000 = (0);
while(true){
if((i__29991_30000 < count__29990_29999)){
var map__29992_30001 = cljs.core._nth.call(null,chunk__29989_29998,i__29991_30000);
var map__29992_30002__$1 = ((((!((map__29992_30001 == null)))?((((map__29992_30001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29992_30001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29992_30001):map__29992_30001);
var binding_30003 = map__29992_30002__$1;
var init_30004 = cljs.core.get.call(null,map__29992_30002__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30003);

cljs.compiler.emitln.call(null," = ",init_30004,";");

var G__30005 = seq__29988_29997;
var G__30006 = chunk__29989_29998;
var G__30007 = count__29990_29999;
var G__30008 = (i__29991_30000 + (1));
seq__29988_29997 = G__30005;
chunk__29989_29998 = G__30006;
count__29990_29999 = G__30007;
i__29991_30000 = G__30008;
continue;
} else {
var temp__4657__auto___30009 = cljs.core.seq.call(null,seq__29988_29997);
if(temp__4657__auto___30009){
var seq__29988_30010__$1 = temp__4657__auto___30009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29988_30010__$1)){
var c__25862__auto___30011 = cljs.core.chunk_first.call(null,seq__29988_30010__$1);
var G__30012 = cljs.core.chunk_rest.call(null,seq__29988_30010__$1);
var G__30013 = c__25862__auto___30011;
var G__30014 = cljs.core.count.call(null,c__25862__auto___30011);
var G__30015 = (0);
seq__29988_29997 = G__30012;
chunk__29989_29998 = G__30013;
count__29990_29999 = G__30014;
i__29991_30000 = G__30015;
continue;
} else {
var map__29994_30016 = cljs.core.first.call(null,seq__29988_30010__$1);
var map__29994_30017__$1 = ((((!((map__29994_30016 == null)))?((((map__29994_30016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29994_30016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994_30016):map__29994_30016);
var binding_30018 = map__29994_30017__$1;
var init_30019 = cljs.core.get.call(null,map__29994_30017__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_30018);

cljs.compiler.emitln.call(null," = ",init_30019,";");

var G__30020 = cljs.core.next.call(null,seq__29988_30010__$1);
var G__30021 = null;
var G__30022 = (0);
var G__30023 = (0);
seq__29988_29997 = G__30020;
chunk__29989_29998 = G__30021;
count__29990_29999 = G__30022;
i__29991_30000 = G__30023;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_29987_29996;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__30024){
var map__30025 = p__30024;
var map__30025__$1 = ((((!((map__30025 == null)))?((((map__30025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30025):map__30025);
var frame = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__30025__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__25966__auto___30027 = cljs.core.count.call(null,exprs);
var i_30028 = (0);
while(true){
if((i_30028 < n__25966__auto___30027)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_30028)," = ",exprs.call(null,i_30028),";");

var G__30029 = (i_30028 + (1));
i_30028 = G__30029;
continue;
} else {
}
break;
}

var n__25966__auto___30030 = cljs.core.count.call(null,exprs);
var i_30031 = (0);
while(true){
if((i_30031 < n__25966__auto___30030)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_30031))," = ",temps.call(null,i_30031),";");

var G__30032 = (i_30031 + (1));
i_30031 = G__30032;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__30033){
var map__30034 = p__30033;
var map__30034__$1 = ((((!((map__30034 == null)))?((((map__30034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30034):map__30034);
var bindings = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__30034__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__30036_30044 = cljs.core.seq.call(null,bindings);
var chunk__30037_30045 = null;
var count__30038_30046 = (0);
var i__30039_30047 = (0);
while(true){
if((i__30039_30047 < count__30038_30046)){
var map__30040_30048 = cljs.core._nth.call(null,chunk__30037_30045,i__30039_30047);
var map__30040_30049__$1 = ((((!((map__30040_30048 == null)))?((((map__30040_30048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30040_30048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30040_30048):map__30040_30048);
var binding_30050 = map__30040_30049__$1;
var init_30051 = cljs.core.get.call(null,map__30040_30049__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30050)," = ",init_30051,";");

var G__30052 = seq__30036_30044;
var G__30053 = chunk__30037_30045;
var G__30054 = count__30038_30046;
var G__30055 = (i__30039_30047 + (1));
seq__30036_30044 = G__30052;
chunk__30037_30045 = G__30053;
count__30038_30046 = G__30054;
i__30039_30047 = G__30055;
continue;
} else {
var temp__4657__auto___30056 = cljs.core.seq.call(null,seq__30036_30044);
if(temp__4657__auto___30056){
var seq__30036_30057__$1 = temp__4657__auto___30056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30036_30057__$1)){
var c__25862__auto___30058 = cljs.core.chunk_first.call(null,seq__30036_30057__$1);
var G__30059 = cljs.core.chunk_rest.call(null,seq__30036_30057__$1);
var G__30060 = c__25862__auto___30058;
var G__30061 = cljs.core.count.call(null,c__25862__auto___30058);
var G__30062 = (0);
seq__30036_30044 = G__30059;
chunk__30037_30045 = G__30060;
count__30038_30046 = G__30061;
i__30039_30047 = G__30062;
continue;
} else {
var map__30042_30063 = cljs.core.first.call(null,seq__30036_30057__$1);
var map__30042_30064__$1 = ((((!((map__30042_30063 == null)))?((((map__30042_30063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30042_30063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30042_30063):map__30042_30063);
var binding_30065 = map__30042_30064__$1;
var init_30066 = cljs.core.get.call(null,map__30042_30064__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_30065)," = ",init_30066,";");

var G__30067 = cljs.core.next.call(null,seq__30036_30057__$1);
var G__30068 = null;
var G__30069 = (0);
var G__30070 = (0);
seq__30036_30044 = G__30067;
chunk__30037_30045 = G__30068;
count__30038_30046 = G__30069;
i__30039_30047 = G__30070;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__30073){
var map__30074 = p__30073;
var map__30074__$1 = ((((!((map__30074 == null)))?((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
var expr = map__30074__$1;
var f = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__30076 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env){
return (function (p1__30071_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30071_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env){
return (function (p1__30072_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__30072_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__30074,map__30074__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__30076,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__30076,(1),null);
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_30079 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_30079,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_30080 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_30080,args)),(((mfa_30080 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_30080,args)),"], 0))");
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
var fprop_30081 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_30081," ? ",f__$1,fprop_30081,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__30082){
var map__30083 = p__30082;
var map__30083__$1 = ((((!((map__30083 == null)))?((((map__30083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30083):map__30083);
var ctor = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__30085){
var map__30086 = p__30085;
var map__30086__$1 = ((((!((map__30086 == null)))?((((map__30086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30086):map__30086);
var target = cljs.core.get.call(null,map__30086__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__30086__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__30086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
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

var seq__30092_30096 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__30093_30097 = null;
var count__30094_30098 = (0);
var i__30095_30099 = (0);
while(true){
if((i__30095_30099 < count__30094_30098)){
var lib_30100 = cljs.core._nth.call(null,chunk__30093_30097,i__30095_30099);
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30100),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30100),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30100),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30100),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30100),"');");

}
}

var G__30101 = seq__30092_30096;
var G__30102 = chunk__30093_30097;
var G__30103 = count__30094_30098;
var G__30104 = (i__30095_30099 + (1));
seq__30092_30096 = G__30101;
chunk__30093_30097 = G__30102;
count__30094_30098 = G__30103;
i__30095_30099 = G__30104;
continue;
} else {
var temp__4657__auto___30105 = cljs.core.seq.call(null,seq__30092_30096);
if(temp__4657__auto___30105){
var seq__30092_30106__$1 = temp__4657__auto___30105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30092_30106__$1)){
var c__25862__auto___30107 = cljs.core.chunk_first.call(null,seq__30092_30106__$1);
var G__30108 = cljs.core.chunk_rest.call(null,seq__30092_30106__$1);
var G__30109 = c__25862__auto___30107;
var G__30110 = cljs.core.count.call(null,c__25862__auto___30107);
var G__30111 = (0);
seq__30092_30096 = G__30108;
chunk__30093_30097 = G__30109;
count__30094_30098 = G__30110;
i__30095_30099 = G__30111;
continue;
} else {
var lib_30112 = cljs.core.first.call(null,seq__30092_30106__$1);
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30112),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30112),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__25051__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_30112),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30112),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_30112),"');");

}
}

var G__30113 = cljs.core.next.call(null,seq__30092_30106__$1);
var G__30114 = null;
var G__30115 = (0);
var G__30116 = (0);
seq__30092_30096 = G__30113;
chunk__30093_30097 = G__30114;
count__30094_30098 = G__30115;
i__30095_30099 = G__30116;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__30117){
var map__30118 = p__30117;
var map__30118__$1 = ((((!((map__30118 == null)))?((((map__30118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30118):map__30118);
var name = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__30120){
var map__30121 = p__30120;
var map__30121__$1 = ((((!((map__30121 == null)))?((((map__30121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30121):map__30121);
var t = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30121__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30123_30141 = cljs.core.seq.call(null,protocols);
var chunk__30124_30142 = null;
var count__30125_30143 = (0);
var i__30126_30144 = (0);
while(true){
if((i__30126_30144 < count__30125_30143)){
var protocol_30145 = cljs.core._nth.call(null,chunk__30124_30142,i__30126_30144);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30145)].join('')),"}");

var G__30146 = seq__30123_30141;
var G__30147 = chunk__30124_30142;
var G__30148 = count__30125_30143;
var G__30149 = (i__30126_30144 + (1));
seq__30123_30141 = G__30146;
chunk__30124_30142 = G__30147;
count__30125_30143 = G__30148;
i__30126_30144 = G__30149;
continue;
} else {
var temp__4657__auto___30150 = cljs.core.seq.call(null,seq__30123_30141);
if(temp__4657__auto___30150){
var seq__30123_30151__$1 = temp__4657__auto___30150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30123_30151__$1)){
var c__25862__auto___30152 = cljs.core.chunk_first.call(null,seq__30123_30151__$1);
var G__30153 = cljs.core.chunk_rest.call(null,seq__30123_30151__$1);
var G__30154 = c__25862__auto___30152;
var G__30155 = cljs.core.count.call(null,c__25862__auto___30152);
var G__30156 = (0);
seq__30123_30141 = G__30153;
chunk__30124_30142 = G__30154;
count__30125_30143 = G__30155;
i__30126_30144 = G__30156;
continue;
} else {
var protocol_30157 = cljs.core.first.call(null,seq__30123_30151__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30157)].join('')),"}");

var G__30158 = cljs.core.next.call(null,seq__30123_30151__$1);
var G__30159 = null;
var G__30160 = (0);
var G__30161 = (0);
seq__30123_30141 = G__30158;
chunk__30124_30142 = G__30159;
count__30125_30143 = G__30160;
i__30126_30144 = G__30161;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30127_30162 = cljs.core.seq.call(null,fields__$1);
var chunk__30128_30163 = null;
var count__30129_30164 = (0);
var i__30130_30165 = (0);
while(true){
if((i__30130_30165 < count__30129_30164)){
var fld_30166 = cljs.core._nth.call(null,chunk__30128_30163,i__30130_30165);
cljs.compiler.emitln.call(null,"this.",fld_30166," = ",fld_30166,";");

var G__30167 = seq__30127_30162;
var G__30168 = chunk__30128_30163;
var G__30169 = count__30129_30164;
var G__30170 = (i__30130_30165 + (1));
seq__30127_30162 = G__30167;
chunk__30128_30163 = G__30168;
count__30129_30164 = G__30169;
i__30130_30165 = G__30170;
continue;
} else {
var temp__4657__auto___30171 = cljs.core.seq.call(null,seq__30127_30162);
if(temp__4657__auto___30171){
var seq__30127_30172__$1 = temp__4657__auto___30171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30127_30172__$1)){
var c__25862__auto___30173 = cljs.core.chunk_first.call(null,seq__30127_30172__$1);
var G__30174 = cljs.core.chunk_rest.call(null,seq__30127_30172__$1);
var G__30175 = c__25862__auto___30173;
var G__30176 = cljs.core.count.call(null,c__25862__auto___30173);
var G__30177 = (0);
seq__30127_30162 = G__30174;
chunk__30128_30163 = G__30175;
count__30129_30164 = G__30176;
i__30130_30165 = G__30177;
continue;
} else {
var fld_30178 = cljs.core.first.call(null,seq__30127_30172__$1);
cljs.compiler.emitln.call(null,"this.",fld_30178," = ",fld_30178,";");

var G__30179 = cljs.core.next.call(null,seq__30127_30172__$1);
var G__30180 = null;
var G__30181 = (0);
var G__30182 = (0);
seq__30127_30162 = G__30179;
chunk__30128_30163 = G__30180;
count__30129_30164 = G__30181;
i__30130_30165 = G__30182;
continue;
}
} else {
}
}
break;
}

var seq__30131_30183 = cljs.core.seq.call(null,pmasks);
var chunk__30132_30184 = null;
var count__30133_30185 = (0);
var i__30134_30186 = (0);
while(true){
if((i__30134_30186 < count__30133_30185)){
var vec__30135_30187 = cljs.core._nth.call(null,chunk__30132_30184,i__30134_30186);
var pno_30188 = cljs.core.nth.call(null,vec__30135_30187,(0),null);
var pmask_30189 = cljs.core.nth.call(null,vec__30135_30187,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30188,"$ = ",pmask_30189,";");

var G__30190 = seq__30131_30183;
var G__30191 = chunk__30132_30184;
var G__30192 = count__30133_30185;
var G__30193 = (i__30134_30186 + (1));
seq__30131_30183 = G__30190;
chunk__30132_30184 = G__30191;
count__30133_30185 = G__30192;
i__30134_30186 = G__30193;
continue;
} else {
var temp__4657__auto___30194 = cljs.core.seq.call(null,seq__30131_30183);
if(temp__4657__auto___30194){
var seq__30131_30195__$1 = temp__4657__auto___30194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30131_30195__$1)){
var c__25862__auto___30196 = cljs.core.chunk_first.call(null,seq__30131_30195__$1);
var G__30197 = cljs.core.chunk_rest.call(null,seq__30131_30195__$1);
var G__30198 = c__25862__auto___30196;
var G__30199 = cljs.core.count.call(null,c__25862__auto___30196);
var G__30200 = (0);
seq__30131_30183 = G__30197;
chunk__30132_30184 = G__30198;
count__30133_30185 = G__30199;
i__30134_30186 = G__30200;
continue;
} else {
var vec__30138_30201 = cljs.core.first.call(null,seq__30131_30195__$1);
var pno_30202 = cljs.core.nth.call(null,vec__30138_30201,(0),null);
var pmask_30203 = cljs.core.nth.call(null,vec__30138_30201,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30202,"$ = ",pmask_30203,";");

var G__30204 = cljs.core.next.call(null,seq__30131_30195__$1);
var G__30205 = null;
var G__30206 = (0);
var G__30207 = (0);
seq__30131_30183 = G__30204;
chunk__30132_30184 = G__30205;
count__30133_30185 = G__30206;
i__30134_30186 = G__30207;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__30208){
var map__30209 = p__30208;
var map__30209__$1 = ((((!((map__30209 == null)))?((((map__30209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30209):map__30209);
var t = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__30209__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__30211_30229 = cljs.core.seq.call(null,protocols);
var chunk__30212_30230 = null;
var count__30213_30231 = (0);
var i__30214_30232 = (0);
while(true){
if((i__30214_30232 < count__30213_30231)){
var protocol_30233 = cljs.core._nth.call(null,chunk__30212_30230,i__30214_30232);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30233)].join('')),"}");

var G__30234 = seq__30211_30229;
var G__30235 = chunk__30212_30230;
var G__30236 = count__30213_30231;
var G__30237 = (i__30214_30232 + (1));
seq__30211_30229 = G__30234;
chunk__30212_30230 = G__30235;
count__30213_30231 = G__30236;
i__30214_30232 = G__30237;
continue;
} else {
var temp__4657__auto___30238 = cljs.core.seq.call(null,seq__30211_30229);
if(temp__4657__auto___30238){
var seq__30211_30239__$1 = temp__4657__auto___30238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30211_30239__$1)){
var c__25862__auto___30240 = cljs.core.chunk_first.call(null,seq__30211_30239__$1);
var G__30241 = cljs.core.chunk_rest.call(null,seq__30211_30239__$1);
var G__30242 = c__25862__auto___30240;
var G__30243 = cljs.core.count.call(null,c__25862__auto___30240);
var G__30244 = (0);
seq__30211_30229 = G__30241;
chunk__30212_30230 = G__30242;
count__30213_30231 = G__30243;
i__30214_30232 = G__30244;
continue;
} else {
var protocol_30245 = cljs.core.first.call(null,seq__30211_30239__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_30245)].join('')),"}");

var G__30246 = cljs.core.next.call(null,seq__30211_30239__$1);
var G__30247 = null;
var G__30248 = (0);
var G__30249 = (0);
seq__30211_30229 = G__30246;
chunk__30212_30230 = G__30247;
count__30213_30231 = G__30248;
i__30214_30232 = G__30249;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__30215_30250 = cljs.core.seq.call(null,fields__$1);
var chunk__30216_30251 = null;
var count__30217_30252 = (0);
var i__30218_30253 = (0);
while(true){
if((i__30218_30253 < count__30217_30252)){
var fld_30254 = cljs.core._nth.call(null,chunk__30216_30251,i__30218_30253);
cljs.compiler.emitln.call(null,"this.",fld_30254," = ",fld_30254,";");

var G__30255 = seq__30215_30250;
var G__30256 = chunk__30216_30251;
var G__30257 = count__30217_30252;
var G__30258 = (i__30218_30253 + (1));
seq__30215_30250 = G__30255;
chunk__30216_30251 = G__30256;
count__30217_30252 = G__30257;
i__30218_30253 = G__30258;
continue;
} else {
var temp__4657__auto___30259 = cljs.core.seq.call(null,seq__30215_30250);
if(temp__4657__auto___30259){
var seq__30215_30260__$1 = temp__4657__auto___30259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30215_30260__$1)){
var c__25862__auto___30261 = cljs.core.chunk_first.call(null,seq__30215_30260__$1);
var G__30262 = cljs.core.chunk_rest.call(null,seq__30215_30260__$1);
var G__30263 = c__25862__auto___30261;
var G__30264 = cljs.core.count.call(null,c__25862__auto___30261);
var G__30265 = (0);
seq__30215_30250 = G__30262;
chunk__30216_30251 = G__30263;
count__30217_30252 = G__30264;
i__30218_30253 = G__30265;
continue;
} else {
var fld_30266 = cljs.core.first.call(null,seq__30215_30260__$1);
cljs.compiler.emitln.call(null,"this.",fld_30266," = ",fld_30266,";");

var G__30267 = cljs.core.next.call(null,seq__30215_30260__$1);
var G__30268 = null;
var G__30269 = (0);
var G__30270 = (0);
seq__30215_30250 = G__30267;
chunk__30216_30251 = G__30268;
count__30217_30252 = G__30269;
i__30218_30253 = G__30270;
continue;
}
} else {
}
}
break;
}

var seq__30219_30271 = cljs.core.seq.call(null,pmasks);
var chunk__30220_30272 = null;
var count__30221_30273 = (0);
var i__30222_30274 = (0);
while(true){
if((i__30222_30274 < count__30221_30273)){
var vec__30223_30275 = cljs.core._nth.call(null,chunk__30220_30272,i__30222_30274);
var pno_30276 = cljs.core.nth.call(null,vec__30223_30275,(0),null);
var pmask_30277 = cljs.core.nth.call(null,vec__30223_30275,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30276,"$ = ",pmask_30277,";");

var G__30278 = seq__30219_30271;
var G__30279 = chunk__30220_30272;
var G__30280 = count__30221_30273;
var G__30281 = (i__30222_30274 + (1));
seq__30219_30271 = G__30278;
chunk__30220_30272 = G__30279;
count__30221_30273 = G__30280;
i__30222_30274 = G__30281;
continue;
} else {
var temp__4657__auto___30282 = cljs.core.seq.call(null,seq__30219_30271);
if(temp__4657__auto___30282){
var seq__30219_30283__$1 = temp__4657__auto___30282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30219_30283__$1)){
var c__25862__auto___30284 = cljs.core.chunk_first.call(null,seq__30219_30283__$1);
var G__30285 = cljs.core.chunk_rest.call(null,seq__30219_30283__$1);
var G__30286 = c__25862__auto___30284;
var G__30287 = cljs.core.count.call(null,c__25862__auto___30284);
var G__30288 = (0);
seq__30219_30271 = G__30285;
chunk__30220_30272 = G__30286;
count__30221_30273 = G__30287;
i__30222_30274 = G__30288;
continue;
} else {
var vec__30226_30289 = cljs.core.first.call(null,seq__30219_30283__$1);
var pno_30290 = cljs.core.nth.call(null,vec__30226_30289,(0),null);
var pmask_30291 = cljs.core.nth.call(null,vec__30226_30289,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_30290,"$ = ",pmask_30291,";");

var G__30292 = cljs.core.next.call(null,seq__30219_30283__$1);
var G__30293 = null;
var G__30294 = (0);
var G__30295 = (0);
seq__30219_30271 = G__30292;
chunk__30220_30272 = G__30293;
count__30221_30273 = G__30294;
i__30222_30274 = G__30295;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__30296){
var map__30297 = p__30296;
var map__30297__$1 = ((((!((map__30297 == null)))?((((map__30297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30297):map__30297);
var target = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__30297__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__30299){
var map__30300 = p__30299;
var map__30300__$1 = ((((!((map__30300 == null)))?((((map__30300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30300):map__30300);
var op = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__30300__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__25039__auto__ = code;
if(cljs.core.truth_(and__25039__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__25039__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__29187__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__29187__auto__))){
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
var seq__30314 = cljs.core.seq.call(null,table);
var chunk__30315 = null;
var count__30316 = (0);
var i__30317 = (0);
while(true){
if((i__30317 < count__30316)){
var vec__30318 = cljs.core._nth.call(null,chunk__30315,i__30317);
var sym = cljs.core.nth.call(null,vec__30318,(0),null);
var value = cljs.core.nth.call(null,vec__30318,(1),null);
var ns_30324 = cljs.core.namespace.call(null,sym);
var name_30325 = cljs.core.name.call(null,sym);
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

var G__30326 = seq__30314;
var G__30327 = chunk__30315;
var G__30328 = count__30316;
var G__30329 = (i__30317 + (1));
seq__30314 = G__30326;
chunk__30315 = G__30327;
count__30316 = G__30328;
i__30317 = G__30329;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30314);
if(temp__4657__auto__){
var seq__30314__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30314__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__30314__$1);
var G__30330 = cljs.core.chunk_rest.call(null,seq__30314__$1);
var G__30331 = c__25862__auto__;
var G__30332 = cljs.core.count.call(null,c__25862__auto__);
var G__30333 = (0);
seq__30314 = G__30330;
chunk__30315 = G__30331;
count__30316 = G__30332;
i__30317 = G__30333;
continue;
} else {
var vec__30321 = cljs.core.first.call(null,seq__30314__$1);
var sym = cljs.core.nth.call(null,vec__30321,(0),null);
var value = cljs.core.nth.call(null,vec__30321,(1),null);
var ns_30334 = cljs.core.namespace.call(null,sym);
var name_30335 = cljs.core.name.call(null,sym);
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

var G__30336 = cljs.core.next.call(null,seq__30314__$1);
var G__30337 = null;
var G__30338 = (0);
var G__30339 = (0);
seq__30314 = G__30336;
chunk__30315 = G__30337;
count__30316 = G__30338;
i__30317 = G__30339;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map