let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let buttons = [];
let MainpageRecipeContainers = [];
let res = [];
for(let number of [0,1,2,3,4,5,6,7]){
    res[number] = document.getElementById("resu"+ number);
    res[number].addEventListener("click", function(){
        RecipeModal.style.display = "flex";
    })
}

window.addEventListener("load", fetching);

//레시피 영역 가져오기
for(let num of "01"){
    MainpageRecipeContainers[parseInt(num)] = document.querySelector(".see_all_recipe_container"+num);
}


//API //알파벳 버튼 클릭 이벤트 시 호출
function fetching(){
    fetch(url).then((response)=>response.json()).then((data)=>{
        console.log(data);
        let drinks = data.drinks;
        let length = drinks.length;
        
        //클릭 이벤트 발생 시 모달창 프린트
        for(let number of [0,1,2,3,4,5,6,7]){
            res[number].addEventListener("click", function(){generateAlphabetModal(data, number)})
        }

        generate(drinks, length);
    })
}


//result 영역에 출력하는 함수
function generate(drinks, length){

    for (let j = 0; j < length; j++) {
        // res[j] 요소가 존재하는지 확인하고 없으면 생성
        if (!res[j]) {
            res[j] = document.createElement("div");
        }
        
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
        </div>
        `
}
}

//클릭 이벤트 발생 시 모달창 프린트하는 함수
function generateAlphabetModal(data, number){
    let thisDrink = data.drinks[number];
    RecipeModal.innerHTML = `
    <img class="close_recipe_modal" src="./img/closePNGWhite.png">
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
                <img src="./img/heartIMG.png" />
            </div>
        </div>
        <div class="recipe_modal_body">
            <div class="recipe_modal_body_ingredient">
                <span class="recipe_modal_body_header">Ingredient</span>
                <div class="recipe_modal_body_text">
                    <ul id="ingredient">
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
    console.log("테스트:", thisDrink);

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
    console.log("테스트2:", ingredientsList);
    document.getElementById("ingredient").innerHTML = ingredientsList;
}

//모달창 닫기
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close_recipe_modal")) {
        RecipeModal.style.display = "none";
    }
});