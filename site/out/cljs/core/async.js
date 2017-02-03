// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args38668 = [];
var len__26126__auto___38674 = arguments.length;
var i__26127__auto___38675 = (0);
while(true){
if((i__26127__auto___38675 < len__26126__auto___38674)){
args38668.push((arguments[i__26127__auto___38675]));

var G__38676 = (i__26127__auto___38675 + (1));
i__26127__auto___38675 = G__38676;
continue;
} else {
}
break;
}

var G__38670 = args38668.length;
switch (G__38670) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38668.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38671 = (function (f,blockable,meta38672){
this.f = f;
this.blockable = blockable;
this.meta38672 = meta38672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38673,meta38672__$1){
var self__ = this;
var _38673__$1 = this;
return (new cljs.core.async.t_cljs$core$async38671(self__.f,self__.blockable,meta38672__$1));
});

cljs.core.async.t_cljs$core$async38671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38673){
var self__ = this;
var _38673__$1 = this;
return self__.meta38672;
});

cljs.core.async.t_cljs$core$async38671.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38671.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38671.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38671.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38672","meta38672",-671068064,null)], null);
});

cljs.core.async.t_cljs$core$async38671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38671";

cljs.core.async.t_cljs$core$async38671.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async38671");
});

cljs.core.async.__GT_t_cljs$core$async38671 = (function cljs$core$async$__GT_t_cljs$core$async38671(f__$1,blockable__$1,meta38672){
return (new cljs.core.async.t_cljs$core$async38671(f__$1,blockable__$1,meta38672));
});

}

return (new cljs.core.async.t_cljs$core$async38671(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args38680 = [];
var len__26126__auto___38683 = arguments.length;
var i__26127__auto___38684 = (0);
while(true){
if((i__26127__auto___38684 < len__26126__auto___38683)){
args38680.push((arguments[i__26127__auto___38684]));

var G__38685 = (i__26127__auto___38684 + (1));
i__26127__auto___38684 = G__38685;
continue;
} else {
}
break;
}

var G__38682 = args38680.length;
switch (G__38682) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38680.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args38687 = [];
var len__26126__auto___38690 = arguments.length;
var i__26127__auto___38691 = (0);
while(true){
if((i__26127__auto___38691 < len__26126__auto___38690)){
args38687.push((arguments[i__26127__auto___38691]));

var G__38692 = (i__26127__auto___38691 + (1));
i__26127__auto___38691 = G__38692;
continue;
} else {
}
break;
}

var G__38689 = args38687.length;
switch (G__38689) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38687.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args38694 = [];
var len__26126__auto___38697 = arguments.length;
var i__26127__auto___38698 = (0);
while(true){
if((i__26127__auto___38698 < len__26126__auto___38697)){
args38694.push((arguments[i__26127__auto___38698]));

var G__38699 = (i__26127__auto___38698 + (1));
i__26127__auto___38698 = G__38699;
continue;
} else {
}
break;
}

var G__38696 = args38694.length;
switch (G__38696) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38694.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38701 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38701);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38701,ret){
return (function (){
return fn1.call(null,val_38701);
});})(val_38701,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args38702 = [];
var len__26126__auto___38705 = arguments.length;
var i__26127__auto___38706 = (0);
while(true){
if((i__26127__auto___38706 < len__26126__auto___38705)){
args38702.push((arguments[i__26127__auto___38706]));

var G__38707 = (i__26127__auto___38706 + (1));
i__26127__auto___38706 = G__38707;
continue;
} else {
}
break;
}

var G__38704 = args38702.length;
switch (G__38704) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38702.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25966__auto___38709 = n;
var x_38710 = (0);
while(true){
if((x_38710 < n__25966__auto___38709)){
(a[x_38710] = (0));

var G__38711 = (x_38710 + (1));
x_38710 = G__38711;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38712 = (i + (1));
i = G__38712;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38716 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38716 = (function (alt_flag,flag,meta38717){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta38717 = meta38717;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38718,meta38717__$1){
var self__ = this;
var _38718__$1 = this;
return (new cljs.core.async.t_cljs$core$async38716(self__.alt_flag,self__.flag,meta38717__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38718){
var self__ = this;
var _38718__$1 = this;
return self__.meta38717;
});})(flag))
;

cljs.core.async.t_cljs$core$async38716.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38716.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38716.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38717","meta38717",-1601410506,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38716.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38716.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38716";

cljs.core.async.t_cljs$core$async38716.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async38716");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38716 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38716(alt_flag__$1,flag__$1,meta38717){
return (new cljs.core.async.t_cljs$core$async38716(alt_flag__$1,flag__$1,meta38717));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38716(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38722 = (function (alt_handler,flag,cb,meta38723){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta38723 = meta38723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38724,meta38723__$1){
var self__ = this;
var _38724__$1 = this;
return (new cljs.core.async.t_cljs$core$async38722(self__.alt_handler,self__.flag,self__.cb,meta38723__$1));
});

cljs.core.async.t_cljs$core$async38722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38724){
var self__ = this;
var _38724__$1 = this;
return self__.meta38723;
});

cljs.core.async.t_cljs$core$async38722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38723","meta38723",-1924303310,null)], null);
});

cljs.core.async.t_cljs$core$async38722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38722";

cljs.core.async.t_cljs$core$async38722.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async38722");
});

cljs.core.async.__GT_t_cljs$core$async38722 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38722(alt_handler__$1,flag__$1,cb__$1,meta38723){
return (new cljs.core.async.t_cljs$core$async38722(alt_handler__$1,flag__$1,cb__$1,meta38723));
});

}

