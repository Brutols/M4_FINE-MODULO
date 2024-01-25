export const createForm = (
  container,
  { name = "", desc = "", brand = "", img = "", price }
) => {
  const form = document.createElement("div");
  form.classList.add("manage_form", "d-flex", "flex-column");

  const row1 = createRow();
  const inputName = createInput({
    type: "text",
    placeholder: "Name",
    ariaLabel: "name",
    id: "input_name",
    content: name,
  });
  const inputDesc = createInput({
    type: "text",
    placeholder: "Description",
    ariaLabel: "description",
    id: "input_desc",
    content: desc,
  });
  row1.appendChild(inputName);
  row1.appendChild(inputDesc);
  form.appendChild(row1);
  const row2 = createRow();
  const inputBrand = createInput({
    type: "text",
    placeholder: "Brand",
    ariaLabel: "brand",
    id: "input_brand",
    content: brand,
  });
  const inputImg = createInput({
    type: "text",
    placeholder: "Img-URL",
    ariaLabel: "img-url",
    id: "input_img",
    content: img,
  });
  const inputPrice = createInput({
    type: "number",
    placeholder: "0.00",
    ariaLabel: "price",
    id: "input_price",
    content: price,
  });
  row2.appendChild(inputBrand);
  row2.appendChild(inputImg);
  row2.appendChild(inputPrice);
  form.appendChild(row2);

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn", "btn-dark", "align-self-center");
  btnSubmit.setAttribute("type", "button");
  btnSubmit.setAttribute("id", "btn-submit_prod");
  btnSubmit.textContent = "Submit";

  form.appendChild(btnSubmit);

  container.appendChild(form);
};

export const createInput = ({ type, placeholder, ariaLabel, id, content }) => {
  const col = document.createElement("div");
  col.classList.add("col-12", "col-lg");

  const input = document.createElement("input");
  input.classList.add("form-control", "bg-dark");
  input.setAttribute("data-bs-theme", "dark");
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("aria-label", ariaLabel);
  input.setAttribute("id", id);
  input.value = content;

  col.appendChild(input);
  return col;
};

export const createRow = () => {
  const row = document.createElement("div");
  row.classList.add("row", "g-3", "manage_section");
  return row;
};

export const createLi = (container, name, id) => {
  const li = document.createElement("li");
  li.classList.add("products_list_item");
  li.setAttribute("id", id);

  const text = document.createElement("p");
  text.classList.add("text-truncate")
  text.textContent = name;
  li.appendChild(text);

  const iconsContainer = document.createElement("div");
  iconsContainer.classList.add("products_list_item_icons");
  li.appendChild(iconsContainer);

  const icon1 = document.createElement("ion-icon");
  icon1.setAttribute("name", "create");
  icon1.classList.add("icon_edit");
  iconsContainer.appendChild(icon1);

  const icon2 = document.createElement("ion-icon");
  icon2.setAttribute("name", "trash");
  icon2.classList.add("icon_delete");
  iconsContainer.appendChild(icon2);

  container.appendChild(li);
};

export const createCard = (src, title, desc, price, id, container) => {
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card", "col-3");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.setAttribute("src", src);

  cardWrapper.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.setAttribute("id", id);

  cardWrapper.appendChild(cardBody);

  const TitleLink = document.createElement("a");
  TitleLink.classList.add("card-title_link");
  TitleLink.setAttribute("href", `detail.html?id=${id}`);
  TitleLink.setAttribute("target", "_blank");

  cardBody.appendChild(TitleLink);

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title", "text-truncate");
  cardTitle.textContent = title;

  TitleLink.appendChild(cardTitle);

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("card-text", "text-truncate");
  cardDesc.textContent = desc;

  cardBody.appendChild(cardDesc);

  const cardBtn = document.createElement("a");
  cardBtn.classList.add(
    "btn",
    "btn-primary",
    "text-truncate",
    "card_btn",
    "disabled"
  );
  cardBtn.setAttribute("href", "#");
  cardBtn.textContent = `$${price}`;

  cardBtn.innerHTML += "<ion-icon name='cart-sharp'></ion-icon>";

  cardBody.appendChild(cardBtn);

  container.appendChild(cardWrapper);
};

export const createCardDetail = (src, title, desc, price) => {
  const detailWrapper = document.createElement("div");
  detailWrapper.classList.add("detail_wrapper");
  detailWrapper.style.backgroundImage = `url(${src})`;

  const detailContainer = document.createElement("div");
  detailContainer.classList.add("detail", "row");

  const detailImg = document.createElement("img");
  detailImg.classList.add("detail_img", "col-6");
  detailImg.setAttribute("src", src);

  detailContainer.appendChild(detailImg);

  const detailTextContainer = document.createElement("div");
  detailTextContainer.classList.add("detail_textContainer", "col-6");

  detailContainer.appendChild(detailTextContainer);

  const detailTitle = document.createElement("h1");
  detailTitle.classList.add("detail_title", "col-12");
  detailTitle.textContent = title;

  detailTextContainer.appendChild(detailTitle);

  const detailDesc = document.createElement("h2");
  detailDesc.classList.add("detail_desc");
  detailDesc.textContent = desc;

  detailTextContainer.appendChild(detailDesc);

  const detailPrice = document.createElement("h4");
  detailPrice.classList.add("detail_price");
  detailPrice.textContent = `$${price}`;

  detailTextContainer.appendChild(detailPrice);

  const body = document.querySelector("body");
  detailWrapper.appendChild(detailContainer);
  body.appendChild(detailWrapper);
};
