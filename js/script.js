let searchBtn = document.getElementById("user-input-submit");
let resultContainer = document.getElementById("result_contain_box");
let RecipeModal = document.querySelector(".recipe_modal_wrap");

let result =[];
for(let number of "0123"){
    result[number] = document.getElementById("result"+ number);
}
console.log(result);
// let result1 = document.getElementById("result1");
// let result2 = document.getElementById("result2");
// let result3 = document.getElementById("result3");
// let result4 = document.getElementById("result4");

RecipeModal.addEventListener("click",CloseEventHandler);
function CloseEventHandler(){
    RecipeModal.style.display = "none";
}


let component = document.querySelector(".searcch_page_component_container");
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
let searchInput = document.getElementById("search_bar");


let getresult = () => {
    let userInput = searchInput.value;
    if(userInput.length==0){
        
    }else{
        fetch(url+userInput).then((response) => response.json()).then((data)=>{

            let drinksName = [];
            for(let num of "0123"){
                drinksName[num] = data.drinks[num];
            }
            // let drinksName1 = data.drinks[0];
            // let drinksName2 = data.drinks[1];
            // let drinksName3 = data.drinks[2];
            // let drinksName4 = data.drinks[3];

            generateInnerHtml(drinksName);

            for(let number of "0123"){
                result[number].addEventListener("click", function(){  //resu [0~7]까지의 클릭 이벤트
                    RecipeModal.style.display = "flex";
                    //resu[0~7]클릭 이벤트 발생 시 각 data.drinks[number] 데이터를 토대로 recipe modal의 html 생성
                    RecipeModal.innerHTML = ` 
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
                                    <ul class="ingredients">
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
                    </div>`;
                });
            }
}
)}
}


function generateInnerHtml(drinksName){
    for(let j = 0; j < 4; j++){
        result[j].innerHTML= `
    <div class="searcch_page_component_container">
        <div class="recipe_img_container_component">
            <img class="recipe_img_container_component_img" src="${drinksName[j].strDrinkThumb}"/>
            <div class="recipe_img_container_component_text_container">
                <div class="recipe_text_box">
                    <span class="recipe_name">${drinksName[j].strDrink}</span>
                    <span class="Glass_to_use">${drinksName[j].strGlass}</span>
                    <div class="recipe_img_container_component_text_container_tag">
                        <span class="tag tag2">
                            ${drinksName[j].strIngredient1}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `}
}


window.addEventListener("load", getresult);
searchBtn.addEventListener("click", getresult);
searchInput.addEventListener("input", getresult);
searchInput.addEventListener("keydown", enterHandler);
function enterHandler(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        getresult();
    }
}
