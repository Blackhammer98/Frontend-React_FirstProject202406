const CartItem = ({ data, onEmitDecreaseItem, onEmitIncreaseItem })=>{

    const handleButtonClick = (e, data, action) => {
        e.stopPropagation();
        if (action === 'decrease') {
            onEmitDecreaseItem(data);
        } else  if (action === 'increase') {
            onEmitIncreaseItem(data);
        }
    };

return(
    
    <div className="checkout-modal_list-item">
        <div className="img-wrap">
            <img src={`/assets/${data.thumbnail}`} alt={data.title}/>
        </div>
        <div className="information">
            <div>
                <h4>{data.title}</h4>
                <div className="pricing">
                    <span>{data.discountedPrice}</span>
                    <small>
                        <strike>{data.price}</strike>
                    </small>
                </div>
            </div>
            <div className="cart-addon cart-addon__modal">
                <button onClick={(e) => handleButtonClick(e,data,"decrease")}>-</button>
                <span className="counter">{data.quantity}</span>
                <button onClick={(e) => handleButtonClick(e,data,"increase")}>+</button>
            </div>
        </div>
    </div>
)

}
export default CartItem