import neon from "../assets/images/neon-wht.webp";
import { Typography } from "@mui/material";
import Copyright from "./copyright";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="divider1"></div>
      <div className="footer-container">
        <div className="space">
          <Copyright />
        </div>
        <div className="footer-logo">
          <img src={neon} alt="neon" className="foot-img" />
        </div>
        <div className="space">
          <Typography variant="body2" color="text.secondary" align="center">
            Premier League & Fantasy Premier League
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
