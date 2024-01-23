import { createLi } from "./components.js";

export const generateData = () => {
  const prodName = document.querySelector("#input_name").value;
  const prodDesc = document.querySelector("#input_desc").value;
  const prodBrand = document.querySelector("#input_brand").value;
  const prodImg = document.querySelector("#input_img").value;
  const prodPriceString = document.querySelector("#input_price").value;
  const prodPrice = parseFloat(prodPriceString).toFixed(2);
  const product = {
    name: prodName,
    description: prodDesc,
    brand: prodBrand,
    imageUrl: prodImg,
    price: prodPrice,
  };
  return product;
};

export const addListeners = (array, func) => {
  array.forEach((element) => {
    element.addEventListener("click", func);
  });
};

export const deleteProduct = async (url, key, id) => {
  try {
    const resp = await fetch(url + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });
    const json = await resp.json();
    alert(`${json.name} eliminato correttamente`);
  } catch (error) {
    alert(`error: ${error}`);
  }
};

export const showProducts = async (url, key, list) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });
    const json = await res.json();
    list.innerHTML = "";
    json.forEach((el) => {
      createLi(list, el.name, el._id);
    });
    // const edit = document.querySelectorAll(".edit")
    const remove = document.querySelectorAll(".icon_delete");
    addListeners(remove, function (ev) {
      const id = ev.target.closest(".products_list_item").id;
      deleteProduct(url, key, id);
      showProducts();
    });
  } catch (error) {
    alert(`error: ${error}`);
  }
};

export const addProduct = async (data, url, key) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      alert(`error: ${error}`);
    }
  };