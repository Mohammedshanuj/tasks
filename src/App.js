
import { useCallback, useState } from 'react';
import './App.css';
import Input from './Input';
import List from './List';
import Login from './Login';

// 1st and 2 nd Exercise
// function App() {
//   const[input,setInput]=useState('')
//   const[val,setVal]=useState(true)
//   const[Dark,setDark]=useState(true)
 
//   const InputHandler=(e)=>{
//    setInput(e.target.value)
//    console.log("rendering....")
//   }
//   return (
//     <div className="App">
//       <Input val={val} InputHandler={InputHandler} input={input} Dark={Dark}  />  
//        <button onClick={()=>{ setVal(!val)}}>toggle</button>
//        <div><button onClick={()=>{ setDark(!Dark)}}>Switch Theme</button></div>
//        <div>{input}</div>
      
//     </div>
//   )};
// export default App;



//////3red exercise
// function App() {
//   const num=0
//   const getitem=()=>{
//     return[num+1, num+2, num+3 ,num+4]
//   }
//   return (
//     <div>
//       <List list={getitem}></List>
//     </div>
//   )
// }

// export default App

function App() {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App

