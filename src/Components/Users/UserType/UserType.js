import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';

const UserType = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center container">
                <h1>Choose an option to continue</h1>

                <h2>Create Account As</h2>
                <Link className="btn btn-primary w-50" to='/employer'>An Employer</Link>
                <br /> <br />
                <Link className="btn btn-primary w-50" to='/jobSeeker'>A Job Seeker</Link>
            </div>
        </div>
    );
};

export default UserType;