import "../styles/header.css";
import logo from "../assets/images/logo.png";
import TeamLinks from "./teamLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="hdr">
        <div className="hdr-rt">
          <div className="hdr-rt-box"></div>
        </div>
        <div className="hdr-lt">
          <Link to="/" className="hdr-home">
            <div>
              <img src={logo} alt="logo" className="hdr-logo" />
            </div>
            <div className="hdr-title">Fantasy Eleven</div>
          </Link>
        </div>
      </div>
      <TeamLinks />
    </>
  );
};

export default Header;
