import axios from "axios";
import { BASE_URL } from "@/constants/general";


const services = {
    getArticles() {
        return axios({
            method: 'GET',
            baseURL: BASE_URL,
            url: '/articles'

        })
    }
}


export default services