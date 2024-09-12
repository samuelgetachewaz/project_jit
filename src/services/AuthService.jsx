import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your API URL



// Function to login a user
const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });
    // Save the JWT token and user data in local storage
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Function to register a new user
const register = async (email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email,
      password,
      role
    });
    // Optionally auto-login the user after registration
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

// Function to log out the user
const logout = () => {
  // Remove the JWT token and user data from local storage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Function to get the current user from local storage
const getCurrentUser = () => {
    // Example: Logic to get the current user
    return { username: 'JohnDoe', role: 'student' };
  };
  

// Function to get the JWT token from local storage
const getToken = () => {
  return localStorage.getItem('token');
};

// Function to check if a user is authenticated
const isAuthenticated = () => {
  return !!getToken();
};

// Function to get the user's role
const getUserRole = () => {
  const user = getCurrentUser();
  return user ? user.role : null;
};

// Function to check if the user has the required role
const hasRole = (requiredRole) => {
  const userRole = getUserRole();
  return userRole === requiredRole;
};

export default {
  login,
  register,
  logout,
  getCurrentUser,
  getToken,
  isAuthenticated,
  getUserRole,
  hasRole
};
