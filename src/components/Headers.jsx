import React from 'react'
import { Link } from "react-router-dom"

const Headers = () => {

    const headertile = ["Home", "About", "Signin"]
    return (
        <div className='bg-slate-200'>
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
                <Link to='/about'>
                    <h1 className='font-bold'>Auth App</h1>
                </Link>
                <ul className='flex gap-4'>

                    {headertile.map((headerItem, index) => (
                        <li key={index}>
                            <Link to={`/${headerItem}`}>{headerItem}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Headers