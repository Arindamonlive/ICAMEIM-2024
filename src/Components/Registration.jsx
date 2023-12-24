import img from '../assets/Registration.jpg';

const Registration = () => {
  return (
    <div id="Registration" className="font-arial">
      <h1
        className=""
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}
      >
        <ul className="text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white">
          Registration Guidelines
        </ul>
      </h1>
      <p className="text-2xl flex items-center justify-center">
                The full papers accepted for presentation and publication will be
                included in the proceedings with ISBN.
              </p>
      <div className="flex flex-row justify-center items-center">
        <div className="container flex items-center mb-6">
          <div className="lg:items-end">
            <ul className="lg:py-6 text-center">
              <div className="flex">
                <div className="container items-center text-center">
                  <h1 className='text-4xl'>National Candidate</h1>
                  <table className="table-auto mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Registration Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Academia:</td>
                        <td className="px-4 py-2 font-semibold">INR 3000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">R&D Centres & Industry:</td>
                        <td className="px-4 py-2 font-semibold">INR 3000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Full Time Research Scholars and Students:</td>
                        <td className="px-4 py-2 font-semibold">INR 2500</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Female Registration (Student):</td>
                        <td className="px-4 py-2 font-semibold">INR 2000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Guest / Attendee:</td>
                        <td className="px-4 py-2 font-semibold">INR 1000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="container items-center text-center">
                  <h1 className='text-4xl'>International Candidates</h1>
                  <table className="table-auto mx-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Registration Fees(USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Academia & Industry:</td>
                        <td className="px-4 py-2 font-semibold">$ 250</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Full Time Research Scholars and Students:</td>
                        <td className="px-4 py-2 font-semibold">$ 150</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">&#x2713;</td>
                        <td className="px-4 py-2">Guest / Attendee:</td>
                        <td className="px-4 py-2 font-semibold">$ 100</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
