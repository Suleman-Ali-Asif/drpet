import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGooglePlusG,
} from "react-icons/fa";
import paymentIcon from "../../data/images/payment-icons.png";
const Footer = () => {
  return (
    <div className="bg-[#121824] text-gray-400 py-12 px-32 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <p className="text-gray-500 mb-6">
            We are a team of designers and developers that create high quality
            Wordpress, Magento, Prestashop, Opencart.drd
          </p>
          <p className="text-white">Contactdtyh</p>
          <p className="text-white">169-C, Technohub, Dubai Silicon Oasis.</p>
          <div className="flex space-x-4 mt-4 text-white">
            <FaFacebook className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
            <FaGooglePlusG className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6" />
          </div>
        </div>

        {/* Information Section */}
        <div className="ml-10">
          <h4 className="text-white font-bold mb-4">Information</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care Section */}
        <div>
          <h4 className="text-white font-bold mb-4">Customer Care</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Register
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-white font-bold mb-4">
            Subscribe to Our Newsletter
          </h4>
          <p className="mb-4">
            Subscribe to the DoctorPet mailing list to receive updates on new
            arrivals, special offers, and other discount information.
          </p>
          <form className="flex items-center border border-gray-500 rounded">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 w-full bg-transparent text-white outline-none"
            />
            <button
              type="submit"
              className="p-2 bg-gray-600 hover:bg-gray-700 text-white rounded-r"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M2.015 12l17.971-12v24z" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 pt-6 text-center">
        <ul className="flex justify-center space-x-4 mb-4">
          <li className="border-r p-1">
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </li>
          <li className="border-r p-1">
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </li>
          <li className="border-r p-1">
            <a href="/profile" className="hover:text-white">
              Service
            </a>
          </li>
          <li className="border-r p-1">
            <a href="#" className="hover:text-white">
              Shipping Policy
            </a>
          </li>
          <li className="border-r p-1">
            <a href="#" className="hover:text-white">
              News
            </a>
          </li>
          <li className="p-1">
            <a href="#" className="hover:text-white">
              FAQ
            </a>
          </li>
        </ul>
        <div className="flex justify-center mb-4">
          <img src={paymentIcon} alt="Skrill" className="w-72" />
        </div>
        <p className="text-gray-500">
          Copyright © <span className="text-green-500">DoctorPet</span>. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
