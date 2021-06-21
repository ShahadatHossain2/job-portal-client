import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../App';
const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userType, setUserType] = useState({
        isAdmin: false,
        isJobSeeker: false,
        isEmployer: false
    })
    const handleLogout = () => {
        const signOut = '';
        setLoggedInUser(signOut);
    }
    useEffect(() => {
        const user = {
            isAdmin: false,
            isJobSeeker: false,
            isEmployer: false
        }

        fetch("http://localhost:5000/checkAdmin?email=" + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    user.isAdmin = true;
                    setUserType(user);
                }
            })

        fetch("http://localhost:5000/checkEmployer?email=" + loggedInUser.email, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.length > 0) {
                        user.isEmployer = true;
                        setUserType(user);
                    }
                })

        fetch("http://localhost:5000/checkJobSeeker?email=" + loggedInUser.email, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.length > 0) {
                            user.isJobSeeker = true;
                            setUserType(user);
                        }
                    })
    }, [loggedInUser.email])

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <div class="container-fluid container">
                <div>
                    <h1 class="navbar-brand"><strong>Job Portal</strong></h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ml-3">
                                <Link class="nav-link" to='/home'><strong>Home</strong></Link>
                            </li>
                            {
                                userType.isEmployer && <li class="nav-item ml-3">
                                <Link class="nav-link" to="/employerProfile"><strong>Dashboard</strong></Link>
                            </li>
                            }
                            {
                                userType.isJobSeeker && <li class="nav-item ml-3">
                                <Link class="nav-link" to='/jobSeekerProfile'><strong>Profile</strong></Link>
                            </li> 
                            }
                            {
                                userType.isAdmin && <li class="nav-item ml-3">
                                <Link class="nav-link" to='/pendingPost'><strong>Admin Dashboard</strong></Link>
                            </li>
                            }
                            {
                                !loggedInUser.isSignedIn && <li class="nav-item ml-3">
                                <Link class="nav-link" to='/userType'><strong>Create Account</strong></Link>
                            </li>
                            }
                            {
                                loggedInUser.isSignedIn ? <li class="nav-item ml-3">
                                    <Link class="nav-link" onClick={handleLogout}><strong>Logout</strong></Link>
                                </li> : <li class="nav-item ml-3">
                                    <Link class="nav-link" to='/login'><strong>Login</strong></Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;