import {createSlice} from "@reduxjs/toolkit"

 const oderSlice = createSlice({
    name: "oder",
    initialState:{
        oders:{
            allOder:null,
            isFetching:false,
            error:false,
        },
        create:{
            isFetching:false,
            error:false,
            success:false,
        },
        full:{
            detail:[],
            isFetching:false,
            error:false,
        },
        msg:"",

    },
    reducers:{
        getOderStart:(state) =>{
            state.oders.isFetching= true
        },
        getOderSuccess: (state,action) =>{
            state.oders.isFetching=false;
            state.oders.allOder=action.payload;
        },
        getOderFalse: (state) =>{
            state.oders.isFetching=false
            state.oders.error=true
        },


        deleteOderStart:(state) =>{
            state.oders.isFetching= true
        },
        deleteOderSuccess: (state,action) =>{
            state.oders.isFetching=false;
            state.msg=action.payload;
        },
        deleteOderFalse: (state,action) =>{
            state.oders.isFetching=false
            state.oders.error=true
            state.msg = action.payload
        },
        createStart:(state) =>{
            state.create.isFetching= true
        },
        createSuccess: (state) =>{
            state.create.isFetching=false;
            state.create.error=false;
            state.create.success=true;
        },
        createFalse: (state) =>{
            state.create.isFetching=false
            state.create.error=true
            state.create.success=false;
        },

        editOderStart:(state) =>{
            state.oders.isFetching= true
        },
        editOderSuccess: (state,action) =>{
            state.oders.isFetching=false;
            state.msg=action.payload;
        },
        editOderFalse: (state,action) =>{
            state.oders.isFetching=false
            state.oders.error=true
            state.msg = action.payload
        },

        getFullStart:(state) =>{
            state.full.isFetching= true
        },
        getFullSuccess: (state,action) =>{
            state.full.isFetching=false;
            state.full.detail=action.payload;
        },
        getFullFalse: (state) =>{
            state.full.isFetching=false
            state.full.error=true
        },

    },
})

export const {
    getOderStart,
    getOderFalse,
    getOderSuccess,
    deleteOderStart,
    deleteOderSuccess,
    deleteOderFalse,
    editOderStart,
    editOderSuccess,
    editOderFalse,
    createStart,
    createSuccess,
    createFalse,
    getFullStart,
    getFullSuccess,
    getFullFalse,
} = oderSlice.actions

export default oderSlice.reducer