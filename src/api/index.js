import axios from 'axios';

export const apiUrl = 'http://url-to-api.me';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: apiUrl,
        headers: { authorization: localStorage.getItem("token") }
    });
};
