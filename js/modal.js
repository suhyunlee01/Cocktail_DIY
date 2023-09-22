let signinbtn = document.querySelector(".sign_in");
let modalWrap = document.querySelector(".modalWrap");
let closeModal = document.querySelector(".close_modal");
let goSignUP = document.querySelector(".modalBody_signup_signuppage");
let goSignIn = document.querySelector(".modalBody_signin_signuppage");
let modaltext = document.querySelector(".modalBody_header_text");
let modalSubmit = document.querySelector(".modalBody_form_submit");
const modalContent = document.querySelector(".modalContent");
let btnProfiles = document.querySelector(".profile");
let btnProfilesImg = document.querySelector(".profileImgNav");

//modalwrap로그인 & 아웃 모달
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




//sign in 버튼은 display none -> 프로필 버튼이 display flex로 바뀐 후 클릭 이벤트
//프로필 모달로 바꿔주기
btnProfiles.addEventListener("click", function(){
    console.log("yes");

    // 모달을 감싸는 전체적인 요소. 배경색도 담당
    const profileModalWrap = document.createElement("div");
    profileModalWrap.classList = "profileModalWrap";
    profileModalWrap.style.display="flex";

    //닫기버튼 x버튼
    const closeModal = document.createElement("div");
    closeModal.classList.add("close_modal");
    closeModal.addEventListener("click", function(){
        profileModalWrap.style.display = "none"
        location.reload();
    })
    //닫기버튼 x버튼 이미지
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
    profilePic.src = "./img/profileDefaultBig.svg";

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
    let uploadButton = document.createElement("input");
    uploadButton.classList.add("modalBody_editprofile_submit");
    uploadButton.type = "submit";
    uploadButton.value = "Upload Profile Photo";
    
    // 프로필 사진 업로드 버튼 이벤트
    uploadButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("업로드버튼 클릭");

        //업로드 버튼 누르면 프로필 파일 선택창 누른 것과 같음
        filePick.click();
    })

    //프로필 사진 파일 선택창
    let filePick = document.createElement("input");
    filePick.setAttribute("type", "file")
    filePick.setAttribute("style", "display: none;");
    filePick.setAttribute("accept", "image/*"); 

    //프로필 사진 파일 선택창 이벤트 //선택 파일 로컬스토리지 저장
    filePick.addEventListener("change", (event) => {

        //input type file 특성상 제출하는 특성이 있어서
        //모달창을 자꾸 종료시킴...해당 동작을 preventDefault로 막음
        event.preventDefault();

        filePick.style.display = "flex";

        const seletedFile = event.target.files[0];

        //파일 선택창에서 선택한 파일이 존재할 경우
        if(seletedFile){
            const reader = new FileReader();
    
            //파일리더 객체에 로드 이벤트
            reader.onload = function(e){
                console.log(reader.result);
                //프로필 img에 읽어온 데이터 src로 줘서 미리보기
                profilePic.src = reader.result;
                localStorage.setItem("pofilePic", reader.result);
            }
    
            reader.readAsDataURL(seletedFile);
        }else{
            alert("이미지 파일을 선택해주세요");
            picAreaFile.value = "";
        }
    })

    //프로필 사진 등록 // global nav 프로필 이미지 로컬스토리지에서 가져오기
    if(localStorage.getItem("pofilePic")){
        let profileImg = localStorage.getItem("pofilePic");
        profilePic.src = profileImg;
    }

    // 프로필 사진 삭제 버튼
    let removeButton = document.createElement("input");
    removeButton.classList.add("modalBody_editprofile_submit");
    removeButton.type = "submit";
    removeButton.value = "Remove Profile Photo";

    //로컬스토리지에서 프로필 데이터 삭제
    removeButton.addEventListener("click", (event) => {
        event.preventDefault();
        if(localStorage.getItem("pofilePic")){
            localStorage.removeItem("pofilePic");
            profilePic.src = "./img/profileDefaultBig.svg";
            btnProfilesImg.src="img/profiledefault.svg";
        }
    })

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

//dom로드 시 프로필이미지를 로컬스토리지에서 가져옴
window.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("pofilePic")){
        btnProfilesImg.src = localStorage.getItem("pofilePic");
    }
})