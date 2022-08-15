import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="left">
          <Image src="/images/logo.png" alt="logo" width={64} height={64} />
          <h1>FINDO</h1>
        </div>
        <div className="right">
          <div className="links">
            <a href="/" className="link">
              Find Talent
            </a>
            <a href="/" className="link">
              Become a Talent
            </a>
            <a href="/" className="link">
              Services
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
