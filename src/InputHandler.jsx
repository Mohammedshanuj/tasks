import React, { useDeferredValue, useEffect, useMemo } from 'react'

function InputHandler({input}) {
    const Li=2000
    const deferredInput = useDeferredValue(input)
    const mem= useMemo(()=>{
        const l=[]
        for(let i=0;i<Li; i++){
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l

    },[deferredInput])
    useEffect(()=>{
        console.log(`input: ${input}\nDeferred: ${deferredInput}`);

    },[input,deferredInput])
  return mem
}

//export default InputHandler