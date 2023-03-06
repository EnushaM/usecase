import React from "react";
import { useState,useEffect } from "react";
import video from "./Pics/video.mp4";

function Func(){
    const[a,setInc]=useState(0);
    const[sec,setSeconds]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{setInc(a+1);},1000);
        //setTimeout(() => alert('Initial timeout!'),);

        //const interval = setInterval(() => {
          //  setSeconds(seconds => seconds + 1);}, 1000);
          //return () => clearInterval(interval);
        },[])
    return(
        <div>
            <center>
                <video src={video}/>
                <h1>{a}</h1>
            </center>
        </div>
    );
}
export default Func;