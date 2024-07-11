# Multi-Step Form with React

This project is a responsive multi-step form created using React and Tailwind CSS. The form collects personal and address information, and provides a confirmation step before submission. It includes data validation, error handling, navigation controls, and local storage persistence.

## Features

- Multi-step form with three steps:
  - Step 1: Personal Information (Name, Email, Phone)
  - Step 2: Address Information (Address Line 1, Address Line 2, City, State, Zip Code)
  - Step 3: Confirmation (Review all entered data)
- Navigation buttons with disabled states when appropriate
- Client-side validation for all fields
- Error messages for invalid or empty fields
- State management using React hooks
- Local storage persistence for form data
- Responsive design for various screen sizes
- Form submission displays a "Form Submitted!" message for 2 seconds before resetting

## Folder Structure

multi-step-form/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Step1.js
│ │ ├── Step2.js
│ │ ├── Step3.js
│ │ ├── Navigation.js
│ │ └── ...
│ ├── hooks/
│ │ ├── useLocalStorage.js
│ ├── App.js
│ ├── index.js
│ └── styles/
│ └── index.css
├── .gitignore
├── package.json
└── README.md# Multi-step-form
# Multi-step-form
