
import axios from "axios";

const BaseURL = "https://dummyjson.com"

export async function getProducts(endPoint){
    
    try{
        const res = await axios.get(`${BaseURL}/${endPoint}`);
        if(res.status === 200){
            return res.data.products
            
        }
        else{
            return "Data Fetching Error"
        }
        

    }
    catch(err){
        return err
    }

}
export async function getProductByid(endPoint,id){
    
    try{
        debugger
        const res = await axios.get(`${BaseURL}/${endPoint}/${id}`);
        return res.data

    }
    catch(err){
        return err
    }

}
export async function SearchProduct(endPoint,term){
    
    try{
        debugger
        const res = await axios.get(`${BaseURL}/${endPoint}/search?q=${term}`);
        return res.data.products

    }
    catch(err){
        return err
    }
}
export async function Categories(endPoint, categories){
    
    try{
        debugger
        const res = await axios.get(`${BaseURL}/${endPoint}/${categories}`);
        return res.data

    }
    catch(err){
        return err
    }

}
export async function CategoryByName(endPoint,name){
    
    try{
        debugger
        const res = await axios.get(`${BaseURL}/${endPoint}/category/${name}`);
        return res.data?.products

    }
    catch(err){
        return err
    }

}