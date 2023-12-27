import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/tLogo.png';
import img2 from '../assets/SS1.png';
import img1 from '../assets/SS2.png';
import ss1 from '../assets/1.png';
import ss2 from '../assets/2.png';
import ss3 from '../assets/3.png';
import ss4 from '../assets/4.png';
import ss5 from '../assets/5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';


const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  
  };

  const sliderPast = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  
  };

  useEffect(() => {
    AOS.init({
        easing: 'ease-in-quad',
        delay: 0,
        duration: 1200
    });
}, []);

  return (
    <div id="Home" className="lg:px-0 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      
              <div className="flex flex-col">
                    <div className="">
                    <div className="w-full">
                              <div className="max-w-7xl mx-auto mb-8">
                                <Slider {...sliderSettings}className="border-4 border-blue-200 rounded-lg overflow-hidden shadow-glow">
                                  <div>
                                    <img src={img1} alt="Slide 1" className="w-full"/>
                                  </div>
                                  <div>
                                    <img src={img2} alt="Slide 2" className="w-full"/>
                                  </div>
                                  {/* <div>
                                    <img src={img3} alt="Slide 3" />
                                  </div> */}
                                </Slider>
                              </div>
                                  <span>
                                      <div className='lg:px-10 lg:py-2 flex flex-row justify-center lg:items-center'>
                                          <div className ="h-full lg:py-0 flex flex-col justify-center lg:items-start items-center container">
                                                  <h1 data-aos="fade-right" className="text-[24px] font-semibold mb-1 leading-normal  text-black">
                                                      About the Conference
                                                  </h1>
                                                  <p data-aos="fade-left" className='text-[16px] text-gray-800 text-justify'>
                                                      <span className='font-semibold'>International Conference on Advanced Mechanical Engineering and Industrial Management (ICAMEIM-2024) </span>
                                                      is hosted by Department of Mechanical Engineering,<span className='font-semibold'>Swami Vivekananda Institute of Science & Technology,
                                                      Kolkata India</span>  affiliated to Maulana Abul Kalam Azad University of Technology, West Bengal on <span className='font-semibold'>11th -13th
                                                      March, 2024. ICAMEIM-2024</span> aims to provide a platform for academia, R&D organizations, industry
                                                      professionals, research scholars and engineering students to showcase their research and innovations to fill up
                                                      the gap between outcome of research and its implementation in real world/ Industry. The conference will also
                                                      provide an opportunity to interact and network with world renowned experts in the field of industry leaders,
                                                      engineering and technology, innovators, entrepreneurs as well as researchers to receive original high quality
                                                      research papers for this conference.</p> 
                                          </div>
                                          <div data-aos="fade-down" data-aos-anchor-placement="top-bottom"className="h-full lg:py-0 flex flex-col justify-center lg:gap-0 items-center mb-1 text-black container">
                                              <img src={img} width={300} height={250} className='mb-0' alt=""/>
                                                  <div className="text-[20px] mt-auto font-semibold text-red-600">
                                                      <h2 className="">Contact Person</h2>
                                                  </div>
                                                      <p className='font-bold text-gray-800'>Dr. Somnath Das</p>
                                                      <p className='text-gray-800'>Phone/Whatsapp: <span className='font-semibold'>+91-9332313510</span></p>
                                                      <p className='text-gray-800'>Write to: <span className='font-semibold'>icameim2024@gmail.com</span></p>
                                          </div>
                                      </div>
                                  </span>
                                  <div data-aos="fade-up" className="lg:px-10 py-2 bg-gray-200">
                                        <h1 className="text-[24px] font-semibold mb-1 leading-normal  text-black text-center">Conference Theme</h1>
                                        <p  className='text-[16px] text-black text-justify'>
                                          Manufacturing is defined as transforming raw materials into physical products using man, machines, tools, and
                                          processing. Since the last decades, the vision of manufacturing has undergone a paradigm shift. The current
                                          manufacturing era is marked by highly agile, networked enterprises that dexterously employ information, talent,
                                          and machinery to serve people from all strata of society. With the Government of India’s “Make in India”,
                                          “Digital India”, and other initiatives, our country aims to become the world's third-largest manufacturing hub to
                                          create more than 100 million jobs and achieve self-reliance. Several advanced countries have already invested
                                          heavily in Digital Manufacturing and Industry 4.0 to develop centers of excellence in manufacturing. A major
                                          challenge that India needs to address is to achieve sustainable economic growth aligned with jobs and people's
                                          empowerment. The answer lies in the concept of Sustainable Development through Innovation in Mechanical
                                          Engineering by ensuring cooperation from all sections of society. Innovation in Mechanical Engineering is a new
                                          paradigm concept aimed at ensuring the participation of all strata of society, including rural, poor, and
                                          underprivileged, divvying, women, and senior citizens, to provide an assured and sustained development to
                                          enable the society to live with pride and dignity. Innovation in Mechanical Engineering strives to support a large
                                          and heterogeneous population, create jobs for millions, make manufacturing an activity of social relevance, and
                                          achieve prosperity in health, sanitation, water, infra, energy, etc. The idea behind the concept of Innovation in
                                          Mechanical Engineering is to produce quality products for all sections of the society without discrimination on
                                          cast, creed, profession, and income sections of society including rural, poor, under-privileged, divyang, women,
                                          and senior citizens, by using raw materials and processing techniques that are available locally and globally. In
                                          a nutshell, Innovation in Mechanical Engineering is envisioned on the principle of the cumulative effort of the
                                          society, by the society, to bring parity and achieve the goal of “Atma Nirbhar Bharat.” It is proposed to conduct
                                          ICAMEIM-2024 with the theme Innovation in Mechanical Engineering for Green and Sustainable Development
                                          to make the event socially relevant by providing a platform to the manufacturers from all sections of society and
                                          to stay tuned to the changing landscapes of manufacturing across the globe and as well as taking a step towards
                                          contributing to the novel vision of Govt. of India</p>
                                      </div>
                            </div>
                          <div className=" flex flex-col lg:pl-10">
                              <div className="">
                                      <div className="w-full max-w-4xl mx-auto mb-2">
                                        <Slider {...sliderPast} className=" border-spacing-1 border-slate-600">
                                          <div>
                                            <img src={ss1} alt="Slide 1" className="w-full" />
                                          </div>
                                          <div>
                                            <img src={ss2} alt="Slide 2" className="w-full" />
                                          </div>
                                          <div>
                                            <img src={ss3} alt="Slide 2" className="w-full" />
                                          </div>
                                          <div>
                                            <img src={ss4} alt="Slide 2" className="w-full" />
                                          </div>
                                          <div>
                                            <img src={ss5} alt="Slide 2" className="w-full" />
                                          </div>
                                        </Slider>
                                      </div>
                              </div>
                              <div className="text-[20px] font-semibold text-center">Capturing Moments, Inspiring Futures: Unveiling the Visual Tapestry of ICIRIE-2023</div>
                          </div>
                    </div>
              </div>
    </div>
    
  );
};

export default Home;
