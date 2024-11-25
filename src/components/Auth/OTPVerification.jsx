import React, { useState } from "react";
import logo from "/home_images/Logo.png";
import { useNavigate } from "react-router-dom";
import { post } from "../../../utils/ApiServices";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState(1); // 1 for email, 2 for OTP

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    try {
      const response = await post(
        `/auth/forgotPassword`,
        // {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({  }),
        // }
        {email}
      );

      // const result = await response.json();

      if (response.status === 200) {
        setStep(2); // Move to OTP entry step
      } else {
        setError(response.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    setError("");

    try {
      const response = await post(
        `/auth/verify-otp/email`,
        // {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ email, otp }),
        // }
        { email, otp }
      );

      // const result = await response.json();
      localStorage.setItem("token", response.data.results.data.token);

      if (response.status === 200) {
        navigate("/passwordverify"); // Replace with your next page route
      } else {
        setError(response.data.message || "Incorrect OTP. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-2 z-50">
      <div className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow">
        <div className="pt-1 md:pt-2 p-6">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <div className="flex items-center gap-4 lg:gap-10 xl:gap-24">
              <div className="logo">
                <img
                  className="w-24 lg:w-36 h-auto"
                  src={logo}
                  alt="Company Logo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-xl font-khand text-gray-900">
            {step === 1 ? "Forgot Password" : "Enter OTP"}
          </h3>
        </div>
        <div className="p-4 md:p-5">
          <p className="text-sm font-sans text-gray-600">
            {step === 1
              ? "Enter your email to receive an OTP for password reset."
              : "Enter the OTP sent to your email."}
          </p>
          <form
            className="space-y-4 pt-4"
            onSubmit={step === 1 ? handleEmailSubmit : handleOtpSubmit}
          >
            {step === 1 ? (
              <div>
                <label className="block text-sm text-customBlack font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setError("");
                    setEmail(e.target.value);
                  }}
                  className="font-opensans peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm text-customBlack font-bold">
                  OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setError("");
                  }}
                  className="font-opensans peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
            )}
            {error && <span className="text-red-500 text-xs">{error}</span>}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-customNavy w-full text-white hover:bg-navy-600 hover:cursor-pointer focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {step === 1 ? "Send OTP" : "Verify OTP"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
