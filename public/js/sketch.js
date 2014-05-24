
var systems = [];
var cnt = 0;
var opac = 0;
var index = 0;

// arrow
var pos_arrow;
var tpos_arrow;

function setup() {
	createCanvas(1440, 735);//(1280, 720) //(displayWidth, displayHeight);
	addSystem();

	var tx = map(1, 0, 9, 0, width);
	pos_arrow = new PVector(tx, height*0.6 - 50);
	tpos_arrow = new PVector(tx, height*0.6 - 50);
}

function draw() {
	background(0);

	// particles show up
	for(var i = 0; i < systems.length; i++) {
		systems[i].update();
		systems[i].render();
	}

	// reset particle position
	if(cnt == 35) {
		for(var i = 0; i < systems.length; i++) {
			systems[i].setpos();
		}
	}

	// add axis
	if(cnt > 35) {
		for(var i = 0; i < systems.length; i++) {
			systems[i].update_axis();
			systems[i].render_axis();
		}
		opac = opac + 2;
		fill(160, opac);
		textSize(21);
		text("NUMBER OF SUICIDE IN SOUTH KOREA", 72, 75);
		fill(255, 153, 0, opac);
		text("2009", 72 + 425, 75);
	}

	// add arrow
	if(cnt > 50) {
		update_arrow();
		render_arrow();

		check_selected();
	}

	// control variable
	cnt++;
	if(opac > 225) {
		opac = 225;
	}
}

function addSystem() {
	systems.push(new ParticleSystem(81, 0));
	systems.push(new ParticleSystem(1009, 1));
	systems.push(new ParticleSystem(2382, 2));
	systems.push(new ParticleSystem(2768, 3));
	systems.push(new ParticleSystem(3060, 4));
	systems.push(new ParticleSystem(2032, 5));
	systems.push(new ParticleSystem(2145, 6));
	systems.push(new ParticleSystem(1926, 7));
}

// ARROW
function update_arrow() {
	pos_arrow.lerp(tpos_arrow, 0.5);
}

function render_arrow() {
	pushMatrix();
		translate(pos_arrow.x, pos_arrow.y);
		fill(255, 153, 0, opac);
		noStroke();
		triangle(0, 0, -9, -32, 9, -32);
		//ellipse(0, 0, 20, 20);
	popMatrix();
}

function check_selected() {
	for(var i = 0; i < systems.length; i++) {
		var s = systems[i];
		s.check_selected();

		if(s.selected) {
			tpos_arrow.x = s.tx;
			s.render_selected();
		}
	}
}


