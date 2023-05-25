import {configureStore} from "@reduxjs/toolkit"
import { ProductReducer } from "./Productsslice"
import { StoreProductReducer } from "./StoreProducts";
const store=configureStore({
    reducer:{
        Products:ProductReducer,
        realProducts:StoreProductReducer,
    }
})

export default store;