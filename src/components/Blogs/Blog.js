import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { key, name, img, part1 } = blog;


    return (
        <div className="col">
            <div className="blogcart card h-100">
                <div className='img-div'>
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title fw-bold my-3">{name}</h5>
                    <p className="card-text">{part1.slice(0, 100)}</p>
                </div>
                <div>
                    <NavLink to={`/details/${key}`}><button className='mb-4 read-now'>Read Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Blog;