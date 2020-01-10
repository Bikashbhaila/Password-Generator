// Create variable for input length
var inputLength;

// create a loop for length
while (true) {
    inputLength = prompt("Please enter your desired password length between 8 and 128.");
    if (inputLength >= 8 && inputLength <= 128){
        break;
    }alert("Your password does not meet the length requirement.");
 }

 const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

var hasUpper = confirm("Do you want upper cases in your password?");
var hasLower = confirm("Do you want lower cases in your password?");
var hasNumber= confirm("Do you want numbers in your password?");
var hasSymbol = confirm("Do you want special characters in your password?");    

var final = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, inputLength);


function generatePassword(lower, upper, number, symbol, inputLength) {
  
    let generatedPassword = "";

    
    const typesCount = lower + upper + number + symbol;

  

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
        item=> Object.values(item)[0]
        );

    console.log('typesArr: ', typesArr);

    if (typesCount === 0) {
        return "";
    }


    for(let i = 0; i < inputLength; i+= typesCount) {
        typesArr.forEach(type => {
          const funcName = Object.keys(type)[0];
                    
          generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, inputLength);
    console.log(finalPassword.length);
    console.log(finalPassword);
    alert("Your passord is" + finalPassword);
    return finalPassword;
 }
   

// Function to get Ramdom lower case character
function getRandomLower() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
}

// Function to get Ramdom upper case character
function getRandomUpper() {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];
}

// Function to get Ramdom number character
function getRandomNumber() {
    const number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
}


// Function to get Ramdom upper case character
function getRandomSymbol() {
    const symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    return symbols[Math.floor(Math.random() * symbols.length)];
}


//     document.getElementById("display").value = pwd;

