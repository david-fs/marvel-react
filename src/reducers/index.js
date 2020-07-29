import {GET_ALL_BOOKS, ON_LOADING} from "../actions/actionTypes";

const initialState = {
    books: [],
    infoBooks: {},
    loading: false,
    cart: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ON_LOADING:
            return {
                ...state,
                loading: true
            };
        /*case ON_LOADED:
            return {
                ...state,
                loading: false
            };*/
        case GET_ALL_BOOKS:
            return {
                ...state,
                books: [action.payload.results],
                infoBooks: {...action.payload},
                loading: false
            }
        default:
            return state;
    }
}

export default rootReducer;
