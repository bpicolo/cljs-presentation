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
return cljs.core.reduce.call(null,(function (m,p__32520){
var vec__32521 = p__32520;
var i = cljs.core.nth.call(null,vec__32521,(0),null);
var v = cljs.core.nth.call(null,vec__32521,(1),null);
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
var vec__32527 = seg;
var gcol = cljs.core.nth.call(null,vec__32527,(0),null);
var source = cljs.core.nth.call(null,vec__32527,(1),null);
var line = cljs.core.nth.call(null,vec__32527,(2),null);
var col = cljs.core.nth.call(null,vec__32527,(3),null);
var name = cljs.core.nth.call(null,vec__32527,(4),null);
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
var vec__32536 = seg;
var gcol = cljs.core.nth.call(null,vec__32536,(0),null);
var source = cljs.core.nth.call(null,vec__32536,(1),null);
var line = cljs.core.nth.call(null,vec__32536,(2),null);
var col = cljs.core.nth.call(null,vec__32536,(3),null);
var name = cljs.core.nth.call(null,vec__32536,(4),null);
var vec__32539 = relseg;
var rgcol = cljs.core.nth.call(null,vec__32539,(0),null);
var rsource = cljs.core.nth.call(null,vec__32539,(1),null);
var rline = cljs.core.nth.call(null,vec__32539,(2),null);
var rcol = cljs.core.nth.call(null,vec__32539,(3),null);
var rname = cljs.core.nth.call(null,vec__32539,(4),null);
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
var map__32544 = segmap;
var map__32544__$1 = ((((!((map__32544 == null)))?((((map__32544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32544):map__32544);
var gcol = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32544__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__32544,map__32544__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__32544,map__32544__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__32544,map__32544__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__32544,map__32544__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32544,map__32544__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__32544,map__32544__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args32546 = [];
var len__26126__auto___32552 = arguments.length;
var i__26127__auto___32553 = (0);
while(true){
if((i__26127__auto___32553 < len__26126__auto___32552)){
args32546.push((arguments[i__26127__auto___32553]));

var G__32554 = (i__26127__auto___32553 + (1));
i__26127__auto___32553 = G__32554;
continue;
} else {
}
break;
}

var G__32548 = args32546.length;
switch (G__32548) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32546.length)].join('')));

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
var vec__32549 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32556 = cljs.core.next.call(null,segs__$1);
var G__32557 = nrelseg;
var G__32558 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32556;
relseg__$1 = G__32557;
result__$1 = G__32558;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32549,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32549,(1),null);
var G__32559 = (gline + (1));
var G__32560 = cljs.core.next.call(null,lines__$1);
var G__32561 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32562 = result__$1;
gline = G__32559;
lines__$1 = G__32560;
relseg = G__32561;
result = G__32562;
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
var map__32566 = segmap;
var map__32566__$1 = ((((!((map__32566 == null)))?((((map__32566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32566):map__32566);
var gcol = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__32566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__32566,map__32566__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__32566,map__32566__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__32563_SHARP_){
return cljs.core.conj.call(null,p1__32563_SHARP_,d__$1);
});})(map__32566,map__32566__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__32566,map__32566__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args32568 = [];
var len__26126__auto___32574 = arguments.length;
var i__26127__auto___32575 = (0);
while(true){
if((i__26127__auto___32575 < len__26126__auto___32574)){
args32568.push((arguments[i__26127__auto___32575]));

var G__32576 = (i__26127__auto___32575 + (1));
i__26127__auto___32575 = G__32576;
continue;
} else {
}
break;
}

var G__32570 = args32568.length;
switch (G__32570) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32568.length)].join('')));

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
var vec__32571 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__32578 = cljs.core.next.call(null,segs__$1);
var G__32579 = nrelseg;
var G__32580 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__32578;
relseg__$1 = G__32579;
result__$1 = G__32580;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__32571,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__32571,(1),null);
var G__32581 = (gline + (1));
var G__32582 = cljs.core.next.call(null,lines__$1);
var G__32583 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__32584 = result__$1;
gline = G__32581;
lines__$1 = G__32582;
relseg = G__32583;
result = G__32584;
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
return (function (p__32597){
var vec__32598 = p__32597;
var _ = cljs.core.nth.call(null,vec__32598,(0),null);
var source = cljs.core.nth.call(null,vec__32598,(1),null);
var line = cljs.core.nth.call(null,vec__32598,(2),null);
var col = cljs.core.nth.call(null,vec__32598,(3),null);
var name = cljs.core.nth.call(null,vec__32598,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__32601){
var vec__32602 = p__32601;
var gcol = cljs.core.nth.call(null,vec__32602,(0),null);
var sidx = cljs.core.nth.call(null,vec__32602,(1),null);
var line = cljs.core.nth.call(null,vec__32602,(2),null);
var col = cljs.core.nth.call(null,vec__32602,(3),null);
var name = cljs.core.nth.call(null,vec__32602,(4),null);
var seg = vec__32602;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__32602,gcol,sidx,line,col,name,seg,relseg){
return (function (p__32605){
var vec__32606 = p__32605;
var _ = cljs.core.nth.call(null,vec__32606,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32606,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__32606,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__32606,(3),null);
var lname = cljs.core.nth.call(null,vec__32606,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__25051__auto__ = name;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__32602,gcol,sidx,line,col,name,seg,relseg))
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
var seq__32694 = cljs.core.seq.call(null,infos);
var chunk__32695 = null;
var count__32696 = (0);
var i__32697 = (0);
while(true){
if((i__32697 < count__32696)){
var info = cljs.core._nth.call(null,chunk__32695,i__32697);
var segv_32776 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32777 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32778 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32777 > (lc_32778 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32694,chunk__32695,count__32696,i__32697,segv_32776,gline_32777,lc_32778,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32777 - (lc_32778 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32776], null));
});})(seq__32694,chunk__32695,count__32696,i__32697,segv_32776,gline_32777,lc_32778,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32694,chunk__32695,count__32696,i__32697,segv_32776,gline_32777,lc_32778,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32777], null),cljs.core.conj,segv_32776);
});})(seq__32694,chunk__32695,count__32696,i__32697,segv_32776,gline_32777,lc_32778,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__32779 = seq__32694;
var G__32780 = chunk__32695;
var G__32781 = count__32696;
var G__32782 = (i__32697 + (1));
seq__32694 = G__32779;
chunk__32695 = G__32780;
count__32696 = G__32781;
i__32697 = G__32782;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32694);
if(temp__4657__auto__){
var seq__32694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32694__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__32694__$1);
var G__32783 = cljs.core.chunk_rest.call(null,seq__32694__$1);
var G__32784 = c__25862__auto__;
var G__32785 = cljs.core.count.call(null,c__25862__auto__);
var G__32786 = (0);
seq__32694 = G__32783;
chunk__32695 = G__32784;
count__32696 = G__32785;
i__32697 = G__32786;
continue;
} else {
var info = cljs.core.first.call(null,seq__32694__$1);
var segv_32787 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_32788 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_32789 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_32788 > (lc_32789 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__32694,chunk__32695,count__32696,i__32697,segv_32787,gline_32788,lc_32789,info,seq__32694__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_32788 - (lc_32789 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_32787], null));
});})(seq__32694,chunk__32695,count__32696,i__32697,segv_32787,gline_32788,lc_32789,info,seq__32694__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__32694,chunk__32695,count__32696,i__32697,segv_32787,gline_32788,lc_32789,info,seq__32694__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32788], null),cljs.core.conj,segv_32787);
});})(seq__32694,chunk__32695,count__32696,i__32697,segv_32787,gline_32788,lc_32789,info,seq__32694__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__32790 = cljs.core.next.call(null,seq__32694__$1);
var G__32791 = null;
var G__32792 = (0);
var G__32793 = (0);
seq__32694 = G__32790;
chunk__32695 = G__32791;
count__32696 = G__32792;
i__32697 = G__32793;
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
var seq__32698_32794 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__32699_32795 = null;
var count__32700_32796 = (0);
var i__32701_32797 = (0);
while(true){
if((i__32701_32797 < count__32700_32796)){
var vec__32702_32798 = cljs.core._nth.call(null,chunk__32699_32795,i__32701_32797);
var source_idx_32799 = cljs.core.nth.call(null,vec__32702_32798,(0),null);
var vec__32705_32800 = cljs.core.nth.call(null,vec__32702_32798,(1),null);
var __32801 = cljs.core.nth.call(null,vec__32705_32800,(0),null);
var lines_32802__$1 = cljs.core.nth.call(null,vec__32705_32800,(1),null);
var seq__32708_32803 = cljs.core.seq.call(null,lines_32802__$1);
var chunk__32709_32804 = null;
var count__32710_32805 = (0);
var i__32711_32806 = (0);
while(true){
if((i__32711_32806 < count__32710_32805)){
var vec__32712_32807 = cljs.core._nth.call(null,chunk__32709_32804,i__32711_32806);
var line_32808 = cljs.core.nth.call(null,vec__32712_32807,(0),null);
var cols_32809 = cljs.core.nth.call(null,vec__32712_32807,(1),null);
var seq__32715_32810 = cljs.core.seq.call(null,cols_32809);
var chunk__32716_32811 = null;
var count__32717_32812 = (0);
var i__32718_32813 = (0);
while(true){
if((i__32718_32813 < count__32717_32812)){
var vec__32719_32814 = cljs.core._nth.call(null,chunk__32716_32811,i__32718_32813);
var col_32815 = cljs.core.nth.call(null,vec__32719_32814,(0),null);
var infos_32816 = cljs.core.nth.call(null,vec__32719_32814,(1),null);
encode_cols.call(null,infos_32816,source_idx_32799,line_32808,col_32815);

var G__32817 = seq__32715_32810;
var G__32818 = chunk__32716_32811;
var G__32819 = count__32717_32812;
var G__32820 = (i__32718_32813 + (1));
seq__32715_32810 = G__32817;
chunk__32716_32811 = G__32818;
count__32717_32812 = G__32819;
i__32718_32813 = G__32820;
continue;
} else {
var temp__4657__auto___32821 = cljs.core.seq.call(null,seq__32715_32810);
if(temp__4657__auto___32821){
var seq__32715_32822__$1 = temp__4657__auto___32821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32715_32822__$1)){
var c__25862__auto___32823 = cljs.core.chunk_first.call(null,seq__32715_32822__$1);
var G__32824 = cljs.core.chunk_rest.call(null,seq__32715_32822__$1);
var G__32825 = c__25862__auto___32823;
var G__32826 = cljs.core.count.call(null,c__25862__auto___32823);
var G__32827 = (0);
seq__32715_32810 = G__32824;
chunk__32716_32811 = G__32825;
count__32717_32812 = G__32826;
i__32718_32813 = G__32827;
continue;
} else {
var vec__32722_32828 = cljs.core.first.call(null,seq__32715_32822__$1);
var col_32829 = cljs.core.nth.call(null,vec__32722_32828,(0),null);
var infos_32830 = cljs.core.nth.call(null,vec__32722_32828,(1),null);
encode_cols.call(null,infos_32830,source_idx_32799,line_32808,col_32829);

var G__32831 = cljs.core.next.call(null,seq__32715_32822__$1);
var G__32832 = null;
var G__32833 = (0);
var G__32834 = (0);
seq__32715_32810 = G__32831;
chunk__32716_32811 = G__32832;
count__32717_32812 = G__32833;
i__32718_32813 = G__32834;
continue;
}
} else {
}
}
break;
}

var G__32835 = seq__32708_32803;
var G__32836 = chunk__32709_32804;
var G__32837 = count__32710_32805;
var G__32838 = (i__32711_32806 + (1));
seq__32708_32803 = G__32835;
chunk__32709_32804 = G__32836;
count__32710_32805 = G__32837;
i__32711_32806 = G__32838;
continue;
} else {
var temp__4657__auto___32839 = cljs.core.seq.call(null,seq__32708_32803);
if(temp__4657__auto___32839){
var seq__32708_32840__$1 = temp__4657__auto___32839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32708_32840__$1)){
var c__25862__auto___32841 = cljs.core.chunk_first.call(null,seq__32708_32840__$1);
var G__32842 = cljs.core.chunk_rest.call(null,seq__32708_32840__$1);
var G__32843 = c__25862__auto___32841;
var G__32844 = cljs.core.count.call(null,c__25862__auto___32841);
var G__32845 = (0);
seq__32708_32803 = G__32842;
chunk__32709_32804 = G__32843;
count__32710_32805 = G__32844;
i__32711_32806 = G__32845;
continue;
} else {
var vec__32725_32846 = cljs.core.first.call(null,seq__32708_32840__$1);
var line_32847 = cljs.core.nth.call(null,vec__32725_32846,(0),null);
var cols_32848 = cljs.core.nth.call(null,vec__32725_32846,(1),null);
var seq__32728_32849 = cljs.core.seq.call(null,cols_32848);
var chunk__32729_32850 = null;
var count__32730_32851 = (0);
var i__32731_32852 = (0);
while(true){
if((i__32731_32852 < count__32730_32851)){
var vec__32732_32853 = cljs.core._nth.call(null,chunk__32729_32850,i__32731_32852);
var col_32854 = cljs.core.nth.call(null,vec__32732_32853,(0),null);
var infos_32855 = cljs.core.nth.call(null,vec__32732_32853,(1),null);
encode_cols.call(null,infos_32855,source_idx_32799,line_32847,col_32854);

var G__32856 = seq__32728_32849;
var G__32857 = chunk__32729_32850;
var G__32858 = count__32730_32851;
var G__32859 = (i__32731_32852 + (1));
seq__32728_32849 = G__32856;
chunk__32729_32850 = G__32857;
count__32730_32851 = G__32858;
i__32731_32852 = G__32859;
continue;
} else {
var temp__4657__auto___32860__$1 = cljs.core.seq.call(null,seq__32728_32849);
if(temp__4657__auto___32860__$1){
var seq__32728_32861__$1 = temp__4657__auto___32860__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32728_32861__$1)){
var c__25862__auto___32862 = cljs.core.chunk_first.call(null,seq__32728_32861__$1);
var G__32863 = cljs.core.chunk_rest.call(null,seq__32728_32861__$1);
var G__32864 = c__25862__auto___32862;
var G__32865 = cljs.core.count.call(null,c__25862__auto___32862);
var G__32866 = (0);
seq__32728_32849 = G__32863;
chunk__32729_32850 = G__32864;
count__32730_32851 = G__32865;
i__32731_32852 = G__32866;
continue;
} else {
var vec__32735_32867 = cljs.core.first.call(null,seq__32728_32861__$1);
var col_32868 = cljs.core.nth.call(null,vec__32735_32867,(0),null);
var infos_32869 = cljs.core.nth.call(null,vec__32735_32867,(1),null);
encode_cols.call(null,infos_32869,source_idx_32799,line_32847,col_32868);

var G__32870 = cljs.core.next.call(null,seq__32728_32861__$1);
var G__32871 = null;
var G__32872 = (0);
var G__32873 = (0);
seq__32728_32849 = G__32870;
chunk__32729_32850 = G__32871;
count__32730_32851 = G__32872;
i__32731_32852 = G__32873;
continue;
}
} else {
}
}
break;
}

var G__32874 = cljs.core.next.call(null,seq__32708_32840__$1);
var G__32875 = null;
var G__32876 = (0);
var G__32877 = (0);
seq__32708_32803 = G__32874;
chunk__32709_32804 = G__32875;
count__32710_32805 = G__32876;
i__32711_32806 = G__32877;
continue;
}
} else {
}
}
break;
}

