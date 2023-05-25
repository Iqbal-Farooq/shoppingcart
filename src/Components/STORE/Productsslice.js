
import {createSlice} from "@reduxjs/toolkit"

export const STATUSES =Object.freeze({
    IDLE:"idle",
    LOADING:"loading",
    ERROR:"Error"

})
const initialstate={
        items:[],
        status:STATUSES.IDLE,
    }

const ProductSlice=createSlice({
    name:"products",
    initialState:initialstate,
    reducers:{
        setData:(state,action)=>{
           console.log("rdx",action.payload)
            state.items=action.payload;
        },
        setStatus:(state,action)=>{
            state.status=action.payload;
        },

    }
})
export const {setData,setStatus} = ProductSlice.actions;
export const ProductReducer= ProductSlice.reducer;


//th

 export function GetData(){
    return async function GetData(dispatch, getstate){
        dispatch(setStatus(STATUSES.LOADING))

        try{
              const res= await fetch('https://dummyjson.com/products')
        const data= await res.json();
        
          dispatch(setData(data.products))
          dispatch(setStatus(STATUSES.IDLE))

        }catch (err){
             dispatch(setStatus(STATUSES.ERROR));

        }
      

    }
}