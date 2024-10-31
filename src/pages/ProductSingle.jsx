import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Breadcrumb,
  StarRating,
  Tabs,
  ClientReview,
  CustomButton,
  ProductCard,
} from "../components";
import { CartContext } from "../contexts/CartContext";
import { FaShippingFast, FaLock, FaUserTie } from "react-icons/fa";

// Import your images
import Image1 from "../data/images/product_img_1.png";
import Image2 from "../data/images/product_single_2.png";
import Image3 from "../data/images/product_single_3.png";
import Image4 from "../data/images/product_single_4.png";
import Image5 from "../data/images/product_single_5.png";

import productImg1 from "../data/images/product_img_1.png";
import productImg2 from "../data/images/product_img_2.png";
import productImg3 from "../data/images/product_img_3.png";
import productImg4 from "../data/images/product_img_4.png";

import ClientImg1 from "../data/images/client_3.png";
import ClientImg2 from "../data/images/client_4.png";
import ClientImg3 from "../data/images/client_5.png";
import {
  AmazonIcon,
  ApplePayIcon,
  BitcoinIcon,
  FacebookIcon,
  GooglePayIcon,
  GooglePlusIcon,
  LeftArrowIcon,
  PaypalIcon,
  PinterestIcon,
  RightArrowIcon,
  TwitterIcon,
  VisaIcon,
} from "../components/generic/Icons";
import { API_BASE_URL } from "../config";
import { useAuth } from "../contexts/AuthProvider";

