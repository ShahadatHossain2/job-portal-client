import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';

const JobSeeker = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        const detailInfo = { ...loggedInUser, ...data};
        fetch('http://localhost:5000/jobSeeker', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detailInfo)
        })
            .then(res => res.json())
            .then(dt => {
                if (dt) {
                    alert('Your account created successfully');
                }

            });

        history.push('/home')
    };
    
    return (
        <div className="container">
            <form id="infoForm" className="text-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50" placeholder="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>} <br /> <br />

                <input className="w-50" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>} <br /> <br />

                <input {...register("education", { required: true })} className="w-50" />
                {errors.education && <span>This field is required</span>} <br /> <br />

                <input {...register("skills", { required: true })} className="w-50" />
                {errors.skills && <span>This field is required</span>}
                <br /><br /><input className="w-50" type="submit" />
            </form>
        </div>
    );
};

export default JobSeeker;