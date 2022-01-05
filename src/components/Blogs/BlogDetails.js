import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const [blogs, setBlogs] = useState([]);
    const { blogId } = useParams();
    const blogIdNumber = parseFloat(blogId);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data);
            });
    }, []);

    const theBlog = blogs.find(blog => blog.key === blogIdNumber);
    console.log(blogIdNumber);

    return (
        <div className='row d-flex justify-content-center'>
            <div className='col-md-10'>
                <div className=' blog container mt-4 mb-5'>
                    <h1 className='text-center mb-4 fs-2 fw-bold'>{theBlog?.name}</h1>
                    <div className='d-flex justify-content-center mb-4'>
                        <img src={theBlog?.img} alt="" />
                    </div>
                    <p className='mb-4'>{theBlog?.part2}</p>
                    <p className='mb-4'>{theBlog?.part3}</p>
                    <p className='mb-4'>{theBlog?.part4}</p>
                    <p className='mb-4'>{theBlog?.part5}</p>
                    <p className='mb-4'>{theBlog?.part6}</p>
                    <p className='mb-4'>{theBlog?.part7}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;