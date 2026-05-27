import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../features/auth/pages/LoginPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import StudentPage from "../features/students/pages/StudentPage";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import CreateStudentPage from "../features/students/pages/CreateStudentPage";
import StudentProfilePage from "../features/students/pages/StudentProfilePage";
import ProtectedRoutes from "./ProtectedRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/student/create" element={<CreateStudentPage />} />
          <Route path="/student/:studentId" element={<StudentProfilePage />} />
          <Route path="/students/:studentId" element={<StudentProfilePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
