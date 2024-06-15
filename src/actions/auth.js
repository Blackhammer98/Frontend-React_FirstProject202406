
import axios from "axios"
 export const signupWithEmailAndPassword =(email,password) => {
    return async (dispatch) =>{

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaOAvD2Q7N7GFXUI6-rK2GBPEQOdNwgTQ`, {
                email: email,
                password: password,
                returnSecureToken: true
            })
            console.log(response)
            dispatch({
                type:"SIGNUP_SUCCESS",
                payload: response.data
            })
            localStorage.setItem("token", response.data.idToken)
        }

        catch (error) {
            dispatch({
                 type: 'SIGNUP_FAIL',
                 payload: error?.response?.data?.error?.message 
                });
    
        }


    }

}


export const loginWithEmailAndPassword = (email, password) => {
    return async (dispatch) => {

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaOAvD2Q7N7GFXUI6-rK2GBPEQOdNwgTQ`, {
                email: email,
                password: password,
                returnSecureToken: true
            })
            console.log(response)
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: response.data
            })
            localStorage.setItem("token", response.data.idToken)
        }

        catch (error) {
            dispatch({
                 type: 'LOGIN_FAIL',
                  payload: error?.response?.data?.error?.message 
                    });
           
        }


    }

}

export const checkUserLoggedIn = ()=>{
    
    return async(dispatch)=>{
        try {

            let token = localStorage.getItem("token")
            if(!token){
                return;
            }
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDaOAvD2Q7N7GFXUI6-rK2GBPEQOdNwgTQ`, {
               idToken:token
            })
           
            dispatch({
                  type: "LOGIN_SUCCESS",
                  payload: {
                    idToken:token,
                    localId: response.data.users[0].localId,
                   ...response.data}

            })
            
        }
    
        catch (error) {
        dispatch({
            type: 'LOGIN_FAIL',
            payload: error?.response?.data?.error?.message
        });

    }


}

}


export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("token")
        dispatch({
             type: "LOGOUT" 
            });
    };
};




