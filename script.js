function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    if(mouseIsPressed) {
        fill(0);
    }
    else {
        fill(100);
    }

    circle(mouseX, mouseY, 80);
}