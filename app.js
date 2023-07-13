const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const mobileno = document.getElementById("mobileno")
const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirmpassword")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validate();

});

const isEmail = (emailValue) => {
    var symbol = emailValue.indexOf('@');
    var dot = emailValue.indexOf('.');
     if (symbol < 1) return false;
     if (dot < symbol + 2) return false;
     if (dot === emailValue.length - 1) return false;
     return true;
}


const validate = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobilenoValue = mobileno.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
   
    if (usernameValue === ""){
        errorFunction(username, "Please Fill The Form")
    } else if (usernameValue.length < 6){
        errorFunction(username, "Please Fill Minimum 6 lenght")
    } else {
        successFunction(username)
    }

    if (emailValue === ""){
        errorFunction(email, "email can not be blank")
    } else if (!isEmail(emailValue)) {
        errorFunction(email, "Not a Valid Email")

    } else {
        successFunction(email);
    }
    

    if (mobilenoValue === ""){
        errorFunction(mobileno, "Please Fill The Mobile No")
    } else if (mobilenoValue.length < 10){
        errorFunction(mobileno, "Please Fill Minimum 10 Number")
    } else {
        successFunction(mobileno)
    }

    if (passwordValue === ""){
        errorFunction(password, "Please Fill The Password Value")
    } else if (passwordValue.length < 7){
        errorFunction(password, "Please Fill Minimum 7 Number of Password")
    } else {
        successFunction(password)
    }

    if (confirmpasswordValue === ""){
        errorFunction(confirmpassword, "Please Fill The Password Value")
    } else if (confirmpasswordValue.length < 7){
        errorFunction(confirmpassword, "Please Fill Minimum 7 Number of Password")
    } else if (passwordValue !== confirmpasswordValue) {
        errorFunction(confirmpassword, "Please Fill The Same Value of Password")

    } else {
        successFunction(confirmpassword)

    }
} 


 function errorFunction (input, errormsgs) {
   const formControl = input.parentElement; 
    const small = formControl.querySelector('small');
    formControl.className = "setform error";
    small.innerText = errormsgs;
 }

 function successFunction (input) {
    const formControl = input.parentElement; 
    formControl.className = "setform success";



 }
 



