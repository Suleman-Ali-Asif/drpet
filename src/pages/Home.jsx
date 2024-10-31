import React from "react";
import { CustomButton, Slider, HomeTabs, ProductCard } from "../components";
import homeBanner from "../data/images/catpng.png";
import homeBanner1 from "../data/images/home_banner_1.png";
import homeBanner2 from "../data/images/home_banner_2.png";
import homeBanner3 from "../data/images/home_banner_3.png";
import productImg1 from "../data/images/product_img_1.png";
import productImg2 from "../data/images/product_img_2.png";
import productImg3 from "../data/images/product_img_3.png";
import productImg4 from "../data/images/product_img_4.png";
import productImg5 from "../data/images/product_img_5.png";
import productImg6 from "../data/images/product_img_6.png";
import productImg7 from "../data/images/product_img_7.png";
import productImg8 from "../data/images/product_img_8.png";
import bottomBanner from "../data/images/home_bottom_banner.png";
import reviewImg1 from "../data/images/client_1.png";
import reviewImg2 from "../data/images/client_2.png";
import reviewBg from "../data/images/girl-with-dog.jpg";
import DogFood from "../data/images/DogFood.png";
import CatFood from "../data/images/CatFood.png";
import BirdFood from "../data/images/BirdFood.png";
import ReptileFood from "../data/images/ReptileFood.png";
import FishFood from "../data/images/FishFood.png";
import SmallPetFood from "../data/images/SmallPetFood.png";
import { Link } from "react-router-dom";
import ArrivalBanner from "../data/images/banner.jpg";
import {
  CardIcon,
  DeliveryIcon,
  GiftIcon,
  LeftArrowIcon,
  RightArrowIcon,
  SupportIcon,
} from "../components/generic/Icons";

