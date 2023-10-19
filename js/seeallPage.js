import { fetching } from "./Alphabetfetching.js";
let buttons = [];
//알파벳 초기값
let alphabet = "a";
let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f="

//알파벳 버튼 가져오기
for(let alp of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
    buttons[alp]=document.getElementById(alp);
    
    //알파벳 버튼 클릭 시, alphabet 인자 전달해서 fetching함수 호출
    buttons[alp].addEventListener("click", function(){
        alphabet=alp; fetching(url, alphabet);
    })
}


//윈도우 처음 로드 시 알파벳 a 리스트 먼저 보여주기
window.addEventListener("load", function(){

    //insertNum 이 있는 경우에만 drinks 배열 길이를 제한할 수 있게 함
    //이 경우에는 inserNum이 비어있기에 fetching 메서드에서 배열 그대로 출력하게 로직 구현함.
    let insertNum;
    fetching(url, alphabet, insertNum);
});