// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Plus, Edit3, Trash2 } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   const fetchProducts = async () => {
//     try {
      
//       const res = await axios.get("http://localhost:5002/api/products/allproducts");
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAddProduct = () => {
//     navigate("/add-product");
//   };

//   const handleEditProduct = (id) => {
//     navigate(`/edit-product/${id}`);
//   };

//   const handleDeleteProduct = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5002/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p.id !== id));
//     } catch (err) {
//       console.error("Failed to delete product:", err);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 py-10 px-4">
//         <div className="max-w-2 xl mx-auto mb-8 flex justify-between items-center">
//           <h2 className="text-4xl font-bold text-purple-900">All Products</h2>
//           <button
//             onClick={handleAddProduct}
//             className="flex items-center gap-2 px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
//           >
//             <Plus className="w-5 h-5" />
//             <span>Add Product</span>
//           </button>
//         </div>

//         <div className="space-y-6 max-w-2xl mx-auto">
//           {products.length === 0 ? (
//             <p className="text-center text-gray-900 text-lg">No products found.</p>
//           ) : (
//             products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition duration-200 flex items-center justify-between gap-4"
//               >
//                 {/* Image */}
//                 <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border bg-gray-100">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="flex-1 ml-4">
//                   <h3 className="text-lg font-semibold text-purple-900">{product.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     {/* <strong>₹{product.price}</strong> • Stock: {product.stock} */}
//                   </p>
//                   {/* <p className="text-sm text-gray-500 truncate w-[90%]">{product.tagline}</p> */}
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEditProduct(product.id)}
//                     className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 text-black rounded-md hover:bg-purple-200 text-sm font-medium shadow"
//                   >
//                     <Edit3 className="w-4 h-4" /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     className="flex items-center gap-1 px-3 py-1.5 bg-fuchsia-800 text-white rounded-md hover:bg-purple-900 text-sm font-medium shadow"
//                   >
//                     <Trash2 className="w-4 h-4" /> Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AllProducts;


















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Plus, Edit3, Trash2 } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { toast } from "react-toastify";

