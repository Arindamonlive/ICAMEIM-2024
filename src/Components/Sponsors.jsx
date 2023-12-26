import img from '../assets/Sponsor.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Sponsors=()=>{
    return(
        <div data-aos='fade-down' id="Sponsors" className='font-arial'>
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Sponsorship Opportunities</ul></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

                        <div data-aos='fade-down' className="container bg-gray-100">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">Platinum<p className='text-[14px]'>Amount: <p>INR 15000/-</p></p></h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                        The opportunities offered shall include:
                                        </p>
                                        <li className="flex items-center py-1 px-8">&#x2605; Expressing heartfelt gratitude to the sponsor will be a key highlight during the conference's opening and closing ceremonies.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Companies will enjoy a dedicated area at the conference entrance for promoting and presenting their products or services.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; The sponsor's logo and company details will be prominently featured on the conference website, accompanied by an exclusive link to the sponsor's website.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Your logo will be prominently showcased on the conference program book.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Enjoy visibility by having your logo displayed on attendees' bags, alongside the official conference logo.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Benefit from a full-page advertisement in the conference program book.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                        <div data-aos='fade-up' className="container custom-bg-gold">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-red-500 hover:shadow-red">Gold<p className='text-[14px]'>Amount: <p>INR 10000/-</p></p></h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                        The opportunities offered shall include:
                                        </p>
                                        <li className="flex items-center py-1 px-8">&#x2605; Expressing gratitude and acknowledging the sponsor prominently during both the commencement and conclusion of the conference.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Showcasing the sponsor's logo and comprehensive company details on the conference website, accompanied by an exclusive link redirecting to the sponsor's website.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Featuring the sponsor's logo in a prominent position within the conference program book.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; Allocating a full page for advertisement within the conference program book.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-down' className="container custom-bg-silver">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-violet-800 hover:shadow-silver">Silver<p className='text-[14px]'>Amount: <p>INR 5000/-</p></p></h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                        The opportunities offered shall include:
                                        </p>
                                        <li className="flex items-center py-1 px-8">&#x2605; The sponsor will receive special thanks and acknowledgment during both the opening and closing sessions of the conference.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; The sponsor's logo and detailed information about the company or organization will be prominently displayed on the conference website. Additionally, an exclusive link to the sponsor's website will be provided.</li>
                                        <li className="flex items-center py-1 px-8">&#x2605; The sponsor's logo will be featured in the conference program book.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                
            
        </div>
    )
}
export default Sponsors;