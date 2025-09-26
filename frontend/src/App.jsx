import { useState,useEffect } from "react";
import { Routes,Route } from 'react-router-dom'
import axios from 'axios';
import HomePage  from "./pages/Home";
import AboutPage  from "./pages/About";
import FeedbackPage  from "./pages/Feedback";
import ContactPage  from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "@/components/Footer"
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrder from "./pages/admin/order"
import AdminProduct from "./pages/admin/product"
import ProductDasbboard from "./pages/ProductDasbboard"
// import API from "./services/api";




export default function App(){
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [form,setForm] = useState({productUrl:'',productName:'',productDescription:'',productPrice:''});
 

  return (

    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/About' element={<AboutPage/>} />
      <Route path='/feedback' element={<FeedbackPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/admin/order' element={<AdminOrder/>}/>
      <Route path='/admin/product' element={<AdminProduct/>}/>
      <Route path='/dashboard' element={<ProductDasbboard/>} />
    </Routes>
    <Footer />
    
    
    </>
  );
}