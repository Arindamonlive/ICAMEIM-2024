import img from '../assets/Sessions.png';
const Sessions=()=>{
    return(
        <div id="Sessions" className='font-arial'>
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Sessions</ul></h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
   
                        <div className="container">
                            {/* <h2 className="text-2xl lg:text-4xl font-semibold mb-4">Special Session</h2> */}
                            <div className="flex items-start mb-6">
                                <div className="ml-5">
                                    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 lg:py-4">Special Session</h2>
                                </div>
                                <div className="items-end">
                                    <ul className="lg: py-6">
                                        <p className="text-[18px] lg:px-10 py-2 text-justify">
                                            The ICAMEIM-2024 conference invites submissions for special session proposals within its technical scope. These special sessions aim to enhance the conference's regular program by showcasing cutting-edge research in special, novel, challenging, and emerging topics from both academia and industry. Prospective organizers interested in proposing special sessions are encouraged to submit their proposals. Organizers should commit to actively promoting and overseeing the review process of their special session, serving as Chairs or Co-Chairs for the event. The submitted proposals should include the following information:
                                        </p>
                                        <li className="flex items-center py-4 px-8">&#x2713; Title</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Organizer general information (Mailing Address of concern person with the biodata)</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Brief description of the special session</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Topics</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Participants</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Description of publicity and promotion plan</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Send the proposal at committee@ICAMEIM.com in PDF format.</li>
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
                                        <li className="flex items-center py-4 px-8 text-red-600">&#x2713; Deadline for session proposal: 02.02.2024</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Acceptance notification by: 10.02.2024</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Complete set of special session: 12.03.2024</li>
                                        <li className="flex items-center py-4 px-8">&#x2713; Please provide all the information requested above when preparing your special-session proposal before submitting it in PDF format by E-mail to committee@ICAMEIM.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                
            
        </div>
    )
}
export default Sessions;