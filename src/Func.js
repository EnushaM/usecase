import React from "react";
import { useState,useEffect } from "react";
import video from "./Pics/video.mp4";

function Func() {
    const[x,set_x]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            if(x==1){alert(" Opening Video ")}
            else if(x==15){alert("Half a way bending")}
            else if(x==36){alert("Video Ended"); }
            set_x(x+1)
        },1000)
    })
  return (
    <div>
        <center>
            <video width="400" height="400" controls>
                <source src={video}/>
            </video>           
            <h1>{x}</h1>
        </center>
    </div>
  )
}
export default Func;