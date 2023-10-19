import { fetching } from "./fetching.js";

let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let alphabet = "a";
let MainpageRecipeContainers = [];

window.addEventListener("load", function(){
    fetching(alphabet);});

//모달창 닫기
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close_recipe_modal")) {
        RecipeModal.style.display = "none";
    }
});