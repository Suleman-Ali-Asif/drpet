import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Breadcrumb, DynamicForm } from "../components";
import { API_BASE_URL } from "../config";
import { toast } from "react-toastify";

const Contact = () => {
  const breadcrumbItems = [
    { name: "Home", link: "/" },
    { name: "Conatct Us", active: true },
  ];

  const fields = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      isRow: true,
      customMargins: "mr-2",
    },
    {
      type: "text",
      name: "subject",
      placeholder: "Subject",
      isRow: true,
      customMargins: "ml-2",
    },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "textarea", name: "message", placeholder: "Message" },

    { type: "button", buttonText: "Send message" },
  ];

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    //setErrors({ ...errors, [fieldName]: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${API_BASE_URL}/Auth/Contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("data", data);
    if (data.succeeded) {
      toast.success("Message sent successfully");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="main-wrapper mt-16 md:mt-20">
      <section className="bg-gray-200 px-4 py-8 md:py-24 md:px-24 text-center top-banner-inner-pages h-auto md:h-68">
        <h3 className="font-medium text-blue pb-4">Contact Us</h3>
        <Breadcrumb items={breadcrumbItems} align="center" />
      </section>

      <section className="md:flex space-x-8 px-12 py-12 md:px-36 md:mb-0">
        <div className="w-full md:w-4/12 text-left">
          <div
            className="rounded-md border-2 border-gray-300 
                        border-dashed p-6 flex items-center h-24"
          >
            <FaPhone className="text-green mr-6" size={20} />
            <div>
              <p className="font-semibold mb-2">Phone</p>
              <p className="text-xs">Contact : +971 488 18533</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 text-left">
          <div
            className="rounded-md border-2 border-gray-300 
                        border-dashed p-6 flex items-center h-24"
          >
            <FaEnvelope className="text-green mr-6" size={20} />
            <div>
              <p className="font-semibold mb-2">Email</p>
              <p className="text-xs">inquiry@doctorpet.com</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 text-left">
          <div
            className="rounded-md border-2 border-gray-300 
                        border-dashed p-4 flex items-center h-24"
          >
            <FaMapMarkerAlt className="text-green mr-6" size={28} />
            <div>
              <p className="font-semibold mb-2">Address</p>
              <p className="text-xs">
                Al Abraj , Block – A 3rd Floor Room 306 – Al Ittihad Rd – Al
                Mamzar – Dubai
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-12 py-12 md:px-36 md:mb-8">
        <div className="w-full text-center">
          <p className="font-semibold text-green mb-4">Contact us</p>
          <h3 className="font-medium text-blue pb-4">Get in touch</h3>
          <p>We’d love to hear from you. Please fill out this form.</p>
        </div>

        <div className="flex justify-center items-center h-screen">
          <DynamicForm
            fields={fields}
            formData={formData}
            errors={errors}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
