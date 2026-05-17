const getErrorMessage = (error) => {
  // Backend Message Priority
  if (error?.response?.data?.message) {
    return error.response.data.message;
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
