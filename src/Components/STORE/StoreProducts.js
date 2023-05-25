import {createSlice} from "@reduxjs/toolkit";

const StoreProductSlice=createSlice({
    name:'real-products',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            const newDate=action.payload;
            const Exist=state.find(item=>item.id===action.payload.id);
            if(Exist){
                let index=state.findIndex(item=>item.id===action.payload.id);
                let qunt=state[index].quantity;
                state.splice(index,1);
                state.push({...newDate,quantity:qunt+1})
               
            }else{
          state.push(newDate)
            }
           
           
           
        },
        remove:(state,action)=>{
            let index=state.findIndex(item=>item.id===action.payload.id)
            let qunt=state[index].quantity;
            if(qunt>1){
                state.splice(index,1);
                state.push({...action.payload,quantity:qunt-1});

            }
            else{
                 return state.filter((item)=>item.id !== action.payload.id);

            }

           

        }
    }
})
export const {add,remove}=StoreProductSlice.actions;
export const StoreProductReducer=StoreProductSlice.reducer;