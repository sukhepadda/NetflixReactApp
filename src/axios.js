import axios from "axios";
// uri first part : https://api.themoviedb.org/3

// base url to make req to the tmdb api
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;