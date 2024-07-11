import React from 'react';

const Navigation = ({ currentStep, nextStep, prevStep }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        className={`px-4 py-2 rounded-md ${currentStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        onClick={prevStep}
        disabled={currentStep === 1}
      >
        Back
      </button>
      {currentStep < 3 ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={nextStep}
        >
          Next
        </button>
      ) : (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => alert('Form submitted!')}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
