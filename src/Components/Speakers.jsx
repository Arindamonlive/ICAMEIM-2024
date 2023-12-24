import img from '../assets/Speakers.png';
const Speakers = () => {
    return (
      <div id="Speakers" className="bg-gray-100 lg:py-2">
        <h1 className="" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
          <ul className='text-[55px] lg:py-5 ml-10 flex flex-col justify-center font-bold text-white'>Speakers</ul>
        </h1>
  
        <h2 className="text-[22px] lg:px-10 py:5">Plenary Speaker I:</h2>
        <ul>
          <li className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
  
        <h2 className="text-[22px] lg:px-10 py:5">Plenary Speaker II:</h2>
        <ul>
          <li className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
  
        <h2 className="text-[22px] lg:px-10 py:5">Plenary Speaker III:</h2>
        <ul>
          <li className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
  
        <h2 className="text-[22px] lg:px-10 py:5">Plenary Speaker IV:</h2>
        <ul>
          <li className="text-[18px] lg:px-5 text-gray-600">Speaker Name</li>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Abstract:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Abstract details
            </p>
          </div>
          <div className="text-[16px] lg:px-10 text-gray-600 font-semibold">
            Bio-Sketch:
            <p className="text-[14px] lg:px-10 text-gray-600 font-bold">
              Speakers biography
            </p>
          </div>
        </ul>
      </div>
    );
  };
  
  export default Speakers;
  