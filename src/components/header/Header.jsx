import React from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Abhideep Ghosh</h1>
        <h5 className="text-light">A Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          {/* <img src={ME} alt="me" /> */}
          <img
            src="https://camo.githubusercontent.com/97d1828fe16ccca3417229fc085cfc96062bd74c8787f80131ddc9462ce4ed51/68747470733a2f2f736f6669616e6568616d6c616f75692e6769746875622e696f2f6a756e6b2f6c6f636b646f6f722f6c6f676f732f6c6f676f323035783235302e676966?raw=true"
            alt="me"
          />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
