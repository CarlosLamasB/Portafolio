import React from "react"
import valve from "./Valve.module.css"
const Valve =()=>{return (
<span className ={valve.valvula}>
<div className={`${valve.bqlla} ${valve.b1}`}></div>
<div className={`${valve.bqlla} ${valve.b2}`}></div>
<div className={`${valve.cam} ${valve.c1}`}></div>
<div className={`${valve.cam} ${valve.c2}`}></div>
<div className={valve.brida}></div>
<div className={valve.sop}></div>
<div className={valve.eje}></div>
<div className={valve.rueda}></div>
<div className={valve.tuerca}></div>
</span>)}
export default Valve