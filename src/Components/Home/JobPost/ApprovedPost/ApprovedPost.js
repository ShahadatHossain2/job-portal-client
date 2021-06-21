import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';

const ApprovedPost = () => {
    const [jobsPost, setJobsPost] = useState([])
    useEffect(()=>{
        fetch("https://pacific-garden-11203.herokuapp.com/viewJobsPost",)
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