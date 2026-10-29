
//self practice
const password = document.getElementById("password");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const specialSymbol = document.getElementById("specialSymbol")
const digits = document.getElementById("digits")
const generateBtn = document.getElementById("generateBtn")
const copyBtn = document.getElementById("copyBtn")
const message = document.getElementById("message")
const checkCustomizeBtn = document.getElementById("customize")
const customizeTextFieldContainer = document.getElementById("customize-container")
const customizeTextField = document.getElementById("customize-password")
const power = document.getElementById("power-point")
const saveBtn = document.getElementById("saveBtn");
const savedPasswordsContainer = document.getElementById("savedPasswords");
const deleteAllBtn = document.getElementById("deleteAllBtn");


function generatePassword() {
     const newLength = Number(length.value);
      // const newLength = length

     const isCustomeBtnChecked = checkCustomizeBtn.checked;
     const customText = customizeTextField.value
   
     console.log(`new length is ${newLength}`);
     console.log(`new length is ${customText}`);

     /// check the number of length should be integer, greater than 1 and less than 120.
     if(!Number.isInteger(newLength) || newLength < 1 || newLength > 120) {
        message.textContent = "Enter a integer number between 1 and 120";
        // console.log("repeat");
        
        password.value = "";
        measureStrength();
        return;0
     }

///check if custom box is selected than it must have some vlaue in textfield.
     if(isCustomeBtnChecked && customText.trim() === ""){
      message.textContent = "Please enter your preference or uncheck it."
      console.log("Please enter your preference or uncheck it.")
      password.value = "";
      measureStrength();
      return;
     }

     /// checking the length should not exceed to length of password.
     if(isCustomeBtnChecked && customText.length > newLength){
      // console.log(customText.length);
      
      message.textContent = "Your preference is longer than length of password";
      password.value = "";
      return
     }

       //check how many legth is required when custom is selected
     const remainingLength = isCustomeBtnChecked ? (newLength - customText.length) : newLength; 

     let characters  = ""
     if(uppercase.checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     }
     if(lowercase.checked){
        characters += "abcdefghijklmnopqrstuvwxyz"
     }
     if(digits.checked){
        characters += "0123456789"
     }
     if(specialSymbol.checked){
        characters += "!@#$%^&*()_+-=[]{}"
     }


     if( remainingLength > 0 && characters.length === 0) {
     
        message.textContent = "Please select atleast one of the checkboxes to generate password.";
        console.log("Please select atleast one of the checkboxes ");
        password.value = "";
        measureStrength();
        return;
     }
     else{
        message.textContent = ""
     }

     let newPassword = ""

     //generate the remaining characters
     if(remainingLength > 0){
     const randomValues = new Uint32Array(newLength);
     const maxRange = Math.floor(4294967296 / characters.length) * characters.length;

     for(let i = 0; i<remainingLength; i++){
        let randomNumber;

        do{
            crypto.getRandomValues(randomValues.subarray(i, i+1));
            randomNumber = randomValues[i];
        } while( randomNumber >= maxRange);

        newPassword += characters[randomNumber % characters.length]
     }

}


///include customize only when enabled
if(isCustomeBtnChecked){
   password.value = customText + newPassword
   // console.log(newPassword);
   
}
else{
   password.value = newPassword
}
     message.textContent = "Password generate successfully!";

     measureStrength();

}

 generateBtn.addEventListener("click", generatePassword)

function showTextField(){
   if (checkCustomizeBtn.checked){
customizeTextFieldContainer.style.display = 'block';

   }
   else{
   customizeTextFieldContainer.style.display = 'none';
   // console.log(customizeTextField);
   
   }
}

checkCustomizeBtn.addEventListener("change", showTextField);

copyBtn.addEventListener("click", () => {
    if (password.value) {
        navigator.clipboard.writeText(password.value);
        message.textContent = "Password copied to clipboard!";
    }

    else{
      message.textContent = "generate the password first!"
    }
});


// function measureStrength(){
//      let point = 0;
//     let value = password.value;
//      if(value.length === 0){
//        power.style.width = "0%"
//     power.style.backgroundColor = "transparent"
//     return;
//         }


//     let widthPower = 
//         ["0%","1%", "25%", "50%", "75%", "100%"];
//     let colorPower = 
//         ["transparent","#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

   
//     if (value.length >= 6) {
//         let arrayTest = 
//             [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
//         arrayTest.forEach((item) => {
//             if (item.test(value)) {
//                 point += 1;
//             }
//         });
//             power.style.width = widthPower[point];
//     power.style.backgroundColor = colorPower[point];
//     }
//    //  else{
//    //    point = 0
//    //       power.style.width =  "0%";
//    //  power.style.backgroundColor = "transparent";
//    //  }
  

// }


function measureStrength() {
    const value = password.value;

    if (value.length === 0) {
        power.style.width = "0%";
        power.style.backgroundColor = "transparent";
        return;
    }

    let point = 0;

    // Check the actual password length.
    if (value.length >= 8) {
        point++;
    }

    if (value.length >= 12) {
        point++;
    }

    if (value.length >= 16) {
        point++;
    }

    // Check the character categories.
    const arrayTest = [
        /[0-9]/,
        /[a-z]/,
        /[A-Z]/,
        /[^a-zA-Z0-9]/
    ];

    let categories = 0;

    arrayTest.forEach((item) => {
        if (item.test(value)) {
            categories++;
        }
    });

    // Award points for character diversity.
    if (categories >= 2) {
        point++;
    }

    if (categories >= 3) {
        point++;
    }

    // Update the strength indicator.
    const widthPower = [
        "5%",
        "20%",
        "40%",
        "60%",
        "80%",
        "100%"
    ];

    const colorPower = [
        "#D73F40",
        "#D73F40",
        "#DC6551",
        "#F2B84F",
        "#BDE952",
        "#3ba62f"
    ];

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
}


//functions to store the passwords
function getSavedPasswords() {

    const savedPasswords = localStorage.getItem("savedPasswords");

    return savedPasswords ? JSON.parse(savedPasswords) : [];

}

function savePassword() {

    const currentPassword = password.value;

    if (!currentPassword) {
        message.textContent = "Generate a password first!";
        return;
    }

    const savedPasswords = getSavedPasswords();

    const newEntry = {
        id: crypto.randomUUID(),
        password: currentPassword,
        createdAt: new Date().toISOString()
    };

    savedPasswords.push(newEntry);

    localStorage.setItem(
        "savedPasswords",
        JSON.stringify(savedPasswords)
    );

    message.textContent = "Password saved successfully!";

    displaySavedPasswords();

}