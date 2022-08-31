import React, { useReducer } from 'react'

function LoginPage() {
    const initialstate={
        username:'',
        password:'',
        enablelogin:false
    }

    const Reducer=(prevstate,action)=>{
        switch(action.type){
            case "UN":{
                return{...prevstate,
                username:action.value,
                enablelogin: prevstate.username.length>8 && prevstate.password.length>8}
            }
            case "PD":{
                return{...prevstate,
                password:action.value,
                enablelogin: prevstate.username.length>8 && prevstate.password.length>8}
            }
            default :return prevstate
        }
       
    }

    const onInput=(e,type)=>{
        if(e.type==='change'){
            if(type==='un'){
               dispatch({
                type:"UN",
                value:e.target.value
                })

            }
            else if(type==='pd'){
                dispatch({
                    type:"PD",
                    value:e.target.value
                    })

            }
        }
    }

    const[state,dispatch]=useReducer(Reducer,initialstate)
    


  return (<div><div className='logtxt'>LOGIN PAGE</div><br></br>
    <div><label>Username:  <input type="text" onChange={(e)=>{onInput(e,'un')}} value={state.username} placeholder="enter name"/></label></div>
    <div><label>Password :  <input type="text" onChange={(e)=>{onInput(e,'pd')}} value={state.password} placeholder="enter password"/></label></div>
    <button disabled={!state.enablelogin} >Login</button>
       
    </div>
  )
}

export default LoginPage