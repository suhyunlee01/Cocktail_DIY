import { fetching } from "./Alphabetfetching.js";

let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f="
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let alphabet = "a";
let MainpageRecipeContainers = [];

window.addEventListener("load", function(){
    //insertNum 이 있는 경우에만 drinks 배열 길이를 제한할 수 있게 함
    //이 경우에는 inserNum이 8이니까 fetching 메서드에서 8만큼의 배열만 출력하게 로직 구현함.
    let insertNum = 8;
    fetching(url, alphabet, insertNum);
});


//모달창 닫기
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close_recipe_modal")) {
        RecipeModal.style.display = "none";
    }
});