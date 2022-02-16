import axios from "axios";
import nofit from "@/plugins/notification.plugin";
import cookie from "@/plugins/jsCookie.plugin";
axios.defaults.timeout = 30000;

const ignoreUrl = ["/users", "/users/login"];

const request = (request) => {
  if (!ignoreUrl.includes(request.url)) {
    const token = cookie.get("token");
    if (token) request.headers.common.Authorization = `Token ${token}`;
  }

  return request;
};

const requestError = (error) => {
  return Promise.reject(error);
};

const response = (response) => {
  return response;
};

const responseError = (error) => {
  const { errors } = error.response?.data;

  if (errors) {
    Object.keys(errors).forEach((key) => {
      nofit.error(`${key}: ${errors[key][0]} !!`);
    });
  } else {
    nofit.error(`something wrong happend !!`);
  }
  return Promise.reject(error);
};

axios.interceptors.request.use(request, requestError);
axios.interceptors.response.use(response, responseError);
