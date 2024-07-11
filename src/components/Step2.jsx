import React from 'react';

const Step2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Address Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange('address1')}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange('address2')}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange('city')}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange('state')}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Zip Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange('zip')}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
    </div>
  );
};

export default Step2;
