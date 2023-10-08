const imgContainer = document.querySelector('.banner_content_img');
const bannerText = document.querySelector('.banner_content_txt');

function bannerAnimate(imgContainer) {
    let observer = new IntersectionObserver((entries)=>{
        //감시중인 요소들이 담긴 entries 배열 순회하기
        entries.forEach((entry)=>{
            //감시중인 요소에 isIntersecting 속성이 true 반환한 경우
            if(entry.isIntersecting===true){
                console.log("isIntersecting true 반환");

                // 보이면 hide에서 show 클래스 추가
                imgContainer.classList.add('show');
            }else{
                //안보이면 다시 show 클래스 제거
                imgContainer.classList.remove('show');
            }
        })
    })
    observer.observe(imgContainer);
}

function bannerTextAnimate(bannerText){
    let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting===true){
                console.log("isIntersecting true 반환");

                // 보이면 hide에서 show 클래스 추가
                bannerText.classList.add('show2');
            }else{
                //안보이면 다시 show 클래스 제거
                bannerText.classList.remove('show2');
            }
        })
    })
    observer.observe(bannerText);
}

bannerTextAnimate(bannerText);
bannerAnimate(imgContainer);