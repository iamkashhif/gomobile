const Brands = () => {
  return (
    <div>
      <div className="bg-[#f8f8f8] pb-10">
        <div className="text-justify md:mx-10 mx-5 py-10 mt-5">
          <h1 className="font-khand md:text-3xl text-2xl mb-2 text-start font-bold">
            Popular Tire Brands
          </h1>
          <p className="text-customTextGrey2  opacity-85 font-semibold font-opensans md:text-md text-sm mb-4">
            Gomobile Tires carries over 10 brands of tires, including top tier
            brands.
          </p>
        </div>
        <div className="mx-5 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28">
            <img
              src="/home_images/Brand1.png"
              alt="Brand 1 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28  ">
            <img
              src="/home_images/Brand2.png"
              alt="Brand 2 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28  ">
            <img
              src="/home_images/Brand3.png"
              alt="Brand 3 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28  ">
            <img
              src="/home_images/Brand4.png"
              alt="Brand 4 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28 p-8 ">
            <img
              src="/home_images/Brand5.png"
              alt="Brand 5 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28 p-8 ">
            <img
              src="/home_images/Brand6.png"
              alt="Brand 6 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28 p-8 ">
            <img
              src="/home_images/Brand7.png"
              alt="Brand 7 Tire"
              className="h-full object-contain"
            />
          </div>
          <div className="flex items-center justify-center bg-white rounded-lg w-full h-28  ">
            <img
              src="/home_images/Brand8.png"
              alt="Brand 8 Tire"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
