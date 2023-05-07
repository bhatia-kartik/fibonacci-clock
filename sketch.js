var colorsq1_0 = "";
var colorsq1_1 = "";
var colorsq2 = "";
var colorsq3 = "";
var colorsq5 = "";
var bgCol = "#118AB2";
var textCol = "#ffffff";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgCol);

  fill(textCol);
  textFont("monospace");
  textSize(30);
  textAlign(CENTER, TOP);
  text("fibonacci clock", width / 2, 10);
  textSize(13);
  text("hours in red, minutes in green, both in yellow", width / 2, 45);

  var startW = width / 5;
  var startH = height / 8;
  strokeWeight(5);

  fill(colorsq1_1);
  var sq1_1 = square(startW, startH, width / 14);
  fill(colorsq1_0);
  var sq1_0 = square(startW, startH + width / 14, width / 14);
  fill(colorsq2);
  var sq2 = square(startW + width / 14, startH, width / 7);
  fill(colorsq3);
  var sq3 = square(startW, startH + width / 7, (width / 14) * 3);
  fill(colorsq5);
  var sq5 = square(startW + (width / 14) * 3, startH, (width / 14) * 5);

  var hr = hour() <= 12 ? hour() : hour() - 12;
  if (hour() > 12) {
    bgCol = "#073B4C";
    textCol = "#ffffff";
  } else {
    bgCol = "#118AB2";
    textCol = "#073B4C";
  }
  var min = Math.floor(minute() / 5);

  hrList = findSumVals(hr);
  minList = findSumVals(min);

  colorsq1_1 = 255;
  colorsq1_0 = 255;
  colorsq2 = 255;
  colorsq3 = 255;
  colorsq5 = 255;

  for (var i of hrList) {
    var varname = "color" + i;
    eval(varname + "=" + "color(239, 71, 111)");
  }

  for (var j of minList) {
    var varname1 = "color" + j;
    tester = color(239, 71, 111);
    if (eval(varname1).toString() == tester.toString()) {
      eval(varname1 + "=" + "color(255, 209, 102)");
    } else {
      eval(varname1 + "=" + "color(6, 214, 160)");
    }
  }
  function findSumVals(n) {
    a = n;
    boxList = [];
    i = "0";
    while (a != 0) {
      if (a >= 5) {
        boxList.push("sq5");
        a -= 5;
      }
      if (a >= 3) {
        boxList.push("sq3");
        a -= 3;
      }
      if (a >= 2) {
        boxList.push("sq2");
        a -= 2;
      }
      if (a >= 1) {
        boxList.push("sq1_" + i);
        i = "1";
        a--;
      }
    }
    return boxList;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
