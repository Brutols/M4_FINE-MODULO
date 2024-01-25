import { fetchRequest } from "./fetch.js";
import { createCardDetail } from "./components.js";
import { URL, ACCESSTOKEN, } from "./constant.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const populateDetails = async () => {
    const json = await fetchRequest({url: URL, key: ACCESSTOKEN, method: "GET", id: id});
    createCardDetail(json.imageUrl, json.name, json.description, json.price);
}

document.addEventListener("DOMContentLoaded", populateDetails)