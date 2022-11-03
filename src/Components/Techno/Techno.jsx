import React from "react";
import techno from './Techno.module.css';
import { useCtrl } from "../../context/context";
import { Elbow } from "../Pipe/Elbow";
//import Valve from "../Pipe/Valve"
import valve from "../Pipe/Valve.module.css"
const Techno = () =>{
    let {estado,dispatch}= useCtrl();
    //console.log(valvs);
let valve3On= ()=>{
if(estado.valve2){//estado.valve3=true;
   //estado.fulfilled1=true;
   let [valve3,fulfilled1]=[true,true]
   return{payload:{valve3,fulfilled1}, type:'valve3'}
  }
  
  }
    return (
        <div>
            {/* <Pipe/> */}
        
        <div className={techno.vessel} >
      <div className ={`${techno.soporte} ${techno.sp1}`}></div>
        <div className ={`${techno.soporte} ${techno.sp2}`}></div>
        <div className={`${techno.bqlla} ${techno.b1}`} onClick={()=>{dispatch(valve3On())}}></div>
      <div className={`${techno.bqlla} ${techno.b2}`}></div>
      <div className={`${techno.cam} ${techno.c1}`}></div>
      <div className={`${techno.cam} ${techno.c2}`}></div>
      <div className={techno.hueco}></div>
    </div>
    <div style={{position:'absolute', top:'200%'}}>
        <Elbow/></div>
        <button className={techno.button} onClick={()=>{dispatch(valve3On())}}>Change2</button>
        <span className ={valve.valvula} onClick={()=>{dispatch(valve3On())}}>
<div className={`${valve.bqlla} ${valve.b1}`}></div>
<div className={`${valve.bqlla} ${valve.b2}`}></div>
<div className={`${valve.cam} ${valve.c1}`}></div>
<div className={`${valve.cam} ${valve.c2}`}></div>
<div className={valve.brida}></div>
<div className={valve.sop}></div>
<div className={valve.eje}></div>
<div className={valve.rueda}></div>
<div className={valve.tuerca}></div>
</span>



        </div>
        
        )

}
export default Techno