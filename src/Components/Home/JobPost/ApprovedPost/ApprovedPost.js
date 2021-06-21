import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const ApprovedPost = () => {
    const [jobsPost, setJobsPost] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/viewJobsPost",)
        .then(res => res.json())
        .then(data => setJobsPost(data))
    }, [])
    return (
        <div className="container">
            <div className="row mt-3">
            {
                jobsPost.map(post => <PostDetails key={post._id} needToApprove={false} post={post}></PostDetails>)
            }
            </div>
        </div>
    );
};

export default ApprovedPost;