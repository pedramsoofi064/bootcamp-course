import axios from "axios";

const services = {
  register(data) {
    return axios({
      method: "POST",
      baseURL: "https://api.realworld.io/api",
      url: "/users",
      data: {
        user: data,
      },
    });
  },
  login(data) {
    return axios({
      method: "POST",
      baseURL: "https://api.realworld.io/api",
      url: "/users/login",
      data: {
        user: data,
      },
    });
  },
};

export default services;
