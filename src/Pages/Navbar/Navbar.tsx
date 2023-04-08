import React from "react";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const { username } = useSelector((state: any) => state.user);

  const handleLogout = () => {
    navigate("/");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  };

  return (
    <div className="bg-gray-800 h-12 w-full flex text-[20px] justify-between pl-7 pr-7  text-white py-4 items-center">
      <div className="text-yellow-500">Contacts Book</div>
      <div className="text-green-500 gap-5 items-center flex">
        <AccountCircleIcon />
        <div>{username && username} </div>
      </div>
      <div onClick={handleLogout} className="cursor-pointer text-red-600">
        Logout
      </div>
    </div>
  );
};

export default Navbar;
