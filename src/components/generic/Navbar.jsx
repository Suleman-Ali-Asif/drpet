import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { BsTelephone, BsTelephoneFill } from "react-icons/bs";
import { FaTruck, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../data/LOGO.png"; // Add your logo path here
import { FaPerson } from "react-icons/fa6";
import { useAuth } from "../../contexts/AuthProvider";

const navLinks = {
  home: {
    name: "HOME",
    link: "/",
  },
  products: {
    name: "PRODUCTS",
    link: "/products",
  },
  shop: {
    name: "SHOP",
    link: "/shop",
  },
  pages: {
    name: "PAGES",
    link: "/pages",
  },
  blog: {
    name: "BLOGS",
    link: "/",
  },
  content: {
    name: "CONTENT",
    link: "/content",
  },
};
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { auth, logout } = useAuth();
  console.log("auth: ", auth);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Top Section: Logo, Search Bar, and Info */}
      <div className="flex justify-center items-center px-8 md:px-48 py-4 bg-white">
        {/* Left: Logo & Search */}
        <div className="flex items-center">
          <img src={logo} alt="DoctorPet Logo" className="h-10 mr-6" />
          <div className="flex items-center bg-white border border-gray-300 rounded-full">
            <input
              type="text"
              placeholder="Search our store"
              className="px-4 py-2 w-60 outline-none rounded-l-full"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-full">
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </div>

        {/* Right: Phone Number, Track Order, Sign In, Cart */}
        <div className="flex items-center flex-col space-x-6 text-sm ml-10">
          <div className="flex items-center space-x-2 border-b-2 border-gray-400">
            <span>Call Us Now: </span>
            {/* call icon */}
            <div className="bg-red-500 rounded-md p-1">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7466 1.19116C16.0903 1.28491 16.3403 1.56616 16.3403 1.90991C16.3403 9.94116 9.84033 16.4099 1.84033 16.4099C1.46533 16.4099 1.18408 16.1912 1.09033 15.8474L0.340332 12.5974C0.277832 12.2537 0.434082 11.8787 0.777832 11.7224L4.27783 10.2224C4.59033 10.0974 4.93408 10.1912 5.15283 10.4412L6.71533 12.3474C9.15283 11.1912 11.1216 9.19116 12.2466 6.81616L10.3403 5.25366C10.0903 5.03491 9.99658 4.69116 10.1216 4.37866L11.6216 0.878662C11.7778 0.534912 12.1528 0.347412 12.4966 0.441162L15.7466 1.19116Z"
                  fill="white"
                />
              </svg>
            </div>
            <span>(+800) 123 456 329</span>
          </div>
          <div className="flex justify-between my-5">
            <Link
              to="/track-order"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
            >
              <FaTruck />
              <span>Track Your Order</span>
            </Link>
            {auth.isLoggedIn ? (
              <button
                onClick={logout}
                className="flex items-center pl-2 ml-2 border-l border-l-gray-500 space-x-1 text-gray-700 hover:text-blue-500"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/signup"
                className="text-gray-700 ml-2 pl-2 border-l border-gray-500 hover:text-blue-500"
              >
                Sign In or Register
              </Link>
            )}
            <Link
              to="/profile"
              className="text-gray-700 ml-2 pl-2 border-l border-gray-500 hover:text-blue-500 flex items-center space-x-1"
            >
              <FaUser /> <span>Account</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div className="text-gray-600 flex border border-gray-100">
        {/* All Categories Button */}
        <div className="flex items-center space-x-2 cursor-pointer text-white bg-blue-600 py-5 ps-5 pe-20">
          <GiHamburgerMenu size={24} />
          <span>All Categories</span>
        </div>

        {/* Main Navigation */}
        <div className="ml-10 space-x-6 flex items-center">
          {Object.values(navLinks).map((link, index) => (
            <Link
              key={index}
              to={`${link.link}`}
              className="text-gray-700 hover:text-blue-500 py-5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/cart"
            className="flex space-x-1 border-l border-gray-100 pl-5 text-gray-700 hover:text-blue-500 py-5"
          >
            {/* Cart */}
            <div className="flex items-center space-x-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 7.25L24.75 24.75H0.25L2 7.25H5.5V7.03125C5.5 5.17188 6.16536 3.57682 7.49609 2.24609C8.82682 0.915365 10.4219 0.25 12.2812 0.25H12.7188C14.5781 0.25 16.1732 0.915365 17.5039 2.24609C18.8346 3.57682 19.5 5.17188 19.5 7.03125V7.25H23ZM7.25 7.03125V7.25H17.75V7.03125C17.75 5.64583 17.2578 4.46094 16.2734 3.47656C15.2891 2.49219 14.1042 2 12.7188 2H12.2812C10.8958 2 9.71094 2.49219 8.72656 3.47656C7.74219 4.46094 7.25 5.64583 7.25 7.03125ZM2.21875 23H22.7812L21.4141 9H19.5V10.9688C20.0833 11.3333 20.375 11.8438 20.375 12.5C20.375 13.0104 20.2109 13.4297 19.8828 13.7578C19.5547 14.0859 19.1354 14.25 18.625 14.25C18.1146 14.25 17.6953 14.0859 17.3672 13.7578C17.0391 13.4297 16.875 13.0104 16.875 12.5C16.875 11.8438 17.1667 11.3333 17.75 10.9688V9H7.25V10.9688C7.83333 11.3333 8.125 11.8438 8.125 12.5C8.125 13.0104 7.96094 13.4297 7.63281 13.7578C7.30469 14.0859 6.88542 14.25 6.375 14.25C5.86458 14.25 5.44531 14.0859 5.11719 13.7578C4.78906 13.4297 4.625 13.0104 4.625 12.5C4.625 11.8438 4.91667 11.3333 5.5 10.9688V9H3.58594L2.21875 23Z"
                  fill="#555555"
                />
              </svg>
              {/* badge */}
              <div className="flex items-center justify-center bg-custom-green text-white rounded-full text-center w-5 h-5 text-xs">
                <span>6</span>
              </div>
            </div>

            <div className="flex flex-col justify-between pe-5">
              <p>Your cart</p>
              <p>$0.00</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
