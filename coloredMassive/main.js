let currentColor=0;
let currentColor1=0;
let currentColor2=0;
let colors = ["red", "green", "blue"];
      
function col() {
    currentColor++;
    if (currentColor>2) currentColor=0;
    let a = document.getElementById("h");
    a.style.color = colors[currentColor];
    }

function col1() {
    currentColor1++;
    if (currentColor1>2) currentColor1=0;
    let a = document.getElementById("h1");
    a.style.color = colors[currentColor1];
    }

function col2() {
    currentColor2++;
    if (currentColor2>2) currentColor2=0;
    let a = document.getElementById("h2");
    a.style.color = colors[currentColor2];
    }