import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Plus, Edit3, Trash2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://bullwork-mobility.onrender.com/api/products/allproducts");
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    navigate("/addproduct");
  };

  const handleEditProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const token = localStorage.getItem("token");
      console.log(token)
      await axios.delete(`https://bullwork-mobility.onrender.com/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold text-purple-900">All Products</h2>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
          >
            <Plus className="w-5 h-5" />
            <span>Add Product</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {products.length === 0 ? (
            <p className="text-center text-gray-500 text-lg col-span-full">No products found.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition duration-200 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-100 border">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-grow text-left">
                  <h3 className="text-xl font-semibold text-purple-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Price:</strong> ₹{product.price}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <p className="text-sm text-gray-500">{product.tagline}</p>
                </div>

                <div className="flex flex-col gap-2 md:ml-4">
                  <button
                    onClick={() => handleEditProduct(product.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-purple-200 text-sm font-medium shadow"
                  >
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="flex items-center gap-1 px-4 py-2 bg-fuchsia-800 text-white rounded-md hover:bg-purple-900 text-sm font-medium shadow"
                  >
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
