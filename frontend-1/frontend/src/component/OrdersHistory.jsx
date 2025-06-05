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
      const res = await axios.get("https://bullwork-mobility.onrender.com/api/orders");
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
        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
          <h2 className="text-4xl font-bold text-purple-900">Order History</h2>
          <button
            onClick={goToProductsPage}
            className="px-5 py-2.5 bg-purple-900 text-white rounded-xl hover:bg-fuchsia-800 transition-all shadow-md"
          >
            Product Details
          </button>
        </div>

        <div className="space-y-6 max-w-6xl mx-auto">
          {orders.length === 0 ? (
            <p className="text-center text-gray-900 text-lg">No orders found.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-4 shadow-md border hover:shadow-lg transition duration-200 flex gap-6 items-center"
              >
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={order.product?.imageUrl}
                    alt={order.product?.name}
                    className="w-full h-full object-cover rounded-lg border"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-purple-900">
                      {order.product?.name}
                    </h3>
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
