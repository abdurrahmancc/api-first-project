const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  const container = document.getElementById("container");
  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("style");
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>${country.area}</p>
    <button onclick ="loadCountryName('${country.name.common}')">details</button>`;
    container.appendChild(div);
  });
};
const loadCountryName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCountryDetails(data[0]));
};
const displayCountryDetails = (country) => {
  console.log(country);
  const countryDetails = document.getElementById("countryDetails");
  countryDetails.innerHTML = `
  <h3>${country.name.common}</h3>
  <p>${country.name.region}</p>
  <img src="${country.flags.png}"> <img src="${country.maps.googleMaps}">
  `;
};
