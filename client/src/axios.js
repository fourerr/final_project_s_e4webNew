import axios from "axios"

const myAxios = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        "x-api-key":localStorage.getItem("token") || ""
    }
})
export default myAxios
