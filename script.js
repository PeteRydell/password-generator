var genPass = document.getElementById("generate-password");
var copy = document.getElementById("copy");
var charPrompt = prompt("How many characters would you like your password to be (Please input a value between 8 - 128)");
var specChar = confirm ("Would you like to include special characters?");
var numChar = confirm ("Would you like to include numeric characters?");
var lowChar = confirm ("Would you like to include lower case characters?");
var upChar = confirm ("Would yuou like to include upper case characters?");

var numeric = "0123456789";
var symbol = "!@#$%^&*()_+{}:<>?/|[];,./`~";
var lowCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log (charPrompt);
console.log (specChar);
console.log (numChar);
console.log (lowChar);
console.log (upChar);
console.log (genPass);

document.getElementById("genPass").addEventListener("click", function() {
    var characters = char;
});

function password(l, characters){
    var pwd = '';
    for (var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}
function generatePassword() {
    var passwordLength = charPrompt.value;
    var charSet = "";
    var retVal = "";

    for (var i = 0; i < parseInt(passwordLength); ++i) {
        genPass += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        
    // Adds special characters to the set
    if (specChar == true){
        charSet = charSet + symbol
    };
    // Adds numeric characters to the set
    if (specChar == true){
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
    
    }
    return retVal;
}
    console.log (retVal);

function copy(){
    var cPass = document.getElementById("generatePassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}