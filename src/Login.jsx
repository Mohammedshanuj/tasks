import React, { useEffect, useRef } from 'react'

function Login() {
    const refer=useRef()
    useEffect(()=>{
        refer.current.focus()
    })
  return (
    <div className='App'>
      <div><input type="text" placeholder='enter name' required  ref={refer}/></div>
      <div><input type="password" name="" id="" placeholder='enter password' required /></div>
      <button onClick={}>Login</button>
    </div>
  )
}

export default Login
