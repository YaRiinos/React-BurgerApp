import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-app-d3e7e.firebaseio.com/"
});

export default instance;
