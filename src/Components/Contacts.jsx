import img from '../assets/Contacts.png';

const Contacts = () => {
    return (
        <div id="Contacts" className="font-arial flex flex-col">
            <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
            >
                <ul className="text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white">
                    Contact Us
                </ul>
            </h1>
            <p className="text-2xl flex items-center justify-center">
                Feel free to contact us with your Questions and Query.
            </p>
            <div className="flex flex-row">
            <div className="container flex items-center mb-6">
                <div className="lg:items-end">
                    <ul className="lg:py-2 text-center">
                        <div className="flex">
                            <div className="container items-center text-center">
                                <h1 className='text-4xl'>Contact Person</h1>
                                <p>For General Question and Query Contact <p className='font-bold text-blue-600'>Dr. Somanth Das<p>icameim2024@gmail.com</p></p></p>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            
            <div className="container items-center mb-6">
                <h1 className='text-4xl items-center text-center'>Write to us</h1>
                <form action="" className="flex flex-col gap-2 lg:flex">
                    <div className="lg:flex flex flex-col gap-p">
                        <input className="w-full lg:my-3  my-4 rounded-lg bg-orange-100 p-1 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Enter your Name' type="text" />
                        <input className="w-full lg:my-3  my-4 rounded-lg bg-orange-100 p-1 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Enter your Email' type="text" />
                        <input className="w-full lg:my-3  my-4 rounded-lg bg-orange-100 p-1 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Phone-number with country code' type="text" />
                        <input className="w-full lg:my-3  my-4 rounded-lg bg-orange-100 p-1 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Whatsapp number with country code' type="text" />
                        <input className="w-full lg:my-3  my-4 rounded-lg bg-orange-100 p-1 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Organization' type="text" />
                        <input className="w-full lg:my-3  my-4 rounded-lg bg-orange-100 p-1 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Designation' type="text" />
                    </div>
                    <textarea className="w-full my-3 rounded-lg bg-orange-100 p-2 border-2 border-orange-400 b_glow text-xl text-slate-500" placeholder='Write your Message' name="" id="" cols="5" rows="5"></textarea>
                    <button className="neno-button shadow-xl hover: shadow-green-400 text-white border-2 bg-orange-400 hover:bg-blue-600 rounded-lg py-4 px-8 my-6 relative overflow-hidden b_glow text-xl text-bold mb-4 " type="submit">Submit</button>
                </form>
            </div>
            </div>
            
        </div>
    );
}

export default Contacts;
