import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Signin = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const handleChage = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})

    }
    const handleSubmit = async(e) =>{
        setLoading(true)
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3500/api/v1/user/signin', {
                method:"POST",body:JSON.stringify(formData),
                headers:{"Content-Type":"application/json; charset=UTF-8"}
    
            })
            const data = await res.json();
            if(data.error === true){
                setError(true);

            }
            setLoading(false)
            navigate('/')
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log("name===",error.name)
            console.log("message==",error.message)
        }
        
    }
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>
                {loading ? "Loading..." : 'Signin'}
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
                <input type="email" placeholder='email...' id='email' className='bg-slate-400 p-3 rounded-lg' onChange={handleChage}/>
                <input type="password" placeholder='password...' id='password' className='bg-slate-400 p-3 rounded-lg'onChange={handleChage} />

                <button disabled={loading} className='bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-85'>Sign in</button>
            </form>
            <div className='flex gap-2 my-3 mx-4'>
                <p className='font-semibold'>Dont have an account?</p>
                <Link to="/Signup">
                    <span className='text-blue-700 font-serif'>Signup</span>
                </Link>

            </div>
            <p className=' text-red-600 mt-5'>{error && 'Something wrong..'}</p>
        </div>
    )
}

export default Signin