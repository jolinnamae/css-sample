/*global QUnit*/

sap.ui.define([
	"css/training/csssample/controller/Page1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Page1 Controller");

	QUnit.test("I should test the Page1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
