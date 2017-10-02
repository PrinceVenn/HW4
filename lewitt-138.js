noFill();
colorMode(HSB);
stroke(11,2,62)

var a = 10
var b = 20


while (b<=300){
ellipse(160,160,b,b);
var b = b+10
}
while (a<=300){
  line(0,a,360,a);
  var a = a+10
}
var b = 10
while (b<=300){
  line(b,0, b,360);
var b = b+10
}
