import React from "react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
function Logo() {
  return (
    <div className="flex justify-center bg-gray-50">
      <Image src={logo} alt="Picture of the author" />
    </div>
  );
}

export default Logo;
