import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast.warning('Please enter email and password', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5002/api/auth/login', {
        email,
        password,
      });
  
      const { token, user } = response.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 3000,
      });
  
      setEmail('');
      setPassword('');
  
      setTimeout(() => {
        if (user.role === 'ADMIN') {
          navigate('/ordershistory'); // admin
        } else {
          navigate('/order'); // customer
        }
      }, 1000);
  
    } catch (error) {
      toast.error(`Login failed: ${error.response?.data?.message || error.message}`, {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };


  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-sm shadow-purple-950 w-72">
        <h2 className="text-3xl font-bold text-center text-purple-950 mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-1 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-1 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-950 text-white py-1 rounded hover:bg-purple-800 transition"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => navigate('/registration')}
            className="w-full mt-3 bg-gray-500 text-white py-1 rounded hover:bg-gray-700 transition"
          >
            Go to Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

