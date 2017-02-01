// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32000 = arguments.length;
var i__26127__auto___32001 = (0);
while(true){
if((i__26127__auto___32001 < len__26126__auto___32000)){
args__26133__auto__.push((arguments[i__26127__auto___32001]));

var G__32002 = (i__26127__auto___32001 + (1));
i__26127__auto___32001 = G__32002;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})());
var G__32003 = threaded;
var G__32004 = cljs.core.next.call(null,forms__$1);
x__$1 = G__32003;
forms__$1 = G__32004;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq31996){
var G__31997 = cljs.core.first.call(null,seq31996);
var seq31996__$1 = cljs.core.next.call(null,seq31996);
var G__31998 = cljs.core.first.call(null,seq31996__$1);
var seq31996__$2 = cljs.core.next.call(null,seq31996__$1);
var G__31999 = cljs.core.first.call(null,seq31996__$2);
var seq31996__$3 = cljs.core.next.call(null,seq31996__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__31997,G__31998,G__31999,seq31996__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32009 = arguments.length;
var i__26127__auto___32010 = (0);
while(true){
if((i__26127__auto___32010 < len__26126__auto___32009)){
args__26133__auto__.push((arguments[i__26127__auto___32010]));

var G__32011 = (i__26127__auto___32010 + (1));
i__26127__auto___32010 = G__32011;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__25885__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})());
var G__32012 = threaded;
var G__32013 = cljs.core.next.call(null,forms__$1);
x__$1 = G__32012;
forms__$1 = G__32013;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq32005){
var G__32006 = cljs.core.first.call(null,seq32005);
var seq32005__$1 = cljs.core.next.call(null,seq32005);
var G__32007 = cljs.core.first.call(null,seq32005__$1);
var seq32005__$2 = cljs.core.next.call(null,seq32005__$1);
var G__32008 = cljs.core.first.call(null,seq32005__$2);
var seq32005__$3 = cljs.core.next.call(null,seq32005__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32006,G__32007,G__32008,seq32005__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args32014 = [];
var len__26126__auto___32022 = arguments.length;
var i__26127__auto___32023 = (0);
while(true){
if((i__26127__auto___32023 < len__26126__auto___32022)){
args32014.push((arguments[i__26127__auto___32023]));

var G__32024 = (i__26127__auto___32023 + (1));
i__26127__auto___32023 = G__32024;
continue;
} else {
}
break;
}

var G__32021 = args32014.length;
switch (G__32021) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32014.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq32015){
var G__32016 = cljs.core.first.call(null,seq32015);
var seq32015__$1 = cljs.core.next.call(null,seq32015);
var G__32017 = cljs.core.first.call(null,seq32015__$1);
var seq32015__$2 = cljs.core.next.call(null,seq32015__$1);
var G__32018 = cljs.core.first.call(null,seq32015__$2);
var seq32015__$3 = cljs.core.next.call(null,seq32015__$2);
var G__32019 = cljs.core.first.call(null,seq32015__$3);
var seq32015__$4 = cljs.core.next.call(null,seq32015__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__32016,G__32017,G__32018,G__32019,seq32015__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32029 = arguments.length;
var i__26127__auto___32030 = (0);
while(true){
if((i__26127__auto___32030 < len__26126__auto___32029)){
args__26133__auto__.push((arguments[i__26127__auto___32030]));

var G__32031 = (i__26127__auto___32030 + (1));
i__26127__auto___32030 = G__32031;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq32026){
var G__32027 = cljs.core.first.call(null,seq32026);
var seq32026__$1 = cljs.core.next.call(null,seq32026);
var G__32028 = cljs.core.first.call(null,seq32026__$1);
var seq32026__$2 = cljs.core.next.call(null,seq32026__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__32027,G__32028,seq32026__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32035 = arguments.length;
var i__26127__auto___32036 = (0);
while(true){
if((i__26127__auto___32036 < len__26126__auto___32035)){
args__26133__auto__.push((arguments[i__26127__auto___32036]));

var G__32037 = (i__26127__auto___32036 + (1));
i__26127__auto___32036 = G__32037;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__25885__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$2);
})(),x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq32032){
var G__32033 = cljs.core.first.call(null,seq32032);
var seq32032__$1 = cljs.core.next.call(null,seq32032);
var G__32034 = cljs.core.first.call(null,seq32032__$1);
var seq32032__$2 = cljs.core.next.call(null,seq32032__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__32033,G__32034,seq32032__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32042 = arguments.length;
var i__26127__auto___32043 = (0);
while(true){
if((i__26127__auto___32043 < len__26126__auto___32042)){
args__26133__auto__.push((arguments[i__26127__auto___32043]));

var G__32044 = (i__26127__auto___32043 + (1));
i__26127__auto___32043 = G__32044;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__32038_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.vary_meta.call(null,p1__32038_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq32039){
var G__32040 = cljs.core.first.call(null,seq32039);
var seq32039__$1 = cljs.core.next.call(null,seq32039);
var G__32041 = cljs.core.first.call(null,seq32039__$1);
var seq32039__$2 = cljs.core.next.call(null,seq32039__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__32040,G__32041,seq32039__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32049 = arguments.length;
var i__26127__auto___32050 = (0);
while(true){
if((i__26127__auto___32050 < len__26126__auto___32049)){
args__26133__auto__.push((arguments[i__26127__auto___32050]));

var G__32051 = (i__26127__auto___32050 + (1));
i__26127__auto___32050 = G__32051;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__25885__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq32045){
var G__32046 = cljs.core.first.call(null,seq32045);
var seq32045__$1 = cljs.core.next.call(null,seq32045);
var G__32047 = cljs.core.first.call(null,seq32045__$1);
var seq32045__$2 = cljs.core.next.call(null,seq32045__$1);
var G__32048 = cljs.core.first.call(null,seq32045__$2);
var seq32045__$3 = cljs.core.next.call(null,seq32045__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__32046,G__32047,G__32048,seq32045__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__32052 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__32053 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__32052;
s = G__32053;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__32058){
var vec__32059 = p__32058;
var t = cljs.core.nth.call(null,vec__32059,(0),null);
var fs = cljs.core.nth.call(null,vec__32059,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25885__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32066 = arguments.length;
var i__26127__auto___32067 = (0);
while(true){
if((i__26127__auto___32067 < len__26126__auto___32066)){
args__26133__auto__.push((arguments[i__26127__auto___32067]));

var G__32068 = (i__26127__auto___32067 + (1));
i__26127__auto___32067 = G__32068;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq32062){
var G__32063 = cljs.core.first.call(null,seq32062);
var seq32062__$1 = cljs.core.next.call(null,seq32062);
var G__32064 = cljs.core.first.call(null,seq32062__$1);
var seq32062__$2 = cljs.core.next.call(null,seq32062__$1);
var G__32065 = cljs.core.first.call(null,seq32062__$2);
var seq32062__$3 = cljs.core.next.call(null,seq32062__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__32063,G__32064,G__32065,seq32062__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__32069 = cljs.core.next.call(null,params__$1);
var G__32070 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__32071 = lets;
params__$1 = G__32069;
new_params = G__32070;
lets = G__32071;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__32072 = cljs.core.next.call(null,params__$1);
var G__32073 = cljs.core.conj.call(null,new_params,gparam);
var G__32074 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__32072;
new_params = G__32073;
lets = G__32074;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32081 = arguments.length;
var i__26127__auto___32082 = (0);
while(true){
if((i__26127__auto___32082 < len__26126__auto___32081)){
args__26133__auto__.push((arguments[i__26127__auto___32082]));

var G__32083 = (i__26127__auto___32082 + (1));
i__26127__auto___32082 = G__32083;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__25885__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__32078 = sig;
var seq__32079 = cljs.core.seq.call(null,vec__32078);
var first__32080 = cljs.core.first.call(null,seq__32079);
var seq__32079__$1 = cljs.core.next.call(null,seq__32079);
var params = first__32080;
var body = seq__32079__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__25051__auto__ = conds;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__25885__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,((function (vec__32078,seq__32079,first__32080,seq__32079__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__32078,seq__32079,first__32080,seq__32079__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__32078,seq__32079,first__32080,seq__32079__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__32078,seq__32079,first__32080,seq__32079__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq32075){
var G__32076 = cljs.core.first.call(null,seq32075);
var seq32075__$1 = cljs.core.next.call(null,seq32075);
var G__32077 = cljs.core.first.call(null,seq32075__$1);
var seq32075__$2 = cljs.core.next.call(null,seq32075__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__32076,G__32077,seq32075__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32088 = arguments.length;
var i__26127__auto___32089 = (0);
while(true){
if((i__26127__auto___32089 < len__26126__auto___32088)){
args__26133__auto__.push((arguments[i__26127__auto___32089]));

var G__32090 = (i__26127__auto___32089 + (1));
i__26127__auto___32089 = G__32090;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq32084){
var G__32085 = cljs.core.first.call(null,seq32084);
var seq32084__$1 = cljs.core.next.call(null,seq32084);
var G__32086 = cljs.core.first.call(null,seq32084__$1);
var seq32084__$2 = cljs.core.next.call(null,seq32084__$1);
var G__32087 = cljs.core.first.call(null,seq32084__$2);
var seq32084__$3 = cljs.core.next.call(null,seq32084__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__32085,G__32086,G__32087,seq32084__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args32092 = [];
var len__26126__auto___32101 = arguments.length;
var i__26127__auto___32102 = (0);
while(true){
if((i__26127__auto___32102 < len__26126__auto___32101)){
args32092.push((arguments[i__26127__auto___32102]));

var G__32103 = (i__26127__auto___32102 + (1));
i__26127__auto___32102 = G__32103;
continue;
} else {
}
break;
}

var G__32100 = args32092.length;
switch (G__32100) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32092.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26145__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25885__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32091__auto__","temp__32091__auto__",1747101910,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32091__auto__","temp__32091__auto__",1747101910,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32091__auto__","temp__32091__auto__",1747101910,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq32093){
var G__32094 = cljs.core.first.call(null,seq32093);
var seq32093__$1 = cljs.core.next.call(null,seq32093);
var G__32095 = cljs.core.first.call(null,seq32093__$1);
var seq32093__$2 = cljs.core.next.call(null,seq32093__$1);
var G__32096 = cljs.core.first.call(null,seq32093__$2);
var seq32093__$3 = cljs.core.next.call(null,seq32093__$2);
var G__32097 = cljs.core.first.call(null,seq32093__$3);
var seq32093__$4 = cljs.core.next.call(null,seq32093__$3);
var G__32098 = cljs.core.first.call(null,seq32093__$4);
var seq32093__$5 = cljs.core.next.call(null,seq32093__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__32094,G__32095,G__32096,G__32097,G__32098,seq32093__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args32105 = [];
var len__26126__auto___32108 = arguments.length;
var i__26127__auto___32109 = (0);
while(true){
if((i__26127__auto___32109 < len__26126__auto___32108)){
args32105.push((arguments[i__26127__auto___32109]));

var G__32110 = (i__26127__auto___32109 + (1));
i__26127__auto___32109 = G__32110;
continue;
} else {
}
break;
}

var G__32107 = args32105.length;
switch (G__32107) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args32105.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32117 = arguments.length;
var i__26127__auto___32118 = (0);
while(true){
if((i__26127__auto___32118 < len__26126__auto___32117)){
args__26133__auto__.push((arguments[i__26127__auto___32118]));

var G__32119 = (i__26127__auto___32118 + (1));
i__26127__auto___32118 = G__32119;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__32112_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__32112_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq32113){
var G__32114 = cljs.core.first.call(null,seq32113);
var seq32113__$1 = cljs.core.next.call(null,seq32113);
var G__32115 = cljs.core.first.call(null,seq32113__$1);
var seq32113__$2 = cljs.core.next.call(null,seq32113__$1);
var G__32116 = cljs.core.first.call(null,seq32113__$2);
var seq32113__$3 = cljs.core.next.call(null,seq32113__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__32114,G__32115,G__32116,seq32113__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32124 = arguments.length;
var i__26127__auto___32125 = (0);
while(true){
if((i__26127__auto___32125 < len__26126__auto___32124)){
args__26133__auto__.push((arguments[i__26127__auto___32125]));

var G__32126 = (i__26127__auto___32125 + (1));
i__26127__auto___32125 = G__32126;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq32120){
var G__32121 = cljs.core.first.call(null,seq32120);
var seq32120__$1 = cljs.core.next.call(null,seq32120);
var G__32122 = cljs.core.first.call(null,seq32120__$1);
var seq32120__$2 = cljs.core.next.call(null,seq32120__$1);
var G__32123 = cljs.core.first.call(null,seq32120__$2);
var seq32120__$3 = cljs.core.next.call(null,seq32120__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__32121,G__32122,G__32123,seq32120__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32131 = arguments.length;
var i__26127__auto___32132 = (0);
while(true){
if((i__26127__auto___32132 < len__26126__auto___32131)){
args__26133__auto__.push((arguments[i__26127__auto___32132]));

var G__32133 = (i__26127__auto___32132 + (1));
i__26127__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq32127){
var G__32128 = cljs.core.first.call(null,seq32127);
var seq32127__$1 = cljs.core.next.call(null,seq32127);
var G__32129 = cljs.core.first.call(null,seq32127__$1);
var seq32127__$2 = cljs.core.next.call(null,seq32127__$1);
var G__32130 = cljs.core.first.call(null,seq32127__$2);
var seq32127__$3 = cljs.core.next.call(null,seq32127__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__32128,G__32129,G__32130,seq32127__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32142 = arguments.length;
var i__26127__auto___32143 = (0);
while(true){
if((i__26127__auto___32143 < len__26126__auto___32142)){
args__26133__auto__.push((arguments[i__26127__auto___32143]));

var G__32144 = (i__26127__auto___32143 + (1));
i__26127__auto___32143 = G__32144;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__32139 = bindings;
var x = cljs.core.nth.call(null,vec__32139,(0),null);
var xs = cljs.core.nth.call(null,vec__32139,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__32134__auto__","xs__32134__auto__",-560237686,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__32134__auto__","xs__32134__auto__",-560237686,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq32135){
var G__32136 = cljs.core.first.call(null,seq32135);
var seq32135__$1 = cljs.core.next.call(null,seq32135);
var G__32137 = cljs.core.first.call(null,seq32135__$1);
var seq32135__$2 = cljs.core.next.call(null,seq32135__$1);
var G__32138 = cljs.core.first.call(null,seq32135__$2);
var seq32135__$3 = cljs.core.next.call(null,seq32135__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__32136,G__32137,G__32138,seq32135__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32150 = arguments.length;
var i__26127__auto___32151 = (0);
while(true){
if((i__26127__auto___32151 < len__26126__auto___32150)){
args__26133__auto__.push((arguments[i__26127__auto___32151]));

var G__32152 = (i__26127__auto___32151 + (1));
i__26127__auto___32151 = G__32152;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32145__auto__","temp__32145__auto__",-1806185234,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32145__auto__","temp__32145__auto__",-1806185234,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32145__auto__","temp__32145__auto__",-1806185234,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq32146){
var G__32147 = cljs.core.first.call(null,seq32146);
var seq32146__$1 = cljs.core.next.call(null,seq32146);
var G__32148 = cljs.core.first.call(null,seq32146__$1);
var seq32146__$2 = cljs.core.next.call(null,seq32146__$1);
var G__32149 = cljs.core.first.call(null,seq32146__$2);
var seq32146__$3 = cljs.core.next.call(null,seq32146__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__32147,G__32148,G__32149,seq32146__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32157 = arguments.length;
var i__26127__auto___32158 = (0);
while(true){
if((i__26127__auto___32158 < len__26126__auto___32157)){
args__26133__auto__.push((arguments[i__26127__auto___32158]));

var G__32159 = (i__26127__auto___32158 + (1));
i__26127__auto___32158 = G__32159;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),null),x__25885__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq32153){
var G__32154 = cljs.core.first.call(null,seq32153);
var seq32153__$1 = cljs.core.next.call(null,seq32153);
var G__32155 = cljs.core.first.call(null,seq32153__$1);
var seq32153__$2 = cljs.core.next.call(null,seq32153__$1);
var G__32156 = cljs.core.first.call(null,seq32153__$2);
var seq32153__$3 = cljs.core.next.call(null,seq32153__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__32154,G__32155,G__32156,seq32153__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32164 = arguments.length;
var i__26127__auto___32165 = (0);
while(true){
if((i__26127__auto___32165 < len__26126__auto___32164)){
args__26133__auto__.push((arguments[i__26127__auto___32165]));

var G__32166 = (i__26127__auto___32165 + (1));
i__26127__auto___32165 = G__32166;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq32160){
var G__32161 = cljs.core.first.call(null,seq32160);
var seq32160__$1 = cljs.core.next.call(null,seq32160);
var G__32162 = cljs.core.first.call(null,seq32160__$1);
var seq32160__$2 = cljs.core.next.call(null,seq32160__$1);
var G__32163 = cljs.core.first.call(null,seq32160__$2);
var seq32160__$3 = cljs.core.next.call(null,seq32160__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__32161,G__32162,G__32163,seq32160__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32175 = arguments.length;
var i__26127__auto___32176 = (0);
while(true){
if((i__26127__auto___32176 < len__26126__auto___32175)){
args__26133__auto__.push((arguments[i__26127__auto___32176]));

var G__32177 = (i__26127__auto___32176 + (1));
i__26127__auto___32176 = G__32177;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__32171){
var vec__32172 = p__32171;
var test = cljs.core.nth.call(null,vec__32172,(0),null);
var step = cljs.core.nth.call(null,vec__32172,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq32167){
var G__32168 = cljs.core.first.call(null,seq32167);
var seq32167__$1 = cljs.core.next.call(null,seq32167);
var G__32169 = cljs.core.first.call(null,seq32167__$1);
var seq32167__$2 = cljs.core.next.call(null,seq32167__$1);
var G__32170 = cljs.core.first.call(null,seq32167__$2);
var seq32167__$3 = cljs.core.next.call(null,seq32167__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32168,G__32169,G__32170,seq32167__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32186 = arguments.length;
var i__26127__auto___32187 = (0);
while(true){
if((i__26127__auto___32187 < len__26126__auto___32186)){
args__26133__auto__.push((arguments[i__26127__auto___32187]));

var G__32188 = (i__26127__auto___32187 + (1));
i__26127__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__32182){
var vec__32183 = p__32182;
var test = cljs.core.nth.call(null,vec__32183,(0),null);
var step = cljs.core.nth.call(null,vec__32183,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq32178){
var G__32179 = cljs.core.first.call(null,seq32178);
var seq32178__$1 = cljs.core.next.call(null,seq32178);
var G__32180 = cljs.core.first.call(null,seq32178__$1);
var seq32178__$2 = cljs.core.next.call(null,seq32178__$1);
var G__32181 = cljs.core.first.call(null,seq32178__$2);
var seq32178__$3 = cljs.core.next.call(null,seq32178__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32179,G__32180,G__32181,seq32178__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32194 = arguments.length;
var i__26127__auto___32195 = (0);
while(true){
if((i__26127__auto___32195 < len__26126__auto___32194)){
args__26133__auto__.push((arguments[i__26127__auto___32195]));

var G__32196 = (i__26127__auto___32195 + (1));
i__26127__auto___32195 = G__32196;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((4) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26134__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq32189){
var G__32190 = cljs.core.first.call(null,seq32189);
var seq32189__$1 = cljs.core.next.call(null,seq32189);
var G__32191 = cljs.core.first.call(null,seq32189__$1);
var seq32189__$2 = cljs.core.next.call(null,seq32189__$1);
var G__32192 = cljs.core.first.call(null,seq32189__$2);
var seq32189__$3 = cljs.core.next.call(null,seq32189__$2);
var G__32193 = cljs.core.first.call(null,seq32189__$3);
var seq32189__$4 = cljs.core.next.call(null,seq32189__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32190,G__32191,G__32192,G__32193,seq32189__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32201 = arguments.length;
var i__26127__auto___32202 = (0);
while(true){
if((i__26127__auto___32202 < len__26126__auto___32201)){
args__26133__auto__.push((arguments[i__26127__auto___32202]));

var G__32203 = (i__26127__auto___32202 + (1));
i__26127__auto___32202 = G__32203;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq32197){
var G__32198 = cljs.core.first.call(null,seq32197);
var seq32197__$1 = cljs.core.next.call(null,seq32197);
var G__32199 = cljs.core.first.call(null,seq32197__$1);
var seq32197__$2 = cljs.core.next.call(null,seq32197__$1);
var G__32200 = cljs.core.first.call(null,seq32197__$2);
var seq32197__$3 = cljs.core.next.call(null,seq32197__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32198,G__32199,G__32200,seq32197__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32208 = arguments.length;
var i__26127__auto___32209 = (0);
while(true){
if((i__26127__auto___32209 < len__26126__auto___32208)){
args__26133__auto__.push((arguments[i__26127__auto___32209]));

var G__32210 = (i__26127__auto___32209 + (1));
i__26127__auto___32209 = G__32210;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq32204){
var G__32205 = cljs.core.first.call(null,seq32204);
var seq32204__$1 = cljs.core.next.call(null,seq32204);
var G__32206 = cljs.core.first.call(null,seq32204__$1);
var seq32204__$2 = cljs.core.next.call(null,seq32204__$1);
var G__32207 = cljs.core.first.call(null,seq32204__$2);
var seq32204__$3 = cljs.core.next.call(null,seq32204__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__32205,G__32206,G__32207,seq32204__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args32212 = [];
var len__26126__auto___32221 = arguments.length;
var i__26127__auto___32222 = (0);
while(true){
if((i__26127__auto___32222 < len__26126__auto___32221)){
args32212.push((arguments[i__26127__auto___32222]));

var G__32223 = (i__26127__auto___32222 + (1));
i__26127__auto___32222 = G__32223;
continue;
} else {
}
break;
}

var G__32220 = args32212.length;
switch (G__32220) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32212.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26145__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__25885__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32211__auto__","temp__32211__auto__",-100249068,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32211__auto__","temp__32211__auto__",-100249068,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32211__auto__","temp__32211__auto__",-100249068,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq32213){
var G__32214 = cljs.core.first.call(null,seq32213);
var seq32213__$1 = cljs.core.next.call(null,seq32213);
var G__32215 = cljs.core.first.call(null,seq32213__$1);
var seq32213__$2 = cljs.core.next.call(null,seq32213__$1);
var G__32216 = cljs.core.first.call(null,seq32213__$2);
var seq32213__$3 = cljs.core.next.call(null,seq32213__$2);
var G__32217 = cljs.core.first.call(null,seq32213__$3);
var seq32213__$4 = cljs.core.next.call(null,seq32213__$3);
var G__32218 = cljs.core.first.call(null,seq32213__$4);
var seq32213__$5 = cljs.core.next.call(null,seq32213__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__32214,G__32215,G__32216,G__32217,G__32218,seq32213__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32230 = arguments.length;
var i__26127__auto___32231 = (0);
while(true){
if((i__26127__auto___32231 < len__26126__auto___32230)){
args__26133__auto__.push((arguments[i__26127__auto___32231]));

var G__32232 = (i__26127__auto___32231 + (1));
i__26127__auto___32231 = G__32232;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32225__auto__","temp__32225__auto__",597499565,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32225__auto__","temp__32225__auto__",597499565,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__32225__auto__","temp__32225__auto__",597499565,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq32226){
var G__32227 = cljs.core.first.call(null,seq32226);
var seq32226__$1 = cljs.core.next.call(null,seq32226);
var G__32228 = cljs.core.first.call(null,seq32226__$1);
var seq32226__$2 = cljs.core.next.call(null,seq32226__$1);
var G__32229 = cljs.core.first.call(null,seq32226__$2);
var seq32226__$3 = cljs.core.next.call(null,seq32226__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__32227,G__32228,G__32229,seq32226__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__32233_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32233_SHARP_)){
return cljs.core.first.call(null,p1__32233_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__32233_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__32233_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__32234_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__32234_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__32235 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__32236 = cljs.core.next.call(null,fdecls);
ret = G__32235;
fdecls = G__32236;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__25885__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__25885__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__32246 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__32247 = n;
var G__32248 = cljs.core.nnext.call(null,bs);
var G__32249 = true;
ret = G__32246;
n = G__32247;
bs = G__32248;
seen_rest_QMARK_ = G__32249;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__32250 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25885__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25885__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__25885__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__32251 = (n + (1));
var G__32252 = cljs.core.next.call(null,bs);
var G__32253 = seen_rest_QMARK_;
ret = G__32250;
n = G__32251;
bs = G__32252;
seen_rest_QMARK_ = G__32253;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__25885__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__25885__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__32237_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__25051__auto__ = mkns;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.namespace.call(null,p1__32237_SHARP_);
}
})(),cljs.core.name.call(null,p1__32237_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__32238_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.symbol.call(null,(function (){var or__25051__auto__ = mkns;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.namespace.call(null,p1__32238_SHARP_);
}
})(),cljs.core.name.call(null,p1__32238_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__32239_SHARP_,p2__32240_SHARP_){
return cljs.core.assoc.call(null,p1__32239_SHARP_,p2__32240_SHARP_,cljs.core.val.call(null,entry).call(null,p2__32240_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || (bb.cljs$core$INamed$))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__25885__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$2);
})(),x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__25885__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__32254 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__32255 = cljs.core.next.call(null,bes);
ret = G__32254;
bes = G__32255;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__32241_SHARP_){
return (cljs.core.first.call(null,p1__32241_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__25885__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32260 = arguments.length;
var i__26127__auto___32261 = (0);
while(true){
if((i__26127__auto___32261 < len__26126__auto___32260)){
args__26133__auto__.push((arguments[i__26127__auto___32261]));

var G__32262 = (i__26127__auto___32261 + (1));
i__26127__auto___32261 = G__32262;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__25885__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq32256){
var G__32257 = cljs.core.first.call(null,seq32256);
var seq32256__$1 = cljs.core.next.call(null,seq32256);
var G__32258 = cljs.core.first.call(null,seq32256__$1);
var seq32256__$2 = cljs.core.next.call(null,seq32256__$1);
var G__32259 = cljs.core.first.call(null,seq32256__$2);
var seq32256__$3 = cljs.core.next.call(null,seq32256__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__32257,G__32258,G__32259,seq32256__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32271 = arguments.length;
var i__26127__auto___32272 = (0);
while(true){
if((i__26127__auto___32272 < len__26126__auto___32271)){
args__26133__auto__.push((arguments[i__26127__auto___32272]));

var G__32273 = (i__26127__auto___32272 + (1));
i__26127__auto___32272 = G__32273;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__25885__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__32267){
var vec__32268 = p__32267;
var b = cljs.core.nth.call(null,vec__32268,(0),null);
var v = cljs.core.nth.call(null,vec__32268,(1),null);
var g = cljs.core.nth.call(null,vec__32268,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq32263){
var G__32264 = cljs.core.first.call(null,seq32263);
var seq32263__$1 = cljs.core.next.call(null,seq32263);
var G__32265 = cljs.core.first.call(null,seq32263__$1);
var seq32263__$2 = cljs.core.next.call(null,seq32263__$1);
var G__32266 = cljs.core.first.call(null,seq32263__$2);
var seq32263__$3 = cljs.core.next.call(null,seq32263__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__32264,G__32265,G__32266,seq32263__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__32274_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__32274_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__32275){
var vec__32276 = p__32275;
var p = cljs.core.nth.call(null,vec__32276,(0),null);
var b = cljs.core.nth.call(null,vec__32276,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32282 = arguments.length;
var i__26127__auto___32283 = (0);
while(true){
if((i__26127__auto___32283 < len__26126__auto___32282)){
args__26133__auto__.push((arguments[i__26127__auto___32283]));

var G__32284 = (i__26127__auto___32283 + (1));
i__26127__auto___32283 = G__32284;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq32279){
var G__32280 = cljs.core.first.call(null,seq32279);
var seq32279__$1 = cljs.core.next.call(null,seq32279);
var G__32281 = cljs.core.first.call(null,seq32279__$1);
var seq32279__$2 = cljs.core.next.call(null,seq32279__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__32280,G__32281,seq32279__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__25039__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__25039__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__25039__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args32288 = [];
var len__26126__auto___32295 = arguments.length;
var i__26127__auto___32296 = (0);
while(true){
if((i__26127__auto___32296 < len__26126__auto___32295)){
args32288.push((arguments[i__26127__auto___32296]));

var G__32297 = (i__26127__auto___32296 + (1));
i__26127__auto___32296 = G__32297;
continue;
} else {
}
break;
}

var G__32294 = args32288.length;
switch (G__32294) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32288.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26145__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__32285_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__32285_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__32286_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32286_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32287__auto__","and__32287__auto__",-1925981060,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32287__auto__","and__32287__auto__",-1925981060,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__32287__auto__","and__32287__auto__",-1925981060,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq32289){
var G__32290 = cljs.core.first.call(null,seq32289);
var seq32289__$1 = cljs.core.next.call(null,seq32289);
var G__32291 = cljs.core.first.call(null,seq32289__$1);
var seq32289__$2 = cljs.core.next.call(null,seq32289__$1);
var G__32292 = cljs.core.first.call(null,seq32289__$2);
var seq32289__$3 = cljs.core.next.call(null,seq32289__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__32290,G__32291,G__32292,seq32289__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args32302 = [];
var len__26126__auto___32309 = arguments.length;
var i__26127__auto___32310 = (0);
while(true){
if((i__26127__auto___32310 < len__26126__auto___32309)){
args32302.push((arguments[i__26127__auto___32310]));

var G__32311 = (i__26127__auto___32310 + (1));
i__26127__auto___32310 = G__32311;
continue;
} else {
}
break;
}

var G__32308 = args32302.length;
switch (G__32308) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32302.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26145__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__32299_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__32299_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__32300_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__32300_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32301__auto__","or__32301__auto__",-487777351,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32301__auto__","or__32301__auto__",-487777351,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__32301__auto__","or__32301__auto__",-487777351,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq32303){
var G__32304 = cljs.core.first.call(null,seq32303);
var seq32303__$1 = cljs.core.next.call(null,seq32303);
var G__32305 = cljs.core.first.call(null,seq32303__$1);
var seq32303__$2 = cljs.core.next.call(null,seq32303__$1);
var G__32306 = cljs.core.first.call(null,seq32303__$2);
var seq32303__$3 = cljs.core.next.call(null,seq32303__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__32304,G__32305,G__32306,seq32303__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25885__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__32317 = clojure.string.split.call(null,comment,/\n/);
var seq__32318 = cljs.core.seq.call(null,vec__32317);
var first__32319 = cljs.core.first.call(null,seq__32318);
var seq__32318__$1 = cljs.core.next.call(null,seq__32318);
var x = first__32319;
var ys = seq__32318__$1;
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__32317,seq__32318,first__32319,seq__32318__$1,x,ys){
return (function (p1__32313_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__32313_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__32317,seq__32318,first__32319,seq__32318__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$2);
})(),x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32320__auto__","c__32320__auto__",403124780,null)),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32321__auto__","x__32321__auto__",1782781684,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32321__auto__","x__32321__auto__",1782781684,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__32320__auto__","c__32320__auto__",403124780,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args32322 = [];
var len__26126__auto___32330 = arguments.length;
var i__26127__auto___32331 = (0);
while(true){
if((i__26127__auto___32331 < len__26126__auto___32330)){
args32322.push((arguments[i__26127__auto___32331]));

var G__32332 = (i__26127__auto___32331 + (1));
i__26127__auto___32331 = G__32332;
continue;
} else {
}
break;
}

var G__32329 = args32322.length;
switch (G__32329) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32322.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq32323){
var G__32324 = cljs.core.first.call(null,seq32323);
var seq32323__$1 = cljs.core.next.call(null,seq32323);
var G__32325 = cljs.core.first.call(null,seq32323__$1);
var seq32323__$2 = cljs.core.next.call(null,seq32323__$1);
var G__32326 = cljs.core.first.call(null,seq32323__$2);
var seq32323__$3 = cljs.core.next.call(null,seq32323__$2);
var G__32327 = cljs.core.first.call(null,seq32323__$3);
var seq32323__$4 = cljs.core.next.call(null,seq32323__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__32324,G__32325,G__32326,G__32327,seq32323__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args32334 = [];
var len__26126__auto___32343 = arguments.length;
var i__26127__auto___32344 = (0);
while(true){
if((i__26127__auto___32344 < len__26126__auto___32343)){
args32334.push((arguments[i__26127__auto___32344]));

var G__32345 = (i__26127__auto___32344 + (1));
i__26127__auto___32344 = G__32345;
continue;
} else {
}
break;
}

var G__32342 = args32334.length;
switch (G__32342) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32334.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26145__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$2);
})(),x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq32335){
var G__32336 = cljs.core.first.call(null,seq32335);
var seq32335__$1 = cljs.core.next.call(null,seq32335);
var G__32337 = cljs.core.first.call(null,seq32335__$1);
var seq32335__$2 = cljs.core.next.call(null,seq32335__$1);
var G__32338 = cljs.core.first.call(null,seq32335__$2);
var seq32335__$3 = cljs.core.next.call(null,seq32335__$2);
var G__32339 = cljs.core.first.call(null,seq32335__$3);
var seq32335__$4 = cljs.core.next.call(null,seq32335__$3);
var G__32340 = cljs.core.first.call(null,seq32335__$4);
var seq32335__$5 = cljs.core.next.call(null,seq32335__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__32336,G__32337,G__32338,G__32339,G__32340,seq32335__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args32347 = [];
var len__26126__auto___32355 = arguments.length;
var i__26127__auto___32356 = (0);
while(true){
if((i__26127__auto___32356 < len__26126__auto___32355)){
args32347.push((arguments[i__26127__auto___32356]));

var G__32357 = (i__26127__auto___32356 + (1));
i__26127__auto___32356 = G__32357;
continue;
} else {
}
break;
}

var G__32354 = args32347.length;
switch (G__32354) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32347.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq32348){
var G__32349 = cljs.core.first.call(null,seq32348);
var seq32348__$1 = cljs.core.next.call(null,seq32348);
var G__32350 = cljs.core.first.call(null,seq32348__$1);
var seq32348__$2 = cljs.core.next.call(null,seq32348__$1);
var G__32351 = cljs.core.first.call(null,seq32348__$2);
var seq32348__$3 = cljs.core.next.call(null,seq32348__$2);
var G__32352 = cljs.core.first.call(null,seq32348__$3);
var seq32348__$4 = cljs.core.next.call(null,seq32348__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__32349,G__32350,G__32351,G__32352,seq32348__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32362 = arguments.length;
var i__26127__auto___32363 = (0);
while(true){
if((i__26127__auto___32363 < len__26126__auto___32362)){
args__26133__auto__.push((arguments[i__26127__auto___32363]));

var G__32364 = (i__26127__auto___32363 + (1));
i__26127__auto___32363 = G__32364;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq32359){
var G__32360 = cljs.core.first.call(null,seq32359);
var seq32359__$1 = cljs.core.next.call(null,seq32359);
var G__32361 = cljs.core.first.call(null,seq32359__$1);
var seq32359__$2 = cljs.core.next.call(null,seq32359__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__32360,G__32361,seq32359__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32368 = arguments.length;
var i__26127__auto___32369 = (0);
while(true){
if((i__26127__auto___32369 < len__26126__auto___32368)){
args__26133__auto__.push((arguments[i__26127__auto___32369]));

var G__32370 = (i__26127__auto___32369 + (1));
i__26127__auto___32369 = G__32370;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq32365){
var G__32366 = cljs.core.first.call(null,seq32365);
var seq32365__$1 = cljs.core.next.call(null,seq32365);
var G__32367 = cljs.core.first.call(null,seq32365__$1);
var seq32365__$2 = cljs.core.next.call(null,seq32365__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__32366,G__32367,seq32365__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32374 = arguments.length;
var i__26127__auto___32375 = (0);
while(true){
if((i__26127__auto___32375 < len__26126__auto___32374)){
args__26133__auto__.push((arguments[i__26127__auto___32375]));

var G__32376 = (i__26127__auto___32375 + (1));
i__26127__auto___32375 = G__32376;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq32371){
var G__32372 = cljs.core.first.call(null,seq32371);
var seq32371__$1 = cljs.core.next.call(null,seq32371);
var G__32373 = cljs.core.first.call(null,seq32371__$1);
var seq32371__$2 = cljs.core.next.call(null,seq32371__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__32372,G__32373,seq32371__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32380 = arguments.length;
var i__26127__auto___32381 = (0);
while(true){
if((i__26127__auto___32381 < len__26126__auto___32380)){
args__26133__auto__.push((arguments[i__26127__auto___32381]));

var G__32382 = (i__26127__auto___32381 + (1));
i__26127__auto___32381 = G__32382;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq32377){
var G__32378 = cljs.core.first.call(null,seq32377);
var seq32377__$1 = cljs.core.next.call(null,seq32377);
var G__32379 = cljs.core.first.call(null,seq32377__$1);
var seq32377__$2 = cljs.core.next.call(null,seq32377__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__32378,G__32379,seq32377__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32386 = arguments.length;
var i__26127__auto___32387 = (0);
while(true){
if((i__26127__auto___32387 < len__26126__auto___32386)){
args__26133__auto__.push((arguments[i__26127__auto___32387]));

var G__32388 = (i__26127__auto___32387 + (1));
i__26127__auto___32387 = G__32388;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq32383){
var G__32384 = cljs.core.first.call(null,seq32383);
var seq32383__$1 = cljs.core.next.call(null,seq32383);
var G__32385 = cljs.core.first.call(null,seq32383__$1);
var seq32383__$2 = cljs.core.next.call(null,seq32383__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__32384,G__32385,seq32383__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32392 = arguments.length;
var i__26127__auto___32393 = (0);
while(true){
if((i__26127__auto___32393 < len__26126__auto___32392)){
args__26133__auto__.push((arguments[i__26127__auto___32393]));

var G__32394 = (i__26127__auto___32393 + (1));
i__26127__auto___32393 = G__32394;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq32389){
var G__32390 = cljs.core.first.call(null,seq32389);
var seq32389__$1 = cljs.core.next.call(null,seq32389);
var G__32391 = cljs.core.first.call(null,seq32389__$1);
var seq32389__$2 = cljs.core.next.call(null,seq32389__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__32390,G__32391,seq32389__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32398 = arguments.length;
var i__26127__auto___32399 = (0);
while(true){
if((i__26127__auto___32399 < len__26126__auto___32398)){
args__26133__auto__.push((arguments[i__26127__auto___32399]));

var G__32400 = (i__26127__auto___32399 + (1));
i__26127__auto___32399 = G__32400;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq32395){
var G__32396 = cljs.core.first.call(null,seq32395);
var seq32395__$1 = cljs.core.next.call(null,seq32395);
var G__32397 = cljs.core.first.call(null,seq32395__$1);
var seq32395__$2 = cljs.core.next.call(null,seq32395__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__32396,G__32397,seq32395__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args32401 = [];
var len__26126__auto___32409 = arguments.length;
var i__26127__auto___32410 = (0);
while(true){
if((i__26127__auto___32410 < len__26126__auto___32409)){
args32401.push((arguments[i__26127__auto___32410]));

var G__32411 = (i__26127__auto___32410 + (1));
i__26127__auto___32410 = G__32411;
continue;
} else {
}
break;
}

var G__32408 = args32401.length;
switch (G__32408) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32401.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq32402){
var G__32403 = cljs.core.first.call(null,seq32402);
var seq32402__$1 = cljs.core.next.call(null,seq32402);
var G__32404 = cljs.core.first.call(null,seq32402__$1);
var seq32402__$2 = cljs.core.next.call(null,seq32402__$1);
var G__32405 = cljs.core.first.call(null,seq32402__$2);
var seq32402__$3 = cljs.core.next.call(null,seq32402__$2);
var G__32406 = cljs.core.first.call(null,seq32402__$3);
var seq32402__$4 = cljs.core.next.call(null,seq32402__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__32403,G__32404,G__32405,G__32406,seq32402__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args32413 = [];
var len__26126__auto___32421 = arguments.length;
var i__26127__auto___32422 = (0);
while(true){
if((i__26127__auto___32422 < len__26126__auto___32421)){
args32413.push((arguments[i__26127__auto___32422]));

var G__32423 = (i__26127__auto___32422 + (1));
i__26127__auto___32422 = G__32423;
continue;
} else {
}
break;
}

var G__32420 = args32413.length;
switch (G__32420) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32413.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq32414){
var G__32415 = cljs.core.first.call(null,seq32414);
var seq32414__$1 = cljs.core.next.call(null,seq32414);
var G__32416 = cljs.core.first.call(null,seq32414__$1);
var seq32414__$2 = cljs.core.next.call(null,seq32414__$1);
var G__32417 = cljs.core.first.call(null,seq32414__$2);
var seq32414__$3 = cljs.core.next.call(null,seq32414__$2);
var G__32418 = cljs.core.first.call(null,seq32414__$3);
var seq32414__$4 = cljs.core.next.call(null,seq32414__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__32415,G__32416,G__32417,G__32418,seq32414__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args32425 = [];
var len__26126__auto___32433 = arguments.length;
var i__26127__auto___32434 = (0);
while(true){
if((i__26127__auto___32434 < len__26126__auto___32433)){
args32425.push((arguments[i__26127__auto___32434]));

var G__32435 = (i__26127__auto___32434 + (1));
i__26127__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var G__32432 = args32425.length;
switch (G__32432) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32425.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq32426){
var G__32427 = cljs.core.first.call(null,seq32426);
var seq32426__$1 = cljs.core.next.call(null,seq32426);
var G__32428 = cljs.core.first.call(null,seq32426__$1);
var seq32426__$2 = cljs.core.next.call(null,seq32426__$1);
var G__32429 = cljs.core.first.call(null,seq32426__$2);
var seq32426__$3 = cljs.core.next.call(null,seq32426__$2);
var G__32430 = cljs.core.first.call(null,seq32426__$3);
var seq32426__$4 = cljs.core.next.call(null,seq32426__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__32427,G__32428,G__32429,G__32430,seq32426__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args32437 = [];
var len__26126__auto___32445 = arguments.length;
var i__26127__auto___32446 = (0);
while(true){
if((i__26127__auto___32446 < len__26126__auto___32445)){
args32437.push((arguments[i__26127__auto___32446]));

var G__32447 = (i__26127__auto___32446 + (1));
i__26127__auto___32446 = G__32447;
continue;
} else {
}
break;
}

var G__32444 = args32437.length;
switch (G__32444) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32437.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq32438){
var G__32439 = cljs.core.first.call(null,seq32438);
var seq32438__$1 = cljs.core.next.call(null,seq32438);
var G__32440 = cljs.core.first.call(null,seq32438__$1);
var seq32438__$2 = cljs.core.next.call(null,seq32438__$1);
var G__32441 = cljs.core.first.call(null,seq32438__$2);
var seq32438__$3 = cljs.core.next.call(null,seq32438__$2);
var G__32442 = cljs.core.first.call(null,seq32438__$3);
var seq32438__$4 = cljs.core.next.call(null,seq32438__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__32439,G__32440,G__32441,G__32442,seq32438__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args32449 = [];
var len__26126__auto___32457 = arguments.length;
var i__26127__auto___32458 = (0);
while(true){
if((i__26127__auto___32458 < len__26126__auto___32457)){
args32449.push((arguments[i__26127__auto___32458]));

var G__32459 = (i__26127__auto___32458 + (1));
i__26127__auto___32458 = G__32459;
continue;
} else {
}
break;
}

var G__32456 = args32449.length;
switch (G__32456) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32449.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq32450){
var G__32451 = cljs.core.first.call(null,seq32450);
var seq32450__$1 = cljs.core.next.call(null,seq32450);
var G__32452 = cljs.core.first.call(null,seq32450__$1);
var seq32450__$2 = cljs.core.next.call(null,seq32450__$1);
var G__32453 = cljs.core.first.call(null,seq32450__$2);
var seq32450__$3 = cljs.core.next.call(null,seq32450__$2);
var G__32454 = cljs.core.first.call(null,seq32450__$3);
var seq32450__$4 = cljs.core.next.call(null,seq32450__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__32451,G__32452,G__32453,G__32454,seq32450__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args32461 = [];
var len__26126__auto___32469 = arguments.length;
var i__26127__auto___32470 = (0);
while(true){
if((i__26127__auto___32470 < len__26126__auto___32469)){
args32461.push((arguments[i__26127__auto___32470]));

var G__32471 = (i__26127__auto___32470 + (1));
i__26127__auto___32470 = G__32471;
continue;
} else {
}
break;
}

var G__32468 = args32461.length;
switch (G__32468) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32461.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq32462){
var G__32463 = cljs.core.first.call(null,seq32462);
var seq32462__$1 = cljs.core.next.call(null,seq32462);
var G__32464 = cljs.core.first.call(null,seq32462__$1);
var seq32462__$2 = cljs.core.next.call(null,seq32462__$1);
var G__32465 = cljs.core.first.call(null,seq32462__$2);
var seq32462__$3 = cljs.core.next.call(null,seq32462__$2);
var G__32466 = cljs.core.first.call(null,seq32462__$3);
var seq32462__$4 = cljs.core.next.call(null,seq32462__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32463,G__32464,G__32465,G__32466,seq32462__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args32473 = [];
var len__26126__auto___32481 = arguments.length;
var i__26127__auto___32482 = (0);
while(true){
if((i__26127__auto___32482 < len__26126__auto___32481)){
args32473.push((arguments[i__26127__auto___32482]));

var G__32483 = (i__26127__auto___32482 + (1));
i__26127__auto___32482 = G__32483;
continue;
} else {
}
break;
}

var G__32480 = args32473.length;
switch (G__32480) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32473.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq32474){
var G__32475 = cljs.core.first.call(null,seq32474);
var seq32474__$1 = cljs.core.next.call(null,seq32474);
var G__32476 = cljs.core.first.call(null,seq32474__$1);
var seq32474__$2 = cljs.core.next.call(null,seq32474__$1);
var G__32477 = cljs.core.first.call(null,seq32474__$2);
var seq32474__$3 = cljs.core.next.call(null,seq32474__$2);
var G__32478 = cljs.core.first.call(null,seq32474__$3);
var seq32474__$4 = cljs.core.next.call(null,seq32474__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__32475,G__32476,G__32477,G__32478,seq32474__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args32485 = [];
var len__26126__auto___32493 = arguments.length;
var i__26127__auto___32494 = (0);
while(true){
if((i__26127__auto___32494 < len__26126__auto___32493)){
args32485.push((arguments[i__26127__auto___32494]));

var G__32495 = (i__26127__auto___32494 + (1));
i__26127__auto___32494 = G__32495;
continue;
} else {
}
break;
}

var G__32492 = args32485.length;
switch (G__32492) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32485.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq32486){
var G__32487 = cljs.core.first.call(null,seq32486);
var seq32486__$1 = cljs.core.next.call(null,seq32486);
var G__32488 = cljs.core.first.call(null,seq32486__$1);
var seq32486__$2 = cljs.core.next.call(null,seq32486__$1);
var G__32489 = cljs.core.first.call(null,seq32486__$2);
var seq32486__$3 = cljs.core.next.call(null,seq32486__$2);
var G__32490 = cljs.core.first.call(null,seq32486__$3);
var seq32486__$4 = cljs.core.next.call(null,seq32486__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32487,G__32488,G__32489,G__32490,seq32486__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args32497 = [];
var len__26126__auto___32505 = arguments.length;
var i__26127__auto___32506 = (0);
while(true){
if((i__26127__auto___32506 < len__26126__auto___32505)){
args32497.push((arguments[i__26127__auto___32506]));

var G__32507 = (i__26127__auto___32506 + (1));
i__26127__auto___32506 = G__32507;
continue;
} else {
}
break;
}

var G__32504 = args32497.length;
switch (G__32504) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32497.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq32498){
var G__32499 = cljs.core.first.call(null,seq32498);
var seq32498__$1 = cljs.core.next.call(null,seq32498);
var G__32500 = cljs.core.first.call(null,seq32498__$1);
var seq32498__$2 = cljs.core.next.call(null,seq32498__$1);
var G__32501 = cljs.core.first.call(null,seq32498__$2);
var seq32498__$3 = cljs.core.next.call(null,seq32498__$2);
var G__32502 = cljs.core.first.call(null,seq32498__$3);
var seq32498__$4 = cljs.core.next.call(null,seq32498__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__32499,G__32500,G__32501,G__32502,seq32498__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args32511 = [];
var len__26126__auto___32519 = arguments.length;
var i__26127__auto___32520 = (0);
while(true){
if((i__26127__auto___32520 < len__26126__auto___32519)){
args32511.push((arguments[i__26127__auto___32520]));

var G__32521 = (i__26127__auto___32520 + (1));
i__26127__auto___32520 = G__32521;
continue;
} else {
}
break;
}

var G__32518 = args32511.length;
switch (G__32518) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32511.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32509__auto__","x__32509__auto__",1400558885,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32510__auto__","y__32510__auto__",760069639,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32509__auto__","x__32509__auto__",1400558885,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32510__auto__","y__32510__auto__",760069639,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32509__auto__","x__32509__auto__",1400558885,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32510__auto__","y__32510__auto__",760069639,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq32512){
var G__32513 = cljs.core.first.call(null,seq32512);
var seq32512__$1 = cljs.core.next.call(null,seq32512);
var G__32514 = cljs.core.first.call(null,seq32512__$1);
var seq32512__$2 = cljs.core.next.call(null,seq32512__$1);
var G__32515 = cljs.core.first.call(null,seq32512__$2);
var seq32512__$3 = cljs.core.next.call(null,seq32512__$2);
var G__32516 = cljs.core.first.call(null,seq32512__$3);
var seq32512__$4 = cljs.core.next.call(null,seq32512__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__32513,G__32514,G__32515,G__32516,seq32512__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args32525 = [];
var len__26126__auto___32533 = arguments.length;
var i__26127__auto___32534 = (0);
while(true){
if((i__26127__auto___32534 < len__26126__auto___32533)){
args32525.push((arguments[i__26127__auto___32534]));

var G__32535 = (i__26127__auto___32534 + (1));
i__26127__auto___32534 = G__32535;
continue;
} else {
}
break;
}

var G__32532 = args32525.length;
switch (G__32532) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32525.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32523__auto__","x__32523__auto__",1693183823,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32524__auto__","y__32524__auto__",324891262,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32523__auto__","x__32523__auto__",1693183823,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32524__auto__","y__32524__auto__",324891262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32523__auto__","x__32523__auto__",1693183823,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__32524__auto__","y__32524__auto__",324891262,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq32526){
var G__32527 = cljs.core.first.call(null,seq32526);
var seq32526__$1 = cljs.core.next.call(null,seq32526);
var G__32528 = cljs.core.first.call(null,seq32526__$1);
var seq32526__$2 = cljs.core.next.call(null,seq32526__$1);
var G__32529 = cljs.core.first.call(null,seq32526__$2);
var seq32526__$3 = cljs.core.next.call(null,seq32526__$2);
var G__32530 = cljs.core.first.call(null,seq32526__$3);
var seq32526__$4 = cljs.core.next.call(null,seq32526__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__32527,G__32528,G__32529,G__32530,seq32526__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args32537 = [];
var len__26126__auto___32545 = arguments.length;
var i__26127__auto___32546 = (0);
while(true){
if((i__26127__auto___32546 < len__26126__auto___32545)){
args32537.push((arguments[i__26127__auto___32546]));

var G__32547 = (i__26127__auto___32546 + (1));
i__26127__auto___32546 = G__32547;
continue;
} else {
}
break;
}

var G__32544 = args32537.length;
switch (G__32544) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32537.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq32538){
var G__32539 = cljs.core.first.call(null,seq32538);
var seq32538__$1 = cljs.core.next.call(null,seq32538);
var G__32540 = cljs.core.first.call(null,seq32538__$1);
var seq32538__$2 = cljs.core.next.call(null,seq32538__$1);
var G__32541 = cljs.core.first.call(null,seq32538__$2);
var seq32538__$3 = cljs.core.next.call(null,seq32538__$2);
var G__32542 = cljs.core.first.call(null,seq32538__$3);
var seq32538__$4 = cljs.core.next.call(null,seq32538__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__32539,G__32540,G__32541,G__32542,seq32538__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args32549 = [];
var len__26126__auto___32557 = arguments.length;
var i__26127__auto___32558 = (0);
while(true){
if((i__26127__auto___32558 < len__26126__auto___32557)){
args32549.push((arguments[i__26127__auto___32558]));

var G__32559 = (i__26127__auto___32558 + (1));
i__26127__auto___32558 = G__32559;
continue;
} else {
}
break;
}

var G__32556 = args32549.length;
switch (G__32556) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32549.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq32550){
var G__32551 = cljs.core.first.call(null,seq32550);
var seq32550__$1 = cljs.core.next.call(null,seq32550);
var G__32552 = cljs.core.first.call(null,seq32550__$1);
var seq32550__$2 = cljs.core.next.call(null,seq32550__$1);
var G__32553 = cljs.core.first.call(null,seq32550__$2);
var seq32550__$3 = cljs.core.next.call(null,seq32550__$2);
var G__32554 = cljs.core.first.call(null,seq32550__$3);
var seq32550__$4 = cljs.core.next.call(null,seq32550__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__32551,G__32552,G__32553,G__32554,seq32550__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args32561 = [];
var len__26126__auto___32569 = arguments.length;
var i__26127__auto___32570 = (0);
while(true){
if((i__26127__auto___32570 < len__26126__auto___32569)){
args32561.push((arguments[i__26127__auto___32570]));

var G__32571 = (i__26127__auto___32570 + (1));
i__26127__auto___32570 = G__32571;
continue;
} else {
}
break;
}

var G__32568 = args32561.length;
switch (G__32568) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32561.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq32562){
var G__32563 = cljs.core.first.call(null,seq32562);
var seq32562__$1 = cljs.core.next.call(null,seq32562);
var G__32564 = cljs.core.first.call(null,seq32562__$1);
var seq32562__$2 = cljs.core.next.call(null,seq32562__$1);
var G__32565 = cljs.core.first.call(null,seq32562__$2);
var seq32562__$3 = cljs.core.next.call(null,seq32562__$2);
var G__32566 = cljs.core.first.call(null,seq32562__$3);
var seq32562__$4 = cljs.core.next.call(null,seq32562__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__32563,G__32564,G__32565,G__32566,seq32562__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args32573 = [];
var len__26126__auto___32581 = arguments.length;
var i__26127__auto___32582 = (0);
while(true){
if((i__26127__auto___32582 < len__26126__auto___32581)){
args32573.push((arguments[i__26127__auto___32582]));

var G__32583 = (i__26127__auto___32582 + (1));
i__26127__auto___32582 = G__32583;
continue;
} else {
}
break;
}

var G__32580 = args32573.length;
switch (G__32580) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32573.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq32574){
var G__32575 = cljs.core.first.call(null,seq32574);
var seq32574__$1 = cljs.core.next.call(null,seq32574);
var G__32576 = cljs.core.first.call(null,seq32574__$1);
var seq32574__$2 = cljs.core.next.call(null,seq32574__$1);
var G__32577 = cljs.core.first.call(null,seq32574__$2);
var seq32574__$3 = cljs.core.next.call(null,seq32574__$2);
var G__32578 = cljs.core.first.call(null,seq32574__$3);
var seq32574__$4 = cljs.core.next.call(null,seq32574__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__32575,G__32576,G__32577,G__32578,seq32574__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args32585 = [];
var len__26126__auto___32593 = arguments.length;
var i__26127__auto___32594 = (0);
while(true){
if((i__26127__auto___32594 < len__26126__auto___32593)){
args32585.push((arguments[i__26127__auto___32594]));

var G__32595 = (i__26127__auto___32594 + (1));
i__26127__auto___32594 = G__32595;
continue;
} else {
}
break;
}

var G__32592 = args32585.length;
switch (G__32592) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args32585.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq32586){
var G__32587 = cljs.core.first.call(null,seq32586);
var seq32586__$1 = cljs.core.next.call(null,seq32586);
var G__32588 = cljs.core.first.call(null,seq32586__$1);
var seq32586__$2 = cljs.core.next.call(null,seq32586__$1);
var G__32589 = cljs.core.first.call(null,seq32586__$2);
var seq32586__$3 = cljs.core.next.call(null,seq32586__$2);
var G__32590 = cljs.core.first.call(null,seq32586__$3);
var seq32586__$4 = cljs.core.next.call(null,seq32586__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__32587,G__32588,G__32589,G__32590,seq32586__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__25885__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32597__auto__","h__32597__auto__",-577879957,null)),(function (){var x__25885__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32597__auto__","h__32597__auto__",-577879957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32597__auto__","h__32597__auto__",-577879957,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32597__auto__","h__32597__auto__",-577879957,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32597__auto__","h__32597__auto__",-577879957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__32597__auto__","h__32597__auto__",-577879957,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32598__auto__","x__32598__auto__",858730829,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32598__auto__","x__32598__auto__",858730829,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32606 = arguments.length;
var i__26127__auto___32607 = (0);
while(true){
if((i__26127__auto___32607 < len__26126__auto___32606)){
args__26133__auto__.push((arguments[i__26127__auto___32607]));

var G__32608 = (i__26127__auto___32607 + (1));
i__26127__auto___32607 = G__32608;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((6) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__26134__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq32599){
var G__32600 = cljs.core.first.call(null,seq32599);
var seq32599__$1 = cljs.core.next.call(null,seq32599);
var G__32601 = cljs.core.first.call(null,seq32599__$1);
var seq32599__$2 = cljs.core.next.call(null,seq32599__$1);
var G__32602 = cljs.core.first.call(null,seq32599__$2);
var seq32599__$3 = cljs.core.next.call(null,seq32599__$2);
var G__32603 = cljs.core.first.call(null,seq32599__$3);
var seq32599__$4 = cljs.core.next.call(null,seq32599__$3);
var G__32604 = cljs.core.first.call(null,seq32599__$4);
var seq32599__$5 = cljs.core.next.call(null,seq32599__$4);
var G__32605 = cljs.core.first.call(null,seq32599__$5);
var seq32599__$6 = cljs.core.next.call(null,seq32599__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,seq32599__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = clojure.walk.postwalk.call(null,(function (p1__32609_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__32609_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__32609_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__32609_SHARP_));
} else {
return p1__32609_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__32610,fkv){
var vec__32614 = p__32610;
var f1 = cljs.core.nth.call(null,vec__32614,(0),null);
var k = cljs.core.nth.call(null,vec__32614,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32620 = arguments.length;
var i__26127__auto___32621 = (0);
while(true){
if((i__26127__auto___32621 < len__26126__auto___32620)){
args__26133__auto__.push((arguments[i__26127__auto___32621]));

var G__32622 = (i__26127__auto___32621 + (1));
i__26127__auto___32621 = G__32622;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__25885__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__25885__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),locals,(function (){var x__25885__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),locals,(function (){var x__25885__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq32617){
var G__32618 = cljs.core.first.call(null,seq32617);
var seq32617__$1 = cljs.core.next.call(null,seq32617);
var G__32619 = cljs.core.first.call(null,seq32617__$1);
var seq32617__$2 = cljs.core.next.call(null,seq32617__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__32618,G__32619,seq32617__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32627 = arguments.length;
var i__26127__auto___32628 = (0);
while(true){
if((i__26127__auto___32628 < len__26126__auto___32627)){
args__26133__auto__.push((arguments[i__26127__auto___32628]));

var G__32629 = (i__26127__auto___32628 + (1));
i__26127__auto___32628 = G__32629;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq32623){
var G__32624 = cljs.core.first.call(null,seq32623);
var seq32623__$1 = cljs.core.next.call(null,seq32623);
var G__32625 = cljs.core.first.call(null,seq32623__$1);
var seq32623__$2 = cljs.core.next.call(null,seq32623__$1);
var G__32626 = cljs.core.first.call(null,seq32623__$2);
var seq32623__$3 = cljs.core.next.call(null,seq32623__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32624,G__32625,G__32626,seq32623__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32634 = arguments.length;
var i__26127__auto___32635 = (0);
while(true){
if((i__26127__auto___32635 < len__26126__auto___32634)){
args__26133__auto__.push((arguments[i__26127__auto___32635]));

var G__32636 = (i__26127__auto___32635 + (1));
i__26127__auto___32635 = G__32636;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq32630){
var G__32631 = cljs.core.first.call(null,seq32630);
var seq32630__$1 = cljs.core.next.call(null,seq32630);
var G__32632 = cljs.core.first.call(null,seq32630__$1);
var seq32630__$2 = cljs.core.next.call(null,seq32630__$1);
var G__32633 = cljs.core.first.call(null,seq32630__$2);
var seq32630__$3 = cljs.core.next.call(null,seq32630__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__32631,G__32632,G__32633,seq32630__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32641 = arguments.length;
var i__26127__auto___32642 = (0);
while(true){
if((i__26127__auto___32642 < len__26126__auto___32641)){
args__26133__auto__.push((arguments[i__26127__auto___32642]));

var G__32643 = (i__26127__auto___32642 + (1));
i__26127__auto___32642 = G__32643;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq32637){
var G__32638 = cljs.core.first.call(null,seq32637);
var seq32637__$1 = cljs.core.next.call(null,seq32637);
var G__32639 = cljs.core.first.call(null,seq32637__$1);
var seq32637__$2 = cljs.core.next.call(null,seq32637__$1);
var G__32640 = cljs.core.first.call(null,seq32637__$2);
var seq32637__$3 = cljs.core.next.call(null,seq32637__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__32638,G__32639,G__32640,seq32637__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__25039__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__25039__auto__)){
var and__25039__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__25039__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__25039__auto____$1;
}
} else {
return and__25039__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__32644 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__32645 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__32644;
s = G__32645;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__32646){
var vec__32654 = p__32646;
var p = cljs.core.nth.call(null,vec__32654,(0),null);
var sigs = cljs.core.nth.call(null,vec__32654,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__32654,p,sigs){
return (function (p__32657){
var vec__32658 = p__32657;
var seq__32659 = cljs.core.seq.call(null,vec__32658);
var first__32660 = cljs.core.first.call(null,seq__32659);
var seq__32659__$1 = cljs.core.next.call(null,seq__32659);
var f = first__32660;
var meths = seq__32659__$1;
var form = vec__32658;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(psym,pfn_prefix,vec__32654,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__25976__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25977__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25978__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25979__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25980__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__,hierarchy__25980__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__,hierarchy__25980__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25980__auto__,method_table__25976__auto__,prefer_table__25977__auto__,method_cache__25978__auto__,cached_hierarchy__25979__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25885__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__25885__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__25885__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__32661){
var vec__32668 = p__32661;
var seq__32669 = cljs.core.seq.call(null,vec__32668);
var first__32670 = cljs.core.first.call(null,seq__32669);
var seq__32669__$1 = cljs.core.next.call(null,seq__32669);
var vec__32671 = first__32670;
var seq__32672 = cljs.core.seq.call(null,vec__32671);
var first__32673 = cljs.core.first.call(null,seq__32672);
var seq__32672__$1 = cljs.core.next.call(null,seq__32672);
var this$ = first__32673;
var args = seq__32672__$1;
var sig = vec__32671;
var body = seq__32669__$1;
var x__25885__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__32674){
var vec__32681 = p__32674;
var seq__32682 = cljs.core.seq.call(null,vec__32681);
var first__32683 = cljs.core.first.call(null,seq__32682);
var seq__32682__$1 = cljs.core.next.call(null,seq__32682);
var vec__32684 = first__32683;
var seq__32685 = cljs.core.seq.call(null,vec__32684);
var first__32686 = cljs.core.first.call(null,seq__32685);
var seq__32685__$1 = cljs.core.next.call(null,seq__32685);
var this$ = first__32686;
var args = seq__32685__$1;
var sig = vec__32684;
var body = seq__32682__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25885__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__32687){
var vec__32694 = p__32687;
var seq__32695 = cljs.core.seq.call(null,vec__32694);
var first__32696 = cljs.core.first.call(null,seq__32695);
var seq__32695__$1 = cljs.core.next.call(null,seq__32695);
var vec__32697 = first__32696;
var seq__32698 = cljs.core.seq.call(null,vec__32697);
var first__32699 = cljs.core.first.call(null,seq__32698);
var seq__32698__$1 = cljs.core.next.call(null,seq__32698);
var this$ = first__32699;
var args = seq__32698__$1;
var sig = vec__32697;
var body = seq__32695__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25885__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__32700){
var vec__32707 = p__32700;
var seq__32708 = cljs.core.seq.call(null,vec__32707);
var first__32709 = cljs.core.first.call(null,seq__32708);
var seq__32708__$1 = cljs.core.next.call(null,seq__32708);
var vec__32710 = first__32709;
var seq__32711 = cljs.core.seq.call(null,vec__32710);
var first__32712 = cljs.core.first.call(null,seq__32711);
var seq__32711__$1 = cljs.core.next.call(null,seq__32711);
var this$ = first__32712;
var args = seq__32711__$1;
var sig = vec__32710;
var body = seq__32708__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25885__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__32721){
var vec__32722 = p__32721;
var seq__32723 = cljs.core.seq.call(null,vec__32722);
var first__32724 = cljs.core.first.call(null,seq__32723);
var seq__32723__$1 = cljs.core.next.call(null,seq__32723);
var f = first__32724;
var meths = seq__32723__$1;
var form = vec__32722;
var vec__32725 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__32725,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__32725,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__32725,f__$1,meths__$1,vec__32722,seq__32723,first__32724,seq__32723__$1,f,meths,form){
return (function (p1__32713_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__32713_SHARP_);
});})(vec__32725,f__$1,meths__$1,vec__32722,seq__32723,first__32724,seq__32723__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__32729){
var vec__32733 = p__32729;
var seq__32734 = cljs.core.seq.call(null,vec__32733);
var first__32735 = cljs.core.first.call(null,seq__32734);
var seq__32734__$1 = cljs.core.next.call(null,seq__32734);
var f = first__32735;
var meths = seq__32734__$1;
var form = vec__32733;
return cljs.core.map.call(null,((function (vec__32733,seq__32734,first__32735,seq__32734__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__32733,seq__32734,first__32735,seq__32734__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__32733,seq__32734,first__32735,seq__32734__$1,f,meths,form){
return (function (p1__32728_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__32728_SHARP_);
});})(vec__32733,seq__32734,first__32735,seq__32734__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__32737){
var vec__32741 = p__32737;
var seq__32742 = cljs.core.seq.call(null,vec__32741);
var first__32743 = cljs.core.first.call(null,seq__32742);
var seq__32742__$1 = cljs.core.next.call(null,seq__32742);
var f = first__32743;
var meths = seq__32742__$1;
var form = vec__32741;
var meths__$1 = cljs.core.map.call(null,((function (vec__32741,seq__32742,first__32743,seq__32742__$1,f,meths,form){
return (function (p1__32736_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__32736_SHARP_);
});})(vec__32741,seq__32742,first__32743,seq__32742__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25885__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__25885__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__25885__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__25885__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__32744){
var vec__32752 = p__32744;
var seq__32753 = cljs.core.seq.call(null,vec__32752);
var first__32754 = cljs.core.first.call(null,seq__32753);
var seq__32753__$1 = cljs.core.next.call(null,seq__32753);
var f = first__32754;
var meths = seq__32753__$1;
var form = vec__32752;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__32752,seq__32753,first__32754,seq__32753__$1,f,meths,form){
return (function (p__32755){
var vec__32756 = p__32755;
var seq__32757 = cljs.core.seq.call(null,vec__32756);
var first__32758 = cljs.core.first.call(null,seq__32757);
var seq__32757__$1 = cljs.core.next.call(null,seq__32757);
var sig = first__32758;
var body = seq__32757__$1;
var meth = vec__32756;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(pf,vec__32752,seq__32753,first__32754,seq__32753__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__32759){
var vec__32763 = p__32759;
var p = cljs.core.nth.call(null,vec__32763,(0),null);
var sigs = cljs.core.nth.call(null,vec__32763,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__32763,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__32763,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__32769 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__32769,(0),null);
var sigs = cljs.core.nth.call(null,vec__32769,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_32772 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_32772))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__32773 = cljs.core.next.call(null,sigs__$1);
var G__32774 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__32773;
seen = G__32774;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_32781 = cljs.core.PersistentHashSet.EMPTY;
var methods_32782__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_32782__$1)){
var vec__32778_32783 = cljs.core.first.call(null,methods_32782__$1);
var fname_32784 = cljs.core.nth.call(null,vec__32778_32783,(0),null);
var method_32785 = vec__32778_32783;
if(cljs.core.contains_QMARK_.call(null,seen_32781,fname_32784)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_32784], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_32785);

var G__32786 = cljs.core.conj.call(null,seen_32781,fname_32784);
var G__32787 = cljs.core.next.call(null,methods_32782__$1);
seen_32781 = G__32786;
methods_32782__$1 = G__32787;
continue;
} else {
}
break;
}

var G__32788 = cljs.core.conj.call(null,protos,proto);
var G__32789 = impls__$2;
protos = G__32788;
impls__$1 = G__32789;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32798 = arguments.length;
var i__26127__auto___32799 = (0);
while(true){
if((i__26127__auto___32799 < len__26126__auto___32798)){
args__26133__auto__.push((arguments[i__26127__auto___32799]));

var G__32800 = (i__26127__auto___32799 + (1));
i__26127__auto___32799 = G__32800;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__32795 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__32795,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__32795,(1),null);
if(cljs.core.truth_((function (){var and__25039__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__25039__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__32795,type,assign_impls){
return (function (p1__32790_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__32790_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__32795,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq32791){
var G__32792 = cljs.core.first.call(null,seq32791);
var seq32791__$1 = cljs.core.next.call(null,seq32791);
var G__32793 = cljs.core.first.call(null,seq32791__$1);
var seq32791__$2 = cljs.core.next.call(null,seq32791__$1);
var G__32794 = cljs.core.first.call(null,seq32791__$2);
var seq32791__$3 = cljs.core.next.call(null,seq32791__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__32792,G__32793,G__32794,seq32791__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__32802){
var vec__32806 = p__32802;
var f = cljs.core.nth.call(null,vec__32806,(0),null);
var sigs = cljs.core.nth.call(null,vec__32806,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__32806,f,sigs){
return (function (p1__32801_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__32801_SHARP_),cljs.core.nnext.call(null,p1__32801_SHARP_));
});})(vec__32806,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args32809 = [];
var len__26126__auto___32812 = arguments.length;
var i__26127__auto___32813 = (0);
while(true){
if((i__26127__auto___32813 < len__26126__auto___32812)){
args32809.push((arguments[i__26127__auto___32813]));

var G__32814 = (i__26127__auto___32813 + (1));
i__26127__auto___32813 = G__32814;
continue;
} else {
}
break;
}

var G__32811 = args32809.length;
switch (G__32811) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32809.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__32816 = ret__$1;
var G__32817 = specs__$2;
ret = G__32816;
specs__$1 = G__32817;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__32818_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__32818_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25885__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32830 = arguments.length;
var i__26127__auto___32831 = (0);
while(true){
if((i__26127__auto___32831 < len__26126__auto___32830)){
args__26133__auto__.push((arguments[i__26127__auto___32831]));

var G__32832 = (i__26127__auto___32831 + (1));
i__26127__auto___32831 = G__32832;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((4) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26134__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__32827 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__32827,(0),null);
var pmasks = cljs.core.nth.call(null,vec__32827,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32819__auto__","this__32819__auto__",-226320506,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32820__auto__","writer__32820__auto__",336314165,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__32821__auto__","opt__32821__auto__",-752771407,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32820__auto__","writer__32820__auto__",336314165,null)),(function (){var x__25885__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq32822){
var G__32823 = cljs.core.first.call(null,seq32822);
var seq32822__$1 = cljs.core.next.call(null,seq32822);
var G__32824 = cljs.core.first.call(null,seq32822__$1);
var seq32822__$2 = cljs.core.next.call(null,seq32822__$1);
var G__32825 = cljs.core.first.call(null,seq32822__$2);
var seq32822__$3 = cljs.core.next.call(null,seq32822__$2);
var G__32826 = cljs.core.first.call(null,seq32822__$3);
var seq32822__$4 = cljs.core.next.call(null,seq32822__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__32823,G__32824,G__32825,G__32826,seq32822__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__32833_SHARP_){
return cljs.core.with_meta.call(null,p1__32833_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32834__auto__","this__32834__auto__",-1397894788,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32835__auto__","this__32835__auto__",738750699,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32835__auto__","this__32835__auto__",738750699,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32836__auto__","this__32836__auto__",-1226396351,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32837__auto__","other__32837__auto__",829732652,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32837__auto__","other__32837__auto__",829732652,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32836__auto__","this__32836__auto__",-1226396351,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32837__auto__","other__32837__auto__",829732652,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32836__auto__","this__32836__auto__",-1226396351,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__32837__auto__","other__32837__auto__",829732652,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32838__auto__","this__32838__auto__",491210157,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32839__auto__","this__32839__auto__",-111976313,null)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32840__auto__","this__32840__auto__",-1231485957,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32841__auto__","k__32841__auto__",854254606,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32840__auto__","this__32840__auto__",-1231485957,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32841__auto__","k__32841__auto__",854254606,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32842__auto__","this__32842__auto__",1056641750,null)),(function (){var x__25885__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__32843__auto__","else__32843__auto__",-1419713893,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25885__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__25885__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__32843__auto__","else__32843__auto__",-1419713893,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32844__auto__","this__32844__auto__",-1874670745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25885__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32845__auto__","this__32845__auto__",2080914078,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32846__auto__","entry__32846__auto__",-1392861133,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32846__auto__","entry__32846__auto__",-1392861133,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32845__auto__","this__32845__auto__",2080914078,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32846__auto__","entry__32846__auto__",-1392861133,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32846__auto__","entry__32846__auto__",-1392861133,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32845__auto__","this__32845__auto__",2080914078,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__32846__auto__","entry__32846__auto__",-1392861133,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32847__auto__","this__32847__auto__",-503397865,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32848__auto__","k__32848__auto__",2083474311,null)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32848__auto__","k__32848__auto__",2083474311,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32848__auto__","k__32848__auto__",2083474311,null)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32849__auto__","this__32849__auto__",1148234576,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32850__auto__","k__32850__auto__",-2031980094,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32850__auto__","k__32850__auto__",-2031980094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32849__auto__","this__32849__auto__",1148234576,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32850__auto__","k__32850__auto__",-2031980094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__32850__auto__","k__32850__auto__",-2031980094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32852__auto__","this__32852__auto__",-517627308,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__32851_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.keyword.call(null,p1__32851_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = p1__32851_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32854__auto__","this__32854__auto__",-481757449,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32855__auto__","writer__32855__auto__",-1508151896,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32856__auto__","opts__32856__auto__",383097280,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__32857__auto__","pr-pair__32857__auto__",903720613,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__32858__auto__","keyval__32858__auto__",1376835412,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32855__auto__","writer__32855__auto__",-1508151896,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32856__auto__","opts__32856__auto__",383097280,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__32858__auto__","keyval__32858__auto__",1376835412,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32855__auto__","writer__32855__auto__",-1508151896,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__32857__auto__","pr-pair__32857__auto__",903720613,null)),(function (){var x__25885__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__32856__auto__","opts__32856__auto__",383097280,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__32853_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.keyword.call(null,p1__32853_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = p1__32853_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null));
var vec__32862 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__32862,(0),null);
var pmasks = cljs.core.nth.call(null,vec__32862,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__25885__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__25885__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25885__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25885__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32872 = arguments.length;
var i__26127__auto___32873 = (0);
while(true){
if((i__26127__auto___32873 < len__26126__auto___32872)){
args__26133__auto__.push((arguments[i__26127__auto___32873]));

var G__32874 = (i__26127__auto___32873 + (1));
i__26127__auto___32873 = G__32874;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((4) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26134__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__25885__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__25885__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__25885__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32865__auto__","this__32865__auto__",-12840313,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__25885__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__25885__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__32865__auto__","this__32865__auto__",-12840313,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32866__auto__","writer__32866__auto__",91724956,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__32866__auto__","writer__32866__auto__",91724956,null)),(function (){var x__25885__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq32867){
var G__32868 = cljs.core.first.call(null,seq32867);
var seq32867__$1 = cljs.core.next.call(null,seq32867);
var G__32869 = cljs.core.first.call(null,seq32867__$1);
var seq32867__$2 = cljs.core.next.call(null,seq32867__$1);
var G__32870 = cljs.core.first.call(null,seq32867__$2);
var seq32867__$3 = cljs.core.next.call(null,seq32867__$2);
var G__32871 = cljs.core.first.call(null,seq32867__$3);
var seq32867__$4 = cljs.core.next.call(null,seq32867__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__32868,G__32869,G__32870,G__32871,seq32867__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32902 = arguments.length;
var i__26127__auto___32903 = (0);
while(true){
if((i__26127__auto___32903 < len__26126__auto___32902)){
args__26133__auto__.push((arguments[i__26127__auto___32903]));

var G__32904 = (i__26127__auto___32903 + (1));
i__26127__auto___32903 = G__32904;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__32881 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__32881,(0),null);
var methods$ = cljs.core.nth.call(null,vec__32881,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__32881,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__32881,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__32884 = cljs.core.seq.call(null,methods$);
var chunk__32885 = null;
var count__32886 = (0);
var i__32887 = (0);
while(true){
if((i__32887 < count__32886)){
var vec__32888 = cljs.core._nth.call(null,chunk__32885,i__32887);
var seq__32889 = cljs.core.seq.call(null,vec__32888);
var first__32890 = cljs.core.first.call(null,seq__32889);
var seq__32889__$1 = cljs.core.next.call(null,seq__32889);
var mname = first__32890;
var arities = seq__32889__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__32905 = seq__32884;
var G__32906 = chunk__32885;
var G__32907 = count__32886;
var G__32908 = (i__32887 + (1));
seq__32884 = G__32905;
chunk__32885 = G__32906;
count__32886 = G__32907;
i__32887 = G__32908;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32884);
if(temp__4657__auto__){
var seq__32884__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32884__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__32884__$1);
var G__32909 = cljs.core.chunk_rest.call(null,seq__32884__$1);
var G__32910 = c__25862__auto__;
var G__32911 = cljs.core.count.call(null,c__25862__auto__);
var G__32912 = (0);
seq__32884 = G__32909;
chunk__32885 = G__32910;
count__32886 = G__32911;
i__32887 = G__32912;
continue;
} else {
var vec__32891 = cljs.core.first.call(null,seq__32884__$1);
var seq__32892 = cljs.core.seq.call(null,vec__32891);
var first__32893 = cljs.core.first.call(null,seq__32892);
var seq__32892__$1 = cljs.core.next.call(null,seq__32892);
var mname = first__32893;
var arities = seq__32892__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__32913 = cljs.core.next.call(null,seq__32884__$1);
var G__32914 = null;
var G__32915 = (0);
var G__32916 = (0);
seq__32884 = G__32913;
chunk__32885 = G__32914;
count__32886 = G__32915;
i__32887 = G__32916;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32875__auto__","x__32875__auto__",-610798808,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32876__auto__","m__32876__auto__",1124340522,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32875__auto__","x__32875__auto__",-610798808,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32876__auto__","m__32876__auto__",1124340522,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32876__auto__","m__32876__auto__",1124340522,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32876__auto__","m__32876__auto__",1124340522,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32876__auto__","m__32876__auto__",1124340522,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__32876__auto__","m__32876__auto__",1124340522,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__25885__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__32894){
var vec__32895 = p__32894;
var seq__32896 = cljs.core.seq.call(null,vec__32895);
var first__32897 = cljs.core.first.call(null,seq__32896);
var seq__32896__$1 = cljs.core.next.call(null,seq__32896);
var fname = first__32897;
var sigs = seq__32896__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__32898){
var vec__32899 = p__32898;
var seq__32900 = cljs.core.seq.call(null,vec__32899);
var first__32901 = cljs.core.first.call(null,seq__32900);
var seq__32900__$1 = cljs.core.next.call(null,seq__32900);
var fname = first__32901;
var sigs = seq__32900__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__25885__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__32899,seq__32900,first__32901,seq__32900__$1,fname,sigs,p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__32899,seq__32900,first__32901,seq__32900__$1,fname,sigs,p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__32881,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25885__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq32877){
var G__32878 = cljs.core.first.call(null,seq32877);
var seq32877__$1 = cljs.core.next.call(null,seq32877);
var G__32879 = cljs.core.first.call(null,seq32877__$1);
var seq32877__$2 = cljs.core.next.call(null,seq32877__$1);
var G__32880 = cljs.core.first.call(null,seq32877__$2);
var seq32877__$3 = cljs.core.next.call(null,seq32877__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__32878,G__32879,G__32880,seq32877__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__32920 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__32920,(0),null);
var bit = cljs.core.nth.call(null,vec__32920,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25885__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25885__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__32926 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__32926,(0),null);
var bit = cljs.core.nth.call(null,vec__32926,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25885__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25885__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25885__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__25885__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25885__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__25885__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32932 = arguments.length;
var i__26127__auto___32933 = (0);
while(true){
if((i__26127__auto___32933 < len__26126__auto___32932)){
args__26133__auto__.push((arguments[i__26127__auto___32933]));

var G__32934 = (i__26127__auto___32933 + (1));
i__26127__auto___32933 = G__32934;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq32929){
var G__32930 = cljs.core.first.call(null,seq32929);
var seq32929__$1 = cljs.core.next.call(null,seq32929);
var G__32931 = cljs.core.first.call(null,seq32929__$1);
var seq32929__$2 = cljs.core.next.call(null,seq32929__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__32930,G__32931,seq32929__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32938 = arguments.length;
var i__26127__auto___32939 = (0);
while(true){
if((i__26127__auto___32939 < len__26126__auto___32938)){
args__26133__auto__.push((arguments[i__26127__auto___32939]));

var G__32940 = (i__26127__auto___32939 + (1));
i__26127__auto___32939 = G__32940;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq32935){
var G__32936 = cljs.core.first.call(null,seq32935);
var seq32935__$1 = cljs.core.next.call(null,seq32935);
var G__32937 = cljs.core.first.call(null,seq32935__$1);
var seq32935__$2 = cljs.core.next.call(null,seq32935__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__32936,G__32937,seq32935__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32949 = arguments.length;
var i__26127__auto___32950 = (0);
while(true){
if((i__26127__auto___32950 < len__26126__auto___32949)){
args__26133__auto__.push((arguments[i__26127__auto___32950]));

var G__32951 = (i__26127__auto___32950 + (1));
i__26127__auto___32950 = G__32951;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__32945){
var vec__32946 = p__32945;
var k = cljs.core.nth.call(null,vec__32946,(0),null);
var v = cljs.core.nth.call(null,vec__32946,(1),null);
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq32941){
var G__32942 = cljs.core.first.call(null,seq32941);
var seq32941__$1 = cljs.core.next.call(null,seq32941);
var G__32943 = cljs.core.first.call(null,seq32941__$1);
var seq32941__$2 = cljs.core.next.call(null,seq32941__$1);
var G__32944 = cljs.core.first.call(null,seq32941__$2);
var seq32941__$3 = cljs.core.next.call(null,seq32941__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__32942,G__32943,G__32944,seq32941__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32956 = arguments.length;
var i__26127__auto___32957 = (0);
while(true){
if((i__26127__auto___32957 < len__26126__auto___32956)){
args__26133__auto__.push((arguments[i__26127__auto___32957]));

var G__32958 = (i__26127__auto___32957 + (1));
i__26127__auto___32957 = G__32958;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__25885__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq32952){
var G__32953 = cljs.core.first.call(null,seq32952);
var seq32952__$1 = cljs.core.next.call(null,seq32952);
var G__32954 = cljs.core.first.call(null,seq32952__$1);
var seq32952__$2 = cljs.core.next.call(null,seq32952__$1);
var G__32955 = cljs.core.first.call(null,seq32952__$2);
var seq32952__$3 = cljs.core.next.call(null,seq32952__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__32953,G__32954,G__32955,seq32952__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__26133__auto__ = [];
var len__26126__auto___32977 = arguments.length;
var i__26127__auto___32978 = (0);
while(true){
if((i__26127__auto___32978 < len__26126__auto___32977)){
args__26133__auto__.push((arguments[i__26127__auto___32978]));

var G__32979 = (i__26127__auto___32978 + (1));
i__26127__auto___32978 = G__32979;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((4) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26134__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__32971 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__32974 = cljs.core.nth.call(null,vec__32971,(0),null);
var a = cljs.core.nth.call(null,vec__32974,(0),null);
var b = cljs.core.nth.call(null,vec__32974,(1),null);
var c = cljs.core.nth.call(null,vec__32974,(2),null);
var clause = vec__32974;
var more = cljs.core.nth.call(null,vec__32971,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__25885__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__32959__auto__","p__32959__auto__",-1929874846,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__32959__auto__","p__32959__auto__",-1929874846,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq32960){
var G__32961 = cljs.core.first.call(null,seq32960);
var seq32960__$1 = cljs.core.next.call(null,seq32960);
var G__32962 = cljs.core.first.call(null,seq32960__$1);
var seq32960__$2 = cljs.core.next.call(null,seq32960__$1);
var G__32963 = cljs.core.first.call(null,seq32960__$2);
var seq32960__$3 = cljs.core.next.call(null,seq32960__$2);
var G__32964 = cljs.core.first.call(null,seq32960__$3);
var seq32960__$4 = cljs.core.next.call(null,seq32960__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__32961,G__32962,G__32963,G__32964,seq32960__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__25039__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__25039__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__25039__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33000 = arguments.length;
var i__26127__auto___33001 = (0);
while(true){
if((i__26127__auto___33001 < len__26126__auto___33000)){
args__26133__auto__.push((arguments[i__26127__auto___33001]));

var G__33002 = (i__26127__auto___33001 + (1));
i__26127__auto___33001 = G__33002;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__25885__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__32988){
var vec__32989 = p__32988;
var test = cljs.core.nth.call(null,vec__32989,(0),null);
var expr = cljs.core.nth.call(null,vec__32989,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__32989,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__25885__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__32989,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__25885__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__32980_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__32980_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__32981_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32981_SHARP_)){
return cljs.core.vec.call(null,p1__32981_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32981_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__25885__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__32983_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__32983_SHARP_)){
return cljs.core.vec.call(null,p1__32983_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32983_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__32982_SHARP_){
return [cljs.core.str(p1__32982_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__25885__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__25885__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__25885__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__32996){
var vec__32997 = p__32996;
var m = cljs.core.nth.call(null,vec__32997,(0),null);
var c = cljs.core.nth.call(null,vec__32997,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__25885__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__25885__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq32984){
var G__32985 = cljs.core.first.call(null,seq32984);
var seq32984__$1 = cljs.core.next.call(null,seq32984);
var G__32986 = cljs.core.first.call(null,seq32984__$1);
var seq32984__$2 = cljs.core.next.call(null,seq32984__$1);
var G__32987 = cljs.core.first.call(null,seq32984__$2);
var seq32984__$3 = cljs.core.next.call(null,seq32984__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__32985,G__32986,G__32987,seq32984__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args33003 = [];
var len__26126__auto___33006 = arguments.length;
var i__26127__auto___33007 = (0);
while(true){
if((i__26127__auto___33007 < len__26126__auto___33006)){
args33003.push((arguments[i__26127__auto___33007]));

var G__33008 = (i__26127__auto___33007 + (1));
i__26127__auto___33007 = G__33008;
continue;
} else {
}
break;
}

var G__33005 = args33003.length;
switch (G__33005) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args33003.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25885__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__25885__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__25885__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__33096){
var vec__33097 = p__33096;
var k = cljs.core.nth.call(null,vec__33097,(0),null);
var v = cljs.core.nth.call(null,vec__33097,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__33177__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__33177 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__33178__i = 0, G__33178__a = new Array(arguments.length -  0);
while (G__33178__i < G__33178__a.length) {G__33178__a[G__33178__i] = arguments[G__33178__i + 0]; ++G__33178__i;}
  msg = new cljs.core.IndexedSeq(G__33178__a,0);
} 
return G__33177__delegate.call(this,msg);};
G__33177.cljs$lang$maxFixedArity = 0;
G__33177.cljs$lang$applyTo = (function (arglist__33179){
var msg = cljs.core.seq(arglist__33179);
return G__33177__delegate(msg);
});
G__33177.cljs$core$IFn$_invoke$arity$variadic = G__33177__delegate;
return G__33177;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__33100){
var vec__33139 = p__33100;
var seq__33140 = cljs.core.seq.call(null,vec__33139);
var first__33141 = cljs.core.first.call(null,seq__33140);
var seq__33140__$1 = cljs.core.next.call(null,seq__33140);
var vec__33142 = first__33141;
var seq__33143 = cljs.core.seq.call(null,vec__33142);
var first__33144 = cljs.core.first.call(null,seq__33143);
var seq__33143__$1 = cljs.core.next.call(null,seq__33143);
var bind = first__33144;
var first__33144__$1 = cljs.core.first.call(null,seq__33143__$1);
var seq__33143__$2 = cljs.core.next.call(null,seq__33143__$1);
var expr = first__33144__$1;
var mod_pairs = seq__33143__$2;
var vec__33145 = seq__33140__$1;
var vec__33148 = cljs.core.nth.call(null,vec__33145,(0),null);
var _ = cljs.core.nth.call(null,vec__33148,(0),null);
var next_expr = cljs.core.nth.call(null,vec__33148,(1),null);
var next_groups = vec__33145;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__33139,seq__33140,first__33141,seq__33140__$1,vec__33142,seq__33143,first__33144,seq__33143__$1,bind,first__33144__$1,seq__33143__$2,expr,mod_pairs,vec__33145,vec__33148,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__33151){
var vec__33158 = p__33151;
var seq__33159 = cljs.core.seq.call(null,vec__33158);
var first__33160 = cljs.core.first.call(null,seq__33159);
var seq__33159__$1 = cljs.core.next.call(null,seq__33159);
var vec__33161 = first__33160;
var k = cljs.core.nth.call(null,vec__33161,(0),null);
var v = cljs.core.nth.call(null,vec__33161,(1),null);
var pair = vec__33161;
var etc = seq__33159__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__33010__auto__","iterys__33010__auto__",252206756,null)),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__33011__auto__","fs__33011__auto__",-2003123498,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__33010__auto__","iterys__33010__auto__",252206756,null)),(function (){var x__25885__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__33011__auto__","fs__33011__auto__",-2003123498,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__33011__auto__","fs__33011__auto__",-2003123498,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__25885__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__33139,seq__33140,first__33141,seq__33140__$1,vec__33142,seq__33143,first__33144,seq__33143__$1,bind,first__33144__$1,seq__33143__$2,expr,mod_pairs,vec__33145,vec__33148,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__33139,seq__33140,first__33141,seq__33140__$1,vec__33142,seq__33143,first__33144,seq__33143__$1,bind,first__33144__$1,seq__33143__$2,expr,mod_pairs,vec__33145,vec__33148,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__33164){
var vec__33171 = p__33164;
var seq__33172 = cljs.core.seq.call(null,vec__33171);
var first__33173 = cljs.core.first.call(null,seq__33172);
var seq__33172__$1 = cljs.core.next.call(null,seq__33172);
var vec__33174 = first__33173;
var k = cljs.core.nth.call(null,vec__33174,(0),null);
var v = cljs.core.nth.call(null,vec__33174,(1),null);
var pair = vec__33174;
var etc = seq__33172__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__25885__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__33139,seq__33140,first__33141,seq__33140__$1,vec__33142,seq__33143,first__33144,seq__33143__$1,bind,first__33144__$1,seq__33143__$2,expr,mod_pairs,vec__33145,vec__33148,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33012__auto__","c__33012__auto__",-312561802,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__33013__auto__","size__33013__auto__",-402720293,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33012__auto__","c__33012__auto__",-312561802,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__33013__auto__","size__33013__auto__",-402720293,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__33013__auto__","size__33013__auto__",-402720293,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33012__auto__","c__33012__auto__",-312561802,null)),(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__25885__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__25885__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__33014__auto__","iter__33014__auto__",1182703562,null)),(function (){var x__25885__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__33014__auto__","iter__33014__auto__",1182703562,null)),(function (){var x__25885__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33185 = arguments.length;
var i__26127__auto___33186 = (0);
while(true){
if((i__26127__auto___33186 < len__26126__auto___33185)){
args__26133__auto__.push((arguments[i__26127__auto___33186]));

var G__33187 = (i__26127__auto___33186 + (1));
i__26127__auto___33186 = G__33187;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__33188__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__33188 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__33189__i = 0, G__33189__a = new Array(arguments.length -  0);
while (G__33189__i < G__33189__a.length) {G__33189__a[G__33189__i] = arguments[G__33189__i + 0]; ++G__33189__i;}
  msg = new cljs.core.IndexedSeq(G__33189__a,0);
} 
return G__33188__delegate.call(this,msg);};
G__33188.cljs$lang$maxFixedArity = 0;
G__33188.cljs$lang$applyTo = (function (arglist__33190){
var msg = cljs.core.seq(arglist__33190);
return G__33188__delegate(msg);
});
G__33188.cljs$core$IFn$_invoke$arity$variadic = G__33188__delegate;
return G__33188;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__25885__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25885__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__25885__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33180__auto__","c__33180__auto__",-598135991,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33180__auto__","c__33180__auto__",-598135991,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__33180__auto__","c__33180__auto__",-598135991,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq33181){
var G__33182 = cljs.core.first.call(null,seq33181);
var seq33181__$1 = cljs.core.next.call(null,seq33181);
var G__33183 = cljs.core.first.call(null,seq33181__$1);
var seq33181__$2 = cljs.core.next.call(null,seq33181__$1);
var G__33184 = cljs.core.first.call(null,seq33181__$2);
var seq33181__$3 = cljs.core.next.call(null,seq33181__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__33182,G__33183,G__33184,seq33181__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33194 = arguments.length;
var i__26127__auto___33195 = (0);
while(true){
if((i__26127__auto___33195 < len__26126__auto___33194)){
args__26133__auto__.push((arguments[i__26127__auto___33195]));

var G__33196 = (i__26127__auto___33195 + (1));
i__26127__auto___33195 = G__33196;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq33191){
var G__33192 = cljs.core.first.call(null,seq33191);
var seq33191__$1 = cljs.core.next.call(null,seq33191);
var G__33193 = cljs.core.first.call(null,seq33191__$1);
var seq33191__$2 = cljs.core.next.call(null,seq33191__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__33192,G__33193,seq33191__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args33200 = [];
var len__26126__auto___33208 = arguments.length;
var i__26127__auto___33209 = (0);
while(true){
if((i__26127__auto___33209 < len__26126__auto___33208)){
args33200.push((arguments[i__26127__auto___33209]));

var G__33210 = (i__26127__auto___33209 + (1));
i__26127__auto___33209 = G__33210;
continue;
} else {
}
break;
}

var G__33207 = args33200.length;
switch (G__33207) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args33200.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__25885__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25885__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__33197__auto__","dims__33197__auto__",1260703994,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33198__auto__","dimarray__33198__auto__",1265641792,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25885__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33199__auto__","i__33199__auto__",-1413691511,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33198__auto__","dimarray__33198__auto__",1265641792,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33198__auto__","dimarray__33198__auto__",1265641792,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33199__auto__","i__33199__auto__",-1413691511,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__33197__auto__","dims__33197__auto__",1260703994,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__33198__auto__","dimarray__33198__auto__",1265641792,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq33201){
var G__33202 = cljs.core.first.call(null,seq33201);
var seq33201__$1 = cljs.core.next.call(null,seq33201);
var G__33203 = cljs.core.first.call(null,seq33201__$1);
var seq33201__$2 = cljs.core.next.call(null,seq33201__$1);
var G__33204 = cljs.core.first.call(null,seq33201__$2);
var seq33201__$3 = cljs.core.next.call(null,seq33201__$2);
var G__33205 = cljs.core.first.call(null,seq33201__$3);
var seq33201__$4 = cljs.core.next.call(null,seq33201__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__33202,G__33203,G__33204,G__33205,seq33201__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args33213 = [];
var len__26126__auto___33220 = arguments.length;
var i__26127__auto___33221 = (0);
while(true){
if((i__26127__auto___33221 < len__26126__auto___33220)){
args33213.push((arguments[i__26127__auto___33221]));

var G__33222 = (i__26127__auto___33221 + (1));
i__26127__auto___33221 = G__33222;
continue;
} else {
}
break;
}

var G__33219 = args33213.length;
switch (G__33219) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args33213.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26145__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33212__auto__","x__33212__auto__",1193023179,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33212__auto__","x__33212__auto__",1193023179,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq33214){
var G__33215 = cljs.core.first.call(null,seq33214);
var seq33214__$1 = cljs.core.next.call(null,seq33214);
var G__33216 = cljs.core.first.call(null,seq33214__$1);
var seq33214__$2 = cljs.core.next.call(null,seq33214__$1);
var G__33217 = cljs.core.first.call(null,seq33214__$2);
var seq33214__$3 = cljs.core.next.call(null,seq33214__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__33215,G__33216,G__33217,seq33214__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args33224 = [];
var len__26126__auto___33230 = arguments.length;
var i__26127__auto___33231 = (0);
while(true){
if((i__26127__auto___33231 < len__26126__auto___33230)){
args33224.push((arguments[i__26127__auto___33231]));

var G__33232 = (i__26127__auto___33231 + (1));
i__26127__auto___33231 = G__33232;
continue;
} else {
}
break;
}

var G__33229 = args33224.length;
switch (G__33229) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args33224.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26145__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq33225){
var G__33226 = cljs.core.first.call(null,seq33225);
var seq33225__$1 = cljs.core.next.call(null,seq33225);
var G__33227 = cljs.core.first.call(null,seq33225__$1);
var seq33225__$2 = cljs.core.next.call(null,seq33225__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__33226,G__33227,seq33225__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args33236 = [];
var len__26126__auto___33242 = arguments.length;
var i__26127__auto___33243 = (0);
while(true){
if((i__26127__auto___33243 < len__26126__auto___33242)){
args33236.push((arguments[i__26127__auto___33243]));

var G__33244 = (i__26127__auto___33243 + (1));
i__26127__auto___33243 = G__33244;
continue;
} else {
}
break;
}

var G__33241 = args33236.length;
switch (G__33241) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args33236.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26145__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__33234_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33234_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__33235_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__33235_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq33237){
var G__33238 = cljs.core.first.call(null,seq33237);
var seq33237__$1 = cljs.core.next.call(null,seq33237);
var G__33239 = cljs.core.first.call(null,seq33237__$1);
var seq33237__$2 = cljs.core.next.call(null,seq33237__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__33238,G__33239,seq33237__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args33246 = [];
var len__26126__auto___33252 = arguments.length;
var i__26127__auto___33253 = (0);
while(true){
if((i__26127__auto___33253 < len__26126__auto___33252)){
args33246.push((arguments[i__26127__auto___33253]));

var G__33254 = (i__26127__auto___33253 + (1));
i__26127__auto___33253 = G__33254;
continue;
} else {
}
break;
}

var G__33251 = args33246.length;
switch (G__33251) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args33246.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26145__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq33247){
var G__33248 = cljs.core.first.call(null,seq33247);
var seq33247__$1 = cljs.core.next.call(null,seq33247);
var G__33249 = cljs.core.first.call(null,seq33247__$1);
var seq33247__$2 = cljs.core.next.call(null,seq33247__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__33248,G__33249,seq33247__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args33258 = [];
var len__26126__auto___33264 = arguments.length;
var i__26127__auto___33265 = (0);
while(true){
if((i__26127__auto___33265 < len__26126__auto___33264)){
args33258.push((arguments[i__26127__auto___33265]));

var G__33266 = (i__26127__auto___33265 + (1));
i__26127__auto___33265 = G__33266;
continue;
} else {
}
break;
}

var G__33263 = args33258.length;
switch (G__33263) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args33258.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26145__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__33256_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33256_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__33257_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__33257_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq33259){
var G__33260 = cljs.core.first.call(null,seq33259);
var seq33259__$1 = cljs.core.next.call(null,seq33259);
var G__33261 = cljs.core.first.call(null,seq33259__$1);
var seq33259__$2 = cljs.core.next.call(null,seq33259__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__33260,G__33261,seq33259__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33283 = arguments.length;
var i__26127__auto___33284 = (0);
while(true){
if((i__26127__auto___33284 < len__26126__auto___33283)){
args__26133__auto__.push((arguments[i__26127__auto___33284]));

var G__33285 = (i__26127__auto___33284 + (1));
i__26127__auto___33284 = G__33285;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__33271){
var vec__33272 = p__33271;
var k = cljs.core.nth.call(null,vec__33272,(0),null);
var _ = cljs.core.nth.call(null,vec__33272,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__25885__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__33275){
var vec__33276 = p__33275;
var k = cljs.core.nth.call(null,vec__33276,(0),null);
var v = cljs.core.nth.call(null,vec__33276,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__33279){
var vec__33280 = p__33279;
var k = cljs.core.nth.call(null,vec__33280,(0),null);
var v = cljs.core.nth.call(null,vec__33280,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__25885__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq33268){
var G__33269 = cljs.core.first.call(null,seq33268);
var seq33268__$1 = cljs.core.next.call(null,seq33268);
var G__33270 = cljs.core.first.call(null,seq33268__$1);
var seq33268__$2 = cljs.core.next.call(null,seq33268__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__33269,G__33270,seq33268__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33286__auto__","a__33286__auto__",-1856951315,null)),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33286__auto__","a__33286__auto__",-1856951315,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33286__auto__","a__33286__auto__",-1856951315,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33287__auto__","a__33287__auto__",-2013577239,null)),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__25885__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__33287__auto__","a__33287__auto__",-2013577239,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33293 = arguments.length;
var i__26127__auto___33294 = (0);
while(true){
if((i__26127__auto___33294 < len__26126__auto___33293)){
args__26133__auto__.push((arguments[i__26127__auto___33294]));

var G__33295 = (i__26127__auto___33294 + (1));
i__26127__auto___33294 = G__33295;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__33288__auto__","n__33288__auto__",-9565138,null)),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__33288__auto__","n__33288__auto__",-9565138,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__25885__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq33289){
var G__33290 = cljs.core.first.call(null,seq33289);
var seq33289__$1 = cljs.core.next.call(null,seq33289);
var G__33291 = cljs.core.first.call(null,seq33289__$1);
var seq33289__$2 = cljs.core.next.call(null,seq33289__$1);
var G__33292 = cljs.core.first.call(null,seq33289__$2);
var seq33289__$3 = cljs.core.next.call(null,seq33289__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__33290,G__33291,G__33292,seq33289__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33299 = arguments.length;
var i__26127__auto___33300 = (0);
while(true){
if((i__26127__auto___33300 < len__26126__auto___33299)){
args__26133__auto__.push((arguments[i__26127__auto___33300]));

var G__33301 = (i__26127__auto___33300 + (1));
i__26127__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__33296_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__33296_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq33297){
var G__33298 = cljs.core.first.call(null,seq33297);
var seq33297__$1 = cljs.core.next.call(null,seq33297);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__33298,seq33297__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33311 = arguments.length;
var i__26127__auto___33312 = (0);
while(true){
if((i__26127__auto___33312 < len__26126__auto___33311)){
args__26133__auto__.push((arguments[i__26127__auto___33312]));

var G__33313 = (i__26127__auto___33312 + (1));
i__26127__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__33302__auto__","method-table__33302__auto__",-1380540972,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__33303__auto__","prefer-table__33303__auto__",1562935642,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__33304__auto__","method-cache__33304__auto__",598841792,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__33305__auto__","cached-hierarchy__33305__auto__",-1763722046,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__33306__auto__","hierarchy__33306__auto__",1023417946,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__25885__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25885__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__33306__auto__","hierarchy__33306__auto__",1023417946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__33302__auto__","method-table__33302__auto__",-1380540972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__33303__auto__","prefer-table__33303__auto__",1562935642,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__33304__auto__","method-cache__33304__auto__",598841792,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__33305__auto__","cached-hierarchy__33305__auto__",-1763722046,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq33307){
var G__33308 = cljs.core.first.call(null,seq33307);
var seq33307__$1 = cljs.core.next.call(null,seq33307);
var G__33309 = cljs.core.first.call(null,seq33307__$1);
var seq33307__$2 = cljs.core.next.call(null,seq33307__$1);
var G__33310 = cljs.core.first.call(null,seq33307__$2);
var seq33307__$3 = cljs.core.next.call(null,seq33307__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__33308,G__33309,G__33310,seq33307__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33319 = arguments.length;
var i__26127__auto___33320 = (0);
while(true){
if((i__26127__auto___33320 < len__26126__auto___33319)){
args__26133__auto__.push((arguments[i__26127__auto___33320]));

var G__33321 = (i__26127__auto___33320 + (1));
i__26127__auto___33320 = G__33321;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((4) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26134__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq33314){
var G__33315 = cljs.core.first.call(null,seq33314);
var seq33314__$1 = cljs.core.next.call(null,seq33314);
var G__33316 = cljs.core.first.call(null,seq33314__$1);
var seq33314__$2 = cljs.core.next.call(null,seq33314__$1);
var G__33317 = cljs.core.first.call(null,seq33314__$2);
var seq33314__$3 = cljs.core.next.call(null,seq33314__$2);
var G__33318 = cljs.core.first.call(null,seq33314__$3);
var seq33314__$4 = cljs.core.next.call(null,seq33314__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__33315,G__33316,G__33317,G__33318,seq33314__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33322__auto__","start__33322__auto__",1985668583,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33323__auto__","ret__33323__auto__",689153280,null)),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33322__auto__","start__33322__auto__",1985668583,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33323__auto__","ret__33323__auto__",689153280,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33338 = arguments.length;
var i__26127__auto___33339 = (0);
while(true){
if((i__26127__auto___33339 < len__26126__auto___33338)){
args__26133__auto__.push((arguments[i__26127__auto___33339]));

var G__33340 = (i__26127__auto___33339 + (1));
i__26127__auto___33339 = G__33340;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((5) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26134__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__33335){
var map__33336 = p__33335;
var map__33336__$1 = ((((!((map__33336 == null)))?((((map__33336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33336):map__33336);
var print_fn = cljs.core.get.call(null,map__33336__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33324__auto__","start__33324__auto__",-430756291,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33325__auto__","ret__33325__auto__",1732257302,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___33326__auto__","___33326__auto__",-1436803043,null)),(function (){var x__25885__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__33327__auto__","end__33327__auto__",-270799602,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__33328__auto__","elapsed__33328__auto__",486613200,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__33327__auto__","end__33327__auto__",-270799602,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__33324__auto__","start__33324__auto__",-430756291,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__25885__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__25885__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__25885__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__33328__auto__","elapsed__33328__auto__",486613200,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq33329){
var G__33330 = cljs.core.first.call(null,seq33329);
var seq33329__$1 = cljs.core.next.call(null,seq33329);
var G__33331 = cljs.core.first.call(null,seq33329__$1);
var seq33329__$2 = cljs.core.next.call(null,seq33329__$1);
var G__33332 = cljs.core.first.call(null,seq33329__$2);
var seq33329__$3 = cljs.core.next.call(null,seq33329__$2);
var G__33333 = cljs.core.first.call(null,seq33329__$3);
var seq33329__$4 = cljs.core.next.call(null,seq33329__$3);
var G__33334 = cljs.core.first.call(null,seq33329__$4);
var seq33329__$5 = cljs.core.next.call(null,seq33329__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__33330,G__33331,G__33332,G__33333,G__33334,seq33329__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args33341 = [];
var len__26126__auto___33344 = arguments.length;
var i__26127__auto___33345 = (0);
while(true){
if((i__26127__auto___33345 < len__26126__auto___33344)){
args33341.push((arguments[i__26127__auto___33345]));

var G__33346 = (i__26127__auto___33345 + (1));
i__26127__auto___33345 = G__33346;
continue;
} else {
}
break;
}

var G__33343 = args33341.length;
switch (G__33343) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33341.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__25885__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33353 = arguments.length;
var i__26127__auto___33354 = (0);
while(true){
if((i__26127__auto___33354 < len__26126__auto___33353)){
args__26133__auto__.push((arguments[i__26127__auto___33354]));

var G__33355 = (i__26127__auto___33354 + (1));
i__26127__auto___33354 = G__33355;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33348__auto__","sb__33348__auto__",-785656705,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33349__auto__","x__33349__auto__",1948794678,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33348__auto__","sb__33348__auto__",-785656705,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33349__auto__","x__33349__auto__",1948794678,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__33348__auto__","sb__33348__auto__",-785656705,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq33350){
var G__33351 = cljs.core.first.call(null,seq33350);
var seq33350__$1 = cljs.core.next.call(null,seq33350);
var G__33352 = cljs.core.first.call(null,seq33350__$1);
var seq33350__$2 = cljs.core.next.call(null,seq33350__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__33351,G__33352,seq33350__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33360 = arguments.length;
var i__26127__auto___33361 = (0);
while(true){
if((i__26127__auto___33361 < len__26126__auto___33360)){
args__26133__auto__.push((arguments[i__26127__auto___33361]));

var G__33362 = (i__26127__auto___33361 + (1));
i__26127__auto___33361 = G__33362;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__33356_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = p1__33356_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq33357){
var G__33358 = cljs.core.first.call(null,seq33357);
var seq33357__$1 = cljs.core.next.call(null,seq33357);
var G__33359 = cljs.core.first.call(null,seq33357__$1);
var seq33357__$2 = cljs.core.next.call(null,seq33357__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__33358,G__33359,seq33357__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__25885__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__25885__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33363__auto__","this__33363__auto__",-1618088549,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33363__auto__","this__33363__auto__",-1618088549,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__33364){
var vec__33376 = p__33364;
var quote = cljs.core.nth.call(null,vec__33376,(0),null);
var ns = cljs.core.nth.call(null,vec__33376,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__33376,quote,ns){
return (function (p__33383){
var vec__33384 = p__33383;
var sym = cljs.core.nth.call(null,vec__33384,(0),null);
var _ = cljs.core.nth.call(null,vec__33384,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25885__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
});})(vec__33376,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__33387,p__33388){
var vec__33395 = p__33387;
var quote0 = cljs.core.nth.call(null,vec__33395,(0),null);
var ns = cljs.core.nth.call(null,vec__33395,(1),null);
var vec__33398 = p__33388;
var quote1 = cljs.core.nth.call(null,vec__33398,(0),null);
var sym = cljs.core.nth.call(null,vec__33398,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__25885__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33406 = arguments.length;
var i__26127__auto___33407 = (0);
while(true){
if((i__26127__auto___33407 < len__26126__auto___33406)){
args__26133__auto__.push((arguments[i__26127__auto___33407]));

var G__33408 = (i__26127__auto___33407 + (1));
i__26127__auto___33407 = G__33408;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((4) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26134__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__25885__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__25885__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq33401){
var G__33402 = cljs.core.first.call(null,seq33401);
var seq33401__$1 = cljs.core.next.call(null,seq33401);
var G__33403 = cljs.core.first.call(null,seq33401__$1);
var seq33401__$2 = cljs.core.next.call(null,seq33401__$1);
var G__33404 = cljs.core.first.call(null,seq33401__$2);
var seq33401__$3 = cljs.core.next.call(null,seq33401__$2);
var G__33405 = cljs.core.first.call(null,seq33401__$3);
var seq33401__$4 = cljs.core.next.call(null,seq33401__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33402,G__33403,G__33404,G__33405,seq33401__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33413 = arguments.length;
var i__26127__auto___33414 = (0);
while(true){
if((i__26127__auto___33414 < len__26126__auto___33413)){
args__26133__auto__.push((arguments[i__26127__auto___33414]));

var G__33415 = (i__26127__auto___33414 + (1));
i__26127__auto___33414 = G__33415;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq33409){
var G__33410 = cljs.core.first.call(null,seq33409);
var seq33409__$1 = cljs.core.next.call(null,seq33409);
var G__33411 = cljs.core.first.call(null,seq33409__$1);
var seq33409__$2 = cljs.core.next.call(null,seq33409__$1);
var G__33412 = cljs.core.first.call(null,seq33409__$2);
var seq33409__$3 = cljs.core.next.call(null,seq33409__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__33410,G__33411,G__33412,seq33409__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__25885__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25885__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__33416 = form_SINGLEQUOTE_;
var G__33417 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__33416;
form_SINGLEQUOTE_ = G__33417;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__25885__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__25039__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__25039__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__25039__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args33418 = [];
var len__26126__auto___33425 = arguments.length;
var i__26127__auto___33426 = (0);
while(true){
if((i__26127__auto___33426 < len__26126__auto___33425)){
args33418.push((arguments[i__26127__auto___33426]));

var G__33427 = (i__26127__auto___33426 + (1));
i__26127__auto___33426 = G__33427;
continue;
} else {
}
break;
}

var G__33420 = args33418.length;
switch (G__33420) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33418.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__33421,solo){
var vec__33422 = p__33421;
var seq__33423 = cljs.core.seq.call(null,vec__33422);
var first__33424 = cljs.core.first.call(null,seq__33423);
var seq__33423__$1 = cljs.core.next.call(null,seq__33423);
var arglist = first__33424;
var body = seq__33423__$1;
var method = vec__33422;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2764),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2765),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
});})(sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),params,(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});})(sig,restarg,vec__33422,seq__33423,first__33424,seq__33423__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))):null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__33429__auto__","len__33429__auto__",658699040,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33430__auto__","i__33430__auto__",-86380153,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33430__auto__","i__33430__auto__",-86380153,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__33429__auto__","len__33429__auto__",658699040,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__25885__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33430__auto__","i__33430__auto__",-86380153,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__33430__auto__","i__33430__auto__",-86380153,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__33433,emit_var_QMARK_){
var vec__33440 = p__33433;
var vec__33443 = cljs.core.nth.call(null,vec__33440,(0),null);
var seq__33444 = cljs.core.seq.call(null,vec__33443);
var first__33445 = cljs.core.first.call(null,seq__33444);
var seq__33444__$1 = cljs.core.next.call(null,seq__33444);
var arglist = first__33445;
var body = seq__33444__$1;
var method = vec__33443;
var fdecl = vec__33440;
var dest_args = ((function (vec__33440,vec__33443,seq__33444,first__33445,seq__33444__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__33440,vec__33443,seq__33444,first__33445,seq__33444__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__33440,vec__33443,seq__33444,first__33445,seq__33444__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__33440,vec__33443,seq__33444,first__33445,seq__33444__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__25885__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33431__auto__","args__33431__auto__",299280379,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33431__auto__","args__33431__auto__",299280379,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33432__auto__","argseq__33432__auto__",892656728,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33431__auto__","args__33431__auto__",299280379,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__33431__auto__","args__33431__auto__",299280379,null)),(function (){var x__25885__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33432__auto__","argseq__33432__auto__",892656728,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__33470){
var vec__33474 = p__33470;
var seq__33475 = cljs.core.seq.call(null,vec__33474);
var first__33476 = cljs.core.first.call(null,seq__33475);
var seq__33475__$1 = cljs.core.next.call(null,seq__33475);
var sig = first__33476;
var body = seq__33475__$1;
var method = vec__33474;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__33446_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__33446_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__25885__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25885__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__33447_SHARP_){
return fixed_arity.call(null,rname,p1__33447_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__25885__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33448__auto__","argseq__33448__auto__",1114528341,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__25885__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__33448__auto__","argseq__33448__auto__",1114528341,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25885__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25885__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__25885__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__33477__i = 0, G__33477__a = new Array(arguments.length -  3);
while (G__33477__i < G__33477__a.length) {G__33477__a[G__33477__i] = arguments[G__33477__i + 3]; ++G__33477__i;}
  fdecl = new cljs.core.IndexedSeq(G__33477__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__33478){
var _AMPERSAND_form = cljs.core.first(arglist__33478);
arglist__33478 = cljs.core.next(arglist__33478);
var _AMPERSAND_env = cljs.core.first(arglist__33478);
arglist__33478 = cljs.core.next(arglist__33478);
var name = cljs.core.first(arglist__33478);
var fdecl = cljs.core.rest(arglist__33478);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__26133__auto__ = [];
var len__26126__auto___33483 = arguments.length;
var i__26127__auto___33484 = (0);
while(true){
if((i__26127__auto___33484 < len__26126__auto___33483)){
args__26133__auto__.push((arguments[i__26127__auto___33484]));

var G__33485 = (i__26127__auto___33484 + (1));
i__26127__auto___33484 = G__33485;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__25885__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__33486 = cljs.core.cons.call(null,f,p);
var G__33487 = cljs.core.next.call(null,args__$1);
p = G__33486;
args__$1 = G__33487;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__33488 = cljs.core.cons.call(null,f,p);
var G__33489 = cljs.core.next.call(null,args__$1);
p = G__33488;
args__$1 = G__33489;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__33490 = cljs.core.next.call(null,fd);
fd = G__33490;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__33491 = cljs.core.next.call(null,fd);
fd = G__33491;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__25885__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__33492 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__33493 = cljs.core.next.call(null,ds);
acc = G__33492;
ds = G__33493;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__33494 = cljs.core.next.call(null,p);
var G__33495 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__33494;
d = G__33495;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__25885__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__25885__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq33479){
var G__33480 = cljs.core.first.call(null,seq33479);
var seq33479__$1 = cljs.core.next.call(null,seq33479);
var G__33481 = cljs.core.first.call(null,seq33479__$1);
var seq33479__$2 = cljs.core.next.call(null,seq33479__$1);
var G__33482 = cljs.core.first.call(null,seq33479__$2);
var seq33479__$3 = cljs.core.next.call(null,seq33479__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__33480,G__33481,G__33482,seq33479__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map