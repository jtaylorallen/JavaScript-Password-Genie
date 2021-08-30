// global variables 
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharactersArray = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ',', '^', '_', '`', '{', '}', '|', '~', '"'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var secretWordArray = ['wizard'];
// this is gonna contain whatever the user chooses (yes not no) into one giant array that concatinates from the other arrays
var superArray = [];

var generateBtn = document.querySelector('#generate');
// function that grabs our main function, generatePassword(), and spits out the value of the function return to that div with id="passwod" in our index.html

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
}

// now that generatePassword() function is ready to be returned and printed on our div box with the id #password, listen to a mouse click from user on taht button and invoke aka "call" the function and return it's vale
generateBtn.addEventListener('click', writePassword);

// here's our main function where all the magic happens
// this series of promps and confirms that require action from the user will store the users input in variables which will let us know the following:
// 1. how long they want the password to be 
// 2. if password should include lowercase, uppercase, numbers, and/or special characters
// 3. then concat the true boolean responses into our superArray 
// 4. randomly grab characters from our customized superArray and customized length of characters specified by the user
// 5. finally, print that randomized superArray as text to the div with id="password" (the box just above the button that calls the function generatePassword)

function generatePassword() {
    // welcome pop up - confirm boolean 
    var welcomeMsg = confirm('welcome to password generator wizard! ready to begin?');
    console.log(welcomeMsg);
    if (welcomeMsg === true) {
        console.log('yes they love my wizard and want to start');
    } else {
        console.log('your loss');
        alert('your loss');
        Window.close();
    }
    // length pop up -  prompt for user to enter a number
    var lengthMsg = parseInt(prompt('please enter the length of characters you would like for your password, it must be between 9 and 128'));
    console.log(lengthMsg);
    if (lengthMsg >= 9 && lengthMsg <= 128) {
        console.log('success! this number is approved by dev wizard jessamyn');
        // } else if (isNaN(lengthMsg) || '') {
        //     console.log('wrong, try again');
        //     alert('this needs to be a number, not a wingding, also it needs to be between 9 and 128 please submit again or I\'ll close your window');
        //     parseInt(prompt('lets try this again, how many characters would you like? enter a number between 9 and 128 characters please'));
    } else {
        console.log('what are you doing, this wizard can\'t wizard itself...');
        alert('this needs to be a number, not a wingding, also it needs to be between 9 and 128 please submit again or I\'ll close your window');
        Window.close();
    }

    // lowercase pop up - confirm boolean
    var lowercaseMsg = confirm('do you want to include lowercase characters in your password?');
    console.log(lowercaseMsg);
    if (lowercaseMsg === true) {
        console.log('cool add in lowercase characters');
        superArray = superArray.concat(lowercaseArray);
    } else {
        console.log('too bad, lowercase is cool');
    }
    // logging the superarray to see whatsup
    console.log('this is superArray after the lowercase: ', superArray);

    // uppercase pop up - confirm boolean
    var uppercaseMsg = confirm('do you want to include UPPERCASE characters in your password?');
    console.log(uppercaseMsg);
    if (uppercaseMsg === true) {
        console.log('cool add in UPPERCASE characters');
        superArray = superArray.concat(uppercaseArray);
    } else {
        console.log('too bad, UPPERCASE is cool');
    }
    // logging the superarray to see whatsup
    console.log('this is superArray after the uppercase: ', superArray);

    // number pop up - confirm boolean
    var numberMsg = confirm('do you want to include numbers in your password?');
    console.log(numberMsg);
    if (numberMsg === true) {
        console.log('cool add in numbers');
        superArray = superArray.concat(numberArray);
    } else {
        console.log('too bad, numbers are cool');
    }
    // logging the superarray to see whatsup
    console.log('this is superArray after the numbers: ', superArray);

    // special character pop up - confirm boolean
    var specialCharMsg = confirm('do you want to include special !@#$%^&*() characters in your password?');
    console.log(specialCharMsg);
    if (specialCharMsg === true) {
        console.log('cool add in special !@#$%^&*() characters');
        superArray = superArray.concat(specialCharactersArray);
    } else {
        console.log('too bad, special !@#$%^&*() are really cool');
    }
    // logging the superarray to see whatsup
    console.log('this is superArray after the special characters !@#$%^&*()?!@#: ', superArray);

    // secret word pop up - confirm boolean
    var secretMsg = confirm('do you want to include THE SECRET WORD in your password?');
    console.log(secretMsg);
    if (secretMsg === true) {
        console.log('cool give em the secret word...');
        superArray = superArray.concat(secretWordArray);
    } else {
        console.log('too bad, the secret word is everything you need in life');
    }
    // logging the superarray to see whatsup
    console.log('this is superArray after the SECRET WORD: ', superArray);

    // validation check - if all booleans return false aka user says no/cancel to every option do this:
    if ((lowercaseMsg === false) && (uppercaseMsg === false) && (numberMsg === false) && (specialCharMsg === false) && (secretMsg === false)) {
        alert('you gotta choose something ya ding dong! let\'s try this again...')
        Window.close();
    }
    // bring it home with an empty password, this is gonna store the users actual random password once it's generated by our loop;
    var password = '';

    // loop over the superArray and randomly grab indexes and push into the string password up to the user's specified length
    for (var index = 0; index < lengthMsg; index++) {
        var randomNumber = Math.floor(Math.random() * superArray.length); // so it's 0 t 1 (aka 0% to 100%)
        password += superArray[randomNumber];
        // console.log('this is the superArray in the loop', superArray)
    };

    return password;
};

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
