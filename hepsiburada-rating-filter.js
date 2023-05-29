// ==UserScript==
// @name         Hepsiburada Auto Filter
// @namespace    volkanculhaci
// @version      1.0
// @description  Automatically filters high-rating products on hepsiburada.com
// @author       VolkanCulhaci
// @match        https://www.hepsiburada.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Function to click the desired element
	function clickElement(selector) {
		var element = document.querySelector(selector);
		if (element) {
			element.click();
		}
	}

	// Wait for the page to load and then click the elements
	window.addEventListener('load', function () {
		// Click the filter option
		clickElement('.content-CjbQoEcUlPW8lzvdKEij.content-FobJzhPUedTJvVkU3Xd1');

		// Wait for the page to refresh and then click the sorting option
		setTimeout(function () {
			clickElement('.horizontalSortingBar-Ce404X9mUYVCRa5bjV4D');

			// Wait for the dropdown menu to open and then select the desired option
			setTimeout(function () {
				var options = document.querySelectorAll(
					'.horizontalSortingBar-PkoDOH7UsCwBrQaQx9bn'
				);
				for (var i = 0; i < options.length; i++) {
					var option = options[i];
					if (option.innerText.trim() === 'Çok değerlendirilenler') {
						option.click();
						break;
					}
				}
			}, 500);
		}, 1000);
	});
})();
