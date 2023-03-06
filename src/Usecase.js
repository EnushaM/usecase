import React from "react";
import { useState } from "react";
function Usecase(){
    const[amt,setInc]=useState(20000)
    const[quant,inc]=useState(10000);
    //function increase()
    //{()=>inc(quant+10000)}
    return(
        <div>
            <center>
                <p>Price:{amt}</p>
                <button class="inc"onClick={()=>setInc(amt+10000)}>Increase Quantity</button>
            </center>
        </div>
    );
}
export default Usecase;