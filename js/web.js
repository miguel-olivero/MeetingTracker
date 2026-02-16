concepts = 1;

counter = 0;
var counterFunction;

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("people").addEventListener("input", updateTotalCost);
	document.getElementById("cost").addEventListener("input", updateTotalCost);
	updateCounterDisplay();
	updateTotalCost();
});

function start(){
	clearInterval(counterFunction);
	counterFunction = setInterval(doCount, 1000);
	document.getElementById("status").innerHTML = "and counting";

}

function stop(){
	
	clearInterval(counterFunction);
	document.getElementById("status").innerHTML = "so far";
}

function resetTracker(){
	clearInterval(counterFunction);
	counter = 0;
	document.getElementById("status").innerHTML = "";
	updateCounterDisplay();
	updateTotalCost();
}


function doCount(){

	counter = counter +1;	
	updateCounterDisplay();
	updateTotalCost();
	 
}

function updateCounterDisplay(){
	
	var minutos = Math.floor(counter/60);
	var segundos = counter-(minutos*60);

	if( minutos > 0 ){
		document.getElementById("counter").innerHTML = minutos + "'" +((segundos>9)?segundos:""+0+segundos)+"\"";
	}else{
		document.getElementById("counter").innerHTML = ((segundos>9)?segundos:""+0+segundos)+"\""; 
	}

}

function updateTotalCost(){
	var people = parseFloat(document.getElementById("people").value) || 0;
	var cost = (parseFloat(document.getElementById("cost").value) || 0) / 60 / 60;
	document.getElementById("totalCost").innerHTML = (counter * people * cost).toFixed(2);
}
