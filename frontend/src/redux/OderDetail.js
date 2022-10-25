import axios from "axios"




export const createOderDetail = async(oder) =>{
   try{
       
       const res= await axios.post("/oderdetail/new",oder)
       return res
        
           
   }catch(err){
  
   }
}

export const editOderDetail = async(oder,id,) =>{
   
   try{
       
       const res= await axios.put("/oderdetail/edit/"+id,oder)
      return res
       
           
   }catch(err){
    
   }
}

export const getAllOderDetail = async() =>{
    
   try{
       
       const res= await axios.get("/oderdetail/all")
       return res
    
       
           
   }catch(err){
     
   }
}



export const deleteOderDetail = async(id) =>{
    
   try{
       
       const res= await axios.delete("/oderdetail/delete/"+id)
      return res
    
       
           
   }catch(err){
       
   }

}

// export const getLengthOderDetail = async() =>{
    
//     try{
        
//          const res= await axios.get("/oderdetail/getLength")
//          return res
        
//     }catch(err){
//       return err
//     }
//  }



