/** @format */

document.addEventListener("DOMContentLoaded", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const tabTitle = tabs[0].title;

		document.getElementById("title").textContent = tabTitle;
	});
});
