import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer pt-5 pb-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center pb-5 pb-md-0'>
                        <div>
                            <h1 className='fs-1'>Course Lance</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit soluta eius, eveniet sequi autem nulla.</p>
                        </div>
                    </div>
                    <div className='col-3 col-md-2'>
                        <h2 className='mb-3 fw-bold'>Explore</h2>
                        <NavLink className="footerNav" to="/"><span className="">Contact</span></NavLink>
                        <NavLink className="footerNav" to="/"><span className="">About</span></NavLink>
                        <NavLink className="footerNav" to="/"><span className="">Blogs</span></NavLink>
                    </div>
                    <div className='col-3 col-md-2'>
                        <h2 className='mb-3 fw-bold'>Categories</h2>
                        <NavLink className="footerNav" to="/"><span className="">Contact</span></NavLink>
                        <NavLink className="footerNav" to="/"><span className="">About</span></NavLink>
                        <NavLink className="footerNav" to="/"><span className="">Blogs</span></NavLink>
                    </div>
                    <div className='col-6 col-md-2'>
                        <h2 className='mb-3 fw-bold'>Address</h2>
                        <h5>Phone</h5>
                        <p className='mb-3'>+01971134573</p>
                        <h5>Email</h5>
                        <p>default@gmail.com</p>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <p className='text-center mt-5'>© Course Lance 2022. Rights reserved by team128</p>
            </div>
        </div>
    );
};

export default Footer;