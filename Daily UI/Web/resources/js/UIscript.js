var duration = 2;
var time=2;
var bouncers=document.querySelectorAll(".bounceIn img");
for (var i =0;i<bouncers.length ;i++){
	bouncers[i].style.animationDuration = duration+"s";
	duration += 0.5;
}
var growth=document.querySelectorAll(".growIn input");
for (var i =growth.length-1 ;i>=0 ;i--){
	growth[i].style.animationDuration = time+"s";
	time += 0.5;
}