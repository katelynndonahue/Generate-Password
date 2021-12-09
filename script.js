// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// Create prompts, alerts and confirms

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// Arrays of character sets

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// Prompt for character length

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// Answers in variables. Fires a function. If passes, continues, if fails, it stops.

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// Prompt for acceptable criteria. Password is generated.

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Password is generated. Action is complete.

// Assignment Code

// Write password to the #password input
function genPassword() {
  var numchars = "0123456789".split("")
  var lowerchars = "abcdefghijklmnopqrstuvwxyz".split("")
  var specchars = "!@#$%^&*()".split("")
  var upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var passwordLength = 0;
  var password = "";

passwordLength= prompt("Please choose a number between 8-128")
  
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
      document.getEleme
      function copyPassword() {
        var copyText = document.getElementById("password");
        copyText.select();
        document.execCommand("copy");  
      }ntById("password").value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", genPassword);