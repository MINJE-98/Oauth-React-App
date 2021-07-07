import * as actions from '../action'

// actipn type
const { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST } = actions;


export default function reducer(state, action) {
    switch(action.type){
        case LOGIN_REQUEST:
            return state;
        case LOGIN_SUCCESS:
            console.log("LOGIN_SUCCESS");
            return {...state, data: action.data}
        case LOGIN_FAILURE:
            return {...state, error: action.error}
        default:
            return state
    }
}