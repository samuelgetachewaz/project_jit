import React from 'react'
import {LandingPage,AdminDashboard, ManageUsers,EnrolledCourses, ExamResults, QuestionBanks, ReferenceBooks, UploadedAssignments,UploadAssignments, GradeAssignments, ViewAssignments} from './src/pages/index';
import { Route, Router, Routes } from 'react-router-dom';
const app = () => {
  return (
    <Router>
      <Routes>
        <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/exam-results" element={<ExamResults />} />
        <Route path="/upload-assignment" element={<UploadAssignments />} />
        
        {/* Teacher routes */}
        <Route path="/grade-assignments" element={<GradeAssignments />} />
        <Route path="/view-submitted-assignments" element={<ViewAssignments />} />
        <Route path="/add-exam-results" element={<ExamResults />} />
        
        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default app
