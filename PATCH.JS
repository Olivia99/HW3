function yourpatch(x,y){
  noFill();
  stroke(150);
  fill(255,0,0)
  rect(x,y,100,100);
  colorMode(RGB);
	stroke(0,255,0);
  strokeWeight(0.5);
  line(x+50,y,x+50,y+100);//vertical

  stroke(0,255,0);
  strokeWeight(0.5);
  line(x,y+50,x+100,y+50);//horizontal

//   stroke(0,0,255);//blue
//   strokeWeight(2);
//   line(x,y+60,x+100,y+60);//horizontal down


//   stroke(0,0,255);//blue
//   strokeWeight(2);
//   line(x,y+40,x+100,y+40);//horizontal up

//   stroke(0,0,255);//blue
//   strokeWeight(2);
//   line(x+40,y,x+40,y+100);//vertical left

//   stroke(0,0,255);//blue
//   strokeWeight(2);
//   line(x+60,y,x+60,y+100);//vertical right
  
// 
  stroke(0);
  var lines = 3;
  while (lines < 50) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  }
}

background(255);
var x=(width-100)/2
var y=(height-100)/2
yourpatch(x,y);
