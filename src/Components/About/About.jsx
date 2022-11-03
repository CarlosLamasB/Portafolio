import React from "react";
import Pipe from "../Pipe/Pipe";
import about from "./About.module.css"
import { useCtrl } from "../../context/context";
import { Elbow } from "../Pipe/Elbow";
const About = () =>{
    let {estado,dispatch}= useCtrl();
    
let valve2On= ()=>{
if(!estado.valve2){ let valve2=true 
  
  console.log(estado)
return{payload:valve2, type:'valve2'}

}

 }
    return (
        <div>
          <Pipe/> 
            <Elbow/>
        <div></div>
        <button onClick={()=>{dispatch(valve2On())}}>Change</button>
        <div className={about.vessel}>
      <div className ={`${about.soporte} ${about.sp1}`}></div>
        <div className ={`${about.soporte} ${about.sp2}`}></div>
        <div className={`${about.bqlla} ${about.b1}`}></div>
      <div className={`${about.bqlla} ${about.b2}`}></div>
      <div className={`${about.cam} ${about.c1}`}></div>
      <div className={`${about.cam} ${about.c2}`}></div>
      <div className={about.hueco}></div>
    </div>


        </div>
        
        )

}
export default About