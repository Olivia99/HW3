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
  
  fill(0,120,0);
  noStroke();
  rect(17.5+x, y, 5,100);
  rect(27.5+x,y, 5,100);
  rect(67.5+x, y, 5,100);
  rect(77.5+x,y,5,100);
  
  rect(x, 17.5+y, 100,5);
  rect(x, 27.5+y, 100,5);
  rect(x, 67.5+y, 100,5);
  rect(x, 77.5+y, 100,5);

 stroke(0,0,160);
  strokeWeight(0.8);
  line(14.5+x,y, 14.5+x,y+100);
  line(35.5+x,y, 35.5+x, y+100);
  line(64.5+x,y, 64.5+x,y+100);
  line(85.5+x,y, 85.5+x, y+100);
  
  line(x,14.5+y, x+100, 14.5+y);
  line(x,35.5+y, x+100, 35.5+y);
  line(x,64.5+y, x+100, 64.5+y);
  line(x,85.5+y, x+100, 85.5+y);
  
  stroke(255);
  line(25+x,y,25+x,y+100);
  line(75+x,y,75+x,y+100);
  line(x,y+25,x+100,y+25);
  line(x,y+75,x+100,y+75);
  
  stroke(255,255,0);
  line(17+x,y,17+x,100+y);
  line(33+x,y,33+x,100+y);
  line(67+x,y,67+x,100+y);
  line(83+x,y,83+x,100+y);
  line(x,17+y,100+x,17+y);
  line(x,33+y,100+x,33+y);
  line(x,67+y,100+x,67+y);
  line(x,83+y,100+x,83+y);
  
  stroke(255,0,0)
  var q=2;
  while(q<=99){
    line(x+q,y,x,y+q);
    q=q+2;
    } 
  var q2=0;
  stroke(255,0,0);
  while(q2<99){
    line(x+100,y+q2,x+q2,y+100);
    q2=q2+2;
	}
}


background(255);
var x=(width-100)/2
var y=(height-100)/2
yourpatch(x,y);