// const OrdersHistory = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/api/products/allproducts");
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       toast.error("Failed to load products");
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleAddProduct = () => {
//     navigate("/addproduct");
//   };

//   const handleEditProduct = (id) => {
//     navigate(`/editproduct/${id}`);
//   };

//   const handleDeleteProduct = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     const token = localStorage.getItem("token");
//     console.log(token)
//     if (!token) {
//       toast.error("Unauthorized. Please log in.");
//       return;
//     }

//     try {
//       await axios.delete(`http://localhost:5002/api/products/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setProducts((prev) => prev.filter((p) => p.id !== id));
//       console.log(products)
//       toast.success("Product deleted successfully");
//     } catch (err) {
//       console.error("Failed to delete product:", err);
//       toast.error(err?.response?.data?.message || "Failed to delete product");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 py-10 px-4">
//         <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
//           <h2 className="text-4xl font-bold text-purple-900">All Products</h2>
//           <button
//             onClick={handleAddProduct}
//             className="flex items-center gap-2 px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
//           >
//             <Plus className="w-5 h-5" />
//             <span>Add Product</span>
//           </button>
//         </div>

//         <div className="space-y-6 max-w-6xl mx-auto">
//           {products.length === 0 ? (
//             <p className="text-center text-gray-900 text-lg">No products found.</p>
//           ) : (
//             products.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition duration-200 flex items-center justify-between gap-4"
//               >
//                 {/* Image */}
//                 <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border bg-gray-100">
//                   <img
//                     src={product.imageUrl}
//                     alt={product.name}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>

//                 {/* Info */}
//                 <div className="flex-1 ml-4">
//                   <h3 className="text-lg font-semibold text-purple-900">{product.name}</h3>
//                   <p className="text-sm text-gray-700">
//                     ₹{product.price} • Stock: {product.stock}
//                   </p>
//                   <p className="text-sm text-gray-500 truncate max-w-[90%]">
//                     {product.tagline}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEditProduct(product.id)}
//                     className="flex items-center gap-1 px-3 py-1.5 bg-gray-200 text-black rounded-md hover:bg-purple-200 text-sm font-medium shadow"
//                   >
//                     <Edit3 className="w-4 h-4" /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeleteProduct(product.id)}
//                     className="flex items-center gap-1 px-3 py-1.5 bg-fuchsia-800 text-white rounded-md hover:bg-purple-900 text-sm font-medium shadow"
//                   >
//                     <Trash2 className="w-4 h-4" /> Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default OrdersHistory;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { toast } from "react-toastify";

// const OrdersHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/api/orders");
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       toast.error("Failed to load orders");
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const goToProductsPage = () => {
//     navigate("/products");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 py-10 px-4">
//         <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
//           <h2 className="text-4xl font-bold text-purple-900">Order History</h2>
//           <button
//             onClick={goToProductsPage}
//             className="px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
//           >
//             Product Details
//           </button>
//         </div>

//         <div className="space-y-6 max-w-6xl mx-auto">
//           {orders.length === 0 ? (
//             <p className="text-center text-gray-900 text-lg">No orders found.</p>
//           ) : (
//             orders.map((order) => (
//               <div
//                 key={order.id}
//                 className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition duration-200"
//               >
//                 <h3 className="text-lg font-semibold text-purple-900">
//                   {order.name} - {order.userType}
//                 </h3>
//                 <p className="text-sm text-gray-700">
//                   {order.email} • {order.phone}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   Address: {order.address}, {order.city}, {order.state} - {order.pincode}
//                 </p>
//                 <p className="text-sm text-gray-600">Product: {order.product?.name}</p>
//                 <p className="text-sm text-gray-500 truncate max-w-[90%]">
//                   Message: {order.message}
//                 </p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default OrdersHistory;
















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { toast } from "react-toastify";

// const OrdersHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const navigate = useNavigate();

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:5002/api/orders");
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       toast.error("Failed to load orders");
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const goToProductsPage = () => {
//     navigate("/products");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 py-10 px-4">
//         <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
//           <h2 className="text-4xl font-bold text-purple-900">Order History</h2>
//           <button
//             onClick={goToProductsPage}
//             className="px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
//           >
//             Product Details
//           </button>
//         </div>

//         <div className="space-y-6 max-w-6xl mx-auto">
//           {orders.length === 0 ? (
//             <p className="text-center text-gray-900 text-lg">No orders found.</p>
//           ) : (
//             orders.map((order) => (
//               <div
//                 key={order.id}
//                 className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition duration-200"
//               >
//                 <h3 className="text-lg font-semibold text-purple-900">
//                   {order.name} - {order.userType}
//                 </h3>
//                 <p className="text-sm text-gray-700">
//                   {order.email} • {order.phone}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   Address: {order.address}, {order.city}, {order.state} - {order.pincode}
//                 </p>
//                 <p className="text-sm text-gray-600">Product: {order.product?.name}</p>
//                 <p className="text-sm text-gray-500 truncate max-w-[90%]">
//                   Message: {order.message}
//                 </p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default OrdersHistory;







import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { toast } from "react-toastify";

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
      toast.error("Failed to load orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const goToProductsPage = () => {
    navigate("/allproducts");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold text-purple-900">Order History</h2>
          <button
            onClick={goToProductsPage}
            className="px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
          >
            Product Details
          </button>
        </div>

        {/* Orders List */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {orders.length === 0 ? (
            <p className="text-center text-gray-900 text-lg">No orders found.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition duration-200 flex gap-6 items-center"
              >
                {/* Left Side Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={order.product?.imageUrl}
                    alt={order.product?.name}
                    className="w-full h-full object-cover rounded-lg border"
                  />
                </div>

                {/* Right Side Content */}
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-purple-900">
                      {order.product?.name}
                    </h3>
                    {/* <p className="text-sm text-gray-600">
                      ₹{order.product?.price} • Stock: {order.product?.stock}
                    </p> */}
                  </div>

                  <div className="text-sm text-gray-800 space-y-1">
                    <p><strong>Name:</strong> {order.name} ({order.userType})</p>
                    <p><strong>Email:</strong> {order.email}</p>
                    <p><strong>Phone:</strong> {order.phone}</p>
                    <p>
                      <strong>Address:</strong> {order.address}, {order.city}, {order.state} - {order.pincode}
                    </p>
                    {order.message && (
                      <p className="text-gray-600">
                        <strong>Message:</strong> {order.message}
                      </p>
                    )}
                  </div>
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

export default OrdersHistory;
