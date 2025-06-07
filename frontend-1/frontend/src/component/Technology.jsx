import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const dashboardImages = [
  {
    src: 'slide1.webp',
    alt: 'Dashboard Screen 1',
    caption: `Bullwork's electric vehicles are equipped with a smart app that provides detailed insights into its live location, current speed, remaining battery charge and real-time performance metrics.`,
  },
  {
    src: '2slide2.webp',
    alt: 'Dashboard Screen 2',
    caption: `Monitor mission completion status, vehicle activity, and efficiency across various operations in real time.`,
  },
];

const Images = [
  {
    src: 'slide1.webp',
    alt: 'Dashboard Screen 1',
    caption: `Bullwork's electric vehicles are equipped with a smart app that provides detailed insights into its live location, current speed, remaining battery charge and real-time performance metrics.`,
  },
  {
    src: 'slide2.webp',
    alt: 'Dashboard Screen 2',
    caption: `Monitor mission completion status, vehicle activity, and efficiency across various operations in real time.`,
  },
];

const vehicles = [
  {
    name: 'BEAST',
    description: 'The Mighty Autonomous Electric Tractor',
    image: 'beast.webp',
  },
  {
    name: 'VAMANA',
    description: 'The Ultimate Unmanned Ground Vehicle',
    image: 'Vamana Pro.webp',
  },
];

const control = [
  {
    title: 'Control through Remote',
    description: 'The vehicle features a remote control, enabling you to manage its movements, including steering, accelerating, and braking, all from a distance for added convenience and control.',
    image: 'remote.webp',
  },
  {
    title: 'Control through App',
    description: 'The vehicle can be controlled through a user-friendly mobile app, offering remote access and autonomous features.',
    image: 'app.webp',
  },
  {
    title: 'Control through Draw-wire',
    description: 'The vehicle, featuring a new and innovative tethered control system, operates seamlessly through a wired connection for easy control.',
    image: 'drawwire.webp',
  },
];

const Technology = () => {
  const [current, setCurrent] = useState(0);
  const total = dashboardImages.length;
  const navigate = useNavigate();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 text-center">
        <div>
          <img
            src="/techmain.webp"
            alt="Bullwork Machines"
            className="w-full h-[40vh] sm:h-[25vh] md:h-[40vh] lg:h-[96vh] object-cover"
          />
        </div>
        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-2">Unleash electric vehicle's true power with BHAI by your side</h2>
          <p className="text-purple-700 text-base md:text-lg mb-10">Experience the future of electric vehicles, seamlessly controlled via mobile app, featuring autonomous navigation guided by mission files</p>
          <div className="relative aspect-video w-full mb-6 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            {/* <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1fK_k2j4EVU?autoplay=1&mute=1&loop=1&playlist=1fK_k2j4EVU"
              title="Bullwork Technology Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1fK_k2j4EVU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

          </div>
        </div>

        <div className="px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-2">Discover Bullwork's Control System</h2>
          <p className="text-purple-700 text-base md:text-lg mb-10">Bullwork offers a variety of unique control options tailored to their vehicles</p>
          <div className="space-y-10 max-w-5xl mx-auto flex flex-col justify-center items-center">
            {control.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden w-full">
                <div className="md:w-1/2 flex items-center justify-center p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img src={item.image} alt={item.title} className="w-full h-80 object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First slider */}
      <div className="w-full py-12 bg-[#f8f8f8] text-center flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold uppercase mb-8">
          Elevate from Action to Insight - Track Metrics, Optimize Operations
        </h2>
        <div className="relative w-full max-w-5xl">
          <button onClick={prevSlide} className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10">
            <ChevronLeft size={24} />
          </button>
          <img src={dashboardImages[current].src} alt={dashboardImages[current].alt} className="rounded-2xl shadow-lg w-full h-auto" />
          <button onClick={nextSlide} className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10">
            <ChevronRight size={24} />
          </button>
        </div>
        <p className="mt-8 text-gray-700 text-lg max-w-3xl">
          {dashboardImages[current].caption}
        </p>
      </div>

      {/* Second slider */}
      <div className="w-full py-12 bg-[#f8f8f8] text-center flex flex-col items-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold uppercase mb-8">
          More Visual Insights from the Dashboard
        </h2>
        <div className="relative w-full max-w-5xl">
          <button onClick={prevSlide} className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10">
            <ChevronLeft size={20} />
          </button>
          <img src={Images[current].src} alt={Images[current].alt} className="rounded-2xl shadow-lg w-full h-auto" />
          <button onClick={nextSlide} className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10">
            <ChevronRight size={24} />
          </button>
        </div>
        <p className="mt-8 text-gray-700 text-lg max-w-3xl">
          {Images[current].caption}
        </p>
      </div>

      <section className="bg-[#f9f9fb] py-16 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide mb-12">
          Explore Our Autonomous Vehicles
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {vehicles.map((vehicle, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm mx-auto">
              <div className="bg-gradient-to-t from-white to-[#e7dce9] rounded-xl p-4">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-auto object-contain" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-wide">
                {vehicle.name}
              </h3>
              <p className="mt-2 text-gray-600">{vehicle.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-50 py-10 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">
          Join the Bullwork Family
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-xl">
          <button onClick={() => navigate("/order")} className="rounded-xl bg-gradient-to-r from-purple-800 to-purple-950 border-2 border-purple-950 text-white font-semibold px-12 py-3">
            Order
          </button>
          <button onClick={() => navigate("/bookdemo")} className="rounded-xl hover:bg-purple-950 hover:text-white border-2 border-purple-900 text-purple-900 font-semibold px-12 py-3">
            Book Demo
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Technology;
