import React, { useState } from 'react';
import img from '../../assets/login.svg'
import { Link } from 'react-router-dom';
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
    const [show, setShow] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
    }
    return (
        <div className='lg:flex container mx-auto justify-evenly items-center mt-8 lg:mt-20 font-serif'>
            <img className='hidden lg:flex' src={img} alt="" />

            <div className="w-80 container mx-auto mt-5 p-6 bg-[#e8edfc] shadow-md rounded-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
                <form onSubmit={handleLogin}>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={show ? 'text' : 'password'}
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md"
                            required
                        />
                        {/* <button
                            type="button"
                            onClick={() => setShow(!show)}
                            className="absolute inset-y-0 right-0 mt-1 mr-2 flex items-center px-2 text-gray-600 hover:text-gray-800"
                        >
                            {show ? 'Hide' : 'Show'}
                        </button> */}
                        <button className=" inset-y-0 right-0 mt-1 mr-2 flex items-center px-2 text-black hover:text-gray-600"
                            onClick={() => setShow(!show)}>
                            {
                                show ? <span>Hide Pass</span> : <span>Show Pass</span>
                            }
                        </button>
                    </div>

                    <div className="text-center">
                        <input type="submit" value='Log In' className='h-10 px-3  py-1 text-2xl rounded-md text-white bg-[#3d91c2] hover:bg-[#31749b] ml-auto transition ease-in-out duration-500' />
                    </div>
                    <div className='border-b-[1px] text-red-600 border-black  mt-5'>
                        gfd
                    </div>
                    <div className=' pt-5 border-black'>
                        <p>Don't Have An Account? <Link className='text-orange-600' to='/register'>Register</Link></p>
                        <p className='my-2'>Or Login With</p>
                        <div className='flex justify-center gap-10 text-3xl bg-slate-200 p-2 rounded-md'>
                            <BsGithub />
                            <BsFacebook />
                            <FcGoogle />

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;