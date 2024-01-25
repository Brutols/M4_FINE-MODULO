import { createInput, createRow, createForm, createLi } from "./components.js";
import { fetchRequest } from "./fetch.js";
import { addListeners, generateData, getProductData } from "./helper.js";

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
    fetchRequest({ url: URL, key: ACCESSTOKEN, method: "POST", data: product });
    formContainer.innerHTML = "";
    alert("prodotto aggiunto con successo");
    showProducts(URL, ACCESSTOKEN, productList);
  });
});

const showProducts = async () => {
  const json = await fetchRequest({
    url: URL,
    key: ACCESSTOKEN,
    method: "GET",
  });
  productList.innerHTML = "";
  json.forEach((el) => {
    createLi(productList, el.name, el._id);
  });

  const edit = document.querySelectorAll(".icon_edit");

  addListeners(edit, async function (ev) {
    const id = ev.target.closest(".products_list_item").id;
    const formData = await getProductData(URL, ACCESSTOKEN, id);
    formContainer.innerHTML = "";
    createForm(formContainer, formData);

    const bntSubmitProd = document.querySelector("#btn-submit_prod");

    bntSubmitProd.addEventListener("click", function (ev) {
      ev.preventDefault();
      const editedProduct = generateData();
      fetchRequest({
        url: URL,
        key: ACCESSTOKEN,
        method: "PUT",
        data: editedProduct,
        id: id,
      });
      formContainer.innerHTML = "";
      alert(`${editedProduct.name} modificato correttamente`);
      showProducts();
    });
  });

  const remove = document.querySelectorAll(".icon_delete");
  addListeners(remove, async function (ev) {
    const id = ev.target.closest(".products_list_item").id;
    const deleteProduct = await fetchRequest({
      url: URL,
      key: ACCESSTOKEN,
      method: "DELETE",
      id: id,
    });
    alert(`${deleteProduct.name} eliminato correttamente`);
    showProducts();
  });
};