const Home = () => {
  const slides = [
    { image: homeBanner1, text: "Dog Items" },
    { image: homeBanner2, text: "Dog Items" },
    { image: homeBanner3, text: "Cat Items" },
    { image: homeBanner3, text: "Cat Items" },
    { image: homeBanner2, text: "Dog Items" },
    { image: homeBanner1, text: "Dog Items" },
  ];

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
    {
      id: 5,
      productImage: productImg5,
      rating: "4.8",
      productName: "Product 5",
      productPrice: 500,
    },
    {
      id: 6,
      productImage: productImg6,
      rating: "4.8",
      productName: "Product 6",
      productPrice: 600,
    },
    {
      id: 7,
      productImage: productImg7,
      rating: "4.8",
      productName: "Product 7",
      productPrice: 700,
    },
    {
      id: 8,
      productImage: productImg8,
      rating: "4.8",
      productName: "Product 8",
      productPrice: 800,
    },
  ];

  const productDataBestSeller = [
    {
      id: 5,
      productImage: productImg5,
      rating: "4.8",
      productName: "Product 5",
      productPrice: 500,
    },
    {
      id: 6,
      productImage: productImg6,
      rating: "4.8",
      productName: "Product 6",
      productPrice: 600,
    },
    {
      id: 7,
      productImage: productImg7,
      rating: "4.8",
      productName: "Product 7",
      productPrice: 700,
    },
    {
      id: 8,
      productImage: productImg8,
      rating: "4.8",
      productName: "Product 8",
      productPrice: 800,
    },
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

  const productDataTrending = [
    {
      id: 7,
      productImage: productImg7,
      rating: "4.8",
      productName: "Product 7",
      productPrice: 700,
    },
    {
      id: 8,
      productImage: productImg8,
      rating: "4.8",
      productName: "Product 8",
      productPrice: 800,
    },
    {
      id: 1,
      productImage: productImg1,
      rating: "4.8",
      productName: "Product 1",
      productPrice: 100,
    },
    {
      id: 5,
      productImage: productImg5,
      rating: "4.8",
      productName: "Product 5",
      productPrice: 500,
    },
    {
      id: 6,
      productImage: productImg6,
      rating: "4.8",
      productName: "Product 6",
      productPrice: 600,
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

  const infoItems = [
    {
      icon: <DeliveryIcon color="green" />,
      title: "Free Home Delivery",
      description: "On order of $200+",
    },
    {
      icon: <CardIcon color="green" />,
      title: "COD",
      description: "Cash on Delivery",
    },
    {
      icon: <GiftIcon color="green" />,
      title: "Free Gift Box",
      description: "Buy A Gift",
    },
    {
      icon: <SupportIcon color="green" />,
      title: "Free Support 24/7",
      description: "Online 24hrs a day",
    },
  ];

  const categoryPics = [
    { name: DogFood, link: "/dog-food" },
    { name: CatFood, link: "/dog-food" },
    { name: FishFood, link: "/dog-food" },
    { name: BirdFood, link: "/dog-food" },
    { name: ReptileFood, link: "/dog-food" },
    { name: SmallPetFood, link: "/dog-food" },
  ];
  const reviewData = [
    {
      image: reviewImg1,
      rating: 5,
      text: "I am thrilled with the pet food I purchased from this website! My furry friends have never been happier or healthier.",
      author: "Jenny Wilson",
    },
    {
      image: reviewImg2,
      rating: 4,
      text: "The quality of the ingredients is evident, and I love that I can trust what I am feeding them. Plus, they absolutely love the taste!",
      author: "Devon Lane",
    },
    {
      image: reviewImg2,
      rating: 4,
      text: "The quality of the ingredients is evident, and I love that I can trust what I am feeding them. Plus, they absolutely love the taste!",
      author: "Devon Lane",
    },
    {
      image: reviewImg1,
      rating: 5,
      text: "I am thrilled with the pet food I purchased from this website! My furry friends have never been happier or healthier.",
      author: "Jenny Wilson",
    },
  ];

  const newArrivalsProducts = productDataTopRate.slice(0, 6);
  const NewArrivalsSection = () => (
    <section className="py-12 px-2 md:px-12">
      <div className="flex justify-between">
        <h3 className="font-medium text-custom-dark-blue pb-4">NEW ARRIVALS</h3>
        <div className="flex space-x-4 items-center">
          <LeftArrowIcon />
          <RightArrowIcon />
        </div>
      </div>
      <div className="h-0.5 w-16 bg-custom-green mb-6"></div>
      <ProductCard content={newArrivalsProducts} cardsPerRow={3} />
    </section>
  );

  // Top Categories Section
  const TopCategoriesSection = () => (
    <section className="flex flex-col justify-center py-12 w-full px-8 md:px-24 mt-10">
      <div className="flex flex-col items-start mb-4">
        <h4 className="mb-2 text-xl font-medium">TOP CATEGORIES THIS WEEK</h4>
        <span className="bg-green-400 w-[100px] h-2"></span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
        {categoryPics.map((pic, index) => (
          <Link to={pic.link} key={index} className="flex flex-col items-center">
            <img src={pic.name} alt={`Category ${index + 1}`} className="w-24 h-24 object-contain" />
            <span className="mt-2 text-sm">{pic.link.replace("/", "").replace("-", " ")}</span>
          </Link>
        ))}
      </div>
    </section>
  );

  // New Arrivals Banner
  const NewArrivalsBanner = () => (
    <section className="text-center py-12">
      <div className="flex justify-center">
        <img src={ArrivalBanner} alt="New Arrivals" className="w-full max-w-6xl" />
      </div>
    </section>
  );

  // Trending Products Section
  const TrendingProductsSection = () => (
    <section className="py-12 px-8 md:px-24 text-center">
      <h3 className="font-medium text-blue pb-4">Trending Products</h3>
      <div className="h-0.5 w-64 bg-gray-700 mx-auto mb-6"></div>
      <HomeTabs
        tabs={[
          {
            label: "Top Rated",
            content: (
              <ProductCard content={productDataTopRate} cardsPerRow={4} />
            ),
          },
          {
            label: "Best Seller",
            content: (
              <ProductCard content={productDataBestSeller} cardsPerRow={4} />
            ),
          },
          {
            label: "Trending",
            content: (
              <ProductCard content={productDataTrending} cardsPerRow={4} />
            ),
          },
        ]}
      />

    </section>
  );

  // Promotional Banners Section
  const PromotionalBannersSection = () => (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12 px-8 md:px-24">
      <div className="relative overflow-hidden rounded-lg">
        <img src={bottomBanner} alt="Hill's Ideal Balance" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
          <h3 className="text-white text-2xl font-bold mb-2">HILL'S IDEAL BALANCE</h3>
          <p className="text-white text-xl mb-4">$72.45</p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <img src={bottomBanner} alt="Fish's Food" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
          <h3 className="text-white text-2xl font-bold mb-2">FISHS FOOD</h3>
          <p className="text-white text-xl mb-4">UP TO 50% OFF</p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <img src={bottomBanner} alt="Guinea Pig Treat Ideas" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
          <h3 className="text-white text-2xl font-bold mb-2">GUINEA PIG TREAT IDEAS</h3>
          <p className="text-white text-xl mb-4">SHOP NOW</p>
        </div>
      </div>
    </section>
  );

  // Category Products Section (for both Dog and Cat Food)
  const CategoryProductsSection = ({ category, products }) => (
    <section className="py-12 px-2 md:px-12">
      <div className="flex justify-between">
        <h3 className="font-medium text-custom-dark-blue pb-4">{category} FOOD</h3>
        <div className="flex space-x-4 items-center">
          <LeftArrowIcon />
          <RightArrowIcon />
        </div>
      </div>
      <div className="h-0.5 w-16 bg-custom-green mb-6"></div>
      <ProductCard content={products} cardsPerRow={5} spacing={"mx-3"}/>
    </section>
  );

  // Deal Banners Section
  const DealBannersSection = () => (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 px-8 md:px-24">
      <div className="relative overflow-hidden rounded-lg">
        <img src={bottomBanner} alt="Big Deals on Cat Litter" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <h3 className="text-white text-3xl font-bold mb-2">BIG DEALS</h3>
          <p className="text-white text-xl mb-4">Up To 20% Off Cat Litter</p>
          <CustomButton
            customClass="bg-white text-black hover:bg-gray-200 px-6 py-2"
          >
            Shop Now
          </CustomButton>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg">
        <img src={bottomBanner} alt="Make Their Day" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8">
          <h3 className="text-white text-3xl font-bold mb-2">MAKE THEIR DAY</h3>
          <p className="text-white text-xl mb-4">Up To 30% Off Dog Treats</p>
          <CustomButton
            customClass="bg-white text-black hover:bg-gray-200 px-6 py-2"
          >
            Shop Now
          </CustomButton>
        </div>
      </div>
    </section>
  );

  // You May Be Interested In Section
  const InterestedInSection = () => (
    <section className="py-12 px-8 md:px-24">
      <h3 className="font-medium text-blue pb-4 text-2xl">YOU MAY BE INTERESTED IN</h3>
      <ProductCard content={productDataTrending.slice(0, 4)} cardsPerRow={4} useRowStyle={true} showCartButton={true}/>
    </section>
  );


  return (
    <div className="main-wrapper pt-32">
      <section className="flex flex-col  md:min-h-screen main-wrapper py-24 ">
        <div
          className="w-full flex-grow flex px-24 rounded-bl-10xl bg-cover sm:bg-contain"
          style={{
            backgroundImage: `url(${homeBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // Ensures the image covers the div without repeating
            backgroundPosition: "center",
          }}
        >
          <div
            className="flex flex-col text-left px-8 md:px-24 pt-32 
                        md:pt-48 pb-12 md:pb-0"
          >
            <h1
              className="text-xl md:text-6xl font-medium 
                            pb-3 max-w-lg w-56 md:w-full"
            >
              DILICIOUS BITES WITH BENIFITS
            </h1>
            <span>100% made in U.S.A chicken breast jerky</span>
            <div className="inline-block">
              <CustomButton customClass="text-green green-border border mt-10 hover:bg-green-500 hover:text-white rounded-full">
                Shop Now
              </CustomButton>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 flex justify-center">
        <div className="flex py-12 px-8 md:px-24 mt-10 qualities">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="flex py-10 px-20 border border-gray-100"
            >
              {item.icon}
              <div className="flex flex-col ml-2">
                <span>{item.title}</span>
                <span className="text-gray-400">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Slider */}
      <section className="flex flex-col justify-center py-12 w-1/2 px-8 md:px-24 mt-10 mx-auto top-categories">
        <div className="flex flex-col items-start mb-4 items-left">
          <h4 className="mb-2">TOP CATEGORIES THIS WEEK</h4>
          <span className="bg-green-400 w-[100px] h-2"></span>
        </div>
        <div className="flex border border-gray-100 w-full justify-center">
          {categoryPics.map((pic, index) => (
            <Link to={pic.link} key={index}>
              <img src={pic.name} alt={index} />
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center">
        <div className="flex justify-center">
          <img src={ArrivalBanner} alt="" />
        </div>
      </section>

      {/* Products */}
      <div className="flex new-arrivals">
      <NewArrivalsSection />
      <NewArrivalsSection />
      </div>

      <PromotionalBannersSection />
      <CategoryProductsSection category="DOG" products={productDataTopRate.slice(0, 8)} id="dog-food" />
      <DealBannersSection />
      <CategoryProductsSection category="CAT" products={productDataBestSeller.slice(0, 8)} />
      <InterestedInSection />


    </div>
  );
};

export default Home;
