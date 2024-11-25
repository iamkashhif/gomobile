import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
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
    <div className="flex flex-col bg-customGrey items-center p-5 mb-5 mt-5">
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
      <div className="flex justify-between w-full max-w-lg text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className={` text-xs ${
              index <= activeStep || completedSteps[index]
                ? "text-customRed font-semibold"
                : "text-customTextGrey2 font-semibold"
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
  const [selectedOptions, setSelectedOptions] = useState({
    width: "",
    profile: "",
    wheelSize: "",
    season: "",
    speedRating: "",
    loadIndex: "",
  });

  const steps = [
    "Width*",
    "Profile*",
    "Wheel Size*",
    "Season*",
    "Speed Rating",
    "Load Index",
  ];

  const options = {
    width: [
      100, 105, 115, 120, 125, 135, 140, 145, 150, 155, 158, 160, 165, 170, 175,
      180,
    ],
    profile: [65, 75, 100],
    wheelSize: ['6"', '7"', '8"'],
    season: ["All Tires", "All Weather", "All Season", "Summer", "Winter"],
    speedRating: [
      "A1 5kmh / 3mph",
      "A2 6kmh / 4mph",
      "A3 7kmh / 5mph",
      // Add more speed ratings as needed
    ],
    loadIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  };

  const StepContent = ({ stepIndex }) => {
    const stepOptions = {
      0: options.width,
      1: options.profile,
      2: options.wheelSize,
      3: options.season,
      4: options.speedRating,
      5: options.loadIndex,
    };

    const gridClasses =
      stepIndex === 0 || stepIndex === 5
        ? "md:grid-cols-4 grid-cols-3"
        : "md:grid-cols-3 grid-cols-2";

    return (
      <div>
        <div className={`grid ${gridClasses} gap-4 px-5`}>
          {stepOptions[stepIndex].map((item, index) => (
            <button
              key={index}
              className="bg-customGrey font-bold font-opensans opacity-85 text-sm hover:bg-customGrey1 rounded-lg py-2 text-center"
              onClick={() => {
                const updatedOptions = { ...selectedOptions };
                const optionKeys = [
                  "width",
                  "profile",
                  "wheelSize",
                  "season",
                  "speedRating",
                  "loadIndex",
                ];
                updatedOptions[optionKeys[stepIndex]] = item;
                setSelectedOptions(updatedOptions);

                // Move to the next step if not the last step
                if (stepIndex < steps.length - 1) {
                  setCurrentStep(stepIndex + 1);
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const formatSelectedOptions = () => {
    const { width, profile, wheelSize, season, speedRating, loadIndex } =
      selectedOptions;
    return (
      `${width} ${profile} ${wheelSize} ${season} ${speedRating} ${loadIndex}`.trim() ||
      "Select Tire Size"
    );
  };

  // Check if all required options are selected
  const areRequiredOptionsSelected = () => {
    const requiredOptions = ["width", "profile", "wheelSize"];
    return requiredOptions.every((key) => selectedOptions[key] !== "");
  };

  const handleSkip = () => {
    if (currentStep === steps.length - 1 && areRequiredOptionsSelected()) {
      setIsZipcodePopupVisible(true);
    } else if (currentStep === steps.length - 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="bg-white m-3 rounded-lg shadow-lg min-h-[60vh] w-full max-w-xl relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-customTextGrey2 hover:text-black"
          onClick={onClose}
        >
          <FaTimes size={16} />
        </button>
        <div className=" mt-6 mb-5">
          <p className="text-xs my-1 font-semibold opacity-70 mx-5 font-opensans text-customTextGrey2">
            Search Tires
          </p>
          <div className="flex items-center mx-3 text-customBlack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="17"
              className="ml-1"
              viewBox="0 0 24 24"
            >
              <path
                id="radio_button_checked_24dp_5F6368_FILL1_wght400_GRAD0_opsz24"
                d="M92-862a5.783,5.783,0,0,0,4.245-1.755A5.783,5.783,0,0,0,98-868a5.782,5.782,0,0,0-1.755-4.245A5.783,5.783,0,0,0,92-874a5.783,5.783,0,0,0-4.245,1.755A5.782,5.782,0,0,0,86-868a5.783,5.783,0,0,0,1.755,4.245A5.782,5.782,0,0,0,92-862Zm0,6a11.685,11.685,0,0,1-4.68-.945,12.117,12.117,0,0,1-3.81-2.565,12.117,12.117,0,0,1-2.565-3.81A11.685,11.685,0,0,1,80-868a11.685,11.685,0,0,1,.945-4.68,12.121,12.121,0,0,1,2.565-3.81,12.12,12.12,0,0,1,3.81-2.565A11.686,11.686,0,0,1,92-880a11.686,11.686,0,0,1,4.68.945,12.12,12.12,0,0,1,3.81,2.565,12.121,12.121,0,0,1,2.565,3.81A11.686,11.686,0,0,1,104-868a11.685,11.685,0,0,1-.945,4.68,12.117,12.117,0,0,1-2.565,3.81,12.117,12.117,0,0,1-3.81,2.565A11.685,11.685,0,0,1,92-856Z"
                transform="translate(-80 880)"
                fill="gray"
              />
            </svg>
            <h3 className="font-bold font-opensans text-sm">
              By Tires:{" "}
              <span className="text-customTextGrey2 opacity-85 font-semibold text-xs">
                {formatSelectedOptions()}
              </span>
            </h3>{" "}
          </div>
          <Stepper
            steps={steps}
            activeStep={currentStep}
            onStepChange={setCurrentStep}
          />
          <StepContent stepIndex={currentStep} />
          {(currentStep === steps.length - 1 ||
            currentStep === steps.length - 2) && (
            <div className="flex justify-end">
              <button
                className=" border border-customRed text-customRed font-semibold px-7 text-xs  flex text-end  p-2 m-5 rounded-lg mt-5"
                onClick={handleSkip}
              >
                Skip
              </button>
            </div>
          )}
        </div>
        {isZipcodePopupVisible && (
          <ZipcodePopup onClose={() => setIsZipcodePopupVisible(false)} />
        )}
      </div>
    </div>
  );
};

export default TireSizePopUp;
