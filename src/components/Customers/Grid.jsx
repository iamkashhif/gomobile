
const Grid = () => {
  return (
    <div>
      <div className="bg-customGrey pt-14 pb-20 mt-10">
        <div className="md:mx-10 mx-5">
          <div className="md:text-3xl text-2xl font-bold font-khand">
            How Gomobile Tires Works
          </div>
          <div className="text-customTextGrey2 opacity-85 font-opensans font-semibold md:text-md mt-1.5 text-sm mb-4">
            A seamless process for purchasing and installing tires
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 -mt-12 md:mx-10 mx-5">
        <div className="flex items-center border px-3 py-5 rounded-lg bg-white">
          <div>
            <img
              src="/home_images/howWorks1.png"
              alt="Order Tires"
              className="w-32 h-auto"
            />
          </div>
          <div className="px-5">
            <div className="font-bold text-xl text-customRed font-khand">
              Order Tires
            </div>
            <div className="font-opensans text-sm font-semibold text-[#808080]">
              No matter the season, we offer tires for any adventure that you
              are planning for.
            </div>
          </div>
        </div>

        <div className="flex items-center border px-3 py-5 rounded-lg bg-white">
          <div>
            <img
              src="/home_images/howWorks2.png"
              alt="Schedule Your Installation"
              className="w-32 h-auto"
            />
          </div>
          <div className="px-5">
            <div className="font-bold text-xl text-customRed font-khand">
              Schedule Your Installation
            </div>
            <div className="font-opensans text-sm font-semibold text-[#808080]">
              Select your installation requirements, and we will confirm the
              location, date, and time.
            </div>
          </div>
        </div>

        <div className="flex items-center border px-3 py-5 rounded-lg bg-white">
          <div>
            <img
              src="/home_images/howWorks3.png"
              alt="We Install Your Tires"
              className="w-32 h-auto"
            />
          </div>
          <div className="px-5">
            <div className="font-bold text-xl text-customRed font-khand">
              We Install Your Tires
            </div>
            <div className="font-opensans text-sm font-semibold text-[#808080]">
              Our technician will come to your location and mount and balance
              your tires using our state-of-the-art vans.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
