import React from 'react'
import "./Header.css"
import reactLogo from "../Logo/whiteamazon-logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';



function Header({cart}) {
  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo' src={reactLogo} alt='logo'/>
        </Link>
        <div className='header_search'>
          <input className='header_searchbox' type="text"/>
          <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <span className='header_optionone'>Hello, Signin</span>
            <span className='header_optiontwo'>Account & List</span>
          </div>
          <div className='header_option'>
            <span className='header_optionone'>Return</span>
            <span className='header_optiontwo'>& Orders</span>
          </div>
          <div className='header_option'>
            <span className='header_optionone'>Your</span>
            <span className='header_optiontwo'>Prime</span>
          </div>
          <div className='header_optionBasket'>
            <Link className='LinkLagaya' to="/cart">
            <ShoppingBasketIcon className='iconlagaya'/>
            </Link>
            <span>{cart?.total_items}</span>
          </div>



        </div>

    </div>
  )
}

export default Header;