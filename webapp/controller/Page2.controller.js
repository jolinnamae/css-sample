sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"  // Import MessageBox
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("css.training.csssample.controller.Page2", {

        // Navigate to Home (Page1)
        onHomePress: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();  // Get i18n model
            var homeMessage = oBundle.getText("homeMessage");  // Fetch the previous page message from i18n properties
        
            // Show MessageBox
            MessageBox.show(
                homeMessage,  // Message content
                MessageBox.Icon.INFORMATION,  // MessageBox type (e.g., Information)
                oBundle.getText("pageTitle"),  // MessageBox title from i18n
                [sap.m.MessageBox.Action.OK],  // Buttons for the MessageBox
                // onClose function to navigate to Page1
                function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RoutePage1");  // Navigate to Page1 after the MessageBox is closed
                }.bind(this)  // Binding the context to the controller
            );
        },

        // Navigate to Previous Page (Page1)
        onNavigateToPage1: function () {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();  // Get i18n model
            var prevPageMessage = oBundle.getText("previousPageMessage");  // Fetch the previous page message from i18n properties
        
            // Show MessageBox
            MessageBox.show(
                prevPageMessage,  // Message content
                MessageBox.Icon.INFORMATION,  // MessageBox type (e.g., Information)
                oBundle.getText("pageTitle"),  // MessageBox title from i18n
                [sap.m.MessageBox.Action.OK],  // Buttons for the MessageBox
                // onClose function to navigate to Page1
                function() {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RoutePage1");  // Navigate to Page1 after the MessageBox is closed
                }.bind(this)  // Binding the context to the controller
            );
        }
        
    });
});
