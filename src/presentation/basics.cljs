(ns presentation.basics
  (:require
    [presentation.utils :refer [code-block eval-str]]
    [reagent.core :as reagent :refer [atom]])
  (:require-macros
   [devcards.core :as dc :refer [defcard-rg deftest]]))



(defcard-rg intro
  "A ClojureScript crash course."
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(str \"which is interactive\")" :output nil :rows 12}))

(defcard-rg constructor
  "Calling a function"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(odd? 1)  ; Question marks are allowed in names! By convention,
           ; this means it should return a boolean." :output nil}))

(defcard-rg math
  "Lisps use prefix notation for mathematical operators. This does take a little getting used to!"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(+ 1 4)" :output nil}))

(defcard-rg math-why?
  "Why ruin a good thing like infix notation?"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(+ 1 4 5 6)  ; Oh daaaaaang." :output nil}))

(defcard-rg variables
  "How about defining variables"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(def globally-scoped 4)
(* globally-scoped 2)"
:output nil
}))


(defcard-rg variables-lex
  "Lexically-scoped variables?"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(let [lexical 6]
    (* lexical 3))"
:output nil
}))

(defcard-rg variables-lex2
  "Are we sure?"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(let [lexical 6])
(* lexical 3)"
:output nil
}))

(defcard-rg variables-function
  "Defining a function"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(defn multiply-by-two [number] (* 2 number))
(multiply-by-two 17)"
:output nil
}))

(defcard-rg variables-function
  "Defining an anonymous function"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"((fn [number] (* 2 number)) 4)"
:output nil
}))

(defcard-rg control-structures
  "Good old if is here for you"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(if (> 0 5)
     \"Bigger\"
     \"Smaller\"))"
:output nil
}))

(defcard-rg the-best-operator
  "And don't worry. It is possible to have code run \"in order\""
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(-> 2
    inc
    inc)"
:output nil
}))
