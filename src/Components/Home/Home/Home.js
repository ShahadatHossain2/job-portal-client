import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import ApprovedPost from '../JobPost/ApprovedPost/ApprovedPost';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ApprovedPost></ApprovedPost>
        </div>
    );
};

export default Home;