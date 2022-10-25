import {createSlice} from "@reduxjs/toolkit"

 const cartSlice = createSlice({
    name: "cart",
    initialState:{
        carts:{
            allCart: [],
            isFetching:false,
            error:false,
        },
        msg:"",
    },
    reducers:{
        addCartStart:(state) =>{
            state.carts.isFetching= true
        },
        addCartSuccess: (state,action) =>{
            state.carts.isFetching=false;
            state.carts.allCart=action.payload;
        },
        addCartFalse: (state) =>{
            state.carts.isFetching=false
            state.carts.error=true
        },
   


        deleteCartStart:(state) =>{
            state.carts.isFetching= true
        },
        deleteCartSuccess: (state,action) =>{
            state.carts.isFetching=false;
            state.carts.allCart=action.payload;
        },
        deleteCartFalse: (state,action) =>{
            state.carts.isFetching=false
            state.carts.error=true
            state.msg = action.payload
        },
     
    },
})

export const {
    deleteCartStart,
    deleteCartSuccess,
    deleteCartFalse,
    addCartStart,
    addCartSuccess,
    addCartFalse,
  
} = cartSlice.actions

export default cartSlice.reducer