import store from "./app/store.js"
import cakeSlice from "./features/cake/cakeSlice.js"

const { actions } = cakeSlice;

console.log('inital state', store.getState())
const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

// const cakeActions = cakeSlice.cakeActions
store.dispatch(actions.ordered())
store.dispatch(actions.ordered())
store.dispatch(actions.ordered())
store.dispatch(actions.restocked(3))


unsubscribe()