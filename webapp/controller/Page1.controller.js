sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"  // Import MessageBox
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("css.training.csssample.controller.Page1", {

        // Navigate to Home (Page1)
        onHomePress: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();  // Get i18n model
            var homeMessage = oBundle.getText("homeMessage");  // Fetch the home message from i18n properties

            MessageBox.show(homeMessage, {
                onClose: function () {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RoutePage1");  // Navigate to Page1 after the MessageBox is closed
                }.bind(this)
            });
        },

        // Navigate to Next Page (Page2)
        onNavigateToPage2: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();  // Get i18n model
            var nextPageMessage = oBundle.getText("nextPageMessage");  // Fetch the next page message from i18n properties

            MessageBox.show(nextPageMessage, {
                onClose: function () {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RoutePage2");  // Navigate to Page2 after the MessageBox is closed
                }.bind(this)
            });
        }
    });
});
