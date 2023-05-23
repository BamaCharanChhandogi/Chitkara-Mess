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
        recipeDiv.innerHTML=`
        <img src="${meal.strMealThumb}"></img>
        <h3>${meal.strMeal}</h3>
         <p>${meal.strArea}<p>
         <p>${meal.strCategory}<p>
        `
        recipeContainer.appendChild(recipeDiv);
    });

}
//button working
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let recipeValue = searchBox.value.trim();
    fetchRecipe(recipeValue);
});