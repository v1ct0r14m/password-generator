// Assignment Code
var generateBtn = document.querySelector("#generate");

// criteria variables


var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar =  '~!@#$%^&*-=+_.?';
var randomNum = '0123456789';
var passwordLength = { passwordLength: 0 }




function runPrompts() {
  

  lowercase = confirm('would you like to use lowercase characters?')
  uppercase = confirm('would you like to use uppercase characters?')
  specialChar = confirm('would you like to use special characters?')
  randomNum = confirm('would you like to use random numbers?')

}

var pwdGenerated = {
  lowercase: '',
  uppercase: '',
  specialChar: '',
  randomNum: '',
  passwordLength}

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
  passwordLength.passwordLength = 0;
  result = '';

  

  while ((pwdLength) || pwdLength > 8 || pwdLength < 128) {

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
        

        while (passwordLength.passwordLength < pwdLength) {
          
        if (lowercase === false && uppercase === false && specialChar === false && randomNum === false) {
          alert('at least one criteria must be selected to generate a password')

          runPrompts();

        } 
          else { 
            
          
      
          if (lowercase === true && pwdGenerated.passwordLength < pwdLength) {

            var lower = pwdGenerated.lowercase[Math.floor(Math.random() * 26)]
            result = result + lower;

            pwdGenerated.passwordLength++;

          }

      
          if (uppercase === true && pwdGenerated.passwordLength < pwdLength) {

            var upper = pwdGenerated.uppercase[Math.floor(Math.random() * 26)]
            result = result + upper;

            pwdGenerated.passwordLength++;
        
          }

          if (specialChar === true && pwdGenerated.passwordLength < pwdLength) {

            var special = pwdGenerated.specialChar[Math.floor(Math.random() * 15)]
            result = result + special;

            pwdGenerated.passwordLength++;

          }

          if (randomNum === true && pwdGenerated.passwordLength < pwdLength) {

            var random = pwdGenerated.randomNum[Math.floor(Math.random() * 10)];
            result = result + random;

            pwdGenerated.passwordLength++;
          }


          return pwdGenerated.passwordLength++;

        } 
        
      
          
      }
    }

  }

}






/* pwd must be at least 8 characters and no more than 128 characters --> MOVED TO GENERATEPWD

  while loop for pwdLength -->
  prompt for pwdLength-->for length input
  if statement for pwdLength-->user input for pwdCriteria */