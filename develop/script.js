// Assignment Code
var generateBtn = document.querySelector("#generate");

// criteria variables

var pwdGenerated = {lowercase, uppercase, specialChar, randomNum, passwordLength}

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar =  '~!@#$%^&*-=+_.?';
var randomNum = Math.floor(Math.random);
var passwordLength = 0;

function runPrompts() {
  

  lowercase = confirm('would you like to use lowercase characters?')
  uppercase = confirm('would you like to use uppercase characters?')
  specialChar = confirm('would you like to use special characters?')
  randomNum = confirm('would you like to use random numbers?')

} 
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

  pwdLength = 0;
  pwdGenerated.passwordLength = 0;
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
        
        runPrompts();
        

        while (passwordLength < pwdLength) {
          
        if (lowercase === false && uppercase === false && specialChar === false && randomNum === false) {
          alert('at least one criteria must be selected to generate a password')

          runPrompts();

        } 
          else { 
            
          
      
          if (lowercase === true && pwdGenerated.passwordLength < pwdLength) {
            var lower = pwdGenerated.lowercase;
            result = result + lower;

            pwdGenerated.passwordLength++;

          }

      
          if (uppercase === true && pwdGenerated.passwordLength < pwdLength) {
            var upper = pwdGenerated.uppercase;
            result = result + upper;

            pwdGenerated.passwordLength++;
        
          }

          if (specialChar === true && pwdGenerated.passwordLength < pwdLength) {
            var special = pwdGenerated.specialChar;
            result = result + special;

            pwdGenerated.passwordLength++;

          }

          if (randomNum === true && pwdGenerated.passwordLength < pwdLength) {
            var random = pwdGenerated.random;
            result = result + random;

            pwdGenerated.passwordLength++;
          }

        } 
        
        return result;
          
      }
    }

  }

}





  
////while loop here --> while characters are between 8 - 128
//// pwdLength, #, symbols, upper n lower case letters decided by user input here
//////prompts for each 
//////all prompts to be answerable


/* p must be at least 8 characters and no more than 128 characters --> MOVED TO GENERATEPWD

  while loop for pwdLength -->
  prompt for pwdLength-->for length input
  if statement for pwdLength-->user input for pwdCriteria */