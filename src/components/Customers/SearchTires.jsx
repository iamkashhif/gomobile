import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import TireSizePopup from "./TireSizePopup";
import LicensePlatePopup from "./LicensePlatePopup";
import VehiclePopup from "./VehiclePopup";

const SearchTires = () => {
  const [popupType, setPopupType] = useState(null);

  const handleOpenPopup = (type) => setPopupType(type);
  const handleClosePopup = () => setPopupType(null);

  return (
    <div className="">
      <div className="flex justify-center md:mt-10 mt-5 font-khand font-bold text-2xl md:text-3xl">
        Shop Tires By
      </div>

      <div className="flex justify-center mt-7 text-xs md:text-sm">
        <div className="grid w-full grid-cols-1 xl:mx-72 lg:mx-20 md:mx-5 mx-5 sm:grid-cols-3 lg:grid-cols-3 gap-5 font-opensans font-semibold">
          <div
            className="flex items-center border-customBorder customBorder bg-customGrey justify-between border rounded-lg px-3 py-2.5 cursor-pointer transform hover:bg-gray-100 duration-300"
            onClick={() => handleOpenPopup("VehicleMakeModel")}
          >
            <div className="flex items-center text-customBlack opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="15"
                className="mr-2"
                viewBox="0 0 24 21.333"
              >
                <path
                  d="M124-741.333v.667a1.929,1.929,0,0,1-.583,1.417,1.929,1.929,0,0,1-1.417.583,1.929,1.929,0,0,1-1.417-.583,1.929,1.929,0,0,1-.583-1.417V-750.2a3.294,3.294,0,0,1,.033-.467,2.474,2.474,0,0,1,.1-.433l2.5-7.1a2.557,2.557,0,0,1,.967-1.3,2.631,2.631,0,0,1,1.567-.5h13.667a2.631,2.631,0,0,1,1.567.5,2.557,2.557,0,0,1,.967,1.3l2.5,7.1a2.474,2.474,0,0,1,.1.433,3.293,3.293,0,0,1,.033.467v9.533a1.929,1.929,0,0,1-.583,1.417,1.929,1.929,0,0,1-1.417.583,1.929,1.929,0,0,1-1.417-.583,1.929,1.929,0,0,1-.583-1.417v-.667Zm-.267-12h16.533l-1.4-4H125.133Zm2.267,8a1.929,1.929,0,0,0,1.417-.583,1.929,1.929,0,0,0,.583-1.417,1.929,1.929,0,0,0-.583-1.417,1.929,1.929,0,0,0-1.417-.583,1.929,1.929,0,0,0-1.417.583,1.929,1.929,0,0,0-.583,1.417,1.928,1.928,0,0,0,.583,1.417A1.929,1.929,0,0,0,126-745.333Zm12,0a1.929,1.929,0,0,0,1.417-.583,1.928,1.928,0,0,0,.583-1.417,1.929,1.929,0,0,0-.583-1.417,1.929,1.929,0,0,0-1.417-.583,1.929,1.929,0,0,0-1.417.583,1.929,1.929,0,0,0-.583,1.417,1.929,1.929,0,0,0,.583,1.417A1.929,1.929,0,0,0,138-745.333Z"
                  transform="translate(-120 760)"
                  fill="gray"
                />
              </svg>
              Vehicle make & Model
            </div>
            <div className="">
              <MdOutlineKeyboardArrowRight className="text-customTextGrey2 w-6 h-6 duration-300 ml-2" />
            </div>
          </div>
          <div
            className="flex items-center border-customBorder bg-customGrey justify-between border rounded-lg px-3 py-2.5 cursor-pointer transform hover:bg-gray-100 duration-300"
            onClick={() => handleOpenPopup("TireSize")}
          >
            <div className="flex items-center text-customBlack opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="17"
                className="mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  id="radio_button_checked_24dp_5F6368_FILL1_wght400_GRAD0_opsz24"
                  d="M92-862a5.783,5.783,0,0,0,4.245-1.755A5.783,5.783,0,0,0,98-868a5.782,5.782,0,0,0-1.755-4.245A5.783,5.783,0,0,0,92-874a5.783,5.783,0,0,0-4.245,1.755A5.782,5.782,0,0,0,86-868a5.783,5.783,0,0,0,1.755,4.245A5.782,5.782,0,0,0,92-862Zm0,6a11.685,11.685,0,0,1-4.68-.945,12.117,12.117,0,0,1-3.81-2.565,12.117,12.117,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.121,12.121,0,0,1,2.565-3.81,12.12,12.12,0,0,1,3.81-2.565A11.686,11.686,0,0,1,92-880a11.686,11.686,0,0,1,4.68.945,12.12,12.12,0,0,1,3.81,2.565,12.121,12.121,0,0,1,2.565,3.81A11.686,11.686,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.117,12.117,0,0,1-2.565,3.81,12.117,12.117,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z"
                  transform="translate(-80 880)"
                  fill="gray"
                />
              </svg>
              Tire Size
            </div>
            <div className="">
              <MdOutlineKeyboardArrowRight className="text-customTextGrey2 w-6 h-6 duration-300 ml-2" />
            </div>
          </div>
          <div
            className="flex items-center border-customBorder bg-customGrey justify-between border rounded-lg px-3 py-2.5 cursor-pointer transform hover:bg-gray-100 duration-300"
            onClick={() => handleOpenPopup("LicensePlate")}
          >
            <div className="flex items-center text-customBlack opacity-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="15"
                className="mr-2"
                viewBox="0 0 24 24"
              >
                <g
                  id="license-plate-svgrepo-com"
                  transform="translate(34 -158.141)"
                >
                  <g
                    id="Group_209"
                    data-name="Group 209"
                    transform="translate(0 164.531)"
                  >
                    <rect
                      id="Rectangle_107"
                      data-name="Rectangle 107"
                      width="24"
                      height="24"
                      rx="3"
                      transform="translate(-34 -6.391)"
                      fill="gray"
                    />
                    <text
                      id="XYZ"
                      transform="translate(-22 4.609)"
                      fill="#fff"
                      fontSize="9"
                      fontFamily="OpenSans-Bold, Open Sans"
                      fontWeight="700"
                    >
                      <tspan x="-8" y="0">
                        XYZ
                      </tspan>
                    </text>
                    <text
                      id="_000"
                      data-name="000"
                      transform="translate(-22 13.609)"
                      fill="#fff"
                      fontSize="9"
                      fontFamily="OpenSans-Bold, Open Sans"
                      fontWeight="700"
                    >
                      <tspan x="-7" y="0">
                        000
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>{" "}
              License Plate
            </div>
            <div className="">
              <MdOutlineKeyboardArrowRight className="text-customTextGrey2 w-6 h-6 duration-300 ml-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render popups */}
      {popupType === "VehicleMakeModel" && (
        <VehiclePopup onClose={handleClosePopup} />
      )}
      {popupType === "TireSize" && <TireSizePopup onClose={handleClosePopup} />}
      {popupType === "LicensePlate" && (
        <LicensePlatePopup onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default SearchTires;
