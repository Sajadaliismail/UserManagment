import { createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers } from "./userAsyncThunks";

const initialState = {
    users : [],
    columns : [
        { field: 'id', headerName: 'ID'},
        { field: 'first_name', headerName: 'First name' },
        { field: 'last_name', headerName: 'Last name'},
        { field: 'age', headerName: 'Age', type: 'number'},
        { field: 'email', headerName: 'Email'},
        { field:'gender', headerName:'Gender' }
      ],
    error:'',
    open:false
}
const userSlice= createSlice({
    name:'users',
    initialState,
    reducers: {
        clearError:(state)=>{
            state.error = ''
        },
        setError:(state,action)=>{
            state.error = action.payload
        },
        setClose:(state)=>{
            state.open = false
        },
        setOpen:(state)=>{
            state.open=!state.open
        }
        
    },
    extraReducers :(builder)=>{
        builder
        .addCase(addUser.pending,(state)=>{
            state.status = 'loading'
            state.error = ''
        })
        .addCase(addUser.fulfilled,(state,action)=>{
            state.status = 'fulfilled'
        })
        .addCase(addUser.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error = action.payload
        })
        .addCase(getUsers.pending,(state,action)=>{
            state.status = 'rejected'
            state.error = ''
        })
        .addCase(getUsers.fulfilled,(state,action)=>{
            state.status = 'fulfilled'
            state.users = action.payload
            state.error = ''
        })
        .addCase(getUsers.rejected,(state,action)=>{
            state.status = 'rejected'
            // state.error = action.payload.error
        })
}
})
export const {clearError,setError,setClose,setOpen} = userSlice.actions
export default userSlice.reducer