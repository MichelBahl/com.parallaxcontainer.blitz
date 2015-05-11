function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        height: "150dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "HEADER",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        height: "200dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        image: "/images/elevator.jpg",
        id: "__alloyId4"
    });
    $.__views.parallaxWidget = Alloy.createWidget("com.parallaxcontainer.blitz", "widget", {
        id: "parallaxWidget",
        height: "120",
        parallaxIntensity: "10",
        innerMargin: "1200",
        children: [ $.__views.__alloyId4 ],
        __parentSymbol: $.__views.__alloyId3
    });
    $.__views.parallaxWidget.setParent($.__views.__alloyId3);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        height: "42dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId5"
    });
    __alloyId0.push($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Some other Information",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        height: "42dp",
        backgroundColor: "#DEDEDE",
        id: "__alloyId7"
    });
    __alloyId0.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        backgroundColor: "#FFFFFF",
        id: "__alloyId8"
    });
    __alloyId0.push($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        height: "42dp",
        backgroundColor: "#DEDEDE",
        id: "__alloyId10"
    });
    __alloyId0.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: "42dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId11"
    });
    __alloyId0.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        height: "42dp",
        backgroundColor: "#DEDEDE",
        id: "__alloyId12"
    });
    __alloyId0.push($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        height: "250dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId13"
    });
    __alloyId0.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Ensure that there is enough content to scroll",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        height: "200dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId15"
    });
    __alloyId0.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createImageView({
        image: "/images/elevator.jpg",
        id: "__alloyId16"
    });
    $.__views.parallaxWidgetTwo = Alloy.createWidget("com.parallaxcontainer.blitz", "widget", {
        id: "parallaxWidgetTwo",
        height: "120",
        parallaxIntensity: "10",
        innerMargin: "1200",
        children: [ $.__views.__alloyId16 ],
        __parentSymbol: $.__views.__alloyId15
    });
    $.__views.parallaxWidgetTwo.setParent($.__views.__alloyId15);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        height: "350dp",
        backgroundColor: "#FFFFFF",
        id: "__alloyId17"
    });
    __alloyId0.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Ensure that there is enough content to scroll",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.tableView = Ti.UI.createTableView({
        data: __alloyId0,
        id: "tableView"
    });
    $.__views.index.add($.__views.tableView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.parallaxWidget.setViewWithScrollAbility($.tableView);
    $.parallaxWidgetTwo.setViewWithScrollAbility($.tableView);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;