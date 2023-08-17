let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f="
let buttons = [];
let res = [];
let RecipeModal = document.querySelector(".recipe_modal_wrap");


for(let number of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]){
    res[number] = document.getElementById("res"+ number);
    res[number].addEventListener("click", function(){
        RecipeModal.style.display = "flex";
    })
}
RecipeModal.addEventListener("click",CloseEventHandler);
function CloseEventHandler(){
    RecipeModal.style.display = "none";
}
window.addEventListener("load", function(){alphabet="a"; fetching(alphabet); reset();});



for(let alp of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
    buttons[alp]=document.getElementById(alp);

    buttons[alp].addEventListener("click", function(){
        alphabet=alp; fetching(alphabet); reset();
    })
}
// buttons["A"].addEventListener("click", function(){alphabet="a"; fetching(alphabet); resetContainers();});
// buttons["B"].addEventListener("click", function(){alphabet="b"; fetching(alphabet); resetContainers();});
// buttons["C"].addEventListener("click", function(){alphabet="c"; fetching(alphabet); resetContainers();});
// buttons["D"].addEventListener("click", function(){alphabet="d"; fetching(alphabet); resetContainers();});
// buttons["E"].addEventListener("click", function(){alphabet="e"; fetching(alphabet); resetContainers();});
// buttons["F"].addEventListener("click", function(){alphabet="f"; fetching(alphabet); resetContainers();});
// buttons["G"].addEventListener("click", function(){alphabet="g"; fetching(alphabet); resetContainers();});
// buttons["H"].addEventListener("click", function(){alphabet="h"; fetching(alphabet); resetContainers();});
// buttons["I"].addEventListener("click", function(){alphabet="i"; fetching(alphabet); resetContainers();});
// buttons["J"].addEventListener("click", function(){alphabet="j"; fetching(alphabet); resetContainers();});
// buttons["K"].addEventListener("click", function(){alphabet="k"; fetching(alphabet); resetContainers();});
// buttons["L"].addEventListener("click", function(){alphabet="l"; fetching(alphabet); resetContainers();});
// buttons["M"].addEventListener("click", function(){alphabet="m"; fetching(alphabet); resetContainers();});
// buttons["N"].addEventListener("click", function(){alphabet="n"; fetching(alphabet); resetContainers();});
// buttons["O"].addEventListener("click", function(){alphabet="o"; fetching(alphabet); resetContainers();});
// buttons["P"].addEventListener("click", function(){alphabet="p"; fetching(alphabet); resetContainers();});
// buttons["Q"].addEventListener("click", function(){alphabet="q"; fetching(alphabet); resetContainers();});
// buttons["R"].addEventListener("click", function(){alphabet="r"; fetching(alphabet); resetContainers();});
// buttons["S"].addEventListener("click", function(){alphabet="s"; fetching(alphabet); resetContainers();});
// buttons["T"].addEventListener("click", function(){alphabet="t"; fetching(alphabet); resetContainers();});
// buttons["U"].addEventListener("click", function(){alphabet="u"; fetching(alphabet); resetContainers();});
// buttons["V"].addEventListener("click", function(){alphabet="v"; fetching(alphabet); resetContainers();});
// buttons["W"].addEventListener("click", function(){alphabet="w"; fetching(alphabet); resetContainers();});
// buttons["X"].addEventListener("click", function(){alphabet="x"; fetching(alphabet); resetContainers();});
// buttons["Y"].addEventListener("click", function(){alphabet="y"; fetching(alphabet); resetContainers();});
// buttons["Z"].addEventListener("click", function(){alphabet="z"; fetching(alphabet); resetContainers();});

let MainpageRecipeContainers = [];

for(let num of "0123456"){
    MainpageRecipeContainers[parseInt(num)] = document.querySelector(".mainpage_Recipe_container"+num);
}
console.log(MainpageRecipeContainers[0]);



function fetching(alphabet){
    fetch(url+alphabet).then((response)=>response.json()).then((data)=>{
        console.log(data);
        let drinks = data.drinks;
        let Cocktails = data.drinks[0];
        let length = drinks.length;

        generate(drinks, length);

    //     let ingredients=[];
    //     for(let count = 0; count<4; count++){
    //     for(let i in drinks[count]){
    //         let ingre = "";
    //         let measurin = "";
    //         if(i.startsWith("strIngredient") && drinks[i]){
    //             ingre = drinks[i];
    //             if(Cocktails[`strMeasure`+ count]){
    //                 measurin = Cocktails[`strMeasure`+ count];
    //             }
    //             count++
    //             ingredients.push(`${ingre}${measurin}`);
    //         }
    //     }
    // }
    //     console.log(ingredients);


        for(let number of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]){
            res[number].addEventListener("click", function(){
                RecipeModal.innerHTML = `
                <svg class="close_recipe_modal" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M37.5 22.5L22.5 37.5M22.5 22.5L37.5 37.5M55 30C55 43.8071 43.8071 55 30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30Z" stroke="white" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                <div class="recipe_modal">
                    <div class="recipe_modal_header">
                        <div class="recipe_modal_header_cont">
                            <img src="${data.drinks[number].strDrinkThumb}"/>
                            <div class="recipe_modal_header_txt">
                                <div class="recipe_text_box">
                                    <span class="recipe_page_recipe_name">${data.drinks[number].strDrink}</span>
                                    <span class="recipe_page_Glass_to_use">${data.drinks[number].strGlass}</span>
                                    <div class="recipe_img_container_component_text_container_tag">
                                        <span class="tag">
                                        ${data.drinks[number].strIngredient1}
                                        </span>
                                        <span class="tag">
                                        ${data.drinks[number].strIngredient2}
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
                                    <li>${data.drinks[number].strIngredient1}${data.drinks[number].strMeasure1}</li>
                                    <li>${data.drinks[number].strIngredient2}${data.drinks[number].strMeasure2}</li>
                                    <li>${data.drinks[number].strIngredient3}${data.drinks[number].strMeasure3}</li>
                                    <li>${data.drinks[number].strIngredient4}${data.drinks[number].strMeasure4}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="recipe_modal_body_instruction">
                            <span class="recipe_modal_body_header">Instruction</span>
                            <div class="recipe_modal_body_text">
                                <ul>
                                    <li>
                                    ${data.drinks[number].strInstructions}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `
            })
        }

})}

function generate(drinks, length){
    for(let j = 0; j < length; j++){
        res[j].innerHTML= `
        <div class="recipe_img_container">
                        <div class="recipe_img_container_component">
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
                        </div>
                    </div>`
}
}

function reset() {
    for (let j = 0; j < res.length; j++) {
        res[j].innerHTML = " ";
    }
}