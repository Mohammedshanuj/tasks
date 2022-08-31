import React, { useDeferredValue, useEffect, useState } from 'react'
//import InputHandler from './InputHandler'

function LoginHandler() {
    const[input,setInput]=useState('')
    const[fetch,setFetch]=useState("")
    const eventHandler=(e)=> {
        setInput(e.target.value)
    }
    const search=()=>{
      console.log("search logic")
      setFetch(Math.random())
    }
    const definput=useDeferredValue(input)
    useEffect(search,[input])
    
    //console.log(`input is: ${input} defred inpit is : ${definput}`);
  return (
    <div>
       <label>Username: <input type="text" value={input} onChange={eventHandler} /></label>
       <div>input is {input}</div>
       <div>deferred input is {definput}</div>
        {/* <InputHandler input={input}/> */}
    </div>
  )
}

export default LoginHandler