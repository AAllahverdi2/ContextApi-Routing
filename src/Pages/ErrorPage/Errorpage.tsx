import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div>
    
    <div style={{height:"100vh", display:"flex", justifyContent:"center",alignItems:"center", backgroundColor:"blue", color:"white", flexDirection:"column"}}>
        <h1>This is Error Page.....</h1>
<button style={{backgroundColor:"transparent"}}>
        <Link style={{fontSize:"23px", textDecoration:"none", color:"white",}} to="/"> Go Home</Link>

</button>
    </div>
    </div>
  )
}

export default Errorpage
