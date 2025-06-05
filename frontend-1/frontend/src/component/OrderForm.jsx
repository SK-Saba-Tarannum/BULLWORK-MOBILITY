import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Country, State, City } from "country-state-city";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [userType, setUserType] = useState("Individual");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [message, setMessage] = useState("");

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");

  const navigate=useNavigate()
  // Fetch countries
  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  // Fetch states based on selected country
  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setSelectedState("");
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  // Fetch cities based on selected state
  useEffect(() => {
    if (selectedCountry && selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
      setSelectedCity("");
    }
  }, [selectedState, selectedCountry]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://bullwork-mobility.onrender.com/api/products/allproducts");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to place an order.");
      return;
    }
  
    const data = {
      userType,
      name,
      phone,
      email,
      address,
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
      pincode,
      aadhar,
      pan,
      productId: parseInt(productId),
      message,
      
    };
  
    try {
      const response = await axios.post("https://bullwork-mobility.onrender.com/api/order", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("Order submitted:", response.data);
      alert("Order submitted successfully!");
      
      // Reset all fields
      setUserType("Individual");
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setSelectedCountry("");
      setSelectedState("");
      setSelectedCity("");
      setPincode("");
      setAadhar("");
      setPan("");
      setProductId("");
      setMessage("");


      if (response.status === 200 || response.status === 201) {
        toast.success('Order placed successfully!', {
          position: 'top-center',
          autoClose: 3000,
        });
        // Optionally reset form
      }
    } catch (error) {
      toast.error(`Order failed: ${error.response?.data?.message || error.message}`, {
        position: 'top-center',
        autoClose: 5000,
      });
    
   }
};
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-2">ORDER FORM</h2>
        <p className="text-center text-lg mb-8">Fill in the below details to order products</p>
        
        <div className="flex justify-center mb-10">
          <button onClick={()=>{navigate("/order1")}} className="bg-white text-purple-800 border-2 border-purple-800 px-8 py-3 rounded-md font-bold hover:bg-purple-800 hover:text-white transition">
            Check Your Orders
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm shadow-purple-950">
          {/* User Type Toggle */}
          <div className="flex justify-center mb-6 flex-wrap">
            <button
              type="button"
              onClick={() => setUserType("Individual")}
              className={`px-6 py-2 border-2 rounded-l-lg font-semibold ${
                userType === "Individual"
                  ? "bg-purple-800 text-white border-purple-800"
                  : "border-purple-800 text-purple-800"
              }`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setUserType("Company")}
              className={`px-6 py-2 border-2 rounded-r-lg font-semibold ${
                userType === "Company"
                  ? "bg-purple-800 text-white border-purple-800"
                  : "border-purple-800 text-purple-800"
              }`}
            >
              Company
            </button>
          </div>

      
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required className="border p-3 rounded-md w-full" />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone Number" required className="border p-3 rounded-md w-full" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" required className="border p-3 rounded-md w-full" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" className="border p-3 rounded-md w-full" />

        
            <select
              className="w-full p-3 border rounded"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </select>

            
            <select
              className="w-full p-3 border rounded"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              disabled={!states.length}
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>

        
            <select
              className="w-full p-3 border rounded"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!cities.length}
              required
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Enter Pincode" className="border p-3 rounded-md w-full" />
            <input type="text" value={aadhar} onChange={(e) => setAadhar(e.target.value)} placeholder="Enter Aadhar Number" className="border p-3 rounded-md w-full" />
            <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} placeholder="Enter Pan Number" className="border p-3 rounded-md w-full" />

  
            <select
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              required
              className="border p-3 rounded-md w-full"
            >
              <option value="">Select a Product</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Message"
              rows="4"
              className="border p-3 rounded-md w-full sm:col-span-2"
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

export default OrderForm;

