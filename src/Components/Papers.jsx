import img from '../assets/Papers.jpg';
const Papers=()=>{
    return(
        <div id="Papers" className='font-arial'>
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Call for Papers</ul></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
   
                        <div className="container">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:py-4">Topics</h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                        Papers are invited on the following areas, but not limited to:
                                        </p>
                                        <li className="flex items-center py-1 px-8">&#x2713; Advanced Manufacturing Processes</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Green and Sustainable Manufacturing</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Thermal Engineering for Sustainable Development</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Mechanical Design for Sustainable Development</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Smart Technologies in Mechanical Engineering</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Industrial Engineering and Managements</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; CAD/CAM/CAE/ Reverse Engineering</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Micro and Nano Manufacturing and Precision Engineering</li>
                                        <li className="flex items-center py-1 px-8">&#x2713; Miscellaneous Topics in Mechanical Engineering</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                        <div className="container bg-gray-200">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Important Dates</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="items-start">
                                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:py-4 px-8">Important Dates</h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg:py-6">
                                    <table className="table-auto mx-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2"></th>
                                            <th className="px-4 py-2">Details</th>
                                            <th className="px-4 py-2">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-2">&#x2713;</td>
                                            <td className="px-4 py-2">Deadline for full paper Submission:</td>
                                            <td className="px-4 py-2 font-semibold">30<sup>th</sup> January, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">&#x2713;</td>
                                            <td className="px-4 py-2">Notification of Paper Acceptance:</td>
                                            <td className="px-4 py-2 font-semibold">6<sup>th</sup> February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">&#x2713;</td>
                                            <td className="px-4 py-2">Camera-ready Paper Submission Deadline:</td>
                                            <td className="px-4 py-2 font-semibold">15<sup>th</sup> February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">&#x2713;</td>
                                            <td className="px-4 py-2">Deadline of Registration:</td>
                                            <td className="px-4 py-2 font-semibold">20<sup>th</sup> February, 2024</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2">&#x2713;</td>
                                            <td className="px-4 py-2">Conference Date:</td>
                                            <td className="px-4 py-2 font-semibold">11<sup>th</sup> to 13<sup>th</sup> March, 2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                
            
        </div>
    )
}
export default Papers;