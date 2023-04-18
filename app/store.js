import toolkit from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";

const { configureStore } = toolkit;
const { reducer } = cakeSlice;

const store = configureStore({
    reducer: {
        cake: reducer,
    },
})

// module.exports = store;
export default store;
