function counting() {
	var today = new Date();
	
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	
	h = (h < 10 ? "0" : "") + h;
	m = (m < 10 ? "0" : "") + m;
	s = (s < 10 ? "0" : "") + s;
	
	var timeFormat = h + ":" + m + ":" + s;
	
	document.getElementById("timer").innerHTML = timeFormat;
	setTimeout("counting()", 500);
}