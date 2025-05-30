/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"css/training/csssample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
