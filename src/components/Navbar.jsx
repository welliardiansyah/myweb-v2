import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import PDF from "../NEOBIT.pdf";
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="https://bscscan.com/address/0x0b4D95fd2F9b6B1d2d3F0d65990597EE483264B1" target="_blank">Contract</a>
          </li>
          <li>
            <a href="#launch">Audit (Coming Soon)</a>
          </li>
          <li>
            <a href={PDF} target="_blank">Whitepaper</a>
          </li>
          <li>
            <a href="https://exchange.neobit.tech" target="_blank">
              <button>Launch Apps</button>
            </a>
          </li>
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
