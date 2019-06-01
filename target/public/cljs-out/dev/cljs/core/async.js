// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16230 = arguments.length;
switch (G__16230) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16231 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16231 = (function (f,blockable,meta16232){
this.f = f;
this.blockable = blockable;
this.meta16232 = meta16232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16233,meta16232__$1){
var self__ = this;
var _16233__$1 = this;
return (new cljs.core.async.t_cljs$core$async16231(self__.f,self__.blockable,meta16232__$1));
});

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16233){
var self__ = this;
var _16233__$1 = this;
return self__.meta16232;
});

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16232","meta16232",62948619,null)], null);
});

cljs.core.async.t_cljs$core$async16231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16231";

cljs.core.async.t_cljs$core$async16231.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16231");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16231.
 */
cljs.core.async.__GT_t_cljs$core$async16231 = (function cljs$core$async$__GT_t_cljs$core$async16231(f__$1,blockable__$1,meta16232){
return (new cljs.core.async.t_cljs$core$async16231(f__$1,blockable__$1,meta16232));
});

}

return (new cljs.core.async.t_cljs$core$async16231(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__16237 = arguments.length;
switch (G__16237) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__16240 = arguments.length;
switch (G__16240) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16243 = arguments.length;
switch (G__16243) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16245 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16245);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16245,ret){
return (function (){
return fn1.call(null,val_16245);
});})(val_16245,ret))
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
var G__16247 = arguments.length;
switch (G__16247) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
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
var n__4408__auto___16249 = n;
var x_16250 = (0);
while(true){
if((x_16250 < n__4408__auto___16249)){
(a[x_16250] = (0));

var G__16251 = (x_16250 + (1));
x_16250 = G__16251;
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

var G__16252 = (i + (1));
i = G__16252;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16253 = (function (flag,meta16254){
this.flag = flag;
this.meta16254 = meta16254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16255,meta16254__$1){
var self__ = this;
var _16255__$1 = this;
return (new cljs.core.async.t_cljs$core$async16253(self__.flag,meta16254__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16255){
var self__ = this;
var _16255__$1 = this;
return self__.meta16254;
});})(flag))
;

cljs.core.async.t_cljs$core$async16253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16253.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16254","meta16254",105420246,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16253";

cljs.core.async.t_cljs$core$async16253.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16253");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16253.
 */
cljs.core.async.__GT_t_cljs$core$async16253 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16253(flag__$1,meta16254){
return (new cljs.core.async.t_cljs$core$async16253(flag__$1,meta16254));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16253(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16256 = (function (flag,cb,meta16257){
this.flag = flag;
this.cb = cb;
this.meta16257 = meta16257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16258,meta16257__$1){
var self__ = this;
var _16258__$1 = this;
return (new cljs.core.async.t_cljs$core$async16256(self__.flag,self__.cb,meta16257__$1));
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16258){
var self__ = this;
var _16258__$1 = this;
return self__.meta16257;
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16257","meta16257",696547021,null)], null);
});

cljs.core.async.t_cljs$core$async16256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16256";

cljs.core.async.t_cljs$core$async16256.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16256");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16256.
 */
cljs.core.async.__GT_t_cljs$core$async16256 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16256(flag__$1,cb__$1,meta16257){
return (new cljs.core.async.t_cljs$core$async16256(flag__$1,cb__$1,meta16257));
});

}

return (new cljs.core.async.t_cljs$core$async16256(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16259_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16259_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16260_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16260_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16261 = (i + (1));
i = G__16261;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___16267 = arguments.length;
var i__4532__auto___16268 = (0);
while(true){
if((i__4532__auto___16268 < len__4531__auto___16267)){
args__4534__auto__.push((arguments[i__4532__auto___16268]));

var G__16269 = (i__4532__auto___16268 + (1));
i__4532__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16264){
var map__16265 = p__16264;
var map__16265__$1 = ((((!((map__16265 == null)))?(((((map__16265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16265):map__16265);
var opts = map__16265__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16262){
var G__16263 = cljs.core.first.call(null,seq16262);
var seq16262__$1 = cljs.core.next.call(null,seq16262);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16263,seq16262__$1);
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
var G__16271 = arguments.length;
switch (G__16271) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16170__auto___16317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___16317){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___16317){
return (function (state_16295){
var state_val_16296 = (state_16295[(1)]);
if((state_val_16296 === (7))){
var inst_16291 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
var statearr_16297_16318 = state_16295__$1;
(statearr_16297_16318[(2)] = inst_16291);

(statearr_16297_16318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (1))){
var state_16295__$1 = state_16295;
var statearr_16298_16319 = state_16295__$1;
(statearr_16298_16319[(2)] = null);

(statearr_16298_16319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (4))){
var inst_16274 = (state_16295[(7)]);
var inst_16274__$1 = (state_16295[(2)]);
var inst_16275 = (inst_16274__$1 == null);
var state_16295__$1 = (function (){var statearr_16299 = state_16295;
(statearr_16299[(7)] = inst_16274__$1);

return statearr_16299;
})();
if(cljs.core.truth_(inst_16275)){
var statearr_16300_16320 = state_16295__$1;
(statearr_16300_16320[(1)] = (5));

} else {
var statearr_16301_16321 = state_16295__$1;
(statearr_16301_16321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (13))){
var state_16295__$1 = state_16295;
var statearr_16302_16322 = state_16295__$1;
(statearr_16302_16322[(2)] = null);

(statearr_16302_16322[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (6))){
var inst_16274 = (state_16295[(7)]);
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16295__$1,(11),to,inst_16274);
} else {
if((state_val_16296 === (3))){
var inst_16293 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16295__$1,inst_16293);
} else {
if((state_val_16296 === (12))){
var state_16295__$1 = state_16295;
var statearr_16303_16323 = state_16295__$1;
(statearr_16303_16323[(2)] = null);

(statearr_16303_16323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (2))){
var state_16295__$1 = state_16295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16295__$1,(4),from);
} else {
if((state_val_16296 === (11))){
var inst_16284 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
if(cljs.core.truth_(inst_16284)){
var statearr_16304_16324 = state_16295__$1;
(statearr_16304_16324[(1)] = (12));

} else {
var statearr_16305_16325 = state_16295__$1;
(statearr_16305_16325[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (9))){
var state_16295__$1 = state_16295;
var statearr_16306_16326 = state_16295__$1;
(statearr_16306_16326[(2)] = null);

(statearr_16306_16326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (5))){
var state_16295__$1 = state_16295;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16307_16327 = state_16295__$1;
(statearr_16307_16327[(1)] = (8));

} else {
var statearr_16308_16328 = state_16295__$1;
(statearr_16308_16328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (14))){
var inst_16289 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
var statearr_16309_16329 = state_16295__$1;
(statearr_16309_16329[(2)] = inst_16289);

(statearr_16309_16329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (10))){
var inst_16281 = (state_16295[(2)]);
var state_16295__$1 = state_16295;
var statearr_16310_16330 = state_16295__$1;
(statearr_16310_16330[(2)] = inst_16281);

(statearr_16310_16330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16296 === (8))){
var inst_16278 = cljs.core.async.close_BANG_.call(null,to);
var state_16295__$1 = state_16295;
var statearr_16311_16331 = state_16295__$1;
(statearr_16311_16331[(2)] = inst_16278);

(statearr_16311_16331[(1)] = (10));


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
});})(c__16170__auto___16317))
;
return ((function (switch__16079__auto__,c__16170__auto___16317){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_16312 = [null,null,null,null,null,null,null,null];
(statearr_16312[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_16312[(1)] = (1));

return statearr_16312;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_16295){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16313){if((e16313 instanceof Object)){
var ex__16083__auto__ = e16313;
var statearr_16314_16332 = state_16295;
(statearr_16314_16332[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16333 = state_16295;
state_16295 = G__16333;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_16295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_16295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___16317))
})();
var state__16172__auto__ = (function (){var statearr_16315 = f__16171__auto__.call(null);
(statearr_16315[(6)] = c__16170__auto___16317);

return statearr_16315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___16317))
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
return (function (p__16334){
var vec__16335 = p__16334;
var v = cljs.core.nth.call(null,vec__16335,(0),null);
var p = cljs.core.nth.call(null,vec__16335,(1),null);
var job = vec__16335;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16170__auto___16506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___16506,res,vec__16335,v,p,job,jobs,results){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___16506,res,vec__16335,v,p,job,jobs,results){
return (function (state_16342){
var state_val_16343 = (state_16342[(1)]);
if((state_val_16343 === (1))){
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16342__$1,(2),res,v);
} else {
if((state_val_16343 === (2))){
var inst_16339 = (state_16342[(2)]);
var inst_16340 = cljs.core.async.close_BANG_.call(null,res);
var state_16342__$1 = (function (){var statearr_16344 = state_16342;
(statearr_16344[(7)] = inst_16339);

return statearr_16344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16342__$1,inst_16340);
} else {
return null;
}
}
});})(c__16170__auto___16506,res,vec__16335,v,p,job,jobs,results))
;
return ((function (switch__16079__auto__,c__16170__auto___16506,res,vec__16335,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0 = (function (){
var statearr_16345 = [null,null,null,null,null,null,null,null];
(statearr_16345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__);

(statearr_16345[(1)] = (1));

return statearr_16345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1 = (function (state_16342){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16346){if((e16346 instanceof Object)){
var ex__16083__auto__ = e16346;
var statearr_16347_16507 = state_16342;
(statearr_16347_16507[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16508 = state_16342;
state_16342 = G__16508;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = function(state_16342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1.call(this,state_16342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___16506,res,vec__16335,v,p,job,jobs,results))
})();
var state__16172__auto__ = (function (){var statearr_16348 = f__16171__auto__.call(null);
(statearr_16348[(6)] = c__16170__auto___16506);

return statearr_16348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___16506,res,vec__16335,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16349){
var vec__16350 = p__16349;
var v = cljs.core.nth.call(null,vec__16350,(0),null);
var p = cljs.core.nth.call(null,vec__16350,(1),null);
var job = vec__16350;
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
var n__4408__auto___16509 = n;
var __16510 = (0);
while(true){
if((__16510 < n__4408__auto___16509)){
var G__16353_16511 = type;
var G__16353_16512__$1 = (((G__16353_16511 instanceof cljs.core.Keyword))?G__16353_16511.fqn:null);
switch (G__16353_16512__$1) {
case "compute":
var c__16170__auto___16514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16510,c__16170__auto___16514,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (__16510,c__16170__auto___16514,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async){
return (function (state_16366){
var state_val_16367 = (state_16366[(1)]);
if((state_val_16367 === (1))){
var state_16366__$1 = state_16366;
var statearr_16368_16515 = state_16366__$1;
(statearr_16368_16515[(2)] = null);

(statearr_16368_16515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16367 === (2))){
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16366__$1,(4),jobs);
} else {
if((state_val_16367 === (3))){
var inst_16364 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16366__$1,inst_16364);
} else {
if((state_val_16367 === (4))){
var inst_16356 = (state_16366[(2)]);
var inst_16357 = process.call(null,inst_16356);
var state_16366__$1 = state_16366;
if(cljs.core.truth_(inst_16357)){
var statearr_16369_16516 = state_16366__$1;
(statearr_16369_16516[(1)] = (5));

} else {
var statearr_16370_16517 = state_16366__$1;
(statearr_16370_16517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16367 === (5))){
var state_16366__$1 = state_16366;
var statearr_16371_16518 = state_16366__$1;
(statearr_16371_16518[(2)] = null);

(statearr_16371_16518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16367 === (6))){
var state_16366__$1 = state_16366;
var statearr_16372_16519 = state_16366__$1;
(statearr_16372_16519[(2)] = null);

(statearr_16372_16519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16367 === (7))){
var inst_16362 = (state_16366[(2)]);
var state_16366__$1 = state_16366;
var statearr_16373_16520 = state_16366__$1;
(statearr_16373_16520[(2)] = inst_16362);

(statearr_16373_16520[(1)] = (3));


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
});})(__16510,c__16170__auto___16514,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async))
;
return ((function (__16510,switch__16079__auto__,c__16170__auto___16514,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0 = (function (){
var statearr_16374 = [null,null,null,null,null,null,null];
(statearr_16374[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__);

(statearr_16374[(1)] = (1));

return statearr_16374;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1 = (function (state_16366){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16375){if((e16375 instanceof Object)){
var ex__16083__auto__ = e16375;
var statearr_16376_16521 = state_16366;
(statearr_16376_16521[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16522 = state_16366;
state_16366 = G__16522;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = function(state_16366){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1.call(this,state_16366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__;
})()
;})(__16510,switch__16079__auto__,c__16170__auto___16514,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async))
})();
var state__16172__auto__ = (function (){var statearr_16377 = f__16171__auto__.call(null);
(statearr_16377[(6)] = c__16170__auto___16514);

return statearr_16377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(__16510,c__16170__auto___16514,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async))
);


break;
case "async":
var c__16170__auto___16523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16510,c__16170__auto___16523,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (__16510,c__16170__auto___16523,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async){
return (function (state_16390){
var state_val_16391 = (state_16390[(1)]);
if((state_val_16391 === (1))){
var state_16390__$1 = state_16390;
var statearr_16392_16524 = state_16390__$1;
(statearr_16392_16524[(2)] = null);

(statearr_16392_16524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (2))){
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16390__$1,(4),jobs);
} else {
if((state_val_16391 === (3))){
var inst_16388 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16390__$1,inst_16388);
} else {
if((state_val_16391 === (4))){
var inst_16380 = (state_16390[(2)]);
var inst_16381 = async.call(null,inst_16380);
var state_16390__$1 = state_16390;
if(cljs.core.truth_(inst_16381)){
var statearr_16393_16525 = state_16390__$1;
(statearr_16393_16525[(1)] = (5));

} else {
var statearr_16394_16526 = state_16390__$1;
(statearr_16394_16526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (5))){
var state_16390__$1 = state_16390;
var statearr_16395_16527 = state_16390__$1;
(statearr_16395_16527[(2)] = null);

(statearr_16395_16527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (6))){
var state_16390__$1 = state_16390;
var statearr_16396_16528 = state_16390__$1;
(statearr_16396_16528[(2)] = null);

(statearr_16396_16528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (7))){
var inst_16386 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16397_16529 = state_16390__$1;
(statearr_16397_16529[(2)] = inst_16386);

(statearr_16397_16529[(1)] = (3));


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
});})(__16510,c__16170__auto___16523,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async))
;
return ((function (__16510,switch__16079__auto__,c__16170__auto___16523,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0 = (function (){
var statearr_16398 = [null,null,null,null,null,null,null];
(statearr_16398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__);

(statearr_16398[(1)] = (1));

return statearr_16398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1 = (function (state_16390){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16399){if((e16399 instanceof Object)){
var ex__16083__auto__ = e16399;
var statearr_16400_16530 = state_16390;
(statearr_16400_16530[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16531 = state_16390;
state_16390 = G__16531;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = function(state_16390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1.call(this,state_16390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__;
})()
;})(__16510,switch__16079__auto__,c__16170__auto___16523,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async))
})();
var state__16172__auto__ = (function (){var statearr_16401 = f__16171__auto__.call(null);
(statearr_16401[(6)] = c__16170__auto___16523);

return statearr_16401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(__16510,c__16170__auto___16523,G__16353_16511,G__16353_16512__$1,n__4408__auto___16509,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16353_16512__$1)].join('')));

}

var G__16532 = (__16510 + (1));
__16510 = G__16532;
continue;
} else {
}
break;
}

var c__16170__auto___16533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___16533,jobs,results,process,async){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___16533,jobs,results,process,async){
return (function (state_16423){
var state_val_16424 = (state_16423[(1)]);
if((state_val_16424 === (1))){
var state_16423__$1 = state_16423;
var statearr_16425_16534 = state_16423__$1;
(statearr_16425_16534[(2)] = null);

(statearr_16425_16534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (2))){
var state_16423__$1 = state_16423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16423__$1,(4),from);
} else {
if((state_val_16424 === (3))){
var inst_16421 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16423__$1,inst_16421);
} else {
if((state_val_16424 === (4))){
var inst_16404 = (state_16423[(7)]);
var inst_16404__$1 = (state_16423[(2)]);
var inst_16405 = (inst_16404__$1 == null);
var state_16423__$1 = (function (){var statearr_16426 = state_16423;
(statearr_16426[(7)] = inst_16404__$1);

return statearr_16426;
})();
if(cljs.core.truth_(inst_16405)){
var statearr_16427_16535 = state_16423__$1;
(statearr_16427_16535[(1)] = (5));

} else {
var statearr_16428_16536 = state_16423__$1;
(statearr_16428_16536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (5))){
var inst_16407 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16423__$1 = state_16423;
var statearr_16429_16537 = state_16423__$1;
(statearr_16429_16537[(2)] = inst_16407);

(statearr_16429_16537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (6))){
var inst_16409 = (state_16423[(8)]);
var inst_16404 = (state_16423[(7)]);
var inst_16409__$1 = cljs.core.async.chan.call(null,(1));
var inst_16410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16411 = [inst_16404,inst_16409__$1];
var inst_16412 = (new cljs.core.PersistentVector(null,2,(5),inst_16410,inst_16411,null));
var state_16423__$1 = (function (){var statearr_16430 = state_16423;
(statearr_16430[(8)] = inst_16409__$1);

return statearr_16430;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16423__$1,(8),jobs,inst_16412);
} else {
if((state_val_16424 === (7))){
var inst_16419 = (state_16423[(2)]);
var state_16423__$1 = state_16423;
var statearr_16431_16538 = state_16423__$1;
(statearr_16431_16538[(2)] = inst_16419);

(statearr_16431_16538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16424 === (8))){
var inst_16409 = (state_16423[(8)]);
var inst_16414 = (state_16423[(2)]);
var state_16423__$1 = (function (){var statearr_16432 = state_16423;
(statearr_16432[(9)] = inst_16414);

return statearr_16432;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16423__$1,(9),results,inst_16409);
} else {
if((state_val_16424 === (9))){
var inst_16416 = (state_16423[(2)]);
var state_16423__$1 = (function (){var statearr_16433 = state_16423;
(statearr_16433[(10)] = inst_16416);

return statearr_16433;
})();
var statearr_16434_16539 = state_16423__$1;
(statearr_16434_16539[(2)] = null);

(statearr_16434_16539[(1)] = (2));


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
});})(c__16170__auto___16533,jobs,results,process,async))
;
return ((function (switch__16079__auto__,c__16170__auto___16533,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0 = (function (){
var statearr_16435 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__);

(statearr_16435[(1)] = (1));

return statearr_16435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1 = (function (state_16423){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16436){if((e16436 instanceof Object)){
var ex__16083__auto__ = e16436;
var statearr_16437_16540 = state_16423;
(statearr_16437_16540[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16541 = state_16423;
state_16423 = G__16541;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = function(state_16423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1.call(this,state_16423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___16533,jobs,results,process,async))
})();
var state__16172__auto__ = (function (){var statearr_16438 = f__16171__auto__.call(null);
(statearr_16438[(6)] = c__16170__auto___16533);

return statearr_16438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___16533,jobs,results,process,async))
);


var c__16170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto__,jobs,results,process,async){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto__,jobs,results,process,async){
return (function (state_16476){
var state_val_16477 = (state_16476[(1)]);
if((state_val_16477 === (7))){
var inst_16472 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16478_16542 = state_16476__$1;
(statearr_16478_16542[(2)] = inst_16472);

(statearr_16478_16542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (20))){
var state_16476__$1 = state_16476;
var statearr_16479_16543 = state_16476__$1;
(statearr_16479_16543[(2)] = null);

(statearr_16479_16543[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (1))){
var state_16476__$1 = state_16476;
var statearr_16480_16544 = state_16476__$1;
(statearr_16480_16544[(2)] = null);

(statearr_16480_16544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (4))){
var inst_16441 = (state_16476[(7)]);
var inst_16441__$1 = (state_16476[(2)]);
var inst_16442 = (inst_16441__$1 == null);
var state_16476__$1 = (function (){var statearr_16481 = state_16476;
(statearr_16481[(7)] = inst_16441__$1);

return statearr_16481;
})();
if(cljs.core.truth_(inst_16442)){
var statearr_16482_16545 = state_16476__$1;
(statearr_16482_16545[(1)] = (5));

} else {
var statearr_16483_16546 = state_16476__$1;
(statearr_16483_16546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (15))){
var inst_16454 = (state_16476[(8)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16476__$1,(18),to,inst_16454);
} else {
if((state_val_16477 === (21))){
var inst_16467 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16484_16547 = state_16476__$1;
(statearr_16484_16547[(2)] = inst_16467);

(statearr_16484_16547[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (13))){
var inst_16469 = (state_16476[(2)]);
var state_16476__$1 = (function (){var statearr_16485 = state_16476;
(statearr_16485[(9)] = inst_16469);

return statearr_16485;
})();
var statearr_16486_16548 = state_16476__$1;
(statearr_16486_16548[(2)] = null);

(statearr_16486_16548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (6))){
var inst_16441 = (state_16476[(7)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16476__$1,(11),inst_16441);
} else {
if((state_val_16477 === (17))){
var inst_16462 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
if(cljs.core.truth_(inst_16462)){
var statearr_16487_16549 = state_16476__$1;
(statearr_16487_16549[(1)] = (19));

} else {
var statearr_16488_16550 = state_16476__$1;
(statearr_16488_16550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (3))){
var inst_16474 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16476__$1,inst_16474);
} else {
if((state_val_16477 === (12))){
var inst_16451 = (state_16476[(10)]);
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16476__$1,(14),inst_16451);
} else {
if((state_val_16477 === (2))){
var state_16476__$1 = state_16476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16476__$1,(4),results);
} else {
if((state_val_16477 === (19))){
var state_16476__$1 = state_16476;
var statearr_16489_16551 = state_16476__$1;
(statearr_16489_16551[(2)] = null);

(statearr_16489_16551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (11))){
var inst_16451 = (state_16476[(2)]);
var state_16476__$1 = (function (){var statearr_16490 = state_16476;
(statearr_16490[(10)] = inst_16451);

return statearr_16490;
})();
var statearr_16491_16552 = state_16476__$1;
(statearr_16491_16552[(2)] = null);

(statearr_16491_16552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (9))){
var state_16476__$1 = state_16476;
var statearr_16492_16553 = state_16476__$1;
(statearr_16492_16553[(2)] = null);

(statearr_16492_16553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (5))){
var state_16476__$1 = state_16476;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16493_16554 = state_16476__$1;
(statearr_16493_16554[(1)] = (8));

} else {
var statearr_16494_16555 = state_16476__$1;
(statearr_16494_16555[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (14))){
var inst_16454 = (state_16476[(8)]);
var inst_16456 = (state_16476[(11)]);
var inst_16454__$1 = (state_16476[(2)]);
var inst_16455 = (inst_16454__$1 == null);
var inst_16456__$1 = cljs.core.not.call(null,inst_16455);
var state_16476__$1 = (function (){var statearr_16495 = state_16476;
(statearr_16495[(8)] = inst_16454__$1);

(statearr_16495[(11)] = inst_16456__$1);

return statearr_16495;
})();
if(inst_16456__$1){
var statearr_16496_16556 = state_16476__$1;
(statearr_16496_16556[(1)] = (15));

} else {
var statearr_16497_16557 = state_16476__$1;
(statearr_16497_16557[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (16))){
var inst_16456 = (state_16476[(11)]);
var state_16476__$1 = state_16476;
var statearr_16498_16558 = state_16476__$1;
(statearr_16498_16558[(2)] = inst_16456);

(statearr_16498_16558[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (10))){
var inst_16448 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16499_16559 = state_16476__$1;
(statearr_16499_16559[(2)] = inst_16448);

(statearr_16499_16559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (18))){
var inst_16459 = (state_16476[(2)]);
var state_16476__$1 = state_16476;
var statearr_16500_16560 = state_16476__$1;
(statearr_16500_16560[(2)] = inst_16459);

(statearr_16500_16560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16477 === (8))){
var inst_16445 = cljs.core.async.close_BANG_.call(null,to);
var state_16476__$1 = state_16476;
var statearr_16501_16561 = state_16476__$1;
(statearr_16501_16561[(2)] = inst_16445);

(statearr_16501_16561[(1)] = (10));


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
});})(c__16170__auto__,jobs,results,process,async))
;
return ((function (switch__16079__auto__,c__16170__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0 = (function (){
var statearr_16502 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__);

(statearr_16502[(1)] = (1));

return statearr_16502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1 = (function (state_16476){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16503){if((e16503 instanceof Object)){
var ex__16083__auto__ = e16503;
var statearr_16504_16562 = state_16476;
(statearr_16504_16562[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16563 = state_16476;
state_16476 = G__16563;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__ = function(state_16476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1.call(this,state_16476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto__,jobs,results,process,async))
})();
var state__16172__auto__ = (function (){var statearr_16505 = f__16171__auto__.call(null);
(statearr_16505[(6)] = c__16170__auto__);

return statearr_16505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto__,jobs,results,process,async))
);

return c__16170__auto__;
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
var G__16565 = arguments.length;
switch (G__16565) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16568 = arguments.length;
switch (G__16568) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__16571 = arguments.length;
switch (G__16571) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16170__auto___16620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___16620,tc,fc){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___16620,tc,fc){
return (function (state_16597){
var state_val_16598 = (state_16597[(1)]);
if((state_val_16598 === (7))){
var inst_16593 = (state_16597[(2)]);
var state_16597__$1 = state_16597;
var statearr_16599_16621 = state_16597__$1;
(statearr_16599_16621[(2)] = inst_16593);

(statearr_16599_16621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (1))){
var state_16597__$1 = state_16597;
var statearr_16600_16622 = state_16597__$1;
(statearr_16600_16622[(2)] = null);

(statearr_16600_16622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (4))){
var inst_16574 = (state_16597[(7)]);
var inst_16574__$1 = (state_16597[(2)]);
var inst_16575 = (inst_16574__$1 == null);
var state_16597__$1 = (function (){var statearr_16601 = state_16597;
(statearr_16601[(7)] = inst_16574__$1);

return statearr_16601;
})();
if(cljs.core.truth_(inst_16575)){
var statearr_16602_16623 = state_16597__$1;
(statearr_16602_16623[(1)] = (5));

} else {
var statearr_16603_16624 = state_16597__$1;
(statearr_16603_16624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (13))){
var state_16597__$1 = state_16597;
var statearr_16604_16625 = state_16597__$1;
(statearr_16604_16625[(2)] = null);

(statearr_16604_16625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (6))){
var inst_16574 = (state_16597[(7)]);
var inst_16580 = p.call(null,inst_16574);
var state_16597__$1 = state_16597;
if(cljs.core.truth_(inst_16580)){
var statearr_16605_16626 = state_16597__$1;
(statearr_16605_16626[(1)] = (9));

} else {
var statearr_16606_16627 = state_16597__$1;
(statearr_16606_16627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (3))){
var inst_16595 = (state_16597[(2)]);
var state_16597__$1 = state_16597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16597__$1,inst_16595);
} else {
if((state_val_16598 === (12))){
var state_16597__$1 = state_16597;
var statearr_16607_16628 = state_16597__$1;
(statearr_16607_16628[(2)] = null);

(statearr_16607_16628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (2))){
var state_16597__$1 = state_16597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16597__$1,(4),ch);
} else {
if((state_val_16598 === (11))){
var inst_16574 = (state_16597[(7)]);
var inst_16584 = (state_16597[(2)]);
var state_16597__$1 = state_16597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16597__$1,(8),inst_16584,inst_16574);
} else {
if((state_val_16598 === (9))){
var state_16597__$1 = state_16597;
var statearr_16608_16629 = state_16597__$1;
(statearr_16608_16629[(2)] = tc);

(statearr_16608_16629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (5))){
var inst_16577 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16578 = cljs.core.async.close_BANG_.call(null,fc);
var state_16597__$1 = (function (){var statearr_16609 = state_16597;
(statearr_16609[(8)] = inst_16577);

return statearr_16609;
})();
var statearr_16610_16630 = state_16597__$1;
(statearr_16610_16630[(2)] = inst_16578);

(statearr_16610_16630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (14))){
var inst_16591 = (state_16597[(2)]);
var state_16597__$1 = state_16597;
var statearr_16611_16631 = state_16597__$1;
(statearr_16611_16631[(2)] = inst_16591);

(statearr_16611_16631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (10))){
var state_16597__$1 = state_16597;
var statearr_16612_16632 = state_16597__$1;
(statearr_16612_16632[(2)] = fc);

(statearr_16612_16632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16598 === (8))){
var inst_16586 = (state_16597[(2)]);
var state_16597__$1 = state_16597;
if(cljs.core.truth_(inst_16586)){
var statearr_16613_16633 = state_16597__$1;
(statearr_16613_16633[(1)] = (12));

} else {
var statearr_16614_16634 = state_16597__$1;
(statearr_16614_16634[(1)] = (13));

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
});})(c__16170__auto___16620,tc,fc))
;
return ((function (switch__16079__auto__,c__16170__auto___16620,tc,fc){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_16615 = [null,null,null,null,null,null,null,null,null];
(statearr_16615[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_16615[(1)] = (1));

return statearr_16615;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_16597){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16616){if((e16616 instanceof Object)){
var ex__16083__auto__ = e16616;
var statearr_16617_16635 = state_16597;
(statearr_16617_16635[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16636 = state_16597;
state_16597 = G__16636;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_16597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_16597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___16620,tc,fc))
})();
var state__16172__auto__ = (function (){var statearr_16618 = f__16171__auto__.call(null);
(statearr_16618[(6)] = c__16170__auto___16620);

return statearr_16618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___16620,tc,fc))
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
var c__16170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto__){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto__){
return (function (state_16657){
var state_val_16658 = (state_16657[(1)]);
if((state_val_16658 === (7))){
var inst_16653 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16659_16677 = state_16657__$1;
(statearr_16659_16677[(2)] = inst_16653);

(statearr_16659_16677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (1))){
var inst_16637 = init;
var state_16657__$1 = (function (){var statearr_16660 = state_16657;
(statearr_16660[(7)] = inst_16637);

return statearr_16660;
})();
var statearr_16661_16678 = state_16657__$1;
(statearr_16661_16678[(2)] = null);

(statearr_16661_16678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (4))){
var inst_16640 = (state_16657[(8)]);
var inst_16640__$1 = (state_16657[(2)]);
var inst_16641 = (inst_16640__$1 == null);
var state_16657__$1 = (function (){var statearr_16662 = state_16657;
(statearr_16662[(8)] = inst_16640__$1);

return statearr_16662;
})();
if(cljs.core.truth_(inst_16641)){
var statearr_16663_16679 = state_16657__$1;
(statearr_16663_16679[(1)] = (5));

} else {
var statearr_16664_16680 = state_16657__$1;
(statearr_16664_16680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (6))){
var inst_16640 = (state_16657[(8)]);
var inst_16637 = (state_16657[(7)]);
var inst_16644 = (state_16657[(9)]);
var inst_16644__$1 = f.call(null,inst_16637,inst_16640);
var inst_16645 = cljs.core.reduced_QMARK_.call(null,inst_16644__$1);
var state_16657__$1 = (function (){var statearr_16665 = state_16657;
(statearr_16665[(9)] = inst_16644__$1);

return statearr_16665;
})();
if(inst_16645){
var statearr_16666_16681 = state_16657__$1;
(statearr_16666_16681[(1)] = (8));

} else {
var statearr_16667_16682 = state_16657__$1;
(statearr_16667_16682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (3))){
var inst_16655 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16657__$1,inst_16655);
} else {
if((state_val_16658 === (2))){
var state_16657__$1 = state_16657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16657__$1,(4),ch);
} else {
if((state_val_16658 === (9))){
var inst_16644 = (state_16657[(9)]);
var inst_16637 = inst_16644;
var state_16657__$1 = (function (){var statearr_16668 = state_16657;
(statearr_16668[(7)] = inst_16637);

return statearr_16668;
})();
var statearr_16669_16683 = state_16657__$1;
(statearr_16669_16683[(2)] = null);

(statearr_16669_16683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (5))){
var inst_16637 = (state_16657[(7)]);
var state_16657__$1 = state_16657;
var statearr_16670_16684 = state_16657__$1;
(statearr_16670_16684[(2)] = inst_16637);

(statearr_16670_16684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (10))){
var inst_16651 = (state_16657[(2)]);
var state_16657__$1 = state_16657;
var statearr_16671_16685 = state_16657__$1;
(statearr_16671_16685[(2)] = inst_16651);

(statearr_16671_16685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16658 === (8))){
var inst_16644 = (state_16657[(9)]);
var inst_16647 = cljs.core.deref.call(null,inst_16644);
var state_16657__$1 = state_16657;
var statearr_16672_16686 = state_16657__$1;
(statearr_16672_16686[(2)] = inst_16647);

(statearr_16672_16686[(1)] = (10));


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
});})(c__16170__auto__))
;
return ((function (switch__16079__auto__,c__16170__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16080__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16080__auto____0 = (function (){
var statearr_16673 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16673[(0)] = cljs$core$async$reduce_$_state_machine__16080__auto__);

(statearr_16673[(1)] = (1));

return statearr_16673;
});
var cljs$core$async$reduce_$_state_machine__16080__auto____1 = (function (state_16657){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16674){if((e16674 instanceof Object)){
var ex__16083__auto__ = e16674;
var statearr_16675_16687 = state_16657;
(statearr_16675_16687[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16688 = state_16657;
state_16657 = G__16688;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16080__auto__ = function(state_16657){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16080__auto____1.call(this,state_16657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16080__auto____0;
cljs$core$async$reduce_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16080__auto____1;
return cljs$core$async$reduce_$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto__))
})();
var state__16172__auto__ = (function (){var statearr_16676 = f__16171__auto__.call(null);
(statearr_16676[(6)] = c__16170__auto__);

return statearr_16676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto__))
);

return c__16170__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto__,f__$1){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto__,f__$1){
return (function (state_16694){
var state_val_16695 = (state_16694[(1)]);
if((state_val_16695 === (1))){
var inst_16689 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16694__$1 = state_16694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16694__$1,(2),inst_16689);
} else {
if((state_val_16695 === (2))){
var inst_16691 = (state_16694[(2)]);
var inst_16692 = f__$1.call(null,inst_16691);
var state_16694__$1 = state_16694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16694__$1,inst_16692);
} else {
return null;
}
}
});})(c__16170__auto__,f__$1))
;
return ((function (switch__16079__auto__,c__16170__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16080__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16080__auto____0 = (function (){
var statearr_16696 = [null,null,null,null,null,null,null];
(statearr_16696[(0)] = cljs$core$async$transduce_$_state_machine__16080__auto__);

(statearr_16696[(1)] = (1));

return statearr_16696;
});
var cljs$core$async$transduce_$_state_machine__16080__auto____1 = (function (state_16694){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16697){if((e16697 instanceof Object)){
var ex__16083__auto__ = e16697;
var statearr_16698_16700 = state_16694;
(statearr_16698_16700[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16701 = state_16694;
state_16694 = G__16701;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16080__auto__ = function(state_16694){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16080__auto____1.call(this,state_16694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16080__auto____0;
cljs$core$async$transduce_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16080__auto____1;
return cljs$core$async$transduce_$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto__,f__$1))
})();
var state__16172__auto__ = (function (){var statearr_16699 = f__16171__auto__.call(null);
(statearr_16699[(6)] = c__16170__auto__);

return statearr_16699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto__,f__$1))
);

return c__16170__auto__;
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
var G__16703 = arguments.length;
switch (G__16703) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto__){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto__){
return (function (state_16728){
var state_val_16729 = (state_16728[(1)]);
if((state_val_16729 === (7))){
var inst_16710 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16730_16751 = state_16728__$1;
(statearr_16730_16751[(2)] = inst_16710);

(statearr_16730_16751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (1))){
var inst_16704 = cljs.core.seq.call(null,coll);
var inst_16705 = inst_16704;
var state_16728__$1 = (function (){var statearr_16731 = state_16728;
(statearr_16731[(7)] = inst_16705);

return statearr_16731;
})();
var statearr_16732_16752 = state_16728__$1;
(statearr_16732_16752[(2)] = null);

(statearr_16732_16752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (4))){
var inst_16705 = (state_16728[(7)]);
var inst_16708 = cljs.core.first.call(null,inst_16705);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16728__$1,(7),ch,inst_16708);
} else {
if((state_val_16729 === (13))){
var inst_16722 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16733_16753 = state_16728__$1;
(statearr_16733_16753[(2)] = inst_16722);

(statearr_16733_16753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (6))){
var inst_16713 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
if(cljs.core.truth_(inst_16713)){
var statearr_16734_16754 = state_16728__$1;
(statearr_16734_16754[(1)] = (8));

} else {
var statearr_16735_16755 = state_16728__$1;
(statearr_16735_16755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (3))){
var inst_16726 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16728__$1,inst_16726);
} else {
if((state_val_16729 === (12))){
var state_16728__$1 = state_16728;
var statearr_16736_16756 = state_16728__$1;
(statearr_16736_16756[(2)] = null);

(statearr_16736_16756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (2))){
var inst_16705 = (state_16728[(7)]);
var state_16728__$1 = state_16728;
if(cljs.core.truth_(inst_16705)){
var statearr_16737_16757 = state_16728__$1;
(statearr_16737_16757[(1)] = (4));

} else {
var statearr_16738_16758 = state_16728__$1;
(statearr_16738_16758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (11))){
var inst_16719 = cljs.core.async.close_BANG_.call(null,ch);
var state_16728__$1 = state_16728;
var statearr_16739_16759 = state_16728__$1;
(statearr_16739_16759[(2)] = inst_16719);

(statearr_16739_16759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (9))){
var state_16728__$1 = state_16728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16740_16760 = state_16728__$1;
(statearr_16740_16760[(1)] = (11));

} else {
var statearr_16741_16761 = state_16728__$1;
(statearr_16741_16761[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (5))){
var inst_16705 = (state_16728[(7)]);
var state_16728__$1 = state_16728;
var statearr_16742_16762 = state_16728__$1;
(statearr_16742_16762[(2)] = inst_16705);

(statearr_16742_16762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (10))){
var inst_16724 = (state_16728[(2)]);
var state_16728__$1 = state_16728;
var statearr_16743_16763 = state_16728__$1;
(statearr_16743_16763[(2)] = inst_16724);

(statearr_16743_16763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16729 === (8))){
var inst_16705 = (state_16728[(7)]);
var inst_16715 = cljs.core.next.call(null,inst_16705);
var inst_16705__$1 = inst_16715;
var state_16728__$1 = (function (){var statearr_16744 = state_16728;
(statearr_16744[(7)] = inst_16705__$1);

return statearr_16744;
})();
var statearr_16745_16764 = state_16728__$1;
(statearr_16745_16764[(2)] = null);

(statearr_16745_16764[(1)] = (2));


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
});})(c__16170__auto__))
;
return ((function (switch__16079__auto__,c__16170__auto__){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_16746 = [null,null,null,null,null,null,null,null];
(statearr_16746[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_16746[(1)] = (1));

return statearr_16746;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_16728){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16747){if((e16747 instanceof Object)){
var ex__16083__auto__ = e16747;
var statearr_16748_16765 = state_16728;
(statearr_16748_16765[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16766 = state_16728;
state_16728 = G__16766;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_16728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_16728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto__))
})();
var state__16172__auto__ = (function (){var statearr_16749 = f__16171__auto__.call(null);
(statearr_16749[(6)] = c__16170__auto__);

return statearr_16749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto__))
);

return c__16170__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16767 = (function (ch,cs,meta16768){
this.ch = ch;
this.cs = cs;
this.meta16768 = meta16768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16769,meta16768__$1){
var self__ = this;
var _16769__$1 = this;
return (new cljs.core.async.t_cljs$core$async16767(self__.ch,self__.cs,meta16768__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16769){
var self__ = this;
var _16769__$1 = this;
return self__.meta16768;
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16768","meta16768",477311017,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16767";

cljs.core.async.t_cljs$core$async16767.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16767");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16767.
 */
cljs.core.async.__GT_t_cljs$core$async16767 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16767(ch__$1,cs__$1,meta16768){
return (new cljs.core.async.t_cljs$core$async16767(ch__$1,cs__$1,meta16768));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16767(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16170__auto___16989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___16989,cs,m,dchan,dctr,done){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___16989,cs,m,dchan,dctr,done){
return (function (state_16904){
var state_val_16905 = (state_16904[(1)]);
if((state_val_16905 === (7))){
var inst_16900 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16906_16990 = state_16904__$1;
(statearr_16906_16990[(2)] = inst_16900);

(statearr_16906_16990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (20))){
var inst_16803 = (state_16904[(7)]);
var inst_16815 = cljs.core.first.call(null,inst_16803);
var inst_16816 = cljs.core.nth.call(null,inst_16815,(0),null);
var inst_16817 = cljs.core.nth.call(null,inst_16815,(1),null);
var state_16904__$1 = (function (){var statearr_16907 = state_16904;
(statearr_16907[(8)] = inst_16816);

return statearr_16907;
})();
if(cljs.core.truth_(inst_16817)){
var statearr_16908_16991 = state_16904__$1;
(statearr_16908_16991[(1)] = (22));

} else {
var statearr_16909_16992 = state_16904__$1;
(statearr_16909_16992[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (27))){
var inst_16847 = (state_16904[(9)]);
var inst_16852 = (state_16904[(10)]);
var inst_16772 = (state_16904[(11)]);
var inst_16845 = (state_16904[(12)]);
var inst_16852__$1 = cljs.core._nth.call(null,inst_16845,inst_16847);
var inst_16853 = cljs.core.async.put_BANG_.call(null,inst_16852__$1,inst_16772,done);
var state_16904__$1 = (function (){var statearr_16910 = state_16904;
(statearr_16910[(10)] = inst_16852__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16853)){
var statearr_16911_16993 = state_16904__$1;
(statearr_16911_16993[(1)] = (30));

} else {
var statearr_16912_16994 = state_16904__$1;
(statearr_16912_16994[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (1))){
var state_16904__$1 = state_16904;
var statearr_16913_16995 = state_16904__$1;
(statearr_16913_16995[(2)] = null);

(statearr_16913_16995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (24))){
var inst_16803 = (state_16904[(7)]);
var inst_16822 = (state_16904[(2)]);
var inst_16823 = cljs.core.next.call(null,inst_16803);
var inst_16781 = inst_16823;
var inst_16782 = null;
var inst_16783 = (0);
var inst_16784 = (0);
var state_16904__$1 = (function (){var statearr_16914 = state_16904;
(statearr_16914[(13)] = inst_16783);

(statearr_16914[(14)] = inst_16782);

(statearr_16914[(15)] = inst_16784);

(statearr_16914[(16)] = inst_16781);

(statearr_16914[(17)] = inst_16822);

return statearr_16914;
})();
var statearr_16915_16996 = state_16904__$1;
(statearr_16915_16996[(2)] = null);

(statearr_16915_16996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (39))){
var state_16904__$1 = state_16904;
var statearr_16919_16997 = state_16904__$1;
(statearr_16919_16997[(2)] = null);

(statearr_16919_16997[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (4))){
var inst_16772 = (state_16904[(11)]);
var inst_16772__$1 = (state_16904[(2)]);
var inst_16773 = (inst_16772__$1 == null);
var state_16904__$1 = (function (){var statearr_16920 = state_16904;
(statearr_16920[(11)] = inst_16772__$1);

return statearr_16920;
})();
if(cljs.core.truth_(inst_16773)){
var statearr_16921_16998 = state_16904__$1;
(statearr_16921_16998[(1)] = (5));

} else {
var statearr_16922_16999 = state_16904__$1;
(statearr_16922_16999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (15))){
var inst_16783 = (state_16904[(13)]);
var inst_16782 = (state_16904[(14)]);
var inst_16784 = (state_16904[(15)]);
var inst_16781 = (state_16904[(16)]);
var inst_16799 = (state_16904[(2)]);
var inst_16800 = (inst_16784 + (1));
var tmp16916 = inst_16783;
var tmp16917 = inst_16782;
var tmp16918 = inst_16781;
var inst_16781__$1 = tmp16918;
var inst_16782__$1 = tmp16917;
var inst_16783__$1 = tmp16916;
var inst_16784__$1 = inst_16800;
var state_16904__$1 = (function (){var statearr_16923 = state_16904;
(statearr_16923[(18)] = inst_16799);

(statearr_16923[(13)] = inst_16783__$1);

(statearr_16923[(14)] = inst_16782__$1);

(statearr_16923[(15)] = inst_16784__$1);

(statearr_16923[(16)] = inst_16781__$1);

return statearr_16923;
})();
var statearr_16924_17000 = state_16904__$1;
(statearr_16924_17000[(2)] = null);

(statearr_16924_17000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (21))){
var inst_16826 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16928_17001 = state_16904__$1;
(statearr_16928_17001[(2)] = inst_16826);

(statearr_16928_17001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (31))){
var inst_16852 = (state_16904[(10)]);
var inst_16856 = done.call(null,null);
var inst_16857 = cljs.core.async.untap_STAR_.call(null,m,inst_16852);
var state_16904__$1 = (function (){var statearr_16929 = state_16904;
(statearr_16929[(19)] = inst_16856);

return statearr_16929;
})();
var statearr_16930_17002 = state_16904__$1;
(statearr_16930_17002[(2)] = inst_16857);

(statearr_16930_17002[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (32))){
var inst_16847 = (state_16904[(9)]);
var inst_16846 = (state_16904[(20)]);
var inst_16845 = (state_16904[(12)]);
var inst_16844 = (state_16904[(21)]);
var inst_16859 = (state_16904[(2)]);
var inst_16860 = (inst_16847 + (1));
var tmp16925 = inst_16846;
var tmp16926 = inst_16845;
var tmp16927 = inst_16844;
var inst_16844__$1 = tmp16927;
var inst_16845__$1 = tmp16926;
var inst_16846__$1 = tmp16925;
var inst_16847__$1 = inst_16860;
var state_16904__$1 = (function (){var statearr_16931 = state_16904;
(statearr_16931[(9)] = inst_16847__$1);

(statearr_16931[(22)] = inst_16859);

(statearr_16931[(20)] = inst_16846__$1);

(statearr_16931[(12)] = inst_16845__$1);

(statearr_16931[(21)] = inst_16844__$1);

return statearr_16931;
})();
var statearr_16932_17003 = state_16904__$1;
(statearr_16932_17003[(2)] = null);

(statearr_16932_17003[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (40))){
var inst_16872 = (state_16904[(23)]);
var inst_16876 = done.call(null,null);
var inst_16877 = cljs.core.async.untap_STAR_.call(null,m,inst_16872);
var state_16904__$1 = (function (){var statearr_16933 = state_16904;
(statearr_16933[(24)] = inst_16876);

return statearr_16933;
})();
var statearr_16934_17004 = state_16904__$1;
(statearr_16934_17004[(2)] = inst_16877);

(statearr_16934_17004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (33))){
var inst_16863 = (state_16904[(25)]);
var inst_16865 = cljs.core.chunked_seq_QMARK_.call(null,inst_16863);
var state_16904__$1 = state_16904;
if(inst_16865){
var statearr_16935_17005 = state_16904__$1;
(statearr_16935_17005[(1)] = (36));

} else {
var statearr_16936_17006 = state_16904__$1;
(statearr_16936_17006[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (13))){
var inst_16793 = (state_16904[(26)]);
var inst_16796 = cljs.core.async.close_BANG_.call(null,inst_16793);
var state_16904__$1 = state_16904;
var statearr_16937_17007 = state_16904__$1;
(statearr_16937_17007[(2)] = inst_16796);

(statearr_16937_17007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (22))){
var inst_16816 = (state_16904[(8)]);
var inst_16819 = cljs.core.async.close_BANG_.call(null,inst_16816);
var state_16904__$1 = state_16904;
var statearr_16938_17008 = state_16904__$1;
(statearr_16938_17008[(2)] = inst_16819);

(statearr_16938_17008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (36))){
var inst_16863 = (state_16904[(25)]);
var inst_16867 = cljs.core.chunk_first.call(null,inst_16863);
var inst_16868 = cljs.core.chunk_rest.call(null,inst_16863);
var inst_16869 = cljs.core.count.call(null,inst_16867);
var inst_16844 = inst_16868;
var inst_16845 = inst_16867;
var inst_16846 = inst_16869;
var inst_16847 = (0);
var state_16904__$1 = (function (){var statearr_16939 = state_16904;
(statearr_16939[(9)] = inst_16847);

(statearr_16939[(20)] = inst_16846);

(statearr_16939[(12)] = inst_16845);

(statearr_16939[(21)] = inst_16844);

return statearr_16939;
})();
var statearr_16940_17009 = state_16904__$1;
(statearr_16940_17009[(2)] = null);

(statearr_16940_17009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (41))){
var inst_16863 = (state_16904[(25)]);
var inst_16879 = (state_16904[(2)]);
var inst_16880 = cljs.core.next.call(null,inst_16863);
var inst_16844 = inst_16880;
var inst_16845 = null;
var inst_16846 = (0);
var inst_16847 = (0);
var state_16904__$1 = (function (){var statearr_16941 = state_16904;
(statearr_16941[(27)] = inst_16879);

(statearr_16941[(9)] = inst_16847);

(statearr_16941[(20)] = inst_16846);

(statearr_16941[(12)] = inst_16845);

(statearr_16941[(21)] = inst_16844);

return statearr_16941;
})();
var statearr_16942_17010 = state_16904__$1;
(statearr_16942_17010[(2)] = null);

(statearr_16942_17010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (43))){
var state_16904__$1 = state_16904;
var statearr_16943_17011 = state_16904__$1;
(statearr_16943_17011[(2)] = null);

(statearr_16943_17011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (29))){
var inst_16888 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16944_17012 = state_16904__$1;
(statearr_16944_17012[(2)] = inst_16888);

(statearr_16944_17012[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (44))){
var inst_16897 = (state_16904[(2)]);
var state_16904__$1 = (function (){var statearr_16945 = state_16904;
(statearr_16945[(28)] = inst_16897);

return statearr_16945;
})();
var statearr_16946_17013 = state_16904__$1;
(statearr_16946_17013[(2)] = null);

(statearr_16946_17013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (6))){
var inst_16836 = (state_16904[(29)]);
var inst_16835 = cljs.core.deref.call(null,cs);
var inst_16836__$1 = cljs.core.keys.call(null,inst_16835);
var inst_16837 = cljs.core.count.call(null,inst_16836__$1);
var inst_16838 = cljs.core.reset_BANG_.call(null,dctr,inst_16837);
var inst_16843 = cljs.core.seq.call(null,inst_16836__$1);
var inst_16844 = inst_16843;
var inst_16845 = null;
var inst_16846 = (0);
var inst_16847 = (0);
var state_16904__$1 = (function (){var statearr_16947 = state_16904;
(statearr_16947[(9)] = inst_16847);

(statearr_16947[(20)] = inst_16846);

(statearr_16947[(12)] = inst_16845);

(statearr_16947[(21)] = inst_16844);

(statearr_16947[(30)] = inst_16838);

(statearr_16947[(29)] = inst_16836__$1);

return statearr_16947;
})();
var statearr_16948_17014 = state_16904__$1;
(statearr_16948_17014[(2)] = null);

(statearr_16948_17014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (28))){
var inst_16863 = (state_16904[(25)]);
var inst_16844 = (state_16904[(21)]);
var inst_16863__$1 = cljs.core.seq.call(null,inst_16844);
var state_16904__$1 = (function (){var statearr_16949 = state_16904;
(statearr_16949[(25)] = inst_16863__$1);

return statearr_16949;
})();
if(inst_16863__$1){
var statearr_16950_17015 = state_16904__$1;
(statearr_16950_17015[(1)] = (33));

} else {
var statearr_16951_17016 = state_16904__$1;
(statearr_16951_17016[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (25))){
var inst_16847 = (state_16904[(9)]);
var inst_16846 = (state_16904[(20)]);
var inst_16849 = (inst_16847 < inst_16846);
var inst_16850 = inst_16849;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16850)){
var statearr_16952_17017 = state_16904__$1;
(statearr_16952_17017[(1)] = (27));

} else {
var statearr_16953_17018 = state_16904__$1;
(statearr_16953_17018[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (34))){
var state_16904__$1 = state_16904;
var statearr_16954_17019 = state_16904__$1;
(statearr_16954_17019[(2)] = null);

(statearr_16954_17019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (17))){
var state_16904__$1 = state_16904;
var statearr_16955_17020 = state_16904__$1;
(statearr_16955_17020[(2)] = null);

(statearr_16955_17020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (3))){
var inst_16902 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16904__$1,inst_16902);
} else {
if((state_val_16905 === (12))){
var inst_16831 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16956_17021 = state_16904__$1;
(statearr_16956_17021[(2)] = inst_16831);

(statearr_16956_17021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (2))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16904__$1,(4),ch);
} else {
if((state_val_16905 === (23))){
var state_16904__$1 = state_16904;
var statearr_16957_17022 = state_16904__$1;
(statearr_16957_17022[(2)] = null);

(statearr_16957_17022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (35))){
var inst_16886 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16958_17023 = state_16904__$1;
(statearr_16958_17023[(2)] = inst_16886);

(statearr_16958_17023[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (19))){
var inst_16803 = (state_16904[(7)]);
var inst_16807 = cljs.core.chunk_first.call(null,inst_16803);
var inst_16808 = cljs.core.chunk_rest.call(null,inst_16803);
var inst_16809 = cljs.core.count.call(null,inst_16807);
var inst_16781 = inst_16808;
var inst_16782 = inst_16807;
var inst_16783 = inst_16809;
var inst_16784 = (0);
var state_16904__$1 = (function (){var statearr_16959 = state_16904;
(statearr_16959[(13)] = inst_16783);

(statearr_16959[(14)] = inst_16782);

(statearr_16959[(15)] = inst_16784);

(statearr_16959[(16)] = inst_16781);

return statearr_16959;
})();
var statearr_16960_17024 = state_16904__$1;
(statearr_16960_17024[(2)] = null);

(statearr_16960_17024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (11))){
var inst_16803 = (state_16904[(7)]);
var inst_16781 = (state_16904[(16)]);
var inst_16803__$1 = cljs.core.seq.call(null,inst_16781);
var state_16904__$1 = (function (){var statearr_16961 = state_16904;
(statearr_16961[(7)] = inst_16803__$1);

return statearr_16961;
})();
if(inst_16803__$1){
var statearr_16962_17025 = state_16904__$1;
(statearr_16962_17025[(1)] = (16));

} else {
var statearr_16963_17026 = state_16904__$1;
(statearr_16963_17026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (9))){
var inst_16833 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16964_17027 = state_16904__$1;
(statearr_16964_17027[(2)] = inst_16833);

(statearr_16964_17027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (5))){
var inst_16779 = cljs.core.deref.call(null,cs);
var inst_16780 = cljs.core.seq.call(null,inst_16779);
var inst_16781 = inst_16780;
var inst_16782 = null;
var inst_16783 = (0);
var inst_16784 = (0);
var state_16904__$1 = (function (){var statearr_16965 = state_16904;
(statearr_16965[(13)] = inst_16783);

(statearr_16965[(14)] = inst_16782);

(statearr_16965[(15)] = inst_16784);

(statearr_16965[(16)] = inst_16781);

return statearr_16965;
})();
var statearr_16966_17028 = state_16904__$1;
(statearr_16966_17028[(2)] = null);

(statearr_16966_17028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (14))){
var state_16904__$1 = state_16904;
var statearr_16967_17029 = state_16904__$1;
(statearr_16967_17029[(2)] = null);

(statearr_16967_17029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (45))){
var inst_16894 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16968_17030 = state_16904__$1;
(statearr_16968_17030[(2)] = inst_16894);

(statearr_16968_17030[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (26))){
var inst_16836 = (state_16904[(29)]);
var inst_16890 = (state_16904[(2)]);
var inst_16891 = cljs.core.seq.call(null,inst_16836);
var state_16904__$1 = (function (){var statearr_16969 = state_16904;
(statearr_16969[(31)] = inst_16890);

return statearr_16969;
})();
if(inst_16891){
var statearr_16970_17031 = state_16904__$1;
(statearr_16970_17031[(1)] = (42));

} else {
var statearr_16971_17032 = state_16904__$1;
(statearr_16971_17032[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (16))){
var inst_16803 = (state_16904[(7)]);
var inst_16805 = cljs.core.chunked_seq_QMARK_.call(null,inst_16803);
var state_16904__$1 = state_16904;
if(inst_16805){
var statearr_16972_17033 = state_16904__$1;
(statearr_16972_17033[(1)] = (19));

} else {
var statearr_16973_17034 = state_16904__$1;
(statearr_16973_17034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (38))){
var inst_16883 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16974_17035 = state_16904__$1;
(statearr_16974_17035[(2)] = inst_16883);

(statearr_16974_17035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (30))){
var state_16904__$1 = state_16904;
var statearr_16975_17036 = state_16904__$1;
(statearr_16975_17036[(2)] = null);

(statearr_16975_17036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (10))){
var inst_16782 = (state_16904[(14)]);
var inst_16784 = (state_16904[(15)]);
var inst_16792 = cljs.core._nth.call(null,inst_16782,inst_16784);
var inst_16793 = cljs.core.nth.call(null,inst_16792,(0),null);
var inst_16794 = cljs.core.nth.call(null,inst_16792,(1),null);
var state_16904__$1 = (function (){var statearr_16976 = state_16904;
(statearr_16976[(26)] = inst_16793);

return statearr_16976;
})();
if(cljs.core.truth_(inst_16794)){
var statearr_16977_17037 = state_16904__$1;
(statearr_16977_17037[(1)] = (13));

} else {
var statearr_16978_17038 = state_16904__$1;
(statearr_16978_17038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (18))){
var inst_16829 = (state_16904[(2)]);
var state_16904__$1 = state_16904;
var statearr_16979_17039 = state_16904__$1;
(statearr_16979_17039[(2)] = inst_16829);

(statearr_16979_17039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (42))){
var state_16904__$1 = state_16904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16904__$1,(45),dchan);
} else {
if((state_val_16905 === (37))){
var inst_16863 = (state_16904[(25)]);
var inst_16772 = (state_16904[(11)]);
var inst_16872 = (state_16904[(23)]);
var inst_16872__$1 = cljs.core.first.call(null,inst_16863);
var inst_16873 = cljs.core.async.put_BANG_.call(null,inst_16872__$1,inst_16772,done);
var state_16904__$1 = (function (){var statearr_16980 = state_16904;
(statearr_16980[(23)] = inst_16872__$1);

return statearr_16980;
})();
if(cljs.core.truth_(inst_16873)){
var statearr_16981_17040 = state_16904__$1;
(statearr_16981_17040[(1)] = (39));

} else {
var statearr_16982_17041 = state_16904__$1;
(statearr_16982_17041[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16905 === (8))){
var inst_16783 = (state_16904[(13)]);
var inst_16784 = (state_16904[(15)]);
var inst_16786 = (inst_16784 < inst_16783);
var inst_16787 = inst_16786;
var state_16904__$1 = state_16904;
if(cljs.core.truth_(inst_16787)){
var statearr_16983_17042 = state_16904__$1;
(statearr_16983_17042[(1)] = (10));

} else {
var statearr_16984_17043 = state_16904__$1;
(statearr_16984_17043[(1)] = (11));

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
});})(c__16170__auto___16989,cs,m,dchan,dctr,done))
;
return ((function (switch__16079__auto__,c__16170__auto___16989,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16080__auto__ = null;
var cljs$core$async$mult_$_state_machine__16080__auto____0 = (function (){
var statearr_16985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16985[(0)] = cljs$core$async$mult_$_state_machine__16080__auto__);

(statearr_16985[(1)] = (1));

return statearr_16985;
});
var cljs$core$async$mult_$_state_machine__16080__auto____1 = (function (state_16904){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_16904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e16986){if((e16986 instanceof Object)){
var ex__16083__auto__ = e16986;
var statearr_16987_17044 = state_16904;
(statearr_16987_17044[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17045 = state_16904;
state_16904 = G__17045;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16080__auto__ = function(state_16904){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16080__auto____1.call(this,state_16904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16080__auto____0;
cljs$core$async$mult_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16080__auto____1;
return cljs$core$async$mult_$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___16989,cs,m,dchan,dctr,done))
})();
var state__16172__auto__ = (function (){var statearr_16988 = f__16171__auto__.call(null);
(statearr_16988[(6)] = c__16170__auto___16989);

return statearr_16988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___16989,cs,m,dchan,dctr,done))
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
var G__17047 = arguments.length;
switch (G__17047) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17059 = arguments.length;
var i__4532__auto___17060 = (0);
while(true){
if((i__4532__auto___17060 < len__4531__auto___17059)){
args__4534__auto__.push((arguments[i__4532__auto___17060]));

var G__17061 = (i__4532__auto___17060 + (1));
i__4532__auto___17060 = G__17061;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17053){
var map__17054 = p__17053;
var map__17054__$1 = ((((!((map__17054 == null)))?(((((map__17054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17054):map__17054);
var opts = map__17054__$1;
var statearr_17056_17062 = state;
(statearr_17056_17062[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__17054,map__17054__$1,opts){
return (function (val){
var statearr_17057_17063 = state;
(statearr_17057_17063[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17054,map__17054__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_17058_17064 = state;
(statearr_17058_17064[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17049){
var G__17050 = cljs.core.first.call(null,seq17049);
var seq17049__$1 = cljs.core.next.call(null,seq17049);
var G__17051 = cljs.core.first.call(null,seq17049__$1);
var seq17049__$2 = cljs.core.next.call(null,seq17049__$1);
var G__17052 = cljs.core.first.call(null,seq17049__$2);
var seq17049__$3 = cljs.core.next.call(null,seq17049__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17050,G__17051,G__17052,seq17049__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17065 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17066){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17066 = meta17066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17067,meta17066__$1){
var self__ = this;
var _17067__$1 = this;
return (new cljs.core.async.t_cljs$core$async17065(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17066__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17067){
var self__ = this;
var _17067__$1 = this;
return self__.meta17066;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta17066","meta17066",893824580,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17065";

cljs.core.async.t_cljs$core$async17065.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17065");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17065.
 */
cljs.core.async.__GT_t_cljs$core$async17065 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17065(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17066){
return (new cljs.core.async.t_cljs$core$async17065(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17066));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17065(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16170__auto___17229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17229,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17229,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17169){
var state_val_17170 = (state_17169[(1)]);
if((state_val_17170 === (7))){
var inst_17084 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
var statearr_17171_17230 = state_17169__$1;
(statearr_17171_17230[(2)] = inst_17084);

(statearr_17171_17230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (20))){
var inst_17096 = (state_17169[(7)]);
var state_17169__$1 = state_17169;
var statearr_17172_17231 = state_17169__$1;
(statearr_17172_17231[(2)] = inst_17096);

(statearr_17172_17231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (27))){
var state_17169__$1 = state_17169;
var statearr_17173_17232 = state_17169__$1;
(statearr_17173_17232[(2)] = null);

(statearr_17173_17232[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (1))){
var inst_17071 = (state_17169[(8)]);
var inst_17071__$1 = calc_state.call(null);
var inst_17073 = (inst_17071__$1 == null);
var inst_17074 = cljs.core.not.call(null,inst_17073);
var state_17169__$1 = (function (){var statearr_17174 = state_17169;
(statearr_17174[(8)] = inst_17071__$1);

return statearr_17174;
})();
if(inst_17074){
var statearr_17175_17233 = state_17169__$1;
(statearr_17175_17233[(1)] = (2));

} else {
var statearr_17176_17234 = state_17169__$1;
(statearr_17176_17234[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (24))){
var inst_17120 = (state_17169[(9)]);
var inst_17129 = (state_17169[(10)]);
var inst_17143 = (state_17169[(11)]);
var inst_17143__$1 = inst_17120.call(null,inst_17129);
var state_17169__$1 = (function (){var statearr_17177 = state_17169;
(statearr_17177[(11)] = inst_17143__$1);

return statearr_17177;
})();
if(cljs.core.truth_(inst_17143__$1)){
var statearr_17178_17235 = state_17169__$1;
(statearr_17178_17235[(1)] = (29));

} else {
var statearr_17179_17236 = state_17169__$1;
(statearr_17179_17236[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (4))){
var inst_17087 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17087)){
var statearr_17180_17237 = state_17169__$1;
(statearr_17180_17237[(1)] = (8));

} else {
var statearr_17181_17238 = state_17169__$1;
(statearr_17181_17238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (15))){
var inst_17114 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17114)){
var statearr_17182_17239 = state_17169__$1;
(statearr_17182_17239[(1)] = (19));

} else {
var statearr_17183_17240 = state_17169__$1;
(statearr_17183_17240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (21))){
var inst_17119 = (state_17169[(12)]);
var inst_17119__$1 = (state_17169[(2)]);
var inst_17120 = cljs.core.get.call(null,inst_17119__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17121 = cljs.core.get.call(null,inst_17119__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17122 = cljs.core.get.call(null,inst_17119__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17169__$1 = (function (){var statearr_17184 = state_17169;
(statearr_17184[(9)] = inst_17120);

(statearr_17184[(12)] = inst_17119__$1);

(statearr_17184[(13)] = inst_17121);

return statearr_17184;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17169__$1,(22),inst_17122);
} else {
if((state_val_17170 === (31))){
var inst_17151 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17151)){
var statearr_17185_17241 = state_17169__$1;
(statearr_17185_17241[(1)] = (32));

} else {
var statearr_17186_17242 = state_17169__$1;
(statearr_17186_17242[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (32))){
var inst_17128 = (state_17169[(14)]);
var state_17169__$1 = state_17169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17169__$1,(35),out,inst_17128);
} else {
if((state_val_17170 === (33))){
var inst_17119 = (state_17169[(12)]);
var inst_17096 = inst_17119;
var state_17169__$1 = (function (){var statearr_17187 = state_17169;
(statearr_17187[(7)] = inst_17096);

return statearr_17187;
})();
var statearr_17188_17243 = state_17169__$1;
(statearr_17188_17243[(2)] = null);

(statearr_17188_17243[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (13))){
var inst_17096 = (state_17169[(7)]);
var inst_17103 = inst_17096.cljs$lang$protocol_mask$partition0$;
var inst_17104 = (inst_17103 & (64));
var inst_17105 = inst_17096.cljs$core$ISeq$;
var inst_17106 = (cljs.core.PROTOCOL_SENTINEL === inst_17105);
var inst_17107 = ((inst_17104) || (inst_17106));
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17107)){
var statearr_17189_17244 = state_17169__$1;
(statearr_17189_17244[(1)] = (16));

} else {
var statearr_17190_17245 = state_17169__$1;
(statearr_17190_17245[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (22))){
var inst_17129 = (state_17169[(10)]);
var inst_17128 = (state_17169[(14)]);
var inst_17127 = (state_17169[(2)]);
var inst_17128__$1 = cljs.core.nth.call(null,inst_17127,(0),null);
var inst_17129__$1 = cljs.core.nth.call(null,inst_17127,(1),null);
var inst_17130 = (inst_17128__$1 == null);
var inst_17131 = cljs.core._EQ_.call(null,inst_17129__$1,change);
var inst_17132 = ((inst_17130) || (inst_17131));
var state_17169__$1 = (function (){var statearr_17191 = state_17169;
(statearr_17191[(10)] = inst_17129__$1);

(statearr_17191[(14)] = inst_17128__$1);

return statearr_17191;
})();
if(cljs.core.truth_(inst_17132)){
var statearr_17192_17246 = state_17169__$1;
(statearr_17192_17246[(1)] = (23));

} else {
var statearr_17193_17247 = state_17169__$1;
(statearr_17193_17247[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (36))){
var inst_17119 = (state_17169[(12)]);
var inst_17096 = inst_17119;
var state_17169__$1 = (function (){var statearr_17194 = state_17169;
(statearr_17194[(7)] = inst_17096);

return statearr_17194;
})();
var statearr_17195_17248 = state_17169__$1;
(statearr_17195_17248[(2)] = null);

(statearr_17195_17248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (29))){
var inst_17143 = (state_17169[(11)]);
var state_17169__$1 = state_17169;
var statearr_17196_17249 = state_17169__$1;
(statearr_17196_17249[(2)] = inst_17143);

(statearr_17196_17249[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (6))){
var state_17169__$1 = state_17169;
var statearr_17197_17250 = state_17169__$1;
(statearr_17197_17250[(2)] = false);

(statearr_17197_17250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (28))){
var inst_17139 = (state_17169[(2)]);
var inst_17140 = calc_state.call(null);
var inst_17096 = inst_17140;
var state_17169__$1 = (function (){var statearr_17198 = state_17169;
(statearr_17198[(15)] = inst_17139);

(statearr_17198[(7)] = inst_17096);

return statearr_17198;
})();
var statearr_17199_17251 = state_17169__$1;
(statearr_17199_17251[(2)] = null);

(statearr_17199_17251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (25))){
var inst_17165 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
var statearr_17200_17252 = state_17169__$1;
(statearr_17200_17252[(2)] = inst_17165);

(statearr_17200_17252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (34))){
var inst_17163 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
var statearr_17201_17253 = state_17169__$1;
(statearr_17201_17253[(2)] = inst_17163);

(statearr_17201_17253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (17))){
var state_17169__$1 = state_17169;
var statearr_17202_17254 = state_17169__$1;
(statearr_17202_17254[(2)] = false);

(statearr_17202_17254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (3))){
var state_17169__$1 = state_17169;
var statearr_17203_17255 = state_17169__$1;
(statearr_17203_17255[(2)] = false);

(statearr_17203_17255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (12))){
var inst_17167 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17169__$1,inst_17167);
} else {
if((state_val_17170 === (2))){
var inst_17071 = (state_17169[(8)]);
var inst_17076 = inst_17071.cljs$lang$protocol_mask$partition0$;
var inst_17077 = (inst_17076 & (64));
var inst_17078 = inst_17071.cljs$core$ISeq$;
var inst_17079 = (cljs.core.PROTOCOL_SENTINEL === inst_17078);
var inst_17080 = ((inst_17077) || (inst_17079));
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17080)){
var statearr_17204_17256 = state_17169__$1;
(statearr_17204_17256[(1)] = (5));

} else {
var statearr_17205_17257 = state_17169__$1;
(statearr_17205_17257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (23))){
var inst_17128 = (state_17169[(14)]);
var inst_17134 = (inst_17128 == null);
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17134)){
var statearr_17206_17258 = state_17169__$1;
(statearr_17206_17258[(1)] = (26));

} else {
var statearr_17207_17259 = state_17169__$1;
(statearr_17207_17259[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (35))){
var inst_17154 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
if(cljs.core.truth_(inst_17154)){
var statearr_17208_17260 = state_17169__$1;
(statearr_17208_17260[(1)] = (36));

} else {
var statearr_17209_17261 = state_17169__$1;
(statearr_17209_17261[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (19))){
var inst_17096 = (state_17169[(7)]);
var inst_17116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17096);
var state_17169__$1 = state_17169;
var statearr_17210_17262 = state_17169__$1;
(statearr_17210_17262[(2)] = inst_17116);

(statearr_17210_17262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (11))){
var inst_17096 = (state_17169[(7)]);
var inst_17100 = (inst_17096 == null);
var inst_17101 = cljs.core.not.call(null,inst_17100);
var state_17169__$1 = state_17169;
if(inst_17101){
var statearr_17211_17263 = state_17169__$1;
(statearr_17211_17263[(1)] = (13));

} else {
var statearr_17212_17264 = state_17169__$1;
(statearr_17212_17264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (9))){
var inst_17071 = (state_17169[(8)]);
var state_17169__$1 = state_17169;
var statearr_17213_17265 = state_17169__$1;
(statearr_17213_17265[(2)] = inst_17071);

(statearr_17213_17265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (5))){
var state_17169__$1 = state_17169;
var statearr_17214_17266 = state_17169__$1;
(statearr_17214_17266[(2)] = true);

(statearr_17214_17266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (14))){
var state_17169__$1 = state_17169;
var statearr_17215_17267 = state_17169__$1;
(statearr_17215_17267[(2)] = false);

(statearr_17215_17267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (26))){
var inst_17129 = (state_17169[(10)]);
var inst_17136 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17129);
var state_17169__$1 = state_17169;
var statearr_17216_17268 = state_17169__$1;
(statearr_17216_17268[(2)] = inst_17136);

(statearr_17216_17268[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (16))){
var state_17169__$1 = state_17169;
var statearr_17217_17269 = state_17169__$1;
(statearr_17217_17269[(2)] = true);

(statearr_17217_17269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (38))){
var inst_17159 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
var statearr_17218_17270 = state_17169__$1;
(statearr_17218_17270[(2)] = inst_17159);

(statearr_17218_17270[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (30))){
var inst_17120 = (state_17169[(9)]);
var inst_17129 = (state_17169[(10)]);
var inst_17121 = (state_17169[(13)]);
var inst_17146 = cljs.core.empty_QMARK_.call(null,inst_17120);
var inst_17147 = inst_17121.call(null,inst_17129);
var inst_17148 = cljs.core.not.call(null,inst_17147);
var inst_17149 = ((inst_17146) && (inst_17148));
var state_17169__$1 = state_17169;
var statearr_17219_17271 = state_17169__$1;
(statearr_17219_17271[(2)] = inst_17149);

(statearr_17219_17271[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (10))){
var inst_17071 = (state_17169[(8)]);
var inst_17092 = (state_17169[(2)]);
var inst_17093 = cljs.core.get.call(null,inst_17092,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17094 = cljs.core.get.call(null,inst_17092,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17095 = cljs.core.get.call(null,inst_17092,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17096 = inst_17071;
var state_17169__$1 = (function (){var statearr_17220 = state_17169;
(statearr_17220[(16)] = inst_17095);

(statearr_17220[(17)] = inst_17094);

(statearr_17220[(7)] = inst_17096);

(statearr_17220[(18)] = inst_17093);

return statearr_17220;
})();
var statearr_17221_17272 = state_17169__$1;
(statearr_17221_17272[(2)] = null);

(statearr_17221_17272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (18))){
var inst_17111 = (state_17169[(2)]);
var state_17169__$1 = state_17169;
var statearr_17222_17273 = state_17169__$1;
(statearr_17222_17273[(2)] = inst_17111);

(statearr_17222_17273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (37))){
var state_17169__$1 = state_17169;
var statearr_17223_17274 = state_17169__$1;
(statearr_17223_17274[(2)] = null);

(statearr_17223_17274[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17170 === (8))){
var inst_17071 = (state_17169[(8)]);
var inst_17089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17071);
var state_17169__$1 = state_17169;
var statearr_17224_17275 = state_17169__$1;
(statearr_17224_17275[(2)] = inst_17089);

(statearr_17224_17275[(1)] = (10));


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
});})(c__16170__auto___17229,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16079__auto__,c__16170__auto___17229,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16080__auto__ = null;
var cljs$core$async$mix_$_state_machine__16080__auto____0 = (function (){
var statearr_17225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17225[(0)] = cljs$core$async$mix_$_state_machine__16080__auto__);

(statearr_17225[(1)] = (1));

return statearr_17225;
});
var cljs$core$async$mix_$_state_machine__16080__auto____1 = (function (state_17169){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17226){if((e17226 instanceof Object)){
var ex__16083__auto__ = e17226;
var statearr_17227_17276 = state_17169;
(statearr_17227_17276[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17277 = state_17169;
state_17169 = G__17277;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16080__auto__ = function(state_17169){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16080__auto____1.call(this,state_17169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16080__auto____0;
cljs$core$async$mix_$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16080__auto____1;
return cljs$core$async$mix_$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17229,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16172__auto__ = (function (){var statearr_17228 = f__16171__auto__.call(null);
(statearr_17228[(6)] = c__16170__auto___17229);

return statearr_17228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17229,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17279 = arguments.length;
switch (G__17279) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
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
var G__17283 = arguments.length;
switch (G__17283) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__17281_SHARP_){
if(cljs.core.truth_(p1__17281_SHARP_.call(null,topic))){
return p1__17281_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17281_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17284 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17284 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17285){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17285 = meta17285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17286,meta17285__$1){
var self__ = this;
var _17286__$1 = this;
return (new cljs.core.async.t_cljs$core$async17284(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17285__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17286){
var self__ = this;
var _17286__$1 = this;
return self__.meta17285;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17285","meta17285",-1757428675,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17284.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17284";

cljs.core.async.t_cljs$core$async17284.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17284");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17284.
 */
cljs.core.async.__GT_t_cljs$core$async17284 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17284(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17285){
return (new cljs.core.async.t_cljs$core$async17284(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17285));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17284(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16170__auto___17404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17404,mults,ensure_mult,p){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17404,mults,ensure_mult,p){
return (function (state_17358){
var state_val_17359 = (state_17358[(1)]);
if((state_val_17359 === (7))){
var inst_17354 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17360_17405 = state_17358__$1;
(statearr_17360_17405[(2)] = inst_17354);

(statearr_17360_17405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (20))){
var state_17358__$1 = state_17358;
var statearr_17361_17406 = state_17358__$1;
(statearr_17361_17406[(2)] = null);

(statearr_17361_17406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (1))){
var state_17358__$1 = state_17358;
var statearr_17362_17407 = state_17358__$1;
(statearr_17362_17407[(2)] = null);

(statearr_17362_17407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (24))){
var inst_17337 = (state_17358[(7)]);
var inst_17346 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17337);
var state_17358__$1 = state_17358;
var statearr_17363_17408 = state_17358__$1;
(statearr_17363_17408[(2)] = inst_17346);

(statearr_17363_17408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (4))){
var inst_17289 = (state_17358[(8)]);
var inst_17289__$1 = (state_17358[(2)]);
var inst_17290 = (inst_17289__$1 == null);
var state_17358__$1 = (function (){var statearr_17364 = state_17358;
(statearr_17364[(8)] = inst_17289__$1);

return statearr_17364;
})();
if(cljs.core.truth_(inst_17290)){
var statearr_17365_17409 = state_17358__$1;
(statearr_17365_17409[(1)] = (5));

} else {
var statearr_17366_17410 = state_17358__$1;
(statearr_17366_17410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (15))){
var inst_17331 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17367_17411 = state_17358__$1;
(statearr_17367_17411[(2)] = inst_17331);

(statearr_17367_17411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (21))){
var inst_17351 = (state_17358[(2)]);
var state_17358__$1 = (function (){var statearr_17368 = state_17358;
(statearr_17368[(9)] = inst_17351);

return statearr_17368;
})();
var statearr_17369_17412 = state_17358__$1;
(statearr_17369_17412[(2)] = null);

(statearr_17369_17412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (13))){
var inst_17313 = (state_17358[(10)]);
var inst_17315 = cljs.core.chunked_seq_QMARK_.call(null,inst_17313);
var state_17358__$1 = state_17358;
if(inst_17315){
var statearr_17370_17413 = state_17358__$1;
(statearr_17370_17413[(1)] = (16));

} else {
var statearr_17371_17414 = state_17358__$1;
(statearr_17371_17414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (22))){
var inst_17343 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
if(cljs.core.truth_(inst_17343)){
var statearr_17372_17415 = state_17358__$1;
(statearr_17372_17415[(1)] = (23));

} else {
var statearr_17373_17416 = state_17358__$1;
(statearr_17373_17416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (6))){
var inst_17337 = (state_17358[(7)]);
var inst_17289 = (state_17358[(8)]);
var inst_17339 = (state_17358[(11)]);
var inst_17337__$1 = topic_fn.call(null,inst_17289);
var inst_17338 = cljs.core.deref.call(null,mults);
var inst_17339__$1 = cljs.core.get.call(null,inst_17338,inst_17337__$1);
var state_17358__$1 = (function (){var statearr_17374 = state_17358;
(statearr_17374[(7)] = inst_17337__$1);

(statearr_17374[(11)] = inst_17339__$1);

return statearr_17374;
})();
if(cljs.core.truth_(inst_17339__$1)){
var statearr_17375_17417 = state_17358__$1;
(statearr_17375_17417[(1)] = (19));

} else {
var statearr_17376_17418 = state_17358__$1;
(statearr_17376_17418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (25))){
var inst_17348 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17377_17419 = state_17358__$1;
(statearr_17377_17419[(2)] = inst_17348);

(statearr_17377_17419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (17))){
var inst_17313 = (state_17358[(10)]);
var inst_17322 = cljs.core.first.call(null,inst_17313);
var inst_17323 = cljs.core.async.muxch_STAR_.call(null,inst_17322);
var inst_17324 = cljs.core.async.close_BANG_.call(null,inst_17323);
var inst_17325 = cljs.core.next.call(null,inst_17313);
var inst_17299 = inst_17325;
var inst_17300 = null;
var inst_17301 = (0);
var inst_17302 = (0);
var state_17358__$1 = (function (){var statearr_17378 = state_17358;
(statearr_17378[(12)] = inst_17300);

(statearr_17378[(13)] = inst_17302);

(statearr_17378[(14)] = inst_17324);

(statearr_17378[(15)] = inst_17301);

(statearr_17378[(16)] = inst_17299);

return statearr_17378;
})();
var statearr_17379_17420 = state_17358__$1;
(statearr_17379_17420[(2)] = null);

(statearr_17379_17420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (3))){
var inst_17356 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17358__$1,inst_17356);
} else {
if((state_val_17359 === (12))){
var inst_17333 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17380_17421 = state_17358__$1;
(statearr_17380_17421[(2)] = inst_17333);

(statearr_17380_17421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (2))){
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17358__$1,(4),ch);
} else {
if((state_val_17359 === (23))){
var state_17358__$1 = state_17358;
var statearr_17381_17422 = state_17358__$1;
(statearr_17381_17422[(2)] = null);

(statearr_17381_17422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (19))){
var inst_17289 = (state_17358[(8)]);
var inst_17339 = (state_17358[(11)]);
var inst_17341 = cljs.core.async.muxch_STAR_.call(null,inst_17339);
var state_17358__$1 = state_17358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17358__$1,(22),inst_17341,inst_17289);
} else {
if((state_val_17359 === (11))){
var inst_17299 = (state_17358[(16)]);
var inst_17313 = (state_17358[(10)]);
var inst_17313__$1 = cljs.core.seq.call(null,inst_17299);
var state_17358__$1 = (function (){var statearr_17382 = state_17358;
(statearr_17382[(10)] = inst_17313__$1);

return statearr_17382;
})();
if(inst_17313__$1){
var statearr_17383_17423 = state_17358__$1;
(statearr_17383_17423[(1)] = (13));

} else {
var statearr_17384_17424 = state_17358__$1;
(statearr_17384_17424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (9))){
var inst_17335 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17385_17425 = state_17358__$1;
(statearr_17385_17425[(2)] = inst_17335);

(statearr_17385_17425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (5))){
var inst_17296 = cljs.core.deref.call(null,mults);
var inst_17297 = cljs.core.vals.call(null,inst_17296);
var inst_17298 = cljs.core.seq.call(null,inst_17297);
var inst_17299 = inst_17298;
var inst_17300 = null;
var inst_17301 = (0);
var inst_17302 = (0);
var state_17358__$1 = (function (){var statearr_17386 = state_17358;
(statearr_17386[(12)] = inst_17300);

(statearr_17386[(13)] = inst_17302);

(statearr_17386[(15)] = inst_17301);

(statearr_17386[(16)] = inst_17299);

return statearr_17386;
})();
var statearr_17387_17426 = state_17358__$1;
(statearr_17387_17426[(2)] = null);

(statearr_17387_17426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (14))){
var state_17358__$1 = state_17358;
var statearr_17391_17427 = state_17358__$1;
(statearr_17391_17427[(2)] = null);

(statearr_17391_17427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (16))){
var inst_17313 = (state_17358[(10)]);
var inst_17317 = cljs.core.chunk_first.call(null,inst_17313);
var inst_17318 = cljs.core.chunk_rest.call(null,inst_17313);
var inst_17319 = cljs.core.count.call(null,inst_17317);
var inst_17299 = inst_17318;
var inst_17300 = inst_17317;
var inst_17301 = inst_17319;
var inst_17302 = (0);
var state_17358__$1 = (function (){var statearr_17392 = state_17358;
(statearr_17392[(12)] = inst_17300);

(statearr_17392[(13)] = inst_17302);

(statearr_17392[(15)] = inst_17301);

(statearr_17392[(16)] = inst_17299);

return statearr_17392;
})();
var statearr_17393_17428 = state_17358__$1;
(statearr_17393_17428[(2)] = null);

(statearr_17393_17428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (10))){
var inst_17300 = (state_17358[(12)]);
var inst_17302 = (state_17358[(13)]);
var inst_17301 = (state_17358[(15)]);
var inst_17299 = (state_17358[(16)]);
var inst_17307 = cljs.core._nth.call(null,inst_17300,inst_17302);
var inst_17308 = cljs.core.async.muxch_STAR_.call(null,inst_17307);
var inst_17309 = cljs.core.async.close_BANG_.call(null,inst_17308);
var inst_17310 = (inst_17302 + (1));
var tmp17388 = inst_17300;
var tmp17389 = inst_17301;
var tmp17390 = inst_17299;
var inst_17299__$1 = tmp17390;
var inst_17300__$1 = tmp17388;
var inst_17301__$1 = tmp17389;
var inst_17302__$1 = inst_17310;
var state_17358__$1 = (function (){var statearr_17394 = state_17358;
(statearr_17394[(12)] = inst_17300__$1);

(statearr_17394[(13)] = inst_17302__$1);

(statearr_17394[(17)] = inst_17309);

(statearr_17394[(15)] = inst_17301__$1);

(statearr_17394[(16)] = inst_17299__$1);

return statearr_17394;
})();
var statearr_17395_17429 = state_17358__$1;
(statearr_17395_17429[(2)] = null);

(statearr_17395_17429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (18))){
var inst_17328 = (state_17358[(2)]);
var state_17358__$1 = state_17358;
var statearr_17396_17430 = state_17358__$1;
(statearr_17396_17430[(2)] = inst_17328);

(statearr_17396_17430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17359 === (8))){
var inst_17302 = (state_17358[(13)]);
var inst_17301 = (state_17358[(15)]);
var inst_17304 = (inst_17302 < inst_17301);
var inst_17305 = inst_17304;
var state_17358__$1 = state_17358;
if(cljs.core.truth_(inst_17305)){
var statearr_17397_17431 = state_17358__$1;
(statearr_17397_17431[(1)] = (10));

} else {
var statearr_17398_17432 = state_17358__$1;
(statearr_17398_17432[(1)] = (11));

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
});})(c__16170__auto___17404,mults,ensure_mult,p))
;
return ((function (switch__16079__auto__,c__16170__auto___17404,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17399[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17399[(1)] = (1));

return statearr_17399;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17358){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17400){if((e17400 instanceof Object)){
var ex__16083__auto__ = e17400;
var statearr_17401_17433 = state_17358;
(statearr_17401_17433[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17434 = state_17358;
state_17358 = G__17434;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17404,mults,ensure_mult,p))
})();
var state__16172__auto__ = (function (){var statearr_17402 = f__16171__auto__.call(null);
(statearr_17402[(6)] = c__16170__auto___17404);

return statearr_17402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17404,mults,ensure_mult,p))
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
var G__17436 = arguments.length;
switch (G__17436) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17439 = arguments.length;
switch (G__17439) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17442 = arguments.length;
switch (G__17442) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__16170__auto___17509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17481){
var state_val_17482 = (state_17481[(1)]);
if((state_val_17482 === (7))){
var state_17481__$1 = state_17481;
var statearr_17483_17510 = state_17481__$1;
(statearr_17483_17510[(2)] = null);

(statearr_17483_17510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (1))){
var state_17481__$1 = state_17481;
var statearr_17484_17511 = state_17481__$1;
(statearr_17484_17511[(2)] = null);

(statearr_17484_17511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (4))){
var inst_17445 = (state_17481[(7)]);
var inst_17447 = (inst_17445 < cnt);
var state_17481__$1 = state_17481;
if(cljs.core.truth_(inst_17447)){
var statearr_17485_17512 = state_17481__$1;
(statearr_17485_17512[(1)] = (6));

} else {
var statearr_17486_17513 = state_17481__$1;
(statearr_17486_17513[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (15))){
var inst_17477 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17487_17514 = state_17481__$1;
(statearr_17487_17514[(2)] = inst_17477);

(statearr_17487_17514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (13))){
var inst_17470 = cljs.core.async.close_BANG_.call(null,out);
var state_17481__$1 = state_17481;
var statearr_17488_17515 = state_17481__$1;
(statearr_17488_17515[(2)] = inst_17470);

(statearr_17488_17515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (6))){
var state_17481__$1 = state_17481;
var statearr_17489_17516 = state_17481__$1;
(statearr_17489_17516[(2)] = null);

(statearr_17489_17516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (3))){
var inst_17479 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17481__$1,inst_17479);
} else {
if((state_val_17482 === (12))){
var inst_17467 = (state_17481[(8)]);
var inst_17467__$1 = (state_17481[(2)]);
var inst_17468 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17467__$1);
var state_17481__$1 = (function (){var statearr_17490 = state_17481;
(statearr_17490[(8)] = inst_17467__$1);

return statearr_17490;
})();
if(cljs.core.truth_(inst_17468)){
var statearr_17491_17517 = state_17481__$1;
(statearr_17491_17517[(1)] = (13));

} else {
var statearr_17492_17518 = state_17481__$1;
(statearr_17492_17518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (2))){
var inst_17444 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17445 = (0);
var state_17481__$1 = (function (){var statearr_17493 = state_17481;
(statearr_17493[(7)] = inst_17445);

(statearr_17493[(9)] = inst_17444);

return statearr_17493;
})();
var statearr_17494_17519 = state_17481__$1;
(statearr_17494_17519[(2)] = null);

(statearr_17494_17519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (11))){
var inst_17445 = (state_17481[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17481,(10),Object,null,(9));
var inst_17454 = chs__$1.call(null,inst_17445);
var inst_17455 = done.call(null,inst_17445);
var inst_17456 = cljs.core.async.take_BANG_.call(null,inst_17454,inst_17455);
var state_17481__$1 = state_17481;
var statearr_17495_17520 = state_17481__$1;
(statearr_17495_17520[(2)] = inst_17456);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (9))){
var inst_17445 = (state_17481[(7)]);
var inst_17458 = (state_17481[(2)]);
var inst_17459 = (inst_17445 + (1));
var inst_17445__$1 = inst_17459;
var state_17481__$1 = (function (){var statearr_17496 = state_17481;
(statearr_17496[(7)] = inst_17445__$1);

(statearr_17496[(10)] = inst_17458);

return statearr_17496;
})();
var statearr_17497_17521 = state_17481__$1;
(statearr_17497_17521[(2)] = null);

(statearr_17497_17521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (5))){
var inst_17465 = (state_17481[(2)]);
var state_17481__$1 = (function (){var statearr_17498 = state_17481;
(statearr_17498[(11)] = inst_17465);

return statearr_17498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17481__$1,(12),dchan);
} else {
if((state_val_17482 === (14))){
var inst_17467 = (state_17481[(8)]);
var inst_17472 = cljs.core.apply.call(null,f,inst_17467);
var state_17481__$1 = state_17481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17481__$1,(16),out,inst_17472);
} else {
if((state_val_17482 === (16))){
var inst_17474 = (state_17481[(2)]);
var state_17481__$1 = (function (){var statearr_17499 = state_17481;
(statearr_17499[(12)] = inst_17474);

return statearr_17499;
})();
var statearr_17500_17522 = state_17481__$1;
(statearr_17500_17522[(2)] = null);

(statearr_17500_17522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (10))){
var inst_17449 = (state_17481[(2)]);
var inst_17450 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17481__$1 = (function (){var statearr_17501 = state_17481;
(statearr_17501[(13)] = inst_17449);

return statearr_17501;
})();
var statearr_17502_17523 = state_17481__$1;
(statearr_17502_17523[(2)] = inst_17450);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17482 === (8))){
var inst_17463 = (state_17481[(2)]);
var state_17481__$1 = state_17481;
var statearr_17503_17524 = state_17481__$1;
(statearr_17503_17524[(2)] = inst_17463);

(statearr_17503_17524[(1)] = (5));


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
});})(c__16170__auto___17509,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16079__auto__,c__16170__auto___17509,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17504[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17504[(1)] = (1));

return statearr_17504;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17481){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17505){if((e17505 instanceof Object)){
var ex__16083__auto__ = e17505;
var statearr_17506_17525 = state_17481;
(statearr_17506_17525[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17526 = state_17481;
state_17481 = G__17526;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17509,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16172__auto__ = (function (){var statearr_17507 = f__16171__auto__.call(null);
(statearr_17507[(6)] = c__16170__auto___17509);

return statearr_17507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17509,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17529 = arguments.length;
switch (G__17529) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16170__auto___17583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17583,out){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17583,out){
return (function (state_17561){
var state_val_17562 = (state_17561[(1)]);
if((state_val_17562 === (7))){
var inst_17540 = (state_17561[(7)]);
var inst_17541 = (state_17561[(8)]);
var inst_17540__$1 = (state_17561[(2)]);
var inst_17541__$1 = cljs.core.nth.call(null,inst_17540__$1,(0),null);
var inst_17542 = cljs.core.nth.call(null,inst_17540__$1,(1),null);
var inst_17543 = (inst_17541__$1 == null);
var state_17561__$1 = (function (){var statearr_17563 = state_17561;
(statearr_17563[(7)] = inst_17540__$1);

(statearr_17563[(9)] = inst_17542);

(statearr_17563[(8)] = inst_17541__$1);

return statearr_17563;
})();
if(cljs.core.truth_(inst_17543)){
var statearr_17564_17584 = state_17561__$1;
(statearr_17564_17584[(1)] = (8));

} else {
var statearr_17565_17585 = state_17561__$1;
(statearr_17565_17585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (1))){
var inst_17530 = cljs.core.vec.call(null,chs);
var inst_17531 = inst_17530;
var state_17561__$1 = (function (){var statearr_17566 = state_17561;
(statearr_17566[(10)] = inst_17531);

return statearr_17566;
})();
var statearr_17567_17586 = state_17561__$1;
(statearr_17567_17586[(2)] = null);

(statearr_17567_17586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (4))){
var inst_17531 = (state_17561[(10)]);
var state_17561__$1 = state_17561;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17561__$1,(7),inst_17531);
} else {
if((state_val_17562 === (6))){
var inst_17557 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
var statearr_17568_17587 = state_17561__$1;
(statearr_17568_17587[(2)] = inst_17557);

(statearr_17568_17587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (3))){
var inst_17559 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17561__$1,inst_17559);
} else {
if((state_val_17562 === (2))){
var inst_17531 = (state_17561[(10)]);
var inst_17533 = cljs.core.count.call(null,inst_17531);
var inst_17534 = (inst_17533 > (0));
var state_17561__$1 = state_17561;
if(cljs.core.truth_(inst_17534)){
var statearr_17570_17588 = state_17561__$1;
(statearr_17570_17588[(1)] = (4));

} else {
var statearr_17571_17589 = state_17561__$1;
(statearr_17571_17589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (11))){
var inst_17531 = (state_17561[(10)]);
var inst_17550 = (state_17561[(2)]);
var tmp17569 = inst_17531;
var inst_17531__$1 = tmp17569;
var state_17561__$1 = (function (){var statearr_17572 = state_17561;
(statearr_17572[(11)] = inst_17550);

(statearr_17572[(10)] = inst_17531__$1);

return statearr_17572;
})();
var statearr_17573_17590 = state_17561__$1;
(statearr_17573_17590[(2)] = null);

(statearr_17573_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (9))){
var inst_17541 = (state_17561[(8)]);
var state_17561__$1 = state_17561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17561__$1,(11),out,inst_17541);
} else {
if((state_val_17562 === (5))){
var inst_17555 = cljs.core.async.close_BANG_.call(null,out);
var state_17561__$1 = state_17561;
var statearr_17574_17591 = state_17561__$1;
(statearr_17574_17591[(2)] = inst_17555);

(statearr_17574_17591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (10))){
var inst_17553 = (state_17561[(2)]);
var state_17561__$1 = state_17561;
var statearr_17575_17592 = state_17561__$1;
(statearr_17575_17592[(2)] = inst_17553);

(statearr_17575_17592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17562 === (8))){
var inst_17540 = (state_17561[(7)]);
var inst_17542 = (state_17561[(9)]);
var inst_17531 = (state_17561[(10)]);
var inst_17541 = (state_17561[(8)]);
var inst_17545 = (function (){var cs = inst_17531;
var vec__17536 = inst_17540;
var v = inst_17541;
var c = inst_17542;
return ((function (cs,vec__17536,v,c,inst_17540,inst_17542,inst_17531,inst_17541,state_val_17562,c__16170__auto___17583,out){
return (function (p1__17527_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17527_SHARP_);
});
;})(cs,vec__17536,v,c,inst_17540,inst_17542,inst_17531,inst_17541,state_val_17562,c__16170__auto___17583,out))
})();
var inst_17546 = cljs.core.filterv.call(null,inst_17545,inst_17531);
var inst_17531__$1 = inst_17546;
var state_17561__$1 = (function (){var statearr_17576 = state_17561;
(statearr_17576[(10)] = inst_17531__$1);

return statearr_17576;
})();
var statearr_17577_17593 = state_17561__$1;
(statearr_17577_17593[(2)] = null);

(statearr_17577_17593[(1)] = (2));


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
});})(c__16170__auto___17583,out))
;
return ((function (switch__16079__auto__,c__16170__auto___17583,out){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17578 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17578[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17578[(1)] = (1));

return statearr_17578;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17561){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17579){if((e17579 instanceof Object)){
var ex__16083__auto__ = e17579;
var statearr_17580_17594 = state_17561;
(statearr_17580_17594[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17595 = state_17561;
state_17561 = G__17595;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17583,out))
})();
var state__16172__auto__ = (function (){var statearr_17581 = f__16171__auto__.call(null);
(statearr_17581[(6)] = c__16170__auto___17583);

return statearr_17581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17583,out))
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
var G__17597 = arguments.length;
switch (G__17597) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16170__auto___17642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17642,out){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17642,out){
return (function (state_17621){
var state_val_17622 = (state_17621[(1)]);
if((state_val_17622 === (7))){
var inst_17603 = (state_17621[(7)]);
var inst_17603__$1 = (state_17621[(2)]);
var inst_17604 = (inst_17603__$1 == null);
var inst_17605 = cljs.core.not.call(null,inst_17604);
var state_17621__$1 = (function (){var statearr_17623 = state_17621;
(statearr_17623[(7)] = inst_17603__$1);

return statearr_17623;
})();
if(inst_17605){
var statearr_17624_17643 = state_17621__$1;
(statearr_17624_17643[(1)] = (8));

} else {
var statearr_17625_17644 = state_17621__$1;
(statearr_17625_17644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (1))){
var inst_17598 = (0);
var state_17621__$1 = (function (){var statearr_17626 = state_17621;
(statearr_17626[(8)] = inst_17598);

return statearr_17626;
})();
var statearr_17627_17645 = state_17621__$1;
(statearr_17627_17645[(2)] = null);

(statearr_17627_17645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (4))){
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17621__$1,(7),ch);
} else {
if((state_val_17622 === (6))){
var inst_17616 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
var statearr_17628_17646 = state_17621__$1;
(statearr_17628_17646[(2)] = inst_17616);

(statearr_17628_17646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (3))){
var inst_17618 = (state_17621[(2)]);
var inst_17619 = cljs.core.async.close_BANG_.call(null,out);
var state_17621__$1 = (function (){var statearr_17629 = state_17621;
(statearr_17629[(9)] = inst_17618);

return statearr_17629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17621__$1,inst_17619);
} else {
if((state_val_17622 === (2))){
var inst_17598 = (state_17621[(8)]);
var inst_17600 = (inst_17598 < n);
var state_17621__$1 = state_17621;
if(cljs.core.truth_(inst_17600)){
var statearr_17630_17647 = state_17621__$1;
(statearr_17630_17647[(1)] = (4));

} else {
var statearr_17631_17648 = state_17621__$1;
(statearr_17631_17648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (11))){
var inst_17598 = (state_17621[(8)]);
var inst_17608 = (state_17621[(2)]);
var inst_17609 = (inst_17598 + (1));
var inst_17598__$1 = inst_17609;
var state_17621__$1 = (function (){var statearr_17632 = state_17621;
(statearr_17632[(8)] = inst_17598__$1);

(statearr_17632[(10)] = inst_17608);

return statearr_17632;
})();
var statearr_17633_17649 = state_17621__$1;
(statearr_17633_17649[(2)] = null);

(statearr_17633_17649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (9))){
var state_17621__$1 = state_17621;
var statearr_17634_17650 = state_17621__$1;
(statearr_17634_17650[(2)] = null);

(statearr_17634_17650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (5))){
var state_17621__$1 = state_17621;
var statearr_17635_17651 = state_17621__$1;
(statearr_17635_17651[(2)] = null);

(statearr_17635_17651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (10))){
var inst_17613 = (state_17621[(2)]);
var state_17621__$1 = state_17621;
var statearr_17636_17652 = state_17621__$1;
(statearr_17636_17652[(2)] = inst_17613);

(statearr_17636_17652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17622 === (8))){
var inst_17603 = (state_17621[(7)]);
var state_17621__$1 = state_17621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17621__$1,(11),out,inst_17603);
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
});})(c__16170__auto___17642,out))
;
return ((function (switch__16079__auto__,c__16170__auto___17642,out){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17637[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17637[(1)] = (1));

return statearr_17637;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17621){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17638){if((e17638 instanceof Object)){
var ex__16083__auto__ = e17638;
var statearr_17639_17653 = state_17621;
(statearr_17639_17653[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17654 = state_17621;
state_17621 = G__17654;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17642,out))
})();
var state__16172__auto__ = (function (){var statearr_17640 = f__16171__auto__.call(null);
(statearr_17640[(6)] = c__16170__auto___17642);

return statearr_17640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17642,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17656 = (function (f,ch,meta17657){
this.f = f;
this.ch = ch;
this.meta17657 = meta17657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17658,meta17657__$1){
var self__ = this;
var _17658__$1 = this;
return (new cljs.core.async.t_cljs$core$async17656(self__.f,self__.ch,meta17657__$1));
});

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17658){
var self__ = this;
var _17658__$1 = this;
return self__.meta17657;
});

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17659 = (function (f,ch,meta17657,_,fn1,meta17660){
this.f = f;
this.ch = ch;
this.meta17657 = meta17657;
this._ = _;
this.fn1 = fn1;
this.meta17660 = meta17660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17661,meta17660__$1){
var self__ = this;
var _17661__$1 = this;
return (new cljs.core.async.t_cljs$core$async17659(self__.f,self__.ch,self__.meta17657,self__._,self__.fn1,meta17660__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17661){
var self__ = this;
var _17661__$1 = this;
return self__.meta17660;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17655_SHARP_){
return f1.call(null,(((p1__17655_SHARP_ == null))?null:self__.f.call(null,p1__17655_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17659.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17657","meta17657",1205473490,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17656","cljs.core.async/t_cljs$core$async17656",400788575,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17660","meta17660",315832682,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17659.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17659";

cljs.core.async.t_cljs$core$async17659.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17659");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17659.
 */
cljs.core.async.__GT_t_cljs$core$async17659 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17659(f__$1,ch__$1,meta17657__$1,___$2,fn1__$1,meta17660){
return (new cljs.core.async.t_cljs$core$async17659(f__$1,ch__$1,meta17657__$1,___$2,fn1__$1,meta17660));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17659(self__.f,self__.ch,self__.meta17657,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17657","meta17657",1205473490,null)], null);
});

cljs.core.async.t_cljs$core$async17656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17656";

cljs.core.async.t_cljs$core$async17656.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17656");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17656.
 */
cljs.core.async.__GT_t_cljs$core$async17656 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17656(f__$1,ch__$1,meta17657){
return (new cljs.core.async.t_cljs$core$async17656(f__$1,ch__$1,meta17657));
});

}

return (new cljs.core.async.t_cljs$core$async17656(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17662 = (function (f,ch,meta17663){
this.f = f;
this.ch = ch;
this.meta17663 = meta17663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17664,meta17663__$1){
var self__ = this;
var _17664__$1 = this;
return (new cljs.core.async.t_cljs$core$async17662(self__.f,self__.ch,meta17663__$1));
});

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17664){
var self__ = this;
var _17664__$1 = this;
return self__.meta17663;
});

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17663","meta17663",779387415,null)], null);
});

cljs.core.async.t_cljs$core$async17662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17662";

cljs.core.async.t_cljs$core$async17662.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17662");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17662.
 */
cljs.core.async.__GT_t_cljs$core$async17662 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17662(f__$1,ch__$1,meta17663){
return (new cljs.core.async.t_cljs$core$async17662(f__$1,ch__$1,meta17663));
});

}

return (new cljs.core.async.t_cljs$core$async17662(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17665 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17665 = (function (p,ch,meta17666){
this.p = p;
this.ch = ch;
this.meta17666 = meta17666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17667,meta17666__$1){
var self__ = this;
var _17667__$1 = this;
return (new cljs.core.async.t_cljs$core$async17665(self__.p,self__.ch,meta17666__$1));
});

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17667){
var self__ = this;
var _17667__$1 = this;
return self__.meta17666;
});

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17665.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17666","meta17666",1857004980,null)], null);
});

cljs.core.async.t_cljs$core$async17665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17665";

cljs.core.async.t_cljs$core$async17665.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async17665");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17665.
 */
cljs.core.async.__GT_t_cljs$core$async17665 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17665(p__$1,ch__$1,meta17666){
return (new cljs.core.async.t_cljs$core$async17665(p__$1,ch__$1,meta17666));
});

}

return (new cljs.core.async.t_cljs$core$async17665(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17669 = arguments.length;
switch (G__17669) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16170__auto___17709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17709,out){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17709,out){
return (function (state_17690){
var state_val_17691 = (state_17690[(1)]);
if((state_val_17691 === (7))){
var inst_17686 = (state_17690[(2)]);
var state_17690__$1 = state_17690;
var statearr_17692_17710 = state_17690__$1;
(statearr_17692_17710[(2)] = inst_17686);

(statearr_17692_17710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (1))){
var state_17690__$1 = state_17690;
var statearr_17693_17711 = state_17690__$1;
(statearr_17693_17711[(2)] = null);

(statearr_17693_17711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (4))){
var inst_17672 = (state_17690[(7)]);
var inst_17672__$1 = (state_17690[(2)]);
var inst_17673 = (inst_17672__$1 == null);
var state_17690__$1 = (function (){var statearr_17694 = state_17690;
(statearr_17694[(7)] = inst_17672__$1);

return statearr_17694;
})();
if(cljs.core.truth_(inst_17673)){
var statearr_17695_17712 = state_17690__$1;
(statearr_17695_17712[(1)] = (5));

} else {
var statearr_17696_17713 = state_17690__$1;
(statearr_17696_17713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (6))){
var inst_17672 = (state_17690[(7)]);
var inst_17677 = p.call(null,inst_17672);
var state_17690__$1 = state_17690;
if(cljs.core.truth_(inst_17677)){
var statearr_17697_17714 = state_17690__$1;
(statearr_17697_17714[(1)] = (8));

} else {
var statearr_17698_17715 = state_17690__$1;
(statearr_17698_17715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (3))){
var inst_17688 = (state_17690[(2)]);
var state_17690__$1 = state_17690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17690__$1,inst_17688);
} else {
if((state_val_17691 === (2))){
var state_17690__$1 = state_17690;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17690__$1,(4),ch);
} else {
if((state_val_17691 === (11))){
var inst_17680 = (state_17690[(2)]);
var state_17690__$1 = state_17690;
var statearr_17699_17716 = state_17690__$1;
(statearr_17699_17716[(2)] = inst_17680);

(statearr_17699_17716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (9))){
var state_17690__$1 = state_17690;
var statearr_17700_17717 = state_17690__$1;
(statearr_17700_17717[(2)] = null);

(statearr_17700_17717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (5))){
var inst_17675 = cljs.core.async.close_BANG_.call(null,out);
var state_17690__$1 = state_17690;
var statearr_17701_17718 = state_17690__$1;
(statearr_17701_17718[(2)] = inst_17675);

(statearr_17701_17718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (10))){
var inst_17683 = (state_17690[(2)]);
var state_17690__$1 = (function (){var statearr_17702 = state_17690;
(statearr_17702[(8)] = inst_17683);

return statearr_17702;
})();
var statearr_17703_17719 = state_17690__$1;
(statearr_17703_17719[(2)] = null);

(statearr_17703_17719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17691 === (8))){
var inst_17672 = (state_17690[(7)]);
var state_17690__$1 = state_17690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17690__$1,(11),out,inst_17672);
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
});})(c__16170__auto___17709,out))
;
return ((function (switch__16079__auto__,c__16170__auto___17709,out){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17704 = [null,null,null,null,null,null,null,null,null];
(statearr_17704[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17704[(1)] = (1));

return statearr_17704;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17690){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17705){if((e17705 instanceof Object)){
var ex__16083__auto__ = e17705;
var statearr_17706_17720 = state_17690;
(statearr_17706_17720[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17721 = state_17690;
state_17690 = G__17721;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17709,out))
})();
var state__16172__auto__ = (function (){var statearr_17707 = f__16171__auto__.call(null);
(statearr_17707[(6)] = c__16170__auto___17709);

return statearr_17707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17709,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17723 = arguments.length;
switch (G__17723) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__16170__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto__){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto__){
return (function (state_17786){
var state_val_17787 = (state_17786[(1)]);
if((state_val_17787 === (7))){
var inst_17782 = (state_17786[(2)]);
var state_17786__$1 = state_17786;
var statearr_17788_17826 = state_17786__$1;
(statearr_17788_17826[(2)] = inst_17782);

(statearr_17788_17826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (20))){
var inst_17752 = (state_17786[(7)]);
var inst_17763 = (state_17786[(2)]);
var inst_17764 = cljs.core.next.call(null,inst_17752);
var inst_17738 = inst_17764;
var inst_17739 = null;
var inst_17740 = (0);
var inst_17741 = (0);
var state_17786__$1 = (function (){var statearr_17789 = state_17786;
(statearr_17789[(8)] = inst_17739);

(statearr_17789[(9)] = inst_17763);

(statearr_17789[(10)] = inst_17738);

(statearr_17789[(11)] = inst_17740);

(statearr_17789[(12)] = inst_17741);

return statearr_17789;
})();
var statearr_17790_17827 = state_17786__$1;
(statearr_17790_17827[(2)] = null);

(statearr_17790_17827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (1))){
var state_17786__$1 = state_17786;
var statearr_17791_17828 = state_17786__$1;
(statearr_17791_17828[(2)] = null);

(statearr_17791_17828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (4))){
var inst_17727 = (state_17786[(13)]);
var inst_17727__$1 = (state_17786[(2)]);
var inst_17728 = (inst_17727__$1 == null);
var state_17786__$1 = (function (){var statearr_17792 = state_17786;
(statearr_17792[(13)] = inst_17727__$1);

return statearr_17792;
})();
if(cljs.core.truth_(inst_17728)){
var statearr_17793_17829 = state_17786__$1;
(statearr_17793_17829[(1)] = (5));

} else {
var statearr_17794_17830 = state_17786__$1;
(statearr_17794_17830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (15))){
var state_17786__$1 = state_17786;
var statearr_17798_17831 = state_17786__$1;
(statearr_17798_17831[(2)] = null);

(statearr_17798_17831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (21))){
var state_17786__$1 = state_17786;
var statearr_17799_17832 = state_17786__$1;
(statearr_17799_17832[(2)] = null);

(statearr_17799_17832[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (13))){
var inst_17739 = (state_17786[(8)]);
var inst_17738 = (state_17786[(10)]);
var inst_17740 = (state_17786[(11)]);
var inst_17741 = (state_17786[(12)]);
var inst_17748 = (state_17786[(2)]);
var inst_17749 = (inst_17741 + (1));
var tmp17795 = inst_17739;
var tmp17796 = inst_17738;
var tmp17797 = inst_17740;
var inst_17738__$1 = tmp17796;
var inst_17739__$1 = tmp17795;
var inst_17740__$1 = tmp17797;
var inst_17741__$1 = inst_17749;
var state_17786__$1 = (function (){var statearr_17800 = state_17786;
(statearr_17800[(8)] = inst_17739__$1);

(statearr_17800[(10)] = inst_17738__$1);

(statearr_17800[(11)] = inst_17740__$1);

(statearr_17800[(12)] = inst_17741__$1);

(statearr_17800[(14)] = inst_17748);

return statearr_17800;
})();
var statearr_17801_17833 = state_17786__$1;
(statearr_17801_17833[(2)] = null);

(statearr_17801_17833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (22))){
var state_17786__$1 = state_17786;
var statearr_17802_17834 = state_17786__$1;
(statearr_17802_17834[(2)] = null);

(statearr_17802_17834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (6))){
var inst_17727 = (state_17786[(13)]);
var inst_17736 = f.call(null,inst_17727);
var inst_17737 = cljs.core.seq.call(null,inst_17736);
var inst_17738 = inst_17737;
var inst_17739 = null;
var inst_17740 = (0);
var inst_17741 = (0);
var state_17786__$1 = (function (){var statearr_17803 = state_17786;
(statearr_17803[(8)] = inst_17739);

(statearr_17803[(10)] = inst_17738);

(statearr_17803[(11)] = inst_17740);

(statearr_17803[(12)] = inst_17741);

return statearr_17803;
})();
var statearr_17804_17835 = state_17786__$1;
(statearr_17804_17835[(2)] = null);

(statearr_17804_17835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (17))){
var inst_17752 = (state_17786[(7)]);
var inst_17756 = cljs.core.chunk_first.call(null,inst_17752);
var inst_17757 = cljs.core.chunk_rest.call(null,inst_17752);
var inst_17758 = cljs.core.count.call(null,inst_17756);
var inst_17738 = inst_17757;
var inst_17739 = inst_17756;
var inst_17740 = inst_17758;
var inst_17741 = (0);
var state_17786__$1 = (function (){var statearr_17805 = state_17786;
(statearr_17805[(8)] = inst_17739);

(statearr_17805[(10)] = inst_17738);

(statearr_17805[(11)] = inst_17740);

(statearr_17805[(12)] = inst_17741);

return statearr_17805;
})();
var statearr_17806_17836 = state_17786__$1;
(statearr_17806_17836[(2)] = null);

(statearr_17806_17836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (3))){
var inst_17784 = (state_17786[(2)]);
var state_17786__$1 = state_17786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17786__$1,inst_17784);
} else {
if((state_val_17787 === (12))){
var inst_17772 = (state_17786[(2)]);
var state_17786__$1 = state_17786;
var statearr_17807_17837 = state_17786__$1;
(statearr_17807_17837[(2)] = inst_17772);

(statearr_17807_17837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (2))){
var state_17786__$1 = state_17786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17786__$1,(4),in$);
} else {
if((state_val_17787 === (23))){
var inst_17780 = (state_17786[(2)]);
var state_17786__$1 = state_17786;
var statearr_17808_17838 = state_17786__$1;
(statearr_17808_17838[(2)] = inst_17780);

(statearr_17808_17838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (19))){
var inst_17767 = (state_17786[(2)]);
var state_17786__$1 = state_17786;
var statearr_17809_17839 = state_17786__$1;
(statearr_17809_17839[(2)] = inst_17767);

(statearr_17809_17839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (11))){
var inst_17752 = (state_17786[(7)]);
var inst_17738 = (state_17786[(10)]);
var inst_17752__$1 = cljs.core.seq.call(null,inst_17738);
var state_17786__$1 = (function (){var statearr_17810 = state_17786;
(statearr_17810[(7)] = inst_17752__$1);

return statearr_17810;
})();
if(inst_17752__$1){
var statearr_17811_17840 = state_17786__$1;
(statearr_17811_17840[(1)] = (14));

} else {
var statearr_17812_17841 = state_17786__$1;
(statearr_17812_17841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (9))){
var inst_17774 = (state_17786[(2)]);
var inst_17775 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17786__$1 = (function (){var statearr_17813 = state_17786;
(statearr_17813[(15)] = inst_17774);

return statearr_17813;
})();
if(cljs.core.truth_(inst_17775)){
var statearr_17814_17842 = state_17786__$1;
(statearr_17814_17842[(1)] = (21));

} else {
var statearr_17815_17843 = state_17786__$1;
(statearr_17815_17843[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (5))){
var inst_17730 = cljs.core.async.close_BANG_.call(null,out);
var state_17786__$1 = state_17786;
var statearr_17816_17844 = state_17786__$1;
(statearr_17816_17844[(2)] = inst_17730);

(statearr_17816_17844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (14))){
var inst_17752 = (state_17786[(7)]);
var inst_17754 = cljs.core.chunked_seq_QMARK_.call(null,inst_17752);
var state_17786__$1 = state_17786;
if(inst_17754){
var statearr_17817_17845 = state_17786__$1;
(statearr_17817_17845[(1)] = (17));

} else {
var statearr_17818_17846 = state_17786__$1;
(statearr_17818_17846[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (16))){
var inst_17770 = (state_17786[(2)]);
var state_17786__$1 = state_17786;
var statearr_17819_17847 = state_17786__$1;
(statearr_17819_17847[(2)] = inst_17770);

(statearr_17819_17847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17787 === (10))){
var inst_17739 = (state_17786[(8)]);
var inst_17741 = (state_17786[(12)]);
var inst_17746 = cljs.core._nth.call(null,inst_17739,inst_17741);
var state_17786__$1 = state_17786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17786__$1,(13),out,inst_17746);
} else {
if((state_val_17787 === (18))){
var inst_17752 = (state_17786[(7)]);
var inst_17761 = cljs.core.first.call(null,inst_17752);
var state_17786__$1 = state_17786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17786__$1,(20),out,inst_17761);
} else {
if((state_val_17787 === (8))){
var inst_17740 = (state_17786[(11)]);
var inst_17741 = (state_17786[(12)]);
var inst_17743 = (inst_17741 < inst_17740);
var inst_17744 = inst_17743;
var state_17786__$1 = state_17786;
if(cljs.core.truth_(inst_17744)){
var statearr_17820_17848 = state_17786__$1;
(statearr_17820_17848[(1)] = (10));

} else {
var statearr_17821_17849 = state_17786__$1;
(statearr_17821_17849[(1)] = (11));

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
});})(c__16170__auto__))
;
return ((function (switch__16079__auto__,c__16170__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16080__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16080__auto____0 = (function (){
var statearr_17822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17822[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16080__auto__);

(statearr_17822[(1)] = (1));

return statearr_17822;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16080__auto____1 = (function (state_17786){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17823){if((e17823 instanceof Object)){
var ex__16083__auto__ = e17823;
var statearr_17824_17850 = state_17786;
(statearr_17824_17850[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17851 = state_17786;
state_17786 = G__17851;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16080__auto__ = function(state_17786){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16080__auto____1.call(this,state_17786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto__))
})();
var state__16172__auto__ = (function (){var statearr_17825 = f__16171__auto__.call(null);
(statearr_17825[(6)] = c__16170__auto__);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto__))
);

return c__16170__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17853 = arguments.length;
switch (G__17853) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17856 = arguments.length;
switch (G__17856) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__17859 = arguments.length;
switch (G__17859) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16170__auto___17906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17906,out){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17906,out){
return (function (state_17883){
var state_val_17884 = (state_17883[(1)]);
if((state_val_17884 === (7))){
var inst_17878 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17885_17907 = state_17883__$1;
(statearr_17885_17907[(2)] = inst_17878);

(statearr_17885_17907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (1))){
var inst_17860 = null;
var state_17883__$1 = (function (){var statearr_17886 = state_17883;
(statearr_17886[(7)] = inst_17860);

return statearr_17886;
})();
var statearr_17887_17908 = state_17883__$1;
(statearr_17887_17908[(2)] = null);

(statearr_17887_17908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (4))){
var inst_17863 = (state_17883[(8)]);
var inst_17863__$1 = (state_17883[(2)]);
var inst_17864 = (inst_17863__$1 == null);
var inst_17865 = cljs.core.not.call(null,inst_17864);
var state_17883__$1 = (function (){var statearr_17888 = state_17883;
(statearr_17888[(8)] = inst_17863__$1);

return statearr_17888;
})();
if(inst_17865){
var statearr_17889_17909 = state_17883__$1;
(statearr_17889_17909[(1)] = (5));

} else {
var statearr_17890_17910 = state_17883__$1;
(statearr_17890_17910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (6))){
var state_17883__$1 = state_17883;
var statearr_17891_17911 = state_17883__$1;
(statearr_17891_17911[(2)] = null);

(statearr_17891_17911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (3))){
var inst_17880 = (state_17883[(2)]);
var inst_17881 = cljs.core.async.close_BANG_.call(null,out);
var state_17883__$1 = (function (){var statearr_17892 = state_17883;
(statearr_17892[(9)] = inst_17880);

return statearr_17892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17883__$1,inst_17881);
} else {
if((state_val_17884 === (2))){
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17883__$1,(4),ch);
} else {
if((state_val_17884 === (11))){
var inst_17863 = (state_17883[(8)]);
var inst_17872 = (state_17883[(2)]);
var inst_17860 = inst_17863;
var state_17883__$1 = (function (){var statearr_17893 = state_17883;
(statearr_17893[(10)] = inst_17872);

(statearr_17893[(7)] = inst_17860);

return statearr_17893;
})();
var statearr_17894_17912 = state_17883__$1;
(statearr_17894_17912[(2)] = null);

(statearr_17894_17912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (9))){
var inst_17863 = (state_17883[(8)]);
var state_17883__$1 = state_17883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17883__$1,(11),out,inst_17863);
} else {
if((state_val_17884 === (5))){
var inst_17860 = (state_17883[(7)]);
var inst_17863 = (state_17883[(8)]);
var inst_17867 = cljs.core._EQ_.call(null,inst_17863,inst_17860);
var state_17883__$1 = state_17883;
if(inst_17867){
var statearr_17896_17913 = state_17883__$1;
(statearr_17896_17913[(1)] = (8));

} else {
var statearr_17897_17914 = state_17883__$1;
(statearr_17897_17914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (10))){
var inst_17875 = (state_17883[(2)]);
var state_17883__$1 = state_17883;
var statearr_17898_17915 = state_17883__$1;
(statearr_17898_17915[(2)] = inst_17875);

(statearr_17898_17915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17884 === (8))){
var inst_17860 = (state_17883[(7)]);
var tmp17895 = inst_17860;
var inst_17860__$1 = tmp17895;
var state_17883__$1 = (function (){var statearr_17899 = state_17883;
(statearr_17899[(7)] = inst_17860__$1);

return statearr_17899;
})();
var statearr_17900_17916 = state_17883__$1;
(statearr_17900_17916[(2)] = null);

(statearr_17900_17916[(1)] = (2));


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
});})(c__16170__auto___17906,out))
;
return ((function (switch__16079__auto__,c__16170__auto___17906,out){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17901[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17901[(1)] = (1));

return statearr_17901;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17883){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17902){if((e17902 instanceof Object)){
var ex__16083__auto__ = e17902;
var statearr_17903_17917 = state_17883;
(statearr_17903_17917[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17918 = state_17883;
state_17883 = G__17918;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17906,out))
})();
var state__16172__auto__ = (function (){var statearr_17904 = f__16171__auto__.call(null);
(statearr_17904[(6)] = c__16170__auto___17906);

return statearr_17904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17906,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17920 = arguments.length;
switch (G__17920) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16170__auto___17986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___17986,out){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___17986,out){
return (function (state_17958){
var state_val_17959 = (state_17958[(1)]);
if((state_val_17959 === (7))){
var inst_17954 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17960_17987 = state_17958__$1;
(statearr_17960_17987[(2)] = inst_17954);

(statearr_17960_17987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (1))){
var inst_17921 = (new Array(n));
var inst_17922 = inst_17921;
var inst_17923 = (0);
var state_17958__$1 = (function (){var statearr_17961 = state_17958;
(statearr_17961[(7)] = inst_17923);

(statearr_17961[(8)] = inst_17922);

return statearr_17961;
})();
var statearr_17962_17988 = state_17958__$1;
(statearr_17962_17988[(2)] = null);

(statearr_17962_17988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (4))){
var inst_17926 = (state_17958[(9)]);
var inst_17926__$1 = (state_17958[(2)]);
var inst_17927 = (inst_17926__$1 == null);
var inst_17928 = cljs.core.not.call(null,inst_17927);
var state_17958__$1 = (function (){var statearr_17963 = state_17958;
(statearr_17963[(9)] = inst_17926__$1);

return statearr_17963;
})();
if(inst_17928){
var statearr_17964_17989 = state_17958__$1;
(statearr_17964_17989[(1)] = (5));

} else {
var statearr_17965_17990 = state_17958__$1;
(statearr_17965_17990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (15))){
var inst_17948 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17966_17991 = state_17958__$1;
(statearr_17966_17991[(2)] = inst_17948);

(statearr_17966_17991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (13))){
var state_17958__$1 = state_17958;
var statearr_17967_17992 = state_17958__$1;
(statearr_17967_17992[(2)] = null);

(statearr_17967_17992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (6))){
var inst_17923 = (state_17958[(7)]);
var inst_17944 = (inst_17923 > (0));
var state_17958__$1 = state_17958;
if(cljs.core.truth_(inst_17944)){
var statearr_17968_17993 = state_17958__$1;
(statearr_17968_17993[(1)] = (12));

} else {
var statearr_17969_17994 = state_17958__$1;
(statearr_17969_17994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (3))){
var inst_17956 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17958__$1,inst_17956);
} else {
if((state_val_17959 === (12))){
var inst_17922 = (state_17958[(8)]);
var inst_17946 = cljs.core.vec.call(null,inst_17922);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17958__$1,(15),out,inst_17946);
} else {
if((state_val_17959 === (2))){
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17958__$1,(4),ch);
} else {
if((state_val_17959 === (11))){
var inst_17938 = (state_17958[(2)]);
var inst_17939 = (new Array(n));
var inst_17922 = inst_17939;
var inst_17923 = (0);
var state_17958__$1 = (function (){var statearr_17970 = state_17958;
(statearr_17970[(7)] = inst_17923);

(statearr_17970[(10)] = inst_17938);

(statearr_17970[(8)] = inst_17922);

return statearr_17970;
})();
var statearr_17971_17995 = state_17958__$1;
(statearr_17971_17995[(2)] = null);

(statearr_17971_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (9))){
var inst_17922 = (state_17958[(8)]);
var inst_17936 = cljs.core.vec.call(null,inst_17922);
var state_17958__$1 = state_17958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17958__$1,(11),out,inst_17936);
} else {
if((state_val_17959 === (5))){
var inst_17923 = (state_17958[(7)]);
var inst_17931 = (state_17958[(11)]);
var inst_17926 = (state_17958[(9)]);
var inst_17922 = (state_17958[(8)]);
var inst_17930 = (inst_17922[inst_17923] = inst_17926);
var inst_17931__$1 = (inst_17923 + (1));
var inst_17932 = (inst_17931__$1 < n);
var state_17958__$1 = (function (){var statearr_17972 = state_17958;
(statearr_17972[(11)] = inst_17931__$1);

(statearr_17972[(12)] = inst_17930);

return statearr_17972;
})();
if(cljs.core.truth_(inst_17932)){
var statearr_17973_17996 = state_17958__$1;
(statearr_17973_17996[(1)] = (8));

} else {
var statearr_17974_17997 = state_17958__$1;
(statearr_17974_17997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (14))){
var inst_17951 = (state_17958[(2)]);
var inst_17952 = cljs.core.async.close_BANG_.call(null,out);
var state_17958__$1 = (function (){var statearr_17976 = state_17958;
(statearr_17976[(13)] = inst_17951);

return statearr_17976;
})();
var statearr_17977_17998 = state_17958__$1;
(statearr_17977_17998[(2)] = inst_17952);

(statearr_17977_17998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (10))){
var inst_17942 = (state_17958[(2)]);
var state_17958__$1 = state_17958;
var statearr_17978_17999 = state_17958__$1;
(statearr_17978_17999[(2)] = inst_17942);

(statearr_17978_17999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17959 === (8))){
var inst_17931 = (state_17958[(11)]);
var inst_17922 = (state_17958[(8)]);
var tmp17975 = inst_17922;
var inst_17922__$1 = tmp17975;
var inst_17923 = inst_17931;
var state_17958__$1 = (function (){var statearr_17979 = state_17958;
(statearr_17979[(7)] = inst_17923);

(statearr_17979[(8)] = inst_17922__$1);

return statearr_17979;
})();
var statearr_17980_18000 = state_17958__$1;
(statearr_17980_18000[(2)] = null);

(statearr_17980_18000[(1)] = (2));


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
});})(c__16170__auto___17986,out))
;
return ((function (switch__16079__auto__,c__16170__auto___17986,out){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_17981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17981[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_17981[(1)] = (1));

return statearr_17981;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_17958){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_17958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e17982){if((e17982 instanceof Object)){
var ex__16083__auto__ = e17982;
var statearr_17983_18001 = state_17958;
(statearr_17983_18001[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18002 = state_17958;
state_17958 = G__18002;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_17958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_17958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___17986,out))
})();
var state__16172__auto__ = (function (){var statearr_17984 = f__16171__auto__.call(null);
(statearr_17984[(6)] = c__16170__auto___17986);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___17986,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18004 = arguments.length;
switch (G__18004) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16170__auto___18074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16170__auto___18074,out){
return (function (){
var f__16171__auto__ = (function (){var switch__16079__auto__ = ((function (c__16170__auto___18074,out){
return (function (state_18046){
var state_val_18047 = (state_18046[(1)]);
if((state_val_18047 === (7))){
var inst_18042 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
var statearr_18048_18075 = state_18046__$1;
(statearr_18048_18075[(2)] = inst_18042);

(statearr_18048_18075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (1))){
var inst_18005 = [];
var inst_18006 = inst_18005;
var inst_18007 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18046__$1 = (function (){var statearr_18049 = state_18046;
(statearr_18049[(7)] = inst_18007);

(statearr_18049[(8)] = inst_18006);

return statearr_18049;
})();
var statearr_18050_18076 = state_18046__$1;
(statearr_18050_18076[(2)] = null);

(statearr_18050_18076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (4))){
var inst_18010 = (state_18046[(9)]);
var inst_18010__$1 = (state_18046[(2)]);
var inst_18011 = (inst_18010__$1 == null);
var inst_18012 = cljs.core.not.call(null,inst_18011);
var state_18046__$1 = (function (){var statearr_18051 = state_18046;
(statearr_18051[(9)] = inst_18010__$1);

return statearr_18051;
})();
if(inst_18012){
var statearr_18052_18077 = state_18046__$1;
(statearr_18052_18077[(1)] = (5));

} else {
var statearr_18053_18078 = state_18046__$1;
(statearr_18053_18078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (15))){
var inst_18036 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
var statearr_18054_18079 = state_18046__$1;
(statearr_18054_18079[(2)] = inst_18036);

(statearr_18054_18079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (13))){
var state_18046__$1 = state_18046;
var statearr_18055_18080 = state_18046__$1;
(statearr_18055_18080[(2)] = null);

(statearr_18055_18080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (6))){
var inst_18006 = (state_18046[(8)]);
var inst_18031 = inst_18006.length;
var inst_18032 = (inst_18031 > (0));
var state_18046__$1 = state_18046;
if(cljs.core.truth_(inst_18032)){
var statearr_18056_18081 = state_18046__$1;
(statearr_18056_18081[(1)] = (12));

} else {
var statearr_18057_18082 = state_18046__$1;
(statearr_18057_18082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (3))){
var inst_18044 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18046__$1,inst_18044);
} else {
if((state_val_18047 === (12))){
var inst_18006 = (state_18046[(8)]);
var inst_18034 = cljs.core.vec.call(null,inst_18006);
var state_18046__$1 = state_18046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18046__$1,(15),out,inst_18034);
} else {
if((state_val_18047 === (2))){
var state_18046__$1 = state_18046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18046__$1,(4),ch);
} else {
if((state_val_18047 === (11))){
var inst_18010 = (state_18046[(9)]);
var inst_18014 = (state_18046[(10)]);
var inst_18024 = (state_18046[(2)]);
var inst_18025 = [];
var inst_18026 = inst_18025.push(inst_18010);
var inst_18006 = inst_18025;
var inst_18007 = inst_18014;
var state_18046__$1 = (function (){var statearr_18058 = state_18046;
(statearr_18058[(11)] = inst_18026);

(statearr_18058[(7)] = inst_18007);

(statearr_18058[(12)] = inst_18024);

(statearr_18058[(8)] = inst_18006);

return statearr_18058;
})();
var statearr_18059_18083 = state_18046__$1;
(statearr_18059_18083[(2)] = null);

(statearr_18059_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (9))){
var inst_18006 = (state_18046[(8)]);
var inst_18022 = cljs.core.vec.call(null,inst_18006);
var state_18046__$1 = state_18046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18046__$1,(11),out,inst_18022);
} else {
if((state_val_18047 === (5))){
var inst_18010 = (state_18046[(9)]);
var inst_18014 = (state_18046[(10)]);
var inst_18007 = (state_18046[(7)]);
var inst_18014__$1 = f.call(null,inst_18010);
var inst_18015 = cljs.core._EQ_.call(null,inst_18014__$1,inst_18007);
var inst_18016 = cljs.core.keyword_identical_QMARK_.call(null,inst_18007,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_18017 = ((inst_18015) || (inst_18016));
var state_18046__$1 = (function (){var statearr_18060 = state_18046;
(statearr_18060[(10)] = inst_18014__$1);

return statearr_18060;
})();
if(cljs.core.truth_(inst_18017)){
var statearr_18061_18084 = state_18046__$1;
(statearr_18061_18084[(1)] = (8));

} else {
var statearr_18062_18085 = state_18046__$1;
(statearr_18062_18085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (14))){
var inst_18039 = (state_18046[(2)]);
var inst_18040 = cljs.core.async.close_BANG_.call(null,out);
var state_18046__$1 = (function (){var statearr_18064 = state_18046;
(statearr_18064[(13)] = inst_18039);

return statearr_18064;
})();
var statearr_18065_18086 = state_18046__$1;
(statearr_18065_18086[(2)] = inst_18040);

(statearr_18065_18086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (10))){
var inst_18029 = (state_18046[(2)]);
var state_18046__$1 = state_18046;
var statearr_18066_18087 = state_18046__$1;
(statearr_18066_18087[(2)] = inst_18029);

(statearr_18066_18087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18047 === (8))){
var inst_18010 = (state_18046[(9)]);
var inst_18014 = (state_18046[(10)]);
var inst_18006 = (state_18046[(8)]);
var inst_18019 = inst_18006.push(inst_18010);
var tmp18063 = inst_18006;
var inst_18006__$1 = tmp18063;
var inst_18007 = inst_18014;
var state_18046__$1 = (function (){var statearr_18067 = state_18046;
(statearr_18067[(14)] = inst_18019);

(statearr_18067[(7)] = inst_18007);

(statearr_18067[(8)] = inst_18006__$1);

return statearr_18067;
})();
var statearr_18068_18088 = state_18046__$1;
(statearr_18068_18088[(2)] = null);

(statearr_18068_18088[(1)] = (2));


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
});})(c__16170__auto___18074,out))
;
return ((function (switch__16079__auto__,c__16170__auto___18074,out){
return (function() {
var cljs$core$async$state_machine__16080__auto__ = null;
var cljs$core$async$state_machine__16080__auto____0 = (function (){
var statearr_18069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18069[(0)] = cljs$core$async$state_machine__16080__auto__);

(statearr_18069[(1)] = (1));

return statearr_18069;
});
var cljs$core$async$state_machine__16080__auto____1 = (function (state_18046){
while(true){
var ret_value__16081__auto__ = (function (){try{while(true){
var result__16082__auto__ = switch__16079__auto__.call(null,state_18046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16082__auto__;
}
break;
}
}catch (e18070){if((e18070 instanceof Object)){
var ex__16083__auto__ = e18070;
var statearr_18071_18089 = state_18046;
(statearr_18071_18089[(5)] = ex__16083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18090 = state_18046;
state_18046 = G__18090;
continue;
} else {
return ret_value__16081__auto__;
}
break;
}
});
cljs$core$async$state_machine__16080__auto__ = function(state_18046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16080__auto____1.call(this,state_18046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16080__auto____0;
cljs$core$async$state_machine__16080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16080__auto____1;
return cljs$core$async$state_machine__16080__auto__;
})()
;})(switch__16079__auto__,c__16170__auto___18074,out))
})();
var state__16172__auto__ = (function (){var statearr_18072 = f__16171__auto__.call(null);
(statearr_18072[(6)] = c__16170__auto___18074);

return statearr_18072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16172__auto__);
});})(c__16170__auto___18074,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
