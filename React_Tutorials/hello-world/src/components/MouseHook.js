import React, {useState,useEffect} from 'react'

function MouseHook(){
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)

    const mouseSet=e=>{
        console.log("Inside mouseSet")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("inside useEffect")
        window.addEventListener('mousemove',mouseSet)
    },[])
    return(    
        <div>
            X-{X} 
            Y-{Y}
        </div>

    )
}
export default MouseHook