import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children }) => {return(
    <div>
    <h1 style={{color:"red", }}>{fullName}</h1>
    <h3>{profession}</h3>
    <p style={{color:"blue", }}>{bio}</p>
    {children}
    </div>
)};
Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
   };
export default Profile;