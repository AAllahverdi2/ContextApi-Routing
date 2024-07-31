import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Headerr = () => {
    return (
        <div>

            <div className="header">
      <div style={{marginRight:"400px", color:"white", fontSize:"22px"}}>
        AdminSide
      </div>
      
            <Link className='links' to="dashboard">DashBoard</Link>
            <Link className='links' to="add">Add</Link>
    </div>
        </div>
    )
}

export default Headerr
