import React, { useState } from 'react'
import "./Signup.css"
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const navigate = useNavigate();
    return (
        <div className='main'>
            <div className="sub-main"></div>
            <h2 className='signup-title'>Sign Up</h2>
            <br />
            {/* <form action="">
                <div className='form-styles'>
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input type="text"
                        placeholder='Enter Name'
                        autoComplete='off'
                        name='name'
                        // className='form-control rounded-0'
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text"
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
            </form> */}

<form >
<label htmlFor='Enter Name :'>
          Enter Your name :
          <input type="text" name='name' />
        </label><br/>
        <label> Enter Your email : <input name='email' type="text" /></label><br/>
        <label> Enter Your Password : <input name='password' type="password" /></label>
        <br />

        <button type="submit" className="btn btn-success w-100 rounded-0">
                    Sign Up
                </button>
</form>


        </div>
    )
}

export default Signup