var can;
var c;

var points;

var spin;
var angle = 0;

var lines = 32; //even

var hueCounter;

var mousedown = false;

window.onload = function(){
	can = document.getElementById("can");
	can.width = window.innerWidth;
	can.height = window.innerHeight;
	c = can.getContext("2d");

	can.addEventListener("touchstart", function(e){
	   c.globalAlpha = "1";
	   c.fillStyle = "#000000";
	   c.fillRect(0, 0, can.width, can.height);
		//e.preventDefault();
		points = [];
		points.push([Math.atan2(can.width/2 - e.touches[0].clientX, can.height/2 - e.touches[0].clientY), Math.hypot(can.width/2 - e.touches[0].clientX, can.height/2 - e.touches[0].clientY)]);
		spin = false;
		angle = 0;
	});

	can.addEventListener("touchmove", function(e){
		points.push([Math.atan2(can.width/2 - e.touches[0].clientX, can.height/2 - e.touches[0].clientY), Math.hypot(can.width/2 - e.touches[0].clientX, can.height/2 - e.touches[0].clientY)]);
		if(points.length > 500){
			points.splice(0, 1);
		}
	});

	can.addEventListener("touchend", function(e){
		spin = true;
	});

	mouseDown = false;
	can.addEventListener("mousedown", function(e){
	   c.globalAlpha = "1";
	   c.fillStyle = "#000000";
	   c.fillRect(0, 0, can.width, can.height);
		//e.preventDefault();
		points = [];
		points.push([Math.atan2(can.width/2 - e.clientX, can.height/2 - e.clientY), Math.hypot(can.width/2 - e.clientX, can.height/2 - e.clientY)]);
		spin = false;
		angle = 0;
		mouseDown = true;
	});

	can.addEventListener("mousemove", function(e){
		if(!mousedown){
			return;
		}
		points.push([Math.atan2(can.width/2 - e.clientX, can.height/2 - e.clientY), Math.hypot(can.width/2 - e.clientX, can.height/2 - e.clientY)]);
		if(points.length > 500){
			points.splice(0, 1);
		}
	});

	can.addEventListener("mouseup", function(e){
		spin = true;
		mouseDown = false;
	});

	hueCounter = 0;

	points = [];
	loop();
}


function loop(){
	c.globalAlpha = document.getElementById("alpha").value
	c.fillStyle = "#000000";
	c.fillRect(0, 0, can.width, can.height);

	
	for(var a=0;a<lines;a++){
		for(var i=0;i<points.length-1;i++){
			c.globalAlpha = i/points.length;
			if(a % 2 == 1){
				c.strokeStyle = "hsl(" + hueCounter + ", 100%, 50%)";
				var x1 = can.width/2 + Math.sin(points[i][0] + angle + 2*Math.PI*a/lines) * points[i][1];
				var y1 = can.height/2 + Math.cos(points[i][0] + angle + 2*Math.PI*a/lines) * points[i][1];
				var x2 = can.width/2 + Math.sin(points[i+1][0] + angle + 2*Math.PI*a/lines) * points[i+1][1];
				var y2 = can.height/2 + Math.cos(points[i+1][0] + angle + 2*Math.PI*a/lines) * points[i+1][1];
				c.beginPath();
				c.moveTo(x1, y1);
				c.lineTo(x2, y2);
				c.stroke();
			}else{
				c.strokeStyle = "hsl(" + hueCounter + ", 50%, 50%)";
				var x1 = can.width/2 - Math.cos(points[i][0] + angle + 2*Math.PI*a/lines - Math.PI/2) * points[i][1];
				var y1 = can.height/2 - Math.sin(points[i][0] + angle + 2*Math.PI*a/lines - Math.PI/2) * points[i][1];
				var x2 = can.width/2 - Math.cos(points[i+1][0] + angle + 2*Math.PI*a/lines - Math.PI/2) * points[i+1][1];
				var y2 = can.height/2 - Math.sin(points[i+1][0] + angle + 2*Math.PI*a/lines - Math.PI/2) * points[i+1][1];
				c.beginPath();
				c.moveTo(x1, y1);
				c.lineTo(x2, y2);
				c.stroke();
			}
		}
	}

	if(spin){
		angle += Math.PI/720;
	}

	hueCounter++;
	requestAnimationFrame(loop);
}
