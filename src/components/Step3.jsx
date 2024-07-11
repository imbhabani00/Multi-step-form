import React from 'react';

const Step3 = ({ formData, handleSubmit }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Address Information</h3>
        <p><strong>Address Line 1:</strong> {formData.address1}</p>
        <p><strong>Address Line 2:</strong> {formData.address2}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
        <p><strong>Zip Code:</strong> {formData.zip}</p>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Step3;
