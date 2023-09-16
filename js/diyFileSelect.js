const picArea = document.querySelector(".getPic");
const userInput = document.querySelector(".DIY_input");
const picImg = document.createElement("img");
const picAreaFile = document.getElementById("getPic_file");
const btnUpload = document.getElementById("Btn_DIY_Save");

//picArea 영역을 클릭하면 파일 받아오는 엘리먼트 클릭과도 같게 함
picArea.addEventListener("click", function(){
    picAreaFile.click();
    if(localStorage.getItem("recentImage")){
        localStorage.removeItem("recentImage");
    }
})

//파일 선택 이벤트 처리
picAreaFile.addEventListener("change", function(event){

    //선택된 파일
    const seletedFile = event.target.files[0];

    //선택된 파일이 존재할 경우
    if(seletedFile){
        const reader = new FileReader();

        //파일리더 객체에 로드 이벤트
        reader.onload = function(e){
            picImg.src = reader.result; //img에 읽어온 데이터 src로 주기
            picArea.innerHTML = ""; //안에 있던 글 삭제
            picArea.appendChild(picImg); //picArea div에 출력
        }

        //picAreaFile로 받아온 파일 입력 요소의.파일[0]
        reader.readAsDataURL(this.files[0]);
        
    }else{
        alert("이미지 파일을 선택해주세요");
        picAreaFile.value = "";
    }
})


//로컬스토리지에 저장하기
btnUpload.addEventListener("click", () => {
    let dataCount = 1;
    //로컬스토리지에 myData1이 존재하면
    while (localStorage.getItem(`myData${dataCount}`)) { //myData1
        //datacount 1 증가해서 myData2가 있는지 살펴봄 //이런식으로  myData n번째가 없을 때까지 반복
        dataCount++;  //현재 로컬스토리지에 있는 숫자의 + 1
    }

    // userInput으로부터 텍스트 가져옴
    const textValue = userInput.value; //textarea의 value
    const plusNum = `myData${dataCount}` //현재 로컬스토리지에 있는 숫자의 + 1된 버전을 저장

    // 저장할 객체 만들기
    const obj = {
        recentImage: picImg.src,
        InputText: textValue
    };

    // JSON 문자열로 만들가
    localStorage.setItem(plusNum, JSON.stringify(obj));

    console.log("저장 완료");
});


//data 1을 지우고나서 2 3 4 이렇게 이어서 저장되게 만들기


export {btnUpload};