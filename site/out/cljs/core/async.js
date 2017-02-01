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
var args34535 = [];
var len__26126__auto___34541 = arguments.length;
var i__26127__auto___34542 = (0);
while(true){
if((i__26127__auto___34542 < len__26126__auto___34541)){
args34535.push((arguments[i__26127__auto___34542]));

var G__34543 = (i__26127__auto___34542 + (1));
i__26127__auto___34542 = G__34543;
continue;
} else {
}
break;
}

var G__34537 = args34535.length;
switch (G__34537) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34535.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34538 = (function (f,blockable,meta34539){
this.f = f;
this.blockable = blockable;
this.meta34539 = meta34539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34540,meta34539__$1){
var self__ = this;
var _34540__$1 = this;
return (new cljs.core.async.t_cljs$core$async34538(self__.f,self__.blockable,meta34539__$1));
});

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34540){
var self__ = this;
var _34540__$1 = this;
return self__.meta34539;
});

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34539","meta34539",-1770110104,null)], null);
});

cljs.core.async.t_cljs$core$async34538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34538";

cljs.core.async.t_cljs$core$async34538.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async34538");
});

cljs.core.async.__GT_t_cljs$core$async34538 = (function cljs$core$async$__GT_t_cljs$core$async34538(f__$1,blockable__$1,meta34539){
return (new cljs.core.async.t_cljs$core$async34538(f__$1,blockable__$1,meta34539));
});

}

return (new cljs.core.async.t_cljs$core$async34538(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args34547 = [];
var len__26126__auto___34550 = arguments.length;
var i__26127__auto___34551 = (0);
while(true){
if((i__26127__auto___34551 < len__26126__auto___34550)){
args34547.push((arguments[i__26127__auto___34551]));

var G__34552 = (i__26127__auto___34551 + (1));
i__26127__auto___34551 = G__34552;
continue;
} else {
}
break;
}

var G__34549 = args34547.length;
switch (G__34549) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34547.length)].join('')));

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
var args34554 = [];
var len__26126__auto___34557 = arguments.length;
var i__26127__auto___34558 = (0);
while(true){
if((i__26127__auto___34558 < len__26126__auto___34557)){
args34554.push((arguments[i__26127__auto___34558]));

var G__34559 = (i__26127__auto___34558 + (1));
i__26127__auto___34558 = G__34559;
continue;
} else {
}
break;
}

var G__34556 = args34554.length;
switch (G__34556) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34554.length)].join('')));

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
var args34561 = [];
var len__26126__auto___34564 = arguments.length;
var i__26127__auto___34565 = (0);
while(true){
if((i__26127__auto___34565 < len__26126__auto___34564)){
args34561.push((arguments[i__26127__auto___34565]));

var G__34566 = (i__26127__auto___34565 + (1));
i__26127__auto___34565 = G__34566;
continue;
} else {
}
break;
}

var G__34563 = args34561.length;
switch (G__34563) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34561.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34568 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34568);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34568,ret){
return (function (){
return fn1.call(null,val_34568);
});})(val_34568,ret))
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
var args34569 = [];
var len__26126__auto___34572 = arguments.length;
var i__26127__auto___34573 = (0);
while(true){
if((i__26127__auto___34573 < len__26126__auto___34572)){
args34569.push((arguments[i__26127__auto___34573]));

var G__34574 = (i__26127__auto___34573 + (1));
i__26127__auto___34573 = G__34574;
continue;
} else {
}
break;
}

var G__34571 = args34569.length;
switch (G__34571) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34569.length)].join('')));

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
var n__25966__auto___34576 = n;
var x_34577 = (0);
while(true){
if((x_34577 < n__25966__auto___34576)){
(a[x_34577] = (0));

var G__34578 = (x_34577 + (1));
x_34577 = G__34578;
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

var G__34579 = (i + (1));
i = G__34579;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34583 = (function (alt_flag,flag,meta34584){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta34584 = meta34584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34585,meta34584__$1){
var self__ = this;
var _34585__$1 = this;
return (new cljs.core.async.t_cljs$core$async34583(self__.alt_flag,self__.flag,meta34584__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34585){
var self__ = this;
var _34585__$1 = this;
return self__.meta34584;
});})(flag))
;

cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34583.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34584","meta34584",-323203567,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34583";

cljs.core.async.t_cljs$core$async34583.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async34583");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34583 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34583(alt_flag__$1,flag__$1,meta34584){
return (new cljs.core.async.t_cljs$core$async34583(alt_flag__$1,flag__$1,meta34584));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34583(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34589 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34589 = (function (alt_handler,flag,cb,meta34590){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta34590 = meta34590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34591,meta34590__$1){
var self__ = this;
var _34591__$1 = this;
return (new cljs.core.async.t_cljs$core$async34589(self__.alt_handler,self__.flag,self__.cb,meta34590__$1));
});

cljs.core.async.t_cljs$core$async34589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34591){
var self__ = this;
var _34591__$1 = this;
return self__.meta34590;
});

cljs.core.async.t_cljs$core$async34589.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34590","meta34590",-1812968807,null)], null);
});

cljs.core.async.t_cljs$core$async34589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34589";

cljs.core.async.t_cljs$core$async34589.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async34589");
});

cljs.core.async.__GT_t_cljs$core$async34589 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34589(alt_handler__$1,flag__$1,cb__$1,meta34590){
return (new cljs.core.async.t_cljs$core$async34589(alt_handler__$1,flag__$1,cb__$1,meta34590));
});

}

