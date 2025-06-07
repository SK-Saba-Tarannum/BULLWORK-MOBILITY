import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const DemoList = () => {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDemos = async () => {
      try {
        const res = await axios.get("https://bullwork-mobility.onrender.com/api/demo");
        setDemos(res.data);
      } catch (err) {
        console.error("Error fetching demo bookings:", err);
        setError("Failed to fetch demo data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDemos();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4 sm:px-8 py-12 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-purple-800 mb-10 text-center">
             Demo Booking Submissions
          </h2>

          {loading && (
            <p className="text-center text-lg text-gray-600 animate-pulse">Loading demo bookings...</p>
          )}
          {error && (
            <p className="text-center text-red-600 font-semibold">{error}</p>
          )}

          {!loading && demos.length === 0 && (
            <p className="text-center text-gray-500 text-lg">No demo bookings found.</p>
          )}

          {!loading && demos.length > 0 && (
            <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-200">
              <table className="min-w-full text-sm text-left bg-white rounded-xl overflow-hidden">
                <thead className="bg-purple-800 text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Phone</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Product</th>
                    <th className="px-6 py-4 font-semibold">Address</th>
                    <th className="px-6 py-4 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {demos.map((demo, index) => (
                    <tr
                      key={demo.id}
                      className={`hover:bg-purple-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <td className="px-6 py-4">{demo.name}</td>
                      <td className="px-6 py-4">{demo.phone}</td>
                      <td className="px-6 py-4">{demo.email}</td>
                      <td className="px-6 py-4">{demo.product}</td>
                      <td className="px-6 py-4">{demo.address}</td>
                      <td className="px-6 py-4">{demo.message || <span className="text-gray-400">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DemoList;
