import axios from "axios"


export const addItemHandler = item =>{
    return dispatch => {

        dispatch({
            type:"ADD_ITEM",
            payload:{
                item: item
            }
        })
    }
}
export const removeItemHandler = id => {
    return dispatch => {

        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id: id
            }
        })
    }
}

export const clearCartHandler = () => {
    return dispatch => {

        dispatch({
            type: "CLEAR_CART"
        })
    }
}

export const placeOrderHandler = (callback) =>{

    return async (dispatch,getState)=>{
        
        try {
          const {auth , cart} = getState()
          if(!auth.user || !auth.user.idToken){
           return callback({
                error:true,
                message:"please login to place an order"
            })
          }
         const response  = await axios.post(`https://my-react-app-1-5e9a9-default-rtdb.asia-southeast1.firebasedatabase.app/orders/${auth.user.localId}.json?auth=${auth.user.idToken}`,{
                ...cart
            })
            dispatch({
                type:"CLEAR_CART"
            })
            callback({
                error:false,
                data: response.data
            })
        } catch (error) {
             callback({
                error:true,
                message: error.message
            })
        }
    }

}