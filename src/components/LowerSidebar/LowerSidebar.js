import React from "react";
import './LowerSidebar.scss'
import { BsPlusSquare } from "react-icons/bs";
import {RxDotFilled, RxDotsHorizontal} from 'react-icons/rx';

function LowerSidebar() {
  return (
    <div className="LowerSidebarContainer">
      <div className="headingContainer">
        <div className="heading">MY PROJECTS</div>
        <div className="icon">
          <BsPlusSquare color="#787486" style={{borderRadius: '3px'}} />
        </div>
      </div>

      <div className="subHeading">
        <RxDotFilled color="#7AC555" size={25} />
        <div className="label">Mobile App</div>
        <div className="icon">
          <RxDotsHorizontal />
        </div>
      </div>

      <div className="subHeading">
        <RxDotFilled color="#FFA500" size={25}  />
        <div className="label">Website Redesign</div>
        <div className="icon">
          <RxDotsHorizontal />
        </div>
      </div>

      <div className="subHeading">
        <RxDotFilled color="#E4CCFD" size={25} />
        <div className="label">Design Systems</div>
        <div className="icon">
          <RxDotsHorizontal />
        </div>
      </div>

      <div className="subHeading">
        <RxDotFilled color="#76A5EA" size={25} />
        <div className="label">WireFrames</div>
        <div className="icon">
          <RxDotsHorizontal />
        </div>
      </div>
    </div>
  );
}

export default LowerSidebar;
