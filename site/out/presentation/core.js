// Compiled by ClojureScript 1.9.229 {}
goog.provide('presentation.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('presentation.basics');
goog.require('presentation.collections');
goog.require('presentation.structs');
goog.require('presentation.zreagent_sandbox');
cljs.user = ({});
cljs.core.enable_console_print_BANG_.call(null);
presentation.core.main = (function presentation$core$main(){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null);
});
goog.exportSymbol('presentation.core.main', presentation.core.main);
