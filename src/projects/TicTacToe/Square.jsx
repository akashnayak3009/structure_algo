import React from 'react'

const Square = (props) => {
  return (
    <div className=' square' 
        onClick={props.onClick}
      style={{
        border:"2px solid red", 
        width:"100%", 
        height:"100px", 
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}
    >
        <h1>{props.value}</h1>
    </div>
  )
}

export default Square