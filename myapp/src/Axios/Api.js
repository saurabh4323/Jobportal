// api.js
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define API requests
export const UserLogin = async (userData) => {
  try {
    console.log(userData)
    const response = await api.post('/users/auth',userData);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const userSentOtp = async (userData) => {
  try {
    console.log(userData)
    const response = await api.post('/users/sendOtp',userData);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
