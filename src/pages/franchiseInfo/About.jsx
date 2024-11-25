import { MdOutlineCall } from "react-icons/md";
const About = () => {
  const cardData = [
    {
      imageSrc:
        "/franchiseInfoImages/Info1.png",
      title: "Relationships",
      description:
        "As a franchisee, you will have full access to our national relationships with the largest online tire retailers and national vendors.",
    },
    {
      imageSrc:
      "/franchiseInfoImages/Info2.png",
      title: "Minimal Inventory",
      description:
        "Unlike most brick and mortar tire shops, you will have 0 tire inventory.",
    },
    {
      imageSrc:
      "/franchiseInfoImages/Info3.png",
      title: "Financing",
      description: "Take advantage of financing from our financial partners.",
    },
    {
      imageSrc:
      "/franchiseInfoImages/Info4.png",
      title: "Fleet Service",
      description:
        "Supply tires and oil changes to your local fleet customers directly from your GMT van.",
    },
    {
      imageSrc:
      "/franchiseInfoImages/Info5.png",
      title: "Wheels, Tires & Oil",
      description:
        "Focused services of wheels, tires and oil – all services are performed at the client’s site. Automotive service convenience at its best",
    },
    {
      imageSrc:
      "/franchiseInfoImages/Info6.png",
      title: "Online Store",
      description:
        "You will have an online store that your customers can purchase from that is comparable to any other online tire sales site.",
    },
  ];

  return (
    <div>
      {/* 1st section  */}
      <div className="relative">
        <div className="w-full bg-black opacity-90">
          <img
            src="/franchiseInfoImages/franchiseInfoBanner.png"
            alt="absolute"
            className="w-full h-[25vh] object-cover"
          />
        </div>
        <div className="flex justify-center items-center font-bold min-h-[25vh] md:text-3xl text-xl absolute top-0 left-0 w-full bg-black bg-opacity-50 text-white">
          <div className="text-center font-khand">
            <div>Welcome to the Fastest Growing Mobile Tire</div>
            <div>Franchise in the USA</div>
          </div>
        </div>
      </div>

      {/* 2nd section */}
      <div className="bg-customGrey">
        <div className="flex flex-col md:flex-row justify-between px-5 md:px-10 py-16">
          <div>
            <div className="font-bold text-3xl font-khand">
              Want to become a franchisee
            </div>
            <div className="text-sm font-opensans text-[#808080] font-semibold">
              Run a business under our brand’s proven model
            </div>
          </div>
          <div className="mt-5 md:mt-0 flex md:justify-center  py-2">
            <button className="border border-customRed md:px-14 px-7 py-2 text-sm font-semibold bg-white rounded-lg text-customRed">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="grid gap-6 bg-white md:gap-4 -mt-10 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-5 md:mx-10 mb-16 border shadow-sm my-5 rounded-lg">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-row items-center bg-white rounded-lg p-5 "
          >
            <img
              src={card.imageSrc}
              alt="image"
              className="w-20 h-auto  mr-6 lg:mb-0 rounded"
            />
            <div className="flex flex-col justify-center w-2/2">
              <div className="font-bold  font-khand  md:text-xl text-customRed mb-2">
                {card.title}
              </div>
              <div className="font-opensans text-sm text-justify md:text-start font-semibold text-customTextGrey2 ">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* map content */}
      <div className="md:mx-10 mx-5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6  font-opensans">
          {/* Left Content */}
          <div className="font-bold opacity-90">
            <h1 className="text-3xl font-khand font-bold mb-4">
              Start your own tire mobile shop
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-bold font-opensans">
                  Exclusive territories
                </h2>
                <p className="text-sm font-semibold text-customBlack">
                  Franchise fee $40,000
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-customBlack">
                  Equipment from $160,000 (includes 4x2 Mercedes Sprinter or
                  Ford Transit with all tire and oil changing equipment
                  installed) - vehicle price may vary depending on
                  specifications, options and/or AWD/4x4
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-customBlack">
                  Franchise launch Advertising & Marketing $30,000
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-customBlack">
                  Financing available for credit-qualified candidates
                </p>
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-bold font-opensans">Includes:</h2>
                <ul className="space-y-2 ">
                  <li className="flex items-center text-sm font-semibold text-customBlack">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20.369"
                      className="me-2"
                      viewBox="0 0 23.369 23.369"
                    >
                      <path
                        id="tick-circle-svgrepo-com"
                        d="M13.684,2A11.684,11.684,0,1,0,25.369,13.684,11.684,11.684,0,0,0,13.684,2Zm6.632,9.624-7.011,6.426a1.168,1.168,0,0,1-1.616-.035L8.185,14.51a1.168,1.168,0,1,1,1.652-1.652l2.714,2.714L18.737,9.9a1.169,1.169,0,0,1,1.58,1.722Z"
                        transform="translate(-2 -2)"
                        fill="#2ea84e"
                      />
                    </svg>
                    Your own online tire store
                  </li>
                  <li className="flex items-center text-sm font-semibold text-customBlack">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="20.369"
                      className="me-2"
                      viewBox="0 0 23.369 23.369"
                    >
                      <path
                        id="tick-circle-svgrepo-com"
                        d="M13.684,2A11.684,11.684,0,1,0,25.369,13.684,11.684,11.684,0,0,0,13.684,2Zm6.632,9.624-7.011,6.426a1.168,1.168,0,0,1-1.616-.035L8.185,14.51a1.168,1.168,0,1,1,1.652-1.652l2.714,2.714L18.737,9.9a1.169,1.169,0,0,1,1.58,1.722Z"
                        transform="translate(-2 -2)"
                        fill="#2ea84e"
                      />
                    </svg>
                    All scheduling, invoicing, and mobile apps
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Iframe for US Map */}
          <div className="flex justify-center md:justify-end">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12655648.376364646!2d-113.72793620150872!3d37.08017920470633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0860eccc6db%3A0xb0f0fbafdfc27f47!2sUnited%20States!5e0!3m2!1sen!2sin!4v1693226761256!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-w-xl h-auto object-cover rounded-lg"
              title="US Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* image card content */}
      <div className="flex flex-col lg:flex-row bg-customGrey justify-between items-start lg:items-center md:px-10 pt-14 pb-40 px-5">
  <div className="lg:w-1/2">
    <h2 className="md:text-3xl text-2xl font-bold font-khand">
      What you get
    </h2>
    <ul className="space-y-2 md:pe-10 opacity-85 text-customBlack">
      {[
        "Fully fitted self-contained Mercedes Sprinter / Ford Transit van or trailer ready to operate on delivery.",
        "All tools and equipment required to operate a successful tire and oil change business.",
        "Latest tire changer and electronic wheel balancers with oil change systems.",
        "High volume compressor",
        "TPMS Programmer",
      ].map((item, index) => (
        <li key={index} className="flex items-start mt-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            className="me-2 flex-shrink-0"
            viewBox="0 0 23.369 23.369"
          >
            <path
              id="tick-circle-svgrepo-com"
              d="M13.684,2A11.684,11.684,0,1,0,25.369,13.684,11.684,11.684,0,0,0,13.684,2Zm6.632,9.624-7.011,6.426a1.168,1.168,0,0,1-1.616-.035L8.185,14.51a1.168,1.168,0,1,1,1.652-1.652l2.714,2.714L18.737,9.9a1.169,1.169,0,0,1,1.58,1.722Z"
              transform="translate(-2 -2)"
              fill="#2ea84e"
            />
          </svg>
          <span className="font-semibold text-sm">{item}</span>
        </li>
      ))}
    </ul>

    <h3 className="text-sm font-bold opacity-90 mt-7 mb-4 font-opensans">
      Optional Accessories
    </h3>
    <ul className="space-y-2 font-opensans text-sm font-semibold opacity-90 text-customBlack">
      {[
        "Awning",
        "Heater",
        "Running Boards",
        "Flashing Rooftop Hazard Lights",
        "Mobile Wheel Alignment diagnostics system",
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            className="me-2 flex-shrink-0"
            viewBox="0 0 23.369 23.369"
          >
            <path
              id="tick-circle-svgrepo-com"
              d="M13.684,2A11.684,11.684,0,1,0,25.369,13.684,11.684,11.684,0,0,0,13.684,2Zm6.632,9.624-7.011,6.426a1.168,1.168,0,0,1-1.616-.035L8.185,14.51a1.168,1.168,0,1,1,1.652-1.652l2.714,2.714L18.737,9.9a1.169,1.169,0,0,1,1.58,1.722Z"
              transform="translate(-2 -2)"
              fill="#2ea84e"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Images */}
  <div className="lg:w-1/2 w-full mt-8 grid grid-cols-2 md:grid-cols-4 lg:mt-0 gap-4 text-center">
    {[
      "/franchiseInfoImages/insideImage1.png",
      "/franchiseInfoImages/insideImage2.png",
      "/franchiseInfoImages/insideImage3.png",
      "/franchiseInfoImages/insideImage4.png",
    ].map((src, index) => (
      <div className="flex items-center justify-center mx-auto" key={index}>
        <div className="">
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
          />
        </div>
      </div>
    ))}
  </div>
</div>


      {/* duo image */}
      <div className="w-full -mt-28  grid grid-cols-1 md:grid-cols-2 gap-4 px-5  md:mb-20 mb-10 ">
        {["/franchiseInfoImages/Truck1.png", "/franchiseInfoImages/Truck2.png"].map((src, index) => (
          <div
            className="flex  justify-center"
            key={index}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 truckImages md:h-96 lg:h-full   "
            />
          </div>
        ))}
      </div>
      {/* contact section */}
      <div className=" bg-[#F8F8F8] md:px-10 px-5 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side Content */}
          <div className="space-y-1 px-2 md:px-0 font-opensans text-sm font-semibold text-customBlack">
            <h1 className="text-3xl font-bold font-khand">
              Let&apos;s Connect
            </h1>
            <p className="text-customTextGrey2 opacity-90">
              Complete the form alongside—you will receive an email to schedule
              a discovery call.
            </p>

            {/* Contact Information */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 mt-12">
                <MdOutlineCall className="text-customRed  w-8 h-8 p-1  bg-white rounded-full" />
              </div>
              <div className="mt-12 ">
                <p className=" text-xs text-customTextGrey2">Having Quetions</p>
                <p className="text-customRed font-bold text-14px">
                  Contact Support
                </p>
              </div>
            </div>

            {/* Phone and Email */}
            <div className=" md:justify-start">
              <div className="flex sm:flex-row flex-col opacity-95 text-customBlack sm:gap-36 text-sm font-semibold mt-7">
                <p className="mb-1">+1 503 999 3647</p>
                <p className="">info@usagomobile.com</p>
              </div>
            </div>

            {/* Address Information */}
            <div className="">
              <h2 className="text-md font-bold text-customBlack md:mt-10 mt-5">
                Address
              </h2>
              <div className="text-customTextGrey2 ">
                <p>Portland, Oregon</p>
                <p>97224</p>
                <p>USA</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="space-y-6 bg-white p-5 rounded-md">
            <h2 className="text-2xl font-bold font-khand">
              New Franchisee Enquiry
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-customBlack">
                {/* Other Form Fields */}
                {[
                  "Company Name",
                  "Email",
                  "First Name",
                  "Last Name",
                  "Phone Number",
                  "City",
                  "State",
                  "Zip Code",
                ].map((field, index) => (
                  <div key={index} className="flex flex-col ">
                    <label className="font-bold opacity-85">
                      {field}
                      <span className="text-customRed">*</span>
                    </label>
                    <input
                      type="text"
                      // placeholder={field}
                      className="mt-1 p-2 border-b-2 opacity-60 border-customBorder outline-none focus:border-customRed bg-transparent"
                    />
                  </div>
                ))}

                {/* Lead Source Dropdown */}
                <div className="flex flex-col">
                  <label className="font-bold opacity-85">
                    Lead Source
                    <span className="text-customRed">*</span>
                  </label>
                  <select className="mt-3 hover:cursor-pointer border-b-2 text-customTextGrey2 border-opacity-60 border-customBorder  outline-none focus:border-customRed bg-transparent">
                    <option value="" disabled selected>
                      - None -
                    </option>
                    <option value="online" className="hover:cursor-pointer">
                      SocialMedia
                    </option>
                    <option value="referral" className="hover:cursor-pointer">
                      Referral
                    </option>
                    <option value="partner" className="hover:cursor-pointer">
                      Partner
                    </option>
                    <option value="event" className="hover:cursor-pointer">
                      Event
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="submit"
                  className="bg-customRed text-sm font-semibold text-white px-10 py-2 rounded-lg"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="border-customRed border text-sm font-semibold text-black px-10 py-2 rounded-lg"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" font-semibold pt-10 text-justify">
          <h2 className="text-xl font-khand font-bold">Disclaimer</h2>
          <p className="font-opensans text-xs md:text-sm  text-customTextGrey2 italic ">
            The information on this website is not intended as an offer to sell,
            or the solicitation of an offer to buy, a franchise. It is for
            information purposes only and is not directed to any person in any
            state. An offering can only be made by a Franchise Disclosure
            Document. We will not sell a franchise unless our Franchise
            Disclosure Document has been delivered to the purchaser before the
            sale in compliance with state and federal law.
          </p>
          <p className="font-opensans text-xs md:text-sm text-customTextGrey2 italic">
            We will not offer or sell a franchise unless the franchise offering
            is registered in the state where the purchaser resides or where the
            franchise will be located if required by state law and no exemption
            applies. Registration in any state or province is not an endorsement
            by the state or province. Unless and until we have obtained the
            required registration or exemption in these states, we are not
            offering franchises to residents of, or for franchises to be placed
            in, these states CA, HI, IL, MD, MN, ND, NY, and VA. To find out
            about our current status in your state, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
