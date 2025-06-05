import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "Beast",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demo booked:", formData);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">BOOK A DEMO</h2>
        <p className="text-center text-lg mb-8">Fill in the below details to book a product demo</p>

        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              name="name"
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />

            <input
              name="email"
              type="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              name="address"
              type="text"
              placeholder="Enter Address"
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />

            <select
              name="product"
              onChange={handleChange}
              className="border p-3 rounded-md w-full sm:col-span-2"
              value={formData.product}
            >
              <option value="Beast">Beast</option>
              <option value="Vamana">Vamana</option>
              <option value="GLX">GLX</option>
            </select>

            <textarea
              name="message"
              placeholder="Enter Message"
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
