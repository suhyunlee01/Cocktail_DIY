import { fetching } from "./Alphabetfetching.js";

let container = document.querySelector('.see_all_recipe_container');
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";
let searchBtn = document.getElementById("user-input-submit");
let RecipeModal = document.querySelector(".recipe_modal_wrap");
let searchInput = document.getElementById("search_bar");

function enterHandler(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        getresult();
    }
}

function getresult(){
    let userInput = searchInput.value;
    console.log("유저인풋", userInput);
    if(userInput.length===0){
        //검색어가 비어있으면 출력되었던 결과 지우기
        container.innerHTML = '';
    }else if( /[^a-zA-Z\s]/.test(userInput)){
        //영어로 검색이 되지 않았을 때 alert
        alert("영어로 된 검색어를 한 글자 이상 입력해주세요.😊");
    }else{
        let insertNum = 4;
        fetching(url, userInput, insertNum);
    }
}


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close_recipe_modal")) {
        RecipeModal.style.display = "none";
    }
});

//이벤트로 fetching 시작
window.addEventListener("load", getresult);
searchBtn.addEventListener("click", getresult);
searchInput.addEventListener("input", getresult);
searchInput.addEventListener("keydown", enterHandler);