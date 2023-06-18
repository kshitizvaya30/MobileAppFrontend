import React from "react";
import { FiSearch } from "react-icons/fi";
import "./Navbar.scss";
import { BsCalendar3Week } from "react-icons/bs";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import profileImg from '../../assets/image1.png'

function Navbar() {
  return (
    <div className="navbarContainer">

      <div className="searchContainer">
      <div className="searchBar">
       <FiSearch  size={20} color="#787486" />
        <input type="text" placeholder="Search for anything..." />
      </div>
        </div>
      <div className="icons">
        <BsCalendar3Week size={20} />
        <RiQuestionnaireLine size={25} />
        <div className="bellIcon">
            <div className="dot"></div>
          <IoIosNotificationsOutline size={25} />
        </div>
      </div>
      <div className="profileContainer">
        <div className="textContainer">
          <div className="name">Anima Agarwal</div>
          <div className="location">U.P ,India</div>
        </div>
        <div className="profilePic">
            <img src={profileImg} alt="profilePic" />
        </div>
        <SlArrowDown size={18} color="#292D32"/>
      </div>
    </div>
  );
}

export default Navbar;
