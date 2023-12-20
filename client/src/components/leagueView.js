import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { ColorButtonOutlined } from "./styledComponents/colorBtnOutline";
import quad from "../assets/images/hero2.jpg";
import neon from "../assets/images/neon-wht.webp";
import "../styles/club.css";

const LeagueView = ({ league_id, handleLeagueView }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);
  const [league, setLeague] = useState({});

  useEffect(() => {
    const getLeague = async () => {
      try {
        const res = await axios.get(`/leagues/${league_id}`);
        setLeague(res.data);
      } catch (error) {
        toast.error("Error getting league");
      }
    };
    getLeague();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${quad})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="club-view-img"
      >
        <img
          src={neon}
          alt="neon"
          className="club-view-logo"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <ColorButtonOutlined
        size="small"
        variant="outlined"
        sx={{ margin: "6px 50px 6px 0", float: "right" }}
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => handleLeagueView(null)}
      >
        Back
      </ColorButtonOutlined>
      <div className="club-view-info">
        <div className="club-view-name">{league.name}</div>
        <div className="club-view-est">{league.manager_name}</div>
      </div>
    </div>
  );
};

export default LeagueView;
