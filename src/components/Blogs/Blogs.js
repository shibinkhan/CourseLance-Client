import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    return (
        <div className='blogs row d-flex justify-content-center'>
            <div className='col-md-11'>
                <div className='container py-5'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 text-center">
                        {
                            blogs.map(blog => <Blog key={blog.key} blog={blog} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;