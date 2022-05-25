// generate password function
function generatePassword() {

// reset variables if button is pressed again
var optionLower = "abcdefghijklmnopqrstuvwxyz";
var optionUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var optionNumber = "0123456789";
var optionSymbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var chars = "";
var passLength = "";
var lowerCase = "";
var upperCase = "";
var numeric = "";
var symbols = "";
var password = "";

// prompt to choose length of password between 8 and 128 characters
  var passLength = window.prompt("How long would you like your password to be? Choose between 8 and 128");

    while (passLength < 8 || passLength > 128) {
      window.alert("You must choose a value between 8 and 128!");
      var passLength = window.prompt("How long would you like your password to be? Choose between 8 and 128");

      if (passLength >= 8 && passLength <= 128) {
        break;
      }
    }

// prompt to choose lower case
  var lowerCase = confirm("Would you like your password to contain lower case letters?");

// prompt to choose upper case
  var upperCase = confirm("Would you like your password to contain upper case letters?");

// prompt to choose numeric
  var numeric = confirm("Would you like your password to contain numbers?");

// prompt to choose special characters
  var symbols = confirm("Would you like your password to contain special characters?");

// validate whether or not at least one option has been chosen
  if (!lowerCase && !upperCase && !numeric && !symbols) {
    window.alert("You must select at least one category for your password!");
    generatePassword();
  }

  else {}

// build password function
  if (!lowerCase) {
    optionLower = "";
  }

  else {}

  if (!upperCase) {
    optionUpper = "";
  }

  else {}

  if (!numeric) {
    optionNumber = "";
  }

  else {}

  if (!symbols) {
    optionSymbol = "";
  }

  else {}

  chars = optionLower + optionUpper + optionNumber + optionSymbol;

  for (var i = 0; i <= passLength - 1; i++) {
    password = password + chars.charAt(Math.floor(Math.random() * Math.floor(chars.length - 1)));
  }

console.log(lowerCase);
console.log(upperCase);
console.log(numeric);
console.log(symbols);
return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
