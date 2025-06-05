import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  
  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !password || !role) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const res = await axios.post('https://bullwork-mobility.onrender.com/api/auth/signup', {
        name,
        email,
        password,
        role: role.toUpperCase(), 
      });
  
      if (res.status === 201 || res.status === 200) {
        toast.success('Registration successful!', {
          position: 'top-right',
          autoClose: 3000,
        });

        setName('');
        setEmail('');
        setPassword('');
        setRole('');
  
        setTimeout(() => {
          navigate('/login');
        }, 1000); 
      }
    } catch (error) {
      toast.error(`Registration failed: ${error.response?.data?.message || error.message}`, {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };
  

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-sm shadow-purple-950 w-80">
        <h2 className="text-2xl font-bold text-center text-purple-950 mb-4">Register</h2>
        <form onSubmit={handleRegister} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-1 mb-4 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-1 border mb-4 border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-1 border mb-4 border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-1 border mb-4 border-gray-300 rounded"
            required
          >
            <option value="">Select Role</option>
            <option value="CUSTOMER">Customer</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-950 mb-4 text-white py-2 rounded hover:bg-purple-800 transition"
          >
            Register
          </button>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Go to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
