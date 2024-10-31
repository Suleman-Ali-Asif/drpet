import React from 'react';
import { useLocation } from 'react-router';
import { AuthPageLayout } from '../../components';
import signupImage from '../../data/images/auth/signup.png';
import emailImage from '../../data/images/auth/verify_email.png';
import { PAGE_TEXTS } from '../../data/TextConstants';

const AfterSuccessfulSignup = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');

    return (
        <div className='flex flex-col sm:flex-row  justify-between items-stretch min-h-screen main-wrapper'>
            <AuthPageLayout image={signupImage} />
            
            <div className='w-full sm:w-1/2 flex-grow bg-white flex flex-col 
                items-center rounded-bl-10xl justify-center'>
                <img src={emailImage} alt="email verification" 
                    className="pb-8" style={{ width: '150px' }} />
                <h3 className='text-2xl sm:text-2xl md:text-2xl lg:text-2xl 
                text-left font-semibold pb-3'>Verify Your Email</h3>
                <p className='text-gray-500'>We have sent a verification email to 
                    <span className='text-green font-semibold'> {email}</span>. 
                    Check your <br /> email inbox.  If you don’t find the mail in inbox, 
                    please check spam. 
                </p>

                <p className='pt-4'>Haven’t received? 
                    <a href="#" className="pl-2 text-green font-semibold hover:underline">
                        Resend Email
                    </a>
                </p>
            </div> 
        </div>
    );
}

export default AfterSuccessfulSignup;