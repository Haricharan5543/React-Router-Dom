import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='App'>
        <form>
            <h2>Signup</h2>
            <div>
                <label>First Name</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Email</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Password</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Age</label>
                <input type='number'></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input type='number'></input>
            </div>
            <div>
                <label>Profile Pic</label>
                <input type='file'></input>
            </div>
            <div>
                <button type='button'>Signup</button>
                
            </div>
        </form>
        <br></br>

        <Link to="/">Login</Link>
        
      
    </div>
  )
}

export default Signup
