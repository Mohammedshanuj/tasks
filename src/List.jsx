import React, { useEffect, useState } from 'react'

function List({list}) {
    
    const[item,setItem]=useState([])
    useEffect(()=>{
        const data=list
        setItem(data)
    },[list])
    console.log(item)
  return (
    <div>hiiii
      {item && item.length>0 && item.map((l,index)=>{
        return <span  key={index}><h1>{l}</h1></span>

      })}
    </div>
  )
}

export default List
