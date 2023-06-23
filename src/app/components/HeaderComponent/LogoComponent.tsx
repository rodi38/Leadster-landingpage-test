import React from "react";
import logo from "../../../../public/assets/logo.png";
import Image from "next/image";
function Logo() {
  return (
   
      <Image src={logo} alt="Picture of the author" />
  );
}

export default Logo;
