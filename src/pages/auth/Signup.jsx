import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { generateValidationSchema } from '../../utils/ValidationSchema';
import * as Yup from 'yup';

import './Signup.css';
import { DynamicForm, AuthPageLayout } from '../../components';
import signupImage from '../../data/images/auth/signup.png';
import appleImage from '../../data/icons/apple_icon.png';
import googleImage from '../../data/icons/google_icon.png';
import facebookImage from '../../data/icons/facebook_icon.png';
import api from '../../utils/api';

const Signup = () => {
    const fields = [
        { type: 'text', name: 'fullName', placeholder: 'Full Name' },
        // { type: 'text', name: 'lastName', placeholder: 'Last Name' },
        { type: 'email', name: 'email', placeholder: 'Email Address' },
        { type: 'password', name: 'password', placeholder: 'Password' },
        //{ type: 'tel', name: 'mobile', placeholder: 'Phone Number' },
        //{ type: 'checkbox', name: 'agree', text: 'I Agree to the <a href="/terms" class="text-green font-semibold hover:underline">Terms And Conditions</a> and <a href="/privacy" class="text-green font-semibold hover:underline">Privacy Policy</a>'  },
        { type: 'checkbox', name: 'agree', text: 'Remember me'  },
        { type: 'button', buttonText: 'Sign Up' }
    ];
    const validationSchema = generateValidationSchema(fields);

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
        setErrors({ ...errors, [fieldName]: '' });
    };

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });

            // Add country and timezone to formData
            const updatedFormData = {
                ...formData,
                userType: 0,
                signUpType: 0,
            };

            const response = await api.post('/SignUp/User', updatedFormData);
            console.log(response.data);

            if (response.data.succeeded) {
                toast.success('You have successfully signed up. Please verify your email to continue.');
                setTimeout(() => {
                    navigate('/auth/verify-your-email?email=' + formData.email);
                }, 5000);
            }
        }  catch (error) {
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            }
        }
    };

    return (
        <div className='flex flex-col sm:flex-row  justify-between items-stretch min-h-screen main-wrapper'>
            <AuthPageLayout image={signupImage} />
            
            <div className='w-full ml-4 mt-16 sm:w-1/2 flex-grow bg-white flex 
                flex-col items-left py-10 px-10 rounded-bl-10xl'
            >
                <h2 className='text-2xl sm:text-2xl md:text-2xl lg:text-3xl 
                text-left font-semibold mb-4'>Sign up</h2>
                <p className='text-gray-500'>
                    Sign up to DoctorPet.com to discover the best pet products, exclusive deals, 
                    and expert care tips tailored for your furry friends.
                </p>

                <DynamicForm
                    fields={fields}
                    formData={formData}
                    errors={errors}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />

                <p className='pt-4 text-slate-500'>Already have an account? 
                    <Link to="/auth/login" className="text-blue-500 font-semibold 
                        hover:underline ml-2">
                        Create free account
                    </Link>
                </p>
            
                {/* <div className="flex w-full max-w-sm items-center pt-5 pb-5">
                    <hr className="flex-grow border-gray-400 mx-2" />
                    <span>Or Sign Up With</span>
                    <hr className="flex-grow border-gray-400 mx-2" />
                </div>

                <div className="images-wrap flex justify-center space-x-4 
                    text-center w-full max-w-sm">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebookImage} alt="signup with facebook" className="w-12" />
                    </a>
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src={googleImage} alt="signup with google" className="w-12" />
                    </a>
                    {/* <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
                        <img src={appleImage} alt="signup with apple" className="w-12" />
                    </a> 
                </div> */}
            </div>
            
        </div>
    );
}

export default Signup;