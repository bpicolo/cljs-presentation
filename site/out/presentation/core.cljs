(ns presentation.core
  (:require
    [devcards.core]
    [presentation.basics]
    [presentation.collections]))

(enable-console-print!)

(defn ^:export main []
  (devcards.core/start-devcard-ui!))
