import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { AuthPageLayout } from '../../components';
import Image from '../../data/icons/verified_icon.png';
import signupImage from '../../data/images/auth/login.png';
import { CustomButton } from '../../components';

const AfterSuccessfulSignup = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/auth/login');
    }

    return (
        <div className='flex flex-col sm:flex-row  justify-between items-stretch min-h-screen 
            main-wrapper'>
            <AuthPageLayout image={signupImage} />

            <div className='w-full sm:w-1/2 flex-grow bg-white flex flex-col items-center
                py-10 px-20 md:px-40 rounded-bl-10xl justify-center'>
                <div className='w-full flex-grow bg-white flex flex-col 
                    items-center rounded-bl-10xl justify-center text-center'>
                    
                    <div className="flex items-center justify-center mb-8">
                        <div className="relative flex items-center justify-center w-32 h-32">
                            <div className="absolute w-36 h-36 rounded-full bg-lighter-green"></div>
                            <div className="absolute w-30 h-30 rounded-full bg-light-green"></div>
                            <div className="absolute w-24 h-24 rounded-full bg-green flex items-center justify-center">
                                <div className='bg-white rounded-full px-2 py-2'>
                                    <FaCheck className="text-green text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className='text-2xl sm:text-2xl md:text-2xl lg:text-2xl 
                        text-left font-semibold pb-2'>Reset Successfully!</h3>
                    <p className='text-gray-500'>
                        Your password is changed successfully.
                    </p>

                    <CustomButton
                        customClass='w-full mt-8 bg-green text-white rounded-md'
                        onClick={handleClick}
                    >
                        Login Now
                    </CustomButton>
                </div> 
            </div>
        </div>
    );
}

export default AfterSuccessfulSignup;