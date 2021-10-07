var madButton;
var num1;
var num2;
var num3;
var num4;
var num5;
var num6;
var num7;
var num8;
var num9;
var num10;
var num11;
var madButton;

function setup() {
  createCanvas(800, 500);
  num1 = createInput("noun");
  num2 = createInput("adjective");
  num3 = createInput("noun");
  num4 = createInput("emotion");
  num5 = createInput("type of animal");
  num6 = createInput("activity");
  num7 = createInput("another activity");
  num8 = createInput("adjective");
  num9 = createInput("type of residency");
  num10 = createInput("number");
  num11 = createInput("type of pet");

  var madButton = createButton("See my Madlib!");
  madButton.mousePressed(showMadLib);

  num1.changed(updateNum1);
  num2.changed(updateNum2);

  num1P = createP();
  num2P = createP();
  num3P = createP();
  num4P = createP();
  num5P = createP();
  num6P = createP();
  num7P = createP();
  num8P = createP();
  num9P = createP();
  num10P = createP();
  num11P = createP();
}
function updateNum1() {
  num1P.html(num1.value());
}
function updateNum2() {
  num2P.html(num2.value());
}
function updateNum3() {
  num3P.html(num3.value());
}

function updateNum4() {
  num4P.html(num4.value());
}
function updateNum5() {
  num5P.html(num5.value());
}
function updateNum6() {
  num6P.html(num6.value());
}
function updateNum7() {
  num7P.html(num7.value());
}
function updateNum8() {
  num8P.html(num8.value());
}
function updateNum9() {
  num9P.html(num9.value());
}
function updateNum10() {
  num10P.html(num10.value());
}
function updateNum11() {
  num11P.html(num11.value());
}
function showMadLib() {}
function draw() {
  background(500, 800, 80);
  rect(40, 60, 700, 140);
  text(
    "Once there was a " +
      num1.value() +
      " who was very " +
      num2.value() +
      ". One day, he was walking down the street when he saw a ",
    50,
    90
  );
  text(
    num3.value() +
      " chasing after a bus. He was so " +
      num4.value() +
      " that he fell over and had to be helped by a very friendly " +
      num5.value(),
    50,
    110
  );
  text(
    "The two hit it off and became very best friends. They did everything together, including " +
      num6.value() +
      " and " +
      num7.value() +
      ".",
    50,
    130
  );
  text(
    "Their friendship was the envy of all who knew them. They moved in a " +
      num8.value() +
      " " +
      num9.value() +
      " and owned " +
      num10.value(),
    50,
    150
  );
  text(num11.value() + " and lived happily ever after!", 50, 170);
  textStyle(BOLD);
  text("Welcome to the Madlib Creator!", 50, 35);
  ellipse(110, 250, 40);
  ellipse(190, 350, 60);
  ellipse(450, 390, 80);
  ellipse(260, 270, 50);
  ellipse(120, 420, 85);
  ellipse(500, 280, 38);
  ellipse(450, 240, 52);
}