import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const fetchedPosts = await response.json()
        return fetchedPosts
    }
)
const postSlice = createSlice({
    name: "posts",
    initialState: {
        list: [],
        loading: false
    },
    reducers: {},
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = payload
        },
        [getPosts.rejected]: (state) => {
            state.loading = false
        }
    }
})

export default postSlice.reducer;