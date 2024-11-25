import React, { useState } from "react";
import logo from "/home_images/Logo.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { post } from "../../../utils/ApiServices";

const Login = ({ setActiveComponent }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleInputChange = (e) => {
    setErrors({});
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);

    try {
      // const response = await fetch(`${BASE_URL}auth/login`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      const response = await post(`/auth/login`, 
         formData
      )

      // const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("token", response.data.results.token);
        localStorage.setItem("userDetails", JSON.stringify(response.data.results));
        // dispatch(fetchUser({ id: data.results.id }));
        toast.success("Login Successful");
        navigate("/admin");
      } else {
        setErrors({
          ...errors,
          general: response.data.message || "Invalid credentials.",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setSubmitted(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-2 z-50">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow">
        <div className="pt-1 md:pt-2 p-6 flex justify-center">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <img className="w-28 lg:w-40" src={logo} alt="Company Logo" />
          </div>
        </div>

        <div className="p-4 md:p-5">
          <h3 className="text-xl text-gray-900">Login</h3>
          {errors.general && (
            <span className="text-red-500">{errors.general}</span>
          )}
        </div>

        <div className="p-4 md:p-5">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b bg-transparent pt-4 pb-1.5 text-sm outline-none"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            <div className="relative">
              <label className="block text-sm font-bold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full border-b bg-transparent pt-4 pb-1.5 text-sm outline-none"
              />
              <button
                type="button"
                onClick={handleClickShowPassword}
                className="absolute inset-y-0 right-3 top-5 flex items-center text-gray-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </div>
            <div className="flex justify-end">
              <Link
                to="/forgetpass"
                className="text-sm text-blue-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="bg-customNavy w-full text-white rounded-lg px-5 py-2.5 text-center"
                disabled={submitted}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
