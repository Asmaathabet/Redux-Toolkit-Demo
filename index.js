import store from "./app/store.js"
import cakeSlice from "./features/cake/cakeSlice.js"
import iceCreamSlice from "./features/icecream/iceCreamSlice.js"

const { actions: cakeActions } = cakeSlice;
const { actions: iceCreamActions } = iceCreamSlice;

console.log('inital state', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

// const cakeActions = cakeSlice.cakeActions
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(2))


unsubscribe()