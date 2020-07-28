import { GET_ALL_BOOKS } from './actionTypes'
import { HttpGet } from "../httpRequest/httpRequest";


export function getAllBooks(page) {
    const limit = 10
    const offset = page * limit
    return dispatch => {
        HttpGet('/v1/public/comics?apikey=7edb1622ef4343dd804c55d510932e87&limit='+limit+'&offset='+offset+'&hasDigitalIssue=true')
            .then(result => {
                console.log(result.status);
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
