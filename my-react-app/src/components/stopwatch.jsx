import React from 'react'
import {useState} from 'react'
const Stopwatch = () =>{  
    const[isrunning,setIsrunning] = useState(false);  
    function handlerestart(){
        settime(0);
        setIsrunning(false);
    }
    function handleStart(){
        setIsrunning((pre)=>!pre)
    }
    useEffect(()=>{
              
        setInterval(()=>{
            setTime(time+1)

        },1000)
    })

    return(
        <div>
            <h1>MY STOP WATCH APP</h1>
            <h1>Timer</h1><br></br>
            <button onClick={handleStart}>{isrunning?'Stop':'Start'}</button>
            <button onClick={handlerestart}>Reset</button>
        </div>
    )
    }
    export default Stopwatch