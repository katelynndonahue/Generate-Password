// Create prompts, alerts and confirms for password criteria

// Create arrays of character sets

// Prompt for character length 8 - 128

// Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// Create answers in variables to fire a function. If it passes, function continues. If it fails, it continues to fire looking for correct response.

// Prompt for acceptable criteria. Password is generated.

// Password is generated and diplayed in alert. Action is complete.

// Assignment Code

// Write password to the #password input

function genPassword() {
  var numchars = "0123456789".split("")
  var lowerchars = "abcdefghijklmnopqrstuvwxyz".split("")
  var upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var specchars = "!@#$%^&*()".split("")
  var passwordLength = 0;
  var password = "";

passwordLength= prompt("Please choose a number between 8-128")

if (passwordLength < 8 ) {
    passwordLength = prompt ("Incorrect password length. Try again!")
} else if (passwordLength > 128) {
    passwordLength = prompt ("Incorrect password length. Try again!")
} else {
var numconfirm = confirm ("Would you like to use numbers?");
var lowerconfirm = confirm ("Would you like to use lowercase?");
var upperconfirm = confirm ("Would you like to use uppercase?");
var specconfirm = confirm ("Would you like to use special characters?");
console.log (numconfirm, lowerconfirm, upperconfirm, specconfirm,)
}

if (numconfirm === false && lowerconfirm === false && !upperconfirm && !specconfirm) {
alert ("Please select one character set")
var numconfirm = confirm ("Would you like to use numbers?");
var lowerconfirm = confirm ("Would you like to use lowercase?");
var upperconfirm = confirm ("Would you like to use uppercase?");
var specconfirm = confirm ("Would you like to use special characters?");
}

// Conditional logic using value of confirms

    if (numconfirm) {
        numconfirm prompt lowerconfirm;
      } else if (lowerconfirm) {
        lowerconfirm prompt upperconfirm;
      } else {
        upperconfirm prompt specconfirm;
      }
 
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