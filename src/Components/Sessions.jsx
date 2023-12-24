import img from '../assets/Sessions.png';
const Sessions=()=>{
    return(
        <div id="Sessions">
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}><ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Sessions</ul></h1>
                <div className="">
                    <h2 className="text-[20px] lg:px-10 text-left font-semibold"> Special Session</h2>
                    <ul className="">
                        <p className="text-[18px]  lg:px-10 text-justify">
                        The ICAMEIM-2024 conference invites submissions for special session proposals within its technical scope. These special sessions aim to enhance the conference's regular program by showcasing cutting-edge research in special, novel, challenging, and emerging topics from both academia and industry.
                        Prospective organizers interested in proposing special sessions are encouraged to submit their proposals. Organizers should commit to actively promoting and overseeing the review process of their special session, serving as Chairs or Co-Chairs for the event. The submitted proposals should include the following information:
                        </p>
                    </ul>

                </div>
            
        </div>
    )
}
export default Sessions;