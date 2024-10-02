"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const Blogs = () => {
    const router = useRouter();
    const handleDetail = (id) => {
        router.push(`/blogs/${id}`);
    };
    const blogs = [
        {
            id: 1,
            title: 'Blog',
            description: 'Here is description of the blog'
        },
        {
            id: 2,
            title: 'Blog',
            description: 'Here is description of the blog'
        },
        {
            id: 3,
            title: 'Blog',
            description: 'Here is description of the blog'
        },
        {
            id: 4,
            title: 'Blog',
            description: 'Here is description of the blog'
        }
    ];
    return (
        <div>
            {
                blogs.map(blog => <div key={blog.id} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{blog.title}</h2>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleDetail(blog.id)} className="btn btn-primary">Detail</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Blogs;