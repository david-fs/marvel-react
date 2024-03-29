import axios from 'axios'
import store from '../store';
import {ON_LOADED, ON_LOADING} from '../actions/actionTypes';

class HttpRequest {
    static instance() {
        const instance = axios.create({
            baseURL: 'https://gateway.marvel.com',
            params: {
                "apikey": "7edb1622ef4343dd804c55d510932e87",
                "limit": "100"
            },
            timeout: 10000,
            method: 'get',
            responseType: 'json'
        });
        return instance;

    }
    async Get(urlApi, param = {}) {
        try {
            const get = HttpRequest.instance().get(urlApi, param);
            const result = await get;
            return result;
        } catch (error) {
            store.dispatch({ type: ON_LOADED });
            console.log(error);
        }
    }
}

let request = new HttpRequest();
export const HttpGet = async (urlApi, param = {}) => {
    return await request.Get(urlApi, param);
};
