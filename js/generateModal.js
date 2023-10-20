let RecipeModal = document.querySelector(".recipe_modal_wrap");


//클릭 이벤트 발생 시 모달창 프린트하는 함수
export function generateModal(drinks, number){
    let thisDrink = drinks[number];
    console.log("현재 음료", thisDrink);
    RecipeModal.innerHTML = `
    <svg class="close_recipe_modal" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path d="M37.5 22.5L22.5 37.5M22.5 22.5L37.5 37.5M55 30C55 43.8071 43.8071 55 30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30Z" stroke="white" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="recipe_modal">
        <div class="recipe_modal_header">
            <div class="recipe_modal_header_cont">
                <img src="${thisDrink.strDrinkThumb}"/>
                <div class="recipe_modal_header_txt">
                    <div class="recipe_text_box">
                        <span class="recipe_page_recipe_name">${thisDrink.strDrink}</span>
                        <span class="recipe_page_Glass_to_use">${thisDrink.strGlass}</span>
                        <div class="recipe_img_container_component_text_container_tag">
                            <span class="tag">
                                ${thisDrink.strIngredient1}
                            </span>
                            <span class="tag">
                                ${thisDrink.strIngredient2}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="heart_svg">
            </div>
        </div>
        <div class="recipe_modal_body">
            <div class="recipe_modal_body_ingredient">
                <span class="recipe_modal_body_header">Ingredient</span>
                <div class="recipe_modal_body_text">
                    <ul class="ingredients">
                    </ul>
                </div>
            </div>
            <div class="recipe_modal_body_instruction">
                <span class="recipe_modal_body_header">Instruction</span>
                <div class="recipe_modal_body_text">
                    <ul>
                        <li>
                            ${thisDrink.strInstructions}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
    generateingredient(thisDrink);
}


//재료 null 처리 함수
function generateingredient(thisDrink) {
    console.log("Data in generateingredient:", thisDrink);

    let ingredientsList = "";

    for (let i = 1; i <= 15; i++) {
        const ingredient = thisDrink[`strIngredient${i}`];
        const measure = thisDrink[`strMeasure${i}`];

        //ingredient랑 measure이 null 아닐 때
        if (ingredient && measure) {
            ingredientsList += `<li>${ingredient} ${measure}</li>`;
        } else {
            break; // 재료나 양이 없을 경우 반복문 종료
        }
    }

    document.querySelector(".ingredients").innerHTML = ingredientsList;
}


//모달창 닫기
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close_recipe_modal")) {
        RecipeModal.style.display = "none";
    }
});

RecipeModal.addEventListener("click", function(event) {
    if (event.target.classList.contains("heart_svg")) {
        alert("hes");
    }
});