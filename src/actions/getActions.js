import {GET_ALL_BOOKS, ON_LOADING} from './actionTypes'
import { HttpGet } from "../httpRequest/httpRequest";
import store from "../store";


export function getAllBooks(page) {
    const limit = 12
    const offset = page * limit
    store.dispatch({
        type: ON_LOADING,
    });
    return dispatch => {
        HttpGet('/v1/public/comics?apikey=7edb1622ef4343dd804c55d510932e87&limit='+limit+'&offset='+offset+'&hasDigitalIssue=true')
            .then(result => {
                if (result.status === 200) {
                    dispatch({
                        type: GET_ALL_BOOKS,
                        payload: result.data.data
                    });
                }
            })
            .catch(error => console.log(error));
    };
}
