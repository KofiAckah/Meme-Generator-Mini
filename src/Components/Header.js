import React from "react";
import Logo from "../Images/Troll Face.png";

function Header() {
  return (
    <header className="headColor flex p-3 items-center">
      <img src={Logo} alt="Problem?" className="w-14" />
      <h2 className="ml-2 text-2xl text-white">Meme Generator</h2>
    </header>
  );
}

export default Header;
