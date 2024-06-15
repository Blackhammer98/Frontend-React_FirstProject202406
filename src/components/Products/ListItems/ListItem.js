import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import"./ListItem.css"
import { Fragment, useState } from "react"
import Modal from "../../UI/modal"
import { useDispatch, useSelector } from "react-redux"
import { addItemHandler,removeItemHandler } from "../../../actions"


const ListItem = ({ data })=>{

    const [showModal, setShowModal] = useState(false)

     const item = useSelector(state => state.cart.items.find(item => item.id === data.id))
    const dispatch = useDispatch()


    const increaseCountByOne=(e)=>{
       e.stopPropagation();
        dispatch(addItemHandler(data))

        }
    
    const decreaseCountByOne=(e)=>{
        e.stopPropagation();
        dispatch(removeItemHandler(data.id))
        
    }

    const handleModal=()=>{

        setShowModal(previousState => !previousState)
    }

 return( 
    <Fragment>
         <div onClick={handleModal} className={"item-card"}>
             <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
             <div className={"item-card-innformation"}>
                 <div className={"pricing"}>
                     <span>₹{data.discountedPrice}</span>
                     <small>
                         <strike>₹{data.price}</strike>
                     </small>
                 </div>

             </div>
             <div className={"title-box"}>
                 <h3>{data.title}</h3>
             </div>

             {
                !item || item?.quantity < 1 ?
                     <button className={"cart-btn"} onClick={increaseCountByOne}>
                         <span>
                             Add to cart
                         </span>
                         <img className="cart-img" src={AddToCartIcon} alt="Cart Icon" />
                     </button>
                     :
                     <div className={"cart-addon"}>
                         <button onClick={decreaseCountByOne}><span>-</span></button>
                         <span className={"counter"}>{item.quantity}</span>
                         <button onClick={increaseCountByOne}><span>+</span></button>

                     </div>
             }

         </div>
         {showModal && 

             <Modal onClose={handleModal}>
                <div className="item-card__modal">
                    <div className="img-wrap">
                         <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
                    </div>
                    <div className="meta">
                        <h3>{data.title}</h3>
                         <div className={"pricing"}>
                             <span>₹{data.discountedPrice}</span>
                             <small>
                                 <strike>₹{data.price}</strike>
                             </small>
                         </div>
                         <p>{data.description}</p>
                         {
                             !item || item?.quantity < 1 ?
                                 <button className={"cart-btn cart-btn__modal"} onClick={increaseCountByOne}>
                                     <span>
                                         Add to cart
                                     </span>
                                     <img className="cart-img" src={AddToCartIcon} alt="Cart Icon" />
                                 </button>
                                 :
                                 <div className={"cart-addon cart-addon__modal"}>
                                     <button onClick={decreaseCountByOne}><span>-</span></button>
                                     <span className={"counter"}>{item.quantity}</span>
                                     <button onClick={increaseCountByOne}><span>+</span></button>

                                 </div>
                         }                  
                    </div>
                </div>
            </Modal>}
    </Fragment>
 )   
        }

export default ListItem;