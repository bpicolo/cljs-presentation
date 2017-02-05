(ns presentation.utils
  (:require
    [reagent.core :as reagent]
    [cljs.js :refer [empty-state eval js-eval]]
    [cljs.tools.reader :refer [read-string]]
    [cljsjs.codemirror]))


(defn img [url]
  [:img {:src url}])

(defn editor-did-mount [state]
  (fn [this]
    (let [cm (.fromTextArea  js/CodeMirror
                             (reagent/dom-node this)
                             #js {:mode "clojure"
                                  :lineNumbers true})]
      (.on cm "change" (fn [e]
                         (swap! state assoc :input (.getValue e)))))))

(defn editor [state]
  (reagent/create-class
   {:render (fn [] [:textarea
                            {:default-value (:input @state)
                             :auto-complete "off"}])
    :component-did-mount (editor-did-mount state)}))

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

(defn eval-component [s]
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
      [:div.code-block
       [editor state]
      [:div
        [:h3 "Result"]
        [:hr]
        [:div {:style {:font-size "30px"}}
         (if (:error output)
              [:p {:style {:color :red}} (str (:error output))]
              [:p (str (:value output))])]]])))


(defn component-editor-did-mount [state]
  (fn [this]
    (let [cm (.fromTextArea  js/CodeMirror
                             (reagent/dom-node this)
                             #js {:mode "clojure"
                                  :lineNumbers true
                                  :tabSize 2
                                  :theme "base16-dark"})]
      (.setSize cm "100%" "740px")
      (.on cm "change" (fn [e]
                         (swap! state assoc :input (.getValue e))
                         )))))

(defn component-editor [state]
  (reagent/create-class
   {:render (fn [] [:textarea
                            {:default-value (:input @state)
                             :auto-complete "off"}])
    :component-did-mount (component-editor-did-mount state)}))

(defn component-block [state]
  (fn [state]
    (let [output (eval-component (:input @state))]
      [:div.code-block
       [component-editor state]
      [:div
        [:h3 "Result"]
        [:hr]
        [:div {:style {:font-size "30px"}}
         (if (:error output)
              [:p {:style {:color :red}} (str (:error output))]
              [:div ((:value output) (:component-state @state))])]]])))
