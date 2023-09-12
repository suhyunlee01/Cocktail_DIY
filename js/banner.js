
window.onscroll = ()=>{
    const img = document.querySelector('.banner_content_img');
    const vH = window.innerHeight;
    const vhToImg = img.getBoundingClientRect().top;
    const scrollLength = vH - vhToImg;
    const imgHeight = img.clientHeight;
    let scrollRate = scrollLength/imgHeight * 100;
    
    if(scrollLength/imgHeight * 100 <0){
        scrollRate = 0;
    }else if(scrollLength/imgHeight * 100 > 100){
        scrollRate = 100;
    }
    
    console.log(scrollRate);

    const imgSRC = document.querySelector('.banner_content_img_src');
    if(scrollRate == 10){
        imgSRC.style.opacity = "0.4";
    }else if(scrollRate == 80){
        imgSRC.style.opacity = "0.8";
    }else if(scrollRate == 90){
        imgSRC.style.opacity = "0.9";
    }else if(scrollRate == 100){
        imgSRC.style.opacity = "1";
    }
}