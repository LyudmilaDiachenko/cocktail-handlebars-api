import header from "../templates/header.hbs"
import footer from "../templates/footer.hbs"
import cards from "../templates/cards.hbs"

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
.then(resp => resp.json())
.then(data => document.querySelector(".js-cards").insertAdjacentHTML("beforeend", cards(data)))
.catch(error => console.log(error));

document.querySelector("header").insertAdjacentHTML("afterbegin", header())
document.querySelector("footer").insertAdjacentHTML("beforeend", footer())