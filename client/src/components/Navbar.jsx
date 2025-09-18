import React from "react";
import { assets } from "../assets/assets";

export const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10 cursor-pointer" />

        {/* Buttons */}
        <div className="space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Recruiter Login
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
