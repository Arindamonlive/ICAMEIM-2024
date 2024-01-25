import img from '../assets/Meeting.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Committee=()=>{
    return(
        <div data-aos='fade-down' id="Committee" className='font-arial'>
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Committees</ul></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

                        <div data-aos='fade-down' className="container bg-gray-100">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-yellow-500 hover:shadow-glow">Organizing Committee<p className='text-[14px]'> <p></p></p></h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                        </p>
                                        <h2 className="text-[16px] lg:px-10 py:5 ">Patron:
                                            <ul className="">
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Nandan Gupta, Director, SVIST</li>
                                            </ul>
                                            
                                        </h2> 
                                        <h2 className="text-[16px] lg:px-10 py:5">Conveners:
                                            <ul className="">                    
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Sonali Ghosh, Principal, SVIST</li>
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Suman Das, Professor & HOD ME, SVIST</li>
                                            </ul>

                                        </h2>
                                        <h2 className="text-[16px] lg:px-10 py:5">Organising Secretaries:
                                            <ul>
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Somnath Das, Associate Professor & TIC, SVIST</li>
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Nilanjan Roy, Assistant Professor, SVIST</li>
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Koushik Mishra, Assistant Professor, SVIST</li>
                                                <li className="text-[14px] lg:px-5 font-bold">Dr. Debal Pramanik, Assistant Professor, SVIST</li>
                                            </ul>

                                        </h2>
                                        <h2 className="text-[16px] lg:px-10 py:5">Conference Coordinators:
                                            <ul className="">
                                                <li className="text-[14px] lg:px-5 font-bold">Mr. Ranjit Kumar Das, Assistant Professor, SVIST</li>
                                                <li className="text-[14px] lg:px-5 font-bold">Mr. Sudipta Nath, Assistant Professor, SVIST</li>
                                                <li className="text-[14px] lg:px-5 font-bold">Mr. Utpal Madhu, Assistant Professor, SVIST</li>
                                            </ul>
                                        </h2>
                                        <h2 className="text-[16px] lg:px-10 py:5">Treasurers:
                                                <ul className="">
                                                    <li className="text-[14px] lg:px-5 font-bold">Mr. Ashok Kr. Laha, Assistant Professor, SVIST</li>
                                                    <li className="text-[14px] lg:px-5 font-bold">Mr. Arindam Chakraborty, Assistant Professor, SVIST</li>
                                                    <li className="text-[14px] lg:px-5 font-bold">Mr. Somnath Roy, Chief Accounts Officer, SVIST</li>
                                                </ul>
                                            
                                        </h2>
                                        <h2 className="text-[16px] lg:px-10 py:5">IT Support:
                                            <ul className="">
                                                <li className="text-[14px] lg:px-5 font-bold">Mr. Arindam Chakraborty, Assistant Professor, SVIST</li>
                                            </ul>
                                            
                                        </h2>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                        <div data-aos='fade-up' className="container custom-bg-gold">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-red-200 hover:shadow-red">Scientific Advisory Committee<p className='text-[14px]'><p></p></p></h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">

                                        </p>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.jaduniv.edu.in/profile.php?uid=567" className="herf">Prof. Bijoy Bhattacharyya</a> </p>Professor,Department of Production Engineering, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.nitttrkol.ac.in/dipankar.php" className="href">Prof. Dipankar Bose</a></p>Professor, Department of Mechanical Engineering, NITTTR, Kolkata</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.jaduniv.edu.in/profile.php?uid=574" className="href">Dr. Biswanath Doloi</a> </p>Professor,Department of Production Engineering, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.jaduniv.edu.in/profile.php?uid=774" className="href">Dr. Biplab Ranjan Sarkar</a> </p>Professor,Department of Production Engineering, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://iitg.ac.in/mech/faculty/manasdas/" className="href">Dr. Manas Das</a> </p>Associate Professor,Department of Mechanical Engineering, IIT Guwahati</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.cmeri.res.in/user-details/1181" className="href">Dr. Nilrudra Mondal</a> </p>Principal Scientist, CSIR - Central Mechanical Engineering Research Institute (CMERI), Durgapur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.bitmesra.ac.in/Display_My_Profile_00983KKj893L?id=glgPCtl0Fd4aINABEbVaBlgS%252biLxLCp6y4r8vZjZMh4%253d" className="href"> Dr. Bappa Acherjee</a></p>Assistant Professor, Department of Production and Industrial Engineering, BIT Mesra, Jharkhand</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.iium.edu.my/directory/show/7258" className="href">Dr. Ali Sophian</a> </p>Associate Professor & Head, Mechatronics Engineering Department,Kulliyyah of Engineering, IIUM </li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.iium.edu.my/directory/show/6808" className="href">Dr. Tanveer Saleh</a> </p>Associate Professor, Mechatronics Engineering Department, Kulliyyah of Engineering</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.iium.edu.my/directory/show/4680" className="href">Dr. Siti Fauziah Toha</a>  </p>Professor, Mechatronics Engineering Department, Kulliyyah of Engineering</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.iium.edu.my/directory/show/5486" className="href">Dr. Mahbubur Rashid</a> </p>Associate Professor, Mechatronics Engineering Department, Kulliyyah of Engineering</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://nita.ac.in/Department/Department_FacultyProfile.aspx?nID=caeok&nDeptID=caaqo" className="href">Dr. Uttam Kumar Mandal</a> </p>Assistant Professor & Head, Department of Production Engineering, NIT Agartala, Barjala, Jirania, Agartala</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.nitttrkol.ac.in/arpan.php" className="href">Dr. Arpan Kumar Mondal</a> </p>Assistant Professor, Department of Mechanical Engineering, NITTTR, Kolkata</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://vidwan.inflibnet.ac.in/profile/161277" className="href">Dr. Ranjan Kumar</a> </p>Assistant Professor, Department of Mechanical Engineering, Swami Vivekananda University, Kolkata</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=49" className="href">Dr. Shamim Haidar</a> </p>Associate Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=14" className="href">Dr. Mukandar Sekh</a> </p>Assistant Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=183" className="href">Dr. Golam Kibria</a> </p>Assistant Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=50" className="href">Dr. Rafiqul Haque</a> </p>Assistant Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=47" className="href">Dr. Subha Mondal</a> </p>Assistant Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=54" className="href">Dr. Amitava Dutta</a> </p>Assistant Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://aliah.ac.in/department/people-details.php?key=mechanical-engineering&id=51" className="href">Dr. Shahanwaz Khan</a> </p>Assistant Professor, Department of Mechanical Engineering, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://vjti.ac.in/wp-content/uploads/2021/08/210128__R_MTayade.pdf" className="href">Dr. Raju M. Tayade</a> </p>Associate Professor, Mechanical Engineering Department, Veermata Jijabai Technological Institute, Mumbai, Maharashtra</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.coep.org.in/mycoep/ssamfgcoeptechacin" className="href">Dr. Sandip S. Anasane</a> </p>Assistant Professor, Department of Manufacturing Engineering & Industrial Management, COEP Technological University, Pune, Maharashtra</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://gpmumbai.ac.in/gpmweb/wp-content/uploads/2021/05/Prof.-V.-U.-Rathod.pdf" className="href">Dr. Vijaysing Udalsing Rathod</a> </p>Lecturer, Mechanical Engineering Department, Government Polytechnic Mumbai, Maharashtra</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.cmeri.res.in/user-details/1514" className="href">Dr. Manidipto Mukherjee</a> </p>Senior Scientist, Centre for Advanced Manufacturing and Metrology Group, CSIR - Central Mechanical Engineering Research Institute (CMERI), Durgapur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.see.iitkgp.ac.in/team-view/p-k-dan-2/" className="href">Dr. Pranab Kumar Dan</a> </p>Associate Professor, Rajendra Mishra School of Engg Entrepreneurship, Indian Institute of Technology, Kharagpur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.jaduniv.edu.in/profile.php?uid=568" className="href">Dr. Bijan Sarkar</a> </p>Professor, Department of Production Engineering, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://hithaldia.irins.org/profile/332622" className="href">Dr. Goutam Bose</a> </p>Professor & Head, Department of Mechanical Engineering, Haldia Institute of Technology</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://iitk.ac.in/new/dr-j-ramkumar" className="href">Dr. J Ramkumar</a> </p>Professor & Head, Department of Mechanical Engineering IIT Kanpur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://me.nits.ac.in/dr-s-r-maity/" className="href">Dr. Saikat Ranjan Maity</a> </p>Associate Professor, Department of Mechanical Engineering, National Institute of Technology Silchar</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://www.iiests.ac.in/IIEST/Faculty/mech-apurbadas" className="href">Dr. Apurbo Das</a> </p>Assistant Professor, Department of Mechanical Engineering, IIEST Shibpur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://veltech.irins.org/profile/186322" className="href">Dr. Kanak Kalita</a> </p>Associate Professor, Department of Mechanical Engineering, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, Chennai</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="https://hithaldia.in/department/pe/temp/bipradas_bairagi.html" className="href">Dr. Bipradas Bairagi</a> </p>Assistant Professor, Department of Mechanical Engineering, Haldia Institute of Technology</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://www.jaduniv.edu.in/profile.php?uid=1140" className="href">Dr. Nabendu Ghosh </a> </p>Assistant Professor, Department of Mechanical Engineering, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="http://gimt-india.in/faculty_Mechanical_Engineering_BTech.aspx" className="href">Dr. Bijan Mallick</a> </p>Assistant Professor, Department of Mechanical Engineering, Global Institute of Management & Technology</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div data-aos='fade-down' className="container custom-bg-silver">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                <h2 className="text-[18px] font-bold mb-4 lg:py-4 relative border-b-2 border-transparent transition-all duration-300 hover:border-violet-800 hover:shadow-silver">Reviewer Committee<p className='text-[14px]'><p></p></p></h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                  
                                        </p>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Sandip Kunar</a> </p>Assistant Professor, Aditya Engineering College</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Mohit Pandey</a> </p>Research Scholar, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Kingshuk Mandal</a> </p>Research Scholar, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Subham Biswas</a> </p>Research Scholar, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Santosh Kumar</a> </p>Research Scholar, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Sudip Santra</a> </p>Research Scholar, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Somen Dey</a> </p>Assistant Professor, MNNIT, Allahabad</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Bappa Acherjee</a> </p>Assistant Professor, BIT, Mesra</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Abhishek Sen</a> </p>Assistant Professor, CIT, Uluberia</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Subhrajit Debnath</a> </p>Project Fellow, NIT Agartala</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Uttam Kumar Mandal</a> </p>Assistant Professor, NIT Agartala</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Mukandar Sekh</a> </p>Assistant Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Shamim Haidar</a> </p>Associate Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Golam Kibria</a> </p>Assistant Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Rafiqul Haque</a> </p>Assistant Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Subha Mondal</a> </p>Assistant Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Amitava Dutta</a> </p>Assistant Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Shahanwaz Khan</a> </p>Assistant Professor, Aliah University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Arpan Kumar Mandal</a> </p>Assistant Professor, NITTTR, Kolkata</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Joydip Kundu</a> </p>Research Fellow, IIT Kharagpur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Mr. Dipanjan Dey</a> </p>Research Fellow, IIT Kharagpur</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Nabendu Ghosh</a> </p>Assistant Professor, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Suman Nihar</a> </p>Assistant Professor, Jadavpur University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Ranjan Kumar</a> </p>Assistant Professor, Swami Vivekananda University, Kolkata</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. B. Mouli Prasanth</a> </p>Teaching Fellow, Anna University</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Premangshu  Mukhopadhyay</a> </p>Assistant Professor, Haldia Institute of Technology</li>
                                        <li className="text-[12px] flex flex-col items-start py-1 px-2"> <p className=' text-[16px] font-bold'><a href="" className="href">Dr. Bijan Mallick</a> </p>Assistant Professor, Department of Mechanical Engineering, Global Institute of Management & Technology</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                
            
        </div>
    )
}
export default Committee;