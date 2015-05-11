function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.parallaxcontainer.blitz/" + s : s.substring(0, index) + "/com.parallaxcontainer.blitz/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function init(args) {
        if (args.children[0]) {
            parallaxItem.height = parseInt(args.height) + parseInt(args.innerMargin);
            parallaxItem.top = parallaxItem._top = -args.innerMargin / 2;
            parallaxItem.addEventListener("postlayout", postlayout);
            Ti.API.info("parallaxItem.top: " + parallaxItem.top);
            $.parallaxContainerView.add(parallaxItem);
        }
    }
    function setViewWithScrollAbility(parent) {
        parent.addEventListener("scroll", updateScroll);
    }
    function postlayout() {
        isOnScreen || (calculatedOffset = 0);
        isOnScreen = true;
    }
    function updateScroll(e) {
        parallaxItem.top = parallaxItem._top + e.contentOffset.y / parallaxIntensity;
    }
    new (require("alloy/widget"))("com.parallaxcontainer.blitz");
    this.__widgetId = "com.parallaxcontainer.blitz";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.parallaxContainerView = Ti.UI.createView({
        id: "parallaxContainerView"
    });
    $.__views.parallaxContainerView && $.addTopLevelView($.__views.parallaxContainerView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var calculatedOffset = 0;
    var isOnScreen = false;
    var parallaxIntensity = parseInt(args.parallaxIntensity) || 5;
    var parallaxItem = args.children && args.children[0];
    init(args);
    exports.setViewWithScrollAbility = setViewWithScrollAbility;
    exports.init = init;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;