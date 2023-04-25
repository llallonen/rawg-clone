import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "40a3aa21ed2448d2b94d396274f4a6f4",
  },
});