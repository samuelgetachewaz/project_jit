import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService'; // For getting user role
import logo from '../assets/logo.jpg';
import './navbar.css';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Header1 from './Header1';
const Menu = () => {
  const user = AuthService.getCurrentUser(); // Retrieve current user and role
  return (
    <>
         {user ? (
          <>
            <li><Link to={`/${user.role}/dashboard`}>Dashboard</Link></li>

            {/* Student Links */}
            {user.role === 'student' && (
              <>
                <li  ><Link to="/student/exam-results">Exam Results</Link></li>
                <li><Link to="/student/question-bank">Question Bank</Link></li>
                <li><Link to="/student/reference-books">Reference Books</Link></li>
                <li><Link to="/student/courses">Courses</Link></li>
                <li><Link to="/student/upload-assignments">Upload Assignments</Link></li>
                <li><Link to="/student/events">Events</Link></li>
                {/* <li><Link to="/student/feedback">Feedback</Link></li> */}
              </>
            )}

            {/* Teacher Links */}
            {user.role === 'teacher' && (
              <>
                <li><Link to="/teacher/manage-courses">Manage Courses</Link></li>
                <li><Link to="/teacher/grade-submissions">Grade Submissions</Link></li>
                <li><Link to="/teacher/events">Events</Link></li>
                <li><Link to="/teacher/feedback">View Feedback</Link></li>
              </>
            )}

            {/* Admin Links */}
            {user.role === 'admin' && (
              <>
                <li><Link to="/admin/user-management">User Management</Link></li>
                <li><Link to="/admin/course-management">Course Management</Link></li>
                <li><Link to="/admin/events-management">Events Management</Link></li>
              </>
            )}

          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
    </>
  )
}


const Navbar = () => {
   
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className='app__navbar__main gradient__bg'>
 
    <nav className='app__navbar padding__section'>
      <div className='app__navbar-logo'>
        <img src={logo}alt="" />
      </div>
      <ul className='app__navbar-links p__paragraph'>
      <Menu />
      </ul>
      <div className='app__navbar-login '>
        <button className='custom__button'>Login</button>
      </div>


    <div className="app__navbar-menu">
      {!toggle
        ? <RiMenu3Line color='#fff' size={27} onClick={() => setToggle(prev => !prev )} />  
        : <RiCloseLine color='#fff' size={27} onClick={() => setToggle(prev => !prev)} /> 
      }

      {toggle && (
        <div className="app__navbar-container">
          <ul className='app__navbar-container-links p__paragraph'>
            <Menu />
          </ul>
          <div className='app__navbar-container-login'>
            <button className='custom__button'>Login</button>
          </div>
        </div>
      )}
      </div>
    </nav>
    <Header1/>
    </div>
  );
};

export default Navbar;
