import Modal from "./modal"
import OrderSuccessImage from "../../assets/icons/order_success.svg"
import "./OrderSuccessModal.css"

const OrderSuccessModal = ({onClose,orderId}) => {

    return(
        <Modal onClose={onClose}>
             <div className="order-container">
                <div className="order-container-success">
                    <img className="img-fliud" src={OrderSuccessImage} alt="Success" />
                    <div className="message">
                        <h1>Order Successfully Placed!</h1>
                        <span>OrderId #{orderId}</span>
                        {/* <span>OrderId #{Math.random().toString(36).slice(2)}</span> */}
                    </div>
                </div>
             </div>
        </Modal>
    )

}

export default OrderSuccessModal