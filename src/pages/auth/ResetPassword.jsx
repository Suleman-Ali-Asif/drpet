import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { generateValidationSchema } from '../../utils/ValidationSchema';
import * as Yup from 'yup';
import { DynamicForm, AuthPageLayout } from '../../components';

import signupImage from '../../data/images/auth/login.png';
import { PAGE_TEXTS } from '../../data/TextConstants';
import { API_BASE_URL } from '../../config';

function ResetPassword() {
    const fields = [
        { type: 'password', name: 'password', placeholder: 'Password' },
        { type: 'confirm-password', name: 'confirm-password', placeholder: 'Confirm Password' },
        { type: 'button', buttonText: 'Reset' }
    ];

    const validationSchema = generateValidationSchema(fields);

    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInputChange = (fieldName, value) => {
        setFormData({ ...formData, [fieldName]: value });
        setErrors({ ...errors, [fieldName]: '' });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            
            toast.success('Password reset successfully');

            setTimeout(() => {
                navigate('/auth/reset-password-successful');
            }, 5000);
        }  catch (error) {
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setErrors(validationErrors);
            } else {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className='flex flex-col sm:flex-row  justify-between items-stretch min-h-screen main-wrapper'>
            <AuthPageLayout image={signupImage} />
        
            <div className='w-full sm:w-1/2 flex-grow bg-white flex flex-col items-left
                py-10 px-12 rounded-bl-10xl justify-center'>
                <h2 className='w-full max-w-sm text-2xl sm:text-2xl md:text-2xl lg:text-3xl 
                text-left font-semibold mb-2'>New Password</h2>
                <p className='w-full max-w-sm text-left text-gray-500'>
                    Please enter your new password
                </p>

                <DynamicForm
                    fields={fields}
                    formData={formData}
                    errors={errors}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default ResetPassword;
