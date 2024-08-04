import React, { useContext } from 'react';
import "./Card.css";
import Maincontext from '../Context/Context';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const { addToWishList } = useContext(Maincontext);

    return (
        <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
            <div className="card">
                <div className='img__div'>
                    <Link to={`/item/${item.id}`}>
                        <img className="card-img-top" src={item.image} alt="Card image cap" />
                    </Link>
                    <div className='icondiv'>
                        <button onClick={() => addToWishList(item)}>
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                <h5 className="card-title">{item.title.slice(0, 39)}</h5>
                <p>{item.price} $</p>
                </div>
            </div>
            <Toaster />
        </div>
    );
}

export default Card;
