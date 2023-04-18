import toolkit from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";
import iceCreamSlice from "../features/icecream/iceCreamSlice.js";

const { configureStore } = toolkit;
const { reducer: cakeReducers } = cakeSlice;
const { reducer: iceCreamReducers } = iceCreamSlice;

const store = configureStore({
    reducer: {
        cake: cakeReducers,
        icecream: iceCreamReducers
    },
})

// module.exports = store;
export default store;
