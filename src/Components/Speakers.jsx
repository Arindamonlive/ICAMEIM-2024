import React, { useEffect } from 'react';
import img from '../assets/Speakers.png';
import img1 from '../assets/S1.jpeg';
import img2 from '../assets/S2.jpg';
import img3 from '../assets/S3.jpg';
import img4 from '../assets/S4.jpg';
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
  
        <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Plenary Speaker ((11 to 13)<sup>th</sup> March 2023):</h2>
        <ul>
        <img src={img1} width={100} height={250} className='mb-0 border-spacing-1 border-blue-500 rounded-lg shadow-md mx-4' alt="speaker"/>
          <li className="text-[18px] lg:px-5 text-gray-600 font-bold">Dr. Saikat Ranjan Maity</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Tittle:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Laser-aided direct metal deposition
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
          Designation:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Associate Professor, Department of Mechanical Engineering, National Institute of Technology Silchar
            </p>
          </div>
        </ul>

        <ul>
        <img src={img2} width={100} height={250} className='mb-0 border-spacing-1 border-blue-500 rounded-lg shadow-md mx-4' alt="speaker"/>
          <li className="text-[18px] lg:px-5 text-gray-600 font-bold">Prof Gouranga Lal Datta</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Tittle:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Foundry Technology
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
          Designation:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Retired Dean, IIT Kharagpur 
            </p>
          </div>
        </ul>

        <ul>
        <img src={img4} width={100} height={250} className='mb-0 border-spacing-1 border-blue-500 rounded-lg shadow-md mx-4' alt="speaker"/>
          <li className="text-[18px] lg:px-5 text-gray-600 font-bold">Dr. Biswanath Doloi</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Tittle:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            An overview on laser-based manufacturing
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
          Designation:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Professor, Department of Production Engineering, Jadavpur University 
            </p>
          </div>
        </ul>

        <ul>
        <img src={img3} width={100} height={250} className='mb-0 border-spacing-1 border-blue-500 rounded-lg shadow-md mx-4' alt="speaker"/>
          <li className="text-[18px] lg:px-5 text-gray-600 font-bold">Dr. Nilrudra Mandal</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Tittle:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Coatings & Surface Engineering 
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
          Designation:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
            Senior Principal Scientist and Heading the Coatings & Surface Engineering Group at CSIR-CMERI, Durgapur
            </p>
          </div>
        </ul>
        
      </div>
    );
  };
  
  export default Speakers;
  