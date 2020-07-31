import {
    GET_ALL_BOOKS,
    GET_ALL_BOOKS_ERROR, INSERT_BOOK_IN_CART,
    ON_LOADING
} from "../actions/actionTypes";

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
        case GET_ALL_BOOKS:
            return {
                ...state,
                books: [action.payload.results],
                infoBooks: {...action.payload},
                loading: false
            };
        case GET_ALL_BOOKS_ERROR:
            return {
                ...state,
                books: [],
                infoBooks: {},
                loading: false
            };
        case INSERT_BOOK_IN_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    }
}

function removeBookInCart(bookId) {
    console.log(bookId);
    console.log(this.state.cart);
}

export default rootReducer;
