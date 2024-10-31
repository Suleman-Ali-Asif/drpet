import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomButton from './CustomButton';
import { AiFillHeart } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';
import "../../App.css"
const ProductCard = ({ content, cardsPerRow, spacing, showCartButton, useRowStyle }) => {
    const [isLiked, setIsLiked] = useState(Array(content.length).fill(false));
    const [cart, setCart] = useContext(CartContext);

    const handleLikeClick = (index) => {
        const newIsLiked = [...isLiked];
        newIsLiked[index] = !newIsLiked[index];
        setIsLiked(newIsLiked);
    };

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const productInCart = cart.find(item => item.id === product.id);

        if (productInCart) {
            toast.warning('You already have this product in your cart');
        } else {
            const newCart = [...cart, product];
            setCart(newCart);
            toast.success('Product Added to cart successfully!');
        }
    };

    const widthClasses = {
        1: 'w-full',
        2: 'w-1/2',
        3: 'w-1/3',
        4: 'w-1/4',
    };

    return (
        <div className="flex flex-wrap h-fit new-arrivals-row">
            {content.map((product, index) => (
                 <Link to={`/product/${product.productName.trim().replace(/\s+/g, '-')}/${product.id}`} key={index} className={`${widthClasses[cardsPerRow]} flex flex-${useRowStyle ? "row" : "col"} 
                    items-${useRowStyle ? "end" : "center"} box-border mb-4 product-card 
                    ${((index + 1) % cardsPerRow !== 0) ? 'pr-3' : ''} shadow-md gray-600 ${spacing}`}>
                    <div className={`relative w-full h-auto md:h-${useRowStyle ? "48" : "64"}`}>
                        <img src={product.productImage} alt={product.productName}
                            className='m-auto' />
                        <div className='absolute top-4 left-4 flex flex-col space-y-5'>
                            <div className='bg-custom-green text-white text-xs px-2 py-2 rounded-md'>
                                SALE
                            </div>
                            <div className='bg-custom-blue text-white text-xs px-2 py-2 rounded-md'>
                                -18
                            </div>
                        </div>
                        {/* <div className='absolute top-4 right-4 p-2 rounded-full border-2 border-gray-400'> */}
                        {/* <AiFillHeart className={isLiked[index] ? 'text-red-500 cursor-pointer' : 'text-gray-500 cursor-pointer'}  */}
                        {/* onClick={() => handleLikeClick(index)} /> */}
                        {/* </div> */}
                    </div>
                    <div className={`mt-2 w-full px-2 flex flex-col justify-around`}>
                        <div className='w-full'>
                            <div className='flex flex-row items-center justify-between'>
                                {/* <Link to={`/product/${product.productName.trim().replace(/\s+/g, '-')}/${product.id}`}> */}
                                    <span className='text-custom-dark-blue font-semibold'>{product.productName}</span>
                                {/* </Link> */}
                                {/* <div className='flex items-center'> */}
                                {/* <FaStar className='text-yellow-500' /> <span className='ml-1 text-gray-400'>{product.rating}</span> */}
                                {/* </div> */}
                            </div>
                            <div className='flex w-full'>
                                <span className='text-gray-400 line-through font-bold text-left mt-3'>
                                    {`AED ${product.productPrice}.00`}
                                </span>
                                <span className='text-red-400 font-bold text-left mt-3 px-2'>
                                    {`AED ${product.productPrice}.00`}
                                </span>
                            </div>
                        </div>
                        {(showCartButton && (
                            <CustomButton customClass='text-gray-600 gray-border w-fit border-2 mt-2 rounded-full text-gray-400
                             hover:bg-custom-blue hover:text-white'
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </CustomButton>
                        ))}
                    </div>

                </Link>
            ))}
        </div>
    );
};

export default ProductCard;