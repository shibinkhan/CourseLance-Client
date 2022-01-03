import React from 'react';
import img2 from '../../../images/illustration.png';
import './Section6.css';

const Section6 = () => {
    return (
        <div className='section6 py-5'>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-10 row'>
                        <div className='col-md-6'>
                            <img src={img2} alt="" className='img-fluid' />
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='sec6-right'>
                                <p className='start'>START TODAY</p>
                                <h1 className='become mb-3'>Become an instructor</h1>
                                <p>Do you want to be an instructor? Do you want to share your knowledge with everyone? If you have any skill then you can easily share your knowledge online or offline through iLive platform & make money.</p>
                                <br />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit adipisci corporis soluta facilis eum facere nisi dolorem quisquam amet deleniti!</p>
                                <button>Start Teaching Today</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section6;