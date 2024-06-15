import { useEffect, useState } from "react"
import ListItem from "./ListItems/ListItem"
import"./products.css"
import axios from "axios"
import Loader from "../UI/loader"
import {useLocation, useNavigate, useParams} from "react-router-dom"

   


const Products = ()=>{

    
    const [items, setItems] = useState([
    //    { id: 0,
    //     discountedPrice: 340,
    //     price: 450,
    //     title: "Title of the item 1",
    //     thumbnail: "placeholder.png"},
    //    { id: 1,
    //     discountedPrice: 340,
    //     price: 450,
    //     title: "Title of the item 2",
    //     thumbnail: "placeholder.png"},
    //     {
    //         id: 2,
    //         discountedPrice: 340,
    //         price: 450,
    //         title: "Title of the item 3",
    //         thumbnail: "placeholder.png"
    //     },
    ])
    const [loader, setLoader]=useState(true)

    const params = useParams()
   const navigate = useNavigate()
   const {search} = useLocation()
   const searchParams =new URLSearchParams(search)
    const query = searchParams.get('query') || '';

    useEffect(()=>{

        async function fetchItems(){

            try {
                let slug = `items.json`
                if(params.category){
                    slug =`items-${params.category}.json`
                }

                if(query){
                    slug +=`?search=${query}`
                }
                const response = await axios.get(`https://my-react-app-1-5e9a9-default-rtdb.asia-southeast1.firebasedatabase.app/${slug}`)

                const data = response.data

                if(!data){
                    navigate("/404");
                    return;
                }

                const transformedData = data.map((item, index) => ({
                    
                        ...item,
                        id: index
                    
                }))
               
                setItems(transformedData)  
                
            } catch (error) {

                console.log("Error: ",error)
                alert("Something is wrong")
                
                
            }
           finally{
            setLoader(false)
           }

           
        }

        fetchItems();

        return () =>{

            setItems([])
            
        }
      
       
    }, [params.category,navigate,query])
    

    
   
    return(
        <>
        <div className="product-list">
          
            <div className="product-list--wrapper">
               

               {
                  items.map(item =>{
                    
                   return (
                   <ListItem 
                 
                   key ={item.id} 
                   data={item} 
                
                   />
                )

               })
               
               }


            </div> 
           
        </div>
            {loader && <Loader />}
        
        </>
    )
}

export default Products;