//set variables for center (x,y)
let x=90;
let y=110;

function setup(){
//window size and background
createCanvas(200,200);
background(150);

//avatar background
stroke(150,0,100);
fill(150,0,100);
square(x-50,y-50,100);

//4 lines through middle and larger circle in middle
stroke(#D3B440);
fill(255);
line(x,y-50,x,y+50);
line(x-50,y,x+50,y);
line(x-50,y-50,x+50,y+50);
line(x-50,y+50,x+50,y-50);
circle(x,y,30);

//purple circle in center
stroke(150,0,100);
fill(150,0,100);
circle(x,y,26);
}
