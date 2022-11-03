import React from "react";
import contact from './Contact.module.css';
import { useCtrl } from "../../context/context";
import { Elbow } from "../Pipe/Elbow";
const Contact = () =>{
    let valvs= useCtrl();
    return (
        <div>
            {/* <Pipe/> */}
        {/* <div className={contact.glasscontainer}></div> */}
        <div className={contact.vessel} >
      <div className ={`${contact.soporte} ${contact.sp1}`}></div>
        <div className ={`${contact.soporte} ${contact.sp2}`}></div>
        <div className={`${contact.bqlla} ${contact.b1}`}></div>
      <div className={`${contact.bqlla} ${contact.b2}`}></div>
      <div className={`${contact.cam} ${contact.c1}`}></div>
      <div className={`${contact.cam} ${contact.c2}`}></div>
      <div className={contact.hueco}></div>
      </div>
      <div style={{position:'absolute', top:'440%'}}>
        <Elbow/></div>
        
        </div>
        
        )

}
export default Contact