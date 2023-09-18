const ID = document.querySelector(".input_id");
const PW = document.querySelector(".input_pw");
const btnSubmit = document.querySelector(".modalBody_form_submit");
const btnSignIn = document.querySelector(".sign_in");
const btnProfile = document.querySelector(".profile");


//우선 아이디 user 비번 1234로 통일

btnSubmit.addEventListener("click", () =>{
    if(ID.value == "user" && PW.value == "1234"){
        sessionStorage.setItem("id", ID.value);
        sessionStorage.setItem("pw", PW.value);
        result.textContent  = "로그인 완료"
        ID.value = "";
        PW.value = "";
       }
       else{
        alert("회원정보가 존재하지 않습니다.");
       }
})

//세션 스토리지에 회원 정보 저장되면, sign in 버튼에서 프로필 버튼으로 바꿈
if(sessionStorage.getItem("id") && sessionStorage.getItem("pw")){
    btnSignIn.style.display = "none";
    btnProfile.style.display = "flex";
}