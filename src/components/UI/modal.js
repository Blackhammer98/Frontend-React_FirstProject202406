
import ReactDom from 'react-dom'
import "./modal.css"
import { Fragment } from 'react';
const Modal = ({ onClose, children })=>{

    const handleClick = (e) => {
        e.stopPropagation(); 
        onClose();
    };
        


    return(
        <Fragment>
            {
        ReactDom.createPortal(
            <>
                <div onClick={handleClick} className="modal-overlay"  >
                    

                    <div className="modal-content" >
                     
                        <button className='modal-close-button' type="close" onClick={handleClick}  > X</button>
                        <div className='Content'>
                            {children}
                        </div>
                      
                       
                    </div>
                </div>
               
            </>,
            document.getElementById("modal-root")
        )
    }
        </Fragment>
       
    )


     
    
}

export default Modal