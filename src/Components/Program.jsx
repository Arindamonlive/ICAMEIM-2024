import img from '../assets/Schedule.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const Program=()=>{
  useEffect(() => {
    AOS.init({
        easing: 'ease-in-quad',
        delay: 0,
        duration: 1200
    });
}, []);
    return(
        <div data-aos='fade-up' id="Program" className="font-arial">
      <h1
        className=""
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
      >
        <ul className="text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white">
          Program Schedule
        </ul>
      </h1>
      <p className="text-2xl flex items-center justify-center">
      <a href="https://drive.usercontent.google.com/u/0/uc?id=12XW2qXEwmggWGKVnJcCdJJbr919pTp2T&export=download"  className='text-[26px] lg:px-10 text-justify items-center font-bold text-blue-800'download>Click Here to Download the Schedule</a>

              </p>
      <div data-aos='fade-in'className="flex flex-row justify-center items-center">
        <div className="container flex items-center mb-6">
          <div className="lg:items-end">
            <ul className="lg:py-6 text-center">
              <div className="flex">
                {/* <div className="container items-center text-center">
                  <h1 className='text-4xl'>Day and Date 1</h1>
                  <table className="table-auto mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Details</th>
                        <th className="px-4 py-2">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">NA:</td>
                        <td className="px-4 py-2 font-semibold">NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="container items-center text-center">
                  <h1 className='text-4xl'>Day and Date 2</h1>
                  <table className="table-auto mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Details</th>
                        <th className="px-4 py-2">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">NA:</td>
                        <td className="px-4 py-2 font-semibold">NA</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">NA:</td>
                        <td className="px-4 py-2 font-semibold">NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Program;