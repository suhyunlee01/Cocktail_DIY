// const picArea = document.querySelector(".getPic");
// const picImg = document.createElement("img");
// const reader = new FileReader(); //파일리더 객체

// //드래그 앤 드롭

// picArea.ondragenter = function(event){
//     event.preventDefault();
// }
// picArea.ondragover = function(event){
//     event.preventDefault();
// }
// picArea.ondrop = function(event){
//     const file = event.dataTransfer.files[0];

//     //파일이 들어온 경우에만
//     if(file){
//         reader.onload = function(e){
//             picImg.src = e.target.result;

//             picArea.innerHTML = ""; //새 이미지 추가 시 기존 이미지 제거
//             picArea.appendChild(picImg);
//         }

//         //파일리더 객체를 통해 readAsDataURL 메소드 호출
//         //해당 메소드로 event.dataTransfer.files[0]을 읽어옴
//         reader.readAsDataURL(file);
//         event.preventDefault();
//     }
// }

// export{picArea, picImg};