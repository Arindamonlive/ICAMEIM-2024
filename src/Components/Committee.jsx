import React, { useEffect } from 'react';
import img from '../assets/Meeting.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Committee =()=>{
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-quad',
            delay: 0,
            duration: 1200
        });
    }, []);
    return(
        <div data-aos='fade-right' id="Committee" className="lg:py-2">
                <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Committee Members</ul>
                </h1>
                <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Patron:
                    <ul className="">
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Nandan Gupta, Director, SVIST</li>
                    </ul>
                    
                </h2> 
                <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Conveners:
                    <ul className="">                    
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Sonali Ghosh, Principal, SVIST</li>
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Suman Das, Professor & HOD ME, SVIST</li>
                    </ul>

                </h2>
                <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Organising Secretaries:
                    <ul>
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Somnath Das, Associate Professor & TIC, SVIST</li>
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Nilanjan Roy, Assistant Professor, SVIST</li>
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Koushik Mishra, Assistant Professor, SVIST</li>
                        <li className="text-[18px] lg:px-5 text-gray-600">Dr. Debal Pramanik, Assistant Professor, SVIST</li>
                    </ul>

                </h2>
                <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Conference Coordinators:
                    <ul className="">
                        <li className="text-[18px] lg:px-5 text-gray-600">Mr. Ranjit Kumar Das, Assistant Professor, SVIST</li>
                        <li className="text-[18px] lg:px-5 text-gray-600">Mr. Sudipta Nath, Assistant Professor, SVIST</li>
                        <li className="text-[18px] lg:px-5 text-gray-600">Mr. Utpal Madhu, Assistant Professor, SVIST</li>
                    </ul>
                </h2>
                <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">Treasurers:
                        <ul className="">
                            <li className="text-[18px] lg:px-5 text-gray-600">Mr. Ashok Kr. Laha, Assistant Professor, SVIST</li>
                            <li className="text-[18px] lg:px-5 text-gray-600">Mr. Arindam Chakraborty, Assistant Professor, SVIST</li>
                            <li className="text-[18px] lg:px-5 text-gray-600">Mr. Somnath Roy, Chief Accounts Officer, SVIST</li>
                        </ul>
                    
                </h2>
                <h2 data-aos="fade-in"className="text-[22px] lg:px-10 py:5">IT Support:
                    <ul className="">
                        <li className="text-[18px] lg:px-5 text-gray-600">Mr. Arindam Chakraborty, Assistant Professor, SVIST</li>
                    </ul>
                    
                </h2>
        </div>
    )
}
export default Committee;