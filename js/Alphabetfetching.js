import { generateRecipComp } from "./generateRecipeComp.js";

export function fetching(url, alphabet, insertNum){
    fetch(url + alphabet).then((response)=>response.json())
    .then((data)=>{
        console.log("데이터", data);
        console.log("url 알파벳 인서트넘버", url, alphabet, insertNum);
        let drinks = data.drinks;
        let length = drinks.length;
        console.log(length);
        
        //레시피 엘리먼트 동적으로 생성하는 함수
        //insertNum으로 보낸 수 만큼만 drinks 배열 보여주게 하기
        //insertNum이 비어있는 경우엔 drinks의 전체 길이 그대로 출력함
        if(insertNum){
            generateRecipComp(drinks.slice(0, insertNum), length);
        }else{
            generateRecipComp(drinks, length);
        }
    })
}