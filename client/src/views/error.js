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
          border: "1px solid #dae3e5",
          borderRadius: ".5rem",
          background: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <h1>404 - Page Not Found</h1>
        <NavLink to={"/"}>
          <ColorButtonSolid size="small" variant="outlined">
            Home
          </ColorButtonSolid>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
