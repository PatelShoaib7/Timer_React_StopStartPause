import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export const Timer = () => {
    const [ count , setCount ] = useState(0)

    const timerRef = useRef(null)
    useEffect(()=>
    {
        return stopTimer
    },[])

    const startTimer =()=>
    {
        if(timerRef.current  !==null) 
         return 
        timerRef.current = setInterval(()=>
        {
            setCount((count)=> count + 1)
        },1000)
     
    }
    const stopTimer =()=>
    {
        clearInterval(timerRef.current)
        timerRef.current = null;
    }
    const resetTimer =()=>
    {
        stopTimer()
        setCount(0)
    }
  return (
    <div style={{border:'1px solid red',
                 width:'400px',
                 margin:"auto",
                 marginTop:'30px',
                 boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                 borderRadius:'13px'

    }}>
      <div style={{boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px', width:'50%', margin:'auto', borderRadius:'12px'}}>
                <h1>Count : {count} </h1>
    </div>
        
      <button  style={{width:'100px' , height:'35px', borderRadius:'10px' , backgroundColor:'white' , fontSize:'20px' ,margin:'15px',
       boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'
      }} 
       
       onClick={startTimer}>Start</button>
      
      <button  style={{width:'100px' , height:'35px', borderRadius:'10px' , backgroundColor:'white' , fontSize:'20px' ,margin:'15px',  boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'}} onClick={stopTimer}>Stop</button>

      <button  style={{width:'100px' , height:'35px', borderRadius:'10px' , backgroundColor:'white' , fontSize:'20px' ,margin:'15px',  boxShadow: 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'}} onClick={resetTimer}>Reset</button>
    </div>
  )
}
