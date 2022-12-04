import { axiosClient as axios } from '../api';

import { createFalse, createStart, createSuccess,deleteOderFalse, deleteOderStart, deleteOderSuccess,  editOderFalse,  editOderStart,  editOderSuccess,  getFullFalse,  getFullStart,  getFullSuccess,  getOderFalse, getOderStart, getOderSuccess } from "./oderSlice";






export const createOder = async(oder,dispatch) =>{
    dispatch(createStart())
   try{
       
       const res= await axios.post("/oder/new",oder)
       dispatch(createSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(createFalse())
   }
}

export const editOder = async(oder,dispatch,id,accessToken) =>{
    dispatch(editOderStart())
   try{
       
       const res= await axios.put("/oder/edit/"+id,oder,{
        headers: {token: `Bearer ${accessToken}`},})
       dispatch(editOderSuccess(res.data))
       
           
   }catch(err){
       dispatch(editOderFalse(err.response.data))
   }
}

export const getAllOder = async(accessToken,dispatch) =>{
    dispatch(getOderStart())
   try{
       
       const res= await axios.get("/oder/all",{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getOderSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getOderFalse())
   }
}
export const getFull = async(accessToken,dispatch,id) =>{
    dispatch(getFullStart())
   try{
       
       const res= await axios.get("/oder/getFull/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getFullSuccess(res.data))
    
       
           
   }catch(err){
       console.log(err)
       dispatch(getFullFalse())
   }
}
export const getBySeller = async(accessToken,dispatch,id) =>{
    dispatch(getOderStart())
   try{
       
       const res= await axios.get("/oder/getseller/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getOderSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getOderFalse())
   }
}
export const getByCustomer = async(accessToken,dispatch,id) =>{
    dispatch(getOderStart())
   try{
       
       const res= await axios.get("/oder/getbyid/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getOderSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getOderFalse())
   }
}
export const get1 = async(accessToken,dispatch,id) =>{
    dispatch(getOderStart())
   try{
       
       const res= await axios.get("/oder/get/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(getOderSuccess(res.data))
    
       
           
   }catch(err){
       dispatch(getOderFalse())
   }
}



export const deleteOder = async(accessToken,dispatch,id) =>{
    dispatch(deleteOderStart())
   try{
       
       const res= await axios.delete("/oder/delete/"+id,{
           headers: {token: `Bearer ${accessToken}`},
       })
       dispatch(deleteOderSuccess(res.data))
    
       
           
   }catch(err){
        dispatch(deleteOderFalse(err.response.data))
   }

}

// export const getLengthOder = async() =>{
    
//     try{
        
//         const res= await axios.get("/oder/getLength")
//         return res

//     }catch(err){
//       return err
//     }
//  }



