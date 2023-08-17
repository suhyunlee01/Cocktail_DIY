let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let Close = document.querySelector(".close_recipe_modal");

// let MainpageRecipe1 = document.querySelector(".mainpage_Recipe_container1");
// let MainpageRecipe2 = document.querySelector(".mainpage_Recipe_container2");
// let MainpageRecipe = [];
// for(let number of "12"){
//     MainpageRecipe[number] = document.querySelector(".mainpage_Recipe_container"+number);
// }

let resu = []
for(let number of "01234567"){
    resu[number] = document.querySelector(".resu"+number);
    resu[number].addEventListener("click", RecipeModalHandler);
}


fetch(url).then((response)=>response.json()).then((data)=>{
    console.log(data);
    let drink = data.drinks;


    for(let i = 0; i < 8; i++){
        resu[i].innerHTML = `
        <a class="recipe_components">
                    <div class="recipe_img_container">
                        <div class="recipe_img_container_component">
                            <img class="recipe_img_container_component_img" src="${drink[i].strDrinkThumb}"/>
                            <div class="recipe_img_container_component_text_container">
                                <div class="recipe_text_box">
                                    <span class="recipe_name">${drink[i].strDrink}</span>
                                    <span class="Glass_to_use">${drink[i].strGlass}</span>
                                    <div class="recipe_img_container_component_text_container_tag">
                                        <span class="tag">
                                        ${drink[i].strIngredient1}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>`
    }
})
