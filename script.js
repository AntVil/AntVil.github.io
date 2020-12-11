let can;
let c;


let frame = 0;

window.onload = function(){
	can = document.getElementById("backgroundCanvas");
	c = can.getContext("2d");

	setupProjectSelector();
	loadProjectDescriptions();

	loop();
}

function loop(){
	c.clearRect(0, 0, can.width, can.height);

	c.fillStyle = `hsl(${frame % 360}, 100%, 50%)`;
	c.fillRect(0, 0, can.width, can.height);

	frame++;
	requestAnimationFrame(loop);
}



function setupProjectSelector(){
	let selector = document.getElementById("tagSelection");
	selector.innerHTML = "";
}

function loadProjectDescriptions(){

}