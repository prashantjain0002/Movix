import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjBhMWZiMzVkOTQ4NjAzZWZmMDMxMjgxYWFlZDc4MCIsInN1YiI6IjY2MDUyNjYwMjgxMWExMDE4NmRhYjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-v-nKvX81KjDX8_HPlyowZ2f9Uv2SKGE8fiChotS8iw";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers: headers,
      params: params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
