const picAreaFile = document.querySelector(".getPic_file");
import { reader, picArea, picImg } from "./diyDragDrop";

picAreaFile.addEventListener("change", function(event){
    const selectedFile = event.target.files[0];

    if(selectedFile){
        reader.onload = function(e){
            picImg.src = e.target.result;
            picArea.appendChild(picImg);
            picAreaText.style.display = "none";
            picAreaFile.style.display = "none";
        }
    }

    
})