const searchFood = () => {
  const searchField = document.getElementById("search-field");
  if (searchField.value == "") {
    errorMessage();
  } else {
    searchField.style.border = "none";
    searchFieldValue = searchField.value;
    //   console.log(searchFieldValue);
    searchField.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displaySearchResult(data.meals));
  }
};
function errorMessage() {
  const errorMessage = document.getElementById("errorMessage");
  const searchField = document.getElementById("search-field");
  searchField.style.border = "3px solid red";
  errorMessage.innerHTML = `<h1 class = "text-danger text-center mt-5">please enter your food name</h1>`;
}
const displaySearchResult = (meals) => {
  console.log(meals);
  if (meals == null) {
    errorMessage();
  } else {
    console.log("display:", meals);
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
      <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 310)}</p>
          </div>
      </div>`;
      searchResult.appendChild(div);
      // console.log(meal.idMeal);
    });
  }
};

const loadMealDetails = (loadMeal) => {
  //   console.log(loadMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${loadMeal}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals[0]));
};

const displayMeal = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("mealDetails");
  mealDetails.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 500)}</p>
    <a target="_blank"; href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);
};
