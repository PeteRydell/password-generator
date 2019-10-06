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

        //Add characters to set
        if ((specChar == true) && (num == true) && (lowChar == true) && (upChar == true)){
            charSet = charSet + special + numeric + lowCaseCharacter + upperCaseCharacter
        }
            //Special Character set
            else if ((specChar == true) && (num == true) && (lowChar == true) && (upChar == false)){
            charSet = charSet + special + numeric + lowCaseCharacter
        ;}
            else if ((specChar == true) && (num == true) && (lowChar == false) && (upChar == true)){
            charSet = charSet + special + numeric + upperCaseCharacter
        ;}
            else if ((specChar == true) && (num == false) && (lowChar == true) && (upChar == true)){
            charSet = charSet + special + upperCaseCharacter + lowCaseCharacter
        ;}
            else if ((specChar == true) && (num == true) && (lowChar == false) && (upChar == false)){
            charSet = charSet + special + numeric
        ;}
            else if ((specChar == true) && (num == false) && (lowChar == true) && (upChar == false)){
            charSet = charSet + special + lowCaseCharacter
        ;}
            else if ((specChar == true) && (num == false) && (lowChar == false) && (upChar == true)){
            charSet = charSet + special + upperCaseCharacter
        ;}
            else if ((specChar == true) && (num == false) && (lowChar == false) && (upChar == false)){
            charSet = charSet + special
        ;}
            //Upper Case Character set
            else if ((specChar == false) && (num == true) && (lowChar == true) && (upChar == true)){
            charSet = charset + numeric + lowCaseCharacter + upperCaseCharacter
        ;}
            else if ((specChar == false) && (num == false) && (lowChar == true) && (upChar == true)){
            charSet = charset + lowCaseCharacter + upperCaseCharacter
        ;}
            else if ((specChar == false) && (num == false) && (lowChar == false) && (upChar == true)){
            charSet = charset + upperCaseCharacter
        ;}
            // Lower Case character set
            else if ((specChar == false) && (num == false) && (lowChar == true) && (upChar == false)){
            charSet = charset + lowCaseCharacter
        ;}
            // Numeric Case character set
            else if ((specChar == false) && (num == true) && (lowChar == false) && (upChar == false)){
                charSet = charset + numeric
        ;}
 
        console.log (randomPassword)
}

function copy(){
    var copyClipboard = document.getElementById("genPass");
    copyText.select();
    document.execCommand("copy");
}