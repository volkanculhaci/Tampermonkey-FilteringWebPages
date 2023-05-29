// ==UserScript==
// @name         Trendyol Most Rated
// @namespace    VolkanCulhaci
// @version      1.0
// @description  Automatically selects the "MOST_RATED" option from the dropdown menu on trendyol.com
// @author       VolkanCulhaci
// @match        https://www.trendyol.com/*
// @grant        none
// ==/UserScript==
(function () {
	'use strict';

	// Function to click the dropdown menu and select the "MOST_RATED" option
	function clickAndSelectMostRatedOption() {
		var selectElement = document.querySelector('select');
		if (selectElement) {
			selectElement.value = 'MOST_RATED';
			selectElement.dispatchEvent(new Event('change', { bubbles: true }));
		}
	}

	// Wait for the page to load and then click the dropdown menu and select the "MOST_RATED" option
	window.addEventListener('load', function () {
		clickAndSelectMostRatedOption();
	});
})();
