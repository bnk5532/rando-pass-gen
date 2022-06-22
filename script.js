// global variables defined
var generateBtn = document.querySelector("#generate");

var special = "!@#$%^&*()";
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// generate password function begins window prompt selections, logs responses and yields a random result.
function generatePassword() {
  var results = "";
  var length = prompt("How many characters in length would you like the password to be?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert("Password must be 8 to 128 characters!");
    return generatePassword();
  } else {
    // redefined variables with confirmation prompts  
    var specialCon = confirm("Select OK to include special characters?");
    console.log(specialCon);
    var numbersCon = confirm("Select OK to include numbers characters?");
    console.log(numbersCon);
    var lowercaseCon = confirm("Select OK to include lowercase characters?");
    console.log(lowercaseCon);
    var uppercaseCon = confirm("Select OK to include uppercase characters?");
    console.log(uppercaseCon);
  }
  // if fail statements. Loops back to beginning of function if all fail.
  if (
    !specialCon &&
    !numbersCon &&
    !lowercaseCon  &&
    !uppercaseCon  
  ) {
    generatePassword();
  }
  // if true, result will include random value from selection.
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
// new variable for results defined, which is required for concatenation of math function.
  var newRes = "";
//results 
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
