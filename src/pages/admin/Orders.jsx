import React from "react";
import {
  FaTruck,
} from "react-icons/fa";
import { FaCircle, FaStar } from "react-icons/fa6";
import { RiShieldStarFill } from "react-icons/ri";

const TireList = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
      {/* Main Content */}
      <main className="flex-1 p-4">
        <div>
          <div>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="flex flex-wrap justify-between md:flex-nowrap">
                <div className="flex flex-wrap md:flex-nowrap w-full md:w-auto">
                  <img
                    src="https://www.justtires.com/dw/image/v2/BJQJ_PRD/on/demandware.static/-/Sites-goodyear-master-catalog/default/dwf8600e67/images/large/Assurance_All_Season_5492.png?sw=900&sh=800&sm=fit&sfrm=png"
                    alt="Tire"
                    className="w-32 h-32 md:w-52 md:h-52 object-cover mx-auto md:mx-0"
                  />
                  <div className="ml-0 md:ml-4 mt-4 md:mt-0 flex flex-col justify-between w-full md:w-auto">
                    <div>
                      <h3 className="font-bold">
                        <div className="text-sm text-customTextGrey2 text-center md:text-left">
                          GOODYEAR
                        </div>
                        <div className="font-bold text-xl text-center md:text-left">
                          Eagle Exhilarate
                        </div>
                      </h3>
                      <p className="text-customTextGrey2 text-sm text-center md:text-left">
                        Performance All Season
                      </p>
                      <div className="flex justify-center md:justify-start text-customBlue text-xs space-x-1 items-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <div className="text-xs text-black px-2">5.0</div>
                      </div>
                      <div className="text-customRed font-bold flex justify-center md:justify-start items-center text-xs py-5">
                        <div>
                          <RiShieldStarFill className="mx-1 text-lg" />
                        </div>
                        <div>45,000 MILE WARRANTY</div>
                      </div>
                      <div className="bg-[#DCDCDC] text-center font-bold text-sm border p-3 rounded-lg mt-5">
                        215/50R17 91H
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-auto text-center md:text-end px-5 mt-4 md:mt-0">
                  <div>
                    <div className="text-customTextGrey2 font-semibold">
                      Set of 4: $493.24
                    </div>
                    <div className="flex justify-center md:justify-end items-baseline space-x-2">
                      <div className="text-xs text-customTextGrey2">
                        Per Tire
                      </div>
                      <div className="font-bold text-xl">$123.31</div>
                    </div>
                    <div className="flex justify-center md:justify-end items-baseline space-x-2">
                      <div className="text-customGreen text-sm font-semibold">
                        20% off
                      </div>
                      <div className="font-bold line-through text-customRed text-lg">
                        $140.31
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end mt-5">
                    <div>
                      <div className="flex justify-center md:justify-end items-center">
                        <div className="mr-1">
                          <FaCircle className="text-end text-xs text-customGreen" />
                        </div>
                        <div> In Stock</div>
                      </div>
                      <div className="text-blue-500 flex justify-center md:justify-end items-center">
                        <span className="pr-2">
                          <FaTruck />
                        </span>
                        Free Delivery
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end mt-5 mb-5">
                    <div className="flex items-center space-x-10">
                      <div className="flex items-center">
                        <button className="pr-5">-</button>
                        <input
                          type="text"
                          value="4"
                          className="w-12 text-center border rounded-lg bg-customBorder font-semibold p-2"
                          readOnly
                        />
                        <button className="pl-5">+</button>
                      </div>
                      <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-6">
          <button className="p-2 border rounded">&laquo;</button>
          <button className="p-2 border rounded mx-2">1</button>
          <button className="p-2 border rounded">2</button>
          <button className="p-2 border rounded mx-2">3</button>
          <button className="p-2 border rounded">&raquo;</button>
        </div> */}
      </main>
    </div>
  );
};

export default TireList;
