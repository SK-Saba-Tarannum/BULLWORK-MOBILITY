import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./Navbar";
import Footer from "./Footer";

function Orders1() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (user?.id) {
      axios
        .get('https://bullwork-mobility.onrender.com/api/userorders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setOrders(res.data))
        .catch((err) => console.error('Error fetching orders:', err));
    }
  }, [user, token]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">Your Orders</h2>

        {orders.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">You have no orders yet.</div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex justify-between items-center bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-200 border border-purple-100"
              >
                {/* Order details */}
                <div className="flex-1 pr-4">
                  <h3 className="text-xl font-semibold text-purple-950 mb-2">
                    {order.product?.name || 'Unknown Product'}
                  </h3>
                  <p className="text-gray-700">
                    <strong>Quantity:</strong> {order.quantity}
                  </p>
                  <p className="text-gray-700">
                    <strong>Ordered on:</strong> {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                {/* Product image */}
                {order.product?.imageUrl && (
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={order.product.imageUrl}
                      alt={order.product.name}
                      className="w-full h-full object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Orders1;
