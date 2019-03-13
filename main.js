
let finnish = [];
let french = [];

let FINinput = document.getElementById("FIN");
let FREinput = document.getElementById("FRE");
let library =document.getElementById("answer");

function insert() {
  finnish.push(FINinput.value);
  french.push(FREinput.value);
  clear();
  show();
}

function clear() {
  FINinput.value ="";
  FREinput.value ="";
}

function show() {
  library.innerHTML = "";
  library.innerHTML +="Finnish words: " + finnish.join(", ") + "<br>";
  library.innerHTML +="French words: " + french.join(", ");
}

function hide() {
  library.classList.toggle("hide");
}
/*
let FI = ["yksi", "kaksi", "kolme", "neljä", "viisi"];
let FR = ["un", "deux", "trois", "quatre", "cinq"];
let ranFI = FI[Math.floor(Math.random() * FI.length)];
let ranFR = FR[Math.floor(Math.random() * FR.length)];
console.log(ranFI)
*/

let qFI = document.getElementById("queFI");
let qFR = document.getElementById("queFR");
let x;
function ranFI() {
  x = finnish[Math.floor(Math.random() * finnish.length)];
  qFI.innerHTML = x;
}

function ranFR() {
    qFR.innerHTML = french[Math.floor(Math.random() * french.length)];
}

// queFI (qFI) displays the asked finnish word
// answerFR (aFR) is the given answer
// see what qFI and aFR equal in original arrays (indexes) and see if they match or not

/* 
function check() {
  let aFR = document.getElementById("answerFR");
  let aFI = document.getElementById("answerFI");

for (let i = 0; i < finnish.length; i++) {
  if (qFI === finnish[i]) {
      indexof(qFI) = i;
  }
}
for (let j = 0; j < french.length; j++) {
  if (aFR === french[i]) {
      indexof(aFR) = j;
  }
}
if(j === i) {
  tuomio.innerHTML = "You are correct!";
} else { tuomio.innerHTML ="Uncorrect! You shall burn in Hell"}
}
*/
