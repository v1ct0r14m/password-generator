// Assignment Code
var generateBtn = document.querySelector("#generate");

// criteria variables

var pwdGenerated = {lowercase, uppercase, specialChar, randomNum, passwordLength}

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar =  '~!@#$%^&*-=+_.?';
var randomNum = Math.floor(Math.random);
var passwordLength = 0;

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

  //holds result until return result
  var result = '';

  // variables for user prompts
  var pwdLength = 0;

  // chosen variables --> true
  var lowerChosen = true;
  var upperChosen = true;
  var specialChosen = true;
  var randomNumChosen = true;

    pwdLength = 0;
    pwdGenerated.pwdLength = 0;
    lowercase = '';
    uppercase = '';
    specialChar = '';
    random = '';
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
      
      return 'your secure password';
    }

        else { 
          

          while (passwordLength < pwdLength) { 
          
            runPrompts();

          }
        

          if (lowerChosen === true && pwdGenerated.passwordLength === true) {
            var lower = pwdGenerated.lowercase[Math.floor(Math.random)]
            result = result + lower;

            return result;
          }

        

          if (upperChosen === true && pwdGenerated.pwdLength === true) {
            var upper = pwdGenerated.uppercase[Math.floor(Math.random)]
            result = result + upper;

            return result;
        
          }

          if (specialChosen === true && pwdGenerated.pwdLength === true) {
            var special = pwdGenerated.specialChar[Math.floor(Math.random)]
            result = result + special;

           return result;


          }

          if (randomNumChosen === true && pwdGenerated.pwdLength === true) {
            var random = pwdGenerated.random[Math.floor(Math.random)]
            result = result + random;

           return result;
          }
          else {

            if (lowerChosen === false
              && upperChosen === false
              && specialChosen === false 
              && randomNum === false) {
      
              window.alert('you must choose at least one of the criteria to generate a password')
      
              runPrompts();
            }
          }

        }
        
      }

    }

      
    function runPrompts() {
  

    lowerChosen = confirm('would you like to use lowercase characters?')
    upperChosen = confirm('would you like to use uppercase characters?')
    specialChosen = confirm('would you like to use special characters?')
    randomNumChosen = confirm('would you like to use random numbers?')
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