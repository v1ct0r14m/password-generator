// Assignment Code
var generateBtn = document.querySelector("#generate");

// client wants to use following: pwdCriteria
var lower = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special =  '~!@#$%^&*-=+_.?';
var randomNum = Math.floor(Math.random);

// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//to carry out operations for password generator
function generatePassword() {

  pwdLength = 0;
  lower = '';
  upper = '';
  special = '';

  while (pwdLength > 8 || pwdLength < 128) {
    pwdLength = prompt('how many characters would you like your password to be? (password must be at least 8 characters)');

    if (pwdLength < 8 || pwdLength > 128) {

      alert('password does not meet length criteria');
      
      return generatePassword;
    }
    else {
      
      return true;
    }
  
  
  
  }

}



////while loop here --> while characters are between 8 - 128
//// pwdLength, #, symbols, upper n lower case letters decided by user input here
//////prompts for each 
//////all prompts to be answerable


/* pwd must be at least 8 characters and no more than 128 characters --> MOVED TO GENERATEPWD

  while loop for pwdLength -->
  prompt for pwdLength-->for length input
  if statement for pwdLength-->user input for pwdCriteria


*/