import React from 'react';
import { Breadcrumb, ProductCard, Filters } from '../components';
import productImg1 from '../data/images/product_img_1.png';
import productImg2 from '../data/images/product_img_2.png';
import productImg3 from '../data/images/product_img_3.png';
import productImg4 from '../data/images/product_img_4.png';
import productImg5 from '../data/images/product_img_5.png';
import productImg6 from '../data/images/product_img_6.png';
import productImg7 from '../data/images/product_img_7.png';
import productImg8 from '../data/images/product_img_8.png';

const Products = () => {
    const breadcrumbItems = [
        { name: 'Home', link: '/' },
        { name: 'Products', active: true },
        // Add more breadcrumb items as needed
    ];

    const productData = [
        { id: 1, productImage: productImg1, rating: '4.8', productName: 'Product 1', productPrice: 100 },
        { id: 2, productImage: productImg2, rating: '4.8', productName: 'Product 2', productPrice: 200 },
        { id: 3, productImage: productImg3, rating: '4.8', productName: 'Product 3', productPrice: 300 },
        { id: 4, productImage: productImg4, rating: '4.8', productName: 'Product 4', productPrice: 400 },
        { id: 5, productImage: productImg5, rating: '4.8', productName: 'Product 5', productPrice: 500 },
        { id: 6, productImage: productImg6, rating: '4.8', productName: 'Product 6', productPrice: 600 },
        { id: 7, productImage: productImg7, rating: '4.8', productName: 'Product 7', productPrice: 700 },
        { id: 8, productImage: productImg8, rating: '4.8', productName: 'Product 8', productPrice: 800 },
    ];

    return (
        <div className='main-wrapper mt-16 md:mt-20'>
            <section className='bg-gray-200 px-4 py-12 md:px-24 
                text-center top-banner-inner-pages h-32 md:h-68' 
                //style={{ height: '270px' }}
            >
                <h3 className='font-medium text-blue pb-4'>Products</h3>
                <Breadcrumb items={breadcrumbItems} align="center" />
            </section>
            <section className='px-4 py-4 md:px-20'>
                <div className="md:flex">
                    <div className="w-full md:w-1/4 p-4">
                        <Filters 
                            categories={['Electronics', 'Books', 'Clothing']} 
                            breeds={['Adult Dog', 'Adult Cat', 'Dog',]} 
                            brands={['Acana', 'All for Paws', 'Beezteez']} 
                            // prices={['Under $25', '$25 to $50', '$50 to $100', 'Over $100']} 
                            // ratings={[5, 4, 3, 2, 1]} 
                            onFilterChange={(filter, value) => console.log(`Selected ${value} for ${filter}`)} 
                        />
                    </div>
                    <div className="w-full md:w-3/4 p-4">
                        <ProductCard content={productData} cardsPerRow={4} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products