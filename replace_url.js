//	Replace this path where you have the folder installed
//	Example: "C:/Downloads/Reign-of-Terror-Offline-Wiki"
const path = "C:/Change/This/Path";

function removeHttp(url) {
	return url.replace("https://www.reignofterrorgd.com", "");
}
function changeUrl() {
	var links = document.links;

	for (var i = 0, iLen = links.length; i < iLen; i++) {
		links[i].href = path + removeHttp(links[i].href) + "/index.html";
	}
	console.log(links);
}

changeUrl();
