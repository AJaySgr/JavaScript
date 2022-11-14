

function showMessage(input,msg,type){
    const message = input.parentNode.querySelector("small"); 
     message.innerText = msg;
    input.className = type? "success" : "error";
    return type;
}

function showError(input,msg){
    return showMessage(input,msg,false);
}

function showSuccess(input){
    return showMessage(input,"",true);
}

function hasValue(input,msg){
    if(input.value.trim() === ""){
        return showError(input,msg);
    }
    return showSuccess(input);
}

function validateEmail(input,requiredMsg,invalidMsg){
    if(!hasValue(input,requiredMsg)){
        return false;
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const email = input.value.trim();
    if(!emailRegex.test(email)){
        return showError(input,invalidMsg);
    }
    return true;
}

const form = document.querySelector("#signup");

const name_required = "Enter Your Name";
const email_required = "Enter your Email";
const email_invalid = "Enter Correct Email";

form.addEventListener("submit", function(event){
    event.preventDefault();
    let nameValid = hasValue(form.elements["firstName"],name_required);
    let emailValid = validateEmail(form.elements["emailAddress"],email_required,email_invalid);

    if(nameValid && emailValid){
        alert("Data Saved Success");
    }
})


// const form = document.querySelector('#signup');

// const name_required ='Enter the name';
// const email_required ='Enter your email';
// const email_invalid ='Try with right email';

// function showMessage(input,msg,type){
//     const message=input.parentNode.querySelector('small');
//     message.innerText=msg;
//     return type;
// }
// function showSuccess(){
//     return showMessage(input," ",error);
// }

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     let nameValid= hasValue(form.element['name']);
//     let emailValid = validateEmail(form.element['email'],email_required)

//     if(nameValid && emailValid){
//         alert('Data Saved success');
//     }

// })