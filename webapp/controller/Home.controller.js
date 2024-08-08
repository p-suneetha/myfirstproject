sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.sun.myproject.controller.Home", {
            onInit: function () {

            },
            onPressSubmit: function (oEvent) {
                var iSelectedIndex = this.getView().byId("groupC").getSelectedIndex();
                this.getView().byId("groupC").setValueState(iSelectedIndex === -1 ? 'Error' : 'None');
            },
            onGenderSelect:function(oEvent){
                oEvent.getSource().setValueState('Success');
            }
        });
    });
