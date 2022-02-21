import axios from "axios";
import { BASE_URL } from "@/constants/general";

const services = {
  getArticles() {
    return axios({
      method: "GET",
      baseURL: BASE_URL,
      url: "/articles",
    });
  },
  createArticle(data) {
    return axios({
      method: "POST",
      baseURL: BASE_URL,
      url: "/articles",
      data,
    });
  },
  getArticle(slug) {
    return axios({
      method: "GET",
      baseURL: BASE_URL,
      url: `/articles/${slug}`,
    });
  },
  deleteArticle(slug) {
    return axios({
      method: "DELETE",
      baseURL: BASE_URL,
      url: `/articles/${slug}`,
    });
  },
  editArticle(data) {
    return axios({
      method: "PUT",
      baseURL: BASE_URL,
      url: `/articles/${data.slug}`,
      data: data.data
    });
  },
};

export default services;
