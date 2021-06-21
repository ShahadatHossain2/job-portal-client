import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import ProcessPayment from '../../Shared/ProcessPayment/ProcessPayment';

const Employer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [userInfo, setUserInfo] = useState({})
    const onSubmit = data => {
        setUserInfo(data);
        document.getElementById('payForm').style.display = "block";
        document.getElementById('infoForm').style.display = "none";

    };

    const history = useHistory();

    const handlePayment = (paymentId) => {
        const orderDetails = { ...loggedInUser, paymentId: paymentId, ...userInfo, orderTime: new Date() };
        fetch('http://localhost:5000/employer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(dt => {
                if (dt) {
                    alert('Your account created successfully');
                }

            });

        history.push('/employerProfile')


    }

    return (
        <div className="container">
            <form id="infoForm" className="text-center mt-5" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50" placeholder="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>} <br /> <br />

                <input className="w-50" defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>} <br /> <br />

                <input {...register("company", { required: true })} className="w-50" />
                {errors.company && <span>This field is required</span>} <br /> <br />

                <select className="w-50"  {...register("Select Package", { required: true })}>
                    <option className="w-50"  value="Basic">Basic ($3 required per month)</option>
                    <option className="w-50"  value="Standard">Standard ($6 required per month)</option>
                    <option className="w-50"  value="Premium">Premium($10 required per month)</option> 
                </select> 

                <br /><br /><input className="w-50" type="submit" />
            </form>
            <div id="payForm" style={{display: 'none'}} className="container w-50 mt-5">
                <ProcessPayment handlePayment={handlePayment}></ProcessPayment>
            </div>
        </div>
    );
};

export default Employer;