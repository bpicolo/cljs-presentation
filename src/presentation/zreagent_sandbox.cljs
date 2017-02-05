(ns presentation.zreagent-sandbox
  (:require
    [reagent.core :as reagent :refer [atom]]
    [presentation.utils :refer [component-block eval-str]])
  (:require-macros
   [devcards.core :as dc :refer [defcard-rg defcard deftest]]))

(defcard-rg example-component
 "Here's a reagent component to toy with.
 Make sure the anonymous function at the ends stays as the last statement in the editor."
 (fn [data-atom _] [component-block data-atom])
 (atom {:input
"(defn reset-state [state]
   (reset! state {:count 0}))

(defn update-count-button [state update-func label]
 [:button.btn.btn-primary
  {:on-click #(swap! state update :count update-func)} label])

(defn reset-state-button [state]
 [:button.btn.btn-info {:on-click #(reset-state state)} \"Reset\"])

(defn display-count [count]
    [:h1 \"Count is: \" count])

(fn [state]
  [:div.container-fluid>div.row
   [:div {:style {:background-color \"#ccc\"
                  :border-radius \"4px\"
                  :padding \"8px\"}}
      [reset-state-button state]
      [:div
       [display-count (str (:count @state))]
       [update-count-button state inc \"Increment\"]
       [update-count-button state dec \"Decrement\"]]]])"
            :output nil
            :component-state (atom {})
        }),
 {:classname "larger-devcard"})
