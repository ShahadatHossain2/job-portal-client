import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostDetails = ({ post, needToApprove }) => {
    const [approvedPost, setApprovedPost] = useState({
        company: post.company,
        position: post.position,
        jobType: post.jobType,
        requiredSkill: post.requiredSkill,
        name: post.name,
        email: post.email,
        Salary: post.Salary
    })

    const history = useHistory();

    const handleApprove = () => {
        fetch('https://pacific-garden-11203.herokuapp.com/approvePost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(approvedPost)
        })
            .then(res => res.json())
            .then(dt => {
                if (dt) {
                    alert('Post Approved');
                }

            });

        fetch("https://pacific-garden-11203.herokuapp.com/delete/" + post._id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Approved Successfully");
                }
            })
        history.push('/pendingPost')
    }
    return (
        <div className="col-md-3">
            <div className="shadow p-3 rounded">
                <div style={{height:'300px'}}>
                    <h5>{post.company} is Looking For {post.position}</h5>
                    <h6>Job Type {post.jobType}</h6>
                    <p>Salary {post.Salary}</p>
                    <b>Skill Required: {post.requiredSkill}</b>
                    <p>Recruiter Name: {post.name}</p>
                    <p>Email Your CV at {post.email}</p>
                </div>
                <div className="m-2">
                    {
                        needToApprove ? <button className="btn btn-primary" onClick={handleApprove}>Approve</button> : <Link className="btn btn-primary" to={"/apply/" + post._id}>Apply</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default PostDetails;