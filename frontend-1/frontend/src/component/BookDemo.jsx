import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        setStatus(" User not logged in.");
        return;
      }
  
      const user = JSON.parse(storedUser);
      const userId = user?.id;
  
      if (!userId) {
        setStatus("Invalid user data in localStorage.");
        return;
      }
  
      
      const response = await axios.post(
        "https://bullwork-mobility.onrender.com/api/demo",
        {
          userId,
          ...formData,
        }
      );
  
      if (response.status === 201) {
        setStatus(" Demo booked successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          product: "",
          message: "",
        });
      } else {
        setStatus(" Something went wrong.");
      }
    } catch (error) {
      console.error("Error booking demo:", error);
  
      const message =
        "Failed to book demo. Check console for details.";
  
      setStatus(message);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">
          BOOK A DEMO
        </h2>
        <p className="text-center text-lg mb-8">
          Fill in the below details to book a product demo
        </p>

        {status && (
          <p className="text-center mb-4 text-lg font-semibold text-red-600">
            {status}
          </p>
        )}

        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              name="address"
              type="text"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            >
              <option value="Beast">Beast</option>
              <option value="Vamana">Vamana</option>
              <option value="GLX">GLX</option>
              <option value="WARRIOR">Warrior</option>
              <option value="OX">OX</option>

            </select>
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="border p-3 rounded-md w-full sm:col-span-2"
              rows="4"
            ></textarea>

            <div className="col-span-1 sm:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-white text-purple-800 border-2 border-purple-800 px-8 py-3 rounded-md font-bold hover:bg-purple-800 hover:text-white transition"
              >
                BOOK PRODUCT
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDemo;
