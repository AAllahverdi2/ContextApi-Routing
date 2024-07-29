import React, { useContext } from 'react'
import "./Card.css"
import Maincontext from '../Context/Context'
import { Toaster } from 'react-hot-toast'
const Card = ({ item }) => {
    const {addToWishList}=useContext(Maincontext)
    return (
        <div className='col-lg-3 col-md-6 mr-3 mb-4'>
            <div className="card" style={{ width: "18rem;" }}>
                <div className='img__div'>
                    <img className="card-img-top " src={item.image} alt="Card image cap" />
                    <div className='icondiv'>
                        <button onClick={()=>{
                            addToWishList(item)
                        }}>
                        <i className="fa-regular fa-heart"></i>

                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.price} $</p>
                </div>
            </div>
            <Toaster/>
        </div>
    )
}

export default Card
