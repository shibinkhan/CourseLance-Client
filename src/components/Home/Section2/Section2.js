import React from 'react';
import './Section2.css';

const Section2 = () => {
    return (
        <div className='section2 py-5 mb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className='sec2l'>
                            <p>10,000+ TRUSTED CLIENTS ALL OVER THE WORLD</p>
                            <h1>Some reasons why Start Your Online Learning with Us</h1>
                        </div>
                    </div>

                    <div className='col-md-12 col-lg-6 my-5 d-flex justify-content-center'>
                        <div className='row g-4'>
                            <div className='col-md-4'>
                                <div className='p-5 sec2r sec2r1'>
                                    <h5 className='fw-bold'>2k</h5>
                                    <p>Students</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='p-5 sec2r sec2r2'>
                                    <h5 className='fw-bold'>120+</h5>
                                    <p>Courses</p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='p-5 sec2r sec2r3'>
                                    <h5 className='fw-bold'>100%</h5>
                                    <p>Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center'>
                    <div className='col-8 row letUsHelp py-5 px-4'>
                        <div className='col-md-9'>
                            <h4 className='mb-3'>Let Us Help</h4>
                            <p className='mb-3'>Finding Your Right Courses</p>
                        </div>
                        <div className='col-md-3 d-flex justify-content-center align-items-center'>
                            <button className=''>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;