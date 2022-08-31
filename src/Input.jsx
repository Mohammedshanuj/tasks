import React from 'react'

function Input({val,InputHandler,input,Dark}) { 


  return (
    
    <div className={`${Dark ? `light` : `dark`}`}><label htmlFor="">Username : <input type="text/number"  title='any string' 
     placeholder='enter name' disabled={val}  value={input}  onChange={InputHandler} />  </label>
    
   </div>
  )
}

export default Input