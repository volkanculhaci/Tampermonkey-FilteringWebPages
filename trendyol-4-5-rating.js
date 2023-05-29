// ==UserScript==
// @name         Trendyol 4.5 Yıldız Ve Üzeri Auto Click
// @namespace    volkanculhaci
// @version      1.0
// @description  Automatically clicks the "Ürün Değerlendirmesi" button on trendyol.com and applies the rating filter
// @author       VolkanCulhaci
// @match        https://www.trendyol.com/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// Function to click the desired element
	function clickElement() {
		var buttons = document.querySelectorAll('div.fltr-cntnr-ttl');
		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i];
			if (button.innerText.trim() === 'Ürün Değerlendirmesi') {
				button.click();
				applyFilter();
				break;
			}
		}
	}

	// Function to apply the rating filter
	function applyFilter() {
		// Wait for the filter options to load
		setTimeout(function () {
			var filterButtons = document.querySelectorAll('.fltr-item-text');
			for (var i = 0; i < filterButtons.length; i++) {
				var filterButton = filterButtons[i];
				if (filterButton.innerText.trim() === '4.5 Yıldız Ve Üzeri') {
					filterButton.click();
					break;
				} else if (filterButton.innerText.trim() === '4 Yıldız Ve Üzeri') {
					filterButton.click();
					break;
				}
			}
		}, 1000); // Adjust the delay (in milliseconds) based on the page loading speed
	}

	// Wait for the page to load and then click the element
	window.addEventListener('load', function () {
		clickElement();
	});
})();
