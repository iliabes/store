import axios from "axios";

export const api = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5'
})


api.interceptors.request.use(function (config) {
    config.url = config.url + '&lang=ru' + '&units=metric' + '&appid=' + '2607112734128ccb8b24ee86e9d33c4f'
    return config;
});