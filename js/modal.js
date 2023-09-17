let signinbtn = document.querySelector(".sign_in");
let modalWrap = document.querySelector(".modalWrap");
let closeModal = document.querySelector(".close_modal");
let goSignUP = document.querySelector(".modalBody_signup_signuppage");
let goSignIn = document.querySelector(".modalBody_signin_signuppage");
let modaltext = document.querySelector(".modalBody_header_text");
let modalSubmit = document.querySelector(".modalBody_form_submit");
const modalContent = document.querySelector(".modalContent");
let btnProfiles = document.querySelector(".profile");

function modalHandler(){
    modalWrap.style.display="flex";
}


function singUpModal(){
    modaltext.innerHTML="Sign Up"
    goSignUP.style.backgroundColor = "#0D7D0B";
    goSignIn.style.backgroundColor = "#CCC";
    modalSubmit.value = "Sign Up";
}

function singInModal(){
    modaltext.innerHTML="Sign In"
    goSignIn.style.backgroundColor = "#0D7D0B";
    goSignUP.style.backgroundColor = "#CCC";
    modalSubmit.value = "Sign In";
}

function closeModalHandler(){
    modalWrap.style.display="none";
}


//프로필 모달로 바꿔주기

btnProfiles.addEventListener("click", function(){
    console.log("yes");

    // 모달을 감싸는 전체적인 요소. 배경색도 담당
    const profileModalWrap = document.createElement("div");
    profileModalWrap.classList = "profileModalWrap";
    profileModalWrap.style.display="flex";

    const closeModal = document.createElement("div");
    closeModal.classList.add("close_modal");
    closeModal.addEventListener("click", function(){
        profileModalWrap.style.display = "none"
    })

    const closeBtnImg = document.createElement("img")
    closeBtnImg.src = "./img/closePNG.png"
    closeModal.appendChild(closeBtnImg);

    // 모달 컨텐츠를 감싸는 요소 생성
    const modalContent = document.createElement("div");
    modalContent.id = "modalContent";

    // 모달 본문 컨테이너 생성
    const modalBody = document.createElement("div");
    modalBody.id = "modalBody";

    // 이미지 생성
    const profilePic = document.createElement("img");
    profilePic.classList.add("modalBody_profile_pic");
    profilePic.src = "./img/profilepic.jpg";

    // 폼생성
    const form = document.createElement("form");
    form.classList.add("modalBody_form");

    // 로그아웃 버튼
    const logoutButton = document.createElement("input");
    logoutButton.classList.add("modalBody_editprofile_submit_logout");
    logoutButton.type = "submit";
    logoutButton.value = "Log Out";
    logoutButton.addEventListener("click", () => {sessionStorage.clear();})

    // 프로필 사진 업로드 버튼
    const uploadButton = document.createElement("input");
    uploadButton.classList.add("modalBody_editprofile_submit");
    uploadButton.type = "submit";
    uploadButton.value = "Upload Profile Photo";

    // 프로필 사진 삭제 버튼
    const removeButton = document.createElement("input");
    removeButton.classList.add("modalBody_editprofile_submit");
    removeButton.type = "submit";
    removeButton.value = "Remove Profile Photo";

    // 폼에다가 버튼 추가하기
    form.appendChild(logoutButton);
    form.appendChild(uploadButton);
    form.appendChild(removeButton);

    // 이미지 , 폼을 본문 div에 추가
    modalBody.appendChild(closeModal); 
    modalBody.appendChild(profilePic);
    modalBody.appendChild(form);

    //모달 컨텐츠를 담당하는 div에 본문 div 추가
    modalContent.appendChild(modalBody);

    //모달을 감싸는 전체적인 요소(배경)에 모달 컨텐츠 담은 div 추가
    profileModalWrap.appendChild(modalContent);   

    //전체 요소 바디에 추가함
    document.body.appendChild(profileModalWrap);
})

closeModal.addEventListener("click", closeModalHandler);
goSignUP.addEventListener("click",singUpModal);
goSignIn.addEventListener("click",singInModal);
signinbtn.addEventListener("click", modalHandler);