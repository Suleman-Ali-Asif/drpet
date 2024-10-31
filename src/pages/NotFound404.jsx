import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../data/images/404.png';
import { CustomButton } from '../components';

const NotFound404 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className='flex flex-col items-stretch min-h-screen main-wrapper'>
            <div className='w-full flex-grow bg-white flex flex-col 
                items-center rounded-bl-10xl justify-center text-center'>
                <h3 className='text-2xl sm:text-2xl md:text-2xl lg:text-2xl 
                text-left font-semibold pb-3'>Whoops! 404 - Page not found!</h3>
                <p>
                    The page you are looking for might have been removed, 
                    had its name changed, or is temporarily unavailable.
                </p>

                <img src={Image} alt="404 - Page not found" 
                    style={{ width: '320px' }} />

                <CustomButton onClick={handleClick}>Back to home</CustomButton>
            </div> 
        </div>
    );
}

export default NotFound404;