import classes from "./potrals.module.css"
import  ReactDOM  from 'react-dom'
const Backdrop=props=>{ return <div className={classes.backdrop} />}


const ModalOverlay=props=>{
    return<div className={classes.modal} >
        <div className={classes.content}>{props.children}</div>
    </div>
}
const p1=document.getElementById('overlay');


const Modal=(props)=>{
return <>
   {ReactDOM.createPortal(<Backdrop />,p1)}
   {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>,p1 )}
</>


}
export default Modal;