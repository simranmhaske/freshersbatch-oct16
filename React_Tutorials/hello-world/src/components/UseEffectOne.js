import React, {useState, useEffect} from 'react'

function UseEffectOne(){

    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("updating document title")
        document.title=`You clicked ${count} times`
    },[count])
    return(
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}></input>
            <button onClick={()=>setCount(count+1)}>Count {count} times</button>
        </div>
    )
}
export default UseEffectOne