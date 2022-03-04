function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336); // w x h
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);

}

function draw() {
	game()
}







