import React from "react";
import logo from "../../assets/colorfilter.svg";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import MessageIcon from "../../assets/message.svg";
import SettingIcon from "../../assets/setting.svg";
import ProfileIcon from "../../assets/profile.svg";
import CategoryIcon from "../../assets/task-square.svg";
import HomeIcon from "../../assets/category.svg";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebarContainer">
        
      <div className="mainHeadingContainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mainHeading">Project M.</div>
        <div className="arrow">
          <HiOutlineChevronDoubleLeft size={20} color="#787486"/>
        </div>
      </div>

      <div className="subHeading">
        <div className="icon">
          <img src={HomeIcon} alt="home-icon" />
        </div>
        <div className="label">Home</div>
      </div>

      <div className="subHeading">
        <div className="icon">
          <img src={MessageIcon} alt="MessageIcon" />
        </div>
        <div className="label">Messages</div>
      </div>

      <div className="subHeading">
        <div className="icon">
          <img src={CategoryIcon} alt="CategoryIcon" />
        </div>
        <div className="label">Tasks</div>
      </div>

      <div className="subHeading">
        <div className="icon">
          <img src={ProfileIcon} alt="ProfileIcon" />
        </div>
        <div className="label">Members</div>
      </div>

      <div className="subHeading">
        <div className="icon">
          <img src={SettingIcon} alt="SettingIcon" />
        </div>
        <div className="label">Settings</div>
      </div>
    </div>
  );
}

export default Sidebar;
