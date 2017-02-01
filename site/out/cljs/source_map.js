// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__28387){
var vec__28388 = p__28387;
var i = cljs.core.nth.call(null,vec__28388,(0),null);
var v = cljs.core.nth.call(null,vec__28388,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__28394 = seg;
var gcol = cljs.core.nth.call(null,vec__28394,(0),null);
var source = cljs.core.nth.call(null,vec__28394,(1),null);
var line = cljs.core.nth.call(null,vec__28394,(2),null);
var col = cljs.core.nth.call(null,vec__28394,(3),null);
var name = cljs.core.nth.call(null,vec__28394,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__28403 = seg;
var gcol = cljs.core.nth.call(null,vec__28403,(0),null);
var source = cljs.core.nth.call(null,vec__28403,(1),null);
var line = cljs.core.nth.call(null,vec__28403,(2),null);
var col = cljs.core.nth.call(null,vec__28403,(3),null);
var name = cljs.core.nth.call(null,vec__28403,(4),null);
var vec__28406 = relseg;
var rgcol = cljs.core.nth.call(null,vec__28406,(0),null);
var rsource = cljs.core.nth.call(null,vec__28406,(1),null);
var rline = cljs.core.nth.call(null,vec__28406,(2),null);
var rcol = cljs.core.nth.call(null,vec__28406,(3),null);
var rname = cljs.core.nth.call(null,vec__28406,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__25051__auto__ = source;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__25051__auto__ = line;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__25051__auto__ = col;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__28411 = segmap;
var map__28411__$1 = ((((!((map__28411 == null)))?((((map__28411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var gcol = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__28411,map__28411__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__28411,map__28411__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__28411,map__28411__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__28411,map__28411__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28411,map__28411__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__28411,map__28411__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args28413 = [];
var len__26126__auto___28419 = arguments.length;
var i__26127__auto___28420 = (0);
while(true){
if((i__26127__auto___28420 < len__26126__auto___28419)){
args28413.push((arguments[i__26127__auto___28420]));

var G__28421 = (i__26127__auto___28420 + (1));
i__26127__auto___28420 = G__28421;
continue;
} else {
}
break;
}

var G__28415 = args28413.length;
switch (G__28415) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28413.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__28416 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28423 = cljs.core.next.call(null,segs__$1);
var G__28424 = nrelseg;
var G__28425 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28423;
relseg__$1 = G__28424;
result__$1 = G__28425;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28416,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28416,(1),null);
var G__28426 = (gline + (1));
var G__28427 = cljs.core.next.call(null,lines__$1);
var G__28428 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28429 = result__$1;
gline = G__28426;
lines__$1 = G__28427;
relseg = G__28428;
result = G__28429;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__28433 = segmap;
var map__28433__$1 = ((((!((map__28433 == null)))?((((map__28433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28433):map__28433);
var gcol = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__28433,map__28433__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__28433,map__28433__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__28430_SHARP_){
return cljs.core.conj.call(null,p1__28430_SHARP_,d__$1);
});})(map__28433,map__28433__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__28433,map__28433__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args28435 = [];
var len__26126__auto___28441 = arguments.length;
var i__26127__auto___28442 = (0);
while(true){
if((i__26127__auto___28442 < len__26126__auto___28441)){
args28435.push((arguments[i__26127__auto___28442]));

var G__28443 = (i__26127__auto___28442 + (1));
i__26127__auto___28442 = G__28443;
continue;
} else {
}
break;
}

var G__28437 = args28435.length;
switch (G__28437) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28435.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__28438 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__28445 = cljs.core.next.call(null,segs__$1);
var G__28446 = nrelseg;
var G__28447 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__28445;
relseg__$1 = G__28446;
result__$1 = G__28447;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__28438,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__28438,(1),null);
var G__28448 = (gline + (1));
var G__28449 = cljs.core.next.call(null,lines__$1);
var G__28450 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__28451 = result__$1;
gline = G__28448;
lines__$1 = G__28449;
relseg = G__28450;
result = G__28451;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__28464){
var vec__28465 = p__28464;
var _ = cljs.core.nth.call(null,vec__28465,(0),null);
var source = cljs.core.nth.call(null,vec__28465,(1),null);
var line = cljs.core.nth.call(null,vec__28465,(2),null);
var col = cljs.core.nth.call(null,vec__28465,(3),null);
var name = cljs.core.nth.call(null,vec__28465,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__28468){
var vec__28469 = p__28468;
var gcol = cljs.core.nth.call(null,vec__28469,(0),null);
var sidx = cljs.core.nth.call(null,vec__28469,(1),null);
var line = cljs.core.nth.call(null,vec__28469,(2),null);
var col = cljs.core.nth.call(null,vec__28469,(3),null);
var name = cljs.core.nth.call(null,vec__28469,(4),null);
var seg = vec__28469;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__28469,gcol,sidx,line,col,name,seg,relseg){
return (function (p__28472){
var vec__28473 = p__28472;
var _ = cljs.core.nth.call(null,vec__28473,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__28473,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__28473,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__28473,(3),null);
var lname = cljs.core.nth.call(null,vec__28473,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__28469,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__25051__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__28561 = cljs.core.seq.call(null,infos);
var chunk__28562 = null;
var count__28563 = (0);
var i__28564 = (0);
while(true){
if((i__28564 < count__28563)){
var info = cljs.core._nth.call(null,chunk__28562,i__28564);
var segv_28643 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28644 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28645 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28644 > (lc_28645 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28561,chunk__28562,count__28563,i__28564,segv_28643,gline_28644,lc_28645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28644 - (lc_28645 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28643], null));
});})(seq__28561,chunk__28562,count__28563,i__28564,segv_28643,gline_28644,lc_28645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28561,chunk__28562,count__28563,i__28564,segv_28643,gline_28644,lc_28645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28644], null),cljs.core.conj,segv_28643);
});})(seq__28561,chunk__28562,count__28563,i__28564,segv_28643,gline_28644,lc_28645,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__28646 = seq__28561;
var G__28647 = chunk__28562;
var G__28648 = count__28563;
var G__28649 = (i__28564 + (1));
seq__28561 = G__28646;
chunk__28562 = G__28647;
count__28563 = G__28648;
i__28564 = G__28649;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28561);
if(temp__4657__auto__){
var seq__28561__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28561__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__28561__$1);
var G__28650 = cljs.core.chunk_rest.call(null,seq__28561__$1);
var G__28651 = c__25862__auto__;
var G__28652 = cljs.core.count.call(null,c__25862__auto__);
var G__28653 = (0);
seq__28561 = G__28650;
chunk__28562 = G__28651;
count__28563 = G__28652;
i__28564 = G__28653;
continue;
} else {
var info = cljs.core.first.call(null,seq__28561__$1);
var segv_28654 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_28655 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_28656 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_28655 > (lc_28656 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__28561,chunk__28562,count__28563,i__28564,segv_28654,gline_28655,lc_28656,info,seq__28561__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_28655 - (lc_28656 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_28654], null));
});})(seq__28561,chunk__28562,count__28563,i__28564,segv_28654,gline_28655,lc_28656,info,seq__28561__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__28561,chunk__28562,count__28563,i__28564,segv_28654,gline_28655,lc_28656,info,seq__28561__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_28655], null),cljs.core.conj,segv_28654);
});})(seq__28561,chunk__28562,count__28563,i__28564,segv_28654,gline_28655,lc_28656,info,seq__28561__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__28657 = cljs.core.next.call(null,seq__28561__$1);
var G__28658 = null;
var G__28659 = (0);
var G__28660 = (0);
seq__28561 = G__28657;
chunk__28562 = G__28658;
count__28563 = G__28659;
i__28564 = G__28660;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__28565_28661 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__28566_28662 = null;
var count__28567_28663 = (0);
var i__28568_28664 = (0);
while(true){
if((i__28568_28664 < count__28567_28663)){
var vec__28569_28665 = cljs.core._nth.call(null,chunk__28566_28662,i__28568_28664);
var source_idx_28666 = cljs.core.nth.call(null,vec__28569_28665,(0),null);
var vec__28572_28667 = cljs.core.nth.call(null,vec__28569_28665,(1),null);
var __28668 = cljs.core.nth.call(null,vec__28572_28667,(0),null);
var lines_28669__$1 = cljs.core.nth.call(null,vec__28572_28667,(1),null);
var seq__28575_28670 = cljs.core.seq.call(null,lines_28669__$1);
var chunk__28576_28671 = null;
var count__28577_28672 = (0);
var i__28578_28673 = (0);
while(true){
if((i__28578_28673 < count__28577_28672)){
var vec__28579_28674 = cljs.core._nth.call(null,chunk__28576_28671,i__28578_28673);
var line_28675 = cljs.core.nth.call(null,vec__28579_28674,(0),null);
var cols_28676 = cljs.core.nth.call(null,vec__28579_28674,(1),null);
var seq__28582_28677 = cljs.core.seq.call(null,cols_28676);
var chunk__28583_28678 = null;
var count__28584_28679 = (0);
var i__28585_28680 = (0);
while(true){
if((i__28585_28680 < count__28584_28679)){
var vec__28586_28681 = cljs.core._nth.call(null,chunk__28583_28678,i__28585_28680);
var col_28682 = cljs.core.nth.call(null,vec__28586_28681,(0),null);
var infos_28683 = cljs.core.nth.call(null,vec__28586_28681,(1),null);
encode_cols.call(null,infos_28683,source_idx_28666,line_28675,col_28682);

var G__28684 = seq__28582_28677;
var G__28685 = chunk__28583_28678;
var G__28686 = count__28584_28679;
var G__28687 = (i__28585_28680 + (1));
seq__28582_28677 = G__28684;
chunk__28583_28678 = G__28685;
count__28584_28679 = G__28686;
i__28585_28680 = G__28687;
continue;
} else {
var temp__4657__auto___28688 = cljs.core.seq.call(null,seq__28582_28677);
if(temp__4657__auto___28688){
var seq__28582_28689__$1 = temp__4657__auto___28688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28582_28689__$1)){
var c__25862__auto___28690 = cljs.core.chunk_first.call(null,seq__28582_28689__$1);
var G__28691 = cljs.core.chunk_rest.call(null,seq__28582_28689__$1);
var G__28692 = c__25862__auto___28690;
var G__28693 = cljs.core.count.call(null,c__25862__auto___28690);
var G__28694 = (0);
seq__28582_28677 = G__28691;
chunk__28583_28678 = G__28692;
count__28584_28679 = G__28693;
i__28585_28680 = G__28694;
continue;
} else {
var vec__28589_28695 = cljs.core.first.call(null,seq__28582_28689__$1);
var col_28696 = cljs.core.nth.call(null,vec__28589_28695,(0),null);
var infos_28697 = cljs.core.nth.call(null,vec__28589_28695,(1),null);
encode_cols.call(null,infos_28697,source_idx_28666,line_28675,col_28696);

var G__28698 = cljs.core.next.call(null,seq__28582_28689__$1);
var G__28699 = null;
var G__28700 = (0);
var G__28701 = (0);
seq__28582_28677 = G__28698;
chunk__28583_28678 = G__28699;
count__28584_28679 = G__28700;
i__28585_28680 = G__28701;
continue;
}
} else {
}
}
break;
}

var G__28702 = seq__28575_28670;
var G__28703 = chunk__28576_28671;
var G__28704 = count__28577_28672;
var G__28705 = (i__28578_28673 + (1));
seq__28575_28670 = G__28702;
chunk__28576_28671 = G__28703;
count__28577_28672 = G__28704;
i__28578_28673 = G__28705;
continue;
} else {
var temp__4657__auto___28706 = cljs.core.seq.call(null,seq__28575_28670);
if(temp__4657__auto___28706){
var seq__28575_28707__$1 = temp__4657__auto___28706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28575_28707__$1)){
var c__25862__auto___28708 = cljs.core.chunk_first.call(null,seq__28575_28707__$1);
var G__28709 = cljs.core.chunk_rest.call(null,seq__28575_28707__$1);
var G__28710 = c__25862__auto___28708;
var G__28711 = cljs.core.count.call(null,c__25862__auto___28708);
var G__28712 = (0);
seq__28575_28670 = G__28709;
chunk__28576_28671 = G__28710;
count__28577_28672 = G__28711;
i__28578_28673 = G__28712;
continue;
} else {
var vec__28592_28713 = cljs.core.first.call(null,seq__28575_28707__$1);
var line_28714 = cljs.core.nth.call(null,vec__28592_28713,(0),null);
var cols_28715 = cljs.core.nth.call(null,vec__28592_28713,(1),null);
var seq__28595_28716 = cljs.core.seq.call(null,cols_28715);
var chunk__28596_28717 = null;
var count__28597_28718 = (0);
var i__28598_28719 = (0);
while(true){
if((i__28598_28719 < count__28597_28718)){
var vec__28599_28720 = cljs.core._nth.call(null,chunk__28596_28717,i__28598_28719);
var col_28721 = cljs.core.nth.call(null,vec__28599_28720,(0),null);
var infos_28722 = cljs.core.nth.call(null,vec__28599_28720,(1),null);
encode_cols.call(null,infos_28722,source_idx_28666,line_28714,col_28721);

var G__28723 = seq__28595_28716;
var G__28724 = chunk__28596_28717;
var G__28725 = count__28597_28718;
var G__28726 = (i__28598_28719 + (1));
seq__28595_28716 = G__28723;
chunk__28596_28717 = G__28724;
count__28597_28718 = G__28725;
i__28598_28719 = G__28726;
continue;
} else {
var temp__4657__auto___28727__$1 = cljs.core.seq.call(null,seq__28595_28716);
if(temp__4657__auto___28727__$1){
var seq__28595_28728__$1 = temp__4657__auto___28727__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28595_28728__$1)){
var c__25862__auto___28729 = cljs.core.chunk_first.call(null,seq__28595_28728__$1);
var G__28730 = cljs.core.chunk_rest.call(null,seq__28595_28728__$1);
var G__28731 = c__25862__auto___28729;
var G__28732 = cljs.core.count.call(null,c__25862__auto___28729);
var G__28733 = (0);
seq__28595_28716 = G__28730;
chunk__28596_28717 = G__28731;
count__28597_28718 = G__28732;
i__28598_28719 = G__28733;
continue;
} else {
var vec__28602_28734 = cljs.core.first.call(null,seq__28595_28728__$1);
var col_28735 = cljs.core.nth.call(null,vec__28602_28734,(0),null);
var infos_28736 = cljs.core.nth.call(null,vec__28602_28734,(1),null);
encode_cols.call(null,infos_28736,source_idx_28666,line_28714,col_28735);

var G__28737 = cljs.core.next.call(null,seq__28595_28728__$1);
var G__28738 = null;
var G__28739 = (0);
var G__28740 = (0);
seq__28595_28716 = G__28737;
chunk__28596_28717 = G__28738;
count__28597_28718 = G__28739;
i__28598_28719 = G__28740;
continue;
}
} else {
}
}
break;
}

var G__28741 = cljs.core.next.call(null,seq__28575_28707__$1);
var G__28742 = null;
var G__28743 = (0);
var G__28744 = (0);
seq__28575_28670 = G__28741;
chunk__28576_28671 = G__28742;
count__28577_28672 = G__28743;
i__28578_28673 = G__28744;
continue;
}
} else {
}
}
break;
}