var G__32878 = seq__32698_32794;
var G__32879 = chunk__32699_32795;
var G__32880 = count__32700_32796;
var G__32881 = (i__32701_32797 + (1));
seq__32698_32794 = G__32878;
chunk__32699_32795 = G__32879;
count__32700_32796 = G__32880;
i__32701_32797 = G__32881;
continue;
} else {
var temp__4657__auto___32882 = cljs.core.seq.call(null,seq__32698_32794);
if(temp__4657__auto___32882){
var seq__32698_32883__$1 = temp__4657__auto___32882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32698_32883__$1)){
var c__25862__auto___32884 = cljs.core.chunk_first.call(null,seq__32698_32883__$1);
var G__32885 = cljs.core.chunk_rest.call(null,seq__32698_32883__$1);
var G__32886 = c__25862__auto___32884;
var G__32887 = cljs.core.count.call(null,c__25862__auto___32884);
var G__32888 = (0);
seq__32698_32794 = G__32885;
chunk__32699_32795 = G__32886;
count__32700_32796 = G__32887;
i__32701_32797 = G__32888;
continue;
} else {
var vec__32738_32889 = cljs.core.first.call(null,seq__32698_32883__$1);
var source_idx_32890 = cljs.core.nth.call(null,vec__32738_32889,(0),null);
var vec__32741_32891 = cljs.core.nth.call(null,vec__32738_32889,(1),null);
var __32892 = cljs.core.nth.call(null,vec__32741_32891,(0),null);
var lines_32893__$1 = cljs.core.nth.call(null,vec__32741_32891,(1),null);
var seq__32744_32894 = cljs.core.seq.call(null,lines_32893__$1);
var chunk__32745_32895 = null;
var count__32746_32896 = (0);
var i__32747_32897 = (0);
while(true){
if((i__32747_32897 < count__32746_32896)){
var vec__32748_32898 = cljs.core._nth.call(null,chunk__32745_32895,i__32747_32897);
var line_32899 = cljs.core.nth.call(null,vec__32748_32898,(0),null);
var cols_32900 = cljs.core.nth.call(null,vec__32748_32898,(1),null);
var seq__32751_32901 = cljs.core.seq.call(null,cols_32900);
var chunk__32752_32902 = null;
var count__32753_32903 = (0);
var i__32754_32904 = (0);
while(true){
if((i__32754_32904 < count__32753_32903)){
var vec__32755_32905 = cljs.core._nth.call(null,chunk__32752_32902,i__32754_32904);
var col_32906 = cljs.core.nth.call(null,vec__32755_32905,(0),null);
var infos_32907 = cljs.core.nth.call(null,vec__32755_32905,(1),null);
encode_cols.call(null,infos_32907,source_idx_32890,line_32899,col_32906);

var G__32908 = seq__32751_32901;
var G__32909 = chunk__32752_32902;
var G__32910 = count__32753_32903;
var G__32911 = (i__32754_32904 + (1));
seq__32751_32901 = G__32908;
chunk__32752_32902 = G__32909;
count__32753_32903 = G__32910;
i__32754_32904 = G__32911;
continue;
} else {
var temp__4657__auto___32912__$1 = cljs.core.seq.call(null,seq__32751_32901);
if(temp__4657__auto___32912__$1){
var seq__32751_32913__$1 = temp__4657__auto___32912__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32751_32913__$1)){
var c__25862__auto___32914 = cljs.core.chunk_first.call(null,seq__32751_32913__$1);
var G__32915 = cljs.core.chunk_rest.call(null,seq__32751_32913__$1);
var G__32916 = c__25862__auto___32914;
var G__32917 = cljs.core.count.call(null,c__25862__auto___32914);
var G__32918 = (0);
seq__32751_32901 = G__32915;
chunk__32752_32902 = G__32916;
count__32753_32903 = G__32917;
i__32754_32904 = G__32918;
continue;
} else {
var vec__32758_32919 = cljs.core.first.call(null,seq__32751_32913__$1);
var col_32920 = cljs.core.nth.call(null,vec__32758_32919,(0),null);
var infos_32921 = cljs.core.nth.call(null,vec__32758_32919,(1),null);
encode_cols.call(null,infos_32921,source_idx_32890,line_32899,col_32920);

var G__32922 = cljs.core.next.call(null,seq__32751_32913__$1);
var G__32923 = null;
var G__32924 = (0);
var G__32925 = (0);
seq__32751_32901 = G__32922;
chunk__32752_32902 = G__32923;
count__32753_32903 = G__32924;
i__32754_32904 = G__32925;
continue;
}
} else {
}
}
break;
}

var G__32926 = seq__32744_32894;
var G__32927 = chunk__32745_32895;
var G__32928 = count__32746_32896;
var G__32929 = (i__32747_32897 + (1));
seq__32744_32894 = G__32926;
chunk__32745_32895 = G__32927;
count__32746_32896 = G__32928;
i__32747_32897 = G__32929;
continue;
} else {
var temp__4657__auto___32930__$1 = cljs.core.seq.call(null,seq__32744_32894);
if(temp__4657__auto___32930__$1){
var seq__32744_32931__$1 = temp__4657__auto___32930__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32744_32931__$1)){
var c__25862__auto___32932 = cljs.core.chunk_first.call(null,seq__32744_32931__$1);
var G__32933 = cljs.core.chunk_rest.call(null,seq__32744_32931__$1);
var G__32934 = c__25862__auto___32932;
var G__32935 = cljs.core.count.call(null,c__25862__auto___32932);
var G__32936 = (0);
seq__32744_32894 = G__32933;
chunk__32745_32895 = G__32934;
count__32746_32896 = G__32935;
i__32747_32897 = G__32936;
continue;
} else {
var vec__32761_32937 = cljs.core.first.call(null,seq__32744_32931__$1);
var line_32938 = cljs.core.nth.call(null,vec__32761_32937,(0),null);
var cols_32939 = cljs.core.nth.call(null,vec__32761_32937,(1),null);
var seq__32764_32940 = cljs.core.seq.call(null,cols_32939);
var chunk__32765_32941 = null;
var count__32766_32942 = (0);
var i__32767_32943 = (0);
while(true){
if((i__32767_32943 < count__32766_32942)){
var vec__32768_32944 = cljs.core._nth.call(null,chunk__32765_32941,i__32767_32943);
var col_32945 = cljs.core.nth.call(null,vec__32768_32944,(0),null);
var infos_32946 = cljs.core.nth.call(null,vec__32768_32944,(1),null);
encode_cols.call(null,infos_32946,source_idx_32890,line_32938,col_32945);

var G__32947 = seq__32764_32940;
var G__32948 = chunk__32765_32941;
var G__32949 = count__32766_32942;
var G__32950 = (i__32767_32943 + (1));
seq__32764_32940 = G__32947;
chunk__32765_32941 = G__32948;
count__32766_32942 = G__32949;
i__32767_32943 = G__32950;
continue;
} else {
var temp__4657__auto___32951__$2 = cljs.core.seq.call(null,seq__32764_32940);
if(temp__4657__auto___32951__$2){
var seq__32764_32952__$1 = temp__4657__auto___32951__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32764_32952__$1)){
var c__25862__auto___32953 = cljs.core.chunk_first.call(null,seq__32764_32952__$1);
var G__32954 = cljs.core.chunk_rest.call(null,seq__32764_32952__$1);
var G__32955 = c__25862__auto___32953;
var G__32956 = cljs.core.count.call(null,c__25862__auto___32953);
var G__32957 = (0);
seq__32764_32940 = G__32954;
chunk__32765_32941 = G__32955;
count__32766_32942 = G__32956;
i__32767_32943 = G__32957;
continue;
} else {
var vec__32771_32958 = cljs.core.first.call(null,seq__32764_32952__$1);
var col_32959 = cljs.core.nth.call(null,vec__32771_32958,(0),null);
var infos_32960 = cljs.core.nth.call(null,vec__32771_32958,(1),null);
encode_cols.call(null,infos_32960,source_idx_32890,line_32938,col_32959);

var G__32961 = cljs.core.next.call(null,seq__32764_32952__$1);
var G__32962 = null;
var G__32963 = (0);
var G__32964 = (0);
seq__32764_32940 = G__32961;
chunk__32765_32941 = G__32962;
count__32766_32942 = G__32963;
i__32767_32943 = G__32964;
continue;
}
} else {
}
}
break;
}

