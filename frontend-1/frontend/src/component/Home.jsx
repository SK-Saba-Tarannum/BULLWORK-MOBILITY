import React from 'react';
import Hero from './Hero';
import ProductCard from './ProductCard';
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { ChevronUp, ChevronDown } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';


import { ChevronLeft, ChevronRight } from "lucide-react";
import OrderForm from './OrderForm';
// import './LogoMarquee.css'; // We’ll define animation styles here

const pressReleases = [
  { alt: 'The Ken', src: '/press2.webp' },
  { alt: 'YourStory', src: 'press3.webp' },
  { alt: 'EV Reporter', src: 'press4.webp' },
  { alt: 'E-Vehicle Info', src: 'press5.webp' },
  { alt: 'ICAR', src: 'press6.webp' },
];

const certifications = [
  { alt: 'Gov Seal', src: 'award4.webp' },
  { alt: 'K-Tech', src: 'award2.webp' },
  { alt: 'Aegis Graham Bell', src: 'award3.webp' },
  { alt: 'MSME', src: 'award1.webp' },
  { alt: 'Startup India', src: 'award5.webp' },
];

const faqs = [
  {
    question: "Does Electric Tractor have same pull and torque as diesel Tractor?",
    answer:
      "The Electric Tractor has more torque, high efficiency and best-in-class drawbar pull compared to conventional diesel Tractor.",
  },
  {
    question: "What is the expected battery life of Bullwork vehicles?",
    answer:
      "Bullwork vehicles run on high-quality lithium-ion batteries, these batteries offer a long life of upto 7 years after which the battery can still be used for power storage purpose like home UPS etc.",
  },
  {
    question:
      "Can standard implements be attached with Vamana, GLX, and the Electric Tractor models?",
    answer:
      "Yes, The Electric Tractor can be attached with Cat 1 implements, Vamana can be attached with Cat 1N implements and GLX will have quick release attachments that can accommodate Cat 1 and Cat 2 implements.",
  },
  {
    question: "Are Bullwork tractors suitable for small and marginal farmers?",
    answer:
      "Yes, Bullwork tractors are designed to be compact, affordable, and efficient, making them ideal for small and marginal farmers looking for sustainable mechanization.",
  },
  {
    question: "How long does it take to fully charge a Bullwork electric tractor?",
    answer:
      "Depending on the battery size and charger type, a full charge typically takes between 6 to 8 hours using a standard charger.",
  },
  {
    question: "Is there a mobile app available to monitor Bullwork vehicle performance?",
    answer:
      "Yes, Bullwork offers a mobile app that provides real-time updates on battery level, usage statistics, service schedules, and more.",
  },
  {
    question: "What kind of warranty does Bullwork provide?",
    answer:
      "Bullwork vehicles typically come with a 3-year standard warranty, and battery warranty up to 5 years depending on the model and usage.",
  }
];


const products = [
  {
    title: "GLX E-LOADER",
    subtitle: "The Electric Skid-Steer Loader",
    image: "/GLX.webp",
    details: {
      hp: "30-60",
      hours: "6-8 Hrs",
      capacity: "5 Tonnes",
    },
  
  },
  {
    title: "BEAST",
    subtitle: "The Mighty Autonomous Electric Tractor",
    image: "/beast.webp",
    details: {
      hp: "30-60",
      hours: "6-8 Hrs",
      capacity: "5 Tonnes",
    },
  },
  {
    title: "WARRIOR",
    subtitle: "The Electric Self-Propelled Boom Sprayer",
    image: "/Warrior.webp",
    details: {
      hp: "30-60",
      hours: "6-8 Hrs",
      capacity: "5 Tonnes",
    },
  
  },
]; 
const features = [
  {
    icon: "/icon1.webp",
    title: "LOWEST OPERATIONAL COST",
    desc: "Electric Tractors save up to 80% on diesel expenses",
  },
  {
    icon: "/icon2.webp",
    title: "NEXT-GEN TECHNOLOGY",
    desc: "Autonomous and drive-by-wire system smart, data driven and connected",
  },
  {
    icon: "/icon3.webp",
    title: "AUTOMATION",
    desc: "Automating repetative skilled tasks to enhance productivity",
  },
  {
    icon: "/icon4.webp",
    title: "SAVE ENVIRONMENT",
    desc: "Reduces upto 10 tons of CO2 annually per machine",
  },
];

