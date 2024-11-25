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
    <div className="flex flex-col bg-customGrey items-center p-5 mb-2">
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
                  index < activeStep ? "border-customRed text-customRed" : "border-customGrey1"
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
            className={` text-xs ${
              index <= activeStep || completedSteps[index]
                ? 'text-customRed font-semibold'
                : 'text-customTextGrey2 font-semibold'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

const VehiclePopup = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [showZipcodePopup, setShowZipcodePopup] = useState(false);
  const [selectedData, setSelectedData] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
    tireSize: '',
    season: ''
  });
  

  const steps = ["Year", "Make", "Model", "Trim", "Tire Size", "Season"];
  const data = {
    years: [
      2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013,
      2012, 2011, 2010, 2009,
    ],
    makes: [
      "Acura",
      "Alfa Romeo",
      "Aston Martin",
      "Audi",
      "Bentley",
      "BMW",
      "Buick",
      "Cadillac",
      "Chevrolet",
    ],
    models: ["Integra", "MDX", "RDX", "TLX", "ZDX"],
    trims: ["A-Spec", "Base", "Type S"],
    tireSizes: ['17" | 215/50R17 91H', '18" | 235/40R18 91W'],
    seasons: ["All Tires", "All Weather", "All Season", "Summer", "Winter"],
  };

  const StepContent = ({ stepIndex }) => {
    const stepData = {
      0: data.years,
      1: data.makes,
      2: data.models,
      3: data.trims,
      4: data.tireSizes,
      5: data.seasons,
    };

    const gridClasses =
      stepIndex === 0
        ? "md:grid-cols-4 grid-cols-3"
        : "md:grid-cols-3 grid-cols-2";

    return (
      <div className="">
        <div className={`grid ${gridClasses}  gap-4`}>
          {stepData[stepIndex].map((item, index) => (
            <button
              key={index}
              className="bg-customGrey font-bold font-opensans  opacity-85 text-sm hover:bg-customGrey1 rounded-lg py-2 text-center"
              onClick={() => {
                // Update selected data based on the step
                const newSelectedData = { ...selectedData };
                const keys = ['year', 'make', 'model', 'trim', 'tireSize', 'season'];
                newSelectedData[keys[stepIndex]] = item;
                setSelectedData(newSelectedData);
                
                // Move to the next step if not the last step
                if (stepIndex < steps.length - 1) {
                  setActiveStep(stepIndex + 1);
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

  const displaySelectedData = () => {
    const { year, make, model, trim, tireSize, season } = selectedData;
    return `${year} ${make} ${model} ${trim} ${tireSize} ${season}`.trim() || 'Select Vehicle Details';
  };

  // Check if all data is selected
  const allDataSelected = Object.values(selectedData).every(value => value !== '');

  useEffect(() => {
    if (allDataSelected) {
      setShowZipcodePopup(true);
    }
  }, [allDataSelected]);

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
        <div className="mx-6 mt-6 mb-5">
          <p className="text-xs my-1 font-semibold opacity-70 font-opensans text-customTextGrey2">Search Tires</p>
          <div className="flex items-center text-customBlack">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="15"
                className="mr-2 opacity-60"
                viewBox="0 0 24 21.333"
              >
                <path
                  d="M124-741.333v.667a1.929,1.929,0,0,1-.583,1.417,1.929,1.929,0,0,1-1.417.583,1.929,1.929,0,0,1-1.417-.583,1.929,1.929,0,0,1-.583-1.417V-750.2a3.294,3.294,0,0,1,.033-.467,2.474,2.474,0,0,1,.1-.433l2.5-7.1a2.557,2.557,0,0,1,.967-1.3,2.631,2.631,0,0,1,1.567-.5h13.667a2.631,2.631,0,0,1,1.567.5,2.557,2.557,0,0,1,.967,1.3l2.5,7.1a2.474,2.474,0,0,1,.1.433,3.293,3.293,0,0,1,.033.467v9.533a1.929,1.929,0,0,1-.583,1.417,1.929,1.929,0,0,1-1.417.583,1.929,1.929,0,0,1-1.417-.583,1.929,1.929,0,0,1-.583-1.417v-.667Zm-.267-12h16.533l-1.4-4H125.133Zm2.267,8a1.929,1.929,0,0,0,1.417-.583,1.929,1.929,0,0,0,.583-1.417,1.929,1.929,0,0,0-.583-1.417,1.929,1.929,0,0,0-1.417-.583,1.929,1.929,0,0,0-1.417.583,1.929,1.929,0,0,0-.583,1.417,1.928,1.928,0,0,0,.583,1.417A1.929,1.929,0,0,0,126-745.333Zm12,0a1.929,1.929,0,0,0,1.417-.583,1.928,1.928,0,0,0,.583-1.417,1.929,1.929,0,0,0-.583-1.417,1.929,1.929,0,0,0-1.417-.583,1.929,1.929,0,0,0-1.417.583,1.929,1.929,0,0,0-.583,1.417,1.929,1.929,0,0,0,.583,1.417A1.929,1.929,0,0,0,138-745.333Z"
                  transform="translate(-120 760)"
                  fill="black"
                />
              </svg>

            <h3 className="font-bold font-opensans text-sm">By Vehicle: <span className="text-customTextGrey2 opacity-85 font-semibold text-xs"> {displaySelectedData()}</span></h3>
          </div>
        </div>
        <Stepper
          steps={steps}
          activeStep={activeStep}
          onStepChange={(index) => {
            setActiveStep(index);
            if (index === steps.length - 1 && allDataSelected) {
              setShowZipcodePopup(true);
            }
          }}
        />
        <div className="p-5">
          <StepContent stepIndex={activeStep} />
        </div>
        {showZipcodePopup && <ZipcodePopup onClose={() => setShowZipcodePopup(false)} />}
      </div>
    </div>
  );
};

export default VehiclePopup;
