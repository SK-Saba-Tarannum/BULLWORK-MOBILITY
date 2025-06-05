import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios"; 

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const viewDetails = (product) => {
    navigate("/productdetails", { state: { product } });
  };

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
  }, [ ]);
  


  return (
    <>
    <Navbar/>
    <h1 className="text-center p-4 font-semibold text-4xl">Products</h1>
     
        <div className="p-6 border-t-4 border-fuchsia-800 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 place-items-center text-center">

        {products.map((product, index) => (
            <div
            key={index}
            className="bg-white w-full max-w-xs  shadow-fuchsia-950 rounded-xl -shadow-md shadow-md p-6 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out"
            onClick={() => viewDetails(product)}
            >
            
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 line-clamp-2">{product.description}</p>
    </div>
  ))}
</div>

  
    </>
  );
};

export default Products;
