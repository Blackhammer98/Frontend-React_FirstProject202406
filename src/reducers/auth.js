
const initialState = {
    user: null,
    error: null,
    success: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                user: action.payload,
                error: null,
                success:true
            };
        case 'SIGNUP_FAIL':
            return {
                ...state,
                user: null,
                error: action.payload,
                success:false
            };
        case 'LOGIN_SUCCESS' :
            return{
                ...state,
                user: action.payload,
                error: null,
                success: true
            } ;
        case 'LOGIN_FAIL':
            return {
                ...state,
                user: null,
                error: action.payload,
                success: false
            } 
        case "LOGOUT":
             return {
                
             }  
         
        default:
            return state;
    }
};

export default authReducer;
