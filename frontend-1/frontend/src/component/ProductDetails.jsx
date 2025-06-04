import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="p-10 min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="text-purple-600 underline hover:text-purple-800"
        >
          Go back to Products
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 py-12 px-6 md:px-10 max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-fuchsia-950 mb-10">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-[40vh] sm:h-[20vh] md:h-[40vh] lg:h-[96vh]  object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Product Title and Info */}
        <div className="mb-10 text-center ">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">{product.name}</h1>
          <p className="text-lg text-purple-700 font-semibold mb-4">{product.type}</p>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">{product.description}</p>
        </div>

        {/* Tagline */}
        {product.tagline && (
          <div className="mb-10  bg-purple-200 text-purple-800 px-6 py-4 rounded-xl text-center font-medium shadow-sm text-lg">
            {product.tagline}
          </div>
        )}

        {/* Features */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features</h3>
          <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700 text-base">
            {product.features.map((feature, idx) => (
              <li key={idx} className="leading-relaxed">{feature}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        {product.benefits && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h3>
            <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700 text-base">
              {product.benefits.map((benefit, idx) => (
                <li key={idx} className="leading-relaxed">{benefit}</li>
              ))}
            </ul>
          </div>
        )}

            {(product.powerSaving || product.graph) && (
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                
                {/* Power Saving Info */}
                {product.powerSaving && (
                <div className="bg-green-50 border-l-4 border-purple-400 p-6 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-semibold text-purple-700 mb-4">Power Saving Overview</h3>
                    <ul className="space-y-2 text-gray-700 text-base">
                    <li><strong>Traditional Sprayer Consumption:</strong> {product.powerSaving.traditionalSprayerConsumption}</li>
                    <li><strong>Warrior Consumption:</strong> {product.powerSaving.warriorConsumption}</li>
                    <li><strong>Efficiency Increase:</strong> {product.powerSaving.efficiencyIncrease}</li>
                    <li><strong>Operational Cost Reduction:</strong> {product.powerSaving.operationalCostReduction}</li>
                    </ul>
                </div>
                )}

                {/* Graph */}
                {product.graph && (
                <div className="bg-white p-4 rounded-xl shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{product.graph.title}</h3>
                    <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={product.graph.data}>
                        <XAxis dataKey="label" />
                        <YAxis unit={` ${product.graph.unit}`} />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b0764" radius={[2, 2, 0, 0]} />
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                )}

            </div>
            )}


        {/* Video */}
        {product.videoLink && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Watch in Action</h3>
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
              {/* <iframe
                src={product.videoLink}
                title="Product Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              <iframe
              className="w-full h-full"
              src={product.videoLink}
              title="Bullwork Technology Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>

            </div>
          </div>
        )}

<div className="bg-gray-50 py-6 px-6 text-center">
        <h1 className=' text-center text-4xl font-sans '>
          Join the bullwork family
        </h1>
        <div className="mt-12 flex  text-xl justify-center gap-2">
          <button
            onClick={() => { navigate("/order"); }}
            className=" rounded-xl bg-gradient-to-r from-purple-800 border-2 border-purple-950 to-purple-950 hover:bg-purple-800 text-white font-semibold m-6 px-12 py-2  mb-6"
          >
            Order
          </button>
          <button
            onClick={() => { navigate("/bookdemo"); }}
            className="rounded-xl hover:bg-purple-950 hover:text-white border-2 border-purple-900  font-semibold m-6 px-5 py-2 mb-6"
          >
            Book Demo
          </button>
        </div>
      </div>
    

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => navigate("/products")}
            className="inline-block bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-800 transition duration-300"
          >
            ← Back to Products
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;






