import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_SERVICE_URL as string
})

api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

export { api }