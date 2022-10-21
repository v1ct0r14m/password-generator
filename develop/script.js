// Assignment Code
var generateBtn = document.querySelector("#generate");

// criteria variables

var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special =  '~!@#$%^&*-=+_.?';
var randomNum = Math.floor(Math.random);

// chosen variables --> true

var lowerChosen = true;
var upperChosen = true;
var specialChosen = true;
var randomNumChosen = true;

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

  var result = '';

  pwdLength = 0;
  lower = '';
  upper = '';
  special = '';
  randomNum = '';
  result = '';

  while (pwdLength > 8 || pwdLength < 128) {
    pwdLength = window.prompt('how many characters would you like your password to be? (password must be at least 8 characters)');

    // if cancel is pressed
    if (pwdLength === null) {
      return 'your secure password';
    }

    // if < 8 & > 128 characters are put
    if (pwdLength < 8 || pwdLength > 128) {

      alert('password does not meet length criteria');
      
      return generatePassword;
    }
    else {


      while (pwdLength = true) {
  

        lowerChosen = confirm('would you like to use lowercase characters?')
        upperChosen = confirm('would you like to use uppercase characters?')
        specialChosen = confirm('would you like to use special characters?')
        randomNum = confirm('would you like to use random numbers?')

        

        }
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