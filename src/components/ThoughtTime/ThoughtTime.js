import React from "react";
import "./ThoughtTime.scss";
import { AiFillBulb } from "react-icons/ai";

function ThoughtTime() {
  return (
    <div className="ThoughtTimeContainer">
      <div className="circle">
        <div className="icon">
          <AiFillBulb color="#FBCB18" size={25}/>
        </div>
      </div>
      <div className="rectangle">
        <div className="heading">
            Thoughts Time
        </div>
        <div className="text">We don’t have any notice for you, till then you can share your thoughts with your peers.</div>
        <input type="text" placeholder="Write a Message"/>
      </div>
    </div>
  );
}

export default ThoughtTime;
