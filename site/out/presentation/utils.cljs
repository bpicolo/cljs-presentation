(ns presentation.utils
  (:require
    [cljs.js :refer [empty-state eval js-eval]]
    [cljs.tools.reader :refer [read-string]]))


(defn eval-str [s]
  (try
    (eval (empty-state)
          ; Surround everything in a single block so we can execute many-lines properly
          (read-string (str "(let []" s "\n)"))
          {:eval       js-eval
           :source-map true
           :context    :expr}
          (fn [result] result))
    (catch js/Error e
      {:error (-> e .-message)})))

(defn code-block [state]
  (fn [state]
    (let [output (eval-str (:input @state))]
      [:div
      [:textarea.form-control {:value (:input @state)
                               :rows (if (:rows @state) (:rows @state) 3)
                               :id "code-block-input"
                  :on-change #(swap! state assoc :input (-> % .-target .-value))}]
      [:div
        [:h3 "Result"]
        [:hr]
        [:div {:style {:font-size "30px"}}
         (if (:error output)
              [:p {:style {:color :red}} (str (:error output))]
              [:p (str (:value output))])]]])))
