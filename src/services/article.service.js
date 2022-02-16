import axios from "axios";
import { BASE_URL } from "@/constants/general";


const services = {
    getArticles() {
        return axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: '/articles'
            
        })
    },
    createArticle(data) {
        return axios({
            method: "POST",
            baseURL: BASE_URL,
            url: '/articles',
            data,
        })
    }
}


export default services