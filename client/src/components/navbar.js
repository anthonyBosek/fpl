import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { ColorButtonOutlined } from "../components/colorBtnOutline";
import { logout } from "../features/user/userSlice";
import "../styles/nav.css";

const Nav = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);

  const handleClick = async () => {
    if (user) {
      const res = await axios({
        method: "DELETE",
        url: "/auth/logout",
      });
      if (res.status === 204) {
        dispatch(logout());
        toast.success("Logged out successfully!");
        nav("/");
      } else {
        toast.error("Failed to log out!");
      }
    } else {
      nav("/auth");
    }
  };

  return (
    <nav>
      <div className="nav-box">
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/premier-league">Premier League</NavLink>
          <NavLink to="/fantasy">Fantasy</NavLink>
          {user && (
            <NavLink to={`/users/${user.id}/dashboard`}>Dashboard</NavLink>
          )}
        </div>
        <div className="nav-btns">
          <ColorButtonOutlined
            size="small"
            variant="outlined"
            onClick={handleClick}
          >
            {user ? "Logout" : "Login"}
          </ColorButtonOutlined>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
