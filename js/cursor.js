document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(e) {
        let cursorIMG = document.querySelector('.cursorIMG');
        let mouseX = e.pageX;
        let mouseY = e.pageY;

        enter(cursorIMG);

        //커서 이미지의 좌측 상측 위치를 마우스커서의 위치로 설정함. 따라서 커서이미지가 따라다나게 함
        cursorIMG.style.left = mouseX + 17 +'px';
        cursorIMG.style.top = mouseY + 50 + 'px';
    });
    document.addEventListener('mouseleave', ()=>{
        let cursorIMG = document.querySelector('.cursorIMG');
        out(cursorIMG)
    })
});

//화면에 커서 들어오면 이미지 보임
function enter(element){
    element.style.display = 'block';
}
//화면에서 커서 나가면 이미지 사라짐
function out(element){
    element.style.display = 'none';
}