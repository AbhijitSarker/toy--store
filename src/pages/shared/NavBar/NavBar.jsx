import React, { useState } from 'react';
import { GiCrossedBones } from 'react-icons/gi';
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../../../assets/toy-store.png'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const navLinks = <>
        <Link className='hover:bg-[#d2d6e0] px-2 py-1 rounded'><li>Home</li></Link>
        <Link className='hover:bg-[#d2d6e0] px-2 py-1 rounded'>Store</Link>
        <Link className='hover:bg-[#d2d6e0] px-2 py-1 rounded'>About</Link>
    </>
    return (
        <nav className='w-full z-50 flex py-2 justify-between items-center sticky top-0 text-[#302a3c] font-serif font-semibold shadow-lg bg-[#e8edfc]'>

            <div className='container mx-auto flex items-center '>
                <Link to='/'><img className='h-16' src={logo} alt="" /></Link>

                <ul className=' sm:flex hidden justify-center items-center gap-5 text-2xl flex-1'>
                    {navLinks}
                </ul>
                <Link to='/login'>
                    <button className='h-10 px-3  py-1 text-2xl rounded-md text-white bg-[#3d91c2] hover:bg-[#31749b] ml-auto transition ease-in-out duration-500'>Login</button>
                </Link>
            </div>

            <div className='sm:hidden flex flex-1 justify-end  items-center sidebar'>

                <div onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <GiCrossedBones className='w-6  h-6 ml-2' /> : <FaBarsStaggered className='w-6 h-6 ml-2' />}
                </div>

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute top-10 bg-[#e8edfc] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className=' flex flex-col justify-end items-center flex-1'>
                        {navLinks}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;