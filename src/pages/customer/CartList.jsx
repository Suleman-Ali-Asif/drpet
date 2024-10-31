import React from 'react';
import { Breadcrumb, Cart } from '../../components';

const CartList = () => {
    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Your Cart', active: true },
    ];

    return (
        <div className='main-wrapper mt-16 md:mt-20'>
            <section className='bg-gray-200 px-4 py-12 md:px-24 
                text-center top-banner-inner-pages h-32 md:h-68'
            >
                <h3 className='font-medium text-blue pb-4'>Your Cart</h3>
                <Breadcrumb items={breadcrumbItems} align="center" />
            </section>
            <section className=''>
                <div className="w-full">
                    <div className="w-full flex flex-col justify-center items-center space-y-2 h-40 bg-gray-50">
                        <div className="text-xl font-semibold text-blue-900">Your Cart</div>
                        <div className="text-lg text-blue-900">{"Home > Your Cart"}</div>
                    </div>
                    <div className='w-full py-8 md:py-12 px-8 md:px-20'>
                        <Cart />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CartList