// Assignment Code
var generateBtn = document.querySelector("#generate");

/* client wants to use following: pwdCriteria

define variables // OR MAKE ARRAYS -->variables
 lowercase, --> abcdefghijklmnopqrstuvwxyz
 uppercase, --> ABCDEFGHIJKLMNOPQRSTUVWXYZ
  numeric, --> function getRandomInt(min, max) {
    min = 0
    max = min
  }
  special characters --> ~!@#$%^&*-=+_.?

*/

/* pwd must be at least 8 characters and no more than 128 characters --> MOVED TO GENERATEPWD

  while loop for pwdLength -->
  prompt for pwdLength-->for length input
  if statement for pwdLength-->user input for pwdCriteria


*/

// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//to carry out operations for password generator
generatePassword();

////while loop here --> while characters are between 8 - 128
//// pwdLength, #, symbols, upper n lower case letters decided by user input here
//////prompts for each 
//////all prompts to be answerable
