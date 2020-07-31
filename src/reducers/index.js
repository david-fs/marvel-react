import {
    REMOVE_BOOK_IN_CART,
    GET_ALL_BOOKS,
    GET_ALL_BOOKS_ERROR,
    INSERT_BOOK_IN_CART,
    ON_LOADING
} from "../actions/actionTypes";

const initialState = {
    books: [],
    infoBooks: {},
    loading: false,
    cart: [],
    quantityCart: 0
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
                cart: insertBookInCart(state.cart, action.payload),
                quantityCart: increaseQuatityCart(state.quantityCart)
            };
        case REMOVE_BOOK_IN_CART:
            return {
                ...state,
                cart: removeBookInCart(state.cart, action.payload),
                quantityCart: decreaseQuatityCart(state.quantityCart)
            }
        default:
            return state;
    }
}
function insertBookInCart(stateCart, cart) {
    let alreadyExists = false;
    stateCart.forEach(book => {
       if (book.id === cart.id){
           book.quantity++
           alreadyExists = true
       }
    })
    if (alreadyExists){
        return stateCart
    } else {
        cart.quantity = 1
        return [...stateCart, cart];
    }
}
function increaseQuatityCart(quantity) {
    return quantity + 1
}

function removeBookInCart(stateCart, cart) {
    let index = -1;
    stateCart.forEach((book, i) => {
        if (book.id === cart.id){
            book.quantity--
            if (book.quantity === 0){
                index = i
            }
        }
    })

    if (index !== -1){
        stateCart.splice(index, 1)
        return stateCart
    } else {
        return stateCart
    }
}
function decreaseQuatityCart(quantity) {
    return quantity - 1
}

export default rootReducer;