return (new cljs.core.async.t_cljs$core$async34589(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34592_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34593_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34593_SHARP_,port], null));
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
var G__34594 = (i + (1));
i = G__34594;
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
var len__26126__auto___34600 = arguments.length;
var i__26127__auto___34601 = (0);
while(true){
if((i__26127__auto___34601 < len__26126__auto___34600)){
args__26133__auto__.push((arguments[i__26127__auto___34601]));

var G__34602 = (i__26127__auto___34601 + (1));
i__26127__auto___34601 = G__34602;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((1) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26134__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34597){
var map__34598 = p__34597;
var map__34598__$1 = ((((!((map__34598 == null)))?((((map__34598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34598):map__34598);
var opts = map__34598__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34595){
var G__34596 = cljs.core.first.call(null,seq34595);
var seq34595__$1 = cljs.core.next.call(null,seq34595);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34596,seq34595__$1);
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
var args34603 = [];
var len__26126__auto___34653 = arguments.length;
var i__26127__auto___34654 = (0);
while(true){
if((i__26127__auto___34654 < len__26126__auto___34653)){
args34603.push((arguments[i__26127__auto___34654]));

var G__34655 = (i__26127__auto___34654 + (1));
i__26127__auto___34654 = G__34655;
continue;
} else {
}
break;
}

var G__34605 = args34603.length;
switch (G__34605) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34603.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34490__auto___34657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___34657){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___34657){
return (function (state_34629){
var state_val_34630 = (state_34629[(1)]);
if((state_val_34630 === (7))){
var inst_34625 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34631_34658 = state_34629__$1;
(statearr_34631_34658[(2)] = inst_34625);

(statearr_34631_34658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (1))){
var state_34629__$1 = state_34629;
var statearr_34632_34659 = state_34629__$1;
(statearr_34632_34659[(2)] = null);

(statearr_34632_34659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (4))){
var inst_34608 = (state_34629[(7)]);
var inst_34608__$1 = (state_34629[(2)]);
var inst_34609 = (inst_34608__$1 == null);
var state_34629__$1 = (function (){var statearr_34633 = state_34629;
(statearr_34633[(7)] = inst_34608__$1);

return statearr_34633;
})();
if(cljs.core.truth_(inst_34609)){
var statearr_34634_34660 = state_34629__$1;
(statearr_34634_34660[(1)] = (5));

} else {
var statearr_34635_34661 = state_34629__$1;
(statearr_34635_34661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (13))){
var state_34629__$1 = state_34629;
var statearr_34636_34662 = state_34629__$1;
(statearr_34636_34662[(2)] = null);

(statearr_34636_34662[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (6))){
var inst_34608 = (state_34629[(7)]);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34629__$1,(11),to,inst_34608);
} else {
if((state_val_34630 === (3))){
var inst_34627 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34629__$1,inst_34627);
} else {
if((state_val_34630 === (12))){
var state_34629__$1 = state_34629;
var statearr_34637_34663 = state_34629__$1;
(statearr_34637_34663[(2)] = null);

(statearr_34637_34663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (2))){
var state_34629__$1 = state_34629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34629__$1,(4),from);
} else {
if((state_val_34630 === (11))){
var inst_34618 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
if(cljs.core.truth_(inst_34618)){
var statearr_34638_34664 = state_34629__$1;
(statearr_34638_34664[(1)] = (12));

} else {
var statearr_34639_34665 = state_34629__$1;
(statearr_34639_34665[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (9))){
var state_34629__$1 = state_34629;
var statearr_34640_34666 = state_34629__$1;
(statearr_34640_34666[(2)] = null);

(statearr_34640_34666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (5))){
var state_34629__$1 = state_34629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34641_34667 = state_34629__$1;
(statearr_34641_34667[(1)] = (8));

} else {
var statearr_34642_34668 = state_34629__$1;
(statearr_34642_34668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (14))){
var inst_34623 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34643_34669 = state_34629__$1;
(statearr_34643_34669[(2)] = inst_34623);

(statearr_34643_34669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (10))){
var inst_34615 = (state_34629[(2)]);
var state_34629__$1 = state_34629;
var statearr_34644_34670 = state_34629__$1;
(statearr_34644_34670[(2)] = inst_34615);

(statearr_34644_34670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34630 === (8))){
var inst_34612 = cljs.core.async.close_BANG_.call(null,to);
var state_34629__$1 = state_34629;
var statearr_34645_34671 = state_34629__$1;
(statearr_34645_34671[(2)] = inst_34612);

(statearr_34645_34671[(1)] = (10));


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
});})(c__34490__auto___34657))
;
return ((function (switch__34378__auto__,c__34490__auto___34657){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_34649 = [null,null,null,null,null,null,null,null];
(statearr_34649[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_34649[(1)] = (1));

return statearr_34649;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_34629){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_34629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e34650){if((e34650 instanceof Object)){
var ex__34382__auto__ = e34650;
var statearr_34651_34672 = state_34629;
(statearr_34651_34672[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34673 = state_34629;
state_34629 = G__34673;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_34629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_34629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___34657))
})();
var state__34492__auto__ = (function (){var statearr_34652 = f__34491__auto__.call(null);
(statearr_34652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___34657);

return statearr_34652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___34657))
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
return (function (p__34861){
var vec__34862 = p__34861;
var v = cljs.core.nth.call(null,vec__34862,(0),null);
var p = cljs.core.nth.call(null,vec__34862,(1),null);
var job = vec__34862;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34490__auto___35048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___35048,res,vec__34862,v,p,job,jobs,results){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___35048,res,vec__34862,v,p,job,jobs,results){
return (function (state_34869){
var state_val_34870 = (state_34869[(1)]);
if((state_val_34870 === (1))){
var state_34869__$1 = state_34869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34869__$1,(2),res,v);
} else {
if((state_val_34870 === (2))){
var inst_34866 = (state_34869[(2)]);
var inst_34867 = cljs.core.async.close_BANG_.call(null,res);
var state_34869__$1 = (function (){var statearr_34871 = state_34869;
(statearr_34871[(7)] = inst_34866);

return statearr_34871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34869__$1,inst_34867);
} else {
return null;
}
}
});})(c__34490__auto___35048,res,vec__34862,v,p,job,jobs,results))
;
return ((function (switch__34378__auto__,c__34490__auto___35048,res,vec__34862,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_34875 = [null,null,null,null,null,null,null,null];
(statearr_34875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_34875[(1)] = (1));

return statearr_34875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_34869){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_34869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e34876){if((e34876 instanceof Object)){
var ex__34382__auto__ = e34876;
var statearr_34877_35049 = state_34869;
(statearr_34877_35049[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35050 = state_34869;
state_34869 = G__35050;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_34869){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_34869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___35048,res,vec__34862,v,p,job,jobs,results))
})();
var state__34492__auto__ = (function (){var statearr_34878 = f__34491__auto__.call(null);
(statearr_34878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___35048);

return statearr_34878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___35048,res,vec__34862,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34879){
var vec__34880 = p__34879;
var v = cljs.core.nth.call(null,vec__34880,(0),null);
var p = cljs.core.nth.call(null,vec__34880,(1),null);
var job = vec__34880;
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
var n__25966__auto___35051 = n;
var __35052 = (0);
while(true){
if((__35052 < n__25966__auto___35051)){
var G__34883_35053 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__34883_35053) {
case "compute":
var c__34490__auto___35055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35052,c__34490__auto___35055,G__34883_35053,n__25966__auto___35051,jobs,results,process,async){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (__35052,c__34490__auto___35055,G__34883_35053,n__25966__auto___35051,jobs,results,process,async){
return (function (state_34896){
var state_val_34897 = (state_34896[(1)]);
if((state_val_34897 === (1))){
var state_34896__$1 = state_34896;
var statearr_34898_35056 = state_34896__$1;
(statearr_34898_35056[(2)] = null);

(statearr_34898_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34897 === (2))){
var state_34896__$1 = state_34896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34896__$1,(4),jobs);
} else {
if((state_val_34897 === (3))){
var inst_34894 = (state_34896[(2)]);
var state_34896__$1 = state_34896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34896__$1,inst_34894);
} else {
if((state_val_34897 === (4))){
var inst_34886 = (state_34896[(2)]);
var inst_34887 = process.call(null,inst_34886);
var state_34896__$1 = state_34896;
if(cljs.core.truth_(inst_34887)){
var statearr_34899_35057 = state_34896__$1;
(statearr_34899_35057[(1)] = (5));

} else {
var statearr_34900_35058 = state_34896__$1;
(statearr_34900_35058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34897 === (5))){
var state_34896__$1 = state_34896;
var statearr_34901_35059 = state_34896__$1;
(statearr_34901_35059[(2)] = null);

(statearr_34901_35059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34897 === (6))){
var state_34896__$1 = state_34896;
var statearr_34902_35060 = state_34896__$1;
(statearr_34902_35060[(2)] = null);

(statearr_34902_35060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34897 === (7))){
var inst_34892 = (state_34896[(2)]);
var state_34896__$1 = state_34896;
var statearr_34903_35061 = state_34896__$1;
(statearr_34903_35061[(2)] = inst_34892);

(statearr_34903_35061[(1)] = (3));


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
});})(__35052,c__34490__auto___35055,G__34883_35053,n__25966__auto___35051,jobs,results,process,async))
;
return ((function (__35052,switch__34378__auto__,c__34490__auto___35055,G__34883_35053,n__25966__auto___35051,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_34907 = [null,null,null,null,null,null,null];
(statearr_34907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_34907[(1)] = (1));

return statearr_34907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_34896){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_34896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e34908){if((e34908 instanceof Object)){
var ex__34382__auto__ = e34908;
var statearr_34909_35062 = state_34896;
(statearr_34909_35062[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35063 = state_34896;
state_34896 = G__35063;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_34896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_34896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(__35052,switch__34378__auto__,c__34490__auto___35055,G__34883_35053,n__25966__auto___35051,jobs,results,process,async))
})();
var state__34492__auto__ = (function (){var statearr_34910 = f__34491__auto__.call(null);
(statearr_34910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___35055);

return statearr_34910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(__35052,c__34490__auto___35055,G__34883_35053,n__25966__auto___35051,jobs,results,process,async))
);


break;
case "async":
var c__34490__auto___35064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35052,c__34490__auto___35064,G__34883_35053,n__25966__auto___35051,jobs,results,process,async){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (__35052,c__34490__auto___35064,G__34883_35053,n__25966__auto___35051,jobs,results,process,async){
return (function (state_34923){
var state_val_34924 = (state_34923[(1)]);
if((state_val_34924 === (1))){
var state_34923__$1 = state_34923;
var statearr_34925_35065 = state_34923__$1;
(statearr_34925_35065[(2)] = null);

(statearr_34925_35065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (2))){
var state_34923__$1 = state_34923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34923__$1,(4),jobs);
} else {
if((state_val_34924 === (3))){
var inst_34921 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34923__$1,inst_34921);
} else {
if((state_val_34924 === (4))){
var inst_34913 = (state_34923[(2)]);
var inst_34914 = async.call(null,inst_34913);
var state_34923__$1 = state_34923;
if(cljs.core.truth_(inst_34914)){
var statearr_34926_35066 = state_34923__$1;
(statearr_34926_35066[(1)] = (5));

} else {
var statearr_34927_35067 = state_34923__$1;
(statearr_34927_35067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (5))){
var state_34923__$1 = state_34923;
var statearr_34928_35068 = state_34923__$1;
(statearr_34928_35068[(2)] = null);

(statearr_34928_35068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (6))){
var state_34923__$1 = state_34923;
var statearr_34929_35069 = state_34923__$1;
(statearr_34929_35069[(2)] = null);

(statearr_34929_35069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34924 === (7))){
var inst_34919 = (state_34923[(2)]);
var state_34923__$1 = state_34923;
var statearr_34930_35070 = state_34923__$1;
(statearr_34930_35070[(2)] = inst_34919);

(statearr_34930_35070[(1)] = (3));


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
});})(__35052,c__34490__auto___35064,G__34883_35053,n__25966__auto___35051,jobs,results,process,async))
;
return ((function (__35052,switch__34378__auto__,c__34490__auto___35064,G__34883_35053,n__25966__auto___35051,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_34934 = [null,null,null,null,null,null,null];
(statearr_34934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_34934[(1)] = (1));

return statearr_34934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_34923){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_34923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e34935){if((e34935 instanceof Object)){
var ex__34382__auto__ = e34935;
var statearr_34936_35071 = state_34923;
(statearr_34936_35071[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35072 = state_34923;
state_34923 = G__35072;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_34923){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_34923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(__35052,switch__34378__auto__,c__34490__auto___35064,G__34883_35053,n__25966__auto___35051,jobs,results,process,async))
})();
var state__34492__auto__ = (function (){var statearr_34937 = f__34491__auto__.call(null);
(statearr_34937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___35064);

return statearr_34937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(__35052,c__34490__auto___35064,G__34883_35053,n__25966__auto___35051,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__35073 = (__35052 + (1));
__35052 = G__35073;
continue;
} else {
}
break;
}

var c__34490__auto___35074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___35074,jobs,results,process,async){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___35074,jobs,results,process,async){
return (function (state_34959){
var state_val_34960 = (state_34959[(1)]);
if((state_val_34960 === (1))){
var state_34959__$1 = state_34959;
var statearr_34961_35075 = state_34959__$1;
(statearr_34961_35075[(2)] = null);

(statearr_34961_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (2))){
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34959__$1,(4),from);
} else {
if((state_val_34960 === (3))){
var inst_34957 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34959__$1,inst_34957);
} else {
if((state_val_34960 === (4))){
var inst_34940 = (state_34959[(7)]);
var inst_34940__$1 = (state_34959[(2)]);
var inst_34941 = (inst_34940__$1 == null);
var state_34959__$1 = (function (){var statearr_34962 = state_34959;
(statearr_34962[(7)] = inst_34940__$1);

return statearr_34962;
})();
if(cljs.core.truth_(inst_34941)){
var statearr_34963_35076 = state_34959__$1;
(statearr_34963_35076[(1)] = (5));

} else {
var statearr_34964_35077 = state_34959__$1;
(statearr_34964_35077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (5))){
var inst_34943 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34959__$1 = state_34959;
var statearr_34965_35078 = state_34959__$1;
(statearr_34965_35078[(2)] = inst_34943);

(statearr_34965_35078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (6))){
var inst_34940 = (state_34959[(7)]);
var inst_34945 = (state_34959[(8)]);
var inst_34945__$1 = cljs.core.async.chan.call(null,(1));
var inst_34946 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34947 = [inst_34940,inst_34945__$1];
var inst_34948 = (new cljs.core.PersistentVector(null,2,(5),inst_34946,inst_34947,null));
var state_34959__$1 = (function (){var statearr_34966 = state_34959;
(statearr_34966[(8)] = inst_34945__$1);

return statearr_34966;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34959__$1,(8),jobs,inst_34948);
} else {
if((state_val_34960 === (7))){
var inst_34955 = (state_34959[(2)]);
var state_34959__$1 = state_34959;
var statearr_34967_35079 = state_34959__$1;
(statearr_34967_35079[(2)] = inst_34955);

(statearr_34967_35079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34960 === (8))){
var inst_34945 = (state_34959[(8)]);
var inst_34950 = (state_34959[(2)]);
var state_34959__$1 = (function (){var statearr_34968 = state_34959;
(statearr_34968[(9)] = inst_34950);

return statearr_34968;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34959__$1,(9),results,inst_34945);
} else {
if((state_val_34960 === (9))){
var inst_34952 = (state_34959[(2)]);
var state_34959__$1 = (function (){var statearr_34969 = state_34959;
(statearr_34969[(10)] = inst_34952);

return statearr_34969;
})();
var statearr_34970_35080 = state_34959__$1;
(statearr_34970_35080[(2)] = null);

(statearr_34970_35080[(1)] = (2));


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
});})(c__34490__auto___35074,jobs,results,process,async))
;
return ((function (switch__34378__auto__,c__34490__auto___35074,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_34974 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34974[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_34974[(1)] = (1));

return statearr_34974;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_34959){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_34959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e34975){if((e34975 instanceof Object)){
var ex__34382__auto__ = e34975;
var statearr_34976_35081 = state_34959;
(statearr_34976_35081[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35082 = state_34959;
state_34959 = G__35082;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_34959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_34959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___35074,jobs,results,process,async))
})();
var state__34492__auto__ = (function (){var statearr_34977 = f__34491__auto__.call(null);
(statearr_34977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___35074);

return statearr_34977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___35074,jobs,results,process,async))
);


var c__34490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto__,jobs,results,process,async){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto__,jobs,results,process,async){
return (function (state_35015){
var state_val_35016 = (state_35015[(1)]);
if((state_val_35016 === (7))){
var inst_35011 = (state_35015[(2)]);
var state_35015__$1 = state_35015;
var statearr_35017_35083 = state_35015__$1;
(statearr_35017_35083[(2)] = inst_35011);

(statearr_35017_35083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (20))){
var state_35015__$1 = state_35015;
var statearr_35018_35084 = state_35015__$1;
(statearr_35018_35084[(2)] = null);

(statearr_35018_35084[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (1))){
var state_35015__$1 = state_35015;
var statearr_35019_35085 = state_35015__$1;
(statearr_35019_35085[(2)] = null);

(statearr_35019_35085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (4))){
var inst_34980 = (state_35015[(7)]);
var inst_34980__$1 = (state_35015[(2)]);
var inst_34981 = (inst_34980__$1 == null);
var state_35015__$1 = (function (){var statearr_35020 = state_35015;
(statearr_35020[(7)] = inst_34980__$1);

return statearr_35020;
})();
if(cljs.core.truth_(inst_34981)){
var statearr_35021_35086 = state_35015__$1;
(statearr_35021_35086[(1)] = (5));

} else {
var statearr_35022_35087 = state_35015__$1;
(statearr_35022_35087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (15))){
var inst_34993 = (state_35015[(8)]);
var state_35015__$1 = state_35015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35015__$1,(18),to,inst_34993);
} else {
if((state_val_35016 === (21))){
var inst_35006 = (state_35015[(2)]);
var state_35015__$1 = state_35015;
var statearr_35023_35088 = state_35015__$1;
(statearr_35023_35088[(2)] = inst_35006);

(statearr_35023_35088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (13))){
var inst_35008 = (state_35015[(2)]);
var state_35015__$1 = (function (){var statearr_35024 = state_35015;
(statearr_35024[(9)] = inst_35008);

return statearr_35024;
})();
var statearr_35025_35089 = state_35015__$1;
(statearr_35025_35089[(2)] = null);

(statearr_35025_35089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (6))){
var inst_34980 = (state_35015[(7)]);
var state_35015__$1 = state_35015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35015__$1,(11),inst_34980);
} else {
if((state_val_35016 === (17))){
var inst_35001 = (state_35015[(2)]);
var state_35015__$1 = state_35015;
if(cljs.core.truth_(inst_35001)){
var statearr_35026_35090 = state_35015__$1;
(statearr_35026_35090[(1)] = (19));

} else {
var statearr_35027_35091 = state_35015__$1;
(statearr_35027_35091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (3))){
var inst_35013 = (state_35015[(2)]);
var state_35015__$1 = state_35015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35015__$1,inst_35013);
} else {
if((state_val_35016 === (12))){
var inst_34990 = (state_35015[(10)]);
var state_35015__$1 = state_35015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35015__$1,(14),inst_34990);
} else {
if((state_val_35016 === (2))){
var state_35015__$1 = state_35015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35015__$1,(4),results);
} else {
if((state_val_35016 === (19))){
var state_35015__$1 = state_35015;
var statearr_35028_35092 = state_35015__$1;
(statearr_35028_35092[(2)] = null);

(statearr_35028_35092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (11))){
var inst_34990 = (state_35015[(2)]);
var state_35015__$1 = (function (){var statearr_35029 = state_35015;
(statearr_35029[(10)] = inst_34990);

return statearr_35029;
})();
var statearr_35030_35093 = state_35015__$1;
(statearr_35030_35093[(2)] = null);

(statearr_35030_35093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (9))){
var state_35015__$1 = state_35015;
var statearr_35031_35094 = state_35015__$1;
(statearr_35031_35094[(2)] = null);

(statearr_35031_35094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (5))){
var state_35015__$1 = state_35015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35032_35095 = state_35015__$1;
(statearr_35032_35095[(1)] = (8));

} else {
var statearr_35033_35096 = state_35015__$1;
(statearr_35033_35096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (14))){
var inst_34995 = (state_35015[(11)]);
var inst_34993 = (state_35015[(8)]);
var inst_34993__$1 = (state_35015[(2)]);
var inst_34994 = (inst_34993__$1 == null);
var inst_34995__$1 = cljs.core.not.call(null,inst_34994);
var state_35015__$1 = (function (){var statearr_35034 = state_35015;
(statearr_35034[(11)] = inst_34995__$1);

(statearr_35034[(8)] = inst_34993__$1);

return statearr_35034;
})();
if(inst_34995__$1){
var statearr_35035_35097 = state_35015__$1;
(statearr_35035_35097[(1)] = (15));

} else {
var statearr_35036_35098 = state_35015__$1;
(statearr_35036_35098[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (16))){
var inst_34995 = (state_35015[(11)]);
var state_35015__$1 = state_35015;
var statearr_35037_35099 = state_35015__$1;
(statearr_35037_35099[(2)] = inst_34995);

(statearr_35037_35099[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (10))){
var inst_34987 = (state_35015[(2)]);
var state_35015__$1 = state_35015;
var statearr_35038_35100 = state_35015__$1;
(statearr_35038_35100[(2)] = inst_34987);

(statearr_35038_35100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (18))){
var inst_34998 = (state_35015[(2)]);
var state_35015__$1 = state_35015;
var statearr_35039_35101 = state_35015__$1;
(statearr_35039_35101[(2)] = inst_34998);

(statearr_35039_35101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35016 === (8))){
var inst_34984 = cljs.core.async.close_BANG_.call(null,to);
var state_35015__$1 = state_35015;
var statearr_35040_35102 = state_35015__$1;
(statearr_35040_35102[(2)] = inst_34984);

(statearr_35040_35102[(1)] = (10));


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
});})(c__34490__auto__,jobs,results,process,async))
;
return ((function (switch__34378__auto__,c__34490__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_35044 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35044[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__);

(statearr_35044[(1)] = (1));

return statearr_35044;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1 = (function (state_35015){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_35015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e35045){if((e35045 instanceof Object)){
var ex__34382__auto__ = e35045;
var statearr_35046_35103 = state_35015;
(statearr_35046_35103[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35104 = state_35015;
state_35015 = G__35104;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__ = function(state_35015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1.call(this,state_35015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto__,jobs,results,process,async))
})();
var state__34492__auto__ = (function (){var statearr_35047 = f__34491__auto__.call(null);
(statearr_35047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto__);

return statearr_35047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto__,jobs,results,process,async))
);

return c__34490__auto__;
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
var args35105 = [];
var len__26126__auto___35108 = arguments.length;
var i__26127__auto___35109 = (0);
while(true){
if((i__26127__auto___35109 < len__26126__auto___35108)){
args35105.push((arguments[i__26127__auto___35109]));

var G__35110 = (i__26127__auto___35109 + (1));
i__26127__auto___35109 = G__35110;
continue;
} else {
}
break;
}

var G__35107 = args35105.length;
switch (G__35107) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35105.length)].join('')));

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
var args35112 = [];
var len__26126__auto___35115 = arguments.length;
var i__26127__auto___35116 = (0);
while(true){
if((i__26127__auto___35116 < len__26126__auto___35115)){
args35112.push((arguments[i__26127__auto___35116]));

var G__35117 = (i__26127__auto___35116 + (1));
i__26127__auto___35116 = G__35117;
continue;
} else {
}
break;
}

var G__35114 = args35112.length;
switch (G__35114) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35112.length)].join('')));

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
var args35119 = [];
var len__26126__auto___35172 = arguments.length;
var i__26127__auto___35173 = (0);
while(true){
if((i__26127__auto___35173 < len__26126__auto___35172)){
args35119.push((arguments[i__26127__auto___35173]));

var G__35174 = (i__26127__auto___35173 + (1));
i__26127__auto___35173 = G__35174;
continue;
} else {
}
break;
}

var G__35121 = args35119.length;
switch (G__35121) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35119.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34490__auto___35176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___35176,tc,fc){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___35176,tc,fc){
return (function (state_35147){
var state_val_35148 = (state_35147[(1)]);
if((state_val_35148 === (7))){
var inst_35143 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35149_35177 = state_35147__$1;
(statearr_35149_35177[(2)] = inst_35143);

(statearr_35149_35177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (1))){
var state_35147__$1 = state_35147;
var statearr_35150_35178 = state_35147__$1;
(statearr_35150_35178[(2)] = null);

(statearr_35150_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (4))){
var inst_35124 = (state_35147[(7)]);
var inst_35124__$1 = (state_35147[(2)]);
var inst_35125 = (inst_35124__$1 == null);
var state_35147__$1 = (function (){var statearr_35151 = state_35147;
(statearr_35151[(7)] = inst_35124__$1);

return statearr_35151;
})();
if(cljs.core.truth_(inst_35125)){
var statearr_35152_35179 = state_35147__$1;
(statearr_35152_35179[(1)] = (5));

} else {
var statearr_35153_35180 = state_35147__$1;
(statearr_35153_35180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (13))){
var state_35147__$1 = state_35147;
var statearr_35154_35181 = state_35147__$1;
(statearr_35154_35181[(2)] = null);

(statearr_35154_35181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (6))){
var inst_35124 = (state_35147[(7)]);
var inst_35130 = p.call(null,inst_35124);
var state_35147__$1 = state_35147;
if(cljs.core.truth_(inst_35130)){
var statearr_35155_35182 = state_35147__$1;
(statearr_35155_35182[(1)] = (9));

} else {
var statearr_35156_35183 = state_35147__$1;
(statearr_35156_35183[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (3))){
var inst_35145 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35147__$1,inst_35145);
} else {
if((state_val_35148 === (12))){
var state_35147__$1 = state_35147;
var statearr_35157_35184 = state_35147__$1;
(statearr_35157_35184[(2)] = null);

(statearr_35157_35184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (2))){
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35147__$1,(4),ch);
} else {
if((state_val_35148 === (11))){
var inst_35124 = (state_35147[(7)]);
var inst_35134 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35147__$1,(8),inst_35134,inst_35124);
} else {
if((state_val_35148 === (9))){
var state_35147__$1 = state_35147;
var statearr_35158_35185 = state_35147__$1;
(statearr_35158_35185[(2)] = tc);

(statearr_35158_35185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (5))){
var inst_35127 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35128 = cljs.core.async.close_BANG_.call(null,fc);
var state_35147__$1 = (function (){var statearr_35159 = state_35147;
(statearr_35159[(8)] = inst_35127);

return statearr_35159;
})();
var statearr_35160_35186 = state_35147__$1;
(statearr_35160_35186[(2)] = inst_35128);

(statearr_35160_35186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (14))){
var inst_35141 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
var statearr_35161_35187 = state_35147__$1;
(statearr_35161_35187[(2)] = inst_35141);

(statearr_35161_35187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (10))){
var state_35147__$1 = state_35147;
var statearr_35162_35188 = state_35147__$1;
(statearr_35162_35188[(2)] = fc);

(statearr_35162_35188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35148 === (8))){
var inst_35136 = (state_35147[(2)]);
var state_35147__$1 = state_35147;
if(cljs.core.truth_(inst_35136)){
var statearr_35163_35189 = state_35147__$1;
(statearr_35163_35189[(1)] = (12));

} else {
var statearr_35164_35190 = state_35147__$1;
(statearr_35164_35190[(1)] = (13));

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
});})(c__34490__auto___35176,tc,fc))
;
return ((function (switch__34378__auto__,c__34490__auto___35176,tc,fc){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_35168 = [null,null,null,null,null,null,null,null,null];
(statearr_35168[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_35168[(1)] = (1));

return statearr_35168;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_35147){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_35147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e35169){if((e35169 instanceof Object)){
var ex__34382__auto__ = e35169;
var statearr_35170_35191 = state_35147;
(statearr_35170_35191[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35192 = state_35147;
state_35147 = G__35192;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_35147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_35147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___35176,tc,fc))
})();
var state__34492__auto__ = (function (){var statearr_35171 = f__34491__auto__.call(null);
(statearr_35171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___35176);

return statearr_35171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___35176,tc,fc))
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
var c__34490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto__){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto__){
return (function (state_35256){
var state_val_35257 = (state_35256[(1)]);
if((state_val_35257 === (7))){
var inst_35252 = (state_35256[(2)]);
var state_35256__$1 = state_35256;
var statearr_35258_35279 = state_35256__$1;
(statearr_35258_35279[(2)] = inst_35252);

(statearr_35258_35279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (1))){
var inst_35236 = init;
var state_35256__$1 = (function (){var statearr_35259 = state_35256;
(statearr_35259[(7)] = inst_35236);

return statearr_35259;
})();
var statearr_35260_35280 = state_35256__$1;
(statearr_35260_35280[(2)] = null);

(statearr_35260_35280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (4))){
var inst_35239 = (state_35256[(8)]);
var inst_35239__$1 = (state_35256[(2)]);
var inst_35240 = (inst_35239__$1 == null);
var state_35256__$1 = (function (){var statearr_35261 = state_35256;
(statearr_35261[(8)] = inst_35239__$1);

return statearr_35261;
})();
if(cljs.core.truth_(inst_35240)){
var statearr_35262_35281 = state_35256__$1;
(statearr_35262_35281[(1)] = (5));

} else {
var statearr_35263_35282 = state_35256__$1;
(statearr_35263_35282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (6))){
var inst_35239 = (state_35256[(8)]);
var inst_35243 = (state_35256[(9)]);
var inst_35236 = (state_35256[(7)]);
var inst_35243__$1 = f.call(null,inst_35236,inst_35239);
var inst_35244 = cljs.core.reduced_QMARK_.call(null,inst_35243__$1);
var state_35256__$1 = (function (){var statearr_35264 = state_35256;
(statearr_35264[(9)] = inst_35243__$1);

return statearr_35264;
})();
if(inst_35244){
var statearr_35265_35283 = state_35256__$1;
(statearr_35265_35283[(1)] = (8));

} else {
var statearr_35266_35284 = state_35256__$1;
(statearr_35266_35284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (3))){
var inst_35254 = (state_35256[(2)]);
var state_35256__$1 = state_35256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35256__$1,inst_35254);
} else {
if((state_val_35257 === (2))){
var state_35256__$1 = state_35256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35256__$1,(4),ch);
} else {
if((state_val_35257 === (9))){
var inst_35243 = (state_35256[(9)]);
var inst_35236 = inst_35243;
var state_35256__$1 = (function (){var statearr_35267 = state_35256;
(statearr_35267[(7)] = inst_35236);

return statearr_35267;
})();
var statearr_35268_35285 = state_35256__$1;
(statearr_35268_35285[(2)] = null);

(statearr_35268_35285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (5))){
var inst_35236 = (state_35256[(7)]);
var state_35256__$1 = state_35256;
var statearr_35269_35286 = state_35256__$1;
(statearr_35269_35286[(2)] = inst_35236);

(statearr_35269_35286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (10))){
var inst_35250 = (state_35256[(2)]);
var state_35256__$1 = state_35256;
var statearr_35270_35287 = state_35256__$1;
(statearr_35270_35287[(2)] = inst_35250);

(statearr_35270_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35257 === (8))){
var inst_35243 = (state_35256[(9)]);
var inst_35246 = cljs.core.deref.call(null,inst_35243);
var state_35256__$1 = state_35256;
var statearr_35271_35288 = state_35256__$1;
(statearr_35271_35288[(2)] = inst_35246);

(statearr_35271_35288[(1)] = (10));


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
});})(c__34490__auto__))
;
return ((function (switch__34378__auto__,c__34490__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34379__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34379__auto____0 = (function (){
var statearr_35275 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35275[(0)] = cljs$core$async$reduce_$_state_machine__34379__auto__);

(statearr_35275[(1)] = (1));

return statearr_35275;
});
var cljs$core$async$reduce_$_state_machine__34379__auto____1 = (function (state_35256){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_35256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e35276){if((e35276 instanceof Object)){
var ex__34382__auto__ = e35276;
var statearr_35277_35289 = state_35256;
(statearr_35277_35289[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35290 = state_35256;
state_35256 = G__35290;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34379__auto__ = function(state_35256){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34379__auto____1.call(this,state_35256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34379__auto____0;
cljs$core$async$reduce_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34379__auto____1;
return cljs$core$async$reduce_$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto__))
})();
var state__34492__auto__ = (function (){var statearr_35278 = f__34491__auto__.call(null);
(statearr_35278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto__);

return statearr_35278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto__))
);

return c__34490__auto__;
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
var args35291 = [];
var len__26126__auto___35343 = arguments.length;
var i__26127__auto___35344 = (0);
while(true){
if((i__26127__auto___35344 < len__26126__auto___35343)){
args35291.push((arguments[i__26127__auto___35344]));

var G__35345 = (i__26127__auto___35344 + (1));
i__26127__auto___35344 = G__35345;
continue;
} else {
}
break;
}

var G__35293 = args35291.length;
switch (G__35293) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35291.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto__){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto__){
return (function (state_35318){
var state_val_35319 = (state_35318[(1)]);
if((state_val_35319 === (7))){
var inst_35300 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35320_35347 = state_35318__$1;
(statearr_35320_35347[(2)] = inst_35300);

(statearr_35320_35347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (1))){
var inst_35294 = cljs.core.seq.call(null,coll);
var inst_35295 = inst_35294;
var state_35318__$1 = (function (){var statearr_35321 = state_35318;
(statearr_35321[(7)] = inst_35295);

return statearr_35321;
})();
var statearr_35322_35348 = state_35318__$1;
(statearr_35322_35348[(2)] = null);

(statearr_35322_35348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (4))){
var inst_35295 = (state_35318[(7)]);
var inst_35298 = cljs.core.first.call(null,inst_35295);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35318__$1,(7),ch,inst_35298);
} else {
if((state_val_35319 === (13))){
var inst_35312 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35323_35349 = state_35318__$1;
(statearr_35323_35349[(2)] = inst_35312);

(statearr_35323_35349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (6))){
var inst_35303 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
if(cljs.core.truth_(inst_35303)){
var statearr_35324_35350 = state_35318__$1;
(statearr_35324_35350[(1)] = (8));

} else {
var statearr_35325_35351 = state_35318__$1;
(statearr_35325_35351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (3))){
var inst_35316 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35318__$1,inst_35316);
} else {
if((state_val_35319 === (12))){
var state_35318__$1 = state_35318;
var statearr_35326_35352 = state_35318__$1;
(statearr_35326_35352[(2)] = null);

(statearr_35326_35352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (2))){
var inst_35295 = (state_35318[(7)]);
var state_35318__$1 = state_35318;
if(cljs.core.truth_(inst_35295)){
var statearr_35327_35353 = state_35318__$1;
(statearr_35327_35353[(1)] = (4));

} else {
var statearr_35328_35354 = state_35318__$1;
(statearr_35328_35354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (11))){
var inst_35309 = cljs.core.async.close_BANG_.call(null,ch);
var state_35318__$1 = state_35318;
var statearr_35329_35355 = state_35318__$1;
(statearr_35329_35355[(2)] = inst_35309);

(statearr_35329_35355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (9))){
var state_35318__$1 = state_35318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35330_35356 = state_35318__$1;
(statearr_35330_35356[(1)] = (11));

} else {
var statearr_35331_35357 = state_35318__$1;
(statearr_35331_35357[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (5))){
var inst_35295 = (state_35318[(7)]);
var state_35318__$1 = state_35318;
var statearr_35332_35358 = state_35318__$1;
(statearr_35332_35358[(2)] = inst_35295);

(statearr_35332_35358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (10))){
var inst_35314 = (state_35318[(2)]);
var state_35318__$1 = state_35318;
var statearr_35333_35359 = state_35318__$1;
(statearr_35333_35359[(2)] = inst_35314);

(statearr_35333_35359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35319 === (8))){
var inst_35295 = (state_35318[(7)]);
var inst_35305 = cljs.core.next.call(null,inst_35295);
var inst_35295__$1 = inst_35305;
var state_35318__$1 = (function (){var statearr_35334 = state_35318;
(statearr_35334[(7)] = inst_35295__$1);

return statearr_35334;
})();
var statearr_35335_35360 = state_35318__$1;
(statearr_35335_35360[(2)] = null);

(statearr_35335_35360[(1)] = (2));


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
});})(c__34490__auto__))
;
return ((function (switch__34378__auto__,c__34490__auto__){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_35339 = [null,null,null,null,null,null,null,null];
(statearr_35339[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_35339[(1)] = (1));

return statearr_35339;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_35318){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_35318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e35340){if((e35340 instanceof Object)){
var ex__34382__auto__ = e35340;
var statearr_35341_35361 = state_35318;
(statearr_35341_35361[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35362 = state_35318;
state_35318 = G__35362;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_35318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_35318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto__))
})();
var state__34492__auto__ = (function (){var statearr_35342 = f__34491__auto__.call(null);
(statearr_35342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto__);

return statearr_35342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto__))
);

return c__34490__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async35588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35588 = (function (mult,ch,cs,meta35589){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta35589 = meta35589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35590,meta35589__$1){
var self__ = this;
var _35590__$1 = this;
return (new cljs.core.async.t_cljs$core$async35588(self__.mult,self__.ch,self__.cs,meta35589__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35590){
var self__ = this;
var _35590__$1 = this;
return self__.meta35589;
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35589","meta35589",-321927542,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35588";

cljs.core.async.t_cljs$core$async35588.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async35588");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35588 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35588(mult__$1,ch__$1,cs__$1,meta35589){
return (new cljs.core.async.t_cljs$core$async35588(mult__$1,ch__$1,cs__$1,meta35589));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35588(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34490__auto___35813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___35813,cs,m,dchan,dctr,done){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___35813,cs,m,dchan,dctr,done){
return (function (state_35725){
var state_val_35726 = (state_35725[(1)]);
if((state_val_35726 === (7))){
var inst_35721 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35727_35814 = state_35725__$1;
(statearr_35727_35814[(2)] = inst_35721);

(statearr_35727_35814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (20))){
var inst_35624 = (state_35725[(7)]);
var inst_35636 = cljs.core.first.call(null,inst_35624);
var inst_35637 = cljs.core.nth.call(null,inst_35636,(0),null);
var inst_35638 = cljs.core.nth.call(null,inst_35636,(1),null);
var state_35725__$1 = (function (){var statearr_35728 = state_35725;
(statearr_35728[(8)] = inst_35637);

return statearr_35728;
})();
if(cljs.core.truth_(inst_35638)){
var statearr_35729_35815 = state_35725__$1;
(statearr_35729_35815[(1)] = (22));

} else {
var statearr_35730_35816 = state_35725__$1;
(statearr_35730_35816[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (27))){
var inst_35673 = (state_35725[(9)]);
var inst_35666 = (state_35725[(10)]);
var inst_35668 = (state_35725[(11)]);
var inst_35593 = (state_35725[(12)]);
var inst_35673__$1 = cljs.core._nth.call(null,inst_35666,inst_35668);
var inst_35674 = cljs.core.async.put_BANG_.call(null,inst_35673__$1,inst_35593,done);
var state_35725__$1 = (function (){var statearr_35731 = state_35725;
(statearr_35731[(9)] = inst_35673__$1);

return statearr_35731;
})();
if(cljs.core.truth_(inst_35674)){
var statearr_35732_35817 = state_35725__$1;
(statearr_35732_35817[(1)] = (30));

} else {
var statearr_35733_35818 = state_35725__$1;
(statearr_35733_35818[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (1))){
var state_35725__$1 = state_35725;
var statearr_35734_35819 = state_35725__$1;
(statearr_35734_35819[(2)] = null);

(statearr_35734_35819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (24))){
var inst_35624 = (state_35725[(7)]);
var inst_35643 = (state_35725[(2)]);
var inst_35644 = cljs.core.next.call(null,inst_35624);
var inst_35602 = inst_35644;
var inst_35603 = null;
var inst_35604 = (0);
var inst_35605 = (0);
var state_35725__$1 = (function (){var statearr_35735 = state_35725;
(statearr_35735[(13)] = inst_35605);

(statearr_35735[(14)] = inst_35602);

(statearr_35735[(15)] = inst_35603);

(statearr_35735[(16)] = inst_35604);

(statearr_35735[(17)] = inst_35643);

return statearr_35735;
})();
var statearr_35736_35820 = state_35725__$1;
(statearr_35736_35820[(2)] = null);

(statearr_35736_35820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (39))){
var state_35725__$1 = state_35725;
var statearr_35740_35821 = state_35725__$1;
(statearr_35740_35821[(2)] = null);

(statearr_35740_35821[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (4))){
var inst_35593 = (state_35725[(12)]);
var inst_35593__$1 = (state_35725[(2)]);
var inst_35594 = (inst_35593__$1 == null);
var state_35725__$1 = (function (){var statearr_35741 = state_35725;
(statearr_35741[(12)] = inst_35593__$1);

return statearr_35741;
})();
if(cljs.core.truth_(inst_35594)){
var statearr_35742_35822 = state_35725__$1;
(statearr_35742_35822[(1)] = (5));

} else {
var statearr_35743_35823 = state_35725__$1;
(statearr_35743_35823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (15))){
var inst_35605 = (state_35725[(13)]);
var inst_35602 = (state_35725[(14)]);
var inst_35603 = (state_35725[(15)]);
var inst_35604 = (state_35725[(16)]);
var inst_35620 = (state_35725[(2)]);
var inst_35621 = (inst_35605 + (1));
var tmp35737 = inst_35602;
var tmp35738 = inst_35603;
var tmp35739 = inst_35604;
var inst_35602__$1 = tmp35737;
var inst_35603__$1 = tmp35738;
var inst_35604__$1 = tmp35739;
var inst_35605__$1 = inst_35621;
var state_35725__$1 = (function (){var statearr_35744 = state_35725;
(statearr_35744[(13)] = inst_35605__$1);

(statearr_35744[(14)] = inst_35602__$1);

(statearr_35744[(15)] = inst_35603__$1);

(statearr_35744[(18)] = inst_35620);

(statearr_35744[(16)] = inst_35604__$1);

return statearr_35744;
})();
var statearr_35745_35824 = state_35725__$1;
(statearr_35745_35824[(2)] = null);

(statearr_35745_35824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (21))){
var inst_35647 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35749_35825 = state_35725__$1;
(statearr_35749_35825[(2)] = inst_35647);

(statearr_35749_35825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (31))){
var inst_35673 = (state_35725[(9)]);
var inst_35677 = done.call(null,null);
var inst_35678 = cljs.core.async.untap_STAR_.call(null,m,inst_35673);
var state_35725__$1 = (function (){var statearr_35750 = state_35725;
(statearr_35750[(19)] = inst_35677);

return statearr_35750;
})();
var statearr_35751_35826 = state_35725__$1;
(statearr_35751_35826[(2)] = inst_35678);

(statearr_35751_35826[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (32))){
var inst_35667 = (state_35725[(20)]);
var inst_35666 = (state_35725[(10)]);
var inst_35668 = (state_35725[(11)]);
var inst_35665 = (state_35725[(21)]);
var inst_35680 = (state_35725[(2)]);
var inst_35681 = (inst_35668 + (1));
var tmp35746 = inst_35667;
var tmp35747 = inst_35666;
var tmp35748 = inst_35665;
var inst_35665__$1 = tmp35748;
var inst_35666__$1 = tmp35747;
var inst_35667__$1 = tmp35746;
var inst_35668__$1 = inst_35681;
var state_35725__$1 = (function (){var statearr_35752 = state_35725;
(statearr_35752[(20)] = inst_35667__$1);

(statearr_35752[(10)] = inst_35666__$1);

(statearr_35752[(11)] = inst_35668__$1);

(statearr_35752[(21)] = inst_35665__$1);

(statearr_35752[(22)] = inst_35680);

return statearr_35752;
})();
var statearr_35753_35827 = state_35725__$1;
(statearr_35753_35827[(2)] = null);

(statearr_35753_35827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (40))){
var inst_35693 = (state_35725[(23)]);
var inst_35697 = done.call(null,null);
var inst_35698 = cljs.core.async.untap_STAR_.call(null,m,inst_35693);
var state_35725__$1 = (function (){var statearr_35754 = state_35725;
(statearr_35754[(24)] = inst_35697);

return statearr_35754;
})();
var statearr_35755_35828 = state_35725__$1;
(statearr_35755_35828[(2)] = inst_35698);

(statearr_35755_35828[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (33))){
var inst_35684 = (state_35725[(25)]);
var inst_35686 = cljs.core.chunked_seq_QMARK_.call(null,inst_35684);
var state_35725__$1 = state_35725;
if(inst_35686){
var statearr_35756_35829 = state_35725__$1;
(statearr_35756_35829[(1)] = (36));

} else {
var statearr_35757_35830 = state_35725__$1;
(statearr_35757_35830[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (13))){
var inst_35614 = (state_35725[(26)]);
var inst_35617 = cljs.core.async.close_BANG_.call(null,inst_35614);
var state_35725__$1 = state_35725;
var statearr_35758_35831 = state_35725__$1;
(statearr_35758_35831[(2)] = inst_35617);

(statearr_35758_35831[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (22))){
var inst_35637 = (state_35725[(8)]);
var inst_35640 = cljs.core.async.close_BANG_.call(null,inst_35637);
var state_35725__$1 = state_35725;
var statearr_35759_35832 = state_35725__$1;
(statearr_35759_35832[(2)] = inst_35640);

(statearr_35759_35832[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (36))){
var inst_35684 = (state_35725[(25)]);
var inst_35688 = cljs.core.chunk_first.call(null,inst_35684);
var inst_35689 = cljs.core.chunk_rest.call(null,inst_35684);
var inst_35690 = cljs.core.count.call(null,inst_35688);
var inst_35665 = inst_35689;
var inst_35666 = inst_35688;
var inst_35667 = inst_35690;
var inst_35668 = (0);
var state_35725__$1 = (function (){var statearr_35760 = state_35725;
(statearr_35760[(20)] = inst_35667);

(statearr_35760[(10)] = inst_35666);

(statearr_35760[(11)] = inst_35668);

(statearr_35760[(21)] = inst_35665);

return statearr_35760;
})();
var statearr_35761_35833 = state_35725__$1;
(statearr_35761_35833[(2)] = null);

(statearr_35761_35833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (41))){
var inst_35684 = (state_35725[(25)]);
var inst_35700 = (state_35725[(2)]);
var inst_35701 = cljs.core.next.call(null,inst_35684);
var inst_35665 = inst_35701;
var inst_35666 = null;
var inst_35667 = (0);
var inst_35668 = (0);
var state_35725__$1 = (function (){var statearr_35762 = state_35725;
(statearr_35762[(27)] = inst_35700);

(statearr_35762[(20)] = inst_35667);

(statearr_35762[(10)] = inst_35666);

(statearr_35762[(11)] = inst_35668);

(statearr_35762[(21)] = inst_35665);

return statearr_35762;
})();
var statearr_35763_35834 = state_35725__$1;
(statearr_35763_35834[(2)] = null);

(statearr_35763_35834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (43))){
var state_35725__$1 = state_35725;
var statearr_35764_35835 = state_35725__$1;
(statearr_35764_35835[(2)] = null);

(statearr_35764_35835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (29))){
var inst_35709 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35765_35836 = state_35725__$1;
(statearr_35765_35836[(2)] = inst_35709);

(statearr_35765_35836[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (44))){
var inst_35718 = (state_35725[(2)]);
var state_35725__$1 = (function (){var statearr_35766 = state_35725;
(statearr_35766[(28)] = inst_35718);

return statearr_35766;
})();
var statearr_35767_35837 = state_35725__$1;
(statearr_35767_35837[(2)] = null);

(statearr_35767_35837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (6))){
var inst_35657 = (state_35725[(29)]);
var inst_35656 = cljs.core.deref.call(null,cs);
var inst_35657__$1 = cljs.core.keys.call(null,inst_35656);
var inst_35658 = cljs.core.count.call(null,inst_35657__$1);
var inst_35659 = cljs.core.reset_BANG_.call(null,dctr,inst_35658);
var inst_35664 = cljs.core.seq.call(null,inst_35657__$1);
var inst_35665 = inst_35664;
var inst_35666 = null;
var inst_35667 = (0);
var inst_35668 = (0);
var state_35725__$1 = (function (){var statearr_35768 = state_35725;
(statearr_35768[(30)] = inst_35659);

(statearr_35768[(20)] = inst_35667);

(statearr_35768[(10)] = inst_35666);

(statearr_35768[(11)] = inst_35668);

(statearr_35768[(29)] = inst_35657__$1);

(statearr_35768[(21)] = inst_35665);

return statearr_35768;
})();
var statearr_35769_35838 = state_35725__$1;
(statearr_35769_35838[(2)] = null);

(statearr_35769_35838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (28))){
var inst_35684 = (state_35725[(25)]);
var inst_35665 = (state_35725[(21)]);
var inst_35684__$1 = cljs.core.seq.call(null,inst_35665);
var state_35725__$1 = (function (){var statearr_35770 = state_35725;
(statearr_35770[(25)] = inst_35684__$1);

return statearr_35770;
})();
if(inst_35684__$1){
var statearr_35771_35839 = state_35725__$1;
(statearr_35771_35839[(1)] = (33));

} else {
var statearr_35772_35840 = state_35725__$1;
(statearr_35772_35840[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (25))){
var inst_35667 = (state_35725[(20)]);
var inst_35668 = (state_35725[(11)]);
var inst_35670 = (inst_35668 < inst_35667);
var inst_35671 = inst_35670;
var state_35725__$1 = state_35725;
if(cljs.core.truth_(inst_35671)){
var statearr_35773_35841 = state_35725__$1;
(statearr_35773_35841[(1)] = (27));

} else {
var statearr_35774_35842 = state_35725__$1;
(statearr_35774_35842[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (34))){
var state_35725__$1 = state_35725;
var statearr_35775_35843 = state_35725__$1;
(statearr_35775_35843[(2)] = null);

(statearr_35775_35843[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (17))){
var state_35725__$1 = state_35725;
var statearr_35776_35844 = state_35725__$1;
(statearr_35776_35844[(2)] = null);

(statearr_35776_35844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (3))){
var inst_35723 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35725__$1,inst_35723);
} else {
if((state_val_35726 === (12))){
var inst_35652 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35777_35845 = state_35725__$1;
(statearr_35777_35845[(2)] = inst_35652);

(statearr_35777_35845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (2))){
var state_35725__$1 = state_35725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35725__$1,(4),ch);
} else {
if((state_val_35726 === (23))){
var state_35725__$1 = state_35725;
var statearr_35778_35846 = state_35725__$1;
(statearr_35778_35846[(2)] = null);

(statearr_35778_35846[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (35))){
var inst_35707 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35779_35847 = state_35725__$1;
(statearr_35779_35847[(2)] = inst_35707);

(statearr_35779_35847[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (19))){
var inst_35624 = (state_35725[(7)]);
var inst_35628 = cljs.core.chunk_first.call(null,inst_35624);
var inst_35629 = cljs.core.chunk_rest.call(null,inst_35624);
var inst_35630 = cljs.core.count.call(null,inst_35628);
var inst_35602 = inst_35629;
var inst_35603 = inst_35628;
var inst_35604 = inst_35630;
var inst_35605 = (0);
var state_35725__$1 = (function (){var statearr_35780 = state_35725;
(statearr_35780[(13)] = inst_35605);

(statearr_35780[(14)] = inst_35602);

(statearr_35780[(15)] = inst_35603);

(statearr_35780[(16)] = inst_35604);

return statearr_35780;
})();
var statearr_35781_35848 = state_35725__$1;
(statearr_35781_35848[(2)] = null);

(statearr_35781_35848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (11))){
var inst_35602 = (state_35725[(14)]);
var inst_35624 = (state_35725[(7)]);
var inst_35624__$1 = cljs.core.seq.call(null,inst_35602);
var state_35725__$1 = (function (){var statearr_35782 = state_35725;
(statearr_35782[(7)] = inst_35624__$1);

return statearr_35782;
})();
if(inst_35624__$1){
var statearr_35783_35849 = state_35725__$1;
(statearr_35783_35849[(1)] = (16));

} else {
var statearr_35784_35850 = state_35725__$1;
(statearr_35784_35850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (9))){
var inst_35654 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35785_35851 = state_35725__$1;
(statearr_35785_35851[(2)] = inst_35654);

(statearr_35785_35851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (5))){
var inst_35600 = cljs.core.deref.call(null,cs);
var inst_35601 = cljs.core.seq.call(null,inst_35600);
var inst_35602 = inst_35601;
var inst_35603 = null;
var inst_35604 = (0);
var inst_35605 = (0);
var state_35725__$1 = (function (){var statearr_35786 = state_35725;
(statearr_35786[(13)] = inst_35605);

(statearr_35786[(14)] = inst_35602);

(statearr_35786[(15)] = inst_35603);

(statearr_35786[(16)] = inst_35604);

return statearr_35786;
})();
var statearr_35787_35852 = state_35725__$1;
(statearr_35787_35852[(2)] = null);

(statearr_35787_35852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (14))){
var state_35725__$1 = state_35725;
var statearr_35788_35853 = state_35725__$1;
(statearr_35788_35853[(2)] = null);

(statearr_35788_35853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (45))){
var inst_35715 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35789_35854 = state_35725__$1;
(statearr_35789_35854[(2)] = inst_35715);

(statearr_35789_35854[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (26))){
var inst_35657 = (state_35725[(29)]);
var inst_35711 = (state_35725[(2)]);
var inst_35712 = cljs.core.seq.call(null,inst_35657);
var state_35725__$1 = (function (){var statearr_35790 = state_35725;
(statearr_35790[(31)] = inst_35711);

return statearr_35790;
})();
if(inst_35712){
var statearr_35791_35855 = state_35725__$1;
(statearr_35791_35855[(1)] = (42));

} else {
var statearr_35792_35856 = state_35725__$1;
(statearr_35792_35856[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (16))){
var inst_35624 = (state_35725[(7)]);
var inst_35626 = cljs.core.chunked_seq_QMARK_.call(null,inst_35624);
var state_35725__$1 = state_35725;
if(inst_35626){
var statearr_35793_35857 = state_35725__$1;
(statearr_35793_35857[(1)] = (19));

} else {
var statearr_35794_35858 = state_35725__$1;
(statearr_35794_35858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (38))){
var inst_35704 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35795_35859 = state_35725__$1;
(statearr_35795_35859[(2)] = inst_35704);

(statearr_35795_35859[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (30))){
var state_35725__$1 = state_35725;
var statearr_35796_35860 = state_35725__$1;
(statearr_35796_35860[(2)] = null);

(statearr_35796_35860[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (10))){
var inst_35605 = (state_35725[(13)]);
var inst_35603 = (state_35725[(15)]);
var inst_35613 = cljs.core._nth.call(null,inst_35603,inst_35605);
var inst_35614 = cljs.core.nth.call(null,inst_35613,(0),null);
var inst_35615 = cljs.core.nth.call(null,inst_35613,(1),null);
var state_35725__$1 = (function (){var statearr_35797 = state_35725;
(statearr_35797[(26)] = inst_35614);

return statearr_35797;
})();
if(cljs.core.truth_(inst_35615)){
var statearr_35798_35861 = state_35725__$1;
(statearr_35798_35861[(1)] = (13));

} else {
var statearr_35799_35862 = state_35725__$1;
(statearr_35799_35862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (18))){
var inst_35650 = (state_35725[(2)]);
var state_35725__$1 = state_35725;
var statearr_35800_35863 = state_35725__$1;
(statearr_35800_35863[(2)] = inst_35650);

(statearr_35800_35863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (42))){
var state_35725__$1 = state_35725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35725__$1,(45),dchan);
} else {
if((state_val_35726 === (37))){
var inst_35684 = (state_35725[(25)]);
var inst_35693 = (state_35725[(23)]);
var inst_35593 = (state_35725[(12)]);
var inst_35693__$1 = cljs.core.first.call(null,inst_35684);
var inst_35694 = cljs.core.async.put_BANG_.call(null,inst_35693__$1,inst_35593,done);
var state_35725__$1 = (function (){var statearr_35801 = state_35725;
(statearr_35801[(23)] = inst_35693__$1);

return statearr_35801;
})();
if(cljs.core.truth_(inst_35694)){
var statearr_35802_35864 = state_35725__$1;
(statearr_35802_35864[(1)] = (39));

} else {
var statearr_35803_35865 = state_35725__$1;
(statearr_35803_35865[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35726 === (8))){
var inst_35605 = (state_35725[(13)]);
var inst_35604 = (state_35725[(16)]);
var inst_35607 = (inst_35605 < inst_35604);
var inst_35608 = inst_35607;
var state_35725__$1 = state_35725;
if(cljs.core.truth_(inst_35608)){
var statearr_35804_35866 = state_35725__$1;
(statearr_35804_35866[(1)] = (10));

} else {
var statearr_35805_35867 = state_35725__$1;
(statearr_35805_35867[(1)] = (11));

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
});})(c__34490__auto___35813,cs,m,dchan,dctr,done))
;
return ((function (switch__34378__auto__,c__34490__auto___35813,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34379__auto__ = null;
var cljs$core$async$mult_$_state_machine__34379__auto____0 = (function (){
var statearr_35809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35809[(0)] = cljs$core$async$mult_$_state_machine__34379__auto__);

(statearr_35809[(1)] = (1));

return statearr_35809;
});
var cljs$core$async$mult_$_state_machine__34379__auto____1 = (function (state_35725){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_35725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e35810){if((e35810 instanceof Object)){
var ex__34382__auto__ = e35810;
var statearr_35811_35868 = state_35725;
(statearr_35811_35868[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35869 = state_35725;
state_35725 = G__35869;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34379__auto__ = function(state_35725){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34379__auto____1.call(this,state_35725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34379__auto____0;
cljs$core$async$mult_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34379__auto____1;
return cljs$core$async$mult_$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___35813,cs,m,dchan,dctr,done))
})();
var state__34492__auto__ = (function (){var statearr_35812 = f__34491__auto__.call(null);
(statearr_35812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___35813);

return statearr_35812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___35813,cs,m,dchan,dctr,done))
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
var args35870 = [];
var len__26126__auto___35873 = arguments.length;
var i__26127__auto___35874 = (0);
while(true){
if((i__26127__auto___35874 < len__26126__auto___35873)){
args35870.push((arguments[i__26127__auto___35874]));

var G__35875 = (i__26127__auto___35874 + (1));
i__26127__auto___35874 = G__35875;
continue;
} else {
}
break;
}

var G__35872 = args35870.length;
switch (G__35872) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35870.length)].join('')));

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
var len__26126__auto___35887 = arguments.length;
var i__26127__auto___35888 = (0);
while(true){
if((i__26127__auto___35888 < len__26126__auto___35887)){
args__26133__auto__.push((arguments[i__26127__auto___35888]));

var G__35889 = (i__26127__auto___35888 + (1));
i__26127__auto___35888 = G__35889;
continue;
} else {
}
break;
}

var argseq__26134__auto__ = ((((3) < args__26133__auto__.length))?(new cljs.core.IndexedSeq(args__26133__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26134__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35881){
var map__35882 = p__35881;
var map__35882__$1 = ((((!((map__35882 == null)))?((((map__35882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35882):map__35882);
var opts = map__35882__$1;
var statearr_35884_35890 = state;
(statearr_35884_35890[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35882,map__35882__$1,opts){
return (function (val){
var statearr_35885_35891 = state;
(statearr_35885_35891[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35882,map__35882__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35886_35892 = state;
(statearr_35886_35892[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35877){
var G__35878 = cljs.core.first.call(null,seq35877);
var seq35877__$1 = cljs.core.next.call(null,seq35877);
var G__35879 = cljs.core.first.call(null,seq35877__$1);
var seq35877__$2 = cljs.core.next.call(null,seq35877__$1);
var G__35880 = cljs.core.first.call(null,seq35877__$2);
var seq35877__$3 = cljs.core.next.call(null,seq35877__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35878,G__35879,G__35880,seq35877__$3);
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
if(typeof cljs.core.async.t_cljs$core$async36058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36058 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36059){
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
this.meta36059 = meta36059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36060,meta36059__$1){
var self__ = this;
var _36060__$1 = this;
return (new cljs.core.async.t_cljs$core$async36058(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36059__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36060){
var self__ = this;
var _36060__$1 = this;
return self__.meta36059;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async36058.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36059","meta36059",-1630119512,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36058";

cljs.core.async.t_cljs$core$async36058.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async36058");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async36058 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36058(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36059){
return (new cljs.core.async.t_cljs$core$async36058(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta36059));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36058(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34490__auto___36223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___36223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___36223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36160){
var state_val_36161 = (state_36160[(1)]);
if((state_val_36161 === (7))){
var inst_36076 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36162_36224 = state_36160__$1;
(statearr_36162_36224[(2)] = inst_36076);

(statearr_36162_36224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (20))){
var inst_36088 = (state_36160[(7)]);
var state_36160__$1 = state_36160;
var statearr_36163_36225 = state_36160__$1;
(statearr_36163_36225[(2)] = inst_36088);

(statearr_36163_36225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (27))){
var state_36160__$1 = state_36160;
var statearr_36164_36226 = state_36160__$1;
(statearr_36164_36226[(2)] = null);

(statearr_36164_36226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (1))){
var inst_36064 = (state_36160[(8)]);
var inst_36064__$1 = calc_state.call(null);
var inst_36066 = (inst_36064__$1 == null);
var inst_36067 = cljs.core.not.call(null,inst_36066);
var state_36160__$1 = (function (){var statearr_36165 = state_36160;
(statearr_36165[(8)] = inst_36064__$1);

return statearr_36165;
})();
if(inst_36067){
var statearr_36166_36227 = state_36160__$1;
(statearr_36166_36227[(1)] = (2));

} else {
var statearr_36167_36228 = state_36160__$1;
(statearr_36167_36228[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (24))){
var inst_36120 = (state_36160[(9)]);
var inst_36111 = (state_36160[(10)]);
var inst_36134 = (state_36160[(11)]);
var inst_36134__$1 = inst_36111.call(null,inst_36120);
var state_36160__$1 = (function (){var statearr_36168 = state_36160;
(statearr_36168[(11)] = inst_36134__$1);

return statearr_36168;
})();
if(cljs.core.truth_(inst_36134__$1)){
var statearr_36169_36229 = state_36160__$1;
(statearr_36169_36229[(1)] = (29));

} else {
var statearr_36170_36230 = state_36160__$1;
(statearr_36170_36230[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (4))){
var inst_36079 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36079)){
var statearr_36171_36231 = state_36160__$1;
(statearr_36171_36231[(1)] = (8));

} else {
var statearr_36172_36232 = state_36160__$1;
(statearr_36172_36232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (15))){
var inst_36105 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36105)){
var statearr_36173_36233 = state_36160__$1;
(statearr_36173_36233[(1)] = (19));

} else {
var statearr_36174_36234 = state_36160__$1;
(statearr_36174_36234[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (21))){
var inst_36110 = (state_36160[(12)]);
var inst_36110__$1 = (state_36160[(2)]);
var inst_36111 = cljs.core.get.call(null,inst_36110__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36112 = cljs.core.get.call(null,inst_36110__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36113 = cljs.core.get.call(null,inst_36110__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36160__$1 = (function (){var statearr_36175 = state_36160;
(statearr_36175[(13)] = inst_36112);

(statearr_36175[(12)] = inst_36110__$1);

(statearr_36175[(10)] = inst_36111);

return statearr_36175;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36160__$1,(22),inst_36113);
} else {
if((state_val_36161 === (31))){
var inst_36142 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36142)){
var statearr_36176_36235 = state_36160__$1;
(statearr_36176_36235[(1)] = (32));

} else {
var statearr_36177_36236 = state_36160__$1;
(statearr_36177_36236[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (32))){
var inst_36119 = (state_36160[(14)]);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36160__$1,(35),out,inst_36119);
} else {
if((state_val_36161 === (33))){
var inst_36110 = (state_36160[(12)]);
var inst_36088 = inst_36110;
var state_36160__$1 = (function (){var statearr_36178 = state_36160;
(statearr_36178[(7)] = inst_36088);

return statearr_36178;
})();
var statearr_36179_36237 = state_36160__$1;
(statearr_36179_36237[(2)] = null);

(statearr_36179_36237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (13))){
var inst_36088 = (state_36160[(7)]);
var inst_36095 = inst_36088.cljs$lang$protocol_mask$partition0$;
var inst_36096 = (inst_36095 & (64));
var inst_36097 = inst_36088.cljs$core$ISeq$;
var inst_36098 = (inst_36096) || (inst_36097);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36098)){
var statearr_36180_36238 = state_36160__$1;
(statearr_36180_36238[(1)] = (16));

} else {
var statearr_36181_36239 = state_36160__$1;
(statearr_36181_36239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (22))){
var inst_36120 = (state_36160[(9)]);
var inst_36119 = (state_36160[(14)]);
var inst_36118 = (state_36160[(2)]);
var inst_36119__$1 = cljs.core.nth.call(null,inst_36118,(0),null);
var inst_36120__$1 = cljs.core.nth.call(null,inst_36118,(1),null);
var inst_36121 = (inst_36119__$1 == null);
var inst_36122 = cljs.core._EQ_.call(null,inst_36120__$1,change);
var inst_36123 = (inst_36121) || (inst_36122);
var state_36160__$1 = (function (){var statearr_36182 = state_36160;
(statearr_36182[(9)] = inst_36120__$1);

(statearr_36182[(14)] = inst_36119__$1);

return statearr_36182;
})();
if(cljs.core.truth_(inst_36123)){
var statearr_36183_36240 = state_36160__$1;
(statearr_36183_36240[(1)] = (23));

} else {
var statearr_36184_36241 = state_36160__$1;
(statearr_36184_36241[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (36))){
var inst_36110 = (state_36160[(12)]);
var inst_36088 = inst_36110;
var state_36160__$1 = (function (){var statearr_36185 = state_36160;
(statearr_36185[(7)] = inst_36088);

return statearr_36185;
})();
var statearr_36186_36242 = state_36160__$1;
(statearr_36186_36242[(2)] = null);

(statearr_36186_36242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (29))){
var inst_36134 = (state_36160[(11)]);
var state_36160__$1 = state_36160;
var statearr_36187_36243 = state_36160__$1;
(statearr_36187_36243[(2)] = inst_36134);

(statearr_36187_36243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (6))){
var state_36160__$1 = state_36160;
var statearr_36188_36244 = state_36160__$1;
(statearr_36188_36244[(2)] = false);

(statearr_36188_36244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (28))){
var inst_36130 = (state_36160[(2)]);
var inst_36131 = calc_state.call(null);
var inst_36088 = inst_36131;
var state_36160__$1 = (function (){var statearr_36189 = state_36160;
(statearr_36189[(15)] = inst_36130);

(statearr_36189[(7)] = inst_36088);

return statearr_36189;
})();
var statearr_36190_36245 = state_36160__$1;
(statearr_36190_36245[(2)] = null);

(statearr_36190_36245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (25))){
var inst_36156 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36191_36246 = state_36160__$1;
(statearr_36191_36246[(2)] = inst_36156);

(statearr_36191_36246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (34))){
var inst_36154 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36192_36247 = state_36160__$1;
(statearr_36192_36247[(2)] = inst_36154);

(statearr_36192_36247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (17))){
var state_36160__$1 = state_36160;
var statearr_36193_36248 = state_36160__$1;
(statearr_36193_36248[(2)] = false);

(statearr_36193_36248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (3))){
var state_36160__$1 = state_36160;
var statearr_36194_36249 = state_36160__$1;
(statearr_36194_36249[(2)] = false);

(statearr_36194_36249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (12))){
var inst_36158 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36160__$1,inst_36158);
} else {
if((state_val_36161 === (2))){
var inst_36064 = (state_36160[(8)]);
var inst_36069 = inst_36064.cljs$lang$protocol_mask$partition0$;
var inst_36070 = (inst_36069 & (64));
var inst_36071 = inst_36064.cljs$core$ISeq$;
var inst_36072 = (inst_36070) || (inst_36071);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36072)){
var statearr_36195_36250 = state_36160__$1;
(statearr_36195_36250[(1)] = (5));

} else {
var statearr_36196_36251 = state_36160__$1;
(statearr_36196_36251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (23))){
var inst_36119 = (state_36160[(14)]);
var inst_36125 = (inst_36119 == null);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36125)){
var statearr_36197_36252 = state_36160__$1;
(statearr_36197_36252[(1)] = (26));

} else {
var statearr_36198_36253 = state_36160__$1;
(statearr_36198_36253[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (35))){
var inst_36145 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
if(cljs.core.truth_(inst_36145)){
var statearr_36199_36254 = state_36160__$1;
(statearr_36199_36254[(1)] = (36));

} else {
var statearr_36200_36255 = state_36160__$1;
(statearr_36200_36255[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (19))){
var inst_36088 = (state_36160[(7)]);
var inst_36107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36088);
var state_36160__$1 = state_36160;
var statearr_36201_36256 = state_36160__$1;
(statearr_36201_36256[(2)] = inst_36107);

(statearr_36201_36256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (11))){
var inst_36088 = (state_36160[(7)]);
var inst_36092 = (inst_36088 == null);
var inst_36093 = cljs.core.not.call(null,inst_36092);
var state_36160__$1 = state_36160;
if(inst_36093){
var statearr_36202_36257 = state_36160__$1;
(statearr_36202_36257[(1)] = (13));

} else {
var statearr_36203_36258 = state_36160__$1;
(statearr_36203_36258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (9))){
var inst_36064 = (state_36160[(8)]);
var state_36160__$1 = state_36160;
var statearr_36204_36259 = state_36160__$1;
(statearr_36204_36259[(2)] = inst_36064);

(statearr_36204_36259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (5))){
var state_36160__$1 = state_36160;
var statearr_36205_36260 = state_36160__$1;
(statearr_36205_36260[(2)] = true);

(statearr_36205_36260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (14))){
var state_36160__$1 = state_36160;
var statearr_36206_36261 = state_36160__$1;
(statearr_36206_36261[(2)] = false);

(statearr_36206_36261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (26))){
var inst_36120 = (state_36160[(9)]);
var inst_36127 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36120);
var state_36160__$1 = state_36160;
var statearr_36207_36262 = state_36160__$1;
(statearr_36207_36262[(2)] = inst_36127);

(statearr_36207_36262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (16))){
var state_36160__$1 = state_36160;
var statearr_36208_36263 = state_36160__$1;
(statearr_36208_36263[(2)] = true);

(statearr_36208_36263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (38))){
var inst_36150 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36209_36264 = state_36160__$1;
(statearr_36209_36264[(2)] = inst_36150);

(statearr_36209_36264[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (30))){
var inst_36112 = (state_36160[(13)]);
var inst_36120 = (state_36160[(9)]);
var inst_36111 = (state_36160[(10)]);
var inst_36137 = cljs.core.empty_QMARK_.call(null,inst_36111);
var inst_36138 = inst_36112.call(null,inst_36120);
var inst_36139 = cljs.core.not.call(null,inst_36138);
var inst_36140 = (inst_36137) && (inst_36139);
var state_36160__$1 = state_36160;
var statearr_36210_36265 = state_36160__$1;
(statearr_36210_36265[(2)] = inst_36140);

(statearr_36210_36265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (10))){
var inst_36064 = (state_36160[(8)]);
var inst_36084 = (state_36160[(2)]);
var inst_36085 = cljs.core.get.call(null,inst_36084,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36086 = cljs.core.get.call(null,inst_36084,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36087 = cljs.core.get.call(null,inst_36084,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36088 = inst_36064;
var state_36160__$1 = (function (){var statearr_36211 = state_36160;
(statearr_36211[(16)] = inst_36086);

(statearr_36211[(17)] = inst_36087);

(statearr_36211[(7)] = inst_36088);

(statearr_36211[(18)] = inst_36085);

return statearr_36211;
})();
var statearr_36212_36266 = state_36160__$1;
(statearr_36212_36266[(2)] = null);

(statearr_36212_36266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (18))){
var inst_36102 = (state_36160[(2)]);
var state_36160__$1 = state_36160;
var statearr_36213_36267 = state_36160__$1;
(statearr_36213_36267[(2)] = inst_36102);

(statearr_36213_36267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (37))){
var state_36160__$1 = state_36160;
var statearr_36214_36268 = state_36160__$1;
(statearr_36214_36268[(2)] = null);

(statearr_36214_36268[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36161 === (8))){
var inst_36064 = (state_36160[(8)]);
var inst_36081 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36064);
var state_36160__$1 = state_36160;
var statearr_36215_36269 = state_36160__$1;
(statearr_36215_36269[(2)] = inst_36081);

(statearr_36215_36269[(1)] = (10));


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
});})(c__34490__auto___36223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34378__auto__,c__34490__auto___36223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34379__auto__ = null;
var cljs$core$async$mix_$_state_machine__34379__auto____0 = (function (){
var statearr_36219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36219[(0)] = cljs$core$async$mix_$_state_machine__34379__auto__);

(statearr_36219[(1)] = (1));

return statearr_36219;
});
var cljs$core$async$mix_$_state_machine__34379__auto____1 = (function (state_36160){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36220){if((e36220 instanceof Object)){
var ex__34382__auto__ = e36220;
var statearr_36221_36270 = state_36160;
(statearr_36221_36270[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36271 = state_36160;
state_36160 = G__36271;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34379__auto__ = function(state_36160){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34379__auto____1.call(this,state_36160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34379__auto____0;
cljs$core$async$mix_$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34379__auto____1;
return cljs$core$async$mix_$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___36223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34492__auto__ = (function (){var statearr_36222 = f__34491__auto__.call(null);
(statearr_36222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___36223);

return statearr_36222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___36223,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args36272 = [];
var len__26126__auto___36275 = arguments.length;
var i__26127__auto___36276 = (0);
while(true){
if((i__26127__auto___36276 < len__26126__auto___36275)){
args36272.push((arguments[i__26127__auto___36276]));

var G__36277 = (i__26127__auto___36276 + (1));
i__26127__auto___36276 = G__36277;
continue;
} else {
}
break;
}

var G__36274 = args36272.length;
switch (G__36274) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36272.length)].join('')));

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
var args36280 = [];
var len__26126__auto___36405 = arguments.length;
var i__26127__auto___36406 = (0);
while(true){
if((i__26127__auto___36406 < len__26126__auto___36405)){
args36280.push((arguments[i__26127__auto___36406]));

var G__36407 = (i__26127__auto___36406 + (1));
i__26127__auto___36406 = G__36407;
continue;
} else {
}
break;
}

var G__36282 = args36280.length;
switch (G__36282) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36280.length)].join('')));

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
return (function (p1__36279_SHARP_){
if(cljs.core.truth_(p1__36279_SHARP_.call(null,topic))){
return p1__36279_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36279_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25051__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36283 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36284){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36284 = meta36284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36285,meta36284__$1){
var self__ = this;
var _36285__$1 = this;
return (new cljs.core.async.t_cljs$core$async36283(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36284__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36285){
var self__ = this;
var _36285__$1 = this;
return self__.meta36284;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36284","meta36284",1525588755,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36283.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36283";

cljs.core.async.t_cljs$core$async36283.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async36283");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36283 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36284){
return (new cljs.core.async.t_cljs$core$async36283(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36284));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36283(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34490__auto___36409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___36409,mults,ensure_mult,p){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___36409,mults,ensure_mult,p){
return (function (state_36357){
var state_val_36358 = (state_36357[(1)]);
if((state_val_36358 === (7))){
var inst_36353 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36359_36410 = state_36357__$1;
(statearr_36359_36410[(2)] = inst_36353);

(statearr_36359_36410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (20))){
var state_36357__$1 = state_36357;
var statearr_36360_36411 = state_36357__$1;
(statearr_36360_36411[(2)] = null);

(statearr_36360_36411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (1))){
var state_36357__$1 = state_36357;
var statearr_36361_36412 = state_36357__$1;
(statearr_36361_36412[(2)] = null);

(statearr_36361_36412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (24))){
var inst_36336 = (state_36357[(7)]);
var inst_36345 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36336);
var state_36357__$1 = state_36357;
var statearr_36362_36413 = state_36357__$1;
(statearr_36362_36413[(2)] = inst_36345);

(statearr_36362_36413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (4))){
var inst_36288 = (state_36357[(8)]);
var inst_36288__$1 = (state_36357[(2)]);
var inst_36289 = (inst_36288__$1 == null);
var state_36357__$1 = (function (){var statearr_36363 = state_36357;
(statearr_36363[(8)] = inst_36288__$1);

return statearr_36363;
})();
if(cljs.core.truth_(inst_36289)){
var statearr_36364_36414 = state_36357__$1;
(statearr_36364_36414[(1)] = (5));

} else {
var statearr_36365_36415 = state_36357__$1;
(statearr_36365_36415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (15))){
var inst_36330 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36366_36416 = state_36357__$1;
(statearr_36366_36416[(2)] = inst_36330);

(statearr_36366_36416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (21))){
var inst_36350 = (state_36357[(2)]);
var state_36357__$1 = (function (){var statearr_36367 = state_36357;
(statearr_36367[(9)] = inst_36350);

return statearr_36367;
})();
var statearr_36368_36417 = state_36357__$1;
(statearr_36368_36417[(2)] = null);

(statearr_36368_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (13))){
var inst_36312 = (state_36357[(10)]);
var inst_36314 = cljs.core.chunked_seq_QMARK_.call(null,inst_36312);
var state_36357__$1 = state_36357;
if(inst_36314){
var statearr_36369_36418 = state_36357__$1;
(statearr_36369_36418[(1)] = (16));

} else {
var statearr_36370_36419 = state_36357__$1;
(statearr_36370_36419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (22))){
var inst_36342 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
if(cljs.core.truth_(inst_36342)){
var statearr_36371_36420 = state_36357__$1;
(statearr_36371_36420[(1)] = (23));

} else {
var statearr_36372_36421 = state_36357__$1;
(statearr_36372_36421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (6))){
var inst_36288 = (state_36357[(8)]);
var inst_36336 = (state_36357[(7)]);
var inst_36338 = (state_36357[(11)]);
var inst_36336__$1 = topic_fn.call(null,inst_36288);
var inst_36337 = cljs.core.deref.call(null,mults);
var inst_36338__$1 = cljs.core.get.call(null,inst_36337,inst_36336__$1);
var state_36357__$1 = (function (){var statearr_36373 = state_36357;
(statearr_36373[(7)] = inst_36336__$1);

(statearr_36373[(11)] = inst_36338__$1);

return statearr_36373;
})();
if(cljs.core.truth_(inst_36338__$1)){
var statearr_36374_36422 = state_36357__$1;
(statearr_36374_36422[(1)] = (19));

} else {
var statearr_36375_36423 = state_36357__$1;
(statearr_36375_36423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (25))){
var inst_36347 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36376_36424 = state_36357__$1;
(statearr_36376_36424[(2)] = inst_36347);

(statearr_36376_36424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (17))){
var inst_36312 = (state_36357[(10)]);
var inst_36321 = cljs.core.first.call(null,inst_36312);
var inst_36322 = cljs.core.async.muxch_STAR_.call(null,inst_36321);
var inst_36323 = cljs.core.async.close_BANG_.call(null,inst_36322);
var inst_36324 = cljs.core.next.call(null,inst_36312);
var inst_36298 = inst_36324;
var inst_36299 = null;
var inst_36300 = (0);
var inst_36301 = (0);
var state_36357__$1 = (function (){var statearr_36377 = state_36357;
(statearr_36377[(12)] = inst_36298);

(statearr_36377[(13)] = inst_36323);

(statearr_36377[(14)] = inst_36301);

(statearr_36377[(15)] = inst_36299);

(statearr_36377[(16)] = inst_36300);

return statearr_36377;
})();
var statearr_36378_36425 = state_36357__$1;
(statearr_36378_36425[(2)] = null);

(statearr_36378_36425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (3))){
var inst_36355 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36357__$1,inst_36355);
} else {
if((state_val_36358 === (12))){
var inst_36332 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36379_36426 = state_36357__$1;
(statearr_36379_36426[(2)] = inst_36332);

(statearr_36379_36426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (2))){
var state_36357__$1 = state_36357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36357__$1,(4),ch);
} else {
if((state_val_36358 === (23))){
var state_36357__$1 = state_36357;
var statearr_36380_36427 = state_36357__$1;
(statearr_36380_36427[(2)] = null);

(statearr_36380_36427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (19))){
var inst_36288 = (state_36357[(8)]);
var inst_36338 = (state_36357[(11)]);
var inst_36340 = cljs.core.async.muxch_STAR_.call(null,inst_36338);
var state_36357__$1 = state_36357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36357__$1,(22),inst_36340,inst_36288);
} else {
if((state_val_36358 === (11))){
var inst_36298 = (state_36357[(12)]);
var inst_36312 = (state_36357[(10)]);
var inst_36312__$1 = cljs.core.seq.call(null,inst_36298);
var state_36357__$1 = (function (){var statearr_36381 = state_36357;
(statearr_36381[(10)] = inst_36312__$1);

return statearr_36381;
})();
if(inst_36312__$1){
var statearr_36382_36428 = state_36357__$1;
(statearr_36382_36428[(1)] = (13));

} else {
var statearr_36383_36429 = state_36357__$1;
(statearr_36383_36429[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (9))){
var inst_36334 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36384_36430 = state_36357__$1;
(statearr_36384_36430[(2)] = inst_36334);

(statearr_36384_36430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (5))){
var inst_36295 = cljs.core.deref.call(null,mults);
var inst_36296 = cljs.core.vals.call(null,inst_36295);
var inst_36297 = cljs.core.seq.call(null,inst_36296);
var inst_36298 = inst_36297;
var inst_36299 = null;
var inst_36300 = (0);
var inst_36301 = (0);
var state_36357__$1 = (function (){var statearr_36385 = state_36357;
(statearr_36385[(12)] = inst_36298);

(statearr_36385[(14)] = inst_36301);

(statearr_36385[(15)] = inst_36299);

(statearr_36385[(16)] = inst_36300);

return statearr_36385;
})();
var statearr_36386_36431 = state_36357__$1;
(statearr_36386_36431[(2)] = null);

(statearr_36386_36431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (14))){
var state_36357__$1 = state_36357;
var statearr_36390_36432 = state_36357__$1;
(statearr_36390_36432[(2)] = null);

(statearr_36390_36432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (16))){
var inst_36312 = (state_36357[(10)]);
var inst_36316 = cljs.core.chunk_first.call(null,inst_36312);
var inst_36317 = cljs.core.chunk_rest.call(null,inst_36312);
var inst_36318 = cljs.core.count.call(null,inst_36316);
var inst_36298 = inst_36317;
var inst_36299 = inst_36316;
var inst_36300 = inst_36318;
var inst_36301 = (0);
var state_36357__$1 = (function (){var statearr_36391 = state_36357;
(statearr_36391[(12)] = inst_36298);

(statearr_36391[(14)] = inst_36301);

(statearr_36391[(15)] = inst_36299);

(statearr_36391[(16)] = inst_36300);

return statearr_36391;
})();
var statearr_36392_36433 = state_36357__$1;
(statearr_36392_36433[(2)] = null);

(statearr_36392_36433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (10))){
var inst_36298 = (state_36357[(12)]);
var inst_36301 = (state_36357[(14)]);
var inst_36299 = (state_36357[(15)]);
var inst_36300 = (state_36357[(16)]);
var inst_36306 = cljs.core._nth.call(null,inst_36299,inst_36301);
var inst_36307 = cljs.core.async.muxch_STAR_.call(null,inst_36306);
var inst_36308 = cljs.core.async.close_BANG_.call(null,inst_36307);
var inst_36309 = (inst_36301 + (1));
var tmp36387 = inst_36298;
var tmp36388 = inst_36299;
var tmp36389 = inst_36300;
var inst_36298__$1 = tmp36387;
var inst_36299__$1 = tmp36388;
var inst_36300__$1 = tmp36389;
var inst_36301__$1 = inst_36309;
var state_36357__$1 = (function (){var statearr_36393 = state_36357;
(statearr_36393[(12)] = inst_36298__$1);

(statearr_36393[(17)] = inst_36308);

(statearr_36393[(14)] = inst_36301__$1);

(statearr_36393[(15)] = inst_36299__$1);

(statearr_36393[(16)] = inst_36300__$1);

return statearr_36393;
})();
var statearr_36394_36434 = state_36357__$1;
(statearr_36394_36434[(2)] = null);

(statearr_36394_36434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (18))){
var inst_36327 = (state_36357[(2)]);
var state_36357__$1 = state_36357;
var statearr_36395_36435 = state_36357__$1;
(statearr_36395_36435[(2)] = inst_36327);

(statearr_36395_36435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36358 === (8))){
var inst_36301 = (state_36357[(14)]);
var inst_36300 = (state_36357[(16)]);
var inst_36303 = (inst_36301 < inst_36300);
var inst_36304 = inst_36303;
var state_36357__$1 = state_36357;
if(cljs.core.truth_(inst_36304)){
var statearr_36396_36436 = state_36357__$1;
(statearr_36396_36436[(1)] = (10));

} else {
var statearr_36397_36437 = state_36357__$1;
(statearr_36397_36437[(1)] = (11));

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
});})(c__34490__auto___36409,mults,ensure_mult,p))
;
return ((function (switch__34378__auto__,c__34490__auto___36409,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_36401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36401[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_36401[(1)] = (1));

return statearr_36401;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_36357){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36402){if((e36402 instanceof Object)){
var ex__34382__auto__ = e36402;
var statearr_36403_36438 = state_36357;
(statearr_36403_36438[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36439 = state_36357;
state_36357 = G__36439;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_36357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_36357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___36409,mults,ensure_mult,p))
})();
var state__34492__auto__ = (function (){var statearr_36404 = f__34491__auto__.call(null);
(statearr_36404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___36409);

return statearr_36404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___36409,mults,ensure_mult,p))
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
var args36440 = [];
var len__26126__auto___36443 = arguments.length;
var i__26127__auto___36444 = (0);
while(true){
if((i__26127__auto___36444 < len__26126__auto___36443)){
args36440.push((arguments[i__26127__auto___36444]));

var G__36445 = (i__26127__auto___36444 + (1));
i__26127__auto___36444 = G__36445;
continue;
} else {
}
break;
}

var G__36442 = args36440.length;
switch (G__36442) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36440.length)].join('')));

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
var args36447 = [];
var len__26126__auto___36450 = arguments.length;
var i__26127__auto___36451 = (0);
while(true){
if((i__26127__auto___36451 < len__26126__auto___36450)){
args36447.push((arguments[i__26127__auto___36451]));

var G__36452 = (i__26127__auto___36451 + (1));
i__26127__auto___36451 = G__36452;
continue;
} else {
}
break;
}

var G__36449 = args36447.length;
switch (G__36449) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36447.length)].join('')));

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
var args36454 = [];
var len__26126__auto___36525 = arguments.length;
var i__26127__auto___36526 = (0);
while(true){
if((i__26127__auto___36526 < len__26126__auto___36525)){
args36454.push((arguments[i__26127__auto___36526]));

var G__36527 = (i__26127__auto___36526 + (1));
i__26127__auto___36526 = G__36527;
continue;
} else {
}
break;
}

var G__36456 = args36454.length;
switch (G__36456) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36454.length)].join('')));

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
var c__34490__auto___36529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___36529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___36529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36495){
var state_val_36496 = (state_36495[(1)]);
if((state_val_36496 === (7))){
var state_36495__$1 = state_36495;
var statearr_36497_36530 = state_36495__$1;
(statearr_36497_36530[(2)] = null);

(statearr_36497_36530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (1))){
var state_36495__$1 = state_36495;
var statearr_36498_36531 = state_36495__$1;
(statearr_36498_36531[(2)] = null);

(statearr_36498_36531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (4))){
var inst_36459 = (state_36495[(7)]);
var inst_36461 = (inst_36459 < cnt);
var state_36495__$1 = state_36495;
if(cljs.core.truth_(inst_36461)){
var statearr_36499_36532 = state_36495__$1;
(statearr_36499_36532[(1)] = (6));

} else {
var statearr_36500_36533 = state_36495__$1;
(statearr_36500_36533[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (15))){
var inst_36491 = (state_36495[(2)]);
var state_36495__$1 = state_36495;
var statearr_36501_36534 = state_36495__$1;
(statearr_36501_36534[(2)] = inst_36491);

(statearr_36501_36534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (13))){
var inst_36484 = cljs.core.async.close_BANG_.call(null,out);
var state_36495__$1 = state_36495;
var statearr_36502_36535 = state_36495__$1;
(statearr_36502_36535[(2)] = inst_36484);

(statearr_36502_36535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (6))){
var state_36495__$1 = state_36495;
var statearr_36503_36536 = state_36495__$1;
(statearr_36503_36536[(2)] = null);

(statearr_36503_36536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (3))){
var inst_36493 = (state_36495[(2)]);
var state_36495__$1 = state_36495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36495__$1,inst_36493);
} else {
if((state_val_36496 === (12))){
var inst_36481 = (state_36495[(8)]);
var inst_36481__$1 = (state_36495[(2)]);
var inst_36482 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36481__$1);
var state_36495__$1 = (function (){var statearr_36504 = state_36495;
(statearr_36504[(8)] = inst_36481__$1);

return statearr_36504;
})();
if(cljs.core.truth_(inst_36482)){
var statearr_36505_36537 = state_36495__$1;
(statearr_36505_36537[(1)] = (13));

} else {
var statearr_36506_36538 = state_36495__$1;
(statearr_36506_36538[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (2))){
var inst_36458 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36459 = (0);
var state_36495__$1 = (function (){var statearr_36507 = state_36495;
(statearr_36507[(7)] = inst_36459);

(statearr_36507[(9)] = inst_36458);

return statearr_36507;
})();
var statearr_36508_36539 = state_36495__$1;
(statearr_36508_36539[(2)] = null);

(statearr_36508_36539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (11))){
var inst_36459 = (state_36495[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36495,(10),Object,null,(9));
var inst_36468 = chs__$1.call(null,inst_36459);
var inst_36469 = done.call(null,inst_36459);
var inst_36470 = cljs.core.async.take_BANG_.call(null,inst_36468,inst_36469);
var state_36495__$1 = state_36495;
var statearr_36509_36540 = state_36495__$1;
(statearr_36509_36540[(2)] = inst_36470);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (9))){
var inst_36459 = (state_36495[(7)]);
var inst_36472 = (state_36495[(2)]);
var inst_36473 = (inst_36459 + (1));
var inst_36459__$1 = inst_36473;
var state_36495__$1 = (function (){var statearr_36510 = state_36495;
(statearr_36510[(10)] = inst_36472);

(statearr_36510[(7)] = inst_36459__$1);

return statearr_36510;
})();
var statearr_36511_36541 = state_36495__$1;
(statearr_36511_36541[(2)] = null);

(statearr_36511_36541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (5))){
var inst_36479 = (state_36495[(2)]);
var state_36495__$1 = (function (){var statearr_36512 = state_36495;
(statearr_36512[(11)] = inst_36479);

return statearr_36512;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36495__$1,(12),dchan);
} else {
if((state_val_36496 === (14))){
var inst_36481 = (state_36495[(8)]);
var inst_36486 = cljs.core.apply.call(null,f,inst_36481);
var state_36495__$1 = state_36495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36495__$1,(16),out,inst_36486);
} else {
if((state_val_36496 === (16))){
var inst_36488 = (state_36495[(2)]);
var state_36495__$1 = (function (){var statearr_36513 = state_36495;
(statearr_36513[(12)] = inst_36488);

return statearr_36513;
})();
var statearr_36514_36542 = state_36495__$1;
(statearr_36514_36542[(2)] = null);

(statearr_36514_36542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (10))){
var inst_36463 = (state_36495[(2)]);
var inst_36464 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36495__$1 = (function (){var statearr_36515 = state_36495;
(statearr_36515[(13)] = inst_36463);

return statearr_36515;
})();
var statearr_36516_36543 = state_36495__$1;
(statearr_36516_36543[(2)] = inst_36464);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36495__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36496 === (8))){
var inst_36477 = (state_36495[(2)]);
var state_36495__$1 = state_36495;
var statearr_36517_36544 = state_36495__$1;
(statearr_36517_36544[(2)] = inst_36477);

(statearr_36517_36544[(1)] = (5));


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
});})(c__34490__auto___36529,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34378__auto__,c__34490__auto___36529,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_36521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36521[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_36521[(1)] = (1));

return statearr_36521;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_36495){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36522){if((e36522 instanceof Object)){
var ex__34382__auto__ = e36522;
var statearr_36523_36545 = state_36495;
(statearr_36523_36545[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36546 = state_36495;
state_36495 = G__36546;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_36495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_36495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___36529,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34492__auto__ = (function (){var statearr_36524 = f__34491__auto__.call(null);
(statearr_36524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___36529);

return statearr_36524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___36529,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args36548 = [];
var len__26126__auto___36606 = arguments.length;
var i__26127__auto___36607 = (0);
while(true){
if((i__26127__auto___36607 < len__26126__auto___36606)){
args36548.push((arguments[i__26127__auto___36607]));

var G__36608 = (i__26127__auto___36607 + (1));
i__26127__auto___36607 = G__36608;
continue;
} else {
}
break;
}

var G__36550 = args36548.length;
switch (G__36550) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36548.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34490__auto___36610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___36610,out){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___36610,out){
return (function (state_36582){
var state_val_36583 = (state_36582[(1)]);
if((state_val_36583 === (7))){
var inst_36562 = (state_36582[(7)]);
var inst_36561 = (state_36582[(8)]);
var inst_36561__$1 = (state_36582[(2)]);
var inst_36562__$1 = cljs.core.nth.call(null,inst_36561__$1,(0),null);
var inst_36563 = cljs.core.nth.call(null,inst_36561__$1,(1),null);
var inst_36564 = (inst_36562__$1 == null);
var state_36582__$1 = (function (){var statearr_36584 = state_36582;
(statearr_36584[(7)] = inst_36562__$1);

(statearr_36584[(8)] = inst_36561__$1);

(statearr_36584[(9)] = inst_36563);

return statearr_36584;
})();
if(cljs.core.truth_(inst_36564)){
var statearr_36585_36611 = state_36582__$1;
(statearr_36585_36611[(1)] = (8));

} else {
var statearr_36586_36612 = state_36582__$1;
(statearr_36586_36612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (1))){
var inst_36551 = cljs.core.vec.call(null,chs);
var inst_36552 = inst_36551;
var state_36582__$1 = (function (){var statearr_36587 = state_36582;
(statearr_36587[(10)] = inst_36552);

return statearr_36587;
})();
var statearr_36588_36613 = state_36582__$1;
(statearr_36588_36613[(2)] = null);

(statearr_36588_36613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (4))){
var inst_36552 = (state_36582[(10)]);
var state_36582__$1 = state_36582;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36582__$1,(7),inst_36552);
} else {
if((state_val_36583 === (6))){
var inst_36578 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36589_36614 = state_36582__$1;
(statearr_36589_36614[(2)] = inst_36578);

(statearr_36589_36614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (3))){
var inst_36580 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36582__$1,inst_36580);
} else {
if((state_val_36583 === (2))){
var inst_36552 = (state_36582[(10)]);
var inst_36554 = cljs.core.count.call(null,inst_36552);
var inst_36555 = (inst_36554 > (0));
var state_36582__$1 = state_36582;
if(cljs.core.truth_(inst_36555)){
var statearr_36591_36615 = state_36582__$1;
(statearr_36591_36615[(1)] = (4));

} else {
var statearr_36592_36616 = state_36582__$1;
(statearr_36592_36616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (11))){
var inst_36552 = (state_36582[(10)]);
var inst_36571 = (state_36582[(2)]);
var tmp36590 = inst_36552;
var inst_36552__$1 = tmp36590;
var state_36582__$1 = (function (){var statearr_36593 = state_36582;
(statearr_36593[(10)] = inst_36552__$1);

(statearr_36593[(11)] = inst_36571);

return statearr_36593;
})();
var statearr_36594_36617 = state_36582__$1;
(statearr_36594_36617[(2)] = null);

(statearr_36594_36617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (9))){
var inst_36562 = (state_36582[(7)]);
var state_36582__$1 = state_36582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36582__$1,(11),out,inst_36562);
} else {
if((state_val_36583 === (5))){
var inst_36576 = cljs.core.async.close_BANG_.call(null,out);
var state_36582__$1 = state_36582;
var statearr_36595_36618 = state_36582__$1;
(statearr_36595_36618[(2)] = inst_36576);

(statearr_36595_36618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (10))){
var inst_36574 = (state_36582[(2)]);
var state_36582__$1 = state_36582;
var statearr_36596_36619 = state_36582__$1;
(statearr_36596_36619[(2)] = inst_36574);

(statearr_36596_36619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36583 === (8))){
var inst_36562 = (state_36582[(7)]);
var inst_36552 = (state_36582[(10)]);
var inst_36561 = (state_36582[(8)]);
var inst_36563 = (state_36582[(9)]);
var inst_36566 = (function (){var cs = inst_36552;
var vec__36557 = inst_36561;
var v = inst_36562;
var c = inst_36563;
return ((function (cs,vec__36557,v,c,inst_36562,inst_36552,inst_36561,inst_36563,state_val_36583,c__34490__auto___36610,out){
return (function (p1__36547_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36547_SHARP_);
});
;})(cs,vec__36557,v,c,inst_36562,inst_36552,inst_36561,inst_36563,state_val_36583,c__34490__auto___36610,out))
})();
var inst_36567 = cljs.core.filterv.call(null,inst_36566,inst_36552);
var inst_36552__$1 = inst_36567;
var state_36582__$1 = (function (){var statearr_36597 = state_36582;
(statearr_36597[(10)] = inst_36552__$1);

return statearr_36597;
})();
var statearr_36598_36620 = state_36582__$1;
(statearr_36598_36620[(2)] = null);

(statearr_36598_36620[(1)] = (2));


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
});})(c__34490__auto___36610,out))
;
return ((function (switch__34378__auto__,c__34490__auto___36610,out){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_36602 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36602[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_36602[(1)] = (1));

return statearr_36602;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_36582){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36603){if((e36603 instanceof Object)){
var ex__34382__auto__ = e36603;
var statearr_36604_36621 = state_36582;
(statearr_36604_36621[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36622 = state_36582;
state_36582 = G__36622;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_36582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_36582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___36610,out))
})();
var state__34492__auto__ = (function (){var statearr_36605 = f__34491__auto__.call(null);
(statearr_36605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___36610);

return statearr_36605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___36610,out))
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
var args36623 = [];
var len__26126__auto___36672 = arguments.length;
var i__26127__auto___36673 = (0);
while(true){
if((i__26127__auto___36673 < len__26126__auto___36672)){
args36623.push((arguments[i__26127__auto___36673]));

var G__36674 = (i__26127__auto___36673 + (1));
i__26127__auto___36673 = G__36674;
continue;
} else {
}
break;
}

var G__36625 = args36623.length;
switch (G__36625) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36623.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34490__auto___36676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___36676,out){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___36676,out){
return (function (state_36649){
var state_val_36650 = (state_36649[(1)]);
if((state_val_36650 === (7))){
var inst_36631 = (state_36649[(7)]);
var inst_36631__$1 = (state_36649[(2)]);
var inst_36632 = (inst_36631__$1 == null);
var inst_36633 = cljs.core.not.call(null,inst_36632);
var state_36649__$1 = (function (){var statearr_36651 = state_36649;
(statearr_36651[(7)] = inst_36631__$1);

return statearr_36651;
})();
if(inst_36633){
var statearr_36652_36677 = state_36649__$1;
(statearr_36652_36677[(1)] = (8));

} else {
var statearr_36653_36678 = state_36649__$1;
(statearr_36653_36678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (1))){
var inst_36626 = (0);
var state_36649__$1 = (function (){var statearr_36654 = state_36649;
(statearr_36654[(8)] = inst_36626);

return statearr_36654;
})();
var statearr_36655_36679 = state_36649__$1;
(statearr_36655_36679[(2)] = null);

(statearr_36655_36679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (4))){
var state_36649__$1 = state_36649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36649__$1,(7),ch);
} else {
if((state_val_36650 === (6))){
var inst_36644 = (state_36649[(2)]);
var state_36649__$1 = state_36649;
var statearr_36656_36680 = state_36649__$1;
(statearr_36656_36680[(2)] = inst_36644);

(statearr_36656_36680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (3))){
var inst_36646 = (state_36649[(2)]);
var inst_36647 = cljs.core.async.close_BANG_.call(null,out);
var state_36649__$1 = (function (){var statearr_36657 = state_36649;
(statearr_36657[(9)] = inst_36646);

return statearr_36657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36649__$1,inst_36647);
} else {
if((state_val_36650 === (2))){
var inst_36626 = (state_36649[(8)]);
var inst_36628 = (inst_36626 < n);
var state_36649__$1 = state_36649;
if(cljs.core.truth_(inst_36628)){
var statearr_36658_36681 = state_36649__$1;
(statearr_36658_36681[(1)] = (4));

} else {
var statearr_36659_36682 = state_36649__$1;
(statearr_36659_36682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (11))){
var inst_36626 = (state_36649[(8)]);
var inst_36636 = (state_36649[(2)]);
var inst_36637 = (inst_36626 + (1));
var inst_36626__$1 = inst_36637;
var state_36649__$1 = (function (){var statearr_36660 = state_36649;
(statearr_36660[(10)] = inst_36636);

(statearr_36660[(8)] = inst_36626__$1);

return statearr_36660;
})();
var statearr_36661_36683 = state_36649__$1;
(statearr_36661_36683[(2)] = null);

(statearr_36661_36683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (9))){
var state_36649__$1 = state_36649;
var statearr_36662_36684 = state_36649__$1;
(statearr_36662_36684[(2)] = null);

(statearr_36662_36684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (5))){
var state_36649__$1 = state_36649;
var statearr_36663_36685 = state_36649__$1;
(statearr_36663_36685[(2)] = null);

(statearr_36663_36685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (10))){
var inst_36641 = (state_36649[(2)]);
var state_36649__$1 = state_36649;
var statearr_36664_36686 = state_36649__$1;
(statearr_36664_36686[(2)] = inst_36641);

(statearr_36664_36686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36650 === (8))){
var inst_36631 = (state_36649[(7)]);
var state_36649__$1 = state_36649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36649__$1,(11),out,inst_36631);
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
});})(c__34490__auto___36676,out))
;
return ((function (switch__34378__auto__,c__34490__auto___36676,out){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_36668 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36668[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_36668[(1)] = (1));

return statearr_36668;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_36649){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36669){if((e36669 instanceof Object)){
var ex__34382__auto__ = e36669;
var statearr_36670_36687 = state_36649;
(statearr_36670_36687[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36688 = state_36649;
state_36649 = G__36688;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_36649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_36649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___36676,out))
})();
var state__34492__auto__ = (function (){var statearr_36671 = f__34491__auto__.call(null);
(statearr_36671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___36676);

return statearr_36671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___36676,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36696 = (function (map_LT_,f,ch,meta36697){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36697 = meta36697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36698,meta36697__$1){
var self__ = this;
var _36698__$1 = this;
return (new cljs.core.async.t_cljs$core$async36696(self__.map_LT_,self__.f,self__.ch,meta36697__$1));
});

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36698){
var self__ = this;
var _36698__$1 = this;
return self__.meta36697;
});

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36699 = (function (map_LT_,f,ch,meta36697,_,fn1,meta36700){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta36697 = meta36697;
this._ = _;
this.fn1 = fn1;
this.meta36700 = meta36700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36701,meta36700__$1){
var self__ = this;
var _36701__$1 = this;
return (new cljs.core.async.t_cljs$core$async36699(self__.map_LT_,self__.f,self__.ch,self__.meta36697,self__._,self__.fn1,meta36700__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36701){
var self__ = this;
var _36701__$1 = this;
return self__.meta36700;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36699.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async36699.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36699.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36699.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36689_SHARP_){
return f1.call(null,(((p1__36689_SHARP_ == null))?null:self__.f.call(null,p1__36689_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36699.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36697","meta36697",-755616759,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36696","cljs.core.async/t_cljs$core$async36696",-720199310,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36700","meta36700",-462435876,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36699";

cljs.core.async.t_cljs$core$async36699.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async36699");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36699 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36699(map_LT___$1,f__$1,ch__$1,meta36697__$1,___$2,fn1__$1,meta36700){
return (new cljs.core.async.t_cljs$core$async36699(map_LT___$1,f__$1,ch__$1,meta36697__$1,___$2,fn1__$1,meta36700));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36699(self__.map_LT_,self__.f,self__.ch,self__.meta36697,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36697","meta36697",-755616759,null)], null);
});

cljs.core.async.t_cljs$core$async36696.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36696";

cljs.core.async.t_cljs$core$async36696.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async36696");
});

cljs.core.async.__GT_t_cljs$core$async36696 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36696(map_LT___$1,f__$1,ch__$1,meta36697){
return (new cljs.core.async.t_cljs$core$async36696(map_LT___$1,f__$1,ch__$1,meta36697));
});

}

return (new cljs.core.async.t_cljs$core$async36696(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36705 = (function (map_GT_,f,ch,meta36706){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36706 = meta36706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36707,meta36706__$1){
var self__ = this;
var _36707__$1 = this;
return (new cljs.core.async.t_cljs$core$async36705(self__.map_GT_,self__.f,self__.ch,meta36706__$1));
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36707){
var self__ = this;
var _36707__$1 = this;
return self__.meta36706;
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36706","meta36706",-1493704698,null)], null);
});

cljs.core.async.t_cljs$core$async36705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36705";

cljs.core.async.t_cljs$core$async36705.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async36705");
});

cljs.core.async.__GT_t_cljs$core$async36705 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36705(map_GT___$1,f__$1,ch__$1,meta36706){
return (new cljs.core.async.t_cljs$core$async36705(map_GT___$1,f__$1,ch__$1,meta36706));
});

}

return (new cljs.core.async.t_cljs$core$async36705(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36711 = (function (filter_GT_,p,ch,meta36712){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36712 = meta36712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36713,meta36712__$1){
var self__ = this;
var _36713__$1 = this;
return (new cljs.core.async.t_cljs$core$async36711(self__.filter_GT_,self__.p,self__.ch,meta36712__$1));
});

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36713){
var self__ = this;
var _36713__$1 = this;
return self__.meta36712;
});

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36712","meta36712",-1119219152,null)], null);
});

cljs.core.async.t_cljs$core$async36711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36711";

cljs.core.async.t_cljs$core$async36711.cljs$lang$ctorPrWriter = (function (this__25657__auto__,writer__25658__auto__,opt__25659__auto__){
return cljs.core._write.call(null,writer__25658__auto__,"cljs.core.async/t_cljs$core$async36711");
});

cljs.core.async.__GT_t_cljs$core$async36711 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36711(filter_GT___$1,p__$1,ch__$1,meta36712){
return (new cljs.core.async.t_cljs$core$async36711(filter_GT___$1,p__$1,ch__$1,meta36712));
});

}

return (new cljs.core.async.t_cljs$core$async36711(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36714 = [];
var len__26126__auto___36758 = arguments.length;
var i__26127__auto___36759 = (0);
while(true){
if((i__26127__auto___36759 < len__26126__auto___36758)){
args36714.push((arguments[i__26127__auto___36759]));

var G__36760 = (i__26127__auto___36759 + (1));
i__26127__auto___36759 = G__36760;
continue;
} else {
}
break;
}

var G__36716 = args36714.length;
switch (G__36716) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36714.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34490__auto___36762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___36762,out){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___36762,out){
return (function (state_36737){
var state_val_36738 = (state_36737[(1)]);
if((state_val_36738 === (7))){
var inst_36733 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36739_36763 = state_36737__$1;
(statearr_36739_36763[(2)] = inst_36733);

(statearr_36739_36763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (1))){
var state_36737__$1 = state_36737;
var statearr_36740_36764 = state_36737__$1;
(statearr_36740_36764[(2)] = null);

(statearr_36740_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (4))){
var inst_36719 = (state_36737[(7)]);
var inst_36719__$1 = (state_36737[(2)]);
var inst_36720 = (inst_36719__$1 == null);
var state_36737__$1 = (function (){var statearr_36741 = state_36737;
(statearr_36741[(7)] = inst_36719__$1);

return statearr_36741;
})();
if(cljs.core.truth_(inst_36720)){
var statearr_36742_36765 = state_36737__$1;
(statearr_36742_36765[(1)] = (5));

} else {
var statearr_36743_36766 = state_36737__$1;
(statearr_36743_36766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (6))){
var inst_36719 = (state_36737[(7)]);
var inst_36724 = p.call(null,inst_36719);
var state_36737__$1 = state_36737;
if(cljs.core.truth_(inst_36724)){
var statearr_36744_36767 = state_36737__$1;
(statearr_36744_36767[(1)] = (8));

} else {
var statearr_36745_36768 = state_36737__$1;
(statearr_36745_36768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (3))){
var inst_36735 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36737__$1,inst_36735);
} else {
if((state_val_36738 === (2))){
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36737__$1,(4),ch);
} else {
if((state_val_36738 === (11))){
var inst_36727 = (state_36737[(2)]);
var state_36737__$1 = state_36737;
var statearr_36746_36769 = state_36737__$1;
(statearr_36746_36769[(2)] = inst_36727);

(statearr_36746_36769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (9))){
var state_36737__$1 = state_36737;
var statearr_36747_36770 = state_36737__$1;
(statearr_36747_36770[(2)] = null);

(statearr_36747_36770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (5))){
var inst_36722 = cljs.core.async.close_BANG_.call(null,out);
var state_36737__$1 = state_36737;
var statearr_36748_36771 = state_36737__$1;
(statearr_36748_36771[(2)] = inst_36722);

(statearr_36748_36771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (10))){
var inst_36730 = (state_36737[(2)]);
var state_36737__$1 = (function (){var statearr_36749 = state_36737;
(statearr_36749[(8)] = inst_36730);

return statearr_36749;
})();
var statearr_36750_36772 = state_36737__$1;
(statearr_36750_36772[(2)] = null);

(statearr_36750_36772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36738 === (8))){
var inst_36719 = (state_36737[(7)]);
var state_36737__$1 = state_36737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36737__$1,(11),out,inst_36719);
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
});})(c__34490__auto___36762,out))
;
return ((function (switch__34378__auto__,c__34490__auto___36762,out){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_36754 = [null,null,null,null,null,null,null,null,null];
(statearr_36754[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_36754[(1)] = (1));

return statearr_36754;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_36737){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36755){if((e36755 instanceof Object)){
var ex__34382__auto__ = e36755;
var statearr_36756_36773 = state_36737;
(statearr_36756_36773[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36774 = state_36737;
state_36737 = G__36774;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_36737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_36737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___36762,out))
})();
var state__34492__auto__ = (function (){var statearr_36757 = f__34491__auto__.call(null);
(statearr_36757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___36762);

return statearr_36757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___36762,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36775 = [];
var len__26126__auto___36778 = arguments.length;
var i__26127__auto___36779 = (0);
while(true){
if((i__26127__auto___36779 < len__26126__auto___36778)){
args36775.push((arguments[i__26127__auto___36779]));

var G__36780 = (i__26127__auto___36779 + (1));
i__26127__auto___36779 = G__36780;
continue;
} else {
}
break;
}

var G__36777 = args36775.length;
switch (G__36777) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36775.length)].join('')));

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
var c__34490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto__){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto__){
return (function (state_36947){
var state_val_36948 = (state_36947[(1)]);
if((state_val_36948 === (7))){
var inst_36943 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36949_36990 = state_36947__$1;
(statearr_36949_36990[(2)] = inst_36943);

(statearr_36949_36990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (20))){
var inst_36913 = (state_36947[(7)]);
var inst_36924 = (state_36947[(2)]);
var inst_36925 = cljs.core.next.call(null,inst_36913);
var inst_36899 = inst_36925;
var inst_36900 = null;
var inst_36901 = (0);
var inst_36902 = (0);
var state_36947__$1 = (function (){var statearr_36950 = state_36947;
(statearr_36950[(8)] = inst_36900);

(statearr_36950[(9)] = inst_36901);

(statearr_36950[(10)] = inst_36902);

(statearr_36950[(11)] = inst_36899);

(statearr_36950[(12)] = inst_36924);

return statearr_36950;
})();
var statearr_36951_36991 = state_36947__$1;
(statearr_36951_36991[(2)] = null);

(statearr_36951_36991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (1))){
var state_36947__$1 = state_36947;
var statearr_36952_36992 = state_36947__$1;
(statearr_36952_36992[(2)] = null);

(statearr_36952_36992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (4))){
var inst_36888 = (state_36947[(13)]);
var inst_36888__$1 = (state_36947[(2)]);
var inst_36889 = (inst_36888__$1 == null);
var state_36947__$1 = (function (){var statearr_36953 = state_36947;
(statearr_36953[(13)] = inst_36888__$1);

return statearr_36953;
})();
if(cljs.core.truth_(inst_36889)){
var statearr_36954_36993 = state_36947__$1;
(statearr_36954_36993[(1)] = (5));

} else {
var statearr_36955_36994 = state_36947__$1;
(statearr_36955_36994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (15))){
var state_36947__$1 = state_36947;
var statearr_36959_36995 = state_36947__$1;
(statearr_36959_36995[(2)] = null);

(statearr_36959_36995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (21))){
var state_36947__$1 = state_36947;
var statearr_36960_36996 = state_36947__$1;
(statearr_36960_36996[(2)] = null);

(statearr_36960_36996[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (13))){
var inst_36900 = (state_36947[(8)]);
var inst_36901 = (state_36947[(9)]);
var inst_36902 = (state_36947[(10)]);
var inst_36899 = (state_36947[(11)]);
var inst_36909 = (state_36947[(2)]);
var inst_36910 = (inst_36902 + (1));
var tmp36956 = inst_36900;
var tmp36957 = inst_36901;
var tmp36958 = inst_36899;
var inst_36899__$1 = tmp36958;
var inst_36900__$1 = tmp36956;
var inst_36901__$1 = tmp36957;
var inst_36902__$1 = inst_36910;
var state_36947__$1 = (function (){var statearr_36961 = state_36947;
(statearr_36961[(8)] = inst_36900__$1);

(statearr_36961[(14)] = inst_36909);

(statearr_36961[(9)] = inst_36901__$1);

(statearr_36961[(10)] = inst_36902__$1);

(statearr_36961[(11)] = inst_36899__$1);

return statearr_36961;
})();
var statearr_36962_36997 = state_36947__$1;
(statearr_36962_36997[(2)] = null);

(statearr_36962_36997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (22))){
var state_36947__$1 = state_36947;
var statearr_36963_36998 = state_36947__$1;
(statearr_36963_36998[(2)] = null);

(statearr_36963_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (6))){
var inst_36888 = (state_36947[(13)]);
var inst_36897 = f.call(null,inst_36888);
var inst_36898 = cljs.core.seq.call(null,inst_36897);
var inst_36899 = inst_36898;
var inst_36900 = null;
var inst_36901 = (0);
var inst_36902 = (0);
var state_36947__$1 = (function (){var statearr_36964 = state_36947;
(statearr_36964[(8)] = inst_36900);

(statearr_36964[(9)] = inst_36901);

(statearr_36964[(10)] = inst_36902);

(statearr_36964[(11)] = inst_36899);

return statearr_36964;
})();
var statearr_36965_36999 = state_36947__$1;
(statearr_36965_36999[(2)] = null);

(statearr_36965_36999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (17))){
var inst_36913 = (state_36947[(7)]);
var inst_36917 = cljs.core.chunk_first.call(null,inst_36913);
var inst_36918 = cljs.core.chunk_rest.call(null,inst_36913);
var inst_36919 = cljs.core.count.call(null,inst_36917);
var inst_36899 = inst_36918;
var inst_36900 = inst_36917;
var inst_36901 = inst_36919;
var inst_36902 = (0);
var state_36947__$1 = (function (){var statearr_36966 = state_36947;
(statearr_36966[(8)] = inst_36900);

(statearr_36966[(9)] = inst_36901);

(statearr_36966[(10)] = inst_36902);

(statearr_36966[(11)] = inst_36899);

return statearr_36966;
})();
var statearr_36967_37000 = state_36947__$1;
(statearr_36967_37000[(2)] = null);

(statearr_36967_37000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (3))){
var inst_36945 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36947__$1,inst_36945);
} else {
if((state_val_36948 === (12))){
var inst_36933 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36968_37001 = state_36947__$1;
(statearr_36968_37001[(2)] = inst_36933);

(statearr_36968_37001[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (2))){
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36947__$1,(4),in$);
} else {
if((state_val_36948 === (23))){
var inst_36941 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36969_37002 = state_36947__$1;
(statearr_36969_37002[(2)] = inst_36941);

(statearr_36969_37002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (19))){
var inst_36928 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36970_37003 = state_36947__$1;
(statearr_36970_37003[(2)] = inst_36928);

(statearr_36970_37003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (11))){
var inst_36899 = (state_36947[(11)]);
var inst_36913 = (state_36947[(7)]);
var inst_36913__$1 = cljs.core.seq.call(null,inst_36899);
var state_36947__$1 = (function (){var statearr_36971 = state_36947;
(statearr_36971[(7)] = inst_36913__$1);

return statearr_36971;
})();
if(inst_36913__$1){
var statearr_36972_37004 = state_36947__$1;
(statearr_36972_37004[(1)] = (14));

} else {
var statearr_36973_37005 = state_36947__$1;
(statearr_36973_37005[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (9))){
var inst_36935 = (state_36947[(2)]);
var inst_36936 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36947__$1 = (function (){var statearr_36974 = state_36947;
(statearr_36974[(15)] = inst_36935);

return statearr_36974;
})();
if(cljs.core.truth_(inst_36936)){
var statearr_36975_37006 = state_36947__$1;
(statearr_36975_37006[(1)] = (21));

} else {
var statearr_36976_37007 = state_36947__$1;
(statearr_36976_37007[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (5))){
var inst_36891 = cljs.core.async.close_BANG_.call(null,out);
var state_36947__$1 = state_36947;
var statearr_36977_37008 = state_36947__$1;
(statearr_36977_37008[(2)] = inst_36891);

(statearr_36977_37008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (14))){
var inst_36913 = (state_36947[(7)]);
var inst_36915 = cljs.core.chunked_seq_QMARK_.call(null,inst_36913);
var state_36947__$1 = state_36947;
if(inst_36915){
var statearr_36978_37009 = state_36947__$1;
(statearr_36978_37009[(1)] = (17));

} else {
var statearr_36979_37010 = state_36947__$1;
(statearr_36979_37010[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (16))){
var inst_36931 = (state_36947[(2)]);
var state_36947__$1 = state_36947;
var statearr_36980_37011 = state_36947__$1;
(statearr_36980_37011[(2)] = inst_36931);

(statearr_36980_37011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36948 === (10))){
var inst_36900 = (state_36947[(8)]);
var inst_36902 = (state_36947[(10)]);
var inst_36907 = cljs.core._nth.call(null,inst_36900,inst_36902);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,(13),out,inst_36907);
} else {
if((state_val_36948 === (18))){
var inst_36913 = (state_36947[(7)]);
var inst_36922 = cljs.core.first.call(null,inst_36913);
var state_36947__$1 = state_36947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36947__$1,(20),out,inst_36922);
} else {
if((state_val_36948 === (8))){
var inst_36901 = (state_36947[(9)]);
var inst_36902 = (state_36947[(10)]);
var inst_36904 = (inst_36902 < inst_36901);
var inst_36905 = inst_36904;
var state_36947__$1 = state_36947;
if(cljs.core.truth_(inst_36905)){
var statearr_36981_37012 = state_36947__$1;
(statearr_36981_37012[(1)] = (10));

} else {
var statearr_36982_37013 = state_36947__$1;
(statearr_36982_37013[(1)] = (11));

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
});})(c__34490__auto__))
;
return ((function (switch__34378__auto__,c__34490__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____0 = (function (){
var statearr_36986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36986[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__);

(statearr_36986[(1)] = (1));

return statearr_36986;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____1 = (function (state_36947){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_36947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e36987){if((e36987 instanceof Object)){
var ex__34382__auto__ = e36987;
var statearr_36988_37014 = state_36947;
(statearr_36988_37014[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37015 = state_36947;
state_36947 = G__37015;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__ = function(state_36947){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____1.call(this,state_36947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34379__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto__))
})();
var state__34492__auto__ = (function (){var statearr_36989 = f__34491__auto__.call(null);
(statearr_36989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto__);

return statearr_36989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto__))
);

return c__34490__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args37016 = [];
var len__26126__auto___37019 = arguments.length;
var i__26127__auto___37020 = (0);
while(true){
if((i__26127__auto___37020 < len__26126__auto___37019)){
args37016.push((arguments[i__26127__auto___37020]));

var G__37021 = (i__26127__auto___37020 + (1));
i__26127__auto___37020 = G__37021;
continue;
} else {
}
break;
}

var G__37018 = args37016.length;
switch (G__37018) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37016.length)].join('')));

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
var args37023 = [];
var len__26126__auto___37026 = arguments.length;
var i__26127__auto___37027 = (0);
while(true){
if((i__26127__auto___37027 < len__26126__auto___37026)){
args37023.push((arguments[i__26127__auto___37027]));

var G__37028 = (i__26127__auto___37027 + (1));
i__26127__auto___37027 = G__37028;
continue;
} else {
}
break;
}

var G__37025 = args37023.length;
switch (G__37025) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37023.length)].join('')));

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
var args37030 = [];
var len__26126__auto___37081 = arguments.length;
var i__26127__auto___37082 = (0);
while(true){
if((i__26127__auto___37082 < len__26126__auto___37081)){
args37030.push((arguments[i__26127__auto___37082]));

var G__37083 = (i__26127__auto___37082 + (1));
i__26127__auto___37082 = G__37083;
continue;
} else {
}
break;
}

var G__37032 = args37030.length;
switch (G__37032) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37030.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34490__auto___37085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___37085,out){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___37085,out){
return (function (state_37056){
var state_val_37057 = (state_37056[(1)]);
if((state_val_37057 === (7))){
var inst_37051 = (state_37056[(2)]);
var state_37056__$1 = state_37056;
var statearr_37058_37086 = state_37056__$1;
(statearr_37058_37086[(2)] = inst_37051);

(statearr_37058_37086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (1))){
var inst_37033 = null;
var state_37056__$1 = (function (){var statearr_37059 = state_37056;
(statearr_37059[(7)] = inst_37033);

return statearr_37059;
})();
var statearr_37060_37087 = state_37056__$1;
(statearr_37060_37087[(2)] = null);

(statearr_37060_37087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (4))){
var inst_37036 = (state_37056[(8)]);
var inst_37036__$1 = (state_37056[(2)]);
var inst_37037 = (inst_37036__$1 == null);
var inst_37038 = cljs.core.not.call(null,inst_37037);
var state_37056__$1 = (function (){var statearr_37061 = state_37056;
(statearr_37061[(8)] = inst_37036__$1);

return statearr_37061;
})();
if(inst_37038){
var statearr_37062_37088 = state_37056__$1;
(statearr_37062_37088[(1)] = (5));

} else {
var statearr_37063_37089 = state_37056__$1;
(statearr_37063_37089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (6))){
var state_37056__$1 = state_37056;
var statearr_37064_37090 = state_37056__$1;
(statearr_37064_37090[(2)] = null);

(statearr_37064_37090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (3))){
var inst_37053 = (state_37056[(2)]);
var inst_37054 = cljs.core.async.close_BANG_.call(null,out);
var state_37056__$1 = (function (){var statearr_37065 = state_37056;
(statearr_37065[(9)] = inst_37053);

return statearr_37065;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37056__$1,inst_37054);
} else {
if((state_val_37057 === (2))){
var state_37056__$1 = state_37056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37056__$1,(4),ch);
} else {
if((state_val_37057 === (11))){
var inst_37036 = (state_37056[(8)]);
var inst_37045 = (state_37056[(2)]);
var inst_37033 = inst_37036;
var state_37056__$1 = (function (){var statearr_37066 = state_37056;
(statearr_37066[(10)] = inst_37045);

(statearr_37066[(7)] = inst_37033);

return statearr_37066;
})();
var statearr_37067_37091 = state_37056__$1;
(statearr_37067_37091[(2)] = null);

(statearr_37067_37091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (9))){
var inst_37036 = (state_37056[(8)]);
var state_37056__$1 = state_37056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37056__$1,(11),out,inst_37036);
} else {
if((state_val_37057 === (5))){
var inst_37036 = (state_37056[(8)]);
var inst_37033 = (state_37056[(7)]);
var inst_37040 = cljs.core._EQ_.call(null,inst_37036,inst_37033);
var state_37056__$1 = state_37056;
if(inst_37040){
var statearr_37069_37092 = state_37056__$1;
(statearr_37069_37092[(1)] = (8));

} else {
var statearr_37070_37093 = state_37056__$1;
(statearr_37070_37093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (10))){
var inst_37048 = (state_37056[(2)]);
var state_37056__$1 = state_37056;
var statearr_37071_37094 = state_37056__$1;
(statearr_37071_37094[(2)] = inst_37048);

(statearr_37071_37094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37057 === (8))){
var inst_37033 = (state_37056[(7)]);
var tmp37068 = inst_37033;
var inst_37033__$1 = tmp37068;
var state_37056__$1 = (function (){var statearr_37072 = state_37056;
(statearr_37072[(7)] = inst_37033__$1);

return statearr_37072;
})();
var statearr_37073_37095 = state_37056__$1;
(statearr_37073_37095[(2)] = null);

(statearr_37073_37095[(1)] = (2));


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
});})(c__34490__auto___37085,out))
;
return ((function (switch__34378__auto__,c__34490__auto___37085,out){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_37077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37077[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_37077[(1)] = (1));

return statearr_37077;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_37056){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_37056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e37078){if((e37078 instanceof Object)){
var ex__34382__auto__ = e37078;
var statearr_37079_37096 = state_37056;
(statearr_37079_37096[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37097 = state_37056;
state_37056 = G__37097;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_37056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_37056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___37085,out))
})();
var state__34492__auto__ = (function (){var statearr_37080 = f__34491__auto__.call(null);
(statearr_37080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___37085);

return statearr_37080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___37085,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args37098 = [];
var len__26126__auto___37168 = arguments.length;
var i__26127__auto___37169 = (0);
while(true){
if((i__26127__auto___37169 < len__26126__auto___37168)){
args37098.push((arguments[i__26127__auto___37169]));

var G__37170 = (i__26127__auto___37169 + (1));
i__26127__auto___37169 = G__37170;
continue;
} else {
}
break;
}

var G__37100 = args37098.length;
switch (G__37100) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37098.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34490__auto___37172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___37172,out){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___37172,out){
return (function (state_37138){
var state_val_37139 = (state_37138[(1)]);
if((state_val_37139 === (7))){
var inst_37134 = (state_37138[(2)]);
var state_37138__$1 = state_37138;
var statearr_37140_37173 = state_37138__$1;
(statearr_37140_37173[(2)] = inst_37134);

(statearr_37140_37173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (1))){
var inst_37101 = (new Array(n));
var inst_37102 = inst_37101;
var inst_37103 = (0);
var state_37138__$1 = (function (){var statearr_37141 = state_37138;
(statearr_37141[(7)] = inst_37103);

(statearr_37141[(8)] = inst_37102);

return statearr_37141;
})();
var statearr_37142_37174 = state_37138__$1;
(statearr_37142_37174[(2)] = null);

(statearr_37142_37174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (4))){
var inst_37106 = (state_37138[(9)]);
var inst_37106__$1 = (state_37138[(2)]);
var inst_37107 = (inst_37106__$1 == null);
var inst_37108 = cljs.core.not.call(null,inst_37107);
var state_37138__$1 = (function (){var statearr_37143 = state_37138;
(statearr_37143[(9)] = inst_37106__$1);

return statearr_37143;
})();
if(inst_37108){
var statearr_37144_37175 = state_37138__$1;
(statearr_37144_37175[(1)] = (5));

} else {
var statearr_37145_37176 = state_37138__$1;
(statearr_37145_37176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (15))){
var inst_37128 = (state_37138[(2)]);
var state_37138__$1 = state_37138;
var statearr_37146_37177 = state_37138__$1;
(statearr_37146_37177[(2)] = inst_37128);

(statearr_37146_37177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (13))){
var state_37138__$1 = state_37138;
var statearr_37147_37178 = state_37138__$1;
(statearr_37147_37178[(2)] = null);

(statearr_37147_37178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (6))){
var inst_37103 = (state_37138[(7)]);
var inst_37124 = (inst_37103 > (0));
var state_37138__$1 = state_37138;
if(cljs.core.truth_(inst_37124)){
var statearr_37148_37179 = state_37138__$1;
(statearr_37148_37179[(1)] = (12));

} else {
var statearr_37149_37180 = state_37138__$1;
(statearr_37149_37180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (3))){
var inst_37136 = (state_37138[(2)]);
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37138__$1,inst_37136);
} else {
if((state_val_37139 === (12))){
var inst_37102 = (state_37138[(8)]);
var inst_37126 = cljs.core.vec.call(null,inst_37102);
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37138__$1,(15),out,inst_37126);
} else {
if((state_val_37139 === (2))){
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37138__$1,(4),ch);
} else {
if((state_val_37139 === (11))){
var inst_37118 = (state_37138[(2)]);
var inst_37119 = (new Array(n));
var inst_37102 = inst_37119;
var inst_37103 = (0);
var state_37138__$1 = (function (){var statearr_37150 = state_37138;
(statearr_37150[(10)] = inst_37118);

(statearr_37150[(7)] = inst_37103);

(statearr_37150[(8)] = inst_37102);

return statearr_37150;
})();
var statearr_37151_37181 = state_37138__$1;
(statearr_37151_37181[(2)] = null);

(statearr_37151_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (9))){
var inst_37102 = (state_37138[(8)]);
var inst_37116 = cljs.core.vec.call(null,inst_37102);
var state_37138__$1 = state_37138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37138__$1,(11),out,inst_37116);
} else {
if((state_val_37139 === (5))){
var inst_37106 = (state_37138[(9)]);
var inst_37103 = (state_37138[(7)]);
var inst_37102 = (state_37138[(8)]);
var inst_37111 = (state_37138[(11)]);
var inst_37110 = (inst_37102[inst_37103] = inst_37106);
var inst_37111__$1 = (inst_37103 + (1));
var inst_37112 = (inst_37111__$1 < n);
var state_37138__$1 = (function (){var statearr_37152 = state_37138;
(statearr_37152[(12)] = inst_37110);

(statearr_37152[(11)] = inst_37111__$1);

return statearr_37152;
})();
if(cljs.core.truth_(inst_37112)){
var statearr_37153_37182 = state_37138__$1;
(statearr_37153_37182[(1)] = (8));

} else {
var statearr_37154_37183 = state_37138__$1;
(statearr_37154_37183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (14))){
var inst_37131 = (state_37138[(2)]);
var inst_37132 = cljs.core.async.close_BANG_.call(null,out);
var state_37138__$1 = (function (){var statearr_37156 = state_37138;
(statearr_37156[(13)] = inst_37131);

return statearr_37156;
})();
var statearr_37157_37184 = state_37138__$1;
(statearr_37157_37184[(2)] = inst_37132);

(statearr_37157_37184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (10))){
var inst_37122 = (state_37138[(2)]);
var state_37138__$1 = state_37138;
var statearr_37158_37185 = state_37138__$1;
(statearr_37158_37185[(2)] = inst_37122);

(statearr_37158_37185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37139 === (8))){
var inst_37102 = (state_37138[(8)]);
var inst_37111 = (state_37138[(11)]);
var tmp37155 = inst_37102;
var inst_37102__$1 = tmp37155;
var inst_37103 = inst_37111;
var state_37138__$1 = (function (){var statearr_37159 = state_37138;
(statearr_37159[(7)] = inst_37103);

(statearr_37159[(8)] = inst_37102__$1);

return statearr_37159;
})();
var statearr_37160_37186 = state_37138__$1;
(statearr_37160_37186[(2)] = null);

(statearr_37160_37186[(1)] = (2));


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
});})(c__34490__auto___37172,out))
;
return ((function (switch__34378__auto__,c__34490__auto___37172,out){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_37164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37164[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_37164[(1)] = (1));

return statearr_37164;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_37138){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_37138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e37165){if((e37165 instanceof Object)){
var ex__34382__auto__ = e37165;
var statearr_37166_37187 = state_37138;
(statearr_37166_37187[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37188 = state_37138;
state_37138 = G__37188;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_37138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_37138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___37172,out))
})();
var state__34492__auto__ = (function (){var statearr_37167 = f__34491__auto__.call(null);
(statearr_37167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___37172);

return statearr_37167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___37172,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37189 = [];
var len__26126__auto___37263 = arguments.length;
var i__26127__auto___37264 = (0);
while(true){
if((i__26127__auto___37264 < len__26126__auto___37263)){
args37189.push((arguments[i__26127__auto___37264]));

var G__37265 = (i__26127__auto___37264 + (1));
i__26127__auto___37264 = G__37265;
continue;
} else {
}
break;
}

var G__37191 = args37189.length;
switch (G__37191) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37189.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34490__auto___37267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34490__auto___37267,out){
return (function (){
var f__34491__auto__ = (function (){var switch__34378__auto__ = ((function (c__34490__auto___37267,out){
return (function (state_37233){
var state_val_37234 = (state_37233[(1)]);
if((state_val_37234 === (7))){
var inst_37229 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
var statearr_37235_37268 = state_37233__$1;
(statearr_37235_37268[(2)] = inst_37229);

(statearr_37235_37268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (1))){
var inst_37192 = [];
var inst_37193 = inst_37192;
var inst_37194 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37233__$1 = (function (){var statearr_37236 = state_37233;
(statearr_37236[(7)] = inst_37194);

(statearr_37236[(8)] = inst_37193);

return statearr_37236;
})();
var statearr_37237_37269 = state_37233__$1;
(statearr_37237_37269[(2)] = null);

(statearr_37237_37269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (4))){
var inst_37197 = (state_37233[(9)]);
var inst_37197__$1 = (state_37233[(2)]);
var inst_37198 = (inst_37197__$1 == null);
var inst_37199 = cljs.core.not.call(null,inst_37198);
var state_37233__$1 = (function (){var statearr_37238 = state_37233;
(statearr_37238[(9)] = inst_37197__$1);

return statearr_37238;
})();
if(inst_37199){
var statearr_37239_37270 = state_37233__$1;
(statearr_37239_37270[(1)] = (5));

} else {
var statearr_37240_37271 = state_37233__$1;
(statearr_37240_37271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (15))){
var inst_37223 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
var statearr_37241_37272 = state_37233__$1;
(statearr_37241_37272[(2)] = inst_37223);

(statearr_37241_37272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (13))){
var state_37233__$1 = state_37233;
var statearr_37242_37273 = state_37233__$1;
(statearr_37242_37273[(2)] = null);

(statearr_37242_37273[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (6))){
var inst_37193 = (state_37233[(8)]);
var inst_37218 = inst_37193.length;
var inst_37219 = (inst_37218 > (0));
var state_37233__$1 = state_37233;
if(cljs.core.truth_(inst_37219)){
var statearr_37243_37274 = state_37233__$1;
(statearr_37243_37274[(1)] = (12));

} else {
var statearr_37244_37275 = state_37233__$1;
(statearr_37244_37275[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (3))){
var inst_37231 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37233__$1,inst_37231);
} else {
if((state_val_37234 === (12))){
var inst_37193 = (state_37233[(8)]);
var inst_37221 = cljs.core.vec.call(null,inst_37193);
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37233__$1,(15),out,inst_37221);
} else {
if((state_val_37234 === (2))){
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37233__$1,(4),ch);
} else {
if((state_val_37234 === (11))){
var inst_37201 = (state_37233[(10)]);
var inst_37197 = (state_37233[(9)]);
var inst_37211 = (state_37233[(2)]);
var inst_37212 = [];
var inst_37213 = inst_37212.push(inst_37197);
var inst_37193 = inst_37212;
var inst_37194 = inst_37201;
var state_37233__$1 = (function (){var statearr_37245 = state_37233;
(statearr_37245[(11)] = inst_37211);

(statearr_37245[(7)] = inst_37194);

(statearr_37245[(8)] = inst_37193);

(statearr_37245[(12)] = inst_37213);

return statearr_37245;
})();
var statearr_37246_37276 = state_37233__$1;
(statearr_37246_37276[(2)] = null);

(statearr_37246_37276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (9))){
var inst_37193 = (state_37233[(8)]);
var inst_37209 = cljs.core.vec.call(null,inst_37193);
var state_37233__$1 = state_37233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37233__$1,(11),out,inst_37209);
} else {
if((state_val_37234 === (5))){
var inst_37194 = (state_37233[(7)]);
var inst_37201 = (state_37233[(10)]);
var inst_37197 = (state_37233[(9)]);
var inst_37201__$1 = f.call(null,inst_37197);
var inst_37202 = cljs.core._EQ_.call(null,inst_37201__$1,inst_37194);
var inst_37203 = cljs.core.keyword_identical_QMARK_.call(null,inst_37194,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37204 = (inst_37202) || (inst_37203);
var state_37233__$1 = (function (){var statearr_37247 = state_37233;
(statearr_37247[(10)] = inst_37201__$1);

return statearr_37247;
})();
if(cljs.core.truth_(inst_37204)){
var statearr_37248_37277 = state_37233__$1;
(statearr_37248_37277[(1)] = (8));

} else {
var statearr_37249_37278 = state_37233__$1;
(statearr_37249_37278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (14))){
var inst_37226 = (state_37233[(2)]);
var inst_37227 = cljs.core.async.close_BANG_.call(null,out);
var state_37233__$1 = (function (){var statearr_37251 = state_37233;
(statearr_37251[(13)] = inst_37226);

return statearr_37251;
})();
var statearr_37252_37279 = state_37233__$1;
(statearr_37252_37279[(2)] = inst_37227);

(statearr_37252_37279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (10))){
var inst_37216 = (state_37233[(2)]);
var state_37233__$1 = state_37233;
var statearr_37253_37280 = state_37233__$1;
(statearr_37253_37280[(2)] = inst_37216);

(statearr_37253_37280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37234 === (8))){
var inst_37201 = (state_37233[(10)]);
var inst_37197 = (state_37233[(9)]);
var inst_37193 = (state_37233[(8)]);
var inst_37206 = inst_37193.push(inst_37197);
var tmp37250 = inst_37193;
var inst_37193__$1 = tmp37250;
var inst_37194 = inst_37201;
var state_37233__$1 = (function (){var statearr_37254 = state_37233;
(statearr_37254[(14)] = inst_37206);

(statearr_37254[(7)] = inst_37194);

(statearr_37254[(8)] = inst_37193__$1);

return statearr_37254;
})();
var statearr_37255_37281 = state_37233__$1;
(statearr_37255_37281[(2)] = null);

(statearr_37255_37281[(1)] = (2));


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
});})(c__34490__auto___37267,out))
;
return ((function (switch__34378__auto__,c__34490__auto___37267,out){
return (function() {
var cljs$core$async$state_machine__34379__auto__ = null;
var cljs$core$async$state_machine__34379__auto____0 = (function (){
var statearr_37259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37259[(0)] = cljs$core$async$state_machine__34379__auto__);

(statearr_37259[(1)] = (1));

return statearr_37259;
});
var cljs$core$async$state_machine__34379__auto____1 = (function (state_37233){
while(true){
var ret_value__34380__auto__ = (function (){try{while(true){
var result__34381__auto__ = switch__34378__auto__.call(null,state_37233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34381__auto__;
}
break;
}
}catch (e37260){if((e37260 instanceof Object)){
var ex__34382__auto__ = e37260;
var statearr_37261_37282 = state_37233;
(statearr_37261_37282[(5)] = ex__34382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37283 = state_37233;
state_37233 = G__37283;
continue;
} else {
return ret_value__34380__auto__;
}
break;
}
});
cljs$core$async$state_machine__34379__auto__ = function(state_37233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34379__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34379__auto____1.call(this,state_37233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34379__auto____0;
cljs$core$async$state_machine__34379__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34379__auto____1;
return cljs$core$async$state_machine__34379__auto__;
})()
;})(switch__34378__auto__,c__34490__auto___37267,out))
})();
var state__34492__auto__ = (function (){var statearr_37262 = f__34491__auto__.call(null);
(statearr_37262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34490__auto___37267);

return statearr_37262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34492__auto__);
});})(c__34490__auto___37267,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map