var G__28745 = seq__28565_28661;
var G__28746 = chunk__28566_28662;
var G__28747 = count__28567_28663;
var G__28748 = (i__28568_28664 + (1));
seq__28565_28661 = G__28745;
chunk__28566_28662 = G__28746;
count__28567_28663 = G__28747;
i__28568_28664 = G__28748;
continue;
} else {
var temp__4657__auto___28749 = cljs.core.seq.call(null,seq__28565_28661);
if(temp__4657__auto___28749){
var seq__28565_28750__$1 = temp__4657__auto___28749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28565_28750__$1)){
var c__25862__auto___28751 = cljs.core.chunk_first.call(null,seq__28565_28750__$1);
var G__28752 = cljs.core.chunk_rest.call(null,seq__28565_28750__$1);
var G__28753 = c__25862__auto___28751;
var G__28754 = cljs.core.count.call(null,c__25862__auto___28751);
var G__28755 = (0);
seq__28565_28661 = G__28752;
chunk__28566_28662 = G__28753;
count__28567_28663 = G__28754;
i__28568_28664 = G__28755;
continue;
} else {
var vec__28605_28756 = cljs.core.first.call(null,seq__28565_28750__$1);
var source_idx_28757 = cljs.core.nth.call(null,vec__28605_28756,(0),null);
var vec__28608_28758 = cljs.core.nth.call(null,vec__28605_28756,(1),null);
var __28759 = cljs.core.nth.call(null,vec__28608_28758,(0),null);
var lines_28760__$1 = cljs.core.nth.call(null,vec__28608_28758,(1),null);
var seq__28611_28761 = cljs.core.seq.call(null,lines_28760__$1);
var chunk__28612_28762 = null;
var count__28613_28763 = (0);
var i__28614_28764 = (0);
while(true){
if((i__28614_28764 < count__28613_28763)){
var vec__28615_28765 = cljs.core._nth.call(null,chunk__28612_28762,i__28614_28764);
var line_28766 = cljs.core.nth.call(null,vec__28615_28765,(0),null);
var cols_28767 = cljs.core.nth.call(null,vec__28615_28765,(1),null);
var seq__28618_28768 = cljs.core.seq.call(null,cols_28767);
var chunk__28619_28769 = null;
var count__28620_28770 = (0);
var i__28621_28771 = (0);
while(true){
if((i__28621_28771 < count__28620_28770)){
var vec__28622_28772 = cljs.core._nth.call(null,chunk__28619_28769,i__28621_28771);
var col_28773 = cljs.core.nth.call(null,vec__28622_28772,(0),null);
var infos_28774 = cljs.core.nth.call(null,vec__28622_28772,(1),null);
encode_cols.call(null,infos_28774,source_idx_28757,line_28766,col_28773);

var G__28775 = seq__28618_28768;
var G__28776 = chunk__28619_28769;
var G__28777 = count__28620_28770;
var G__28778 = (i__28621_28771 + (1));
seq__28618_28768 = G__28775;
chunk__28619_28769 = G__28776;
count__28620_28770 = G__28777;
i__28621_28771 = G__28778;
continue;
} else {
var temp__4657__auto___28779__$1 = cljs.core.seq.call(null,seq__28618_28768);
if(temp__4657__auto___28779__$1){
var seq__28618_28780__$1 = temp__4657__auto___28779__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28618_28780__$1)){
var c__25862__auto___28781 = cljs.core.chunk_first.call(null,seq__28618_28780__$1);
var G__28782 = cljs.core.chunk_rest.call(null,seq__28618_28780__$1);
var G__28783 = c__25862__auto___28781;
var G__28784 = cljs.core.count.call(null,c__25862__auto___28781);
var G__28785 = (0);
seq__28618_28768 = G__28782;
chunk__28619_28769 = G__28783;
count__28620_28770 = G__28784;
i__28621_28771 = G__28785;
continue;
} else {
var vec__28625_28786 = cljs.core.first.call(null,seq__28618_28780__$1);
var col_28787 = cljs.core.nth.call(null,vec__28625_28786,(0),null);
var infos_28788 = cljs.core.nth.call(null,vec__28625_28786,(1),null);
encode_cols.call(null,infos_28788,source_idx_28757,line_28766,col_28787);

var G__28789 = cljs.core.next.call(null,seq__28618_28780__$1);
var G__28790 = null;
var G__28791 = (0);
var G__28792 = (0);
seq__28618_28768 = G__28789;
chunk__28619_28769 = G__28790;
count__28620_28770 = G__28791;
i__28621_28771 = G__28792;
continue;
}
} else {
}
}
break;
}

var G__28793 = seq__28611_28761;
var G__28794 = chunk__28612_28762;
var G__28795 = count__28613_28763;
var G__28796 = (i__28614_28764 + (1));
seq__28611_28761 = G__28793;
chunk__28612_28762 = G__28794;
count__28613_28763 = G__28795;
i__28614_28764 = G__28796;
continue;
} else {
var temp__4657__auto___28797__$1 = cljs.core.seq.call(null,seq__28611_28761);
if(temp__4657__auto___28797__$1){
var seq__28611_28798__$1 = temp__4657__auto___28797__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28611_28798__$1)){
var c__25862__auto___28799 = cljs.core.chunk_first.call(null,seq__28611_28798__$1);
var G__28800 = cljs.core.chunk_rest.call(null,seq__28611_28798__$1);
var G__28801 = c__25862__auto___28799;
var G__28802 = cljs.core.count.call(null,c__25862__auto___28799);
var G__28803 = (0);
seq__28611_28761 = G__28800;
chunk__28612_28762 = G__28801;
count__28613_28763 = G__28802;
i__28614_28764 = G__28803;
continue;
} else {
var vec__28628_28804 = cljs.core.first.call(null,seq__28611_28798__$1);
var line_28805 = cljs.core.nth.call(null,vec__28628_28804,(0),null);
var cols_28806 = cljs.core.nth.call(null,vec__28628_28804,(1),null);
var seq__28631_28807 = cljs.core.seq.call(null,cols_28806);
var chunk__28632_28808 = null;
var count__28633_28809 = (0);
var i__28634_28810 = (0);
while(true){
if((i__28634_28810 < count__28633_28809)){
var vec__28635_28811 = cljs.core._nth.call(null,chunk__28632_28808,i__28634_28810);
var col_28812 = cljs.core.nth.call(null,vec__28635_28811,(0),null);
var infos_28813 = cljs.core.nth.call(null,vec__28635_28811,(1),null);
encode_cols.call(null,infos_28813,source_idx_28757,line_28805,col_28812);

var G__28814 = seq__28631_28807;
var G__28815 = chunk__28632_28808;
var G__28816 = count__28633_28809;
var G__28817 = (i__28634_28810 + (1));
seq__28631_28807 = G__28814;
chunk__28632_28808 = G__28815;
count__28633_28809 = G__28816;
i__28634_28810 = G__28817;
continue;
} else {
var temp__4657__auto___28818__$2 = cljs.core.seq.call(null,seq__28631_28807);
if(temp__4657__auto___28818__$2){
var seq__28631_28819__$1 = temp__4657__auto___28818__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28631_28819__$1)){
var c__25862__auto___28820 = cljs.core.chunk_first.call(null,seq__28631_28819__$1);
var G__28821 = cljs.core.chunk_rest.call(null,seq__28631_28819__$1);
var G__28822 = c__25862__auto___28820;
var G__28823 = cljs.core.count.call(null,c__25862__auto___28820);
var G__28824 = (0);
seq__28631_28807 = G__28821;
chunk__28632_28808 = G__28822;
count__28633_28809 = G__28823;
i__28634_28810 = G__28824;
continue;
} else {
var vec__28638_28825 = cljs.core.first.call(null,seq__28631_28819__$1);
var col_28826 = cljs.core.nth.call(null,vec__28638_28825,(0),null);
var infos_28827 = cljs.core.nth.call(null,vec__28638_28825,(1),null);
encode_cols.call(null,infos_28827,source_idx_28757,line_28805,col_28826);

var G__28828 = cljs.core.next.call(null,seq__28631_28819__$1);
var G__28829 = null;
var G__28830 = (0);
var G__28831 = (0);
seq__28631_28807 = G__28828;
chunk__28632_28808 = G__28829;
count__28633_28809 = G__28830;
i__28634_28810 = G__28831;
continue;
}
} else {
}
}
break;
}

