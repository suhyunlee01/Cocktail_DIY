let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
let RecipeModal = document.querySelector(".recipe_modal_wrap");

// let MainpageRecipe1 = document.querySelector(".mainpage_Recipe_container1");
// let MainpageRecipe2 = document.querySelector(".mainpage_Recipe_container2");
// let MainpageRecipe = [];
// for(let number of "12"){
//     MainpageRecipe[number] = document.querySelector(".mainpage_Recipe_container"+number);
// }


fetch(url).then((response)=>response.json()).then((data)=>{
    console.log(data.drinks[0]);
    let Cocktail = data.drinks[0];
    let drink = data.drinks;


    let ingredients=[];
    for(let i in Cocktail){
        let ingredient="";
        if(i.startsWith("strIngredient")&&Cocktail[i]){ //i가 "strIngredient"로 시작하고 Cocktail에 있다는 조건 하에 실행 // 즉, i가 "strIngredient"으로 시작하고, Cocktail["strIngredient1"], Cocktail["strIngredient2"]... 가 true인지 묻는 것
            ingredient = Cocktail[i]; //Cocktail[strIngredient1], Cocktail[strIngredient2], Cocktail[strIngredient3]...
            ingredients.push(`<li>${ingredient}</li>`);
        }
    }


    if(drink[0]){
        RecipeModal.innerHTML = `
    <div class="recipe_modal">
        <div class="recipe_modal_header">
            <div class="recipe_modal_header_cont">
                <img src="${drink[0].strDrinkThumb}"/>
                <div class="recipe_modal_header_txt">
                    <div class="recipe_text_box">
                        <span class="recipe_page_recipe_name">${drink[0].strDrink}</span>
                        <span class="recipe_page_Glass_to_use">${drink[0].strGlass}</span>
                        <div class="recipe_img_container_component_text_container_tag">
                            <span class="tag">
                            ${drink[0].strIngredient1}
                            </span>
                            <span class="tag">
                            ${drink[0].strIngredient2}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="heart_svg">
                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="58" height="58" rx="29" fill="#E4FFEC"/>
                    <path d="M23.1667 18.5971C19.9455 18.5971 17.3334 21.1824 17.3334 24.3721C17.3334 26.9469 18.3542 33.0579 28.4027 39.2354C28.5827 39.345 28.7893 39.4029 29 39.4029C29.2107 39.4029 29.4174 39.345 29.5974 39.2354C39.6459 33.0579 40.6667 26.9469 40.6667 24.3721C40.6667 21.1824 38.0545 18.5971 34.8334 18.5971C31.6122 18.5971 29 22.0971 29 22.0971C29 22.0971 26.3879 18.5971 23.1667 18.5971Z" fill="#0D7D0B" stroke="#0D7D0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
        </div>
        <div class="recipe_modal_body">
            <div class="recipe_modal_body_ingredient">
                <span class="recipe_modal_body_header">Ingredient</span>
                <div class="recipe_modal_body_text">
                    <ul>
                    ${ingredients}
                    </ul>
                </div>
            </div>
            <div class="recipe_modal_body_instruction">
                <span class="recipe_modal_body_header">Instruction</span>
                <div class="recipe_modal_body_text">
                    <ul>
                        <li>
                            ${drink[0].strInstructions}
                        </li>
                        <li>
                            ${drink[0].strIngredient1 + drink[0].strMeasure1}
                        </li>
                        <li>
                            ${drink[0].strIngredient1 + drink[0].strMeasure1}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        `
    }

})


function RecipeModalHandler(){
    RecipeModal.style.display = "flex";
}

RecipeModal.addEventListener("click",CloseEventHandler);

function CloseEventHandler(){
    RecipeModal.style.display = "none";
}