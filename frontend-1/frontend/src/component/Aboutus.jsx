import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaLinkedin } from "react-icons/fa";

const coFounders = [
  {
    name: "Hemanth Kumar",
    title: "CEO",
    image: "hemanth.webp", // Replace with your image path
    linkedin: "https://linkedin.com/in/hemanth-kumar", // Replace with actual link
  },
  {
    name: "Dr. Sriharsha Sheshanarayana",
    title: "CTO",
    image: "harsha.webp",
    linkedin: "https://linkedin.com/in/sriharsha", // Replace with actual link
  },
  {
    name: "Vinay Raghuram",
    title: "COO",
    image: "vinay.webp",
    linkedin: "https://linkedin.com/in/vinayraghuram", // Replace with actual link
  },
];

const images = [
  {
    src: "facility4.webp",
    alt: "Engineers working at R&D facility",
  },
  {
    src: "facility3.webp",
    alt: "Wide view of R&D factory floor",
  },
  {
    src: "facility2.webp",
    alt: "Team at the R&D facility",
  },
];

const Aboutus = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6">
        Meet the Bullwork Team
      </h2>
      {/* <p className="text-gray-700 mb-10 max-w-3xl mx-auto text-base md:text-lg">
        We're a diverse team of innovators, engineers, and dreamers building the future of mobility together.
      </p>   */}
      <div className="overflow-hidden  shadow-md  mx-auto">
        <img
          src="/teampic.webp" // Replace with your actual image path
          alt="Bullwork Team Group Photo"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>

    <section className="bg-gradient-to-b from-white to-purple-50 py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
        WE WANT TO CHANGE THE WORLD,<br />
        <span className="text-black">WE THINK WE ARE CRAZY ENOUGH TO DO IT</span>
      </h2>

      <div className="bg-purple-100 py-10 px-6 rounded-xl flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <div className="bg-amber-100 p-4 rounded-xl shadow-md">
            <img
              src="/mahesh shetty.webp" // Replace with actual image path
              alt="Mr. Mahesh Shetty"
              className="w-64 h-auto object-contain rounded"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            OUR GUIDING PARTNER
          </h3>
          <h4 className="text-xl md:text-2xl font-semibold mb-4">
            MR. MAHESH SHETTY
          </h4>
          <p className="text-gray-700 text-base leading-relaxed">
            Joining in our journey to change the landscape of utility vehicles:
            Multiplex Group has been our guiding partner with Mr. Mahesh Shetty
            donning the role of Chairman to take the organization to its next
            level.
          </p>
        </div>
      </div>
    </section>


    <section className="bg-white py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        OUR CO-FOUNDERS
      </h2>
      <div className="flex flex-wrap justify-center gap-20">
        {coFounders.map((founder, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs">
            <img
              src={founder.image}
              alt={founder.name}
              className="rounded-xl w-64 h-80 object-cover shadow-lg"
            />
            <div className="mt-4">
              <h3 className="text-lg font-medium">{founder.name}</h3>
              <p className="text-gray-600">{founder.title}</p>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-600">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-white py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
        OUR R&D FACILITY
      </h2>
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        Driving the forefront of technological advancement, our R&D facility is
        located in Nelamangala, Bangalore where ideas are transformed into
        reality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2  justify-between align-middle ">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="rounded-xl w-2xl h-70 object-cover shadow-md"
          />
        ))}
      </div>
    </section>





    <Footer/>
    </>
  );
};

export default Aboutus;
