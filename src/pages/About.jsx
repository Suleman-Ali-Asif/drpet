import React from 'react';
import { Breadcrumb } from '../components';

import aboutImage1 from '../data/images/about_1.png';
import aboutImage2 from '../data/images/about_2.png';
import aboutImage3 from '../data/images/about_3.png';
import dividerImage from '../data/images/divider.png';

const About = () => {
    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'About Us', active: true },
    ];

    return (
        <div className='main-wrapper mt-16 md:mt-20'>
            <section className='bg-gray-200 px-4 py-8 md:py-24 md:px-24 text-center top-banner-inner-pages h-auto md:h-68'>
                <h3 className='font-medium text-blue pb-4'>About Us</h3>
                <Breadcrumb items={breadcrumbItems} align="center" />
            </section>

            <section className='md:flex px-12 py-8 md:px-36 items-center'>
                <div className='w-full md:w-4/12 mb-4 md:mb-0'>
                    <img src={aboutImage1} alt='About Us' className='w-full' />
                </div>
                <div className='w-full md:w-8/12 text-left md:ml-16'>
                    <h3 className='font-medium text-blue pb-4 mb-0'>
                        Our Story
                    </h3>
                    <div className="w-12 h-4 bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${dividerImage})` }}>
                    </div>
                    <p className='mt-2'>
                        Founded with a passion for animals and a commitment to fostering 
                        the human-pet bond, Doctor Pet began as a humble endeavor driven by the 
                        desire to create a haven for pets and their owners alike. Over the past 
                        few months, we’ve grown into a leading name in the pet industry, known  
                        for our unwavering dedication to providing top-notch products, services,  
                        and resources for pets and their owners.
                    </p>
                </div>
            </section>

            <section className='md:flex px-12 py-12 md:px-36 items-center'>
                <div className='w-full md:w-8/12 text-left md:mr-16 mb-4 md:mb-0'>
                    <h3 className='font-medium text-blue pb-4 mb-0'>
                        Our Mission
                    </h3>
                    <div className="w-12 h-4 bg-no-repeat bg-contain"
                        style={{ backgroundImage: `url(${dividerImage})` }}>
                    </div>
                    <p className='mt-2'>
                        At Doctor Pet, our mission is simple yet profound: to enhance the lives  
                        of both pets and their human companions. We strive to achieve this by  
                        offering a range of high-quality products, expert guidance, and a  supportive 
                        community that empowers pet owners to give their beloved  companions the best 
                        care and attention they deserve.
                    </p>
                </div>
                <div className='w-full md:w-4/12'>
                    <img src={aboutImage2} alt='About Us' className='w-full' />
                </div>
            </section>

            <section className='md:flex px-12 py-12 md:px-36 items-center md:mb-8'>
                <div className='w-full md:w-4/12 text-left md:mr-16'>
                    <div className='rounded-md border-2 border-gray-300 border-dashed
                        p-3 mb-4 md:mb-16'>
                        <p className='font-semibold mb-2'>Balanced Diet</p>
                        <p className='text-xs'>
                            Provide your pet with a balanced and appropriate
                            diet based on their age, size
                        </p>
                    </div>

                    <div className='rounded-md border-2 border-gray-300 border-dashed
                        p-3 mb-4 md:mb-16'>
                        <p className='font-semibold mb-2'>Balanced Diet</p>
                        <p className='text-xs'>
                            Provide your pet with a balanced and appropriate
                            diet based on their age, size
                        </p>
                    </div>

                    <div className='rounded-md border-2 border-gray-300 border-dashed
                        p-3 mb-8 md:mb-0'>
                        <p className='font-semibold mb-2'>Balanced Diet</p>
                        <p className='text-xs'>
                            Provide your pet with a balanced and appropriate
                            diet based on their age, size
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-4/12'>
                    <img src={aboutImage3} alt='About Us' className='w-full' />
                </div>
                <div className='w-full md:w-4/12 text-left md:ml-16 mt-8 md:mt-0'>
                    <div className='rounded-md border-2 border-gray-300 border-dashed
                        p-3 mb-4 md:mb-16'>
                        <p className='font-semibold mb-2'>Balanced Diet</p>
                        <p className='text-xs'>
                            Provide your pet with a balanced and appropriate
                            diet based on their age, size
                        </p>
                    </div>

                    <div className='rounded-md border-2 border-gray-300 border-dashed
                        p-3 mb-4 md:mb-16'>
                        <p className='font-semibold mb-2'>Balanced Diet</p>
                        <p className='text-xs'>
                            Provide your pet with a balanced and appropriate
                            diet based on their age, size
                        </p>
                    </div>

                    <div className='rounded-md border-2 border-gray-300 border-dashed
                        p-3 mb-8 md:mb-0'>
                        <p className='font-semibold mb-2'>Balanced Diet</p>
                        <p className='text-xs'>
                            Provide your pet with a balanced and appropriate
                            diet based on their age, size
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About