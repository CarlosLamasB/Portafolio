import React from "react";
import pipe from './Pipe.module.css';
import { useCtrl } from "../../context/context";
const Pipe = ()=>{
   
    let {estado}= useCtrl();
    
    const real=React.useRef(null)
   
        React.useEffect(()=>{
            if(estado.fulfilled1){//controlar esto para que solo funcione una unica vez
            const ctx = real.current.getContext("2d");
            ctx.moveTo(0, 0);
            ctx.lineTo(200, 100);
            ctx.stroke();}},[estado.fulfilled1])
        console.log(estado)
        
return (
<div className={pipe.visual} >
<div className={pipe.succion}>
    <canvas ref={real}></canvas>
</div>


</div>

)
}
export default Pipe