const picArea = document.querySelector(".getPic");
const picImg = document.createElement("img");
const picAreaFile = document.querySelector(".getPic_file");
const picAreaText = document.querySelector(".getPic_txt");
const reader = new FileReader(); //파일리더 객체

//드래그 앤 드롭

picArea.ondragenter = function(event){
    event.preventDefault();
}
picArea.ondragover = function(event){
    event.preventDefault();
}
picArea.ondrop = function(event){
    const file = event.dataTransfer.files[0];

    //파일이 들어온 경우에만
    if(file){
        reader.onload = function(e){
            picImg.src = e.target.result;
            picArea.appendChild(picImg);
            picAreaText.style.display = "none";
            picAreaFile.style.display = "none";
        }

        //파일리더 객체를 통해 readAsDataURL 메소드 호출
        //해당 메소드로 event.dataTransfer.files[0]을 읽어옴
        reader.readAsDataURL(file);
        event.preventDefault();
    }
}

export{reader, picArea, picImg};