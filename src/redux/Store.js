import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RootReducer  from "./Reducer"

const rootReducer = combineReducers({
    app: RootReducer
})


const Store = configureStore({
    reducer: rootReducer
})


export default Store