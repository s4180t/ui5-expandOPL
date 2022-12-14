sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/core/mvc/Controller"], function (JSONModel, Controller) {
    "use strict";

    return Controller.extend("sap.uxap.sample.ObjectPageBlockBase.controller.ObjectPageBlockBase", {
        onInit: function () {
            this.oJsonConfigModel = new JSONModel({ subSectionLayout: "TitleOnTop" });
            this.getView().setModel(this.oJsonConfigModel, "ConfigModel");
            this.isTitleOnTop = true;
            this.byId("ObjectPageLayout")
                .getSections()
                .forEach(function (oSection) {
                    oSection.getSubSections().forEach(function (oSubSection) {
                        oSubSection.setMode("Expanded");
                        oSubSection.getBlocks().forEach(function (oBlock) {
                            oBlock.setMode("Expanded");
                            oBlock.setShowSubSectionMore(false);
                        });
                    });
                });
        },

        toggleTitle: function () {
            this.isTitleOnTop = !this.isTitleOnTop;
            this.oJsonConfigModel.setProperty("/subSectionLayout", this.isTitleOnTop ? "TitleOnTop" : "TitleOnLeft");
        }
    });
});
