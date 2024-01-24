export const fetchRequest = async ({
  url,
  key,
  method,
  data = "",
  id = "",
}) => {
  try {
    const requestOptions = {
      method: method,
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
    };

    if (data !== "") {
      requestOptions.body = JSON.stringify(data);
    }

    const resp = await fetch(url + id, requestOptions);
    const json = await resp.json();
    return json;
  } catch (error) {
    alert(`error: ${error}`);
  }
};
