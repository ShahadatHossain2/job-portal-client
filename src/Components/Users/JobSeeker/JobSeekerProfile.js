import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';

const JobSeekerProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [profileInfo, setProfileInfo] = useState([])
    useEffect(()=>{
        fetch("https://pacific-garden-11203.herokuapp.com/checkJobSeeker?email=" + loggedInUser.email, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setProfileInfo(data);
                    })
    },[loggedInUser.email])
    return (
        <div className="container text-center">
           {
               profileInfo.map(info=> <ul>
                   <h3>Your Job Portal Profile</h3>
                <b>Name : {info.name}</b>
                <p>Email: {info.email}</p>
                <img src={info.photo} alt="" />
                <p>Good In : {info.skills}</p>
               </ul>)
           }
        </div>
    );
};

export default JobSeekerProfile;