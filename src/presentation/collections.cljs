(ns presentation.collections
  (:require
    [reagent.core :as reagent :refer [atom]]
    [presentation.utils :refer [code-block eval-str img]])
  (:require-macros
   [devcards.core :as dc :refer [defcard-rg defcard deftest]]))

(defcard-rg a-list
  "Lists are the basic elements in any Lisp, ClojureScript no exception. All the source code is just lists, recall."
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"'(1 3 2)  ; The ' is necessary, because otherwise this would
          ; try to call a function \"1\" with args 3 and 2" :output nil}))

(defcard-rg a-list-2
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(list 1 3 \"better\")  ; For single-quote haters like me" :output nil}))

(defcard-rg constructor
  "Vectors are lists, but indexable (you'll rarely use lists over vectors)"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "[1 2 3]" :output nil}))

(defcard-rg get
  "Accessing elements in a vector"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(get [1 2 3] 1)" :output nil}))

(defcard-rg conj
  "Pushing things onto the vector."
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(conj [1 2 3] 4)" :output nil}))

(defcard-rg why-conj?  (fn [_ _] [img "resources/img/what.gif"]))

(defcard-rg cons
  "Put something onto the front"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(cons 4 [1 2 3])" :output nil}))

(defcard-rg sorting
  "We can do all the standard collections things."
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(sort [3 2 7])" :output nil}))

(defcard-rg getting-back-the-vector
  "You may have to translate back to your original data structure"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "(vec (sort [3 2 7]))" :output nil}))

(defcard-rg last-but-not-least
  "Mapping types (what you'll use most)"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input "{1 \"Hi!\", 2 \"There\"}" :output nil}))

(defcard-rg keywords
  "Introducing keywords"
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
":i-am-a-keyword"
:output nil
}))

(defcard-rg keywords
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"{:id 1 :name \"Ben Picolo\" :credit-card-number \"Nice Try\"}"
:output nil
}))

(defcard-rg using-maps
  ""
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})
(get ben :name)"
:output nil
}))

(defcard-rg hmm
  (fn [_ _] [:h2 "That seems kind of annoying. Can we do better?"])
  {}
  {:heading false})


(defcard-rg using-maps2
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})
(:name ben)  ; Keywords are the secret sauce"
:output nil
}))


(defcard-rg using-maps2
  "This seems kind of annoying too, though."
 (fn [data-atom _] [code-block data-atom])
 (atom {:input
"(def ben {:id 1 :name \"Ben Picolo\" :address {:city \"Ithaca\"}})
(:city (:address ben))"
:output nil
}))
