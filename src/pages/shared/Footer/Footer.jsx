import React from 'react';
import logo from '../../../assets/toy-store.png';
const Footer = () => {
    return (
        <footer className="bg-gray-800  text-white py-8">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="col-span-2 lg:col-span-1 flex flex-col  items-center">
                        <img src={logo} className='h-16' alt="" />
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
                            justo euismod, malesuada dolor in, facilisis ligula.
                        </p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm">
                            Address: 123 Toy Street, Toyland
                            <br />
                            Phone: (123) 456-7890
                            <br />
                            Email: info@yourtoystore.com
                        </p>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="text-sm">
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-sm mt-6">
                    &copy; {new Date().getFullYear()} Your Toy Store. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
