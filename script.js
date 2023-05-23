let searchBtn = document.querySelector('.searchBtn');
let searchBox = document.querySelector('.searchBox');
let recipeContainer = document.querySelector('.recipe-container');

//Arrow function to get Recipe

let fetchRecipe = async (query) => {
    recipeContainer.innerHTML="fetching recipes..";
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    let response = await data.json();
    console.log(response);
    recipeContainer.innerHTML="";
    response.meals.forEach(meal =>{
        let recipeDev=document.createElement('div');
        recipeDev.classList.add('recipe');
         recipeDev.innerHTML=`
         <img src="${meal.strMealThumb}">
         <h3>${meal.strMeal}</h3>
         <p>${meal.strArea}<p>
         <p>${meal.strCategory}<p>
        ` 
        recipeContainer.appendChild(recipeDev);
    });
}

//button working
searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let searchValue = searchBox.value.trim();
    fetchRecipe(searchValue);
});