import toolkit from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";

const { configureStore } = toolkit;
const { reducer: cakeReducers } = cakeSlice;

const store = configureStore({
    reducer: {
        cake: cakeReducers,
    },
})

// module.exports = store;
export default store;
