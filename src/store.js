import { configureStore } from "@reduxjs/toolkit";

import postSlice from "./states/DataSlice"

const store = configureStore({
    reducer: {
        Post: postSlice
    }
})

export default store;