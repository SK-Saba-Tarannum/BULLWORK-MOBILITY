import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";


const lifeImages = [
  "life1.webp",
  "life2.webp",
  "life3.webp",
  "life4.webp",
  "life5.webp",
  "life6.webp",
];
// const galleryImages = [
//     "gallery1.webp",
//     "gallery2.webp",
//     "gallery3.webp",
//     "gallery4.webp",
//     "gallery5.webp",
//     // "gallery6.webp",
//   ];

const galleryImages = [
    {
      src: "gallery1.webp",
      title: "Excon 2023",
    },
    {
      src: "gallery2.webp",
      title: "Vamana Demo @ Grover Zampa",
    },
    {
      src: "gallery3.webp",
      title: "Brainstorming Session",
    },
    {
      src: "gallery4.webp",
      title: "Factory Floor Action",
    },
    {
      src: "gallery5.webp",
      title: "Field Test Run",
    },
  ];

  const jobs = [
    {
      title: "Electrical Engineer",
      description: "1-3 years experience",
    },
    {
      title: "Finance and Accounting Intern",
      description: "Fresher",
    },
    {
      title: "Electrical Intern",
      description: "Fresher",
    },
    {
      title: "Graphic Design Intern",
      description: "Fresher",
    },
  ];
  
  
  

const Career = () => {
  return (
    <>
    <Navbar/>
    <section className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        LIFE @ BULLWORK MOBILITY
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {lifeImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 transform hover:scale-105">
              <img
                src={src}
                alt={`Life at Bullwork ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>


    <section className="bg-gray-50 text-center py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">
        JOIN OUR AWESOME TEAM
      </h2>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-8">
        At Bullwork Mobility, we are on the lookout for individuals who are driven
        and dedicated to making a difference and contribute to the acceleration of
        innovative solutions in sustainable agriculture and construction
      </p>
      <button className="bg-purple-950 to-pink-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-300">
        Apply Now
      </button>
    </section>


    <section className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
          BULLWORK GALLERY
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          A sneak peak into life at Bullwork Mobility
        </p>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        {/* <div className="flex sm:grid gap-6 animate-scroll px-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="min-w-[275px] flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-64 object-cover"
              />
              <p className="text-center italic font-semibold py-4">{img.title}</p>
            </div>
          ))}
        </div> */}
        <Marquee direction="left" speed={100} gradient={false} className='mt-4'>
        {[...galleryImages,...galleryImages].map((item, index) => (
        //   <img key={index} src={item.src} alt={item.alt} className="h-32 mx-6" />
        <div
            key={index}
            className="min-w-[275px] flex gap-6 bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
            <img
            src={item.src}
            // alt={item.title}
            className="w-full h-92 object-cover m-4"
            />
            {/* <p className="text-center italic font-semibold py-4">{item.title}</p> */}
        </div>

        ))}
      </Marquee>

      </div>
    </section>
    


    <section className="bg-[#f9f9fc] py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 tracking-wider">
        CURRENT OPEN POSITIONS
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl px-6 py-6 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-sm mt-1">{job.description}</p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-purple-900 text-white px-6 py-2 rounded-md hover:opacity-90 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>

    <section className="flex justify-center items-center bg-[#fafafc] py-16 px-4">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-3xl w-full">
        <h2 className="text-xl md:text-2xl font-semibold tracking-widest mb-4">
          THINK YOU HAVE WHAT IT TAKES TO INNOVATE WITH US?
        </h2>
        <p className="text-lg font-medium mb-6 tracking-wider">MAIL US AT</p>

        <div className="flex justify-center items-center gap-4 bg-[#f7f7fc] rounded-xl px-6 py-4 shadow-inner w-fit mx-auto">
          <a
            href="mailto:jobs@bullworkmobility.com"
            className="text-lg font-semibold text-black"
          >
            jobs@bullworkmobility.com
          </a>
          <div className="bg-purple-800 hover:bg-purple-900 text-white p-2 rounded-full">
            <ArrowRight size={20} />
          </div>
        </div>
      </div>
    </section>




    <Footer/>
    </>
  );
};

export default Career;
