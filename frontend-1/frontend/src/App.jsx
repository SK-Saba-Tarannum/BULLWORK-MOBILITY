import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import OrderForm from './component/OrderForm'; // example
import BookDemo from './component/BookDemo';
import Technology from './component/Technology';
import Aboutus from './component/Aboutus';
import Career from './component/Career';
import Products from './component/Products';
import ProductDetails from './component/ProductDetails';
import AddProduct from './component/AddProduct';
import Login from "./component/Login";
import Registration from "./component/Registration";
import OrdersHistory from './component/OrdersHistory'; // example
import Order1 from "./component/Orders1.jsx"
import AllProducts from './component/AllProducts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/career" element={<Career />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/ordershistory" element={<OrdersHistory/>} />
        <Route path="/order1" element={<Order1/>} />
        <Route path="/allproducts" element={<AllProducts />} />

      </Routes>
    </Router>
  );
}

export default App;

