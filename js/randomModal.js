import { RandomFetching } from "./keyWordFetching.js";
let RecipeModal = document.querySelector(".recipe_modal_wrap");
//윈도우 로드 시 바로 화면에 출력
let Url = "https://thecocktaildb.com/api/json/v1/1/random.php";
let keyword = "";

//윈도우 로드 시 이벤트 핸들러
window.addEventListener("load", ()=>{RandomFetching(Url, keyword)});

//랜덤 레시피 모달 닫기 이벤트
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close_recipe_modal")) {
        RecipeModal.style.display = "none";
    }
});