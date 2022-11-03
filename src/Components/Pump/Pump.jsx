import React from "react";
import c from './Pump.module.css';
import { useCtrl } from "../../context/context";
const Pump = () =>{

return (
    <div className={c.visual}>
       <div className={c.voluta}></div>
    <div id ={c.carcaza}>
       <div className={c.succion}>
          
       </div>
      <div className={c.baseprop}>
        <div className={c.propeller}></div>
      
       <div className={`${c.propeller} ${c.p2}`}></div>
        <div className={`${c.propeller} ${c.p2}`}></div>
        <div className={`${c.propeller} ${c.p3}`}></div>
        <div className={`${c.propeller} ${c.p4}`}></div>
        <div className={`${c.propeller} ${c.p5}`}></div>
        <div className={`${c.propeller} ${c.p6}`}></div>
        <div className={`${c.propeller} ${c.p7}`}></div>
        <div className={`${c.propeller} ${c.p8}`}></div>
        
      </div>
    </div>
        
       <div className={c.descarga}></div>
    <div className='flow1'>
      <div></div>
    </div>
    <div className='flow1 f12'>
      <div></div>
    </div>
    <div className='flow2'></div>
    <div className='flow3'></div>
  </div>
)
}
 export default Pump