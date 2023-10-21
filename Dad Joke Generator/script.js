const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "iuQ2JpN8IoWr2ClPVOrUzQ==X3EK6RLhlK9IUrcP";

const options = { method: "GET", headers: { "X-Api-Key": apikey } };

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  const response = await fetch(apiURL, options);
  const data = await response.json();

  jokeEl.innerText = data[0].joke;
}
btnEl.addEventListener("click", getJoke);
