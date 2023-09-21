import React, { useContext, useState } from 'react';
import { GiCrossedBones } from 'react-icons/gi';
import { FaBarsStaggered } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";

import { Link } from 'react-router-dom';
import logo from '../../../assets/toy-store.png'
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [toggle, setToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);

    const handleLogout = () => {
        logout();

    };

    const navLinks = <>
        <Link to='/home' className='hover:bg-[#d2d6e0] hover:text-black px-2 py-1 rounded'><li>Home</li></Link>
        <Link to='/store' className='hover:bg-[#d2d6e0] hover:text-black px-2 py-1 rounded'>Store</Link>
        <Link to='/home' className='hover:bg-[#d2d6e0] hover:text-black px-2 py-1 rounded'>About</Link>
    </>




    return (
        <nav className='w-full z-50 flex py-2 justify-between items-center sticky top-0 text-[#302a3c] font-serif font-semibold shadow-lg bg-[#e8edfc]'>

            <div className='container mx-auto flex items-center '>
                <Link to='/'><img className='h-16' src={logo} alt="" /></Link>

                <ul className=' sm:flex hidden justify-center items-center gap-5 text-2xl flex-1'>
                    {navLinks}
                </ul>
                {
                    user ? <>

                        <BiUserCircle onClick={() => setProfileToggle((prev) => !prev)} className='text-4xl mr-5 ml-auto cursor-pointer ' />

                        <div className={`${profileToggle ? 'flex flex-col' : 'hidden'} items-center text-white p-6 absolute top-16 bg-[#2c698d] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                            <img src={user.photoURL} className='h-16 w-16 mb-4' alt="" />
                            <p>{user.displayName}</p>
                            <p >{user.email}</p> <br />
                            <button onClick={handleLogout} className='h-10 px-3  py-1 text-2xl rounded-md text-white bg-[#272643] hover:bg-[#131221] ml-auto transition ease-in-out duration-500'>Logout</button>
                        </div>

                    </>
                        : <Link className='ml-auto' to='/login'>
                            <button className='h-10 px-3 py-1 text-2xl rounded-md text-white bg-[#272643] hover:bg-[#131221]  transition ease-in-out duration-500'>Login</button>
                        </Link>
                }


            </div>

            <div className='sm:hidden flex flex-1 justify-end  items-center sidebar'>

                <div onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <GiCrossedBones className='w-6  h-6 ml-2' /> : <FaBarsStaggered className='w-6 h-6 ml-2' />}
                </div>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-10 bg-[#2c698d] text-white right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className=' flex flex-col justify-end items-center flex-1'>
                        {navLinks}
                    </ul>
                </div>

            </div>
        </nav >
    );
};

export default Navbar;