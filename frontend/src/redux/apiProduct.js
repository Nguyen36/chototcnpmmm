import axios from "axios"

import { createFalse, createStart, createSuccess,deleteProductFalse, deleteProductStart, deleteProductSuccess,  editProductFalse,  editProductStart,  editProductSuccess,  get1ProductFalse,  get1ProductStart,  get1ProductSuccess,  getProductFalse, getProductStart, getProductSuccess } from "./productSlice";



export const createProduct = async(product,dispatch,navigate) =>{
    dispatch(createStart())
    console.log("id:",product._id)
   try{
       
       const res= await axios.post("/product/new",product)
       dispatch(createSuccess(res.data))
        navigate(-1)
       
           
   }catch(err){
       dispatch(createFalse())
   }
}

export const editProduct = async(product,dispatch,navigate,id,accessToken) =>{
    dispatch(editProductStart())
   try{
       
       const res= await axios.put("/product/edit/"+id,product,{
        headers: {token: `Bearer ${accessToken}`},})
       dispatch(editProductSuccess(res.data))
        //navigate('/login')
       
           
   }catch(err){
       dispatch(editProductFalse(err.response.data))
   }
}

export const getAllProduct = async(accessToken,dispatch) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/all",{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getProductSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const getCategory1 = async(dispatch,id) =>{
    dispatch(get1ProductStart())
   try{
       
       const res= await axios.get("/product/category/"+id)
       dispatch(get1ProductSuccess(res.data))
    
   }catch(err){
       dispatch(get1ProductFalse())
   }
}

// export const getLengthProduct = async() =>{
    
//    try{
       
//        const res= await axios.get("/product/getLength")
       
//         return res
//    }catch(err){
//      return err
//    }
// }

export const getProductSearch = async(dispatch) =>{
    
    try{
        
        const res= await axios.get("/product/search")
         return res
    }catch(err){
      return err
    }
 }


export const getTop5Product = async(dispatch) =>{
    dispatch(get1ProductStart())
   try{
       
       const res= await axios.get("/product/getTop5")
       dispatch(get1ProductSuccess(res.data))
    
   }catch(err){
       dispatch(get1ProductFalse())
   }
}

export const getProductSeller = async(accessToken,dispatch,id) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/getbyseller/"+id)
       dispatch(getProductSuccess(res.data))
    
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const get1Product = async(accessToken,dispatch,id) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/get/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getProductSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getProductFalse())
   }
}

export const get1ProductBySlug = async(dispatch,slug) =>{
    dispatch(getProductStart())
   try{
       
       const res= await axios.get("/product/getbyslug/"+slug)
       dispatch(getProductSuccess(res.data))
           
   }catch(err){
       dispatch(getProductFalse())
   }
}


export const deleteProduct = async(accessToken,dispatch,id) =>{
    dispatch(deleteProductStart())
   try{
       const res= await axios.delete(`/product/delete/${id}`,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(deleteProductSuccess(res.data))
    
       
           
   }catch(err){
        dispatch(deleteProductFalse(err.response.data))
   }

}


