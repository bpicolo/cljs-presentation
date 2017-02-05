(ns presentation.structs
  (:require
    [reagent.core :as reagent :refer [atom]]
    [presentation.utils :refer [eval-str code-block]])
  (:require-macros
   [devcards.core :as dc :refer [defcard-rg defcard deftest]]))

(defcard-rg records
  "Records are essentially Clojure's structs."
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(defrecord Cat [name ear_count])

(def piper (Cat. \"Piper\"  0))
(def mittens (Cat. \"Mittens\" 2))

(:name piper)
"
:output nil
}))


(defcard-rg protocols
  "Protocols are the Clojure version of interfaces, used for polymorphic dispath"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(defprotocol AnimalProtocol
    (make-noise [this]))

(defrecord Cat [name ear_count]
  AnimalProtocol
    (make-noise [this] (str \"meow\")))

(defrecord Dog [name ear_count]
  AnimalProtocol
    (make-noise [this] (str \"woof\")))

(def piper (Cat. \"Piper\" 0))
(def milo (Dog. \"Milo\" 2))

(make-noise piper)"
:output nil
}))
