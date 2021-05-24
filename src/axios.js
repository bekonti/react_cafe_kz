import axios from "axios";

const localhost = "8080"
const instance = axios.create({
    baseURL: `http://localhost:${localhost}`,
})

export default instance