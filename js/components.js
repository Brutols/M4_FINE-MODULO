export const createForm = (container, { name = "", desc = "", brand = "", img = "", price }) => {
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
  console.log(inputName);
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
  col.classList.add("col");

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
