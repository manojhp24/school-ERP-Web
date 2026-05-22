const getErrorMessage = (error) => {
  const response = error?.response?.data;
  if (response?.errors && response.errors.length > 0) {
    return response.errors[0];
  }
  if (response?.message) {
    return response.message;
  }

  // Network Error
  if (error.code === "ERR_NETWORK") {
    return "Unable to connect to server. " + "Please contact the developer.";
  }

  // Internal Server Error
  if (error?.response?.status >= 500) {
    return "Internal server error";
  }

  // Fallback
  return "Something went wrong";
};

export default getErrorMessage;
