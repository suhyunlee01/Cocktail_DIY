let ramdomUrl = "https://thecocktaildb.com/api/json/v1/1/random.php";
let RandomRecipeModal = document.querySelector(".recipe_modal_wrap_random");

//윈도우 로드 시 바로 화면에 출력
let getModalRamdom = () => {
    fetch(ramdomUrl).then((responese)=> responese.json()).then((randomData)=>{
        console.log(randomData);
        console.log(randomData.drinks[0].strDrink);
        let randomDrink = randomData.drinks[0];

        //랜덤한 레시피 모달창 출력 함수 호출
        generateRandomModal(randomDrink);
    })
}

//랜덤한 레시피 모달창 출력 함수
function generateRandomModal(randomDrink){
    RandomRecipeModal.innerHTML = `
    <h2 class="recipe_modal_header_txt" style="color:white; cursor:grab;">🍸 추천 칵테일, 가끔은 색다른 칵테일을 즐겨보세요!🍸              X</h2>
    <div class="recipe_modal">
                    <div class="recipe_modal_header">
                        <div class="recipe_modal_header_cont">
                            <img src="${randomDrink.strDrinkThumb}"/>
                            <div class="recipe_modal_header_txt">
                                <div class="recipe_text_box">
                                    <span class="recipe_page_recipe_name">${randomDrink.strDrink}</span>
                                    <span class="recipe_page_Glass_to_use">${randomDrink.strGlass}</span>
                                    <div class="recipe_img_container_component_text_container_tag">
                                        <span class="tag">
                                        ${randomDrink.strIngredient1}
                                        </span>
                                        <span class="tag">
                                        ${randomDrink.strIngredient2}
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
                                <li>${randomDrink.strIngredient1}${randomDrink.strMeasure1}</li>
                                <li>${randomDrink.strIngredient2}${randomDrink.strMeasure2}</li>

                                </ul>
                            </div>
                        </div>
                        <div class="recipe_modal_body_instruction">
                            <span class="recipe_modal_body_header">Instruction</span>
                            <div class="recipe_modal_body_text">
                                <ul>
                                    <li>
                                        ${randomDrink.strInstructions}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`;
}


//윈도우 로드 시 이벤트 핸들러
window.addEventListener("load", getModalRamdom);
//랜덤 레시피 모달 닫기 이벤트
document.addEventListener("click", function(event) {
    // 클릭된 엘리먼트가 "close_recipe_modal" 클래스를 가진 요소인지 확인
    if (event.target.classList.contains("recipe_modal_header_txt")) {
        // close_recipe_modal을 클릭한 경우, 원하는 동작을 수행
        RandomRecipeModal.style.display = "none";
    }
});