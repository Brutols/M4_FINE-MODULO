import { createInput, createRow, createForm, createLi } from "./components.js";
import { fetchRequest } from "./fetch.js";
import {
  addListeners,
  deleteProduct,
  generateData,
  showProducts,
  addProduct,
} from "./helper.js";

const ACCESSTOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOWU5YmJkNWQxMjAwMTg5MGQ0NjQiLCJpYXQiOjE3MDYwMDgyMTksImV4cCI6MTcwNzIxNzgxOX0.T5qTK5UycN--6e2OLyGxuuJa8XsZXRt5gONKE9ODvUY";
const URL = "https://striveschool-api.herokuapp.com/api/product/";

const formContainer = document.querySelector(".manage");
const btnNewProd = document.querySelector("#btn-new_prod");
const productList = document.querySelector(".products_list");

document.addEventListener("DOMContentLoaded", function () {
  showProducts(URL, ACCESSTOKEN, productList);
});

btnNewProd.addEventListener("click", function (ev) {
  ev.preventDefault();
  formContainer.innerHTML = "";
  createForm(formContainer, {});
  const bntSubmitProd = document.querySelector("#btn-submit_prod");
  bntSubmitProd.addEventListener("click", function (ev) {
    ev.preventDefault();
    const product = generateData();
    fetchRequest({url: URL, key: ACCESSTOKEN, method: "POST", data: product});
    formContainer.innerHTML = "";
    showProducts(URL, ACCESSTOKEN, productList);
    alert("prodotto aggiunto con successo");
  });
});