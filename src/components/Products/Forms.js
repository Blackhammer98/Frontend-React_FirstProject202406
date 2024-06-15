 const Form =(props)=>{

    const handleInputs =(event)=>{
       
        props.onChangeInput(event)
    }


    return(
          
        <form onSubmit={props.onSubmissionForm}>
            <h2>Item Card Details</h2>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Enter The Input"
                    value={props.items.title}
                    onChange={handleInputs}
                    required
                />

            </div>
            <div className="input-field">
                <label htmlFor="price">Price</label>
                <input
                    name="price"
                    type="number"
                    placeholder="Enter The Input"
                    value={props.items.price}
                    onChange={handleInputs}
                    required
                />
            </div>
            <div className="input-field">
                <label htmlFor="title">Discounted Price</label>
                <input
                    name="discountedPrice"
                    type="number"
                    placeholder="Enter The Input"
                    value={props.items.discountedPrice}
                    onChange={handleInputs}
                    required
                />
            </div>
            <div className="input-field">
                <label htmlFor="title">Thumbnail</label>
                <input
                    name="thumbnail"
                    type="text"
                    placeholder="Enter The Input"
                    value={props.items.thumbnail}
                    onChange={handleInputs}
                    required

                />
            </div>
            <div className="submit-wrap">
                <button>Update</button>
            </div>
        </form> 
    )
 }

 export default Form
