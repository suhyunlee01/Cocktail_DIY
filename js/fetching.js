import { generateRecipComp } from "./generateRecipeComp.js";

export function fetching(url, alphabet){
    fetch(url + alphabet).then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        let drinks = data.drinks;
        let length = drinks.length;
        
        //레시피 엘리먼트 동적으로 생성하는 함수
        generateRecipComp(drinks, length);
    })
}