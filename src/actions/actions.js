import {
    GET_ALL_BOOKS,
    GET_ALL_BOOKS_ERROR,
    INSERT_BOOK_IN_CART,
    ON_LOADING,
    REMOVE_BOOK_IN_CART
} from './actionTypes'
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
            .catch(error => {
                dispatch({
                    type: GET_ALL_BOOKS_ERROR,
                    payload: {}
                });
                console.log(error)
            });
    };
};

export function getBooksByName(name, page) {
    const limit = 12
    const offset = page * limit
    store.dispatch({
        type: ON_LOADING,
    });
    return dispatch => {
        HttpGet('/v1/public/comics?apikey=7edb1622ef4343dd804c55d510932e87&limit='+limit+'&offset='+offset+'&hasDigitalIssue=true&titleStartsWith='+name)
            .then(result => {
                if (result.status === 200) {
                    dispatch({
                        type: GET_ALL_BOOKS,
                        payload: result.data.data
                    });
                }
            })
            .catch(error => {
                dispatch({
                    type: GET_ALL_BOOKS_ERROR,
                    payload: {}
                });
                console.log(error)
            });
    };
}

export function insertBook(book) {
    return dispatch =>{
        dispatch({
            type: INSERT_BOOK_IN_CART,
            payload: book
        });
    }

}

export function removeBook(book) {
    return dispatch =>{
        dispatch({
            type: REMOVE_BOOK_IN_CART,
            payload: book
        });
    }
}
