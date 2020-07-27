import { GET_ALL_BOOKS } from './actionTypes'
import { HttpGet } from "../httpRequest/httpRequest";


export function getAllBooks() {
    return dispatch => {
        HttpGet('/v1/public/comics?apikey=7edb1622ef4343dd804c55d510932e87&limit=100&hasDigitalIssue=true')
            .then(result => {
                if (result.status === 200) {
                    dispatch({
                        type: GET_ALL_BOOKS,
                        payload: result.data.data.results
                    });
                }
            })
            .catch(error => console.log(error));
    };
}
