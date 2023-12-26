import React, { useEffect } from 'react';
import img from '../assets/Speakers.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Speakers = () => {
  useEffect(() => {
    AOS.init({
        easing: 'ease-in-quad',
        delay: 0,
        duration: 1200
    });
}, []);
    return (
      <div data-aos='fade-down' id="Speakers" className="bg-gray-100 lg:py-2">
        <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
          <ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Speakers</ul>
        </h1>
  
        <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Plenary Speaker I:</h2>
        <ul>
          <li data-aos="fade-in"className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
  
        <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Plenary Speaker II:</h2>
        <ul>
          <li data-aos="fade-in"className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
  
        <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Plenary Speaker III:</h2>
        <ul>
          <li data-aos="fade-in"className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
  
        <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Plenary Speaker IV:</h2>
        <ul>
          <li data-aos="fade-in"className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div data-aos="fade-in"className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p data-aos="fade-in"className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
      </div>
    );
  };
  
  export default Speakers;
  