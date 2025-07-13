import { useState,useEffect } from "react";
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export default function App(){
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [form,setForm] = useState({productUrl:'',productName:'',productDescription:'',productPrice:''});
  const [error,setError] = useState('');

  useEffect(() => {
    fetchProducts();
  },[]);

  const fetchProducts = async () => {
    try{
      const res = await axios.get(API);
      setProducts(res.data);
    }catch(error){
      setError('Failed to fetch products');
    }
  }

  const handleAdd = async () => {
    if(!form.productUrl.trim()) return setError('productUrl is required');
    setLoading(true);
     try{
      const res = await axios.post(API,form);
      setProducts(prev => [...prev,res.data]);
      setForm({productUrl:'',productName:'',productDescription:'',productPrice:''});
      setError('');
    }catch(error){
      setError('Failed to add product');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/80 via-black/70 to-blue-950/90 py-10 px-6 sm:px-10 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-blue-900/60 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-blue-900/40">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">kinus shopping center</h1>

           {/* form */}
          <div className="flex flex-wrap sm:flex-nowrap items-stretch gap-4 mb-6">
            <input
              className="flex-1 min-w-[150px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="productUrl"
              value={form.productUrl}
              onChange={e => setForm({ ...form, productUrl: e.target.value })}
            />

            <input
              className="flex-1 min-w-[150px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="productName"
              value={form.productName}
              onChange={e => setForm({ ...form, productName: e.target.value })}
            />

            <input
              className="flex-1 min-w-[150px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="productDescription"
              value={form.productDescription}
              onChange={e => setForm({ ...form, productDescription: e.target.value })}
            />

            <input
              type="number"
              className="flex-1 min-w-[150px] border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="productPrice"
              value={form.productPrice}
              onChange={e => setForm({ ...form, productPrice: e.target.value })}
            />

            <button
              onClick={handleAdd}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add product"}
            </button>
          </div>


        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 font-semibold text-sm">
            {error}
          </div>
        )}

        {/* Book List */}
        <div className="grid md:grid-cols-2 gap-4">
          {products.map(product => (
            <div
              key={product._id}
              className="border border-blue-900/30 bg-blue-950/60 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center relative overflow-hidden group p-0"
            >
              {product.productUrl && (
                <img
                  src={product.productUrl}
                  alt={product.productName || 'Product Image'}
                  className="w-full h-48 object-contain rounded-t-2xl border-b-2 border-blue-100 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-white"
                  style={{marginBottom: 0, backgroundColor: '#fff'}}
                />
              )}
              <div className="w-full flex flex-col items-center p-6 pt-4">
                {product.productName && (
                  <h2 className="text-xl font-bold text-blue-700 mb-1 text-center group-hover:text-blue-900 transition-colors duration-300">
                    {product.productName}
                  </h2>
                )}
                {product.productDescription && (
                  <p className="text-base text-gray-600 mb-2 text-center px-2">
                    {product.productDescription}
                  </p>
                )}
                {product.productPrice && (
                  <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-lg shadow-sm mt-2">
                    ${parseFloat(product.productPrice).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}
 

