import { createCard } from "./components.js";
import { fetchRequest } from "./fetch.js";
import { URL, ACCESSTOKEN, main } from "./constant.js";

const populatePage = async () => {
  const json = await fetchRequest({
    url: URL,
    key: ACCESSTOKEN,
    method: "GET",
  });
  json.forEach((element) => {
    createCard(
      element.imageUrl,
      element.name,
      element.description,
      element.price,
      element._id,
      main
    );
  });
};

document.addEventListener("DOMContentLoaded", populatePage);
