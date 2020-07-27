import { GET_ALL_BOOKS } from "../actions/actionTypes";

const initialState = {
    books: [],
    cart: []
};

function rootReducer(state = initialState, action) {
    if (action.type === GET_ALL_BOOKS) {
        console.log(action.payload[0]);
        return {
            ...state,
            books: [...state.books, action.payload]
        }
    }
    return state;
}

export default rootReducer;
