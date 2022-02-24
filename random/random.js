const loadBuddy = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => response.json())
    .then((data) => displayBuddy(data));
};
loadBuddy();
const displayBuddy = (data) => {
  const buddyDiv = document.getElementById("buddy");
  const buddies = data.results;
  console.log(buddies);
  for (const buddy of buddies) {
    const p = document.createElement("p");
    p.innerText = `first name: ${buddy.name.first} email: ${buddy.email}`;
    buddyDiv.appendChild(p);
  }
};
