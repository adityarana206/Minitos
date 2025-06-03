import axios from 'axios';
import { Alert } from 'react-native';

// You can replace this with your actual token retrieval logic
const getAuthToken = async (): Promise<string | null> => {
  // For example: return await AsyncStorage.getItem('token');
  return null;
};

// Create axios instance
const api = axios.create({
  baseURL: 'https://minitos-backend.onrender.com/api', // replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  async config => {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 401) {
        Alert.alert('Unauthorized', 'Please login again.');
        // Navigate to login or handle unauthorized error
      } else if (status === 500) {
        Alert.alert('Server Error', 'Something went wrong on the server.');
      } else {
        Alert.alert('Error', data?.message || 'Something went wrong.');
      }
    } else {
      Alert.alert('Network Error', 'Please check your internet connection.');
    }

    return Promise.reject(error);
  }
);

export default api;
