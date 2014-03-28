(function(){
	function init() {
		var t = Math.floor(new Date().getTime() / 1000);
		var b = document.getElementsByTagName("body")[0];
		var s = document.createElement('script');
		s.src = "http://wouterverweirder.github.io/js-experiments/rstbcs14/js/app.min.js?t=" + t;
		b.appendChild(s);
	}
	init();
})();