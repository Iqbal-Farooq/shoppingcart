import React from 'react';

import {useEffect} from "react"
import classes from "./Product.module.css"
import { STATUSES } from './STORE/Productsslice';
import {useSelector,useDispatch} from 'react-redux'
import { GetData } from './STORE/Productsslice'
import { add } from './STORE/StoreProducts';
// import { ADDACTION } from './STORE/StoreProducts';

const Product = () => {
    const dispatch=useDispatch();
    const status=useSelector(state=>state.Products.status)
     const data=useSelector(state=>state.Products.items);
    //  console.log(data.total+" GS");
    //  console.log(data.products.products[2].title+" GSt");
     console.log( +"LLL")
     useEffect(()=>{
        dispatch(GetData());
     },[])

     const stylee={
      positon:"absolute",
      top:"3rem",
      marginTop:"8rem"
     }

     const AddtoCart=(item)=>{
      dispatch(add({...item,quantity:1}));
console.log(item);
     }

     if(status===STATUSES.ERROR){
      return <h1 className={classes.error}>something went wrong !!</h1>
     }
     if(status===STATUSES.LOADING){
      return <h1 className={classes.error}>Loading 🚗🚗🚗</h1>
     }
     
  return (
    <div >
    
    
   
    {data.map((i)=><div className={classes.cards}>
    <div className={classes.images} > 
     <img src={i.images[0]} width="250px" />
    </div>
    <div className={classes.category}> 
      {i.category}
    </div>
    
    

    <div className={classes.brand}> <h3>Brand  {i.brand}</h3></div>

    <div className={classes.title}><span>{i.title}</span></div>
    <div className={classes.price}>  ₹ <span>{i.price}</span></div>

    <div className={classes.rating}> 
      <p> Rating : {i.rating}</p>
    </div>
   
    <div className={classes.discription}> 
     <details>
 <summary>Description</summary>
 <p>{i.description}</p>
    </details>
    </div>
   
   
   <div className={classes.btn}>
   <button onClick={()=>AddtoCart(i)}>ADD TO CART</button>
    </div>
    

    
  
   
    
   
    
    {/* <img src={i.thumbnail} width="30px"/> */}
    </div>)}
    </div>
  )
}

export default Product