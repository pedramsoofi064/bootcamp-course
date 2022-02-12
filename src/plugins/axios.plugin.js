import axios from "axios";
import nofit from "@/plugins/notification.plugin";
axios.defaults.timeout = 30000;

const request = (request) => {
  console.log("before request send");
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
