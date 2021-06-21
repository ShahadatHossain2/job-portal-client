import React, { useEffect, useState } from 'react';
import PostDetails from '../PostDetails/PostDetails';
const PendingPost = () => {
    const [pendingPost, setPendingPost] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/pendingPost",)
        .then(res => res.json())
        .then(data => setPendingPost(data))
    },[])


    return (
        <div className="container">
            <h1 className="text-center mb-3 mt-3">Post Need To Approve</h1>
            <div className="row">
            {
                pendingPost.map(post => <PostDetails key={post._id} needToApprove={true} post={post}></PostDetails>)
            }
            </div>
        </div>
    );
};

export default PendingPost;