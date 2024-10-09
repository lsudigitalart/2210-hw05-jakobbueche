//////////////
// IN CLASS //
//////////////

/* let scaleFactor, mappedScaleFactpr

function draw() {
    background(220);
    translate(width/2, height/2)

    for (var i = 20; i > 0; i--) {

        mappedScaleFactor = map(1,1,20,1,1.38)
        scale(scaleFactor);
        //stroke(0);
        //strokeWeight(5);
        circle(0, 0, 1);
       
        if(i%2 == 0) {
            fill(0);
        }   else{
            fill(255)
        }   

        
    }

} */

 /* function setup() {
     createCanvas(400, 400, WEBGL);
    }

//let x = frameCount * 0.2;

    function draw () {
        background(220)

        //orbitControl()
        camera(0, 0, 200)

        //translate(x,50)


        box(10,10,50)

    }  */

       /*  function setup() {
            createCanvas(400, 400);
          
            describe('A white circle moves slowly from left to right on a gray background.');
          }
          
          function draw() {
            background(200);
          
            // Calculate the x-coordinate.
            let x = frameCount * 0.2;
          
            // Translate the origin.
            translate(x, 50);
          
            // Draw a circle at coordinates (0, 0).
            circle(0, 0, 40);
          } */

    /* var circleSize = 10;

    for(var i = circleSize/2; i < width; i = i + circleSize*1.5){
        for(var n = circleSize/2; n < width; n = n + circleSize*1.5){
           ellipse(i,n,circleSize);
        }
    } */

let d = 35;
let i, j, n;

function setup() {
  createCanvas(windowWidth-20, windowHeight-20, WEBGL);

  background(255,251,232)

}

function draw() {
    background(255,251,232)
  for (i = -d * 35; i < d * 35; i += d) {
    for (j = -d * 25; j < d * 25; j += d) {
      for (n = 0; n < Math.ceil(random(1)); n++) {
        push();
        translate(i, j, n * d);
        rotate(QUARTER_PI)
        fill(255)
        box(15,15,300);
        pop();
      }
    }
  }

  let x = frameCount * 1;

  camera(0,0, x);



}