const blogs = [
  {
    title: 'GLX Bullwork: Smarter, Greener, and Ready to Perform',
    description:
      'Say goodbye to diesel hassles—introducing the GLX Bullwork, India’s first electric skid steer loader,',
    image:
      'twentyone.webp', // Replace with actual image URL
  },
  {
    title: 'The Bullwork BEAST: India’s First Electric Autonomous Tractor',
    description:
      'Bullwork BEAST, India’s first electric autonomous ground-up inbuilt electric tractor',
    image:
      'twenty.webp',
  },
  {
    title: 'How Green Are Electric Vehicles?',
    description:
      'Electric vehicles (EVs) are often hailed as the champions of a greener future, but how green are they really?',
    image:
      'ninteen.webp',
  },
];




const Home = () => {
  const [index, setIndex] = useState(1);
  const [openIndex, setOpenIndex] = useState(null);
  const navigate=useNavigate()

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const prev = () => setIndex((index - 1 + products.length) % products.length);
  const next = () => setIndex((index + 1) % products.length);

  return (
    <div className='font-nunito '>
      <Navbar/>
    


<section className="relative h-[40vh] sm:h-[30vh] md:h-[42vh] lg:h-[96vh] bg-gray-100">
  {/* Hero Image */}
  <img
    src="/homerender_main.png"
    alt="Bullwork Machines"
    className="w-full h-[40vh] sm:h-[20vh] md:h-[40vh] lg:h-[96vh] object-cover"
  />

  {/* Text & Button Overlay */}
  <div className="absolute inset-0 flex  flex-col items-center justify-end text-center pb-12">
    <button
      onClick={() => { navigate("/order") }}
      className="hidden sm:block bg-gradient-to-r from-purple-500 to-purple-950 hover:bg-purple-800 text-white font-semibold px-6 py-2 rounded-md mb-4"
    >
      ORDER NOW
    </button>

    <h1 className="text-[10px] sm:text-base md:text-xl font-semibold text-black px-4 mb-2">
      WE PROVIDE FULL STACK ELECTRIC AUTONOMOUS SOLUTIONS FOR CLEANER GREENER TOMORROW
    </h1>

    <p className="text-purple-600 font-medium text-sm sm:text-base">
      Electric Tractors | Sprayers | Loaders | Bots
    </p>
  </div>
</section>




    {/* Products Section */}
      <div className="bg-gray-50 text-center py-12 px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 mt-6">PRODUCTS</h2>
        <p className="text-purple-700 mb-8 text-base sm:text-lg">
          Agriculture | Construction | Material Handling | Mining
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={prev} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronLeft />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 w-full max-w-7xl">
            {products.map((product, i) => (
              <div
                key={product.title}
                className={`transition-all duration-300 rounded-2xl p-2 bg-white shadow-md flex flex-col items-center justify-center border-2 ${
                  i === index ? "scale-105 sm:scale-110 border-purple-600" : "opacity-80 border-transparent"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full max-h-48 sm:max-h-60 object-contain mb-4"
                />
                <h3 className="text-lg sm:text-xl font-bold tracking-widest">{product.title}</h3>
                <p className="mt-1 text-gray-600 text-sm text-balance max-w-xs">
                  {product.subtitle}
                </p>
                {i === index && product.details && (
                  <div className="mt-6 bg-gray-100 p-4 rounded-xl w-full max-w-sm">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="font-bold">HP</p>
                        <p>{product.details.hp}</p>
                      </div>
                      <div>
                        <p className="font-bold">Operating Hours</p>
                        <p>{product.details.hours}</p>
                      </div>
                      <div>
                        <p className="font-bold">Trailer Capacity</p>
                        <p>{product.details.capacity}</p>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-orange-400 text-white py-2 rounded-xl font-bold hover:bg-orange-500">
                      ORDER NOW
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button onClick={next} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ChevronRight />
          </button>
        </div>
      </div>





    {/* features */}
    <section className="bg-gray-50 py-16 text-center">
      <h2 className="text-3xl   font-sans mb-4">WHY CHOOSE BULLWORK MOBILITY</h2>
      <p className="text-purple-800 mt-4 mb-12 text-lg">Designed in Bharath, Made for the World</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="transition-all duration-400 hover:scale-110 hover:bg-purple-200 bg-white p-6 rounded-2xl shadow-md flex flex-col items-center"
          >
            <div className="bg-gray-200 rounded-full p-6 mb-4">
              <img src={feature.icon} alt={feature.title} className="w-28 h-28 object-contain" />
            </div>
            <div className="transition-all duration-400 hover:scale-110 text-purple-900">
            <h3 className=" hover:bg-purple-200 font-semibold tracking-widest text-sm mb-2">
              {feature.title}
            </h3>
            <p className=" hover:bg-purple-200 text-sm leading-snug max-w-xs">
              {feature.desc}
            </p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* introducing bhai app */}

    <section className="bg-purple-200 py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold mb-2">INTRODUCING BHAI</h2>
        <p className="text-purple-700 text-lg pb-18">
          Bullwork's AI companion to make our vehicles smart and enhance productivity
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left - Mobile Image */}
        <div className="flex justify-center">
          <img
            src="/bhai.webp"
            alt="Mobile App Screenshot"
            className=" w-full h-full pb-4"
          />
        </div>

        {/* Right - Content */}
        <div >
          <h1 className="text-purple-950 text-9xl font-semibold mb-4">bh.ai</h1>
          <h3 className="text-xl font-semibold mb-4">ONE APP TO RULE THEM ALL</h3>
          <ul className="text-gray-700 space-y-2 mb-6 text-base">
            <li>Vehicle data at your finger tips</li>
            <li>Control your machine with the app in real time</li>
            <li>Execute your autonomous missions and track your vehicle's progress</li>
          </ul>
          <button className=" text-base bg-gradient-to-r from-purple-500 to-purple-950 hover:bg-purple-800 text-white px-4 py-2 rounded-full transition-colors">
            EXPLORE
          </button>
        </div>
      </div>
    </section>

    {/* blog session */}
    <div className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-4xl font-semibold mb-12">READ OUR BLOGS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className=" rounded-lg bg-purple-200 p-3shadow-md overflow-hidden text-left"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-purple-800">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <button className="text-purple-900  bg-white border border-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <button className="bg-purple-800 text-white px-4 py-1 rounded-full hover:bg-purple-800 transition">
          Explore More Blogs
        </button>
      </div>
    </div>




    <div className="bg-white py-16 px-6 text-center space-y-12">
      <div>
        <h2 className="text-3xl font-bold mb-10 tracking-wide">PRESS RELEASES</h2>
        {/* <Marquee items={pressReleases} /> */}
        <Marquee direction="right" speed={100} gradient={false}>
        {pressReleases.map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} className="h-32 mx-6" />
        ))}
      </Marquee>

      </div>

      <div>
        <h2 className="text-3xl  font-bold mb-10 tracking-wide">AWARDS AND CERTIFICATIONS</h2>
        {/* <Marquee items={certifications} /> */}
        <Marquee direction="left" speed={100} gradient={false} className='mt-4'>
        {[...certifications,...certifications].map((item, index) => (
          <img key={index} src={item.src} alt={item.alt} className="h-32 mx-6" />
        ))}
      </Marquee>

      </div>
    </div>


    {/* last beast */}

    <section className="relative bg-gray-100">
      {/* Hero Image */}
      <img
        src="greener_tractor.webp" // <- Replace with your image path (add to /public folder)
        alt="Bullwork Machines"
        className="w-full object-cover  h-[20vh] sm:h-[20vh] md:h-[40vh] lg:h-[96vh]"

      />

    </section>

    <section className="relative bg-gray-100">
      <h1 className='text-4xl  text-center mt-10 font-semibold tracking-wide'>Showcasing the innovation</h1>
      <p className='text-purple-900 text-center mt-3'>Bullwork's Electric Vehicles at Major Events</p>
      <img
        src="events.webp" // <- Replace with your image path (add to /public folder)
        alt="Bullwork Machines"
        className="w-full object-cover h-[20vh] sm:h-[20vh] md:h-[40vh] lg:h-[96vh]"

      />

    </section>


    {/* faqs */}

    <div className="bg-gray-50  sm:h-[56vh] md:h-[56vh] lg:h-[96vh] h-full py-10 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-20 tracking-wide">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="space-y-6 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 border-purple-800 pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">
                {faq.question}
              </p>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-purple-800 font-semibold">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* orders session */}

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
    <Footer/>
     </div>

  );
};

export default Home;
