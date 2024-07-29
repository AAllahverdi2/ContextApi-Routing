import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import Card from './Card'

const Cards = () => {
    const {data}=useContext(Maincontext)
  return (
    <div className='container' style={{marginTop:"30px"}}>
        <div className="row">
            {
                data.map((item,index)=>{
                    return(<Card key={index} item={item}/>)
                })
            }
        </div>
      
    </div>
  )
}

export default Cards
