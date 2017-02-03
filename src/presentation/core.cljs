(ns presentation.core
  (:require
    [devcards.core]
    [presentation.basics]
    [presentation.collections]))

(set! (. js/cljs -user) #js {})

(enable-console-print!)

(defn ^:export main []
  (devcards.core/start-devcard-ui!))
