import { useState } from "react";
import { hideModal, openModal } from "../Modal/Modal";
import logo from '/home_images/Logo.png';

const Register = (props) => {

    const [registerFormData, setRegisterFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const handleChangeOpenModal = (value) => {
        if (value === "login-modal") {
            openModal(value);
            hideModal("register-modal");
        }
    }
    const handleInputChange = (e) => {
        setErrors({})
        const { name, value } = e.target;
        setRegisterFormData({
            ...registerFormData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid, you can submit or process the data here
            setSubmitted(true); // Set a submitted flag
            openModal("login-modal");
        } else {
            setSubmitted(false);
            return;
            // Form is not valid, display error messages
        }
    }
    return (
        <>
            <div className="relative p-2 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center gap-4 lg:gap-10 xl:gap-24">
                        <button type="button" className="end-2.5 text-gray-400 bg-transparent  hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal"
                            onClick={() => { hideModal("register-modal") }}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="pt-1 md:pt-2 p-6">

                        <div className="flex items-center justify-between p-4 md:p-3 rounded-t">
                            <div className="flex items-center gap-4 lg:gap-10 xl:gap-24">
                                <div className="logo">
                                    <img className="w-24 lg:w-36 h-auto" src={logo} alt="Company Logo" />
                                </div>
                            </div>


                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white loginText1">
                                Create Account
                            </h3>
                        </div>
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm  text-gray-900 dark:text-white font-bold">First Name</label>
                                    <input placeholder="" type="firstName" name="firstName" id="firstName" required value={registerFormData.firstName} onChange={handleInputChange}
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-900 dark:text-white font-bold">Last Name</label>
                                    <input placeholder="" type="lastName" name="lastName" id="lastName" required value={registerFormData.lastName} onChange={handleInputChange}
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                </div>
                                <div>
                                    <label  className="block text-sm  text-gray-900 dark:text-white font-bold">Email</label>
                                    <input placeholder="" type="email" name="email" id="email" required value={registerFormData.email} onChange={handleInputChange}
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                </div>
                                <div>
                                    <label  className="block text-sm  text-gray-900 dark:text-white font-bold">Phone Number</label>
                                    <input placeholder="" type="phoneNumber" name="phoneNumber" id="phoneNumber" required value={registerFormData.phoneNumber} onChange={handleInputChange}
                                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                </div>
                                <div className="pb-4 pt-4 ">
                                    <button type="submit" className="btnCss w-full text-white hover:bg-red-600 hover:cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                </div>
                                <div className="text-sm font-bold text-gray-500 dark:text-gray-300 text-center">
                                    Existing user? <a href="#" onClick={() => { handleChangeOpenModal('login-modal') }} className="text-blue-700 hover:underline dark:text-blue-500">Login</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
export default Register;


