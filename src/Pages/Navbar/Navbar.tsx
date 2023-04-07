import React from "react";
import { useDispatch } from "react-redux";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  };

  return (
    <div className="bg-gray-800 h-12 w-full flex text-[20px] justify-between pl-7 pr-7  text-white py-4">
      <div className="text-yellow-500">Contacts Book</div>
      <div onClick={handleLogout} className="cursor-pointer text-red-600">
        Logout
      </div>
    </div>
  );
};

export default Navbar;
