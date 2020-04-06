import  {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

// each reducer has its state
const initialState = {
    alert: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        default:
            return state
    }
}