const ProductSingle = () => {
  let { productID, productName } = useParams();
  console.log("productID", productID);
  const productNameWithSpaces = productName.replace(/-/g, " ");
  const breadcrumbItems = [
    { name: "Products", link: "/products" },
    { name: productNameWithSpaces, active: true },
  ];
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState("Description");
  const [reviewCount, setReviewCount] = useState(15);
  //   const [reviewData, setReviewData] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  // State to manage the currently displayed big image
  const [bigImage, setBigImage] = useState(Image1);
  const [review, setReview] = useState();
  // Function to change the big image
  const handleImageClick = (newImage) => {
    setBigImage(newImage);
  };

  const [isLoading, setIsLoading] = useState(true);
  const { auth } = useAuth();
  async function getProduct() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/Product/Detail/${productID}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const productJson = await response.json();
      if (productJson.succeeded) {
        setData(productJson.data);
      } else {
        toast.error("Product not found.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  let product;
  useEffect(() => {
    // Fetch reviews and set them in state
    getReviews();
  }, []);
  const handleAddReview = (newReview) => {
    setReview((prevReviews) => [newReview, ...prevReviews]);
  };
  const handleDeleteReview = (deletedReviewId) => {
    setReview(review.filter((review) => review.id !== deletedReviewId));
  };
  const getReviews = async () => {
    const response = await fetch(
      `${API_BASE_URL}/Review/All/${productID}?pageNumber=1&pageSize=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const reviews = data.data;
    setReview(reviews);
    console.log("reviews: ", reviews);
  };
  console.log("data: ", data);
  async function onSubmit(e) {
    e.preventDefault();

    // Create a new FormData object, automatically including form inputs
    const formData = new FormData(e.target);
    const newReview = {
      comments: formData.get("comments"),
      points: parseInt(formData.get("points"), 10),
      userId: formData.get("userId"),
      productID: formData.get("productID"),
      attachments: formData.get("attachments"),
      clientName: auth.clientName,
      clientImage: auth.clientImage,
      reviewDate: new Date().toISOString(),
    };
    try {
      const response = await fetch(
        `${API_BASE_URL}/Review/AddWithAttachments`,
        {
          method: "POST",
          body: formData, // Send FormData directly
        }
      );
      console.log(formData);
      const reviewJson = await response.json();

      console.log(reviewJson);
      if (reviewJson.succeeded) {
        toast.success("Review added successfully!");

        handleAddReview(newReview);
      } else {
        toast.error("Review not added successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const reviewData = [
    {
      clientImage: ClientImg1,
      rating: 5,
      reviewText:
        "This is the best product I have ever used. I will definitely buy it again.",
      clientName: "Jane Doe",
      reviewDate: "May 12, 2021",
    },
    {
      clientImage: ClientImg2,
      rating: 4,
      reviewText: "I am very happy with the product. It is very useful.",
      clientName: "Jane Smith",
      reviewDate: "June 2, 2021",
    },
    {
      clientImage: ClientImg3,
      rating: 5,
      reviewText:
        "I will recommend this product to my friends. It is very good.",
      clientName: "Alice Doe",
      reviewDate: "July 12, 2021",
    },
  ];

  const tabsData = [
    {
      label: "DESCRIPTION",
      content: (
        <div>
          <p>{data.longDescription}</p>
        </div>
      ),
    },

    {
      label: "ADD REVIEW",
      content: (
        <form onSubmit={onSubmit}>
          <textarea
            name="comments"
            placeholder="Enter review"
            rows={5}
            className="w-full border p-5 border-gray-100 shadow required"
          ></textarea>

          <input
            name="points"
            type="number"
            className="w-full border p-5 border-gray-100 shadow required my-2"
            placeholder="Enter rating"
          />

          <input type="text" name="productID" value={productID} readOnly />

          {auth && (
            <input type="text" name="userId" value={auth.userId} readOnly />
          )}

          <input type="file" name="attachments" />

          <button type="submit">Submit</button>
        </form>
      ),
    },
    {
      label: "REVIEWS",
      content: (
        <>
          {review &&
            review.map((review, index) => (
              <ClientReview
                key={index}
                reviewId={review.id}
                productId={productID}
                clientImage={review.images}
                rating={review.points}
                reviewText={review.comments}
                clientName={review.clientName}
                reviewDate={review.createdOn}
                userId={review.userId}
                onDelete={handleDeleteReview}
              />
            ))}
        </>
      ),
    },
    {
      label: "COMMENTS",
      content: (
        <>
          {reviewData.map((review, index) => (
            <ClientReview
              key={index}
              clientImage={review.clientImage}
              rating={review.rating}
              reviewText={review.reviewText}
              clientName={review.clientName}
              reviewDate={review.reviewDate}
            />
          ))}
        </>
      ),
    },
  ];

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getProduct();
  }, []);
  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      toast.warning("You already have this product in your cart");
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
      toast.success("Product Added to cart successfully!");
    }
  };

  const productDataTopRate = [
    {
      id: 1,
      productImage: productImg1,
      rating: "4.8",
      productName: "Product 1",
      productPrice: 100,
    },
    {
      id: 2,
      productImage: productImg2,
      rating: "4.8",
      productName: "Product 2",
      productPrice: 200,
    },
    {
      id: 3,
      productImage: productImg3,
      rating: "4.8",
      productName: "Product 3",
      productPrice: 300,
    },
    {
      id: 4,
      productImage: productImg4,
      rating: "4.8",
      productName: "Product 4",
      productPrice: 400,
    },
  ];

  return (
    <div className="main-wrapper mt-16 md:mt-20">
      <section className="px-4 py-12 md:px-24 text-center top-banner-inner-pages h-32 md:h-68">
        <h3 className="font-medium text-blue pb-4">{productNameWithSpaces}</h3>
        <Breadcrumb items={breadcrumbItems} align="center" />
      </section>
      <section className="md:flex px-12 py-4 md:px-20 w-">
        <div className="d-none w-1/12"></div>
        <div className="w-full md:w-6/12 flex flex-col">
          <div className="relative w-96 h-96 flex justify-center items-center">
            <img src={bigImage} alt="Product" className="" />
            <div className="absolute top-4 left-4 flex flex-col space-y-5">
              <div className="bg-custom-green text-white text-xs px-2 py-2 rounded-md">
                SALE
              </div>
              <div className="bg-custom-blue text-white text-xs px-2 py-2 rounded-md">
                -18
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <LeftArrowIcon />
            <div className="flex flex-row space-x-2 w-full mx-5">
              <img
                src={Image2}
                alt="Product"
                onClick={() => handleImageClick(Image1)}
                className="h-26 mb-2 cursor-pointer border-custom-green border-2"
              />
              <img
                src={Image3}
                alt="Product"
                onClick={() => handleImageClick(Image3)}
                className="h-26 mb-2 cursor-pointer"
              />
              <img
                src={Image4}
                alt="Product"
                onClick={() => handleImageClick(Image4)}
                className="h-26 mb-2 cursor-pointer"
              />
              <img
                src={Image5}
                alt="Product"
                onClick={() => handleImageClick(Image5)}
                className="h-26 cursor-pointer"
              />
            </div>
            <RightArrowIcon />
          </div>
        </div>
        <div className="w-full md:w-4/12 mt-6 md:mt-0 md:pl-12">
          <h3>{data.name}</h3>
          <div className="md:mt-4">
            {/* <div className="mt-4 md:mt-6 flex items-center"> */}
            {/* <StarRating rating={4} /> */}
            {/* <span className="text-xs md:text-md text-gray-400 ml-2">157 Reviews</span> */}
            {/* </div> */}
            <div className="text-gray-400">SKU:1231</div>
            <div className="flex items-center mt-2 md:mt-8">
              <p className="text-lg md:text-xl font-semibold text-red-400">
                AED {data.price}
              </p>
              <p className="ml-2 text-gray-400 line-through">
                AED {data.discountPercentage}
              </p>
            </div>
            <p className="font-semibold text-gray-600">{data.currencySymbol}</p>

            <div className="font-bold text-xs text-black mt-8">
              Availability: {data.totalRecords} left in stock
            </div>
            <p className="text-xs text-gray-600">{data.shortDescription}</p>
            <div className="flex justify-left items-center mt-6">
              <span className="text-gray-600 font-semibold pr-4">Size: </span>
              {["s", "m", "l", "xl"].map((label, index) => (
                <button
                  key={index}
                  className={`text-sm md:text-md py-2 px-2 md:py-2 md:px-2 first:pl-0 
                            ${
                              index == 0
                                ? "font-semibold text-custom-green"
                                : "text-gray-400"
                            }`}
                  // onClick={ }
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex justify-left items-center mt-6">
              <span className="text-gray-600 font-semibold pr-2">Colors: </span>
              {["red", "green", "blue", "yellow", "white"].map(
                (color, index) => (
                  <div
                    key={index}
                    className={`rounded-full h-6 w-6 mx-1 shadow-lg ${
                      index == 0 ? "border-2 border-custom-dark-blue" : ""
                    }`}
                    style={{
                      background: color,
                    }}
                    // onClick={ }
                  ></div>
                )
              )}
            </div>
            <div className="flex items-start mt-6">
              <input type="text" defaultValue={2} className="p-2 w-14 mr-5" />
              <CustomButton
                customClass="text-custom-green green-border w-fit border-2 rounded-full text-gray-400
                             hover:bg-custom-blue hover:text-white"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </CustomButton>
              <div className="flex flex-col ml-5">
                <CustomButton
                  customClass="text-white bg-blue-500 
                                hover:bg-gray-600 px-10 py-2 my-2"
                  onClick={() => addToCart(productData)}
                >
                  Buy it now
                </CustomButton>
                <CustomButton
                  customClass="text-white green-border w-fit border-2 rounded-full text-gray-400 bg-custom-green
                             hover:bg-custom-blue hover:text-white"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </CustomButton>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Category: Cat Food ,Deal Product ,Dog Food
            </p>
            <p className="text-sm text-gray-600 mt-4">Tags: blue, green, I</p>
            <div className="flex justify-left items-center mt-6 space-x-1">
              <span className="text-gray-600 font-semibold pr-2">Share: </span>
              <FacebookIcon />
              <TwitterIcon />
              <GooglePlusIcon />
              <PinterestIcon />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Guaranteed Safe Checkout
            </p>
            <div className="flex mt-2 space-x-2">
              <div className="border border-gray-300 shadow-sm box-border px-2 py-1 w-14 flex items-center justify-center">
                <AmazonIcon />
              </div>
              <div className="border border-gray-300 shadow-sm box-border px-2 py-1 w-14 flex items-center justify-center">
                <ApplePayIcon />
              </div>
              <div className="border border-gray-300 shadow-sm box-border px-2 py-1 w-14 flex items-center justify-center">
                <BitcoinIcon />
              </div>
              <div className="border border-gray-300 shadow-sm box-border px-2 py-1 w-14 flex items-center justify-center">
                <GooglePayIcon />
              </div>
              <div className="border border-gray-300 shadow-sm box-border px-2 py-1 w-14 flex items-center justify-center">
                <PaypalIcon />
              </div>
              <div className="border border-gray-300 shadow-sm box-border px-2 py-1 w-14 flex items-center justify-center">
                <VisaIcon />
              </div>
            </div>
            <div className="mt-4 md:mt-8"></div>
          </div>
        </div>
      </section>

      <section className="md:flex px-12 py-4 md:px-20">
        {/* <div className='d-none w-1/12'></div> */}
        <div className="w-full min-w-full px-40 flex">
          <Tabs tabs={tabsData} setActiveTab={setActiveTab} />
        </div>
      </section>

      <section className="md:flex flex-col px-12 py-4 md:px-20">
        <h3 className="font-medium text-custom-dark-blue pb-4">
          YOU MAY ALSO LIKE
        </h3>
        <div className="h-0.5 w-16 bg-custom-green mb-6"></div>
        <ProductCard content={productDataTopRate} cardsPerRow={4} />
      </section>
    </div>
  );
};

export default ProductSingle;
