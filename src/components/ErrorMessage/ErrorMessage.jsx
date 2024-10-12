import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ErrorMessage = ({ errorMessage }) => {
  return <p>{errorMessage}</p>;
};

export default ErrorMessage;
