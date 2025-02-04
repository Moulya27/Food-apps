import React from 'react'
import { Link } from 'react-router-dom'
import './NotLoggedIn.css'

function NotLoggedIn() {
  return (
      <div className="not-found">
      <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/disconnected-4344475-3613903.png"
              className="img-fluid cartEmptyImage"
              alt="cart is empty"
            />
      <p>Oops! Looks like you have not logged in</p>
      <Link to='/'><button className='btnLogin'>Login</button></Link>
    </div>
  )
}

export default NotLoggedIn