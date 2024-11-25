import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
  {
    id: 1,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 2,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 3,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 4,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 5,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 6,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 7,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
  {
    id: 8,
    brand: "Goodyear",
    model: "Eagle Exhilarate",
    description: "Performance All Season",
    warranty: "45,000 MILE WARRANTY",
    price: "$23.31",
    img: "/home_images/carouselTire.png", // Replace with actual image path
  },
];

const Carousel = () => {
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
      prevIndex === productData.length - visibleItemsCount ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="relative py-10 my-10">
      <div className="md:mx-10 flex md:flex-row flex-col md:items-center md:justify-between mx-5">
        <div className="">
          <h1 className="md:text-3xl font-khand text-2xl mb-2 text-start font-bold">
            Most Bought
          </h1>
          <p className="text-customTextGrey2 opacity-85 font-opensans font-semibold md:text-md text-sm mb-4">
            Over 100 tires we sold in the last 7 days
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
              currentIndex === productData.length - visibleItemsCount
                ? "bg-[#F0F1F2]"
                : "bg-customRed"
            }`}
            disabled={currentIndex === productData.length - visibleItemsCount}
          >
            <FaChevronRight className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div className="md:mx-10 relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleItemsCount
            }%)`,
          }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 p-4"
              style={{ width: `${100 / visibleItemsCount}%` }}
            >
              <div className="bg-white border boxShadow border-gray-200 shadow-md overflow-hidden relative rounded-lg flex sm:flex-row">
                {/* Left Side - Image */}
                <div className="w-full sm:w-1/2 flex justify-center items-center">
                  <img
                    src={product.img}
                    alt={`${product.brand} ${product.model}`}
                    className=" object-cover md:w-full md:h-auto  lg:p-10 "
                  />
                </div>
                {/* Right Side - Content */}
                <div className="w-full sm:w-1/2 p-4 ">
                  <h3 className="font-semibold lg:text-xl text-lg text-customBlack">
                    <span className="uppercase font-opensans  text-customTextGrey2 text-sm font-bold">
                      {product.brand}
                    </span>
                    <br />

                    <span className="font-bold font-opensans ">
                      {product.model}
                    </span>
                  </h3>
                  <p className="text-customTextGrey2 text-sm font-semibold">
                    {product.description}
                  </p>
                  <p className="text-customRed font-semibold mt-1 mb-4">
                    <span className="flex text-xs items-center font-bold  font-opensans">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        className="mr-1"
                        viewBox="0 0 20 24"
                      >
                        <g
                          id="Group_63"
                          data-name="Group 63"
                          transform="translate(-290.278 -1467)"
                        >
                          <path
                            id="Path_56"
                            data-name="Path 56"
                            d="M170-850a2.543,2.543,0,0,1-.406-.03,2.524,2.524,0,0,1-.375-.091,12.6,12.6,0,0,1-6.719-5.058,13.9,13.9,0,0,1-2.5-7.944v-5.742a2.23,2.23,0,0,1,.453-1.367,2.572,2.572,0,0,1,1.172-.881l7.5-2.734A2.655,2.655,0,0,1,170-874a2.655,2.655,0,0,1,.875.152l7.5,2.734a2.572,2.572,0,0,1,1.172.881,2.23,2.23,0,0,1,.453,1.367v5.742a13.9,13.9,0,0,1-2.5,7.944,12.6,12.6,0,0,1-6.719,5.058,2.525,2.525,0,0,1-.375.091A2.543,2.543,0,0,1,170-850Z"
                            transform="translate(130.278 2341)"
                            fill="#e02b20"
                          />
                          <path
                            id="Polygon_1"
                            data-name="Polygon 1"
                            d="M5.026,1.41a.5.5,0,0,1,.948,0l.79,2.35a.5.5,0,0,0,.461.341l2.417.065a.5.5,0,0,1,.3.889L7.982,6.633a.5.5,0,0,0-.167.525l.694,2.457a.5.5,0,0,1-.774.541l-1.941-1.4a.5.5,0,0,0-.586,0l-1.941,1.4a.5.5,0,0,1-.774-.541l.694-2.457a.5.5,0,0,0-.167-.525L1.058,5.054a.5.5,0,0,1,.3-.889L3.776,4.1a.5.5,0,0,0,.461-.341Z"
                            transform="translate(294.778 1472)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      {product.warranty}
                    </span>
                  </p>
                  <div className=" items-start sm:items-center">
                    <div className="text-2xl font-extrabold text-gray-800 font-opensans mb-2">
                      {product.price}
                    </div>
                    <button className="bg-customRed  font-opensans text-white text-xs font-semibold py-2.5 px-4 rounded-lg shadow hover:bg-customRed transition duration-300">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
