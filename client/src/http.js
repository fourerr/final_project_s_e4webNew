import axios from "axios";
// import { toast } from 'react-toastify';

const BASE_URL = "http://localhost:8080";

export default {
  get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
  file(endpoint, data, method = "POST") {
    return uploadFile(endpoint, method, data);
  },
};

async function ajax(endpoint, method = "get", data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      headers: {
        "x-api-key": localStorage.getItem("token") || "",
      },
      data,
      params: method === "GET" ? data : null,
    });
    return res.data;
  } catch (err) {
    console.log(err)
    console.log(
      `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
    );
    throw err;
  }
}

async function uploadFile(endPoint, method = "POST", data = {}) {
  try {
    const response = await fetch(`${BASE_URL}${endPoint}`, {
      method: method,
      body: data,
    });
    const json = await response.json();
    if (json.error) throw json.error;
    return json;
  } catch (error) {
    throw error;
  }
}
