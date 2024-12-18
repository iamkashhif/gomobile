import React, { useState } from "react";
import logo from "/home_images/Logo.png"; // Adjust path as necessary
import { useNavigate } from "react-router-dom";
import { post } from "../../../utils/ApiServices";
import CircularLoader from "../tables/Loader";
import { toast } from "react-toastify";

const PasswordVerify = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
  
    try {
      setLoading(true);
      const response = await post("/auth/reset-password", {
        email,
        password,
        token: localStorage.getItem("token"),
      });
  
      console.log({ response });
  
      if (response.data.results === 200) {
        toast.success("Password updated successfully!");
        setSuccessMessage("Password updated successfully!");
        navigate("/"); // Redirect user to another page
      } else {
        // Show an error toast with the response message or a default message
        toast.error(
          response.message || "Failed to reset password. Please try again."
        );
        setError(
          response.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message || "An error occurred. Please try again later.");
      // setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center p-2 z-50">
      <div className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow">
        <div className="pt-1 md:pt-2 p-6">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <img
              className="w-24 lg:w-36 h-auto"
              src={logo}
              alt="Company Logo"
            />
          </div>
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-xl font-khand text-gray-900">Reset Password</h3>
        </div>
        <div className="p-4 md:p-5">
          <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b bg-transparent pt-4 pb-1.5 text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-b bg-transparent pt-4 pb-1.5 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-gray-500"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border-b bg-transparent pt-4 pb-1.5 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2 text-gray-500"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {error && <span className="text-red-500 text-xs">{error}</span>}
            {successMessage && (
              <span className="text-green-500 text-xs">{successMessage}</span>
            )}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-customNavy w-full text-white rounded-lg px-5 py-2.5 text-center flex items-center justify-center"
                disabled={loading} // Disable the button during loading
              >
                {loading ? (
                  <div className="flex items-center">
                    <CircularLoader size="w-6 h-6" />
                    <span className="ml-2">Please wait...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordVerify;
