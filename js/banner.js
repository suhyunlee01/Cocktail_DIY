window.addEventListener('scroll', function() {
    const img = document.querySelector('.banner_content_img_src');
    const imgContainer = document.querySelector('.banner_content_img');
    
    // 이미지가 화면에 보일 때 fade in 효과 적용
    if (isInViewport(imgContainer)) {
        img.style.opacity = 1;
    }
});

// 요소가 화면에 보이는지 확인하는 함수
function isInViewport(imgContainer) {
    const rect = imgContainer.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}