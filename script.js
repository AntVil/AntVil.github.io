let projectList;
let background;

let frame;

window.onload = function () {
	projectList = new ProjectList("tagSelect", "projectList");
	background = new Background("backgroundCanvas");

	frame = 0;
	loop();
}

function loop() {
	background.render(frame);

	frame++;
	requestAnimationFrame(loop);
}



