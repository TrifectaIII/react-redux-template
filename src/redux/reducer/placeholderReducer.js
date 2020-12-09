import {PLACEHOLDER_ACTION} from '../actionTypes';

const initialState = {
    counter: 0,
}

export default function (state=initialState, action) {

    switch(action.type) {

        case PLACEHOLDER_ACTION:
            return {
                ...state,
                counter: state.counter + 1,
            }

        default:
            return state;
    }
}