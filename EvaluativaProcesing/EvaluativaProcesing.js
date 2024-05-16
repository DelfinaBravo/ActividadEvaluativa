let r = 60;
let ax = 22;
let ay = 25;
let rx = 22;
let ry = 80;
let vA = 2;
let vR = 4;
let va = 3;
let vr = 5;
let v = 2;
let v2 = 2;
let colorAzul;
let millis = 0;
function setup() {
 createCanvas(600, 600);
 stroke(0);
 colorAzul = color(0, 0,255);
 colorRojo = color(255, 0, 0);
 millis +=1; 

}

function draw() {
  background(240);
  fill(colorAzul);
  ellipse(ax, ay, r, r);
  fill(colorRojo);
  ellipse(rx, ry, r, r);
  
  ax += vA;
  rx += vR;
  ay += va;
  ry += vr;
  ax += v;
  rx += v;
  ay += v2;
  ry += v2;
  
  if(rx < 20 || rx > 600 - 22 ){
    vR = vR * (-1);
  }
  
   if(ax < 20 || ax > 600 - 22 ){
    vA = vA * (-1);
  }
  
   if(ry < 20 || ry > 600 - 22 ){
    vr = vr * (-1);
  }
  
     if(ay < 20 || ay > 600 - 22 ){
    va = va * (-1);
  }
  
  
  if(dist(rx, ry, ax, ay)> 40){
    v2 = v2 * (-1)
    v = v * (-1)
  }
  
  if((rx && ax == r/2) || (ry && ay == r/2)){
     colorRojo = color(148, 0, 211); // Violeta
     colorAzul = color(148, 0, 211);
     if(millis == 60){
        colorRojo = color(255, 0, 0); // Violeta
        colorAzul = color(0, 0, 255);
     }
  }
  
  if(ay >= 600 - 20){
    colorAzul = color(0, 0, 170); 
  }
  
    if(ry <= 40 - 20){
    colorRojo = color(170, 0, 0); 
  }
  
 
  

}
