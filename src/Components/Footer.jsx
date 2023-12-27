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
                    <ul className="text-[16px] my-2 text-blue-200">
                        <li className="my-0">
                            <a href="https://drive.google.com/file/d/1ixmGc70Ca06QBAK8QjbBwpk5nC8fPPAA/view?usp=sharing" download>Brochure</a>
                        </li>
                        <li className="my-0">
                            <a href="https://docs.google.com/document/d/12UOL_OB5jiTighaQr82zeOHmGaAiIyUr/edit?usp=sharing&ouid=107928771669049446287&rtpof=true&sd=true" download>Template file</a>
                        </li>
                        {/* <li className="my-0">
                            <a href="src/assets/Abstract_Template.docx" download>Abstract Template File</a>
                        </li> */}
                        {/* <li className="my-0">
                            <a href="https://docs.google.com/document/d/12UOL_OB5jiTighaQr82zeOHmGaAiIyUr/edit?usp=sharing&ouid=107928771669049446287&rtpof=true&sd=true" download>Writing Tips</a>
                    </li>*/}
                        </ul> 

                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-semibold text-white py-2 ">Contact</h2>
                    <p className="text-[16px] my-0 font-bold">Dr. Somnath Das</p>
                    <p className="text-[16px] my-0">Email: <span className="font-bold">icameim2024@gmail.com</span></p>
                </div>

            </div>
                  <div className="text-white text-[12px] text-center mt-5">
        &copy; {currentYear} ICAMEIM-2024. All rights reserved. Developed By Mr. Arindam Chakraborty +91-9830410335/arindamckbt@gmail.com
      </div>
        </footer>
    )
}
export default Footer;