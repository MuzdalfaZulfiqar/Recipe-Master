import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navBar">
          <div className="title">Recipe Master</div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/savedRecipes">Saved Recipes</Link></li>
            </ul>
          </div>
          <div className="signUp">
            <button className='signbutton'>
              <Link to="/signUp">Sign Up</Link>
             </button>
            <button className='signbutton'>
              <Link to="/login">Login</Link>
             </button>
          </div>
        </div>
  )
}

export default NavBar
