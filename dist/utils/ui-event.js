define(["require", "exports", "./ui-utils", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, ui_utils_1, aurelia_framework_1, aurelia_event_aggregator_1) {
    "use strict";
    var UIEvent;
    (function (UIEvent) {
        function fireEvent(event, element, data) {
            var e = aurelia_framework_1.DOM.createCustomEvent(event, { bubbles: true, cancelable: true, detail: data });
            return element.dispatchEvent(e);
        }
        UIEvent.fireEvent = fireEvent;
        var __ea;
        var __ob;
        var __tq;
        function broadcast(event, data) {
            if (!__ea) {
                __ea = ui_utils_1.UIUtils.lazy(aurelia_event_aggregator_1.EventAggregator);
            }
            __ea.publish(event, data);
        }
        UIEvent.broadcast = broadcast;
        function subscribe(event, callback) {
            if (!__ea) {
                __ea = ui_utils_1.UIUtils.lazy(aurelia_event_aggregator_1.EventAggregator);
            }
            return __ea.subscribe(event, callback);
        }
        UIEvent.subscribe = subscribe;
        function observe(object, property) {
            if (!__ob) {
                __ob = ui_utils_1.UIUtils.lazy(aurelia_framework_1.BindingEngine);
            }
            return __ob.propertyObserver(object, property);
        }
        UIEvent.observe = observe;
        function queueTask(fn) {
            if (!__tq) {
                __tq = ui_utils_1.UIUtils.lazy(aurelia_framework_1.TaskQueue);
            }
            __tq.queueTask(fn);
        }
        UIEvent.queueTask = queueTask;
    })(UIEvent = exports.UIEvent || (exports.UIEvent = {}));
});
