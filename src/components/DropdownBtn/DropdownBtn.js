import React, { useState } from "react";
import "./Dropdown.scss";
import { SlArrowDown } from "react-icons/sl";

function DropdownBtn(props) {

  return (
    <div className="dropdown">
      <button className="dropdownButton">
        {props.icon}
        <div className="text">{props.text}</div>
        <SlArrowDown size={12} color="#787486" />
      </button>
        <div className="dropdownContent">
          <a href="/">Option 1</a>
          <a href="/">Option 2</a>
          <a href="/">Option 3</a>
        </div>
    </div>
  );
}

export default DropdownBtn;
