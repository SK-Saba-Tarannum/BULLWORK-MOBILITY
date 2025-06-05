import React, { useState } from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 bg-black text-white shadow-md px-6 py-4 flex justify-between items-center">

        <div className="text-xl tracking-wide flex gap-3 items-center">
          <img src="/logo.webp" alt="Bullwork Logo" className="h-10" />
          <span className="text-2xl font-semibold">BULLWORK MOBILITY</span>
        </div>

        <nav className="hidden lg:flex space-x-6 items-center">
          <a href="/" className="hover:text-purple-400">HOME</a>
          <a href="/products" className="hover:text-purple-400">PRODUCTS</a>
          <a href="/technology" className="hover:text-purple-400">TECHNOLOGY</a>
          <a href="/aboutus" className="hover:text-purple-400">ABOUT US</a>
          <a href="/career" className="hover:text-purple-400">CAREERS</a>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => navigate("/order")}
            className="bg-gradient-to-r from-purple-400 to-purple-900 hover:opacity-90 text-white px-4 py-2 rounded-md font-medium"
          >
            ORDER
          </button>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center space-x-2 border border-white hover:border-purple-400 px-4 py-2 rounded-md"
          >
            <FaUser size={16} />
            <span>LOGIN</span>
          </button>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 z-40 lg:hidden">
            <a href="/" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>HOME</a>
            <a href="/products" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>PRODUCTS</a>
            <a href="/technology" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>TECHNOLOGY</a>
            <a href="/aboutus" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>ABOUT US</a>
            <a href="/career" className="hover:text-purple-400" onClick={() => setIsOpen(false)}>CAREERS</a>
            <button
              onClick={() => {
                navigate("/order");
                setIsOpen(false);
              }}
              className="bg-gradient-to-r from-purple-400 to-purple-900 hover:opacity-90 text-white px-4 py-2 rounded-md font-medium"
            >
              ORDER
            </button>
            <button
              onClick={() => {
                navigate("/login");
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 border border-white hover:border-purple-400 px-4 py-2 rounded-md"
            >
              <FaUser size={16} />
              <span>LOGIN</span>
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
