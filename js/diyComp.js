const saveZone = document.querySelector(".Diy_recipe_save_zone");

document.addEventListener("DOMContentLoaded", () => {
    console.log(localStorage.length);

    //로컬 스토리지의 길이만큼 getitem 반복
    for(let i = 1; i<localStorage.length + 1; i++){
        let storedData = localStorage.getItem('myData' + i);
        //만약 로컬스토리지에 데이터가 있다면
        if(storedData){
            //json 파일 디시리얼라이제이션
            let parsedObj = JSON.parse(storedData);

            //만약 디시리얼라이제이션한 파일이 있다면 동적으로 컴포넌트 생성
            if(parsedObj){
                console.log("ok");

                // 새 컴포넌트 생성할 컨테이너가 될 div 생성
                const diyComp = document.createElement('div');
                diyComp.classList.add("Diy_container_comp_saved");

                // 버튼 생성 //이벤트 핸들러 생성
                const btnDelete = document.createElement('button');
                btnDelete.id = "Btn_DIY_delete";
                btnDelete.textContent = "Delete";
                btnDelete.addEventListener("click", () => {
                    console.log("테스트");
                    localStorage.removeItem("myData"+i);
                    diyComp.remove();
                })


                // 이미지
                const imgPic = document.createElement('img');
                imgPic.src = parsedObj.recentImage;
                imgPic.classList.add("getPic_saved");
                imgPic.style.objectFit = "scale-down";

                // 텍스트
                const textArea = document.createElement('textarea');
                textArea.disabled = true;
                textArea.classList.add("DIY_input_saved");
                textArea.value = parsedObj.InputText;

                // // 다운버튼
                // const btnDownload = document.createElement('button');
                // btnDownload.id = "Btn_DIY_Save_saved";
                // btnDownload.textContent = "Download Image";

                // div영역에 생성한 요소들 추가
                diyComp.appendChild(btnDelete);
                diyComp.appendChild(imgPic);
                diyComp.appendChild(textArea);
                // diyComp.appendChild(btnDownload);

                // saveZone에 컨테이너로 만든 div 추가
                saveZone.appendChild(diyComp);
                
            }
        }
    }
})