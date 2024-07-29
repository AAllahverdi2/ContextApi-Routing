import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import Maincontext from '../Context/Context'

const Header = () => {
  const location = useLocation();
  const { wishList } = useContext(Maincontext); 

  return (
    <div className="header">
      <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
      <Link className={`nav-link ${location.pathname === '/Product' ? 'active' : ''}`} to="/Product">Product</Link>
      <Link className={`nav-link ${location.pathname === '/Wish' ? 'active' : ''}`} to="/Wish">
        WishList
        {wishList.length > 0 && (
          <span className="wish-count" style={{fontSize:"20px", position:"absolute", top:"2px"}}>({wishList.length})</span>
        )}
      </Link>
    </div>
  )
}

export default Header
