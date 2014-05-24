
function ParticleSystem(num, index) {
	this.particles = [];
	this.num = num;
	this.index = index; // from 0 to 7
	for(var i = 0; i < num; i++) {
		this.particles.push(new Particle());
	}

	// about axis
	var gap = width/18;
	this.tx = map(this.index+1, 0, 9, 0, width);
	this.ty = height*0.6 + 50;

	this.pos_axis = new PVector(0, this.ty);
	this.tpos_axis = new PVector(this.tx - gap, this.ty);

	this.selected = false;
}

ParticleSystem.prototype.update = function() {
	for(var i = 0; i < this.particles.length; i++) {
		var p = this.particles[i];
		p.update();
	}
}

ParticleSystem.prototype.render = function() {
	for(var i = 0; i < this.particles.length; i++) {
		var p = this.particles[i];
		p.render();
	}
}

ParticleSystem.prototype.setpos = function() {
	var total = 15413;
	var dia = map(this.num, 0, total, 5, 275);

	for(var i = 0; i < this.particles.length; i++) {
		var p = this.particles[i];
		var d = random(0, dia);
		var th = random(0, TAU);
		var x = this.tx + d*cos(th);
		var y = this.ty + d*sin(th);

		p.setpos(x, y);
	}
}

// AXIS
ParticleSystem.prototype.update_axis = function() {
	this.pos_axis.lerp(this.tpos_axis, 0.15);
}

ParticleSystem.prototype.render_axis = function() {
	var st;
	if(this.index == 0) {st = '5'}
	else if(this.index == 1) {st = '15'}
	else if(this.index == 2) {st = '25'}
	else if(this.index == 3) {st = '35'}
	else if(this.index == 4) {st = '45'}
	else if(this.index == 5) {st = '55'}
	else if(this.index == 6) {st = '65'}
	else if(this.index == 7) {st = '75 YEARS OLD'}

	pushMatrix();
		translate(this.pos_axis.x, this.pos_axis.y);
		stroke(120);
		strokeWeight(0.8);
		line(0, 170,0, - 70);

		fill(160);
		textSize(15);
		text(st, 4, 170);
	popMatrix();
}

ParticleSystem.prototype.check_selected = function() {
	var d = dist(mouseX, mouseY, this.tx, this.ty);

	if(d < 50) {
		this.selected = true;
		//println(this.index);
	} else {
		this.selected = false;
	}
}

ParticleSystem.prototype.render_selected = function() {
	var st;
	if(this.index == 0) {st = 'DUE TO HER PARENTS DIVORCE, 10 YEAR OLD GIRL COMMITS SUICIDE 2009.04.08'}
	else if(this.index == 1) {st = 'AFTER HIS TEACHER PUNISHED HIM 110 TIMES, HIGH SCHOOL STUDENT COMMITS SUICIDE 2009.05.02'}
	else if(this.index == 2) {st = 'STORM IN SOUTH KOREA OVER JANG JA-YEON SUICIDE 2009.03.07'}
	else if(this.index == 3) {st = 'SUICIDE IS THE NUMBER ONE REASON FOR DEATHS'}
	else if(this.index == 4) {st = 'RECORD THE MOST SUICIDE RATES AFTER THE SUBPRIME MORTGAGE CRISIS'}
	else if(this.index == 5) {st = 'FORMER S. KOREAN PRESIDENT ROH COMMITS SUICIDE. HE WAS 62.'}
	else if(this.index == 6) {st = 'ELDERLY SUICIDE RATES INCREASE EVEY YEAR'}
	else if(this.index == 7) {st = 'KOREA, HIGHEST IN ELDERLY POVERTY: OECD'}

	textSize(20);
	fill(255);
	text(this.num, width*0.1, height*0.31);
	text(st, width*0.17, height*0.31);
}


