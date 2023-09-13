let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f=a"
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let measures = [];
let ingredients = [];
let resu = []

//API
fetch(url).then((response)=>response.json()).then((data)=>{
    console.log(data.drinks[0]);
    
    //result 영역에 결과 출력하는 함수 호출
    generateResult(data);
})


//result 영역에 결과 출력하는 함수
function generateResult(data){
    for(let number of "01234567"){
        resu[number] = document.querySelector(".resu" + number);
        resu[number].innerHTML = `
            <a class="recipe_components">
                    <div class="recipe_img_container">
                        <div class="recipe_img_container_component">
                            <img class="recipe_img_container_component_img" src="${data.drinks[number].strDrinkThumb}"/>
                            <div class="recipe_img_container_component_text_container">
                                <div class="recipe_text_box">
                                    <span class="recipe_name">${data.drinks[number].strDrink}</span>
                                    <span class="Glass_to_use">${data.drinks[number].strGlass}</span>
                                    <div class="recipe_img_container_component_text_container_tag">
                                        <span class="tag">
                                        ${data.drinks[number].strIngredient1}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>`;

        //result 클릭 시 모달창 프린트 함수 호출
        resu[number].addEventListener("click", function(){generateHomeModal(data, number)});
    }
}


//result 클릭 시 모달창 프린트 함수
function generateHomeModal(data, number){
    RecipeModal.style.display = "flex";
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
        </div>
    `;
}


//레시피 모달 닫기 이벤트
document.addEventListener("click", function(event) {
    // 클릭된 엘리먼트가 "close_recipe_modal" 클래스를 가진 요소인지 확인
    if (event.target.classList.contains("close_recipe_modal")) {
        // close_recipe_modal을 클릭한 경우, 원하는 동작을 수행
        RecipeModal.style.display = "none";
    }
});