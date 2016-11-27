fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

};
// function initzoom(){
// 	var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
// 	var zoom = clientWidth / 320;
// 	if (clientWidth > 640) {
// 		zoom = 2;
// 	}
// 	window.zoom = zoom / 2;
// 	document.write('<style id="htmlzoom">html{font-size:' + (zoom * 50) + 'px;}</style>');
// 	window.addEventListener('resize', function() {
// 		clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
// 		zoom = clientWidth / 320;
// 		if (clientWidth > 640) {
// 			zoom = 2;
// 		}
// 		window.zoom = zoom / 2;
// 		document.getElementById('htmlzoom').innerHTML = 'html{font-size:' + (zoom * 50) + 'px;}';
// 	});
// }
// initzoom();
