import React from 'react';
import AuthService from '../services/AuthService'; // Mock AuthService

const Dashboard = () => {
  const user = AuthService.getCurrentUser(); // Get user role

  return (
    <div>
     
      <h1>{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard</h1>
      
      {/* Shared Components */}
      <div>
        <h2>Welcome, {user.username}</h2>
        <p>Here are your dashboard features:</p>
      </div>

      {/* Student-Specific Components */}
      {user.role === 'student' && (
        <>
          <h3>Student Features</h3>
          <ul>
            <li>View Exam Results</li>
            <li>Access Question Bank</li>
            <li>View Reference Books</li>
            {/* Other student features */}
          </ul>
        </>
      )}

      {/* Teacher-Specific Components */}
      {user.role === 'teacher' && (
        <>
          <h3>Teacher Features</h3>
          <ul>
            <li>Manage Courses</li>
            <li>Grade Submissions</li>
            {/* Other teacher features */}
          </ul>
        </>
      )}

      {/* Admin-Specific Components */}
      {user.role === 'admin' && (
        <>
          <h3>Admin Features</h3>
          <ul>
            <li>Manage Users</li>
            <li>Manage Courses</li>
            {/* Other admin features */}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dashboard;
