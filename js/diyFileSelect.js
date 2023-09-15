import { picArea } from "./diyDragDrop.js";
const picAreaFile = document.getElementById("getPic_file");

//picArea 영역을 클릭하면 파일 받아오는 엘리먼트 클릭과도 같게 함
picArea.addEventListener("click", function(){
    picAreaFile.click(); 
})

//파일 선택 이벤트 처리
picAreaFile.addEventListener("change", function(event){
    const seletedFile = event.target.files[0];

    if(seletedFile){
        const reader = new FileReader();

        reader.onload = function(e){
            const newImg = document.createElement("img");
            newImg.src = e.target.result;
            
            picArea.innerHTML = ""; //새 이미지 추가 시 기존 이미지 제거
            picArea.appendChild(newImg);
        }
        reader.readAsDataURL(seletedFile);
    }else{
        alert("이미지 파일을 선택해주세요");
        picAreaFile.value = "";
    }

})


//const picArea = document.querySelector(".getPic");
//const picImg = document.createElement("img");
//const reader = new FileReader();