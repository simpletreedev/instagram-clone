import axios from "axios";

const makeRequest = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://instagram-clone-3.onrender.com/api",
  // baseURL: "http://localhost:9500/api",
  // withCredentials: true,
});

export default makeRequest;
