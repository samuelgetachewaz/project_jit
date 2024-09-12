import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ExamResults from './pages/ExamResults';
import QuestionBank from './pages/QuestionBank';
import ReferenceBooks from './pages/ReferenceBooks';
import Courses from './pages/Courses';
import UploadAssignments from './pages/UploadAssignments';
import Events from './pages/Events';
import Feedback from './pages/Feedback';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/:role/dashboard" element={<Dashboard />} />
          <Route path="/student/exam-results" element={<ExamResults />} />
          <Route path="/student/question-bank" element={<QuestionBank />} />
          <Route path="/student/reference-books" element={<ReferenceBooks />} />
          <Route path="/student/courses" element={<Courses />} />
          <Route path="/student/upload-assignments" element={<UploadAssignments />} />
          <Route path="/student/events" element={<Events />} />
          <Route path="/student/feedback" element={<Feedback />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
