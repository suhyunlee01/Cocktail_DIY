let searchBtn = document.getElementById("user-input-submit");
let resultContainer = document.getElementById("result_contain_box");

let result =[];
for(let number of "0123"){
    result[number] = document.getElementById("result"+ number);
}
console.log(result);
// let result1 = document.getElementById("result1");
// let result2 = document.getElementById("result2");
// let result3 = document.getElementById("result3");
// let result4 = document.getElementById("result4");

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
    }`}
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
