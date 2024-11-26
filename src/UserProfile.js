import React from "react";

const UserProfile = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

/* Another way to write this. 
const UserProfile1 = ({name}) =>{
  return <h1>Hello, {name}!</h1>
}
  */

export default UserProfile;
