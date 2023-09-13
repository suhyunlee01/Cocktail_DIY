const btnHeart = document.querySelector(".heart_svg");
const btnHeartParent = document.querySelector(".recipe_modal");

function saveRecipeHandler(){
    localStorage.setItem("key", data);

}


btnHeart.addEventListener("click", saveRecipeHandler);