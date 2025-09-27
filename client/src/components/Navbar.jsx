import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Navbar = () => {
  const { openSignIn } = useClerk();
  const {user} = useUser();
  const { setShowRucruiterLogin } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white shadow-md ">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-10 cursor-pointer" />

        {user ? <div className="flex items-center gap-3">
          <Link to={'/applications'}>Applied Job</Link>
          <p>|</p>
          <p className="hidden sm:block">Hi, {user.firstName+" "+user.lastName}</p>
          <UserButton />
        </div> : (
          <div  className="space-x-4">
            <button onClick={e=> setShowRucruiterLogin(true)} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition cursor-pointer">
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