return (new cljs.core.async.t_cljs$core$async38722(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38725_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38725_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38726_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38726_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25051__auto__ = wport;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38727 = (i + (1));
i = G__38727;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25051__auto__ = ret;
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25039__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25039__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25039__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___38733 = arguments.length;
var i__26127__auto___38734 = (0);
while(true){
if((i__26127__auto___38734 < len__26126__auto___38733)){
args__26133__auto__.push((arguments[i__26127__auto___38734]));

var G__38735 = (i__26127__auto___38734 + (1));
i__26127__auto___38734 = G__38735;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38730){
var map__38731 = p__38730;
var map__38731__$1 = ((((!((map__38731 == null)))?((((map__38731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38731):map__38731);
var opts = map__38731__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38728){
var G__38729 = cljs.core.first.call(null,seq38728);
var seq38728__$1 = cljs.core.next.call(null,seq38728);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38729,seq38728__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args38736 = [];
var len__26126__auto___38786 = arguments.length;
var i__26127__auto___38787 = (0);
while(true){
if((i__26127__auto___38787 < len__26126__auto___38786)){
args38736.push((arguments[i__26127__auto___38787]));

var G__38788 = (i__26127__auto___38787 + (1));
i__26127__auto___38787 = G__38788;
continue;
} else {
}
break;
}

var G__38738 = args38736.length;
switch (G__38738) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38736.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38623__auto___38790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___38790){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___38790){
return (function (state_38762){
var state_val_38763 = (state_38762[(1)]);
if((state_val_38763 === (7))){
var inst_38758 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
var statearr_38764_38791 = state_38762__$1;
(statearr_38764_38791[(2)] = inst_38758);

(statearr_38764_38791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (1))){
var state_38762__$1 = state_38762;
var statearr_38765_38792 = state_38762__$1;
(statearr_38765_38792[(2)] = null);

(statearr_38765_38792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (4))){
var inst_38741 = (state_38762[(7)]);
var inst_38741__$1 = (state_38762[(2)]);
var inst_38742 = (inst_38741__$1 == null);
var state_38762__$1 = (function (){var statearr_38766 = state_38762;
(statearr_38766[(7)] = inst_38741__$1);

return statearr_38766;
})();
if(cljs.core.truth_(inst_38742)){
var statearr_38767_38793 = state_38762__$1;
(statearr_38767_38793[(1)] = (5));

} else {
var statearr_38768_38794 = state_38762__$1;
(statearr_38768_38794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (13))){
var state_38762__$1 = state_38762;
var statearr_38769_38795 = state_38762__$1;
(statearr_38769_38795[(2)] = null);

(statearr_38769_38795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (6))){
var inst_38741 = (state_38762[(7)]);
var state_38762__$1 = state_38762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38762__$1,(11),to,inst_38741);
} else {
if((state_val_38763 === (3))){
var inst_38760 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38762__$1,inst_38760);
} else {
if((state_val_38763 === (12))){
var state_38762__$1 = state_38762;
var statearr_38770_38796 = state_38762__$1;
(statearr_38770_38796[(2)] = null);

(statearr_38770_38796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (2))){
var state_38762__$1 = state_38762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38762__$1,(4),from);
} else {
if((state_val_38763 === (11))){
var inst_38751 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
if(cljs.core.truth_(inst_38751)){
var statearr_38771_38797 = state_38762__$1;
(statearr_38771_38797[(1)] = (12));

} else {
var statearr_38772_38798 = state_38762__$1;
(statearr_38772_38798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (9))){
var state_38762__$1 = state_38762;
var statearr_38773_38799 = state_38762__$1;
(statearr_38773_38799[(2)] = null);

(statearr_38773_38799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (5))){
var state_38762__$1 = state_38762;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38774_38800 = state_38762__$1;
(statearr_38774_38800[(1)] = (8));

} else {
var statearr_38775_38801 = state_38762__$1;
(statearr_38775_38801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (14))){
var inst_38756 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
var statearr_38776_38802 = state_38762__$1;
(statearr_38776_38802[(2)] = inst_38756);

(statearr_38776_38802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (10))){
var inst_38748 = (state_38762[(2)]);
var state_38762__$1 = state_38762;
var statearr_38777_38803 = state_38762__$1;
(statearr_38777_38803[(2)] = inst_38748);

(statearr_38777_38803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38763 === (8))){
var inst_38745 = cljs.core.async.close_BANG_.call(null,to);
var state_38762__$1 = state_38762;
var statearr_38778_38804 = state_38762__$1;
(statearr_38778_38804[(2)] = inst_38745);

(statearr_38778_38804[(1)] = (10));


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
});})(c__38623__auto___38790))
;
return ((function (switch__38511__auto__,c__38623__auto___38790){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_38782 = [null,null,null,null,null,null,null,null];
(statearr_38782[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_38782[(1)] = (1));

return statearr_38782;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_38762){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_38762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e38783){if((e38783 instanceof Object)){
var ex__38515__auto__ = e38783;
var statearr_38784_38805 = state_38762;
(statearr_38784_38805[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38806 = state_38762;
state_38762 = G__38806;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_38762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_38762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___38790))
})();
var state__38625__auto__ = (function (){var statearr_38785 = f__38624__auto__.call(null);
(statearr_38785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___38790);

return statearr_38785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___38790))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38994){
var vec__38995 = p__38994;
var v = cljs.core.nth.call(null,vec__38995,(0),null);
var p = cljs.core.nth.call(null,vec__38995,(1),null);
var job = vec__38995;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38623__auto___39181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___39181,res,vec__38995,v,p,job,jobs,results){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___39181,res,vec__38995,v,p,job,jobs,results){
return (function (state_39002){
var state_val_39003 = (state_39002[(1)]);
if((state_val_39003 === (1))){
var state_39002__$1 = state_39002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39002__$1,(2),res,v);
} else {
if((state_val_39003 === (2))){
var inst_38999 = (state_39002[(2)]);
var inst_39000 = cljs.core.async.close_BANG_.call(null,res);
var state_39002__$1 = (function (){var statearr_39004 = state_39002;
(statearr_39004[(7)] = inst_38999);

return statearr_39004;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39002__$1,inst_39000);
} else {
return null;
}
}
});})(c__38623__auto___39181,res,vec__38995,v,p,job,jobs,results))
;
return ((function (switch__38511__auto__,c__38623__auto___39181,res,vec__38995,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0 = (function (){
var statearr_39008 = [null,null,null,null,null,null,null,null];
(statearr_39008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__);

(statearr_39008[(1)] = (1));

return statearr_39008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1 = (function (state_39002){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39009){if((e39009 instanceof Object)){
var ex__38515__auto__ = e39009;
var statearr_39010_39182 = state_39002;
(statearr_39010_39182[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39183 = state_39002;
state_39002 = G__39183;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = function(state_39002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1.call(this,state_39002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___39181,res,vec__38995,v,p,job,jobs,results))
})();
var state__38625__auto__ = (function (){var statearr_39011 = f__38624__auto__.call(null);
(statearr_39011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___39181);

return statearr_39011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___39181,res,vec__38995,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39012){
var vec__39013 = p__39012;
var v = cljs.core.nth.call(null,vec__39013,(0),null);
var p = cljs.core.nth.call(null,vec__39013,(1),null);
var job = vec__39013;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25966__auto___39184 = n;
var __39185 = (0);
while(true){
if((__39185 < n__25966__auto___39184)){
var G__39016_39186 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__39016_39186) {
case "compute":
var c__38623__auto___39188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39185,c__38623__auto___39188,G__39016_39186,n__25966__auto___39184,jobs,results,process,async){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (__39185,c__38623__auto___39188,G__39016_39186,n__25966__auto___39184,jobs,results,process,async){
return (function (state_39029){
var state_val_39030 = (state_39029[(1)]);
if((state_val_39030 === (1))){
var state_39029__$1 = state_39029;
var statearr_39031_39189 = state_39029__$1;
(statearr_39031_39189[(2)] = null);

(statearr_39031_39189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (2))){
var state_39029__$1 = state_39029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39029__$1,(4),jobs);
} else {
if((state_val_39030 === (3))){
var inst_39027 = (state_39029[(2)]);
var state_39029__$1 = state_39029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39029__$1,inst_39027);
} else {
if((state_val_39030 === (4))){
var inst_39019 = (state_39029[(2)]);
var inst_39020 = process.call(null,inst_39019);
var state_39029__$1 = state_39029;
if(cljs.core.truth_(inst_39020)){
var statearr_39032_39190 = state_39029__$1;
(statearr_39032_39190[(1)] = (5));

} else {
var statearr_39033_39191 = state_39029__$1;
(statearr_39033_39191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (5))){
var state_39029__$1 = state_39029;
var statearr_39034_39192 = state_39029__$1;
(statearr_39034_39192[(2)] = null);

(statearr_39034_39192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (6))){
var state_39029__$1 = state_39029;
var statearr_39035_39193 = state_39029__$1;
(statearr_39035_39193[(2)] = null);

(statearr_39035_39193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39030 === (7))){
var inst_39025 = (state_39029[(2)]);
var state_39029__$1 = state_39029;
var statearr_39036_39194 = state_39029__$1;
(statearr_39036_39194[(2)] = inst_39025);

(statearr_39036_39194[(1)] = (3));


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
});})(__39185,c__38623__auto___39188,G__39016_39186,n__25966__auto___39184,jobs,results,process,async))
;
return ((function (__39185,switch__38511__auto__,c__38623__auto___39188,G__39016_39186,n__25966__auto___39184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0 = (function (){
var statearr_39040 = [null,null,null,null,null,null,null];
(statearr_39040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__);

(statearr_39040[(1)] = (1));

return statearr_39040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1 = (function (state_39029){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39041){if((e39041 instanceof Object)){
var ex__38515__auto__ = e39041;
var statearr_39042_39195 = state_39029;
(statearr_39042_39195[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39196 = state_39029;
state_39029 = G__39196;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = function(state_39029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1.call(this,state_39029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__;
})()
;})(__39185,switch__38511__auto__,c__38623__auto___39188,G__39016_39186,n__25966__auto___39184,jobs,results,process,async))
})();
var state__38625__auto__ = (function (){var statearr_39043 = f__38624__auto__.call(null);
(statearr_39043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___39188);

return statearr_39043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(__39185,c__38623__auto___39188,G__39016_39186,n__25966__auto___39184,jobs,results,process,async))
);


break;
case "async":
var c__38623__auto___39197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39185,c__38623__auto___39197,G__39016_39186,n__25966__auto___39184,jobs,results,process,async){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (__39185,c__38623__auto___39197,G__39016_39186,n__25966__auto___39184,jobs,results,process,async){
return (function (state_39056){
var state_val_39057 = (state_39056[(1)]);
if((state_val_39057 === (1))){
var state_39056__$1 = state_39056;
var statearr_39058_39198 = state_39056__$1;
(statearr_39058_39198[(2)] = null);

(statearr_39058_39198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39057 === (2))){
var state_39056__$1 = state_39056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39056__$1,(4),jobs);
} else {
if((state_val_39057 === (3))){
var inst_39054 = (state_39056[(2)]);
var state_39056__$1 = state_39056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39056__$1,inst_39054);
} else {
if((state_val_39057 === (4))){
var inst_39046 = (state_39056[(2)]);
var inst_39047 = async.call(null,inst_39046);
var state_39056__$1 = state_39056;
if(cljs.core.truth_(inst_39047)){
var statearr_39059_39199 = state_39056__$1;
(statearr_39059_39199[(1)] = (5));

} else {
var statearr_39060_39200 = state_39056__$1;
(statearr_39060_39200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39057 === (5))){
var state_39056__$1 = state_39056;
var statearr_39061_39201 = state_39056__$1;
(statearr_39061_39201[(2)] = null);

(statearr_39061_39201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39057 === (6))){
var state_39056__$1 = state_39056;
var statearr_39062_39202 = state_39056__$1;
(statearr_39062_39202[(2)] = null);

(statearr_39062_39202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39057 === (7))){
var inst_39052 = (state_39056[(2)]);
var state_39056__$1 = state_39056;
var statearr_39063_39203 = state_39056__$1;
(statearr_39063_39203[(2)] = inst_39052);

(statearr_39063_39203[(1)] = (3));


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
});})(__39185,c__38623__auto___39197,G__39016_39186,n__25966__auto___39184,jobs,results,process,async))
;
return ((function (__39185,switch__38511__auto__,c__38623__auto___39197,G__39016_39186,n__25966__auto___39184,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0 = (function (){
var statearr_39067 = [null,null,null,null,null,null,null];
(statearr_39067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__);

(statearr_39067[(1)] = (1));

return statearr_39067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1 = (function (state_39056){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39068){if((e39068 instanceof Object)){
var ex__38515__auto__ = e39068;
var statearr_39069_39204 = state_39056;
(statearr_39069_39204[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39205 = state_39056;
state_39056 = G__39205;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = function(state_39056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1.call(this,state_39056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__;
})()
;})(__39185,switch__38511__auto__,c__38623__auto___39197,G__39016_39186,n__25966__auto___39184,jobs,results,process,async))
})();
var state__38625__auto__ = (function (){var statearr_39070 = f__38624__auto__.call(null);
(statearr_39070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___39197);

return statearr_39070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(__39185,c__38623__auto___39197,G__39016_39186,n__25966__auto___39184,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39206 = (__39185 + (1));
__39185 = G__39206;
continue;
} else {
}
break;
}

var c__38623__auto___39207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___39207,jobs,results,process,async){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___39207,jobs,results,process,async){
return (function (state_39092){
var state_val_39093 = (state_39092[(1)]);
if((state_val_39093 === (1))){
var state_39092__$1 = state_39092;
var statearr_39094_39208 = state_39092__$1;
(statearr_39094_39208[(2)] = null);

(statearr_39094_39208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39093 === (2))){
var state_39092__$1 = state_39092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39092__$1,(4),from);
} else {
if((state_val_39093 === (3))){
var inst_39090 = (state_39092[(2)]);
var state_39092__$1 = state_39092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39092__$1,inst_39090);
} else {
if((state_val_39093 === (4))){
var inst_39073 = (state_39092[(7)]);
var inst_39073__$1 = (state_39092[(2)]);
var inst_39074 = (inst_39073__$1 == null);
var state_39092__$1 = (function (){var statearr_39095 = state_39092;
(statearr_39095[(7)] = inst_39073__$1);

return statearr_39095;
})();
if(cljs.core.truth_(inst_39074)){
var statearr_39096_39209 = state_39092__$1;
(statearr_39096_39209[(1)] = (5));

} else {
var statearr_39097_39210 = state_39092__$1;
(statearr_39097_39210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39093 === (5))){
var inst_39076 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39092__$1 = state_39092;
var statearr_39098_39211 = state_39092__$1;
(statearr_39098_39211[(2)] = inst_39076);

(statearr_39098_39211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39093 === (6))){
var inst_39078 = (state_39092[(8)]);
var inst_39073 = (state_39092[(7)]);
var inst_39078__$1 = cljs.core.async.chan.call(null,(1));
var inst_39079 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39080 = [inst_39073,inst_39078__$1];
var inst_39081 = (new cljs.core.PersistentVector(null,2,(5),inst_39079,inst_39080,null));
var state_39092__$1 = (function (){var statearr_39099 = state_39092;
(statearr_39099[(8)] = inst_39078__$1);

return statearr_39099;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39092__$1,(8),jobs,inst_39081);
} else {
if((state_val_39093 === (7))){
var inst_39088 = (state_39092[(2)]);
var state_39092__$1 = state_39092;
var statearr_39100_39212 = state_39092__$1;
(statearr_39100_39212[(2)] = inst_39088);

(statearr_39100_39212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39093 === (8))){
var inst_39078 = (state_39092[(8)]);
var inst_39083 = (state_39092[(2)]);
var state_39092__$1 = (function (){var statearr_39101 = state_39092;
(statearr_39101[(9)] = inst_39083);

return statearr_39101;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39092__$1,(9),results,inst_39078);
} else {
if((state_val_39093 === (9))){
var inst_39085 = (state_39092[(2)]);
var state_39092__$1 = (function (){var statearr_39102 = state_39092;
(statearr_39102[(10)] = inst_39085);

return statearr_39102;
})();
var statearr_39103_39213 = state_39092__$1;
(statearr_39103_39213[(2)] = null);

(statearr_39103_39213[(1)] = (2));


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
});})(c__38623__auto___39207,jobs,results,process,async))
;
return ((function (switch__38511__auto__,c__38623__auto___39207,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0 = (function (){
var statearr_39107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__);

(statearr_39107[(1)] = (1));

return statearr_39107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1 = (function (state_39092){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39108){if((e39108 instanceof Object)){
var ex__38515__auto__ = e39108;
var statearr_39109_39214 = state_39092;
(statearr_39109_39214[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39215 = state_39092;
state_39092 = G__39215;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = function(state_39092){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1.call(this,state_39092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___39207,jobs,results,process,async))
})();
var state__38625__auto__ = (function (){var statearr_39110 = f__38624__auto__.call(null);
(statearr_39110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___39207);

return statearr_39110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___39207,jobs,results,process,async))
);


var c__38623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto__,jobs,results,process,async){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto__,jobs,results,process,async){
return (function (state_39148){
var state_val_39149 = (state_39148[(1)]);
if((state_val_39149 === (7))){
var inst_39144 = (state_39148[(2)]);
var state_39148__$1 = state_39148;
var statearr_39150_39216 = state_39148__$1;
(statearr_39150_39216[(2)] = inst_39144);

(statearr_39150_39216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (20))){
var state_39148__$1 = state_39148;
var statearr_39151_39217 = state_39148__$1;
(statearr_39151_39217[(2)] = null);

(statearr_39151_39217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (1))){
var state_39148__$1 = state_39148;
var statearr_39152_39218 = state_39148__$1;
(statearr_39152_39218[(2)] = null);

(statearr_39152_39218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (4))){
var inst_39113 = (state_39148[(7)]);
var inst_39113__$1 = (state_39148[(2)]);
var inst_39114 = (inst_39113__$1 == null);
var state_39148__$1 = (function (){var statearr_39153 = state_39148;
(statearr_39153[(7)] = inst_39113__$1);

return statearr_39153;
})();
if(cljs.core.truth_(inst_39114)){
var statearr_39154_39219 = state_39148__$1;
(statearr_39154_39219[(1)] = (5));

} else {
var statearr_39155_39220 = state_39148__$1;
(statearr_39155_39220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (15))){
var inst_39126 = (state_39148[(8)]);
var state_39148__$1 = state_39148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39148__$1,(18),to,inst_39126);
} else {
if((state_val_39149 === (21))){
var inst_39139 = (state_39148[(2)]);
var state_39148__$1 = state_39148;
var statearr_39156_39221 = state_39148__$1;
(statearr_39156_39221[(2)] = inst_39139);

(statearr_39156_39221[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (13))){
var inst_39141 = (state_39148[(2)]);
var state_39148__$1 = (function (){var statearr_39157 = state_39148;
(statearr_39157[(9)] = inst_39141);

return statearr_39157;
})();
var statearr_39158_39222 = state_39148__$1;
(statearr_39158_39222[(2)] = null);

(statearr_39158_39222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (6))){
var inst_39113 = (state_39148[(7)]);
var state_39148__$1 = state_39148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39148__$1,(11),inst_39113);
} else {
if((state_val_39149 === (17))){
var inst_39134 = (state_39148[(2)]);
var state_39148__$1 = state_39148;
if(cljs.core.truth_(inst_39134)){
var statearr_39159_39223 = state_39148__$1;
(statearr_39159_39223[(1)] = (19));

} else {
var statearr_39160_39224 = state_39148__$1;
(statearr_39160_39224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (3))){
var inst_39146 = (state_39148[(2)]);
var state_39148__$1 = state_39148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39148__$1,inst_39146);
} else {
if((state_val_39149 === (12))){
var inst_39123 = (state_39148[(10)]);
var state_39148__$1 = state_39148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39148__$1,(14),inst_39123);
} else {
if((state_val_39149 === (2))){
var state_39148__$1 = state_39148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39148__$1,(4),results);
} else {
if((state_val_39149 === (19))){
var state_39148__$1 = state_39148;
var statearr_39161_39225 = state_39148__$1;
(statearr_39161_39225[(2)] = null);

(statearr_39161_39225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (11))){
var inst_39123 = (state_39148[(2)]);
var state_39148__$1 = (function (){var statearr_39162 = state_39148;
(statearr_39162[(10)] = inst_39123);

return statearr_39162;
})();
var statearr_39163_39226 = state_39148__$1;
(statearr_39163_39226[(2)] = null);

(statearr_39163_39226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (9))){
var state_39148__$1 = state_39148;
var statearr_39164_39227 = state_39148__$1;
(statearr_39164_39227[(2)] = null);

(statearr_39164_39227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (5))){
var state_39148__$1 = state_39148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39165_39228 = state_39148__$1;
(statearr_39165_39228[(1)] = (8));

} else {
var statearr_39166_39229 = state_39148__$1;
(statearr_39166_39229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (14))){
var inst_39126 = (state_39148[(8)]);
var inst_39128 = (state_39148[(11)]);
var inst_39126__$1 = (state_39148[(2)]);
var inst_39127 = (inst_39126__$1 == null);
var inst_39128__$1 = cljs.core.not.call(null,inst_39127);
var state_39148__$1 = (function (){var statearr_39167 = state_39148;
(statearr_39167[(8)] = inst_39126__$1);

(statearr_39167[(11)] = inst_39128__$1);

return statearr_39167;
})();
if(inst_39128__$1){
var statearr_39168_39230 = state_39148__$1;
(statearr_39168_39230[(1)] = (15));

} else {
var statearr_39169_39231 = state_39148__$1;
(statearr_39169_39231[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (16))){
var inst_39128 = (state_39148[(11)]);
var state_39148__$1 = state_39148;
var statearr_39170_39232 = state_39148__$1;
(statearr_39170_39232[(2)] = inst_39128);

(statearr_39170_39232[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (10))){
var inst_39120 = (state_39148[(2)]);
var state_39148__$1 = state_39148;
var statearr_39171_39233 = state_39148__$1;
(statearr_39171_39233[(2)] = inst_39120);

(statearr_39171_39233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (18))){
var inst_39131 = (state_39148[(2)]);
var state_39148__$1 = state_39148;
var statearr_39172_39234 = state_39148__$1;
(statearr_39172_39234[(2)] = inst_39131);

(statearr_39172_39234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39149 === (8))){
var inst_39117 = cljs.core.async.close_BANG_.call(null,to);
var state_39148__$1 = state_39148;
var statearr_39173_39235 = state_39148__$1;
(statearr_39173_39235[(2)] = inst_39117);

(statearr_39173_39235[(1)] = (10));


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
});})(c__38623__auto__,jobs,results,process,async))
;
return ((function (switch__38511__auto__,c__38623__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0 = (function (){
var statearr_39177 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__);

(statearr_39177[(1)] = (1));

return statearr_39177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1 = (function (state_39148){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39178){if((e39178 instanceof Object)){
var ex__38515__auto__ = e39178;
var statearr_39179_39236 = state_39148;
(statearr_39179_39236[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39237 = state_39148;
state_39148 = G__39237;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__ = function(state_39148){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1.call(this,state_39148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38512__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto__,jobs,results,process,async))
})();
var state__38625__auto__ = (function (){var statearr_39180 = f__38624__auto__.call(null);
(statearr_39180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto__);

return statearr_39180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto__,jobs,results,process,async))
);

return c__38623__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args39238 = [];
var len__26126__auto___39241 = arguments.length;
var i__26127__auto___39242 = (0);
while(true){
if((i__26127__auto___39242 < len__26126__auto___39241)){
args39238.push((arguments[i__26127__auto___39242]));

var G__39243 = (i__26127__auto___39242 + (1));
i__26127__auto___39242 = G__39243;
continue;
} else {
}
break;
}

var G__39240 = args39238.length;
switch (G__39240) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39238.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args39245 = [];
var len__26126__auto___39248 = arguments.length;
var i__26127__auto___39249 = (0);
while(true){
if((i__26127__auto___39249 < len__26126__auto___39248)){
args39245.push((arguments[i__26127__auto___39249]));

var G__39250 = (i__26127__auto___39249 + (1));
i__26127__auto___39249 = G__39250;
continue;
} else {
}
break;
}

var G__39247 = args39245.length;
switch (G__39247) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39245.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args39252 = [];
var len__26126__auto___39305 = arguments.length;
var i__26127__auto___39306 = (0);
while(true){
if((i__26127__auto___39306 < len__26126__auto___39305)){
args39252.push((arguments[i__26127__auto___39306]));

var G__39307 = (i__26127__auto___39306 + (1));
i__26127__auto___39306 = G__39307;
continue;
} else {
}
break;
}

var G__39254 = args39252.length;
switch (G__39254) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39252.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38623__auto___39309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___39309,tc,fc){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___39309,tc,fc){
return (function (state_39280){
var state_val_39281 = (state_39280[(1)]);
if((state_val_39281 === (7))){
var inst_39276 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39282_39310 = state_39280__$1;
(statearr_39282_39310[(2)] = inst_39276);

(statearr_39282_39310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (1))){
var state_39280__$1 = state_39280;
var statearr_39283_39311 = state_39280__$1;
(statearr_39283_39311[(2)] = null);

(statearr_39283_39311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (4))){
var inst_39257 = (state_39280[(7)]);
var inst_39257__$1 = (state_39280[(2)]);
var inst_39258 = (inst_39257__$1 == null);
var state_39280__$1 = (function (){var statearr_39284 = state_39280;
(statearr_39284[(7)] = inst_39257__$1);

return statearr_39284;
})();
if(cljs.core.truth_(inst_39258)){
var statearr_39285_39312 = state_39280__$1;
(statearr_39285_39312[(1)] = (5));

} else {
var statearr_39286_39313 = state_39280__$1;
(statearr_39286_39313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (13))){
var state_39280__$1 = state_39280;
var statearr_39287_39314 = state_39280__$1;
(statearr_39287_39314[(2)] = null);

(statearr_39287_39314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (6))){
var inst_39257 = (state_39280[(7)]);
var inst_39263 = p.call(null,inst_39257);
var state_39280__$1 = state_39280;
if(cljs.core.truth_(inst_39263)){
var statearr_39288_39315 = state_39280__$1;
(statearr_39288_39315[(1)] = (9));

} else {
var statearr_39289_39316 = state_39280__$1;
(statearr_39289_39316[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (3))){
var inst_39278 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39280__$1,inst_39278);
} else {
if((state_val_39281 === (12))){
var state_39280__$1 = state_39280;
var statearr_39290_39317 = state_39280__$1;
(statearr_39290_39317[(2)] = null);

(statearr_39290_39317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (2))){
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39280__$1,(4),ch);
} else {
if((state_val_39281 === (11))){
var inst_39257 = (state_39280[(7)]);
var inst_39267 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39280__$1,(8),inst_39267,inst_39257);
} else {
if((state_val_39281 === (9))){
var state_39280__$1 = state_39280;
var statearr_39291_39318 = state_39280__$1;
(statearr_39291_39318[(2)] = tc);

(statearr_39291_39318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (5))){
var inst_39260 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39261 = cljs.core.async.close_BANG_.call(null,fc);
var state_39280__$1 = (function (){var statearr_39292 = state_39280;
(statearr_39292[(8)] = inst_39260);

return statearr_39292;
})();
var statearr_39293_39319 = state_39280__$1;
(statearr_39293_39319[(2)] = inst_39261);

(statearr_39293_39319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (14))){
var inst_39274 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
var statearr_39294_39320 = state_39280__$1;
(statearr_39294_39320[(2)] = inst_39274);

(statearr_39294_39320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (10))){
var state_39280__$1 = state_39280;
var statearr_39295_39321 = state_39280__$1;
(statearr_39295_39321[(2)] = fc);

(statearr_39295_39321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39281 === (8))){
var inst_39269 = (state_39280[(2)]);
var state_39280__$1 = state_39280;
if(cljs.core.truth_(inst_39269)){
var statearr_39296_39322 = state_39280__$1;
(statearr_39296_39322[(1)] = (12));

} else {
var statearr_39297_39323 = state_39280__$1;
(statearr_39297_39323[(1)] = (13));

}

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
});})(c__38623__auto___39309,tc,fc))
;
return ((function (switch__38511__auto__,c__38623__auto___39309,tc,fc){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_39301 = [null,null,null,null,null,null,null,null,null];
(statearr_39301[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_39301[(1)] = (1));

return statearr_39301;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_39280){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39302){if((e39302 instanceof Object)){
var ex__38515__auto__ = e39302;
var statearr_39303_39324 = state_39280;
(statearr_39303_39324[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39325 = state_39280;
state_39280 = G__39325;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_39280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_39280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___39309,tc,fc))
})();
var state__38625__auto__ = (function (){var statearr_39304 = f__38624__auto__.call(null);
(statearr_39304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___39309);

return statearr_39304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___39309,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto__){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto__){
return (function (state_39389){
var state_val_39390 = (state_39389[(1)]);
if((state_val_39390 === (7))){
var inst_39385 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39391_39412 = state_39389__$1;
(statearr_39391_39412[(2)] = inst_39385);

(statearr_39391_39412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (1))){
var inst_39369 = init;
var state_39389__$1 = (function (){var statearr_39392 = state_39389;
(statearr_39392[(7)] = inst_39369);

return statearr_39392;
})();
var statearr_39393_39413 = state_39389__$1;
(statearr_39393_39413[(2)] = null);

(statearr_39393_39413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (4))){
var inst_39372 = (state_39389[(8)]);
var inst_39372__$1 = (state_39389[(2)]);
var inst_39373 = (inst_39372__$1 == null);
var state_39389__$1 = (function (){var statearr_39394 = state_39389;
(statearr_39394[(8)] = inst_39372__$1);

return statearr_39394;
})();
if(cljs.core.truth_(inst_39373)){
var statearr_39395_39414 = state_39389__$1;
(statearr_39395_39414[(1)] = (5));

} else {
var statearr_39396_39415 = state_39389__$1;
(statearr_39396_39415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (6))){
var inst_39372 = (state_39389[(8)]);
var inst_39369 = (state_39389[(7)]);
var inst_39376 = (state_39389[(9)]);
var inst_39376__$1 = f.call(null,inst_39369,inst_39372);
var inst_39377 = cljs.core.reduced_QMARK_.call(null,inst_39376__$1);
var state_39389__$1 = (function (){var statearr_39397 = state_39389;
(statearr_39397[(9)] = inst_39376__$1);

return statearr_39397;
})();
if(inst_39377){
var statearr_39398_39416 = state_39389__$1;
(statearr_39398_39416[(1)] = (8));

} else {
var statearr_39399_39417 = state_39389__$1;
(statearr_39399_39417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (3))){
var inst_39387 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39389__$1,inst_39387);
} else {
if((state_val_39390 === (2))){
var state_39389__$1 = state_39389;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39389__$1,(4),ch);
} else {
if((state_val_39390 === (9))){
var inst_39376 = (state_39389[(9)]);
var inst_39369 = inst_39376;
var state_39389__$1 = (function (){var statearr_39400 = state_39389;
(statearr_39400[(7)] = inst_39369);

return statearr_39400;
})();
var statearr_39401_39418 = state_39389__$1;
(statearr_39401_39418[(2)] = null);

(statearr_39401_39418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (5))){
var inst_39369 = (state_39389[(7)]);
var state_39389__$1 = state_39389;
var statearr_39402_39419 = state_39389__$1;
(statearr_39402_39419[(2)] = inst_39369);

(statearr_39402_39419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (10))){
var inst_39383 = (state_39389[(2)]);
var state_39389__$1 = state_39389;
var statearr_39403_39420 = state_39389__$1;
(statearr_39403_39420[(2)] = inst_39383);

(statearr_39403_39420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39390 === (8))){
var inst_39376 = (state_39389[(9)]);
var inst_39379 = cljs.core.deref.call(null,inst_39376);
var state_39389__$1 = state_39389;
var statearr_39404_39421 = state_39389__$1;
(statearr_39404_39421[(2)] = inst_39379);

(statearr_39404_39421[(1)] = (10));


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
});})(c__38623__auto__))
;
return ((function (switch__38511__auto__,c__38623__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38512__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38512__auto____0 = (function (){
var statearr_39408 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39408[(0)] = cljs$core$async$reduce_$_state_machine__38512__auto__);

(statearr_39408[(1)] = (1));

return statearr_39408;
});
var cljs$core$async$reduce_$_state_machine__38512__auto____1 = (function (state_39389){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39409){if((e39409 instanceof Object)){
var ex__38515__auto__ = e39409;
var statearr_39410_39422 = state_39389;
(statearr_39410_39422[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39423 = state_39389;
state_39389 = G__39423;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38512__auto__ = function(state_39389){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38512__auto____1.call(this,state_39389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38512__auto____0;
cljs$core$async$reduce_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38512__auto____1;
return cljs$core$async$reduce_$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto__))
})();
var state__38625__auto__ = (function (){var statearr_39411 = f__38624__auto__.call(null);
(statearr_39411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto__);

return statearr_39411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto__))
);

return c__38623__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args39424 = [];
var len__26126__auto___39476 = arguments.length;
var i__26127__auto___39477 = (0);
while(true){
if((i__26127__auto___39477 < len__26126__auto___39476)){
args39424.push((arguments[i__26127__auto___39477]));

var G__39478 = (i__26127__auto___39477 + (1));
i__26127__auto___39477 = G__39478;
continue;
} else {
}
break;
}

var G__39426 = args39424.length;
switch (G__39426) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39424.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto__){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto__){
return (function (state_39451){
var state_val_39452 = (state_39451[(1)]);
if((state_val_39452 === (7))){
var inst_39433 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39453_39480 = state_39451__$1;
(statearr_39453_39480[(2)] = inst_39433);

(statearr_39453_39480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (1))){
var inst_39427 = cljs.core.seq.call(null,coll);
var inst_39428 = inst_39427;
var state_39451__$1 = (function (){var statearr_39454 = state_39451;
(statearr_39454[(7)] = inst_39428);

return statearr_39454;
})();
var statearr_39455_39481 = state_39451__$1;
(statearr_39455_39481[(2)] = null);

(statearr_39455_39481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (4))){
var inst_39428 = (state_39451[(7)]);
var inst_39431 = cljs.core.first.call(null,inst_39428);
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39451__$1,(7),ch,inst_39431);
} else {
if((state_val_39452 === (13))){
var inst_39445 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39456_39482 = state_39451__$1;
(statearr_39456_39482[(2)] = inst_39445);

(statearr_39456_39482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (6))){
var inst_39436 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
if(cljs.core.truth_(inst_39436)){
var statearr_39457_39483 = state_39451__$1;
(statearr_39457_39483[(1)] = (8));

} else {
var statearr_39458_39484 = state_39451__$1;
(statearr_39458_39484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (3))){
var inst_39449 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39451__$1,inst_39449);
} else {
if((state_val_39452 === (12))){
var state_39451__$1 = state_39451;
var statearr_39459_39485 = state_39451__$1;
(statearr_39459_39485[(2)] = null);

(statearr_39459_39485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (2))){
var inst_39428 = (state_39451[(7)]);
var state_39451__$1 = state_39451;
if(cljs.core.truth_(inst_39428)){
var statearr_39460_39486 = state_39451__$1;
(statearr_39460_39486[(1)] = (4));

} else {
var statearr_39461_39487 = state_39451__$1;
(statearr_39461_39487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (11))){
var inst_39442 = cljs.core.async.close_BANG_.call(null,ch);
var state_39451__$1 = state_39451;
var statearr_39462_39488 = state_39451__$1;
(statearr_39462_39488[(2)] = inst_39442);

(statearr_39462_39488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (9))){
var state_39451__$1 = state_39451;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39463_39489 = state_39451__$1;
(statearr_39463_39489[(1)] = (11));

} else {
var statearr_39464_39490 = state_39451__$1;
(statearr_39464_39490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (5))){
var inst_39428 = (state_39451[(7)]);
var state_39451__$1 = state_39451;
var statearr_39465_39491 = state_39451__$1;
(statearr_39465_39491[(2)] = inst_39428);

(statearr_39465_39491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (10))){
var inst_39447 = (state_39451[(2)]);
var state_39451__$1 = state_39451;
var statearr_39466_39492 = state_39451__$1;
(statearr_39466_39492[(2)] = inst_39447);

(statearr_39466_39492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39452 === (8))){
var inst_39428 = (state_39451[(7)]);
var inst_39438 = cljs.core.next.call(null,inst_39428);
var inst_39428__$1 = inst_39438;
var state_39451__$1 = (function (){var statearr_39467 = state_39451;
(statearr_39467[(7)] = inst_39428__$1);

return statearr_39467;
})();
var statearr_39468_39493 = state_39451__$1;
(statearr_39468_39493[(2)] = null);

(statearr_39468_39493[(1)] = (2));


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
});})(c__38623__auto__))
;
return ((function (switch__38511__auto__,c__38623__auto__){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_39472 = [null,null,null,null,null,null,null,null];
(statearr_39472[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_39472[(1)] = (1));

return statearr_39472;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_39451){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39473){if((e39473 instanceof Object)){
var ex__38515__auto__ = e39473;
var statearr_39474_39494 = state_39451;
(statearr_39474_39494[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39495 = state_39451;
state_39451 = G__39495;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_39451){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_39451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto__))
})();
var state__38625__auto__ = (function (){var statearr_39475 = f__38624__auto__.call(null);
(statearr_39475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto__);

return statearr_39475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto__))
);

return c__38623__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25714__auto__ = (((_ == null))?null:_);
var m__25715__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,_);
} else {
var m__25715__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25715__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m,ch);
} else {
var m__25715__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m);
} else {
var m__25715__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39721 = (function (mult,ch,cs,meta39722){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta39722 = meta39722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39723,meta39722__$1){
var self__ = this;
var _39723__$1 = this;
return (new cljs.core.async.t_cljs$core$async39721(self__.mult,self__.ch,self__.cs,meta39722__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39723){
var self__ = this;
var _39723__$1 = this;
return self__.meta39722;
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39722","meta39722",1140132632,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39721";

cljs.core.async.t_cljs$core$async39721.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async39721");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39721 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39721(mult__$1,ch__$1,cs__$1,meta39722){
return (new cljs.core.async.t_cljs$core$async39721(mult__$1,ch__$1,cs__$1,meta39722));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39721(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38623__auto___39946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___39946,cs,m,dchan,dctr,done){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___39946,cs,m,dchan,dctr,done){
return (function (state_39858){
var state_val_39859 = (state_39858[(1)]);
if((state_val_39859 === (7))){
var inst_39854 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39860_39947 = state_39858__$1;
(statearr_39860_39947[(2)] = inst_39854);

(statearr_39860_39947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (20))){
var inst_39757 = (state_39858[(7)]);
var inst_39769 = cljs.core.first.call(null,inst_39757);
var inst_39770 = cljs.core.nth.call(null,inst_39769,(0),null);
var inst_39771 = cljs.core.nth.call(null,inst_39769,(1),null);
var state_39858__$1 = (function (){var statearr_39861 = state_39858;
(statearr_39861[(8)] = inst_39770);

return statearr_39861;
})();
if(cljs.core.truth_(inst_39771)){
var statearr_39862_39948 = state_39858__$1;
(statearr_39862_39948[(1)] = (22));

} else {
var statearr_39863_39949 = state_39858__$1;
(statearr_39863_39949[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (27))){
var inst_39806 = (state_39858[(9)]);
var inst_39799 = (state_39858[(10)]);
var inst_39801 = (state_39858[(11)]);
var inst_39726 = (state_39858[(12)]);
var inst_39806__$1 = cljs.core._nth.call(null,inst_39799,inst_39801);
var inst_39807 = cljs.core.async.put_BANG_.call(null,inst_39806__$1,inst_39726,done);
var state_39858__$1 = (function (){var statearr_39864 = state_39858;
(statearr_39864[(9)] = inst_39806__$1);

return statearr_39864;
})();
if(cljs.core.truth_(inst_39807)){
var statearr_39865_39950 = state_39858__$1;
(statearr_39865_39950[(1)] = (30));

} else {
var statearr_39866_39951 = state_39858__$1;
(statearr_39866_39951[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (1))){
var state_39858__$1 = state_39858;
var statearr_39867_39952 = state_39858__$1;
(statearr_39867_39952[(2)] = null);

(statearr_39867_39952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (24))){
var inst_39757 = (state_39858[(7)]);
var inst_39776 = (state_39858[(2)]);
var inst_39777 = cljs.core.next.call(null,inst_39757);
var inst_39735 = inst_39777;
var inst_39736 = null;
var inst_39737 = (0);
var inst_39738 = (0);
var state_39858__$1 = (function (){var statearr_39868 = state_39858;
(statearr_39868[(13)] = inst_39737);

(statearr_39868[(14)] = inst_39735);

(statearr_39868[(15)] = inst_39738);

(statearr_39868[(16)] = inst_39776);

(statearr_39868[(17)] = inst_39736);

return statearr_39868;
})();
var statearr_39869_39953 = state_39858__$1;
(statearr_39869_39953[(2)] = null);

(statearr_39869_39953[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (39))){
var state_39858__$1 = state_39858;
var statearr_39873_39954 = state_39858__$1;
(statearr_39873_39954[(2)] = null);

(statearr_39873_39954[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (4))){
var inst_39726 = (state_39858[(12)]);
var inst_39726__$1 = (state_39858[(2)]);
var inst_39727 = (inst_39726__$1 == null);
var state_39858__$1 = (function (){var statearr_39874 = state_39858;
(statearr_39874[(12)] = inst_39726__$1);

return statearr_39874;
})();
if(cljs.core.truth_(inst_39727)){
var statearr_39875_39955 = state_39858__$1;
(statearr_39875_39955[(1)] = (5));

} else {
var statearr_39876_39956 = state_39858__$1;
(statearr_39876_39956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (15))){
var inst_39737 = (state_39858[(13)]);
var inst_39735 = (state_39858[(14)]);
var inst_39738 = (state_39858[(15)]);
var inst_39736 = (state_39858[(17)]);
var inst_39753 = (state_39858[(2)]);
var inst_39754 = (inst_39738 + (1));
var tmp39870 = inst_39737;
var tmp39871 = inst_39735;
var tmp39872 = inst_39736;
var inst_39735__$1 = tmp39871;
var inst_39736__$1 = tmp39872;
var inst_39737__$1 = tmp39870;
var inst_39738__$1 = inst_39754;
var state_39858__$1 = (function (){var statearr_39877 = state_39858;
(statearr_39877[(13)] = inst_39737__$1);

(statearr_39877[(14)] = inst_39735__$1);

(statearr_39877[(15)] = inst_39738__$1);

(statearr_39877[(18)] = inst_39753);

(statearr_39877[(17)] = inst_39736__$1);

return statearr_39877;
})();
var statearr_39878_39957 = state_39858__$1;
(statearr_39878_39957[(2)] = null);

(statearr_39878_39957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (21))){
var inst_39780 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39882_39958 = state_39858__$1;
(statearr_39882_39958[(2)] = inst_39780);

(statearr_39882_39958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (31))){
var inst_39806 = (state_39858[(9)]);
var inst_39810 = done.call(null,null);
var inst_39811 = cljs.core.async.untap_STAR_.call(null,m,inst_39806);
var state_39858__$1 = (function (){var statearr_39883 = state_39858;
(statearr_39883[(19)] = inst_39810);

return statearr_39883;
})();
var statearr_39884_39959 = state_39858__$1;
(statearr_39884_39959[(2)] = inst_39811);

(statearr_39884_39959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (32))){
var inst_39798 = (state_39858[(20)]);
var inst_39799 = (state_39858[(10)]);
var inst_39801 = (state_39858[(11)]);
var inst_39800 = (state_39858[(21)]);
var inst_39813 = (state_39858[(2)]);
var inst_39814 = (inst_39801 + (1));
var tmp39879 = inst_39798;
var tmp39880 = inst_39799;
var tmp39881 = inst_39800;
var inst_39798__$1 = tmp39879;
var inst_39799__$1 = tmp39880;
var inst_39800__$1 = tmp39881;
var inst_39801__$1 = inst_39814;
var state_39858__$1 = (function (){var statearr_39885 = state_39858;
(statearr_39885[(20)] = inst_39798__$1);

(statearr_39885[(22)] = inst_39813);

(statearr_39885[(10)] = inst_39799__$1);

(statearr_39885[(11)] = inst_39801__$1);

(statearr_39885[(21)] = inst_39800__$1);

return statearr_39885;
})();
var statearr_39886_39960 = state_39858__$1;
(statearr_39886_39960[(2)] = null);

(statearr_39886_39960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (40))){
var inst_39826 = (state_39858[(23)]);
var inst_39830 = done.call(null,null);
var inst_39831 = cljs.core.async.untap_STAR_.call(null,m,inst_39826);
var state_39858__$1 = (function (){var statearr_39887 = state_39858;
(statearr_39887[(24)] = inst_39830);

return statearr_39887;
})();
var statearr_39888_39961 = state_39858__$1;
(statearr_39888_39961[(2)] = inst_39831);

(statearr_39888_39961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (33))){
var inst_39817 = (state_39858[(25)]);
var inst_39819 = cljs.core.chunked_seq_QMARK_.call(null,inst_39817);
var state_39858__$1 = state_39858;
if(inst_39819){
var statearr_39889_39962 = state_39858__$1;
(statearr_39889_39962[(1)] = (36));

} else {
var statearr_39890_39963 = state_39858__$1;
(statearr_39890_39963[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (13))){
var inst_39747 = (state_39858[(26)]);
var inst_39750 = cljs.core.async.close_BANG_.call(null,inst_39747);
var state_39858__$1 = state_39858;
var statearr_39891_39964 = state_39858__$1;
(statearr_39891_39964[(2)] = inst_39750);

(statearr_39891_39964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (22))){
var inst_39770 = (state_39858[(8)]);
var inst_39773 = cljs.core.async.close_BANG_.call(null,inst_39770);
var state_39858__$1 = state_39858;
var statearr_39892_39965 = state_39858__$1;
(statearr_39892_39965[(2)] = inst_39773);

(statearr_39892_39965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (36))){
var inst_39817 = (state_39858[(25)]);
var inst_39821 = cljs.core.chunk_first.call(null,inst_39817);
var inst_39822 = cljs.core.chunk_rest.call(null,inst_39817);
var inst_39823 = cljs.core.count.call(null,inst_39821);
var inst_39798 = inst_39822;
var inst_39799 = inst_39821;
var inst_39800 = inst_39823;
var inst_39801 = (0);
var state_39858__$1 = (function (){var statearr_39893 = state_39858;
(statearr_39893[(20)] = inst_39798);

(statearr_39893[(10)] = inst_39799);

(statearr_39893[(11)] = inst_39801);

(statearr_39893[(21)] = inst_39800);

return statearr_39893;
})();
var statearr_39894_39966 = state_39858__$1;
(statearr_39894_39966[(2)] = null);

(statearr_39894_39966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (41))){
var inst_39817 = (state_39858[(25)]);
var inst_39833 = (state_39858[(2)]);
var inst_39834 = cljs.core.next.call(null,inst_39817);
var inst_39798 = inst_39834;
var inst_39799 = null;
var inst_39800 = (0);
var inst_39801 = (0);
var state_39858__$1 = (function (){var statearr_39895 = state_39858;
(statearr_39895[(20)] = inst_39798);

(statearr_39895[(10)] = inst_39799);

(statearr_39895[(27)] = inst_39833);

(statearr_39895[(11)] = inst_39801);

(statearr_39895[(21)] = inst_39800);

return statearr_39895;
})();
var statearr_39896_39967 = state_39858__$1;
(statearr_39896_39967[(2)] = null);

(statearr_39896_39967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (43))){
var state_39858__$1 = state_39858;
var statearr_39897_39968 = state_39858__$1;
(statearr_39897_39968[(2)] = null);

(statearr_39897_39968[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (29))){
var inst_39842 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39898_39969 = state_39858__$1;
(statearr_39898_39969[(2)] = inst_39842);

(statearr_39898_39969[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (44))){
var inst_39851 = (state_39858[(2)]);
var state_39858__$1 = (function (){var statearr_39899 = state_39858;
(statearr_39899[(28)] = inst_39851);

return statearr_39899;
})();
var statearr_39900_39970 = state_39858__$1;
(statearr_39900_39970[(2)] = null);

(statearr_39900_39970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (6))){
var inst_39790 = (state_39858[(29)]);
var inst_39789 = cljs.core.deref.call(null,cs);
var inst_39790__$1 = cljs.core.keys.call(null,inst_39789);
var inst_39791 = cljs.core.count.call(null,inst_39790__$1);
var inst_39792 = cljs.core.reset_BANG_.call(null,dctr,inst_39791);
var inst_39797 = cljs.core.seq.call(null,inst_39790__$1);
var inst_39798 = inst_39797;
var inst_39799 = null;
var inst_39800 = (0);
var inst_39801 = (0);
var state_39858__$1 = (function (){var statearr_39901 = state_39858;
(statearr_39901[(30)] = inst_39792);

(statearr_39901[(20)] = inst_39798);

(statearr_39901[(29)] = inst_39790__$1);

(statearr_39901[(10)] = inst_39799);

(statearr_39901[(11)] = inst_39801);

(statearr_39901[(21)] = inst_39800);

return statearr_39901;
})();
var statearr_39902_39971 = state_39858__$1;
(statearr_39902_39971[(2)] = null);

(statearr_39902_39971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (28))){
var inst_39798 = (state_39858[(20)]);
var inst_39817 = (state_39858[(25)]);
var inst_39817__$1 = cljs.core.seq.call(null,inst_39798);
var state_39858__$1 = (function (){var statearr_39903 = state_39858;
(statearr_39903[(25)] = inst_39817__$1);

return statearr_39903;
})();
if(inst_39817__$1){
var statearr_39904_39972 = state_39858__$1;
(statearr_39904_39972[(1)] = (33));

} else {
var statearr_39905_39973 = state_39858__$1;
(statearr_39905_39973[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (25))){
var inst_39801 = (state_39858[(11)]);
var inst_39800 = (state_39858[(21)]);
var inst_39803 = (inst_39801 < inst_39800);
var inst_39804 = inst_39803;
var state_39858__$1 = state_39858;
if(cljs.core.truth_(inst_39804)){
var statearr_39906_39974 = state_39858__$1;
(statearr_39906_39974[(1)] = (27));

} else {
var statearr_39907_39975 = state_39858__$1;
(statearr_39907_39975[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (34))){
var state_39858__$1 = state_39858;
var statearr_39908_39976 = state_39858__$1;
(statearr_39908_39976[(2)] = null);

(statearr_39908_39976[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (17))){
var state_39858__$1 = state_39858;
var statearr_39909_39977 = state_39858__$1;
(statearr_39909_39977[(2)] = null);

(statearr_39909_39977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (3))){
var inst_39856 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39858__$1,inst_39856);
} else {
if((state_val_39859 === (12))){
var inst_39785 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39910_39978 = state_39858__$1;
(statearr_39910_39978[(2)] = inst_39785);

(statearr_39910_39978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (2))){
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39858__$1,(4),ch);
} else {
if((state_val_39859 === (23))){
var state_39858__$1 = state_39858;
var statearr_39911_39979 = state_39858__$1;
(statearr_39911_39979[(2)] = null);

(statearr_39911_39979[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (35))){
var inst_39840 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39912_39980 = state_39858__$1;
(statearr_39912_39980[(2)] = inst_39840);

(statearr_39912_39980[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (19))){
var inst_39757 = (state_39858[(7)]);
var inst_39761 = cljs.core.chunk_first.call(null,inst_39757);
var inst_39762 = cljs.core.chunk_rest.call(null,inst_39757);
var inst_39763 = cljs.core.count.call(null,inst_39761);
var inst_39735 = inst_39762;
var inst_39736 = inst_39761;
var inst_39737 = inst_39763;
var inst_39738 = (0);
var state_39858__$1 = (function (){var statearr_39913 = state_39858;
(statearr_39913[(13)] = inst_39737);

(statearr_39913[(14)] = inst_39735);

(statearr_39913[(15)] = inst_39738);

(statearr_39913[(17)] = inst_39736);

return statearr_39913;
})();
var statearr_39914_39981 = state_39858__$1;
(statearr_39914_39981[(2)] = null);

(statearr_39914_39981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (11))){
var inst_39735 = (state_39858[(14)]);
var inst_39757 = (state_39858[(7)]);
var inst_39757__$1 = cljs.core.seq.call(null,inst_39735);
var state_39858__$1 = (function (){var statearr_39915 = state_39858;
(statearr_39915[(7)] = inst_39757__$1);

return statearr_39915;
})();
if(inst_39757__$1){
var statearr_39916_39982 = state_39858__$1;
(statearr_39916_39982[(1)] = (16));

} else {
var statearr_39917_39983 = state_39858__$1;
(statearr_39917_39983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (9))){
var inst_39787 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39918_39984 = state_39858__$1;
(statearr_39918_39984[(2)] = inst_39787);

(statearr_39918_39984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (5))){
var inst_39733 = cljs.core.deref.call(null,cs);
var inst_39734 = cljs.core.seq.call(null,inst_39733);
var inst_39735 = inst_39734;
var inst_39736 = null;
var inst_39737 = (0);
var inst_39738 = (0);
var state_39858__$1 = (function (){var statearr_39919 = state_39858;
(statearr_39919[(13)] = inst_39737);

(statearr_39919[(14)] = inst_39735);

(statearr_39919[(15)] = inst_39738);

(statearr_39919[(17)] = inst_39736);

return statearr_39919;
})();
var statearr_39920_39985 = state_39858__$1;
(statearr_39920_39985[(2)] = null);

(statearr_39920_39985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (14))){
var state_39858__$1 = state_39858;
var statearr_39921_39986 = state_39858__$1;
(statearr_39921_39986[(2)] = null);

(statearr_39921_39986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (45))){
var inst_39848 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39922_39987 = state_39858__$1;
(statearr_39922_39987[(2)] = inst_39848);

(statearr_39922_39987[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (26))){
var inst_39790 = (state_39858[(29)]);
var inst_39844 = (state_39858[(2)]);
var inst_39845 = cljs.core.seq.call(null,inst_39790);
var state_39858__$1 = (function (){var statearr_39923 = state_39858;
(statearr_39923[(31)] = inst_39844);

return statearr_39923;
})();
if(inst_39845){
var statearr_39924_39988 = state_39858__$1;
(statearr_39924_39988[(1)] = (42));

} else {
var statearr_39925_39989 = state_39858__$1;
(statearr_39925_39989[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (16))){
var inst_39757 = (state_39858[(7)]);
var inst_39759 = cljs.core.chunked_seq_QMARK_.call(null,inst_39757);
var state_39858__$1 = state_39858;
if(inst_39759){
var statearr_39926_39990 = state_39858__$1;
(statearr_39926_39990[(1)] = (19));

} else {
var statearr_39927_39991 = state_39858__$1;
(statearr_39927_39991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (38))){
var inst_39837 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39928_39992 = state_39858__$1;
(statearr_39928_39992[(2)] = inst_39837);

(statearr_39928_39992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (30))){
var state_39858__$1 = state_39858;
var statearr_39929_39993 = state_39858__$1;
(statearr_39929_39993[(2)] = null);

(statearr_39929_39993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (10))){
var inst_39738 = (state_39858[(15)]);
var inst_39736 = (state_39858[(17)]);
var inst_39746 = cljs.core._nth.call(null,inst_39736,inst_39738);
var inst_39747 = cljs.core.nth.call(null,inst_39746,(0),null);
var inst_39748 = cljs.core.nth.call(null,inst_39746,(1),null);
var state_39858__$1 = (function (){var statearr_39930 = state_39858;
(statearr_39930[(26)] = inst_39747);

return statearr_39930;
})();
if(cljs.core.truth_(inst_39748)){
var statearr_39931_39994 = state_39858__$1;
(statearr_39931_39994[(1)] = (13));

} else {
var statearr_39932_39995 = state_39858__$1;
(statearr_39932_39995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (18))){
var inst_39783 = (state_39858[(2)]);
var state_39858__$1 = state_39858;
var statearr_39933_39996 = state_39858__$1;
(statearr_39933_39996[(2)] = inst_39783);

(statearr_39933_39996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (42))){
var state_39858__$1 = state_39858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39858__$1,(45),dchan);
} else {
if((state_val_39859 === (37))){
var inst_39826 = (state_39858[(23)]);
var inst_39817 = (state_39858[(25)]);
var inst_39726 = (state_39858[(12)]);
var inst_39826__$1 = cljs.core.first.call(null,inst_39817);
var inst_39827 = cljs.core.async.put_BANG_.call(null,inst_39826__$1,inst_39726,done);
var state_39858__$1 = (function (){var statearr_39934 = state_39858;
(statearr_39934[(23)] = inst_39826__$1);

return statearr_39934;
})();
if(cljs.core.truth_(inst_39827)){
var statearr_39935_39997 = state_39858__$1;
(statearr_39935_39997[(1)] = (39));

} else {
var statearr_39936_39998 = state_39858__$1;
(statearr_39936_39998[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39859 === (8))){
var inst_39737 = (state_39858[(13)]);
var inst_39738 = (state_39858[(15)]);
var inst_39740 = (inst_39738 < inst_39737);
var inst_39741 = inst_39740;
var state_39858__$1 = state_39858;
if(cljs.core.truth_(inst_39741)){
var statearr_39937_39999 = state_39858__$1;
(statearr_39937_39999[(1)] = (10));

} else {
var statearr_39938_40000 = state_39858__$1;
(statearr_39938_40000[(1)] = (11));

}

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
});})(c__38623__auto___39946,cs,m,dchan,dctr,done))
;
return ((function (switch__38511__auto__,c__38623__auto___39946,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38512__auto__ = null;
var cljs$core$async$mult_$_state_machine__38512__auto____0 = (function (){
var statearr_39942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39942[(0)] = cljs$core$async$mult_$_state_machine__38512__auto__);

(statearr_39942[(1)] = (1));

return statearr_39942;
});
var cljs$core$async$mult_$_state_machine__38512__auto____1 = (function (state_39858){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_39858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e39943){if((e39943 instanceof Object)){
var ex__38515__auto__ = e39943;
var statearr_39944_40001 = state_39858;
(statearr_39944_40001[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40002 = state_39858;
state_39858 = G__40002;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38512__auto__ = function(state_39858){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38512__auto____1.call(this,state_39858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38512__auto____0;
cljs$core$async$mult_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38512__auto____1;
return cljs$core$async$mult_$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___39946,cs,m,dchan,dctr,done))
})();
var state__38625__auto__ = (function (){var statearr_39945 = f__38624__auto__.call(null);
(statearr_39945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___39946);

return statearr_39945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___39946,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args40003 = [];
var len__26126__auto___40006 = arguments.length;
var i__26127__auto___40007 = (0);
while(true){
if((i__26127__auto___40007 < len__26126__auto___40006)){
args40003.push((arguments[i__26127__auto___40007]));

var G__40008 = (i__26127__auto___40007 + (1));
i__26127__auto___40007 = G__40008;
continue;
} else {
}
break;
}

var G__40005 = args40003.length;
switch (G__40005) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40003.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m,ch);
} else {
var m__25715__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m,ch);
} else {
var m__25715__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m);
} else {
var m__25715__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m,state_map);
} else {
var m__25715__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25714__auto__ = (((m == null))?null:m);
var m__25715__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,m,mode);
} else {
var m__25715__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26133__auto__ = [];
var len__26126__auto___40020 = arguments.length;
var i__26127__auto___40021 = (0);
while(true){
if((i__26127__auto___40021 < len__26126__auto___40020)){
args__26133__auto__.push((arguments[i__26127__auto___40021]));

var G__40022 = (i__26127__auto___40021 + (1));
i__26127__auto___40021 = G__40022;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40014){
var map__40015 = p__40014;
var map__40015__$1 = ((((!((map__40015 == null)))?((((map__40015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40015):map__40015);
var opts = map__40015__$1;
var statearr_40017_40023 = state;
(statearr_40017_40023[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40015,map__40015__$1,opts){
return (function (val){
var statearr_40018_40024 = state;
(statearr_40018_40024[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40015,map__40015__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40019_40025 = state;
(statearr_40019_40025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40010){
var G__40011 = cljs.core.first.call(null,seq40010);
var seq40010__$1 = cljs.core.next.call(null,seq40010);
var G__40012 = cljs.core.first.call(null,seq40010__$1);
var seq40010__$2 = cljs.core.next.call(null,seq40010__$1);
var G__40013 = cljs.core.first.call(null,seq40010__$2);
var seq40010__$3 = cljs.core.next.call(null,seq40010__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40011,G__40012,G__40013,seq40010__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40191 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40192){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40192 = meta40192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40193,meta40192__$1){
var self__ = this;
var _40193__$1 = this;
return (new cljs.core.async.t_cljs$core$async40191(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40192__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40193){
var self__ = this;
var _40193__$1 = this;
return self__.meta40192;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40192","meta40192",-1319380882,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40191";

cljs.core.async.t_cljs$core$async40191.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async40191");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40191 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40191(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40192){
return (new cljs.core.async.t_cljs$core$async40191(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40192));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40191(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38623__auto___40356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___40356,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___40356,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40293){
var state_val_40294 = (state_40293[(1)]);
if((state_val_40294 === (7))){
var inst_40209 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40295_40357 = state_40293__$1;
(statearr_40295_40357[(2)] = inst_40209);

(statearr_40295_40357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (20))){
var inst_40221 = (state_40293[(7)]);
var state_40293__$1 = state_40293;
var statearr_40296_40358 = state_40293__$1;
(statearr_40296_40358[(2)] = inst_40221);

(statearr_40296_40358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (27))){
var state_40293__$1 = state_40293;
var statearr_40297_40359 = state_40293__$1;
(statearr_40297_40359[(2)] = null);

(statearr_40297_40359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (1))){
var inst_40197 = (state_40293[(8)]);
var inst_40197__$1 = calc_state.call(null);
var inst_40199 = (inst_40197__$1 == null);
var inst_40200 = cljs.core.not.call(null,inst_40199);
var state_40293__$1 = (function (){var statearr_40298 = state_40293;
(statearr_40298[(8)] = inst_40197__$1);

return statearr_40298;
})();
if(inst_40200){
var statearr_40299_40360 = state_40293__$1;
(statearr_40299_40360[(1)] = (2));

} else {
var statearr_40300_40361 = state_40293__$1;
(statearr_40300_40361[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (24))){
var inst_40267 = (state_40293[(9)]);
var inst_40253 = (state_40293[(10)]);
var inst_40244 = (state_40293[(11)]);
var inst_40267__$1 = inst_40244.call(null,inst_40253);
var state_40293__$1 = (function (){var statearr_40301 = state_40293;
(statearr_40301[(9)] = inst_40267__$1);

return statearr_40301;
})();
if(cljs.core.truth_(inst_40267__$1)){
var statearr_40302_40362 = state_40293__$1;
(statearr_40302_40362[(1)] = (29));

} else {
var statearr_40303_40363 = state_40293__$1;
(statearr_40303_40363[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (4))){
var inst_40212 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40212)){
var statearr_40304_40364 = state_40293__$1;
(statearr_40304_40364[(1)] = (8));

} else {
var statearr_40305_40365 = state_40293__$1;
(statearr_40305_40365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (15))){
var inst_40238 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40238)){
var statearr_40306_40366 = state_40293__$1;
(statearr_40306_40366[(1)] = (19));

} else {
var statearr_40307_40367 = state_40293__$1;
(statearr_40307_40367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (21))){
var inst_40243 = (state_40293[(12)]);
var inst_40243__$1 = (state_40293[(2)]);
var inst_40244 = cljs.core.get.call(null,inst_40243__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40245 = cljs.core.get.call(null,inst_40243__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40246 = cljs.core.get.call(null,inst_40243__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40293__$1 = (function (){var statearr_40308 = state_40293;
(statearr_40308[(13)] = inst_40245);

(statearr_40308[(11)] = inst_40244);

(statearr_40308[(12)] = inst_40243__$1);

return statearr_40308;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40293__$1,(22),inst_40246);
} else {
if((state_val_40294 === (31))){
var inst_40275 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40275)){
var statearr_40309_40368 = state_40293__$1;
(statearr_40309_40368[(1)] = (32));

} else {
var statearr_40310_40369 = state_40293__$1;
(statearr_40310_40369[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (32))){
var inst_40252 = (state_40293[(14)]);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40293__$1,(35),out,inst_40252);
} else {
if((state_val_40294 === (33))){
var inst_40243 = (state_40293[(12)]);
var inst_40221 = inst_40243;
var state_40293__$1 = (function (){var statearr_40311 = state_40293;
(statearr_40311[(7)] = inst_40221);

return statearr_40311;
})();
var statearr_40312_40370 = state_40293__$1;
(statearr_40312_40370[(2)] = null);

(statearr_40312_40370[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (13))){
var inst_40221 = (state_40293[(7)]);
var inst_40228 = inst_40221.cljs$lang$protocol_mask$partition0$;
var inst_40229 = (inst_40228 & (64));
var inst_40230 = inst_40221.cljs$core$ISeq$;
var inst_40231 = (inst_40229) || (inst_40230);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40231)){
var statearr_40313_40371 = state_40293__$1;
(statearr_40313_40371[(1)] = (16));

} else {
var statearr_40314_40372 = state_40293__$1;
(statearr_40314_40372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (22))){
var inst_40253 = (state_40293[(10)]);
var inst_40252 = (state_40293[(14)]);
var inst_40251 = (state_40293[(2)]);
var inst_40252__$1 = cljs.core.nth.call(null,inst_40251,(0),null);
var inst_40253__$1 = cljs.core.nth.call(null,inst_40251,(1),null);
var inst_40254 = (inst_40252__$1 == null);
var inst_40255 = cljs.core._EQ_.call(null,inst_40253__$1,change);
var inst_40256 = (inst_40254) || (inst_40255);
var state_40293__$1 = (function (){var statearr_40315 = state_40293;
(statearr_40315[(10)] = inst_40253__$1);

(statearr_40315[(14)] = inst_40252__$1);

return statearr_40315;
})();
if(cljs.core.truth_(inst_40256)){
var statearr_40316_40373 = state_40293__$1;
(statearr_40316_40373[(1)] = (23));

} else {
var statearr_40317_40374 = state_40293__$1;
(statearr_40317_40374[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (36))){
var inst_40243 = (state_40293[(12)]);
var inst_40221 = inst_40243;
var state_40293__$1 = (function (){var statearr_40318 = state_40293;
(statearr_40318[(7)] = inst_40221);

return statearr_40318;
})();
var statearr_40319_40375 = state_40293__$1;
(statearr_40319_40375[(2)] = null);

(statearr_40319_40375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (29))){
var inst_40267 = (state_40293[(9)]);
var state_40293__$1 = state_40293;
var statearr_40320_40376 = state_40293__$1;
(statearr_40320_40376[(2)] = inst_40267);

(statearr_40320_40376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (6))){
var state_40293__$1 = state_40293;
var statearr_40321_40377 = state_40293__$1;
(statearr_40321_40377[(2)] = false);

(statearr_40321_40377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (28))){
var inst_40263 = (state_40293[(2)]);
var inst_40264 = calc_state.call(null);
var inst_40221 = inst_40264;
var state_40293__$1 = (function (){var statearr_40322 = state_40293;
(statearr_40322[(7)] = inst_40221);

(statearr_40322[(15)] = inst_40263);

return statearr_40322;
})();
var statearr_40323_40378 = state_40293__$1;
(statearr_40323_40378[(2)] = null);

(statearr_40323_40378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (25))){
var inst_40289 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40324_40379 = state_40293__$1;
(statearr_40324_40379[(2)] = inst_40289);

(statearr_40324_40379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (34))){
var inst_40287 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40325_40380 = state_40293__$1;
(statearr_40325_40380[(2)] = inst_40287);

(statearr_40325_40380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (17))){
var state_40293__$1 = state_40293;
var statearr_40326_40381 = state_40293__$1;
(statearr_40326_40381[(2)] = false);

(statearr_40326_40381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (3))){
var state_40293__$1 = state_40293;
var statearr_40327_40382 = state_40293__$1;
(statearr_40327_40382[(2)] = false);

(statearr_40327_40382[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (12))){
var inst_40291 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40293__$1,inst_40291);
} else {
if((state_val_40294 === (2))){
var inst_40197 = (state_40293[(8)]);
var inst_40202 = inst_40197.cljs$lang$protocol_mask$partition0$;
var inst_40203 = (inst_40202 & (64));
var inst_40204 = inst_40197.cljs$core$ISeq$;
var inst_40205 = (inst_40203) || (inst_40204);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40205)){
var statearr_40328_40383 = state_40293__$1;
(statearr_40328_40383[(1)] = (5));

} else {
var statearr_40329_40384 = state_40293__$1;
(statearr_40329_40384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (23))){
var inst_40252 = (state_40293[(14)]);
var inst_40258 = (inst_40252 == null);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40258)){
var statearr_40330_40385 = state_40293__$1;
(statearr_40330_40385[(1)] = (26));

} else {
var statearr_40331_40386 = state_40293__$1;
(statearr_40331_40386[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (35))){
var inst_40278 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
if(cljs.core.truth_(inst_40278)){
var statearr_40332_40387 = state_40293__$1;
(statearr_40332_40387[(1)] = (36));

} else {
var statearr_40333_40388 = state_40293__$1;
(statearr_40333_40388[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (19))){
var inst_40221 = (state_40293[(7)]);
var inst_40240 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40221);
var state_40293__$1 = state_40293;
var statearr_40334_40389 = state_40293__$1;
(statearr_40334_40389[(2)] = inst_40240);

(statearr_40334_40389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (11))){
var inst_40221 = (state_40293[(7)]);
var inst_40225 = (inst_40221 == null);
var inst_40226 = cljs.core.not.call(null,inst_40225);
var state_40293__$1 = state_40293;
if(inst_40226){
var statearr_40335_40390 = state_40293__$1;
(statearr_40335_40390[(1)] = (13));

} else {
var statearr_40336_40391 = state_40293__$1;
(statearr_40336_40391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (9))){
var inst_40197 = (state_40293[(8)]);
var state_40293__$1 = state_40293;
var statearr_40337_40392 = state_40293__$1;
(statearr_40337_40392[(2)] = inst_40197);

(statearr_40337_40392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (5))){
var state_40293__$1 = state_40293;
var statearr_40338_40393 = state_40293__$1;
(statearr_40338_40393[(2)] = true);

(statearr_40338_40393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (14))){
var state_40293__$1 = state_40293;
var statearr_40339_40394 = state_40293__$1;
(statearr_40339_40394[(2)] = false);

(statearr_40339_40394[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (26))){
var inst_40253 = (state_40293[(10)]);
var inst_40260 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40253);
var state_40293__$1 = state_40293;
var statearr_40340_40395 = state_40293__$1;
(statearr_40340_40395[(2)] = inst_40260);

(statearr_40340_40395[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (16))){
var state_40293__$1 = state_40293;
var statearr_40341_40396 = state_40293__$1;
(statearr_40341_40396[(2)] = true);

(statearr_40341_40396[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (38))){
var inst_40283 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40342_40397 = state_40293__$1;
(statearr_40342_40397[(2)] = inst_40283);

(statearr_40342_40397[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (30))){
var inst_40245 = (state_40293[(13)]);
var inst_40253 = (state_40293[(10)]);
var inst_40244 = (state_40293[(11)]);
var inst_40270 = cljs.core.empty_QMARK_.call(null,inst_40244);
var inst_40271 = inst_40245.call(null,inst_40253);
var inst_40272 = cljs.core.not.call(null,inst_40271);
var inst_40273 = (inst_40270) && (inst_40272);
var state_40293__$1 = state_40293;
var statearr_40343_40398 = state_40293__$1;
(statearr_40343_40398[(2)] = inst_40273);

(statearr_40343_40398[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (10))){
var inst_40197 = (state_40293[(8)]);
var inst_40217 = (state_40293[(2)]);
var inst_40218 = cljs.core.get.call(null,inst_40217,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40219 = cljs.core.get.call(null,inst_40217,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40220 = cljs.core.get.call(null,inst_40217,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40221 = inst_40197;
var state_40293__$1 = (function (){var statearr_40344 = state_40293;
(statearr_40344[(16)] = inst_40219);

(statearr_40344[(7)] = inst_40221);

(statearr_40344[(17)] = inst_40218);

(statearr_40344[(18)] = inst_40220);

return statearr_40344;
})();
var statearr_40345_40399 = state_40293__$1;
(statearr_40345_40399[(2)] = null);

(statearr_40345_40399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (18))){
var inst_40235 = (state_40293[(2)]);
var state_40293__$1 = state_40293;
var statearr_40346_40400 = state_40293__$1;
(statearr_40346_40400[(2)] = inst_40235);

(statearr_40346_40400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (37))){
var state_40293__$1 = state_40293;
var statearr_40347_40401 = state_40293__$1;
(statearr_40347_40401[(2)] = null);

(statearr_40347_40401[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40294 === (8))){
var inst_40197 = (state_40293[(8)]);
var inst_40214 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40197);
var state_40293__$1 = state_40293;
var statearr_40348_40402 = state_40293__$1;
(statearr_40348_40402[(2)] = inst_40214);

(statearr_40348_40402[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__38623__auto___40356,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38511__auto__,c__38623__auto___40356,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38512__auto__ = null;
var cljs$core$async$mix_$_state_machine__38512__auto____0 = (function (){
var statearr_40352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40352[(0)] = cljs$core$async$mix_$_state_machine__38512__auto__);

(statearr_40352[(1)] = (1));

return statearr_40352;
});
var cljs$core$async$mix_$_state_machine__38512__auto____1 = (function (state_40293){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_40293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e40353){if((e40353 instanceof Object)){
var ex__38515__auto__ = e40353;
var statearr_40354_40403 = state_40293;
(statearr_40354_40403[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40404 = state_40293;
state_40293 = G__40404;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38512__auto__ = function(state_40293){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38512__auto____1.call(this,state_40293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38512__auto____0;
cljs$core$async$mix_$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38512__auto____1;
return cljs$core$async$mix_$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___40356,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38625__auto__ = (function (){var statearr_40355 = f__38624__auto__.call(null);
(statearr_40355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___40356);

return statearr_40355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___40356,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25714__auto__ = (((p == null))?null:p);
var m__25715__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25715__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25714__auto__ = (((p == null))?null:p);
var m__25715__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,p,v,ch);
} else {
var m__25715__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args40405 = [];
var len__26126__auto___40408 = arguments.length;
var i__26127__auto___40409 = (0);
while(true){
if((i__26127__auto___40409 < len__26126__auto___40408)){
args40405.push((arguments[i__26127__auto___40409]));

var G__40410 = (i__26127__auto___40409 + (1));
i__26127__auto___40409 = G__40410;
continue;
} else {
}
break;
}

var G__40407 = args40405.length;
switch (G__40407) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40405.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25714__auto__ = (((p == null))?null:p);
var m__25715__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,p);
} else {
var m__25715__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25714__auto__ = (((p == null))?null:p);
var m__25715__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25714__auto__)]);
if(!((m__25715__auto__ == null))){
return m__25715__auto__.call(null,p,v);
} else {
var m__25715__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25715__auto____$1 == null))){
return m__25715__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args40413 = [];
var len__26126__auto___40538 = arguments.length;
var i__26127__auto___40539 = (0);
while(true){
if((i__26127__auto___40539 < len__26126__auto___40538)){
args40413.push((arguments[i__26127__auto___40539]));

var G__40540 = (i__26127__auto___40539 + (1));
i__26127__auto___40539 = G__40540;
continue;
} else {
}
break;
}

var G__40415 = args40413.length;
switch (G__40415) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40413.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25051__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25051__auto__)){
return or__25051__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25051__auto__,mults){
return (function (p1__40412_SHARP_){
if(cljs.core.truth_(p1__40412_SHARP_.call(null,topic))){
return p1__40412_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40412_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25051__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40416 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40416 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40417){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40417 = meta40417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40418,meta40417__$1){
var self__ = this;
var _40418__$1 = this;
return (new cljs.core.async.t_cljs$core$async40416(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40417__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40418){
var self__ = this;
var _40418__$1 = this;
return self__.meta40417;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40417","meta40417",1934649545,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40416.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40416.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40416";

cljs.core.async.t_cljs$core$async40416.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async40416");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40416 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40417){
return (new cljs.core.async.t_cljs$core$async40416(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40417));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40416(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38623__auto___40542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___40542,mults,ensure_mult,p){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___40542,mults,ensure_mult,p){
return (function (state_40490){
var state_val_40491 = (state_40490[(1)]);
if((state_val_40491 === (7))){
var inst_40486 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40492_40543 = state_40490__$1;
(statearr_40492_40543[(2)] = inst_40486);

(statearr_40492_40543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (20))){
var state_40490__$1 = state_40490;
var statearr_40493_40544 = state_40490__$1;
(statearr_40493_40544[(2)] = null);

(statearr_40493_40544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (1))){
var state_40490__$1 = state_40490;
var statearr_40494_40545 = state_40490__$1;
(statearr_40494_40545[(2)] = null);

(statearr_40494_40545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (24))){
var inst_40469 = (state_40490[(7)]);
var inst_40478 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40469);
var state_40490__$1 = state_40490;
var statearr_40495_40546 = state_40490__$1;
(statearr_40495_40546[(2)] = inst_40478);

(statearr_40495_40546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (4))){
var inst_40421 = (state_40490[(8)]);
var inst_40421__$1 = (state_40490[(2)]);
var inst_40422 = (inst_40421__$1 == null);
var state_40490__$1 = (function (){var statearr_40496 = state_40490;
(statearr_40496[(8)] = inst_40421__$1);

return statearr_40496;
})();
if(cljs.core.truth_(inst_40422)){
var statearr_40497_40547 = state_40490__$1;
(statearr_40497_40547[(1)] = (5));

} else {
var statearr_40498_40548 = state_40490__$1;
(statearr_40498_40548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (15))){
var inst_40463 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40499_40549 = state_40490__$1;
(statearr_40499_40549[(2)] = inst_40463);

(statearr_40499_40549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (21))){
var inst_40483 = (state_40490[(2)]);
var state_40490__$1 = (function (){var statearr_40500 = state_40490;
(statearr_40500[(9)] = inst_40483);

return statearr_40500;
})();
var statearr_40501_40550 = state_40490__$1;
(statearr_40501_40550[(2)] = null);

(statearr_40501_40550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (13))){
var inst_40445 = (state_40490[(10)]);
var inst_40447 = cljs.core.chunked_seq_QMARK_.call(null,inst_40445);
var state_40490__$1 = state_40490;
if(inst_40447){
var statearr_40502_40551 = state_40490__$1;
(statearr_40502_40551[(1)] = (16));

} else {
var statearr_40503_40552 = state_40490__$1;
(statearr_40503_40552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (22))){
var inst_40475 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
if(cljs.core.truth_(inst_40475)){
var statearr_40504_40553 = state_40490__$1;
(statearr_40504_40553[(1)] = (23));

} else {
var statearr_40505_40554 = state_40490__$1;
(statearr_40505_40554[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (6))){
var inst_40471 = (state_40490[(11)]);
var inst_40421 = (state_40490[(8)]);
var inst_40469 = (state_40490[(7)]);
var inst_40469__$1 = topic_fn.call(null,inst_40421);
var inst_40470 = cljs.core.deref.call(null,mults);
var inst_40471__$1 = cljs.core.get.call(null,inst_40470,inst_40469__$1);
var state_40490__$1 = (function (){var statearr_40506 = state_40490;
(statearr_40506[(11)] = inst_40471__$1);

(statearr_40506[(7)] = inst_40469__$1);

return statearr_40506;
})();
if(cljs.core.truth_(inst_40471__$1)){
var statearr_40507_40555 = state_40490__$1;
(statearr_40507_40555[(1)] = (19));

} else {
var statearr_40508_40556 = state_40490__$1;
(statearr_40508_40556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (25))){
var inst_40480 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40509_40557 = state_40490__$1;
(statearr_40509_40557[(2)] = inst_40480);

(statearr_40509_40557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (17))){
var inst_40445 = (state_40490[(10)]);
var inst_40454 = cljs.core.first.call(null,inst_40445);
var inst_40455 = cljs.core.async.muxch_STAR_.call(null,inst_40454);
var inst_40456 = cljs.core.async.close_BANG_.call(null,inst_40455);
var inst_40457 = cljs.core.next.call(null,inst_40445);
var inst_40431 = inst_40457;
var inst_40432 = null;
var inst_40433 = (0);
var inst_40434 = (0);
var state_40490__$1 = (function (){var statearr_40510 = state_40490;
(statearr_40510[(12)] = inst_40433);

(statearr_40510[(13)] = inst_40434);

(statearr_40510[(14)] = inst_40431);

(statearr_40510[(15)] = inst_40432);

(statearr_40510[(16)] = inst_40456);

return statearr_40510;
})();
var statearr_40511_40558 = state_40490__$1;
(statearr_40511_40558[(2)] = null);

(statearr_40511_40558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (3))){
var inst_40488 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40490__$1,inst_40488);
} else {
if((state_val_40491 === (12))){
var inst_40465 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40512_40559 = state_40490__$1;
(statearr_40512_40559[(2)] = inst_40465);

(statearr_40512_40559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (2))){
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40490__$1,(4),ch);
} else {
if((state_val_40491 === (23))){
var state_40490__$1 = state_40490;
var statearr_40513_40560 = state_40490__$1;
(statearr_40513_40560[(2)] = null);

(statearr_40513_40560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (19))){
var inst_40471 = (state_40490[(11)]);
var inst_40421 = (state_40490[(8)]);
var inst_40473 = cljs.core.async.muxch_STAR_.call(null,inst_40471);
var state_40490__$1 = state_40490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40490__$1,(22),inst_40473,inst_40421);
} else {
if((state_val_40491 === (11))){
var inst_40431 = (state_40490[(14)]);
var inst_40445 = (state_40490[(10)]);
var inst_40445__$1 = cljs.core.seq.call(null,inst_40431);
var state_40490__$1 = (function (){var statearr_40514 = state_40490;
(statearr_40514[(10)] = inst_40445__$1);

return statearr_40514;
})();
if(inst_40445__$1){
var statearr_40515_40561 = state_40490__$1;
(statearr_40515_40561[(1)] = (13));

} else {
var statearr_40516_40562 = state_40490__$1;
(statearr_40516_40562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (9))){
var inst_40467 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40517_40563 = state_40490__$1;
(statearr_40517_40563[(2)] = inst_40467);

(statearr_40517_40563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (5))){
var inst_40428 = cljs.core.deref.call(null,mults);
var inst_40429 = cljs.core.vals.call(null,inst_40428);
var inst_40430 = cljs.core.seq.call(null,inst_40429);
var inst_40431 = inst_40430;
var inst_40432 = null;
var inst_40433 = (0);
var inst_40434 = (0);
var state_40490__$1 = (function (){var statearr_40518 = state_40490;
(statearr_40518[(12)] = inst_40433);

(statearr_40518[(13)] = inst_40434);

(statearr_40518[(14)] = inst_40431);

(statearr_40518[(15)] = inst_40432);

return statearr_40518;
})();
var statearr_40519_40564 = state_40490__$1;
(statearr_40519_40564[(2)] = null);

(statearr_40519_40564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (14))){
var state_40490__$1 = state_40490;
var statearr_40523_40565 = state_40490__$1;
(statearr_40523_40565[(2)] = null);

(statearr_40523_40565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (16))){
var inst_40445 = (state_40490[(10)]);
var inst_40449 = cljs.core.chunk_first.call(null,inst_40445);
var inst_40450 = cljs.core.chunk_rest.call(null,inst_40445);
var inst_40451 = cljs.core.count.call(null,inst_40449);
var inst_40431 = inst_40450;
var inst_40432 = inst_40449;
var inst_40433 = inst_40451;
var inst_40434 = (0);
var state_40490__$1 = (function (){var statearr_40524 = state_40490;
(statearr_40524[(12)] = inst_40433);

(statearr_40524[(13)] = inst_40434);

(statearr_40524[(14)] = inst_40431);

(statearr_40524[(15)] = inst_40432);

return statearr_40524;
})();
var statearr_40525_40566 = state_40490__$1;
(statearr_40525_40566[(2)] = null);

(statearr_40525_40566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (10))){
var inst_40433 = (state_40490[(12)]);
var inst_40434 = (state_40490[(13)]);
var inst_40431 = (state_40490[(14)]);
var inst_40432 = (state_40490[(15)]);
var inst_40439 = cljs.core._nth.call(null,inst_40432,inst_40434);
var inst_40440 = cljs.core.async.muxch_STAR_.call(null,inst_40439);
var inst_40441 = cljs.core.async.close_BANG_.call(null,inst_40440);
var inst_40442 = (inst_40434 + (1));
var tmp40520 = inst_40433;
var tmp40521 = inst_40431;
var tmp40522 = inst_40432;
var inst_40431__$1 = tmp40521;
var inst_40432__$1 = tmp40522;
var inst_40433__$1 = tmp40520;
var inst_40434__$1 = inst_40442;
var state_40490__$1 = (function (){var statearr_40526 = state_40490;
(statearr_40526[(12)] = inst_40433__$1);

(statearr_40526[(13)] = inst_40434__$1);

(statearr_40526[(14)] = inst_40431__$1);

(statearr_40526[(17)] = inst_40441);

(statearr_40526[(15)] = inst_40432__$1);

return statearr_40526;
})();
var statearr_40527_40567 = state_40490__$1;
(statearr_40527_40567[(2)] = null);

(statearr_40527_40567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (18))){
var inst_40460 = (state_40490[(2)]);
var state_40490__$1 = state_40490;
var statearr_40528_40568 = state_40490__$1;
(statearr_40528_40568[(2)] = inst_40460);

(statearr_40528_40568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40491 === (8))){
var inst_40433 = (state_40490[(12)]);
var inst_40434 = (state_40490[(13)]);
var inst_40436 = (inst_40434 < inst_40433);
var inst_40437 = inst_40436;
var state_40490__$1 = state_40490;
if(cljs.core.truth_(inst_40437)){
var statearr_40529_40569 = state_40490__$1;
(statearr_40529_40569[(1)] = (10));

} else {
var statearr_40530_40570 = state_40490__$1;
(statearr_40530_40570[(1)] = (11));

}

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
});})(c__38623__auto___40542,mults,ensure_mult,p))
;
return ((function (switch__38511__auto__,c__38623__auto___40542,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_40534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40534[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_40534[(1)] = (1));

return statearr_40534;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_40490){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_40490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e40535){if((e40535 instanceof Object)){
var ex__38515__auto__ = e40535;
var statearr_40536_40571 = state_40490;
(statearr_40536_40571[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40572 = state_40490;
state_40490 = G__40572;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_40490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_40490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___40542,mults,ensure_mult,p))
})();
var state__38625__auto__ = (function (){var statearr_40537 = f__38624__auto__.call(null);
(statearr_40537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___40542);

return statearr_40537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___40542,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args40573 = [];
var len__26126__auto___40576 = arguments.length;
var i__26127__auto___40577 = (0);
while(true){
if((i__26127__auto___40577 < len__26126__auto___40576)){
args40573.push((arguments[i__26127__auto___40577]));

var G__40578 = (i__26127__auto___40577 + (1));
i__26127__auto___40577 = G__40578;
continue;
} else {
}
break;
}

var G__40575 = args40573.length;
switch (G__40575) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40573.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args40580 = [];
var len__26126__auto___40583 = arguments.length;
var i__26127__auto___40584 = (0);
while(true){
if((i__26127__auto___40584 < len__26126__auto___40583)){
args40580.push((arguments[i__26127__auto___40584]));

var G__40585 = (i__26127__auto___40584 + (1));
i__26127__auto___40584 = G__40585;
continue;
} else {
}
break;
}

var G__40582 = args40580.length;
switch (G__40582) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40580.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args40587 = [];
var len__26126__auto___40658 = arguments.length;
var i__26127__auto___40659 = (0);
while(true){
if((i__26127__auto___40659 < len__26126__auto___40658)){
args40587.push((arguments[i__26127__auto___40659]));

var G__40660 = (i__26127__auto___40659 + (1));
i__26127__auto___40659 = G__40660;
continue;
} else {
}
break;
}

var G__40589 = args40587.length;
switch (G__40589) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40587.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38623__auto___40662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___40662,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___40662,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40628){
var state_val_40629 = (state_40628[(1)]);
if((state_val_40629 === (7))){
var state_40628__$1 = state_40628;
var statearr_40630_40663 = state_40628__$1;
(statearr_40630_40663[(2)] = null);

(statearr_40630_40663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (1))){
var state_40628__$1 = state_40628;
var statearr_40631_40664 = state_40628__$1;
(statearr_40631_40664[(2)] = null);

(statearr_40631_40664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (4))){
var inst_40592 = (state_40628[(7)]);
var inst_40594 = (inst_40592 < cnt);
var state_40628__$1 = state_40628;
if(cljs.core.truth_(inst_40594)){
var statearr_40632_40665 = state_40628__$1;
(statearr_40632_40665[(1)] = (6));

} else {
var statearr_40633_40666 = state_40628__$1;
(statearr_40633_40666[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (15))){
var inst_40624 = (state_40628[(2)]);
var state_40628__$1 = state_40628;
var statearr_40634_40667 = state_40628__$1;
(statearr_40634_40667[(2)] = inst_40624);

(statearr_40634_40667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (13))){
var inst_40617 = cljs.core.async.close_BANG_.call(null,out);
var state_40628__$1 = state_40628;
var statearr_40635_40668 = state_40628__$1;
(statearr_40635_40668[(2)] = inst_40617);

(statearr_40635_40668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (6))){
var state_40628__$1 = state_40628;
var statearr_40636_40669 = state_40628__$1;
(statearr_40636_40669[(2)] = null);

(statearr_40636_40669[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (3))){
var inst_40626 = (state_40628[(2)]);
var state_40628__$1 = state_40628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40628__$1,inst_40626);
} else {
if((state_val_40629 === (12))){
var inst_40614 = (state_40628[(8)]);
var inst_40614__$1 = (state_40628[(2)]);
var inst_40615 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40614__$1);
var state_40628__$1 = (function (){var statearr_40637 = state_40628;
(statearr_40637[(8)] = inst_40614__$1);

return statearr_40637;
})();
if(cljs.core.truth_(inst_40615)){
var statearr_40638_40670 = state_40628__$1;
(statearr_40638_40670[(1)] = (13));

} else {
var statearr_40639_40671 = state_40628__$1;
(statearr_40639_40671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (2))){
var inst_40591 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40592 = (0);
var state_40628__$1 = (function (){var statearr_40640 = state_40628;
(statearr_40640[(9)] = inst_40591);

(statearr_40640[(7)] = inst_40592);

return statearr_40640;
})();
var statearr_40641_40672 = state_40628__$1;
(statearr_40641_40672[(2)] = null);

(statearr_40641_40672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (11))){
var inst_40592 = (state_40628[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40628,(10),Object,null,(9));
var inst_40601 = chs__$1.call(null,inst_40592);
var inst_40602 = done.call(null,inst_40592);
var inst_40603 = cljs.core.async.take_BANG_.call(null,inst_40601,inst_40602);
var state_40628__$1 = state_40628;
var statearr_40642_40673 = state_40628__$1;
(statearr_40642_40673[(2)] = inst_40603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40628__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (9))){
var inst_40592 = (state_40628[(7)]);
var inst_40605 = (state_40628[(2)]);
var inst_40606 = (inst_40592 + (1));
var inst_40592__$1 = inst_40606;
var state_40628__$1 = (function (){var statearr_40643 = state_40628;
(statearr_40643[(7)] = inst_40592__$1);

(statearr_40643[(10)] = inst_40605);

return statearr_40643;
})();
var statearr_40644_40674 = state_40628__$1;
(statearr_40644_40674[(2)] = null);

(statearr_40644_40674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (5))){
var inst_40612 = (state_40628[(2)]);
var state_40628__$1 = (function (){var statearr_40645 = state_40628;
(statearr_40645[(11)] = inst_40612);

return statearr_40645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40628__$1,(12),dchan);
} else {
if((state_val_40629 === (14))){
var inst_40614 = (state_40628[(8)]);
var inst_40619 = cljs.core.apply.call(null,f,inst_40614);
var state_40628__$1 = state_40628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40628__$1,(16),out,inst_40619);
} else {
if((state_val_40629 === (16))){
var inst_40621 = (state_40628[(2)]);
var state_40628__$1 = (function (){var statearr_40646 = state_40628;
(statearr_40646[(12)] = inst_40621);

return statearr_40646;
})();
var statearr_40647_40675 = state_40628__$1;
(statearr_40647_40675[(2)] = null);

(statearr_40647_40675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (10))){
var inst_40596 = (state_40628[(2)]);
var inst_40597 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40628__$1 = (function (){var statearr_40648 = state_40628;
(statearr_40648[(13)] = inst_40596);

return statearr_40648;
})();
var statearr_40649_40676 = state_40628__$1;
(statearr_40649_40676[(2)] = inst_40597);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40628__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40629 === (8))){
var inst_40610 = (state_40628[(2)]);
var state_40628__$1 = state_40628;
var statearr_40650_40677 = state_40628__$1;
(statearr_40650_40677[(2)] = inst_40610);

(statearr_40650_40677[(1)] = (5));


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
});})(c__38623__auto___40662,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38511__auto__,c__38623__auto___40662,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_40654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40654[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_40654[(1)] = (1));

return statearr_40654;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_40628){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_40628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e40655){if((e40655 instanceof Object)){
var ex__38515__auto__ = e40655;
var statearr_40656_40678 = state_40628;
(statearr_40656_40678[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40679 = state_40628;
state_40628 = G__40679;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_40628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_40628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___40662,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38625__auto__ = (function (){var statearr_40657 = f__38624__auto__.call(null);
(statearr_40657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___40662);

return statearr_40657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___40662,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args40681 = [];
var len__26126__auto___40739 = arguments.length;
var i__26127__auto___40740 = (0);
while(true){
if((i__26127__auto___40740 < len__26126__auto___40739)){
args40681.push((arguments[i__26127__auto___40740]));

var G__40741 = (i__26127__auto___40740 + (1));
i__26127__auto___40740 = G__40741;
continue;
} else {
}
break;
}

var G__40683 = args40681.length;
switch (G__40683) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40681.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38623__auto___40743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___40743,out){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___40743,out){
return (function (state_40715){
var state_val_40716 = (state_40715[(1)]);
if((state_val_40716 === (7))){
var inst_40695 = (state_40715[(7)]);
var inst_40694 = (state_40715[(8)]);
var inst_40694__$1 = (state_40715[(2)]);
var inst_40695__$1 = cljs.core.nth.call(null,inst_40694__$1,(0),null);
var inst_40696 = cljs.core.nth.call(null,inst_40694__$1,(1),null);
var inst_40697 = (inst_40695__$1 == null);
var state_40715__$1 = (function (){var statearr_40717 = state_40715;
(statearr_40717[(9)] = inst_40696);

(statearr_40717[(7)] = inst_40695__$1);

(statearr_40717[(8)] = inst_40694__$1);

return statearr_40717;
})();
if(cljs.core.truth_(inst_40697)){
var statearr_40718_40744 = state_40715__$1;
(statearr_40718_40744[(1)] = (8));

} else {
var statearr_40719_40745 = state_40715__$1;
(statearr_40719_40745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (1))){
var inst_40684 = cljs.core.vec.call(null,chs);
var inst_40685 = inst_40684;
var state_40715__$1 = (function (){var statearr_40720 = state_40715;
(statearr_40720[(10)] = inst_40685);

return statearr_40720;
})();
var statearr_40721_40746 = state_40715__$1;
(statearr_40721_40746[(2)] = null);

(statearr_40721_40746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (4))){
var inst_40685 = (state_40715[(10)]);
var state_40715__$1 = state_40715;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40715__$1,(7),inst_40685);
} else {
if((state_val_40716 === (6))){
var inst_40711 = (state_40715[(2)]);
var state_40715__$1 = state_40715;
var statearr_40722_40747 = state_40715__$1;
(statearr_40722_40747[(2)] = inst_40711);

(statearr_40722_40747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (3))){
var inst_40713 = (state_40715[(2)]);
var state_40715__$1 = state_40715;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40715__$1,inst_40713);
} else {
if((state_val_40716 === (2))){
var inst_40685 = (state_40715[(10)]);
var inst_40687 = cljs.core.count.call(null,inst_40685);
var inst_40688 = (inst_40687 > (0));
var state_40715__$1 = state_40715;
if(cljs.core.truth_(inst_40688)){
var statearr_40724_40748 = state_40715__$1;
(statearr_40724_40748[(1)] = (4));

} else {
var statearr_40725_40749 = state_40715__$1;
(statearr_40725_40749[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (11))){
var inst_40685 = (state_40715[(10)]);
var inst_40704 = (state_40715[(2)]);
var tmp40723 = inst_40685;
var inst_40685__$1 = tmp40723;
var state_40715__$1 = (function (){var statearr_40726 = state_40715;
(statearr_40726[(11)] = inst_40704);

(statearr_40726[(10)] = inst_40685__$1);

return statearr_40726;
})();
var statearr_40727_40750 = state_40715__$1;
(statearr_40727_40750[(2)] = null);

(statearr_40727_40750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (9))){
var inst_40695 = (state_40715[(7)]);
var state_40715__$1 = state_40715;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40715__$1,(11),out,inst_40695);
} else {
if((state_val_40716 === (5))){
var inst_40709 = cljs.core.async.close_BANG_.call(null,out);
var state_40715__$1 = state_40715;
var statearr_40728_40751 = state_40715__$1;
(statearr_40728_40751[(2)] = inst_40709);

(statearr_40728_40751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (10))){
var inst_40707 = (state_40715[(2)]);
var state_40715__$1 = state_40715;
var statearr_40729_40752 = state_40715__$1;
(statearr_40729_40752[(2)] = inst_40707);

(statearr_40729_40752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40716 === (8))){
var inst_40696 = (state_40715[(9)]);
var inst_40685 = (state_40715[(10)]);
var inst_40695 = (state_40715[(7)]);
var inst_40694 = (state_40715[(8)]);
var inst_40699 = (function (){var cs = inst_40685;
var vec__40690 = inst_40694;
var v = inst_40695;
var c = inst_40696;
return ((function (cs,vec__40690,v,c,inst_40696,inst_40685,inst_40695,inst_40694,state_val_40716,c__38623__auto___40743,out){
return (function (p1__40680_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40680_SHARP_);
});
;})(cs,vec__40690,v,c,inst_40696,inst_40685,inst_40695,inst_40694,state_val_40716,c__38623__auto___40743,out))
})();
var inst_40700 = cljs.core.filterv.call(null,inst_40699,inst_40685);
var inst_40685__$1 = inst_40700;
var state_40715__$1 = (function (){var statearr_40730 = state_40715;
(statearr_40730[(10)] = inst_40685__$1);

return statearr_40730;
})();
var statearr_40731_40753 = state_40715__$1;
(statearr_40731_40753[(2)] = null);

(statearr_40731_40753[(1)] = (2));


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
});})(c__38623__auto___40743,out))
;
return ((function (switch__38511__auto__,c__38623__auto___40743,out){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_40735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40735[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_40735[(1)] = (1));

return statearr_40735;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_40715){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_40715);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e40736){if((e40736 instanceof Object)){
var ex__38515__auto__ = e40736;
var statearr_40737_40754 = state_40715;
(statearr_40737_40754[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40715);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40755 = state_40715;
state_40715 = G__40755;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_40715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_40715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___40743,out))
})();
var state__38625__auto__ = (function (){var statearr_40738 = f__38624__auto__.call(null);
(statearr_40738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___40743);

return statearr_40738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___40743,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args40756 = [];
var len__26126__auto___40805 = arguments.length;
var i__26127__auto___40806 = (0);
while(true){
if((i__26127__auto___40806 < len__26126__auto___40805)){
args40756.push((arguments[i__26127__auto___40806]));

var G__40807 = (i__26127__auto___40806 + (1));
i__26127__auto___40806 = G__40807;
continue;
} else {
}
break;
}

var G__40758 = args40756.length;
switch (G__40758) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40756.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38623__auto___40809 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___40809,out){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___40809,out){
return (function (state_40782){
var state_val_40783 = (state_40782[(1)]);
if((state_val_40783 === (7))){
var inst_40764 = (state_40782[(7)]);
var inst_40764__$1 = (state_40782[(2)]);
var inst_40765 = (inst_40764__$1 == null);
var inst_40766 = cljs.core.not.call(null,inst_40765);
var state_40782__$1 = (function (){var statearr_40784 = state_40782;
(statearr_40784[(7)] = inst_40764__$1);

return statearr_40784;
})();
if(inst_40766){
var statearr_40785_40810 = state_40782__$1;
(statearr_40785_40810[(1)] = (8));

} else {
var statearr_40786_40811 = state_40782__$1;
(statearr_40786_40811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (1))){
var inst_40759 = (0);
var state_40782__$1 = (function (){var statearr_40787 = state_40782;
(statearr_40787[(8)] = inst_40759);

return statearr_40787;
})();
var statearr_40788_40812 = state_40782__$1;
(statearr_40788_40812[(2)] = null);

(statearr_40788_40812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (4))){
var state_40782__$1 = state_40782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40782__$1,(7),ch);
} else {
if((state_val_40783 === (6))){
var inst_40777 = (state_40782[(2)]);
var state_40782__$1 = state_40782;
var statearr_40789_40813 = state_40782__$1;
(statearr_40789_40813[(2)] = inst_40777);

(statearr_40789_40813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (3))){
var inst_40779 = (state_40782[(2)]);
var inst_40780 = cljs.core.async.close_BANG_.call(null,out);
var state_40782__$1 = (function (){var statearr_40790 = state_40782;
(statearr_40790[(9)] = inst_40779);

return statearr_40790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40782__$1,inst_40780);
} else {
if((state_val_40783 === (2))){
var inst_40759 = (state_40782[(8)]);
var inst_40761 = (inst_40759 < n);
var state_40782__$1 = state_40782;
if(cljs.core.truth_(inst_40761)){
var statearr_40791_40814 = state_40782__$1;
(statearr_40791_40814[(1)] = (4));

} else {
var statearr_40792_40815 = state_40782__$1;
(statearr_40792_40815[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (11))){
var inst_40759 = (state_40782[(8)]);
var inst_40769 = (state_40782[(2)]);
var inst_40770 = (inst_40759 + (1));
var inst_40759__$1 = inst_40770;
var state_40782__$1 = (function (){var statearr_40793 = state_40782;
(statearr_40793[(8)] = inst_40759__$1);

(statearr_40793[(10)] = inst_40769);

return statearr_40793;
})();
var statearr_40794_40816 = state_40782__$1;
(statearr_40794_40816[(2)] = null);

(statearr_40794_40816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (9))){
var state_40782__$1 = state_40782;
var statearr_40795_40817 = state_40782__$1;
(statearr_40795_40817[(2)] = null);

(statearr_40795_40817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (5))){
var state_40782__$1 = state_40782;
var statearr_40796_40818 = state_40782__$1;
(statearr_40796_40818[(2)] = null);

(statearr_40796_40818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (10))){
var inst_40774 = (state_40782[(2)]);
var state_40782__$1 = state_40782;
var statearr_40797_40819 = state_40782__$1;
(statearr_40797_40819[(2)] = inst_40774);

(statearr_40797_40819[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40783 === (8))){
var inst_40764 = (state_40782[(7)]);
var state_40782__$1 = state_40782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40782__$1,(11),out,inst_40764);
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
});})(c__38623__auto___40809,out))
;
return ((function (switch__38511__auto__,c__38623__auto___40809,out){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_40801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40801[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_40801[(1)] = (1));

return statearr_40801;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_40782){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_40782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e40802){if((e40802 instanceof Object)){
var ex__38515__auto__ = e40802;
var statearr_40803_40820 = state_40782;
(statearr_40803_40820[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40821 = state_40782;
state_40782 = G__40821;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_40782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_40782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___40809,out))
})();
var state__38625__auto__ = (function (){var statearr_40804 = f__38624__auto__.call(null);
(statearr_40804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___40809);

return statearr_40804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___40809,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40829 = (function (map_LT_,f,ch,meta40830){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40830 = meta40830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40831,meta40830__$1){
var self__ = this;
var _40831__$1 = this;
return (new cljs.core.async.t_cljs$core$async40829(self__.map_LT_,self__.f,self__.ch,meta40830__$1));
});

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40831){
var self__ = this;
var _40831__$1 = this;
return self__.meta40830;
});

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40832 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40832 = (function (map_LT_,f,ch,meta40830,_,fn1,meta40833){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40830 = meta40830;
this._ = _;
this.fn1 = fn1;
this.meta40833 = meta40833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40834,meta40833__$1){
var self__ = this;
var _40834__$1 = this;
return (new cljs.core.async.t_cljs$core$async40832(self__.map_LT_,self__.f,self__.ch,self__.meta40830,self__._,self__.fn1,meta40833__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40834){
var self__ = this;
var _40834__$1 = this;
return self__.meta40833;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40832.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40832.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40832.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40832.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40822_SHARP_){
return f1.call(null,(((p1__40822_SHARP_ == null))?null:self__.f.call(null,p1__40822_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40832.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40830","meta40830",-500990412,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40829","cljs.core.async/t_cljs$core$async40829",-1967805983,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40833","meta40833",-1196430142,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40832.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40832";

cljs.core.async.t_cljs$core$async40832.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async40832");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40832 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40832(map_LT___$1,f__$1,ch__$1,meta40830__$1,___$2,fn1__$1,meta40833){
return (new cljs.core.async.t_cljs$core$async40832(map_LT___$1,f__$1,ch__$1,meta40830__$1,___$2,fn1__$1,meta40833));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40832(self__.map_LT_,self__.f,self__.ch,self__.meta40830,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25039__auto__ = ret;
if(cljs.core.truth_(and__25039__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25039__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40829.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40830","meta40830",-500990412,null)], null);
});

cljs.core.async.t_cljs$core$async40829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40829";

cljs.core.async.t_cljs$core$async40829.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async40829");
});

cljs.core.async.__GT_t_cljs$core$async40829 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40829(map_LT___$1,f__$1,ch__$1,meta40830){
return (new cljs.core.async.t_cljs$core$async40829(map_LT___$1,f__$1,ch__$1,meta40830));
});

}

return (new cljs.core.async.t_cljs$core$async40829(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40838 = (function (map_GT_,f,ch,meta40839){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40839 = meta40839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40840,meta40839__$1){
var self__ = this;
var _40840__$1 = this;
return (new cljs.core.async.t_cljs$core$async40838(self__.map_GT_,self__.f,self__.ch,meta40839__$1));
});

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40840){
var self__ = this;
var _40840__$1 = this;
return self__.meta40839;
});

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40839","meta40839",1805444230,null)], null);
});

cljs.core.async.t_cljs$core$async40838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40838";

cljs.core.async.t_cljs$core$async40838.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async40838");
});

cljs.core.async.__GT_t_cljs$core$async40838 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40838(map_GT___$1,f__$1,ch__$1,meta40839){
return (new cljs.core.async.t_cljs$core$async40838(map_GT___$1,f__$1,ch__$1,meta40839));
});

}

return (new cljs.core.async.t_cljs$core$async40838(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40844 = (function (filter_GT_,p,ch,meta40845){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40845 = meta40845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40846,meta40845__$1){
var self__ = this;
var _40846__$1 = this;
return (new cljs.core.async.t_cljs$core$async40844(self__.filter_GT_,self__.p,self__.ch,meta40845__$1));
});

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40846){
var self__ = this;
var _40846__$1 = this;
return self__.meta40845;
});

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40845","meta40845",460654419,null)], null);
});

cljs.core.async.t_cljs$core$async40844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40844";

cljs.core.async.t_cljs$core$async40844.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async40844");
});

cljs.core.async.__GT_t_cljs$core$async40844 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40844(filter_GT___$1,p__$1,ch__$1,meta40845){
return (new cljs.core.async.t_cljs$core$async40844(filter_GT___$1,p__$1,ch__$1,meta40845));
});

}

return (new cljs.core.async.t_cljs$core$async40844(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args40847 = [];
var len__26126__auto___40891 = arguments.length;
var i__26127__auto___40892 = (0);
while(true){
if((i__26127__auto___40892 < len__26126__auto___40891)){
args40847.push((arguments[i__26127__auto___40892]));

var G__40893 = (i__26127__auto___40892 + (1));
i__26127__auto___40892 = G__40893;
continue;
} else {
}
break;
}

var G__40849 = args40847.length;
switch (G__40849) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40847.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38623__auto___40895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___40895,out){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___40895,out){
return (function (state_40870){
var state_val_40871 = (state_40870[(1)]);
if((state_val_40871 === (7))){
var inst_40866 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
var statearr_40872_40896 = state_40870__$1;
(statearr_40872_40896[(2)] = inst_40866);

(statearr_40872_40896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (1))){
var state_40870__$1 = state_40870;
var statearr_40873_40897 = state_40870__$1;
(statearr_40873_40897[(2)] = null);

(statearr_40873_40897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (4))){
var inst_40852 = (state_40870[(7)]);
var inst_40852__$1 = (state_40870[(2)]);
var inst_40853 = (inst_40852__$1 == null);
var state_40870__$1 = (function (){var statearr_40874 = state_40870;
(statearr_40874[(7)] = inst_40852__$1);

return statearr_40874;
})();
if(cljs.core.truth_(inst_40853)){
var statearr_40875_40898 = state_40870__$1;
(statearr_40875_40898[(1)] = (5));

} else {
var statearr_40876_40899 = state_40870__$1;
(statearr_40876_40899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (6))){
var inst_40852 = (state_40870[(7)]);
var inst_40857 = p.call(null,inst_40852);
var state_40870__$1 = state_40870;
if(cljs.core.truth_(inst_40857)){
var statearr_40877_40900 = state_40870__$1;
(statearr_40877_40900[(1)] = (8));

} else {
var statearr_40878_40901 = state_40870__$1;
(statearr_40878_40901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (3))){
var inst_40868 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40870__$1,inst_40868);
} else {
if((state_val_40871 === (2))){
var state_40870__$1 = state_40870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40870__$1,(4),ch);
} else {
if((state_val_40871 === (11))){
var inst_40860 = (state_40870[(2)]);
var state_40870__$1 = state_40870;
var statearr_40879_40902 = state_40870__$1;
(statearr_40879_40902[(2)] = inst_40860);

(statearr_40879_40902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (9))){
var state_40870__$1 = state_40870;
var statearr_40880_40903 = state_40870__$1;
(statearr_40880_40903[(2)] = null);

(statearr_40880_40903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (5))){
var inst_40855 = cljs.core.async.close_BANG_.call(null,out);
var state_40870__$1 = state_40870;
var statearr_40881_40904 = state_40870__$1;
(statearr_40881_40904[(2)] = inst_40855);

(statearr_40881_40904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (10))){
var inst_40863 = (state_40870[(2)]);
var state_40870__$1 = (function (){var statearr_40882 = state_40870;
(statearr_40882[(8)] = inst_40863);

return statearr_40882;
})();
var statearr_40883_40905 = state_40870__$1;
(statearr_40883_40905[(2)] = null);

(statearr_40883_40905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40871 === (8))){
var inst_40852 = (state_40870[(7)]);
var state_40870__$1 = state_40870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40870__$1,(11),out,inst_40852);
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
});})(c__38623__auto___40895,out))
;
return ((function (switch__38511__auto__,c__38623__auto___40895,out){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_40887 = [null,null,null,null,null,null,null,null,null];
(statearr_40887[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_40887[(1)] = (1));

return statearr_40887;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_40870){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_40870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e40888){if((e40888 instanceof Object)){
var ex__38515__auto__ = e40888;
var statearr_40889_40906 = state_40870;
(statearr_40889_40906[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40907 = state_40870;
state_40870 = G__40907;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_40870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_40870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___40895,out))
})();
var state__38625__auto__ = (function (){var statearr_40890 = f__38624__auto__.call(null);
(statearr_40890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___40895);

return statearr_40890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___40895,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40908 = [];
var len__26126__auto___40911 = arguments.length;
var i__26127__auto___40912 = (0);
while(true){
if((i__26127__auto___40912 < len__26126__auto___40911)){
args40908.push((arguments[i__26127__auto___40912]));

var G__40913 = (i__26127__auto___40912 + (1));
i__26127__auto___40912 = G__40913;
continue;
} else {
}
break;
}

var G__40910 = args40908.length;
switch (G__40910) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40908.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38623__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto__){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto__){
return (function (state_41080){
var state_val_41081 = (state_41080[(1)]);
if((state_val_41081 === (7))){
var inst_41076 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41082_41123 = state_41080__$1;
(statearr_41082_41123[(2)] = inst_41076);

(statearr_41082_41123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (20))){
var inst_41046 = (state_41080[(7)]);
var inst_41057 = (state_41080[(2)]);
var inst_41058 = cljs.core.next.call(null,inst_41046);
var inst_41032 = inst_41058;
var inst_41033 = null;
var inst_41034 = (0);
var inst_41035 = (0);
var state_41080__$1 = (function (){var statearr_41083 = state_41080;
(statearr_41083[(8)] = inst_41057);

(statearr_41083[(9)] = inst_41035);

(statearr_41083[(10)] = inst_41033);

(statearr_41083[(11)] = inst_41032);

(statearr_41083[(12)] = inst_41034);

return statearr_41083;
})();
var statearr_41084_41124 = state_41080__$1;
(statearr_41084_41124[(2)] = null);

(statearr_41084_41124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (1))){
var state_41080__$1 = state_41080;
var statearr_41085_41125 = state_41080__$1;
(statearr_41085_41125[(2)] = null);

(statearr_41085_41125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (4))){
var inst_41021 = (state_41080[(13)]);
var inst_41021__$1 = (state_41080[(2)]);
var inst_41022 = (inst_41021__$1 == null);
var state_41080__$1 = (function (){var statearr_41086 = state_41080;
(statearr_41086[(13)] = inst_41021__$1);

return statearr_41086;
})();
if(cljs.core.truth_(inst_41022)){
var statearr_41087_41126 = state_41080__$1;
(statearr_41087_41126[(1)] = (5));

} else {
var statearr_41088_41127 = state_41080__$1;
(statearr_41088_41127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (15))){
var state_41080__$1 = state_41080;
var statearr_41092_41128 = state_41080__$1;
(statearr_41092_41128[(2)] = null);

(statearr_41092_41128[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (21))){
var state_41080__$1 = state_41080;
var statearr_41093_41129 = state_41080__$1;
(statearr_41093_41129[(2)] = null);

(statearr_41093_41129[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (13))){
var inst_41035 = (state_41080[(9)]);
var inst_41033 = (state_41080[(10)]);
var inst_41032 = (state_41080[(11)]);
var inst_41034 = (state_41080[(12)]);
var inst_41042 = (state_41080[(2)]);
var inst_41043 = (inst_41035 + (1));
var tmp41089 = inst_41033;
var tmp41090 = inst_41032;
var tmp41091 = inst_41034;
var inst_41032__$1 = tmp41090;
var inst_41033__$1 = tmp41089;
var inst_41034__$1 = tmp41091;
var inst_41035__$1 = inst_41043;
var state_41080__$1 = (function (){var statearr_41094 = state_41080;
(statearr_41094[(14)] = inst_41042);

(statearr_41094[(9)] = inst_41035__$1);

(statearr_41094[(10)] = inst_41033__$1);

(statearr_41094[(11)] = inst_41032__$1);

(statearr_41094[(12)] = inst_41034__$1);

return statearr_41094;
})();
var statearr_41095_41130 = state_41080__$1;
(statearr_41095_41130[(2)] = null);

(statearr_41095_41130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (22))){
var state_41080__$1 = state_41080;
var statearr_41096_41131 = state_41080__$1;
(statearr_41096_41131[(2)] = null);

(statearr_41096_41131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (6))){
var inst_41021 = (state_41080[(13)]);
var inst_41030 = f.call(null,inst_41021);
var inst_41031 = cljs.core.seq.call(null,inst_41030);
var inst_41032 = inst_41031;
var inst_41033 = null;
var inst_41034 = (0);
var inst_41035 = (0);
var state_41080__$1 = (function (){var statearr_41097 = state_41080;
(statearr_41097[(9)] = inst_41035);

(statearr_41097[(10)] = inst_41033);

(statearr_41097[(11)] = inst_41032);

(statearr_41097[(12)] = inst_41034);

return statearr_41097;
})();
var statearr_41098_41132 = state_41080__$1;
(statearr_41098_41132[(2)] = null);

(statearr_41098_41132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (17))){
var inst_41046 = (state_41080[(7)]);
var inst_41050 = cljs.core.chunk_first.call(null,inst_41046);
var inst_41051 = cljs.core.chunk_rest.call(null,inst_41046);
var inst_41052 = cljs.core.count.call(null,inst_41050);
var inst_41032 = inst_41051;
var inst_41033 = inst_41050;
var inst_41034 = inst_41052;
var inst_41035 = (0);
var state_41080__$1 = (function (){var statearr_41099 = state_41080;
(statearr_41099[(9)] = inst_41035);

(statearr_41099[(10)] = inst_41033);

(statearr_41099[(11)] = inst_41032);

(statearr_41099[(12)] = inst_41034);

return statearr_41099;
})();
var statearr_41100_41133 = state_41080__$1;
(statearr_41100_41133[(2)] = null);

(statearr_41100_41133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (3))){
var inst_41078 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41080__$1,inst_41078);
} else {
if((state_val_41081 === (12))){
var inst_41066 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41101_41134 = state_41080__$1;
(statearr_41101_41134[(2)] = inst_41066);

(statearr_41101_41134[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (2))){
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(4),in$);
} else {
if((state_val_41081 === (23))){
var inst_41074 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41102_41135 = state_41080__$1;
(statearr_41102_41135[(2)] = inst_41074);

(statearr_41102_41135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (19))){
var inst_41061 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41103_41136 = state_41080__$1;
(statearr_41103_41136[(2)] = inst_41061);

(statearr_41103_41136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (11))){
var inst_41032 = (state_41080[(11)]);
var inst_41046 = (state_41080[(7)]);
var inst_41046__$1 = cljs.core.seq.call(null,inst_41032);
var state_41080__$1 = (function (){var statearr_41104 = state_41080;
(statearr_41104[(7)] = inst_41046__$1);

return statearr_41104;
})();
if(inst_41046__$1){
var statearr_41105_41137 = state_41080__$1;
(statearr_41105_41137[(1)] = (14));

} else {
var statearr_41106_41138 = state_41080__$1;
(statearr_41106_41138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (9))){
var inst_41068 = (state_41080[(2)]);
var inst_41069 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41080__$1 = (function (){var statearr_41107 = state_41080;
(statearr_41107[(15)] = inst_41068);

return statearr_41107;
})();
if(cljs.core.truth_(inst_41069)){
var statearr_41108_41139 = state_41080__$1;
(statearr_41108_41139[(1)] = (21));

} else {
var statearr_41109_41140 = state_41080__$1;
(statearr_41109_41140[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (5))){
var inst_41024 = cljs.core.async.close_BANG_.call(null,out);
var state_41080__$1 = state_41080;
var statearr_41110_41141 = state_41080__$1;
(statearr_41110_41141[(2)] = inst_41024);

(statearr_41110_41141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (14))){
var inst_41046 = (state_41080[(7)]);
var inst_41048 = cljs.core.chunked_seq_QMARK_.call(null,inst_41046);
var state_41080__$1 = state_41080;
if(inst_41048){
var statearr_41111_41142 = state_41080__$1;
(statearr_41111_41142[(1)] = (17));

} else {
var statearr_41112_41143 = state_41080__$1;
(statearr_41112_41143[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (16))){
var inst_41064 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41113_41144 = state_41080__$1;
(statearr_41113_41144[(2)] = inst_41064);

(statearr_41113_41144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (10))){
var inst_41035 = (state_41080[(9)]);
var inst_41033 = (state_41080[(10)]);
var inst_41040 = cljs.core._nth.call(null,inst_41033,inst_41035);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41080__$1,(13),out,inst_41040);
} else {
if((state_val_41081 === (18))){
var inst_41046 = (state_41080[(7)]);
var inst_41055 = cljs.core.first.call(null,inst_41046);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41080__$1,(20),out,inst_41055);
} else {
if((state_val_41081 === (8))){
var inst_41035 = (state_41080[(9)]);
var inst_41034 = (state_41080[(12)]);
var inst_41037 = (inst_41035 < inst_41034);
var inst_41038 = inst_41037;
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41038)){
var statearr_41114_41145 = state_41080__$1;
(statearr_41114_41145[(1)] = (10));

} else {
var statearr_41115_41146 = state_41080__$1;
(statearr_41115_41146[(1)] = (11));

}

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
});})(c__38623__auto__))
;
return ((function (switch__38511__auto__,c__38623__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38512__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38512__auto____0 = (function (){
var statearr_41119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41119[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38512__auto__);

(statearr_41119[(1)] = (1));

return statearr_41119;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38512__auto____1 = (function (state_41080){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_41080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e41120){if((e41120 instanceof Object)){
var ex__38515__auto__ = e41120;
var statearr_41121_41147 = state_41080;
(statearr_41121_41147[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41148 = state_41080;
state_41080 = G__41148;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38512__auto__ = function(state_41080){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38512__auto____1.call(this,state_41080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38512__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38512__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto__))
})();
var state__38625__auto__ = (function (){var statearr_41122 = f__38624__auto__.call(null);
(statearr_41122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto__);

return statearr_41122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto__))
);

return c__38623__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41149 = [];
var len__26126__auto___41152 = arguments.length;
var i__26127__auto___41153 = (0);
while(true){
if((i__26127__auto___41153 < len__26126__auto___41152)){
args41149.push((arguments[i__26127__auto___41153]));

var G__41154 = (i__26127__auto___41153 + (1));
i__26127__auto___41153 = G__41154;
continue;
} else {
}
break;
}

var G__41151 = args41149.length;
switch (G__41151) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41149.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args41156 = [];
var len__26126__auto___41159 = arguments.length;
var i__26127__auto___41160 = (0);
while(true){
if((i__26127__auto___41160 < len__26126__auto___41159)){
args41156.push((arguments[i__26127__auto___41160]));

var G__41161 = (i__26127__auto___41160 + (1));
i__26127__auto___41160 = G__41161;
continue;
} else {
}
break;
}

var G__41158 = args41156.length;
switch (G__41158) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41156.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args41163 = [];
var len__26126__auto___41214 = arguments.length;
var i__26127__auto___41215 = (0);
while(true){
if((i__26127__auto___41215 < len__26126__auto___41214)){
args41163.push((arguments[i__26127__auto___41215]));

var G__41216 = (i__26127__auto___41215 + (1));
i__26127__auto___41215 = G__41216;
continue;
} else {
}
break;
}

var G__41165 = args41163.length;
switch (G__41165) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41163.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38623__auto___41218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___41218,out){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___41218,out){
return (function (state_41189){
var state_val_41190 = (state_41189[(1)]);
if((state_val_41190 === (7))){
var inst_41184 = (state_41189[(2)]);
var state_41189__$1 = state_41189;
var statearr_41191_41219 = state_41189__$1;
(statearr_41191_41219[(2)] = inst_41184);

(statearr_41191_41219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (1))){
var inst_41166 = null;
var state_41189__$1 = (function (){var statearr_41192 = state_41189;
(statearr_41192[(7)] = inst_41166);

return statearr_41192;
})();
var statearr_41193_41220 = state_41189__$1;
(statearr_41193_41220[(2)] = null);

(statearr_41193_41220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (4))){
var inst_41169 = (state_41189[(8)]);
var inst_41169__$1 = (state_41189[(2)]);
var inst_41170 = (inst_41169__$1 == null);
var inst_41171 = cljs.core.not.call(null,inst_41170);
var state_41189__$1 = (function (){var statearr_41194 = state_41189;
(statearr_41194[(8)] = inst_41169__$1);

return statearr_41194;
})();
if(inst_41171){
var statearr_41195_41221 = state_41189__$1;
(statearr_41195_41221[(1)] = (5));

} else {
var statearr_41196_41222 = state_41189__$1;
(statearr_41196_41222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (6))){
var state_41189__$1 = state_41189;
var statearr_41197_41223 = state_41189__$1;
(statearr_41197_41223[(2)] = null);

(statearr_41197_41223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (3))){
var inst_41186 = (state_41189[(2)]);
var inst_41187 = cljs.core.async.close_BANG_.call(null,out);
var state_41189__$1 = (function (){var statearr_41198 = state_41189;
(statearr_41198[(9)] = inst_41186);

return statearr_41198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41189__$1,inst_41187);
} else {
if((state_val_41190 === (2))){
var state_41189__$1 = state_41189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41189__$1,(4),ch);
} else {
if((state_val_41190 === (11))){
var inst_41169 = (state_41189[(8)]);
var inst_41178 = (state_41189[(2)]);
var inst_41166 = inst_41169;
var state_41189__$1 = (function (){var statearr_41199 = state_41189;
(statearr_41199[(10)] = inst_41178);

(statearr_41199[(7)] = inst_41166);

return statearr_41199;
})();
var statearr_41200_41224 = state_41189__$1;
(statearr_41200_41224[(2)] = null);

(statearr_41200_41224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (9))){
var inst_41169 = (state_41189[(8)]);
var state_41189__$1 = state_41189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41189__$1,(11),out,inst_41169);
} else {
if((state_val_41190 === (5))){
var inst_41169 = (state_41189[(8)]);
var inst_41166 = (state_41189[(7)]);
var inst_41173 = cljs.core._EQ_.call(null,inst_41169,inst_41166);
var state_41189__$1 = state_41189;
if(inst_41173){
var statearr_41202_41225 = state_41189__$1;
(statearr_41202_41225[(1)] = (8));

} else {
var statearr_41203_41226 = state_41189__$1;
(statearr_41203_41226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (10))){
var inst_41181 = (state_41189[(2)]);
var state_41189__$1 = state_41189;
var statearr_41204_41227 = state_41189__$1;
(statearr_41204_41227[(2)] = inst_41181);

(statearr_41204_41227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41190 === (8))){
var inst_41166 = (state_41189[(7)]);
var tmp41201 = inst_41166;
var inst_41166__$1 = tmp41201;
var state_41189__$1 = (function (){var statearr_41205 = state_41189;
(statearr_41205[(7)] = inst_41166__$1);

return statearr_41205;
})();
var statearr_41206_41228 = state_41189__$1;
(statearr_41206_41228[(2)] = null);

(statearr_41206_41228[(1)] = (2));


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
});})(c__38623__auto___41218,out))
;
return ((function (switch__38511__auto__,c__38623__auto___41218,out){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_41210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41210[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_41210[(1)] = (1));

return statearr_41210;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_41189){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_41189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e41211){if((e41211 instanceof Object)){
var ex__38515__auto__ = e41211;
var statearr_41212_41229 = state_41189;
(statearr_41212_41229[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41230 = state_41189;
state_41189 = G__41230;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_41189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_41189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___41218,out))
})();
var state__38625__auto__ = (function (){var statearr_41213 = f__38624__auto__.call(null);
(statearr_41213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___41218);

return statearr_41213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___41218,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41231 = [];
var len__26126__auto___41301 = arguments.length;
var i__26127__auto___41302 = (0);
while(true){
if((i__26127__auto___41302 < len__26126__auto___41301)){
args41231.push((arguments[i__26127__auto___41302]));

var G__41303 = (i__26127__auto___41302 + (1));
i__26127__auto___41302 = G__41303;
continue;
} else {
}
break;
}

var G__41233 = args41231.length;
switch (G__41233) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41231.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38623__auto___41305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___41305,out){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___41305,out){
return (function (state_41271){
var state_val_41272 = (state_41271[(1)]);
if((state_val_41272 === (7))){
var inst_41267 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
var statearr_41273_41306 = state_41271__$1;
(statearr_41273_41306[(2)] = inst_41267);

(statearr_41273_41306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (1))){
var inst_41234 = (new Array(n));
var inst_41235 = inst_41234;
var inst_41236 = (0);
var state_41271__$1 = (function (){var statearr_41274 = state_41271;
(statearr_41274[(7)] = inst_41236);

(statearr_41274[(8)] = inst_41235);

return statearr_41274;
})();
var statearr_41275_41307 = state_41271__$1;
(statearr_41275_41307[(2)] = null);

(statearr_41275_41307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (4))){
var inst_41239 = (state_41271[(9)]);
var inst_41239__$1 = (state_41271[(2)]);
var inst_41240 = (inst_41239__$1 == null);
var inst_41241 = cljs.core.not.call(null,inst_41240);
var state_41271__$1 = (function (){var statearr_41276 = state_41271;
(statearr_41276[(9)] = inst_41239__$1);

return statearr_41276;
})();
if(inst_41241){
var statearr_41277_41308 = state_41271__$1;
(statearr_41277_41308[(1)] = (5));

} else {
var statearr_41278_41309 = state_41271__$1;
(statearr_41278_41309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (15))){
var inst_41261 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
var statearr_41279_41310 = state_41271__$1;
(statearr_41279_41310[(2)] = inst_41261);

(statearr_41279_41310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (13))){
var state_41271__$1 = state_41271;
var statearr_41280_41311 = state_41271__$1;
(statearr_41280_41311[(2)] = null);

(statearr_41280_41311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (6))){
var inst_41236 = (state_41271[(7)]);
var inst_41257 = (inst_41236 > (0));
var state_41271__$1 = state_41271;
if(cljs.core.truth_(inst_41257)){
var statearr_41281_41312 = state_41271__$1;
(statearr_41281_41312[(1)] = (12));

} else {
var statearr_41282_41313 = state_41271__$1;
(statearr_41282_41313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (3))){
var inst_41269 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41271__$1,inst_41269);
} else {
if((state_val_41272 === (12))){
var inst_41235 = (state_41271[(8)]);
var inst_41259 = cljs.core.vec.call(null,inst_41235);
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41271__$1,(15),out,inst_41259);
} else {
if((state_val_41272 === (2))){
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41271__$1,(4),ch);
} else {
if((state_val_41272 === (11))){
var inst_41251 = (state_41271[(2)]);
var inst_41252 = (new Array(n));
var inst_41235 = inst_41252;
var inst_41236 = (0);
var state_41271__$1 = (function (){var statearr_41283 = state_41271;
(statearr_41283[(7)] = inst_41236);

(statearr_41283[(10)] = inst_41251);

(statearr_41283[(8)] = inst_41235);

return statearr_41283;
})();
var statearr_41284_41314 = state_41271__$1;
(statearr_41284_41314[(2)] = null);

(statearr_41284_41314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (9))){
var inst_41235 = (state_41271[(8)]);
var inst_41249 = cljs.core.vec.call(null,inst_41235);
var state_41271__$1 = state_41271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41271__$1,(11),out,inst_41249);
} else {
if((state_val_41272 === (5))){
var inst_41236 = (state_41271[(7)]);
var inst_41239 = (state_41271[(9)]);
var inst_41244 = (state_41271[(11)]);
var inst_41235 = (state_41271[(8)]);
var inst_41243 = (inst_41235[inst_41236] = inst_41239);
var inst_41244__$1 = (inst_41236 + (1));
var inst_41245 = (inst_41244__$1 < n);
var state_41271__$1 = (function (){var statearr_41285 = state_41271;
(statearr_41285[(11)] = inst_41244__$1);

(statearr_41285[(12)] = inst_41243);

return statearr_41285;
})();
if(cljs.core.truth_(inst_41245)){
var statearr_41286_41315 = state_41271__$1;
(statearr_41286_41315[(1)] = (8));

} else {
var statearr_41287_41316 = state_41271__$1;
(statearr_41287_41316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (14))){
var inst_41264 = (state_41271[(2)]);
var inst_41265 = cljs.core.async.close_BANG_.call(null,out);
var state_41271__$1 = (function (){var statearr_41289 = state_41271;
(statearr_41289[(13)] = inst_41264);

return statearr_41289;
})();
var statearr_41290_41317 = state_41271__$1;
(statearr_41290_41317[(2)] = inst_41265);

(statearr_41290_41317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (10))){
var inst_41255 = (state_41271[(2)]);
var state_41271__$1 = state_41271;
var statearr_41291_41318 = state_41271__$1;
(statearr_41291_41318[(2)] = inst_41255);

(statearr_41291_41318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41272 === (8))){
var inst_41244 = (state_41271[(11)]);
var inst_41235 = (state_41271[(8)]);
var tmp41288 = inst_41235;
var inst_41235__$1 = tmp41288;
var inst_41236 = inst_41244;
var state_41271__$1 = (function (){var statearr_41292 = state_41271;
(statearr_41292[(7)] = inst_41236);

(statearr_41292[(8)] = inst_41235__$1);

return statearr_41292;
})();
var statearr_41293_41319 = state_41271__$1;
(statearr_41293_41319[(2)] = null);

(statearr_41293_41319[(1)] = (2));


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
});})(c__38623__auto___41305,out))
;
return ((function (switch__38511__auto__,c__38623__auto___41305,out){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_41297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41297[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_41297[(1)] = (1));

return statearr_41297;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_41271){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_41271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e41298){if((e41298 instanceof Object)){
var ex__38515__auto__ = e41298;
var statearr_41299_41320 = state_41271;
(statearr_41299_41320[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41321 = state_41271;
state_41271 = G__41321;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_41271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_41271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___41305,out))
})();
var state__38625__auto__ = (function (){var statearr_41300 = f__38624__auto__.call(null);
(statearr_41300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___41305);

return statearr_41300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___41305,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41322 = [];
var len__26126__auto___41396 = arguments.length;
var i__26127__auto___41397 = (0);
while(true){
if((i__26127__auto___41397 < len__26126__auto___41396)){
args41322.push((arguments[i__26127__auto___41397]));

var G__41398 = (i__26127__auto___41397 + (1));
i__26127__auto___41397 = G__41398;
continue;
} else {
}
break;
}

var G__41324 = args41322.length;
switch (G__41324) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41322.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38623__auto___41400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38623__auto___41400,out){
return (function (){
var f__38624__auto__ = (function (){var switch__38511__auto__ = ((function (c__38623__auto___41400,out){
return (function (state_41366){
var state_val_41367 = (state_41366[(1)]);
if((state_val_41367 === (7))){
var inst_41362 = (state_41366[(2)]);
var state_41366__$1 = state_41366;
var statearr_41368_41401 = state_41366__$1;
(statearr_41368_41401[(2)] = inst_41362);

(statearr_41368_41401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (1))){
var inst_41325 = [];
var inst_41326 = inst_41325;
var inst_41327 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41366__$1 = (function (){var statearr_41369 = state_41366;
(statearr_41369[(7)] = inst_41326);

(statearr_41369[(8)] = inst_41327);

return statearr_41369;
})();
var statearr_41370_41402 = state_41366__$1;
(statearr_41370_41402[(2)] = null);

(statearr_41370_41402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (4))){
var inst_41330 = (state_41366[(9)]);
var inst_41330__$1 = (state_41366[(2)]);
var inst_41331 = (inst_41330__$1 == null);
var inst_41332 = cljs.core.not.call(null,inst_41331);
var state_41366__$1 = (function (){var statearr_41371 = state_41366;
(statearr_41371[(9)] = inst_41330__$1);

return statearr_41371;
})();
if(inst_41332){
var statearr_41372_41403 = state_41366__$1;
(statearr_41372_41403[(1)] = (5));

} else {
var statearr_41373_41404 = state_41366__$1;
(statearr_41373_41404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (15))){
var inst_41356 = (state_41366[(2)]);
var state_41366__$1 = state_41366;
var statearr_41374_41405 = state_41366__$1;
(statearr_41374_41405[(2)] = inst_41356);

(statearr_41374_41405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (13))){
var state_41366__$1 = state_41366;
var statearr_41375_41406 = state_41366__$1;
(statearr_41375_41406[(2)] = null);

(statearr_41375_41406[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (6))){
var inst_41326 = (state_41366[(7)]);
var inst_41351 = inst_41326.length;
var inst_41352 = (inst_41351 > (0));
var state_41366__$1 = state_41366;
if(cljs.core.truth_(inst_41352)){
var statearr_41376_41407 = state_41366__$1;
(statearr_41376_41407[(1)] = (12));

} else {
var statearr_41377_41408 = state_41366__$1;
(statearr_41377_41408[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (3))){
var inst_41364 = (state_41366[(2)]);
var state_41366__$1 = state_41366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41366__$1,inst_41364);
} else {
if((state_val_41367 === (12))){
var inst_41326 = (state_41366[(7)]);
var inst_41354 = cljs.core.vec.call(null,inst_41326);
var state_41366__$1 = state_41366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41366__$1,(15),out,inst_41354);
} else {
if((state_val_41367 === (2))){
var state_41366__$1 = state_41366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41366__$1,(4),ch);
} else {
if((state_val_41367 === (11))){
var inst_41330 = (state_41366[(9)]);
var inst_41334 = (state_41366[(10)]);
var inst_41344 = (state_41366[(2)]);
var inst_41345 = [];
var inst_41346 = inst_41345.push(inst_41330);
var inst_41326 = inst_41345;
var inst_41327 = inst_41334;
var state_41366__$1 = (function (){var statearr_41378 = state_41366;
(statearr_41378[(11)] = inst_41344);

(statearr_41378[(7)] = inst_41326);

(statearr_41378[(12)] = inst_41346);

(statearr_41378[(8)] = inst_41327);

return statearr_41378;
})();
var statearr_41379_41409 = state_41366__$1;
(statearr_41379_41409[(2)] = null);

(statearr_41379_41409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (9))){
var inst_41326 = (state_41366[(7)]);
var inst_41342 = cljs.core.vec.call(null,inst_41326);
var state_41366__$1 = state_41366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41366__$1,(11),out,inst_41342);
} else {
if((state_val_41367 === (5))){
var inst_41330 = (state_41366[(9)]);
var inst_41327 = (state_41366[(8)]);
var inst_41334 = (state_41366[(10)]);
var inst_41334__$1 = f.call(null,inst_41330);
var inst_41335 = cljs.core._EQ_.call(null,inst_41334__$1,inst_41327);
var inst_41336 = cljs.core.keyword_identical_QMARK_.call(null,inst_41327,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41337 = (inst_41335) || (inst_41336);
var state_41366__$1 = (function (){var statearr_41380 = state_41366;
(statearr_41380[(10)] = inst_41334__$1);

return statearr_41380;
})();
if(cljs.core.truth_(inst_41337)){
var statearr_41381_41410 = state_41366__$1;
(statearr_41381_41410[(1)] = (8));

} else {
var statearr_41382_41411 = state_41366__$1;
(statearr_41382_41411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (14))){
var inst_41359 = (state_41366[(2)]);
var inst_41360 = cljs.core.async.close_BANG_.call(null,out);
var state_41366__$1 = (function (){var statearr_41384 = state_41366;
(statearr_41384[(13)] = inst_41359);

return statearr_41384;
})();
var statearr_41385_41412 = state_41366__$1;
(statearr_41385_41412[(2)] = inst_41360);

(statearr_41385_41412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (10))){
var inst_41349 = (state_41366[(2)]);
var state_41366__$1 = state_41366;
var statearr_41386_41413 = state_41366__$1;
(statearr_41386_41413[(2)] = inst_41349);

(statearr_41386_41413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41367 === (8))){
var inst_41326 = (state_41366[(7)]);
var inst_41330 = (state_41366[(9)]);
var inst_41334 = (state_41366[(10)]);
var inst_41339 = inst_41326.push(inst_41330);
var tmp41383 = inst_41326;
var inst_41326__$1 = tmp41383;
var inst_41327 = inst_41334;
var state_41366__$1 = (function (){var statearr_41387 = state_41366;
(statearr_41387[(7)] = inst_41326__$1);

(statearr_41387[(14)] = inst_41339);

(statearr_41387[(8)] = inst_41327);

return statearr_41387;
})();
var statearr_41388_41414 = state_41366__$1;
(statearr_41388_41414[(2)] = null);

(statearr_41388_41414[(1)] = (2));


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
});})(c__38623__auto___41400,out))
;
return ((function (switch__38511__auto__,c__38623__auto___41400,out){
return (function() {
var cljs$core$async$state_machine__38512__auto__ = null;
var cljs$core$async$state_machine__38512__auto____0 = (function (){
var statearr_41392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41392[(0)] = cljs$core$async$state_machine__38512__auto__);

(statearr_41392[(1)] = (1));

return statearr_41392;
});
var cljs$core$async$state_machine__38512__auto____1 = (function (state_41366){
while(true){
var ret_value__38513__auto__ = (function (){try{while(true){
var result__38514__auto__ = switch__38511__auto__.call(null,state_41366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38514__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38514__auto__;
}
break;
}
}catch (e41393){if((e41393 instanceof Object)){
var ex__38515__auto__ = e41393;
var statearr_41394_41415 = state_41366;
(statearr_41394_41415[(5)] = ex__38515__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38513__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41416 = state_41366;
state_41366 = G__41416;
continue;
} else {
return ret_value__38513__auto__;
}
break;
}
});
cljs$core$async$state_machine__38512__auto__ = function(state_41366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38512__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38512__auto____1.call(this,state_41366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38512__auto____0;
cljs$core$async$state_machine__38512__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38512__auto____1;
return cljs$core$async$state_machine__38512__auto__;
})()
;})(switch__38511__auto__,c__38623__auto___41400,out))
})();
var state__38625__auto__ = (function (){var statearr_41395 = f__38624__auto__.call(null);
(statearr_41395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38623__auto___41400);

return statearr_41395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38625__auto__);
});})(c__38623__auto___41400,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

