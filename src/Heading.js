import React from "react";

function Header() {
  const date = new Date();
  let hour = date.getHours();

  let heading;
  const customStyle = {
    color: "green",
  };

  if (hour < 12) {
    heading = "Good morning";
    customStyle.color = "red";
  } else if (hour < 18) {
    heading = "Good afternoon";
  } else {
    heading = "Good night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {heading}
    </h1>
  );
}

export default Header;
