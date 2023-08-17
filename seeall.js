let url = "https://thecocktaildb.com/api/json/v1/1/search.php?f="
let buttons = [];
let res = [];
for(let number of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]){
    res[number] = document.getElementById("res"+ number);
}

window.addEventListener("load",function(){alphabet="a"; fetching(alphabet); reset();});

for(let alp of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
    buttons[alp]=document.getElementById(alp);

    buttons[alp].addEventListener("click", function(){
        alphabet=alp; fetching(alphabet); reset();
    })
}
// buttons["A"].addEventListener("click", function(){alphabet="a"; fetching(alphabet); resetContainers();});
// buttons["B"].addEventListener("click", function(){alphabet="b"; fetching(alphabet); resetContainers();});
// buttons["C"].addEventListener("click", function(){alphabet="c"; fetching(alphabet); resetContainers();});
// buttons["D"].addEventListener("click", function(){alphabet="d"; fetching(alphabet); resetContainers();});
// buttons["E"].addEventListener("click", function(){alphabet="e"; fetching(alphabet); resetContainers();});
// buttons["F"].addEventListener("click", function(){alphabet="f"; fetching(alphabet); resetContainers();});
// buttons["G"].addEventListener("click", function(){alphabet="g"; fetching(alphabet); resetContainers();});
// buttons["H"].addEventListener("click", function(){alphabet="h"; fetching(alphabet); resetContainers();});
// buttons["I"].addEventListener("click", function(){alphabet="i"; fetching(alphabet); resetContainers();});
// buttons["J"].addEventListener("click", function(){alphabet="j"; fetching(alphabet); resetContainers();});
// buttons["K"].addEventListener("click", function(){alphabet="k"; fetching(alphabet); resetContainers();});
// buttons["L"].addEventListener("click", function(){alphabet="l"; fetching(alphabet); resetContainers();});
// buttons["M"].addEventListener("click", function(){alphabet="m"; fetching(alphabet); resetContainers();});
// buttons["N"].addEventListener("click", function(){alphabet="n"; fetching(alphabet); resetContainers();});
// buttons["O"].addEventListener("click", function(){alphabet="o"; fetching(alphabet); resetContainers();});
// buttons["P"].addEventListener("click", function(){alphabet="p"; fetching(alphabet); resetContainers();});
// buttons["Q"].addEventListener("click", function(){alphabet="q"; fetching(alphabet); resetContainers();});
// buttons["R"].addEventListener("click", function(){alphabet="r"; fetching(alphabet); resetContainers();});
// buttons["S"].addEventListener("click", function(){alphabet="s"; fetching(alphabet); resetContainers();});
// buttons["T"].addEventListener("click", function(){alphabet="t"; fetching(alphabet); resetContainers();});
// buttons["U"].addEventListener("click", function(){alphabet="u"; fetching(alphabet); resetContainers();});
// buttons["V"].addEventListener("click", function(){alphabet="v"; fetching(alphabet); resetContainers();});
// buttons["W"].addEventListener("click", function(){alphabet="w"; fetching(alphabet); resetContainers();});
// buttons["X"].addEventListener("click", function(){alphabet="x"; fetching(alphabet); resetContainers();});
// buttons["Y"].addEventListener("click", function(){alphabet="y"; fetching(alphabet); resetContainers();});
// buttons["Z"].addEventListener("click", function(){alphabet="z"; fetching(alphabet); resetContainers();});

let MainpageRecipeContainers = [];

for(let num of "0123456"){
    MainpageRecipeContainers[parseInt(num)] = document.querySelector(".mainpage_Recipe_container"+num);
}
console.log(MainpageRecipeContainers[0]);



function fetching(alphabet){
    fetch(url+alphabet).then((response)=>response.json()).then((data)=>{
        console.log(data);
        let drinks = data.drinks;
        let length = drinks.length;

        generate(drinks, length);

})}

function generate(drinks, length){
    for(let j = 0; j < length; j++){
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
                    </div>`
}
}

function reset() {
    for (let j = 0; j < res.length; j++) {
        res[j].innerHTML = " ";
    }
}