var G__28832 = cljs.core.next.call(null,seq__28611_28798__$1);
var G__28833 = null;
var G__28834 = (0);
var G__28835 = (0);
seq__28611_28761 = G__28832;
chunk__28612_28762 = G__28833;
count__28613_28763 = G__28834;
i__28614_28764 = G__28835;
continue;
}
} else {
}
}
break;
}

var G__28836 = cljs.core.next.call(null,seq__28565_28750__$1);
var G__28837 = null;
var G__28838 = (0);
var G__28839 = (0);
seq__28565_28661 = G__28836;
chunk__28566_28662 = G__28837;
count__28567_28663 = G__28838;
i__28568_28664 = G__28839;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__28641 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28476_SHARP_){
return [cljs.core.str(p1__28476_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28477_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__28477_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__28478_SHARP_){
return clojure.string.join.call(null,",",p1__28478_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__28642 = G__28641;
goog.object.set(G__28642,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__28642;
} else {
return G__28641;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__28849 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__28849,(0),null);
var col_map = cljs.core.nth.call(null,vec__28849,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__28852 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__28852,(0),null);
var infos = cljs.core.nth.call(null,vec__28852,(1),null);
var G__28858 = cljs.core.next.call(null,col_map_seq);
var G__28859 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__28852,col,infos,vec__28849,line,col_map){
return (function (v,p__28855){
var map__28856 = p__28855;
var map__28856__$1 = ((((!((map__28856 == null)))?((((map__28856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28856):map__28856);
var gline = cljs.core.get.call(null,map__28856__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__28856__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__28852,col,infos,vec__28849,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__28858;
new_cols = G__28859;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__28860 = cljs.core.next.call(null,line_map_seq);
var G__28861 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__28860;
new_lines = G__28861;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__28924_28986 = cljs.core.seq.call(null,reverse_map);
var chunk__28925_28987 = null;
var count__28926_28988 = (0);
var i__28927_28989 = (0);
while(true){
if((i__28927_28989 < count__28926_28988)){
var vec__28928_28990 = cljs.core._nth.call(null,chunk__28925_28987,i__28927_28989);
var line_28991 = cljs.core.nth.call(null,vec__28928_28990,(0),null);
var columns_28992 = cljs.core.nth.call(null,vec__28928_28990,(1),null);
var seq__28931_28993 = cljs.core.seq.call(null,columns_28992);
var chunk__28932_28994 = null;
var count__28933_28995 = (0);
var i__28934_28996 = (0);
while(true){
if((i__28934_28996 < count__28933_28995)){
var vec__28935_28997 = cljs.core._nth.call(null,chunk__28932_28994,i__28934_28996);
var column_28998 = cljs.core.nth.call(null,vec__28935_28997,(0),null);
var column_info_28999 = cljs.core.nth.call(null,vec__28935_28997,(1),null);
var seq__28938_29000 = cljs.core.seq.call(null,column_info_28999);
var chunk__28939_29001 = null;
var count__28940_29002 = (0);
var i__28941_29003 = (0);
while(true){
if((i__28941_29003 < count__28940_29002)){
var map__28942_29004 = cljs.core._nth.call(null,chunk__28939_29001,i__28941_29003);
var map__28942_29005__$1 = ((((!((map__28942_29004 == null)))?((((map__28942_29004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28942_29004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28942_29004):map__28942_29004);
var gline_29006 = cljs.core.get.call(null,map__28942_29005__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29007 = cljs.core.get.call(null,map__28942_29005__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29008 = cljs.core.get.call(null,map__28942_29005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29006], null),cljs.core.fnil.call(null,((function (seq__28938_29000,chunk__28939_29001,count__28940_29002,i__28941_29003,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28942_29004,map__28942_29005__$1,gline_29006,gcol_29007,name_29008,vec__28935_28997,column_28998,column_info_28999,vec__28928_28990,line_28991,columns_28992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29007], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28991,new cljs.core.Keyword(null,"col","col",-1959363084),column_28998,new cljs.core.Keyword(null,"name","name",1843675177),name_29008], null));
});})(seq__28938_29000,chunk__28939_29001,count__28940_29002,i__28941_29003,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28942_29004,map__28942_29005__$1,gline_29006,gcol_29007,name_29008,vec__28935_28997,column_28998,column_info_28999,vec__28928_28990,line_28991,columns_28992,inverted))
,cljs.core.sorted_map.call(null)));

var G__29009 = seq__28938_29000;
var G__29010 = chunk__28939_29001;
var G__29011 = count__28940_29002;
var G__29012 = (i__28941_29003 + (1));
seq__28938_29000 = G__29009;
chunk__28939_29001 = G__29010;
count__28940_29002 = G__29011;
i__28941_29003 = G__29012;
continue;
} else {
var temp__4657__auto___29013 = cljs.core.seq.call(null,seq__28938_29000);
if(temp__4657__auto___29013){
var seq__28938_29014__$1 = temp__4657__auto___29013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28938_29014__$1)){
var c__25862__auto___29015 = cljs.core.chunk_first.call(null,seq__28938_29014__$1);
var G__29016 = cljs.core.chunk_rest.call(null,seq__28938_29014__$1);
var G__29017 = c__25862__auto___29015;
var G__29018 = cljs.core.count.call(null,c__25862__auto___29015);
var G__29019 = (0);
seq__28938_29000 = G__29016;
chunk__28939_29001 = G__29017;
count__28940_29002 = G__29018;
i__28941_29003 = G__29019;
continue;
} else {
var map__28944_29020 = cljs.core.first.call(null,seq__28938_29014__$1);
var map__28944_29021__$1 = ((((!((map__28944_29020 == null)))?((((map__28944_29020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28944_29020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28944_29020):map__28944_29020);
var gline_29022 = cljs.core.get.call(null,map__28944_29021__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29023 = cljs.core.get.call(null,map__28944_29021__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29024 = cljs.core.get.call(null,map__28944_29021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29022], null),cljs.core.fnil.call(null,((function (seq__28938_29000,chunk__28939_29001,count__28940_29002,i__28941_29003,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28944_29020,map__28944_29021__$1,gline_29022,gcol_29023,name_29024,seq__28938_29014__$1,temp__4657__auto___29013,vec__28935_28997,column_28998,column_info_28999,vec__28928_28990,line_28991,columns_28992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29023], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28991,new cljs.core.Keyword(null,"col","col",-1959363084),column_28998,new cljs.core.Keyword(null,"name","name",1843675177),name_29024], null));
});})(seq__28938_29000,chunk__28939_29001,count__28940_29002,i__28941_29003,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28944_29020,map__28944_29021__$1,gline_29022,gcol_29023,name_29024,seq__28938_29014__$1,temp__4657__auto___29013,vec__28935_28997,column_28998,column_info_28999,vec__28928_28990,line_28991,columns_28992,inverted))
,cljs.core.sorted_map.call(null)));

var G__29025 = cljs.core.next.call(null,seq__28938_29014__$1);
var G__29026 = null;
var G__29027 = (0);
var G__29028 = (0);
seq__28938_29000 = G__29025;
chunk__28939_29001 = G__29026;
count__28940_29002 = G__29027;
i__28941_29003 = G__29028;
continue;
}
} else {
}
}
break;
}

var G__29029 = seq__28931_28993;
var G__29030 = chunk__28932_28994;
var G__29031 = count__28933_28995;
var G__29032 = (i__28934_28996 + (1));
seq__28931_28993 = G__29029;
chunk__28932_28994 = G__29030;
count__28933_28995 = G__29031;
i__28934_28996 = G__29032;
continue;
} else {
var temp__4657__auto___29033 = cljs.core.seq.call(null,seq__28931_28993);
if(temp__4657__auto___29033){
var seq__28931_29034__$1 = temp__4657__auto___29033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28931_29034__$1)){
var c__25862__auto___29035 = cljs.core.chunk_first.call(null,seq__28931_29034__$1);
var G__29036 = cljs.core.chunk_rest.call(null,seq__28931_29034__$1);
var G__29037 = c__25862__auto___29035;
var G__29038 = cljs.core.count.call(null,c__25862__auto___29035);
var G__29039 = (0);
seq__28931_28993 = G__29036;
chunk__28932_28994 = G__29037;
count__28933_28995 = G__29038;
i__28934_28996 = G__29039;
continue;
} else {
var vec__28946_29040 = cljs.core.first.call(null,seq__28931_29034__$1);
var column_29041 = cljs.core.nth.call(null,vec__28946_29040,(0),null);
var column_info_29042 = cljs.core.nth.call(null,vec__28946_29040,(1),null);
var seq__28949_29043 = cljs.core.seq.call(null,column_info_29042);
var chunk__28950_29044 = null;
var count__28951_29045 = (0);
var i__28952_29046 = (0);
while(true){
if((i__28952_29046 < count__28951_29045)){
var map__28953_29047 = cljs.core._nth.call(null,chunk__28950_29044,i__28952_29046);
var map__28953_29048__$1 = ((((!((map__28953_29047 == null)))?((((map__28953_29047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28953_29047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28953_29047):map__28953_29047);
var gline_29049 = cljs.core.get.call(null,map__28953_29048__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29050 = cljs.core.get.call(null,map__28953_29048__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29051 = cljs.core.get.call(null,map__28953_29048__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29049], null),cljs.core.fnil.call(null,((function (seq__28949_29043,chunk__28950_29044,count__28951_29045,i__28952_29046,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28953_29047,map__28953_29048__$1,gline_29049,gcol_29050,name_29051,vec__28946_29040,column_29041,column_info_29042,seq__28931_29034__$1,temp__4657__auto___29033,vec__28928_28990,line_28991,columns_28992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29050], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28991,new cljs.core.Keyword(null,"col","col",-1959363084),column_29041,new cljs.core.Keyword(null,"name","name",1843675177),name_29051], null));
});})(seq__28949_29043,chunk__28950_29044,count__28951_29045,i__28952_29046,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28953_29047,map__28953_29048__$1,gline_29049,gcol_29050,name_29051,vec__28946_29040,column_29041,column_info_29042,seq__28931_29034__$1,temp__4657__auto___29033,vec__28928_28990,line_28991,columns_28992,inverted))
,cljs.core.sorted_map.call(null)));

var G__29052 = seq__28949_29043;
var G__29053 = chunk__28950_29044;
var G__29054 = count__28951_29045;
var G__29055 = (i__28952_29046 + (1));
seq__28949_29043 = G__29052;
chunk__28950_29044 = G__29053;
count__28951_29045 = G__29054;
i__28952_29046 = G__29055;
continue;
} else {
var temp__4657__auto___29056__$1 = cljs.core.seq.call(null,seq__28949_29043);
if(temp__4657__auto___29056__$1){
var seq__28949_29057__$1 = temp__4657__auto___29056__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28949_29057__$1)){
var c__25862__auto___29058 = cljs.core.chunk_first.call(null,seq__28949_29057__$1);
var G__29059 = cljs.core.chunk_rest.call(null,seq__28949_29057__$1);
var G__29060 = c__25862__auto___29058;
var G__29061 = cljs.core.count.call(null,c__25862__auto___29058);
var G__29062 = (0);
seq__28949_29043 = G__29059;
chunk__28950_29044 = G__29060;
count__28951_29045 = G__29061;
i__28952_29046 = G__29062;
continue;
} else {
var map__28955_29063 = cljs.core.first.call(null,seq__28949_29057__$1);
var map__28955_29064__$1 = ((((!((map__28955_29063 == null)))?((((map__28955_29063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28955_29063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28955_29063):map__28955_29063);
var gline_29065 = cljs.core.get.call(null,map__28955_29064__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29066 = cljs.core.get.call(null,map__28955_29064__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29067 = cljs.core.get.call(null,map__28955_29064__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29065], null),cljs.core.fnil.call(null,((function (seq__28949_29043,chunk__28950_29044,count__28951_29045,i__28952_29046,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28955_29063,map__28955_29064__$1,gline_29065,gcol_29066,name_29067,seq__28949_29057__$1,temp__4657__auto___29056__$1,vec__28946_29040,column_29041,column_info_29042,seq__28931_29034__$1,temp__4657__auto___29033,vec__28928_28990,line_28991,columns_28992,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29066], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_28991,new cljs.core.Keyword(null,"col","col",-1959363084),column_29041,new cljs.core.Keyword(null,"name","name",1843675177),name_29067], null));
});})(seq__28949_29043,chunk__28950_29044,count__28951_29045,i__28952_29046,seq__28931_28993,chunk__28932_28994,count__28933_28995,i__28934_28996,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28955_29063,map__28955_29064__$1,gline_29065,gcol_29066,name_29067,seq__28949_29057__$1,temp__4657__auto___29056__$1,vec__28946_29040,column_29041,column_info_29042,seq__28931_29034__$1,temp__4657__auto___29033,vec__28928_28990,line_28991,columns_28992,inverted))
,cljs.core.sorted_map.call(null)));

var G__29068 = cljs.core.next.call(null,seq__28949_29057__$1);
var G__29069 = null;
var G__29070 = (0);
var G__29071 = (0);
seq__28949_29043 = G__29068;
chunk__28950_29044 = G__29069;
count__28951_29045 = G__29070;
i__28952_29046 = G__29071;
continue;
}
} else {
}
}
break;
}

var G__29072 = cljs.core.next.call(null,seq__28931_29034__$1);
var G__29073 = null;
var G__29074 = (0);
var G__29075 = (0);
seq__28931_28993 = G__29072;
chunk__28932_28994 = G__29073;
count__28933_28995 = G__29074;
i__28934_28996 = G__29075;
continue;
}
} else {
}
}
break;
}

var G__29076 = seq__28924_28986;
var G__29077 = chunk__28925_28987;
var G__29078 = count__28926_28988;
var G__29079 = (i__28927_28989 + (1));
seq__28924_28986 = G__29076;
chunk__28925_28987 = G__29077;
count__28926_28988 = G__29078;
i__28927_28989 = G__29079;
continue;
} else {
var temp__4657__auto___29080 = cljs.core.seq.call(null,seq__28924_28986);
if(temp__4657__auto___29080){
var seq__28924_29081__$1 = temp__4657__auto___29080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28924_29081__$1)){
var c__25862__auto___29082 = cljs.core.chunk_first.call(null,seq__28924_29081__$1);
var G__29083 = cljs.core.chunk_rest.call(null,seq__28924_29081__$1);
var G__29084 = c__25862__auto___29082;
var G__29085 = cljs.core.count.call(null,c__25862__auto___29082);
var G__29086 = (0);
seq__28924_28986 = G__29083;
chunk__28925_28987 = G__29084;
count__28926_28988 = G__29085;
i__28927_28989 = G__29086;
continue;
} else {
var vec__28957_29087 = cljs.core.first.call(null,seq__28924_29081__$1);
var line_29088 = cljs.core.nth.call(null,vec__28957_29087,(0),null);
var columns_29089 = cljs.core.nth.call(null,vec__28957_29087,(1),null);
var seq__28960_29090 = cljs.core.seq.call(null,columns_29089);
var chunk__28961_29091 = null;
var count__28962_29092 = (0);
var i__28963_29093 = (0);
while(true){
if((i__28963_29093 < count__28962_29092)){
var vec__28964_29094 = cljs.core._nth.call(null,chunk__28961_29091,i__28963_29093);
var column_29095 = cljs.core.nth.call(null,vec__28964_29094,(0),null);
var column_info_29096 = cljs.core.nth.call(null,vec__28964_29094,(1),null);
var seq__28967_29097 = cljs.core.seq.call(null,column_info_29096);
var chunk__28968_29098 = null;
var count__28969_29099 = (0);
var i__28970_29100 = (0);
while(true){
if((i__28970_29100 < count__28969_29099)){
var map__28971_29101 = cljs.core._nth.call(null,chunk__28968_29098,i__28970_29100);
var map__28971_29102__$1 = ((((!((map__28971_29101 == null)))?((((map__28971_29101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28971_29101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28971_29101):map__28971_29101);
var gline_29103 = cljs.core.get.call(null,map__28971_29102__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29104 = cljs.core.get.call(null,map__28971_29102__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29105 = cljs.core.get.call(null,map__28971_29102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29103], null),cljs.core.fnil.call(null,((function (seq__28967_29097,chunk__28968_29098,count__28969_29099,i__28970_29100,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28971_29101,map__28971_29102__$1,gline_29103,gcol_29104,name_29105,vec__28964_29094,column_29095,column_info_29096,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29104], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29088,new cljs.core.Keyword(null,"col","col",-1959363084),column_29095,new cljs.core.Keyword(null,"name","name",1843675177),name_29105], null));
});})(seq__28967_29097,chunk__28968_29098,count__28969_29099,i__28970_29100,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28971_29101,map__28971_29102__$1,gline_29103,gcol_29104,name_29105,vec__28964_29094,column_29095,column_info_29096,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted))
,cljs.core.sorted_map.call(null)));

var G__29106 = seq__28967_29097;
var G__29107 = chunk__28968_29098;
var G__29108 = count__28969_29099;
var G__29109 = (i__28970_29100 + (1));
seq__28967_29097 = G__29106;
chunk__28968_29098 = G__29107;
count__28969_29099 = G__29108;
i__28970_29100 = G__29109;
continue;
} else {
var temp__4657__auto___29110__$1 = cljs.core.seq.call(null,seq__28967_29097);
if(temp__4657__auto___29110__$1){
var seq__28967_29111__$1 = temp__4657__auto___29110__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28967_29111__$1)){
var c__25862__auto___29112 = cljs.core.chunk_first.call(null,seq__28967_29111__$1);
var G__29113 = cljs.core.chunk_rest.call(null,seq__28967_29111__$1);
var G__29114 = c__25862__auto___29112;
var G__29115 = cljs.core.count.call(null,c__25862__auto___29112);
var G__29116 = (0);
seq__28967_29097 = G__29113;
chunk__28968_29098 = G__29114;
count__28969_29099 = G__29115;
i__28970_29100 = G__29116;
continue;
} else {
var map__28973_29117 = cljs.core.first.call(null,seq__28967_29111__$1);
var map__28973_29118__$1 = ((((!((map__28973_29117 == null)))?((((map__28973_29117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28973_29117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28973_29117):map__28973_29117);
var gline_29119 = cljs.core.get.call(null,map__28973_29118__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29120 = cljs.core.get.call(null,map__28973_29118__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29121 = cljs.core.get.call(null,map__28973_29118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29119], null),cljs.core.fnil.call(null,((function (seq__28967_29097,chunk__28968_29098,count__28969_29099,i__28970_29100,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28973_29117,map__28973_29118__$1,gline_29119,gcol_29120,name_29121,seq__28967_29111__$1,temp__4657__auto___29110__$1,vec__28964_29094,column_29095,column_info_29096,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29120], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29088,new cljs.core.Keyword(null,"col","col",-1959363084),column_29095,new cljs.core.Keyword(null,"name","name",1843675177),name_29121], null));
});})(seq__28967_29097,chunk__28968_29098,count__28969_29099,i__28970_29100,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28973_29117,map__28973_29118__$1,gline_29119,gcol_29120,name_29121,seq__28967_29111__$1,temp__4657__auto___29110__$1,vec__28964_29094,column_29095,column_info_29096,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted))
,cljs.core.sorted_map.call(null)));

var G__29122 = cljs.core.next.call(null,seq__28967_29111__$1);
var G__29123 = null;
var G__29124 = (0);
var G__29125 = (0);
seq__28967_29097 = G__29122;
chunk__28968_29098 = G__29123;
count__28969_29099 = G__29124;
i__28970_29100 = G__29125;
continue;
}
} else {
}
}
break;
}

var G__29126 = seq__28960_29090;
var G__29127 = chunk__28961_29091;
var G__29128 = count__28962_29092;
var G__29129 = (i__28963_29093 + (1));
seq__28960_29090 = G__29126;
chunk__28961_29091 = G__29127;
count__28962_29092 = G__29128;
i__28963_29093 = G__29129;
continue;
} else {
var temp__4657__auto___29130__$1 = cljs.core.seq.call(null,seq__28960_29090);
if(temp__4657__auto___29130__$1){
var seq__28960_29131__$1 = temp__4657__auto___29130__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28960_29131__$1)){
var c__25862__auto___29132 = cljs.core.chunk_first.call(null,seq__28960_29131__$1);
var G__29133 = cljs.core.chunk_rest.call(null,seq__28960_29131__$1);
var G__29134 = c__25862__auto___29132;
var G__29135 = cljs.core.count.call(null,c__25862__auto___29132);
var G__29136 = (0);
seq__28960_29090 = G__29133;
chunk__28961_29091 = G__29134;
count__28962_29092 = G__29135;
i__28963_29093 = G__29136;
continue;
} else {
var vec__28975_29137 = cljs.core.first.call(null,seq__28960_29131__$1);
var column_29138 = cljs.core.nth.call(null,vec__28975_29137,(0),null);
var column_info_29139 = cljs.core.nth.call(null,vec__28975_29137,(1),null);
var seq__28978_29140 = cljs.core.seq.call(null,column_info_29139);
var chunk__28979_29141 = null;
var count__28980_29142 = (0);
var i__28981_29143 = (0);
while(true){
if((i__28981_29143 < count__28980_29142)){
var map__28982_29144 = cljs.core._nth.call(null,chunk__28979_29141,i__28981_29143);
var map__28982_29145__$1 = ((((!((map__28982_29144 == null)))?((((map__28982_29144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28982_29144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28982_29144):map__28982_29144);
var gline_29146 = cljs.core.get.call(null,map__28982_29145__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29147 = cljs.core.get.call(null,map__28982_29145__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29148 = cljs.core.get.call(null,map__28982_29145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29146], null),cljs.core.fnil.call(null,((function (seq__28978_29140,chunk__28979_29141,count__28980_29142,i__28981_29143,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28982_29144,map__28982_29145__$1,gline_29146,gcol_29147,name_29148,vec__28975_29137,column_29138,column_info_29139,seq__28960_29131__$1,temp__4657__auto___29130__$1,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29147], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29088,new cljs.core.Keyword(null,"col","col",-1959363084),column_29138,new cljs.core.Keyword(null,"name","name",1843675177),name_29148], null));
});})(seq__28978_29140,chunk__28979_29141,count__28980_29142,i__28981_29143,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28982_29144,map__28982_29145__$1,gline_29146,gcol_29147,name_29148,vec__28975_29137,column_29138,column_info_29139,seq__28960_29131__$1,temp__4657__auto___29130__$1,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted))
,cljs.core.sorted_map.call(null)));

var G__29149 = seq__28978_29140;
var G__29150 = chunk__28979_29141;
var G__29151 = count__28980_29142;
var G__29152 = (i__28981_29143 + (1));
seq__28978_29140 = G__29149;
chunk__28979_29141 = G__29150;
count__28980_29142 = G__29151;
i__28981_29143 = G__29152;
continue;
} else {
var temp__4657__auto___29153__$2 = cljs.core.seq.call(null,seq__28978_29140);
if(temp__4657__auto___29153__$2){
var seq__28978_29154__$1 = temp__4657__auto___29153__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28978_29154__$1)){
var c__25862__auto___29155 = cljs.core.chunk_first.call(null,seq__28978_29154__$1);
var G__29156 = cljs.core.chunk_rest.call(null,seq__28978_29154__$1);
var G__29157 = c__25862__auto___29155;
var G__29158 = cljs.core.count.call(null,c__25862__auto___29155);
var G__29159 = (0);
seq__28978_29140 = G__29156;
chunk__28979_29141 = G__29157;
count__28980_29142 = G__29158;
i__28981_29143 = G__29159;
continue;
} else {
var map__28984_29160 = cljs.core.first.call(null,seq__28978_29154__$1);
var map__28984_29161__$1 = ((((!((map__28984_29160 == null)))?((((map__28984_29160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28984_29160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28984_29160):map__28984_29160);
var gline_29162 = cljs.core.get.call(null,map__28984_29161__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_29163 = cljs.core.get.call(null,map__28984_29161__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_29164 = cljs.core.get.call(null,map__28984_29161__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_29162], null),cljs.core.fnil.call(null,((function (seq__28978_29140,chunk__28979_29141,count__28980_29142,i__28981_29143,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28984_29160,map__28984_29161__$1,gline_29162,gcol_29163,name_29164,seq__28978_29154__$1,temp__4657__auto___29153__$2,vec__28975_29137,column_29138,column_info_29139,seq__28960_29131__$1,temp__4657__auto___29130__$1,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_29163], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_29088,new cljs.core.Keyword(null,"col","col",-1959363084),column_29138,new cljs.core.Keyword(null,"name","name",1843675177),name_29164], null));
});})(seq__28978_29140,chunk__28979_29141,count__28980_29142,i__28981_29143,seq__28960_29090,chunk__28961_29091,count__28962_29092,i__28963_29093,seq__28924_28986,chunk__28925_28987,count__28926_28988,i__28927_28989,map__28984_29160,map__28984_29161__$1,gline_29162,gcol_29163,name_29164,seq__28978_29154__$1,temp__4657__auto___29153__$2,vec__28975_29137,column_29138,column_info_29139,seq__28960_29131__$1,temp__4657__auto___29130__$1,vec__28957_29087,line_29088,columns_29089,seq__28924_29081__$1,temp__4657__auto___29080,inverted))
,cljs.core.sorted_map.call(null)));

var G__29165 = cljs.core.next.call(null,seq__28978_29154__$1);
var G__29166 = null;
var G__29167 = (0);
var G__29168 = (0);
seq__28978_29140 = G__29165;
chunk__28979_29141 = G__29166;
count__28980_29142 = G__29167;
i__28981_29143 = G__29168;
continue;
}
} else {
}
}
break;
}

var G__29169 = cljs.core.next.call(null,seq__28960_29131__$1);
var G__29170 = null;
var G__29171 = (0);
var G__29172 = (0);
seq__28960_29090 = G__29169;
chunk__28961_29091 = G__29170;
count__28962_29092 = G__29171;
i__28963_29093 = G__29172;
continue;
}
} else {
}
}
break;
}

var G__29173 = cljs.core.next.call(null,seq__28924_29081__$1);
var G__29174 = null;
var G__29175 = (0);
var G__29176 = (0);
seq__28924_28986 = G__29173;
chunk__28925_28987 = G__29174;
count__28926_28988 = G__29175;
i__28927_28989 = G__29176;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map