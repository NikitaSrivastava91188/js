
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


function generatePassword() {
     const newLength = Number(length.value);
     const isCustomeBtnChecked = checkCustomizeBtn.checked;
     const customText = customizeTextField.value
   
     console.log(newLength);

     /// check the number of length should be integer, greater than 1 and less than 120.
     if(!Number.isInteger(newLength) || newLength < 1 || newLength > 120) {
        message.textContent = "Enter a integer number between 1 and 120";
        // console.log("repeat");
        
        password.value = "";
        return;
     }

///check if custom box is selected than it must have some vlaue in textfield.
     if((isCustomeBtnChecked && customText.trim() ) === ""){
      message.textContent = "Please enter your preference or uncheck it."
      password.value = "";
      return;
     }

     /// checking the length shold not exceed to length of password.
     if(isCustomeBtnChecked && customText.length > length){
      message.textContent = "Your preference is longer than length of password"
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
   console.log(newPassword);
   
}
else{
   password.value = newPassword
}
     message.textContent = "Password generate successfully!";

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