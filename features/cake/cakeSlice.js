import toolkit from "@reduxjs/toolkit";

const { createSlice } = toolkit;

const initialState = {
    numOfCakes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        },
    },
})

// module.exports = cakeSlice.reducer
// module.exports.cakeActions = cakeSlice.actions

export default cakeSlice;
// module.defult.exports = {
//     cakeReducers: cakeSlice.reducer,
//     cakeActions: cakeSlice.actions
// }