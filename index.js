import store from "./app/store.js"
import cakeSlice from "./features/cake/cakeSlice.js"

const { actions: cakeActions } = cakeSlice;

console.log('inital state', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

// const cakeActions = cakeSlice.cakeActions
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))


unsubscribe()