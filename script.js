let searchBtn = document.querySelector('.searchBtn');
let searchBox = document.querySelector('.searchBox');
let recipeContainer = document.querySelector('.recipe-container');

//Arrow Function for fetching Recipe
let fetchRecipe = async (query) => {
    recipeContainer.innerHTML="<h2>Fetching Recipe...</h2>";
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    let response = await data.json();
    recipeContainer.innerHTML="";
    response.meals.forEach(meal=>{
        let recipeDiv=document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML=`<img src="${meal.strMealThumb}"></img>
        <h3>${meal.strMeal}</h3>
         <p><span>${meal.strArea}</span> Dish<p>
         <p>Belongs to <span>${meal.strCategory}</span> Category<p>`
         //show recipe button working
        let button=document.createElement('button');
        button.textContent="View Recipe";
        recipeDiv.appendChild(button);
        //recipeContent
        // let recipeContentDiv=document.createElement('div');
        // recipeContentDiv.classList.add('recipeContent');
        // recipeContentDiv.innerHTML=`<p>${meal.strInstructions}</p>`;
        // recipeDiv.appendChild(recipeContentDiv);
        button.addEventListener('click',function(){
            openRecipePopup(meal);
        });
        recipeContainer.appendChild(recipeDiv);

    });

}
// working openRecipeMeal function
let openRecipePopup=(meal)=>{
    document.getElementById('recipe-popup').innerHTML="";
    document.getElementById('recipe-content').style.display='block';
    document.getElementById('recipe-popup').innerHTML=`${meal.strInstructions}`;
}
document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('recipe-content').style.display='none';
});
//button working
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let recipeValue = searchBox.value.trim();
    fetchRecipe(recipeValue);
});