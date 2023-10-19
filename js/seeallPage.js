import { fetching } from "./fetching.js";
let buttons = [];
//알파벳 초기값
let alphabet = "a";

//알파벳 버튼 가져오기
for(let alp of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
    buttons[alp]=document.getElementById(alp);
    
    //알파벳 버튼 클릭 시, alphabet 인자 전달해서 fetching함수 호출
    buttons[alp].addEventListener("click", function(){
        alphabet=alp; fetching(alphabet);
    })
}


//윈도우 처음 로드 시 알파벳 a 리스트 먼저 보여주기
window.addEventListener("load", function(){
    let insertNum = "3";
    fetching(alphabet, insertNum);});