
import React from 'react'
import classes from "./Nav.module.css"
import { useSelector } from 'react-redux'
import Modal from './Portals'
import { useState } from 'react'
import CArt from './CArt'
const Nav = () => {
  const [show,setShow]=useState(false)
  
  const items=useSelector(state=>state.realProducts);
  let length=0;
  let res=items.forEach(element => {
    length=element.quantity+length;
    
  });
  const Display =()=>{
    setShow(prev => !prev);
  }
  return (
    <div className={classes['nav-container']}>

    <div className={classes.logo} >
        SHOPPING
    </div>

    <div className={classes.cart} onClick={Display}>
        CART : {length}
    </div>
       
      {show && <Modal ><CArt onClick={Display}/> </Modal>}
    </div>
  )
}

export default Nav;