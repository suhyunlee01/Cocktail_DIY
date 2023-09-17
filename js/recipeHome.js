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
