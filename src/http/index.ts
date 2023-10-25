import axios from 'axios'

export const $host = axios.create({
    baseURL: 'https://api.slingacademy.com/v1/sample-data'
})