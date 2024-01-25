import { fetchRequest } from "./fetch.js";

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

export const getProductData = async (url, key, id) => {
  try {
    const json = await fetchRequest({url: url, key: key, method: "GET", id: id})
    const dataObj = {
      name: json.name,
      desc: json.description,
      brand: json.brand,
      img: json.imageUrl,
      price: json.price,
    };
    return dataObj;
  } catch (error) {
    alert(`error: ${error}`);
  }
};