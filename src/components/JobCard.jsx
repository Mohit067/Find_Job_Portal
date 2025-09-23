import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 flex flex-col justify-between">
      
      {/* Top: Icon + optional posted date */}
      <div className="flex justify-between items-center mb-3">
        <img
          className="h-10 w-10 object-contain"
          src={assets.company_icon}
          alt={`${job.title} company icon`}
        />
        {job.postedDate && (
          <span className="text-xs text-gray-400">{job.postedDate}</span>
        )}
      </div>

      {/* Title */}
      <h4 className="text-gray-900 font-bold text-lg sm:text-xl mb-2 line-clamp-2">
        {job.title}
      </h4>

      {/* Badges: Location & Level */}
      <div className="flex flex-wrap gap-2 mb-3 text-sm">
        <span className="bg-blue-50 border border-blue-200 text-blue-700 px-3 py-1 rounded-full">
          {job.location}
        </span>
        <span className="bg-red-50 border border-red-200 text-red-700 px-3 py-1 rounded-full">
          {job.level}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-gray-600 text-sm mb-5 line-clamp-4"
        dangerouslySetInnerHTML={{ __html: job.description }}
      ></p>

      {/* Buttons: Always at bottom */}
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer">
          Apply Now
        </button>
        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-200 font-medium cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
