const id = document.querySelector(".input_email");
const pw = document.querySelector(".input_pw");
const btnSubmit = document.querySelector(".modalBody_form_submit");

btnSubmit.addEventListener("click", () =>{
    if(id.value === "leesuhyun05505@gmail.com" && pw.value === 1234){
        console.log("login");
    }else{
        console.log("nope")
    }
})