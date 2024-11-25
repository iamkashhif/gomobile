import { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle,
} from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { BiSolidQuoteRight } from "react-icons/bi";

const reviewData = [
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },
  {
    id: 1,
    name: "John Smith",
    role: "Verified Buyer",
    review:
      "Fast shipping and delivery! Made it easier to get all 4 tires by paying when I get paid! Would highly recommend.",
    rating: 5,
  },

  // Add more review objects as needed
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItemsCount, setVisibleItemsCount] = useState(
    getVisibleItemsCount()
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleItemsCount(getVisibleItemsCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getVisibleItemsCount() {
    if (window.innerWidth >= 1440) return 3; // 3 items for large screens
    if (window.innerWidth >= 700) return 2; // 2 items for medium screens
    return 1; // 1 item for mobile screens
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewData.length - visibleItemsCount ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewData.length - visibleItemsCount : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="relative py-10 my-10">
        <div className="md:mx-10 flex md:flex-row flex-col md:items-center md:justify-between mx-5">
          <div className="font-opensans">
            <h1 className="md:text-3xl font-khand text-2xl mb-2 text-start font-bold">
              Reviews
            </h1>
            <p className="text-customTextGrey2 opacity-85 font-semibold md:text-md text-sm mb-4">
              Yes, Gomobile Tires is legit and safe. In fact, we are pretty
              close to perfect.
            </p>
          </div>
          <div className="flex space-x-2 md:my-0 my-3 justify-end">
            <button
              onClick={handlePrev}
              className={`p-2 rounded-full ${
                currentIndex === 0 ? "bg-[#F0F1F2]" : "bg-customRed"
              }`}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft className="text-white h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className={`p-2 rounded-full ${
                currentIndex === reviewData.length - visibleItemsCount
                  ? "bg-[#F0F1F2]"
                  : "bg-customRed"
              }`}
              disabled={currentIndex === reviewData.length - visibleItemsCount}
            >
              <FaChevronRight className="text-white h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="md:mx-10 relative overflow-hidden">
          <div
            className="flex flex-nowrap transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentIndex * 100) / visibleItemsCount
              }%)`,
            }}
          >
            {reviewData.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 min-w-[300px] p-4"
                style={{ width: `${100 / visibleItemsCount}%` }}
              >
                <div className="bg-white boxShadow border border-customGrey shadow-md overflow-hidden relative rounded-lg flex flex-col justify-between min-h-full">
                  <div className="p-4 flex-grow">
                    <div className="flex flex-col items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37.25"
                        height="23.12"
                        viewBox="0 0 37.25 23.12"
                        className="my-2 w-6 h-6"
                      >
                        <path
                          id="Path_12"
                          data-name="Path 12"
                          d="M184.234,189.65h8.808l-5.23,23.12H174.325Zm18.533,0h8.808l-5.23,23.12H192.858Z"
                          transform="translate(-174.325 -189.65)"
                          fill="#e02b20"
                        />
                      </svg>
                      <div className="font-opensans text-[15px] font-semibold text-[#808080]">
                        {review.review}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-row items-center text-sm font-opensans border-customGrey">
                    <FaUserCircle className="text-customTextGrey1 opacity-85 h-12 w-12" />
                    <div className="ml-4 flex flex-row justify-between w-full">
                      <div>
                        <h3 className="text-customBlack font-bold font-sans opacity-90 text-[15px]">
                          {review.name}
                        </h3>
                        <p className="text-customGreen my-1 flex items-center  text-sm font-semibold ">
                          <FaCheckCircle className="text-customGreen  mr-2 flex-shrink-0 w-4 h-4" />
                          <span className="text-xs -ml-1 font-bold opacity-70">
                            {" "}
                            {review.role}
                          </span>
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="flex ">
                          {[...Array(review.rating)].map((_, index) => (
                            <BsStarFill
                              key={index}
                              className="text-customBlue h-3 w-3"
                            />
                          ))}
                        </span>
                        <span className="text-customTextGrey1 text-xs ml-2">
                          {review.rating}.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 md:px-12 lg:flex lg:items-center lg:px-16">
            <div className="lg:flex-1 xl:w-0 lg:text-start text-center">
              <h2 className="text-2xl font-bold font-khand tracking-tight text-black sm:text-3xl">
                Let&apos;s Stay Connected!
              </h2>
              <p className="max-w-3xl text-sm leading-6 text-customTextGrey2  opacity-85 font-semibold font-opensans">
                Be the first one to know about discounts, offers, and events.
              </p>
            </div>
            <div className="mt-8 sm:w-full lg:max-w-xl sm:max-w-4xl xl:mt-0 xl:ml-8">
              <form className="relative w-full max-w-lg mx-auto">
                <div className="relative flex md:flex-row items-center">
                  <input
                    type="email"
                    autoComplete="email"
                    required=""
                    className="w-full rounded-xl text-sm font-opensans font-semibold border border-customBorder px-5 py-2.5 placeholder-customTextGrey2 focus:outline-none focus:ring-0"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 rounded-xl h-full bg-customRed text-white md:px-5 px-2 py-3 text-sm font-opensans font-semibold shadow hover:bg-[#e0453d] focus:outline-none focus:ring-0"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
