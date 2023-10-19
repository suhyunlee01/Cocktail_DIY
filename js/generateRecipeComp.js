import { generateModal } from "./generateModal.js";
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let container = document.querySelector(".see_all_recipe_container");

//레시피 엘리먼트 동적으로 생성하는 함수
export function generateRecipComp(drinks, length) {
    //알파벳별로 생성할 때마다 innerHTML 초기화 후 랜더링
    container.innerHTML = '';

    for (let j = 0; j < length; j++) {

        const innerContainer = document.createElement("div");
        innerContainer.classList.add(`recipe_img_container_component${j}`);
        innerContainer.innerHTML = `
            <img class="recipe_img_container_component_img" src="${drinks[j].strDrinkThumb}"/>
            <div class="recipe_img_container_component_text_container">
                <div class="recipe_text_box">
                    <span class="recipe_name">${drinks[j].strDrink}</span>
                    <span class="Glass_to_use">${drinks[j].strGlass}</span>
                    <div class="recipe_img_container_component_text_container_tag">
                        <span class="tag">
                            ${drinks[j].strIngredient1}
                        </span>
                    </div>
                </div>
            </div>
        `;

        innerContainer.addEventListener("click", function() {
            generateModal(drinks, j);
            RecipeModal.style.display = "flex";
            console.log(`Clicked on element ${j}`);
        });

        container.appendChild(innerContainer);
        document.querySelector('.see_all_container').appendChild(container);
    }
}
