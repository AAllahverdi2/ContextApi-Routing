import React, { useContext } from 'react'
import Maincontext from '../../Context/Context'
import "./Table.css"
const Table = () => {
    const {data,RemoveData,handlerSearch,handlerFilter}=useContext(Maincontext)
  return (
    <div>
      <input style={{margin:"10px"}} type="text" onChange={(e)=>{
        handlerSearch(e.target.value)
      }}  placeholder='search By name'/>


      <select name="" id="" onChange={(e)=>{
        handlerFilter(e)
      }}>
        <option value="df">default</option>
        <option value="10">10</option>
        <option value="01">01</option>
      </select>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">Price</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,index)=>{
            return(
                <tr key={index}>
                <th scope="row"><img src={item.image} alt="" /></th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>{
                  RemoveData(item.id)
                }}>delete</button></td>
              </tr>
            )
        })
    }
  </tbody>
</table>
      
    </div>
  )
}

export default Table
