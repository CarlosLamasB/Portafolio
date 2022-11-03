import React from "react";
import projects from './Projects.module.css';
import { useCtrl } from "../../context/context";
import { Elbow } from "../Pipe/Elbow";
import valve from "../Pipe/Valve.module.css"
const Projects = () =>{
  let {estado,dispatch}= useCtrl();
    //console.log(valvs);
let valve4On= ()=>{
if(estado.valve3){let [valve4,fulfilled2]=[true,true]
 return{payload:{valve4,fulfilled2}, type:'valve4'}}
 //console.log(estado)
 
}
    return (
        <div>
            {/* <Pipe/> */}
        {/* <div className={projects.glasscontainer}></div> */}
        <div className={projects.vessel} onClick={valve4On}>
      <div className ={`${projects.soporte} ${projects.sp1}`}></div>
        <div className ={`${projects.soporte} ${projects.sp2}`}></div>
        <div className={`${projects.bqlla} ${projects.b1}`}></div>
      <div className={`${projects.bqlla} ${projects.b2}`}></div>
      <div className={`${projects.cam} ${projects.c1}`}></div>
      <div className={`${projects.cam} ${projects.c2}`}></div>
      <div className={projects.hueco}></div>
      </div>
        {/* <button className={projects.button} onClick={ valve4On}>Change</button> */}
        <div style={{position:'absolute', top:'320%'}}>
        <Elbow/></div>
        <div style={{position:'absolute', top:'320%'}}>
        <span className ={valve.valvula} onClick={()=>{dispatch(valve4On())}}>
<div className={`${valve.bqlla} ${valve.b1}`}></div>
<div className={`${valve.bqlla} ${valve.b2}`}></div>
<div className={`${valve.cam} ${valve.c1}`}></div>
<div className={`${valve.cam} ${valve.c2}`}></div>
<div className={valve.brida}></div>
<div className={valve.sop}></div>
<div className={valve.eje}></div>
<div className={valve.rueda}></div>
<div className={valve.tuerca}></div>
</span></div>
        </div>
        
        )

}
export default Projects