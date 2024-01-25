import { createForm, createLi } from "./components.js";
import { fetchRequest } from "./fetch.js";
import { addListeners, generateData, getProductData } from "./helper.js";
import { URL, ACCESSTOKEN, formContainer, btnNewProd, productList } from "./constant.js";

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
