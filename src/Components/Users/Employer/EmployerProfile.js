import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Shared/Navbar/Navbar';

const EmployerProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/jobPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(dt => {
                if (dt) {
                    alert('Job posted successfully');
                }
            });
        alert('Job posted successfully');
    };

    return (
        <div className="container text-center">
            <Navbar></Navbar>
            <h1>Post a job</h1>
                <form id="infoForm" className="text-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50" placeholder="Recruiter Name" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>} <br /> <br />

                <input className="w-50"  placeholder="Email"{...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>} <br /> <br />

                <input placeholder="Company Name" {...register("company", { required: true })} className="w-50" />
                {errors.company && <span>This field is required</span>} <br /> <br />

                <input placeholder="Position" {...register("position", { required: true })} className="w-50" />
                {errors.position && <span>This field is required</span>} <br /> <br />

                <input placeholder="Number Of Vacancy" {...register("numberOfVacancy", { required: true })} className="w-50" />
                {errors.numberOfVacancy && <span>This field is required</span>} <br /> <br />

                <input placeholder="Required Skill" {...register("requiredSkill", { required: true })} className="w-50" style={{height:'50px'}} />
                {errors.requiredSkill && <span>This field is required</span>} <br /> <br />

                <input placeholder="Salary" {...register("salary", { required: true })} className="w-50"/>
                {errors.salary && <span>This field is required</span>} <br /> <br />

                <input placeholder="Location" {...register("location", { required: true })} className="w-50"/>
                {errors.location && <span>This field is required</span>} <br /> <br />

                <select className="w-50"  {...register("jobType", { required: true })}>
                    <option className="w-50"  value="fullTime">Full-time</option>
                    <option className="w-50"  value="partTime">Part-time</option>
                    <option className="w-50"  value="intern">Internship</option> 
                </select> 
                <br /><br /><input className="w-50" type="submit" />
            </form>
        </div>
    );
};

export default EmployerProfile;