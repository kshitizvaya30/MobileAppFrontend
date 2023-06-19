import React from "react";
import "./Avatar.scss";
import profileImg2 from "../../assets/Ellipse 12.png";
import profileImg3 from "../../assets/Ellipse 13.png";
import profileImg4 from "../../assets/Ellipse 14.png";
import profileImg5 from "../../assets/Ellipse 15.png";

function Avatar({extraVisible}) {
  const profileImages = [
    profileImg2,
    profileImg3,
    profileImg4,
    profileImg5
  ];

  return (
    <div className="avatarGroup">
      {profileImages.map((image, index) => (
        <div className="avatar" key={index}>
          <img src={image} alt="profileImg" />
        </div>
      ))}
      {extraVisible && <div className="hiddenAvatar">+2</div>}
    </div>
  );
}

export default Avatar;
