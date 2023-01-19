import axios from "axios";

async function get(url, id) {
  try {
    return (await axios.get(url)).data;
  } catch (e) {
    return e.response.data;
  }
}

async function post(url, item) {
  try {
    return (
      await axios.post(url, item, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).data;
  } catch (e) {
    return e.response.data;
  }
}

async function deleteStuff(url, item) {
  try {
    return await axios.delete(url, { params: { id: item } });
  } catch (e) {
    return e.response.data;
  }
}

export { get, post, deleteStuff };
