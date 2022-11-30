// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArray = upperCase.split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerCase.split("");
var numeric = "0123456789";
var numArray = numeric.split("");
var specialChara = "!@#$%^&*";
var charArray = specialChara.split("");

// Write password to the #password input
function generatePass() {
  var allChar = [];
  var resultPass = "";
  var TotLength  = prompt("Number of password characters 8 - 128?");

  if(TotLength <8 || TotLength > 128){
    alert("Between 8 and 128 characters are recommended! Try again");
  }

  else{

    if(confirm("Would you like to have uppercase letters?")){
      Array.prototype.push.apply(allChar, upperArray);
    }
    if(confirm("Would you like lowercase letters?")){
      Array.prototype.push.apply(allChar, lowerArray);
    }
    if(confirm("Would you like numbers?")){
      Array.prototype.push.apply(allChar, numArray);
    }
    if(confirm("Would you like symbols?")){
      Array.prototype.push.apply(allChar, charArray);
    }
    if(allChar.length===0){
      alert("Some type of character must be selected");
    }
    else{
      for(var i=0; i<TotLength; i++){
        var random = Math.floor(Math.random()*allChar.length);
        resultPass += allChar[random];
      }
    }
    document.getElementById("password").innerHTML = resultPass;
  } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePass);
