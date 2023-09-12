let signinbtn = document.querySelector(".sign_in");
let modalWrap = document.querySelector(".modalWrap");
let closeModal = document.querySelector(".close_modal");
let goSignUP = document.querySelector(".modalBody_signup_signuppage");
let goSignIn = document.querySelector(".modalBody_signin_signuppage");
let modaltext = document.querySelector(".modalBody_header_text");
let modalSubmit = document.querySelector(".modalBody_form_submit");

function modalHandler(){
    modalWrap.style.display="flex";
}
signinbtn.addEventListener("click", modalHandler);


function singUpModal(){
    modaltext.innerHTML="Sign Up"
    goSignUP.style.backgroundColor = "#0D7D0B";
    goSignIn.style.backgroundColor = "#CCC";
    modalSubmit.value = "Sign Up";
}
goSignUP.addEventListener("click",singUpModal);

function singInModal(){
    modaltext.innerHTML="Sign In"
    goSignIn.style.backgroundColor = "#0D7D0B";
    goSignUP.style.backgroundColor = "#CCC";
    modalSubmit.value = "Sign In";
}
goSignIn.addEventListener("click",singInModal);