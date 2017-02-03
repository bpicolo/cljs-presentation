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
var len__26126__auto___36133 = arguments.length;
var i__26127__auto___36134 = (0);
while(true){
if((i__26127__auto___36134 < len__26126__auto___36133)){
args__26133__auto__.push((arguments[i__26127__auto___36134]));

var G__36135 = (i__26127__auto___36134 + (1));
i__26127__auto___36134 = G__36135;
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
var G__36136 = threaded;
var G__36137 = cljs.core.next.call(null,forms__$1);
x__$1 = G__36136;
forms__$1 = G__36137;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq36129){
var G__36130 = cljs.core.first.call(null,seq36129);
var seq36129__$1 = cljs.core.next.call(null,seq36129);
var G__36131 = cljs.core.first.call(null,seq36129__$1);
var seq36129__$2 = cljs.core.next.call(null,seq36129__$1);
var G__36132 = cljs.core.first.call(null,seq36129__$2);
var seq36129__$3 = cljs.core.next.call(null,seq36129__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36130,G__36131,G__36132,seq36129__$3);
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
var len__26126__auto___36142 = arguments.length;
var i__26127__auto___36143 = (0);
while(true){
if((i__26127__auto___36143 < len__26126__auto___36142)){
args__26133__auto__.push((arguments[i__26127__auto___36143]));

var G__36144 = (i__26127__auto___36143 + (1));
i__26127__auto___36143 = G__36144;
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
var G__36145 = threaded;
var G__36146 = cljs.core.next.call(null,forms__$1);
x__$1 = G__36145;
forms__$1 = G__36146;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq36138){
var G__36139 = cljs.core.first.call(null,seq36138);
var seq36138__$1 = cljs.core.next.call(null,seq36138);
var G__36140 = cljs.core.first.call(null,seq36138__$1);
var seq36138__$2 = cljs.core.next.call(null,seq36138__$1);
var G__36141 = cljs.core.first.call(null,seq36138__$2);
var seq36138__$3 = cljs.core.next.call(null,seq36138__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36139,G__36140,G__36141,seq36138__$3);
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
var args36147 = [];
var len__26126__auto___36155 = arguments.length;
var i__26127__auto___36156 = (0);
while(true){
if((i__26127__auto___36156 < len__26126__auto___36155)){
args36147.push((arguments[i__26127__auto___36156]));

var G__36157 = (i__26127__auto___36156 + (1));
i__26127__auto___36156 = G__36157;
continue;
} else {
}
break;
}

var G__36154 = args36147.length;
switch (G__36154) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36147.slice((4)),(0),null));
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

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq36148){
var G__36149 = cljs.core.first.call(null,seq36148);
var seq36148__$1 = cljs.core.next.call(null,seq36148);
var G__36150 = cljs.core.first.call(null,seq36148__$1);
var seq36148__$2 = cljs.core.next.call(null,seq36148__$1);
var G__36151 = cljs.core.first.call(null,seq36148__$2);
var seq36148__$3 = cljs.core.next.call(null,seq36148__$2);
var G__36152 = cljs.core.first.call(null,seq36148__$3);
var seq36148__$4 = cljs.core.next.call(null,seq36148__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__36149,G__36150,G__36151,G__36152,seq36148__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36162 = arguments.length;
var i__26127__auto___36163 = (0);
while(true){
if((i__26127__auto___36163 < len__26126__auto___36162)){
args__26133__auto__.push((arguments[i__26127__auto___36163]));

var G__36164 = (i__26127__auto___36163 + (1));
i__26127__auto___36163 = G__36164;
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

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq36159){
var G__36160 = cljs.core.first.call(null,seq36159);
var seq36159__$1 = cljs.core.next.call(null,seq36159);
var G__36161 = cljs.core.first.call(null,seq36159__$1);
var seq36159__$2 = cljs.core.next.call(null,seq36159__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__36160,G__36161,seq36159__$2);
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
var len__26126__auto___36168 = arguments.length;
var i__26127__auto___36169 = (0);
while(true){
if((i__26127__auto___36169 < len__26126__auto___36168)){
args__26133__auto__.push((arguments[i__26127__auto___36169]));

var G__36170 = (i__26127__auto___36169 + (1));
i__26127__auto___36169 = G__36170;
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

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq36165){
var G__36166 = cljs.core.first.call(null,seq36165);
var seq36165__$1 = cljs.core.next.call(null,seq36165);
var G__36167 = cljs.core.first.call(null,seq36165__$1);
var seq36165__$2 = cljs.core.next.call(null,seq36165__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__36166,G__36167,seq36165__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36175 = arguments.length;
var i__26127__auto___36176 = (0);
while(true){
if((i__26127__auto___36176 < len__26126__auto___36175)){
args__26133__auto__.push((arguments[i__26127__auto___36176]));

var G__36177 = (i__26127__auto___36176 + (1));
i__26127__auto___36176 = G__36177;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__36171_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.vary_meta.call(null,p1__36171_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq36172){
var G__36173 = cljs.core.first.call(null,seq36172);
var seq36172__$1 = cljs.core.next.call(null,seq36172);
var G__36174 = cljs.core.first.call(null,seq36172__$1);
var seq36172__$2 = cljs.core.next.call(null,seq36172__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__36173,G__36174,seq36172__$2);
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
var len__26126__auto___36182 = arguments.length;
var i__26127__auto___36183 = (0);
while(true){
if((i__26127__auto___36183 < len__26126__auto___36182)){
args__26133__auto__.push((arguments[i__26127__auto___36183]));

var G__36184 = (i__26127__auto___36183 + (1));
i__26127__auto___36183 = G__36184;
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

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq36178){
var G__36179 = cljs.core.first.call(null,seq36178);
var seq36178__$1 = cljs.core.next.call(null,seq36178);
var G__36180 = cljs.core.first.call(null,seq36178__$1);
var seq36178__$2 = cljs.core.next.call(null,seq36178__$1);
var G__36181 = cljs.core.first.call(null,seq36178__$2);
var seq36178__$3 = cljs.core.next.call(null,seq36178__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__36179,G__36180,G__36181,seq36178__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__36185 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__36186 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__36185;
s = G__36186;
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
return (function (p__36191){
var vec__36192 = p__36191;
var t = cljs.core.nth.call(null,vec__36192,(0),null);
var fs = cljs.core.nth.call(null,vec__36192,(1),null);
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
var len__26126__auto___36199 = arguments.length;
var i__26127__auto___36200 = (0);
while(true){
if((i__26127__auto___36200 < len__26126__auto___36199)){
args__26133__auto__.push((arguments[i__26127__auto___36200]));

var G__36201 = (i__26127__auto___36200 + (1));
i__26127__auto___36200 = G__36201;
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

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq36195){
var G__36196 = cljs.core.first.call(null,seq36195);
var seq36195__$1 = cljs.core.next.call(null,seq36195);
var G__36197 = cljs.core.first.call(null,seq36195__$1);
var seq36195__$2 = cljs.core.next.call(null,seq36195__$1);
var G__36198 = cljs.core.first.call(null,seq36195__$2);
var seq36195__$3 = cljs.core.next.call(null,seq36195__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__36196,G__36197,G__36198,seq36195__$3);
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
var G__36202 = cljs.core.next.call(null,params__$1);
var G__36203 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__36204 = lets;
params__$1 = G__36202;
new_params = G__36203;
lets = G__36204;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__36205 = cljs.core.next.call(null,params__$1);
var G__36206 = cljs.core.conj.call(null,new_params,gparam);
var G__36207 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__36205;
new_params = G__36206;
lets = G__36207;
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
var len__26126__auto___36214 = arguments.length;
var i__26127__auto___36215 = (0);
while(true){
if((i__26127__auto___36215 < len__26126__auto___36214)){
args__26133__auto__.push((arguments[i__26127__auto___36215]));

var G__36216 = (i__26127__auto___36215 + (1));
i__26127__auto___36215 = G__36216;
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

var vec__36211 = sig;
var seq__36212 = cljs.core.seq.call(null,vec__36211);
var first__36213 = cljs.core.first.call(null,seq__36212);
var seq__36212__$1 = cljs.core.next.call(null,seq__36212);
var params = first__36213;
var body = seq__36212__$1;
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
})(),cljs.core.map.call(null,((function (vec__36211,seq__36212,first__36213,seq__36212__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__36211,seq__36212,first__36213,seq__36212__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__36211,seq__36212,first__36213,seq__36212__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__36211,seq__36212,first__36213,seq__36212__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq36208){
var G__36209 = cljs.core.first.call(null,seq36208);
var seq36208__$1 = cljs.core.next.call(null,seq36208);
var G__36210 = cljs.core.first.call(null,seq36208__$1);
var seq36208__$2 = cljs.core.next.call(null,seq36208__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__36209,G__36210,seq36208__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36221 = arguments.length;
var i__26127__auto___36222 = (0);
while(true){
if((i__26127__auto___36222 < len__26126__auto___36221)){
args__26133__auto__.push((arguments[i__26127__auto___36222]));

var G__36223 = (i__26127__auto___36222 + (1));
i__26127__auto___36222 = G__36223;
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

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq36217){
var G__36218 = cljs.core.first.call(null,seq36217);
var seq36217__$1 = cljs.core.next.call(null,seq36217);
var G__36219 = cljs.core.first.call(null,seq36217__$1);
var seq36217__$2 = cljs.core.next.call(null,seq36217__$1);
var G__36220 = cljs.core.first.call(null,seq36217__$2);
var seq36217__$3 = cljs.core.next.call(null,seq36217__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__36218,G__36219,G__36220,seq36217__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args36225 = [];
var len__26126__auto___36234 = arguments.length;
var i__26127__auto___36235 = (0);
while(true){
if((i__26127__auto___36235 < len__26126__auto___36234)){
args36225.push((arguments[i__26127__auto___36235]));

var G__36236 = (i__26127__auto___36235 + (1));
i__26127__auto___36235 = G__36236;
continue;
} else {
}
break;
}

var G__36233 = args36225.length;
switch (G__36233) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36225.slice((5)),(0),null));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36224__auto__","temp__36224__auto__",653515281,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36224__auto__","temp__36224__auto__",653515281,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36224__auto__","temp__36224__auto__",653515281,null))))));
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

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq36226){
var G__36227 = cljs.core.first.call(null,seq36226);
var seq36226__$1 = cljs.core.next.call(null,seq36226);
var G__36228 = cljs.core.first.call(null,seq36226__$1);
var seq36226__$2 = cljs.core.next.call(null,seq36226__$1);
var G__36229 = cljs.core.first.call(null,seq36226__$2);
var seq36226__$3 = cljs.core.next.call(null,seq36226__$2);
var G__36230 = cljs.core.first.call(null,seq36226__$3);
var seq36226__$4 = cljs.core.next.call(null,seq36226__$3);
var G__36231 = cljs.core.first.call(null,seq36226__$4);
var seq36226__$5 = cljs.core.next.call(null,seq36226__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__36227,G__36228,G__36229,G__36230,G__36231,seq36226__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args36238 = [];
var len__26126__auto___36241 = arguments.length;
var i__26127__auto___36242 = (0);
while(true){
if((i__26127__auto___36242 < len__26126__auto___36241)){
args36238.push((arguments[i__26127__auto___36242]));

var G__36243 = (i__26127__auto___36242 + (1));
i__26127__auto___36242 = G__36243;
continue;
} else {
}
break;
}

var G__36240 = args36238.length;
switch (G__36240) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args36238.length - (2)))].join('')));

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
var len__26126__auto___36250 = arguments.length;
var i__26127__auto___36251 = (0);
while(true){
if((i__26127__auto___36251 < len__26126__auto___36250)){
args__26133__auto__.push((arguments[i__26127__auto___36251]));

var G__36252 = (i__26127__auto___36251 + (1));
i__26127__auto___36251 = G__36252;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__36245_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__36245_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq36246){
var G__36247 = cljs.core.first.call(null,seq36246);
var seq36246__$1 = cljs.core.next.call(null,seq36246);
var G__36248 = cljs.core.first.call(null,seq36246__$1);
var seq36246__$2 = cljs.core.next.call(null,seq36246__$1);
var G__36249 = cljs.core.first.call(null,seq36246__$2);
var seq36246__$3 = cljs.core.next.call(null,seq36246__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__36247,G__36248,G__36249,seq36246__$3);
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
var len__26126__auto___36257 = arguments.length;
var i__26127__auto___36258 = (0);
while(true){
if((i__26127__auto___36258 < len__26126__auto___36257)){
args__26133__auto__.push((arguments[i__26127__auto___36258]));

var G__36259 = (i__26127__auto___36258 + (1));
i__26127__auto___36258 = G__36259;
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

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq36253){
var G__36254 = cljs.core.first.call(null,seq36253);
var seq36253__$1 = cljs.core.next.call(null,seq36253);
var G__36255 = cljs.core.first.call(null,seq36253__$1);
var seq36253__$2 = cljs.core.next.call(null,seq36253__$1);
var G__36256 = cljs.core.first.call(null,seq36253__$2);
var seq36253__$3 = cljs.core.next.call(null,seq36253__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__36254,G__36255,G__36256,seq36253__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36264 = arguments.length;
var i__26127__auto___36265 = (0);
while(true){
if((i__26127__auto___36265 < len__26126__auto___36264)){
args__26133__auto__.push((arguments[i__26127__auto___36265]));

var G__36266 = (i__26127__auto___36265 + (1));
i__26127__auto___36265 = G__36266;
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

cljs.core$macros.when.cljs$lang$applyTo = (function (seq36260){
var G__36261 = cljs.core.first.call(null,seq36260);
var seq36260__$1 = cljs.core.next.call(null,seq36260);
var G__36262 = cljs.core.first.call(null,seq36260__$1);
var seq36260__$2 = cljs.core.next.call(null,seq36260__$1);
var G__36263 = cljs.core.first.call(null,seq36260__$2);
var seq36260__$3 = cljs.core.next.call(null,seq36260__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__36261,G__36262,G__36263,seq36260__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36275 = arguments.length;
var i__26127__auto___36276 = (0);
while(true){
if((i__26127__auto___36276 < len__26126__auto___36275)){
args__26133__auto__.push((arguments[i__26127__auto___36276]));

var G__36277 = (i__26127__auto___36276 + (1));
i__26127__auto___36276 = G__36277;
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


var vec__36272 = bindings;
var x = cljs.core.nth.call(null,vec__36272,(0),null);
var xs = cljs.core.nth.call(null,vec__36272,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__36267__auto__","xs__36267__auto__",-744074049,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__36267__auto__","xs__36267__auto__",-744074049,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq36268){
var G__36269 = cljs.core.first.call(null,seq36268);
var seq36268__$1 = cljs.core.next.call(null,seq36268);
var G__36270 = cljs.core.first.call(null,seq36268__$1);
var seq36268__$2 = cljs.core.next.call(null,seq36268__$1);
var G__36271 = cljs.core.first.call(null,seq36268__$2);
var seq36268__$3 = cljs.core.next.call(null,seq36268__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__36269,G__36270,G__36271,seq36268__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36283 = arguments.length;
var i__26127__auto___36284 = (0);
while(true){
if((i__26127__auto___36284 < len__26126__auto___36283)){
args__26133__auto__.push((arguments[i__26127__auto___36284]));

var G__36285 = (i__26127__auto___36284 + (1));
i__26127__auto___36284 = G__36285;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36278__auto__","temp__36278__auto__",-526409991,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36278__auto__","temp__36278__auto__",-526409991,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36278__auto__","temp__36278__auto__",-526409991,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq36279){
var G__36280 = cljs.core.first.call(null,seq36279);
var seq36279__$1 = cljs.core.next.call(null,seq36279);
var G__36281 = cljs.core.first.call(null,seq36279__$1);
var seq36279__$2 = cljs.core.next.call(null,seq36279__$1);
var G__36282 = cljs.core.first.call(null,seq36279__$2);
var seq36279__$3 = cljs.core.next.call(null,seq36279__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__36280,G__36281,G__36282,seq36279__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36290 = arguments.length;
var i__26127__auto___36291 = (0);
while(true){
if((i__26127__auto___36291 < len__26126__auto___36290)){
args__26133__auto__.push((arguments[i__26127__auto___36291]));

var G__36292 = (i__26127__auto___36291 + (1));
i__26127__auto___36291 = G__36292;
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

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq36286){
var G__36287 = cljs.core.first.call(null,seq36286);
var seq36286__$1 = cljs.core.next.call(null,seq36286);
var G__36288 = cljs.core.first.call(null,seq36286__$1);
var seq36286__$2 = cljs.core.next.call(null,seq36286__$1);
var G__36289 = cljs.core.first.call(null,seq36286__$2);
var seq36286__$3 = cljs.core.next.call(null,seq36286__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__36287,G__36288,G__36289,seq36286__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36297 = arguments.length;
var i__26127__auto___36298 = (0);
while(true){
if((i__26127__auto___36298 < len__26126__auto___36297)){
args__26133__auto__.push((arguments[i__26127__auto___36298]));

var G__36299 = (i__26127__auto___36298 + (1));
i__26127__auto___36298 = G__36299;
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

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq36293){
var G__36294 = cljs.core.first.call(null,seq36293);
var seq36293__$1 = cljs.core.next.call(null,seq36293);
var G__36295 = cljs.core.first.call(null,seq36293__$1);
var seq36293__$2 = cljs.core.next.call(null,seq36293__$1);
var G__36296 = cljs.core.first.call(null,seq36293__$2);
var seq36293__$3 = cljs.core.next.call(null,seq36293__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__36294,G__36295,G__36296,seq36293__$3);
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
var len__26126__auto___36308 = arguments.length;
var i__26127__auto___36309 = (0);
while(true){
if((i__26127__auto___36309 < len__26126__auto___36308)){
args__26133__auto__.push((arguments[i__26127__auto___36309]));

var G__36310 = (i__26127__auto___36309 + (1));
i__26127__auto___36309 = G__36310;
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
return (function (p__36304){
var vec__36305 = p__36304;
var test = cljs.core.nth.call(null,vec__36305,(0),null);
var step = cljs.core.nth.call(null,vec__36305,(1),null);
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

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq36300){
var G__36301 = cljs.core.first.call(null,seq36300);
var seq36300__$1 = cljs.core.next.call(null,seq36300);
var G__36302 = cljs.core.first.call(null,seq36300__$1);
var seq36300__$2 = cljs.core.next.call(null,seq36300__$1);
var G__36303 = cljs.core.first.call(null,seq36300__$2);
var seq36300__$3 = cljs.core.next.call(null,seq36300__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36301,G__36302,G__36303,seq36300__$3);
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
var len__26126__auto___36319 = arguments.length;
var i__26127__auto___36320 = (0);
while(true){
if((i__26127__auto___36320 < len__26126__auto___36319)){
args__26133__auto__.push((arguments[i__26127__auto___36320]));

var G__36321 = (i__26127__auto___36320 + (1));
i__26127__auto___36320 = G__36321;
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
return (function (p__36315){
var vec__36316 = p__36315;
var test = cljs.core.nth.call(null,vec__36316,(0),null);
var step = cljs.core.nth.call(null,vec__36316,(1),null);
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

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq36311){
var G__36312 = cljs.core.first.call(null,seq36311);
var seq36311__$1 = cljs.core.next.call(null,seq36311);
var G__36313 = cljs.core.first.call(null,seq36311__$1);
var seq36311__$2 = cljs.core.next.call(null,seq36311__$1);
var G__36314 = cljs.core.first.call(null,seq36311__$2);
var seq36311__$3 = cljs.core.next.call(null,seq36311__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36312,G__36313,G__36314,seq36311__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36327 = arguments.length;
var i__26127__auto___36328 = (0);
while(true){
if((i__26127__auto___36328 < len__26126__auto___36327)){
args__26133__auto__.push((arguments[i__26127__auto___36328]));

var G__36329 = (i__26127__auto___36328 + (1));
i__26127__auto___36328 = G__36329;
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

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq36322){
var G__36323 = cljs.core.first.call(null,seq36322);
var seq36322__$1 = cljs.core.next.call(null,seq36322);
var G__36324 = cljs.core.first.call(null,seq36322__$1);
var seq36322__$2 = cljs.core.next.call(null,seq36322__$1);
var G__36325 = cljs.core.first.call(null,seq36322__$2);
var seq36322__$3 = cljs.core.next.call(null,seq36322__$2);
var G__36326 = cljs.core.first.call(null,seq36322__$3);
var seq36322__$4 = cljs.core.next.call(null,seq36322__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36323,G__36324,G__36325,G__36326,seq36322__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36334 = arguments.length;
var i__26127__auto___36335 = (0);
while(true){
if((i__26127__auto___36335 < len__26126__auto___36334)){
args__26133__auto__.push((arguments[i__26127__auto___36335]));

var G__36336 = (i__26127__auto___36335 + (1));
i__26127__auto___36335 = G__36336;
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

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq36330){
var G__36331 = cljs.core.first.call(null,seq36330);
var seq36330__$1 = cljs.core.next.call(null,seq36330);
var G__36332 = cljs.core.first.call(null,seq36330__$1);
var seq36330__$2 = cljs.core.next.call(null,seq36330__$1);
var G__36333 = cljs.core.first.call(null,seq36330__$2);
var seq36330__$3 = cljs.core.next.call(null,seq36330__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36331,G__36332,G__36333,seq36330__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36341 = arguments.length;
var i__26127__auto___36342 = (0);
while(true){
if((i__26127__auto___36342 < len__26126__auto___36341)){
args__26133__auto__.push((arguments[i__26127__auto___36342]));

var G__36343 = (i__26127__auto___36342 + (1));
i__26127__auto___36342 = G__36343;
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

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq36337){
var G__36338 = cljs.core.first.call(null,seq36337);
var seq36337__$1 = cljs.core.next.call(null,seq36337);
var G__36339 = cljs.core.first.call(null,seq36337__$1);
var seq36337__$2 = cljs.core.next.call(null,seq36337__$1);
var G__36340 = cljs.core.first.call(null,seq36337__$2);
var seq36337__$3 = cljs.core.next.call(null,seq36337__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__36338,G__36339,G__36340,seq36337__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args36345 = [];
var len__26126__auto___36354 = arguments.length;
var i__26127__auto___36355 = (0);
while(true){
if((i__26127__auto___36355 < len__26126__auto___36354)){
args36345.push((arguments[i__26127__auto___36355]));

var G__36356 = (i__26127__auto___36355 + (1));
i__26127__auto___36355 = G__36356;
continue;
} else {
}
break;
}

var G__36353 = args36345.length;
switch (G__36353) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36345.slice((5)),(0),null));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36344__auto__","temp__36344__auto__",90440445,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36344__auto__","temp__36344__auto__",90440445,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36344__auto__","temp__36344__auto__",90440445,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq36346){
var G__36347 = cljs.core.first.call(null,seq36346);
var seq36346__$1 = cljs.core.next.call(null,seq36346);
var G__36348 = cljs.core.first.call(null,seq36346__$1);
var seq36346__$2 = cljs.core.next.call(null,seq36346__$1);
var G__36349 = cljs.core.first.call(null,seq36346__$2);
var seq36346__$3 = cljs.core.next.call(null,seq36346__$2);
var G__36350 = cljs.core.first.call(null,seq36346__$3);
var seq36346__$4 = cljs.core.next.call(null,seq36346__$3);
var G__36351 = cljs.core.first.call(null,seq36346__$4);
var seq36346__$5 = cljs.core.next.call(null,seq36346__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__36347,G__36348,G__36349,G__36350,G__36351,seq36346__$5);
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
var len__26126__auto___36363 = arguments.length;
var i__26127__auto___36364 = (0);
while(true){
if((i__26127__auto___36364 < len__26126__auto___36363)){
args__26133__auto__.push((arguments[i__26127__auto___36364]));

var G__36365 = (i__26127__auto___36364 + (1));
i__26127__auto___36364 = G__36365;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36358__auto__","temp__36358__auto__",1489126552,null)),(function (){var x__25885__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36358__auto__","temp__36358__auto__",1489126552,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__36358__auto__","temp__36358__auto__",1489126552,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq36359){
var G__36360 = cljs.core.first.call(null,seq36359);
var seq36359__$1 = cljs.core.next.call(null,seq36359);
var G__36361 = cljs.core.first.call(null,seq36359__$1);
var seq36359__$2 = cljs.core.next.call(null,seq36359__$1);
var G__36362 = cljs.core.first.call(null,seq36359__$2);
var seq36359__$3 = cljs.core.next.call(null,seq36359__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__36360,G__36361,G__36362,seq36359__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__36366_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__36366_SHARP_)){
return cljs.core.first.call(null,p1__36366_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__36366_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__36366_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__36367_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__36367_SHARP_);
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
var G__36368 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__36369 = cljs.core.next.call(null,fdecls);
ret = G__36368;
fdecls = G__36369;
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
var G__36379 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__36380 = n;
var G__36381 = cljs.core.nnext.call(null,bs);
var G__36382 = true;
ret = G__36379;
n = G__36380;
bs = G__36381;
seen_rest_QMARK_ = G__36382;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__36383 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__25885__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__25885__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__25885__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__25885__auto____$1);
})(),x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__36384 = (n + (1));
var G__36385 = cljs.core.next.call(null,bs);
var G__36386 = seen_rest_QMARK_;
ret = G__36383;
n = G__36384;
bs = G__36385;
seen_rest_QMARK_ = G__36386;
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
return (function (p1__36370_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__25051__auto__ = mkns;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.namespace.call(null,p1__36370_SHARP_);
}
})(),cljs.core.name.call(null,p1__36370_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__36371_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.symbol.call(null,(function (){var or__25051__auto__ = mkns;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.namespace.call(null,p1__36371_SHARP_);
}
})(),cljs.core.name.call(null,p1__36371_SHARP_));
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
return (function (p1__36372_SHARP_,p2__36373_SHARP_){
return cljs.core.assoc.call(null,p1__36372_SHARP_,p2__36373_SHARP_,cljs.core.val.call(null,entry).call(null,p2__36373_SHARP_));
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
var G__36387 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__36388 = cljs.core.next.call(null,bes);
ret = G__36387;
bes = G__36388;
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
return (function (p1__36374_SHARP_){
return (cljs.core.first.call(null,p1__36374_SHARP_) instanceof cljs.core.Keyword);
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
var len__26126__auto___36393 = arguments.length;
var i__26127__auto___36394 = (0);
while(true){
if((i__26127__auto___36394 < len__26126__auto___36393)){
args__26133__auto__.push((arguments[i__26127__auto___36394]));

var G__36395 = (i__26127__auto___36394 + (1));
i__26127__auto___36394 = G__36395;
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

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq36389){
var G__36390 = cljs.core.first.call(null,seq36389);
var seq36389__$1 = cljs.core.next.call(null,seq36389);
var G__36391 = cljs.core.first.call(null,seq36389__$1);
var seq36389__$2 = cljs.core.next.call(null,seq36389__$1);
var G__36392 = cljs.core.first.call(null,seq36389__$2);
var seq36389__$3 = cljs.core.next.call(null,seq36389__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__36390,G__36391,G__36392,seq36389__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36404 = arguments.length;
var i__26127__auto___36405 = (0);
while(true){
if((i__26127__auto___36405 < len__26126__auto___36404)){
args__26133__auto__.push((arguments[i__26127__auto___36405]));

var G__36406 = (i__26127__auto___36405 + (1));
i__26127__auto___36405 = G__36406;
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
return (function (ret,p__36400){
var vec__36401 = p__36400;
var b = cljs.core.nth.call(null,vec__36401,(0),null);
var v = cljs.core.nth.call(null,vec__36401,(1),null);
var g = cljs.core.nth.call(null,vec__36401,(2),null);
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

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq36396){
var G__36397 = cljs.core.first.call(null,seq36396);
var seq36396__$1 = cljs.core.next.call(null,seq36396);
var G__36398 = cljs.core.first.call(null,seq36396__$1);
var seq36396__$2 = cljs.core.next.call(null,seq36396__$1);
var G__36399 = cljs.core.first.call(null,seq36396__$2);
var seq36396__$3 = cljs.core.next.call(null,seq36396__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__36397,G__36398,G__36399,seq36396__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__36407_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__36407_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__36408){
var vec__36409 = p__36408;
var p = cljs.core.nth.call(null,vec__36409,(0),null);
var b = cljs.core.nth.call(null,vec__36409,(1),null);
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
var len__26126__auto___36415 = arguments.length;
var i__26127__auto___36416 = (0);
while(true){
if((i__26127__auto___36416 < len__26126__auto___36415)){
args__26133__auto__.push((arguments[i__26127__auto___36416]));

var G__36417 = (i__26127__auto___36416 + (1));
i__26127__auto___36416 = G__36417;
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

cljs.core$macros.str.cljs$lang$applyTo = (function (seq36412){
var G__36413 = cljs.core.first.call(null,seq36412);
var seq36412__$1 = cljs.core.next.call(null,seq36412);
var G__36414 = cljs.core.first.call(null,seq36412__$1);
var seq36412__$2 = cljs.core.next.call(null,seq36412__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__36413,G__36414,seq36412__$2);
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
var args36421 = [];
var len__26126__auto___36428 = arguments.length;
var i__26127__auto___36429 = (0);
while(true){
if((i__26127__auto___36429 < len__26126__auto___36428)){
args36421.push((arguments[i__26127__auto___36429]));

var G__36430 = (i__26127__auto___36429 + (1));
i__26127__auto___36429 = G__36430;
continue;
} else {
}
break;
}

var G__36427 = args36421.length;
switch (G__36427) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36421.slice((3)),(0),null));
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
return (function (p1__36418_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__36418_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__36419_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__36419_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__36420__auto__","and__36420__auto__",683868603,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__36420__auto__","and__36420__auto__",683868603,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__36420__auto__","and__36420__auto__",683868603,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq36422){
var G__36423 = cljs.core.first.call(null,seq36422);
var seq36422__$1 = cljs.core.next.call(null,seq36422);
var G__36424 = cljs.core.first.call(null,seq36422__$1);
var seq36422__$2 = cljs.core.next.call(null,seq36422__$1);
var G__36425 = cljs.core.first.call(null,seq36422__$2);
var seq36422__$3 = cljs.core.next.call(null,seq36422__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__36423,G__36424,G__36425,seq36422__$3);
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
var args36435 = [];
var len__26126__auto___36442 = arguments.length;
var i__26127__auto___36443 = (0);
while(true){
if((i__26127__auto___36443 < len__26126__auto___36442)){
args36435.push((arguments[i__26127__auto___36443]));

var G__36444 = (i__26127__auto___36443 + (1));
i__26127__auto___36443 = G__36444;
continue;
} else {
}
break;
}

var G__36441 = args36435.length;
switch (G__36441) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36435.slice((3)),(0),null));
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
return (function (p1__36432_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__36432_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__36433_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__36433_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__25885__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__36434__auto__","or__36434__auto__",252090899,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__36434__auto__","or__36434__auto__",252090899,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__36434__auto__","or__36434__auto__",252090899,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq36436){
var G__36437 = cljs.core.first.call(null,seq36436);
var seq36436__$1 = cljs.core.next.call(null,seq36436);
var G__36438 = cljs.core.first.call(null,seq36436__$1);
var seq36436__$2 = cljs.core.next.call(null,seq36436__$1);
var G__36439 = cljs.core.first.call(null,seq36436__$2);
var seq36436__$3 = cljs.core.next.call(null,seq36436__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__36437,G__36438,G__36439,seq36436__$3);
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
var vec__36450 = clojure.string.split.call(null,comment,/\n/);
var seq__36451 = cljs.core.seq.call(null,vec__36450);
var first__36452 = cljs.core.first.call(null,seq__36451);
var seq__36451__$1 = cljs.core.next.call(null,seq__36451);
var x = first__36452;
var ys = seq__36451__$1;
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__36450,seq__36451,first__36452,seq__36451__$1,x,ys){
return (function (p1__36446_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__36446_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__36450,seq__36451,first__36452,seq__36451__$1,x,ys))
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
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__36453__auto__","c__36453__auto__",680753657,null)),(function (){var x__25885__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36454__auto__","x__36454__auto__",-1058769909,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36454__auto__","x__36454__auto__",-1058769909,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__36453__auto__","c__36453__auto__",680753657,null)))));
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
var args36455 = [];
var len__26126__auto___36463 = arguments.length;
var i__26127__auto___36464 = (0);
while(true){
if((i__26127__auto___36464 < len__26126__auto___36463)){
args36455.push((arguments[i__26127__auto___36464]));

var G__36465 = (i__26127__auto___36464 + (1));
i__26127__auto___36464 = G__36465;
continue;
} else {
}
break;
}

var G__36462 = args36455.length;
switch (G__36462) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36455.slice((4)),(0),null));
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

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq36456){
var G__36457 = cljs.core.first.call(null,seq36456);
var seq36456__$1 = cljs.core.next.call(null,seq36456);
var G__36458 = cljs.core.first.call(null,seq36456__$1);
var seq36456__$2 = cljs.core.next.call(null,seq36456__$1);
var G__36459 = cljs.core.first.call(null,seq36456__$2);
var seq36456__$3 = cljs.core.next.call(null,seq36456__$2);
var G__36460 = cljs.core.first.call(null,seq36456__$3);
var seq36456__$4 = cljs.core.next.call(null,seq36456__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__36457,G__36458,G__36459,G__36460,seq36456__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args36467 = [];
var len__26126__auto___36476 = arguments.length;
var i__26127__auto___36477 = (0);
while(true){
if((i__26127__auto___36477 < len__26126__auto___36476)){
args36467.push((arguments[i__26127__auto___36477]));

var G__36478 = (i__26127__auto___36477 + (1));
i__26127__auto___36477 = G__36478;
continue;
} else {
}
break;
}

var G__36475 = args36467.length;
switch (G__36475) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36467.slice((5)),(0),null));
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

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq36468){
var G__36469 = cljs.core.first.call(null,seq36468);
var seq36468__$1 = cljs.core.next.call(null,seq36468);
var G__36470 = cljs.core.first.call(null,seq36468__$1);
var seq36468__$2 = cljs.core.next.call(null,seq36468__$1);
var G__36471 = cljs.core.first.call(null,seq36468__$2);
var seq36468__$3 = cljs.core.next.call(null,seq36468__$2);
var G__36472 = cljs.core.first.call(null,seq36468__$3);
var seq36468__$4 = cljs.core.next.call(null,seq36468__$3);
var G__36473 = cljs.core.first.call(null,seq36468__$4);
var seq36468__$5 = cljs.core.next.call(null,seq36468__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__36469,G__36470,G__36471,G__36472,G__36473,seq36468__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args36480 = [];
var len__26126__auto___36488 = arguments.length;
var i__26127__auto___36489 = (0);
while(true){
if((i__26127__auto___36489 < len__26126__auto___36488)){
args36480.push((arguments[i__26127__auto___36489]));

var G__36490 = (i__26127__auto___36489 + (1));
i__26127__auto___36489 = G__36490;
continue;
} else {
}
break;
}

var G__36487 = args36480.length;
switch (G__36487) {
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
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36480.slice((4)),(0),null));
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

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq36481){
var G__36482 = cljs.core.first.call(null,seq36481);
var seq36481__$1 = cljs.core.next.call(null,seq36481);
var G__36483 = cljs.core.first.call(null,seq36481__$1);
var seq36481__$2 = cljs.core.next.call(null,seq36481__$1);
var G__36484 = cljs.core.first.call(null,seq36481__$2);
var seq36481__$3 = cljs.core.next.call(null,seq36481__$2);
var G__36485 = cljs.core.first.call(null,seq36481__$3);
var seq36481__$4 = cljs.core.next.call(null,seq36481__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__36482,G__36483,G__36484,G__36485,seq36481__$4);
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
var len__26126__auto___36495 = arguments.length;
var i__26127__auto___36496 = (0);
while(true){
if((i__26127__auto___36496 < len__26126__auto___36495)){
args__26133__auto__.push((arguments[i__26127__auto___36496]));

var G__36497 = (i__26127__auto___36496 + (1));
i__26127__auto___36496 = G__36497;
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

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq36492){
var G__36493 = cljs.core.first.call(null,seq36492);
var seq36492__$1 = cljs.core.next.call(null,seq36492);
var G__36494 = cljs.core.first.call(null,seq36492__$1);
var seq36492__$2 = cljs.core.next.call(null,seq36492__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__36493,G__36494,seq36492__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36501 = arguments.length;
var i__26127__auto___36502 = (0);
while(true){
if((i__26127__auto___36502 < len__26126__auto___36501)){
args__26133__auto__.push((arguments[i__26127__auto___36502]));

var G__36503 = (i__26127__auto___36502 + (1));
i__26127__auto___36502 = G__36503;
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

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq36498){
var G__36499 = cljs.core.first.call(null,seq36498);
var seq36498__$1 = cljs.core.next.call(null,seq36498);
var G__36500 = cljs.core.first.call(null,seq36498__$1);
var seq36498__$2 = cljs.core.next.call(null,seq36498__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__36499,G__36500,seq36498__$2);
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
var len__26126__auto___36507 = arguments.length;
var i__26127__auto___36508 = (0);
while(true){
if((i__26127__auto___36508 < len__26126__auto___36507)){
args__26133__auto__.push((arguments[i__26127__auto___36508]));

var G__36509 = (i__26127__auto___36508 + (1));
i__26127__auto___36508 = G__36509;
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

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq36504){
var G__36505 = cljs.core.first.call(null,seq36504);
var seq36504__$1 = cljs.core.next.call(null,seq36504);
var G__36506 = cljs.core.first.call(null,seq36504__$1);
var seq36504__$2 = cljs.core.next.call(null,seq36504__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__36505,G__36506,seq36504__$2);
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
var len__26126__auto___36513 = arguments.length;
var i__26127__auto___36514 = (0);
while(true){
if((i__26127__auto___36514 < len__26126__auto___36513)){
args__26133__auto__.push((arguments[i__26127__auto___36514]));

var G__36515 = (i__26127__auto___36514 + (1));
i__26127__auto___36514 = G__36515;
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

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq36510){
var G__36511 = cljs.core.first.call(null,seq36510);
var seq36510__$1 = cljs.core.next.call(null,seq36510);
var G__36512 = cljs.core.first.call(null,seq36510__$1);
var seq36510__$2 = cljs.core.next.call(null,seq36510__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__36511,G__36512,seq36510__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36519 = arguments.length;
var i__26127__auto___36520 = (0);
while(true){
if((i__26127__auto___36520 < len__26126__auto___36519)){
args__26133__auto__.push((arguments[i__26127__auto___36520]));

var G__36521 = (i__26127__auto___36520 + (1));
i__26127__auto___36520 = G__36521;
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

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq36516){
var G__36517 = cljs.core.first.call(null,seq36516);
var seq36516__$1 = cljs.core.next.call(null,seq36516);
var G__36518 = cljs.core.first.call(null,seq36516__$1);
var seq36516__$2 = cljs.core.next.call(null,seq36516__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__36517,G__36518,seq36516__$2);
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
var len__26126__auto___36525 = arguments.length;
var i__26127__auto___36526 = (0);
while(true){
if((i__26127__auto___36526 < len__26126__auto___36525)){
args__26133__auto__.push((arguments[i__26127__auto___36526]));

var G__36527 = (i__26127__auto___36526 + (1));
i__26127__auto___36526 = G__36527;
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

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq36522){
var G__36523 = cljs.core.first.call(null,seq36522);
var seq36522__$1 = cljs.core.next.call(null,seq36522);
var G__36524 = cljs.core.first.call(null,seq36522__$1);
var seq36522__$2 = cljs.core.next.call(null,seq36522__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__36523,G__36524,seq36522__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36531 = arguments.length;
var i__26127__auto___36532 = (0);
while(true){
if((i__26127__auto___36532 < len__26126__auto___36531)){
args__26133__auto__.push((arguments[i__26127__auto___36532]));

var G__36533 = (i__26127__auto___36532 + (1));
i__26127__auto___36532 = G__36533;
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

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq36528){
var G__36529 = cljs.core.first.call(null,seq36528);
var seq36528__$1 = cljs.core.next.call(null,seq36528);
var G__36530 = cljs.core.first.call(null,seq36528__$1);
var seq36528__$2 = cljs.core.next.call(null,seq36528__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__36529,G__36530,seq36528__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args36534 = [];
var len__26126__auto___36542 = arguments.length;
var i__26127__auto___36543 = (0);
while(true){
if((i__26127__auto___36543 < len__26126__auto___36542)){
args36534.push((arguments[i__26127__auto___36543]));

var G__36544 = (i__26127__auto___36543 + (1));
i__26127__auto___36543 = G__36544;
continue;
} else {
}
break;
}

var G__36541 = args36534.length;
switch (G__36541) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36534.slice((4)),(0),null));
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

cljs.core$macros._.cljs$lang$applyTo = (function (seq36535){
var G__36536 = cljs.core.first.call(null,seq36535);
var seq36535__$1 = cljs.core.next.call(null,seq36535);
var G__36537 = cljs.core.first.call(null,seq36535__$1);
var seq36535__$2 = cljs.core.next.call(null,seq36535__$1);
var G__36538 = cljs.core.first.call(null,seq36535__$2);
var seq36535__$3 = cljs.core.next.call(null,seq36535__$2);
var G__36539 = cljs.core.first.call(null,seq36535__$3);
var seq36535__$4 = cljs.core.next.call(null,seq36535__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__36536,G__36537,G__36538,G__36539,seq36535__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args36546 = [];
var len__26126__auto___36554 = arguments.length;
var i__26127__auto___36555 = (0);
while(true){
if((i__26127__auto___36555 < len__26126__auto___36554)){
args36546.push((arguments[i__26127__auto___36555]));

var G__36556 = (i__26127__auto___36555 + (1));
i__26127__auto___36555 = G__36556;
continue;
} else {
}
break;
}

var G__36553 = args36546.length;
switch (G__36553) {
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
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36546.slice((4)),(0),null));
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

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq36547){
var G__36548 = cljs.core.first.call(null,seq36547);
var seq36547__$1 = cljs.core.next.call(null,seq36547);
var G__36549 = cljs.core.first.call(null,seq36547__$1);
var seq36547__$2 = cljs.core.next.call(null,seq36547__$1);
var G__36550 = cljs.core.first.call(null,seq36547__$2);
var seq36547__$3 = cljs.core.next.call(null,seq36547__$2);
var G__36551 = cljs.core.first.call(null,seq36547__$3);
var seq36547__$4 = cljs.core.next.call(null,seq36547__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__36548,G__36549,G__36550,G__36551,seq36547__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args36558 = [];
var len__26126__auto___36566 = arguments.length;
var i__26127__auto___36567 = (0);
while(true){
if((i__26127__auto___36567 < len__26126__auto___36566)){
args36558.push((arguments[i__26127__auto___36567]));

var G__36568 = (i__26127__auto___36567 + (1));
i__26127__auto___36567 = G__36568;
continue;
} else {
}
break;
}

var G__36565 = args36558.length;
switch (G__36565) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36558.slice((4)),(0),null));
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

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq36559){
var G__36560 = cljs.core.first.call(null,seq36559);
var seq36559__$1 = cljs.core.next.call(null,seq36559);
var G__36561 = cljs.core.first.call(null,seq36559__$1);
var seq36559__$2 = cljs.core.next.call(null,seq36559__$1);
var G__36562 = cljs.core.first.call(null,seq36559__$2);
var seq36559__$3 = cljs.core.next.call(null,seq36559__$2);
var G__36563 = cljs.core.first.call(null,seq36559__$3);
var seq36559__$4 = cljs.core.next.call(null,seq36559__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__36560,G__36561,G__36562,G__36563,seq36559__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args36570 = [];
var len__26126__auto___36578 = arguments.length;
var i__26127__auto___36579 = (0);
while(true){
if((i__26127__auto___36579 < len__26126__auto___36578)){
args36570.push((arguments[i__26127__auto___36579]));

var G__36580 = (i__26127__auto___36579 + (1));
i__26127__auto___36579 = G__36580;
continue;
} else {
}
break;
}

var G__36577 = args36570.length;
switch (G__36577) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36570.slice((4)),(0),null));
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

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq36571){
var G__36572 = cljs.core.first.call(null,seq36571);
var seq36571__$1 = cljs.core.next.call(null,seq36571);
var G__36573 = cljs.core.first.call(null,seq36571__$1);
var seq36571__$2 = cljs.core.next.call(null,seq36571__$1);
var G__36574 = cljs.core.first.call(null,seq36571__$2);
var seq36571__$3 = cljs.core.next.call(null,seq36571__$2);
var G__36575 = cljs.core.first.call(null,seq36571__$3);
var seq36571__$4 = cljs.core.next.call(null,seq36571__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__36572,G__36573,G__36574,G__36575,seq36571__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args36582 = [];
var len__26126__auto___36590 = arguments.length;
var i__26127__auto___36591 = (0);
while(true){
if((i__26127__auto___36591 < len__26126__auto___36590)){
args36582.push((arguments[i__26127__auto___36591]));

var G__36592 = (i__26127__auto___36591 + (1));
i__26127__auto___36591 = G__36592;
continue;
} else {
}
break;
}

var G__36589 = args36582.length;
switch (G__36589) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36582.slice((4)),(0),null));
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

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq36583){
var G__36584 = cljs.core.first.call(null,seq36583);
var seq36583__$1 = cljs.core.next.call(null,seq36583);
var G__36585 = cljs.core.first.call(null,seq36583__$1);
var seq36583__$2 = cljs.core.next.call(null,seq36583__$1);
var G__36586 = cljs.core.first.call(null,seq36583__$2);
var seq36583__$3 = cljs.core.next.call(null,seq36583__$2);
var G__36587 = cljs.core.first.call(null,seq36583__$3);
var seq36583__$4 = cljs.core.next.call(null,seq36583__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__36584,G__36585,G__36586,G__36587,seq36583__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args36594 = [];
var len__26126__auto___36602 = arguments.length;
var i__26127__auto___36603 = (0);
while(true){
if((i__26127__auto___36603 < len__26126__auto___36602)){
args36594.push((arguments[i__26127__auto___36603]));

var G__36604 = (i__26127__auto___36603 + (1));
i__26127__auto___36603 = G__36604;
continue;
} else {
}
break;
}

var G__36601 = args36594.length;
switch (G__36601) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36594.slice((4)),(0),null));
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

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq36595){
var G__36596 = cljs.core.first.call(null,seq36595);
var seq36595__$1 = cljs.core.next.call(null,seq36595);
var G__36597 = cljs.core.first.call(null,seq36595__$1);
var seq36595__$2 = cljs.core.next.call(null,seq36595__$1);
var G__36598 = cljs.core.first.call(null,seq36595__$2);
var seq36595__$3 = cljs.core.next.call(null,seq36595__$2);
var G__36599 = cljs.core.first.call(null,seq36595__$3);
var seq36595__$4 = cljs.core.next.call(null,seq36595__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__36596,G__36597,G__36598,G__36599,seq36595__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args36606 = [];
var len__26126__auto___36614 = arguments.length;
var i__26127__auto___36615 = (0);
while(true){
if((i__26127__auto___36615 < len__26126__auto___36614)){
args36606.push((arguments[i__26127__auto___36615]));

var G__36616 = (i__26127__auto___36615 + (1));
i__26127__auto___36615 = G__36616;
continue;
} else {
}
break;
}

var G__36613 = args36606.length;
switch (G__36613) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36606.slice((4)),(0),null));
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

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq36607){
var G__36608 = cljs.core.first.call(null,seq36607);
var seq36607__$1 = cljs.core.next.call(null,seq36607);
var G__36609 = cljs.core.first.call(null,seq36607__$1);
var seq36607__$2 = cljs.core.next.call(null,seq36607__$1);
var G__36610 = cljs.core.first.call(null,seq36607__$2);
var seq36607__$3 = cljs.core.next.call(null,seq36607__$2);
var G__36611 = cljs.core.first.call(null,seq36607__$3);
var seq36607__$4 = cljs.core.next.call(null,seq36607__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__36608,G__36609,G__36610,G__36611,seq36607__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args36618 = [];
var len__26126__auto___36626 = arguments.length;
var i__26127__auto___36627 = (0);
while(true){
if((i__26127__auto___36627 < len__26126__auto___36626)){
args36618.push((arguments[i__26127__auto___36627]));

var G__36628 = (i__26127__auto___36627 + (1));
i__26127__auto___36627 = G__36628;
continue;
} else {
}
break;
}

var G__36625 = args36618.length;
switch (G__36625) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36618.slice((4)),(0),null));
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

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq36619){
var G__36620 = cljs.core.first.call(null,seq36619);
var seq36619__$1 = cljs.core.next.call(null,seq36619);
var G__36621 = cljs.core.first.call(null,seq36619__$1);
var seq36619__$2 = cljs.core.next.call(null,seq36619__$1);
var G__36622 = cljs.core.first.call(null,seq36619__$2);
var seq36619__$3 = cljs.core.next.call(null,seq36619__$2);
var G__36623 = cljs.core.first.call(null,seq36619__$3);
var seq36619__$4 = cljs.core.next.call(null,seq36619__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__36620,G__36621,G__36622,G__36623,seq36619__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args36630 = [];
var len__26126__auto___36638 = arguments.length;
var i__26127__auto___36639 = (0);
while(true){
if((i__26127__auto___36639 < len__26126__auto___36638)){
args36630.push((arguments[i__26127__auto___36639]));

var G__36640 = (i__26127__auto___36639 + (1));
i__26127__auto___36639 = G__36640;
continue;
} else {
}
break;
}

var G__36637 = args36630.length;
switch (G__36637) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36630.slice((4)),(0),null));
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

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq36631){
var G__36632 = cljs.core.first.call(null,seq36631);
var seq36631__$1 = cljs.core.next.call(null,seq36631);
var G__36633 = cljs.core.first.call(null,seq36631__$1);
var seq36631__$2 = cljs.core.next.call(null,seq36631__$1);
var G__36634 = cljs.core.first.call(null,seq36631__$2);
var seq36631__$3 = cljs.core.next.call(null,seq36631__$2);
var G__36635 = cljs.core.first.call(null,seq36631__$3);
var seq36631__$4 = cljs.core.next.call(null,seq36631__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__36632,G__36633,G__36634,G__36635,seq36631__$4);
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
var args36644 = [];
var len__26126__auto___36652 = arguments.length;
var i__26127__auto___36653 = (0);
while(true){
if((i__26127__auto___36653 < len__26126__auto___36652)){
args36644.push((arguments[i__26127__auto___36653]));

var G__36654 = (i__26127__auto___36653 + (1));
i__26127__auto___36653 = G__36654;
continue;
} else {
}
break;
}

var G__36651 = args36644.length;
switch (G__36651) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36644.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36642__auto__","x__36642__auto__",712199464,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__36643__auto__","y__36643__auto__",1434290317,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36642__auto__","x__36642__auto__",712199464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__36643__auto__","y__36643__auto__",1434290317,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36642__auto__","x__36642__auto__",712199464,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__36643__auto__","y__36643__auto__",1434290317,null)))));
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

cljs.core$macros.max.cljs$lang$applyTo = (function (seq36645){
var G__36646 = cljs.core.first.call(null,seq36645);
var seq36645__$1 = cljs.core.next.call(null,seq36645);
var G__36647 = cljs.core.first.call(null,seq36645__$1);
var seq36645__$2 = cljs.core.next.call(null,seq36645__$1);
var G__36648 = cljs.core.first.call(null,seq36645__$2);
var seq36645__$3 = cljs.core.next.call(null,seq36645__$2);
var G__36649 = cljs.core.first.call(null,seq36645__$3);
var seq36645__$4 = cljs.core.next.call(null,seq36645__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__36646,G__36647,G__36648,G__36649,seq36645__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args36658 = [];
var len__26126__auto___36666 = arguments.length;
var i__26127__auto___36667 = (0);
while(true){
if((i__26127__auto___36667 < len__26126__auto___36666)){
args36658.push((arguments[i__26127__auto___36667]));

var G__36668 = (i__26127__auto___36667 + (1));
i__26127__auto___36667 = G__36668;
continue;
} else {
}
break;
}

var G__36665 = args36658.length;
switch (G__36665) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36658.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__26145__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36656__auto__","x__36656__auto__",-1625646109,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__36657__auto__","y__36657__auto__",-582982755,null)),(function (){var x__25885__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36656__auto__","x__36656__auto__",-1625646109,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__36657__auto__","y__36657__auto__",-582982755,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36656__auto__","x__36656__auto__",-1625646109,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__36657__auto__","y__36657__auto__",-582982755,null)))));
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

cljs.core$macros.min.cljs$lang$applyTo = (function (seq36659){
var G__36660 = cljs.core.first.call(null,seq36659);
var seq36659__$1 = cljs.core.next.call(null,seq36659);
var G__36661 = cljs.core.first.call(null,seq36659__$1);
var seq36659__$2 = cljs.core.next.call(null,seq36659__$1);
var G__36662 = cljs.core.first.call(null,seq36659__$2);
var seq36659__$3 = cljs.core.next.call(null,seq36659__$2);
var G__36663 = cljs.core.first.call(null,seq36659__$3);
var seq36659__$4 = cljs.core.next.call(null,seq36659__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__36660,G__36661,G__36662,G__36663,seq36659__$4);
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
var args36670 = [];
var len__26126__auto___36678 = arguments.length;
var i__26127__auto___36679 = (0);
while(true){
if((i__26127__auto___36679 < len__26126__auto___36678)){
args36670.push((arguments[i__26127__auto___36679]));

var G__36680 = (i__26127__auto___36679 + (1));
i__26127__auto___36679 = G__36680;
continue;
} else {
}
break;
}

var G__36677 = args36670.length;
switch (G__36677) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36670.slice((4)),(0),null));
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

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq36671){
var G__36672 = cljs.core.first.call(null,seq36671);
var seq36671__$1 = cljs.core.next.call(null,seq36671);
var G__36673 = cljs.core.first.call(null,seq36671__$1);
var seq36671__$2 = cljs.core.next.call(null,seq36671__$1);
var G__36674 = cljs.core.first.call(null,seq36671__$2);
var seq36671__$3 = cljs.core.next.call(null,seq36671__$2);
var G__36675 = cljs.core.first.call(null,seq36671__$3);
var seq36671__$4 = cljs.core.next.call(null,seq36671__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__36672,G__36673,G__36674,G__36675,seq36671__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args36682 = [];
var len__26126__auto___36690 = arguments.length;
var i__26127__auto___36691 = (0);
while(true){
if((i__26127__auto___36691 < len__26126__auto___36690)){
args36682.push((arguments[i__26127__auto___36691]));

var G__36692 = (i__26127__auto___36691 + (1));
i__26127__auto___36691 = G__36692;
continue;
} else {
}
break;
}

var G__36689 = args36682.length;
switch (G__36689) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36682.slice((4)),(0),null));
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

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq36683){
var G__36684 = cljs.core.first.call(null,seq36683);
var seq36683__$1 = cljs.core.next.call(null,seq36683);
var G__36685 = cljs.core.first.call(null,seq36683__$1);
var seq36683__$2 = cljs.core.next.call(null,seq36683__$1);
var G__36686 = cljs.core.first.call(null,seq36683__$2);
var seq36683__$3 = cljs.core.next.call(null,seq36683__$2);
var G__36687 = cljs.core.first.call(null,seq36683__$3);
var seq36683__$4 = cljs.core.next.call(null,seq36683__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__36684,G__36685,G__36686,G__36687,seq36683__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args36694 = [];
var len__26126__auto___36702 = arguments.length;
var i__26127__auto___36703 = (0);
while(true){
if((i__26127__auto___36703 < len__26126__auto___36702)){
args36694.push((arguments[i__26127__auto___36703]));

var G__36704 = (i__26127__auto___36703 + (1));
i__26127__auto___36703 = G__36704;
continue;
} else {
}
break;
}

var G__36701 = args36694.length;
switch (G__36701) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36694.slice((4)),(0),null));
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

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq36695){
var G__36696 = cljs.core.first.call(null,seq36695);
var seq36695__$1 = cljs.core.next.call(null,seq36695);
var G__36697 = cljs.core.first.call(null,seq36695__$1);
var seq36695__$2 = cljs.core.next.call(null,seq36695__$1);
var G__36698 = cljs.core.first.call(null,seq36695__$2);
var seq36695__$3 = cljs.core.next.call(null,seq36695__$2);
var G__36699 = cljs.core.first.call(null,seq36695__$3);
var seq36695__$4 = cljs.core.next.call(null,seq36695__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__36696,G__36697,G__36698,G__36699,seq36695__$4);
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
var args36706 = [];
var len__26126__auto___36714 = arguments.length;
var i__26127__auto___36715 = (0);
while(true){
if((i__26127__auto___36715 < len__26126__auto___36714)){
args36706.push((arguments[i__26127__auto___36715]));

var G__36716 = (i__26127__auto___36715 + (1));
i__26127__auto___36715 = G__36716;
continue;
} else {
}
break;
}

var G__36713 = args36706.length;
switch (G__36713) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36706.slice((4)),(0),null));
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

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq36707){
var G__36708 = cljs.core.first.call(null,seq36707);
var seq36707__$1 = cljs.core.next.call(null,seq36707);
var G__36709 = cljs.core.first.call(null,seq36707__$1);
var seq36707__$2 = cljs.core.next.call(null,seq36707__$1);
var G__36710 = cljs.core.first.call(null,seq36707__$2);
var seq36707__$3 = cljs.core.next.call(null,seq36707__$2);
var G__36711 = cljs.core.first.call(null,seq36707__$3);
var seq36707__$4 = cljs.core.next.call(null,seq36707__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__36708,G__36709,G__36710,G__36711,seq36707__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args36718 = [];
var len__26126__auto___36726 = arguments.length;
var i__26127__auto___36727 = (0);
while(true){
if((i__26127__auto___36727 < len__26126__auto___36726)){
args36718.push((arguments[i__26127__auto___36727]));

var G__36728 = (i__26127__auto___36727 + (1));
i__26127__auto___36727 = G__36728;
continue;
} else {
}
break;
}

var G__36725 = args36718.length;
switch (G__36725) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args36718.slice((4)),(0),null));
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

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq36719){
var G__36720 = cljs.core.first.call(null,seq36719);
var seq36719__$1 = cljs.core.next.call(null,seq36719);
var G__36721 = cljs.core.first.call(null,seq36719__$1);
var seq36719__$2 = cljs.core.next.call(null,seq36719__$1);
var G__36722 = cljs.core.first.call(null,seq36719__$2);
var seq36719__$3 = cljs.core.next.call(null,seq36719__$2);
var G__36723 = cljs.core.first.call(null,seq36719__$3);
var seq36719__$4 = cljs.core.next.call(null,seq36719__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__36720,G__36721,G__36722,G__36723,seq36719__$4);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__36730__auto__","h__36730__auto__",539251446,null)),(function (){var x__25885__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__36730__auto__","h__36730__auto__",539251446,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__36730__auto__","h__36730__auto__",539251446,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__36730__auto__","h__36730__auto__",539251446,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__36730__auto__","h__36730__auto__",539251446,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__36730__auto__","h__36730__auto__",539251446,null)))));
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36731__auto__","x__36731__auto__",1468275210,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36731__auto__","x__36731__auto__",1468275210,null)))));
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
var len__26126__auto___36739 = arguments.length;
var i__26127__auto___36740 = (0);
while(true){
if((i__26127__auto___36740 < len__26126__auto___36739)){
args__26133__auto__.push((arguments[i__26127__auto___36740]));

var G__36741 = (i__26127__auto___36740 + (1));
i__26127__auto___36740 = G__36741;
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

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq36732){
var G__36733 = cljs.core.first.call(null,seq36732);
var seq36732__$1 = cljs.core.next.call(null,seq36732);
var G__36734 = cljs.core.first.call(null,seq36732__$1);
var seq36732__$2 = cljs.core.next.call(null,seq36732__$1);
var G__36735 = cljs.core.first.call(null,seq36732__$2);
var seq36732__$3 = cljs.core.next.call(null,seq36732__$2);
var G__36736 = cljs.core.first.call(null,seq36732__$3);
var seq36732__$4 = cljs.core.next.call(null,seq36732__$3);
var G__36737 = cljs.core.first.call(null,seq36732__$4);
var seq36732__$5 = cljs.core.next.call(null,seq36732__$4);
var G__36738 = cljs.core.first.call(null,seq36732__$5);
var seq36732__$6 = cljs.core.next.call(null,seq36732__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__36733,G__36734,G__36735,G__36736,G__36737,G__36738,seq36732__$6);
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
})(),(function (){var x__25885__auto__ = clojure.walk.postwalk.call(null,(function (p1__36742_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__36742_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__36742_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__36742_SHARP_));
} else {
return p1__36742_SHARP_;
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
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__36743,fkv){
var vec__36747 = p__36743;
var f1 = cljs.core.nth.call(null,vec__36747,(0),null);
var k = cljs.core.nth.call(null,vec__36747,(1),null);
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
var len__26126__auto___36753 = arguments.length;
var i__26127__auto___36754 = (0);
while(true){
if((i__26127__auto___36754 < len__26126__auto___36753)){
args__26133__auto__.push((arguments[i__26127__auto___36754]));

var G__36755 = (i__26127__auto___36754 + (1));
i__26127__auto___36754 = G__36755;
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

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq36750){
var G__36751 = cljs.core.first.call(null,seq36750);
var seq36750__$1 = cljs.core.next.call(null,seq36750);
var G__36752 = cljs.core.first.call(null,seq36750__$1);
var seq36750__$2 = cljs.core.next.call(null,seq36750__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__36751,G__36752,seq36750__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36760 = arguments.length;
var i__26127__auto___36761 = (0);
while(true){
if((i__26127__auto___36761 < len__26126__auto___36760)){
args__26133__auto__.push((arguments[i__26127__auto___36761]));

var G__36762 = (i__26127__auto___36761 + (1));
i__26127__auto___36761 = G__36762;
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

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq36756){
var G__36757 = cljs.core.first.call(null,seq36756);
var seq36756__$1 = cljs.core.next.call(null,seq36756);
var G__36758 = cljs.core.first.call(null,seq36756__$1);
var seq36756__$2 = cljs.core.next.call(null,seq36756__$1);
var G__36759 = cljs.core.first.call(null,seq36756__$2);
var seq36756__$3 = cljs.core.next.call(null,seq36756__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36757,G__36758,G__36759,seq36756__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__26133__auto__ = [];
var len__26126__auto___36767 = arguments.length;
var i__26127__auto___36768 = (0);
while(true){
if((i__26127__auto___36768 < len__26126__auto___36767)){
args__26133__auto__.push((arguments[i__26127__auto___36768]));

var G__36769 = (i__26127__auto___36768 + (1));
i__26127__auto___36768 = G__36769;
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

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq36763){
var G__36764 = cljs.core.first.call(null,seq36763);
var seq36763__$1 = cljs.core.next.call(null,seq36763);
var G__36765 = cljs.core.first.call(null,seq36763__$1);
var seq36763__$2 = cljs.core.next.call(null,seq36763__$1);
var G__36766 = cljs.core.first.call(null,seq36763__$2);
var seq36763__$3 = cljs.core.next.call(null,seq36763__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__36764,G__36765,G__36766,seq36763__$3);
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
var len__26126__auto___36774 = arguments.length;
var i__26127__auto___36775 = (0);
while(true){
if((i__26127__auto___36775 < len__26126__auto___36774)){
args__26133__auto__.push((arguments[i__26127__auto___36775]));

var G__36776 = (i__26127__auto___36775 + (1));
i__26127__auto___36775 = G__36776;
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

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq36770){
var G__36771 = cljs.core.first.call(null,seq36770);
var seq36770__$1 = cljs.core.next.call(null,seq36770);
var G__36772 = cljs.core.first.call(null,seq36770__$1);
var seq36770__$2 = cljs.core.next.call(null,seq36770__$1);
var G__36773 = cljs.core.first.call(null,seq36770__$2);
var seq36770__$3 = cljs.core.next.call(null,seq36770__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__36771,G__36772,G__36773,seq36770__$3);
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
var G__36777 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__36778 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__36777;
s = G__36778;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__36779){
var vec__36787 = p__36779;
var p = cljs.core.nth.call(null,vec__36787,(0),null);
var sigs = cljs.core.nth.call(null,vec__36787,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__36787,p,sigs){
return (function (p__36790){
var vec__36791 = p__36790;
var seq__36792 = cljs.core.seq.call(null,vec__36791);
var first__36793 = cljs.core.first.call(null,seq__36792);
var seq__36792__$1 = cljs.core.next.call(null,seq__36792);
var f = first__36793;
var meths = seq__36792__$1;
var form = vec__36791;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(psym,pfn_prefix,vec__36787,p,sigs))
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
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__36794){
var vec__36801 = p__36794;
var seq__36802 = cljs.core.seq.call(null,vec__36801);
var first__36803 = cljs.core.first.call(null,seq__36802);
var seq__36802__$1 = cljs.core.next.call(null,seq__36802);
var vec__36804 = first__36803;
var seq__36805 = cljs.core.seq.call(null,vec__36804);
var first__36806 = cljs.core.first.call(null,seq__36805);
var seq__36805__$1 = cljs.core.next.call(null,seq__36805);
var this$ = first__36806;
var args = seq__36805__$1;
var sig = vec__36804;
var body = seq__36802__$1;
var x__25885__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto____$1);
})(),x__25885__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__36807){
var vec__36814 = p__36807;
var seq__36815 = cljs.core.seq.call(null,vec__36814);
var first__36816 = cljs.core.first.call(null,seq__36815);
var seq__36815__$1 = cljs.core.next.call(null,seq__36815);
var vec__36817 = first__36816;
var seq__36818 = cljs.core.seq.call(null,vec__36817);
var first__36819 = cljs.core.first.call(null,seq__36818);
var seq__36818__$1 = cljs.core.next.call(null,seq__36818);
var this$ = first__36819;
var args = seq__36818__$1;
var sig = vec__36817;
var body = seq__36815__$1;
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
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__36820){
var vec__36827 = p__36820;
var seq__36828 = cljs.core.seq.call(null,vec__36827);
var first__36829 = cljs.core.first.call(null,seq__36828);
var seq__36828__$1 = cljs.core.next.call(null,seq__36828);
var vec__36830 = first__36829;
var seq__36831 = cljs.core.seq.call(null,vec__36830);
var first__36832 = cljs.core.first.call(null,seq__36831);
var seq__36831__$1 = cljs.core.next.call(null,seq__36831);
var this$ = first__36832;
var args = seq__36831__$1;
var sig = vec__36830;
var body = seq__36828__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25885__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__36833){
var vec__36840 = p__36833;
var seq__36841 = cljs.core.seq.call(null,vec__36840);
var first__36842 = cljs.core.first.call(null,seq__36841);
var seq__36841__$1 = cljs.core.next.call(null,seq__36841);
var vec__36843 = first__36842;
var seq__36844 = cljs.core.seq.call(null,vec__36843);
var first__36845 = cljs.core.first.call(null,seq__36844);
var seq__36844__$1 = cljs.core.next.call(null,seq__36844);
var this$ = first__36845;
var args = seq__36844__$1;
var sig = vec__36843;
var body = seq__36841__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__25885__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__36854){
var vec__36855 = p__36854;
var seq__36856 = cljs.core.seq.call(null,vec__36855);
var first__36857 = cljs.core.first.call(null,seq__36856);
var seq__36856__$1 = cljs.core.next.call(null,seq__36856);
var f = first__36857;
var meths = seq__36856__$1;
var form = vec__36855;
var vec__36858 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__36858,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__36858,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__36858,f__$1,meths__$1,vec__36855,seq__36856,first__36857,seq__36856__$1,f,meths,form){
return (function (p1__36846_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__36846_SHARP_);
});})(vec__36858,f__$1,meths__$1,vec__36855,seq__36856,first__36857,seq__36856__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__36862){
var vec__36866 = p__36862;
var seq__36867 = cljs.core.seq.call(null,vec__36866);
var first__36868 = cljs.core.first.call(null,seq__36867);
var seq__36867__$1 = cljs.core.next.call(null,seq__36867);
var f = first__36868;
var meths = seq__36867__$1;
var form = vec__36866;
return cljs.core.map.call(null,((function (vec__36866,seq__36867,first__36868,seq__36867__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__36866,seq__36867,first__36868,seq__36867__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__36866,seq__36867,first__36868,seq__36867__$1,f,meths,form){
return (function (p1__36861_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__36861_SHARP_);
});})(vec__36866,seq__36867,first__36868,seq__36867__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__36870){
var vec__36874 = p__36870;
var seq__36875 = cljs.core.seq.call(null,vec__36874);
var first__36876 = cljs.core.first.call(null,seq__36875);
var seq__36875__$1 = cljs.core.next.call(null,seq__36875);
var f = first__36876;
var meths = seq__36875__$1;
var form = vec__36874;
var meths__$1 = cljs.core.map.call(null,((function (vec__36874,seq__36875,first__36876,seq__36875__$1,f,meths,form){
return (function (p1__36869_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__36869_SHARP_);
});})(vec__36874,seq__36875,first__36876,seq__36875__$1,f,meths,form))
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
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__36877){
var vec__36885 = p__36877;
var seq__36886 = cljs.core.seq.call(null,vec__36885);
var first__36887 = cljs.core.first.call(null,seq__36886);
var seq__36886__$1 = cljs.core.next.call(null,seq__36886);
var f = first__36887;
var meths = seq__36886__$1;
var form = vec__36885;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__36885,seq__36886,first__36887,seq__36886__$1,f,meths,form){
return (function (p__36888){
var vec__36889 = p__36888;
var seq__36890 = cljs.core.seq.call(null,vec__36889);
var first__36891 = cljs.core.first.call(null,seq__36890);
var seq__36890__$1 = cljs.core.next.call(null,seq__36890);
var sig = first__36891;
var body = seq__36890__$1;
var meth = vec__36889;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(pf,vec__36885,seq__36886,first__36887,seq__36886__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__36892){
var vec__36896 = p__36892;
var p = cljs.core.nth.call(null,vec__36896,(0),null);
var sigs = cljs.core.nth.call(null,vec__36896,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__25885__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__36896,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__36896,p,sigs))
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
var vec__36902 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__36902,(0),null);
var sigs = cljs.core.nth.call(null,vec__36902,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_36905 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_36905))){
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

var G__36906 = cljs.core.next.call(null,sigs__$1);
var G__36907 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__36906;
seen = G__36907;
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

var seen_36914 = cljs.core.PersistentHashSet.EMPTY;
var methods_36915__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_36915__$1)){
var vec__36911_36916 = cljs.core.first.call(null,methods_36915__$1);
var fname_36917 = cljs.core.nth.call(null,vec__36911_36916,(0),null);
var method_36918 = vec__36911_36916;
if(cljs.core.contains_QMARK_.call(null,seen_36914,fname_36917)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_36917], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_36918);

var G__36919 = cljs.core.conj.call(null,seen_36914,fname_36917);
var G__36920 = cljs.core.next.call(null,methods_36915__$1);
seen_36914 = G__36919;
methods_36915__$1 = G__36920;
continue;
} else {
}
break;
}

var G__36921 = cljs.core.conj.call(null,protos,proto);
var G__36922 = impls__$2;
protos = G__36921;
impls__$1 = G__36922;
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
var len__26126__auto___36931 = arguments.length;
var i__26127__auto___36932 = (0);
while(true){
if((i__26127__auto___36932 < len__26126__auto___36931)){
args__26133__auto__.push((arguments[i__26127__auto___36932]));

var G__36933 = (i__26127__auto___36932 + (1));
i__26127__auto___36932 = G__36933;
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
var vec__36928 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__36928,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__36928,(1),null);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__36928,type,assign_impls){
return (function (p1__36923_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__36923_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__36928,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq36924){
var G__36925 = cljs.core.first.call(null,seq36924);
var seq36924__$1 = cljs.core.next.call(null,seq36924);
var G__36926 = cljs.core.first.call(null,seq36924__$1);
var seq36924__$2 = cljs.core.next.call(null,seq36924__$1);
var G__36927 = cljs.core.first.call(null,seq36924__$2);
var seq36924__$3 = cljs.core.next.call(null,seq36924__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__36925,G__36926,G__36927,seq36924__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__36935){
var vec__36939 = p__36935;
var f = cljs.core.nth.call(null,vec__36939,(0),null);
var sigs = cljs.core.nth.call(null,vec__36939,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__36939,f,sigs){
return (function (p1__36934_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__36934_SHARP_),cljs.core.nnext.call(null,p1__36934_SHARP_));
});})(vec__36939,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args36942 = [];
var len__26126__auto___36945 = arguments.length;
var i__26127__auto___36946 = (0);
while(true){
if((i__26127__auto___36946 < len__26126__auto___36945)){
args36942.push((arguments[i__26127__auto___36946]));

var G__36947 = (i__26127__auto___36946 + (1));
i__26127__auto___36946 = G__36947;
continue;
} else {
}
break;
}

var G__36944 = args36942.length;
switch (G__36944) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36942.length)].join('')));

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
var G__36949 = ret__$1;
var G__36950 = specs__$2;
ret = G__36949;
specs__$1 = G__36950;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__36951_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__36951_SHARP_));
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
var len__26126__auto___36963 = arguments.length;
var i__26127__auto___36964 = (0);
while(true){
if((i__26127__auto___36964 < len__26126__auto___36963)){
args__26133__auto__.push((arguments[i__26127__auto___36964]));

var G__36965 = (i__26127__auto___36964 + (1));
i__26127__auto___36964 = G__36965;
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
var vec__36960 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__36960,(0),null);
var pmasks = cljs.core.nth.call(null,vec__36960,(1),null);
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36952__auto__","this__36952__auto__",-1712875985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36953__auto__","writer__36953__auto__",1330450609,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__36954__auto__","opt__36954__auto__",615566496,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36953__auto__","writer__36953__auto__",1330450609,null)),(function (){var x__25885__auto__ = [cljs.core.str(r)].join('');
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

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq36955){
var G__36956 = cljs.core.first.call(null,seq36955);
var seq36955__$1 = cljs.core.next.call(null,seq36955);
var G__36957 = cljs.core.first.call(null,seq36955__$1);
var seq36955__$2 = cljs.core.next.call(null,seq36955__$1);
var G__36958 = cljs.core.first.call(null,seq36955__$2);
var seq36955__$3 = cljs.core.next.call(null,seq36955__$2);
var G__36959 = cljs.core.first.call(null,seq36955__$3);
var seq36955__$4 = cljs.core.next.call(null,seq36955__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__36956,G__36957,G__36958,G__36959,seq36955__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__36966_SHARP_){
return cljs.core.with_meta.call(null,p1__36966_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36967__auto__","this__36967__auto__",2060100953,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36968__auto__","this__36968__auto__",1728878645,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36968__auto__","this__36968__auto__",1728878645,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36969__auto__","this__36969__auto__",173077146,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__36970__auto__","other__36970__auto__",-939342176,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__36970__auto__","other__36970__auto__",-939342176,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36969__auto__","this__36969__auto__",173077146,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__36970__auto__","other__36970__auto__",-939342176,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36969__auto__","this__36969__auto__",173077146,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__36970__auto__","other__36970__auto__",-939342176,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36971__auto__","this__36971__auto__",-1982190926,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36972__auto__","this__36972__auto__",-1542497297,null)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36973__auto__","this__36973__auto__",-1681260382,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36974__auto__","k__36974__auto__",-159174034,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36973__auto__","this__36973__auto__",-1681260382,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36974__auto__","k__36974__auto__",-159174034,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36975__auto__","this__36975__auto__",1880249527,null)),(function (){var x__25885__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__36976__auto__","else__36976__auto__",45349432,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__25885__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__25885__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__36976__auto__","else__36976__auto__",45349432,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36977__auto__","this__36977__auto__",945009684,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__25885__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36978__auto__","this__36978__auto__",215847651,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__36979__auto__","entry__36979__auto__",1716195681,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__36979__auto__","entry__36979__auto__",1716195681,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36978__auto__","this__36978__auto__",215847651,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__36979__auto__","entry__36979__auto__",1716195681,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__36979__auto__","entry__36979__auto__",1716195681,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36978__auto__","this__36978__auto__",215847651,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__36979__auto__","entry__36979__auto__",1716195681,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36980__auto__","this__36980__auto__",1062846827,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36981__auto__","k__36981__auto__",-271738235,null)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36981__auto__","k__36981__auto__",-271738235,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36981__auto__","k__36981__auto__",-271738235,null)),(function (){var x__25885__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36982__auto__","this__36982__auto__",-356142417,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36983__auto__","k__36983__auto__",1467410416,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36983__auto__","k__36983__auto__",1467410416,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36982__auto__","this__36982__auto__",-356142417,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36983__auto__","k__36983__auto__",1467410416,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__36983__auto__","k__36983__auto__",1467410416,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36985__auto__","this__36985__auto__",-1266513341,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__36984_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.keyword.call(null,p1__36984_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = p1__36984_SHARP_;
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
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36987__auto__","this__36987__auto__",70921736,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36988__auto__","writer__36988__auto__",-391191647,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__36989__auto__","opts__36989__auto__",-2115589049,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__36990__auto__","pr-pair__36990__auto__",-963967388,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__36991__auto__","keyval__36991__auto__",700351891,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36988__auto__","writer__36988__auto__",-391191647,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__36989__auto__","opts__36989__auto__",-2115589049,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__36991__auto__","keyval__36991__auto__",700351891,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36988__auto__","writer__36988__auto__",-391191647,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__36990__auto__","pr-pair__36990__auto__",-963967388,null)),(function (){var x__25885__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__36989__auto__","opts__36989__auto__",-2115589049,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__36986_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = cljs.core.keyword.call(null,p1__36986_SHARP_);
return cljs.core._conj.call(null,(function (){var x__25885__auto____$1 = p1__36986_SHARP_;
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
var vec__36995 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__36995,(0),null);
var pmasks = cljs.core.nth.call(null,vec__36995,(1),null);
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
var len__26126__auto___37005 = arguments.length;
var i__26127__auto___37006 = (0);
while(true){
if((i__26127__auto___37006 < len__26126__auto___37005)){
args__26133__auto__.push((arguments[i__26127__auto___37006]));

var G__37007 = (i__26127__auto___37006 + (1));
i__26127__auto___37006 = G__37007;
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36998__auto__","this__36998__auto__",769054831,null))))));
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__36998__auto__","this__36998__auto__",769054831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36999__auto__","writer__36999__auto__",2046303672,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__36999__auto__","writer__36999__auto__",2046303672,null)),(function (){var x__25885__auto__ = [cljs.core.str(r)].join('');
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

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq37000){
var G__37001 = cljs.core.first.call(null,seq37000);
var seq37000__$1 = cljs.core.next.call(null,seq37000);
var G__37002 = cljs.core.first.call(null,seq37000__$1);
var seq37000__$2 = cljs.core.next.call(null,seq37000__$1);
var G__37003 = cljs.core.first.call(null,seq37000__$2);
var seq37000__$3 = cljs.core.next.call(null,seq37000__$2);
var G__37004 = cljs.core.first.call(null,seq37000__$3);
var seq37000__$4 = cljs.core.next.call(null,seq37000__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__37001,G__37002,G__37003,G__37004,seq37000__$4);
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
var len__26126__auto___37035 = arguments.length;
var i__26127__auto___37036 = (0);
while(true){
if((i__26127__auto___37036 < len__26126__auto___37035)){
args__26133__auto__.push((arguments[i__26127__auto___37036]));

var G__37037 = (i__26127__auto___37036 + (1));
i__26127__auto___37036 = G__37037;
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
var vec__37014 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__37014,(0),null);
var methods$ = cljs.core.nth.call(null,vec__37014,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__37014,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__37014,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__37017 = cljs.core.seq.call(null,methods$);
var chunk__37018 = null;
var count__37019 = (0);
var i__37020 = (0);
while(true){
if((i__37020 < count__37019)){
var vec__37021 = cljs.core._nth.call(null,chunk__37018,i__37020);
var seq__37022 = cljs.core.seq.call(null,vec__37021);
var first__37023 = cljs.core.first.call(null,seq__37022);
var seq__37022__$1 = cljs.core.next.call(null,seq__37022);
var mname = first__37023;
var arities = seq__37022__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__37038 = seq__37017;
var G__37039 = chunk__37018;
var G__37040 = count__37019;
var G__37041 = (i__37020 + (1));
seq__37017 = G__37038;
chunk__37018 = G__37039;
count__37019 = G__37040;
i__37020 = G__37041;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37017);
if(temp__4657__auto__){
var seq__37017__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37017__$1)){
var c__25862__auto__ = cljs.core.chunk_first.call(null,seq__37017__$1);
var G__37042 = cljs.core.chunk_rest.call(null,seq__37017__$1);
var G__37043 = c__25862__auto__;
var G__37044 = cljs.core.count.call(null,c__25862__auto__);
var G__37045 = (0);
seq__37017 = G__37042;
chunk__37018 = G__37043;
count__37019 = G__37044;
i__37020 = G__37045;
continue;
} else {
var vec__37024 = cljs.core.first.call(null,seq__37017__$1);
var seq__37025 = cljs.core.seq.call(null,vec__37024);
var first__37026 = cljs.core.first.call(null,seq__37025);
var seq__37025__$1 = cljs.core.next.call(null,seq__37025);
var mname = first__37026;
var arities = seq__37025__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__37046 = cljs.core.next.call(null,seq__37017__$1);
var G__37047 = null;
var G__37048 = (0);
var G__37049 = (0);
seq__37017 = G__37046;
chunk__37018 = G__37047;
count__37019 = G__37048;
i__37020 = G__37049;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37008__auto__","x__37008__auto__",-1747338546,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__25885__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37009__auto__","m__37009__auto__",1170208094,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37008__auto__","x__37008__auto__",-1747338546,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37009__auto__","m__37009__auto__",1170208094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37009__auto__","m__37009__auto__",1170208094,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37009__auto__","m__37009__auto__",1170208094,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37009__auto__","m__37009__auto__",1170208094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__37009__auto__","m__37009__auto__",1170208094,null)),sig)));
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
});})(p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__37027){
var vec__37028 = p__37027;
var seq__37029 = cljs.core.seq.call(null,vec__37028);
var first__37030 = cljs.core.first.call(null,seq__37029);
var seq__37029__$1 = cljs.core.next.call(null,seq__37029);
var fname = first__37030;
var sigs = seq__37029__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__37031){
var vec__37032 = p__37031;
var seq__37033 = cljs.core.seq.call(null,vec__37032);
var first__37034 = cljs.core.first.call(null,seq__37033);
var seq__37033__$1 = cljs.core.next.call(null,seq__37033);
var fname = first__37034;
var sigs = seq__37033__$1;
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
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__37032,seq__37033,first__37034,seq__37033__$1,fname,sigs,p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__37032,seq__37033,first__37034,seq__37033__$1,fname,sigs,p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__37014,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
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

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq37010){
var G__37011 = cljs.core.first.call(null,seq37010);
var seq37010__$1 = cljs.core.next.call(null,seq37010);
var G__37012 = cljs.core.first.call(null,seq37010__$1);
var seq37010__$2 = cljs.core.next.call(null,seq37010__$1);
var G__37013 = cljs.core.first.call(null,seq37010__$2);
var seq37010__$3 = cljs.core.next.call(null,seq37010__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__37011,G__37012,G__37013,seq37010__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__37053 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__37053,(0),null);
var bit = cljs.core.nth.call(null,vec__37053,(1),null);
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
var vec__37059 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__37059,(0),null);
var bit = cljs.core.nth.call(null,vec__37059,(1),null);
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
var len__26126__auto___37065 = arguments.length;
var i__26127__auto___37066 = (0);
while(true){
if((i__26127__auto___37066 < len__26126__auto___37065)){
args__26133__auto__.push((arguments[i__26127__auto___37066]));

var G__37067 = (i__26127__auto___37066 + (1));
i__26127__auto___37066 = G__37067;
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

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq37062){
var G__37063 = cljs.core.first.call(null,seq37062);
var seq37062__$1 = cljs.core.next.call(null,seq37062);
var G__37064 = cljs.core.first.call(null,seq37062__$1);
var seq37062__$2 = cljs.core.next.call(null,seq37062__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__37063,G__37064,seq37062__$2);
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
var len__26126__auto___37071 = arguments.length;
var i__26127__auto___37072 = (0);
while(true){
if((i__26127__auto___37072 < len__26126__auto___37071)){
args__26133__auto__.push((arguments[i__26127__auto___37072]));

var G__37073 = (i__26127__auto___37072 + (1));
i__26127__auto___37072 = G__37073;
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

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq37068){
var G__37069 = cljs.core.first.call(null,seq37068);
var seq37068__$1 = cljs.core.next.call(null,seq37068);
var G__37070 = cljs.core.first.call(null,seq37068__$1);
var seq37068__$2 = cljs.core.next.call(null,seq37068__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__37069,G__37070,seq37068__$2);
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
var len__26126__auto___37082 = arguments.length;
var i__26127__auto___37083 = (0);
while(true){
if((i__26127__auto___37083 < len__26126__auto___37082)){
args__26133__auto__.push((arguments[i__26127__auto___37083]));

var G__37084 = (i__26127__auto___37083 + (1));
i__26127__auto___37083 = G__37084;
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
return (function (p__37078){
var vec__37079 = p__37078;
var k = cljs.core.nth.call(null,vec__37079,(0),null);
var v = cljs.core.nth.call(null,vec__37079,(1),null);
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

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq37074){
var G__37075 = cljs.core.first.call(null,seq37074);
var seq37074__$1 = cljs.core.next.call(null,seq37074);
var G__37076 = cljs.core.first.call(null,seq37074__$1);
var seq37074__$2 = cljs.core.next.call(null,seq37074__$1);
var G__37077 = cljs.core.first.call(null,seq37074__$2);
var seq37074__$3 = cljs.core.next.call(null,seq37074__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__37075,G__37076,G__37077,seq37074__$3);
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
var len__26126__auto___37089 = arguments.length;
var i__26127__auto___37090 = (0);
while(true){
if((i__26127__auto___37090 < len__26126__auto___37089)){
args__26133__auto__.push((arguments[i__26127__auto___37090]));

var G__37091 = (i__26127__auto___37090 + (1));
i__26127__auto___37090 = G__37091;
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

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq37085){
var G__37086 = cljs.core.first.call(null,seq37085);
var seq37085__$1 = cljs.core.next.call(null,seq37085);
var G__37087 = cljs.core.first.call(null,seq37085__$1);
var seq37085__$2 = cljs.core.next.call(null,seq37085__$1);
var G__37088 = cljs.core.first.call(null,seq37085__$2);
var seq37085__$3 = cljs.core.next.call(null,seq37085__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__37086,G__37087,G__37088,seq37085__$3);
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
var len__26126__auto___37110 = arguments.length;
var i__26127__auto___37111 = (0);
while(true){
if((i__26127__auto___37111 < len__26126__auto___37110)){
args__26133__auto__.push((arguments[i__26127__auto___37111]));

var G__37112 = (i__26127__auto___37111 + (1));
i__26127__auto___37111 = G__37112;
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
var vec__37104 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__37107 = cljs.core.nth.call(null,vec__37104,(0),null);
var a = cljs.core.nth.call(null,vec__37107,(0),null);
var b = cljs.core.nth.call(null,vec__37107,(1),null);
var c = cljs.core.nth.call(null,vec__37107,(2),null);
var clause = vec__37107;
var more = cljs.core.nth.call(null,vec__37104,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__37092__auto__","p__37092__auto__",1215011035,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = pred__$1;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__37092__auto__","p__37092__auto__",1215011035,null)))));
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

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq37093){
var G__37094 = cljs.core.first.call(null,seq37093);
var seq37093__$1 = cljs.core.next.call(null,seq37093);
var G__37095 = cljs.core.first.call(null,seq37093__$1);
var seq37093__$2 = cljs.core.next.call(null,seq37093__$1);
var G__37096 = cljs.core.first.call(null,seq37093__$2);
var seq37093__$3 = cljs.core.next.call(null,seq37093__$2);
var G__37097 = cljs.core.first.call(null,seq37093__$3);
var seq37093__$4 = cljs.core.next.call(null,seq37093__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__37094,G__37095,G__37096,G__37097,seq37093__$4);
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
var len__26126__auto___37133 = arguments.length;
var i__26127__auto___37134 = (0);
while(true){
if((i__26127__auto___37134 < len__26126__auto___37133)){
args__26133__auto__.push((arguments[i__26127__auto___37134]));

var G__37135 = (i__26127__auto___37134 + (1));
i__26127__auto___37134 = G__37135;
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
return (function (m,p__37121){
var vec__37122 = p__37121;
var test = cljs.core.nth.call(null,vec__37122,(0),null);
var expr = cljs.core.nth.call(null,vec__37122,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__37122,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__25885__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__37122,test,expr,default$,env))
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
return (function (p1__37113_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__37113_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__37114_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__37114_SHARP_)){
return cljs.core.vec.call(null,p1__37114_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37114_SHARP_], null);
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
return (function (p1__37116_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__37116_SHARP_)){
return cljs.core.vec.call(null,p1__37116_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37116_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__37115_SHARP_){
return [cljs.core.str(p1__37115_SHARP_)].join('').substring((1));
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
return (function (p__37129){
var vec__37130 = p__37129;
var m = cljs.core.nth.call(null,vec__37130,(0),null);
var c = cljs.core.nth.call(null,vec__37130,(1),null);
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

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq37117){
var G__37118 = cljs.core.first.call(null,seq37117);
var seq37117__$1 = cljs.core.next.call(null,seq37117);
var G__37119 = cljs.core.first.call(null,seq37117__$1);
var seq37117__$2 = cljs.core.next.call(null,seq37117__$1);
var G__37120 = cljs.core.first.call(null,seq37117__$2);
var seq37117__$3 = cljs.core.next.call(null,seq37117__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__37118,G__37119,G__37120,seq37117__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args37136 = [];
var len__26126__auto___37139 = arguments.length;
var i__26127__auto___37140 = (0);
while(true){
if((i__26127__auto___37140 < len__26126__auto___37139)){
args37136.push((arguments[i__26127__auto___37140]));

var G__37141 = (i__26127__auto___37140 + (1));
i__26127__auto___37140 = G__37141;
continue;
} else {
}
break;
}

var G__37138 = args37136.length;
switch (G__37138) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args37136.length - (2)))].join('')));

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
return cljs.core.reduce.call(null,(function (groups,p__37229){
var vec__37230 = p__37229;
var k = cljs.core.nth.call(null,vec__37230,(0),null);
var v = cljs.core.nth.call(null,vec__37230,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__37310__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__37310 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__37311__i = 0, G__37311__a = new Array(arguments.length -  0);
while (G__37311__i < G__37311__a.length) {G__37311__a[G__37311__i] = arguments[G__37311__i + 0]; ++G__37311__i;}
  msg = new cljs.core.IndexedSeq(G__37311__a,0);
} 
return G__37310__delegate.call(this,msg);};
G__37310.cljs$lang$maxFixedArity = 0;
G__37310.cljs$lang$applyTo = (function (arglist__37312){
var msg = cljs.core.seq(arglist__37312);
return G__37310__delegate(msg);
});
G__37310.cljs$core$IFn$_invoke$arity$variadic = G__37310__delegate;
return G__37310;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__37233){
var vec__37272 = p__37233;
var seq__37273 = cljs.core.seq.call(null,vec__37272);
var first__37274 = cljs.core.first.call(null,seq__37273);
var seq__37273__$1 = cljs.core.next.call(null,seq__37273);
var vec__37275 = first__37274;
var seq__37276 = cljs.core.seq.call(null,vec__37275);
var first__37277 = cljs.core.first.call(null,seq__37276);
var seq__37276__$1 = cljs.core.next.call(null,seq__37276);
var bind = first__37277;
var first__37277__$1 = cljs.core.first.call(null,seq__37276__$1);
var seq__37276__$2 = cljs.core.next.call(null,seq__37276__$1);
var expr = first__37277__$1;
var mod_pairs = seq__37276__$2;
var vec__37278 = seq__37273__$1;
var vec__37281 = cljs.core.nth.call(null,vec__37278,(0),null);
var _ = cljs.core.nth.call(null,vec__37281,(0),null);
var next_expr = cljs.core.nth.call(null,vec__37281,(1),null);
var next_groups = vec__37278;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__37272,seq__37273,first__37274,seq__37273__$1,vec__37275,seq__37276,first__37277,seq__37276__$1,bind,first__37277__$1,seq__37276__$2,expr,mod_pairs,vec__37278,vec__37281,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__37284){
var vec__37291 = p__37284;
var seq__37292 = cljs.core.seq.call(null,vec__37291);
var first__37293 = cljs.core.first.call(null,seq__37292);
var seq__37292__$1 = cljs.core.next.call(null,seq__37292);
var vec__37294 = first__37293;
var k = cljs.core.nth.call(null,vec__37294,(0),null);
var v = cljs.core.nth.call(null,vec__37294,(1),null);
var pair = vec__37294;
var etc = seq__37292__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__37143__auto__","iterys__37143__auto__",1418608911,null)),(function (){var x__25885__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__37144__auto__","fs__37144__auto__",999996478,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__37143__auto__","iterys__37143__auto__",1418608911,null)),(function (){var x__25885__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__37144__auto__","fs__37144__auto__",999996478,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__37144__auto__","fs__37144__auto__",999996478,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = giter;
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
});})(giter,gxs,vec__37272,seq__37273,first__37274,seq__37273__$1,vec__37275,seq__37276,first__37277,seq__37276__$1,bind,first__37277__$1,seq__37276__$2,expr,mod_pairs,vec__37278,vec__37281,_,next_expr,next_groups,to_groups,err))
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
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__37272,seq__37273,first__37274,seq__37273__$1,vec__37275,seq__37276,first__37277,seq__37276__$1,bind,first__37277__$1,seq__37276__$2,expr,mod_pairs,vec__37278,vec__37281,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__37297){
var vec__37304 = p__37297;
var seq__37305 = cljs.core.seq.call(null,vec__37304);
var first__37306 = cljs.core.first.call(null,seq__37305);
var seq__37305__$1 = cljs.core.next.call(null,seq__37305);
var vec__37307 = first__37306;
var k = cljs.core.nth.call(null,vec__37307,(0),null);
var v = cljs.core.nth.call(null,vec__37307,(1),null);
var pair = vec__37307;
var etc = seq__37305__$1;
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
});})(gi,gb,giter,gxs,do_mod,vec__37272,seq__37273,first__37274,seq__37273__$1,vec__37275,seq__37276,first__37277,seq__37276__$1,bind,first__37277__$1,seq__37276__$2,expr,mod_pairs,vec__37278,vec__37281,_,next_expr,next_groups,to_groups,err))
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37145__auto__","c__37145__auto__",1595791440,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25885__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2314),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__37146__auto__","size__37146__auto__",-192290501,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37145__auto__","c__37145__auto__",1595791440,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__37146__auto__","size__37146__auto__",-192290501,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__37146__auto__","size__37146__auto__",-192290501,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37145__auto__","c__37145__auto__",1595791440,null)),(function (){var x__25885__auto__ = gi;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__37147__auto__","iter__37147__auto__",24097137,null)),(function (){var x__25885__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__37147__auto__","iter__37147__auto__",24097137,null)),(function (){var x__25885__auto__ = cljs.core.second.call(null,seq_exprs);
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
var len__26126__auto___37318 = arguments.length;
var i__26127__auto___37319 = (0);
while(true){
if((i__26127__auto___37319 < len__26126__auto___37318)){
args__26133__auto__.push((arguments[i__26127__auto___37319]));

var G__37320 = (i__26127__auto___37319 + (1));
i__26127__auto___37319 = G__37320;
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
var G__37321__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__37321 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__37322__i = 0, G__37322__a = new Array(arguments.length -  0);
while (G__37322__i < G__37322__a.length) {G__37322__a[G__37322__i] = arguments[G__37322__i + 0]; ++G__37322__i;}
  msg = new cljs.core.IndexedSeq(G__37322__a,0);
} 
return G__37321__delegate.call(this,msg);};
G__37321.cljs$lang$maxFixedArity = 0;
G__37321.cljs$lang$applyTo = (function (arglist__37323){
var msg = cljs.core.seq(arglist__37323);
return G__37321__delegate(msg);
});
G__37321.cljs$core$IFn$_invoke$arity$variadic = G__37321__delegate;
return G__37321;
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37313__auto__","c__37313__auto__",1328096117,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__25885__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37313__auto__","c__37313__auto__",1328096117,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__37313__auto__","c__37313__auto__",1328096117,null)))));
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq37314){
var G__37315 = cljs.core.first.call(null,seq37314);
var seq37314__$1 = cljs.core.next.call(null,seq37314);
var G__37316 = cljs.core.first.call(null,seq37314__$1);
var seq37314__$2 = cljs.core.next.call(null,seq37314__$1);
var G__37317 = cljs.core.first.call(null,seq37314__$2);
var seq37314__$3 = cljs.core.next.call(null,seq37314__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__37315,G__37316,G__37317,seq37314__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37327 = arguments.length;
var i__26127__auto___37328 = (0);
while(true){
if((i__26127__auto___37328 < len__26126__auto___37327)){
args__26133__auto__.push((arguments[i__26127__auto___37328]));

var G__37329 = (i__26127__auto___37328 + (1));
i__26127__auto___37328 = G__37329;
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

cljs.core$macros.array.cljs$lang$applyTo = (function (seq37324){
var G__37325 = cljs.core.first.call(null,seq37324);
var seq37324__$1 = cljs.core.next.call(null,seq37324);
var G__37326 = cljs.core.first.call(null,seq37324__$1);
var seq37324__$2 = cljs.core.next.call(null,seq37324__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__37325,G__37326,seq37324__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args37333 = [];
var len__26126__auto___37341 = arguments.length;
var i__26127__auto___37342 = (0);
while(true){
if((i__26127__auto___37342 < len__26126__auto___37341)){
args37333.push((arguments[i__26127__auto___37342]));

var G__37343 = (i__26127__auto___37342 + (1));
i__26127__auto___37342 = G__37343;
continue;
} else {
}
break;
}

var G__37340 = args37333.length;
switch (G__37340) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args37333.slice((4)),(0),null));
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
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__37330__auto__","dims__37330__auto__",2080873172,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37331__auto__","dimarray__37331__auto__",-145158402,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__25885__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37332__auto__","i__37332__auto__",601599037,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37331__auto__","dimarray__37331__auto__",-145158402,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37331__auto__","dimarray__37331__auto__",-145158402,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37332__auto__","i__37332__auto__",601599037,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__37330__auto__","dims__37330__auto__",2080873172,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__37331__auto__","dimarray__37331__auto__",-145158402,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq37334){
var G__37335 = cljs.core.first.call(null,seq37334);
var seq37334__$1 = cljs.core.next.call(null,seq37334);
var G__37336 = cljs.core.first.call(null,seq37334__$1);
var seq37334__$2 = cljs.core.next.call(null,seq37334__$1);
var G__37337 = cljs.core.first.call(null,seq37334__$2);
var seq37334__$3 = cljs.core.next.call(null,seq37334__$2);
var G__37338 = cljs.core.first.call(null,seq37334__$3);
var seq37334__$4 = cljs.core.next.call(null,seq37334__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__37335,G__37336,G__37337,G__37338,seq37334__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args37346 = [];
var len__26126__auto___37353 = arguments.length;
var i__26127__auto___37354 = (0);
while(true){
if((i__26127__auto___37354 < len__26126__auto___37353)){
args37346.push((arguments[i__26127__auto___37354]));

var G__37355 = (i__26127__auto___37354 + (1));
i__26127__auto___37354 = G__37355;
continue;
} else {
}
break;
}

var G__37352 = args37346.length;
switch (G__37352) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args37346.slice((3)),(0),null));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37345__auto__","x__37345__auto__",268682110,null)),(function (){var x__25885__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37345__auto__","x__37345__auto__",268682110,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq37347){
var G__37348 = cljs.core.first.call(null,seq37347);
var seq37347__$1 = cljs.core.next.call(null,seq37347);
var G__37349 = cljs.core.first.call(null,seq37347__$1);
var seq37347__$2 = cljs.core.next.call(null,seq37347__$1);
var G__37350 = cljs.core.first.call(null,seq37347__$2);
var seq37347__$3 = cljs.core.next.call(null,seq37347__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__37348,G__37349,G__37350,seq37347__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args37357 = [];
var len__26126__auto___37363 = arguments.length;
var i__26127__auto___37364 = (0);
while(true){
if((i__26127__auto___37364 < len__26126__auto___37363)){
args37357.push((arguments[i__26127__auto___37364]));

var G__37365 = (i__26127__auto___37364 + (1));
i__26127__auto___37364 = G__37365;
continue;
} else {
}
break;
}

var G__37362 = args37357.length;
switch (G__37362) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args37357.slice((2)),(0),null));
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

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq37358){
var G__37359 = cljs.core.first.call(null,seq37358);
var seq37358__$1 = cljs.core.next.call(null,seq37358);
var G__37360 = cljs.core.first.call(null,seq37358__$1);
var seq37358__$2 = cljs.core.next.call(null,seq37358__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__37359,G__37360,seq37358__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args37369 = [];
var len__26126__auto___37375 = arguments.length;
var i__26127__auto___37376 = (0);
while(true){
if((i__26127__auto___37376 < len__26126__auto___37375)){
args37369.push((arguments[i__26127__auto___37376]));

var G__37377 = (i__26127__auto___37376 + (1));
i__26127__auto___37376 = G__37377;
continue;
} else {
}
break;
}

var G__37374 = args37369.length;
switch (G__37374) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args37369.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26145__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__37367_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__37368_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__37368_SHARP_);
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

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq37370){
var G__37371 = cljs.core.first.call(null,seq37370);
var seq37370__$1 = cljs.core.next.call(null,seq37370);
var G__37372 = cljs.core.first.call(null,seq37370__$1);
var seq37370__$2 = cljs.core.next.call(null,seq37370__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__37371,G__37372,seq37370__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args37379 = [];
var len__26126__auto___37385 = arguments.length;
var i__26127__auto___37386 = (0);
while(true){
if((i__26127__auto___37386 < len__26126__auto___37385)){
args37379.push((arguments[i__26127__auto___37386]));

var G__37387 = (i__26127__auto___37386 + (1));
i__26127__auto___37386 = G__37387;
continue;
} else {
}
break;
}

var G__37384 = args37379.length;
switch (G__37384) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args37379.slice((2)),(0),null));
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

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq37380){
var G__37381 = cljs.core.first.call(null,seq37380);
var seq37380__$1 = cljs.core.next.call(null,seq37380);
var G__37382 = cljs.core.first.call(null,seq37380__$1);
var seq37380__$2 = cljs.core.next.call(null,seq37380__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__37381,G__37382,seq37380__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args37391 = [];
var len__26126__auto___37397 = arguments.length;
var i__26127__auto___37398 = (0);
while(true){
if((i__26127__auto___37398 < len__26126__auto___37397)){
args37391.push((arguments[i__26127__auto___37398]));

var G__37399 = (i__26127__auto___37398 + (1));
i__26127__auto___37398 = G__37399;
continue;
} else {
}
break;
}

var G__37396 = args37391.length;
switch (G__37396) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__26145__auto__ = (new cljs.core.IndexedSeq(args37391.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26145__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__37389_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__37389_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__37390_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__37390_SHARP_);
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

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq37392){
var G__37393 = cljs.core.first.call(null,seq37392);
var seq37392__$1 = cljs.core.next.call(null,seq37392);
var G__37394 = cljs.core.first.call(null,seq37392__$1);
var seq37392__$2 = cljs.core.next.call(null,seq37392__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__37393,G__37394,seq37392__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37416 = arguments.length;
var i__26127__auto___37417 = (0);
while(true){
if((i__26127__auto___37417 < len__26126__auto___37416)){
args__26133__auto__.push((arguments[i__26127__auto___37417]));

var G__37418 = (i__26127__auto___37417 + (1));
i__26127__auto___37417 = G__37418;
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
return (function (p__37404){
var vec__37405 = p__37404;
var k = cljs.core.nth.call(null,vec__37405,(0),null);
var _ = cljs.core.nth.call(null,vec__37405,(1),null);
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
return (function (p__37408){
var vec__37409 = p__37408;
var k = cljs.core.nth.call(null,vec__37409,(0),null);
var v = cljs.core.nth.call(null,vec__37409,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__25885__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__37412){
var vec__37413 = p__37412;
var k = cljs.core.nth.call(null,vec__37413,(0),null);
var v = cljs.core.nth.call(null,vec__37413,(1),null);
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

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq37401){
var G__37402 = cljs.core.first.call(null,seq37401);
var seq37401__$1 = cljs.core.next.call(null,seq37401);
var G__37403 = cljs.core.first.call(null,seq37401__$1);
var seq37401__$2 = cljs.core.next.call(null,seq37401__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__37402,G__37403,seq37401__$2);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37419__auto__","a__37419__auto__",1714188268,null)),(function (){var x__25885__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37419__auto__","a__37419__auto__",1714188268,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37419__auto__","a__37419__auto__",1714188268,null)))));
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37420__auto__","a__37420__auto__",882077540,null)),(function (){var x__25885__auto__ = a;
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__37420__auto__","a__37420__auto__",882077540,null)))));
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
var len__26126__auto___37426 = arguments.length;
var i__26127__auto___37427 = (0);
while(true){
if((i__26127__auto___37427 < len__26126__auto___37426)){
args__26133__auto__.push((arguments[i__26127__auto___37427]));

var G__37428 = (i__26127__auto___37427 + (1));
i__26127__auto___37427 = G__37428;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__37421__auto__","n__37421__auto__",-1236427077,null)),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__37421__auto__","n__37421__auto__",-1236427077,null)))));
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

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq37422){
var G__37423 = cljs.core.first.call(null,seq37422);
var seq37422__$1 = cljs.core.next.call(null,seq37422);
var G__37424 = cljs.core.first.call(null,seq37422__$1);
var seq37422__$2 = cljs.core.next.call(null,seq37422__$1);
var G__37425 = cljs.core.first.call(null,seq37422__$2);
var seq37422__$3 = cljs.core.next.call(null,seq37422__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__37423,G__37424,G__37425,seq37422__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37432 = arguments.length;
var i__26127__auto___37433 = (0);
while(true){
if((i__26127__auto___37433 < len__26126__auto___37432)){
args__26133__auto__.push((arguments[i__26127__auto___37433]));

var G__37434 = (i__26127__auto___37433 + (1));
i__26127__auto___37433 = G__37434;
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
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__37429_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__37429_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq37430){
var G__37431 = cljs.core.first.call(null,seq37430);
var seq37430__$1 = cljs.core.next.call(null,seq37430);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__37431,seq37430__$1);
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
var len__26126__auto___37444 = arguments.length;
var i__26127__auto___37445 = (0);
while(true){
if((i__26127__auto___37445 < len__26126__auto___37444)){
args__26133__auto__.push((arguments[i__26127__auto___37445]));

var G__37446 = (i__26127__auto___37445 + (1));
i__26127__auto___37445 = G__37446;
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__37435__auto__","method-table__37435__auto__",-981024560,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__37436__auto__","prefer-table__37436__auto__",457812588,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__37437__auto__","method-cache__37437__auto__",550588270,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__37438__auto__","cached-hierarchy__37438__auto__",-154421949,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__37439__auto__","hierarchy__37439__auto__",-452888400,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__25885__auto__ = options__$4;
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__37439__auto__","hierarchy__37439__auto__",-452888400,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__37435__auto__","method-table__37435__auto__",-981024560,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__37436__auto__","prefer-table__37436__auto__",457812588,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__37437__auto__","method-cache__37437__auto__",550588270,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__37438__auto__","cached-hierarchy__37438__auto__",-154421949,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq37440){
var G__37441 = cljs.core.first.call(null,seq37440);
var seq37440__$1 = cljs.core.next.call(null,seq37440);
var G__37442 = cljs.core.first.call(null,seq37440__$1);
var seq37440__$2 = cljs.core.next.call(null,seq37440__$1);
var G__37443 = cljs.core.first.call(null,seq37440__$2);
var seq37440__$3 = cljs.core.next.call(null,seq37440__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__37441,G__37442,G__37443,seq37440__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37452 = arguments.length;
var i__26127__auto___37453 = (0);
while(true){
if((i__26127__auto___37453 < len__26126__auto___37452)){
args__26133__auto__.push((arguments[i__26127__auto___37453]));

var G__37454 = (i__26127__auto___37453 + (1));
i__26127__auto___37453 = G__37454;
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

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq37447){
var G__37448 = cljs.core.first.call(null,seq37447);
var seq37447__$1 = cljs.core.next.call(null,seq37447);
var G__37449 = cljs.core.first.call(null,seq37447__$1);
var seq37447__$2 = cljs.core.next.call(null,seq37447__$1);
var G__37450 = cljs.core.first.call(null,seq37447__$2);
var seq37447__$3 = cljs.core.next.call(null,seq37447__$2);
var G__37451 = cljs.core.first.call(null,seq37447__$3);
var seq37447__$4 = cljs.core.next.call(null,seq37447__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__37448,G__37449,G__37450,G__37451,seq37447__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37455__auto__","start__37455__auto__",178330872,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__37456__auto__","ret__37456__auto__",177022170,null)),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37455__auto__","start__37455__auto__",178330872,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__37456__auto__","ret__37456__auto__",177022170,null)))));
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
var len__26126__auto___37471 = arguments.length;
var i__26127__auto___37472 = (0);
while(true){
if((i__26127__auto___37472 < len__26126__auto___37471)){
args__26133__auto__.push((arguments[i__26127__auto___37472]));

var G__37473 = (i__26127__auto___37472 + (1));
i__26127__auto___37472 = G__37473;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((5) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__26134__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__37468){
var map__37469 = p__37468;
var map__37469__$1 = ((((!((map__37469 == null)))?((((map__37469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37469):map__37469);
var print_fn = cljs.core.get.call(null,map__37469__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37457__auto__","start__37457__auto__",-1641461140,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__37458__auto__","ret__37458__auto__",1625100070,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___37459__auto__","___37459__auto__",2001853525,null)),(function (){var x__25885__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__37460__auto__","end__37460__auto__",2118985153,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__37461__auto__","elapsed__37461__auto__",-780947509,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__37460__auto__","end__37460__auto__",2118985153,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__37457__auto__","start__37457__auto__",-1641461140,null)))));
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
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__37461__auto__","elapsed__37461__auto__",-780947509,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq37462){
var G__37463 = cljs.core.first.call(null,seq37462);
var seq37462__$1 = cljs.core.next.call(null,seq37462);
var G__37464 = cljs.core.first.call(null,seq37462__$1);
var seq37462__$2 = cljs.core.next.call(null,seq37462__$1);
var G__37465 = cljs.core.first.call(null,seq37462__$2);
var seq37462__$3 = cljs.core.next.call(null,seq37462__$2);
var G__37466 = cljs.core.first.call(null,seq37462__$3);
var seq37462__$4 = cljs.core.next.call(null,seq37462__$3);
var G__37467 = cljs.core.first.call(null,seq37462__$4);
var seq37462__$5 = cljs.core.next.call(null,seq37462__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__37463,G__37464,G__37465,G__37466,G__37467,seq37462__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args37474 = [];
var len__26126__auto___37477 = arguments.length;
var i__26127__auto___37478 = (0);
while(true){
if((i__26127__auto___37478 < len__26126__auto___37477)){
args37474.push((arguments[i__26127__auto___37478]));

var G__37479 = (i__26127__auto___37478 + (1));
i__26127__auto___37478 = G__37479;
continue;
} else {
}
break;
}

var G__37476 = args37474.length;
switch (G__37476) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37474.length)].join('')));

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
var len__26126__auto___37486 = arguments.length;
var i__26127__auto___37487 = (0);
while(true){
if((i__26127__auto___37487 < len__26126__auto___37486)){
args__26133__auto__.push((arguments[i__26127__auto___37487]));

var G__37488 = (i__26127__auto___37487 + (1));
i__26127__auto___37487 = G__37488;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__37481__auto__","sb__37481__auto__",1386381259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37482__auto__","x__37482__auto__",703172214,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__37481__auto__","sb__37481__auto__",1386381259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__37482__auto__","x__37482__auto__",703172214,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__37481__auto__","sb__37481__auto__",1386381259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq37483){
var G__37484 = cljs.core.first.call(null,seq37483);
var seq37483__$1 = cljs.core.next.call(null,seq37483);
var G__37485 = cljs.core.first.call(null,seq37483__$1);
var seq37483__$2 = cljs.core.next.call(null,seq37483__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__37484,G__37485,seq37483__$2);
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
var len__26126__auto___37493 = arguments.length;
var i__26127__auto___37494 = (0);
while(true){
if((i__26127__auto___37494 < len__26126__auto___37493)){
args__26133__auto__.push((arguments[i__26127__auto___37494]));

var G__37495 = (i__26127__auto___37494 + (1));
i__26127__auto___37494 = G__37495;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((2) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26134__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__37489_SHARP_){
return cljs.core._conj.call(null,(function (){var x__25885__auto__ = p1__37489_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq37490){
var G__37491 = cljs.core.first.call(null,seq37490);
var seq37490__$1 = cljs.core.next.call(null,seq37490);
var G__37492 = cljs.core.first.call(null,seq37490__$1);
var seq37490__$2 = cljs.core.next.call(null,seq37490__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__37491,G__37492,seq37490__$2);
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37496__auto__","this__37496__auto__",1413997080,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__37496__auto__","this__37496__auto__",1413997080,null)))));
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
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__37497){
var vec__37509 = p__37497;
var quote = cljs.core.nth.call(null,vec__37509,(0),null);
var ns = cljs.core.nth.call(null,vec__37509,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__25885__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__37509,quote,ns){
return (function (p__37516){
var vec__37517 = p__37516;
var sym = cljs.core.nth.call(null,vec__37517,(0),null);
var _ = cljs.core.nth.call(null,vec__37517,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__25885__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__25885__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
});})(vec__37509,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__37520,p__37521){
var vec__37528 = p__37520;
var quote0 = cljs.core.nth.call(null,vec__37528,(0),null);
var ns = cljs.core.nth.call(null,vec__37528,(1),null);
var vec__37531 = p__37521;
var quote1 = cljs.core.nth.call(null,vec__37531,(0),null);
var sym = cljs.core.nth.call(null,vec__37531,(1),null);
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
var len__26126__auto___37539 = arguments.length;
var i__26127__auto___37540 = (0);
while(true){
if((i__26127__auto___37540 < len__26126__auto___37539)){
args__26133__auto__.push((arguments[i__26127__auto___37540]));

var G__37541 = (i__26127__auto___37540 + (1));
i__26127__auto___37540 = G__37541;
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

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq37534){
var G__37535 = cljs.core.first.call(null,seq37534);
var seq37534__$1 = cljs.core.next.call(null,seq37534);
var G__37536 = cljs.core.first.call(null,seq37534__$1);
var seq37534__$2 = cljs.core.next.call(null,seq37534__$1);
var G__37537 = cljs.core.first.call(null,seq37534__$2);
var seq37534__$3 = cljs.core.next.call(null,seq37534__$2);
var G__37538 = cljs.core.first.call(null,seq37534__$3);
var seq37534__$4 = cljs.core.next.call(null,seq37534__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37535,G__37536,G__37537,G__37538,seq37534__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__26133__auto__ = [];
var len__26126__auto___37546 = arguments.length;
var i__26127__auto___37547 = (0);
while(true){
if((i__26127__auto___37547 < len__26126__auto___37546)){
args__26133__auto__.push((arguments[i__26127__auto___37547]));

var G__37548 = (i__26127__auto___37547 + (1));
i__26127__auto___37547 = G__37548;
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

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq37542){
var G__37543 = cljs.core.first.call(null,seq37542);
var seq37542__$1 = cljs.core.next.call(null,seq37542);
var G__37544 = cljs.core.first.call(null,seq37542__$1);
var seq37542__$2 = cljs.core.next.call(null,seq37542__$1);
var G__37545 = cljs.core.first.call(null,seq37542__$2);
var seq37542__$3 = cljs.core.next.call(null,seq37542__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__37543,G__37544,G__37545,seq37542__$3);
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
var G__37549 = form_SINGLEQUOTE_;
var G__37550 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__37549;
form_SINGLEQUOTE_ = G__37550;
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
var args37551 = [];
var len__26126__auto___37558 = arguments.length;
var i__26127__auto___37559 = (0);
while(true){
if((i__26127__auto___37559 < len__26126__auto___37558)){
args37551.push((arguments[i__26127__auto___37559]));

var G__37560 = (i__26127__auto___37559 + (1));
i__26127__auto___37559 = G__37560;
continue;
} else {
}
break;
}

var G__37553 = args37551.length;
switch (G__37553) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37551.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__37554,solo){
var vec__37555 = p__37554;
var seq__37556 = cljs.core.seq.call(null,vec__37555);
var first__37557 = cljs.core.first.call(null,seq__37556);
var seq__37556__$1 = cljs.core.next.call(null,seq__37556);
var arglist = first__37557;
var body = seq__37556__$1;
var method = vec__37555;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method){
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
});})(sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method){
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
});})(sig,restarg,vec__37555,seq__37556,first__37557,seq__37556__$1,arglist,body,method))
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__37562__auto__","len__37562__auto__",-992588089,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37563__auto__","i__37563__auto__",1785370501,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37563__auto__","i__37563__auto__",1785370501,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__37562__auto__","len__37562__auto__",-992588089,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__25885__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37563__auto__","i__37563__auto__",1785370501,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__37563__auto__","i__37563__auto__",1785370501,null)))));
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
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__37566,emit_var_QMARK_){
var vec__37573 = p__37566;
var vec__37576 = cljs.core.nth.call(null,vec__37573,(0),null);
var seq__37577 = cljs.core.seq.call(null,vec__37576);
var first__37578 = cljs.core.first.call(null,seq__37577);
var seq__37577__$1 = cljs.core.next.call(null,seq__37577);
var arglist = first__37578;
var body = seq__37577__$1;
var method = vec__37576;
var fdecl = vec__37573;
var dest_args = ((function (vec__37573,vec__37576,seq__37577,first__37578,seq__37577__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__37573,vec__37576,seq__37577,first__37578,seq__37577__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
});})(vec__37573,vec__37576,seq__37577,first__37578,seq__37577__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__37573,vec__37576,seq__37577,first__37578,seq__37577__$1,arglist,body,method,fdecl))
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37564__auto__","args__37564__auto__",226043766,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37564__auto__","args__37564__auto__",226043766,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__37565__auto__","argseq__37565__auto__",-1112578109,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__25885__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37564__auto__","args__37564__auto__",226043766,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2812),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25885__auto__);
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__37564__auto__","args__37564__auto__",226043766,null)),(function (){var x__25885__auto__ = c_1;
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__37565__auto__","argseq__37565__auto__",-1112578109,null)))));
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
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__37603){
var vec__37607 = p__37603;
var seq__37608 = cljs.core.seq.call(null,vec__37607);
var first__37609 = cljs.core.first.call(null,seq__37608);
var seq__37608__$1 = cljs.core.next.call(null,seq__37608);
var sig = first__37609;
var body = seq__37608__$1;
var method = vec__37607;
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
return (function (p1__37579_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__37579_SHARP_);
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
return (function (p1__37580_SHARP_){
return fixed_arity.call(null,rname,p1__37580_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__25885__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__25885__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__37581__auto__","argseq__37581__auto__",375485542,null)),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__25885__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ben/projects/presentation2/site/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2870),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
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
})(),(function (){var x__25885__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__37581__auto__","argseq__37581__auto__",375485542,null)))));
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
var G__37610__i = 0, G__37610__a = new Array(arguments.length -  3);
while (G__37610__i < G__37610__a.length) {G__37610__a[G__37610__i] = arguments[G__37610__i + 3]; ++G__37610__i;}
  fdecl = new cljs.core.IndexedSeq(G__37610__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__37611){
var _AMPERSAND_form = cljs.core.first(arglist__37611);
arglist__37611 = cljs.core.next(arglist__37611);
var _AMPERSAND_env = cljs.core.first(arglist__37611);
arglist__37611 = cljs.core.next(arglist__37611);
var name = cljs.core.first(arglist__37611);
var fdecl = cljs.core.rest(arglist__37611);
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
var len__26126__auto___37616 = arguments.length;
var i__26127__auto___37617 = (0);
while(true){
if((i__26127__auto___37617 < len__26126__auto___37616)){
args__26133__auto__.push((arguments[i__26127__auto___37617]));

var G__37618 = (i__26127__auto___37617 + (1));
i__26127__auto___37617 = G__37618;
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
var G__37619 = cljs.core.cons.call(null,f,p);
var G__37620 = cljs.core.next.call(null,args__$1);
p = G__37619;
args__$1 = G__37620;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__37621 = cljs.core.cons.call(null,f,p);
var G__37622 = cljs.core.next.call(null,args__$1);
p = G__37621;
args__$1 = G__37622;
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
var G__37623 = cljs.core.next.call(null,fd);
fd = G__37623;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__37624 = cljs.core.next.call(null,fd);
fd = G__37624;
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
var G__37625 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__37626 = cljs.core.next.call(null,ds);
acc = G__37625;
ds = G__37626;
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
var G__37627 = cljs.core.next.call(null,p);
var G__37628 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__37627;
d = G__37628;
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

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq37612){
var G__37613 = cljs.core.first.call(null,seq37612);
var seq37612__$1 = cljs.core.next.call(null,seq37612);
var G__37614 = cljs.core.first.call(null,seq37612__$1);
var seq37612__$2 = cljs.core.next.call(null,seq37612__$1);
var G__37615 = cljs.core.first.call(null,seq37612__$2);
var seq37612__$3 = cljs.core.next.call(null,seq37612__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__37613,G__37614,G__37615,seq37612__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;
