import axios from "axios";

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CONTACT_API_URL,
    timeout: 5000,
    headers: {"Content-Type": "application/json"}
});

export default client;