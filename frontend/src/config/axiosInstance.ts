import axios from "axios";
import { AXIOS_URL } from "../constants/keys";

const axiosInstance = axios.create({
  baseURL: AXIOS_URL,
});

export default axiosInstance;
