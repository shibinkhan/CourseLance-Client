import React from 'react';
import './Banner.css';
import img1 from '../../../images/banner_img.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-6 d-flex justify-content-center align-items-center'>
                        <div className='banner-left'>
                            <h1 className='mb-4'>Distant learning for further expansion</h1>
                            <p className='mb-4'>The ultimate planning solution for people who want to reach their personal goals Effortless comfortable.</p>
                            <div className='search mb-5'>
                                <input type="text" />
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mb-5 d-flex justify-content-center align-items-center'>
                        <img src={img1} alt="" className='img-fluid'/>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <div>

                        </div>
                        <div className='bnr-btm mb-5'>
                            <h2 className='mb-3 fs-3 fw-bold'>Get Certificate</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quasi!</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <div>
                            
                        </div>
                        <div className='bnr-btm mb-5'>
                            <h2 className='mb-3 fs-3 fw-bold'>Skilled Instructors</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quasi!</p>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex justify-content-center align-items-center'>
                        <div>

                        </div>
                        <div className='bnr-btm mb-5'>
                            <h2 className='mb-3 fs-3 fw-bold'>Online Classes</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quasi!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;