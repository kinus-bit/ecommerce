import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FeedbackPage from "./pages/Feedback";
import ContactPage from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "@/components/Footer"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrder from "./pages/admin/order"
import AdminProduct from "./pages/admin/product"
import ProductDasbboard from "./pages/ProductDasbboard"

export default function App() {
  return (
    <div >
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/admin/order' element={<AdminOrder />} />
        <Route path='/admin/product' element={<AdminProduct />} />
        <Route path='/dashboard' element={<ProductDasbboard />} />
      </Routes>
      <Footer className="justify-center items-center"/>
    </div>
  );
}
