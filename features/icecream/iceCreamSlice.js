import toolkit from "@reduxjs/toolkit";

const { createSlice } = toolkit;

const initialState = {
    numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        },
    },
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.numOfIceCreams--
        },
    },
})

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions

export default iceCreamSlice;
// module.defult.exports = {
//     cakeReducers: cakeSlice.reducer,
//     cakeActions: cakeSlice.actions
// }