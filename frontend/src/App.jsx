import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FeedbackPage from "./pages/Feedback";
import ContactPage from "./pages/Contact";
import Footer from "@/components/Footer";
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './utils/ProtectedRoute';
import RoleDashboard from './pages/RoleDashboard';
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrder from "./pages/admin/order"
import AdminProduct from "./pages/admin/product"
import AdminUser from "./pages/admin/user";

export default function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RoleDashboard />
            </ProtectedRoute>}
        />
        <Route path='/adminhome'
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>

          } />
        <Route path='/order'
          element={
            <ProtectedRoute>
              <AdminOrder />
            </ProtectedRoute>

          } />
        <Route path='/product'
          element={
            <ProtectedRoute>
              <AdminProduct />
            </ProtectedRoute>

          } />
          <Route path='/users'
          element={
            <ProtectedRoute>
              <AdminUser />
            </ProtectedRoute>

          } />
      </Routes>
      
      <Footer className="justify-center items-center" />
    </div>
  );
}
