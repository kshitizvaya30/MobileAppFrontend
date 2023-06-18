import React from "react";
import Avatar from "../../components/AvatarInvite/Avatar";
import LowerSidebar from "../../components/LowerSidebar/LowerSidebar";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ThoughtTime from "../../components/ThoiughtTime/ThoughtTime";
import ProfileIcon from "../../assets/profile.svg";
import "./HomePage.scss";
import { BsPlusSquare } from "react-icons/bs";
import { RiPencilLine } from "react-icons/ri";
import { FiLink2 } from "react-icons/fi";
import DropdownBtn from "../../components/DropdownBtn/DropdownBtn";
import { CiFilter, CiCalendarDate } from "react-icons/ci";
import Equals from '../../assets/Equals.svg';
import FourCircle from '../../assets/FourCircle.svg';

function HomePage() {
  return (
    <div className="homeContainer">
      <div className="leftContainer">
        <Sidebar />
        <div className="underline"></div>
        <LowerSidebar />
        <ThoughtTime />
      </div>
      <div className="rightContainer">
        <Navbar />

        {/* Heading Container */}
        <div className="headingContainer">
          <div className="subContainer">
            <div className="mainHeading">Mobile App</div>
            <div className="icons">
              <RiPencilLine size={20} />
            </div>
            <div className="icons">
              <FiLink2 />
            </div>
          </div>

          <div className="AvatarContainer">
            <div className="inviteSection">
              <BsPlusSquare
                color="#5030E5"
                style={{
                  borderRadius: "3px",
                  backgroundColor: "rgba(80,48,229,0.2)",
                }}
              />
              <div className="text">Invite</div>
            </div>
            <Avatar />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="BtnSection">
          <div className="dropdownBtns">
            <DropdownBtn
              text="Filter"
              icon={<CiFilter size={16} color="#787486" />}
            />
            <DropdownBtn
              text="Today"
              icon={<CiCalendarDate size={19} color="#787486" />}
            />
          </div>
          <div className="rightBtnSection">
            <div className="primaryBtn">
              <img src={ProfileIcon} alt="ProfileIcon" />
              <div className="text">Share</div>
            </div>
            <div className="bar"></div>
            <div className="icon1"><img src={Equals} alt="equal Img" /></div>
            <div className="icon2"><img src={FourCircle} alt="equal Img" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
