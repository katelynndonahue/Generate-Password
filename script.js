// Create prompts, alerts and confirms for password criteria

// Create arrays of character sets

// Prompt for character length 8 - 128

// Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// Create answers in variables to fire a function. If it passes, function continues. If it fails, it continues to fire looking for correct response.

// Prompt for acceptable criteria. Password is generated.

// Password is generated and diplayed in alert. Action is complete.

// Assignment Code

// Write password to the #password input

var specialChars = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedChars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCasedChars = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function generatePassword() {
 
  var possiblePassword = [];
  var password = [];

  var passwordLength = parseInt(prompt("Please choose a number between 8-128"));

  if (passwordLength < 8 || passwordLength > 128){
    alert("Incorrect password length. Try again!");
    generatePassword();
  }

  
  var numconfirm = confirm("Would you like to use numbers?");
  var lowerconfirm = confirm("Would you like to use lowercase?");
  var upperconfirm = confirm("Would you like to use uppercase?");
  var specconfirm = confirm("Would you like to use special characters?");

  if (
    numconfirm === false &&
    lowerconfirm === false &&
    upperconfirm === false &&
    specconfirm === false
  ) {
    alert("Please select one character set");
    generatePassword();
  }

  // Conditional logic using value of confirms

  if (numconfirm === true) {
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * numericChars.length);
      var randomChar = numericChars[randomIndex];
      possiblePassword.push(randomChar)
    }
  }

  if (lowerconfirm === true) {
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * lowerCasedChars.length);
      var randomChar = lowerCasedChars[randomIndex];
      possiblePassword.push(randomChar)
    }
  }

  if (upperconfirm === true) {
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * upperCasedChars.length);
      var randomChar = upperCasedChars[randomIndex];
      possiblePassword.push(randomChar)
    }
  }

  if (specconfirm === true) {
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * specialChars.length);
      var randomChar = specialChars[randomIndex];
      possiblePassword.push(randomChar)
    }
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possiblePassword.length);
    var randomChar = possiblePassword[randomIndex];
    password.push(randomChar);
  }

  return password.join("");
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
generateBtn.addEventListener("click", writePassword);
