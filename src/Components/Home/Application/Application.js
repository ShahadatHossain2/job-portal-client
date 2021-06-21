import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';

const Application = () => {
    const [loggedInUser, setLoggedInUser] =useContext(userContext);
    const {jobId} = useParams();
    const [application, setApplication] = useState({})
    const [applicantInfo, setApplicationInfo] = useState({
        applicantName: loggedInUser.name,
        applicantEmail: loggedInUser.email

    })
    useEffect(()=>{
        fetch(`http://localhost:5000/apply/${jobId}`)
        .then(res=> res.json())
        .then(data => setApplication(data[0]))
    },[jobId])

    const handleApplication=()=>{
        const applicationInfo = {...application, ...applicantInfo}
        fetch('http://localhost:5000/application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationInfo)
        })
            .then(res => res.json())
            .then(dt => {
                if (dt) {
                    alert('Applied successfully');
                }
            });
        alert('Applied successfully');
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='Container mt-5 text-center'>
                <h3>Your Application</h3>
                <p>Your Name : {loggedInUser.name}</p>
                <p>Your Email : {loggedInUser.email}</p>
                <p>Applying For : {application.position}</p>
                <p>Company: {application.company}</p>
                <p>Company Email: {application.email}</p>
                <p>Skill Required: {application.requiredSkill}</p> <br />
                <button className="btn btn-primary" onClick={handleApplication}>Confirm Application</button>
            </div>
        </div>
    );
};

export default Application;