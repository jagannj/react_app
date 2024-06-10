import React from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
            <form className='flex flex-col gap-4' >
                <input type="text" placeholder='username...' id='username' className='bg-slate-400 p-3 rounded-lg' />
                <input type="email" placeholder='email...' id='email' className='bg-slate-400 p-3 rounded-lg' />
                <input type="password" placeholder='password...' id='password' className='bg-slate-400 p-3 rounded-lg' />

                <button className='bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-85'>Sign up</button>
            </form>
            <div className='flex gap-2 my-3 mx-4'>
                <p className='font-semibold'>have an account?</p>
                <Link to="/Signin">
                    <span className='text-blue-700 font-serif'>Signin</span>
                </Link>

            </div>
        </div>
    )
}

export default Signup