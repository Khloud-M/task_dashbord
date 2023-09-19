import axios from "axios";
export default axios.create({
  baseURL: "https://vip.toyshomekw.com/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "ar",
  },
});
