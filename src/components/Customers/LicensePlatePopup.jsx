import React, { useState } from "react";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import ZipcodePopup from "./ZipCodePopUp";

// Stepper Component with Rounded Style and Labels Below
const Stepper = ({ steps, activeStep, onStepChange }) => {
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleStepChange = (index) => {
    onStepChange(index);
    setCompletedSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[index] = true;
      return newSteps;
    });
  };

  return (
    <div className="flex flex-col bg-customGrey md:px-32 items-center p-5 mb-5 mt-5">
      {/* Stepper Indicators */}
      <div className="flex items-center justify-between w-full max-w-lg mb-2 relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex items-center justify-center ${
                index <= activeStep
                  ? "bg-white border-4 border-customRed text-customRed"
                  : "bg-white border-4 border-customBorder text-customTextGrey2"
              } rounded-full w-4 h-4 cursor-pointer`}
              onClick={() => handleStepChange(index)}
            >
              {/* {index + 1} */}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 border-t-4 ${
                  index < activeStep
                    ? "border-customRed text-customRed"
                    : "border-customGrey1"
                }`}
                style={{ height: "2px" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Names */}
      <div className="flex justify-between  w-full max-w-lg text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-sm ${
              index <= activeStep
                ? "text-customRed font-bold font-sm "
                : "text-customTextGrey2 font-bold font-sm"
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

const TireSizePopUp = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isZipcodePopupVisible, setIsZipcodePopupVisible] = useState(false);
  const [selectedState, setSelectedState] = useState(""); // Fixed variable name
  const [licensePlate, setLicensePlate] = useState("");

  const steps = ["State", "License Plate"];
  const states = [
    "AL",
    "AK",
    "AZ",
    "CA",
    "CO",
    "TN",
    "FL",
    "GA",
    "HI",
    "IL",
    "IN",
    "MI",
    "NY",
    "OH",
    "TX",
    "WA",
  ]; // List of states

  const StepContent = ({ stepIndex }) => {
    if (stepIndex === 0) {
      // State selection
      return (
        <div className="flex flex-col items-center">
          <div className="grid md:grid-cols-4 grid-cols-3 gap-4 mt-1 ">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => {
                  setSelectedState(state);
                  setCurrentStep(1); // Move to step 2 automatically
                }}
                className={`border border-gray-300 rounded-md md:px-8 px-6 py-1.5 font-opensans font-semibold opacity-70 text-center ${
                  state === selectedState
                    ? "bg-customRed  text-white"
                    : "bg-customGrey hover:bg-customGrey1"
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (stepIndex === 1) {
      // License Plate input
      return (
        <div className="flex flex-col items-center  ">
          <p className="mb-2 text-sm opacity-85 font-bold">
            Enter your License Plate
          </p>
          <input
            type="text"
            placeholder="Enter License Plate"
            className="border px-7 py-1.5 md:w-80 w-60 rounded-lg text-sm font-semibold focus:outline-none bg-customGrey mt-3 h-11 text-center" // Adjusted width and height
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
          />
        </div>
      );
    }

    return null;
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // Show ZipcodePopup if on the last step
      setIsZipcodePopupVisible(true);
    } else {
      // Move to the next step
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="bg-white m-3 rounded-lg shadow-lg min-h-[60vh] max-w-xl w-full relative">
        {/* Close Button */}
        <button 
          className="absolute top-2 right-2 text-customTextGrey2 hover:text-black"
          onClick={onClose}
        >
          <FaTimes size={16} />
        </button>
        <div className="mt-6 mb-5">
          <p className="text-xs my-1 font-semibold opacity-70 font-opensans text-customTextGrey2 mx-5">
            Search Tires
          </p>
          <div className="flex items-center text-customBlack opacity-85">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              className="ml-5 "
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
                    fill="black"
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
            <span className="font-opensans font-bold ml-1 font-xs opacity-90">
              By License Plate
            </span>
          </div>
          <Stepper
            steps={steps}
            activeStep={currentStep}
            onStepChange={setCurrentStep}
          />
          <StepContent stepIndex={currentStep} />
          <div className="flex justify-center mt-5">
            {currentStep === 1 && (
              <button
                className="bg-customRed md:w-80 w-60 h-11 text-sm text-center text-white font-semibold rounded-lg flex justify-center items-center"
                onClick={handleNext}
              >
                Next
                <FaArrowRight className="ml-2" />
              </button>
            )}
          </div>
        </div>
        {isZipcodePopupVisible && (
          <ZipcodePopup onClose={() => setIsZipcodePopupVisible(false)} />
        )}
      </div>
    </div>
  );
};

export default TireSizePopUp;
