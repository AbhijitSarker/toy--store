import React from 'react';
import banner from '../../../assets/banner2.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='w-full h-screen relative  font-serif '>
            <img className='h-full object-cover w-full ' src={banner} alt="" />
            <div className=' absolute top-0 right-0 text-right banner-gradient w-screen h-screen text-white flex flex-col gap-8 items-end pt-20 md:pt-44 p-5 '>
                <div className='lg:container md:mx-auto flex items-end flex-col gap-8'>
                    <h1 className='sidebar text-3xl md:text-6xl font-extrabold '>A Toy Store Like No Other, <br /> Where Every Toy Tells a Story</h1>
                    <p className='sidebar lg:w-1/2 md:text-xl   text-right'>For generations, our toy store has been a cherished destination for families seeking the perfect playtime companions. We're proud to offer a diverse range of toys that not only entertain but also inspire. Every toy on our shelves is a testament to the power of imagination and the joy of childhood.</p>
                    <button className='h-10 px-3 py-1 text-2xl rounded-md text-white bg-[#272643] hover:bg-[#131221]  transition ease-in-out duration-500'>Know More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
