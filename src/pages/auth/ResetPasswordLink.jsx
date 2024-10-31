import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { generateValidationSchema } from "../../utils/ValidationSchema";
import * as Yup from "yup";
import { DynamicForm, AuthPageLayout } from "../../components";

import signupImage from "../../data/images/auth/login.png";

const ResetPasswordLink = () => {
  const fields = [
    { type: "token", name: "token" },

    { type: "password", name: "password", placeholder: "Password" },
    {
      type: "confirmedPassword",
      name: "confirmedPassword",
      placeholder: "Confirm Password",
    },
    { type: "button", buttonText: "Send OTP" },
  ];

  const validationSchema = generateValidationSchema(fields);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInputChange = (fieldName, value) => {
    console.log(fieldName, value);
    setFormData({ ...formData, [fieldName]: value });
    setErrors({ ...errors, [fieldName]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      toast.success("Password reset OTP verified successfully");

      setTimeout(() => {
        navigate("/auth/reset-password");
      }, 5000);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row  justify-between items-stretch min-h-screen main-wrapper">
      <AuthPageLayout image={signupImage} />

      <div
        className="w-full sm:w-1/2 flex-grow bg-white flex flex-col items-left
                py-10 px-12 rounded-bl-10xl justify-center"
      >
        <h2
          className="w-full max-w-sm text-2xl sm:text-2xl md:text-2xl lg:text-3xl 
                text-left font-semibold mb-2"
        >
          Reset Password
        </h2>
        <p className="w-full max-w-sm text-left text-gray-500">
          We’ve sent you the 4-digits code on your email. Please enter the
          following code to continue
        </p>

        <DynamicForm
          fields={fields}
          formData={formData}
          errors={errors}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ResetPasswordLink;
