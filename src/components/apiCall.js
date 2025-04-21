import axios from "axios";

const API_KEY = '47078304-c3f049b27ce9e59b1bcf1e44e';

// Base API URL
const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

// Helper function to format URL with query parameters
const formatUrl = (params) => {
  let url = `${apiUrl}&per_page=25&safesearch=true&editors_choice=true`;
  if (!params) return url;

  Object.keys(params).forEach((key) => {
    let value = key === "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  return url;
};

// Function to handle API calls
export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (err) {
    const errorMessage = err.response?.data?.message || err.message || "Unknown error occurred";
    console.error("API call error:", errorMessage);
    return { success: false, msg: errorMessage };
  }
};
