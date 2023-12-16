import { NavLink } from "react-router-dom";
import { ColorButtonSolid } from "../components/colorBtnSolid";
import bg from "../assets/images/rainbow.webp";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${bg})`,
      }}
    >
      <div
        style={{
          width: "500px",
          height: "200px",
          padding: "2rem",
          color: "white",
          // border: "1px solid #dae3e5",
          borderRadius: ".5rem",
          background: "rgba(255, 255, 255, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <hr style={{ width: "100px" }} />
        <NavLink to={"/"}>
          <ColorButtonSolid size="small" variant="outlined">
            Fantasy Eleven
          </ColorButtonSolid>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
