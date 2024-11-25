import { useState } from "react";
import logo from "/home_images/Logo.png";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
// import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import Modal, { openModal } from "../Modal/Modal";
// import OTPVerification from "../Auth/OTPVerification";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import OTPVerification from "../Auth/OTPVerification";

const MobileNavbar = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 bg-customBlack bg-opacity-75 z-50 transform transition-transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } lg:hidden`}
    onClick={onClose}
  >
    <div className="bg-white p-5 h-full overflow-y-auto">
      <div className="flex justify-end mb-4">
        <button
          onClick={onClose}
          className="text-2xl transition ease-in-out hover:text-customRed"
        >
          <IoClose />
        </button>
      </div>
      <div className="flex flex-col text-sm font-semibold gap-5 font-opensans">
        <a
          href="/"
          className="hover:text-customRed text-sm transition ease-in-out font-opensans"
        >
          Home
        </a>
        <a
          href="/schedule"
          className="hover:text-customRed text-sm transition ease-in-out font-opensans"
        >
          Schedule an Installation
        </a>
        <a
          href="/shop"
          className="hover:text-customRed text-sm transition ease-in-out font-opensans"
        >
          Shop for Tires
        </a>
        <a
          href="/franchiseInfo-About  "
          className="hover:text-customRed text-sm transition ease-in-out font-opensans"
        >
          Franchise Info
        </a>
        <a
          href="/login"
          className="hover:text-customRed text-customRed text-sm  transition ease-in-out font-opensans"
        >
          Login/Signup
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  const handleLoginBtnClick = () => {
    console.log("TEST");
    openModal("login-modal");
  };
  return (
    <div>
      <MobileNavbar isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
      <div className="bg-customRed font-opensans text-sm py-3 text-white text-center font-semibold flex flex-row items-center justify-center gap-2">
        <span>
          Free Shipping | Payment Plans Available At Checkout{" "}
          <a href="/" className="underline">
            Learn more
          </a>
        </span>
      </div>
      <div className="h-20 bg-white px-4 py-2 mb-2 lg:px-10 flex justify-between items-center">
        <div className="flex items-center gap-4 lg:gap-10 xl:gap-24">
          <div className="logo mx-1">
            <img
              className="w-36 lg:w-36 h-auto"
              src={logo}
              alt="Company Logo"
            />
          </div>
          <div className="hidden lg:flex items-center gap-5">
            <div className="search-icon cursor-pointer bg-customGrey p-2  rounded-full  text-customTextGrey2 hover:text-customRed transition ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
              >
                <path
                  id="Path_47"
                  data-name="Path 47"
                  d="M130.652-818.7a10.282,10.282,0,0,1-7.558-3.093A10.282,10.282,0,0,1,120-829.349a10.282,10.282,0,0,1,3.093-7.558A10.282,10.282,0,0,1,130.652-840a10.282,10.282,0,0,1,7.558,3.093,10.282,10.282,0,0,1,3.093,7.558,9.989,9.989,0,0,1-.574,3.4,9.764,9.764,0,0,1-1.557,2.827l4.377,4.377A1.554,1.554,0,0,1,144-817.6a1.554,1.554,0,0,1-.451,1.147A1.554,1.554,0,0,1,142.4-816a1.554,1.554,0,0,1-1.147-.451l-4.377-4.377a9.768,9.768,0,0,1-2.827,1.557A9.989,9.989,0,0,1,130.652-818.7Zm0-3.277a7.111,7.111,0,0,0,5.223-2.151,7.111,7.111,0,0,0,2.151-5.223,7.111,7.111,0,0,0-2.151-5.223,7.112,7.112,0,0,0-5.223-2.151,7.112,7.112,0,0,0-5.223,2.151,7.111,7.111,0,0,0-2.151,5.223,7.111,7.111,0,0,0,2.151,5.223A7.111,7.111,0,0,0,130.652-821.974Z"
                  transform="translate(-120 840)"
                  fill="gray"
                />
              </svg>
            </div>
            <div className="pages flex font-semibold text-sm xl:gap-10 lg:gap-6 items-center text-center font-opensans">
              <a
                href="/"
                className="hover:text-customRed text-sm transition ease-in-out font-opensans"
              >
                Home
              </a>
              <a
                href="/"
                className="hover:text-customRed transition ease-in-out font-opensans"
              >
                Schedule an Installation
              </a>
              <a
                href="/"
                className="hover:text-customRed transition ease-in-out font-opensans"
              >
                Shop for Tires
              </a>
              <a
                href="/franchiseInfo-About"
                className="hover:text-customRed transition ease-in-out font-opensans"
              >
                Franchise Info
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-10">
          <div className="contact-suport flex items-center gap-4 font-opensans">
            <div className="suport text-xl bg-customGrey p-2 text-customRed hover:text-[#f14940] transition ease-in-out rounded-full cursor-pointer">
              <MdOutlineLocalPhone />
            </div>
            <div className="hidden xl:flex flex-col font-opensans">
              <span className="font-semibold text-10px  text-customTextGrey2">
                Having Questions
              </span>
              <span className="text-customRed text-sm font-bold">
                Contact Support
              </span>
            </div>
          </div>
          <div className="notification flex gap-4 lg:gap-5 text-xl">
            <div className="bg-customGrey p-2 rounded-full text-customTextGrey2 opacity-90 cursor-pointer hover:text-customRed transition ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 19.2 24"
              >
                <path
                  id="Path_49"
                  data-name="Path 49"
                  d="M161.2-859.6a1.161,1.161,0,0,1-.855-.345A1.161,1.161,0,0,1,160-860.8a1.161,1.161,0,0,1,.345-.855A1.161,1.161,0,0,1,161.2-862h1.2v-8.4a7.027,7.027,0,0,1,1.5-4.425,6.921,6.921,0,0,1,3.9-2.535v-.84a1.736,1.736,0,0,1,.525-1.275A1.736,1.736,0,0,1,169.6-880a1.736,1.736,0,0,1,1.275.525,1.736,1.736,0,0,1,.525,1.275v.84a6.921,6.921,0,0,1,3.9,2.535,7.027,7.027,0,0,1,1.5,4.425v8.4H178a1.161,1.161,0,0,1,.855.345,1.161,1.161,0,0,1,.345.855,1.161,1.161,0,0,1-.345.855,1.161,1.161,0,0,1-.855.345ZM169.6-868.6Zm0,12.6a2.311,2.311,0,0,1-1.695-.7,2.311,2.311,0,0,1-.705-1.7H172a2.311,2.311,0,0,1-.705,1.7A2.311,2.311,0,0,1,169.6-856Zm-4.8-6h9.6v-8.4a4.622,4.622,0,0,0-1.41-3.39,4.622,4.622,0,0,0-3.39-1.41,4.622,4.622,0,0,0-3.39,1.41,4.622,4.622,0,0,0-1.41,3.39Z"
                  transform="translate(-160 880)"
                  fill="#5f6368"
                />
              </svg>
            </div>
            <div className="bg-customGrey p-2 rounded-full text-customTextGrey2 opacity-90 cursor-pointer hover:text-customRed transition ease-in-out ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 23.978 24"
              >
                <path
                  id="Path_48"
                  data-name="Path 48"
                  d="M47.2-856a2.311,2.311,0,0,1-1.695-.7,2.311,2.311,0,0,1-.7-1.7,2.311,2.311,0,0,1,.7-1.7A2.311,2.311,0,0,1,47.2-860.8a2.311,2.311,0,0,1,1.695.705,2.311,2.311,0,0,1,.705,1.7,2.311,2.311,0,0,1-.705,1.7A2.311,2.311,0,0,1,47.2-856Zm12,0a2.311,2.311,0,0,1-1.695-.7,2.311,2.311,0,0,1-.7-1.7,2.311,2.311,0,0,1,.7-1.7A2.311,2.311,0,0,1,59.2-860.8a2.311,2.311,0,0,1,1.695.705,2.311,2.311,0,0,1,.705,1.7,2.311,2.311,0,0,1-.705,1.7A2.311,2.311,0,0,1,59.2-856ZM46.18-875.2l2.88,6h8.4l3.3-6Zm-1.14-2.4h17.7a1.149,1.149,0,0,1,1.05.615,1.21,1.21,0,0,1,.03,1.245l-4.26,7.68a2.4,2.4,0,0,1-.885.93,2.334,2.334,0,0,1-1.215.33H48.52l-1.32,2.4H60.4a1.161,1.161,0,0,1,.855.345,1.161,1.161,0,0,1,.345.855,1.161,1.161,0,0,1-.345.855A1.161,1.161,0,0,1,60.4-862H47.2a2.221,2.221,0,0,1-2.04-1.185,2.268,2.268,0,0,1-.06-2.355l1.62-2.94L42.4-877.6H41.2a1.161,1.161,0,0,1-.855-.345A1.161,1.161,0,0,1,40-878.8a1.161,1.161,0,0,1,.345-.855A1.161,1.161,0,0,1,41.2-880h1.95a1.206,1.206,0,0,1,.63.18,1.119,1.119,0,0,1,.45.51Zm4.02,8.4h0Z"
                  transform="translate(-40 880)"
                  fill="#5f6368"
                />
              </svg>
            </div>
          </div>
          <div className="hidden lg:flex font-opensans">
            <a
              href="#"
              onClick={handleLoginBtnClick}
              className="bg-customRed hover:bg-[#f14940] transition ease-in-out py-2 px-4 text-customGrey font-semibold text-sm rounded-full"
            >
              Login /Signup
            </a>
          </div>
          <div
            className="lg:hidden menu cursor-pointer"
            onClick={toggleMobileNav}
          >
            <HiMiniBars3CenterLeft size={24} />
          </div>
        </div>
      </div>
      <Modal id="login-modal">
        <Login />
      </Modal>
      <Modal id="otp-modal">
        <OTPVerification />
      </Modal>
      <Modal id="register-modal">
        <Register />
      </Modal>
    </div>
  );
};

export default Navbar;
