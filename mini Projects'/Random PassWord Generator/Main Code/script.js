const passwordBox =document.getElementById("Password");
const length = 12;




const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"

const numbers ="0123456789"
const symbols = "~!@#$%&*_+-()+|}{[]></+"

const allChars = upperCase+lowerCase+numbers+symbols

function createPassword(){

    let password =""
    password += upperCase[Math.floor(Math.random()*upperCase.length)]
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password += numbers[Math.floor(Math.random()*numbers.length)]
    password += symbols[Math.floor(Math.random()*symbols.length)]

    while (length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]

    }


    passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand("copy");
        showCopyFeedback();
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}



function showCopyFeedback() {
    const copyMessage = document.querySelector('.copy-msg');
    
    // Reset animation by removing and re-adding the class
    copyMessage.classList.remove('show');
    void copyMessage.offsetWidth; // Trigger reflow
    copyMessage.classList.add('show');
    
    setTimeout(() => {
        copyMessage.classList.remove('show');
    }, 1500);
}