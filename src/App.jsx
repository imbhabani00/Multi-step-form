import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('formData', {
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      {submitted ? (
        <div className="text-center text-3xl font-bold">Form Submitted!</div>
      ) : (
        <div className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
          {currentStep === 1 && <Step1 formData={formData} handleChange={handleChange} />}
          {currentStep === 2 && <Step2 formData={formData} handleChange={handleChange} />}
          {currentStep === 3 && <Step3 formData={formData} handleSubmit={handleSubmit} />}
          <Navigation
            currentStep={currentStep}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </div>
      )}
    </div>
  );
};

export default App;
