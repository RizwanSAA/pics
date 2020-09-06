import axios from "axios";

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID MSMMhA5pfboOlWFHTxWCQF5XoMGqT7_dyuIzLumbDNA",
  },
});

export default unsplash;
