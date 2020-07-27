import { ON_LOADING, ON_LOADED } from '../../actions/actionTypes';

const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ON_LOADING:
            return { ...state, loading: true };
        case ON_LOADED:
            return { ...state, loading: false };
        default:
            return state;
    }
};
