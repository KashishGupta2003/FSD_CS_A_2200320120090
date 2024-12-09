import React from 'react'
import { useref } from 'react';
const Refex  = () => {
    let a=5;
    const refcount= useRef(0);
    console.log("object rendered")
    function handleref (){
        refcount.current ++;
    console.log('refcount=',refcount.current)
    if(refcount.current==a)
        alert("counter="+refcount.current)
}
return (
    <div>
        <h1>Pefcount={refcount.current}</h1>
        <button onClick={handleref}>Increament</button>
        <p>(a)</p>
    </div>
)
}