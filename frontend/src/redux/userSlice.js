import {createSlice} from "@reduxjs/toolkit"

 const userSlice = createSlice({
    name: "user",
    initialState:{
        users:{
            allUsers:null,
            isFetching:false,
            error:false,
        },
        msg:"",

    },
    reducers:{
        getUsersStart:(state) =>{
            state.users.isFetching= true
        },
        getUsersSuccess: (state,action) =>{
            state.users.isFetching=false;
            state.users.allUsers=action.payload;
        },
        getUsersFalse: (state) =>{
            state.users.isFetching=false
            state.users.error=true
        },


        deleteUserStart:(state) =>{
            state.users.isFetching= true
        },
        deleteUserSuccess: (state,action) =>{
            state.users.isFetching=false;
            state.msg=action.payload;
           
        },
        deleteUserFalse: (state,action) =>{
            state.users.isFetching=false
            state.users.error=true
            state.msg = action.payload
        },
     

        editUserStart:(state) =>{
            state.users.isFetching= true
        },
        editUserSuccess: (state,action) =>{
            state.users.isFetching=false;
            state.users.allUsers=action.payload;
        },
        editUserFalse: (state,action) =>{
            state.users.isFetching=false
            state.users.error=true
            state.msg = action.payload
        },

    },
})

export const {
    getUsersStart,
    getUsersFalse,
    getUsersSuccess,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFalse,
    editUserStart,
    editUserSuccess,
    editUserFalse,
} = userSlice.actions

export default userSlice.reducer