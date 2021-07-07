import axios from 'axios';
//action type
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";


export const login = (kakaocode) =>  async (dispatch, getState) => {
    try {
        console.log("b?");
        const result = await axios.post( `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=95c2b6fc38e21b3d6d255e32020e7b75&redirect_uri=http://localhost:3000/auth&code=${kakaocode}`)
        dispatch(success(result.data))
        console.log(result.data);
        window.location.pathname = "/";
    } catch (error) {
        console.log(error);
    }
}

const request = () =>{
    return {
        type: LOGIN_REQUEST
    }
}
const success = (data) =>{
    return {
        type: LOGIN_SUCCESS,
        data
    }
}
const failure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
}