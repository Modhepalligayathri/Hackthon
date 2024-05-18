function showYesCovid() {
  document.getElementById('1a').style.display = "block";
  document.getElementById('first').style.display = "none";

}

function showNoCovid() {
  document.getElementById('1b').style.display = "block";
  document.getElementById('first').style.display = "none";
  
}

function GoBackOne() {
  document.getElementById('first').style.display = "block";
  document.getElementById('1a').style.display = "none";
  document.getElementById('1b').style.display = "none";
}

function showMoreDays() {
  document.getElementById('2a').style.display = "block";
  document.getElementById('1a').style.display = "none";
  
}

function showLessDays() {
  document.getElementById('2b').style.display = "block";
  document.getElementById('1a').style.display = "none";
}

function showYesVaccine() {
  document.getElementById('3a').style.display = "block";
  document.getElementById('1b').style.display = "none";
  document.getElementById('2b').style.display = "none";
  document.getElementById('2a').style.display = "none";
}

function showNoVaccine() {
  document.getElementById('3b').style.display = "block";
  document.getElementById('1b').style.display = "none";
  document.getElementById('2b').style.display = "none";
  document.getElementById('2a').style.display = "none";
}

function tryAgainOne() {
  document.getElementById('first').style.display = "block";
  document.getElementById('3b').style.display = "none";
  document.getElementById('3a').style.display = "none";
}

function showPfizer() {
  document.getElementById('4a').style.display = "block";
  document.getElementById('3a').style.display = "none";
}

function showModerna() {
  document.getElementById('4b').style.display = "block";
  document.getElementById('3a').style.display = "none";
}

function showOtherVaccines() {
  document.getElementById('4c').style.display = "block";
  document.getElementById('3a').style.display = "none";
}

function showJohnson() {
  document.getElementById('4d').style.display = "block";
  document.getElementById('3a').style.display = "none";
}

function showPregnant () {
  document.getElementById('5a').style.display = "block";
  document.getElementById('4a').style.display = "none";
  document.getElementById('4b').style.display = "none";
  document.getElementById('4c').style.display = "none";
  document.getElementById('4d').style.display = "none";
}

function showAllergic () {
  document.getElementById('5b').style.display = "block";
  document.getElementById('4a').style.display = "none";
  document.getElementById('4b').style.display = "none";
  document.getElementById('4c').style.display = "none";
  document.getElementById('4d').style.display = "none";
}

function showNoneOfThese () {
  document.getElementById('5c').style.display = "block";
  document.getElementById('4a').style.display = "none";
  document.getElementById('4b').style.display = "none";
  document.getElementById('4c').style.display = "none";
  document.getElementById('4d').style.display = "none";
}

function showLeave() {
  document.getElementById('6a').style.display = "block";
  document.getElementById('5c').style.display = "none";
}

function tryAgainTwo() {
  document.getElementById('5c').style.display = "block";
  document.getElementById('6a').style.display = "none";
}

function showWaitItOut() {
  document.getElementById('6b').style.display = "block"; document.getElementById('5c').style.display = "none";
}

function showGetDose() {
  document.getElementById('7a').style.display = "block"; document.getElementById('6b').style.display = "none";
}

function showSkipDose() {
  document.getElementById('7b').style.display = "block"; document.getElementById('6b').style.display = "none";
}

function tryAgainThree() {
  document.getElementById('6b').style.display = "block"; document.getElementById('7b').style.display = "none";
}

function showParty() {
  document.getElementById('8b').style.display = "block"; document.getElementById('7a').style.display = "none";
}

function showDistance() {
  document.getElementById('8a').style.display = "block"; document.getElementById('7a').style.display = "none";
}

function showEnd() {
  document.getElementById('9a').style.display = "block";
  document.getElementById('8a').style.display = "none";
  document.getElementById('8b').style.display = "none";
}

// BACK BUTTONS LMAOOOO //

function startOver() {
  document.getElementById('first').style.display = "block";
  document.getElementById('1a').style.display = "none"; 
  document.getElementById('1b').style.display = "none";
  document.getElementById('2a').style.display = "none"; 
  document.getElementById('2b').style.display = "none";
  document.getElementById('3a').style.display = "none"; 
  document.getElementById('3b').style.display = "none";
  document.getElementById('4a').style.display = "none"; 
  document.getElementById('4b').style.display = "none";
  document.getElementById('4c').style.display = "none"; 
  
  document.getElementById('4d').style.display = "none";
  document.getElementById('5c').style.display = "none";
  document.getElementById('5a').style.display = "none"; 
  document.getElementById('5b').style.display = "none";
  document.getElementById('6a').style.display = "none"; 
  document.getElementById('6b').style.display = "none";
  document.getElementById('7a').style.display = "none"; 
  document.getElementById('7b').style.display = "none";
  document.getElementById('8a').style.display = "none"; 
  document.getElementById('8b').style.display = "none";
  document.getElementById('9a').style.display = "none";
}

function goBackTwo() {
  document.getElementById('1a').style.display = "block"; 
  document.getElementById('2a').style.display = "none"; 
  document.getElementById('2b').style.display = "none";
}

function goBackFour() {
  document.getElementById('3a').style.display = "block"; 
  document.getElementById('4a').style.display = "none"; 
  document.getElementById('4b').style.display = "none";
  document.getElementById('4c').style.display = "none";
  
  document.getElementById('4d').style.display = "none";
}

function goBackFive() {
  document.getElementById('4c').style.display = "block"; 
  document.getElementById('4d').style.display = "none";
  document.getElementById('5a').style.display = "none"; 
  document.getElementById('5b').style.display = "none";
  document.getElementById('5c').style.display = "none";
}

function goBackSix() {
  document.getElementById('5c').style.display = "block"; 
  document.getElementById('6b').style.display = "none"; 
}

function goBackSeven() {
  document.getElementById('6b').style.display = "block"; document.getElementById('7a').style.display = "none";
}

function goBackEight() {
  document.getElementById('7a').style.display = "block";
  document.getElementById('8a').style.display = "none";
  document.getElementById('8b').style.display = "none";
}