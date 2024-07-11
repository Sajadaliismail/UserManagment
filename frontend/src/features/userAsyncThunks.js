import { createAsyncThunk } from "@reduxjs/toolkit";

const port = process.env.REACT_APP_CORS;

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (_, { rejectWithValue }) => {  
      try {
        const response = await fetch(`${port}/users`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) {
          const data = await response.json();
          return rejectWithValue(data.error);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching users:', error);
        return rejectWithValue(error.message); // Assuming error.message is meaningful here
      }
    }
  );

export const addUser = createAsyncThunk(
    'users/addUser',
    async (userData,{rejectWithValue,dispatch})=>{
        try {
            const response = await fetch(`${port}/adduser`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(userData),
            })
            const data = await response.json()
            dispatch(getUsers())
            return data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.error)
        }
    }
)

// export const deleteuser = createAsyncThunk(
//     'users/deleteuser',
//     async (userData,{rejectWithValue})=>{
//         try {
//          const response = await fetch(`${port}/signup`,{
//             method:'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(userData)
//          })
//          const data = await response.json()
//         if(data.error){
//             return rejectWithValue(data.error)
//         }
//          return data;
//         } catch (error) {
//             console.log(error);
//             return rejectWithValue(error.error)
//         }
//     }
// )

