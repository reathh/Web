function calcCircleArea (r) {
	return Math.PI * Math.pow(r, 2)
}
document.getElementById("7").innerHTML += calcCircleArea(7)
document.getElementById("1.5").innerHTML += calcCircleArea(1.5)
document.getElementById("20").innerHTML += calcCircleArea(20)