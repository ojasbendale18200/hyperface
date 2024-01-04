import React from "react";
import "./Navbar.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoEarth } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div>
          <IoEarth />
        </div>
        <h2>nova</h2>
      </div>

      <div className="nav__list">
        <div className="nav__list_item">
          <p>Buisness Checking</p>
          <span>></span>
        </div>
        <div className="nav__list_item">
          <p>Solution</p>
          <span>></span>
        </div>
        <div className="nav__list_item">
          <p>Resources</p>
          <span>></span>
        </div>
        <div className="nav__list_item">
          <p>Results</p>
          <span>></span>
        </div>
        <div className="nav__list_item">
          <p>Contact</p>
          <span>></span>
        </div>
      </div>

      <div className="nav__right">
        <p>Log in</p>
        <div>
          <div>
            <MdOutlineArrowOutward />
          </div>
          <p>get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
