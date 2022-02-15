import axios from "axios";
import { BASE_URL } from "@/constants/general";

const services = {
  register(data) {
    return axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/users",
      data: {
        user: data,
      },
    });
  },
  login(data) {
    return axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/users/login",
      data: {
        user: data,
      },
    });
  },
};

export default services;
