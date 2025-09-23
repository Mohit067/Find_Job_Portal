import { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

export const Hero = () => {

  const {setSearchFilter, setIsSearched}  = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value
    });
    setIsSearched(true);
  }

  return (
    <div className="max-w-6xl max-auto m-auto   ">
      <div className=" mt-9 mb-9 rounded-md bg-gradient-to-r from-purple-800 via-pink-600 to-amber-500  py-16 px-6 flex justify-center">
        <div className="max-w-4xl w-full text-center text-white">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold">
            Over 10,000+ jobs to apply
          </h2>
          <p className="mt-2 text-gray-100 text-base sm:text-lg">
            Your Next Big Career Move Starts Right Here
          </p>

          {/* Search Bar */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-stretch bg-white rounded-lg shadow-md overflow-hidden
 "
          >
            {/* Job Search */}
            <div className="flex items-center gap-3 px-4 py-3 w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-gray-300">
              <img
                src={assets.search_icon}
                alt="search"
                className="w-5 h-5 opacity-60"
              />
              <input
                type="text"
                placeholder="Search for jobs"
                className="w-full text-gray-700 text-sm sm:text-base outline-none"
                ref={titleRef}
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 px-4 py-3 w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-300">
              <img
                src={assets.location_icon}
                alt="location"
                className="w-5 h-5 opacity-60"
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full text-gray-700 text-sm sm:text-base outline-none"
                ref={locationRef}
              />
            </div>

            {/* Search Button */}
            <button onClick={onSearch} className="px-6 py-2 rounded text-white m-1 bg-blue-600 ml-7">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex justify-center">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img className="h-6 " src={assets.microsoft_logo} alt="" />
          <img className="h-6 " src={assets.walmart_logo} alt="" />
          <img className="h-6 " src={assets.accenture_logo} alt="" />
          <img className="h-6 " src={assets.samsung_logo} alt="" />
          <img className="h-6 " src={assets.amazon_logo} alt="" />
          <img className="h-6 " src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
};
