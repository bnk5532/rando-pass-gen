// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = "!@#$%^&*()";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword() {
  var results = "";
  var length = prompt("How long?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Password must be 8 to 128 characters!");
    return generatePassword();
  } else {
    var specialCon = confirm("Select OK to include special characters?");
    console.log(specialCon);
    var numbersCon = confirm("Select OK to include numbers characters?");
    console.log(numbersCon);
    var lowercaseCon = confirm("Select OK to include lowercase characters?");
    console.log(lowercaseCon);
    var uppercaseCon = confirm("Select OK to include uppercase characters?");
    console.log(uppercaseCon);
  }
  if (
    !specialCon &&
    !numbersCon &&
    !lowercaseCon  &&
    !uppercaseCon  
  ) {
    generatePassword();
  }

  if (specialCon) {
    results = results + special;
  }
  if (numbersCon) {
    results = results + numbers;
  }
  if (lowercaseCon) {
    results = results + lowercase;
  }
  if (uppercaseCon) {
    results = results + uppercase;
  }

  var newRes = "";

  for (var i = 0; i < length; i++) {
    newRes += results.charAt(Math.floor(Math.random() * results.length - 1));
    console.log(newRes);
  }

  console.log(newRes);
  return newRes;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
