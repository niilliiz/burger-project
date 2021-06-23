import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-project-2881d-default-rtdb.firebaseio.com/",
});

export default instance;
