import { generateRandomModal } from "./generateRandomModal.js";

export function RandomFetching (url){
    fetch(url).then((responese)=> responese.json()).then((data)=>{
        let drinks = data.drinks;
        let length = 0;

        //랜덤한 레시피 모달창 출력 함수 호출
        generateRandomModal(drinks, length);
    })
}
