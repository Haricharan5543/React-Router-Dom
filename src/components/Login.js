import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='App'>
         <form>
            <h2>Login</h2>
            <div>
                <label>Email</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text'></input>
            </div>
            <div className='signupbtnDiv'>
            <Link className='signupbtn' to="/signup">Signup</Link>
            <Link to="/Dashboard">Login</Link>
            </div>
        </form>
        <br></br>


      
    </div>
  )
}

export default Login
