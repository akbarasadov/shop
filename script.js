import { add } from "./component/add.js";
import { arrey } from "./utils/arrey.js";

const grid = document.querySelector(".grid");
const btnAll = document.querySelector(".all");
const btn_5 = document.querySelector(".to-5");
const cartHeader = document.querySelector(".h1");

cartHeader.textContent = `В корзине: 0 товаров`;

const products = arrey();

function Products(list) {
    grid.innerHTML = ""
    list.forEach(item => add(item, grid));
    cartHeader.textContent = `В корзине: ${list.length} товаров`;
}


btnAll.onclick = () => {
    Products(products);
    btnAll.classList.add("active")
    btn_5.classList.remove("active")
}

btn_5.onclick = () => {
    Products(products.slice(0, 5));
    btn_5.classList.add("active")
    btnAll.classList.remove("active")
}