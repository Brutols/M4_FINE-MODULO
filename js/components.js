export const createForm = (container) => {
  const form = document.createElement("div");
  form.classList.add("manage_form", "d-flex", "flex-column");

  const row1 = createRow();
  const inputName = createInput("text", "Name", "name", "input_name");
  const inputDesc = createInput(
    "text",
    "Description",
    "description",
    "input_desc"
  );
  row1.appendChild(inputName);
  row1.appendChild(inputDesc);
  form.appendChild(row1);

  const row2 = createRow();
  const inputBrand = createInput("text", "Brand", "brand", "input_brand");
  const inputImg = createInput("text", "Img-URL", "img-url", "input_img");
  const inputPrice = createInput("number", "0.00", "price", "input_price");
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

export const createInput = (type, placeholder, ariaLabel, id) => {
  const col = document.createElement("div");
  col.classList.add("col");

  const input = document.createElement("input");
  input.classList.add("form-control", "bg-dark");
  input.setAttribute("data-bs-theme", "dark");
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  input.setAttribute("aria-label", ariaLabel);
  input.setAttribute("id", id);

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
  li.textContent = name;

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
