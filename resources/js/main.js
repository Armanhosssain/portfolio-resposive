$(document).ready(function(){
	// sticky menu
	$(".js-service").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		}
	});
	// portfolio mixitup
	var mixer = mixitup('.container')
});
// mobile menu icon
function openNav(){
	document.getElementById('myNav').style.width="100%";
}
function closeNav(){
	document.getElementById('myNav').style.width="0%";
}