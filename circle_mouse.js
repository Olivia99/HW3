background(255);
strokeWeight(3);
colorMode(HSB);

while (true) {
  var h = round(random(360));
  stroke(h, 50, 90);
  fill(h, 50, 100);
  var r = round(random(30, 60));
  ellipseMode(CENTER);
  
  ellipse(mouseX, mouseY, r, r);
}
