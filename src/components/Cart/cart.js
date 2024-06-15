import { Fragment, useState } from "react"
import Modal from "../UI/modal"
import "./cart.css"
import CartItem from "./CartItem"
import OrderSuccessModal from "../UI/OrderSuccess"
import { useDispatch, useSelector } from "react-redux"
import { addItemHandler,removeItemHandler,clearCartHandler,placeOrderHandler } from "../../actions"


const Cart =  () =>{
   

    const [showModal, setShowModal]= useState(false)
    const [orderModal, setOrderModal]= useState(false)
    const items = useSelector(state => state.cart.items)
    const totalAmount=useSelector(state => state.cart.totalAmount)
    const [orderId, setOrderId] = useState("")
    const dispatch = useDispatch()

    const handleModal=()=>{
          
        setShowModal(previousState => !previousState)
        
    }

    const handleOrderModal=()=>{
       
        // dispatch(clearCartHandler())
        
        setOrderModal(previous => !previous)
    }

    const orderHandler = () =>{
        
        // dispatch(clearCartHandler())
        dispatch(placeOrderHandler(response => {
            
            if(response.error){
                 alert(response.message||"Some Error Occured , Please try again")
            }
            else{
                setOrderId(response.data.name)
                setOrderModal(true);
                dispatch(clearCartHandler());
            }
        }))

        

    }

    const dispatchEvents =(type,item)=>{

       if(type === 1){
        
           dispatch(addItemHandler(item))

       }
       else if(type === -1){
         
           dispatch(removeItemHandler(item.id))

       }

    }

return(
  <Fragment>
    <ul className="nav-list">
        
        <li onClick={handleModal} >
            Cart 🛒 <span className="cart-count"> {items.length}</span>

        </li>
    </ul> 
    {
        showModal&&
        <Modal onClose={handleModal}>
           <div className="checkout-modal">
                <h2>Checkout Modal</h2>
                <div className="checkout-modal_list">
                    {
                                items.length > 0?

                        items.map(item=>{
                            return (
                            <CartItem data={item}
                                    onEmitIncreaseItem={item => dispatchEvents(1, item)} 
                                    onEmitDecreaseItem={item => dispatchEvents(-1, item)}
                                 key={item.id}
                            />
                           )
                        })
                          :

                       <div className="empty-cart">Please add Something in your Cart</div>
                    }
                                         
                </div>

                {

                            items.length > 0 &&
                  <div className="checkout-modal__footer">
                  <div className="totalAmount">
                        <h4>Total Amount:</h4>
                        <h4>
                          {totalAmount}
                         <span > INR</span> 
                        </h4>
                  </div>
                       <button onClick={orderHandler} className="order-btn">Order Now</button>

                  </div>
                }
           </div>
        </Modal>
    }  

    {orderModal && <OrderSuccessModal orderId={orderId} onClose={handleOrderModal}/>}
    </Fragment>           

)
}
export default Cart