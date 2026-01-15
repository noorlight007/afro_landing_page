import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import InputField from "../Components/Shared/Reusable/InputField";

const AuthForm = ({
  fields = [],
  onSubmit,
  buttonText = "Submit",
  formType = "login",
  // footerText,
  // footerLinkText,
  // onFooterClick,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 rounded-lg shadow-md w-full max-w-md space-y-5 bg-white py-10 lg:py-16"
    >
      {/* title */}
      <h2 className= "text-2xl lg:text-3xl text-center mb-10 lg:mb-20">
        {formType === "login" ? "Login to your account" : "Register"}
      </h2>

      {fields.map(({ name, type, placeholder, required }) => {
        const isPassword = type === "password";
        const isConfirm = name === "confirmPassword";
        const inputType = isPassword && showPassword ? "text" : type;

        return (
          <div key={name} className="relative">
            <InputField
              type={inputType}
              name={name}
              placeholder={placeholder}
              register={register}
              required={required}
            />

            {/* Toggle password */}
            {isPassword && name === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            )}

            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {placeholder || name} is required
              </p>
            )}

            {/* Confirm password */}
            {isConfirm &&
              watch("confirmPassword") &&
              watch("password") !== watch("confirmPassword") && (
                <p className="text-red-500 text-sm mt-1">
                  Passwords do not match
                </p>
              )}
          </div>
        );
      })}
      {/* button */}
      <button
        type="submit"
        className="bg-secondary w-full py-2 rounded text-white font-semibold hover:opacity-90 transition"
      >
        {buttonText}
      </button>
      {/* toogle login / register */}
      {/* {footerText && (
        <p className="text-sm text-center mt-4">
          {footerText}{" "}
          <span
            onClick={onFooterClick}
            className="text-secondary cursor-pointer font-medium hover:underline"
          >
            {footerLinkText}
          </span>
        </p>
      )} */}
    </form>
  );
};

export default AuthForm;
