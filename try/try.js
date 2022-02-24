const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  if (searchText == "") {
    errorMessage();
  } else {
    const errorMessage = document.getElementById("errorMessage");
    const searchField = document.getElementById("search-field");
    searchField.style.border = "none";
    errorMessage.textContent = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => displayResult(data.meals));
  }
};
function errorMessage() {
  const errorMessage = document.getElementById("errorMessage");
  const searchField = document.getElementById("search-field");
  searchField.style.border = "red 3px solid";
  errorMessage.innerHTML = `<p class="text-text-danger text-center">please enter your food name</p>`;
}
displayResult = (meals) => {
  //   console.log("name");
  const sectionId = document.getElementById("creat-item");
  sectionId.textContent = "";
  meals.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
  <div onclick = "mealDetailsDisplay('${meal.idMeal}')" class="card">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body text-center">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 310)}</p>
  </div>
</div>
  `;
    sectionId.appendChild(div);
  });
};

const mealDetailsDisplay = (mealId) => {
  console.log(mealId);

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals[0]));
};
displayMeal = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("mealDetails");
  mealDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 400)}</p>
    <a  target="_blank"; href='${meal.strYoutube}' class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);
};
