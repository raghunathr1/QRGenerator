import axios from "axios";

const API = axios.create({
  baseURL: "https://qrgenerator-1-12pb.onrender.com/api",
});

export default API;