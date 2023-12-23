const Footer =() => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-orange-600 items-center text-white lg:px-48 py-2'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="mb-4 md:mb-0">
                    <span className="text-3xl font-semibold text-white py-2 ">
                    ICAMEIM-2024 News
                    </span>
                    <p className="text-[16px] my-0">News and Updates like date or etc</p>
                </div>
                <div className="">
                    <h2 className="text-[22px] font-semibold text-white py-2 ">
                        Important Links
                    </h2>
                    <ul className="text-[16px] my-2">
                            <li className='my-0'>Brochure</li>
                            <li className='my-0'>Template file</li>
                            <li className='my-0'>Abstract Template File</li>
                            <li className='my-0'>Writing Tips</li>
                        </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-white py-2 ">Contact</h2>
                    <p className="text-[16px] my-0 font-bold">Dr. Somnath Das</p>
                    <p className="text-[16px] my-0">Email: <span className="font-bold">icameim2024@gmail.com</span></p>
                </div>

            </div>
                  <div className="text-white text-[15px] text-center mt-5">
        &copy; {currentYear} ICAMEIM-2024. All rights reserved. Developed By Mr. Arindam Chakraborty +91-9830410335/arindamckbt@gmail.com
      </div>
        </footer>
    )
}
export default Footer;