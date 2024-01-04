import React from "react";
import "./Header.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          All your business
          <p className="text">Banking in One </p>
          <span>platform</span>
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          quibusdam esse minima magnam recusandae. Unde tempora molestiae
          blanditiis magni dolore.
        </p>

        <div className="nav__right">
          <div>
            <div>
              <MdOutlineArrowOutward />
            </div>
            <p>get Started</p>
          </div>
        </div>

        <div className="header__left_bottom">
          <p>
            Already started? <span>Finish your Application</span>
          </p>
        </div>
      </div>

      <div className="header__middle">
        <img
          src="https://previews.123rf.com/images/comzeal/comzeal2009/comzeal200900016/155985266-portrait-of-a-happy-young-woman-holding-atm-or-debit-or-credit-card-and-using-for-online-shopping.jpg"
          alt=""
        />
      </div>

      <div className="header__right">
        <div>
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />

          <div className="header__right__info">
            <div className="header__right__icon">
              <MdOutlineArrowOutward />
            </div>
            <div className="header__right__infocard">
              <p>Instant card control</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
