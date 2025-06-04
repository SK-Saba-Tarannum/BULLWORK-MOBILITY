import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

// const products = [
//     {
//       "name": "Warrior",
//       "type": "4WD Electric Boom Sprayer",
//       "description": "The Bullwork Warrior is a revolutionary self-propelled boom sprayer designed for safe and efficient agricultural spraying. Built with farmers in mind, it performs effectively even in muddy soil conditions.",
//       "features": [
//         "4WD electric drive for optimal mobility",
//         "Remote control capability for precision spraying",
//         "Operates effectively on muddy and uneven terrain",
//         "Safe and efficient pesticide and fertilizer application",
//         "Health-focused design to reduce exposure risks",
//         "Promotes healthier crops and higher yields",
//         "Lower operational costs through automation",
//         "Zero-emission, eco-friendly technology"
//       ],
//       "benefits": [
//         "Enhances productivity and efficiency",
//         "Improves farmer health and safety",
//         "Supports sustainable agriculture"
//       ],
//       "tagline": "Step into the future of farming with Bullwork's zero-emission boom sprayer.",
//       "image": "Warrior.webp",
//       "videoLink": "https://www.youtube.com/embed/EXoyxUy-QRQ?autoplay=1&mute=1&loop=1&playlist=EXoyxUy-QRQ&controls=0&modestbranding=1",
//       "powerSaving": {
//         "traditionalSprayerConsumption": "12 kWh/hour",
//         "warriorConsumption": "4.5 kWh/hour",
//         "efficiencyIncrease": "62.5%",
//         "operationalCostReduction": "≈60%"
//       },
//       "graph": {
//         "type": "bar",
//         "title": "Power Consumption Comparison",
//         "data": [
//           { "label": "Traditional Sprayer", "value": 12 },
//           { "label": "Bullwork Warrior", "value": 4.5 }
//         ],
//         "unit": "kWh/hour"
//       }
//     },
//     {
//       "name": "Vamana",
//       "type": "Semi-Autonomous Vineyard Sprayer",
//       "description": "The Bullwork Vamana is a semi-autonomous spraying solution specifically built for vineyards and row crops. It ensures precision, efficiency, and safety in narrow terrains and rugged soil.",
//       "features": [
//         "Semi-autonomous operation for hands-free spraying",
//         "Custom spraying modes for vineyard-specific needs",
//         "Engineered for rough and inclined vineyard terrain",
//         "Compact design for narrow vineyard paths",
//         "Remote control with smart sensor integration",
//         "Water-saving spray optimization technology"
//       ],
//       "benefits": [
//         "Precision in vineyard spraying",
//         "Lower chemical and water usage",
//         "Enhanced safety in rough terrain"
//       ],
//       "tagline": "Precision spraying for the modern vineyard.",
//       "image": "Vamana Pro.webp",
//       "videoLink": "https://www.youtube.com/embed/ek8qFB0EYqI?autoplay=1&mute=1&loop=1&playlist=ek8qFB0EYqI&controls=0&modestbranding=1",
//       "powerSaving": {
//         "traditionalSprayerConsumption": "10 kWh/hour",
//         "warriorConsumption": "5.2 kWh/hour",
//         "efficiencyIncrease": "48%",
//         "operationalCostReduction": "≈45%"
//       },
//       "graph": {
//         "type": "bar",
//         "title": "Power Comparison - Vamana vs Traditional",
//         "data": [
//           { "label": "Traditional Sprayer", "value": 10 },
//           { "label": "Bullwork Vamana", "value": 5.2 }
//         ],
//         "unit": "kWh/hour"
//       }
//     },
//     {
//       "name": "OX",
//       "type": "Heavy-Duty Industrial Mobility Robot",
//       "description": "Bullwork OX is a rugged, all-terrain electric mobility robot built for transporting materials across industrial, mining, or construction sites.",
//       "features": [
//         "Heavy-duty chassis for extreme conditions",
//         "Smart sensors for autonomous navigation",
//         "Remote control and obstacle detection",
//         "Payload optimized for logistics",
//         "Electric drive with zero emissions",
//         "Adaptable suspension for terrain stability"
//       ],
//       "benefits": [
//         "Increases logistics efficiency",
//         "Reduces worker fatigue and injury",
//         "Safe material handling in remote sites"
//       ],
//       "tagline": "Industrial mobility redefined for extreme conditions.",
//       "image": "ox.webp",
//       "videoLink":"https://www.youtube.com/embed/4FkFKm6JmgA?autoplay=1&mute=1&loop=1&playlist=4FkFKm6JmgA&controls=0&modestbranding=1",
//       "powerSaving": {
//         "traditionalVehicleConsumption": "15 kWh/hour",
//         "warriorConsumption": "6.5 kWh/hour",
//         "efficiencyIncrease": "56%",
//         "operationalCostReduction": "≈50%"
//       },
//       "graph": {
//         "type": "bar",
//         "title": "Power Comparison - OX vs Diesel",
//         "data": [
//           { "label": "Traditional Diesel Vehicle", "value": 15 },
//           { "label": "Bullwork OX", "value": 6.5 }
//         ],
//         "unit": "kWh/hour"
//       }
//     },
//     {
//       "name": "Beast",
//       "type": "Heavy-Duty Sprayer for Terrain Farms",
//       "description": "Bullwork Beast is designed for rugged terrain farms, combining autonomous spraying with robust performance and maximum reach boom arms.",
//       "features": [
//         "Semi-autonomous terrain adaptation",
//         "Customizable spray range and nozzles",
//         "Enhanced grip tires for slopes",
//         "Remote operation with long-range control",
//         "Wide boom coverage for maximum area",
//         "Eco-friendly electric powertrain"
//       ],
//       "benefits": [
//         "Covers large, tough areas faster",
//         "Reduces time and fuel consumption",
//         "Improves farmer convenience on slopes"
//       ],
//       "tagline": "Unleash power in tough farming terrain.",
//       "image": "beast.webp",
//       "videoLink": "https://www.youtube.com/embed/_znfso0ETXA?autoplay=1&mute=1&loop=1&playlist=_znfso0ETXA&controls=0&modestbranding=1",
//       "powerSaving": {
//         "traditionalSprayerConsumption": "14 kWh/hour",
//         "warriorConsumption": "6 kWh/hour",
//         "efficiencyIncrease": "57%",
//         "operationalCostReduction": "≈48%"
//       },
//       "graph": {
//         "type": "bar",
//         "title": "Power Comparison - Beast vs Traditional",
//         "data": [
//           { "label": "Traditional Sprayer", "value": 14 },
//           { "label": "Bullwork Beast", "value": 6 }
//         ],
//         "unit": "kWh/hour"
//       }
//     },
//     {
//       "name": "GLX",
//       "type": "Smart All-Terrain Utility Bot",
//       "description": "Bullwork GLX is a smart electric mobility robot designed for multipurpose tasks in both agricultural and industrial settings. It handles transportation, inspection, and minor automation.",
//       "features": [
//         "Electric drive with smart terrain adaptation",
//         "Multipurpose modular top attachments",
//         "Remote diagnostics and operation",
//         "Obstacle avoidance AI",
//         "Heavy-duty wheels and suspension",
//         "Low noise operation"
//       ],
//       "benefits": [
//         "Increases task flexibility",
//         "Minimizes downtime with smart control",
//         "Reduces environmental footprint"
//       ],
//       "tagline": "Smarter movement for smarter work.",
//       "image": "GLX.webp",
//       "videoLink": "https://www.youtube.com/embed/zUhrGaobl2Y?autoplay=1&mute=1&loop=1&playlist=zUhrGaobl2Y&controls=0&modestbranding=1",
//       "powerSaving": {
//         "traditionalVehicleConsumption": "13 kWh/hour",
//         "warriorConsumption": "5.8 kWh/hour",
//         "efficiencyIncrease": "55%",
//         "operationalCostReduction": "≈50%"
//       },
//       "graph": {
//         "type": "bar",
//         "title": "Power Comparison - GLX vs Traditional",
//         "data": [
//           { "label": "Traditional Vehicle", "value": 13 },
//           { "label": "Bullwork GLX", "value": 5.8 }
//         ],
//         "unit": "kWh/hour"
//       }
//     }
//   ]

import axios from "axios"; // make sure to install axios

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const viewDetails = (product) => {
    navigate("/productdetails", { state: { product } });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5002/api/products/allproducts");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, [ ]);
  

// const Products = () => {
//   const navigate = useNavigate();

//   const viewDetails = (product) => {
//     navigate("/productdetails", { state: { product } });
//   };

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

    {/* <Footer/>  */}
    </>
  );
};

export default Products;
