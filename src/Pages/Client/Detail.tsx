
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
const Detail = () => {
    const [detail,setdetail]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
            setdetail(res.data)
        })
    })
  return (
    <div className='detail'>
     
      <div className='detail_all'>
        <img src={detail.image} alt="" />
        <p>{detail.title}</p>
      
    </div>
    </div>
  )
}

export default Detail
