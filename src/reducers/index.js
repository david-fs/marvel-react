import { GET_ALL_BOOKS } from "../actions/actionTypes";

const initialState = {
    books: [],
    infoBooks: {},
    cart: []
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_ALL_BOOKS) {
        console.log(action.payload.results);
        return {
            ...state,
            books: [action.payload.results],
            infoBooks: {...action.payload}
        }
    }
    return state;
}

export default rootReducer;
