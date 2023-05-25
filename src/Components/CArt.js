
import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import classes from "./cart.module.css"
import { remove } from './STORE/StoreProducts';

const CArt = (props) => {
    const dispatch=useDispatch();
    const items=useSelector(state=>state.realProducts)
    let price=0;
    let res=items.forEach(element => {
        // console.log(element.price*element.quantity +(price));
        price=(Number(element.price)*Number(element.quantity))+price

        
    });

    const Remove=(id)=>{
        dispatch(remove(id));

    }
  return (
    <div className={classes.cont}>
    <div className={classes.close} onClick={props.onClick}>X</div>
    {items.map((item)=>{return <div className={classes.items} >
    <img src={item.images[0]}  width="200px" />
    <h5>{item.title}</h5>
     <h4> ₹ {item.price}</h4>
     <h6> {item.quantity}</h6>
     <button onClick={()=>Remove(item)}>Remove</button>

     </div>})} 
     <div className={classes.bottom}>
     <h4>TOTAL AMOUNT </h4>
     <h3>₹ {price}</h3>
     </div>

     <div className={classes.purchase}>
{items.length>0 &&<button onClick={()=>alert("SORRY WE ARE NOT ACCEPTING ORDERS ")}>Order now</button>}
     </div>
    </div>
  )
}

export default CArt