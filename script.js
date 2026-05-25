// Toggle Password
function togglePassword(){

    let password =
    document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";
    }
    else{

        password.type = "password";
    }
}



// Check Password Strength
function checkPassword(){

    let password =
    document.getElementById("password")
    .value;

    let strength = 0;

    let result =
    document.getElementById("result");

    let bar =
    document.getElementById("strength-bar");


    // Password Rules
    if(password.length >= 8){
        strength++;
    }

    if(/[A-Z]/.test(password)){
        strength++;
    }

    if(/[a-z]/.test(password)){
        strength++;
    }

    if(/[0-9]/.test(password)){
        strength++;
    }

    if(/[!@#$%^&*]/.test(password)){
        strength++;
    }


    // Weak
    if(strength <= 2){

        result.innerHTML =
        "Weak Password ❌";

        result.style.color = "red";

        bar.style.width = "33%";
        bar.style.background = "red";
    }

    // Medium
    else if(strength <= 4){

        result.innerHTML =
        "Medium Password ⚠️";

        result.style.color = "orange";

        bar.style.width = "66%";
        bar.style.background = "orange";
    }

    // Strong
    else{

        result.innerHTML =
        "Strong Password ✅";

        result.style.color = "#00ffcc";

        bar.style.width = "100%";
        bar.style.background = "#00ffcc";
    }
}



// Generate Strong Password
function generatePassword(){

    let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for(let i = 0; i < 12; i++){

        let randomIndex =
        Math.floor(Math.random() *
        characters.length);

        password +=
        characters[randomIndex];
    }

    document.getElementById("password")
    .value = password;

    checkPassword();
}
