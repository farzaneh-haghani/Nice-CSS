import React, { useEffect, useState } from "react";
import { IoSettings } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoMdPhotos, IoMdContact } from "react-icons/io";
import "../Styles/NavBar1.css";
import { Link } from "react-router-dom";

const NavBar1 = () => {
  const [isActive, setIsActive] = useState("Home");

  return (
    <div className="navigation">
      <ul>
        <li
          className={isActive === "Home" ? "list active" : "list"}
          onClick={() => setIsActive("Home")}
        >
          <Link className="link">
            <span className="icon">
              <FaHome />
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li
          className={isActive === "Profile" ? "list active" : "list"}
          onClick={() => setIsActive("Profile")}
        >
          {console.log(isActive)}
          <Link className="link">
            <span className="icon">
              <IoMdContact />
            </span>
            <span className="text">Profile</span>
          </Link>
        </li>
        <li
          className={isActive === "Messages" ? "list active" : "list"}
          onClick={() => setIsActive("Messages")}
        >
          <Link className="link">
            <span className="icon">
              <BiSolidMessageRoundedDetail />
            </span>
            <span className="text">Messages</span>
          </Link>
        </li>
        <li
          className={isActive === "Photos" ? "list active" : "list"}
          onClick={() => setIsActive("Photos")}
        >
          <Link className="link">
            <span className="icon">
              <IoMdPhotos />
            </span>
            <span className="text">Photos</span>
          </Link>
        </li>
        <li
          className={isActive === "Settings" ? "list active" : "list"}
          onClick={() => setIsActive("Settings")}
        >
          <Link className="link">
            <span className="icon">
              <IoSettings />
            </span>
            <span className="text">Settings</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  );
};

export default NavBar1;
