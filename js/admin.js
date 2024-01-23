import { createInput, createRow, createForm, createLi } from "./components.js";
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

document.addEventListener(
  "DOMContentLoaded",
  showProducts(URL, ACCESSTOKEN, productList)
);

btnNewProd.addEventListener("click", function (ev) {
  ev.preventDefault();
  formContainer.innerHTML = "";
  createForm(formContainer);
  const bntSubmitProd = document.querySelector("#btn-submit_prod");
  bntSubmitProd.addEventListener("click", function (ev) {
    ev.preventDefault();
    const product = generateData();
    addProduct(product, URL, ACCESSTOKEN);
    formContainer.innerHTML = "";
    showProducts();
    addListeners(remove, function (ev) {
      const id = ev.target.closest(".products_list_item").id;
      deleteProduct(URL, ACCESSTOKEN, id);
      showProducts();
    });
    alert("prodotto aggiunto con successo");
  });
});
