import toolkit from "@reduxjs/toolkit";
import axios from 'axios';

const { createSlice, createAsyncThunk } = toolkit;

const initialState = {
    loading: true,
    users: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types 
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.data.map((user) => user.id);
        })
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
            console.log(action.payload, "action ---> payload")
            console.log(action, "action")
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})




export default userSlice;

