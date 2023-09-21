import { useEffect, useState } from "react"
import Navigation from "./Navigation"
import ProductList from "./ProductList"
import Footer from "./Footer"



const Home=()=>{
    const [search,setSearch]=useState('')
    const [data, setData] = useState([]);

    useEffect(()=>{
        if(search.length!==0){
         const products=(data.filter(product=>{
            if(product.description.includes(search) || product.category.includes(search)){
                return product
            }
        }))
        if(products.length===0){
            alert("No items....")
        }
        else{
            setData(products)
        }

        }
        else{
            fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((response) => setData(response));

        }
    },[search])

    return <div>
        <Navigation setSearch={setSearch}/>
        <ProductList data={data}/>
        <Footer/>
       
    </div>
}

export default Home