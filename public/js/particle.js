
function Particle() {
	this.pos = new PVector(random(width), random(-10, -30));
	this.tpos = new PVector(random(width), random(height));
}

Particle.prototype.update = function() {
	this.pos.lerp(this.tpos, 0.15);
}

Particle.prototype.render = function() {
	pushMatrix();
		translate(this.pos.x, this.pos.y);
		stroke(255);
		point(0, 0);
	popMatrix();
}

Particle.prototype.setpos = function(x, y) {
	this.tpos.x = x;
	this.tpos.y = y;
}