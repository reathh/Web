var currenttime = new Date();
var hours = currenttime.getHours();
var minutes = currenttime.getMinutes();
if (minutes < 10){
	console.log(hours + ":" + 0 + minutes);
} else {
	console.log(hours + ":" + minutes);
}