var G__32965 = cljs.core.next.call(null,seq__32744_32931__$1);
var G__32966 = null;
var G__32967 = (0);
var G__32968 = (0);
seq__32744_32894 = G__32965;
chunk__32745_32895 = G__32966;
count__32746_32896 = G__32967;
i__32747_32897 = G__32968;
continue;
}
} else {
}
}
break;
}

var G__32969 = cljs.core.next.call(null,seq__32698_32883__$1);
var G__32970 = null;
var G__32971 = (0);
var G__32972 = (0);
seq__32698_32794 = G__32969;
chunk__32699_32795 = G__32970;
count__32700_32796 = G__32971;
i__32701_32797 = G__32972;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__32774 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32609_SHARP_){
return [cljs.core.str(p1__32609_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32610_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__32610_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__32611_SHARP_){
return clojure.string.join.call(null,",",p1__32611_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__32775 = G__32774;
goog.object.set(G__32775,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__32775;
} else {
return G__32774;
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
var vec__32982 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__32982,(0),null);
var col_map = cljs.core.nth.call(null,vec__32982,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__32985 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__32985,(0),null);
var infos = cljs.core.nth.call(null,vec__32985,(1),null);
var G__32991 = cljs.core.next.call(null,col_map_seq);
var G__32992 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__32985,col,infos,vec__32982,line,col_map){
return (function (v,p__32988){
var map__32989 = p__32988;
var map__32989__$1 = ((((!((map__32989 == null)))?((((map__32989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32989):map__32989);
var gline = cljs.core.get.call(null,map__32989__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__32989__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__32985,col,infos,vec__32982,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__32991;
new_cols = G__32992;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__32993 = cljs.core.next.call(null,line_map_seq);
var G__32994 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__32993;
new_lines = G__32994;
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
var seq__33057_33119 = cljs.core.seq.call(null,reverse_map);
var chunk__33058_33120 = null;
var count__33059_33121 = (0);
var i__33060_33122 = (0);
while(true){
if((i__33060_33122 < count__33059_33121)){
var vec__33061_33123 = cljs.core._nth.call(null,chunk__33058_33120,i__33060_33122);
var line_33124 = cljs.core.nth.call(null,vec__33061_33123,(0),null);
var columns_33125 = cljs.core.nth.call(null,vec__33061_33123,(1),null);
var seq__33064_33126 = cljs.core.seq.call(null,columns_33125);
var chunk__33065_33127 = null;
var count__33066_33128 = (0);
var i__33067_33129 = (0);
while(true){
if((i__33067_33129 < count__33066_33128)){
var vec__33068_33130 = cljs.core._nth.call(null,chunk__33065_33127,i__33067_33129);
var column_33131 = cljs.core.nth.call(null,vec__33068_33130,(0),null);
var column_info_33132 = cljs.core.nth.call(null,vec__33068_33130,(1),null);
var seq__33071_33133 = cljs.core.seq.call(null,column_info_33132);
var chunk__33072_33134 = null;
var count__33073_33135 = (0);
var i__33074_33136 = (0);
while(true){
if((i__33074_33136 < count__33073_33135)){
var map__33075_33137 = cljs.core._nth.call(null,chunk__33072_33134,i__33074_33136);
var map__33075_33138__$1 = ((((!((map__33075_33137 == null)))?((((map__33075_33137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33075_33137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33075_33137):map__33075_33137);
var gline_33139 = cljs.core.get.call(null,map__33075_33138__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33140 = cljs.core.get.call(null,map__33075_33138__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33141 = cljs.core.get.call(null,map__33075_33138__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33139], null),cljs.core.fnil.call(null,((function (seq__33071_33133,chunk__33072_33134,count__33073_33135,i__33074_33136,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33075_33137,map__33075_33138__$1,gline_33139,gcol_33140,name_33141,vec__33068_33130,column_33131,column_info_33132,vec__33061_33123,line_33124,columns_33125,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33140], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33124,new cljs.core.Keyword(null,"col","col",-1959363084),column_33131,new cljs.core.Keyword(null,"name","name",1843675177),name_33141], null));
});})(seq__33071_33133,chunk__33072_33134,count__33073_33135,i__33074_33136,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33075_33137,map__33075_33138__$1,gline_33139,gcol_33140,name_33141,vec__33068_33130,column_33131,column_info_33132,vec__33061_33123,line_33124,columns_33125,inverted))
,cljs.core.sorted_map.call(null)));

var G__33142 = seq__33071_33133;
var G__33143 = chunk__33072_33134;
var G__33144 = count__33073_33135;
var G__33145 = (i__33074_33136 + (1));
seq__33071_33133 = G__33142;
chunk__33072_33134 = G__33143;
count__33073_33135 = G__33144;
i__33074_33136 = G__33145;
continue;
} else {
var temp__4657__auto___33146 = cljs.core.seq.call(null,seq__33071_33133);
if(temp__4657__auto___33146){
var seq__33071_33147__$1 = temp__4657__auto___33146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33071_33147__$1)){
var c__25862__auto___33148 = cljs.core.chunk_first.call(null,seq__33071_33147__$1);
var G__33149 = cljs.core.chunk_rest.call(null,seq__33071_33147__$1);
var G__33150 = c__25862__auto___33148;
var G__33151 = cljs.core.count.call(null,c__25862__auto___33148);
var G__33152 = (0);
seq__33071_33133 = G__33149;
chunk__33072_33134 = G__33150;
count__33073_33135 = G__33151;
i__33074_33136 = G__33152;
continue;
} else {
var map__33077_33153 = cljs.core.first.call(null,seq__33071_33147__$1);
var map__33077_33154__$1 = ((((!((map__33077_33153 == null)))?((((map__33077_33153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33077_33153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33077_33153):map__33077_33153);
var gline_33155 = cljs.core.get.call(null,map__33077_33154__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33156 = cljs.core.get.call(null,map__33077_33154__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33157 = cljs.core.get.call(null,map__33077_33154__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33155], null),cljs.core.fnil.call(null,((function (seq__33071_33133,chunk__33072_33134,count__33073_33135,i__33074_33136,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33077_33153,map__33077_33154__$1,gline_33155,gcol_33156,name_33157,seq__33071_33147__$1,temp__4657__auto___33146,vec__33068_33130,column_33131,column_info_33132,vec__33061_33123,line_33124,columns_33125,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33156], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33124,new cljs.core.Keyword(null,"col","col",-1959363084),column_33131,new cljs.core.Keyword(null,"name","name",1843675177),name_33157], null));
});})(seq__33071_33133,chunk__33072_33134,count__33073_33135,i__33074_33136,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33077_33153,map__33077_33154__$1,gline_33155,gcol_33156,name_33157,seq__33071_33147__$1,temp__4657__auto___33146,vec__33068_33130,column_33131,column_info_33132,vec__33061_33123,line_33124,columns_33125,inverted))
,cljs.core.sorted_map.call(null)));

var G__33158 = cljs.core.next.call(null,seq__33071_33147__$1);
var G__33159 = null;
var G__33160 = (0);
var G__33161 = (0);
seq__33071_33133 = G__33158;
chunk__33072_33134 = G__33159;
count__33073_33135 = G__33160;
i__33074_33136 = G__33161;
continue;
}
} else {
}
}
break;
}

var G__33162 = seq__33064_33126;
var G__33163 = chunk__33065_33127;
var G__33164 = count__33066_33128;
var G__33165 = (i__33067_33129 + (1));
seq__33064_33126 = G__33162;
chunk__33065_33127 = G__33163;
count__33066_33128 = G__33164;
i__33067_33129 = G__33165;
continue;
} else {
var temp__4657__auto___33166 = cljs.core.seq.call(null,seq__33064_33126);
if(temp__4657__auto___33166){
var seq__33064_33167__$1 = temp__4657__auto___33166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33064_33167__$1)){
var c__25862__auto___33168 = cljs.core.chunk_first.call(null,seq__33064_33167__$1);
var G__33169 = cljs.core.chunk_rest.call(null,seq__33064_33167__$1);
var G__33170 = c__25862__auto___33168;
var G__33171 = cljs.core.count.call(null,c__25862__auto___33168);
var G__33172 = (0);
seq__33064_33126 = G__33169;
chunk__33065_33127 = G__33170;
count__33066_33128 = G__33171;
i__33067_33129 = G__33172;
continue;
} else {
var vec__33079_33173 = cljs.core.first.call(null,seq__33064_33167__$1);
var column_33174 = cljs.core.nth.call(null,vec__33079_33173,(0),null);
var column_info_33175 = cljs.core.nth.call(null,vec__33079_33173,(1),null);
var seq__33082_33176 = cljs.core.seq.call(null,column_info_33175);
var chunk__33083_33177 = null;
var count__33084_33178 = (0);
var i__33085_33179 = (0);
while(true){
if((i__33085_33179 < count__33084_33178)){
var map__33086_33180 = cljs.core._nth.call(null,chunk__33083_33177,i__33085_33179);
var map__33086_33181__$1 = ((((!((map__33086_33180 == null)))?((((map__33086_33180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33086_33180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33086_33180):map__33086_33180);
var gline_33182 = cljs.core.get.call(null,map__33086_33181__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33183 = cljs.core.get.call(null,map__33086_33181__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33184 = cljs.core.get.call(null,map__33086_33181__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33182], null),cljs.core.fnil.call(null,((function (seq__33082_33176,chunk__33083_33177,count__33084_33178,i__33085_33179,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33086_33180,map__33086_33181__$1,gline_33182,gcol_33183,name_33184,vec__33079_33173,column_33174,column_info_33175,seq__33064_33167__$1,temp__4657__auto___33166,vec__33061_33123,line_33124,columns_33125,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33183], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33124,new cljs.core.Keyword(null,"col","col",-1959363084),column_33174,new cljs.core.Keyword(null,"name","name",1843675177),name_33184], null));
});})(seq__33082_33176,chunk__33083_33177,count__33084_33178,i__33085_33179,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33086_33180,map__33086_33181__$1,gline_33182,gcol_33183,name_33184,vec__33079_33173,column_33174,column_info_33175,seq__33064_33167__$1,temp__4657__auto___33166,vec__33061_33123,line_33124,columns_33125,inverted))
,cljs.core.sorted_map.call(null)));

var G__33185 = seq__33082_33176;
var G__33186 = chunk__33083_33177;
var G__33187 = count__33084_33178;
var G__33188 = (i__33085_33179 + (1));
seq__33082_33176 = G__33185;
chunk__33083_33177 = G__33186;
count__33084_33178 = G__33187;
i__33085_33179 = G__33188;
continue;
} else {
var temp__4657__auto___33189__$1 = cljs.core.seq.call(null,seq__33082_33176);
if(temp__4657__auto___33189__$1){
var seq__33082_33190__$1 = temp__4657__auto___33189__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33082_33190__$1)){
var c__25862__auto___33191 = cljs.core.chunk_first.call(null,seq__33082_33190__$1);
var G__33192 = cljs.core.chunk_rest.call(null,seq__33082_33190__$1);
var G__33193 = c__25862__auto___33191;
var G__33194 = cljs.core.count.call(null,c__25862__auto___33191);
var G__33195 = (0);
seq__33082_33176 = G__33192;
chunk__33083_33177 = G__33193;
count__33084_33178 = G__33194;
i__33085_33179 = G__33195;
continue;
} else {
var map__33088_33196 = cljs.core.first.call(null,seq__33082_33190__$1);
var map__33088_33197__$1 = ((((!((map__33088_33196 == null)))?((((map__33088_33196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33088_33196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33088_33196):map__33088_33196);
var gline_33198 = cljs.core.get.call(null,map__33088_33197__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33199 = cljs.core.get.call(null,map__33088_33197__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33200 = cljs.core.get.call(null,map__33088_33197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33198], null),cljs.core.fnil.call(null,((function (seq__33082_33176,chunk__33083_33177,count__33084_33178,i__33085_33179,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33088_33196,map__33088_33197__$1,gline_33198,gcol_33199,name_33200,seq__33082_33190__$1,temp__4657__auto___33189__$1,vec__33079_33173,column_33174,column_info_33175,seq__33064_33167__$1,temp__4657__auto___33166,vec__33061_33123,line_33124,columns_33125,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33199], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33124,new cljs.core.Keyword(null,"col","col",-1959363084),column_33174,new cljs.core.Keyword(null,"name","name",1843675177),name_33200], null));
});})(seq__33082_33176,chunk__33083_33177,count__33084_33178,i__33085_33179,seq__33064_33126,chunk__33065_33127,count__33066_33128,i__33067_33129,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33088_33196,map__33088_33197__$1,gline_33198,gcol_33199,name_33200,seq__33082_33190__$1,temp__4657__auto___33189__$1,vec__33079_33173,column_33174,column_info_33175,seq__33064_33167__$1,temp__4657__auto___33166,vec__33061_33123,line_33124,columns_33125,inverted))
,cljs.core.sorted_map.call(null)));

var G__33201 = cljs.core.next.call(null,seq__33082_33190__$1);
var G__33202 = null;
var G__33203 = (0);
var G__33204 = (0);
seq__33082_33176 = G__33201;
chunk__33083_33177 = G__33202;
count__33084_33178 = G__33203;
i__33085_33179 = G__33204;
continue;
}
} else {
}
}
break;
}

var G__33205 = cljs.core.next.call(null,seq__33064_33167__$1);
var G__33206 = null;
var G__33207 = (0);
var G__33208 = (0);
seq__33064_33126 = G__33205;
chunk__33065_33127 = G__33206;
count__33066_33128 = G__33207;
i__33067_33129 = G__33208;
continue;
}
} else {
}
}
break;
}

var G__33209 = seq__33057_33119;
var G__33210 = chunk__33058_33120;
var G__33211 = count__33059_33121;
var G__33212 = (i__33060_33122 + (1));
seq__33057_33119 = G__33209;
chunk__33058_33120 = G__33210;
count__33059_33121 = G__33211;
i__33060_33122 = G__33212;
continue;
} else {
var temp__4657__auto___33213 = cljs.core.seq.call(null,seq__33057_33119);
if(temp__4657__auto___33213){
var seq__33057_33214__$1 = temp__4657__auto___33213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33057_33214__$1)){
var c__25862__auto___33215 = cljs.core.chunk_first.call(null,seq__33057_33214__$1);
var G__33216 = cljs.core.chunk_rest.call(null,seq__33057_33214__$1);
var G__33217 = c__25862__auto___33215;
var G__33218 = cljs.core.count.call(null,c__25862__auto___33215);
var G__33219 = (0);
seq__33057_33119 = G__33216;
chunk__33058_33120 = G__33217;
count__33059_33121 = G__33218;
i__33060_33122 = G__33219;
continue;
} else {
var vec__33090_33220 = cljs.core.first.call(null,seq__33057_33214__$1);
var line_33221 = cljs.core.nth.call(null,vec__33090_33220,(0),null);
var columns_33222 = cljs.core.nth.call(null,vec__33090_33220,(1),null);
var seq__33093_33223 = cljs.core.seq.call(null,columns_33222);
var chunk__33094_33224 = null;
var count__33095_33225 = (0);
var i__33096_33226 = (0);
while(true){
if((i__33096_33226 < count__33095_33225)){
var vec__33097_33227 = cljs.core._nth.call(null,chunk__33094_33224,i__33096_33226);
var column_33228 = cljs.core.nth.call(null,vec__33097_33227,(0),null);
var column_info_33229 = cljs.core.nth.call(null,vec__33097_33227,(1),null);
var seq__33100_33230 = cljs.core.seq.call(null,column_info_33229);
var chunk__33101_33231 = null;
var count__33102_33232 = (0);
var i__33103_33233 = (0);
while(true){
if((i__33103_33233 < count__33102_33232)){
var map__33104_33234 = cljs.core._nth.call(null,chunk__33101_33231,i__33103_33233);
var map__33104_33235__$1 = ((((!((map__33104_33234 == null)))?((((map__33104_33234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33104_33234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33104_33234):map__33104_33234);
var gline_33236 = cljs.core.get.call(null,map__33104_33235__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33237 = cljs.core.get.call(null,map__33104_33235__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33238 = cljs.core.get.call(null,map__33104_33235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33236], null),cljs.core.fnil.call(null,((function (seq__33100_33230,chunk__33101_33231,count__33102_33232,i__33103_33233,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33104_33234,map__33104_33235__$1,gline_33236,gcol_33237,name_33238,vec__33097_33227,column_33228,column_info_33229,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33237], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33221,new cljs.core.Keyword(null,"col","col",-1959363084),column_33228,new cljs.core.Keyword(null,"name","name",1843675177),name_33238], null));
});})(seq__33100_33230,chunk__33101_33231,count__33102_33232,i__33103_33233,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33104_33234,map__33104_33235__$1,gline_33236,gcol_33237,name_33238,vec__33097_33227,column_33228,column_info_33229,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted))
,cljs.core.sorted_map.call(null)));

var G__33239 = seq__33100_33230;
var G__33240 = chunk__33101_33231;
var G__33241 = count__33102_33232;
var G__33242 = (i__33103_33233 + (1));
seq__33100_33230 = G__33239;
chunk__33101_33231 = G__33240;
count__33102_33232 = G__33241;
i__33103_33233 = G__33242;
continue;
} else {
var temp__4657__auto___33243__$1 = cljs.core.seq.call(null,seq__33100_33230);
if(temp__4657__auto___33243__$1){
var seq__33100_33244__$1 = temp__4657__auto___33243__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33100_33244__$1)){
var c__25862__auto___33245 = cljs.core.chunk_first.call(null,seq__33100_33244__$1);
var G__33246 = cljs.core.chunk_rest.call(null,seq__33100_33244__$1);
var G__33247 = c__25862__auto___33245;
var G__33248 = cljs.core.count.call(null,c__25862__auto___33245);
var G__33249 = (0);
seq__33100_33230 = G__33246;
chunk__33101_33231 = G__33247;
count__33102_33232 = G__33248;
i__33103_33233 = G__33249;
continue;
} else {
var map__33106_33250 = cljs.core.first.call(null,seq__33100_33244__$1);
var map__33106_33251__$1 = ((((!((map__33106_33250 == null)))?((((map__33106_33250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33106_33250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33106_33250):map__33106_33250);
var gline_33252 = cljs.core.get.call(null,map__33106_33251__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33253 = cljs.core.get.call(null,map__33106_33251__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33254 = cljs.core.get.call(null,map__33106_33251__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33252], null),cljs.core.fnil.call(null,((function (seq__33100_33230,chunk__33101_33231,count__33102_33232,i__33103_33233,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33106_33250,map__33106_33251__$1,gline_33252,gcol_33253,name_33254,seq__33100_33244__$1,temp__4657__auto___33243__$1,vec__33097_33227,column_33228,column_info_33229,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33253], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33221,new cljs.core.Keyword(null,"col","col",-1959363084),column_33228,new cljs.core.Keyword(null,"name","name",1843675177),name_33254], null));
});})(seq__33100_33230,chunk__33101_33231,count__33102_33232,i__33103_33233,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33106_33250,map__33106_33251__$1,gline_33252,gcol_33253,name_33254,seq__33100_33244__$1,temp__4657__auto___33243__$1,vec__33097_33227,column_33228,column_info_33229,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted))
,cljs.core.sorted_map.call(null)));

var G__33255 = cljs.core.next.call(null,seq__33100_33244__$1);
var G__33256 = null;
var G__33257 = (0);
var G__33258 = (0);
seq__33100_33230 = G__33255;
chunk__33101_33231 = G__33256;
count__33102_33232 = G__33257;
i__33103_33233 = G__33258;
continue;
}
} else {
}
}
break;
}

var G__33259 = seq__33093_33223;
var G__33260 = chunk__33094_33224;
var G__33261 = count__33095_33225;
var G__33262 = (i__33096_33226 + (1));
seq__33093_33223 = G__33259;
chunk__33094_33224 = G__33260;
count__33095_33225 = G__33261;
i__33096_33226 = G__33262;
continue;
} else {
var temp__4657__auto___33263__$1 = cljs.core.seq.call(null,seq__33093_33223);
if(temp__4657__auto___33263__$1){
var seq__33093_33264__$1 = temp__4657__auto___33263__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33093_33264__$1)){
var c__25862__auto___33265 = cljs.core.chunk_first.call(null,seq__33093_33264__$1);
var G__33266 = cljs.core.chunk_rest.call(null,seq__33093_33264__$1);
var G__33267 = c__25862__auto___33265;
var G__33268 = cljs.core.count.call(null,c__25862__auto___33265);
var G__33269 = (0);
seq__33093_33223 = G__33266;
chunk__33094_33224 = G__33267;
count__33095_33225 = G__33268;
i__33096_33226 = G__33269;
continue;
} else {
var vec__33108_33270 = cljs.core.first.call(null,seq__33093_33264__$1);
var column_33271 = cljs.core.nth.call(null,vec__33108_33270,(0),null);
var column_info_33272 = cljs.core.nth.call(null,vec__33108_33270,(1),null);
var seq__33111_33273 = cljs.core.seq.call(null,column_info_33272);
var chunk__33112_33274 = null;
var count__33113_33275 = (0);
var i__33114_33276 = (0);
while(true){
if((i__33114_33276 < count__33113_33275)){
var map__33115_33277 = cljs.core._nth.call(null,chunk__33112_33274,i__33114_33276);
var map__33115_33278__$1 = ((((!((map__33115_33277 == null)))?((((map__33115_33277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33115_33277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33115_33277):map__33115_33277);
var gline_33279 = cljs.core.get.call(null,map__33115_33278__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33280 = cljs.core.get.call(null,map__33115_33278__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33281 = cljs.core.get.call(null,map__33115_33278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33279], null),cljs.core.fnil.call(null,((function (seq__33111_33273,chunk__33112_33274,count__33113_33275,i__33114_33276,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33115_33277,map__33115_33278__$1,gline_33279,gcol_33280,name_33281,vec__33108_33270,column_33271,column_info_33272,seq__33093_33264__$1,temp__4657__auto___33263__$1,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33280], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33221,new cljs.core.Keyword(null,"col","col",-1959363084),column_33271,new cljs.core.Keyword(null,"name","name",1843675177),name_33281], null));
});})(seq__33111_33273,chunk__33112_33274,count__33113_33275,i__33114_33276,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33115_33277,map__33115_33278__$1,gline_33279,gcol_33280,name_33281,vec__33108_33270,column_33271,column_info_33272,seq__33093_33264__$1,temp__4657__auto___33263__$1,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted))
,cljs.core.sorted_map.call(null)));

var G__33282 = seq__33111_33273;
var G__33283 = chunk__33112_33274;
var G__33284 = count__33113_33275;
var G__33285 = (i__33114_33276 + (1));
seq__33111_33273 = G__33282;
chunk__33112_33274 = G__33283;
count__33113_33275 = G__33284;
i__33114_33276 = G__33285;
continue;
} else {
var temp__4657__auto___33286__$2 = cljs.core.seq.call(null,seq__33111_33273);
if(temp__4657__auto___33286__$2){
var seq__33111_33287__$1 = temp__4657__auto___33286__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33111_33287__$1)){
var c__25862__auto___33288 = cljs.core.chunk_first.call(null,seq__33111_33287__$1);
var G__33289 = cljs.core.chunk_rest.call(null,seq__33111_33287__$1);
var G__33290 = c__25862__auto___33288;
var G__33291 = cljs.core.count.call(null,c__25862__auto___33288);
var G__33292 = (0);
seq__33111_33273 = G__33289;
chunk__33112_33274 = G__33290;
count__33113_33275 = G__33291;
i__33114_33276 = G__33292;
continue;
} else {
var map__33117_33293 = cljs.core.first.call(null,seq__33111_33287__$1);
var map__33117_33294__$1 = ((((!((map__33117_33293 == null)))?((((map__33117_33293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33117_33293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33117_33293):map__33117_33293);
var gline_33295 = cljs.core.get.call(null,map__33117_33294__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_33296 = cljs.core.get.call(null,map__33117_33294__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_33297 = cljs.core.get.call(null,map__33117_33294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_33295], null),cljs.core.fnil.call(null,((function (seq__33111_33273,chunk__33112_33274,count__33113_33275,i__33114_33276,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33117_33293,map__33117_33294__$1,gline_33295,gcol_33296,name_33297,seq__33111_33287__$1,temp__4657__auto___33286__$2,vec__33108_33270,column_33271,column_info_33272,seq__33093_33264__$1,temp__4657__auto___33263__$1,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_33296], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_33221,new cljs.core.Keyword(null,"col","col",-1959363084),column_33271,new cljs.core.Keyword(null,"name","name",1843675177),name_33297], null));
});})(seq__33111_33273,chunk__33112_33274,count__33113_33275,i__33114_33276,seq__33093_33223,chunk__33094_33224,count__33095_33225,i__33096_33226,seq__33057_33119,chunk__33058_33120,count__33059_33121,i__33060_33122,map__33117_33293,map__33117_33294__$1,gline_33295,gcol_33296,name_33297,seq__33111_33287__$1,temp__4657__auto___33286__$2,vec__33108_33270,column_33271,column_info_33272,seq__33093_33264__$1,temp__4657__auto___33263__$1,vec__33090_33220,line_33221,columns_33222,seq__33057_33214__$1,temp__4657__auto___33213,inverted))
,cljs.core.sorted_map.call(null)));

var G__33298 = cljs.core.next.call(null,seq__33111_33287__$1);
var G__33299 = null;
var G__33300 = (0);
var G__33301 = (0);
seq__33111_33273 = G__33298;
chunk__33112_33274 = G__33299;
count__33113_33275 = G__33300;
i__33114_33276 = G__33301;
continue;
}
} else {
}
}
break;
}

var G__33302 = cljs.core.next.call(null,seq__33093_33264__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__33093_33223 = G__33302;
chunk__33094_33224 = G__33303;
count__33095_33225 = G__33304;
i__33096_33226 = G__33305;
continue;
}
} else {
}
}
break;
}

var G__33306 = cljs.core.next.call(null,seq__33057_33214__$1);
var G__33307 = null;
var G__33308 = (0);
var G__33309 = (0);
seq__33057_33119 = G__33306;
chunk__33058_33120 = G__33307;
count__33059_33121 = G__33308;
i__33060_33122 = G__33309;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});
