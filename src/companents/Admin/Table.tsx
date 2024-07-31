import React, { useContext } from 'react'
import Maincontext from '../../Context/Context'
import "./Table.css"
const Table = () => {
    const {data}=useContext(Maincontext)
  return (
    <div>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">description</th>
      <th scope="col">Price</th>
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
