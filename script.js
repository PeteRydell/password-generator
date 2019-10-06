var genPass = document.getElementById("generate-password");
var copy = document.getElementById("copy");
var charPrompt = prompt("How many characters would you like your password to be (Please input a value between 8 - 128)");
var specChar = confirm ("Would you like to include special characters?");
var numChar = confirm ("Would you like to include numeric characters?");
var lowChar = confirm ("Would you like to include lower case characters?");
var upChar = confirm ("Would yuou like to include upper case characters?");

var numeric = "0123456789";
var special = "!@#$%^&*()_+{}:<>?|[];,./`~";
var lowCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log (charPrompt);
console.log (specChar);
console.log (numChar);
console.log (lowChar);
console.log (upChar);
console.log (genPass);

function genPassword(){
    var passwordLength = charPrompt;
    var charSet = "";
    var randomPassword = "";

    for (var i = 0; i < parseInt(passwordLength); i++) {
        var randomPassword = characterSet[Math.floor(Math.random() * charPrompt.length)];
        }

    //Add special characters to the set
    if (specChar == true){
        charSet = charSet + special
    };
    // Adds numeric characters to the set
    if (num == true){
        charSet = charSet + numeric
    };
    // Adds lowercase characters to the set
    if (lowChar == true){
        charSet = charSet + lowCaseCharacter
    };
    // Adds uppercase characters to the set
    if (upChar == true){
        charSet = charSet + upperCaseCharacter
    };
    
    console.log (randomPassword)
}

function copy(){
    var copyClipboard = document.getElementById("genPass");
    copyText.select();
    document.execCommand("copy");
}