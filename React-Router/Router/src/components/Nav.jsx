import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to="/">Home page</Link>
        <Link to="/signin">Signin page</Link>
        <Link to="/signup">Signup page</Link>
        <Link to="/videos">Videos page</Link>
    </div>
  )
}

export default Nav