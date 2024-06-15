 import ReactDom from 'react-dom'
 import"./loader.css"
 const Loader =()=>{

    return(
       ReactDom.createPortal(
          <>
             <div className="loader-container">

                <div className="loader"> </div>

                <div className="Loader-text">Loading...</div>
             </div>

          </>,
          document.getElementById("loader-root")
       )

    )
 }

 export default Loader