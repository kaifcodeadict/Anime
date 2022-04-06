import axios from "axios";

const API = axios.create({ baseURL: "https://ghibliapi.herokuapp.com/films" });

export const fetchAnime = () => API.get("/");
export const fetchAnimebyId = (id) => API.get(`/${id}`);
export const fetchAnimeChar = (url) => axios.get(url);
